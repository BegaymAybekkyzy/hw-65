import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../../axiosApi.ts';
import { IPage } from '../../../types';
import { useParams } from 'react-router-dom';
import * as React from 'react';

const MainPageBlock = () => {
  const [pageContent, setPageContent] = useState<IPage>();
  const {pageName} = useParams();

  const fetchData = useCallback(async () => {
    try {
      const response =
        await axiosApi<IPage>(`/pages/${pageName || 'home'}.json`);

      setPageContent(response.data);
    } catch (e) {
      alert(e)
    }
  }, [pageName])

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  let content: React.ReactNode;
  if (pageContent) {
    content = (
      <>
        <h1>{pageContent.title}</h1>
        <p>{pageContent.content}</p>
      </>
    )
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default MainPageBlock;