import { ReactNode } from 'react';
import * as C from './styles';
import logo from '../../assets/images/logo.svg'
import { SideImage } from '../SideImage';

type Props = {
  children: ReactNode;
}

export const Theme = ({children}: Props) => {
  return(
    <C.Container>
      <SideImage />
      <C.Conteudo> 
        <C.LogoImage src={logo} alt="logo"/>
        <C.Page>{children}</C.Page>
      </C.Conteudo>
    </C.Container>
  );
};