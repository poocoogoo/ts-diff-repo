import { Env } from "./Env";

const isIOS = Env.isIOS();

class Header {
	
	render() {
		console.log("reuse");
	}
}
