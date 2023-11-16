import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-bio',
  templateUrl: './artist-bio.component.html',
  styleUrls: ['./artist-bio.component.css']
})
export class ArtistBioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var x = document.getElementById("myLinks");
    x!.style.display = "none";
  }

}
