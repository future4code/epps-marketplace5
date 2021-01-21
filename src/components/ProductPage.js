import React, { Component } from 'react'
import axios from 'axios'
import { ProductCard } from './ProductCard'
import { ProductListStyled, ProductStyled, ProductMenu, ProductSearch, ProductCardItem, InputBusca } from './Styled/StyledProductPage'
import {ContainerCard, PCard, ImageCard} from './Styled/StyledProductCard'

export class ProductPage extends Component {
  state = {
    productlist: [],
    inputMin: 0,
    inputMax: 100000,
    inputText: '',
    inputDate: '',
  }

  componentDidMount() {
    this.getAllCars()
  }

  getAllCars = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars')
    .then((response) => {
      this.setState({ productlist: response.data.cars })
      console.log( response.data.cars )
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onChangeFilterMin = (e) => {
    this.setState({ inputMin: e.target.value})
  }

  onChangeFilterMax = (e) => {
    this.setState({ inputMax: e.target.value})
  }

  onChangeFilterText = (e) => {
    this.setState({ inputText: e.target.value})
  }

  onChangeFilterDate = (e) => {
    this.setState({ inputDate: e.target.value})
  }

  ListaFiltrada = () =>{
    const listaFiltradaNome = this.state.productlist.filter(item => item.name.includes(this.state.inputText))
    const listaFiltradaMin = listaFiltradaNome.filter(item => item.price >= this.state.inputMin)
    const listaFiltradaMax = listaFiltradaMin.filter(item => item.price <= this.state.inputMax)
    const listaFiltradaDate = listaFiltradaMax.filter(item => item.shipping <= this.state.inputDate)
    return listaFiltradaDate
  }

  render() {
    const ListaFiltrada = this.ListaFiltrada()
   
      return (
      <ProductStyled>
        <ProductMenu>
          <label for="entrega">Entrega:</label>
          <input 
          value={this.state.inputDate}
          onChange={this.onChangeFilterDate}
          type="number" placeholder='insira o número de dias' id="entrega" />
          <label for="vmin">Valor Mínimo</label>
          <input 
          value={this.state.inputMin}
          onChange={this.onChangeFilterMin}
          type="number" 
          min='0' 
          id="vmin" />
          <label for="vmax">Valor Máximo</label>
          <input 
          value={this.state.inputMax}
          onChange={this.onChangeFilterMax}
          type="number" 
          min="0" 
          id="vmax" />
        </ProductMenu>
        <ProductSearch>
        <InputBusca onChange={this.onChangeFilterText} type="text" id="título" placeholder="Busque seu carro"/>
        </ProductSearch>
        <ProductListStyled>
              
        <ProductCardItem>
          {ListaFiltrada.map((item) => {
            return (
              <ContainerCard>
                <PCard>{item.name}</PCard>
                <PCard>{item.price}</PCard>
                <ImageCard src={item.imagen}/>
              </ContainerCard>
            )
          })}
          
          </ProductCardItem>
        
        </ProductListStyled>
      </ProductStyled>

    )
  }
}

