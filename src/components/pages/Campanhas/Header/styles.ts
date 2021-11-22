import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content:space-between;
  border-bottom: 1px solid #B2BCC0; 
`;

export const Logo = styled.img`
  max-width:100px;
  margin: 10px 0 10px 170px; 
`;

export const User = styled.div`
  display: flex;
  max-width:250px;
  align-items: center; 
  font-family: 'Open Sans', sans-serif;
  margin: 10px 170px 10px 0px;   
`;

export const UserLogo = styled.div`
  color: white;
  background-color: #F18018;
  width: 32px;
  height: 32px;
  display:flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #1F1E5A;
  text-transform: uppercase;
`;
