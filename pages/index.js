import PizzaList from '@/components/PizzaList';
import Slider from '@/components/Slider';
import Head from 'next/head';
import axios from 'axios';

export default function Home({ pizzaList }) {
  // console.log(pizzaList);
  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name='description' content='The best restaurant for pizza' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Slider />
        <PizzaList pizzaList={pizzaList} />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products');

  return {
    props: {
      pizzaList: res.data,
    },
  };
};
