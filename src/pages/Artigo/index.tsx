import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../components/ArticleView";
import { Spinner } from "../../components/Spinner";
import apiClient from "../../services/api-client";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<string>('');
  const [autor, setAutor] = useState({
    nome: '',
    avatar: '',
  });
  const [loading, setLoading] = useState(false);
  const [dataPublicacao] = useState(new Date());
  const { id } = useParams();

  useEffect(() => {
    async function loadArticle() {
      try {
        setLoading(true);
        const response = await apiClient.get<ArticleThumbnailProps>(`/artigos/${id}`);
        const article = response.data.conteudo;
        setAutor({ 
          nome: response.data.autor.nome,
          avatar: response.data.autor.avatar,
        });
        setArticle(article);
      } catch (error) {
        toast.error('Erro ao carregar artigo');
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    
    loadArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-10">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="m-10">
      <ArticleView
        article={article}
        autor={autor}
        dataPublicacao={dataPublicacao}
        tempoLeitura={ '10min' }
      />
    </div>
  );
};