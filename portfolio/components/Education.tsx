import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Describtion from "./Describtion";
import { Badge } from "@/components/ui/badge";

interface EducationCard {
  id: number;
  school: string;
  diplom: string;
  date: string;
  description: string;
}

const educations: EducationCard[] = [
  {
    id: 1,
    school: "Gibb HF Informatik",
    diplom: "Dipl. Informatiker HF, Schwerpunkt Cyber Security und Computer Network",
    date: "08.2022 - Heute",
    description: "Erweiterung der Kenntnisse in unterschiedlichen IT-Bereichen durch praktische Mitarbeit in verschiedenen Feldern während der Lehre. Verantwortliche für die Administration und Wartung einer Lernumgebung, inklusive Einrichtung eines ESXi Hypervisors, Durchführung von Backups sowie Konfiguration von Firewalls und Switches.",
  },
  {
    id: 2,
    school: "Gibb Berufsfachschule Bern",
    diplom: "Lehrbegleitende Technische Berufsmaturität",
    date: "08.2022 - Heute",
    description: "Erweiterung der Kenntnisse in unterschiedlichen IT-Bereichen durch praktische Mitarbeit in verschiedenen Feldern während der Lehre. Verantwortliche für die Administration und Wartung einer Lernumgebung, inklusive Einrichtung eines ESXi Hypervisors, Durchführung von Backups sowie Konfiguration von Firewalls und Switches.",
  },
  {
    id: 3,
    school: "BiCT AG",
    diplom: "10. ICT-Schuljahr Ausrichtung Mediamatik & Informatik",
    date: "08.2022 - Heute",
    description: "Erweiterung der Kenntnisse in unterschiedlichen IT-Bereichen durch praktische Mitarbeit in verschiedenen Feldern während der Lehre. Verantwortliche für die Administration und Wartung einer Lernumgebung, inklusive Einrichtung eines ESXi Hypervisors, Durchführung von Backups sowie Konfiguration von Firewalls und Switches.",
  },
];

export default function Experience() {
  return (
    <div>
            <h2 className="text-2xl font-bold text-blue-600 my-4">Education</h2>
            <div className="relative">
              {educations.map((exp, index) => (
                <div key={exp.id} className="mb-8 relative">
                  {/* Timeline dot and line */}
                  <div className="absolute left-0.4 top-2 w-3 h-3 bg-gray-700 rounded-full" />
                  {index !== educations.length - 1 && (
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-700" />
                  )}

                  {/* Experience card */}
                  <Card className="ml-8 p-6">
                    <div className="mb-4">
                      <div className="text-sm text-slate-800 mb-2">{exp.date}</div>
                      <h3 className="text-xl font-semibold text-blue-500 mb-1">{exp.diplom}</h3>
                      <div className="text-indigo-400 mb-2">{exp.school}</div>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
  );
}