import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ExternalLink,
  Type,
  Palette,
  Sun,
  Moon,
  CheckSquare,
  Sparkles,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Gauge,
  Languages,
  ArrowLeft,
  Terminal,
  Braces,
  Rocket,
  Heart
} from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

type Project = {
  id: string
  name: string
  nameFa: string
  description: string
  icon: React.ReactNode
  href: string
  github: string
  features: string[]
  accentText: string
  accentSoft: string
  accentSolid: string
  borderHover: string
  glow: string
}

const projects: Project[] = [
  {
    id: 'ranko',
    name: 'ranko',
    nameFa: 'رنکو',
    description: 'ابزار حرفه‌ای سئو با ۲۵۱ قاعده در ۲۰ دسته، Core Web Vitals و تحلیل امنیتی',
    icon: <Zap className="w-6 h-6" />,
    href: 'https://ranko.nounproject.ir',
    github: 'https://github.com/derhami/ranko',
    features: ['Core Web Vitals', 'تحلیل امنیتی', 'گزارش حرفه‌ای'],
    accentText: 'text-amber-600 dark:text-amber-400',
    accentSoft: 'bg-amber-100 dark:bg-amber-500/10',
    accentSolid: 'bg-amber-500',
    borderHover: 'hover:border-amber-400 dark:hover:border-amber-500/60',
    glow: 'hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)]'
  },
  {
    id: 'virastar',
    name: 'persian-virastar',
    nameFa: 'پرشین ویراستار',
    description: 'ویرایش و نظافت هوشمند متن فارسی',
    icon: <Type className="w-6 h-6" />,
    href: 'https://virastar.nounproject.ir',
    github: 'https://github.com/derhami/persian-virastar',
    features: ['اصلاح نیم‌فاصله', 'تبدیل اعداد', 'تحلیل خوانایی'],
    accentText: 'text-violet-600 dark:text-violet-400',
    accentSoft: 'bg-violet-100 dark:bg-violet-500/10',
    accentSolid: 'bg-violet-500',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/60',
    glow: 'hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.5)]'
  },
  {
    id: 'checklist',
    name: 'checklist',
    nameFa: 'چک‌لیست طراحی',
    description: 'مرجع تخصصی UI/UX با بیش از ۲۰۰ آیتم',
    icon: <CheckSquare className="w-6 h-6" />,
    href: 'https://checklist.nounproject.ir',
    github: 'https://github.com/derhami/checklist',
    features: ['نمودار راداری', 'گزارش PDF', 'سیستم پروژه'],
    accentText: 'text-emerald-600 dark:text-emerald-400',
    accentSoft: 'bg-emerald-100 dark:bg-emerald-500/10',
    accentSolid: 'bg-emerald-500',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/60',
    glow: 'hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]'
  },
  {
    id: 'tailwind',
    name: 'tailwind-visualizer',
    nameFa: 'ویژوالایزر تیلویند',
    description: 'مرجع بصری تعاملی Tailwind CSS برای یادگیری سریع و آسان',
    icon: <Palette className="w-6 h-6" />,
    href: 'https://tailwind.nounproject.ir',
    github: 'https://github.com/derhami/tailwind-visualizer',
    features: ['مقایسه بصری کلاس‌ها', 'شبیه‌ساز breakpoint', 'پالت رنگی', 'چت‌شیت'],
    accentText: 'text-sky-600 dark:text-sky-400',
    accentSoft: 'bg-sky-100 dark:bg-sky-500/10',
    accentSolid: 'bg-sky-500',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/60',
    glow: 'hover:shadow-[0_0_50px_-12px_rgba(14,165,233,0.5)]'
  }
]

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  const { scrollYProgress } = useScroll()
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const ranko = projects[0]
  const virastar = projects[1]
  const checklist = projects[2]
  const tailwind = projects[3]

  return (
    <div className="min-h-screen bg-canvas text-ink transition-colors relative overflow-hidden">
      {/* Ambient background */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </motion.div>

      {/* Bento Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,1fr)]">

          {/* Brand tile — spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative lg:row-span-2 group flex flex-col p-7 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 hover:border-line-strong"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent blur-lg opacity-40" />
                  <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-brand to-accent flex items-center justify-center font-black text-lg text-white">
                    L
                  </div>
                </div>
                <div>
                  <div className="font-bold text-base tracking-tight">لابراتوار درهمی</div>
                  <div className="text-[11px] text-ink-faint font-medium">Derhami Lab · Digital Team</div>
                </div>
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2.5 rounded-xl bg-card-2 border border-line hover:border-line-strong text-ink-soft hover:text-ink transition-all duration-200 active:scale-95"
                aria-label="تغییر حالت تیره و روشن"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-bold mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                مجموعه ابزارهای حرفه‌ای وب فارسی
              </div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tighter leading-[1.15] mb-5">
                <span className="block bg-gradient-to-l from-ink via-ink-soft to-ink-faint bg-clip-text text-transparent">
                  لابراتوار
                </span>
                <span className="block bg-gradient-to-l from-accent to-[#7284E3] dark:to-[#a3b5f5] bg-clip-text text-transparent">
                  پروژه‌های درهمی
                </span>
              </h1>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                محصولات متن‌باز و رایگان تیم دیجیتال درهمی برای توسعه‌دهندگان وب فارسی.
              </p>
            </div>

            <div className="relative mt-auto">
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {[
                  { v: '۴+', l: 'پروژه فعال' },
                  { v: '۲۵۱+', l: 'قاعده سئو' },
                  { v: '۱۰۰٪', l: 'متن‌باز' },
                  { v: '۰', l: 'تومان' }
                ].map((s) => (
                  <div key={s.l} className="px-3 py-3 rounded-2xl bg-card-2 border border-line">
                    <div className="text-xl font-black tracking-tight">{s.v}</div>
                    <div className="text-[11px] text-ink-faint mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <a
                href="https://derhami.com"
                target="_blank"
                className="group inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-brand text-white font-bold text-sm hover:bg-brand-hover transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-glow)]"
              >
                <Rocket className="w-4 h-4" />
                وبسایت دیجیتال مارکتینگ درهمی
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Ranko — featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <a
              href={ranko.href}
              target="_blank"
              className={`relative group flex flex-col h-full p-7 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 ${ranko.borderHover} ${ranko.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${ranko.accentSoft} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative flex items-start justify-between mb-5">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${ranko.accentSoft} ${ranko.accentText}`}>
                  {ranko.icon}
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-accent text-white">
                  <Sparkles className="w-3 h-3" />
                  ویژه
                </div>
              </div>

              <h4 className="relative text-xl font-bold mb-1.5">{ranko.nameFa}</h4>
              <p className="relative text-sm leading-relaxed mb-auto text-ink-soft">
                {ranko.description}
              </p>

              <div className="relative grid grid-cols-3 gap-2.5 mt-5">
                {[
                  { icon: <Gauge className="w-4 h-4" />, v: '۲۵۱', l: 'قاعده' },
                  { icon: <ShieldCheck className="w-4 h-4" />, v: '۲۰', l: 'دسته' },
                  { icon: <Languages className="w-4 h-4" />, v: '۵', l: 'خروجی' }
                ].map((s) => (
                  <div key={s.l} className="p-2.5 rounded-xl bg-card/70 border border-line text-center">
                    <div className={`inline-flex ${ranko.accentText} mb-1`}>{s.icon}</div>
                    <div className="text-base font-black leading-none">{s.v}</div>
                    <div className="text-[10px] text-ink-faint mt-1">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="relative flex items-center justify-between pt-4 mt-4 border-t border-line">
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${ranko.accentText}`}>
                  مشاهده پروژه
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <a
                  href={ranko.github}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-card-2 border border-line text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </a>
          </motion.div>

          {/* Virastar */}
          <motion.a
            href={virastar.href}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`relative group flex flex-col p-6 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 ${virastar.borderHover} ${virastar.glow}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${virastar.accentSoft} ${virastar.accentText}`}>
                {virastar.icon}
              </div>
              <a
                href={virastar.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-card-2 border border-line text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
            <h4 className="text-base font-bold mb-1">{virastar.nameFa}</h4>
            <p className="text-ink-soft text-[13px] leading-relaxed mb-auto">{virastar.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {virastar.features.map((f) => (
                <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                  {f}
                </span>
              ))}
            </div>
          </motion.a>

          {/* Checklist */}
          <motion.a
            href={checklist.href}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={`relative group flex flex-col p-6 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 ${checklist.borderHover} ${checklist.glow}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${checklist.accentSoft} ${checklist.accentText}`}>
                {checklist.icon}
              </div>
              <a
                href={checklist.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-card-2 border border-line text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
            <h4 className="text-base font-bold mb-1">{checklist.nameFa}</h4>
            <p className="text-ink-soft text-[13px] leading-relaxed mb-auto">{checklist.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {checklist.features.map((f) => (
                <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                  {f}
                </span>
              ))}
            </div>
          </motion.a>

          {/* Tailwind — wide */}
          <motion.a
            href={tailwind.href}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`sm:col-span-2 relative group flex items-center gap-5 p-7 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 ${tailwind.borderHover} ${tailwind.glow}`}
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl ${tailwind.accentSoft} ${tailwind.accentText}`}>
              {tailwind.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold mb-1 flex items-center gap-2">
                {tailwind.nameFa}
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-ink-soft text-[13px] leading-relaxed mb-2.5">{tailwind.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {tailwind.features.map((f) => (
                  <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={tailwind.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 p-2.5 rounded-xl bg-card-2 border border-line text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </motion.a>

          {/* About tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group flex flex-col p-6 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 hover:border-line-strong"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-accent-soft text-accent mb-4">
              <Braces className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold mb-2">چرا متن‌باز؟</h4>
            <p className="text-ink-soft text-[13px] leading-relaxed mb-auto">
              لابراتوار درهمی محصولات خود را متن‌باز و رایگان انتشار می‌دهد تا ابزارهای
              خوب در دسترس همه‌ی توسعه‌دهندگان وب فارسی باشند.
            </p>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-line">
              <Heart className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] text-ink-faint">ساخته شده توسط تیم درهمی</span>
            </div>
          </motion.div>

          {/* GitHub CTA tile */}
          <motion.a
            href="https://github.com/derhami"
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-brand to-accent text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_var(--accent-glow)]"
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm mb-4 transition-transform duration-300 group-hover:scale-110">
              <GithubIcon className="w-7 h-7" />
            </div>
            <div className="relative font-bold text-base mb-1">کد منبع</div>
            <div className="relative text-[12px] text-white/70 mb-4">همه‌ی پروژه‌ها روی گیت‌هاب</div>
            <div className="relative inline-flex items-center gap-1.5 text-[12px] font-bold bg-white text-black px-4 py-2 rounded-full group-hover:gap-2.5 transition-all duration-300">
              <Terminal className="w-3.5 h-3.5" />
              github.com/derhami
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default App