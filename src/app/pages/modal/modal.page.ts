import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  //inyectamos el servicio para controlar los modales
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal() {

    const modal = await this.modalCtrl.create({

      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      //Con la propiedad de abajo mandamos valores al modal hijo
      componentProps: {
        nombre : 'Ignacio',
        pais: 'España'
      }
    });

    await modal.present();

    //nos podemos quedar solo conla data del modal gracias a la desestructuracion
    // const {data}  = await modal.onDidDismiss();
    // console.log('onDidDismiss');
    const {data}  = await modal.onWillDismiss();
    console.log('onWillDismiss');

    console.log(data);
  }

}
