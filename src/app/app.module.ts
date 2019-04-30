import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeightDivService} from './height-div.service';
import { DivsComponent } from './divs/divs.component';
import { SortedComponent } from './sorted/sorted.component';

@NgModule({
  declarations: [
    AppComponent,
    DivsComponent,
    SortedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeightDivService],
  bootstrap: [AppComponent]
})
export class AppModule { }
