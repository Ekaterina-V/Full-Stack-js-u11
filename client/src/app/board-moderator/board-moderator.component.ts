import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  product: Product = {};
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }

  saveProduct(): void {
    const data = {
      title: this.product.title,
      price: this.product.price,
      description: this.product.description
    };

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      title: '',
      //price: ,
      description: '',
    };
  }

}
