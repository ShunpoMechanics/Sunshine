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

  error: Boolean = false;
  constructor(private http: HttpClient) {}

  sendEmail(e: Event) {
    e.preventDefault();
    this.validateForm();
    
    if(this.error)
      return ;

    var le = document.getElementById("sendBtn");
    le!.innerText = "Sending";
    le!.setAttribute("disabled", "disabled");

    emailjs.send("gmail","template_nprxyp9",{
      subject: this.subject,
      from_name: this.name,
      message: this.message,
      reply_to: this.email,
      }, "U3sF61MLSPwD3I6Qh").then(x => {
          le!.innerText = "Sent!";
          le!.removeAttribute("disabled");
      }

        ).catch(e => {
          le!.innerText = "Error, please try again!"
          le!.removeAttribute("disabled");
        });
  }

  validateForm() {
    document.getElementById("contact-full-name")?.classList.remove("error");
    document.getElementById("contact-full-name")?.classList.remove("error");
    document.getElementById("contact-full-name")?.classList.remove("error");
    document.getElementById("contact-full-name")?.classList.remove("error");
    if(!this.name)
    {
      document.getElementById("contact-full-name")?.classList.add("error");
      this.error = true;
    }
    if(!this.message)
    {
      document.getElementById("contact-body")?.classList.add("error");
      this.error = true;
    }
    if(!this.subject)
    {
      document.getElementById("contact-subject")?.classList.add("error");
      this.error = true;
    }
    if(!this.email || !this.validateEmail(this.email))
    {
      document.getElementById("contact-email")?.classList.add("error");
      this.error = true;
    }
  }

  validateEmail(email: string) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

}
