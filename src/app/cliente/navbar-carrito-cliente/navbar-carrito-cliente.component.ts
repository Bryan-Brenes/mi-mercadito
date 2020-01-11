import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-carrito-cliente',
  templateUrl: './navbar-carrito-cliente.component.html',
  styleUrls: ['./navbar-carrito-cliente.component.css']
})
export class NavbarCarritoClienteComponent implements OnInit {

  @Input() nombre: string;

  constructor() { }

  ngOnInit() {
  }

}
