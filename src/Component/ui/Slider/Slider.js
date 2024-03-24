"use client";
import { useState } from "react";
import Heading from "@/Component/ui/heading/Heading";
import Image from "next/image";

const Slider = () => {
  const [slider, setSlider] = useState(false);
  const sliderTabs = [
    "Discussion Forum",
    "Market Stories",
    "Sentiment",
    "Market",
    "Sector",
    "Watch List",
    "Events",
    "News/Interview",
  ];
  return (
    <div className={"relative "}>
      <div className={`flex items-center `}>
        {/*main slider*/}
        <div
          className={`bg-primary  lg:h-screen text-white lg:w-[16rem]  xl:w-[21rem] ${
            slider || "hidden"
          } `}
        >
          <div
            className={"flex items-center py-6 xl:px-8 lg:px-3 justify-between"}
          >
            <div className={"flex items-center gap-2"}>
              <Heading title="Hello, User" image={"/person.svg"} />
            </div>
            {/* Notification Icon*/}
            <svg
              height="32"
              viewBox="0 0 56 56"
              width="32"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m9.4257 43.2461h37.1485c2.2263 0 3.5391-1.1484 3.5391-2.8359 0-2.3438-2.3673-4.4532-4.4063-6.5391-1.5469-1.6172-1.9688-4.9453-2.1328-7.6406-.1875-9-2.5547-15.211-8.8125-17.461-.8672-3.0469-3.3047-5.4843-6.75-5.4843-3.4688 0-5.8828 2.4374-6.7735 5.4843-6.2343 2.25-8.625 8.461-8.789 17.461-.1875 2.6953-.586 6.0234-2.1563 7.6406-2.0156 2.0859-4.4062 4.1953-4.4062 6.5391 0 1.6875 1.3359 2.8359 3.539 2.8359zm11.4375 3.1875c.2813 3.4219 3.1641 6.2812 7.1485 6.2812 3.9609 0 6.8437-2.8593 7.1484-6.2812z" />
            </svg>
          </div>

          <hr className={"   bg-gray-200 "} />
          {/* other tabs*/}
          <div className={"py-6 "}>
            {sliderTabs.map((tab, index) => (
              <div
                key={index}
                className={` hover:bg-[#152744FF] cursor-pointer transition duration-200 py-4 lg:px-3 xl:px-8 ${
                  tab === "Discussion Forum" ||
                  tab === "Market Stories" ||
                  "xl:pl-[72px] lg:pl-[53px]"
                }`}
              >
                <Heading
                  title={tab}
                  image={
                    tab === "Discussion Forum"
                      ? "/message-text.svg"
                      : tab === "Market Stories" && "/dollar-circle.svg"
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/*slider button*/}
        <div
          className="bg-primary py-12 cursor-pointer hover:bg-[#152744FF]  "
          onClick={() => setSlider(!slider)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 24 24"
            width="32"
            fill="white"
            className="-rotate-90"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
