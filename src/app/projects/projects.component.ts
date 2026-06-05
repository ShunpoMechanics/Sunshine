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
  public slides2: Slide[] = manifest['events'];
  public slides3: Slide[] = manifest['fine-arts'];

  isMobile: Boolean = false;
  constructor() { 

  }

  ngOnInit(): void {
    var x = document.getElementById("myLinks");
    this.slides.push(...this.slides2);
    this.slides.push(...this.slides3);
    x!.style.display = "none";
    this.ariaTab();
    this.isMobile = this.checkIsMobile();
    this.populateGallery();
  }

  ngOnDestroy() : void {
    var ele = document.getElementById('fine-arts-tab');
    ele?.classList.remove('selected');
  }

  checkIsMobile() {
    return screen.width < 1000;
  };
  
  ariaTab() {
    var ele = document.getElementById('fine-arts-tab');
    ele?.classList.add('selected');
  }

  populateGallery() {
    let container = document.getElementById('container');
    let firstSet = this.slides[0].caption;

    let title = document.createElement('h2');
    title.textContent = this.slides[0].caption;
    container?.appendChild(title);

    let caption = document.createElement('p');
    caption.textContent = this.slides[0].text;
    container?.appendChild(caption);

    let row = document.createElement('div');
    row.classList.add('row');
    row.style.marginBottom = "8px";
    row.style.justifyContent = "flex-start";
    row.style.gap = "8px";
    container?.appendChild(row);
    this.slides.forEach((slide) => {      

      if(slide.caption !== firstSet) {
        row = document.createElement('div');
        row.classList.add('row');
        row.style.marginBottom = "8px";
        row.style.justifyContent = "flex-start";
        row.style.gap = "8px";

        let title = document.createElement('h2');
        title.textContent = slide.caption;
        container?.appendChild(title);

        let caption = document.createElement('p');
        caption.textContent = slide.text;
        container?.appendChild(caption);

        container?.appendChild(row);
                
        firstSet = slide.caption;
      }

      let card = document.createElement('div');
      card.classList.add('card');
      card.style.padding = "8px";
      card.style.width = "290px";
      card.style.height = "290px";

      let cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      // let cardText = document.createElement('h4');
      // cardText.classList.add('card-text');
      // cardText.textContent = slide.caption;

      let img = document.createElement('img');
      img.classList.add('card-img-top');
      img.src = slide.url;
      img.alt = slide.alt;
      img.style.width = "272px";  
      img.style.height = "272px";

      // cardBody.appendChild(cardText);
      // cardBody.appendChild(cardTitle);
      card.appendChild(img);
      card.appendChild(cardBody);
      row?.appendChild(card);
    });
  }
}
