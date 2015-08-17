import React from 'react'
import axios from 'axios'

const FocusInput = React.createClass({
	// TODO: look up object literal short hand (ES6)
	getInitialState () {
		return {
			displayStatus: true,
			counter: null
		}
	},

	componentDidMount () {
		$('.main-focus').focus();
	},

	startTimer () {
		let workType = $('.main-focus')[0].value;

		let data = {
			workType: workType,
			startDate: new Date()
		};

		let inputField = this;

		axios.post('/api/start-timer', data)
		.then(function (response) {
			inputField.setState({
				displayStatus: false,
				counter: 0
			})
			setInterval(function () {
				let newTime = inputField.state.counter;
				newTime++;

				inputField.setState({
					counter: newTime
				})
			}, 1000)
		})
		.catch(function (err) {
			console.error(err);
		})
	},

	render () {
		var styles = {
			makeBlur: {
				position: 'fixed',
				top: '0',
				left: '0',
				height: '100%',
				width: '100%',
		    zIndex: '10',
				backgroundColor: 'rgba(76, 76, 76, 0.46)'
			},
			mainTitle: {
				color: '#fff'
			}
		};
		return (
			<div style={styles.makeBlur} className="flex-middle">
				{ 
					this.state.displayStatus ?
					<span>
						<input placeholder={this.props.value}
						   	 	className="main-focus" />
			   	 	<button className="btn btn-default btn-clock"
									onClick={this.startTimer}>
							Start clock
			 	 		</button>
					</span>
					:
					<span>
						<h1 style={styles.mainTitle}>{this.state.counter}</h1>
					</span>
				}
			</div>
		)
	}
});

module.exports = FocusInput;