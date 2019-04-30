import { Component, OnInit } from '@angular/core';
import {HeightDivService} from '../height-div.service';

@Component({
  selector: 'app-sorted',
  templateUrl: './sorted.component.html',
  styleUrls: ['./sorted.component.css']
})
export class SortedComponent implements OnInit {

  constructor(private divs: HeightDivService) { }

  ngOnInit() {
  console.log(this.divs.divs);
  }
  bubble(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] > arr[j + 1]) {
            setInterval(() => {
              const tmp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = tmp;
            }, 1000);
          }
        }
      }
    return arr;
  }
  selection(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[min]) {
            min = j;
          }
        }
      setInterval(() => {
        const temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }, 1000);
    }
    console.log(arr);
    return arr;
  }
  random(arr) {
  arr.sort((a, b) => 0.5 - Math.random());
  }
}
