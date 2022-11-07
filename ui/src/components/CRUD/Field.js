
export const parseField = (field) => {
  return {
    name: field.name,
    type: field.type || 'text',
    placeHolder: field.placeHolder || '',
    editDisabled: field.editDisabled || false,
    insertDisabled: field.insertDisabled || false,
    displayInTable: field.displayInTable !== false
  }
}
