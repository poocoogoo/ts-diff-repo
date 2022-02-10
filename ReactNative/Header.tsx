import { Env } from "./Env";
import {HomeURL, iOSLogicFunc} from "./RNUtils";
import { WMEnv} from "./WMEnv";

const isIOS = Env.isIOS();
const isWM = Env.isWM();

class Header {
	
	render() {
		console.log("reuse");
		const scheme = isWM ? 'xxx_wm' : 'ddd_channel';
		if (scheme.length > 0) {
			console.log("跳转前的逻辑");
			console.log("跳转scheme");
		} else {
			console.log("不跳转scheme");
		}
		const targetScheme = scheme + 'postURL';
		console.log(targetScheme);
	}
}
