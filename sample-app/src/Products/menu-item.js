import { CartContext } from "../ContextProvider/CartContext";
import { useContext } from "react";

const MenuItem=()=>{
    const {isCartOpen, setCartOpen} = useContext(CartContext)
    const toggle= ()=>setCartOpen(!isCartOpen)
    return ( <div onClick={toggle}><h1>cardmenu</h1></div>)

}

export default MenuItem;