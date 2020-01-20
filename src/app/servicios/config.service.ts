import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public url_base = "http://localhost:3000/";
  //public url_base = "https://api-mi-mercadito.herokuapp.com/";

  constructor() { }
}
