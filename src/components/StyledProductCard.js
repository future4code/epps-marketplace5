import styled from  'styled-components'

export const ContainerCard = styled.div`
  height: 80%;
`;
export const ImageCard = styled.img`
  height: 70%;
  width: 100%;
`;
export const PCard = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
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
  width:100%;
  display:flex;
  justify-content:center;
  &:hover {
    background: #e9f0f7;
    transition: all .4s ease-in-out;
  }
`;