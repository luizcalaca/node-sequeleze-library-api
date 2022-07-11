const bcrypt = require('bcrypt');

const passwordService = (password) => {
    const salt = bcrypt.genSaltSync(5);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
}

module.exports = passwordService;