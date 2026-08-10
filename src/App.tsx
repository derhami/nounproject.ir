import { useState, useEffect, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  Sun,
  Moon,
  Sparkles,
  Zap,
  Rocket,
  ArrowLeft,
  ArrowUpRight,
  Terminal,
  Braces,
  Heart
} from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  return { ref, onMouseMove }
}

type Project = {
  logo: string
  title: string
  titleEn: string
  domain: string
  desc: string
  chips: string[]
  glowLight: string
  glowDark: string
  badge?: string
}

const PROJECTS: Project[] = [
  {
    logo: '/logos/ranko.svg',
    title: 'رنکو',
    titleEn: 'Ranko',
    domain: 'ranko.nounproject.ir',
    desc: 'ابزار حرفه‌ای سئو و بهینه‌سازی سایت با ۲۵۱ قاعده در ۲۰ دسته',
    chips: ['۲۵۱ قاعده', 'Core Web Vitals', 'AI Ready'],
    glowLight: 'rgba(245,158,11,0.1)',
    glowDark: 'rgba(245,158,11,0.15)',
    badge: 'پروژه ویژه'
  },
  {
    logo: '/logos/virastar.svg',
    title: 'پرشین ویراستار',
    titleEn: 'Persian Virastar',
    domain: 'virastar.nounproject.ir',
    desc: 'ویرایش هوشمند متن فارسی و اصلاح خودکار نیم‌فاصله',
    chips: ['نیم‌فاصله', 'اعداد فارسی', 'تحلیل خوانایی'],
    glowLight: 'rgba(139,92,246,0.1)',
    glowDark: 'rgba(139,92,246,0.15)'
  },
  {
    logo: '/logos/checklist.svg',
    title: 'چک‌لیست طراحی',
    titleEn: 'Design Checklist',
    domain: 'checklist.nounproject.ir',
    desc: 'مرجع تخصصی UI/UX با بیش از ۲۰۰ آیتم قابل بررسی',
    chips: ['۲۰۰+ آیتم', 'نمودار راداری', 'خروجی PDF'],
    glowLight: 'rgba(16,185,129,0.1)',
    glowDark: 'rgba(16,185,129,0.15)'
  },
  {
    logo: '/logos/tailwind.svg',
    title: 'ویژوالایزر تیلویند',
    titleEn: 'Tailwind Visualizer',
    domain: 'tailwind.nounproject.ir',
    desc: 'مرجع بصری تعاملی برای یادگیری سریع Tailwind CSS',
    chips: ['مقایسه کلاس‌ها', 'شبیه‌ساز Breakpoint', 'پالت رنگی'],
    glowLight: 'rgba(14,165,233,0.1)',
    glowDark: 'rgba(14,165,233,0.15)'
  },
  {
    logo: '/logos/wiki.svg',
    title: 'نون ویکی',
    titleEn: 'Noun Wiki',
    domain: 'wiki.nounproject.ir',
    desc: 'دانشنامه اصطلاحات دنیای کار، کسب‌وکار، فناوری و مدیریت',
    chips: ['۱۴۰+ اصطلاح', 'جستجوی هوشمند', 'مقایسه و مسیر یادگیری'],
    glowLight: 'rgba(245,158,11,0.1)',
    glowDark: 'rgba(245,158,11,0.15)'
  }
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
}

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

function GlowCard({ className = '', children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  const { ref, onMouseMove } = useTilt()
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      style={style}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(380px circle at var(--mx,50%) var(--my,50%), var(--glow-soft), transparent 60%)' }} />
      {children}
    </motion.div>
  )
}

