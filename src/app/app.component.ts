import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;

  constructor(private ds: DataService) { 
    this.componentes = this.ds.getMenuOpt();
  }

  
}
