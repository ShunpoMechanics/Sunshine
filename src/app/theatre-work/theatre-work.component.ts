import { Component, OnInit } from '@angular/core';
import { Slide } from '../carousel/slide';
import manifest from '../../project-manifest.json'

@Component({
  selector: 'app-theatre-work',
  templateUrl: './theatre-work.component.html',
  styleUrls: ['./theatre-work.component.css']
})
export class TheatreWorkComponent implements OnInit {

  public activeSlides: Slide[] = [];

  public slides: Slide[] = manifest['fine-arts'];

  constructor() { }
  isMobile: Boolean = false;

  ngOnInit(): void {
    var x = document.getElementById("myLinks");
    x!.style.display = "none";   
    this.isMobile = this.checkIsMobile();
  }

  ngOnDestroy() : void {
    // var ele = document.getElementById('fine-arts-tab');
    // ele?.classList.remove('selected');
  }

  ariaTab() {
    // var ele = document.getElementById('fine-arts-tab');
    // ele?.classList.add('selected');
  }

  checkIsMobile() {
    return screen.width < 1000;
  };
}
