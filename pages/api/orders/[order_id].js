//path: domain.com/api/orders/order_id

import dbConnect from '@/config/mongo';
import orderModel from '@/models/orderModel.js';

export default async function handler(req, res) {
  const {
    method,
    query: { order_id },
  } = req;

  dbConnect();

  /*   
  ========================
    Start GET
  ===============
*/

  if (method === 'GET') {
    try {
      const order = await orderModel.findById(order_id);

      res.status(200).json(order);
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
    Start PUT
  ===============
*/

  // @desc    Update a order
  // @route   PUT domain.com/api/orders
  // @access  Private

  if (method === 'PUT') {
    try {
      const order = await orderModel.updateOne({ _id: order_id }, req.body);

      res.status(204).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  /*   
  =========
    End PUT 
  ==============================
*/

  /*   
  ========================
    Start DELETE
  ===============
*/

  // @desc    Update a order
  // @route   DELETE domain.com/api/orders
  // @access  Private

  if (method === 'DELETE') {
    try {
      const order = await orderModel.delete(req.body);

      res.status(205).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  /*   
  =========
    End DELETE 
  ==============================
*/
} // ========End the Handle function
