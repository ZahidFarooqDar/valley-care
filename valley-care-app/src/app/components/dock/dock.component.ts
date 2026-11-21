import { Component, inject } from '@angular/core';
import { BookingService } from '../../services/booking.service';

/** Bottom bar shown on phones: Call, WhatsApp, Book. */
@Component({
  selector: 'app-dock',
  standalone: true,
  templateUrl: './dock.component.html'
})
export class DockComponent {
  private booking = inject(BookingService);

  book(): void {
    this.booking.book('an appointment');
  }
}
