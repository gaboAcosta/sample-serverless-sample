
import React from "react";
import UsersService from "../services/usersService";
import CRUD from "../components/CRUD/CRUD";
import User from "../models/User"

async function fetchUsers (state = {}) {
  const response = await UsersService.getUsers()
  return response.data
}

function createUser (user) {
  if (!user) throw new Error('Error, no user received on save fucntion')
  return UsersService.createUser(user)
}

function updateUser (user) {
  if (!user) throw new Error('Error, no user received on save fucntion')
  return UsersService.updateUser(user.id, user)
}

async function onDelete (user) {
  await UsersService.deleteUser(user.id)
}

const fields = User.getFields()

export default function Users () {
  return (
    <main style={{ padding: "1rem 0" }}>
      <CRUD
        fields={fields}
        entityName={'user'}
        dataSource={fetchUsers}
        onDelete={onDelete}
        onCreate={createUser}
        onUpdate={updateUser}
      />
    </main>
  );
}
