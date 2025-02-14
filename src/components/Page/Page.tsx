import { useCallback, useEffect, useState } from "react";
import axiosApi from "../../axiosApi.ts";
import { IPage } from "../../types";
import { useParams } from "react-router-dom";
import * as React from "react";
import Loader from "../UI/Loader/Loader.tsx";

const Page = () => {
  const [pageContent, setPageContent] = useState<IPage>();
  const [loading, setLoading] = useState(false);
  const { pageName } = useParams();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi<IPage>(
        `/pages/${pageName || "home"}.json`,
      );

      setPageContent(response.data);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, [pageName]);

  useEffect(() => {
    void fetchData();
  }, [fetchData, pageName]);

  let content: React.ReactNode;

  if (loading) content = <Loader />;
  if (!loading) {
    if (pageContent) {
      content = (
        <>
          <h1>{pageContent.title}</h1>
          <p>{pageContent.content}</p>
        </>
      );
    }
  }

  return <div>{content}</div>;
};

export default Page;
