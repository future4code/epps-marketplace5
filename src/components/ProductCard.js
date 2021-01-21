import axios from 'axios'
import styled from 'styled-components'
import React, { Component } from 'react'
import {ContainerCard,ImageCard,PCard,ButtonCard } from './Styled/StyledProductCard'
import {ProductCardItem} from './Styled/StyledProductPage'



const MainStyled = styled.div`
display:grid;
grid-template-rows: repeat(4,1fr);
grid-template-columns:repeat(3,7%);
width: 80vw;
height:100%;
margin-top: -2%;
align-items:center;
justify-content:space-around;
gap:5%;
`
const FillroQuantidade = styled.h4`
margin-left: 35%;
`





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
state ={
  cars:[]    
}

componentDidUpdate  = () =>{
  this.getCars()
}

componentDidMount = () =>{
  this.getCars()
}

getCars =() => {
  axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars')
  .then((res) =>{
    this.setState({cars:res.data.cars})
    console.log(this.state.cars)
    // console.log({res})
  })
  .catch((err) =>{
    // console.log(err)
  })
}
filteredCars =() =>{
  return this.state.cars.filter(car => car.name.includes(this.props.textInput))
}


  render() {
    const filteredCars = this.filteredCars()
    console.log()

    return (
      <ProductCardItem>
        <MainStyled>      

      {filteredCars.map((car) => {
          return(
            <ContainerCard>              
              <ImageCard src= {car.imagen} alt= "BMW" />        
              <PCard> {car.name}</PCard>
              <PCard> {car.price}</PCard>        
              <ButtonCard>Comprar</ButtonCard>
            </ContainerCard>

          )
      })}
      
      </MainStyled>

      <FillroQuantidade><i>Temos {filteredCars.length} carros esperando por você!</i></FillroQuantidade>

    </ProductCardItem>

    )
  }
}
