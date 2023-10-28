'use strict';

const QRCode = require('qrcode');
const generatePayload = require('promptpay-qr');
const bodyParser = require('body-parser');
const _ = require('lodash');
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/pj";
const { ObjectId } = require('mongodb');

module.exports.postpaymentqr = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      const objectId = new ObjectId("653d41ca0a29604ca07efa7a");
      const client = new MongoClient(uri);

      await client.connect();
      const database = client.db('pj');
      const collection = database.collection('payment');

      const product = await collection.findOne({ "_id": objectId });
      await client.close();

      if (product) {
        const mobileNumber = product.promptpay; // ดึงค่า "promptpay" จาก "data.data"
        const amount = parseFloat(_.get(body, ["amount"]));
        const payload = generatePayload(mobileNumber, { amount });
        const option = {
          color: {
            dark: '#000',
            light: '#fff'
          }
        };

        QRCode.toDataURL(payload, option, (err, url) => {
          if (err) {
            console.log('generate fail');
            reject({
              code: 400,
              message: 'bad : ' + err
            });
          } else {
            resolve({
              code: 200,
              message: 'good',
              result: url
            });
          }
        });
      } else {
        reject({
          code: 404,
          message: 'Product not found'
        });
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการสร้าง QR Code:', error);
      reject({
        code: 500,
        message: 'เกิดข้อผิดพลาดในการสร้าง QR Code'
      });
    }
  });
};
