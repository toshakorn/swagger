'use strict';


/**
 * ลบแบบสำรวจโดยแอดมิน
 *
 * id String survey ID
 * returns inline_response_200_1
 **/
exports.deletstockproductById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ดูแบบสำรวจโดยแอดมิน
 *
 * returns inline_response_200_9
 **/
exports.getAllstockproduct = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : [ {
    "productid" : "productid",
    "price" : 1.4658129805029452,
    "amountproduct" : 6.027456183070403,
    "stockid" : "stockid",
    "dateend" : "dateend",
    "stockproductid" : "stockproductid",
    "datenow" : "datenow"
  }, {
    "productid" : "productid",
    "price" : 1.4658129805029452,
    "amountproduct" : 6.027456183070403,
    "stockid" : "stockid",
    "dateend" : "dateend",
    "stockproductid" : "stockproductid",
    "datenow" : "datenow"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ดูผลสำรวจรายบุคคลโดยแอดมิน
 *
 * id String survey user id
 * returns inline_response_200_10
 **/
exports.getstockproductById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "productid" : "productid",
    "price" : 1.4658129805029452,
    "amountproduct" : 6.027456183070403,
    "stockid" : "stockid",
    "dateend" : "dateend",
    "stockproductid" : "stockproductid",
    "datenow" : "datenow"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * แบบสำรวจ
 *
 * body StockProduct 
 * returns inline_response_200_1
 **/
exports.poststockproduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * แก้ไขคำตอบ
 *
 * body StockProduct 
 * id String ID ของคำตอบที่ต้องการแก้ไข
 * returns inline_response_200_10
 **/
exports.updatstockproductById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "productid" : "productid",
    "price" : 1.4658129805029452,
    "amountproduct" : 6.027456183070403,
    "stockid" : "stockid",
    "dateend" : "dateend",
    "stockproductid" : "stockproductid",
    "datenow" : "datenow"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

