import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-color-about',
  templateUrl: './color-about.component.html',
  styleUrls: ['./color-about.component.css'],
  providers: [AboutService]
})
export class ColorAboutComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.scrollDown();
  }

  
  scrollUp(){
    this.aboutService.scrollUp();
  }

}
