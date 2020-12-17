const routes = require('express').Router();

const UserCtrl = require('../src/controllers/UserCtrl');
const TrackingCtrl = require('../src/controllers/TrackingCtrl');
const ProductCtrl = require('../src/controllers/ProductCtrl');

// routes users
routes.get('/users',UserCtrl.index);
routes.get('/users/:id',UserCtrl.show);
routes.post('/users',UserCtrl.create);
routes.put('/users/:id',UserCtrl.update);
routes.delete('/users/:id',UserCtrl.delete);

// routes tracking
routes.get('/tracking',TrackingCtrl.index);
routes.get('/users/:user_id/tracking',TrackingCtrl.show);
routes.post('/users/:user_id/tracking',TrackingCtrl.create);
routes.put('/tracking/:id',TrackingCtrl.update);
routes.delete('/tracking/:id',TrackingCtrl.delete);


// routes products
routes.get('/products',ProductCtrl.index);
routes.get('/tracking/:tracking_id/products',ProductCtrl.show);
routes.post('/tracking/:tracking_id/products',ProductCtrl.create);
routes.put('/products/:id',ProductCtrl.update);
routes.delete('/products/:id',ProductCtrl.delete);

module.exports = routes;