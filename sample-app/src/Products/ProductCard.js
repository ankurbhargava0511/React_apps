import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../ContextProvider/CartContext";

const ProductCard = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
      {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
     
      </div>
      <button onClick={goToCheckoutHandler}>Check</button>
    </div>
  );
};


const CartItem = ({ cartItem }) => {
  const { name, price, quantity } = cartItem;
  return (
    <div>
      <div>
        <span>{name}    </span>
        <span>
          
            {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
