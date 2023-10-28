'use strict';

var utils = require('../utils/writer.js');
var Paymentqr = require('../service/PaymentqrService');

module.exports.postpaymentqr = function postpaymentqr (req, res, next, body) {
  Paymentqr.postpaymentqr(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};