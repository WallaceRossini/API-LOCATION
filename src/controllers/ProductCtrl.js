const Product = require('../models/Product');

module.exports = {

  async index(request, response) {

    try {

      const products = await Product.findAll();

      return response.json(products);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async show(request, response) {
    const { tracking_id } = request.params;

    try {

      const products = await Product.findAll({ where: { tracking_id } });

      return response.json(products);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async create(request, response) {
    const { tracking_id } = request.params;
    const { name } = request.body;

    try {

      const product = await Product.create({ name, tracking_id });

      return response.json(product);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async update(request, response) {

    const { id } = request.params;
    const { name } = request.body;

    try {

      const product = await Product.update({ name }, { where: { id } });

      return response.json(product);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    const product = await Product.destroy({ where: { id } });

    return response.json(product);
  },
}