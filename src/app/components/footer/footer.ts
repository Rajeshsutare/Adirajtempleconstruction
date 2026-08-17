import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEMPLE_DATA } from '../../data/temple-data';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <div class="footer-container">
        <!-- Col 1: Brand Info -->
        <div class="footer-col brand-col">
          <div class="footer-logo">
            <i class="fa-solid fa-gopuram"></i>
            <span>{{ templeData.companyName }}</span>
          </div>
          <p class="footer-desc">
            पारंपरिक भारतीय शिल्पकला, शास्त्रीय सिद्धांतों और कालातीत वास्तुशिल्प उत्कृष्टता के साथ पवित्र मंदिरों का निर्माण ।
          </p>
          <div class="footer-socials">
            <a [href]="templeData.socialLinks.instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a [href]="templeData.socialLinks.facebook" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a [href]="templeData.socialLinks.pintrest" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
            <a [href]="templeData.socialLinks.whatsapp" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a [href]="templeData.socialLinks.youtube" target="_blank"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="footer-col">
          <h4>त्वरित लिंक</h4>
          <ul>
            <li><a (click)="nav('home')">होम</a></li>
            <li><a (click)="nav('about')">हमारे बारे में</a></li>
            <li><a (click)="nav('founder')">संस्थापक</a></li>
            <li><a (click)="nav('services')">सेवाएं</a></li>
            <li><a (click)="nav('gallery')">गैलरी</a></li>
            <li><a (click)="nav('testimonials')">प्रतिक्रियाएं</a></li>
            <li><a (click)="nav('location')">स्थान</a></li>
          </ul>
        </div>

        <!-- Col 3: Contact Info -->
        <div class="footer-col">
          <h4>संपर्क करें</h4>
          <p><i class="fa-solid fa-phone"></i> <a [href]="'tel:' + templeData.phone">{{ templeData.formattedPhone }}</a></p>
          <p><i class="fa-solid fa-envelope"></i> <a [href]="'mailto:' + templeData.email">{{ templeData.email }}</a></p>
          <p><i class="fa-solid fa-location-dot"></i> {{ templeData.address }}</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 {{ templeData.companyName }}. All Rights Reserved. Built with faith & precision.</p>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.less']
})
export class FooterComponent {
  templeData = TEMPLE_DATA;

  constructor(private navService: NavigationService) { }

  nav(sectionId: string): void {
    this.navService.scrollToSection(sectionId);
  }
}