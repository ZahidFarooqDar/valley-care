import { Component, OnInit, inject, signal } from '@angular/core';
import { IMG_VERSION, LOGO_LOCAL, LOGO_REMOTE } from '../../data/clinic.data';

/** Round clinic logo. Tries the local file, then the Instagram link, then shows "VCC". */
@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {
  src = signal('');

  ngOnInit(): void {
    const img = new Image();
    let attempt = 0;
    img.onload = () => this.src.set(img.src);
    img.onerror = () => { if (attempt++ === 0) img.src = LOGO_REMOTE; };
    img.src = `${LOGO_LOCAL}?v=${IMG_VERSION}`;
  }
}
