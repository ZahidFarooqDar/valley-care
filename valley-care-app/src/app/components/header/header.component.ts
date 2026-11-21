import { Component, inject, signal } from '@angular/core';
import { IG_DM } from '../../data/clinic.data';
import { BookingService } from '../../services/booking.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private booking = inject(BookingService);

  readonly igDm = IG_DM;
  menuOpen = signal(false);

  toggle(): void {
    this.menuOpen.update(open => !open);
  }

  onMenuClick(event: Event): void {
    if ((event.target as HTMLElement).tagName === 'A') this.menuOpen.set(false);
  }

  book(event: Event): void {
    event.preventDefault();
    this.booking.book('an appointment');
  }
}
