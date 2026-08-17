import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TEMPLE_DATA } from '../../data/temple-data';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="location" class="location-section">
      <div class="location-container">
        <div class="section-header-center">
          <span class="section-badge"><i class="fa-solid fa-om"></i> कार्यालय</span>
          <h2 class="section-title">हमारे कार्यालय में पधारें</h2>
          <p class="section-subtitle">हमें आपके मंदिर निर्माण प्रोजेक्ट पर आपसे व्यक्तिगत रूप से चर्चा करने में खुशी होगी।</p>
        </div>

        <div class="location-grid">
          <!-- Google Maps Iframe -->
          <div class="map-wrapper">
            <iframe 
              [src]="safeMapUrl" 
              width="100%" 
              height="380" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Aadiraj Mandir Nirman Office Location"
            ></iframe>
          </div>

          <!-- Info Box -->
          <div class="info-card">
            <h3>संपर्क विवरण</h3>

            <div class="info-item">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <strong>पता</strong>
                <p>{{ templeData.address }}</p>
              </div>
            </div>

            <div class="info-item">
              <i class="fa-solid fa-phone"></i>
              <div>
                <strong>फ़ोन नंबर</strong>
                <p><a [href]="'tel:' + templeData.phone">{{ templeData.formattedPhone }}</a></p>
              </div>
            </div>

            <div class="info-item">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <strong>ईमेल पता Address</strong>
                <p><a [href]="'mailto:' + templeData.email">{{ templeData.email }}</a></p>
              </div>
            </div>

            <div class="info-item">
              <i class="fa-solid fa-clock"></i>
              <div>
                <strong>कार्य समय</strong>
                <p>{{ templeData.workingHours }}</p>
              </div>
            </div>

            <a [href]="templeData.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn-directions">
              <i class="fa-solid fa-diamond-turn-right"></i> दिशा-निर्देश प्राप्त करें
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./location.less']
})
export class LocationComponent {
  templeData = TEMPLE_DATA;
  safeMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(TEMPLE_DATA.googleMapsEmbedUrl);
  }
}