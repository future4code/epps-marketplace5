import styled from  'styled-components'

export const ProductCardItem = styled.div`
width: 80%;
height:80%;
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
