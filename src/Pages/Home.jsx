import React from "react";
import Banner from "../Components/Banner";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import TopTrendingTips from "../Components/TopTreandingTips";

const Home = () => {
  return (
    <div>
      <section className="mb-24">
        <Banner></Banner>
      </section>
      <section className="mb-24">
        <FeaturedGardeners></FeaturedGardeners>
      </section>
      <section className="mb-24">
        <TopTrendingTips></TopTrendingTips>
      </section>
    </div>
  );
};

export default Home;
