import { roboto } from "@/lib/utils";
import React from "react";
import { Separator } from "@/components/ui/separator";

function FooterSection() {
  const whoWeAreLinks = ["About", "Team", "Work With Us"];

  const wooCommerceLinks = [
    "Features",
    "Payments",
    "Marketing",
    "Shipping",
    "Extension Store",
    "eCommerce blog",
    "Development blog",
    "Ideas board",
    "Mobile App",
    "Community",
    "Style Guide",
    "Email Newsletter",
  ];

  const otherProductsLinks = [
    "Storefront",
    "WooSlider",
    "Sensei",
    "Sensei Extensions",
  ];

  const supportLinks = [
    "Documentation",
    "Customizations",
    "Support Policy",
    "Contact",
    "COVID-19 Resources",
    "Privacy Notice for",
    "California Users",
  ];

  const recommendLinks = [
    "WooExperts",
    "Hosting Solutions",
    "Pre-sales FAQ",
    "Success Stories",
    "Design Feedback Group",
  ];

  return (
    <section className="bg-primary ">
      <div className="px-4 pt-[3.13rem] flex flex-col md:flex-row justify-around gap-4 md:gap-[5rem]">
        <div className="flex gap-2 items-center">
          <img src="/images/check_icon.png" alt="check icon" />
          <div
            className={`${roboto.className} text-[1.25rem] font-[700] text-white`}
          >
            30 day <strong>money back guarantee</strong>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/images/fan_icon.png" alt="check icon" />
          <div
            className={`${roboto.className} text-[1.25rem] font-[700] text-white`}
          >
            <strong>Support</strong> teams across the world
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/images/circular_lock_icon.png" alt="check icon" />
          <div
            className={`${roboto.className} text-[1.25rem] font-[700] text-white`}
          >
            <strong>Safe & Secure</strong> online payment
          </div>
        </div>
      </div>
      <div className="px-4 mt-8 md:mt-[8.44rem] flex justify-center">
        <img src="/images/footer_logo.png" alt="footer logo" />
      </div>
      <div className="my-16 px-4">
        <Separator className="bg-[#9A7DFF]" />
      </div>
      <div className="flex  pb-[3.69rem] flex-col gap-8 md:flex-row justify-evenly w-full px-8">
        <div>
          <p
            className={`${roboto.className} mb-6 text-white font-[700] uppercase`}
          >
            Who we Are
          </p>
          <div className="flex flex-col gap-4">
            {whoWeAreLinks.map((link, index) => (
              <p
                className={`${roboto.className} text-white text-[0.85rem] hover:cursor-pointer hover:text-yellow-500`}
                key={index}
              >
                {link}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p
            className={`${roboto.className} mb-6 text-white font-[700] uppercase`}
          >
            Woocommerce
          </p>
          <div className="flex flex-col gap-4">
            {wooCommerceLinks.map((link, index) => (
              <p
                className={`${roboto.className} text-white text-[0.85rem] hover:cursor-pointer hover:text-yellow-500`}
                key={index}
              >
                {link}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p
            className={`${roboto.className} mb-6 text-white font-[700] uppercase`}
          >
            Other products
          </p>
          <div className="flex flex-col gap-4">
            {otherProductsLinks.map((link, index) => (
              <p
                className={`${roboto.className} text-white text-[0.85rem] hover:cursor-pointer hover:text-yellow-500`}
                key={index}
              >
                {link}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p
            className={`${roboto.className} mb-6 text-white font-[700] uppercase`}
          >
            Support
          </p>
          <div className="flex flex-col gap-4">
            {supportLinks.map((link, index) => (
              <p
                className={`${roboto.className} text-white text-[0.85rem] hover:cursor-pointer hover:text-yellow-500`}
                key={index}
              >
                {link}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p
            className={`${roboto.className} mb-6 text-white font-[700] uppercase`}
          >
            We recommend
          </p>
          <div className="flex flex-col gap-4">
            {recommendLinks.map((link, index) => (
              <p
                className={`${roboto.className} text-white text-[0.85rem] hover:cursor-pointer hover:text-yellow-500`}
                key={index}
              >
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="text-lightGray  bg-white py-8 px-2  flex justify-evenly flex-col gap-8 lg:flex-row items-center">
        <div className="flex gap-16">
          <img src="/images/x_icon.png" alt="x logo" />
          <img src="/images/meta_icon.png" alt="meta logo" />
          <img src="/images/feed_icon.png" alt="feed logo" />
          <img src="/images/instagram_icon.png" alt="instagram logo" />
        </div>
        <p className="text-center">
          COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
        </p>
        <div>
          <img src="/images/automatic_logo.png" alt="automatic logo" />
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
