import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { TEMPLE_DATA } from '../../data/temple-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.less']
})
export class HeaderComponent {
  templeData = TEMPLE_DATA;
  isScrolled = signal(false);
  isMobileOpen = signal(false);

  constructor(private navService: NavigationService) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  navigateTo(sectionId: string): void {
    this.navService.scrollToSection(sectionId);
    this.isMobileOpen.set(false);
  }

  openEnquiry(): void {
    this.navService.openEnquiryModal();
  }

  toggleMobileMenu(): void {
    this.isMobileOpen.update(v => !v);
  }
}