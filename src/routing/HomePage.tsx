import React, { useEffect, useState } from "react";
import { BlockFeatures } from "../components/BlockFeatures";
import { BlockFooter } from "../components/BlockFooter"
import { BlockHeroHome } from "../components/BlockHeroHome";
import { Navigationbar } from "../components/Navigationbar";

const HomePage: React.FC = () => {

  return (
    <>
      <Navigationbar />
      <BlockHeroHome />
      <BlockFeatures />
      <BlockFooter />
    </>
  );
};

export default HomePage;
