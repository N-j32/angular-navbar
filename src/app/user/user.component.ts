import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Products: any[] = [
    {
      "productname": "Bag"
    },
    {
      "productname": "Sling"
    },
    {
      "productname": "Trolly"
    },
    {
      "productname": "Bag pack"
    },
    {
      "productname": "Watch"
    },
    {
      "productname": "Wrist watch"
    },
    {
      "productname": "casual shoes"
    },
    {
      "productname": "Formal shoes"
    },
    {
      "productname": "Sport shoes"
    },
    {
      "productname": "Sun Glass"
    },
    {
      "productname": "Wallet"
    },
    {
      "productname": "Perfume"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
