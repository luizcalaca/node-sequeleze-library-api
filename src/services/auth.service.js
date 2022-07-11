require('dotenv/config');
const jwtService = require('../services/jwt.service');
const passwordService = require('../services/password.service');
const Joi = require("joi")

const { User } = require('../database/models');

const authService = {
  validateBody: (params) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    });

    const { error, value } = schema.validate(params);

    if (error) throw error;

    return value;
  },

  validateCredentials: async ({ email, password }) => {
    const user = await User.findOne({ where: { email }});

    if (!user) {
      const e = new Error('Usuário não existe ou senha inválida');
      e.name = 'UnauthorizedError';
      throw e;
    }

    passwordService.checkPassword(password, user.passwordHash);

    const { passwordHash: _, ...userWithoutPassword  } = user;

    const token = jwtService.createToken(userWithoutPassword.dataValues);

    return token;
  },

  validateToken: (token) => {
    if (!token) {
      const e = new Error('Token é obrigatório');
      e.name = 'UnauthorizedError';
      throw e;
    }

    const user = jwtService.validateToken(token);
    
    return user;
  }
};

module.exports = authService;