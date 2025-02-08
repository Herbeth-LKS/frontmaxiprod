import React from 'react';

import PersonForm from './components/PersonForm.tsx';
import PersonList from './components/PersonList.tsx';
import TransactionForm from './components/TransactionForm.tsx';
import { usePeople } from './hooks/usePeople.ts';
import { useTransactions } from './hooks/useTransactions.ts';

function App() {
  const {
    people,
    addPerson,
    deletePerson,
    loading: peopleLoading,
    error: peopleError
  } = usePeople();
  const {
    addTransaction,
    loading: transactionsLoading,
    error: transactionsError
  } = useTransactions();

  return (
    <div>
      <h1>Household Expenses</h1>

      {peopleLoading && <p>Carregando pessoas...</p>}
      {peopleError && (
        <p style={{ color: 'red' }}>Erro ao carregar pessoas: {peopleError}</p>
      )}

      {transactionsLoading && <p>Carregando transações...</p>}
      {transactionsError && (
        <p style={{ color: 'red' }}>
          Erro ao carregar transações: {transactionsError}
        </p>
      )}

      <>
        <PersonForm onAdd={addPerson} />
        <TransactionForm onAdd={addTransaction} people={people} />
        <PersonList people={people} onDelete={deletePerson} />
      </>
    </div>
  );
}

export default App;
