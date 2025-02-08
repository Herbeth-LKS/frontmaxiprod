import React, { useState } from "react";
import { Transaction, Person } from "../types";

interface TransactionFormProps {
  onAdd: (transaction: Transaction) => void;
  people: Person[];
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAdd, people }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");
  const [personId, setPersonId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !personId) return;
    onAdd({ description, amount: parseFloat(amount), type, personId: parseInt(personId, 10) });
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={personId} onChange={(e) => setPersonId(e.target.value)} required>
          <option value="">Select Person</option>
          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TransactionForm;
