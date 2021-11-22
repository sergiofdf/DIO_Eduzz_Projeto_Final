import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../Theme';
import * as C from './styles';
import iconeSenha from '../../../assets/images/eye-password.svg'

export const CreateAccount = () => {
  const navigate = useNavigate();

  const handleVoltarLogin = () => {
        navigate('/');
}
  return(
    <Theme>
     <C.Container>
       <C.Título>Criar conta</C.Título>
       <C.Texto>Não possui uma conta? Cadastre-se agora</C.Texto>
       <C.ContainerInput>
         <C.CampoInput>Nome/Razão social</C.CampoInput>
        <C.InputTexto />
       </C.ContainerInput>
       <C.ContainerInput>
         <C.CampoInput>E-mail</C.CampoInput>
        <C.InputTexto />
       </C.ContainerInput>
       <C.ContainerInput>
         <C.CampoInput>Senha</C.CampoInput>
         <C.IconeSenha src={iconeSenha}/>
        <C.InputTexto type="password"/>
       </C.ContainerInput>
       <C.Entrar>Cadastrar</C.Entrar>
       <C.PerguntaConta>Já possui uma conta?</C.PerguntaConta>
       <C.CrieConta onClick={handleVoltarLogin}>Clique aqui</C.CrieConta>
     </C.Container>
    </Theme>
  );
};