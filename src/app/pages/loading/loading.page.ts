import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  //inyectamos el servicio para el loading
  constructor(private lc: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading() {
    this.presentLoading('Hola mundo');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.lc.create({
      // cssClass: 'my-custom-class',
      message, //en el emc6 se puede declarar una propiedad que su nombre sea igual de la siguiente forma
    });

    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
