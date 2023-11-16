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

  ngOnInit(): void {
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
