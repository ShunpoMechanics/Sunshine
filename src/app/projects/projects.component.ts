import { Component, OnInit } from '@angular/core';
import { Slide } from '../carousel/slide';
import manifest from '../../project-manifest.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  
  public slides: Slide[] = manifest['arts-education'];

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
