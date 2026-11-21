import { Component, computed, signal } from '@angular/core';
import { HOURS } from '../../data/clinic.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hours.component.html'
})
export class HoursComponent {
  readonly keys = Object.keys(HOURS);
  active = signal(this.keys[0]);
  rows = computed(() => HOURS[this.active()]);

  label(key: string): string {
    return key === 'Hijama' ? 'Hijama Hours' : 'Chiropractic Hours';
  }
}
