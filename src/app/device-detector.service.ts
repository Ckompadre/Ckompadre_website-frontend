import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceDetectorService {
  deviceDetection(): boolean {
    const device = new RegExp(
      'Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini',
      'i'
    );
    if (device.test(navigator.userAgent)) {
      return false;
    } else return true;
  }
}
