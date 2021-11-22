import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import calendario from '../../../../../assets/images/calendario.svg';

export const FormCadastro = () => {
  const navigate = useNavigate();

  return(
    <C.Container>
      <C.ContainerInput>
         <C.CampoInput>Nome da Campanha</C.CampoInput>
        <C.InputTexto />
      </C.ContainerInput>
      <C.ContainerInput>
         <C.CampoInput>Link</C.CampoInput>
        <C.InputTexto placeholder="https://minha-campanha.exemplo.com" />
      </C.ContainerInput>
      <C.ContainerInput>
         <C.CampoInput>Fonte</C.CampoInput>
        <C.InputTexto placeholder="Facebook" />
      </C.ContainerInput>
      <C.ContainerDuasColunas>
        <C.ContainerInputDuasColunas>
          <C.CampoInput>Valor Investido</C.CampoInput>
          <C.InputTexto placeholder="R$" />
        </C.ContainerInputDuasColunas>
        <C.ContainerInputDuasColunas>
          <C.CampoInput>Valor Faturado (Opcional)</C.CampoInput>
          <C.InputTexto placeholder="R$" />
        </C.ContainerInputDuasColunas>
      </C.ContainerDuasColunas>
      <C.ContainerDuasColunas>
        <C.ContainerInputDuasColunas>
          <C.CampoInput>Data de início</C.CampoInput>
          <C.IconeCalendario src={calendario}/>
          <C.InputTexto placeholder="Insira a data de início" />
        </C.ContainerInputDuasColunas>
        <C.ContainerInputDuasColunas>
          <C.CampoInput>Data de término</C.CampoInput>
          <C.IconeCalendario src={calendario}/>
          <C.InputTexto placeholder="Insira a data de término" />
        </C.ContainerInputDuasColunas>
      </C.ContainerDuasColunas>
      <C.ContainerDuasColunas>
        <C.Cancelar>Cancelar</C.Cancelar>
        <C.Botao>Salvar Campanha</C.Botao>
      </C.ContainerDuasColunas>
    </C.Container>
  );
};