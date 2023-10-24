import { Component, OnInit } from '@angular/core';
import { Slide } from '../carousel/slide';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public activeSlides: Slide[] = [];

  public slides: Slide[] = [
    {url: ["https://placehold.co/600x400/orange/white"], alt: "First Slide", text: "At this event I did X", caption: "Test" },
    {url: ["https://placehold.co/600x400/yellow/white"], alt: "Second Slide", text: "At this event I did Y", caption: "Test" },
    {url: ["https://placehold.co/600x400/orange/white"], alt:"Third Image", text: "At this event I did Z", caption: "Test" }];
  

  constructor() { }

  ngOnInit(): void {
    this.ariaTab();
  }
  
  ngOnDestroy() : void {
    var ele = document.getElementById('fine-arts-tab');
    ele?.classList.remove('selected');
  }

  ariaTab() {
    var ele = document.getElementById('fine-arts-tab');
    ele?.classList.add('selected');
  }

}
