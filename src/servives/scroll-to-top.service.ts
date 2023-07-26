import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  constructor() { }
}