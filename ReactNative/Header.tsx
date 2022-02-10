import { Env } from "./Env";
import {HomeURL, iOSLogicFunc} from "./RNUtils";
import { WMEnv} from "./WMEnv";

const isIOS = Env.isIOS();

class Header {
	
	render() {
		console.log("reuse");
		let scheme = '';
		if (Env.isWM()) {
			scheme = 'ddd_wm';
		} else {
			scheme = 'ddd_channel';
		}
		if (scheme.length > 0) {
			console.log("跳转前的逻辑");
			console.log("跳转scheme");
		} else {
			console.log("不跳转scheme");
		}
	}
}
