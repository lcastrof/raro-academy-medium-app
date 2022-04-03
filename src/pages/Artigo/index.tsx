import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../components/ArticleView";
import apiClient from "../../services/api-client";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<string>('');
  const [autor, setAutor] = useState({
    nome: '',
    avatar: '',
  });
  const [dataPublicacao] = useState(new Date());
  const { id } = useParams();

  useEffect(() => {
    async function loadArticle() {
      const response = await apiClient.get<ArticleThumbnailProps>(`/artigos/${id}`);
      const article = response.data.conteudo;
      setAutor({ 
        nome: response.data.autor.nome,
        avatar: response.data.autor.avatar,
      });
      setArticle(article);
    }
    
    loadArticle();
  }, [id]);

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