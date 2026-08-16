import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-enquiry-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  // template: `
  //   <div *ngIf="navService.isModalOpen()" class="modal-backdrop" (click)="closeModal()">
  //     <div class="modal-card" (click)="$event.stopPropagation()">
  //       <button (click)="closeModal()" class="modal-close"><i class="fa-solid fa-xmark"></i></button>

  //       <div class="modal-header">
  //         <i class="fa-solid fa-om modal-icon"></i>
  //         <h2>Temple Construction Enquiry</h2>
  //         <p>Fill out the details below for a customized architectural blueprint & cost estimate.</p>
  //       </div>

  //       <!-- Success Message -->
  //       <div *ngIf="submitStatus() === 'success'" class="status-alert success">
  //         <i class="fa-solid fa-circle-check"></i>
  //         {{ statusMessage() }}
  //       </div>

  //       <!-- Error Message -->
  //       <div *ngIf="submitStatus() === 'error'" class="status-alert error">
  //         <i class="fa-solid fa-triangle-exclamation"></i>
  //         {{ statusMessage() }}
  //       </div>

  //       <!-- Reactive Form -->
  //       <form [formGroup]="enquiryForm" (ngSubmit)="onSubmit()">
  //         <!-- Full Name -->
  //         <div class="form-group">
  //           <label for="name">Full Name *</label>
  //           <input 
  //             id="name" 
  //             type="text" 
  //             formControlName="name" 
  //             placeholder="e.g. Shri Rajesh Varma" 
  //             [class.invalid]="isFieldInvalid('name')"
  //           />
  //           <span *ngIf="isFieldInvalid('name')" class="err-text">Full name is required.</span>
  //         </div>

  //         <!-- Email -->
  //         <div class="form-group">
  //           <label for="email">Email Address *</label>
  //           <input 
  //             id="email" 
  //             type="email" 
  //             formControlName="email" 
  //             placeholder="e.g. rajesh@example.com" 
  //             [class.invalid]="isFieldInvalid('email')"
  //           />
  //           <span *ngIf="isFieldInvalid('email')" class="err-text">Enter a valid email address.</span>
  //         </div>

  //         <!-- Phone -->
  //         <div class="form-group">
  //           <label for="phone">Contact Number (10 Digits) *</label>
  //           <input 
  //             id="phone" 
  //             type="tel" 
  //             formControlName="phone" 
  //             placeholder="e.g. 9876543210" 
  //             [class.invalid]="isFieldInvalid('phone')"
  //           />
  //           <span *ngIf="isFieldInvalid('phone')" class="err-text">Enter a valid 10-digit mobile number.</span>
  //         </div>

  //         <!-- Description -->
  //         <div class="form-group">
  //           <label for="description">Requirements / Vision *</label>
  //           <textarea 
  //             id="description" 
  //             rows="4" 
  //             formControlName="description" 
  //             placeholder="Please describe your temple project location, dimensions, preferred stone type, and expected timeline..."
  //             [class.invalid]="isFieldInvalid('description')"
  //           ></textarea>
  //           <span *ngIf="isFieldInvalid('description')" class="err-text">Please describe your requirements.</span>
  //         </div>

  //         <button type="submit" [disabled]="isSubmitting()" class="btn-submit">
  //           <span *ngIf="!isSubmitting()"><i class="fa-solid fa-paper-plane"></i> Send Enquiry</span>
  //           <span *ngIf="isSubmitting()"><i class="fa-solid fa-spinner fa-spin"></i> Sending...</span>
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // `,
  templateUrl: './enquiry-modal.html',
  styleUrls: ['./enquiry-modal.less']
})
export class EnquiryModalComponent {
  enquiryForm: FormGroup;
  isSubmitting = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');
  statusMessage = signal('');

  constructor(
    public navService: NavigationService,
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.enquiryForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitStatus.set('idle');

    const result = await this.emailService.sendEnquiry({
      ...this.enquiryForm.value,
      serviceInterest: this.navService.selectedServiceForModal() || 'General Temple Project'
    });

    this.isSubmitting.set(false);

    if (result.success) {
      this.submitStatus.set('success');
      this.statusMessage.set(result.message);
      this.enquiryForm.reset();
    } else {
      this.submitStatus.set('error');
      this.statusMessage.set(result.message);
    }
  }

  closeModal(): void {
    this.navService.closeEnquiryModal();
    this.submitStatus.set('idle');
    this.enquiryForm.reset();
  }
}