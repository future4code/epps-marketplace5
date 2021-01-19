import React, { Component } from 'react'
import { ProductListStyled, ProductStyled, ProductMenu,ProductSearch } from './Styled'

export class ProductPage extends Component {
  render() {
    return (

      <ProductStyled>
        <ProductMenu>menu</ProductMenu>
        <ProductSearch>ProductSearch</ProductSearch>
        <ProductListStyled>
          teste
          </ProductListStyled>
      </ProductStyled>

    )
  }
}
