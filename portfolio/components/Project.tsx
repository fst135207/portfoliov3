"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Star, GitFork } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  icon: React.ReactNode
  technology: string
  githubUrl: string
  stars: number
  forks: number
}

export default function ProjectCard({ title, description, icon, technology, githubUrl, stars, forks }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    return (
    <Card
      className="w-64 h-64 relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div>
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -40 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl mb-4 text-blue-600"
          >
            {icon}
          </motion.div>
          <motion.h3
            className="text-blue-500 text-xl font-semibold"
            initial={{ y: 40 }}
            animate={{ y: isHovered ? -60 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-700 text-sm mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -60 : 80 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm">
          <Badge variant="secondary" className="mr-2">
            {technology}
          </Badge>
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-muted-foreground">
              <Star size={16} className="mr-1" />
              {stars}
            </div>
            <div className="flex items-center text-muted-foreground">
              <GitFork size={16} className="mr-1" />
              {forks}
            </div>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github size={18} />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
    );
}