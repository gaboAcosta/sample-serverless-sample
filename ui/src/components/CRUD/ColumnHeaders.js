import React from "react";

export default function ColumnHeaders (props) {
  const { fields } = props
  const fieldsToRender = fields.filter((f) => f.displayInTable)
  return fieldsToRender.map((field)=> {
    return (
      <th key={`header-${field.name}`}>{field.name}</th>
    )
  })
}
