import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string,
  name: string,
  redirect: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action sheet',
      redirect : '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirect : '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirect : '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Botones',
      redirect : '/botones'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirect : '/card'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
