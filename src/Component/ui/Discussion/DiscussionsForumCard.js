import Image from "next/image";
import Heading from "@/Component/ui/heading/Heading";

const DiscussionsForumCard = ({ data }) => {
  const { username, forum_details, reacts, comments, views, share, time_ago } =
    data;
  return (
    <div className={"shadow rounded-md w-[40rem] px-3"}>
      <div className={"flex justify-between items-center pt-2"}>
        <div className={"flex  gap-4 items-center"}>
          <Image
            src={"/forum/avatar.png"}
            alt={"avatar"}
            width={48}
            height={48}
          />
          <Heading title={username} />
          <Heading
            title={"Sector 2"}
            style={"px-4 py-1 bg-secondary rounded-full text-xs text-white"}
          />
        </div>
        <Heading title={time_ago} style={"text-xs"} />
      </div>
      <Heading title={forum_details} style={"py-4 px-16"} />
      <div className={"px-16 flex items-center justify-between pb-2"}>
        <Heading title={reacts} image={"/forum/heart.svg"} style={"text-xs"} />
        <Heading
          title={comments}
          image={"/forum/message.svg"}
          style={"text-xs"}
        />
        <Heading title={views} image={"/forum/eye.svg"} style={"text-xs"} />
        <Heading title={share} image={"/forum/share.svg"} style={"text-xs"} />
      </div>
    </div>
  );
};

export default DiscussionsForumCard;
