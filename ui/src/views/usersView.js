
import React from "react";
import { getUsers, updateUser, deleteUser, createUser } from "../services/usersService";
import CRUD from "../components/CRUD/CRUD";
import { getFields, getExtraActions } from "../models/userModel"

const usersComponent = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <CRUD
        fields={getFields()}
        entityName={'user'}
        dataSource={getUsers}
        onDelete={deleteUser}
        onCreate={createUser}
        onUpdate={updateUser}
        extraActions={getExtraActions()}
      />
    </main>
  );
}

export default usersComponent
