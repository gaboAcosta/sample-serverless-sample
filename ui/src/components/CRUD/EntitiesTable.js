import Table from "react-bootstrap/Table";
import React from "react";
import ColumnHeaders from "./ColumnHeaders";
import ActionsHeader from "./ActionsHeader";
import FieldColumns from "./FieldColumns";
import Button from "react-bootstrap/Button";
import {FaEdit, FaTrash} from "react-icons/fa";
import * as Fa from "react-icons/fa";

export default function EntitiesTable (props) {
  const {
    showEdit,
    showDelete,
    entities,
    fields,
    extraActions
  } = props
  return (
    <Table striped bordered hover size="sm">
      <thead>
      <tr id={'table-headers'}>
        <ColumnHeaders fields={fields} />
        <ActionsHeader />
      </tr>
      </thead>
      <tbody>
      {(entities.map((entity) => {
        return (
          <tr key={`table-row-${entity.id}`}>
            <FieldColumns
              fields={fields}
              entity={entity} />
            <td style={{ textAlign: 'center' }}>
              <Button
                size="sm"
                style={{ marginRight: '5px' }}
                onClick={() => showEdit(entity)}>
                <FaEdit />
              </Button>
              <Button
                size="sm"
                style={{ marginRight: '5px' }}
                onClick={()=>showDelete(entity)}>
                <FaTrash/>
              </Button>
              {extraActions.map((action) => {
                const ActionIcon = Fa[action.icon]
                return (
                  <Button
                    key={`extra-action-${action.icon}`}
                    size="sm"
                    style={{ marginRight: '5px' }}
                    onClick={()=>action.callback(entity)}>
                    <ActionIcon/>
                  </Button>
                )
              })}
            </td>
          </tr>
        )
      }))}
      </tbody>
    </Table>
  )
}
