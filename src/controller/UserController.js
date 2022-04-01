const model = require("../models");
class User {
  async store(DAO) {
    try {
      const user = await model.sequelize.models.User.create({
        firstName: DAO.firstName,
        lastName: DAO.lastName,
        email: DAO.email,
        password: DAO.password,
        account_id: DAO.account_id,
      });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
    //no attributes informo os campos que eu quero que retorna do select
    ///include estou incluido a associação feita com o account, então ele vai retornar o account daquele user
  async show() {
    try {
      const users = await model.sequelize.models.User.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email', 'account_id'],
        include: {
          attributes: ['id', 'name'],
          association: "accounts",
        },
      });
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = User;