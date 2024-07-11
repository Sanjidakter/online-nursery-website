import { Section } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import OurProduct from "./OurProduct";

const Home = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <div>
      <section className="bg-green-500">
        <div className="container mx-auto py-8">
          <animated.h1
            className={`text-4xl font-bold text-center `}
            style={animationProps}
          >
            Welcome
          </animated.h1>
          <animated.h2
            className={`text-2xl font-semibold text-center  mt-4`}
            style={animationProps}
          >
            To Our E-Nursery 🌱
          </animated.h2>
        </div>
      </section>
      <OurProduct/>
    </div>
  );
};

export default Home;
