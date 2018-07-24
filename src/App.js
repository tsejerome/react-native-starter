import React from 'react';
import { NavigationStack } from "./screens/navigator";

export class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavigationStack/>
		);
	}

}
