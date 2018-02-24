import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
	selector: 'quote-modal',
	templateUrl: 'quote-modal.html'
})
export class QuoteModal implements OnInit {

	private person: string;
	private text: string;

	constructor(
		private viewCtrl: ViewController,
		private navParams: NavParams
	) { }

	ngOnInit() {
	}

	ionViewDidLoad() {
		this.person = this.navParams.get('person');
		this.text = this.navParams.get('text');
	}

	UnFavIt(removeable: boolean = false) {
		this.viewCtrl.dismiss(removeable);
	}

	onClose() {
		this.viewCtrl.dismiss();
	}

}
