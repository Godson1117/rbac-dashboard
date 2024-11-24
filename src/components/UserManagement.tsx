import React, { useState, useEffect } from "react";
import { User, fetchUsers, addUser, deleteUser } from "../services/api";

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<Omit<User, "id">>({
    name: "",
    role: "",
    status: "Active",
  });

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((error: unknown) => console.error("Error fetching users:", error));
  }, []);

  const handleAddUser = () => {
    addUser(newUser)
      .then((user: User) => {
        setUsers([...users, user]);
        setNewUser({ name: "", role: "", status: "Active" });
      })
      .catch((error: unknown) => console.error("Error adding user:", error));
  };

  const handleDeleteUser = (id: number) => {
    deleteUser(id)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error: unknown) => console.error("Error deleting user:", error));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center border-b py-2"
          >
            {user.name} ({user.role})
            <span className="text-sm text-blue-600">{user.status}</span>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
