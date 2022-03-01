
function resetStateFactory (defaultState, setState) {
  return function (overrides = {}) {
    setState({ ...defaultState, ...overrides })
  }
}

module.exports = {
  resetStateFactory
}
