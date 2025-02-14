import PageForm from "../../components/PageForm/PageForm.tsx";
import axiosApi from "../../axiosApi.ts";
import { IPageForm } from "../../types";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const pageEditing = async (page: IPageForm) => {
    if (!page) {
      alert("Page not found");
      return;
    }
    try {
      await axiosApi.put(`pages/${page.page}.json`, {
        ...page,
        title: page.title,
        content: page.content,
      });
      navigate(`/pages/${page.page}`);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="mt-5">
      <h1 className="mb-3">Edit pages</h1>
      <PageForm onSubmitFunction={pageEditing} />
    </div>
  );
};

export default Admin;
