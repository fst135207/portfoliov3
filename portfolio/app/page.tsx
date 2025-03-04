import Profile from "@/components/Profile"
import Describtion from "@/components/Describtion"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import ProjectCard from "@/components/Project"
import { Code2, GraduationCap } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile layout - everything stacked */}
      <div className="lg:hidden space-y-12">
        <Profile />

        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Meine Projekte</h2>
          <p className="text-gray-800 text-sm sm:text-base">Eine sammlung an Projekten an denen ich momentan arbeite.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <ProjectCard
              title="Cooked or Cracked"
              description="This is tesa really cool project that does amazing things with cutting-edge technology!"
              icon={<GraduationCap size={32} />}
              technologies={["Next.js", "React"]}
              projectUrl="https://cookedorcracked.com"
            />
            <ProjectCard
              title="Portfolio V2"
              description="This is a really cool project that does amazing things with cutting-edge technology!"
              icon={<Code2 size={32} />}
              technologies={["Next.js", "React"]}
              githubUrl="https://github.com/username/awesome-project"
              stars={1337}
              forks={42}
            />
            <ProjectCard
              title="XAUUSD Forecast"
              description="This is a really cool project that does amazing things with cutting-edge technology!"
              icon={<Code2 size={32} />}
              technologies={["Next.js", "React"]}
              githubUrl="https://github.com/username/awesome-project"
              stars={1337}
              forks={42}
            />
            <ProjectCard
              title="Pixoo"
              description="This is a really cool project that does amazing things with cutting-edge technology!"
              icon={<Code2 size={32} />}
              technologies={["Next.js", "React"]}
              githubUrl="https://github.com/username/awesome-project"
              stars={1337}
              forks={42}
            />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="space-y-12">
          <Describtion />
          <Experience />
          <Education />
        </div>
      </div>

      {/* Desktop layout - two column with sticky sidebar */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-12">
        {/* Left column - sticky */}
        <div className="col-span-5">
          <div className="sticky top-0">
            <Profile />

            <div className="mt-14">
              <h2 className="text-2xl font-bold text-blue-600">Meine Projekte</h2>
              <p className="text-gray-800 text-sm sm:text-base">Eine sammlung an Projekten an denen ich momentan arbeite.</p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
                <ProjectCard
                  title="Cooked or Cracked"
                  description="This is a really cool project that does amazing things with cutting-edge technology!"
                  icon={<GraduationCap size={32} />}
                  technologies={["Next.js", "React"]}
                  projectUrl="https://cookedorcracked.com"
                />
                <ProjectCard
                  title="Portfolio V2"
                  description="This is a really cool project that does amazing things with cutting-edge technology!"
                  icon={<Code2 size={32} />}
                  technologies={["Next.js", "React"]}
                  githubUrl="https://github.com/username/awesome-project"
                  stars={0}
                  forks={0}
                />
                <ProjectCard
                  title="Kriminalstatistik Bernn"
                  description="This is a really cool project that does amazing things with cutting-edge technology!"
                  icon={<Code2 size={32} />}
                  technologies={["Next.js", "React"]}
                  githubUrl="https://github.com/username/awesome-project"
                  stars={0}
                  forks={0}
                />
                <ProjectCard
                  title="Pixoo"
                  description="This is a really cool project that does amazing things with cutting-edge technology!"
                  icon={<Code2 size={32} />}
                  technologies={["Next.js", "React"]}
                  githubUrl="https://github.com/username/awesome-project"
                  stars={0}
                  forks={0}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right column - scrollable content */}
        <div className="col-span-7 space-y-12">
          <Describtion />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  )
}

