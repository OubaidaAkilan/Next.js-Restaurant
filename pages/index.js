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

/* getStaticProps is a method used to fetch data at build time. 
This means that the data is fetched when the application is built and is then served statically. 
This method is useful when you need to fetch data that doesn't change frequently, 
and you want to serve the same data to all users.
For example, if you have a blog that only gets updated once a week, 
you could use getStaticProps to fetch the blog post data at build time. 
This would ensure that all users see the same content, 
and you wouldn't need to fetch the data every time a request is made to the server. 
Another situation where getStaticProps would be useful is when you need to fetch data 
that is not user-specific, such as a list of blog posts or a list of products.
The benefit of using getStaticProps is that 
it has a performance benefit since the data is fetched at build time, 
and there is no need to fetch it again during runtime. 
This means that your app will have faster load times and better performance. */

//====SSG====//
//== This function will pass the props into the component
//====THIS FUN REPRESENT THE SERVER SIDE, AND IT WILL RUN BEFORE RENDER THE COMPONENT
export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products');

  return {
    props: {
      pizzaList: res.data,
    },
  };
};
