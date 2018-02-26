import { Injectable } from '@angular/core';

@Injectable()
export class SettingProvider {

	private altBgc: boolean;

	constructor(
	) { }

	setBgc(isAlgBgc: boolean = false) {
		this.altBgc = isAlgBgc;
	}

	getAltBgc() {
		console.log('16 -- this.altBgc: ', this.altBgc);
		return this.altBgc;
	}

}
