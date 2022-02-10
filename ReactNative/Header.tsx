import { Env } from "./Env";

const isIOS = Env.isIOS();

class Header {
	
	render() {
		if (isIOS) {
			console.log("new iOS logic");
			console.log("hello iOS logic");
		} else {
			console.log("hello Android logic");
		}
		console.log("reuse");
	}
}
