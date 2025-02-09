import { useState } from 'react';

import api from '../services/api.ts';
import { Transaction } from '../types';

export function useTransactions() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addTransaction = async (transaction: Transaction) => {
    setLoading(true);
    setError(null);
    try {
      await api.post('/transactions', transaction);
    } catch (err) {
      setError('Erro ao adicionar transação.');
      console.error('Error adding transaction:', err);
    } finally {
      setLoading(false);
    }
  };

  return { transactions, addTransaction, loading, error, setError };
}
