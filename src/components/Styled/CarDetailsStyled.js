import styled from  'styled-components'


export const ProductStyled = styled.div`
display:grid;
width: 100vw;
height:90%;
align-items:center;
justify-items:center;
justify-content:space-between;
z-index:0;
`
export const DetalhesCarro = styled.div`
width: 90%;
height:100%;
grid-column:2;
`
export const Detalhes = styled.div`
display:grid;
grid-template-columns:50% 50%;
width: auto;
height:100%;
align-items:center;
justify-items:center;
justify-content:space-between;
`
export const Contato = styled.div`
display:flex;
width: 100vw;
height:100%;
text-align:center;
flex-direction:column;
align-items:center;
justify-items:center;
justify-content:space-between;
`
export const Inputs = styled.div`
display:flex;
width: 20vw;
height:100%;
text-align:center;
flex-direction:column;
align-items:center;
justify-items:center;
justify-content:space-between;
`

export const ButtonCard = styled.button`
  background-color: white;
  border-color: #004abe;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
  color: #004abe;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 5px ;
  width:20%;
  display:flex;
  justify-content:center;
  &:hover {
    background: #e9f0f7;
    transition: all .4s ease-in-out;
  }
`;