import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS_DATA } from '../../data/temple-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="testimonials-section">
      <div class="testimonials-container">
        <div class="section-header-center">
          <span class="section-badge"><i class="fa-solid fa-om"></i> Devotee & Client Trust</span>
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">Read reviews from trustees and visionaries who built with us.</p>
        </div>

        <div class="testimonial-card">
          <div class="stars">
            <i *ngFor="let s of [1,2,3,4,5]" class="fa-solid fa-star"></i>
          </div>

          <p class="review-text">"{{ currentTestimonial.review }}"</p>

          <div class="client-info">
            <img [src]="currentTestimonial.avatar" [alt]="currentTestimonial.name" />
            <div>
              <h4 class="client-name">{{ currentTestimonial.name }}</h4>
              <span class="client-role">{{ currentTestimonial.role }} — {{ currentTestimonial.location }}</span>
            </div>
          </div>

          <!-- Carousel Controls -->
          <div class="carousel-controls">
            <button (click)="prev()" class="ctrl-btn"><i class="fa-solid fa-chevron-left"></i></button>
            <span class="slide-count">{{ currentIndex() + 1 }} / {{ testimonials.length }}</span>
            <button (click)="next()" class="ctrl-btn"><i class="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.less']
})
export class TestimonialsComponent {
  testimonials = TESTIMONIALS_DATA;
  currentIndex = signal<number>(0);

  get currentTestimonial() {
    return this.testimonials[this.currentIndex()];
  }

  next(): void {
    this.currentIndex.update(idx => (idx + 1) % this.testimonials.length);
  }

  prev(): void {
    this.currentIndex.update(idx => (idx - 1 + this.testimonials.length) % this.testimonials.length);
  }
}