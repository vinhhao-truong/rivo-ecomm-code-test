import BestSelling from "@/components/pages/Home/sections/BestSelling";
import DesignerClothes4U from "@/components/pages/Home/sections/DesignerClothes4U";
import ExclusiveOffer from "@/components/pages/Home/sections/ExclusiveOffer";
import Hero from "@/components/pages/Home/sections/Hero";
import OurProducts from "@/components/pages/Home/sections/OurProducts";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <BestSelling />
      <OurProducts />
      <ExclusiveOffer />
      <DesignerClothes4U />
    </main>
  );
};

export default Home;
