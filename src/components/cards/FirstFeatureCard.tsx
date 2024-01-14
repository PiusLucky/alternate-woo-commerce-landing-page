import { roboto } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

function FirstFeatureCard({
  image,
  title,
  description,
  linkText,
  link,
}: IProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <img src={image} alt="fetaure image" />
      </div>
      <p className="text-[2.25rem] font-[700] text-lightGray text-center">
        {title}
      </p>

      <p
        className={`${roboto.className}  text-normal text-lightGrayAlt my-[1.56rem]`}
      >
        {description}
      </p>

      <Link href={link}>
        <div
          className={`${roboto.className} text-normal font-[700] text-customBlue flex gap-1`}
        >
          {linkText}
          <ChevronRight />
        </div>
      </Link>
    </div>
  );
}

export default FirstFeatureCard;
