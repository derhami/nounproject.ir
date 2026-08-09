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
  Code2,
  Zap,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Gauge,
  Languages
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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.96])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const projects: Project[] = [
    {
      id: 'virastar',
      name: 'persian-virastar',
      nameFa: 'پرشین ویراستار',
      description: 'ابزار حرفه‌ای ویرایش و نظافت متن فارسی با قابلیت‌های هوشمند',
      icon: <Type className="w-6 h-6" />,
      href: 'https://virastar.nounproject.ir',
      github: 'https://github.com/derhami/persian-virastar',
      features: ['ویرایش هوشمند متن فارسی', 'اصلاح نیم‌فاصله', 'تبدیل اعداد', 'تحلیل خوانایی'],
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
      description: 'مرجع جامع چک‌لیست‌های تخصصی UI/UX با بیش از ۲۰۰ آیتم',
      icon: <CheckSquare className="w-6 h-6" />,
      href: 'https://checklist.nounproject.ir',
      github: 'https://github.com/derhami/checklist',
      features: ['بیش از ۲۰۰ آیتم تخصصی', 'نمودار راداری', 'گزارش‌گیری PDF', 'سیستم پروژه'],
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
    },
    {
      id: 'ranko',
      name: 'ranko-seo',
      nameFa: 'رنکو',
      description:
        'ابزار حرفه‌ای سئو و بهینه‌سازی سایت با ۲۵۱ قاعده در ۲۰ دسته، به‌همراه Core Web Vitals و تحلیل امنیتی',
      icon: <Zap className="w-6 h-6" />,
      href: 'https://ranko.nounproject.ir',
      github: 'https://github.com/derhami/ranko',
      features: ['۲۵۱ قاعده سئو', 'Core Web Vitals', 'تحلیل امنیتی', 'گزارش حرفه‌ای'],
      accentText: 'text-amber-600 dark:text-amber-400',
      accentSoft: 'bg-amber-100 dark:bg-amber-500/10',
      accentSolid: 'bg-amber-500',
      borderHover: 'hover:border-amber-400 dark:hover:border-amber-500/60',
      glow: 'hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)]'
    }
  ]

  const featured = projects.find((p) => p.id === 'ranko')!
  const others = projects.filter((p) => p.id !== 'ranko')

  return (
    <div className="min-h-screen bg-canvas text-ink selection:bg-accent/20 transition-colors">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: 'var(--header-bg)' }}
      >
        <div className="absolute inset-0 backdrop-blur-xl border-b border-line" />
        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-accent flex items-center justify-center font-black text-lg text-white">
                L
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base tracking-tight">لابراتوار درهمی</h1>
              <p className="text-[11px] text-ink-faint font-medium">Derhami Lab</p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://derhami.com"
              target="_blank"
              className="hidden sm:flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors px-3 py-1.5 rounded-lg hover:bg-card-2"
            >
              وبسایت شخصی
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="h-4 w-px bg-line-strong hidden sm:block" />
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-card border border-line hover:border-line-strong transition-all duration-200 active:scale-95 text-ink-soft hover:text-ink"
              aria-label="تغییر حالت تیره و روشن"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[128px]" />
        </div>

        <div className="absolute inset-0 bg-grid opacity-70" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-line text-sm text-ink-soft mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span>مجموعه ابزارهای حرفه‌ای وب فارسی</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter"
          >
            <span className="block bg-gradient-to-l from-ink via-ink-soft to-ink-faint bg-clip-text text-transparent">
              لابراتوار
            </span>
            <span className="block bg-gradient-to-l from-accent to-[#7284E3] dark:to-[#a3b5f5] bg-clip-text text-transparent">
              پروژه‌های درهمی
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-ink-soft max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            مجموعه‌ای از ابزارهای متن‌باز و رایگان برای توسعه‌دهندگان وب فارسی.
            <br className="hidden sm:block" />
            ساخته شده با ♥ توسط حمیدرضا درهمی.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand text-white font-semibold text-base hover:bg-brand-hover transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-glow)]"
            >
              مشاهده پروژه‌ها
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/derhami"
              target="_blank"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-card border border-line-strong font-semibold text-base hover:bg-card-2 hover:border-line-strong transition-all duration-300"
            >
              <GithubIcon className="w-5 h-5" />
              <span>گیت‌هاب</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-line-strong flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-ink-faint" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative py-24 px-6">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: '۴+', label: 'پروژه فعال', icon: <Code2 className="w-5 h-5" /> },
              { value: '۲۵۱+', label: 'قاعده سئو', icon: <Gauge className="w-5 h-5" /> },
              { value: '۱۰۰٪', label: 'متن‌باز', icon: <GithubIcon className="w-5 h-5" /> },
              { value: '۰', label: 'تومان', icon: <Sparkles className="w-5 h-5" /> }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-line hover:border-line-strong transition-all duration-300 shadow-[var(--shadow-card)]"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-soft text-accent mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-black mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm text-ink-faint font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — Bento Grid */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft text-sm text-accent mb-6">
              <Code2 className="w-4 h-4" />
              <span>پروژه‌ها</span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">ابزارهای حرفه‌ای</h3>
            <p className="text-ink-soft text-lg max-w-2xl mx-auto">
              مجموعه‌ای از ابزارهای متن‌باز برای توسعه وب فارسی
            </p>
          </motion.div>

          {/* Bento Layout: featured big + smaller tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(0,1fr)]">
            {/* Featured — Ranko */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-2 lg:row-span-2 relative group"
            >
              <a
                href={featured.href}
                target="_blank"
                className={`relative flex flex-col h-full p-8 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 ${featured.borderHover} ${featured.glow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${featured.accentSoft} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />

                <div className="relative flex items-start justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-accent text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                    پروژه ویژه
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={featured.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl bg-card/80 border border-line hover:border-line-strong text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
                      title="مشاهده کد"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl ${featured.accentSoft} ${featured.accentText} mb-5`}>
                  {featured.icon}
                </div>

                <h4 className="relative text-2xl font-bold mb-2">{featured.nameFa}</h4>
                <p className="relative text-ink-soft text-sm leading-relaxed mb-6">
                  {featured.description}
                </p>

                <div className="relative grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: <Gauge className="w-4 h-4" />, v: '۲۵۱', l: 'قاعده' },
                    { icon: <ShieldCheck className="w-4 h-4" />, v: '۲۰', l: 'دسته' },
                    { icon: <Languages className="w-4 h-4" />, v: '۵', l: 'فرمت خروجی' }
                  ].map((s) => (
                    <div key={s.l} className="p-3 rounded-xl bg-card/70 border border-line text-center">
                      <div className={`inline-flex ${featured.accentText} mb-1`}>{s.icon}</div>
                      <div className="text-lg font-black leading-none">{s.v}</div>
                      <div className="text-[11px] text-ink-faint mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-auto flex items-center justify-between pt-5">
                  <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${featured.accentText}`}>
                    مشاهده پروژه
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <span className="text-[11px] text-ink-faint font-mono">{featured.name}</span>
                </div>
              </a>
            </motion.div>

            {/* Virastar */}
            <motion.a
              href={others[0].href}
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative group flex flex-col p-6 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 ${others[0].borderHover} ${others[0].glow}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${others[0].accentSoft} ${others[0].accentText}`}>
                  {others[0].icon}
                </div>
                <a
                  href={others[0].github}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-card-2 border border-line text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
              <h4 className="text-lg font-bold mb-1.5 flex items-center gap-2">
                {others[0].nameFa}
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-ink-soft text-sm leading-relaxed mb-4 flex-1">{others[0].description}</p>
              <div className="flex flex-wrap gap-1.5">
                {others[0].features.slice(0, 3).map((f) => (
                  <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                    {f}
                  </span>
                ))}
              </div>
            </motion.a>

            {/* Checklist */}
            <motion.a
              href={others[1].href}
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative group flex flex-col p-6 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 ${others[1].borderHover} ${others[1].glow}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${others[1].accentSoft} ${others[1].accentText}`}>
                  {others[1].icon}
                </div>
                <a
                  href={others[1].github}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-card-2 border border-line text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
              <h4 className="text-lg font-bold mb-1.5 flex items-center gap-2">
                {others[1].nameFa}
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-ink-soft text-sm leading-relaxed mb-4 flex-1">{others[1].description}</p>
              <div className="flex flex-wrap gap-1.5">
                {others[1].features.slice(0, 3).map((f) => (
                  <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                    {f}
                  </span>
                ))}
              </div>
            </motion.a>

            {/* Tailwind */}
            <motion.a
              href={others[2].href}
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`sm:col-span-2 lg:col-span-2 relative group flex items-center gap-6 p-6 rounded-3xl bg-card border border-line overflow-hidden transition-all duration-300 ${others[2].borderHover} ${others[2].glow}`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl ${others[2].accentSoft} ${others[2].accentText}`}>
                {others[2].icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold mb-1 flex items-center gap-2">
                  {others[2].nameFa}
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-ink-soft text-sm leading-relaxed mb-3">{others[2].description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {others[2].features.slice(0, 4).map((f) => (
                    <span key={f} className="px-2 py-1 rounded-md bg-card-2 border border-line text-[11px] text-ink-faint">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={others[2].github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 p-2 rounded-xl bg-card-2 border border-line text-ink-soft hover:text-ink transition-all duration-200 hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </motion.a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-soft text-accent mb-8">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-4xl sm:text-5xl font-black mb-8 tracking-tight">درباره لابراتوار</h3>
            <p className="text-ink-soft text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              لابراتوار پروژه‌های درهمی با هدف ایجاد ابزارهای حرفه‌ای و رایگان برای جامعه وب فارسی تأسیس شده است.
              تمامی پروژه‌ها متن‌باز هستند و با عشق و دقت ساخته شده‌اند. ما باور داریم که ابزارهای خوب باید برای همه در دسترس باشند.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://derhami.com"
                target="_blank"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand text-white font-semibold text-base hover:bg-brand-hover transition-all duration-300 hover:shadow-[0_0_30px_var(--accent-glow)]"
              >
                <span>مشاهده وبسایت شخصی</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/derhami"
                target="_blank"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-card border border-line-strong font-semibold text-base hover:bg-card-2 transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
                <span>گیت‌هاب</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-line">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand to-accent flex items-center justify-center font-bold text-sm text-white">
                L
              </div>
              <span className="text-sm text-ink-faint">لابراتوار پروژه‌های درهمی © {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://derhami.com" target="_blank" className="text-sm text-ink-faint hover:text-ink transition-colors">
                وبسایت شخصی
              </a>
              <a href="https://github.com/derhami" target="_blank" className="text-sm text-ink-faint hover:text-ink transition-colors">
                گیت‌هاب
              </a>
              <a href="mailto:hamid@derhami.com" className="text-sm text-ink-faint hover:text-ink transition-colors">
                ایمیل
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-line text-center">
            <p className="text-xs text-ink-faint">
              ساخته شده با ♥ توسط{' '}
              <a href="https://derhami.com" className="text-accent hover:underline">
                حمیدرضا درهمی
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App