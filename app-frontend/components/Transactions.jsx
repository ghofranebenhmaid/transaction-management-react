import React from "react";
import TransactionsList from "./TransactionsList";

const Transactions = (props) => {
  if (props.items.length === 0) {
    return <h3>No history..!</h3>;
  }
  return (
    <>
      {props.items.map((element, index) => (
        <TransactionsList
          key={index}
          amount={element.amount}
          accountId={element.accountId}
          amountBalance={element.amountBalance}
        />
      ))}
    </>
  );
};

export default Transactions;
