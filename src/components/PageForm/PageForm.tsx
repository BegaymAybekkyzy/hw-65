import { Button, Form } from "react-bootstrap";
import * as React from "react";
import { pageTitle } from "../../constants.ts";
import { useState } from "react";
import { IPageForm } from "../../types";
import axiosApi from "../../axiosApi.ts";
import Loader from "../UI/Loader/Loader.tsx";

interface Props {
  onSubmitFunction: (page: IPageForm) => void;
}

const PageForm: React.FC<Props> = ({ onSubmitFunction }) => {
  const [form, setForm] = useState<IPageForm>({
    title: "",
    content: "",
    page: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchOnePage = async (pageTitle: string) => {
    try {
      setLoading(true);
      const response = await axiosApi(`pages/${pageTitle}.json`);
      if (response.data) {
        setForm((prev) => ({
          ...prev,
          ...response.data,
          page: pageTitle,
        }));
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitFunction({ ...form });
    setForm({
      title: "",
      content: "",
      page: "",
    });
  };

  const onChangeInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, page: value }));
    void fetchOnePage(value);
  };

  let fields: React.ReactNode;

  if (loading) fields = <Loader />;
  if (!loading) {
    fields = (
      <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={onChangeInput}
            value={form.title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            onChange={onChangeInput}
            value={form.content}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </>
    );
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Select
        name="page"
        value={form.page}
        onChange={onChangeSelect}
        className="mb-3"
        aria-label="Default select example"
      >
        <option value="" disabled>
          Select a page
        </option>

        {pageTitle.map((title) => (
          <option key={title.id} value={title.id}>
            {title.title}
          </option>
        ))}
      </Form.Select>

      {fields}
    </Form>
  );
};

export default PageForm;
