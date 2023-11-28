import React from "react";
import Header from "../../components/header/Header";
import productHeroImage from "../../assets/productHeroImage.png";

const Product = () => {
  return (
    <>
      <Header
        title="Help your team to focus on priority tasks"
        desk="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque ."
        image={productHeroImage}
      />
    </>
  );
};

export default Product;
