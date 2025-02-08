import { useState, useEffect } from 'react';

import api from '../services/api.ts';
import { Person } from '../types';
import { FamillyBalance } from '../types';

export function usePeople() {
  const [people, setPeople] = useState<Person[]>([]);
  const [famillyBalance, setFamillyBalance] = useState<FamillyBalance[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<{
        data: Person[];
        totals: FamillyBalance[];
      }>('/people/totals');
      setPeople(response.data.data);
      setFamillyBalance(response.data.totals);
    } catch (err) {
      setError('Erro ao buscar pessoas.');
      console.error('Error fetching people:', err);
    } finally {
      setLoading(false);
    }
  };

  const addPerson = async (person: Person) => {
    setLoading(true);
    setError(null);
    try {
      await api.post('/people', person);
      fetchPeople();
    } catch (err) {
      setError('Erro ao adicionar pessoa.');
      console.error('Error adding person:', err);
    } finally {
      setLoading(false);
    }
  };

  const deletePerson = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await api.delete(`/people/${id}`);
      fetchPeople();
    } catch (err) {
      setError('Erro ao excluir pessoa.');
      console.error('Error deleting person:', err);
    } finally {
      setLoading(false);
    }
  };

  return { people, famillyBalance, addPerson, deletePerson, loading, error };
}
