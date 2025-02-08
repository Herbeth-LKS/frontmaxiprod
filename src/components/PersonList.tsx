import React from 'react';

import { List, Button, Typography } from 'antd';

import { Person } from '../types';

interface PersonListProps {
  people: Person[];
  onDelete: (id: number) => void;
}

const PersonList: React.FC<PersonListProps> = ({ people, onDelete }) => {
  return (
    <div style={{ padding: 20, backgroundColor: '#f7f7f7', borderRadius: 8 }}>
      <h2>People List</h2>
      <List
        dataSource={people}
        renderItem={(person: any) => (
          <List.Item
            key={person.id}
            actions={[
              // eslint-disable-next-line react/jsx-key
              <Button
                type="danger"
                onClick={() => onDelete(person.id!)}
                icon={<i className="fas fa-trash-alt"></i>}
              >
                Delete
              </Button>
            ]}
          >
            <List.Item.Meta
              title={<Typography.Text strong>{person.name}</Typography.Text>}
              description={
                <>
                  <p>Age: {person.age}</p>
                  <p style={{ color: 'green' }}>
                    Total Income: {person.totalIncome}
                  </p>
                  <p style={{ color: 'red' }}>
                    Total Expenses: {person.totalExpenses}
                  </p>
                  <p
                    style={{
                      color: person.balance >= 0 ? 'green' : 'red'
                    }}
                  >
                    Balance: {person.balance}
                  </p>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PersonList;
