import Slider from "@/Component/ui/Slider/Slider";
import HomePage from "@/Component/HomePage/HomePage";

export default function Home() {
  return (
    <div className={"h-screen flex items-center "}>
      <Slider />
      <div className={"px-8"}>
        <HomePage />
      </div>
    </div>
  );
}
