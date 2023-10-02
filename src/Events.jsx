// import React from 'react';
import Header from "./Header"

const SclEvents = () => {
  const events = [
    {
      title: 'Science Fair 2023',
      date: 'October 15, 2023',
      description: 'Join us for an exciting showcase of student projects and scientific discoveries. Explore innovative ideas and witness the future of science education.',
      imageSrc: './kmba.jpg', // Replace with the actual image path
    },
    {
      title: 'Annual Sports Day',
      date: 'November 20, 2023',
      description: 'Experience the thrill of competition and teamwork at our annual sports day. Watch athletes excel in various sports and enjoy a day of excitement and camaraderie.',
      imageSrc: '/class.jpg', // Replace with the actual image path
    },
    {
      title: 'Cultural Festival',
      date: 'December 10, 2023',
      description: 'Celebrate diversity with music, dance, and delicious international cuisine. Immerse yourself in a cultural extravaganza and savor the flavors of the world.',
      imageSrc: '/cultural-festival.jpg', // Replace with the actual image path
    },
  ];

  return (
    <>
    <Header/>
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Upcoming School Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={event.imageSrc}
                alt={`${event.title} Image`}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default SclEvents;
