import { useState } from "react";
import api from "../services/api.ts";
import { Transaction } from "../types";

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = async (transaction: Transaction) => {
    try {
      await api.post("/transactions", transaction);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return { transactions, addTransaction };
}
