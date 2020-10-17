import {Component, Input, OnInit} from '@angular/core';
import {Home} from '../home.model';



@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss'],
})
export class GridviewComponent implements OnInit {
  @Input() produk: Home;
  constructor() { }

  ngOnInit() {}

}
