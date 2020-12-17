const User = require('../models/User');

module.exports = {

  async index(request, response) {

    try {

      const users = await User.findAll();

      return response.json(users);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async show(request, response) {
    const { id } = request.params;

    try {

      const user = await User.findByPk(id);

      return response.json(user);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async create(request, response) {
    const { name, email, password } = request.body;

    try {

      const user = await User.create({ name, email, password });

      return response.json(user);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async update(request, response) {

    const { id } = request.params;
    const body = request.body;

    try {

      const user = await User.update({...body},{where:{id}});

      return response.json(user);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },
  
  async delete(request, response) {
    const { id } = request.params;

     const user =  await User.destroy({where:{id}});

      return response.json(user);
  },
}