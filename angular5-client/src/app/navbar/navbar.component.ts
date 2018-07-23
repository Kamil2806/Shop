import { Component, OnInit } from '@angular/core';
import {NavbarService} from './navbar.service';
import {NavbarDto} from './navbarDto.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarSections: Array<NavbarDto> = [];

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.getNavbarOptions();
  }

  private getNavbarOptions() {
    this.navbarService.getNabvarOptions().subscribe(options => this.navbarSections = options);
  }

}
