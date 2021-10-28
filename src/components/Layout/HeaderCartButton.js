import classes from './HeaderCartButton.module.css'
import { FaCartArrowDown as CartIcon } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
const [buttonHighlighted, setButtonHighlighted] = useState(false)
const ctx = useContext(CartContext);
const {items} = ctx

useEffect(()=>{
  if(items.length === 0 ){
    return
  }
  setButtonHighlighted(true)

 const timer = setTimeout(()=>{setButtonHighlighted(false)}, 300)

  return () =>{clearTimeout(timer)}
}, [items])

const NumberOfCartItems = items.reduce((currentNum, item)=>{
  return currentNum + item.amount
}, 0)

const buttonClasses = `${classes.button} ${buttonHighlighted ?  classes.bump: ''}`


  return (
    <button className={buttonClasses} onClick={props.onCartClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span color='white'>Cart</span>
        <span className={classes.badge}>{NumberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
