// import React from "react";
import imgi from "./image/mbah1.jpg";
import imgii from "./image/mba2.jpg";
import imgiii from "./image/mba3.jpg";
import Header from "./Header";

const CoursesSection = () => {
  const courses = [
    {
      title: "Mathematics",
      description:
        "Master the art of numbers and problem-solving with our comprehensive mathematics courses.",
      imageSrc: { imgi }, // Replace with the actual image path
    },
    {
      title: "Science",
      description:
        "Explore the wonders of science through hands-on experiments and engaging lessons.",
      imageSrc: { imgii }, // Replace with the actual image path
    },
    {
      title: "Languages",
      description:
        "Learn and excel in multiple languages with our language courses tailored to your needs.",
      imageSrc: { imgiii }, // Replace with the actual image path
    },
    {
      title: "History & Social Studies",
      description:
        "Discover the rich tapestry of history and cultures through our social studies courses.",
      imageSrc: "/history.jpg", // Replace with the actual image path
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={course.imageSrc}
                  alt={`${course.title} Image`}
                  className="w-full h-32 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
                  Enroll
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
