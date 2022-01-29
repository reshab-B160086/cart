import React from "react";

class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price : 999,
            title: 'Mobile Phone',
            Qty : 1,
            img : ''
        }
    }

    increaseQuantity =  () => {
        this.setState((prevState) =>{
            return ({
                Qty : prevState.Qty + 1
            });
        })
    }

    decreaseQuantity =  () => {
        const { Qty } = this.state;
        if (Qty === 0){
            return;
        }
        this.setState((prevState) =>{
            return ({
                Qty : prevState.Qty - 1
            });
        })
    }


    render(){
        const {price, title, Qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 20}}>{title}</div>
                    <div style={{ color : '#777'}}>Rs {price}</div>
                    <div style={{ color : '#777'}}>Qty : {Qty}</div>
                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985073.png?token=exp=1643476256~hmac=850bc48426714a345951446ec9769e1f"
                            onClick = {this.decreaseQuantity}
                        />
                        <img 
                            alt="delete"
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                        />
                    </div>
                </div>
            </div>
        );
    };
}

const style = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;