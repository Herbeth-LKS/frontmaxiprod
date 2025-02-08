import React, { useState } from 'react';

import Notification from './components/Notification.tsx';
import PersonForm from './components/PersonForm.tsx';
import PersonList from './components/PersonList.tsx';
import TransactionForm from './components/TransactionForm.tsx';
import { usePeople } from './hooks/usePeople.ts';
import { useTransactions } from './hooks/useTransactions.ts';

function App() {
  const {
    people,
    famillyBalance,
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
  const [notification, setNotification] = useState<{
    message: string;
    description?: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  const showNotification = (
    message: string,
    type: 'success' | 'error' | 'info',
    description?: string
  ) => {
    setNotification({ message, type, description });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const handleAddTransaction = async (transaction: any) => {
    try {
      await addTransaction(transaction);
      console.log('notidicacao');
      showNotification('Transação adicionada com sucesso!', 'success');
    } catch (error) {
      showNotification('Erro ao adicionar transação!', 'error');
    }
  };
  console.log('famillyBalance', famillyBalance);

  return (
    <div>
      <h1>Household Expenses</h1>

      {famillyBalance ? (
        <div>
          <p
            style={{ color: 'green' }}
          >{`Total Income: ${famillyBalance.totalIncome}`}</p>
          <p
            style={{ color: 'red' }}
          >{`Total Expenses: ${famillyBalance.totalExpenses}`}</p>
          <p
            style={{
              color: famillyBalance.totalBalance >= 0 ? 'green' : 'red'
            }}
          >{`Total Balance: ${famillyBalance.totalBalance}`}</p>
        </div>
      ) : (
        <p>No balance available</p>
      )}

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
        <TransactionForm onAdd={handleAddTransaction} people={people} />
        <PersonList people={people} onDelete={deletePerson} />
      </>
      {notification && (
        <Notification
          message={notification.message}
          description={notification.description}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
    </div>
  );
}

export default App;
