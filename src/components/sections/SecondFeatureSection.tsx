import React from "react";
import MainButton from "../common/MainButton";
import { roboto } from "@/lib/utils";

function SecondFeatureSection() {
  return (
    <section className="bg-primary z-10 px-4 md:px-8 md:primary-bg relative rounded-[14px] md:rounded-[0]">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:mt-[-4rem] relative">
          <img src="/images/feature_1.png" alt="feature 1" className="z-30" />
          <div className="hidden lg:block absolute top-[15rem] left-0 -z-10">
            <img src="/images/rectangular.png" alt="shape" />
          </div>
        </div>
        <div>
          <p className="text-[2.25rem] font-[700] text-white">
            Develop Without Limits
          </p>
          <p
            className={`${roboto.className} text-normal text-white my-[0.81rem] md:pr-[16rem]`}
          >
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </p>
          <div className="my-[2.44rem]">
            <MainButton
              text={"Read the  Documentation"}
              classes="bg-secondary hover:bg-secondary text-white rounded-[3.75rem] h-[4rem] w-[16rem]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center md:ml-[19rem]">
        <div>
          <p className="text-[2.25rem] font-[700] text-white">
            Know our Global Community
          </p>
          <p
            className={`${roboto.className} text-normal text-white my-[0.81rem]`}
          >
            WooCommerce is one of the fastest-growing eCommerce communities.
            We&apos;re proud that the helpfulness of the community and a wealth
            of online resources are frequently cited as reasons our users love
            it. There are 80+ meetups worldwide!
          </p>
          <div className="my-[2.44rem]">
            <MainButton
              text={"Read the  Documentation"}
              classes="bg-secondary hover:bg-secondary text-white rounded-[3.75rem] h-[4rem] w-[16rem]"
            />
          </div>
        </div>
        <div className="md:mb-[-4rem]">
          <img
            src="/images/feature_2.png"
            alt="fetaure 1"
            className="lg:min-w-[300px]"
          />
        </div>
      </div>

      <div className="hidden md:block absolute top-0 right-0">
        <img
          src="/images/woo_reduced_opacity.png"
          alt="woo logo"
          className="w-[300px]"
        />
      </div>
    </section>
  );
}

export default SecondFeatureSection;
