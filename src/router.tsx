import {Routes, Route} from 'react-router-dom';
import { Login } from './components/pages/Login';
import { CreateAccount } from './components/pages/CreateAccount';
import { EsqueciSenha } from './components/pages/EsqueciSenha';
import CodigoValidacao from './components/pages/CodigoValidacao/CodigoValindex';
import { RedefinirSenha } from './components/pages/RedefinirSenha';
import { ListagemCampanhas } from './components/pages/Campanhas/Listagem';
import { CadastroCampanha } from './components/pages/Campanhas/Cadastro';



export const Router = () => {
  return(
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/criarConta" element={<CreateAccount />} />
        <Route path="/esqueciSenha" element={<EsqueciSenha />} />
        <Route path="/codigoValidacao" element={<CodigoValidacao />} />
        <Route path="/redefinirSenha" element={<RedefinirSenha />} />
        <Route path="/listaCampanhas" element={<ListagemCampanhas />} />
        <Route path="/cadastroCampanha" element={<CadastroCampanha />} />
      </Routes>
  );
}