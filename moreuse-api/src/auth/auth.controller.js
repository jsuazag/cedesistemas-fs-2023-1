
const login = (req, res) => {
  res.send("login");
}

const logout = (req, res) => {
  res.send("logout");
}

const info = (req, res) => {
  res.send("info");
}

module.exports = {
  login,
  logout,
  info
}
