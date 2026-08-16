import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from '../../data/temple-data';
import { ServiceItem } from '../../model/temple-models';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services-section">
      <div class="services-container">
        <!-- Section Header -->
        <div class="section-header-center">
          <span class="section-badge"><i class="fa-solid fa-om"></i> Architectural Expertise</span>
          <h2 class="section-title">Our Temple Construction Services</h2>
          <p class="section-subtitle">From concept to completion, we bring your sacred vision to life.</p>
        </div>

        <!-- Responsive Card Grid -->
        <div class="services-grid">
          <div *ngFor="let item of services" class="service-card">
            <div class="card-image">
              <img [src]="item.image" [alt]="item.title" loading="lazy" />
              <div class="card-icon-floating">
                <i [class]="'fa-solid ' + item.icon"></i>
              </div>
            </div>

            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>

              <ul class="feature-list">
                <li *ngFor="let feat of item.features">
                  <i class="fa-solid fa-circle-check"></i> {{ feat }}
                </li>
              </ul>

              <button (click)="openEnquiry(item.title)" class="btn-card-enquire">
                Learn More / Enquire <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services.less']
})
export class ServicesComponent {
  services: ServiceItem[] = SERVICES_DATA;

  constructor(private navService: NavigationService) { }

  openEnquiry(serviceTitle: string): void {
    this.navService.openEnquiryModal(serviceTitle);
  }
}