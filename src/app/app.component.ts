import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sunshine-Website';

  public myFunction() {
    var x = document.getElementById("myLinks");
    if (x!.style.display === "block") {
      x!.style.display = "none";
    } else {
      x!.style.display = "block";
    }
  }
}
