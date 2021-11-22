import { useNavigate } from 'react-router-dom';
import { Theme } from '../../Theme';
import * as C from './styles';

export const EsqueciSenha = () => {
  const navigate = useNavigate();

  const handleVoltarLogin = () => {
        navigate('/');
}

const handleCodigoValidacao= () => {
  navigate('/codigoValidacao');
}


  return(
    <Theme>
     <C.Container>
       <C.Título>Esqueci minha senha</C.Título>
       <C.Texto>Insira seu e-mail cadastrado para recuperar sua senha</C.Texto>
       <C.ContainerInput>
         <C.CampoInput>E-mail</C.CampoInput>
        <C.InputTexto />
       </C.ContainerInput>
       <C.Entrar onClick={handleCodigoValidacao}>Confirmar E-mail</C.Entrar>
       <C.PerguntaConta>Já possui uma conta?</C.PerguntaConta>
       <C.CrieConta onClick={handleVoltarLogin}>Clique aqui</C.CrieConta>
     </C.Container>
    </Theme>
  );
};