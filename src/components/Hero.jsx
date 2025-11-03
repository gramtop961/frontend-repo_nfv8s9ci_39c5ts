import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, BrainCircuit } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6 text-xs text-slate-200/80">
            <BrainCircuit className="w-4 h-4 text-emerald-300" />
            Building AI that ships • ML • Data Science • Full‑Stack
          </div>
          <h1 className="font-semibold text-4xl md:text-6xl leading-tight tracking-tight text-white">
            Crafting intelligent products at the intersection of AI, data, and delightful UX.
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl">
            I design and deploy end‑to‑end machine learning systems — from data pipelines and modeling
            to scalable APIs and immersive front‑ends.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow-sm hover:shadow transition shadow-white/10"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900/70 border border-white/10 px-4 py-2 font-medium text-white hover:bg-slate-900/90"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300/90">
            {[
              'Python',
              'PyTorch',
              'TensorFlow',
              'scikit-learn',
              'Pandas',
              'FastAPI',
              'PostgreSQL',
              'MongoDB',
            ].map((s) => (
              <div
                key={s}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
