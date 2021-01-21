import React, { Component } from 'react'
import { HeaderBar, Button, ImgLogo, HeaderStyled, HeaderContainer } from './Styled/StyledHeader'


export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderStyled>
          <ImgLogo src="https://i.imgur.com/jz0OHrk.png" />
        </HeaderStyled>
        <HeaderBar>
          <Button onClick={this.props.home}>FutureCar</Button>
          <Button onClick={this.props.sell}>Venda</Button>
          <Button onClick={this.props.buy}>Compra</Button>
        </HeaderBar>
      </HeaderContainer>
    );
  }
}
