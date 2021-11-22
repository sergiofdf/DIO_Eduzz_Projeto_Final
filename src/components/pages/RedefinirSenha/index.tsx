import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../Theme';
import * as C from './styles';
import iconeSenha from '../../../assets/images/eye-password.svg'

export const RedefinirSenha = () => {
  const navigate = useNavigate();

  const handleVoltarLogin = () => {
        navigate('/');
}
  return(
    <Theme>
     <C.Container>
       <C.Título>Redefinir Senha</C.Título>
       <C.Texto>Defina sua nova senha</C.Texto>
       <C.ContainerInput>
         <C.CampoInput>Senha</C.CampoInput>
         <C.IconeSenha src={iconeSenha}/>
        <C.InputTexto type="password"/>
       </C.ContainerInput>
       <C.ContainerInput>
         <C.CampoInput>Confirmar nova senha</C.CampoInput>
         <C.IconeSenha src={iconeSenha}/>
        <C.InputTexto type="password"/>
       </C.ContainerInput>
       <C.Entrar>Redefinir Senha</C.Entrar>
       <C.PerguntaConta>Já possui uma conta?</C.PerguntaConta>
       <C.CrieConta onClick={handleVoltarLogin}>Clique aqui</C.CrieConta>
     </C.Container>
    </Theme>
  );
};