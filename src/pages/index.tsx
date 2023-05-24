import { GetStaticProps, NextPage } from 'next';
import client from '../../contentful.js';
import { createClient } from 'contentful';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import FeaturesSection from '../components/Features.tsx';
import PricingSection from '../components/Prices.tsx';
import FAQ from '../components/FAQ.tsx';


interface HomePageProps {
    test: any;
}


const HomePage = (props:any) => {
    console.log("k:", props)
    const a = props.data.userId
    return (
        <div>
            <Header />
            <Hero />
            <FeaturesSection />
            <PricingSection />
            <FAQ />
        </div>
      );
};

export async function getStaticProps() {
    /* const response = await client.getEntries({
      content_type: 'test2',
    }); */

    const res1 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const res2 = await res1.json()



   
  return {
    props: {
      data: res2,
    },
  };
};

export default HomePage;