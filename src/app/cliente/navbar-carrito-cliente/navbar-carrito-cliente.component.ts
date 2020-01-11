import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-carrito-cliente',
  templateUrl: './navbar-carrito-cliente.component.html',
  styleUrls: ['./navbar-carrito-cliente.component.css']
})
export class NavbarCarritoClienteComponent implements OnInit {

  nombre: string = "Rodrigo Zúñiga";

  constructor() { }

  ngOnInit() {
  }

}
