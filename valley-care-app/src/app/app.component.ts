import { Component } from '@angular/core';
import { BookCtaComponent } from './components/book-cta/book-cta.component';
import { DockComponent } from './components/dock/dock.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { HoursComponent } from './components/hours/hours.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { NewsComponent } from './components/news/news.component';
import { TeamComponent } from './components/team/team.component';
import { ToastComponent } from './components/toast/toast.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { VideosComponent } from './components/videos/videos.component';
import { VisitComponent } from './components/visit/visit.component';
import { WhyUsComponent } from './components/why-us/why-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, HeroComponent, HighlightsComponent, TreatmentsComponent, WhyUsComponent, TeamComponent,
    HoursComponent, VideosComponent, NewsComponent, GalleryComponent, VisitComponent, BookCtaComponent, FooterComponent,
    DockComponent, ToastComponent, LightboxComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
