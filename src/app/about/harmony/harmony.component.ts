import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-harmony',
  templateUrl: './harmony.component.html',
  styleUrls: ['./harmony.component.css'],
  providers: [AboutService]
})
export class HarmonyComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.scrollDown();
  }

  
  scrollUp(){
    this.aboutService.scrollUp();
  }

}
