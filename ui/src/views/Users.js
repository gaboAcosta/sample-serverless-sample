
import React from "react";
import UsersService from "../services/usersService";
import CRUD from "../components/CRUD/CRUD";
import User from "../models/User"

const fields = User.getFields()
const extraActions = User.getExtraActions()
export default function () {
  return (
    <main style={{ padding: "1rem 0" }}>
      <CRUD
        fields={fields}
        entityName={'user'}
        dataSource={async function (state = {}) {
          const response = await UsersService.getUsers()
          return response.data
        }}
        onDelete={async function (user) {
          await UsersService.deleteUser(user.id)
        }}
        onCreate={function (user) {
          if (!user) throw new Error('Error, no user received on save fucntion')
          return UsersService.createUser(user)
        }}
        onUpdate={function (user) {
          if (!user) throw new Error('Error, no user received on save fucntion')
          return UsersService.updateUser(user.id, user)
        }}
        extraActions={extraActions}
      />
    </main>
  );
}
