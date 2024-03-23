import Slider from "@/Component/ui/Slider/Slider";
import HomePage from "@/Component/HomePage/HomePage";

export default function Home() {
  return (
    <div className={"h-screen  flex items-center 2xl:gap-28 "}>
      <Slider />
      <div className={"xl:px-16 lg:px-4"}>
        <HomePage />
      </div>
    </div>
  );
}
