import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFood } from '../../interfaces/IFood';
import { map } from 'rxjs/operators'

@Injectable()
export class FoodService {
    constructor(private http: HttpClient) {

    }

    getFoods() {
        return this.http.get(`/foods`).pipe(map((res: any) => {
            return res.rows.map(food => {
                return {
                    id: food.id,
                    name: food.name,
                    price: food.price,
                    cover: food.pictures[0]
                } as IFood; 
            })
        }))
    };

}