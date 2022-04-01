export type ArticleThumbnailProps = {
  id: string;
  imagem: string;
  titulo: string;
  resumo: string;
  dataPublicacao: Date;
  tempoLeitura?: string;
  autor: {
    nome: string;
    avatar: string;
  };
  editavel?: boolean;
}
