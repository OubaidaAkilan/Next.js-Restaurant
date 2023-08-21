import React, { useState } from 'react';
import styles from '@/styles/CreateNewProductModal.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import axiosInstance from '@/config/AxiosInstance';
import axios from 'axios';

const CreateNewProductModal = ({ setShowProductModal }) => {
  const [file, setFile] = useState(null);

  const [showMsg, setShowMsg] = useState(false);

  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    productTitle: '',
    productDesc: '',
    prices: [],
    extraText: '',
    extraPrice: '',
    extraOptions: [],
  });

  const handleChangePrice = (e, index) => {
    setShowMsg(false);
    const currentPrices = formData.prices;
    currentPrices[index] = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      prices: currentPrices,
    }));
  };

  const handleExtraOptions = () => {
    setShowMsg(false);
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
    setShowMsg(false);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const createNewProduct = async (imageUrl) => {
    const newProduct = {
      title: formData.productTitle,
      desc: formData.productDesc,
      img: imageUrl,
      prices: formData.prices,
      extraOptions: formData.extraOptions,
    };

    try {
      await axiosInstance.post(`/api/products`, newProduct);
      setMessage('The product has been added');
      setShowMsg(true);
    } catch (err) {
      setMessage(err.message);
      setShowMsg(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let urlImage = '';

    // You can do something with the form data here
    if (
      formData.productTitle === '' ||
      formData.productDesc === '' ||
      formData.prices.length === 0 ||
      formData.extraOptions.length === 0 ||
      !file
    ) {
      setMessage('fill out all fields');
      setShowMsg(true);
      return;
    }
    // console.log(formData);

    try {
      const data = new FormData();

      data.append('file', file);
      //== It is configration on cloudinary to create new folder and make it accissable to everyone
      //go into the --> Setting > upload > Add upload preset > change the 'Upload preset name' and 'Folder' as you like  these field should have the same name > change the 'Signing Mode:' to 'Unsigned'

      data.append('upload_preset', 'pizza-products');

      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/dcai2gay6/image/upload`, // == To upload image this url is constant just change the <>dcai2gay6<> your id
        data
      );

      urlImage = uploadRes.data.url;

      await createNewProduct(urlImage);
    } catch (err) {
      setMessage(err.message);
      setShowMsg(true);
    }

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
          <button onClick={() => handleExtraOptions()}>Add</button>
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
      {showMsg && <span>{message}</span>}
    </div>
  );
};

export default CreateNewProductModal;
