// import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
// import { QuoteElemInterface } from '../shared/interfaces/quoteelem.interface';
import { QuoteInterface } from '../shared/interfaces/quote.interface';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class QuotesProvider {

	private favQuotes: QuoteInterface[] = [];

	constructor(
		private http: Http
	) { }

	isQuoteFavorite(q: QuoteInterface) {
		const canFound = this.findQuoteIndex(q);
		if (!canFound) {
			return true;
		} else {
			return false;
		}
	}

	getLocalQuotes(): Promise<Response> {
		const url = './localData/quotesData.json';
		return this.http.get(url).toPromise();
		/* .then((res: Response) => {
			console.log('20 -- res: ', res);
			return res.json();
		})
		.catch((err: Response | any) => {
			console.log('17 -- error to get data: ', err);
		}); */
	}

	addFavQuote(q: QuoteInterface) {
		this.favQuotes.push(q);
		console.log('40 -- fav quotes: ', this.favQuotes);
	}

	getFavQuotes(): QuoteInterface[] {
		return this.favQuotes;
	}

	findQuoteIndex(q: QuoteInterface) {
		const posIdx = this.favQuotes.findIndex((quoElem: QuoteInterface) => {
			return quoElem.id === q.id;
		});
		return posIdx;
	}

	removeFavQuote(q: QuoteInterface) {
		const qIdx = this.findQuoteIndex(q);
		this.favQuotes.splice(qIdx, 1);
	}

};
