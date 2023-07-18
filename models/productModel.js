import mongoose from 'mongoose';

//=== 1- Create Schema
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema);

// It checks if mongoose.models.Product exists and is truthy.
// If mongoose.models.Product is truthy, it exports it as the default export.
// If mongoose.models.Product is falsy or does not exist, it exports productModel as the default export

/* 
This code assumes that there is either a mongoose.models.Product object or 
a productModel object available for exporting. The || operator is used as a logical OR 
operator to select the first truthy value encountered. 
*/

/* 
//====Object of product
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
