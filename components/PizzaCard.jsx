import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.pizzaCard}>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={`/images/slide1.png`}
          width={'100'}
          height={'100'}
          objectFit='contain'
        />

        <h1 className={styles.title}>Italian Pizza</h1>
        <span className={styles.price}>$19</span>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.  .
        </p>
      </div>
    </div>
  );
};

export default PizzaCard;
