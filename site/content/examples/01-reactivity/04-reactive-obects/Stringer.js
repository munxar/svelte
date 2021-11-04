export class Stringer {
	constructor(str = "") {
		this._str = str;
	}
	reverse() {
		this._str = this._str.split("").reverse().join("");
	}
	toString() {
		return this._str;
	}
}
