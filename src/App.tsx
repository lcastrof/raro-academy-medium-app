import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { LoginPage } from './pages/Login';
import { ArtigosPage } from './pages/Artigos';
import { ArtigoPage } from './pages/Artigo';
import { MeusArtigosPage } from './pages/MeusArtigos';
import { EditarArquivoPage } from './pages/EditarArquivo';
import { NotFoundPage } from './pages/NotFound';
import { Layout } from './components/Layout';
import { RequireAuth } from './components/RequireAuth';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ArtigosPage />} />
          <Route path="/artigo/:id" element={<ArtigoPage />} />
          <Route element={ <RequireAuth /> }>
            <Route path="/artigos" element={<MeusArtigosPage />} />
            <Route path="/artigos/editar/:id" element={<EditarArquivoPage />} />
            <Route path="/artigos/novo" element={<EditarArquivoPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
