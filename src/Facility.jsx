// import React from "react";
import Header from "./Header";

const Facility = () => {
  const facilities = [
    {
      title: "Library",
      description:
        "Our well-stocked library offers a quiet and conducive environment for reading and research.",
      icon: "fa-book", // Font Awesome class for the library icon
    },
    {
      title: "Science Labs",
      description:
        "State-of-the-art science laboratories equipped for hands-on experiments and learning.",
      icon: "fa-flask", // Font Awesome class for the science labs icon
    },
    {
      title: "Sports Facilities",
      description:
        "A variety of sports facilities including a gym, soccer field, and basketball court for physical fitness and recreation.",
      icon: "fa-futbol", // Font Awesome class for the sports facilities icon
    },
    {
      title: "Computer Labs",
      description:
        "Modern computer labs with high-speed internet access for technology-based learning.",
      icon: "fa-laptop", // Font Awesome class for the computer labs icon
    },
  ];

  return (
    <>
    <Header/>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <i
                  className={`fas ${facility.icon} text-4xl text-blue-500 mb-4`}
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Facility;
