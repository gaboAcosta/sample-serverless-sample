
import Field from "../components/CRUD/Field";

export default class Account {
  static getFields () {
    return [
      new Field({
        name: 'id',
        type: 'number',
        insertDisabled: true,
        editDisabled: true
      }),
      new Field({
        name: 'description'
      }),
      new Field({
        name: 'number',
        type: 'number'
      })
    ]
  }
}
