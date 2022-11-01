import React, { useState } from "react";
import classes from "./form.module.css";

const TransactionForm = () => {
  const [userInput, setUserInput] = useState({
    enteredAccountID: "",
    enteredAmount: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    setUserInput({
      enteredAccountID: "",
      enteredAmount: "",
    });
  };

  const accountIdChangedHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAccountID: event.target.value };
    });
  };
  const amountChangedHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="account_id">Account ID</label>
      <input
        type="text"
        id="account_id"
        value={userInput.enteredAccountID}
        onChange={accountIdChangedHandler}
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        min="0"
        value={userInput.enteredAmount}
        onChange={amountChangedHandler}
      />

      <button type="submit"> Submit</button>
    </form>
  );
};

export default TransactionForm;
