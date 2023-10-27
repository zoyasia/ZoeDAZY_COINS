import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoins } from './ICoins';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  url = "https://api.coincap.io/v2/assets/";

  fetchAllCoins() {
    return this.http.get<ICoins[]>(this.url);
  }
}

