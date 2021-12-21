import { Component, OnInit } from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor() { }
  // scroll view function
  // tslint:disable-next-line:typedef
  navigate() {
    // sections and reference variables
    const welcomeRef = document.querySelector('#welcomeRef');
    const welcomeSection = document.querySelector('#main-section');

    const techRef = document.querySelector('#techRef');
    const techSection = document.querySelector('#technology-section');

    const eduRef = document.querySelector('#eduRef');
    const eduSection = document.querySelector('#education-section');

    const expRef = document.querySelector('#expRef');
    const expSection = document.querySelector('#experience-section');

    const contactRef = document.querySelector('#contactRef');
    const contactSection = document.querySelector('#contact-section');




    // event listeners
    welcomeRef.addEventListener('click', navigateWelcome, false);
    techRef.addEventListener('click', navigateTech, false);
    eduRef.addEventListener('click', navigateEdu, false);
    expRef.addEventListener('click', navigateExp, false);
    contactRef.addEventListener('click', navigateContact, false);




    // functions
    // tslint:disable-next-line:typedef
    function navigateWelcome(e) {
      welcomeSection.scrollIntoView({behavior: 'smooth'});
    }

    // tslint:disable-next-line:typedef
    function navigateTech(e) {
      techSection.scrollIntoView({behavior: 'smooth'});
    }
    // tslint:disable-next-line:typedef
    function navigateEdu(e) {
      eduSection.scrollIntoView({behavior: 'smooth'});
    }

    // tslint:disable-next-line:typedef
    function navigateExp(e) {
      expSection.scrollIntoView({behavior: 'smooth'});
    }

    // tslint:disable-next-line:typedef
    function navigateContact(e) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    }


  }



}
