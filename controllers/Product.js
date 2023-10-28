'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.deletproductById = function deletproductById (req, res, next, id) {
  Product.deletproductById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllproduct = function getAllproduct (req, res, next) {
  Product.getAllproduct()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geteproductById = function geteproductById (req, res, next, id) {
  Product.geteproductById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postproduct = function postproduct (req, res, next, body) {
  Product.postproduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatproducttById = function updatproducttById (req, res, next, body, id) {
  Product.updatproducttById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
