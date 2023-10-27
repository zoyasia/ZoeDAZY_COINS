import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { ICoins } from '../ICoins';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
  providers: [FilterPipe],  
})
export class CoinsComponent implements OnInit {

  constructor(private service:CoinService){}

  coins:ICoins[] = [];

  coinParent:ICoins | undefined;

  searchText: string = '';

  ngOnInit(){
    this.getCoins();
  }

  getCoins() {
    this.service.fetchAllCoins().subscribe((data: any) => {
      this.coins = data.data;
      return this.coins
    });
  }

  selectCoin(choosenCoin:ICoins) {
    this.coinParent = choosenCoin;
  }

}
