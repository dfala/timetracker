import React from 'react'


let GoButton = React.createClass({
	setTimer: function (e) {
		// console.log(e);
		let inputContent = $('.main-focus')[0].value;
		console.log(inputContent);

		if (!inputContent) return;
		// TODO: Ajax request to initiate counter on backend here
	},

	render: function () {
		return (
			<button className="btn btn-default btn-clock"
							onClick={this.setTimer}>
				Start clock
 	 		</button>
		)
	}
})

let FocusInput = React.createClass({
	componentDidMount: function () {
		$('.main-focus').focus();
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
				<input placeholder={this.props.value}
					   	 	className="main-focus" />
   	 		<GoButton />
			</div>
		)
	}
});

module.exports = FocusInput;