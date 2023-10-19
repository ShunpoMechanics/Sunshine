import { Component, OnInit } from '@angular/core';
import { Slide } from '../carousel/slide';
import slides from '../../assets/carousel-images/mapping.json'

@Component({
  selector: 'app-theatre-work',
  templateUrl: './theatre-work.component.html',
  styleUrls: ['./theatre-work.component.css']
})
export class TheatreWorkComponent implements OnInit {

  public activeSlides: Slide[] = [];

  public slides: Slide[] = [
    {url: ["https://placehold.co/600x400/orange/white"], alt: "First Slide", text: "At this event I did X" },
    {url: ["https://placehold.co/600x400/yellow/white"], alt: "Second Slide", text: "At this event I did Y" },
    {url: ["https://placehold.co/600x400/orange/white"], alt:"Third Image", text: "At this event I did Z" }];
  
    public slides2: Slide[] = [
      {url: ["https://placehold.co/600x400/orange/white"], alt: "First Slide", text: "At this event I did X" },
      {url: ["https://placehold.co/600x400/red/black"], alt: "Second Slide", text: "At this event I did Y" },
      {url: ["https://placehold.co/600x400/000000/AAA"], alt:"Third Image", text: "At this event I did Z" }];
        
    public slides3: Slide[] = [
      {url: ["https://placehold.co/600x400/orange/white"], alt: "First Slide", text: "At this event I did X" },
      {url: ["https://placehold.co/600x400/red/black"], alt: "Second Slide", text: "At this event I did Y" },
      {url: ["https://placehold.co/600x400/000000/AAA"], alt:"Third Image", text: "At this event I did Z" }];

  constructor() { }

  ngOnInit(): void {
    this.openTab("fine-arts");
  }

  public openTab(tabName: string)
  {
    if(tabName == "fine-arts")
    {
      this.activeSlides = this.slides;
    }
    else if(tabName == "arts-education")
    {
      this.activeSlides = this.slides2;
    }    
    else
    {
      this.activeSlides = this.slides3;
    }
  }

}
