import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './why-us.component.html'
})
export class WhyUsComponent {}
