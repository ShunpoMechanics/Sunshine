import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public images = [
    {url: "https://i.imgur.com/HkJqIE9_d.webp?maxwidth=520&shape=thumb&fidelity=high", alt: "First Slide" },
{url: "https://i.imgur.com/HkJqIE9_d.webp?maxwidth=520&shape=thumb&fidelity=high", alt: "Second Slide" },
{url: "https://i.imgur.com/HkJqIE9_d.webp?maxwidth=520&shape=thumb&fidelity=high", alt:"Third Image"}];

  constructor() { }

  ngOnInit(): void {
  }

}
