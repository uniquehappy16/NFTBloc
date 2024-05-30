import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Integrate, Explore, and Trade NFTs Effortlessly</h1>
          <p>
          Discover a digital universe where art meets innovation on our NFT marketplace. Explore an eclectic array of unique, blockchain-authenticated creations from talented creators worldwide. Join the revolution in owning, trading, and celebrating digital art like never before.
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
        <Image
          src={images.hero}
          className={Style.heroSection_box_right_image}
          alt="Hero section"
          width={600}
          height={600}
          layout="responsive"
          sizes="(max-width: 55em) 100vw, 50vw"
        />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;