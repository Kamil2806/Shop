import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {ProductDto} from './productDto.model';
import {Observable} from 'rxjs';
import {log} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getProduct(): boolean {
    this.productService.getHeroes().subscribe(data => console.log(data));
    return false;
  }

  addProduct(productName: string): boolean {
    debugger;
    const productDto: ProductDto = {
      name: productName
    };
    this.productService.addProduct(productDto).subscribe(product => console.log(product.name));
    return false;
  }
}
