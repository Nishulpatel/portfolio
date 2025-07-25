import React from 'react'
import Image from 'next/image'
import Container from '@/components/common/Container'

const educationData = [
  {
    logo: '/tit.png',
    institute: 'technocrats institute of technology',
    degree: 'B.Tech in Computer Science and Artificial Intelligence',
    year: '2022 - 2026',
  },
  {
    logo: '/school.jpeg',
    institute: 'sarvodaya public school',
    degree: 'Higher Secondary',
    year: '2018 - 2020',
  },
]

const Education = () => {
  return (
        <Container className="py-12 mt-">
      <h2 className="text-2xl font-bold mb-6">🎓 Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={edu.logo}
                alt={`${edu.institute} logo`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{edu.institute}</h3>
                <p className="text-sm text-neutral-500">{edu.degree}</p>
              </div>
            </div>
            <div className="text-sm text-neutral-500">{edu.year}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Education
