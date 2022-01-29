import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
          products :[
              {
                price : 999,
                title: 'Mobile Phone',
                Qty : 100,
                img : '',
                id : 1
              },
              {
                price : 2599,
                title: 'Watch',
                Qty : 8,
                img : '',
                id : 2
              },
              {
                price : 99,
                title: 'Laptop',
                Qty : 4,
                img : '',
                id : 3
              },
          ]
        }
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return  <CartItem product = {product} key = {product.id}/>;
                })}
            </div>
        );
    };
}


export default Cart;