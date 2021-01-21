import React, { Component } from 'react'
import { ProductCard1 } from './ProductCard1'
import { ProductListStyled, ProductStyled, ProductMenu, ProductSearch, InputBusca } from './Styled/StyledProductPage'

export class ProductPage extends Component {
  render() {
    return (

      <ProductStyled>
        <ProductMenu>
          <label for="entrega">Entrega:</label>
          <input type="date" id="entrega" />
          <label for="vmin">Valor Mínimo</label>
          <input type="range" id="vmin" />
          <label for="vmax">Valor Máximo</label>
          <input type="range" id="vmax" />
        </ProductMenu>
        <ProductSearch>
        <InputBusca type="text" id="título" placeholder="Busque seu carro"/>
        </ProductSearch>
        <ProductListStyled>
          <ProductCard>

          </ProductCard>
        </ProductListStyled>
      </ProductStyled>

    )
  }
}
