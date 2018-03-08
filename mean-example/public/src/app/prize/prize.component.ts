import { Component, OnInit } from '@angular/core';

import { PrizeService } from './prize.service';
import { Prize } from './prize';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./css/layout.css']
})
export class PrizeComponent implements OnInit {
  prizes: Prize[] = [];

  constructor(
    private _prizeService: PrizeService
  ) { }

  ngOnInit() {
    this.getPrizes();
  }

  getPrizes() {
    this._prizeService.getPrizes()
      .then(prizes => this.prizes = prizes)
      .catch(err => console.log(err));
  }

  create(prize: Prize){
    this._prizeService.create(prize)
      .then(status => this.getPrizes())
      .catch(err => console.log(err));
  }

  destroy(prize: Prize) {
    this._prizeService.destroy(prize)
    .then(status => this.getPrizes())
    .catch(err => console.log(err));
  }

  update(prize: Prize) {
    this._prizeService.update(prize)
    .then(status => this.getPrizes())
    .catch(err => console.log(err));
  }

}
