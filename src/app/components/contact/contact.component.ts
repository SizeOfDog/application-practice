import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {  HttpHeaders , HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  onSubmit(contactForm: NgForm) {
    // onClick submit validated form
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post('https://formspree.io/f/mvodpydg',
        { name: email.companyName, replyto: email.email, messsage: email.textarea},
        { headers}).subscribe(
          response => {
            console.log(response);
          }
      );
    }
  }
}
