import React, { useState } from 'react';

import { Input, Button, Form, Row, Col } from 'antd';

import { Person } from '../types';

interface PersonFormProps {
  onAdd: (person: Person) => void;
}

const PersonForm: React.FC<PersonFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (values: { name: string; age: number }) => {
    if (!values.name || !values.age) return;
    onAdd({ name: values.name, age: values.age });
    setName('');
    setAge('');
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#f7f7f7', borderRadius: 8 }}>
      <h2>Add Person</h2>
      <Form onFinish={handleSubmit} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input the name!' }]}
            >
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input the age!' }]}
            >
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonForm;
