import React from 'react'
import axios from 'axios'

////////////////////////////////////////
////////////////////////////////////////

let SetIntervalMixin = {
	componentWillMount () {
		this.intervals = [];
	},
	setInterval () {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount () {
		this.intervals.map(clearInterval);
	}
}

	// setInterval(function () {
	// 	let newTime = inputField.state.counter;
	// 	newTime++;

	// 	inputField.setState({
	// 		counter: newTime
	// 	})
	// }, 1000);



////////////////////////////////////////
////////////////////////////////////////

const FocusInput = React.createClass({
	mixins: [SetIntervalMixin],


	getInitialState () {
		return {
			displayStatus: true,
			counter: null
		}
	},


	componentDidMount () {
		document.getElementById('main-focus').focus();
	},


	startTimer () {
		let workType = $('#main-focus')[0].value;
		let startDate = new Date();

		let data = {
			workType,
			startDate
		};

		let inputField = this;

		axios.post('/api/start-timer', data)
		.then(function (response) {
			console.log('response', response);
			// Give value to logContent
			inputField.props.logContent = workType;
			inputField.props.startDate = startDate.toString();
			inputField.props.logId = response.data._id;

			// Change state
			inputField.setState({
				displayStatus: false,
				counter: 0
			});

			// Update state every second
			let startCounting = function () {
				let newTime = inputField.state.counter;
				newTime++;

				inputField.setState({
					counter: newTime
				})
			}

			inputField.setInterval(startCounting, 1000)

		})
		.catch(function (err) {
			console.error(err);
		})
	},


	stopTimer () {
		this.intervals.map(clearInterval);

		let data = {
			timeEnd: this.state.counter
		}

		var uri = '/api/stop-timer/' + this.props.logId;
		axios.post(uri, data)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (err) {
			console.error(err);
		});

	},


	render () {
		var styles = {
			makeBlurry: {
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
			},
			activeLog: {
				padding: '20px',
				backgroundColor: '#434141',
				color: '#fff',
				minWidth: '500px',
				fontSize: '20px'
			}
		};
		return (
			<div style={styles.makeBlurry} className="flex-middle">
				{ 
					this.state.displayStatus ?
					<span>
						<input placeholder={this.props.value}
						   	 	id="main-focus" />
			   	 	<button className="btn btn-default btn-clock"
			   	 					onClick={this.startTimer}>
							Start clock
			 	 		</button>
					</span>
					:
					<span>
						<div style={styles.activeLog}>{this.props.logContent}</div> <br/>
						<h1 style={styles.mainTitle}>{this.state.counter}</h1> <br/>
			   	 	<button className="btn btn-default btn-clock"
			   	 					onClick={this.stopTimer}>
							Stop clock
			 	 		</button>
					</span>
				}
			</div>
		)
	}
});

module.exports = FocusInput;