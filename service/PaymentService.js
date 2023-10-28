"use strict";
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/pj";
const { ObjectId } = require("mongodb"); // ต้อง import ObjectId จาก mongodb library

/**
 * ลบแบบสำรวจโดยแอดมิน
 *
 * id String survey ID
 * returns inline_response_200_1
 **/
exports.deletpaymentById = function (id) {
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
 * returns inline_response_200_15
 **/
exports.getAllpayment = function () {
  return new Promise(async function (resolve, reject) {
    try {
      const client = new MongoClient(uri);

      await client.connect();

      const products = await client
        .db("pj")
        .collection("payment")
        .find({})
        .toArray();

      await client.close();

      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * ดูผลสำรวจรายบุคคลโดยแอดมิน
 *
 * id String survey user id
 * returns inline_response_200_16
 **/
exports.getpaymentById = function (id) {
  return new Promise(async function (resolve, reject) {
    try {
      const client = new MongoClient(uri);

      await client.connect();
      const objectId = new ObjectId(id); // แปลง ID ที่รับมาเป็น ObjectId
      const product = await client
        .db("pj")
        .collection("payment")
        .findOne({ _id: objectId });

      await client.close();

      if (product) {
        const response = {
          status: "ok",
          message: "Product with ID = " + id + " is retrieved",
          data: product,
        };

        resolve(response);
      } else {
        const response = {
          status: "not found",
          message: "Product with ID = " + id + " does not exist",
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
 * body Payment
 * returns inline_response_200_1
 **/
exports.postpayment = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      const user = body;
      const client = new MongoClient(uri);

      await client.connect();
      const result = await client.db("pj").collection("payment").insertOne({
        promptpay: body.promptpay,
        name: body.name,
        lastname: body.lastname,
      });

      await client.close();

      const response = {
        status: "ok",
        message: "promptpay with ID = " + user.promptpay + " is created",
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
 * body Payment
 * id String ID ของคำตอบที่ต้องการแก้ไข
 * returns inline_response_200_16
 **/
exports.updatpaymentById = function (body, id) {
  return new Promise(async function (resolve, reject) {
    try {
      const objectId = new ObjectId(id);
      const client = new MongoClient(uri);

      await client.connect();
      const database = client.db("pj");
      const collection = database.collection("payment");

      // ใช้ body ในการรับข้อมูลที่ควรอัปเดต
      const updateData = {
        $set: body,
      };

      const result = await collection.updateOne({ _id: objectId }, updateData);
      await client.close();

      if (result.modifiedCount > 0) {
        const response = {
          status: "ok",
          message: "PromptPay with ID = " + id + " is updated",
        };
        resolve(response);
      } else {
        const response = {
          status: "not found",
          message: "PromptPay with ID = " + id + " does not exist",
        };
        resolve(response);
      }
    } catch (error) {
      reject(error);
    }
  });
};
