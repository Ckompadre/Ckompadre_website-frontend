import { Component } from '@angular/core';
import { DeviceDetectorService } from '../services/device-detector.service';
import { LocalizationService } from '../services/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  desktop = new DeviceDetectorService().deviceDetection();
  locale = new LocalizationService();

  localeRu = true;
  onClickLocale() {
    this.localeRu = !this.localeRu;
    this.changeLocale();
  }

  search = this.locale.ru.header.search;
  blog = this.locale.ru.header.blog;
  projects = this.locale.ru.header.projects;
  portfolio = this.locale.ru.header.portfolio;
  about = this.locale.ru.header.about;
  changeLocale() {
    if (this.localeRu) {
      this.search = this.locale.ru.header.search;
      this.blog = this.locale.ru.header.blog;
      this.projects = this.locale.ru.header.projects;
      this.portfolio = this.locale.ru.header.portfolio;
      this.about = this.locale.ru.header.about;
    } else {
      this.search = this.locale.en.header.search;
      this.blog = this.locale.en.header.blog;
      this.projects = this.locale.en.header.projects;
      this.portfolio = this.locale.en.header.portfolio;
      this.about = this.locale.en.header.about;
    }
  }

  openMenu = false;
  onClickMenu() {
    this.openMenu = !this.openMenu;
  }

  // EasterEgg
  clickLogo = 1;
  onClickLogo() {
    if (this.clickLogo == 7) {
      this.clickLogo = 1;
    }
    this.clickLogo++;
  }
}
