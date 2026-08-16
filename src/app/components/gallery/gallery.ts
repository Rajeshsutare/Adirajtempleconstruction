import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALLERY_DATA } from '../../data/temple-data';
import { GalleryItem } from '../../model/temple-models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="gallery-section">
      <div class="gallery-container">
        <div class="section-header-center">
          <span class="section-badge"><i class="fa-solid fa-om"></i> Portfolio</span>
          <h2 class="section-title">Our Temple Creations</h2>
          <p class="section-subtitle">Every structure tells a story of faith, craftsmanship and devotion.</p>
        </div>

        <!-- Category Filters -->
        <div class="filter-bar">
          <button 
            *ngFor="let cat of categories" 
            [class.active]="selectedCategory() === cat.key"
            (click)="setCategory(cat.key)"
            class="filter-btn"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Responsive Grid -->
        <div class="gallery-grid">
          <div 
            *ngFor="let item of filteredItems()" 
            class="gallery-card"
            (click)="openLightbox(item)"
          >
            <img [src]="item.imageUrl" [alt]="item.title" loading="lazy" />
            <div class="gallery-overlay">
              <span class="cat-tag">{{ item.categoryLabel }}</span>
              <h4 class="item-title">{{ item.title }}</h4>
              <i class="fa-solid fa-magnifying-glass-plus zoom-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div *ngIf="activeLightboxItem()" class="lightbox-backdrop" (click)="closeLightbox()">
        <div class="lightbox-content" (click)="$event.stopPropagation()">
          <button class="close-btn" (click)="closeLightbox()"><i class="fa-solid fa-xmark"></i></button>
          <img [src]="activeLightboxItem()?.imageUrl" [alt]="activeLightboxItem()?.title" />
          <div class="lightbox-caption">
            <h3>{{ activeLightboxItem()?.title }}</h3>
            <p>{{ activeLightboxItem()?.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./gallery.less']
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = GALLERY_DATA;
  selectedCategory = signal<string>('all');
  activeLightboxItem = signal<GalleryItem | null>(null);

  categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'construction', label: 'Construction' },
    { key: 'architecture', label: 'Architecture' },
    { key: 'stonework', label: 'Stone Work' },
    { key: 'sculptures', label: 'Sculptures' },
    { key: 'completed', label: 'Completed' }
  ];

  setCategory(key: string): void {
    this.selectedCategory.set(key);
  }

  filteredItems(): GalleryItem[] {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.galleryItems;
    return this.galleryItems.filter(item => item.category === cat);
  }

  openLightbox(item: GalleryItem): void {
    this.activeLightboxItem.set(item);
  }

  closeLightbox(): void {
    this.activeLightboxItem.set(null);
  }
}