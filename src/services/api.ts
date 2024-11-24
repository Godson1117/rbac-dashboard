export interface User {
    id: number;
    name: string;
    role: string;
    status: string;
  }
  
  export interface Role {
    id: number;
    name: string;
    permissions: string[];
  }
  
  // Mock API for Users
  export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch('http://localhost:5000/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  };
  
  export const addUser = async (user: Omit<User, 'id'>): Promise<User> => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error('Failed to add user');
    return response.json();
  };
  
  export const deleteUser = async (id: number): Promise<void> => {
    const response = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete user');
  };
  
  // Mock API for Roles
  export const fetchRoles = async (): Promise<Role[]> => {
    const response = await fetch('http://localhost:5000/roles');
    if (!response.ok) throw new Error('Failed to fetch roles');
    return response.json();
  };
  
  export const addRole = async (role: Omit<Role, 'id'>): Promise<Role> => {
    const response = await fetch('http://localhost:5000/roles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(role),
    });
    if (!response.ok) throw new Error('Failed to add role');
    return response.json();
  };
  
  export const deleteRole = async (id: number): Promise<void> => {
    const response = await fetch(`http://localhost:5000/roles/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete role');
  };
  