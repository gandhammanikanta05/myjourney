import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 10%;
width: 100vw;
background-color: blue;
`

export const LogoName = styled.h1`
font-family: 'Verdana';
font-size: 30px;
font-weight: bold;
color: #ffffff;
margin-left: 30px;
`;

export const OptionsSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;

export const MyUniversity = styled.h3`
font-family: 'Verdana';
font-size: 20px;
font-weight: bold;
color: #ffffff;
`;

export const LogoutBtn = styled.button`
font-family: 'Verdana';
font-size: 20px;
font-weight: bold;
border-radius: 5px;
border-width: 0px;
border-color: none;
height: 50%;
cursor: pointer;
padding: 10px;
margin-right: 30px;
margin-left: 30px;
`;