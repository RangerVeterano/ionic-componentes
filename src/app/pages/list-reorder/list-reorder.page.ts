import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer maravilla', 'Flash'];

  toggleList:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  //metodo para reordenar los elementos de la lista
  doReorder(event: any) {
    console.log(event);

    //Quitamos el elemento de la posicion que se encuentra
    //Como splice devuelve un arreglo modificado en este caso solo queremos la primera posicion
    //El elemento que nosostros hemos movido
    const itemMover = this.personajes.splice(event.detail.from,1)[0];

    //indicamos la posicion que queremos poner el elemento, indicamos que no queremos cortar nada
    //indicamos que queremos insertar
    this.personajes.splice(event.detail.to,0,itemMover);

    event.detail.complete();
    console.log(this.personajes);
  }

}
