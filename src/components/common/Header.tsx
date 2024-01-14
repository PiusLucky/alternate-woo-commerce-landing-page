import { roboto } from "@/lib/utils";
import React from "react";

interface IProps {
  title: string;
  subtitle?: string;
}

function Header({ title, subtitle }: IProps) {
  return (
    <div className="flex justify-center">
      <p className="text-lightGray text-4xl text-center md:text-[3.4375rem] font-[700]">
        {title}
      </p>
      {subtitle && (
        <p
          className={`${roboto.className} text-normal text-lightGrayAlt my-[1.9rem]`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Header;
