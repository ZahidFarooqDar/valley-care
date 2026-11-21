import { Component } from '@angular/core';
import { EMAIL } from '../../data/clinic.data';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly email = EMAIL;
}
