import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

class Component extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	render() {
		return (
			<View>
				<Text>
					Welcome to react-native!
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={this._handleCounterClick}
				>
					<Text>
						Click Me
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={this._handleCounterReset}
				>
					<Text>
						Reset
					</Text>
				</TouchableOpacity>
				<Text>
					You've pressed the button {this.state.counter} times.
				</Text>
			</View>
		)
	}

	_handleCounterClick = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	};

	_handleCounterReset = () => {
		this.setState({
			counter: 0
		});
	}

}

export const IndexPage = Component;
