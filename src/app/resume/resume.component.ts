import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  pdfSrc = "../assets/PegasusKnight.pdf";
  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'ng2-pdf-viewer';

  isLoaded: boolean = false;

  page: number = 1;
  totalPages: number = 0;

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
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
