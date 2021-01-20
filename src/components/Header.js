import React, { Component } from 'react'
import { FooterStyled, MidlleStyled, NameStyled, Button } from './StyledHeader'


export default class Header extends Component {
  render() {
    return (
      <FooterStyled>
        <MidlleStyled>
          <NameStyled>FutureCar</NameStyled>
          <Button>Venda</Button>
          <Button>Compra</Button>
        </MidlleStyled>
      </FooterStyled>
    );
  }
}
