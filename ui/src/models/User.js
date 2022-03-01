
import Field from "../components/CRUD/Field";

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
}
