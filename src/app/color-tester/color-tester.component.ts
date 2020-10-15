import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-tester',
  templateUrl: './color-tester.component.html',
  styleUrls: ['./color-tester.component.css']
})
export class ColorTesterComponent implements OnInit {
  colors = [];
  constructor() { }

  ngOnInit(): void {
    for(var i = 0; i <= 11; i++){
      this.colors.push(false);
    }
  }

}
