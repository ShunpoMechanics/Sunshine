import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = "";
  email: string = "";
  subject: string ="";
  message: string = "";

  private emailUrl = 'https://us-central1-sunshine-b3dec.cloudfunctions.net/helloWorld';

  constructor(private http: HttpClient) {}

  sendEmail(e: Event) {
    e.preventDefault();
    emailjs.send("gmail","template_nprxyp9",{
      subject: this.subject,
      from_name: this.name,
      message: this.message,
      reply_to: this.email,
      }, "U3sF61MLSPwD3I6Qh");
  }

}
