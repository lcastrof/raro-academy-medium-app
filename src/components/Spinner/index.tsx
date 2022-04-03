import { SpinnerProps } from "./Spinner.type";

export const Spinner: React.FC<SpinnerProps> = ({ size = 64, color = '#44c2fd' }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div 
        className="border-b-2 border-900 rounded-full animate-spin" 
        style={{ width: size, height: size, borderColor: color }} 
      />
      <span>Carregando ...</span>
    </div>
  );
};
