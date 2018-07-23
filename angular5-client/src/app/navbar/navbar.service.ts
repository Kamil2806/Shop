import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NavbarDto} from './navbarDto.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbarUrl = `http://localhost:8080/api/initialize/navbar`;

  constructor(private http: HttpClient) { }

  getNabvarOptions(): Observable<any> {
    return this.http.get<NavbarDto>(this.navbarUrl);
  }
}
