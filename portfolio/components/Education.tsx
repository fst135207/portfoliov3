import { Card } from "@/components/ui/card";

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
    date: "08.2022 - aktiv",
    description: "Cyber Security, Netzwerkmanagement, Risikoanalysen sowie Reverse Engineering zur Identifikation von Schwachstellen. Umsetzung theoretischer Konzepte in realen IT- und Sicherheitsprojekten",
  },
  {
    id: 2,
    school: "Gibb Berufsfachschule Bern",
    diplom: "Lehrbegleitende Technische Berufsmaturität",
    date: "08.2021 - 03.2022",
    description: "Lehrbegleitende Berufsmaturität, beinhaltet Fächer wie Mathematik, Englisch, Französisch und Physik.",
  },
  {
    id: 3,
    school: "BiCT AG",
    diplom: "10. ICT-Schuljahr Ausrichtung Mediamatik & Informatik",
    date: "08.2020 - 08.2021",
    description: "Vorbereitung für eine Ausbildung als Informatiker in Plattformentwicklung, mit ebenfalls relevanten Fächer für das bestehen der BM Aufnahmeprüfung",
  },
];

export default function Experience() {
  return (
    <div>
            <h2 className="text-2xl font-bold text-blue-600 my-4">Aus- und Weiterbildungen</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1.5 top-5 w-0.5 bg-gray-700" style={{ height: 'calc(100% - 16rem)'}}/>
              {educations.map((exp, id) => (
                <div key={exp.id} className="mb-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0.5 top-3 w-3 h-3 bg-gray-700 rounded-full" />

                  {/* Experience card */}
                  <Card className="ml-8 p-6">
                    <div className="mb-4">
                      <div className="text-sm text-slate-800 mb-2
                      ">{exp.date}</div>
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