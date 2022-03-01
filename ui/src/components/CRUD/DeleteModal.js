
import React from "react"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function getEntityDetails (entity) {
  const keys = Object.keys(entity)
  return keys.map((key) => {
    return (
      <div key={`${key}-value`}>
        {key}: {entity[key]}
      </div>
    )
  })
}

const DeleteModal = (props) => {
  const { entityName, entity, onDelete, onCancel } = props
  return (
    <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete {entityName[0].toUpperCase() + entityName.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{textAlign: 'center'}}>
        <h3>
          Do you really want to delete the following {entityName}?
        </h3>
        <h2 style={{ color: 'red' }}>This can't be undone</h2>
        {getEntityDetails(entity)}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onCancel}>Cancel</Button>
        <Button variant="success" type="submit" onClick={()=>onDelete(entity)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal
