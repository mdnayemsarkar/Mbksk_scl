import { useState } from "react";
import Header from "./Header";

const FindCourse = () => {
  // Define state variables for user input
  const [courseName, setCourseName] = useState("");

  // Handle user input changes
  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform a search or filter courses based on the entered courseName
    // You can implement your search logic here
    console.log(`Searching for courses with name: ${courseName}`);
  };

  return (
    <>
      <div>
        <Header/>
        <h2 className="text-3xl font-bold mb-4">Find a Course</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="courseName"
              className="block text-gray-700 font-semibold"
            >
              Course Name:
            </label>
            <input
              type="text"
              id="courseName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter course name"
              value={courseName}
              onChange={handleCourseNameChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default FindCourse;
