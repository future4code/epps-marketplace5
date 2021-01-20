import React, { Component } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MainContainer} from './components/StyledSellers'

export class App extends Component {
	render() {
		return (
			<MainContainer>
				<Header></Header>

				<Footer></Footer>
			</MainContainer>
		)
	}
}

export default App
