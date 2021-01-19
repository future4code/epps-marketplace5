import React, { Component } from 'react'
import { ProductCard } from './ProductCard'
import { ProductListStyled, ProductStyled, ProductMenu,ProductSearch } from './Styled'

export class ProductPage extends Component {
  render() {
    return (

      <ProductStyled>
        <ProductMenu>menu</ProductMenu>
        <ProductSearch>ProductSearch</ProductSearch>
        <ProductListStyled>
        <ProductCard>
          
          </ProductCard>     
        </ProductListStyled>
      </ProductStyled>

    )
  }
}
