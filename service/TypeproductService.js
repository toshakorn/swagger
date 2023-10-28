'use strict';
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/pj";

/**
 * ลบแบบสำรวจโดยแอดมิน
 *
 * id String survey ID
 * returns inline_response_200_1
 **/
exports.delettypeproducteById = function(id) {
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
 * returns inline_response_200_5
 **/
exports.getAlltypeproduct = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : [ {
    "name" : "name",
    "typeid" : "typeid"
  }, {
    "name" : "name",
    "typeid" : "typeid"
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
 * returns inline_response_200_6
 **/
exports.getetypeproductById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "name" : "name",
    "typeid" : "typeid"
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
 * body Typeproduct 
 * returns inline_response_200_1
 **/
exports.posttypeproduct = function(body) {
  return new Promise(async function (resolve, reject) {
    try {
      const user = body;
      const client = new MongoClient(uri);

      await client.connect();
      const result = await client.db('pj').collection('typeproduct').insertOne({
        name: user.name,
        typeid: user.typeid
      });

      await client.close();

      const response = {
        status: 'ok',
        message: 'Product with ID = ' + user.typeid + ' is created'
      };

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * แก้ไขคำตอบ
 *
 * body Typeproduct 
 * id String ID ของคำตอบที่ต้องการแก้ไข
 * returns inline_response_200_6
 **/
exports.updattypeproductById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "name" : "name",
    "typeid" : "typeid"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

