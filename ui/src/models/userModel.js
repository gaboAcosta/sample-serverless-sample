
import { parseField } from "../components/CRUD/Field";
import { parseFieldAction } from "../components/CRUD/FieldAction";

export const getFields = () => {
  return [
    parseField({
      name: 'id',
      type: 'number',
      insertDisabled: true,
      editDisabled: true
    }),
    parseField({
      name: 'firstName'
    }),
    parseField({
      name: 'lastName'
    }),
    parseField({
      name: 'email',
      type: 'email',
      editDisabled: true
    }),
    parseField({
      name: 'password',
      type: 'password',
      editDisabled: true,
      displayInTable: false
    })
  ]
}
// Uncomment to add extra actions
export const getExtraActions = () => {
  return [
    parseFieldAction(
        (entity) => {
          window.location.href = `/user/${entity.id}/logs`
        },
        'FaAtlassian'
    )
  ]
}
