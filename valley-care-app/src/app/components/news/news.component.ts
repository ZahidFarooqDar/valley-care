import { Component, OnInit, inject, signal } from '@angular/core';
import { NEWS } from '../../data/clinic.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { ImageLoaderService } from '../../services/image-loader.service';
import { LightboxService } from '../../services/lightbox.service';

interface NewsTile { title: string; src: string | null; }

/** "What the news says about us": clipping thumbnails that open in a large popup. */
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  private images = inject(ImageLoaderService);
  private lightbox = inject(LightboxService);

  tiles = signal<NewsTile[]>(NEWS.map(n => ({ title: n.title, src: null })));

  ngOnInit(): void {
    NEWS.forEach((item, i) => {
      this.images.loadFirst(item.file).then(src =>
        this.tiles.update(list => list.map((tile, k) => (k === i ? { ...tile, src } : tile)))
      );
    });
  }

  open(tile: NewsTile): void {
    if (tile.src) this.lightbox.open(tile.src, tile.title, true);
  }
}
