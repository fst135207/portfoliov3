import Profile from "@/components/Profile"
import Describtion from "@/components/Describtion"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import ProjectCard from "@/components/Project"
import { Code2 } from "lucide-react"
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
            {/*
          <ProjectCard
                  id={1}
                  title="Cooked or Cracked"
                  description="Kleines Side-Project, finde heraus ob du in deinem Fachgebiet Cooked oder Cracked bist."
                  icon={<GraduationCap size={32} />}
                  technologies={["Next.js", "React", "Typescript", "PostgreSQL", "Django", "Redis", "Docker", "AWS EKS"]}
                  projectUrl="https://cookedorcracked.com"
                />
                */}
                <ProjectCard
                  id={2}
                  title="Kriminalstatistik Bern"
                  description="Darstellung der Kriminalstatistik des Kanton Bern."
                  icon={<Code2 size={32} />}
                  technologies={["Next.js","React","Typescript","Python","Chart.Js","PostgreSQL","PostgreSQL"]}
                  githubUrl="https://github.com/fst135207/Kriminalstatistik-Bern"
                  stars={0}
                  forks={0}
                />
                <ProjectCard
                  id={3}
                  title="Portfolio V3"
                  description="Mein jetziges Portfolio."
                  icon={<Code2 size={32} />}
                  technologies={["Next.js", "React", "Typescript"]}
                  githubUrl="https://github.com/fst135207/portfoliov3"
                  stars={0}
                  forks={0}
                />
                <ProjectCard
                  id={4}
                  title="Pixoo"
                  description="Pixoo64 Display programmiert mit Python mit adaptiven Wetter Icons, Temperatur, Datum und Zeit"
                  icon={<Code2 size={32} />}
                  technologies={["Python"]}
                  githubUrl="https://github.com/fst135207/pixoo"
                  stars={0}
                  forks={0}
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
                {/*
                <ProjectCard
                  id={1}
                  title="Cooked or Cracked"
                  description="Kleines Side-Project, finde heraus ob du in deinem Fachgebiet Cooked oder Cracked bist."
                  icon={<GraduationCap size={32} />}
                  technologies={["Next.js", "React", "Typescript", "PostgreSQL", "Django", "Redis", "Docker", "AWS EKS"]}
                  projectUrl="https://cookedorcracked.com"
                />
                */}
                <ProjectCard
                  id={2}
                  title="Kriminalstatistik Bern"
                  description="Darstellung der Kriminalstatistik des Kanton Bern."
                  icon={<Code2 size={32} />}
                  technologies={["Next.js","React","Typescript","Python","Chart.Js","PostgreSQL","PostgreSQL"]}
                  githubUrl="https://github.com/fst135207/Kriminalstatistik-Bern"
                  stars={0}
                  forks={0}
                />
                <ProjectCard
                  id={3}
                  title="Portfolio V3"
                  description="Mein jetziges Portfolio."
                  icon={<Code2 size={32} />}
                  technologies={["Next.js", "React", "Typescript"]}
                  githubUrl="https://github.com/fst135207/portfoliov3"
                  stars={0}
                  forks={0}
                />
                <ProjectCard
                  id={4}
                  title="Pixoo"
                  description="Pixoo64 Display programmiert mit Python mit adaptiven Wetter Icons, Temperatur, Datum und Zeit"
                  icon={<Code2 size={32} />}
                  technologies={["Python"]}
                  githubUrl="https://github.com/fst135207/pixoo"
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

