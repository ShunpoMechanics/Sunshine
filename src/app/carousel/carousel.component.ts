import { Component, Input, OnInit } from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  template: ``
})
export class CarouselComponent implements OnInit {
@Input() slides!: Slide[];
@Input() height!: number;

  activeSlide: Slide|null= null;
  activeSrc: string|null = null;
  private count: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.activeSlide = this.slides[0];
  }

  public nextImage(direction: string) {
    var active = document.querySelector('.active');
    var nextId: number;    
    var next: Element|null;
    if(active != null)
    {
      active?.classList.remove('active');
      active?.classList.add('hidden');
      var activeId = parseInt(active.id.substring(5));

      if(direction == "forward")
      {
        nextId = activeId + 1;
        if(nextId == this.slides.length)
          nextId = 0;
        next = document.querySelector(`#card-${nextId}`);
        console.log(nextId);
      }
      else
      {
        nextId = activeId - 1;
        if(nextId == -1)
        nextId = this.slides.length - 1;
        next = document.querySelector(`#card-${nextId}`);
      }
      if(next != null)
      {
        next?.classList.add('active');
        next?.classList.remove('hidden');
      }
    }
  }
}
