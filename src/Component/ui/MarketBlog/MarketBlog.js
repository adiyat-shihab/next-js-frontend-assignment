import React from "react";
import Image from "next/image";
import Heading from "@/Component/ui/heading/Heading";

const MarketBlog = ({ data }) => {
  const { title, description } = data;
  return (
    <div className={" lg:w-[12.265rem] xl:w-[15.265rem]"}>
      <Image
        src={"/market-card.jpg"}
        width={300}
        height={150}
        alt={"blog image"}
        className={"w-[15.265rem] h-[7rem]"}
      />
      <div className={"px-4 py-4 shadow"}>
        <Heading title={title} style={"font-semibold "} />
        <Heading title={description} style={"text-xs line-clamp-1 pt-4"} />
      </div>
    </div>
  );
};

export default MarketBlog;
