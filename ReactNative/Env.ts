
const trueFunc = () => {
	return true;
}

const falseFunc = () => {
	return false;
}

export const Env = {
	isIOS: trueFunc,
	isAndroid: falseFunc,
	isWM: trueFunc,
	isMT: falseFunc,
	isDP: falseFunc,
}
