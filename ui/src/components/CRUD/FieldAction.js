
export default class FieldAction {
  constructor(callback, icon) {
    if (typeof callback !== 'function') throw new Error('FieldAction callback must be a function')
    if (typeof icon !== 'string') throw new Error('FieldAction icon must be a string')
    this.callback = callback
    this.icon = icon
  }
}
