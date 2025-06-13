import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    contact: '',
    message: '',
  };
  // Define mailStatus to track the status of the email sending process
  mailStatus: 'idle' | 'sending' | 'success' | 'failed' | 'validationFailed' = 'idle';

  constructor(private toastr: ToastrService) {}

  isEmailValid(email: string): boolean {
    // Basic email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  validateForm(): boolean {
    if (!this.formData.name.trim()) {
      this.toastr.error('Name is required', 'Validation Error');
      return false;
    }
    if (!this.formData.email.trim()) {
      this.toastr.error('Email is required', 'Validation Error');
      return false;
    }
    if (!this.isEmailValid(this.formData.email)) {
      this.toastr.error('Invalid email format', 'Validation Error');
      return false;
    }
    if (!this.formData.message.trim()) {
      this.toastr.error('Message is required', 'Validation Error');
      return false;
    }
    return true;
  }

async send() {
    // Reset status to idle on each try
    this.mailStatus = 'idle';

    if (!this.validateForm()) {
      this.mailStatus = 'validationFailed';
      return; // Stop sending if validation fails
    }

    try {
      this.mailStatus = 'sending';

      // Initialize EmailJS once (you can also move this to ngOnInit)
      emailjs.init('3CmHofAUfIY3Ax6sT');

      const response = await emailjs.send(
        'service_zn5uc4m',
        'template_deyszft',
        {
          from_name: this.formData.name,
          to_name: 'Admin',
          contact: this.formData.contact,
          message: this.formData.message,
          from_email: this.formData.email,
        }
      );

      console.log('Email sent successfully!', response);
      this.mailStatus = 'success';
      this.toastr.success('Message sent successfully!', 'Success');

      // Reset form
      this.formData = { name: '', email: '', contact: '', message: '' };

      // Reset status after 5 seconds
      setTimeout(() => (this.mailStatus = 'idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      this.mailStatus = 'failed';
      this.toastr.error('Failed to send message. Please try again.', 'Error');

      // Reset status after 5 seconds
      setTimeout(() => (this.mailStatus = 'idle'), 5000);
    }
  }
}
  
