//path: domain.com/api/products/product_id

import dbConnect from '@/config/mongo';
import productModel from '@/models/productModel.js';

export default async function handler(req, res) {
  const {
    method,
    query: { product_id },
  } = req;

  dbConnect();

  /*   
  ========================
    Start GET
  ===============
*/

  if (method === 'GET') {
    try {
      const product = await productModel.findById(product_id);

      res.status(200).json(product);
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

  // @desc    Update a product
  // @route   PUT domain.com/api/products
  // @access  Private

  if (method === 'PUT') {
    try {
      const product = await productModel.findByIdAndUpdate(
        product_id,
        req.body
      );

      if (product) {
        res.status(200).json('The product has been updated');
      } else {
        res.status(501).json('The product is not exist');
      }
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

  // @desc    Update a product
  // @route   DELETE domain.com/api/products
  // @access  Private

  if (method === 'DELETE') {
    try {
      const product = await productModel.findByIdAndDelete(product_id);
      if (product) {
        res.status(200).json('The product has been deleted');
      } else {
        res.status(501).json('The product is not exist');
      }
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
