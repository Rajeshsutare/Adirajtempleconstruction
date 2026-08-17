import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEMPLE_DATA } from '../../data/temple-data';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="contact-container">
        <div class="contact-banner">
          <div class="banner-text">
            <h2>आइए, मिलकर एक पवित्र मंदिर का निर्माण करें</h2>
            <p>अपने मंदिर के सपने, वास्तु परामर्श या निर्माण संबंधी अनुमान पर चर्चा करने के लिए हमसे संपर्क करें ।</p>
          </div>

          <div class="banner-actions">
            <a [href]="'tel:' + templeData.phone" class="btn-call">
              <i class="fa-solid fa-phone"></i> {{ templeData.formattedPhone }}
            </a>
            <button (click)="openModal()" class="btn-enquire">
              <i class="fa-solid fa-envelope"></i> सीधे पूछताछ करें
            </button>
          </div>
        </div>

        <!-- Social Media Grid -->
        <div class="social-grid">
          <a [href]="templeData.socialLinks.whatsapp" target="_blank" class="social-card wa">
            <i class="fa-brands fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <a [href]="templeData.socialLinks.instagram" target="_blank" class="social-card ig">
            <i class="fa-brands fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a [href]="templeData.socialLinks.facebook" target="_blank" class="social-card fb">
            <i class="fa-brands fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
          <a [href]="templeData.socialLinks.youtube" target="_blank" class="social-card yt">
            <i class="fa-brands fa-youtube"></i>
            <span>YouTube</span>
          </a>
          <a [href]="templeData.socialLinks.pintrest" target="_blank" class="social-card tw">
            <i class="fa-brands fa-pinterest"></i>
            <span>Pinterest</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.less']
})
export class ContactComponent {
  templeData = TEMPLE_DATA;

  constructor(private navService: NavigationService) { }

  openModal(): void {
    this.navService.openEnquiryModal();
  }
}