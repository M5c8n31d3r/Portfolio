import { Component, ElementRef,  ViewChild } from '@angular/core';
// import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  // constructor(public translate: TranslateService){
  // }


  translateEN(){
    // this.translate.use('en');
    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
    let message = document.getElementById('message');

    (name as HTMLInputElement).placeholder = 'Your name';
    (mail as HTMLInputElement).placeholder = 'Your email';
    (message as HTMLInputElement).placeholder = 'Your message';
  }


  translateDE(){
    // this.translate.use('de');
    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
    let message = document.getElementById('message');

    (name as HTMLInputElement).placeholder = 'Ihr Name';
    (mail as HTMLInputElement).placeholder = 'Ihre E-Mail adresse';
    (message as HTMLInputElement).placeholder = 'Ihre Nachricht';
  }


  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Interner Explorer, Firefox and Opera
  }


  openAndCloseMenu(){
    this.mobileMenuButton.nativeElement.classList.toggle('active');
    this.mobileMenu.nativeElement.classList.toggle('show');
  }
}