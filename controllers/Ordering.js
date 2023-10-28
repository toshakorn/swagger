'use strict';

var utils = require('../utils/writer.js');
var Ordering = require('../service/OrderingService');

module.exports.deletorderingById = function deletorderingById (req, res, next, id) {
  Ordering.deletorderingById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllorderingduct = function getAllorderingduct (req, res, next) {
  Ordering.getAllorderingduct()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getorderingtById = function getorderingtById (req, res, next, id) {
  Ordering.getorderingtById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postordering = function postordering (req, res, next, body) {
  Ordering.postordering(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatorderingById = function updatorderingById (req, res, next, body, id) {
  Ordering.updatorderingById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
