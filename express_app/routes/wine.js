var express = require('express');
var router = express.Router();

var knex = require("../db/knex");


var Wine = function(){
  return knex('wines');
}

var Categories = function () {
  return knex('categories');
}

var Tastes_Like = function () {
  return knex('tastes_like');
}

router.get('/', function(req, res, next) {
  Wine().select().then(function (payload) {
    res.json(payload)
    console.log(payload);
  })
});

module.exports = router;
