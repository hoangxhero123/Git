import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { IFoodFilter } from '../../interfaces/IFoodFilter';

@Injectable()
export class FoodFilterService {
    foodFilters: IFoodFilter[] = [];
    token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU0ZjRiMzY3OWFjZmY2NTQ1ZmQ0OSIsImlhdCI6MTU0MTc2ODM0OH0.zHhRlIfT-iH4TA8wF0qVXqoPRrGimbLs67racCBo_g4';
    constructor(private http: HttpClient) { 
        
    }

    getFoods() {
        return this.http.get(`http://lexuanquynh.com:8080/categories?access_token=${this.token}`).pipe(map((res: any[]) => {
            this.foodFilters = res.map(i => {
                const foodFilter: IFoodFilter = {
                    title: i.name,
                }
                return foodFilter;
            })
            return this.foodFilters;
        }))
    };
    
}