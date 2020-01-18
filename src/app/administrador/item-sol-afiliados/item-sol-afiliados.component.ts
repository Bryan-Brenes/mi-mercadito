import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-sol-afiliados',
  templateUrl: './item-sol-afiliados.component.html',
  styleUrls: ['./item-sol-afiliados.component.css']
})
export class ItemSolAfiliadosComponent implements OnInit {

  @Input() nombre: string;
  constructor() { }

  ngOnInit() {
  }

}
