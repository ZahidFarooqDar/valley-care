import { Injectable, inject } from '@angular/core';
import { IG_DM } from '../data/clinic.data';
import { ToastService } from './toast.service';

/** Copies a booking message, then opens the clinic's Instagram DM. */
@Injectable({ providedIn: 'root' })
export class BookingService {
  private toast = inject(ToastService);

  book(what = 'an appointment'): void {
    const message = what === 'an appointment'
      ? 'Hello Valley Care Centre, I would like to book an appointment.'
      : `Hello Valley Care Centre, I would like to book an appointment for: ${what}`;

    const copied: Promise<void> = navigator.clipboard ? navigator.clipboard.writeText(message) : Promise.reject();
    copied.then(
      () => this.toast.show('Message copied. Paste it in our Instagram DM to book.'),
      () => this.toast.show(`Opening Instagram DM. Tell us you would like to book: ${what}.`)
    );

    setTimeout(() => window.open(IG_DM, '_blank', 'noopener'), 800);
  }
}
