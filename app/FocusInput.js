import React from 'react'

let FocusInput = React.createClass({
	getInitialState: function () {
		return {
			displayStatus: true
		}
	},

	componentDidMount: function () {
		$('.main-focus').focus();
	},

	startTimer: function () {
		let workType = $('.main-focus')[0].value;
		let data = {
			workType: workType,
			startDate: new Date()
		};

		let inputField = this;

		// Create new log instance
		$.ajax({
			url: '/api/start-timer',
			type: 'POST',
			data: data,
			dataType: 'json'
		}).done(function (response) {
			console.info(response);
			// Hide inputfield
			inputField.setState({
				displayStatus: false
			})
			// Display timer 

		}).fail(function (err) {
			console.error(err);
			alert("An error ocurred");
		})

	},

	render: function () {
		var styles = {
			makeBlur: {
				position: 'fixed',
				top: '0',
				left: '0',
				height: '100%',
				width: '100%',
		    zIndex: '10',
				backgroundColor: 'rgba(76, 76, 76, 0.46)'
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
						<h1>Time</h1>
					</span>
				}
			</div>
		)
	}
});

module.exports = FocusInput;