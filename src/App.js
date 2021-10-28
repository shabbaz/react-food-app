import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cart, setCart] = useState(false)
  
  const showCartHandler = () => {
    setCart(true)
  }

  const hideCartHandler = ()=>{
    setCart(false)
  }


  return (
    <CartProvider>
  {cart && <Cart onHideCart={hideCartHandler}/> }
      <Header onShowCart={showCartHandler} ></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
