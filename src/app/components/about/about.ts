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
              src="p26.jpeg" 
              alt="Traditional Temple Carving Craftsman" 
              loading="lazy"
            />
          </div>
          <div class="experience-badge">
            <span class="exp-number">15+</span>
            <span class="exp-text">वास्तुकला में उत्कृष्टता के वर्ष</span>
          </div>
        </div>

        <!-- Right Content -->
        <div class="about-content">
          <div class="section-label">
            <i class="fa-solid fa-landmark"></i> प्राचीन विरासत का संरक्षण
          </div>

          <h2 class="section-title">मंदिर निर्माण। परंपराओं का संरक्षण । </h2>

          <p class="lead-text">
            हम समृद्ध नागर, द्रविड़ और वेसर स्थापत्य परंपराओं से प्रेरित पारंपरिक भारतीय मंदिरों के डिजाइन और निर्माण में विशेषज्ञ हैं । 
          </p>

          <p class="body-text">
            हमारे द्वारा डिजाइन किए गए प्रत्येक पवित्र मंदिर परिसर में प्राचीन वास्तु सिद्धांतों, हाथ से तराशे गए पत्थरों की कलाकारी और आधुनिक संरचनात्मक इंजीनियरिंग का अद्भुत समन्वय होता है। पवित्र बलुआ पत्थर और संगमरमर के चयन से लेकर भव्य शिखर और कलश की स्थापना तक, हमारी संपूर्ण निर्माण प्रक्रिया यह सुनिश्चित करती है कि ये पवित्र स्थल आने वाली कई पीढ़ियों तक अपनी भव्यता और आस्था को बनाए रखें ।
          </p>

          <!-- Statistics Grid -->
          <div class="stats-grid">
            <div class="stat-card">
              <h3>15+</h3>
              <p>वर्षों का अनुभव</p>
            </div>
            <div class="stat-card">
              <h3>100+</h3>
              <p>मंदिर डिज़ाइन किए गए</p>
            </div>
            <div class="stat-card">
              <h3>500+</h3>
              <p>संतुष्ट ग्राहक</p>
            </div>
            <div class="stat-card">
              <h3>50+</h3>
              <p>मास्टर शिल्पकार</p>
            </div>
          </div>

          <button (click)="openEnquiry()" class="btn-about-action">
            और जानें एवं परामर्श लें <i class="fa-solid fa-arrow-right"></i>
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