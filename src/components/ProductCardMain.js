import axios from 'axios'
import React, { Component } from 'react'
import {ContainerCard,ImageCard,PCard,ButtonCard } from './Styled/StyledProductCard'
import {ProductCardItem} from './Styled/StyledProductPage'
import {MainStyled,FiltroQuantidade} from './Styled/StyledMain'



export class ProductCardMain extends Component {
state ={
  cars:[]    
}

componentDidMount = () =>{
  this.getCars()
}

getCars =() => {
  axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars')
  .then((res) =>{
    this.setState({cars:res.data.cars})
    console.log(this.state.cars)
  })
  .catch((err) =>{
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
              <PCard> ${car.price}</PCard>        
              <ButtonCard>Comprar</ButtonCard>
            </ContainerCard>

          )
      })}
      
      </MainStyled>

      <FiltroQuantidade>Temos {filteredCars.length} carros esperando por você!</FiltroQuantidade>

    </ProductCardItem>

    )
  }
}
