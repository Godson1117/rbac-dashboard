import React, { useState, useEffect, ChangeEvent } from "react";
import { Role, fetchRoles, addRole, deleteRole } from "../services/api";

const RoleManagement: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [newRole, setNewRole] = useState<Omit<Role, "id">>({
    name: "",
    permissions: [],
  });

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options: readonly string[] = ["Read", "Write", "Delete"];

  useEffect(() => {
    fetchRoles()
      .then(setRoles)
      .catch((error: unknown) => console.error("Error fetching roles:", error));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = e.target;
    if (checked) {
      // Add selected value to the state
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      // Remove unselected value from the state
      setSelectedOptions((prev) => prev.filter((option) => option !== value));
    }
  };

  const handleAddRole = () => {
    const roleToAdd = { ...newRole, permissions: selectedOptions };
  
    addRole(roleToAdd)
      .then((role: Role) => {
        setRoles([...roles, role]);
        setNewRole({ name: "", permissions: [] }); // Reset the newRole state
        setSelectedOptions([]); // Reset selected permissions
      })
      .catch((error: unknown) => console.error("Error adding role:", error));
  };
  

  const handleDeleteRole = (id: number) => {
    deleteRole(id)
      .then(() => {
        setRoles(roles.filter((role) => role.id !== id));
      })
      .catch((error: unknown) => console.error("Error deleting role:", error));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Role Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <div className="mt-2">
          <h3>Select Permissions</h3>
          <div className="space-y-3">
            {options.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={option}
                  className="ml-2 text-gray-700 text-sm cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleAddRole}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          Add Role
        </button>
      </div>
      <ul>
        {roles.map((role) => (
          <li
            key={role.id}
            className="flex justify-between items-center border-b py-2"
          >
            {role.name}
            <span className="text-sm text-blue-600">
              {role.permissions.join(" , ")}
            </span>
            <button
              onClick={() => handleDeleteRole(role.id)}
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

export default RoleManagement;
