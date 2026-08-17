import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { CONTRACTOR_DATA, TEMPLE_DATA } from '../../data/temple-data';

@Component({
  selector: 'app-founder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="founder" class="founder-section">
      <div class="founder-container">
        <!-- Left Side Photo -->
        <div class="founder-photo-column">
          <div class="photo-card">
            <img [src]="contractor.photo" [alt]="contractor.name" loading="lazy" />
            <div class="gold-accent-border"></div>
          </div>
        </div>

        <!-- Right Side Bio & Stats -->
        <div class="founder-info-column">
          <div class="badge-label">हमारे विशेषज्ञ से मिलिए</div>
          
          <h2 class="founder-title">
            हर पवित्र संरचना के पीछे एक कुशल शिल्पकार
          </h2>

          <div class="founder-name-tag">
            <h3>{{ contractor.name }}</h3>
            <span class="designation">{{ contractor.designation }}</span>
          </div>

          <blockquote class="founder-quote">
            <i class="fa-solid fa-quote-left quote-icon"></i>
            <p>"{{ contractor.quote }}"</p>
          </blockquote>

          <p class="bio-para">{{ contractor.descriptionParagraph1 }}</p>
          <p class="bio-para">{{ contractor.descriptionParagraph2 }}</p>

          <!-- Animated Stat Cards -->
          <div class="founder-stats-grid">
            <div class="f-stat-card">
              <span class="f-num">{{ contractor.experience }}</span>
              <span class="f-label">वर्षों का अनुभव</span>
            </div>

            <div class="f-stat-card">
              <span class="f-num">{{ contractor.templesConstructed }}</span>
              <span class="f-label">मंदिर निर्माण</span>
            </div>

            <div class="f-stat-card">
              <span class="f-num">{{ contractor.happyClients }}</span>
              <span class="f-label">संतुष्ट ग्राहक</span>
            </div>

            <div class="f-stat-card">
              <span class="f-num">{{ contractor.artisans }}</span>
              <span class="f-label">मास्टर शिल्पकार</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="founder-cta-group">
            <button (click)="openEnquiry()" class="btn-founder-primary">
              <i class="fa-solid fa-comments"></i> अपने मंदिर निर्माण प्रोजेक्ट पर चर्चा करें
            </button>

            <a [href]="'tel:' + templeData.phone" class="btn-founder-call">
              <i class="fa-solid fa-phone"></i> कॉल करें
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./founder.less']
})
export class FounderComponent {
  contractor = CONTRACTOR_DATA;
  templeData = TEMPLE_DATA;

  constructor(private navService: NavigationService) { }

  openEnquiry(): void {
    this.navService.openEnquiryModal(`Direct Consultation with ${this.contractor.name}`);
  }
}