import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Describtion from "./Describtion";
import { Badge } from "@/components/ui/badge";

interface ExperienceCard {
  id: number;
  company: string;
  role: string;
  date: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceCard[] = [
  {
    id: 1,
    company: "Identitas AG",
    role: "In Ausbildung als Plattform Entwickler",
    date: "08.2022 - Heute",
    description: "Erweiterung der Kenntnisse in unterschiedlichen IT-Bereichen durch praktische Mitarbeit in verschiedenen Feldern während der Lehre. Verantwortliche für die Administration und Wartung einer Lernumgebung, inklusive Einrichtung eines ESXi Hypervisors, Durchführung von Backups sowie Konfiguration von Firewalls und Switches.",
    skills: ["Linux", "Windows Server", "Netzwerke", "VMware ESXi", "Powershell", "Python", "C#"]
  },
  {
    id: 2,
    company: "BiCT AG",
    role: "In Ausbildung als Plattform Entwickler",
    date: "08.2021 - 08.2022",
    description: "Aufbau eines fundierten Verständnisses grundlegender IT-Konzepte und Technologien. Selbstständige Anwendung und Weiterentwicklung von Kenntnissen in Linux, Serververwaltung, Netzwerkmanagement sowie Powershell, SQL und Bash.",
    skills: ["Linux", "Windows Server", "SQL", "Netzwerk", "Bash", "Powershell"]
  }
];

export default function Experience() {
  return (
    <div>
            <h2 className="text-2xl font-bold text-blue-600 my-4">Berufserfahrung</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1.5 top-5 w-0.5 bg-gray-700" style={{ height: 'calc(100% - 19rem)'}}/>
              {experiences.map((exp, index) => (
                <div key={exp.id} className="mb-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0.5 top-3 w-3 h-3 bg-gray-700 rounded-full" />
                  {/* Experience card */}
                  <Card className="ml-8 p-6">
                    <div className="mb-4">
                      <div className="text-sm text-slate-800 mb-2">{exp.date}</div>
                      <h3 className="text-xl font-semibold text-blue-500 mb-1">{exp.role}</h3>
                      <div className="text-indigo-400 mb-2">{exp.company}</div>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-gray-900 hover:bg-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
  );
}