import { Component } from '@angular/core';
import {HeightDivService} from './height-div.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private divs: HeightDivService) {}
  divsHeight = this.divs.divs;
}
