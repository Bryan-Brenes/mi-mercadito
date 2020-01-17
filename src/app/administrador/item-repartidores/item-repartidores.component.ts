import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-repartidores',
  templateUrl: './item-repartidores.component.html',
  styleUrls: ['./item-repartidores.component.css']
})
export class ItemRepartidoresComponent implements OnInit {

  @Input() nombre: string;
  @Input() monto: string;

  constructor() { }

  ngOnInit() {
  }

}
