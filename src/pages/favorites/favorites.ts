import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { QuoteInterface } from '../../shared/interfaces/quote.interface';
import { QuotesProvider } from '../../providers/quotes-provider';
import { QuoteModal } from '../quoteModal/quote-modal';
import { SettingProvider } from '../../providers/setting-provider';

@Component({
	selector: 'page-favorites',
	templateUrl: 'favorites.html',
})
export class FavoritesPage {

	private favQuotes: QuoteInterface[] = [];

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private qProvider: QuotesProvider,
		private modalCtrl: ModalController,
		private sProvider: SettingProvider
	) { }

	ionViewCanEnter(): boolean | Promise<boolean> {
		this.favQuotes = this.qProvider.getFavQuotes();
		const canEnter = this.favQuotes && this.favQuotes.length > 0;
		return canEnter;
	}

	ionViewWillEnter() {
		this.favQuotes = this.qProvider.getFavQuotes();
		console.log('22 -- favorite Quotes: ', this.favQuotes);
	}

	ionViewDidLoad() {
	}

	onRemoveFromFavs(fQuote: QuoteInterface) {
		this.qProvider.removeFavQuote(fQuote);
	}

	onViewQuote(fQuote: QuoteInterface) {
		const mda = this.modalCtrl.create(QuoteModal, fQuote);
		mda.present();
		// to refresh favorite page, you should remove quote from both this page and service.
		// remove from service.
		mda.onDidDismiss((removeable: boolean) => {
			console.log('48 -- removeable: ', removeable);
			if (removeable) {
				// remove from this page.
				// There r 2 ways to refresh favourite quotes
				// 1st -- it is better, donot need to reload all.
				const pos = this.qProvider.findQuoteIndex(fQuote);
				if (pos >= 0) {
					this.favQuotes.splice(pos, 1);
				}
				// 2nd reload again.
				/* this.favQuotes = this.qProvider.getFavQuotes();
				console.log('56 -- ', this.favQuotes); */

				// remove this in provider also...
				this.onRemoveFromFavs(fQuote);
			}
		})
	}

	getBgc() {
		return this.sProvider.getAltBgc() ? 'altQuoteBgColor' : 'quoteBgColor';
	}

}
