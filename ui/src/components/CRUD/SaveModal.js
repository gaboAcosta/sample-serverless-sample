import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ModalFields } from "./ModalFields";
import Button from "react-bootstrap/Button";
import {capitalize} from "../../utils/strings";

const getTitle = (isCreate, entityName) => {
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
export default SaveModal
