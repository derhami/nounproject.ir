import { useState, useEffect } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
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
    features: ['مقایسه بصری', 'شبیه‌ساز breakpoint', 'پالت رنگی', 'چت‌شیت'],
    accentText: 'text-sky-600 dark:text-sky-400',
    accentSoft: 'bg-sky-100 dark:bg-sky-500/10',
    accentSolid: 'bg-sky-500',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/60',
    glow: 'hover:shadow-[0_0_50px_-12px_rgba(14,165,233,0.5)]'
  }
]

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  }
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-brand/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* Centered Bento Grid */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-8 sm:py-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:auto-rows-[minmax(200px,auto)]"
        >
          {/* Brand — large left */}
          <motion.div
            variants={item}
            className="relative sm:col-span-2 lg:col-span-4 lg:row-span-2 group flex flex-col p-7 rounded-[2rem] bg-card border border-line overflow-hidden transition-all duration-300 hover:border-line-strong hover:shadow-[var(--shadow-card)]"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-accent to-[#7284E3] dark:to-[#a3b5f5]" />

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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                مجموعه ابزارهای حرفه‌ای وب فارسی
              </div>
              <h1 className="text-3xl sm:text-4xl xl:text-[2.75rem] font-black tracking-tighter leading-[1.2] mb-4">
                <span className="block bg-gradient-to-l from-ink via-ink-soft to-ink-faint bg-clip-text text-transparent">
                  لابراتوار پروژه‌های
                </span>
                <span className="block bg-gradient-to-l from-accent to-[#7284E3] dark:to-[#a3b5f5] bg-clip-text text-transparent">
                  درهمی
                </span>
              </h1>
              <p className="text-ink-soft text-sm leading-relaxed max-w-md">
                محصولات متن‌باز و رایگان تیم دیجیتال درهمی برای توسعه‌دهندگان وب فارسی.
              </p>
            </div>

            <div className="relative mt-auto pt-6">
              <div className="grid grid-cols-4 gap-2.5 mb-5">
                {[
                  { v: '۴+', l: 'پروژه' },
                  { v: '۲۵۱+', l: 'قاعده' },
                  { v: '۱۰۰٪', l: 'متن‌باز' },
                  { v: '۰', l: 'تومان' }
                ].map((s) => (
                  <div key={s.l} className="px-2.5 py-3 rounded-2xl bg-card-2 border border-line text-center">
                    <div className="text-lg font-black tracking-tight">{s.v}</div>
                    <div className="text-[10px] text-ink-faint mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <a
                href="https://derhami.com"
                target="_blank"
                className="group inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-brand text-white font-bold text-sm hover:bg-brand-hover transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-glow)]"
              >
                <Rocket className="w-4 h-4" />
                وبسایت دیجیتال مارکتینگ درهمی
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Ranko — featured, tall right */}
          <motion.div variants={item} className="relative sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <a
              href={ranko.href}
              target="_blank"
              className={`relative group flex flex-col h-full p-6 rounded-[2rem] bg-card border border-line overflow-hidden transition-all duration-300 ${ranko.borderHover} ${ranko.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${ranko.accentSoft} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative flex items-start justify-between mb-5">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${ranko.accentSoft} ${ranko.accentText}`}>
                  {ranko.icon}
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-accent text-white">
                  <Sparkles className="w-3 h-3" />
                  ویژه
                </span>
              </div>

              <h4 className="relative text-xl font-bold mb-1.5">{ranko.nameFa}</h4>
              <p className="relative text-sm leading-relaxed text-ink-soft">{ranko.description}</p>

              <div className="relative grid grid-cols-3 gap-2 mt-5">
                {[
                  { icon: <Gauge className="w-4 h-4" />, v: '۲۵۱', l: 'قاعده' },
                  { icon: <ShieldCheck className="w-4 h-4" />, v: '۲۰', l: 'دسته' },
                  { icon: <Languages className="w-4 h-4" />, v: '۵', l: 'خروجی' }
                ].map((s) => (
                  <div key={s.l} className="px-2 py-2.5 rounded-xl bg-card/70 border border-line text-center">
                    <div className={`inline-flex ${ranko.accentText} mb-1`}>{s.icon}</div>
                    <div className="text-sm font-black leading-none">{s.v}</div>
                    <div className="text-[10px] text-ink-faint mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="relative flex items-center justify-between pt-4 mt-auto border-t border-line">
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
            variants={item}
            href={virastar.href}
            target="_blank"
            className={`relative group flex flex-col p-6 rounded-[2rem] bg-card border border-line overflow-hidden transition-all duration-300 ${virastar.borderHover} ${virastar.glow}`}
          >
            <div className="flex items-center justify-between mb-5">
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
            <p className="text-ink-soft text-[13px] leading-relaxed mb-4">{virastar.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {virastar.features.map((f) => (
                <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                  {f}
                </span>
              ))}
            </div>
          </motion.a>

          {/* Checklist */}
          <motion.a
            variants={item}
            href={checklist.href}
            target="_blank"
            className={`relative group flex flex-col p-6 rounded-[2rem] bg-card border border-line overflow-hidden transition-all duration-300 ${checklist.borderHover} ${checklist.glow}`}
          >
            <div className="flex items-center justify-between mb-5">
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
            <p className="text-ink-soft text-[13px] leading-relaxed mb-4">{checklist.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {checklist.features.map((f) => (
                <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                  {f}
                </span>
              ))}
            </div>
          </motion.a>

          {/* Tailwind */}
          <motion.a
            variants={item}
            href={tailwind.href}
            target="_blank"
            className={`relative group flex flex-col p-6 rounded-[2rem] bg-card border border-line overflow-hidden transition-all duration-300 ${tailwind.borderHover} ${tailwind.glow}`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${tailwind.accentSoft} ${tailwind.accentText}`}>
                {tailwind.icon}
              </div>
              <a
                href={tailwind.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-card-2 border border-line text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
            <h4 className="text-base font-bold mb-1">{tailwind.nameFa}</h4>
            <p className="text-ink-soft text-[13px] leading-relaxed mb-4">{tailwind.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {tailwind.features.map((f) => (
                <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                  {f}
                </span>
              ))}
            </div>
          </motion.a>

          {/* About */}
          <motion.div
            variants={item}
            className="relative sm:col-span-1 lg:col-span-3 group flex flex-col p-6 rounded-[2rem] bg-card border border-line overflow-hidden transition-all duration-300 hover:border-line-strong"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-soft text-accent">
                <Braces className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold">چرا متن‌باز؟</h4>
            </div>
            <p className="text-ink-soft text-[13px] leading-relaxed mb-4">
              لابراتوار درهمی محصولات خود را متن‌باز و رایگان انتشار می‌دهد تا ابزارهای خوب
              در دسترس همه‌ی توسعه‌دهندگان وب فارسی باشند.
            </p>
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-line">
              <Heart className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] text-ink-faint">ساخته شده توسط تیم درهمی</span>
            </div>
          </motion.div>

          {/* GitHub CTA */}
          <motion.a
            variants={item}
            href="https://github.com/derhami"
            target="_blank"
            className="relative sm:col-span-1 lg:col-span-3 group flex items-center justify-between gap-4 p-6 rounded-[2rem] bg-gradient-to-br from-brand to-accent text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_var(--accent-glow)]"
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-base mb-0.5">کد منبع</div>
                <div className="text-[12px] text-white/70">همه‌ی پروژه‌ها روی گیت‌هاب</div>
              </div>
            </div>
            <span className="relative inline-flex items-center gap-1.5 text-[12px] font-bold bg-white text-black px-3.5 py-2 rounded-full group-hover:gap-2.5 transition-all duration-300">
              <Terminal className="w-3.5 h-3.5" />
              github.com/derhami
            </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default App