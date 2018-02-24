import { Component } from '@angular/core';
import { NavController, Toggle } from 'ionic-angular';
import { SettingProvider } from '../../providers/setting-provider';

@Component({
	selector: 'page-settings',
	templateUrl: 'settings.html',
})
export class SettingsPage {

	constructor(
		private navCtrl: NavController,
		private settingsService: SettingProvider
	) { }

	onToggle(toggle: Toggle) {
		this.settingsService.setBgc(toggle.checked);
	}

	checkedBgc(): boolean {
		return this.settingsService.getAltBgc();
	}

}
