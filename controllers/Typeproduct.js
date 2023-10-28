'use strict';

var utils = require('../utils/writer.js');
var Typeproduct = require('../service/TypeproductService');

module.exports.delettypeproducteById = function delettypeproducteById (req, res, next, id) {
  Typeproduct.delettypeproducteById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAlltypeproduct = function getAlltypeproduct (req, res, next) {
  Typeproduct.getAlltypeproduct()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getetypeproductById = function getetypeproductById (req, res, next, id) {
  Typeproduct.getetypeproductById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.posttypeproduct = function posttypeproduct (req, res, next, body) {
  Typeproduct.posttypeproduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updattypeproductById = function updattypeproductById (req, res, next, body, id) {
  Typeproduct.updattypeproductById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
