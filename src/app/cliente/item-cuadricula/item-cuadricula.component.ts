import { Component, Input ,  OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cuadricula',
  templateUrl: './item-cuadricula.component.html',
  styleUrls: ['./item-cuadricula.component.css']
})
export class ItemCuadriculaComponent implements OnInit {

  @Input() titulo : string;
  @Input() subtitulo : string;
  @Input() precio : string;
  @Input() boton : string;
  

  constructor() { }

  ngOnInit() {
  }

}
