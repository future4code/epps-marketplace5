import styled from  'styled-components'

export const MainContainer = styled.div`
display: grid;
grid-template-rows: 15% 70% 15%;
flex-direction: column;
max-width: 100vw;
height: 100vh;
align-items:center;
justify-content:center;
`

export const MainStyled = styled.div`
display:grid;
grid-template-rows: repeat(3,1fr);
grid-template-columns:repeat(3,1fr);
width: 100vw;
height:90%;
align-items:center;
justify-content:space-between;
gap:1%;
background-color: green;
`