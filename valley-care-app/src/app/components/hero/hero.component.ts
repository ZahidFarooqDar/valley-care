import { Component, OnInit, inject, signal } from '@angular/core';
import { HERO_PHOTOS, IG_DM } from '../../data/clinic.data';
import { BookingService } from '../../services/booking.service';
import { ImageLoaderService } from '../../services/image-loader.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  private booking = inject(BookingService);
  private images = inject(ImageLoaderService);

  readonly igDm = IG_DM;
  photos = signal<(string | null)[]>(HERO_PHOTOS.map(() => null));

  ngOnInit(): void {
    HERO_PHOTOS.forEach((file, i) => {
      this.images.loadFirst(file).then(src =>
        this.photos.update(list => list.map((item, k) => (k === i ? src : item)))
      );
    });
  }

  book(event: Event): void {
    event.preventDefault();
    this.booking.book('an appointment');
  }
}
