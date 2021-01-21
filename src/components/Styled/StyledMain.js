import styled from  'styled-components'

export const MainContainer = styled.div`
display: grid;
grid-template-rows: 15% 85%;
flex-direction: column;
width: 100%;
height: 100%;
align-items:center;
justify-items:center;
justify-content:center;
`
export const MainStyled = styled.div`
display:grid;
grid-template-rows: repeat(2,1fr);
grid-template-columns:repeat(6,7%);
height:97%;
align-items:center;
justify-content:space-around;
`
export const FiltroQuantidade = styled.h2`
margin-top:60px;
`
export const MainSearchBar = styled.input`
background-color: white;
background-image: url('https://i.imgur.com/Gq7tAG0.png');
background-position: 10px 10px;
background-repeat: no-repeat;
background-size:5%;
text-align:center;
margin-top: 20px;
border-radius: 20px;
width: 500px;
height: 40px;
outline:none;
&:hover {
  background-color: whitesmoke;
};
`