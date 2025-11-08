import Spline from '@splinetool/react-spline'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-16 flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700">
          Engineering Student • Building modern solutions
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Crafting practical, elegant engineering projects
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-gray-700">
          I’m an engineering student focused on solving real problems with clean design, robust code, and thoughtful systems thinking.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-900">
            View projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium text-gray-900 hover:bg-white">
            Resume <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
