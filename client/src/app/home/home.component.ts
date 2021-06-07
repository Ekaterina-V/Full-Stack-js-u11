import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response?: Product[];

  constructor(private userService: UserService, private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.response = data;
        console.log(this.response);
      }
    );
  }
}