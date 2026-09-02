import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { profile } from '../../data/profile';
import toast from 'react-hot-toast';
import { Mail, Send, MessageSquare, Loader2 } from 'lucide-react';
import LinkedinIcon from '../ui/LinkedinIcon';
import GithubIcon from '../ui/GithubIcon';

// ─────────────────────────────────────────────────────────────
// EmailJS configuration
//
// Steps to set up (takes ~5 minutes, free):
//   1. Go to https://www.emailjs.com and create a free account.
//   2. Add an Email Service (Gmail / Outlook / etc.) → copy the Service ID.
//   3. Create an Email Template. Use these exact variable names in the template:
//        {{from_name}}   — sender's name
//        {{from_email}}  — sender's email
//        {{subject}}     — message subject
//        {{message}}     — message body
//        {{to_name}}     — your name (set a default in the template or pass it below)
//   4. Copy the Template ID and your Public Key (Account → API Keys).
//   5. Replace the three placeholder strings below.
//
// Your credentials are safe to commit — the Public Key is intentionally
// client-side only. EmailJS rate-limits by origin domain in production.
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? 'YOUR_PUBLIC_KEY';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const { ref, inView } = useScrollReveal();
  const [form, setForm]     = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);

  // ── Validation ───────────────────────────────────────────
  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = 'Invalid email address';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20)
                              e.message = 'Message must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Submit → EmailJS ─────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          to_name:    profile.firstName,   // your first name fills {{to_name}} in the template
          reply_to:   form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent! I'll get back to you soon.");
      setForm(empty);
      setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      toast.error('Failed to send. Please email me directly.');
    } finally {
      setLoading(false);
    }
  };

  // ── Field change ─────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(er => ({ ...er, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all ${
      errors[field]
        ? 'border-red-500/60 bg-red-500/5'
        : 'border-indigo-500/20 focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/20'
    }`;

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid',
    color: 'var(--color-text)',
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-custom" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-badge"><MessageSquare size={12} /> Contact</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Have a project in mind, want to collaborate, or just want to say hi? Send me a message.
          </p>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Get In Touch
            </h3>

            {[
              { icon: <Mail size={18} />,         label: 'Email',    value: profile.email,    href: `mailto:${profile.email}` },
              { icon: <GithubIcon size={18} />,   label: 'GitHub',   value: 'Toujar',         href: profile.github },
              { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', value: 'Toujar',         href: profile.linkedin },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 card-hover group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-indigo-400 flex-shrink-0"
                  style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-faint)' }}>
                    {item.label}
                  </div>
                  <div className="text-sm font-medium group-hover:text-indigo-400 transition-colors" style={{ color: 'var(--color-text)' }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="glass rounded-xl p-5 mt-4">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                I'm currently open to new opportunities, freelance projects, and collaborations.
                Response time is typically within 24–48 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4" noValidate>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block" style={{ color: 'var(--color-text-muted)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass('name')}
                    style={inputStyle}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block" style={{ color: 'var(--color-text-muted)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass('email')}
                    style={inputStyle}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block" style={{ color: 'var(--color-text-muted)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass('subject')}
                  style={inputStyle}
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block" style={{ color: 'var(--color-text-muted)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={inputClass('message')}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center"
              >
                {loading
                  ? <><Loader2 size={15} className="animate-spin" /> Sending…</>
                  : <><Send size={15} /> Send Message</>
                }
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
