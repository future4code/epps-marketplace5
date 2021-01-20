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
export const HeaderStyled = styled.div`
display:grid;
grid-template-rows: repeat(2,1fr);
background-color: #6d6d6d;
width: 100vw;
height:100%;
align-items:center;
justify-content:center;
`
export const FooterStyled = styled.div`
display:grid;
grid-template-rows: repeat(2,1fr);
background-color: #dc312e;
width: 100vw;
height:100%;
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
export const ProductCardItem = styled.div`
width: 100%;
height:100%;
border: solid  black 1px;
`
export const ProductStyled = styled.div`
display:grid;
grid-template-columns:20% 80%;
grid-template-rows:20% 80%;
width: 100vw;
height:100%;
align-items:center;
justify-content:space-between;
`
export const ProductListStyled = styled.div`
display:grid;
grid-template-rows: repeat(3,1fr);
grid-template-columns:repeat(3,1fr);
width: auto;
height:100%;
align-items:center;
justify-content:space-between;
grid-column:2;
grid-row: 2;
`
export const ProductMenu = styled.div`
width: auto;
height:100%;
align-items:center;
justify-content:space-between;
grid-column:1;
grid-row: 1/3;
`
export const ProductSearch = styled.div`
width: auto;
height:100%;
align-items:center;
justify-content:space-between;
grid-column:2;
grid-row: 1;
`
// export const SellerForm = styled.div`
// display:grid;
// grid-template-rows: 20% 80%;
// grid-template-columns:1fr;
// width: auto;
// height:100%;
// align-items:center;
// justify-content:space-between;
// border: 1px solid black;
// `