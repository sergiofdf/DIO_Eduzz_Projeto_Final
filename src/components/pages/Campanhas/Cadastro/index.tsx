import { HeaderCampanhas } from '../Header';
import { FormCadastro } from './Form';
import * as C from './styles';

export const CadastroCampanha = () => {

  return(
    <>
    <HeaderCampanhas />
    <C.Container>
      <C.ContainerTextos>
        <C.Titulo>Campanhas</C.Titulo>
        <C.Texto>Cadastre uma nova campanha</C.Texto>
      </C.ContainerTextos>
      <FormCadastro />
    </C.Container>
    </>
  );
};