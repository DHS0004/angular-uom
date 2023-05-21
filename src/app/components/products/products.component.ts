import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  //interpolation: ['?', '?'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public products = [
    {
      productId: '001',
      productName: 'White Basmathi Rice',
      createdDate: 'Jan 29, 2020',
      unitPrice: 'Rs. 400',
      quantity: 100,
      productDescription: 'White Basmathi rice imported from Pakistan',
    },
    {
      productId: '002',
      productName: 'Flour',
      createdDate: 'Jan 29, 2020',
      unitPrice: 'Rs. 190',
      quantity: 50,
      productDescription: 'Super Fine whole grain general Purpose flour',
    },
    {
      productId: '003',
      productName: 'Sugar',
      createdDate: 'Jan 29, 2020',
      unitPrice: 'Rs. 200',
      quantity: 1200,
      productDescription: 'White sugar manufactured by Palwatte Factory',
    },
    {
      productId: '004',
      productName: 'Dahl',
      createdDate: 'Jan 29, 2020',
      unitPrice: 'Rs. 200',
      quantity: 10,
      productDescription: 'Imported mysoor dahl from India',
    },
  ];
}
