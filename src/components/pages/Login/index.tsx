import { useNavigate } from 'react-router-dom';
import { Theme } from '../../Theme';
import * as C from './styles';
import iconeSenha from '../../../assets/images/eye-password.svg'

export const Login = () => {
  const navigate = useNavigate();

  const handleCriarNovaConta = () => {
        navigate('/criarConta');
}

const handleEsqueciSenha = () => {
  navigate('/esqueciSenha');
}

const handleEntrar = () => {
  navigate("/listaCampanhas");
}


  return(
    <Theme>
     <C.Container>
       <C.Título>Entrar</C.Título>
       <C.Texto>Preencha seus dados para entrar</C.Texto>
       <C.ContainerInput>
         <C.CampoInput>E-mail</C.CampoInput>
        <C.InputTexto type="text"/>
       </C.ContainerInput>
       <C.ContainerInput>
         <C.CampoInput>Senha</C.CampoInput>
         <C.IconeSenha src={iconeSenha}/>
        <C.InputTexto type="password"/>
       </C.ContainerInput>
       <C.TextoEsqueci onClick={handleEsqueciSenha}>Esqueci minha senha</C.TextoEsqueci>
       <C.Entrar onClick={handleEntrar}>Entrar</C.Entrar>
       <C.PerguntaConta>Ainda não tem uma conta?</C.PerguntaConta>
       <C.CrieConta onClick={handleCriarNovaConta}>Crie uma conta agora</C.CrieConta>
     </C.Container>
    </Theme>
  );
};