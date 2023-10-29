'use strict';
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/pj";

/**
 * ลบแบบสำรวจโดยแอดมิน
 *
 * id String survey ID
 * returns inline_response_200_1
 **/
exports.deletproductById = function(id) {
  return new Promise(async function (resolve, reject) {
    try {
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

      await client.connect();
      const objectId = new ObjectId(id); // แปลง ID ที่รับมาเป็น ObjectId
      const result = await client.db('pj').collection('product').deleteOne({ "_id": objectId });

      await client.close();

      if (result.deletedCount > 0) {
        const response = {
          status: 'ok',
          message: 'Product with ID = ' + id + ' has been deleted',
          data: null
        };

        resolve(response);
      } else {
        const response = {
          status: 'not found',
          message: 'Product with ID = ' + id + ' does not exist'
        };

        resolve(response);
      }
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * ดูแบบสำรวจโดยแอดมิน
 *
 * returns inline_response_200_7
 **/
exports.getAllproduct = function() {
  return new Promise(async function(resolve, reject) {
    try {
      const client = new MongoClient(uri);

      await client.connect();

      const products = await client.db('pj').collection('product').find({}).toArray();

      await client.close();

      resolve(products);
    } catch (error) {
      reject(error);
    }
  })
}


/**
 * ดูผลสำรวจรายบุคคลโดยแอดมิน
 *
 * id String survey user id
 * returns inline_response_200_8
 **/
const { ObjectId } = require('mongodb'); // ต้อง import ObjectId จาก mongodb library

exports.geteproductById = function(id) {
  return new Promise(async function(resolve, reject) {
    try {
      const client = new MongoClient(uri);

      await client.connect();
      const objectId = new ObjectId(id); // แปลง ID ที่รับมาเป็น ObjectId
      const product = await client.db('pj').collection('product').findOne({ "_id": objectId });

      await client.close();

      if (product) {
        const response = {
          status: 'ok',
          message: 'Product with ID = ' + id + ' is retrieved',
          data: product
        };

        resolve(response);
      } else {
        const response = {
          status: 'not found',
          message: 'Product with ID = ' + id + ' does not exist'
        };

        resolve(response);
      }
    } catch (error) {
      reject(error);
    }
  });
}






/**
 * แบบสำรวจ
 *
 * body Product 
 * returns inline_response_200_1
 **/
exports.postproduct = function(body) {
  return new Promise(async function (resolve, reject) {
    try {
      const user = body;
      const client = new MongoClient(uri);

      await client.connect();
      const result = await client.db('pj').collection('product').insertOne({
        image: user.image,
        productid: user.productid,
        name: user.name,
        typeid: user.typeid,
        dateEnd: user.dateEnd,
        value: user.value,
        price: user.price
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
 * body Product 
 * id String ID ของคำตอบที่ต้องการแก้ไข
 * returns inline_response_200_8
 **/
exports.updatproducttById = function(body,id) {
  return new Promise(async function (resolve, reject) {
    try {
      const client = new MongoClient(uri);

      await client.connect();
      const objectId = new ObjectId(id); // แปลง ID ที่รับมาเป็น ObjectId

      const filter = { _id: objectId };

      // กำหนดข้อมูลที่จะถูกอัปเดต
      const updateDocument = {
        $set: {
          name: body.name, // แก้ไขชื่อ
          value: body.value, // แก้ไขจำนวน
          dateEnd: body.dateEnd, // แก้ไขวันหมดอายุ
          image: body.image, // แก้ไข URL รูปภาพ
          productid: body.productid, // แก้ไขรหัสสินค้า
          typeid: body.typeid, // แก้ไขประเภท
        },
      };

      const result = await client
        .db('pj')
        .collection('product')
        .updateOne(filter, updateDocument);

      await client.close();

      if (result.modifiedCount > 0) {
        const response = {
          status: 'ok',
          message: 'Product with ID = ' + id + ' is updated',
        };
      
        resolve(response);
      } else {
        const response = {
          status: 'not found',
          message: 'Product with ID = ' + id + ' does not exist',
        };
      
        resolve(response);
      }
      
    } catch (error) {
      reject(error);
    }
  });
}

