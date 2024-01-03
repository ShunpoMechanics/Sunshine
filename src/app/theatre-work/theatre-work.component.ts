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

  toggleContent(page: string) {
    if(page == "fine-arts")
    {
      this.slides = manifest['fine-arts'];
      let buttons = Array.from(document.getElementsByClassName("btn"));
      buttons.forEach(element => {
        if(element.id == "fine-arts"){
          element.classList.remove("btn-success");
          element.classList.add("btn-blue");
        }
        else {
          element.classList.remove("btn-blue");
          element.classList.add("btn-success");
        }
      });
    }
    else if (page == "arts-education")
    {
      this.slides = manifest['arts-education'];
      let buttons = Array.from(document.getElementsByClassName("btn"));
      buttons.forEach(element => {
        if(element.id == "arts-education"){
          element.classList.remove("btn-success");
          element.classList.add("btn-blue");
        }
        else {
          element.classList.remove("btn-blue");
          element.classList.add("btn-success");
        }
      });
    }
    else if (page == "events")
    {
      this.slides = manifest['events'];
      let buttons = Array.from(document.getElementsByClassName("btn"));
      buttons.forEach(element => {
        if(element.id == "events"){
          element.classList.remove("btn-success");
          element.classList.add("btn-blue");
        }
        else {
          element.classList.remove("btn-blue");
          element.classList.add("btn-success");
        }
      });
    }
  }

  ariaTab() {
    // var ele = document.getElementById('fine-arts-tab');
    // ele?.classList.add('selected');
  }

  checkIsMobile() {
    return screen.width < 1000;
  };
}
