import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})
export class ContactComponent {
  name: string = "";
  email: string = "";
  subject: string ="";
  message: string = "";

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.emailService.sendEmail(this.name, this.email, this.message, this.message).subscribe(
      response => {
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }
}
