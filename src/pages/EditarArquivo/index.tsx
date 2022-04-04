import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import apiClient from "../../services/api-client";

export const EditarArquivoPage = () => {
  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const navigate = useNavigate();
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
        toast.success('Artigo atualizado com sucesso!');
        navigate(`/artigo/${artigo.id}`);
      } else {
        const { data: novoArtigo } = await apiClient.post('/artigos', artigo);
        toast.success('Artigo criado com sucesso!');
        navigate(`/artigo/${novoArtigo.id}`);
      }
    } catch (error) {
      console.log({ error });
      toast.error('Erro ao salvar artigo!');
    }
  }
  
  const handleDelete = async () => {
    try {
      await apiClient.delete(`/artigos/${id}`);
      toast.success('Artigo deletado com sucesso!');
      navigate('/artigos');
    } catch (error) {
      console.log({ error });
      toast.error('Erro ao deletar artigo!');
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