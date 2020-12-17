const Tracking = require('../models/Tracking');

module.exports = {

  async index(request, response) {

    try {

      const tracking = await Tracking.findAll();

      return response.json(tracking);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async show(request, response) {
    const { user_id } = request.params;

    try {

      const tracking = await Tracking.findAll({where:{user_id}});

      return response.json(tracking);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async create(request, response) {
    const { user_id } = request.params;
    const body = request.body;

    try {

      const tracking = await Tracking.create({...body,user_id});

      return response.json(tracking);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },

  async update(request, response) {

    const { id } = request.params;
    const body = request.body;

    try {

      const tracking = await Tracking.update({...body},{where:{ id }});

      return response.json(tracking);

    } catch (err) {
      console.log(err);
      response.send(err);
    }
  },
  
  async delete(request, response) {
    const { id } = request.params;

     const tracking =  await Tracking.destroy({where:{ id }});

      return response.json(tracking);
  },
}