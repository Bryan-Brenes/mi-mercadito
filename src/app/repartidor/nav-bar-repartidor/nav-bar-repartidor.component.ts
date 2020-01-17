import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-repartidor',
  templateUrl: './nav-bar-repartidor.component.html',
  styleUrls: ['./nav-bar-repartidor.component.css']
})
export class NavBarRepartidorComponent implements OnInit {

  @Input() nombre: string;
  @Input() pagina: string;


  constructor() { }

  ngOnInit() {
  }

}
