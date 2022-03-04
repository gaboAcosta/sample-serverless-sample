
import React from "react";
import AccountsService from "../services/accountsService";
import CRUD from "../components/CRUD/CRUD";
import Account from "../models/Account"

async function fetchAccounts (state = {}) {
  const response = await AccountsService.getAccounts()
  return response.data
}

function createAccount (account) {
  if (!account) throw new Error('Error, no account received on save function')
  return AccountsService.createAccount(account)
}

function updateAccount (account) {
  if (!account) throw new Error('Error, no account received on save function')
  return AccountsService.updateAccount(account.id, account)
}

async function onDelete (account) {
  await AccountsService.deleteAccount(account.id)
}

const fields = Account.getFields()

export default function Accounts () {
  return (
    <main style={{ padding: "1rem 0" }}>
      <CRUD
        fields={fields}
        entityName={'account'}
        dataSource={fetchAccounts}
        onDelete={onDelete}
        onCreate={createAccount}
        onUpdate={updateAccount}
      />
    </main>
  );
}
