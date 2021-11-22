import * as C from './styles';
import Facebook from '../../../../../assets/images/Facebook.png'
import Dots from '../../../../../assets/images/dots.png'

export const ListaCampanhas = () => {

  return(
    <C.Container>
      <C.Tabela>
        <C.Linha>
          <C.Cabecalho>Fonte</C.Cabecalho>
          <C.Cabecalho>Campanha</C.Cabecalho>
          <C.Cabecalho>Investimento</C.Cabecalho>
          <C.Cabecalho>Faturamento</C.Cabecalho>
          <C.Cabecalho>Início</C.Cabecalho>
          <C.Cabecalho>Término</C.Cabecalho>
          <C.Cabecalho>ROI</C.Cabecalho>
          <C.Cabecalho>Ações</C.Cabecalho>
        </C.Linha>
        <C.Linha>
          <C.Dados>
            <C.Icones src={Facebook} alt="Icone Fonte" />
          </C.Dados>
          <C.Dados>Dia das Mães 2021 - Facebook</C.Dados>
          <C.Dados>R$ 379,37</C.Dados>
          <C.Faturamento>R$ 1.259,93</C.Faturamento>
          <C.Dados>20/04/2021</C.Dados>
          <C.Dados>05/05/2021</C.Dados>
          <C.Dados>32.2%</C.Dados>
          <C.Dados>
            <C.Icones src={Dots} alt="icone menu"/>
          </C.Dados>
        </C.Linha>
      </C.Tabela>
    </C.Container>
  );
};