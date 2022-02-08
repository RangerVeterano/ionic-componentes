import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  dateValue:Date = new Date();


  constructor() { }

  ngOnInit() {
  }

  cambioFecha(e){
    console.log(e);
    console.log(new Date(e.detail.value));
  }

  confirm(event) {
    console.log(event);
  }

  formatDate(arg){
    return (arg)
  }
}
