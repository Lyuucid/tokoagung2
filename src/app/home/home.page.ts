import { Component, OnInit } from '@angular/core';
import {Home} from './home.model';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  produks: Home[];
  public  displayMode = 1;
  constructor(
      private  homeService: HomeService
  ) { }

  ngOnInit() {
    this.produks = this.homeService.getAllData();
  }

  ionViewWillEnter(){
    this.produks = this.homeService.getAllData();
  }

  onDisplayModeChange(mode: number): void{
    this.displayMode = mode;
  }
}
