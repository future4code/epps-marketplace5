import React, { Component } from 'react'
import { SellerForm, FormTop, FormBottom, LastButton } from './StyledSellers'

export class SellersPage extends Component {

  render() {
    return (

      <SellerForm>
        <FormTop>

          <div>
            <label htmlFor="input1"> Marca: </label>
            <input id="input1" />
          </div>

          <div>
            <label htmlFor="input2"> Modelo: </label>
            <input id="input2" />
          </div>

          <div>
            <label htmlFor="input3"> Cor: </label>
            <input id="input3" />
          </div>

          <div>

            <label htmlFor="input4"> Ano: </label>
            <input id="input4" />

          </div>

          <div>
            <label htmlFor="input5"> Preço: </label>
            <input id="input5" />
          </div>

          <div>

            <label htmlFor="input6"> Forma de Pagamento: </label>
            <input id="input6" />
          </div>

          <div>
            <label htmlFor="input7"> Prazo de Entrega: </label>
            <input id="input7" />
          </div>

          <div>
            <label htmlFor="input8"> Categoria: </label>
            <input id="input8" />
          </div>

        </FormTop>



        <FormBottom>

          <p><label htmlFor="textarea"> Descreva o veículo: </label></p>

          <textarea id="textarea" rows="7" cols="60" />

          <LastButton>
            <button>Cadastrar</button>
          </LastButton>

        </FormBottom>

      </SellerForm>

    )
  }
}
