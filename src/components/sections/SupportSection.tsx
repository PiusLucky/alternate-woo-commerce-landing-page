import React from "react";
import Header from "../common/Header";
import { roboto } from "@/lib/utils";
import MainButton from "../common/MainButton";

function SupportSection() {
  return (
    <section className="relative z-[40]">
      <div>
        <Header title="Supported by real people" />
      </div>
      <p
        className={`${roboto.className} mt-[1.92rem] text-normal text-lightGrayAlt text-center`}
      >
        Our team of Happiness Engineers works remotely from 58 countries
        providing customer support across multiple time zones.
      </p>
      <div className="relative z-[10]">
        <img src="/images/supported_team.png" alt="team" />
      </div>
      <div className="bg-[#5F37EF] px-4 relative z-[15]  flex flex-col gap-4 md:flex-row justify-center md:justify-around items-center h-[16.4rem]">
        <p
          className={`${roboto.className} text-white leading-10 text-center text-xl md:text-[2.25rem]`}
        >
          WooCommerce - the{" "}
          <strong>most customizable eCommerce platform</strong> for building
          <strong>your online business.</strong>
        </p>
        <MainButton
          text="GET STARTED"
          classes="bg-[#5F37EF]  rounded-full border border-white w-[13rem]"
        />
      </div>
    </section>
  );
}

export default SupportSection;
