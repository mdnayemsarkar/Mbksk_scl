import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import React from "react";

import App from "./App";
import AboutSection from "./about";
import CoursesSection from "./courses";
import Event from "./Events";
import Facility from "./Facility";
import News from "./News";
import Admission from "./Admission";
import Formad from "./Formad"
import FindCourse from "./Fcourse";

function routs() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <AboutSection />,
    },
    {
      path: "/courses",
      element: <CoursesSection />,
    },
    {
      path: "/events",
      element: <Event />,
    },
    {
      path: "/facilities",
      element: <Facility />,
    },
    {
        path: "/news",
        element: <News/>,
      },
      {
        path: "/admission",
        element: <Admission/>,
      },
      {
        path: "/formad",
        element: <Formad/>,
      },
      {
        path: "/focus",
        element: <FindCourse/>,
      },
  ]);

  return <RouterProvider router={router} />;
}

export default routs;
