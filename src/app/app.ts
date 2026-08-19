import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { EnquiryModalComponent } from './components/enquiry-modal/enquiry-modal';
import { FloatingActionsComponent } from './components/floating-actions/floating-actions';
import { FooterComponent } from './components/footer/footer';
import { FounderComponent } from './components/founder/founder';
import { GalleryComponent } from './components/gallery/gallery';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { LocationComponent } from './components/location/location';
import { ServicesComponent } from './components/services/services';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { AchievementComponent } from './components/achievement/achievement';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    FounderComponent,
    ServicesComponent,
    GalleryComponent,
    TestimonialsComponent,
    LocationComponent,
    ContactComponent,
    FooterComponent,
    EnquiryModalComponent,
    FloatingActionsComponent,
    AchievementComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-founder></app-founder>
      <app-achievement></app-achievement>
      <app-services></app-services>
      <app-gallery></app-gallery>
      <app-testimonials></app-testimonials>
      <app-location></app-location>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
    <app-enquiry-modal></app-enquiry-modal>
    <app-floating-actions></app-floating-actions>
  `,
  styleUrls: ['./app.less']
})
export class AppComponent { }