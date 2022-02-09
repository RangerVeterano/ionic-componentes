import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20)

  //Guardamos el elemento del scroll infinito como variable para poder manipular sus propiedades
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll; 

  constructor() { }

  ngOnInit() {
  }

  loadData() {
  
    setTimeout(() => {

      //comprobamos que la cantidad de informacion supere ya los 50 registros
      if(this.data.length > 50){
        this.infiniteScroll.complete(); //Macamos como completado el scroll
        this.infiniteScroll.disabled = true; //Desactivamos que se pueda seguir haciendo scroll
        return //no salimos de la funcion
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr)

      this.infiniteScroll.complete()
    }, 1500);
  }

}
