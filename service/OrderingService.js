'use strict';


/**
 * ลบแบบสำรวจโดยแอดมิน
 *
 * id String survey ID
 * returns inline_response_200_1
 **/
exports.deletorderingById = function(id) {
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
 * returns inline_response_200_11
 **/
exports.getAllorderingduct = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : [ {
    "price" : 6.027456183070403,
    "orderingid" : "orderingid",
    "customer" : "customer",
    "datenow" : "datenow",
    "status" : "status"
  }, {
    "price" : 6.027456183070403,
    "orderingid" : "orderingid",
    "customer" : "customer",
    "datenow" : "datenow",
    "status" : "status"
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
 * returns inline_response_200_12
 **/
exports.getorderingtById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "price" : 6.027456183070403,
    "orderingid" : "orderingid",
    "customer" : "customer",
    "datenow" : "datenow",
    "status" : "status"
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
 * body Ordering 
 * returns inline_response_200_1
 **/
exports.postordering = function(body) {
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
 * body Ordering 
 * id String ID ของคำตอบที่ต้องการแก้ไข
 * returns inline_response_200_12
 **/
exports.updatorderingById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "price" : 6.027456183070403,
    "orderingid" : "orderingid",
    "customer" : "customer",
    "datenow" : "datenow",
    "status" : "status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

