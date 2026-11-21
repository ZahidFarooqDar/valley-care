import { Component } from '@angular/core';
import { MARQUEE } from '../../data/clinic.data';

@Component({
  selector: 'app-highlights',
  standalone: true,
  templateUrl: './highlights.component.html'
})
export class HighlightsComponent {
  /** The list is doubled so the scrolling strip loops seamlessly. */
  readonly marquee = [...MARQUEE, ...MARQUEE];
}
