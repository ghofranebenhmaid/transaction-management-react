import React from "react";
import TransactionsList from "./TransactionsList";

const Transactions = (props) => {
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
