import { useNavigate } from "react-router-dom";

export const EmptyMessage: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/artigos/novo");
  };

  return (
    <div className="flex flex-col items-center justify-center m-10">
      <div className="bg-gray-200 rounded-lg p-10">
        <h1 className="text-gray-600 text-center text-lg font-bold">Nenhum artigo publicado ainda.</h1>
         <p className="text-gray-600 text-center text-base">
           Você pode criar um artigo clicando no botão abaixo.
         </p>
          <button 
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mt-8 w-full"
            onClick={handleRedirect}
          >
            Criar artigo
          </button>
      </div>
    </div>
  );
};
