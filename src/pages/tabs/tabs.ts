import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';
import { QuotesProvider } from '../../providers/quotes-provider';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {
	private defaultSelectedPage: Number = 1;
	private favPage: any = FavoritesPage;
	private libPage: any = LibraryPage;

	constructor(
		private navCtrl: NavController,
		private qService: QuotesProvider
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad TabsPage');
	}

	hasFavItems(): boolean {
		const fqArr = this.qService.getFavQuotes();
		return fqArr && fqArr.length > 0;
	}

}
