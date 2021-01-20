import React, { Component } from 'react'
import { ProductCard } from './ProductCard'
import { ProductListStyled, ProductStyled, ProductMenu, ProductSearch, InputBusca } from './StyledProductPage'

export class ProductPage extends Component {
  render() {
    return (

      <ProductStyled>
        <ProductMenu>
          <label for="título">Modelo(?):</label>
          <input type="text" id="título" />
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
