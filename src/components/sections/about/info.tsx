import React from 'react'
import Container from '@/components/common/Container'
import { about } from '@/data/About'
import {
  MapPin,
  Code2,
  Briefcase,
  Brain,
  BookOpen
} from 'lucide-react'

const Info = () => {
  return (
    <Container className="py-12 mt-16">
      <div className="space-y-6 text-neutral-800 dark:text-neutral-300">

        <h2 className="text-3xl font-bold">🧑‍💻 About Me</h2>

        <p className="text-lg leading-relaxed">{about.description}</p>

        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 text-yellow-500" />
            <span><strong>Lives in:</strong> Bhopal, India</span>
          </div>

          <div className="flex items-start gap-3">
            <Code2 className="w-5 h-5 mt-1 " />
            <span>
               Primarily work with Next.js, React, TypeScript, Tailwind CSS, Node.js, and MongoDB.
            </span>
          </div>

          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 mt-1 " />
            <span>
              Open to new opportunities and freelancing. Any support is appreciated.
            </span>
          </div>

          <div className="flex items-start gap-3">
            <Brain className="w-5 h-5 mt-1 " />
            <span> Strong Interests in Chess</span>
          </div>

          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 mt-1 " />
            <span>Love reading books on psychology, behavioral science, and human nature</span>
          </div>
        </div>
        
      </div>
    </Container>
  )
}

export default Info
