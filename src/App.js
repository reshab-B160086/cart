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
    </div>
  );
  }
}

export default App;
