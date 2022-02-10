import { Env } from "./Env";
import {appBizId, iOSLogicFunc} from "./RNUtils";
import { WMEnv} from "./WMEnv";

const isIOS = Env.isIOS();
const isWM = Env.isWM();

class Header {
	
	render() {
		const bizId = appBizId();
		console.log(bizId);
		console.log("reuse");
	}
}
