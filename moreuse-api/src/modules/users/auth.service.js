const errorHandler = require('../../utils/errorHandler');
const User = require('./models/user.model');
const { USER_PASS_WRONG, SERVER_ERROR } = require('./utils/dict.errors');

const login = (email, password) => {
  try {
    if (email === "juanito@gmail.com" && password === "123") {
      return {
        token: 'xxxxyyyyzzzz'
      }
    }
    throw errorHandler(USER_PASS_WRONG);
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR);
  }
}

const logout = (idUser) => {
  return {
    message: 'user logout'
  }
}

const signup = async (userData) => {
  try {
    const user = User(userData);
    await user.save(); // -> insert_one({ ... })
    return {
      message: 'user created',
      user
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error);
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
  signup,
  info
}
