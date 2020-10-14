import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  //Properties of the component including a colorpicker from @jaames/iro folder, and an empty array for the ngFor loop within the html file.
  colorPicker: iro.ColorPicker;
  boxes = [];

  constructor() {}

  //When the component is initialized it will create a colorpicker with certain properties see https://iro.js.org/guide.html for specifics
  //Also fills the empty boxes array with the number of fill boxes we want, set to 70 currently.

  ngOnInit(): void {
    
    this.colorPicker = iro.ColorPicker("#boxPicker", {
      width: 500,
      color: "rgb(255, 0, 0)",
      borderWidth: 1,
      borderColor: "#fff",
      layout: [
        {
          component: iro.ui.Box,
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'hue'
          }
        }
      ]
    });

    for(var i = 1; i <=70; i++){
      this.boxes.push(i);
    }
  }
  
  //When A button is clicked this function finds the button by accessing the first element
  //returned by the the .getElementsByClassName function along with the id passed into the function, it is them casted into an
  //HTMLElement and then it's style is edited to match the colorPickers current values using the colorpickers built in hexString function.
  changeButtonColor(id: any){
    var button = document.getElementsByClassName(id)[0] as HTMLElement;
    button.style.backgroundColor = this.colorPicker.color.hexString;
  }
}
