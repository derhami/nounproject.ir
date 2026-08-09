import { useState, useEffect, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  Type,
  Sun,
  Moon,
  CheckSquare,
  Sparkles,
  Zap,
  ArrowUpRight,
  ArrowLeft,
  Terminal,
  Braces,
  Rocket,
  Heart,
  GitBranch
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
    el.style.setProperty('--rotate-x', `${(0.5 - y) * 6}deg`)
    el.style.setProperty('--rotate-y', `${(x - 0.5) * 6}deg`)
  }
  return { ref, onMouseMove }
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
}

const item: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

function GlowCard({ className = '', children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  const { ref, onMouseMove } = useTilt()
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      style={{ transformStyle: 'preserve-3d', ...style }}
      className={`glow-card relative overflow-hidden transition-transform duration-200 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(400px circle at var(--mx,50%) var(--my,50%), var(--glow-soft), transparent 60%)' }} />
      {children}
    </motion.div>
  )
}

function ScoreRing({ score }: { score: number }) {
  const r = 30
  const c = 2 * Math.PI * r
  return (
    <div className="relative w-20 h-20">
      <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
        <circle cx="40" cy="40" r={r} strokeWidth="7" className="fill-none stroke-white/15" />
        <motion.circle
          cx="40" cy="40" r={r} strokeWidth="7" className="fill-none stroke-white"
          strokeLinecap="round" strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - score / 100) }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-black text-white leading-none">{score}</span>
        <span className="text-[9px] text-white/70">امتیاز</span>
      </div>
    </div>
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
      {/* Animated gradient mesh */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-brand/40 via-accent/25 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -70, 50, 0], y: [0, 50, -60, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-52 -right-40 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-violet-500/30 via-fuchsia-500/20 to-transparent blur-[130px]"
        />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-10 sm:py-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:auto-rows-[minmax(210px,auto)]"
        >
          {/* ══ Brand — large ══ */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-4 lg:row-span-2">
            <GlowCard
              style={{ ['--glow-soft' as string]: isDark ? 'rgba(163,181,245,0.18)' : 'rgba(29,46,160,0.12)' }}
              className="group h-full p-8 rounded-[2rem] bg-card border border-line"
            >
              <div className="absolute -top-28 -right-28 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-brand via-accent to-violet-400" />

              <div className="relative flex items-center justify-between mb-9">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent blur-xl opacity-50" />
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-accent flex items-center justify-center font-black text-xl text-white">
                      L
                    </div>
                  </div>
                  <div>
                    <div className="font-black text-lg tracking-tight">لابراتوار درهمی</div>
                    <div className="text-[11px] text-ink-faint font-medium">Derhami Lab · Digital Team</div>
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

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-bold mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  مجموعه ابزارهای حرفه‌ای وب فارسی
                </div>
                <h1 className="text-3xl sm:text-4xl xl:text-[3rem] font-black tracking-tighter leading-[1.15] mb-5">
                  <span className="block bg-gradient-to-l from-ink via-ink-soft to-ink-faint bg-clip-text text-transparent">
                    ابزارهای متن‌باز و رایگان
                  </span>
                  <span className="block bg-gradient-to-br from-brand via-accent to-violet-500 bg-clip-text text-transparent">
                    برای وب فارسی
                  </span>
                </h1>
                <p className="text-ink-soft text-sm leading-relaxed max-w-md">
                  محصولات تیم دیجیتال درهمی برای توسعه‌دهندگان؛ از ویرایش متن فارسی تا سئوی حرفه‌ای سایت.
                </p>
              </div>

              <div className="relative mt-auto pt-7">
                <div className="grid grid-cols-4 gap-2.5 mb-5">
                  {[
                    { v: '۴+', l: 'پروژه', c: 'from-brand/20 to-brand/5' },
                    { v: '۲۵۱+', l: 'قاعده', c: 'from-accent/20 to-accent/5' },
                    { v: '۱۰۰٪', l: 'متن‌باز', c: 'from-emerald-400/20 to-emerald-400/5' },
                    { v: '۰', l: 'تومان', c: 'from-amber-400/20 to-amber-400/5' }
                  ].map((s) => (
                    <div key={s.l} className={`px-2.5 py-3 rounded-2xl bg-gradient-to-b ${s.c} border border-line text-center`}>
                      <div className="text-lg font-black tracking-tight">{s.v}</div>
                      <div className="text-[10px] text-ink-faint mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://derhami.com"
                    target="_blank"
                    className="group inline-flex flex-1 items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-l from-brand to-accent text-white font-bold text-sm hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-glow)]"
                  >
                    <Rocket className="w-4 h-4" />
                    وبسایت درهمی
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/derhami"
                    target="_blank"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-card-2 border border-line-strong text-sm font-bold hover:bg-accent-soft transition-all duration-300"
                  >
                    <Terminal className="w-4 h-4" />
                    گیت‌هاب
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* ══ Ranko — featured ══ */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <GlowCard
              style={{ ['--glow-soft' as string]: 'rgba(255,255,255,0.28)' }}
              className="group h-full rounded-[2rem] bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white"
            >
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-white/20 blur-3xl" />

              <div className="relative h-full flex flex-col p-7">
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm text-[11px] font-bold">
                    <Sparkles className="w-3 h-3" />
                    پروژه ویژه
                  </span>
                </div>

                <h4 className="relative text-2xl font-black tracking-tight mb-2">رنکو</h4>
                <p className="relative text-white/80 text-sm leading-relaxed mb-6">
                  ابزار سئوی سایت با ۲۵۱ قاعده و Core Web Vitals
                </p>

                {/* Mini mock — score ring + bars */}
                <div className="relative flex items-center gap-5 mb-6">
                  <ScoreRing score={88} />
                  <div className="flex-1 space-y-2">
                    {[
                      { l: 'Core', w: '92%' },
                      { l: 'Performance', w: '78%' },
                      { l: 'Security', w: '95%' }
                    ].map((b) => (
                      <div key={b.l}>
                        <div className="flex justify-between text-[10px] font-bold text-white/80 mb-1">
                          <span>{b.l}</span><span>{b.w}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: b.w }}
                            transition={{ duration: 1.1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex items-center justify-between pt-4 mt-auto border-t border-white/20">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold">
                    مشاهده پروژه
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <a
                    href="https://github.com/derhami/ranko"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/15 hover:bg-white/25 transition-all duration-200 hover:scale-105"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* ══ Virastar ══ */}
          <motion.div variants={item} className="sm:col-span-1 lg:col-span-2">
            <GlowCard
              style={{ ['--glow-soft' as string]: 'rgba(255,255,255,0.25)' }}
              className="group h-full rounded-[2rem] bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white"
            >
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/20 blur-3xl" />
              <div className="relative h-full flex flex-col p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Type className="w-5 h-5" />
                  </div>
                  <a
                    href="https://github.com/derhami/persian-virastar"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/15 hover:bg-white/25 transition-all duration-200 hover:scale-105"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="mb-auto">
                  <h4 className="text-lg font-black tracking-tight mb-1">پرشین ویراستار</h4>
                  <p className="text-white/80 text-[13px] leading-relaxed">ویرایش هوشمند متن فارسی و اصلاح نیم‌فاصله</p>
                </div>

                {/* Mini mock — text demo */}
                <div className="mt-5 rounded-xl bg-black/25 backdrop-blur-sm p-3 space-y-1.5" dir="rtl">
                  <div className="h-1.5 w-full rounded-full bg-white/20" />
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-16 rounded-full bg-violet-300/70" />
                    <span className="h-1.5 w-10 rounded-full bg-white/30 line-through" />
                    <span className="h-1.5 w-14 rounded-full bg-white/60" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-violet-400/40 text-[9px] font-bold">نیم‌فاصله ✓</span>
                    <span className="px-1.5 py-0.5 rounded bg-violet-400/40 text-[9px] font-bold">اعداد فارسی ✓</span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* ══ Checklist ══ */}
          <motion.div variants={item} className="sm:col-span-1 lg:col-span-2">
            <GlowCard
              style={{ ['--glow-soft' as string]: 'rgba(255,255,255,0.25)' }}
              className="group h-full rounded-[2rem] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white"
            >
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/20 blur-3xl" />
              <div className="relative h-full flex flex-col p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <a
                    href="https://github.com/derhami/checklist"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/15 hover:bg-white/25 transition-all duration-200 hover:scale-105"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="mb-auto">
                  <h4 className="text-lg font-black tracking-tight mb-1">چک‌لیست طراحی</h4>
                  <p className="text-white/80 text-[13px] leading-relaxed">مرجع تخصصی UI/UX با بیش از ۲۰۰ آیتم</p>
                </div>

                {/* Mini mock — checklist */}
                <div className="mt-5 rounded-xl bg-black/25 backdrop-blur-sm p-3 space-y-2">
                  {['رنگ‌ها', 'تایپوگرافی', 'دسترسی‌پذیری'].map((t, i) => (
                    <div key={t} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3.5 h-3.5 rounded ${i === 2 ? 'bg-white' : 'bg-white/70 border border-white/50'}`}>
                          {i === 2 && <CheckSquare className="w-3 h-3 text-emerald-600" />}
                        </div>
                        <span className="text-[11px] text-white/90 font-medium">{t}</span>
                      </div>
                      <span className={`h-4 w-0.5 rounded ${i === 2 ? 'bg-white' : 'bg-white/40'}`} />
                    </div>
                  ))}
                  <div className="text-[10px] text-white/70 font-bold">۲۰۰+ آیتم قابل بررسی</div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* ══ Tailwind ══ */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
            <GlowCard
              style={{ ['--glow-soft' as string]: 'rgba(255,255,255,0.25)' }}
              className="group h-full rounded-[2rem] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 text-white"
            >
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/20 blur-3xl" />
              <div className="relative h-full flex flex-col p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <a
                    href="https://github.com/derhami/tailwind-visualizer"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/15 hover:bg-white/25 transition-all duration-200 hover:scale-105"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="mb-auto">
                  <h4 className="text-lg font-black tracking-tight mb-1">ویژوالایزر تیلویند</h4>
                  <p className="text-white/80 text-[13px] leading-relaxed">مرجع بصری Tailwind CSS</p>
                </div>

                {/* Mini mock — color swatches */}
                <div className="mt-5 rounded-xl bg-black/25 backdrop-blur-sm p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-white/70">پالت رنگی</span>
                    <span className="text-[10px] font-bold text-white/70">hover</span>
                  </div>
                  <div className="flex gap-1.5">
                    {['bg-sky-400', 'bg-blue-400', 'bg-indigo-400', 'bg-violet-400', 'bg-fuchsia-400'].map((c) => (
                      <motion.div
                        key={c}
                        whileHover={{ scale: 1.3 }}
                        className={`${c} w-7 h-7 rounded-lg cursor-pointer border border-white/30`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* ══ About ══ */}
          <motion.div variants={item} className="sm:col-span-1 lg:col-span-3">
            <GlowCard
              style={{ ['--glow-soft' as string]: isDark ? 'rgba(163,181,245,0.15)' : 'rgba(29,46,160,0.1)' }}
              className="group h-full p-6 rounded-[2rem] bg-card border border-line"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-soft text-accent">
                  <Braces className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black">چرا متن‌باز؟</h4>
              </div>
              <p className="text-ink-soft text-[13px] leading-relaxed mb-4">
                لابراتوار درهمی محصولات خود را متن‌باز و رایگان منتشر می‌کند تا ابزارهای خوب
                در دسترس همه‌ی توسعه‌دهندگان وب فارسی باشند.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-line">
                <Heart className="w-3.5 h-3.5 text-accent" />
                <span className="text-[11px] text-ink-faint">ساخته شده توسط تیم درهمی</span>
              </div>
            </GlowCard>
          </motion.div>

          {/* ══ GitHub CTA ══ */}
          <motion.div variants={item} className="sm:col-span-1 lg:col-span-3">
            <GlowCard
              style={{ ['--glow-soft' as string]: 'rgba(255,255,255,0.3)' }}
              className="group h-full rounded-[2rem] bg-gradient-to-l from-brand to-accent text-white"
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative h-full flex items-center justify-between gap-3 p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-black text-base mb-0.5">کد منبع</div>
                    <div className="text-[12px] text-white/70">همه‌ی پروژه‌ها روی گیت‌هاب</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold bg-white text-black px-4 py-2.5 rounded-full shadow-lg group-hover:gap-3 transition-all duration-300">
                  <Terminal className="w-3.5 h-3.5" />
                  github.com/derhami
                </span>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default App