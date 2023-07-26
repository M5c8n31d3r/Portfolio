import { Component } from '@angular/core';
declare let AOS: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {


  // constructor() {
  //   console.log(AOS); // loaded script
  // }

  ngOnInit() {
    AOS.init();
  }
}