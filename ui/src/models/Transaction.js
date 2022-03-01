
import Field from "../components/CRUD/Field";

export default class Transaction {
  static getFields () {
    return [
      new Field({
        name: 'id',
        type: 'number',
        insertDisabled: true,
        editDisabled: true
      }),
      new Field ({
        name: 'date',
        type: 'date',
        editDisabled: true
      }),
      new Field({
        name: 'description'
      }),
      new Field ({
        name: 'amount',
        type: 'number'
      })
    ]
  }
}
