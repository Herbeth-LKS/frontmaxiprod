import { useState, useEffect } from "react";
import api from "../services/api.ts";
import { Person } from "../types";

export function usePeople() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const response = await api.get<Person[]>("/people");
      setPeople(response.data);
    } catch (error) {
      console.error("Error fetching people:", error);
    }
  };

  const addPerson = async (person: Person) => {
    try {
      await api.post("/people", person);
      fetchPeople();
    } catch (error) {
      console.error("Error adding person:", error);
    }
  };

  const deletePerson = async (id: number) => {
    try {
      await api.delete(`/people/${id}`);
      fetchPeople();
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  return { people, addPerson, deletePerson };
}
