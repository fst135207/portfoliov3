import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Globe, GitFork, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiLeetcode } from "react-icons/si"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import selfie from "@/public/selfie.jpg"

export default function Profile() {
    return (
        <div className="sticky top-0 h-screen">
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <Avatar className="w-16 h-16 mb-4 sm:mb-0 sm:ml-4 md:ml-16 mt-4 sm:mt-16">
            <AvatarImage src={selfie.src} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl text-blue-600 font-bold sm:ml-5 mt-2 sm:mt-16">
              Hi, I&apos;m Felix
            </h1>
            <p className="text-sm sm:text-base sm:ml-5 mt-1">
              Im a Platform Engineer working currently at Identitas AG
            </p>
            <div className="flex items-center justify-between sm:ml-5 mt-2">
              <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Bern, Switzerland</span>
              </div>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/felix-stalder-6b20472a6" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://leetcode.com/u/fst135207" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className="w-5 h-5 hover:text-yellow-500 transition-colors" />
                </a>
                <a href="https://github.com/fst135207" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:text-gray-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}