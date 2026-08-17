import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

import { TEMPLE_DATA } from '../data/temple-data';
import { EmailPayload } from '../model/temple-models';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    private readonly config = TEMPLE_DATA.emailJsConfig;

    constructor() {
        emailjs.init({
            publicKey: this.config.publicKey
        });
    }

    async sendEnquiry(
        payload: EmailPayload
    ): Promise<{
        success: boolean;
        message: string;
    }> {

        try {

            const templateParams = {
                from_name: payload.name,
                from_email: payload.email,
                phone_number: payload.phone,
                message: payload.description,
                service_interest:
                    payload.serviceInterest ||
                    'General Temple Construction',
                company_name: TEMPLE_DATA.companyName,
                reply_to: payload.email
            };

            // Send enquiry to contractor
            await emailjs.send(
                this.config.serviceId,
                this.config.contractorTemplateId,
                templateParams
            );

            // Send auto-reply to customer
            await emailjs.send(
                this.config.serviceId,
                this.config.clientTemplateId,
                templateParams
            );

            return {
                success: true,
                message:
                    'धन्यवाद! मंदिर निर्माण संबंधी आपकी पूछताछ सफलतापूर्वक भेज दी गई है ।'
            };

        } catch (error) {

            console.error(
                'EmailJS enquiry error:',
                error
            );

            return {
                success: false,
                message:
                    'आपकी पूछताछ भेजने में असमर्थ हैं। कृपया कुछ समय बाद पुनः प्रयास करें।'
            };
        }
    }
}