'use strict';

const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/pj";
/**
 * ลบแบบสำรวจโดยแอดมิน
 *
 * id String survey ID
 * returns inline_response_200_1
 **/
exports.deleteemployeeById = function(id) {
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
 * returns inline_response_200_3
 **/
exports.getAllemployee = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : [ {
    "image" : "image",
    "password" : "password",
    "phone" : "phone",
    "name" : "name",
    "employeeid" : "employeeid",
    "user" : "user",
    "lastname" : "lastname"
  }, {
    "image" : "image",
    "password" : "password",
    "phone" : "phone",
    "name" : "name",
    "employeeid" : "employeeid",
    "user" : "user",
    "lastname" : "lastname"
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
 * returns inline_response_200_4
 **/
exports.getemployeerById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "image" : "image",
    "password" : "password",
    "phone" : "phone",
    "name" : "name",
    "employeeid" : "employeeid",
    "user" : "user",
    "lastname" : "lastname"
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
 * body Employee 
 * returns inline_response_200_1
 **/
exports.postemployee = function(body) {
  return new Promise(async function (resolve, reject) {
    try {
      const user = body;
      const client = new MongoClient(uri);

      await client.connect();
      const result = await client.db('pj').collection('employee ').insertOne({
        image: user.image,
        password: user.password,
        phone: user.phone,
        name: user.name,
        user: user.user,
        lastname:user.lastname
      });

      await client.close();

      const response = {
        status: 'ok',
        message: 'User with ID = ' + user.id + ' is created',
        user: user
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
 * body Employee 
 * id String ID ของคำตอบที่ต้องการแก้ไข
 * returns inline_response_200_4
 **/
exports.updateemployeeById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : {
    "image" : "image",
    "password" : "password",
    "phone" : "phone",
    "name" : "name",
    "employeeid" : "employeeid",
    "user" : "user",
    "lastname" : "lastname"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

