//path: domain.com/api/products

import dbConnect from '@/config/mongo';
import productModel from '@/models/productModel.js';

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
      const products = await productModel.find({});

      res.status(200).json(products);
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

  // @desc    Create a product
  // @route   POST domain.com/api/products
  // @access  Private

  /*  
        The body of a product
 {
    "title": "pizza 1",
    "desc": "product 1",
    "img": "/images/slide1.png",
    "prices": [
        10,
        15,
        20
    ],
    "extraOptions": [
        {
            "text": "tomato sauce",
            "price": 1
        }
    ]
} 
*/

  if (method === 'POST') {
    try {
      const product = await productModel.create(req.body);

      res.status(201).json(product);
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
