import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from "jquery";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  public images = [
    {url: "https://i.imgur.com/HkJqIE9_d.webp?maxwidth=520&shape=thumb&fidelity=high", alt: "First Slide" },
{url: "https://i.imgur.com/HkJqIE9_d.webp?maxwidth=520&shape=thumb&fidelity=high", alt: "Second Slide" },
{url: "https://i.imgur.com/HkJqIE9_d.webp?maxwidth=520&shape=thumb&fidelity=high", alt:"Third Image"}];

  slideIndex = 1; 

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  public previousImage()
  {
    var active = document.querySelector('.carousel-item-active');
    if(active != null)
    {
      active?.classList.remove('carousel-item-active');
      active?.classList.add('carousel-item');
      var activeId = active.id.substring(4);
      var prevId = parseInt(activeId) - 1;
      if(prevId == -1)
        prevId = this.images.length - 1;
      var previous = document.querySelector(`#img-${prevId}`);
      if(previous != null)
      {
        previous?.classList.add('carousel-item-active');
        previous?.classList.remove('carousel-item');
      }
    }
  }

  public nextImage() {

  }
}
