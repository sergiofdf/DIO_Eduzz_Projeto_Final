import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../Theme';
import * as C from './styles';

const CodigoValidacao = () => {
  const navigate = useNavigate();

  const handleVoltarLogin = () => {
        navigate('/');
}

const handleRedefinirSenha = () => {
  navigate('/redefinirSenha');
}

  return(
    <Theme>
     <C.Container>
       <C.Título>Esqueci minha senha</C.Título>
       <C.Texto>Informe o token que foi enviado no seu e-mail</C.Texto>
       <C.ContainerInput>
         <C.CampoInput>Código de Verificação</C.CampoInput>
        <C.InputTexto />
       </C.ContainerInput>
       <C.Entrar onClick={handleRedefinirSenha}>Recuperar</C.Entrar>
       <C.PerguntaConta>Já possui uma conta?</C.PerguntaConta>
       <C.CrieConta onClick={handleVoltarLogin}>Clique aqui</C.CrieConta>
     </C.Container>
    </Theme>
  );
};

export default CodigoValidacao;