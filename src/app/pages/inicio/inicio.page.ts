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
      redirect: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirect: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirect: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Botones',
      redirect: '/botones'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirect: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirect: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirect: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirect: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirect: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirect: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input forms',
      redirect: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirect: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'List - Reorder',
      redirect: '/list-reorder'
    },
    {
      icon: 'reload-outline',
      name: 'Loading',
      redirect: '/loading'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
