import { Component } from "@angular/core";






@Component({
    selector: "app-product",
    templateUrl:"./product.component.html",
    styleUrls:["./product.component.scss"]
})


export class ProductComponent{
productName:string="Samsung";
productId:number=1234;

// getProduct():string{
//     return`Realme3 7`;
// }
}