import { Env } from "./Env";
import { HomeURL} from "./RNUtils";

const isIOS = Env.isIOS();

class Header {
	
	render() {
		console.log("reuse");
		console.log(HomeURL);
	}
}
