

const express = require('express');
const categories = require('../models/categories/categories-model.js');
const products = require('../models/products/products-model.js');
const router = express.Router();
const Users = require('../auth/users.js');
const basicOfAuth = require('../auth/basic-auth-middleware.js');
const oauthMiddleware = require('../auth/oauth-middleware.js');

//Define our router
router.param('model',getModel);
/**
 * dyanamicRouter
 * @RESTRoute
 * @handlerFunctions
 */
router.get('/api/v1/:model/:id',getOneHandler);
router.get('/api/v1/:model',getHandler);
router.post('/api/v1/:model',postHandler);
router.put('/api/v1/:model/:id',updateHandler);
router.delete('/api/v1/:model/:id',deleteHandler);
/**
 * @signin
 * @signup
 */
router.post('/signup', signup);
router.post('/signin', basicOfAuth, signin);
router.get('/oauth',oauthMiddleware,oauth);
/**
 *
 * @param {req.model.CRUDmethod} req
 * @param {res.json(data)} res
 * @param {run middleware function if there any} next
 */
function getOneHandler(req,res,next){
  let id = req.params.id;
  req.model.get(id)
    .then(record=>{
      res.status(200).json(record);
    }).catch(next);

}
function getHandler(req,res,next){
  req.model.get()
    .then(results=>{
      let count = results.length;
      res.status(200).json({count,results});
    })
    .catch(next);
}
function postHandler(req,res,next){
  req.model.create(req.body)
    .then(data=>{
      res.status(201).json(data);
    })
    .catch(next);
}
function updateHandler(req,res,next){
  let id = req.params.id;
  req.model.update(id)
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(next);
}
function deleteHandler(req,res,next){
  let id = req.params.id;
  req.model.delete(id)
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(next);
}
/**
 * daynamic Model
 * @param {*req.model} req
 * @param {*} res
 * @param {*} ne`xt `
 */
function getModel(req,res,next){
  let model = req.params.model;
  switch(model){
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('invalid model');
    return;
  }
}
/**
 * functon for signin and signup
 */
function signup(req,res,next){
  let users = new Users(req.body);
  users.save()
    .then(username=>{
      req.token = username.tokenGenerationForSignup(username);
      req.user = username;
      res.status(200).json(req.token);
    });
}
function signin(req,res,next){
  res.status(200).send(req.token);
}
function oauth(req,res,next){
  res.status(200).json(req.token);
}

module.exports = router;