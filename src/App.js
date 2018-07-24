import React from 'react';
import { Provider } from 'react-redux';
import { NavigationStack } from "./screens/navigator";
import { store } from "./redux/store";

export class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider
				store={store}
			>
				<NavigationStack/>
			</Provider>
		);
	}

}
