import React from "react";
import Button from "../button/Button";

const Banner = () => {
  return (
    <section className="pt-[150px] bannerBG h-screen flex items-center justify-center">
      <div className="page-container">
        <div className="max-w-[600px]">
          <span className="text-lg font-semibold text-colorPink">
            Stay Informed, Get Inspired
          </span>
          <h1 className="my-3 font-bold text-7xl text-linear">G19BLOG</h1>
          <p className="leading-snug break-all">
            From informative articles to in-depth analysis, we've got you
            covered. Join our community of avid readers and stay up-to-date with
            the latest trends and insights. Whether you're a seasoned pro or
            just starting out, our blog is the perfect place to expand your
            knowledge and engage with like-minded individuals. So what are you
            waiting for? Start exploring today!
          </p>
          <Button
            path="/sign-in"
            type="button"
            kind="secondary"
            className="w-[120px] md:w-[150px] h-[55px] mt-8"
          >
            Sign in
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
