import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList; //Hacemos referencia a la lista de nuestro html

  constructor(private ds: DataService) { }

  ngOnInit() {

    this.usuarios = this.ds.getUsuarios();

  }

  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems(); //Cerramos las opciones de las listas
  }

  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems()
  }

  delete(user) {
    console.log('Borrar', user);
    this.ionList.closeSlidingItems()
  }

}
