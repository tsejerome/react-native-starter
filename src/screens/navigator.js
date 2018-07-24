import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { IndexPage } from "./index-page/index-page";

export const NavigationStack = createStackNavigator({
	IndexPage: {
		screen: IndexPage
	}
}, {
	initialRouteName: 'IndexPage',
	headerMode: 'none'
});
