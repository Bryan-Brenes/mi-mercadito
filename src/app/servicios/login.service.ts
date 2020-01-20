import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public getContrasenna(email: string) {
    return this.http.get(this.config.url_base + `login/${email}`);
  }
}
