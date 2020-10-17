import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home/home.service';
import {Home} from '../home/home.model';
import {AlertController, IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  produks: Home[];
  constructor(
      private homeService: HomeService,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.produks = this.homeService.getAllData();
  }

  ionViewWillEnter(){
    this.produks = this.homeService.getAllData();
  }

  async deleteAlert(itemId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'Delete data',
      message: 'Are you sure want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteData(itemId)
        }
      ]
    });
    await alert.present();
  }

  deleteData(itemId: string){
    this.homeService.deleteItem(itemId);
    this.ionViewWillEnter();
  }

  edit(slidingItem: IonItemSliding){
    slidingItem.close();
  }
}
