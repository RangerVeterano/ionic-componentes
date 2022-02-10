import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(ev) {
    setTimeout(() => {

      this.items = Array(20);//añadimos 20 elementos vacios al arreglo
      ev.target.complete(); //marcamos como completado el evento

    }, 1500);
  }

}
