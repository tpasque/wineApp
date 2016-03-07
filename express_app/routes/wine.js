var express = require('express');
var router = express.Router();

var knex = require("../db/knex");


var Wine = function(){
  return knex('wine');
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('index', { title: 'Express' });
});

module.exports = router;
