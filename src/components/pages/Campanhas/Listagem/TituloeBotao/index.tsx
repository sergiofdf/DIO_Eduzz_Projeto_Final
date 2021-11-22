import * as C from './styles';
import { useNavigate } from 'react-router-dom';

export const LinhaTituloBotao = () => {

  const navigate = useNavigate();

  const handleNovoCadastro = () => {
    navigate('/cadastroCampanha');
  }

  return(
    <C.Container>
      <C.ContainerTextos>
        <C.Titulo>Campanhas</C.Titulo>
        <C.Texto>Gerencie suas campanhas</C.Texto>
      </C.ContainerTextos>
      <C.Botao onClick={handleNovoCadastro}>+ Cadastrar Nova Campanha</C.Botao>
    </C.Container>
  );
};