import { Component } from '@angular/core';
import { DeviceDetectorService } from '../device-detector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dd = new DeviceDetectorService();
  desktop = this.dd.deviceDetection();

  openMenu = false;
  onClickMenu() {
    this.openMenu = !this.openMenu;
  }

  // EasterEgg
  clickLogo = 1;
  onClickLogo() {
    this.clickLogo++;
    if (this.clickLogo == 7) {
      this.clickLogo = 1;
    }
  }
}
