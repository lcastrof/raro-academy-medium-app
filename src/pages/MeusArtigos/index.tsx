import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import apiClient from "../../services/api-client";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  const buscaMeusArtigos = async () => {
    const response = await apiClient.get<ArticleThumbnailProps[]>(
      '/artigos/meus-artigos'
    );
    setArticles(response.data);
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};