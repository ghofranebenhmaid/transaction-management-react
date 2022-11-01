import React, { useState } from "react";
import classes from "./form.module.css";

const TransactionForm = () => {
  const [userInput, setUserInput] = useState({
    enteredAccountID: "",
    enteredAmount: "",
  });

  const [enteredAccountIdTouched, setEnteredAccountIdTouched] = useState(false);

  const enteredAccountIdValid = userInput.enteredAccountID.trim() !== "";
  const accountIdInputIsInvalid =
    !enteredAccountIdValid && enteredAccountIdTouched;

  const accountIdInputBlurHandler = (event) => {
    setEnteredAccountIdTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredAccountIdValid) {
      return;
    }

    if (+userInput.enteredAmount < 1) {
      return;
    }

    setUserInput({
      enteredAccountID: "",
      enteredAmount: "",
    });

    setEnteredAccountIdTouched(true);

    if (!enteredAccountIdValid) {
      return;
    }
    setEnteredAccountIdTouched(false);
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
    <form  className={`${accountIdInputIsInvalid && classes.invalid} ${
      classes.form
    }`} onSubmit={submitHandler}>
      <label htmlFor="account_id">Account ID</label>
      <input
        type="text"
        id="account_id"
        onBlur={accountIdInputBlurHandler}
        value={userInput.enteredAccountID}
        onChange={accountIdChangedHandler}
      />
      {accountIdInputIsInvalid && (
        <p className={classes["error-text"]}>Account id must not be empty.</p>
      )}
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
