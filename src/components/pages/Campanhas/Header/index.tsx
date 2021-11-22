import * as C from './styles';
import logo from '../../../../assets/images/logo.svg'


export const HeaderCampanhas = () => {

  return(
    <C.Header>
      <C.Logo src={logo} alt="logo"/>
      <C.User>
        <C.UserLogo>S</C.UserLogo>
        <C.UserName>Sérgio F. Dias Filho</C.UserName>
      </C.User>
    </C.Header>
  );
};