import BarRestaurant from "@/components/BarRestaurant";
import EventsAndClubs from "@/components/EventsAndClubs";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className="relative bg-black">
      {/* Header section */}
      <div className="w-full">
        <Header />
      </div>

      {/* Content section with overlap */}
      <div className="relative z-10 -mt-32 bg-white rounded-tl-[6rem] px-4 md:px-12 lg:px-24 xl:px-80 ">
        <EventsAndClubs />
        <BarRestaurant />
      </div>
    </div>
    </>
  );
}
