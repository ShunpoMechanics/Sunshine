import { Component, OnInit } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  template: `
  <pdf-viewer [src]="pdfSrc"
              [render-text]="true"
              [original-size]="false"
              style="width: 400px; height: 500px"
  ></pdf-viewer>
  `
})
export class ResumeComponent implements OnInit {

  pdfSrc = "../assets/PegasusKnight.pdf";
  constructor() { }

  ngOnInit(): void {
  }

	// title = 'PSPDFKit for Web Angular Example';

	// ngAfterViewInit() {
	// 	PSPDFKit.load({
	// 		baseUrl:
	// 			location.protocol + '//' + location.host + '/assets/',
	// 		document: '/assets/PegasusKnight.pdf',
	// 		container: '#pspdfkit-container',
	// 	}).then((instance) => {
	// 		// For the sake of this demo, store the PSPDFKit for Web instance
	// 		// on the global object so that you can open the dev tools and
	// 		// play with the PSPDFKit API.
	// 		(window as any).instance = instance;
	// 	});
	// }
}
