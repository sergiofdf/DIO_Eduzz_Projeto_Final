import { ReactNode } from 'react';
import * as C from './styles';
import logo from '../../assets/images/logo.svg'
import { SideImage } from '../SideImage';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
}

export const Theme = ({children}: Props) => {

  const navigate = useNavigate();

  function handleLogoClick () {
    navigate('/');
  }

  return(
    <C.Container>
      <SideImage />
      <C.Conteudo> 
        <C.LogoImage src={logo} alt="logo" onClick={handleLogoClick}/>
        <C.Page>{children}</C.Page>
      </C.Conteudo>
    </C.Container>
  );
};