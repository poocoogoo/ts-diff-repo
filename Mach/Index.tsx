import {Component} from "react";
import {View, ScrollViewComponent, Text, Image} from "react-native";
import {MachNative} from "./MachNative";

class MachView extends Component<any, any> {
	render() {
		const isIOS = this.props.env.osName === 'ios';
		const isAndroid = this.props.env.osName === 'android';
		const param = {
			currentName: 'Index',
			cardName: 'Home'
		}
		MachNative.sendEvent('jumpToDetail', JSON.stringify(param))
		return (<View>
			{ isAndroid && <Text> Android </Text>}
			{ isIOS && <Text> iOS logic</Text>}
			<Image style={{"top": (this.props.env.osName === 'ios' ? "20dp" : "30dp")}}> </Image>
		</View>);
	}
}
