import React from "react";
import { useSpring, animated } from "@react-spring/web";

const HomePage = () => {
  // Spring animation for greeting text
  const greetingAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
  });

  // Spring animation for description text
  const descriptionAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
    delay: 500, // Delays the description to appear after greeting
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-500">
      {/* Greeting Animation */}
      <animated.div style={greetingAnimation} className="text-4xl md:text-5xl font-bold text-white mb-4">
        Welcome to the Attendance Application!
      </animated.div>

      {/* Description Animation */}
      <animated.div style={descriptionAnimation} className="text-lg md:text-xl text-white text-center px-4 max-w-3xl">
        Manage attendance efficiently for students and teachers with ease. Our application allows you to register,
        track attendance, and manage users with a seamless interface. Explore the features and streamline your
        institution's operations today.
      </animated.div>
    </div>
  );
};

export default HomePage;
