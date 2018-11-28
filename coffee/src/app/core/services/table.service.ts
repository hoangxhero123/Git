import { Injectable } from '@angular/core';
import { ITable } from '../../interfaces/ITable';
import { map, tap } from "rxjs/operators"
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TableService {
    private _tables: BehaviorSubject<ITable[]> = new BehaviorSubject(Array());
    get oTables() {
        return this._tables.asObservable();
    }

    constructor(private http: HttpClient) {

    }
    //dùng http service để request và nhận gói data giống cái postman, nhớ thêm httpclient bên này thì bên module cũng phải thêm
    getTables() {
        return this.http.get(`/tables`).pipe(map((res: any[]) => {
            return res.map(i => {
                const table: ITable = {
                    id: i.id,
                    name: i.name,
                    orderName: i.orderName,
                    status: parseInt(i.status)
                }
                return table;
            })
        }), tap(data => {
            this._tables.next(data);
        })).subscribe();
    }
    //này là nhận gói data và biến đổi theo kiểu dữ liệu của mình và nhét nó vào cái túi Observable
    //để ý kiểu dữ liệu, hay quên lắm nha Khoa
    getTableById(id: string) {
        return this.http.get(`/tables/${id}`).pipe(map((res: any) => {
            const table: ITable = {
                id: res.id,
                name: res.name,
                status: parseInt(res.status)
            }
            return table;
        }));
    }

    // changeStatusTable(name: string, status: number) {
    //     const tableIndex = this.tables.findIndex(table => table.name === name)
    //     if (tableIndex !== -1) {
    //         this.tables[tableIndex].status = status
    //     }
    // }
}

