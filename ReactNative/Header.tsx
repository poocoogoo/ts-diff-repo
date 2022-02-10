import { Env } from "./Env";
import {HomeURL, iOSLogicFunc} from "./RNUtils";
import { WMEnv} from "./WMEnv";

const isIOS = Env.isIOS();

class Header {
	
	render() {
		console.log("reuse");
		
		if (WMEnv.isIOS) {
			iOSLogicFunc();
		} else {
			console.log("新增Android 逻辑");
		}
	}
}
