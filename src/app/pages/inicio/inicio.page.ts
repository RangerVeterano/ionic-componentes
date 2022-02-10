import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  //inyectamos nuestro servicio para controlar los menus
  constructor(
    private mc: MenuController,
    private ds: DataService) { }

  ngOnInit() {
    this.componentes = this.ds.getMenuOpt();
  }

  mostrarMenu() {
    this.mc.open('first');
  }

}
