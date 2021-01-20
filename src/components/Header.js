import React, { Component } from 'react'
import { HeaderBar, MidlleStyled, NameStyled, Button, ImgLogo, HeaderStyled } from './StyledHeader'


export class Header extends Component {
  render() {
    return (
    <HeaderStyled>
      <ImgLogo src= "https://i.imgur.com/jz0OHrk.png" />
      <HeaderBar>
         <MidlleStyled>
          <NameStyled onClick={this.props.home}>FutureCar</NameStyled>
          <Button onClick={this.props.sell}>Venda</Button>
          <Button onClick={this.props.buy}>Compra</Button>
        </MidlleStyled>
      </HeaderBar>
      </HeaderStyled>
    );
  }
}
