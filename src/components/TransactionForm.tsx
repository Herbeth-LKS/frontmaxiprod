import React, { useState } from 'react';

import { Input, Button, Select, Form, Typography } from 'antd';

import { Transaction, Person } from '../types';

interface TransactionFormProps {
  onAdd: (transaction: Transaction) => void;
  people: Person[];
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAdd, people }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [personId, setPersonId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !personId) return;
    onAdd({
      description,
      amount: parseFloat(amount),
      type,
      personId: parseInt(personId, 10)
    });
    setDescription('');
    setAmount('');
    setPersonId('');
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#f7f7f7', borderRadius: 8 }}>
      <Typography.Title level={3}>Add Transaction</Typography.Title>
      <Form onSubmitCapture={handleSubmit} layout="vertical">
        <Form.Item label="Description" required>
          <Input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item label="Amount" required>
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item label="Transaction Type" required>
          <Select
            value={type}
            onChange={(value) => setType(value as 'income' | 'expense')}
          >
            <Select value="income">Income</Select>
            <Select value="expense">Expense</Select>
          </Select>
        </Form.Item>

        <Form.Item label="Select Person" required>
          <Select
            value={personId}
            onChange={(value) => setPersonId(value)}
            placeholder="Select person"
            required
          >
            <Select value="">Select Person</Select>
            {people.map((person) => (
              <Select key={person.id} value={person.id.toString()}>
                {person.name}
              </Select>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Transaction
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TransactionForm;
