import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFoodOrdered } from 'src/app/interfaces/IFoodOrdered';
import { IFood } from 'src/app/interfaces/IFood';

@Injectable()
export class OrderService {
    private _totalAmount = new BehaviorSubject(0)
    get totalAmount () {
        return this._totalAmount.asObservable();
    }

    private _foodOrdered: BehaviorSubject<IFoodOrdered[]> = new BehaviorSubject(new Array());
    get foodOrdered () {
        return this._foodOrdered.asObservable();
    }
    constructor() { }

    addFood(food: IFood) {
        const foods = this._foodOrdered.getValue();
        const index = foods.findIndex( f => f.food.id === food.id)
        if (index >= 0) {
            foods[index].quantity++;
        }
        else {
            foods.push({
                food: food,
                quantity: 1
            });
        }
        const total = this.calcTotal(foods);
        this._foodOrdered.next(foods);
        this._totalAmount.next(total);
    }

    removeFood(food: IFood) {
        const foods = this._foodOrdered.getValue();
        const index = foods.findIndex( f => f.food.id === food.id)
        if (index >= 0) {
            foods[index].quantity--;
            if (foods[index].quantity == 0) {
                foods.splice(foods.length - 1, 1)
            }
        }
        const total = this.calcTotal(foods);
        this._foodOrdered.next(foods);
        this._totalAmount.next(total);
    }

    private calcTotal(foods: IFoodOrdered[]) {
        let total: number = 0;
        for (let item of  foods) {
            total = total + item.quantity * item.food.price;
        }
        return total;
    }
}