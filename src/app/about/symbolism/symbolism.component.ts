import { Component, OnInit, Output } from '@angular/core';
import {AboutService} from '../about.service'
@Component({
  selector: 'app-symbolism',
  templateUrl: './symbolism.component.html',
  styleUrls: ['./symbolism.component.css'],
  providers: [AboutService]
})
export class SymbolismComponent implements OnInit {
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.scrollDown();
  }

  
  scrollUp(){
    this.aboutService.scrollUp();
  }
}
