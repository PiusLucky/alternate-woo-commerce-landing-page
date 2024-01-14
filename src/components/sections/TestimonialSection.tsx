"use client";

import React, { useEffect, useState } from "react";
import Header from "../common/Header";

function TestimonialSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [noPrevious, setNoPrevious] = useState(true);
  const [noNext, setNoNext] = useState(false);

  const goNext = () => {
    const lastIndex = data.length - 1;
    if (currentReview === lastIndex) {
      setNoNext(true);
      setNoPrevious(false);
    } else {
      setNoPrevious(false);
      setCurrentReview(currentReview + 1);
    }
  };

  const goPrevious = () => {
    const firstIndex = 0;
    if (currentReview === firstIndex) {
      setNoPrevious(true);
      setNoNext(false);
    } else {
      setNoNext(false);
      setNoPrevious(false);
      setCurrentReview(currentReview - 1);
    }
  };

  const data = [
    {
      id: 1,
      review:
        "WooCommerce provides a seamless integration with WordPress, making it easy to set up and manage an online store. The flexibility and customization options make it a top choice for e-commerce businesses.",
    },
    {
      id: 2,
      review:
        "The extensive range of plugins and extensions available for WooCommerce allows for endless possibilities in expanding your store's functionality. It's a developer's dream for building feature-rich online shops.",
    },
    {
      id: 3,
      review:
        "Scalability is one of WooCommerce's strongest suits. As your business expands, the platform effortlessly adapts to handle increased traffic and transactions, ensuring a smooth growth trajectory.",
    },
    {
      id: 4,
      review:
        "The vibrant community around WooCommerce ensures continuous improvement and innovation. Access to a vast pool of resources, tutorials, and support makes development and troubleshooting a breeze.",
    },
    {
      id: 5,
      review:
        "WooCommerce's commitment to security and regular updates ensures a secure environment for both store owners and customers. Trust and reliability are paramount in the e-commerce landscape.",
    },
  ];

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (currentReview === 0) {
      setNoPrevious(true);
    }

    if (currentReview === lastIndex) {
      setNoNext(true);
    }
  }, [currentReview]);
  return (
    <section className="relative">
      <div>
        <Header title="Trusted by Agencies & Store Owners" />
      </div>
      <div className="flex justify-between md:mx-[10rem] gap-8 mt-8">
        <img
          src="/images/avatar_1.png"
          alt="avatar"
          className="w-[4.5rem] h-[4.5rem] rounded-full"
        />
        <img
          src="/images/avatar_2.png"
          alt="avatar"
          className="w-[3.5rem] h-[3.5rem] rounded-full"
        />
      </div>
      <div className="flex justify-between flex-col gap-8 lg:flex-row mt-8 items-center md:mx-[5rem]">
        {" "}
        <img
          src="/images/avatar_3.png"
          alt="avatar"
          className="w-[4.5rem] h-[4.5rem] rounded-full"
        />
        <div className="relative z-40">
          <div className="relative z-30 md:max-w-[45rem] bg-white card-shadow rounded-[1.25rem] px-16 flex justify-center items-center py-8">
            <div className="hidden lg:block absolute -right-32 top-16  -z-[40]">
              <img
                src="/images/rectangular_horizontal_red.png"
                alt="red rectangle"
              />
            </div>
            <div className="text-[1.3rem] md:text-[1.66875rem] text-lightGrayAlt text-center">
              {data[currentReview].review}
            </div>
            <div className="absolute -z-10 top-[1.75rem]">
              <img src="/images/quote.png" alt="quote" />
            </div>
          </div>

          <div className="hidden lg:flex relative z-20  ml-[4rem] mt-[-2rem] opacity-90 md:max-w-[37rem] bg-white card-shadow rounded-[1.25rem] h-[4rem] px-16  justify-center items-center"></div>
          <div className="hidden lg:flex relative z-10 ml-[6rem] mt-[-5.5rem] opacity-90 md:max-w-[33rem] bg-white card-shadow rounded-[1.25rem] h-[7rem] px-16 justify-center items-center"></div>

          <div className="hidden lg:block absolute -bottom-16 -left-32">
            <img src="/images/rectangular_horizontal.png" alt="red rectangle" />
          </div>

          <div className="flex gap-8 justify-end mt-[2.62rem] select-none">
            {noPrevious ? (
              <img src="/images/arrow_left_small.png" alt="allow left small" />
            ) : (
              <img
                src="/images/arrow_left_large.png"
                alt="allow left large"
                onClick={goPrevious}
                className="cursor-pointer "
              />
            )}

            {noNext ? (
              <img
                src="/images/arrow_right_small.png"
                alt="allow right small"
              />
            ) : (
              <img
                src="/images/arrow_right_large.png"
                alt="allow right large"
                onClick={goNext}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <img
          src="/images/avatar_4.png"
          alt="avatar"
          className="w-[4.5rem] h-[4.5rem] rounded-full"
        />
      </div>

      <div className="flex justify-between md:mx-[10rem] gap-8 mt-8">
        <img
          src="/images/avatar_5.png"
          alt="avatar"
          className="w-[4.5rem] h-[4.5rem] rounded-full"
        />
        <img
          src="/images/avatar_6.png"
          alt="avatar"
          className="w-[2.8rem] h-[2.8rem] rounded-full"
        />
      </div>
    </section>
  );
}

export default TestimonialSection;
