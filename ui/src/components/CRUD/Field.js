
export default class Field {
  constructor(params) {
    this.name = params.name
    this.type = params.type || 'text'
    this.placeHolder = params.placeHolder || ''
    this.editDisabled = params.editDisabled || false
    this.insertDisabled = params.insertDisabled || false
    this.displayInTable = params.displayInTable !== false
  }
}