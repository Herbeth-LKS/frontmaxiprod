import React from "react";
import { usePeople } from "./hooks/usePeople.ts";
import { useTransactions } from "./hooks/useTransactions.ts";
import PersonForm from "./components/PersonForm.tsx";
import PersonList from "./components/PersonList.tsx";
import TransactionForm from "./components/TransactionForm.tsx";

function App() {
  const { people, addPerson, deletePerson } = usePeople();
  const { addTransaction } = useTransactions();

  return (
    <div>
      <h1>Household Expenses</h1>
      <PersonForm onAdd={addPerson} />
      <PersonList people={people} onDelete={deletePerson} />
      <TransactionForm onAdd={addTransaction} people={people} />
    </div>
  );
}

export default App;
