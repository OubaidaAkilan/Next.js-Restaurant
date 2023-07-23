import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';
import Link from 'next/link';

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.pizzaCard}>
      <Link href={`/products/${pizza._id}`}>
        <div className={styles.container}>
          <Image
            className={styles.img}
            src={pizza.img}
            width={'100'}
            height={'100'}
            objectFit='contain'
          />
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>${pizza.prices[0]}</span>
          <p className={styles.desc}>{pizza.desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default PizzaCard;
