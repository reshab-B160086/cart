import React from "react";
import Cart from "./Cart";
import Navbar  from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products :[],
      loading : true
    }
}

componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) =>{
  //       console.log("snaphot", snapshot);
  //       snapshot.docs.map((doc) =>{
  //           console.log(doc.data())
  //       });

  //       const products = snapshot.docs.map((doc) =>{
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       })

  //       this.setState({
  //         products,
  //         loading : false
  //       })
  //   });
  firebase
  .firestore()
  .collection('products')
  .onSnapshot((snapshot) =>{
    console.log("snaphot", snapshot);
    snapshot.docs.map((doc) =>{
        console.log(doc.data())
    });

    const products = snapshot.docs.map((doc) =>{
      const data = doc.data();
      data["id"] = doc.id;
      return data;
    })

    this.setState({
      products,
      loading : false
    })
})

    
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
  const {products, loading} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCount()}/>
      <Cart 
       products = {products} 
       onIncreaseQuantity = {this.handleIncreaseQuantity}
       onDecreaseQuantity = {this.handleDecreaseQuantity}
       onDeleteItem = {this.handleDeleteItem}
       />
       {loading && <h1>Loading Proucts ...</h1>}
       <div style = {{fontSize : 20, padding : 10}}>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
