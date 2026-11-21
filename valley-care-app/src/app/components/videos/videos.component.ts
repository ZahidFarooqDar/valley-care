import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IG_PAGE, VIDEOS } from '../../data/clinic.data';

@Component({
  selector: 'app-videos',
  standalone: true,
  templateUrl: './videos.component.html'
})
export class VideosComponent {
  private sanitizer = inject(DomSanitizer);
  private cache = new Map<string, SafeResourceUrl>();

  readonly keys = Object.keys(VIDEOS);
  active = signal(this.keys[0]);

  /** Only the chosen tab's reels are created (embeds are heavy). */
  reels = computed(() =>
    VIDEOS[this.active()].map(id => ({
      id,
      src: this.embed(id),
      href: `${IG_PAGE}reel/${id}/`
    }))
  );

  private embed(id: string): SafeResourceUrl {
    let url = this.cache.get(id);
    if (!url) {
      url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.instagram.com/reel/${id}/embed`);
      this.cache.set(id, url);
    }
    return url;
  }
}
