import React from "react";
import Banner from "../Components/Banner";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import TopTrendingTips from "../Components/TopTreandingTips";
import SeasonalGuide from "../Components/SesonalGuide";
import GardeningTools from "../Components/GardeningTools";

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
      <section className="mb-24">
        <SeasonalGuide></SeasonalGuide>
      </section>
      <section className="mb-24">
        <GardeningTools></GardeningTools>
      </section>
    </div>
  );
};

export default Home;
