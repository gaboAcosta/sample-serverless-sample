
import Field from "../components/CRUD/Field";
import FieldAction from "../components/CRUD/FieldAction";

export default class User {
  static getFields () {
    return [
      new Field({
        name: 'id',
        type: 'number',
        insertDisabled: true,
        editDisabled: true
      }),
      new Field({
        name: 'firstName'
      }),
      new Field({
        name: 'lastName'
      }),
      new Field({
        name: 'email',
        type: 'email',
        editDisabled: true
      }),
      new Field({
        name: 'password',
        type: 'password',
        editDisabled: true,
        displayInTable: false
      })
    ]
  }
  static getExtraActions() {
    return [
      new FieldAction(
        (entity) => {
          window.location.href = `/user/${entity.id}/logs`
        },
        'FaMoneyBillWaveAlt'
      )
    ]
  }
}
