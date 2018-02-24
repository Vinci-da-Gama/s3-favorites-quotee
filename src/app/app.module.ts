import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FavoritQuoteApp } from './app.component';
import { QuotesProvider } from '../providers/quotes-provider';

import { TabsPage } from '../pages/tabs/tabs';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LibraryPage } from '../pages/library/library';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuoteModal } from '../pages/quoteModal/quote-modal';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
	declarations: [
		FavoritQuoteApp,
		TabsPage,
		FavoritesPage,
		LibraryPage,
		QuotesPage,
		QuoteModal,
		SettingsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(FavoritQuoteApp),
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		FavoritQuoteApp,
		TabsPage,
		FavoritesPage,
		LibraryPage,
		QuotesPage,
		QuoteModal,
		SettingsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		{ provide: APP_BASE_HREF, useValue: '/' },
		QuotesProvider
	]
})
export class AppModule { }
