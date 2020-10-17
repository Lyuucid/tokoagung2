import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Home} from '../../home/home.model';
import {HomeService} from '../../home/home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  form: NgForm;
  produk: Home[];
  type: string;
  constructor(
      private homeService: HomeService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.produk = this.homeService.getAllData();
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      return;
    }


    const imageUrl = form.value.imageUrl;
    const merk = form.value.merk;
    const model = form.value.model;
    const price = form.value.price;
    const stock = form.value.stock;
    const type = form.value.type;
    const baseClock = form.value.baseClock;
    const boostClock = form.value.boostClock;
    const core = form.value.core;
    const thread = form.value.thread;
    const size = form.value.size;
    const speed = form.value.speed;
    const chipset = form.value.chipset;
    const compatible = form.value.compatible;

    console.log(imageUrl, merk, model, price, stock, type, baseClock, boostClock,
        core, thread, size, speed, chipset, compatible);

    this.homeService.addData(form.value);
    this.router.navigate(['/admin']);
  }

}
