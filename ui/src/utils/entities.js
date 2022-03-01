

function getDefaultEntity(fields) {
  const defaultEntity = {}
  fields.forEach((field) => {
    defaultEntity[field.name] = ''
  })
  return defaultEntity
}

module.exports = {
  getDefaultEntity
}
