import React, { Component } from 'react'
import { Detalhes, ProductStyled, DetalhesCarro, ButtonCard, Contato, Inputs } from './Styled/CarDetailsStyled'

export class CarDetails extends Component {
  state = {
    DetailPage: true,
    ContatoPage: false,
  }

  ChangePage = () => {
    this.setState({
      DetailPage: !this.state.DetailPage,
      ContatoPage: !this.state.ContatoPage,
    })
    if (this.state.ContatoPage) {
      alert("Pedido Enviado, Entraremos em contato em Breve")
    }
  }

  ShowPage = () => {
    if (this.state.DetailPage) {
      return (
        <Detalhes>
          <img width='80%' src="https://1.bp.blogspot.com/-j5yZskmK3Dw/XQpNS-UzYfI/AAAAAAAABWQ/YSo8CML66x4ikE7lNL3-fLZig8gKbkXzgCLcBGAs/s1600/novo-peugeot-2008-2020%2B%252814%2529.jpg"></img>
          <DetalhesCarro>
            <p>price:car.price</p>
            <p>name:car.name</p>
            <p>shipping:car.envio</p>
            <p>description:car.description</p>
            <p>paymentMethod:car.pagamento</p>
          </DetalhesCarro>
        </Detalhes>
      )
    } else
      return (
        <Contato>
          <Inputs>
            <label htmlFor="input1"> Nome: </label>
            <input id="input1" />
          </Inputs>
          <Inputs>
            <label htmlFor="input2"> E-mail: </label>
            <input id="input2" />
          </Inputs>
          <Inputs>
            <label htmlFor="input3"> Telefone: </label>
            <input id="input3" />
          </Inputs>
          <Inputs>
            <p><label htmlFor="textarea"> Descreva o veículo: </label></p>
            <textarea id="textarea" rows="7" cols="60" />
            <br />
          </Inputs>
        </Contato>
      )
  }
  render() {

    return (

      <ProductStyled>
        {this.ShowPage()}
        <ButtonCard onClick={this.ChangePage}>{(this.state.DetailPage ? "Fale com o vendedor" : "Enviar")}</ButtonCard>
      </ProductStyled>


    )
  }
}
