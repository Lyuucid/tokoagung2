import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../home/home.service';
import {Home} from '../../home/home.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  loadedData: Home;
  produks: Home[];
  form: FormGroup;

  newImageUrl: string;
  newMerk: string;
  newModel: string;
  newPrice: string;
  newStock: string;
  newBaseClock: string;
  newBoostClock: string;
  newCore: string;
  newThread: string;
  newSize: string;
  newSpeed: string;
  newChipset: string;
  newSupport: string[];

  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService,
      private router: Router,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('produkId')) {return; }
      const produkId = paramMap.get('produkId');
      this.loadedData = this.homeService.getData(produkId);

      this.newImageUrl = this.loadedData.imageUrl;
      this.newMerk = this.loadedData.merk;
      this.newModel = this.loadedData.model;
      this.newPrice = this.loadedData.price;
      this.newStock = this.loadedData.stock;
      this.newBaseClock = this.loadedData.baseClock;
      this.newBoostClock = this.loadedData.boostClock;
      this.newCore = this.loadedData.core;
      this.newThread = this.loadedData.thread;
      this.newSize = this.loadedData.size;
      this.newSpeed = this.loadedData.speed;
      this.newChipset = this.loadedData.chipset;
      this.newSupport = this.loadedData.support;
    });
  }

  async alertEdit(){
    const alert = await this.alertCtrl.create({
      header: 'Edit data',
      message: 'Are you sure to modify this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => this.onSubmit()
        }
      ]
    });
    await alert.present();
  }

  onSubmit(){
    this.homeService.edit(
        this.loadedData.id,
        this.newImageUrl,
        this.newMerk,
        this.newModel,
        this.newPrice,
        this.newStock,
        this.newBaseClock,
        this.newBoostClock,
        this.newCore,
        this.newThread,
        this.newSize,
        this.newSpeed,
        this.newChipset,
        this.newSupport,
    );
    this.router.navigate(['./admin']);
  }

}
