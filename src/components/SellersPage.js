import React, { Component } from 'react'
import styled from 'styled-components'
// import { SellerForm } from './Styled'


const SellerForm = styled.div`
display:grid;
grid-template-rows: 50% 50%;
grid-template-columns:1fr;
width: auto;
height:100%;

`
const FormTop = styled.div`
Display: grid;
grid-template-rows: 50% 50%;
grid-template-columns: repeat(4,1fr);
gap: 8%;
margin-top: 1%;
margin-left: 20%;
width: 60%;
height:95%;
cursor: pointer;
// border: 1px solid black;
`

const FormBottom= styled.div`
width: auto;
height:80%;
margin-left: 32%;
// border: 1px solid black;
`

const LastButton = styled.p`
margin: auto;
margin-left: 22%;
// border: 1px solid black;
`


export class SellersPage extends Component {

  render() {
    return (
      
      <SellerForm>

        <FormTop>

          <div>
          <label for="input1"> Marca: </label>          
          <input id="input1"/>
          </div>

          <div>
          <label for="input2"> Modelo: </label>
          <input id="input2"/>
          </div>

          <div>
          <label for="input3"> Cor: </label>
          <input id="input3"/>
          </div>

          <div>

          <label for="input4"> Ano: </label>
          <input id="input4"/>
          
          </div>

          <div>
          <label for="input5"> Preço: </label>
          <input id="input5"/>
          </div>

          <div>
            
          <label for="input6"> Forma de Pagamento: </label>
          <input id="input6"/>
          </div>

          <div>
          <label for="input7"> Prazo de Entrega: </label>
          <input id="input7"/>
          </div>

          <div>
          <label for="input8"> Categoria: </label>
          <input id="input8"/>
          </div>

         </FormTop>
        
        

        <FormBottom>
        
        <p><label for="textarea"> Descreva o veículo: </label></p>

        <textarea id="textarea" rows="7" cols="60" />

        <LastButton>
          <button>Cadastrar</button>
        </LastButton>

        </FormBottom>
       
      </SellerForm>
      
    )
  }
}
