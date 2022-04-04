import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { RitchTextEditor } from "../RitchTextEditor";
import { ArticleThumbnailProps } from "../ArticleThumbnail/ArticleThumbnail.types";
import { useNavigate } from "react-router-dom";

type ArticleFormProps = {
  article?: ArticleThumbnailProps;
  onSubmit?: (article: ArticleThumbnailProps) => void;
  onDelete?: () => void;
}

export const ArticleForm: React.FC<ArticleFormProps> = ({ 
  article,
  onSubmit,
  onDelete
 }) => {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [imagem, setImagem] = useState("");
  const [conteudo, setConteudo] = useState("");
  const navigate = useNavigate();

  const isEditing = !!article;
  const greetingMessage = isEditing ? 
    "basta alterar as informações para editá-las. Depois basta salvar." : 
    "por favor preencha os dados e salve para continuar.";

  useEffect(() => {
    if (article) {
      setTitulo(article.titulo);
      setResumo(article.resumo);
      setImagem(article.imagem);
      setConteudo(article.conteudo || '');
    }
  }, [article]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      const articleToSubmit = {
        ...article,
        titulo,
        resumo,
        imagem,
        conteudo,
      };
      onSubmit(articleToSubmit as ArticleThumbnailProps)
    }
  }

  const transformaImagemEmBase64 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setImagem(event.target.result);
    };
  };

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className="grid min-h-screen mx-10 ">
      <div>
        <button 
          className="
            mb-3 text-blue-500 text-lg border-2 border-blue-500 p-1 rounded-md
            hover:bg-blue-500 hover:text-white duration-100
          " 
          onClick={handleGoBack}
        >
          Voltar
        </button>
        <h1 className="text-xl font-semibold">
          Olá 👋,&nbsp;
          <span className="font-normal">{greetingMessage}</span>
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <Input
            placeholder="Digite aqui o título"
            type="text"
            name="titulo"
            label="Titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <Input
            placeholder="Breve resumo do artigo"
            type="textarea"
            name="resumo"
            label="Resumo"
            value={ resumo }
            onChange={(e) => setResumo(e.target.value)}
            required
          />

          <Input
            placeholder="Imagem da chamada do artigo"
            type="file"
            name="image"
            label="Banner"
            onChange={transformaImagemEmBase64}
            required={!imagem}
          />

          <RitchTextEditor
            label="Conteúdo"
            name="conteudo"
            value={ conteudo }
            onChange={ setConteudo }
          />

          <div className="flex gap-8 w-full">
            {article && <Button type="submit" color="red" onClick={onDelete}>Deletar</Button>}
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};