import React from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";
import Doctors from "../components/Doctors";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Appointment from "../components/Appointment";
import BlogsComp from "../components/BlogsComp";

const Home = ({ lang }) => {
  return (
    <div className="pt-40 md:pt-28">
      <Hero lang={lang} />
      <WhyChooseUs lang={lang} />
      <BlogsComp lang={lang} />
      <OurServices lang={lang} />
      <Doctors lang={lang} />
      <Testimonials lang={lang} />
      <CTA lang={lang} />
      <Appointment lang={lang} />
    </div>
  );
};

export default Home;
