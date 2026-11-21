import { Component } from '@angular/core';
import { EMAIL } from '../../data/clinic.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-visit',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './visit.component.html'
})
export class VisitComponent {
  readonly email = EMAIL;
}
