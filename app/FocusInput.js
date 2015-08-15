import React from 'react'

var FocusInput = React.createClass({
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
				<form>
					<input placeholder={this.props.value}
						   	 	className="main-focus" />
		   	 	<button className="btn btn-default btn-clock">Start clock
	   	 		</button>
				</form>
			</div>
		)
	}
});

module.exports = FocusInput;