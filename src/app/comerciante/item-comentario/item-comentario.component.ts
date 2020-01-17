import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-comentario',
  templateUrl: './item-comentario.component.html',
  styleUrls: ['./item-comentario.component.css']
})
export class ItemComentarioComponent implements OnInit {

  @Input() nombre: string;
  @Input() comentario: string;

  constructor() { }

  ngOnInit() {
  }

}
