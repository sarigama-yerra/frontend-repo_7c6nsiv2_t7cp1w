import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Autonomous Line Follower Robot',
    description: 'A sensor fusion approach with PID control for stable high-speed tracking.',
    tags: ['Embedded', 'C++', 'PID', 'Sensors'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Structural Analysis Tool',
    description: 'Finite element analysis toy app for beams and trusses with interactive plots.',
    tags: ['Python', 'FEA', 'Numerical Methods'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'IoT Energy Monitor',
    description: 'ESP32 + MQTT system to track household energy in real time with dashboards.',
    tags: ['IoT', 'ESP32', 'MQTT', 'Dashboards'],
    github: 'https://github.com/',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Featured projects</h2>
            <p className="text-gray-700 mt-2">Selected engineering work spanning hardware, software, and systems.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-800 px-2.5 py-1 border border-black/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-800 hover:text-black">
                  <Github size={16} /> Code
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-800 hover:text-black">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
