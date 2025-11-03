import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Real‑Time Anomaly Detection',
    desc: 'Streaming inference with PyTorch + Kafka for predictive maintenance at scale.',
    tags: ['PyTorch', 'Kafka', 'FastAPI', 'CUDA'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'LLM‑powered Data Explorer',
    desc: 'Natural‑language SQL and semantic search over enterprise datasets.',
    tags: ['LangChain', 'Postgres', 'OpenAI', 'React'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'MLOps Pipeline',
    desc: 'CI/CD for ML with feature store, model registry, and auto‑deployments.',
    tags: ['MLflow', 'Feast', 'Docker', 'GitHub Actions'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Interactive AI Visualizer',
    desc: 'Web‑based model interpretability with SHAP and counterfactuals.',
    tags: ['SHAP', 'D3.js', 'FastAPI', 'Vite'],
    repo: '#',
    demo: '#',
  },
];

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-300 border border-white/10">
      {label}
    </span>
  );
}

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.06, type: 'spring', stiffness: 120 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white tracking-tight">{p.title}</h3>
        <Sparkles className="w-4 h-4 text-emerald-300 opacity-70" />
      </div>
      <p className="mt-2 text-sm text-slate-300/90">{p.desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        <a
          href={p.repo}
          className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-white"
        >
          <Github className="w-4 h-4" /> Code
        </a>
        <a
          href={p.demo}
          className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-white"
        >
          <ExternalLink className="w-4 h-4" /> Demo
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Highlighted Projects</h2>
          <p className="mt-2 text-slate-300/90 text-sm">
            A selection of recent work across AI/ML, data, and full‑stack development.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
