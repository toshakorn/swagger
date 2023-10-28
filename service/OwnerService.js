"use strict";
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/pj";
const { ObjectId } = require('mongodb'); // ต้อง import ObjectId จาก mongodb library

/**
 * ลบแบบสำรวจโดยแอดมิน
 *
 * id String survey ID
 * returns inline_response_200_1
 **/
exports.deletewonerById = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      code: 0,
      message: "message",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * ดูแบบสำรวจโดยแอดมิน
 *
 * returns inline_response_200
 **/
exports.getAllwoner = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      code: 0,
      data: [
        {
          image: "image",
          password: "password",
          phone: "phone",
          name: "name",
          user: "user",
          lastname: "lastname",
        },
        {
          image: "image",
          password: "password",
          phone: "phone",
          name: "name",
          user: "user",
          lastname: "lastname",
        },
      ],
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * ดูผลสำรวจรายบุคคลโดยแอดมิน
 *
 * id String survey user id
 * returns inline_response_200_2
 **/
exports.getwonerById = function (id) {
  return new Promise(async function (resolve, reject) {
    try {
      const client = new MongoClient(uri);
      
      await client.connect();
      const objectId = new ObjectId(id); // แปลง ID ที่รับมาเป็น ObjectId
      const user = await client
        .db('pj')
        .collection('owner')
        .findOne({ "_id": objectId });

      await client.close();

      if (user) {
        const response = {
          code: 0,
          data: user,
        };
        resolve(response);
      } else {
        const response = {
          code: 1,
          message: 'Owner not found',
        };
        resolve(response);
      }
    } catch (error) {
      reject(error);
    }
  });
};




/**
 * แบบสำรวจ
 *
 * body Owner
 * returns inline_response_200_1
 **/
exports.postwoner = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      const user = body;
      const client = new MongoClient(uri);

      await client.connect();
      const result = await client.db("pj").collection("owner").insertOne({
        image: user.image,
        password: user.password,
        phone: user.phone,
        name: user.name,
        user: user.user,
        lastname: user.lastname,
      });

      await client.close();

      const response = {
        status: "ok",
        message: "User with ID = " + user.id + " is created",
        user: user,
      };

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * แก้ไขคำตอบ
 *
 * body Owner
 * id String ID ของคำตอบที่ต้องการแก้ไข
 * returns inline_response_200_2
 **/

exports.updatewonerById = function (body, id) {
  return new Promise(async function (resolve, reject) {
    try {
      const client = new MongoClient(uri);

      await client.connect();
      const objectId = new ObjectId(id); // แปลง ID ที่รับมาเป็น ObjectId

      // กำหนดข้อมูลที่จะถูกอัปเดต
      const updateDocument = {
        $set: {
          image: body.image,
          password: body.password,
          phone: body.phone,
          name: body.name,
          user: body.user,
          lastname: body.lastname,
          email: body.email,
        },
      };
      
      const result = await client
        .db('pj')
        .collection('owner')
        .updateOne({ "_id": objectId }, updateDocument);
    
      await client.close();

      if (result.modifiedCount > 0) {
        const Response = {
          status: 'ok',
          message: 'owner with ID = ' + id + ' is updated',
        };
        resolve(Response);
      } else {
        const Response = {
          status: 'not found',
          message: 'owner with ID = ' + id + ' does not exist',
        };
        resolve(Response);
      }
    } catch (error) {
      reject(error);
    }
  });
};





/**
 * แบบสำรวจ
 *
 * body Owner 
 * returns inline_response_200_1
 **/
exports.loginowner = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      const client = new MongoClient(uri);
      await client.connect();

      const credentials = body;
      const user = await client
        .db("pj")
        .collection("owner")
        .findOne({
          username: credentials.username, // แก้ไขให้เป็น credentials.usernaem
          password: credentials.password,
        });

      if (user) {
        const response = {
          code: 0,
          data: user,
        };
        resolve(response);
      } else {
        const errorResponse = {
          code: 1,
          message: "Login failed",
        };
        reject(errorResponse);
      }

      await client.close();
    } catch (error) {
      const errorResponse = {
        code: 1,
        message: "An error occurred while processing the request",
      };
      reject(errorResponse);
    }
  });
};
