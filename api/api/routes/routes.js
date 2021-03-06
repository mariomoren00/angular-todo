'use strict';

import * as categories from '../app/controllers/categories';

import express from 'express';

module.exports = app => {
  
  var api = express.Router();              

  // Declare access route 
  api.get("/", (req, res) => res.json({message: "Welcome to our Blog Api categories!"}));

  api.get('/categories', categories.getCategories);
  api.post('/categories', categories.saveCategory);
  api.get('/categories/:id', categories.getCategoryById);
  api.put('/categories', categories.updateCategory);  
  api.delete('/categories/:id', categories.deleteCategory);

  app.use('/api/v1', api);
}
