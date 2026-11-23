import { Injectable, inject } from '@angular/core';
import { IG_DM } from '../data/clinic.data';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private toast = inject(ToastService);

  book(what = 'an appointment'): void {
    const message = what === 'an appointment'
      ? 'Hello Valley Care Centre, I would like to book an appointment.'
      : `Hello Valley Care Centre, I would like to book an appointment for: ${what}`;

    // 1. Fire clipboard copy immediately without awaiting it before navigation
    if (navigator.clipboard) {
      navigator.clipboard.writeText(message).then(
        () => this.toast.show('Message copied. Paste it in our Instagram chat to book.'),
        () => this.toast.show(`Opening Instagram. Tell us you would like to book: ${what}.`)
      );
    } else {
      this.toast.show(`Opening Instagram. Tell us you would like to book: ${what}.`);
    }

    // 2. Navigate synchronously inside the click event to preserve Universal Link activation
    if (this.isMobile()) {
      window.location.assign(IG_DM);
    } else {
      window.open(IG_DM, '_blank', 'noopener,noreferrer');
    }
  }

  private isMobile(): boolean {
    const ua = navigator.userAgent;
    const iPadOS = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
    return /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || iPadOS;
  }
}