import React from "react";
import Cart from "./Cart";
import Navbar  from "./Navbar";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products :[
          {
            price : 999,
            title: 'Mobile Phone',
            Qty : 100,
            img : 'https://cdn-icons.flaticon.com/png/128/2586/premium/2586488.png?token=exp=1643610423~hmac=7b28df8e0449dd792b4b313091cb8c0b',
            id : 1
          },
          {
            price : 2599,
            title: 'Watch',
            Qty : 8,
            img : 'https://t3.ftcdn.net/jpg/03/01/52/70/240_F_301527093_MsrLRU3oL6lGoF5OCBNGugZ1M4MkZzXm.jpg',
            id : 2
          },
          {
            price : 99,
            title: 'Laptop',
            Qty : 4,
            img : 'https://cdn-icons-png.flaticon.com/128/428/428001.png',
            id : 3
          },
      ]
    }
}

handleIncreaseQuantity = (product) =>{
    //console.log("Quantity is increased for product ", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].Qty += 1;
    this.setState({
        products : products
    })
}
handleDecreaseQuantity = (product) =>{
    //console.log("Quantity is increased for product ", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].Qty == 0) return;
    products[index].Qty -= 1;
    this.setState({
        products : products
    })
}

handleDeleteItem = (id) =>{
    const {products} = this.state;
    const items = products.filter((product)=> product.id !== id);

    this.setState({
        products : items
    })
}

getCount = () =>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product)=>{
        count += product.Qty;
    })
    return count;
}

getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.forEach((product) =>{
      cartTotal += (product.Qty * product.price);
    })
    return cartTotal;
}

  render(){
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCount()}/>
      <Cart 
       products = {products} 
       onIncreaseQuantity = {this.handleIncreaseQuantity}
       onDecreaseQuantity = {this.handleDecreaseQuantity}
       onDeleteItem = {this.handleDeleteItem}
       />
       <div style = {{fontSize : 20, padding : 10}}>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
