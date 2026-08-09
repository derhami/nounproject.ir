import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Type,
  Palette,
  Sun,
  Moon,
  CheckSquare,
  ArrowLeft,
  Sparkles,
  Code2,
  Zap,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const projects = [
    {
      id: 'virastar',
      name: 'persian-virastar',
      nameFa: 'پرشین ویراستار',
      description: 'ابزار حرفه‌ای ویرایش و نظافت متن فارسی با قابلیت‌های هوشمند',
      icon: <Type className="w-6 h-6" />,
      href: 'https://virastar.nounproject.ir',
      github: 'https://github.com/derhami/persian-virastar',
      features: ['ویرایش هوشمند متن فارسی', 'اصلاح نیم‌فاصله', 'تبدیل اعداد', 'تحلیل خوانایی'],
      gradient: 'from-violet-500/20 via-indigo-500/20 to-purple-500/20',
      accent: 'bg-violet-500',
      text: 'text-violet-400',
      border: 'border-violet-500/20 hover:border-violet-500/40'
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
      gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
      accent: 'bg-emerald-500',
      text: 'text-emerald-400',
      border: 'border-emerald-500/20 hover:border-emerald-500/40'
    },
    {
      id: 'tailwind',
      name: 'tailwind-visualizer',
      nameFa: 'ویژوالایزر تیلویند',
      description: 'مرجع بصری تعاملی Tailwind CSS برای یادگیری سریع و آسان',
      icon: <Palette className="w-6 h-6" />,
      href: 'https://tailwind.nounproject.ir',
      github: 'https://github.com/derhami/tailwind-visualizer',
      features: ['مقايسه بصری کلاس‌ها', 'شبیه‌ساز breakpoint', 'پالت رنگی', 'چت‌شیت'],
      gradient: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20',
      accent: 'bg-cyan-500',
      text: 'text-cyan-400',
      border: 'border-cyan-500/20 hover:border-cyan-500/40'
    },
    {
      id: 'ranko',
      name: 'ranko-seo',
      nameFa: 'رنکو',
      description: 'ابزار حرفه‌ای سئو و بهینه‌سازی سایت با ۲۵۱ قاعده در ۲۰ دسته',
      icon: <Zap className="w-6 h-6" />,
      href: 'https://ranko.nounproject.ir',
      github: 'https://github.com/derhami/ranko',
      features: ['۲۵۱ قاعده سئو', 'Core Web Vitals', 'تحلیل امنیتی', 'گزارش حرفه‌ای'],
      gradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
      accent: 'bg-amber-500',
      text: 'text-amber-400',
      border: 'border-amber-500/20 hover:border-amber-500/40'
    }
  ]

  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-[#7b8fe8]/30">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5" />
        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#7b8fe8] blur-lg opacity-50" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d2ea0] to-[#7b8fe8] flex items-center justify-center font-black text-lg">
                L
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base tracking-tight">لابراتوار درهمی</h1>
              <p className="text-[11px] text-zinc-500 font-medium">Derhami Lab</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://derhami.com" 
              target="_blank"
              className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              وبسایت شخصی
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 active:scale-95"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1d2ea0]/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7b8fe8]/10 rounded-full blur-[128px]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#7b8fe8]" />
            <span>مجموعه ابزارهای حرفه‌ای وب فارسی</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter"
          >
            <span className="bg-gradient-to-l from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              لابراتوار
            </span>
            <br />
            <span className="bg-gradient-to-l from-[#7b8fe8] to-[#a3b5f5] bg-clip-text text-transparent">
              پروژه‌های درهمی
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
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
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(123,143,232,0.3)]"
            >
              <span className="relative z-10">مشاهده پروژه‌ها</span>
              <ChevronDown className="relative z-10 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#7b8fe8] to-[#a3b5f5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">مشاهده پروژه‌ها</span>
            </a>
            <a
              href="https://github.com/derhami"
              target="_blank"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-semibold text-base hover:bg-white/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>گیت‌هاب</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '۴+', label: 'پروژه فعال', icon: <Code2 className="w-5 h-5" /> },
              { value: '۲۵۱+', label: 'قاعده سئو', icon: <Zap className="w-5 h-5" /> },
              { value: '۱۰۰٪', label: 'متن‌باز', icon: <Github className="w-5 h-5" /> },
              { value: '۰', label: 'تومان', icon: <Sparkles className="w-5 h-5" /> }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#7b8fe8]/10 text-[#7b8fe8] mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7b8fe8]/10 border border-[#7b8fe8]/20 text-sm text-[#7b8fe8] mb-6">
              <Code2 className="w-4 h-4" />
              <span>پروژه‌ها</span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">ابزارهای حرفه‌ای</h3>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              مجموعه‌ای از ابزارهای متن‌باز برای توسعه وب فارسی
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                <div className={`relative h-full p-8 rounded-3xl bg-[#09090b] border ${project.border} backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${project.accent}/10 ${project.text}`}>
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-105"
                        title="مشاهده کد"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.href}
                        target="_blank"
                        className={`p-2.5 rounded-xl ${project.accent}/10 hover:${project.accent}/20 transition-all duration-200 hover:scale-105 ${project.text}`}
                        title="مشاهده دمو"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-3">{project.nameFa}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
                  
                  <ul className="space-y-3">
                    {project.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className={`w-1.5 h-1.5 rounded-full ${project.accent}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <a
                      href={project.href}
                      target="_blank"
                      className={`inline-flex items-center gap-2 text-sm font-medium ${project.text} group/link`}
                    >
                      <span>مشاهده پروژه</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1d2ea0]/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1d2ea0]/20 text-[#7b8fe8] mb-8">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-4xl sm:text-5xl font-black mb-8 tracking-tight">درباره لابراتوار</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              لابراتوار پروژه‌های درهمی با هدف ایجاد ابزارهای حرفه‌ای و رایگان برای جامعه وب فارسی تأسیس شده است. 
              تمامی پروژه‌ها متن‌باز هستند و با عشق و دقت ساخته شده‌اند. ما باور داریم که ابزارهای خوب باید برای همه در دسترس باشند.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://derhami.com"
                target="_blank"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#1d2ea0] text-white font-semibold text-base hover:bg-[#18298b] transition-all duration-300 hover:shadow-[0_0_30px_rgba(29,46,160,0.4)]"
              >
                <span>مشاهده وبسایت شخصی</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/derhami"
                target="_blank"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-semibold text-base hover:bg-white/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>گیت‌هاب</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1d2ea0] to-[#7b8fe8] flex items-center justify-center font-bold text-sm">
                L
              </div>
              <span className="text-sm text-zinc-500">
                لابراتوار پروژه‌های درهمی © {new Date().getFullYear()}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://derhami.com" target="_blank" className="text-sm text-zinc-500 hover:text-white transition-colors">
                وبسایت شخصی
              </a>
              <a href="https://github.com/derhami" target="_blank" className="text-sm text-zinc-500 hover:text-white transition-colors">
                گیت‌هاب
              </a>
              <a href="mailto:hamid@derhami.com" className="text-sm text-zinc-500 hover:text-white transition-colors">
                ایمیل
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-zinc-600">
              ساخته شده با ♥ توسط <a href="https://derhami.com" className="text-[#7b8fe8] hover:underline">حمیدرضا درهمی</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
