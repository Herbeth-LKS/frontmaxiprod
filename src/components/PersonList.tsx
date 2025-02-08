import React from "react";
import { Person } from "../types";

interface PersonListProps {
  people: Person[];
  onDelete: (id: number) => void;
}

const PersonList: React.FC<PersonListProps> = ({ people, onDelete }) => {
  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} (Age: {person.age})
            <button onClick={() => onDelete(person.id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
