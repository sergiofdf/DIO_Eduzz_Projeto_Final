import { useNavigate } from 'react-router-dom';
import { HeaderCampanhas } from '../Header';
import { CardsCampanhas } from './Cards'; 
import { ListaCampanhas } from './ListaCampanhas';
import * as C from './styles';
import { LinhaTituloBotao } from './TituloeBotao';
import imagemListaVazio from '../../../../assets/images/Listavazia.png'

export const ListagemCampanhas = () => {
  const navigate = useNavigate();

  let ListaVazia = true;

  return(
    <>
    <HeaderCampanhas />
    <C.Container>
      <CardsCampanhas />
      <LinhaTituloBotao />
      {ListaVazia
      ? <ListaCampanhas />
      : <div className="imagemVazia"><img src={imagemListaVazio} alt="Sem Campanhas" /></div>
      }
    </C.Container>
    </>
  );
};