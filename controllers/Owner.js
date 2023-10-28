'use strict';

var utils = require('../utils/writer.js');
var Owner = require('../service/OwnerService');

module.exports.deletewonerById = function deletewonerById (req, res, next, id) {
  Owner.deletewonerById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllwoner = function getAllwoner (req, res, next) {
  Owner.getAllwoner()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getwonerById = function getwonerById (req, res, next, id) {
  Owner.getwonerById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postwoner = function postwoner (req, res, next, body) {
  Owner.postwoner(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatewonerById = function updatewonerById (req, res, next, body, id) {
  Owner.updatewonerById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginowner = function loginowner (req, res, next, body) {
  Owner.loginowner(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};