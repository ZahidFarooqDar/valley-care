import { Component, OnInit, inject, signal } from '@angular/core';
import { GALLERY } from '../../data/clinic.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { ImageLoaderService } from '../../services/image-loader.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  private images = inject(ImageLoaderService);
  tiles = signal<(string | null)[]>(GALLERY.map(() => null));

  ngOnInit(): void {
    GALLERY.forEach((files, i) => {
      this.images.loadFirst(files).then(src =>
        this.tiles.update(list => list.map((item, k) => (k === i ? src : item)))
      );
    });
  }
}
