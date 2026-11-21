import { Component, inject } from '@angular/core';
import { TREATMENTS } from '../../data/clinic.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './treatments.component.html'
})
export class TreatmentsComponent {
  private booking = inject(BookingService);
  readonly treatments = TREATMENTS;

  /** Moves the soft glow under the cursor. */
  glow(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', event.clientX - rect.left + 'px');
    card.style.setProperty('--y', event.clientY - rect.top + 'px');
  }

  book(name: string): void {
    this.booking.book(name);
  }
}
