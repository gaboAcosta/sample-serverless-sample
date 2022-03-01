import React from "react";

export default function FieldColumns (props) {
  const { fields, entity } = props
  const fieldsToRender = fields.filter((f) => f.displayInTable)
  return fieldsToRender.map((field) => {
    return (
      <td key={`value-${field.name}`}>{entity[field.name]}</td>
    )
  })
}
