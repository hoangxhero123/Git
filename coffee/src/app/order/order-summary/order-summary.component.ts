import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { IFoodOrdered } from 'src/app/interfaces/IFoodOrdered';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  quantity: number = 0;
  totalAmount: number = 0;
  foods: IFoodOrdered[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.totalAmount.subscribe(data => {
      this.totalAmount = data;
    })

    this.orderService.foodOrdered.subscribe(data => {
      this.quantity = data.length;
    })
  }

}