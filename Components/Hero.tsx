"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or Rent a car - quick and super easy
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental exprience with our effeorless booking
          process.
        </p>
        <CustomButton
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          title="Explore Cars"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
          ></Image>
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
