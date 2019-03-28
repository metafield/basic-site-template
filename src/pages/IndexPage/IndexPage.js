import React from "react";
import s from "./IndexPage.module.css";
import WorkType from "./components/WorkType/WorkType";
import AboutUs from "./components/AboutUs/AboutUs";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactUs from "./components/ContactUs/ContactUs";

const Main = props => {
  return (
    <main className={s.container}>
      <WorkType />
      <AboutUs />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default Main;
