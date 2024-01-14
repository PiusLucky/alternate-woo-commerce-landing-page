import React from "react";
import Header from "../common/Header";
import FirstFeatureCard from "../cards/FirstFeatureCard";

function FirstFeatureSection() {
  const data = [
    {
      image: "/images/all_you_need_to_start.png",
      title: "All You Need to Start",
      description:
        "Add WooCommerce plugin to any WordPress site and set up a new store in minutes.",
      link: "/",
      linkText: "Ecommerce for Wordpress",
    },
    {
      image: "/images/customize_and_extend.png",
      title: "Customize and Extend",
      description:
        "From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.",
      link: "/",
      linkText: "Browse Extensions",
    },
    {
      image: "/images/active_community.png",
      title: "Customize and Extend",
      description:
        "From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.",
      link: "/",
      linkText: "Browse Extensions",
    },
  ];
  return (
    <section className="md:mx-16">
      <div className="mb-8">
        <Header title="Your eCommerce made simple" />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {data.map((feature) => (
          <FirstFeatureCard {...feature} key={feature.title} />
        ))}
      </div>
    </section>
  );
}

export default FirstFeatureSection;
