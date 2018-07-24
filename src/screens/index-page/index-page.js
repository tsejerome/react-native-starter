import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { CounterAction } from "../../redux/actions/counter-action";
import { styles } from "./styles";

class Component extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={styles.container}
			>
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
					You've pressed the button {this.props.counter} times.
				</Text>
				<View
					style={styles.container}
				>
					<FlatList
						data={this.props.logs}
						keyExtractor={(item, index) => {
							return index.toString();
						}}
						renderItem={({ item }) => {
							return (
								<React.Fragment>
									<Text>
										{JSON.stringify(item)}
									</Text>
								</React.Fragment>
							);
						}}
					/>
				</View>
			</View>
		);
	}

	_handleCounterClick = () => {
		this.props.dispatch(CounterAction.increment());
	};

	_handleCounterReset = () => {
		this.props.dispatch(CounterAction.reset());
	}

}

export const IndexPage = connect((store) => {
	return {
		counter: store['CounterReducer']['counter'],
		logs: store['LoggerReducer']['logs']
	};
})(Component);
