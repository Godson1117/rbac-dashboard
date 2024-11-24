# RBAC Admin Dashboard


This project is an admin dashboard built using React and TypeScript, styled with Tailwind CSS. It provides a user-friendly interface for managing users, roles, and permissions in a Role-Based Access Control (RBAC) system.

## Project Overview

The RBAC Admin Dashboard enables administrators to:

#### View, add, edit, and delete users.
#### Define and manage roles with specific permissions.
#### Assign roles to users dynamically.
#### Simulate API interactions for CRUD operations on users and roles.

## Features
### User Management
#### View a list of users with their assigned roles and statuses.
#### Add, edit, or delete user details.
#### Activate or deactivate user accounts.


## Role Management
#### Define new roles and their permissions.
#### Edit existing roles, including updating their permissions.
#### Delete roles that are no longer needed.

## Permission Handling

#### Assign permissions to roles dynamically (e.g., read, write, delete).
#### Display permissions for each role in an intuitive manner.

## Responsive Design
#### Fully responsive UI built with Tailwind CSS for seamless usage on all devices.

## API Simulation
#### Mock API interactions for CRUD operations to validate functionality without a backend server.

## Setup Instructions

### 1. Clone the Repository
`git clone https://github.com/Godson1117/rbac-dashboard.git`

`cd rbac-dashboard`
### 2.Install Dependencies
`npm i`

### 3. Start the Mock server
`npx json-server --watch db.json --port 5000`


### 4. Start the Development server
`npm start`
