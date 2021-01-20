import React, { Component } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { ProductPage } from './components/ProductPage'
import { SellersPage } from './components/SellersPage'
import { MainContainer } from './components/Styled'

export class App extends Component {
	render() {
		return (
			<MainContainer>
				<Header></Header>
				<Main></Main>
				<ProductPage></ProductPage>
				<SellersPage></SellersPage>
				<Footer></Footer>
			</MainContainer>
		)
	}
}

export default App
