import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-comerciante',
  templateUrl: './navbar-comerciante.component.html',
  styleUrls: ['./navbar-comerciante.component.css']
})
export class NavbarComercianteComponent implements OnInit {

  @Input() nombre: string;
  @Input() pagina: string;

  constructor() { }

  ngOnInit() {
  }

}
