import React, { Component } from 'react'
import styled from 'styled-components'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProductPage } from './components/ProductPage'
import { SellersPage } from './components/SellersPage'
import { Main } from './components/Main'


export const MainPageContainer = styled.div`
display: grid;
grid-template-rows: 20% 65% 15%;
flex-direction: column;
max-width: 100vw;
height: 100vh;
align-items:center;
justify-content:center;
`


export class App extends Component {
	state = {
		ProductPage: false,
		SellersPage: false,
	}

	ChangePageSell = () => {
		this.setState({
			SellersPage: !this.state.SellersPage
		})
		this.setState({
			ProductPage: false
		});
	  }
	  ChangePageBuy = () => {
		this.setState({
			ProductPage: !this.state.ProductPage
		})
		this.setState({
			SellersPage: false
		});
	  }
	  ChangePageHome = () => {
		this.setState({
			ProductPage: false,
			SellersPage: false
		})
	  }
	ShowPage = () => {
		if (this.state.ProductPage) {
			return (
				<ProductPage />
			)
		}
		else if (this.state.SellersPage) {
			return (
				<SellersPage />
			)
		}

		return (
			<Main/>
		)
	}
	render() {
		return (
			<MainPageContainer>
				<Header buy={this.ChangePageBuy} sell={this.ChangePageSell}home={this.ChangePageHome}/>
				{this.ShowPage()}
				<Footer/>
			</MainPageContainer>
		)
	}
}

export default App
