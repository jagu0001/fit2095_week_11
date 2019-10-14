import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week11Ang';
  section = 1;

  changeSection(section: number){
    this.section = section;
  }
}
