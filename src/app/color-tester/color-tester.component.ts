import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-tester',
  templateUrl: './color-tester.component.html',
  styleUrls: ['./color-tester.component.css']
})
export class ColorTesterComponent implements OnInit {
  colors = new Array(12).fill(false);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/color-tester/none']);
  }

  checkRelationship(){
    var firstTrue = -1;
    var checker =  [];

    for(var i = 0; i <= 11; i++){
      if(this.colors[i]){
        firstTrue = i;
        for(var j = i+1; j <= 11; j++){
          if(this.colors[j]){
            checker.push(j);
          }
        }
        break;
      }
    }



    if(checker[0] === firstTrue+1 && checker[1] === firstTrue+11 && checker.length === 2
    || checker[0] === firstTrue+1 && checker[1] === firstTrue+2 && checker.length === 2
    || checker[0] === firstTrue+10 && checker[1] === firstTrue+11 && checker.length === 2){  
      this.router.navigate(['/color-tester/analogous']);
    }

    else if(checker[0] === firstTrue+6 && checker.length === 1){
      this.router.navigate(['/color-tester/complementary']);
    }

    else if(checker[0] === firstTrue+4 && checker[1] === firstTrue+6 &&  checker[2] === firstTrue+10 && checker.length === 3 
      || checker[0] === firstTrue+2 && checker[1] === firstTrue+6 &&  checker[2] === firstTrue+8 && checker.length === 3 ){
      
      this.router.navigate(['/color-tester/doublecomplementary']);
    }

    else if(checker[0] === firstTrue+2 && checker[1] === firstTrue+7 && checker.length === 2
      || checker[0] === firstTrue+5 && checker[1] === firstTrue+7 && checker.length === 2){
      
      this.router.navigate(['/color-tester/splitcomplementary']);
    }

    else if(checker[0] === firstTrue+4 && checker[1] === firstTrue+8 && checker.length === 2){
      
      this.router.navigate(['/color-tester/triad']);
    }

    else if (firstTrue !== -1 && checker.length === 0){
      this.router.navigate(['/color-tester/monochromatic']);
    }

    else{
      this.router.navigate(['/color-tester/none']);
    }
  }

  toggleTrue(id: number){
    this.colors[id] = !this.colors[id];
    this.checkRelationship();
  }

}
