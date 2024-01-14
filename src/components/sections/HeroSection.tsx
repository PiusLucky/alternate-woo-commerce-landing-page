import React from "react";
import MainButton from "../common/MainButton";
import { ChevronRight } from "lucide-react";
import { roboto } from "@/lib/utils";

function HeroSection() {
  return (
    <section className="md:ml-32 mt-32  lg:mt-4 flex flex-col gap-4 md:flex-row items-center">
      <div>
        <p className="text-4xl lg:text-[5.3125rem] lg:leading-[5rem] text-lightGray">
          Building exactly the eCommerce website you want.
        </p>
        <p
          className={`text-lightGrayAlt my-[1.8rem] text-[1.125rem] font-normal ${roboto.className}`}
        >
          WooCommerce is a customizable, open-source eCommerce platform built on
          WordPress. Get started quickly and make your way.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <MainButton
            text="Start a New Store"
            classes="md:h-[4.5rem] w-[16.6875rem] text-xl rounded-[3.75rem]"
          />
          <p
            className={`text-lightGrayAlt font-[700] text-normal ${roboto.className} `}
          >
            or
          </p>
          <div className="flex gap-2">
            <p
              className={`text-customBlue font-[700] text-normal ${roboto.className} `}
            >
              Customize & Extend
            </p>
            <ChevronRight color="#299EF3" />
          </div>
        </div>
      </div>
      <div>
        <img src="/images/hero.png" alt="hero image" />
      </div>
    </section>
  );
}

export default HeroSection;
