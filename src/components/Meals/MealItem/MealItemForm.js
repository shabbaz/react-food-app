import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";


const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsvalid] = useState(true)

 
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)  {
      setAmountIsvalid(false)
      return
    }
    props.onAddToCart(enteredAmountNumber)
  }





  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
          ref:amountInputRef
        }}
      />
      <button>+ add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p> }
    </form>
  );
};

export default MealItemForm;