function ProjectCard({ project, isDark }: { project: Project; isDark: boolean }) {
  return (
    <a
      href={`https://${project.domain}`}
      target="_blank"
      rel="noreferrer"
      className="block h-full group rounded-[2rem]"
    >
      <GlowCard
        style={{ ['--glow-soft' as string]: isDark ? project.glowDark : project.glowLight }}
        className="h-full rounded-[2rem] bg-card border border-line transition-all duration-300 group-hover:border-line-strong group-hover:-translate-y-1"
      >
        <div className="relative h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-5">
            <img
              src={project.logo}
              alt={project.titleEn}
              loading="lazy"
              className="w-12 h-12 rounded-2xl shadow-sm"
            />
            {project.badge ? (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-[11px] font-bold">
                <Sparkles className="w-3 h-3" />
                {project.badge}
              </span>
            ) : (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-card-2 border border-line text-ink-faint group-hover:text-accent group-hover:border-line-strong transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            )}
          </div>

          <h4 className="text-lg font-black tracking-tight mb-0.5">{project.title}</h4>
          <span className="inline-block text-[10px] font-mono text-ink-faint mb-2.5" dir="ltr">
            {project.domain}
          </span>
          <p className="text-ink-soft text-[13px] leading-relaxed mb-5">{project.desc}</p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.chips.map((chip) => (
              <span key={chip} className="px-2.5 py-1 rounded-lg bg-card-2 border border-line text-[11px] font-bold text-ink-faint">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </a>
  )
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return true
    }
    return true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-canvas text-ink relative overflow-hidden">
      {/* Ambient background — subtle */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -40, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-52 -right-40 w-[36rem] h-[36rem] rounded-full bg-brand/10 blur-[140px]"
        />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-10 sm:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:auto-rows-[minmax(230px,auto)]"
        >
          {/* ══ Brand — hero ══ */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-6">
            <GlowCard
              style={{ ['--glow-soft' as string]: isDark ? 'rgba(163,181,245,0.12)' : 'rgba(29,46,160,0.08)' }}
              className="group h-full rounded-[2rem] bg-card border border-line"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-accent/60 to-transparent" />

              <div className="relative h-full flex flex-col p-7 sm:p-9">
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-3">
                    <img src="/logos/lab.svg" alt="Derhami Lab" className="w-11 h-11 rounded-2xl shadow-sm" />
                    <div>
                      <div className="font-black text-base tracking-tight">لابراتوار درهمی</div>
                      <div className="text-[11px] text-ink-faint font-medium" dir="ltr">Derhami Lab · Digital Team</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2.5 rounded-xl bg-card-2 border border-line hover:border-line-strong text-ink-soft hover:text-ink transition-all duration-200 active:scale-90"
                    aria-label="تغییر حالت تیره و روشن"
                  >
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-bold mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    مجموعه ابزارهای حرفه‌ای وب فارسی
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tighter leading-[1.15] mb-4">
                    <span className="block bg-gradient-to-l from-ink via-ink-soft to-ink-faint bg-clip-text text-transparent">
                      ابزارهای متن‌باز و رایگان
                    </span>
                    <span className="block text-ink">برای وب فارسی</span>
                  </h1>
                  <p className="text-ink-soft text-sm leading-relaxed max-w-lg mb-5">
                    محصولات تیم دیجیتال درهمی برای توسعه‌دهندگان؛ از ویرایش متن فارسی تا سئوی حرفه‌ای سایت.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mt-auto">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {[
                      { v: '۵+', l: 'پروژه' },
                      { v: '۲۵۱+', l: 'قاعده سئو' },
                      { v: '۱۰۰٪', l: 'متن‌باز' },
                      { v: '۰', l: 'تومان' }
                    ].map((s) => (
                      <span key={s.l} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card-2 border border-line">
                        <span className="text-sm font-black tracking-tight">{s.v}</span>
                        <span className="text-[10px] text-ink-faint font-medium">{s.l}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5 mt-3 sm:mt-0 sm:mr-auto">
                    <a
                      href="https://derhami.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-ink text-card font-bold text-sm hover:opacity-90 transition-all duration-300"
                    >
                      <Rocket className="w-4 h-4" />
                      وبسایت درهمی
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="https://github.com/derhami"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-card-2 border border-line-strong text-sm font-bold hover:bg-accent-soft transition-all duration-300"
                    >
                      <Terminal className="w-4 h-4" />
                      گیت‌هاب
                    </a>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* ══ Projects ══ */}
          {PROJECTS.slice(0, 3).map((p) => (
            <motion.div key={p.title} variants={item} className="sm:col-span-1 lg:col-span-2">
              <ProjectCard project={p} isDark={isDark} />
            </motion.div>
          ))}

          {PROJECTS.slice(3).map((p) => (
            <motion.div key={p.title} variants={item} className="sm:col-span-1 lg:col-span-2">
              <ProjectCard project={p} isDark={isDark} />
            </motion.div>
          ))}

          {/* ══ About ══ */}
          <motion.div variants={item} className="sm:col-span-1 lg:col-span-2">
            <GlowCard
              style={{ ['--glow-soft' as string]: isDark ? 'rgba(163,181,245,0.12)' : 'rgba(29,46,160,0.08)' }}
              className="group h-full rounded-[2rem] bg-card border border-line"
            >
              <div className="relative h-full flex flex-col p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-soft text-accent">
                    <Braces className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-black">چرا متن‌باز؟</h4>
                </div>
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  ابزارهای خوب باید در دسترس همه‌ی توسعه‌دهندگان وب فارسی باشند؛ به همین دلیل تمام پروژه‌ها متن‌باز و رایگان منتشر می‌شوند.
                </p>
                <div className="flex items-center gap-2 pt-4 mt-auto border-t border-line">
                  <Heart className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[11px] text-ink-faint">ساخته شده توسط تیم درهمی</span>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* ══ GitHub CTA ══ */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-6">
            <GlowCard
              style={{ ['--glow-soft' as string]: isDark ? 'rgba(163,181,245,0.12)' : 'rgba(29,46,160,0.08)' }}
              className="group h-full rounded-[2rem] bg-card border border-line"
            >
              <div className="relative h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-sm mb-0.5">کد منبع همه‌ی پروژه‌ها</div>
                    <div className="text-[12px] text-ink-faint" dir="ltr">github.com/derhami</div>
                  </div>
                </div>
                <a
                  href="https://github.com/derhami"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-soft text-accent text-xs font-bold hover:gap-3 transition-all duration-300"
                >
                  <Zap className="w-3.5 h-3.5" />
                  باز کردن گیت‌هاب
                </a>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default App