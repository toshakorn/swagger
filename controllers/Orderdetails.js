'use strict';

var utils = require('../utils/writer.js');
var Orderdetails = require('../service/OrderdetailsService');

module.exports.deletorderdetailsById = function deletorderdetailsById (req, res, next, id) {
  Orderdetails.deletorderdetailsById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllorderdetails = function getAllorderdetails (req, res, next) {
  Orderdetails.getAllorderdetails()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getorderdetailsById = function getorderdetailsById (req, res, next, id) {
  Orderdetails.getorderdetailsById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postorderdetails = function postorderdetails (req, res, next, body) {
  Orderdetails.postorderdetails(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatorderdetailsById = function updatorderdetailsById (req, res, next, body, id) {
  Orderdetails.updatorderdetailsById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
