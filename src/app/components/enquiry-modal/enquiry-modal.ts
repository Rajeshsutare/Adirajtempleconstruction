import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-enquiry-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],

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

    if (this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitStatus.set('idle');
    this.statusMessage.set('');

    try {
      const formValue = this.enquiryForm.getRawValue();

      const result = await this.emailService.sendEnquiry({
        name: formValue.name.trim(),
        email: formValue.email.trim(),
        phone: formValue.phone.trim(),
        description: formValue.description.trim(),
        serviceInterest:
          this.navService.selectedServiceForModal() ||
          'General Temple Project'
      });

      if (result.success) {
        this.submitStatus.set('success');
        this.statusMessage.set(result.message);

        this.enquiryForm.reset();
      } else {
        this.submitStatus.set('error');
        this.statusMessage.set(result.message);
      }

    } catch (error) {
      console.error('Enquiry submission failed:', error);

      this.submitStatus.set('error');

      this.statusMessage.set(
        'Unable to send your enquiry. Please try again.'
      );

    } finally {
      this.isSubmitting.set(false);
    }
  }

  closeModal(): void {
    this.navService.closeEnquiryModal();
    this.submitStatus.set('idle');
    this.enquiryForm.reset();
  }
}