// import axios from 'axios'
import React, { Component } from 'react'
import { MainContainer, MainSearchBar} from './Styled/StyledMain'
import {ProductCard1} from './ProductCard1'



export class Main extends Component {
//   state ={
//     cars:[]    
// }

// componentDidMount = () =>{
//   this.getCars()
// }

// getCars =() => {
//   axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars')
//   .then((res) =>{
//     this.setState({cars:res.data})
//     console.log({res})
//   })
//   .catch((err) =>{
//     console.log(err)
//   })
// }
state={
  textInput:""
}

onChangeInput = (e) =>{
  this.setState({textInput:e.target.value}) 
}

  render() {
  
    return (
      <MainContainer>

      
        <MainSearchBar type="text" placeholder='Busque Seu Futuro Carro Aqui' 
        
        onChange = {this.onChangeInput} 
        
        value={this.state.textInput}></MainSearchBar>
       
        {/* <MainStyled> */}
                      
        <ProductCard textInput={this.state.textInput}/>
      
        {/* </MainStyled> */}
      </MainContainer>
    )
  }
}
