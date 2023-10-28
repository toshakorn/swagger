'use strict';

var utils = require('../utils/writer.js');
var Payment = require('../service/PaymentService');

module.exports.deletpaymentById = function deletpaymentById (req, res, next, id) {
  Payment.deletpaymentById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllpayment = function getAllpayment (req, res, next) {
  Payment.getAllpayment()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getpaymentById = function getpaymentById (req, res, next, id) {
  Payment.getpaymentById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postpayment = function postpayment (req, res, next, body) {
  Payment.postpayment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatpaymentById = function updatpaymentById (req, res, next, body, id) {
  Payment.updatpaymentById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
