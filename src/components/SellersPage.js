import React, { Component } from 'react'
import { SellerForm, FormTop, FormBottom, LastButton } from './Styled/StyledSellers'
import axios from 'axios'

export class SellersPage extends Component {
    state = {
      inputMarca: "",
      inputModelo: "",
      inputUrl: "",
      inputAno: "",
      inputPreco: "",
      inputFormaDePagamento: "",
      inputPrazoDeEntrega: "",
      inputCategoria: "",
      inputDescricao: ""
    }

    changeInputMarca = (e) => {
      this.setState({inputMarca: e.target.value})
    }

    changeInputModelo = (e) => {
      this.setState({inputModelo: e.target.value})
    }

    changeInputUrl = (e) => {
      this.setState({inputUrl: e.target.value})
    }

    changeInputAno = (e) => {
      this.setState({inputAno: e.target.value})
    }

    changeInputPreco = (e) => {
      this.setState({inputPreco: e.target.value})
    }

    changeInputFormaDePagamento = (e) => {
      this.setState({inputFormaDePagamento: e.target.value})
    }

    changeInputPrazoDeEntrega = (e) => {
      this.setState({inputPrazoDeEntrega: e.target.value})
    }

    changeInputCategoria = (e) => {
      this.setState({inputCategoria: e.target.value})
    }

    changeInputDescricao = (e) => {
      this.setState({inputDescricao: e.target.value})
    }

    AddCarsForm = (e) => {
      e.preventDefault()
      const body = {
        name: this.state.inputMarca,
        imagen: this.state.inputUrl,
        description: this.state.inputDescricao,
        price: this.state.inputPreco,
        paymentMethod: this.state.inputFormaDePagamento,
        shipping: this.state.inputPrazoDeEntrega
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars', body 
    ).then(response => {
      this.setState({ 
      inputMarca: "",
      inputModelo: "",
      inputUrl: "",
      inputAno: "",
      inputPreco: "",
      inputFormaDePagamento: "",
      inputPrazoDeEntrega: "",
      inputCategoria: "",
      inputDescricao: ""})
      alert("Veículo cadastrado com sucesso!")
    }).catch(err => {
      alert("Houve um erro, tente novamente mais tarde...")
    })

    }

  render() {
    return (

      <SellerForm>
        <FormTop>

          <div>
            <label htmlFor="input1"> Marca: </label>
            <input 
            id="input1"
            placeholder="Insira a marca do veículo"
            type="text"
            value={this.state.inputMarca}
            onChange={this.changeInputMarca}
             />
          </div>

          <div>
            <label htmlFor="input2"> Modelo: </label>
            <input 
            id="input2"
            placeholder="Insira o modelo do veículo"
            type="text"
            value={this.state.inputModelo}
            onChange={this.changeInputModelo} />
          </div>

          <div>
            <label htmlFor="input3"> Url: </label>
            <input 
            id="input3"
            placeholder="Insira a URL da imagem"
            type="text"
            value={this.state.inputUrl}
            onChange={this.changeInputUrl} />
          </div>

          <div>

            <label htmlFor="input4"> Ano: </label>
            <input 
            id="input4"
            placeholder="Insira o ano do veículo"
            type="text"
            value={this.state.inputAno}
            onChange={this.changeInputAno} />

          </div>

          <div>
            <label htmlFor="input5"> Preço: </label>
            <input 
            id="input5"
            placeholder="Ex: 25.000"
            type="number"
            value={this.state.inputPreco}
            onChange={this.changeInputPreco} />
          </div>

          <div>

            <label htmlFor="input6"> Forma de Pagamento: </label>
            <input 
            id="input6"
            placeholder="À Vista, Cartão, PIX..."
            type="text"
            value={this.state.inputFormaDePagamento}
            onChange={this.changeInputFormaDePagamento} />
          </div>

          <div>
            <label htmlFor="input7"> Prazo de Entrega: </label>
            <input 
            id="input7"
            placeholder="Quantos dias?"
            type="number"
            value={this.state.inputPrazoDeEntrega}
            onChange={this.changeInputPrazoDeEntrega} />
          </div>

          <div>
            <label htmlFor="input8"> Categoria: </label>
            <input 
            id="input8"
            placeholder="Esportivo, popular, pickup..."
            type="text"
            value={this.state.inputCategoria}
            onChange={this.changeInputCategoria} />
          </div>

        </FormTop>



        <FormBottom>

          <p><label htmlFor="textarea"> Descreva o veículo: </label></p>

          <textarea 
          id="textarea" 
          rows="7" 
          cols="60"
          placeholder="Descreva melhor a sua proposta de venda aqui."
          type="text"
          value={this.state.inputDescricao}
          onChange={this.changeInputDescricao}
           />

          <LastButton>
            <button onClick={this.AddCarsForm}>Cadastrar</button>
          </LastButton>

        </FormBottom>

      </SellerForm>

    )
  }
}
