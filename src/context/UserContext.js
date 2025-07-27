"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const register = (username, password) => {
    if (users.find(u => u.username === username)) {
      return { success: false, message: 'User already exists' };
    }
    const newUser = { username, password, progress: [] };
    setUsers([...users, newUser]);
    return { success: true };
  };

  const login = (username, password) => {
    const foundUser = users.find(u => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
  };

  const saveProgress = (result) => {
    if (user) {
      const updatedUser = { ...user, progress: [...user.progress, result] };
      setUser(updatedUser);
      setUsers(users.map(u => (u.username === user.username ? updatedUser : u)));
    }
  };

  return (
    <UserContext.Provider value={{ user, users, register, login, logout, saveProgress }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};