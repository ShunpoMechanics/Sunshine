import { Component, OnInit } from '@angular/core';
import { Slide } from '../carousel/slide';
import manifest from '../../project-manifest.json'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public activeSlides: Slide[] = [];

  public slides: Slide[] = manifest['events'];
  

  constructor() { }

  ngOnInit(): void {
    var x = document.getElementById("myLinks");
    x!.style.display = "none";
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
