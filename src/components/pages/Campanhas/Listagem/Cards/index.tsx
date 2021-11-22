import * as C from './styles';
import update from '../../../../../assets/images/update.svg'
import carrinho from '../../../../../assets/images/carrinho.svg'
import money from '../../../../../assets/images/money.svg'


export const CardsCampanhas = () => {

  return(
    <C.CardsArea>
      <C.CardROI>
        <C.TextoCards>Média de ROI das Campanhas</C.TextoCards>
        <C.ValorROI>43.2%</C.ValorROI>
        <C.IconeCards src={update} alt="icone-update" />
      </C.CardROI>
      <C.CardValores>
        <C.TextoCards>Valor Total Faturado</C.TextoCards>
        <C.ValoresCards>R$ 56.239,65</C.ValoresCards>
        <C.IconeCards src={carrinho} alt="icone-carrinho" />
      </C.CardValores>
      <C.CardValores>
        <C.TextoCards>Valor Total Investido</C.TextoCards>
        <C.ValoresCards>R$ 18.678,94</C.ValoresCards>
        <C.IconeCards src={money} alt="icone-dinheiro" />
      </C.CardValores>
    </C.CardsArea>
  );
};