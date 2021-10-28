import React from "react"
import mealJpg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"



const Header = (props) =>{
    return (
        <React.Fragment>
        <header className={classes.header}>
            <h1 style={{color:'white'}}>ReactMeals</h1>
            <HeaderCartButton onCartClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
        <img src={mealJpg} alt='tasty meal'/>
        </div>
        </React.Fragment>
    )
}

export default Header