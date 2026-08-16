import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="about-container">
        <!-- Left Visual -->
        <div class="about-image-wrapper">
          <div class="image-frame">
            <img 
              src="https://images.unsplash.com/photo-1661446569716-86e93bf267d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VHJhZGl0aW9uYWwlMjBUZW1wbGUlMjBDYXJ2aW5nJTIwQ3JhZnRzbWFufGVufDB8fDB8fHww" 
              alt="Traditional Temple Carving Craftsman" 
              loading="lazy"
            />
          </div>
          <div class="experience-badge">
            <span class="exp-number">15+</span>
            <span class="exp-text">Years of Architectural Excellence</span>
          </div>
        </div>

        <!-- Right Content -->
        <div class="about-content">
          <div class="section-label">
            <i class="fa-solid fa-landmark"></i> Preserving Ancient Heritage
          </div>

          <h2 class="section-title">Building Temples. Preserving Traditions.</h2>

          <p class="lead-text">
            We specialize in the design and construction of traditional Indian temples inspired by rich Nagara, Dravidian, and Vesara architectural heritages.
          </p>

          <p class="body-text">
            Every sacred complex we design combines ancient Vastu principles, hand-chiseled stone artistry, and modern structural engineering. From selecting sacred sandstone and marble to installing the soaring Shikhar and Kalash, our end-to-end execution ensures sacred spaces last for centuries.
          </p>

          <!-- Statistics Grid -->
          <div class="stats-grid">
            <div class="stat-card">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div class="stat-card">
              <h3>100+</h3>
              <p>Temples Designed</p>
            </div>
            <div class="stat-card">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div class="stat-card">
              <h3>50+</h3>
              <p>Skilled Artisans</p>
            </div>
          </div>

          <button (click)="openEnquiry()" class="btn-about-action">
            Know More & Consult <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.less']
})
export class AboutComponent {
  constructor(private navService: NavigationService) { }

  openEnquiry(): void {
    this.navService.openEnquiryModal('General Temple Construction & Architecture');
  }
}