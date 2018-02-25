import { Component, OnInit } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import { QuoteElemInterface } from '../../shared/interfaces/quoteelem.interface';
import { QuotesProvider } from '../../providers/quotes-provider';
import { QuotesPage } from '../quotes/quotes';

@Component({
	selector: 'page-library',
	templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

	private quoteCollection: QuoteElemInterface[];
	private qsPage: any;

	constructor(
		// private navCtrl: NavController,
		// private navParams: NavParams,
		private quoteProvider: QuotesProvider
	) { }

	ngOnInit() {
		this.quoteProvider.getLocalQuotes()
			.then((res: any) => {
				this.quoteCollection = res.json();
			})
			.catch((err: any) => {
				console.log('27 -- error to get data: ', err);
			});
		this.qsPage = QuotesPage;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LibraryPage');
	}

}
