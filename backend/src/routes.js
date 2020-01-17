const express =require('express');
const sinesp = require('./Search')
const routes = express.Router()


routes.get('/plate', sinesp.search)
    

module.exports = routes;

