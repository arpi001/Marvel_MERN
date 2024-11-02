// import React from "react";
import Navbar from "../components/Navbar";
import Comic from "../components/Comic";
import Footer from "../components/Footer";
function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Comic />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
