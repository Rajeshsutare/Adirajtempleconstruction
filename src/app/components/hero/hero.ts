import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { TEMPLE_DATA } from '../../data/temple-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.less']
})
export class HeroComponent {
  templeData = TEMPLE_DATA;

  constructor(private navService: NavigationService) { }

  openEnquiry(): void {
    this.navService.openEnquiryModal();
  }

  scrollToGallery(): void {
    this.navService.scrollToSection('gallery');
  }

  scrollToAbout(): void {
    this.navService.scrollToSection('about');
  }
}