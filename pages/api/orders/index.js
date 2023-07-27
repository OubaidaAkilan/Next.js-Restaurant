//path: domain.com/api/orders

import dbConnect from '@/config/mongo';
import orderModel from '@/models/orderModel';

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  /*   
  ========================
    Start GET
  ===============
*/

  if (method === 'GET') {
    try {
      const orders = await orderModel.find({});

      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  /*   
  =========
    End GET 
  ==============================
*/

  /*   
  ========================
    Start POST
  ===============
*/

  // @desc    Create a order
  // @route   POST domain.com/api/orders
  // @access  Private

  if (method === 'POST') {
    try {
      const order = await orderModel.create(req.body);

      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  /*   
  =========
    End POST 
  ==============================
*/
}

/*  
        The body of a order
 {
    "customer": "Ali",
    "address": "Amman, Swelih",
    "total": 15,
    "status": 1,
    "method":1
} 
*/
