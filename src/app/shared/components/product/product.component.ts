import { Component } from "@angular/core";






@Component({
    selector: "app-product",
    templateUrl:"./product.component.html",
    styleUrls:["./product.component.scss"]
})


export class ProductComponent {
productName:string="Samsung";
productId:number=1234;
resp:string=`<p class="alert alert-success">I love Angular`;
userName:string="Ankita";

isDisabled:boolean=false;
imgUrl:string=`https://images.unsplash.com/photo-1712041503216-c466cee9c845?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
// getProduct():string{
//     return`Realme3 7`;
// }
}