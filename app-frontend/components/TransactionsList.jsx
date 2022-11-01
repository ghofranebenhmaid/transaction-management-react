import React from "react";

const TransactionsList = (props) => {
  return (
    <div>
      <p>
        Transferred <strong> {props.amount}$</strong> from account{" "}
        <strong>{props.accountId}</strong>
      </p>
      <p>
        The current account balance <strong>{props.amountBalance}$</strong>
      </p>
    </div>
  );
};

export default TransactionsList;
