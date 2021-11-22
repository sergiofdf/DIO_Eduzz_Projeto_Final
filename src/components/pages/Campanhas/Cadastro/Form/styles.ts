import styled from "styled-components";

export const Container = styled.div`
display: block;
width: 624px
`;


export const ContainerInput = styled.div`
width: 100%;
height:56px;
margin: 5px 0;
`;

export const CampoInput = styled.p`
  background-color: #ffffff;
  color: #546E7A;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
  position: absolute;
  margin: -12px 0 0 20px;
  padding: 5px;
`;

export const InputTexto = styled.input`
border: 1px solid #B0BEC5;
padding-left: 20px;
padding-right: 0px;
border-radius: 5px;
width: 100%;
height: 80%;

  &::placeholder {
    opacity: 35%;
  }

`;

export const IconeCalendario = styled.img`
  background-color: #ffffff;
  color: #546E7A;
  z-index: 10;
  position: absolute;
  margin: 15px 270px;
`;

export const ContainerDuasColunas = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const ContainerInputDuasColunas = styled.div`
width: 45%;
height:56px;
margin: 5px 0;
`;

export const Botao = styled.button`
  background: #F18018;
  margin: 10px 0;
  font-size: 14px;
  color: white;
  width: 190px;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer; 
`;

export const Cancelar = styled.button`
  background: white;
  margin: 10px 0;
  font-size: 14px;
  color: #F18018;
  width: 190px;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer; 
  
  &:hover{
    background: #F18018;
    color: white;
  }

`;



