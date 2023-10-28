'use strict';

var utils = require('../utils/writer.js');
var Employee = require('../service/EmployeeService');

module.exports.deleteemployeeById = function deleteemployeeById (req, res, next, id) {
  Employee.deleteemployeeById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllemployee = function getAllemployee (req, res, next) {
  Employee.getAllemployee()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getemployeerById = function getemployeerById (req, res, next, id) {
  Employee.getemployeerById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postemployee = function postemployee (req, res, next, body) {
  Employee.postemployee(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateemployeeById = function updateemployeeById (req, res, next, body, id) {
  Employee.updateemployeeById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
