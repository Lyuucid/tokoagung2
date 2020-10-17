import { Injectable } from '@angular/core';
import {Home} from './home.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private newItemId: string;

  constructor() { }

  private produks: Home[] = [
    {
      id: 'item1',
      type: 'CPU',
      price: '900.0000',
      stock: '10',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51GjnJrTWhL._AC_SL1221_.jpg',
      merk: 'AMD RYZEN',
      model: '36000XT',
      baseClock: '3.8',
      boostClock: '4.5',
      core: '6',
      thread: '12',
      size: '',
      speed: '',
      chipset: '',
      support: ['']
    },

    {
      id: 'item2',
      type: 'RAM',
      price: '600.000',
      stock: '20',
      imageUrl: 'https://www.corsair.com/medias/sys_master/images/images/h34/h7e/9112432508958/-CMK8GX4M1D3000C16-Gallery-Vengeance-LPX-DDR4-Black-x1.png',
      merk: 'Corsair',
      model: 'Vengeance LPX 8GB DDR4',
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',
      size: '8',
      speed: '3000',
      chipset: '',
      support: ['']
    },

    {
      id: 'item3',
      type: 'MB',
      price: '8.500.000',
      stock: '5',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61B7e9pNOPL._SX466_.jpg',
      merk: 'AMD ',
      model: 'X570 ATX',
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',
      size: '',
      speed: '',
      chipset: 'AMD TRX40',
      support: ['Support until 2021']
    },

    {
      id: 'item4',
      type: 'GPU',
      price: '15.000.000',
      stock: '5',
      imageUrl: 'https://tpucdn.com/review/colorful-igame-gtx-1660-ultra/images/title.jpg',
      merk: 'Colorful iGame GTX 1660 ULTRA',
      model: 'GTX 1660',
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',
      size: '',
      speed: '',
      chipset: '',
      support: ['']
    }
  ];

  getAllData(){
    return [...this.produks];
  }

  getAvailableData(){
    return {...this.produks.filter(produk => {
        if (produk.stock !== '0'){
          return this.produks;
        }
      })};
  }

  getData(itemId: string){
    return {...this.produks.find(produk => {
        return produk.id === itemId;
      })};
  }

  deleteItem(itemId: string){
    this.produks = this.produks.filter(item => {
      return item.id !== itemId;
    });
  }
  addData(addedItem: Home){
    length = this.produks.length + 1;
    this.newItemId = 'item' + length;
    this.produks.push({
      id: this.newItemId,
      imageUrl: addedItem.imageUrl,
      merk: addedItem.merk,
      model: addedItem.model,
      price: addedItem.price,
      stock: addedItem.stock,
      type: addedItem.type,
      baseClock: addedItem.baseClock,
      boostClock: addedItem.boostClock,
      core: addedItem.core,
      thread: addedItem.thread,
      size: addedItem.size,
      speed: addedItem.speed,
      chipset: addedItem.chipset,
      support: addedItem.support
    });
  }

  edit(
      itemId: string,
      newImageUrl: string,
      newMerk: string,
      newModel: string,
      newPrice: string,
      newStock: string,
      newBaseClock: string,
      newBoostClock: string,
      newCore: string,
      newThread: string,
      newSize: string,
      newSpeed: string,
      newChipset: string,
      newSupport: string[],
  ){
    length = this.produks.length;
    for (let i = 0; i < length; i++){
      if (this.produks[i].id === itemId){
        this.produks[i].imageUrl = newImageUrl;
        this.produks[i].merk = newMerk;
        this.produks[i].model = newModel;
        this.produks[i].price = newPrice;
        this.produks[i].stock = newStock;
        this.produks[i].baseClock = newBaseClock;
        this.produks[i].boostClock = newBoostClock;
        this.produks[i].core = newCore;
        this.produks[i].thread = newThread;
        this.produks[i].size = newSize;
        this.produks[i].speed = newSpeed;
        this.produks[i].chipset = newChipset;
        this.produks[i].support = newSupport;
      }
    }
  }
}
