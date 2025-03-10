import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { Spinner } from "../../components/Spinner";
import apiClient from "../../services/api-client";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [loading, setLoading] = useState(false);

  const buscaArtigos = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<ArticleThumbnailProps[]>(
        '/artigos'
      );
      setArticles(response.data);
    } catch (error) {
      toast.error('Erro ao carregar artigos');
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscaArtigos();
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
      <ArticleList
        articles={articles}
      />
    </div>
  );
};