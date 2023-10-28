'use strict';


/**
 * ลบแบบสำรวจโดยแอดมิน
 *
 * id String survey ID
 * returns inline_response_200_1
 **/
exports.deletorderdetailsById = function(id) {
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
 * returns inline_response_200_13
 **/
exports.getAllorderdetails = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : [ {
    "orderingid" : "orderingid",
    "order" : {
      "amount" : 6.027456183070403,
      "productid" : "productid"
    }
  }, {
    "orderingid" : "orderingid",
    "order" : {
      "amount" : 6.027456183070403,
      "productid" : "productid"
    }
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
 * returns inline_response_200_14
 **/
exports.getorderdetailsById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "orderingid" : "orderingid",
    "order" : {
      "amount" : 6.027456183070403,
      "productid" : "productid"
    }
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
 * body Orderdetails 
 * returns inline_response_200_1
 **/
exports.postorderdetails = function(body) {
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
 * body Orderdetails 
 * id String ID ของคำตอบที่ต้องการแก้ไข
 * returns inline_response_200_14
 **/
exports.updatorderdetailsById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "orderingid" : "orderingid",
    "order" : {
      "amount" : 6.027456183070403,
      "productid" : "productid"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

