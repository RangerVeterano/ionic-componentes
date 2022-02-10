import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  //Podemos recibir los modales de la misma forma que en angular
  @Input() nombre:string;
  @Input() pais:string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {

    //Cerramos el modal pero mandando argumentos
    this.modalCtrl.dismiss({
      nombre: 'Fernando',
      pais : 'Costa Rica'
    });
  }

}
