import React, { useState } from "react";
import { Person } from "../types";

interface PersonFormProps {
  onAdd: (person: Person) => void;
}

const PersonForm: React.FC<PersonFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age) return;
    onAdd({ name, age: parseInt(age, 10) });
    setName("");
    setAge("");
  };

  return (
    <div>
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PersonForm;
