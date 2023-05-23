import React, { useEffect } from "react";
import special from "../assets/images/special.jpg";
import Layout from "../components/layout/Layout";

const ContactPage = () => {
  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <div className="contactBg h-[50vh] lg:h-[80vh] flex items-center justify-center">
        <h1 className="text-5xl font-bold text-center md:text-8xl text-colorPrimary">
          Contact us
        </h1>
      </div>

      {/* content */}
      <div className="my-10 page-container md:my-32">
        {/* booking section */}
        <div className="grid gap-5 mt-10 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold uppercase md:text-2xl lg:text-4xl text-linear">
              Subscribe us now
            </h2>
            <input
              className="p-5 rounded-md bg-colorGradient2 placeholder:text-white"
              type="text"
              placeholder="Enter your email..."
            />
            <input
              className="p-5 rounded-md bg-colorGradient2 placeholder:text-white"
              type="text"
              placeholder="Enter your name..."
            />
            <textarea
              className="w-full h-full p-3 text-xl rounded-md outline-none resize-none placeholder:text-white bg-colorGradient"
              placeholder="Write something..."
            ></textarea>
          </div>

          <div className="relative overflow-hidden group border-gradient">
            <img
              src={special}
              alt="dogimg"
              className="transition-all duration-500 imgCover group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
