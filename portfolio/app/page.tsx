import Profile from "@/components/Profile";
import Describtion from "@/components/Describtion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-22">
      <div>
        <Profile />
      </div>
      <div className="flex flex-col gap-6 mt-12">
        <div>
          <Describtion />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}
