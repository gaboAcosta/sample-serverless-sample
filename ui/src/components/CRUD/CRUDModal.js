
import React from "react"
import DeleteModal from "./DeleteModal";
import SaveModal  from "./SaveModal"

const CRUDModal = (props) => {
  const {
    action,
    fields,
    entityName,
    entity,
    onCancel,
    onSubmit,
    onDelete
  } = props
  if (action === 'delete') {
    return (
      <DeleteModal
        onCancel={onCancel}
        entityName={entityName}
        entity={entity}
        onDelete={onDelete}
        show={true}
      />
    )
  }
  if (action === 'create' || action === 'update') {
    return (
      <SaveModal
        action={action}
        entity={entity}
        fields={fields}
        onCancel={onCancel}
        onSubmit={onSubmit}
        entityName={entityName}
      />
    )
  }
  return <span></span>
}

export default CRUDModal
