import { useState } from "react";

import Head from "next/head";
import Footer from "../components/Footer";
import TransactionForm from "../components/TransactionForm";
import Transactions from "../components/Transactions";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const url = `https://infra.devskills.app/api/accounting/transactions`;
  const { data, loading, error } = useFetch(url);
  const DATA_TEST = [
    {
      transaction_id: "7b7ba0d4-b114-48ee-b202-6b6314ca43af",
      account_id: "65dd37be-e530-4b38-ae2a-20bc7148ca8a",
      amount: 2,
      created_at: "2022-11-01T17:27:43.668298+00:00",
    },
    {
      transaction_id: "9fa7135e-06d8-4f64-9a9d-e70e16f1d724",
      account_id: "65dd37be-e530-4b38-ae2a-20bc7148ca8a",
      amount: 3,
      created_at: "2022-11-01T14:56:28.614214+00:00",
    },
    {
      transaction_id: "76ba6c28-38f7-4766-b462-6933b4a579dc",
      account_id: "eaf64a03-e06e-4b42-a1bc-740a61d8e831",
      amount: 30,
      created_at: "2022-11-01T14:56:08.116346+00:00",
    },
  ];

  const [transactionHistory, setTransactionHistory] = useState([]);

  const saveTransactionHistory = (transactions) => {
    const listTransactionByAccountId =
      DATA_TEST.length > 0 &&
      DATA_TEST.filter((val) => {
        if (
          val.account_id
            .toLowerCase()
            .includes(transactions.accountId.toLowerCase())
        ) {
          return val;
        }
      });
    console.log(listTransactionByAccountId);

    setTransactionHistory((enteredTransaction) => {
      return [transactions, ...enteredTransaction];
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Frontend Boilerplate React/NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <TransactionForm onSaveTransactionHistory={saveTransactionHistory} />
        <Transactions items={DATA_TEST} />
      </main>
      <Footer />
    </div>
  );
}
