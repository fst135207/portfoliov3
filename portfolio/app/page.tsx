import Profile from "@/components/Profile";
import Describtion from "@/components/Describtion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProjectCard from "@/components/Project";

import { Code2 } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-2 max-w-7xl justify-center mx-auto">
      <div className="sticky top-0 h-screen">
        <Profile />
        <div className="pl-16 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">Meine Projekte</h2>
          <p className="text-gray-800 text-sm sm:text-base">Eine sammlung an Projekten an denen ich momentan arbeite.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="pl-16 px-12 pt-10 pb-6">
            <ProjectCard
              title="Cooked or Cracked"
              description="This is a really cool project that does amazing things with cutting-edge technology!"
              icon={<Code2 size={40} />}
              technology="Next.js"
              githubUrl="https://github.com/username/awesome-project"
              stars={1337}
              forks={42}
            />
          </div>
          <div className="px-12 pt-10">
            <ProjectCard
              title="Portfolio V2"
              description="This is a really cool project that does amazing things with cutting-edge technology!"
              icon={<Code2 size={40} />}
              technology="Next.js"
              githubUrl="https://github.com/username/awesome-project"
              stars={1337}
              forks={42}
            />
          </div>
          <div className="pl-16 px-12">
            <ProjectCard
              title="XAUUSD Forecast"
              description="This is a really cool project that does amazing things with cutting-edge technology!"
              icon={<Code2 size={40} />}
              technology="Next.js"
              githubUrl="https://github.com/username/awesome-project"
              stars={1337}
              forks={42}
            />
          </div>
          <div className="px-12">
            <ProjectCard
              title="Pixoo"
              description="This is a really cool project that does amazing things with cutting-edge technology!"
              icon={<Code2 size={40} />}
              technology="Next.js"
              githubUrl="https://github.com/username/awesome-project"
              stars={1337}
              forks={42}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-12 px-4">
        <div>
          <Describtion />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}