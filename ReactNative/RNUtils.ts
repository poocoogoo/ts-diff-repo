import {Env} from "./Env";

export const HomeURL = Env.isIOS() ? 'http://xxxxxxxyyyyyzzzz.ios.cn' : 'http://xxxxxxxyyyyyzzzz.android.cn';

export function iOSLogicFunc() {
	console.log("hello iOS");
	console.log("新增iOS逻辑");
}

export function appBizId() {
	if (Env.isWM()) {
		return 9191;
	} else if (Env.isMT()) {
		return 9192;
	} else if (Env.isDP()) {
		return 9193;
	}
}
