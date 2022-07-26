import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import './SubTotal.css'

function Subtotal(){

  const getCartTotal = (basket) =>
  basket?.reduce((amount,item) => item.price + amount, 0);

  const [{basket}, dispatch] = useStateValue();

  return (<div className="subtotal">    
    {/* price */}
      <CurrencyFormat
        renderText={(value) => (
            <p>
              Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
            </p>            
          )
        }
        decimalScale={2}
        value={getCartTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    <button className="checkout__button">Proceed to Checkout</button>
  </div>  
  ) 
}

export default Subtotal