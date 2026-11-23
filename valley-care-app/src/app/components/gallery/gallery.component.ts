
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

  tiles = signal<
    { src: string | null; title: string }[]
  >(
    GALLERY.map(item => ({
      src: null,
      title: item.title?.trim() || ''
    }))
  );

  ngOnInit(): void {
    GALLERY.forEach((item, i) => {
      this.images.loadFirst([item.file]).then(src => {
        this.tiles.update(list =>
          list.map((tile, k) =>
            k === i ? { ...tile, src } : tile
          )
        );
      });
    });
  }
}
