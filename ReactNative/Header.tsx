import { Env, WMEnv, iOSLogicFunc, appBizId} from "ts-diff-common";
import {NativeModules} from "react-native";

const isIOS = Env.isIOS();
const isWM = Env.isWM();

const shareModule = NativeModules.RNShareModule;
class Header {
	
	render() {
		const bizId = appBizId();
		console.log(bizId);
		console.log("reuse");
		shareModule();
	}
}
