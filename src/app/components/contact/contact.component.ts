import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ScrollToTopService } from 'src/servives/scroll-to-top.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ScrollToTopService]
})
export class ContactComponent {
  @ViewChild('contact') contactSectionID!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('mail') mail!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  public mailSent: boolean = false;

  public contactForm: FormGroup =  new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ], []),
    mail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ], []),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ], []),
  })

  constructor(public ScrollToTopService: ScrollToTopService){}


  async sendMail(){
    this.disableForm();
    await this.sendMessage();
    this.enableAndClearForm();
    this.mailSent = true;
  }

  disableForm(){
    let name = this.name.nativeElement;
    let mail = this.mail.nativeElement;
    let message = this.message.nativeElement;
    let button = this.button.nativeElement;

    name.disabled = true;
    mail.disabled = true;
    message.disabled = true;
    button.disabled = true;
  }

  async sendMessage(){
    // await fetch('https://michael-schneider.developerakademie.net/send_mail.php',
    // await fetch('https://michaelschneider-developer.de/send_mail.php',
    await fetch('https://michaelschneider.dev/send_mail.php',
      {
        method: 'POST',
        body: this.createMessage()
      }
    )
  }

  createMessage(){
    let name = this.name.nativeElement;
    let mail = this.mail.nativeElement;
    let message = this.message.nativeElement;

    let messageSummary = `Name: ${name.value}, Message: ${message.value}, Mail: ${mail.value}`;

    let fd = new FormData();
    fd.append('name', name.value);
    fd.append('message', messageSummary);

    return fd;
  }

  enableAndClearForm(){
    let name = this.name.nativeElement;
    let mail = this.mail.nativeElement;
    let message = this.message.nativeElement;

    name.value = '';
    mail.value = '';
    message.value = '';

    name.disabled = false;
    mail.disabled = false;
    message.disabled = false;
  }
}