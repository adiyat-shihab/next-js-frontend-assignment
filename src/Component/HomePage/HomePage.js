import DiscussionsForumCard from "@/Component/ui/Discussion/DiscussionsForumCard";
import discussions from "@/utils/forumData";

const HomePage = () => {
  return (
    <div>
      <div className={"space-y-10"}>
        {discussions.map((discussion) => (
          <DiscussionsForumCard key={discussion.id} data={discussion} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
