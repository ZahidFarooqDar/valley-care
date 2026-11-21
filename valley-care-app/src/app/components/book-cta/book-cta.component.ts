import { Component, inject } from '@angular/core';
import { IG_DM } from '../../data/clinic.data';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-book-cta',
  standalone: true,
  templateUrl: './book-cta.component.html'
})
export class BookCtaComponent {
  private booking = inject(BookingService);
  readonly igDm = IG_DM;

  book(event: Event): void {
    event.preventDefault();
    this.booking.book('an appointment');
  }
}
