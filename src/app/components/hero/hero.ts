import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { TEMPLE_DATA } from '../../data/temple-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <!-- Background Overlay -->
      <div class="hero-bg-overlay"></div>

      <!-- Hero Content -->
      <div class="hero-container">
        <div class="decorative-badge">
          <i class="fa-solid fa-om"></i> Traditional Indian Temple Architecture
        </div>

        <h1 class="hero-title">
          Where Devotion Takes <span class="gold-text">Shape in Stone</span>
        </h1>

        <p class="hero-subtitle">
          {{ templeData.subtitle }}
        </p>

        <p class="hero-tagline">
          From sacred vision to magnificent architecture.
        </p>

        <div class="hero-cta-group">
          <button (click)="openEnquiry()" class="btn-hero-primary">
            <i class="fa-solid fa-paper-plane"></i> Enquire Now
          </button>

          <button (click)="scrollToGallery()" class="btn-hero-secondary">
            <i class="fa-solid fa-images"></i> Explore Our Work
          </button>
        </div>
      </div>

      <!-- Animated Scroll Down Indicator -->
      <div class="scroll-indicator" (click)="scrollToAbout()">
        <span>Scroll to Explore</span>
        <i class="fa-solid fa-chevron-down animate-bounce"></i>
      </div>
    </section>
  `,
  styleUrls: ['./hero.less']
})
export class HeroComponent {
  templeData = TEMPLE_DATA;

  constructor(private navService: NavigationService) { }

  openEnquiry(): void {
    this.navService.openEnquiryModal();
  }

  scrollToGallery(): void {
    this.navService.scrollToSection('gallery');
  }

  scrollToAbout(): void {
    this.navService.scrollToSection('about');
  }
}