import { Component } from '@angular/core';

interface FormData {
  name: string;
  email: string;
  telephone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: FormData = {
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: ''
  };

  submitForm() {
    // Validate form fields
    if (!this.formData.name || !this.formData.email || !this.formData.telephone || !this.formData.subject || !this.formData.message) {
      console.log('Form details are incomplete');
      return;
    }

    // Handle form submission logic
    console.log('Form submitted!');
    console.log('Name:', this.formData.name);
    console.log('Email:', this.formData.email);
    console.log('Telephone:', this.formData.telephone);
    console.log('Subject:', this.formData.subject);
    console.log('Message:', this.formData.message);
    // Additional logic

    // Display a modal
    // Replace this code with your modal implementation
    alert('Form submission successful. Details saved!');
  }

}
