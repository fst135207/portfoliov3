"use client"

import type React from "react"
import Link from "next/link"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  technologies: string[]
  projectUrl?: string
  // GitHub specific props (all optional)
  githubUrl?: string
  stars?: number
  forks?: number
}

export default function ProjectCard({
  id,
  title,
  description,
  icon,
  technologies,
  projectUrl,
  githubUrl,
  stars,
  forks,
}: ProjectCardProps) {
  const isGithubProject = !!githubUrl

  return (
    <Card className="w-full max-w-sm h-auto transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="text-3xl text-primary">{icon}</div>
          <div>
            <CardTitle className="text-xl text-blue-500">{title}</CardTitle>
            {technologies.map((tech, id) => (
              <Badge key={id} variant="outline" className="mt-1 text-indigo-400 mr-1">
                <span className="technology">{tech}</span>
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <CardDescription className="text-md text-gray-700 min-h-[80px]">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          {isGithubProject && (
            <>
              {stars !== undefined && (
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4" />
                  <span>{stars}</span>
                </div>
              )}
              {forks !== undefined && (
                <div className="flex items-center">
                  <GitFork className="mr-1 h-4 w-4" />
                  <span>{forks}</span>
                </div>
              )}
            </>
          )}
        </div>
        {(projectUrl || githubUrl) && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 transition-colors hover:text-primary hover:border-primary"
          >
            <Link href={githubUrl || projectUrl || "#"} target="_blank" rel="noopener noreferrer">
              {isGithubProject ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
              <span>View</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

