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

    const mobile = this.isMobile();

    // Computer: open the chat in a new tab right away. It must happen inside the click itself,
    // otherwise the browser treats it as a pop-up and may block it.
    if (!mobile) window.open(IG_DM, '_blank', 'noopener');

    const copied: Promise<void> = navigator.clipboard ? navigator.clipboard.writeText(message) : Promise.reject();
    copied
      .then(
        () => this.toast.show('Message copied. Paste it in our Instagram chat to book.'),
        () => this.toast.show(`Opening Instagram. Tell us you would like to book: ${what}.`)
      )
      .then(() => {
        // Phone: go to the chat in the same tab so the Instagram app can take over.
        // (Pop-up windows opened after a delay are blocked on phones.)
        if (mobile) setTimeout(() => { window.location.href = IG_DM; }, 700);
      });
  }

  private isMobile(): boolean {
    const ua = navigator.userAgent;
    const iPadOS = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
    return /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || iPadOS;
  }
}