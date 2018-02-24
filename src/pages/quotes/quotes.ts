import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { QuoteElemInterface } from '../../shared/interfaces/quoteelem.interface';
import { QuoteInterface } from '../../shared/interfaces/quote.interface';
import { QuotesProvider } from '../../providers/quotes-provider';

@Component({
	selector: 'page-quotes',
	templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
	private quoteItem: QuoteElemInterface;

	constructor(
		private navParams: NavParams,
		private alertCtrl: AlertController,
		private qProvider: QuotesProvider
	) { }

	ngOnInit() {
		this.quoteItem = this.navParams.data;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad QuotePage');
	}

	isFavourited(quote: QuoteInterface): boolean {
		return this.qProvider.isQuoteFavorite(quote);
	}

	onAddToFav(currQuote: QuoteInterface) {
		const alert = this.alertCtrl.create({
			title: 'Add Quote',
			subTitle: 'Are u sure?',
			message: 'Are u sure u want to add this quote.',
			buttons: [
				{
					text: 'Yep, go ahead.',
					handler: () => {
						console.log('OK');
						this.qProvider.addFavQuote(currQuote);
					}
				},
				{
					text: 'No, I change my mind.',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});
		alert.present();
	}

	onRemoveFromFavsQuotes(quote: QuoteInterface) {
		this.qProvider.removeFavQuote(quote);
	}

}
