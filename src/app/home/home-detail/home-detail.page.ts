import {Component, OnInit} from '@angular/core';
import {Home} from '../home.model';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../home.service';



@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  loadedData: Home;
  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('produkId')){return; }
      const produkId = paramMap.get('produkId');
      this.loadedData = this.homeService.getData(produkId);
    });
  }

}
