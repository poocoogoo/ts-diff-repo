import { Env } from "./Env";

const isIOS = Env.isIOS();

class Header {
	
	render() {
		if (isIOS) {
			console.log("hello iOS logic");
		} else {
			console.log("hello Android logic");
		}
		console.log("reuse");
	}
}
