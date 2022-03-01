
import React, { useState } from "react"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import DeleteModal from "./DeleteModal";
import { capitalize } from "../../utils/strings"

function getIsDisabled ({ insertDisabled, editDisabled }, isCreate) {
  if(isCreate) {
    return insertDisabled === true
  } else {
    return editDisabled === true
  }
}

function getFieldValue (fieldName, entity) {
  return entity[fieldName]
}

function getFormControl (field, isCreate, entity, onChange) {
  const { name, type, placeHolder } = field
  const disabled = getIsDisabled(field, isCreate)
  return (
    <Row key={`${name}-input`}>
      <Col>
        <Form.Label>{capitalize(name)}</Form.Label>
        <Form.Control
          disabled={disabled}
          type={type}
          placeholder={placeHolder}
          value={getFieldValue(name, entity)}
          onChange={({ target: { value }})=> onChange(name, value)}
        />
      </Col>
    </Row>
  )
}

function getFieldDate (fieldName, entity) {
  if(entity[fieldName]) return new Date(entity[fieldName])
}

function getDatePicker (field, isCreate, entity, onChange) {
  const { name } = field
  const disabled = getIsDisabled(field, isCreate)
  return (
    <Row key={`${name}-input`}>
      <Col>
        <Form.Label>{capitalize(name)}</Form.Label>
        <DatePicker
          disabled={disabled}
          id={`${name}-my-date-picker`}
          className={'form-control'}
          autoComplete={'off'}
          selected={getFieldDate(name, entity)}
          onChange={(newDate)=> onChange(name, newDate)}
        />
      </Col>
    </Row>
  )
}

function getFieldControl (field, isCreate, entity, onChange) {
  if (field.type === 'date') {
    return getDatePicker(field, isCreate, entity, onChange)
  }
  return getFormControl(field, isCreate, entity, onChange)
}

function ModalFields (props) {
  const { fields = [], isCreate, entity, onChange} = props
  return fields.map((field) => {
    return getFieldControl(field, isCreate, entity, onChange)
  })
}

function getTitle (isCreate, entityName) {
  const name = capitalize(entityName)
  if (isCreate) return `Create a new ${name}`
  const vowels = ['a','e','i','o','u']
  const article = vowels.includes(entityName[0]) ? 'an' : 'a'
  return `Update ${article} ${entityName}`
}

const SaveModal = (props) => {
  const { action, entity, fields, onCancel, onSubmit, entityName } = props
  const isCreate = action === 'create'
  const title = getTitle(isCreate, entityName)

  const [currentEntity, setCurrentEntity] = useState({ ...entity })

  return (
    <Form onSubmit={onSubmit}>
      <Modal
        show={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFields
          fields={fields}
          isCreate={isCreate}
          entity={currentEntity}
          onChange={(field, newValue) => {
            const newEntity = { ...currentEntity }
            newEntity[field] = newValue
            setCurrentEntity(newEntity)
          }}/>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="success"
            type="submit"
            onClick={() => {
              onSubmit(currentEntity)
            }}>
            { isCreate ? 'Create' : 'Update' }
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}



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
