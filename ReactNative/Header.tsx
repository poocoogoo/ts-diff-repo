import { Env, WMEnv, iOSLogicFunc, appBizId} from "ts-diff-common";

const isIOS = Env.isIOS();
const isWM = Env.isWM();

class Header {
	
	render() {
		const bizId = appBizId();
		console.log(bizId);
		console.log("reuse");
	}
}
