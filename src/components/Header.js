import React, { Component } from 'react'
import { FooterStyled, MidlleStyled, NameStyled, Button } from './StyledHeader'


export class Header extends Component {
  render() {
    return (
      <FooterStyled>
        <MidlleStyled>
          <NameStyled onClick={this.props.home}>FutureCar</NameStyled>
          <Button onClick={this.props.sell}>Venda</Button>
          <Button onClick={this.props.buy}>Compra</Button>
        </MidlleStyled>
      </FooterStyled>
    );
  }
}
