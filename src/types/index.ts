export interface Person {
  id?: number;
  name: string;
  age: number;
  totalIncome: number;
  totalExpenses: number;
  balance: number;
}

export interface FamillyBalance {
  totalIncome: number;
  totalExpenses: number;
  totalBalance: number;
}

export interface Transaction {
  id?: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  personId: number;
}
