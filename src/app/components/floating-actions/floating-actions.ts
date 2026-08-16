import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { TEMPLE_DATA } from '../../data/temple-data';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="floating-panel">
      <!-- WhatsApp Floating Shortcut -->
      <a [href]="templeData.socialLinks.whatsapp" target="_blank" class="float-btn wa-btn" aria-label="Chat on WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
      </a>

      <!-- Direct Phone Call Shortcut -->
      <a [href]="'tel:' + templeData.phone" class="float-btn phone-btn" aria-label="Call Direct">
        <i class="fa-solid fa-phone"></i>
      </a>

      <!-- Scroll Next Section -->
      <button (click)="scrollNext()" class="float-btn next-btn" aria-label="Scroll Down">
        <i class="fa-solid fa-arrow-down"></i>
      </button>

      <!-- Scroll Top (Visible on Scroll) -->
      <button 
        *ngIf="showScrollTop()" 
        (click)="scrollTop()" 
        class="float-btn top-btn" 
        aria-label="Scroll to Top"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  `,
  styleUrls: ['./floating-actions.less']
})
export class FloatingActionsComponent {
  templeData = TEMPLE_DATA;
  showScrollTop = signal(false);

  constructor(private navService: NavigationService) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTop.set(window.scrollY > 400);
  }

  scrollTop(): void {
    this.navService.scrollToSection('home');
  }

  scrollNext(): void {
    this.navService.scrollToNextSection('home');
  }
}