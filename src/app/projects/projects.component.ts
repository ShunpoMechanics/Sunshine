import { Component, OnInit } from '@angular/core';
import { Slide } from '../carousel/slide';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  public slides: Slide[] = [
    {url: ["https://placehold.co/600x400/orange/white"], alt: "First Slide", text: "At this event I did X", caption: "Test" },
    {url: ["https://placehold.co/600x400/red/blue"], alt: "Second Slide", text: "At this event I did Y", caption: "Test" },
    {url: ["https://placehold.co/600x400/000000/AAA"], alt:"Third Image", text: "At this event I did Z", caption: "Test" }];
  
  constructor() { 

  }

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
