import styles from '@/styles/Product.module.css';
import Image from 'next/image';
import axios from 'axios';

import { useState } from 'react';

const Product = ({ pizza }) => {
  // pizza = {
  //   id: 1,
  //   img: '/images/slide1.png',
  //   title: 'CAMPAGNOLA',
  //   price: [19.9, 23.9, 27.9],
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  // };

  const [size, setSize] = useState(0);

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
          <span className={styles.price}>${pizza.prices[size]}</span>
          <p className={styles.desc}>{pizza.desc}</p>

          <h3 style={{ fontWeight: 'bold', fontSize: '22px' }}>
            Choose the size
          </h3>

          {/* //=== Size Section ===// */}
          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => setSize(0)}>
              <Image src={'/images/size.png'} layout='fill' />
              <span className={styles.number}>small</span>
            </div>
            <div className={styles.size} onClick={() => setSize(1)}>
              <Image src={'/images/size.png'} layout='fill' />
              <span className={styles.number}>meduim</span>
            </div>
            <div className={styles.size} onClick={() => setSize(2)}>
              <Image src={'/images/size.png'} layout='fill' />
              <span className={styles.number}>large</span>
            </div>
          </div>

          {/* //=== Ingredients Section ===// */}
          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            <div className={styles.option}>
              <input
                type='checkbox'
                id='double'
                name='double'
                className={styles.checkbox}
              />
              <label htmlFor='double'>Double Ingredients</label>
            </div>
            <div className={styles.option}>
              <input
                className={styles.checkbox}
                type='checkbox'
                id='cheese'
                name='cheese'
              />
              <label htmlFor='cheese'>Extra Cheese</label>
            </div>
            <div className={styles.option}>
              <input
                className={styles.checkbox}
                type='checkbox'
                id='spicy'
                name='spicy'
              />
              <label htmlFor='spicy'>Spicy Sauce</label>
            </div>
            <div className={styles.option}>
              <input
                className={styles.checkbox}
                type='checkbox'
                id='garlic'
                name='garlic'
              />
              <label htmlFor='garlic'>Garlic Sauce</label>
            </div>
          </div>

          <div className={styles.add}>
            <input type='number' defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
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
