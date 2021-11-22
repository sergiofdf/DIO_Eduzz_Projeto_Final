import styled from "styled-components";

export const CardsArea = styled.div`
  display: flex;
  margin: 48px 0;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
`;

export const CardROI = styled.div`
  background-color: #1F1E5A;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 150px;
  width: 303px;
  max-width: 303px;
  padding: 0 0 0 16px;
`;

export const CardValores = styled.div`
  border: solid 1px #B0BEC5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 150px;
  width: 303px;
  max-width: 303px;
  padding: 0 0 0 16px;
`;

export const TextoCards = styled.p`
  color: #F18018;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const IconeCards = styled.img`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export const ValorROI = styled.p`
  color: #fff;
  font-size: 24px;
`;

export const ValoresCards = styled.p`
  color: #37474F;
  font-size: 24px;
`;
