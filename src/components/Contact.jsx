import { Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Let’s connect</h2>
          <p className="mt-2 text-gray-700 max-w-2xl">Open to internships, research collaborations, and hackathons. Reach out and let’s build something meaningful.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-900">
              <Mail size={16} /> Email me
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
