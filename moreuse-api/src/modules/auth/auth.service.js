const errorHandler = require('../../utils/errorHandler');
const { USER_PASS_WRONG, SERVER_ERROR } = require('./utils/dict.errors');

const login = (email, password) => {
  try {
    const div = a / 1;
    if (email === "juanito@gmail.com" && password === "123") {
      return {
        token: 'xxxxyyyyzzzz'
      }
    }
    throw errorHandler(USER_PASS_WRONG);
  } catch (error) {
    console.log('error', error);
    throw error.handled ? error : errorHandler(SERVER_ERROR);
  }
}

const logout = (idUser) => {
  return {
    message: 'user logout'
  }
}

const info = (idUser) => {
  return {
    name: 'Juanito Perez',
    email: "juanito@gmail.com",
    address: "Calle siempre viva",
    phone: "11111"
  }
}

module.exports = {
  login,
  logout,
  info
}
