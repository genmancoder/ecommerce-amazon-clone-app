import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout(){
    return (
        <div className="checkout">
                <div className="checkout_left">
                    <div>
                        <h2 className="checkout_title">Your shopping basket is empty.</h2>
                        <p>You have no items in your basket. Buy one.</p>
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal/>
                </div>
        </div>
    )
}

export default Checkout