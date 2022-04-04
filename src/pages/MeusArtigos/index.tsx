import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { Spinner } from "../../components/Spinner";
import apiClient from "../../services/api-client";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [loading, setLoading] = useState(false);

  const buscaMeusArtigos = async () => {
    try {
      setLoading(true);
  
      const response = await apiClient.get<ArticleThumbnailProps[]>(
        '/artigos/meus-artigos'
      );
      setArticles(response.data);
    } catch (error) {
      alert('Erro ao carregar artigos');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  if (loading) {
    return (
      <div className="mt-10">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};