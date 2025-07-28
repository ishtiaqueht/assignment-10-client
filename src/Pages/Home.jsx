import React from 'react';
import Banner from '../Components/Banner';
import FeaturedGardeners from '../Components/FeaturedGardeners';

const Home = () => {
    return (
        <div>
            <section className='mb-24'>
                <Banner></Banner>
            </section>
            <section className='mb-24'>
                <FeaturedGardeners></FeaturedGardeners>
            </section>
        </div>
    );
};

export default Home;