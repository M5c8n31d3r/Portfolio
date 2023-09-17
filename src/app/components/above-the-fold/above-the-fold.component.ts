import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss'],
})

export class AboveTheFoldComponent implements OnInit {
  blurredImage!: HTMLImageElement;
  blurLoad!: HTMLDivElement;


  ngOnInit(): void {
    this.blurredImage = document.getElementById(
      'profileImg'
    ) as HTMLImageElement;

    this.blurLoad = document.getElementById('blurLoad') as HTMLDivElement;

    if (this.blurredImage.complete) {
      this.loaded();
    } else {
      this.blurredImage.addEventListener('load', () => {
        this.loaded();
      });
    }
  }
  
  loaded() {
    this.blurredImage.classList.add('loaded');
    setTimeout(() => {
      this.blurLoad.style.backgroundImage = '';
    }, 125);
  }
}