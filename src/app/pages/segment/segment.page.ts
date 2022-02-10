import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any>;
  textoBusqueda:string = "";

  constructor(private ds: DataService) { }

  ngOnInit() {

    this.superheroes = this.ds.getSuperHeroes();
  }

  segmentChanged(ev) {
    // console.log(ev.detail.value);
    this.textoBusqueda = ev.detail.value;
    
  }

}
