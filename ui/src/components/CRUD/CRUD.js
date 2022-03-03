

import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import CRUDModal from "./CRUDModal";
import EntitiesTable from "./EntitiesTable";
import { capitalize } from "../../utils/strings"
import FetchMessage from "./FetchMessage";
import { resetStateFactory } from "../../utils/state"
import { getDefaultEntity } from "../../utils/entities"

function loadEntities (dataSource, state, setState, setEntities) {
  return async function () {
    setState({ ...state, isFetching: true })
    const entities = await dataSource()
    setState({ ...state, isFetching: false })
    setEntities(entities)
  }
}

const defaultState = {
  entity: {},
  isFetching: false,
  action: null
}

export default function CRUD (props) {
  const [state, setState] = useState(defaultState)
  const [entities, setEntities] = useState([])
  const [needsInitialization, setNeedsInitialization] = useState(true)
  const { action, entity, isFetching } = state

  const resetStateFunction = resetStateFactory(defaultState, setState)

  const {
    fields,
    entityName,
    entityNamePlural,
    dataSource,
    onCreate,
    onUpdate,
    onDelete,
    extraActions = []
  } = props

  const loadEntitiesFunction = loadEntities(dataSource, state, setState, setEntities)

  if (needsInitialization) {
    setNeedsInitialization(false)
    loadEntitiesFunction()
  }


  function showEdit(entity) {
    resetStateFunction({
      action: 'update',
      entity: entity
    })
  }

  function showDelete (entity) {
    resetStateFunction({
      action: 'delete',
      entity: entity
    })
  }

  function showCreate () {
    resetStateFunction({
      action: 'create',
      entity: getDefaultEntity(fields)
    })
  }

  async function onCreateOrUpdateHandler (entity) {
    if (action === 'create') await onCreate(entity)
    if (action === 'update') await onUpdate(entity)
    await loadEntitiesFunction()
    resetStateFunction({})
  }

  async function onDeleteHandler (entity) {
    await onDelete(entity)
    await loadEntitiesFunction()
    resetStateFunction()
  }

  function onCancelHandler () {
    resetStateFunction()
  }

  const plural = entityNamePlural || `${entityName}s`
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>{capitalize(plural)}</h2>

      <EntitiesTable
        showEdit={showEdit}
        showDelete={showDelete}
        extraActions={extraActions}
        entities={entities}
        fields={fields}/>

      <Button
        onClick={showCreate}>
        Create new {entityName}
      </Button>

      <FetchMessage
        isFetching={isFetching}
        plural={plural}/>

      <CRUDModal
        action={action}
        entity={entity}
        entityName={entityName}
        entityNamePlural={entityNamePlural}
        fields={fields}
        onSubmit={onCreateOrUpdateHandler}
        onDelete={onDeleteHandler}
        onCancel={onCancelHandler}
      />
    </main>
  );
}