import styled from  'styled-components'

export const FooterStyled = styled.div`
display: grid;
grid-template-rows: repeat(2,1fr);
background-color: #dc312e;
width: 100vw;
height: 100%;
align-items: center;
justify-content: center;
`
export const MidlleStyled = styled.div`
display: inline-flex;
flex-direction: row;
`
 
export const NameStyled = styled.p`
color: white;
margin-right: 22vw;
text-align: center;
font-size: 30px;
`

export const Button = styled.button`
margin-right: 8vw;
padding: 3vh 6vw;
background-color: white;
font-size: 20px;
`