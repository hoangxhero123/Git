import { Component, OnInit, Input } from '@angular/core';
import { IFoodFilter } from '../../interfaces/IFoodFilter';

@Component({
  selector: 'app-food-filter',
  templateUrl: './food-filter.component.html',
  styleUrls: ['./food-filter.component.css']
})
export class FoodFilterComponent implements OnInit {
  @Input() filter: IFoodFilter;
  @Input() activated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
