import { Component, OnInit } from '@angular/core';
import { Slide } from '../carousel/slide';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public slides: Slide[] = [
    {url: "https://placehold.co/800x600/orange/white", alt: "First Slide", text: "At this event I did X" },
    {url: "https://placehold.co/800x600/red/black", alt: "Second Slide", text: "At this event I did Y" },
    {url: "https://placehold.co/800x600/000000/AAA", alt:"Third Image", text: "At this event I did Z" }];
  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
