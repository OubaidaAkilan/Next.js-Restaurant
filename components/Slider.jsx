import Image from 'next/image';
import styles from '../styles/Slider.module.css';
import { useState } from 'react';

const images = [
  '/images/slide1.png',
  '/images/slide2.png',
  '/images/slide3.png',
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (dirction) => {
    if (dirction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (dirction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <header className={styles.header}>
      {console.log(index, 'index')}
      <div className={styles.container}>
        <Image
          className={styles.arrow}
          style={{ left: '0' }}
          src='/images/arrowl.png'
          width={100}
          height={100}
          alt='arrow-left'
          objectFit='contain'
          onClick={() => handleArrow('l')}
        />
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${-100 * index}vw)` }}>
          {images.map((item, index) => (
            <div className={styles.imgContainer} key={item + index}>
              <Image
                src={item}
                layout='fill'
                alt={item + index}
                objectFit='contain'
              />
            </div>
          ))}
        </div>
        <Image
          className={styles.arrow}
          style={{ right: '0' }}
          src='/images/arrowr.png'
          width={100}
          height={100}
          alt='arrow-left'
          objectFit='contain'
          onClick={() => handleArrow('r')}
        />
      </div>
    </header>
  );
};

export default Slider;
