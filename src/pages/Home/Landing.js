import React from "react";
import image from "../../assets/images/bucketgirl.png";
const Landing = () => {
  return (
    <div className="relative">
      <div className="hero  lg:h[60vh] mt-16 bg-accent relative z-0">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <p
              className="text-xl"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Best Quality
            </p>
            <h1
              className="text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              Professional Cleaning Service
            </h1>
            <p
              className="py-6 max-w-xl"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              We always try to give our best service. We are well known and
              established service provider of this city. So, don't hesitate to
              be a customer of us.
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1200"
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="shrink-0">
            <img src={image} alt="" className="w-full h-[60vh] " />
          </div>
        </div>
      </div>
      <div className="rounded-2xl mx-auto shadow-lg mt-[-50px] relative z-20 bg-base-200 p-10 w-5/6">
        <h1 className="text-2xl text-primary mb-5">Get Free Estimate</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <button className="btn btn-primary mt-5">Get a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
