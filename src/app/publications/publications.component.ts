import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  isMobile: boolean = false;
  constructor() { }

  ngOnInit(): void {    
    var x = document.getElementById("myLinks");
    x!.style.display = "none";
    this.isMobile = this.checkIsMobile();
  }

  checkIsMobile() {
    return screen.width < 1000;
  };
}
