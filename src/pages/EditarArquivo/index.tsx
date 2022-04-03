import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import apiClient from "../../services/api-client";

export const EditarArquivoPage = () => {
  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  const handleSubmit = async (artigo: ArticleThumbnailProps) => {
    try {
      if (artigo.id) {
        await apiClient.patch(`/artigos/${artigo.id}`, artigo);
        alert('Artigo atualizado com sucesso!');
      } else {
        await apiClient.post('/artigos', artigo);
        alert('Artigo criado com sucesso!');
      }
    } catch (error) {
      console.log({ error });
      alert('Erro ao salvar artigo!');
    }
  }
  
  const handleDelete = async () => {
    try {
      await apiClient.delete(`/artigos/${id}`);
      alert('Artigo deletado com sucesso!');
    } catch (error) {
      console.log({ error });
      alert('Erro ao deletar artigo!');
    }
  }

  const buscarArtigo = async () => {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`
    );

    setArtigo(response.data);
  }

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm 
          article={artigo} 
          onSubmit={handleSubmit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};