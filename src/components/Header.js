import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
display: grid;
grid-template-rows: repeat(2,1fr);
background-color: #6d6d6d;
width: 100vw;
height: 100%;
align-items: center;
justify-content: center;
`

const ImgLogo = styled.img`
display: grid;
width: 20vw;
height: 15vh;
margin-right: 80vw
`

export class Header extends Component {
  render() {
    return (
      <HeaderStyled>
       <ImgLogo src= "https://i.imgur.com/jz0OHrk.png" />
      </HeaderStyled>
    )
  }
}
