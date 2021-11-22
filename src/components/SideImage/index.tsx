import * as C from './styles';
import splashimage from '../../assets/images/splash.png';

export const SideImage = () => {
  return(
    <C.Container>
      <img src={splashimage} alt="imagem-side-telas-login"></img>
    </C.Container>
  );
};