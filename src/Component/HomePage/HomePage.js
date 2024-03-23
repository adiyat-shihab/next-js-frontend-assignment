import DiscussionsForumCard from "@/Component/ui/Discussion/DiscussionsForumCard";
import discussions from "@/utils/forumData";
import marketData from "@/utils/marketBlogData";
import MarketBlog from "@/Component/ui/MarketBlog/MarketBlog";
import Heading from "@/Component/ui/heading/Heading";

const HomePage = () => {
  return (
    <div className={"flex items-start lg:gap-4 2xl:gap-36 xl:gap-10"}>
      <div className={"2xl:space-y-10  xl:space-y-2.5 lg:space-y-1.5"}>
        <Heading
          title={"Discussion Forum"}
          style={
            "text-xl bg-gray-200 text-red-700 px-6 py-2 font-semibold rounded"
          }
        />
        {discussions.map((discussion) => (
          <DiscussionsForumCard key={discussion.id} data={discussion} />
        ))}
      </div>
      <div className={"2xl:space-y-10  space-y-1.5"}>
        <Heading
          title={"Market Stories"}
          style={
            "text-xl bg-gray-200 text-red-700 px-6 py-2 font-semibold rounded"
          }
        />
        {marketData.map((data) => (
          <MarketBlog key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
