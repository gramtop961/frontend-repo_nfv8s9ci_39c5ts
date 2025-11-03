import { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-emerald-300" />
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Get in touch</h2>
        </div>
        <p className="mt-2 text-slate-300/90 text-sm">
          Open to full‑time roles, freelance projects, and collaborations.
        </p>

        <form onSubmit={handleSend} className="mt-8 grid grid-cols-1 gap-4">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project or role..."
            rows={5}
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 text-slate-950 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>

        <div className="mt-6 flex items-center gap-4 text-sm">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
