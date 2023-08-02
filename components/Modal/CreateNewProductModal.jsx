import React, { useState } from 'react';
import styles from '@/styles/CreateNewProductModal.module.css';
import { AiOutlineClose } from 'react-icons/ai';

const CreateNewProductModal = ({ setShowProductModal }) => {
  //     {
  //     "title": "pizza 1",
  //     "desc": "product 1",
  //     "img": "/images/slide1.png",
  //     "prices": [
  //         10,
  //         15,
  //         20
  //     ],
  //     "extraOptions": [
  //         {
  //             "text": "tomato sauce",
  //             "price": 1
  //         }
  //     ]
  // }

  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    productTitle: '',
    productDesc: '',
    prices: [],
    extraText: '',
    extraPrice: '',
    extraOptions: [],
  });

  const handleChangePrice = (e, index) => {
    const currentPrices = formData.prices;
    currentPrices[index] = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      prices: currentPrices,
    }));
  };

  const handleExtraOptions = (e) => {
    if (formData.extraText && formData.extraPrice) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        extraOptions: [
          ...prevFormData.extraOptions,
          {
            text: formData.extraText,
            price: Number(formData.extraPrice),
          },
        ],
        extraText: '',
        extraPrice: '',
      }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can do something with the form data here
    console.log(Object.values(formData));
    if (
      formData.productTitle === '' ||
      formData.productDesc === '' ||
      formData.prices.length === 0 ||
      formData.extraOptions.length === 0
    ) {
      console.log('fill out all fields');
      return;
    }
    console.log(formData);

    setFormData((prev) => ({
      ...prev,
      productTitle: '',
      productDesc: '',
      extraText: '',
      extraPrice: '',
      extraOptions: [],
    }));
  };

  return (
    <div className={styles.createNewProductModal}>
      <AiOutlineClose
        size={'2rem'}
        color='#666'
        onClick={() => setShowProductModal(false)}
      />{' '}
      <div className={styles.formGroup}>
        <label htmlFor='productTitle'>Title:</label>
        <input
          type='text'
          id='productTitle'
          name='productTitle'
          className={styles.productTitleInput}
          onChange={handleChange}
          value={formData.productTitle}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='productDesc'>Description:</label>
        <input
          type='text'
          id='productDesc'
          name='productDesc'
          className={styles.productDescInput}
          onChange={handleChange}
          value={formData.productDesc}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='productImg'>Image:</label>
        <input
          type='file'
          id='productImg'
          className={styles.productImgInput}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      {/* Rendering prices inputs */}
      <div className={styles.formGroup}>
        <label>Prices:</label>
        {['small', 'medium', 'large'].map((size, index) => (
          <input
            key={`size_${index}`}
            type='number'
            name={size}
            className={styles.productPriceInput}
            placeholder={size}
            onChange={(e) => handleChangePrice(e, index)}
          />
        ))}
      </div>
      {/* Rendering extra inputs */}
      <div className={styles.formGroup}>
        <label>Extra:</label>

        <div className={styles.extraOptionContainer}>
          <input
            type='text'
            className={styles.extraOptionTextInput}
            placeholder='name'
            name='extraText'
            onChange={handleChange}
            value={formData.extraText}
          />
          <input
            type='number'
            className={styles.extraOptionPriceInput}
            placeholder='price'
            name='extraPrice'
            onChange={handleChange}
            value={formData.extraPrice}
          />
          <button onClick={(e) => handleExtraOptions(e)}>Add</button>
        </div>
      </div>
      {/* Rendering extraOptions inputs */}
      <div className={styles.formGroup}>
        <label>Extra Options:</label>
        {formData.extraOptions.map((option, index) => (
          <span
            key={`${option}_${index}`}>{`${option.text} $${option.price}`}</span>
        ))}
      </div>
      <button onClick={(e) => handleSubmit(e)}>Add New Product</button>
    </div>
  );
};

export default CreateNewProductModal;
