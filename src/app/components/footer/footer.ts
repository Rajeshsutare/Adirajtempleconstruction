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
            Creating sacred spaces with traditional Indian craftsmanship, shastric precision, and timeless architectural excellence.
          </p>
          <div class="footer-socials">
            <a [href]="templeData.socialLinks.instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a [href]="templeData.socialLinks.facebook" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a [href]="templeData.socialLinks.twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a [href]="templeData.socialLinks.whatsapp" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a (click)="nav('home')">Home</a></li>
            <li><a (click)="nav('about')">About Us</a></li>
            <li><a (click)="nav('founder')">Master Craftsman</a></li>
            <li><a (click)="nav('services')">Services</a></li>
            <li><a (click)="nav('gallery')">Gallery</a></li>
            <li><a (click)="nav('testimonials')">Testimonials</a></li>
            <li><a (click)="nav('location')">Location</a></li>
          </ul>
        </div>

        <!-- Col 3: Contact Info -->
        <div class="footer-col">
          <h4>Contact Us</h4>
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