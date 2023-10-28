'use strict';

var utils = require('../utils/writer.js');
var Stockproduct = require('../service/StockproductService');

module.exports.deletstockproductById = function deletstockproductById (req, res, next, id) {
  Stockproduct.deletstockproductById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllstockproduct = function getAllstockproduct (req, res, next) {
  Stockproduct.getAllstockproduct()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getstockproductById = function getstockproductById (req, res, next, id) {
  Stockproduct.getstockproductById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.poststockproduct = function poststockproduct (req, res, next, body) {
  Stockproduct.poststockproduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatstockproductById = function updatstockproductById (req, res, next, body, id) {
  Stockproduct.updatstockproductById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
