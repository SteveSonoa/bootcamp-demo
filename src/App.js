import React, { Component } from 'react';
import './App.css';
import Coin from './Coin';

class App extends Component {
	initialState = {
		twix: false,
		reesesPBC: false,
		nerds: false,
		tootsieRoll: false,
		nickel: false,
		dime: false,
		quarter: false,
		total: 0,
		gameOver: false,
		message: null,
		moves: 0
	};

	state = this.initialState;

	componentDidUpdate(prevProps, prevState) {
		if (this.state.total === 0 && this.state.gameOver === prevState.gameOver) {
			this.setState({
				gameOver: true,
				message: 'You win!!!'
			});
		} else if (this.state.moves === 7 && !this.state.gameOver) {
			this.setState({
				gameOver: true,
				message: 'You suck!!!'
			});
		}
	}

	resetGame = () => {
		this.setState(this.initialState);
	};

	updateTotal = (value, whoAmI) => {
		this.setState({
			total: this.state.total + value,
			[whoAmI]: true,
			moves: this.state.moves + 1
		});
	};

	formatTotal = () => {
		const total = this.state.total / 100;
		return `${total.toFixed(2)}`;
	};

	render() {
		const candy = [
			{
				image: 'twix.jpg',
				price: 4,
				name: 'twix'
			},
			{
				image: 'reesesPBC.jpg',
				price: 24,
				name: 'reesesPBC'
			},
			{
				image: 'nerds.jpg',
				price: 13,
				name: 'nerds'
			},
			{
				image: 'tootsieRoll.jpg',
				price: 2,
				name: 'tootsieRoll'
			}
		];

		const coins = [
			{
				image: 'nickel.png',
				price: 5,
				width: '150px',
				name: 'nickel'
			},
			{
				image: 'dime.jpg',
				price: 10,
				width: '105px',
				name: 'dime'
			},
			{
				image: 'quarter.jpg',
				price: 25,
				width: '200px',
				name: 'quarter'
			}
		];

		return (
			<div className="App">
				<h1>The Price Is State!</h1>
				<div className="coins">
					{coins.map(coin => (
						<Coin
							image={coin.image}
							width={coin.width}
							value={coin.price}
							onClick={this.updateTotal}
							key={coin.name}
							name={coin.name}
							clicked={this.state[coin.name]}
						/>
					))}
				</div>
				<div className="messages">
					<h1>Your total is ${this.formatTotal()}</h1>
					<h2>{this.state.message}</h2>
					{this.state.gameOver && <button onClick={this.resetGame}>Start</button>}
				</div>
				<div className="candy">
					{candy.map(x => (
						<Coin
							image={x.image}
							value={-1 * x.price}
							onClick={this.updateTotal}
							key={x.name}
							name={x.name}
							clicked={this.state[x.name]}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
