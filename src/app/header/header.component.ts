import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Device detection
  desktop = false;
  ngOnInit(): void {
    const device = new RegExp(
      'Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini',
      'i'
    );
    if (device.test(navigator.userAgent)) {
      this.desktop = false;
    }
  }

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
