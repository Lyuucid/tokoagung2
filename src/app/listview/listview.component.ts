import {Component, Input, OnInit} from '@angular/core';
import {Home} from '../home/home.model';



@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss'],
})
export class ListviewComponent implements OnInit {
  @Input() produk: Home;
  constructor() { }

  ngOnInit() {}

}
