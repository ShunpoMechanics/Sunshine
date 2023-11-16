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
  firstSlideIndexes: number[] = [];
  count: number = 0;
  tracker: string|null = null;
  index: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    var x = document.getElementById("myLinks");
    x!.style.display = "none";
    this.activeSlide = this.slides[0];
    this.firstSlideIndexes = this.slides.filter(s => s.index == 1).map(o => this.slides.indexOf(o));
    this.setTracker();
  }

  public nextImage(direction: string) {
    var active = document.querySelector('.active-img');
    var nextId: number;    
    var next: Element|null;
    if(active != null)
    {
      active?.classList.remove('active-img');
      active?.classList.add('hidden');
      var activeId = parseInt(active.id.substring(5));

      if(direction == "forward")
      {
        nextId = activeId + 1;
        if(nextId == this.slides.length)
          nextId = 0;
        next = document.querySelector(`#card-${nextId}`);
        this.activeSlide = this.slides[nextId];
      }
      else
      {
        nextId = activeId - 1;
        if(nextId == -1)
          nextId = this.slides.length - 1;
        next = document.querySelector(`#card-${nextId}`);
        this.activeSlide = this.slides[nextId];
      }
      if(next != null)
      {
        next?.classList.add('active-img');
        next?.classList.remove('hidden');
        this.setTracker();
      }
    }
  }

  public nextSet(direction: string) {
    var active = document.querySelector('.active-img');
    var activeId = parseInt(active!.id.substring(5));
    var nextId: number;    
    var next: Element|null;
    var nextSlide: Slide;

    if(active != null)
    {
      active?.classList.remove('active-img');
      active?.classList.add('hidden');

      if(direction == "forward")
      {              
        nextId = this.slides.findIndex(f => f.set == (this.activeSlide!.set + 1) && f.index == 1);  
        if(nextId == -1)
          nextId = 0;
        next = document.querySelector(`#card-${nextId}`);                
      }
      else
      {
        var nextSet = this.activeSlide!.set - 1;
        nextId = this.slides.findIndex(f => f.set == nextSet && f.index == 1);          
        if(nextId == -1)
          nextId = this.firstSlideIndexes[this.firstSlideIndexes.length - 1];
        next = document.querySelector(`#card-${nextId}`);
      }
      nextSlide = this.slides[nextId];        
      this.activeSlide = nextSlide;

      if(next != null)
      {
        next?.classList.add('active-img');
        next?.classList.remove('hidden');        
        this.setTracker();
      }
    }
  }

  public setTracker() {
    this.index = this.activeSlide!.index;
    this.count = this.slides.filter(s => s.alt == this.activeSlide!.alt).length;
    this.tracker = `${this.index} of ${this.count}`;
  }
}
