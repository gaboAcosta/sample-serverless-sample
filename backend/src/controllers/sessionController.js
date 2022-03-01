

function getSession (req, res) {
  res.json(req.user)
}

module.exports = {
  getSession
}
