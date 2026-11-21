import { Component, OnInit, inject, signal } from '@angular/core';
import { PRACTITIONERS, Practitioner } from '../../data/clinic.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { ImageLoaderService } from '../../services/image-loader.service';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {
  private images = inject(ImageLoaderService);
  private lightbox = inject(LightboxService);

  readonly practitioners = PRACTITIONERS;
  /** Loaded photo address for each practitioner (by name). */
  photos = signal<Record<string, string>>({});

  ngOnInit(): void {
    this.practitioners.forEach(p => {
      this.images.loadFirst(p.photo).then(src => {
        if (src) this.photos.update(current => ({ ...current, [p.name]: src }));
      });
    });
  }

  open(p: Practitioner): void {
    const src = this.photos()[p.name];
    if (src) this.lightbox.open(src, p.name);
  }
}
