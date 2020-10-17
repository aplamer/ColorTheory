import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-tester',
  templateUrl: './color-tester.component.html',
  styleUrls: ['./color-tester.component.css']
})
export class ColorTesterComponent implements OnInit {
  //creates an array filled with false for each button on the page. False means a color is not chosen, True means it is chosen(this is adjusted via toggleTrue method)
  colors = new Array(12).fill(false);

  constructor(private router: Router) {
  }

  ngOnInit(): void {;
  }

  //function that checks whether or not a color relationship is present based on the values in the colors array 
  checkRelationship(){

    //setup
    var firstTrue = -1;
    var checker =  [];

    //works by finding the first true value within the array.
    for(var i = 0; i <= 11; i++){
      if(this.colors[i]){
        //once it finds it then it assigns the variable firstTrue to the index of where the first true value of the array was found
        firstTrue = i;
        //after that it finds all of the other indexes with true values within colors and then pushes the indexes onto the checkers array
        for(var j = i+1; j <= 11; j++){
          if(this.colors[j]){
            checker.push(j);
          }
        }
        //does not loop more than once through the colors array (which is always 12) runtime should be O(1)
        break;
      }
    }


    //checks the checker array and see if it contains the exact values that suggest a color relationship exists
    //analogous check
    if(checker[0] === firstTrue+1 && checker[1] === firstTrue+11 && checker.length === 2
    || checker[0] === firstTrue+1 && checker[1] === firstTrue+2 && checker.length === 2
    || checker[0] === firstTrue+10 && checker[1] === firstTrue+11 && checker.length === 2){  
      this.router.navigate(['/color-tester/analogous']);
    }

    //complementary check
    else if(checker[0] === firstTrue+6 && checker.length === 1){
      this.router.navigate(['/color-tester/complementary']);
    }

    //double complementary check
    else if(checker[0] === firstTrue+4 && checker[1] === firstTrue+6 &&  checker[2] === firstTrue+10 && checker.length === 3 
      || checker[0] === firstTrue+2 && checker[1] === firstTrue+6 &&  checker[2] === firstTrue+8 && checker.length === 3 ){
      
      this.router.navigate(['/color-tester/doublecomplementary']);
    }

    //splitcomplementary check
    else if(checker[0] === firstTrue+2 && checker[1] === firstTrue+7 && checker.length === 2
      || checker[0] === firstTrue+5 && checker[1] === firstTrue+7 && checker.length === 2){
      
      this.router.navigate(['/color-tester/splitcomplementary']);
    }

    //triad check
    else if(checker[0] === firstTrue+4 && checker[1] === firstTrue+8 && checker.length === 2){
      
      this.router.navigate(['/color-tester/triad']);
    }

    //monochromatic check
    else if (firstTrue !== -1 && checker.length === 0){
      this.router.navigate(['/color-tester/monochromatic']);
    }

    //if no relationship is found before this it will navigate to the none component
    else{
      this.router.navigate(['/color-tester/none']);
    }
  }

  //function that toggles the values within the colors array. Will toggle at the index that matches the given id number then runs check relationship to properly update the page.
  toggleTrue(id: number){
    this.colors[id] = !this.colors[id];
    this.checkRelationship();
  }

}
