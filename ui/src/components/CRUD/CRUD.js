

import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import CRUDModal from "./CRUDModal";
import EntitiesTable from "./EntitiesTable";
import { capitalize } from "../../utils/strings"
import FetchMessage from "./FetchMessage";
import { getDefaultEntity } from "../../utils/entities"

function resetStateFactory (defaultState, setState) {
  return function (overrides = {}) {
    setState({ ...defaultState, ...overrides })
  }
}

const defaultState = {
  entity: {},
  isFetching: false,
  action: null,
  reload: false
}

export default function CRUD (props) {
  const [state, setState] = useState(defaultState)
  const [entities, setEntities] = useState([])
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

  useEffect(() => {
    setState({ ...state, isFetching: true })
    dataSource().then((entities) => {
      setState({ ...state, isFetching: false })
      setEntities(entities)
    }).catch((ex) => {
      console.log('ex', ex)
      alert('Error loading dataSource in CRUD component')
    })
  }, [])

  const showEdit = (entity) => {
    resetStateFunction({
      action: 'update',
      entity: entity
    })
  }

  const showDelete =  (entity) => {
    resetStateFunction({
      action: 'delete',
      entity: entity
    })
  }

  const showCreate = () => {
    resetStateFunction({
      action: 'create',
      entity: getDefaultEntity(fields)
    })
  }

  const onCreateOrUpdateHandler = async (entity) => {
    if (action === 'create') await onCreate(entity)
    if (action === 'update') await onUpdate(entity)
    resetStateFunction({ reload: !state.reload })
  }

  const onDeleteHandler = async (entity) => {
    await onDelete(entity)
    resetStateFunction({ reload: !state.reload })
  }

  const onCancelHandler = () => {
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