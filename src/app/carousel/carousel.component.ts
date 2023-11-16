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
  count: number = 0;
  tracker: string|null = null;
  index: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.activeSlide = this.slides[0];
    this.index = 1;
    this.setTracker();
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
        this.index++;
        if(nextId == this.slides.length)
          nextId = 0;
        next = document.querySelector(`#card-${nextId}`);
        this.activeSlide = this.slides[nextId];
      }
      else
      {
        nextId = activeId - 1;
        this.index--;
        if(nextId == -1)
          nextId = this.slides.length - 1;
        next = document.querySelector(`#card-${nextId}`);
        this.activeSlide = this.slides[nextId];
      }
      if(next != null)
      {
        next?.classList.add('active');
        next?.classList.remove('hidden');
        this.setTracker();
      }
    }
  }

  public nextSet(direction: string) {
    var active = document.querySelector('.active');
    var activeId = parseInt(active!.id.substring(5));
    var nextId: number;    
    var next: Element|null;
    var nextSlide: Slide;

    if(active != null)
    {
      active?.classList.remove('active');
      active?.classList.add('hidden');

      do {
        
      if(direction == "forward")
      {
        nextId = activeId + 1;
        if(nextId == this.slides.length)
          nextId = 0;
        next = document.querySelector(`#card-${nextId}`);                
      }
      else
      {
        nextId = activeId - 1;
        if(nextId == -1)
          nextId = this.slides.length - 1;
        next = document.querySelector(`#card-${nextId}`);
      }
      nextSlide = this.slides[nextId];        
      this.activeSlide = this.slides[activeId];        
      var goAgain = true;
      if(nextSlide.alt != this.activeSlide.alt)
        goAgain = false;
      else
      {
        activeId = nextId;
      }
    } while(goAgain);

      if(next != null)
      {
        next?.classList.add('active');
        next?.classList.remove('hidden');
        this.setTracker();
      }
    }
  }

  public setTracker() {
    var toUpdate = false;
    if(this.index > this.count)
      this.index = 1;
    else if(this.index < 1)
      toUpdate = true;
    this.count = this.slides.filter(s => s.alt == this.activeSlide!.alt).length;
    if(toUpdate)
      this.index = this.count;
    this.tracker = `${this.index} of ${this.count}`;
  }
}
