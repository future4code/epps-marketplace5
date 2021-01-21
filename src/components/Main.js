import React, { Component } from 'react'
import { ProductCard } from './ProductCard'
import { MainContainer, MainSearchBar, MainStyled} from './Styled/StyledMain'
import {ProductCardItem} from './Styled/StyledProductPage'
export class Main extends Component {
  render() {
    return (
      <MainContainer>
        <MainSearchBar placeholder='Busque Seu Futuro Carro Aqui'></MainSearchBar>
        <MainStyled>
          <ProductCard/>
        </MainStyled>
      </MainContainer>
    )
  }
}
