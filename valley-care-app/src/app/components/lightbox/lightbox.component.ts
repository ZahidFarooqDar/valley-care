import { Component, HostListener, inject } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service';

/** Full-screen view of a practitioner photo. Click outside, press Esc or use the × button to close. */
@Component({
  selector: 'app-lightbox',
  standalone: true,
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent {
  lightbox = inject(LightboxService);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.lightbox.state().open) this.lightbox.close();
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.lightbox.close();
  }
}
