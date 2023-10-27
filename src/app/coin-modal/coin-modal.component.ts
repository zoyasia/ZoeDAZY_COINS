import { Component, Input } from '@angular/core';
import { ICoins } from '../ICoins';

@Component({
  selector: 'app-coin-modal',
  templateUrl: './coin-modal.component.html',
  styleUrls: ['./coin-modal.component.css']
})
export class CoinModalComponent {

  @Input() coinModal : ICoins | undefined;

}
