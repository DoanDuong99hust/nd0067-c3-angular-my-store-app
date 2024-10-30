import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "../components/product-list/model/product.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    url: string = '/assets/data.json';
    // private productsObserver: Observable<ProductModel[]>;
    private productByIds: ProductModel[] = [];
    private products: ProductModel[] = [];

    constructor(private http: HttpClient) {
        // this.productsObserver = new Observable<ProductModel[]>((subscriber) => {
        //     this.http.get(this.url).subscribe(res => {
        //         subscriber.next(res as ProductModel[])
        //     });
        // })
        this.http.get(this.url).subscribe(data => {
            for (let item of data as ProductModel[]) {
                this.products.push(item)
            }
        });
    }

    getAllProducts() {
        return this.products;
    }

    findProductById(id: number) {
        return this.products.filter(item => id === item.id)[0];
    }

    findProductsByIds(ids: number[]) {
        this.products.forEach(item => {
            if (ids.includes(item.id)) {
                this.productByIds.push(item)
            }
        })
        return this.productByIds;
    }
}