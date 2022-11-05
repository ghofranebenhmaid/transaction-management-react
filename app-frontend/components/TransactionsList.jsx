import React from "react";
import Card from "./Card";

const TransactionsList = (props) => {
  return (
    <Card>
      <p>
        Transferred <strong> {props.amount}$</strong> from account{" "}
        <strong>{props.accountId}</strong>
      </p>
      <p>
        The current account balance <strong>{props.amountBalance}$</strong>
      </p>
    </Card>
  );
};

export default TransactionsList;
