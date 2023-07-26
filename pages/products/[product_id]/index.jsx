import styles from '@/styles/Product.module.css';
import Image from 'next/image';
import axios from 'axios';

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addProduct } from '@/redux/cartSlice';

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);

  const [price, setPrice] = useState(pizza.prices[0]);

  const [extras, setExtras] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const handleChangePrice = (number) => {
    setPrice(price + number);
  };

  const handleChangeSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    handleChangePrice(difference);
  };

  const handleExtraOptions = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      handleChangePrice(item.price);

      // setExtras([...extras,item]); OR
      setExtras((prev) => [...prev, item]);
    } else {
      handleChangePrice(-item.price);

      setExtras(extras.filter((extra) => extra._id !== item._id));
    }
  };

  //======Redux

  const dispatch = useDispatch();

  const handleAddNewProduct = (e) => {
    e.preventDefault();

    dispatch(addProduct({ ...pizza, extras, quantity, price }));
  };

  return (
    <div className={styles.product}>
      <div className={styles.container + ' container'}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Image
              src={pizza.img}
              objectFit='contain'
              layout='fill'
              alt='product-image'
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>${price}</span>
          <p className={styles.desc}>{pizza.desc}</p>

          <h3 style={{ fontWeight: 'bold', fontSize: '22px' }}>
            Choose the size
          </h3>

          {/* //=== Size Section ===// */}
          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => handleChangeSize(0)}>
              <Image src={'/images/size.png'} layout='fill' />
              <span className={styles.number}>small</span>
            </div>
            <div className={styles.size} onClick={() => handleChangeSize(1)}>
              <Image src={'/images/size.png'} layout='fill' />
              <span className={styles.number}>meduim</span>
            </div>
            <div className={styles.size} onClick={() => handleChangeSize(2)}>
              <Image src={'/images/size.png'} layout='fill' />
              <span className={styles.number}>large</span>
            </div>
          </div>

          {/* //=== Ingredients Section ===// */}
          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            {console.log(pizza)}
            {pizza.extraOptions.map((item, index) => (
              <div className={styles.option} key={item + index}>
                <input
                  type='checkbox'
                  id={item.text}
                  name={item.text}
                  className={styles.checkbox}
                  onChange={(e) => handleExtraOptions(e, item)}
                />
                <label htmlFor={item.text}>{item.text}</label>
              </div>
            ))}
          </div>

          <div className={styles.add}>
            <input
              type='number'
              defaultValue={1}
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.quantity}
            />
            <button
              className={styles.button}
              onClick={(e) => handleAddNewProduct(e)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

/* getServerSideProps fetches data from an external source during runtime. 
It's useful when you need to serve up-to-date information that changes frequently, 
like product information on an e-commerce site or user-specific data like a shopping cart. 
However, using getServerSideProps has a performance impact since the data is fetched every 
time a request is made to the server, which may slow down load times 
if the data changes frequently. */

export const getServerSideProps = async (context) => {
  const product_id = context.params.product_id;

  const res = await axios.get(
    `http://localhost:3000/api/products/${product_id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};

//======Useful Links

// https://www.linkedin.com/pulse/getstaticprops-getserversideprops-which-method-choose-arnav-shukla/
