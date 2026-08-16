import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    isModalOpen = signal<boolean>(false);
    selectedServiceForModal = signal<string | null>(null);

    openEnquiryModal(serviceTitle?: string): void {
        if (serviceTitle) {
            this.selectedServiceForModal.set(serviceTitle);
        } else {
            this.selectedServiceForModal.set(null);
        }
        this.isModalOpen.set(true);
        document.body.style.overflow = 'hidden';
    }

    closeEnquiryModal(): void {
        this.isModalOpen.set(false);
        this.selectedServiceForModal.set(null);
        document.body.style.overflow = '';
    }

    scrollToSection(sectionId: string): void {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    scrollToNextSection(currentSectionId: string): void {
        const sections = ['home', 'about', 'founder', 'services', 'gallery', 'testimonials', 'location', 'contact'];
        const currentIndex = sections.indexOf(currentSectionId);
        if (currentIndex !== -1 && currentIndex < sections.length - 1) {
            this.scrollToSection(sections[currentIndex + 1]);
        } else {
            this.scrollToSection('home');
        }
    }
}