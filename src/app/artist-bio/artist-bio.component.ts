import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-bio',
  templateUrl: './artist-bio.component.html',
  styleUrls: ['./artist-bio.component.css']
})
export class ArtistBioComponent implements OnInit {

  constructor() { }

  isMobile: Boolean = false;

  ngOnInit(): void {
    var x = document.getElementById("myLinks");
    x!.style.display = "none";
    this.isMobile = this.checkIsMobile();
  }

  checkIsMobile() {
    return screen.width < 1000;
  };

}
