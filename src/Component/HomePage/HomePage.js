"use client";
import DiscussionsForumCard from "@/Component/ui/Discussion/DiscussionsForumCard";
import discussions from "@/utils/forumData";
import marketData from "@/utils/marketBlogData";
import MarketBlog from "@/Component/ui/MarketBlog/MarketBlog";
import Heading from "@/Component/ui/heading/Heading";
import { useState } from "react";

const HomePage = () => {
  const [forumShow, setForumShow] = useState(true);
  const [marketShow, setMarketShow] = useState(false);
  return (
    <div>
      <div className={"flex items-center bg-primary justify-between px-6"}>
        <span
          onClick={() => {
            setMarketShow(false);
            setForumShow(true);
          }}
        >
          <Heading
            title={"Discussion Forum"}
            style={
              "text-xl lg:hidden text-white hover:bg-secondary px-6 py-2 font-semibold rounded"
            }
          />
        </span>
        <span
          onClick={() => {
            setForumShow(false);
            setMarketShow(true);
          }}
        >
          <Heading
            title={"Market Stories"}
            style={
              "text-xl  text-white lg:hidden hover:bg-secondary px-6 py-2 font-semibold rounded"
            }
          />
        </span>
      </div>
      <div className={"flex items-start lg:gap-4 2xl:gap-36 xl:gap-10"}>
        <div
          className={`2xl:space-y-10 ${
            forumShow || "hidden lg:block"
          }  xl:space-y-2.5 lg:space-y-1.5`}
        >
          <Heading
            title={"Discussion Forum"}
            style={
              "text-xl bg-gray-200 hidden lg:block text-red-700 px-6 py-2 font-semibold rounded"
            }
          />
          {discussions.map((discussion) => (
            <DiscussionsForumCard key={discussion.id} data={discussion} />
          ))}
        </div>
        <div
          className={`2xl:space-y-10 space-y-1.5 ${
            marketShow || "hidden lg:block"
          }`}
        >
          <Heading
            title={"Market Stories"}
            style={
              "text-xl bg-gray-200 hidden lg:block text-red-700 px-6 py-2 font-semibold rounded"
            }
          />
          {marketData.map((data) => (
            <MarketBlog key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
