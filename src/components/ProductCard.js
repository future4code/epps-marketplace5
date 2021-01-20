import React, { Component } from 'react'
import {ProductCardItem } from './Styled'
import styled from 'styled-components'

const ContainerCard = styled.div`
  height: 80%;
`;
const ImageCard = styled.img`
  height: 70%;
  width: 100%;
`;
const PCard = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold
`;
const ButtonCard = styled.button`
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

export class ProductCard extends Component {
  // state = {
  //   productlist: [
  //     {
  //       id: 1,
  //       name: "BMW M8",
  //       value: 350.000,
  //       imageUrl: 'https://pictures.dealer.com/v/vossvillagebmw/1745/48dbc7ac417d1f8d4adb212238cce97ax.jpg',
  //     },
  //     {
  //       id: 2,
  //       name: "Gol",
  //       value: 35.000,
  //       imageUrl: "https://3.bp.blogspot.com/-6SXEMEm9aWk/WwNYQWmJd-I/AAAAAAAAFh8/HICG8oC5fyMWeqyrGYUeep0e-AUpH63gACLcBGAs/s1600/VW-Gol-2023.jpg"
  //     },
  //     {
  //       id: 3,
  //       name: "Vectra",
  //       value: 15.0,
  //       imageUrl: "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/03/12204146/chevrolet-cruze-sport6-premier-2020.jpg"
  //     },
  //     {
  //       id: 4,
  //       name: "Ford Ka",
  //       value: 15.0,
  //       imageUrl: "https://production.autoforce.com/uploads/version/profile_image/3538/model_main_comprar-s-1-0_d9bdffd21f.png"
  //     },
  //     {
  //       id: 5,
  //       name: "Astra",
  //       value: 15.0,
  //       imageUrl: "https://www.planetcarsz.com/assets/uploads/VAUXHALL%20ASTRA%202020%2001.jpg"
  //     },
  //     {
  //       id: 6,
  //       name: "Pegout",
  //       value: 15.0,
  //       imageUrl: "https://1.bp.blogspot.com/-j5yZskmK3Dw/XQpNS-UzYfI/AAAAAAAABWQ/YSo8CML66x4ikE7lNL3-fLZig8gKbkXzgCLcBGAs/s1600/novo-peugeot-2008-2020%2B%252814%2529.jpg",
  //     }
  //   ]
  // }
  render() {
    return (

      <ProductCardItem>
        <ContainerCard>
        <ImageCard src= "https://1.bp.blogspot.com/-j5yZskmK3Dw/XQpNS-UzYfI/AAAAAAAABWQ/YSo8CML66x4ikE7lNL3-fLZig8gKbkXzgCLcBGAs/s1600/novo-peugeot-2008-2020%2B%252814%2529.jpg" alt= "BMW" />
        <PCard>BMW M8</PCard>
        <PCard>R$ 350.000,00</PCard>
        <ButtonCard>Comprar</ButtonCard>
        </ContainerCard>
      </ProductCardItem>
      

    )
  }
}
