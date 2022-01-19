import styled from "styled-components";

export const Container = styled.div`
`;

export const Título = styled.h1`
  font-size: 32px;
  color: #37474F;
`;

export const Texto = styled.p`
  font-size: 16px;
  color: #546E7A;
  margin-bottom: 16px;
  
`;

export const ContainerInput = styled.div`
width: 353px;
height:56px;
margin: 5px 0;
`;

export const CampoInput = styled.p`
  background-color: #ffffff;
  color: #546E7A;
  font-size: 12px;
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
width: 331px;
height: 45px;
`;

export const IconeSenha = styled.img`
  background-color: #ffffff;
  color: #546E7A;
  z-index: 10;
  position: absolute;
  margin: 15px 320px;
`;

export const TextoEsqueci =  styled.p`
  width: 100%;
  height: 23px;
  margin: 5px 0;
  color: #1F1E5A;
  font-size: 14px;
  text-align: right;
  cursor:pointer;
`;

export const Entrar = styled.button`
  background: #F18018;
  margin: 10px 0;
  font-size: 14px;
  color: white;
  width: 353px;
  height: 40px;
  border: none;
  border-radius: 4px; 
`;

export const PerguntaConta =  styled.p`
  font-size: 14px;
  color: #546E7A;
  margin: 14px 0 0 0;
`;

export const CrieConta =  styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #1F1E5A;
  cursor: pointer;
`;
