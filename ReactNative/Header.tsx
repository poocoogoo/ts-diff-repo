import { Env } from "./Env";
import { HomeURL} from "./RNUtils";
import { WMEnv} from "./WMEnv";

const isIOS = Env.isIOS();

class Header {
	
	render() {
		console.log("reuse");
		console.log(HomeURL);
		
		if (WMEnv.isIOS) {
			console.log("新增iOS 逻辑");
		}
	}
}
