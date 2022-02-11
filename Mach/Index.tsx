import {Component} from "react";
import {View, ScrollViewComponent, Text} from "react-native";

class MachView extends Component<any, any> {
	render() {
		const isIOS = this.props.env.osName === 'ios';
		const isAndroid = this.props.env.osName === 'android';
		return (<View>
			{ isAndroid && <Text> Android </Text>}
			{ isIOS && <Text> iOS logic</Text>}
		</View>);
	}
}
