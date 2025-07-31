import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeaderWithTypewriter = () => {
  return (
    <h1 className="home-h1 text-5xl font-bold text-center text-green-700 mb-10">
      <Typewriter
        words={[
          "Welcome to TreeHub!",
          "Discover Gardening Tips",
          "Connect with Gardeners",
          "Grow Your Green Thumb",
        ]}
        loop={0} // 0 means infinite loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  );
};

export default HeaderWithTypewriter;
