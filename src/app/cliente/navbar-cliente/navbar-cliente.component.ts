import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent implements OnInit {

  @Input() nombre: string;
  @Input() pagina: string;

  constructor() { }

  ngOnInit() {
  }

}
