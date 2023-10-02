// import React from "react";
import Header from "./Header"

const AboutSection = () => {
  return (
    <>
    <Header/>
    <section className="bg-blue-200 py-12">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-prose mb-8">
          Kaoraid Medha Bikash High School and Academy is committed to providing
          quality education and nurturing young minds for a brighter future.
        </p>
        <p className="text-lg text-gray-600 max-w-prose mb-8">
          Located in a serene environment, our institution offers a wide range
          of educational programs designed to empower students with knowledge
          and skills.
        </p>
        <p className="text-lg text-gray-600 max-w-prose mb-8">
          Join us on this educational journey as we prepare the leaders of
          tomorrow.
        </p>
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
    </>
  );
};

export default AboutSection;
