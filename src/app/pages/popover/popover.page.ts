import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  //inyectamos el servicio que controla nuestro popover 
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      // cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss : false //Forzamos al usuario a escoger una opcion
    });
    await popover.present();

    const { data} = await popover.onWillDismiss();
    console.log('onDidDismiss resolved with role', data);
  }

}
