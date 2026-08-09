import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Zap
} from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

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
      color: 'from-violet-500/20 to-indigo-500/20',
      accent: 'text-violet-400',
      border: 'border-violet-500/30'
    },
    {
      id: 'checklist',
      name: 'checklist',
      nameFa: 'چک‌لیست طراحی',
      description: 'مرجع جامع چک‌لیست‌های تخصصی UI/UX با ۲۰۰+ آیتم',
      icon: <CheckSquare className="w-6 h-6" />,
      href: 'https://checklist.nounproject.ir',
      github: 'https://github.com/derhami/checklist',
      features: ['بیش از ۲۰۰ آیتم تخصصی', 'نمودار راداری', 'گزارش‌گیری PDF', 'سیستم پروژه'],
      color: 'from-emerald-500/20 to-teal-500/20',
      accent: 'text-emerald-400',
      border: 'border-emerald-500/30'
    },
    {
      id: 'tailwind',
      name: 'tailwind-visualizer',
      nameFa: 'ویژوالایزر تیلویند',
      description: 'مرجع بصری تعاملی Tailwind CSS برای یادگیری سریع',
      icon: <Palette className="w-6 h-6" />,
      href: 'https://tailwind.nounproject.ir',
      github: 'https://github.com/derhami/tailwind-visualizer',
      features: ['مقايسه بصری کلاس‌ها', 'شبیه‌ساز breakpoint', 'پالت رنگی', 'چت‌شیت'],
      color: 'from-cyan-500/20 to-sky-500/20',
      accent: 'text-cyan-400',
      border: 'border-cyan-500/30'
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
      color: 'from-amber-500/20 to-orange-500/20',
      accent: 'text-amber-400',
      border: 'border-amber-500/30'
    }
  ]

  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0f1117]/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d2ea0] to-[#7b8fe8] flex items-center justify-center font-bold text-lg">
              L
            </div>
            <div>
              <h1 className="font-bold text-lg">لابراتوار درهمی</h1>
              <p className="text-xs text-gray-400">Derhami Lab</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://derhami.com" 
              target="_blank"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              وبسایت شخصی
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            مجموعه ابزارهای حرفه‌ای وب فارسی
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-l from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            لابراتوار پروژه‌های درهمی
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            مجموعه‌ای از ابزارهای متن‌باز و رایگان برای توسعه‌دهندگان وب فارسی
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/derhami"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              مشاهده در گیت‌هاب
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-colors"
            >
              <Code2 className="w-5 h-5" />
              مشاهده پروژه‌ها
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '۴+', label: 'پروژه فعال' },
              { value: '۱۰۰٪', label: 'متن‌باز' },
              { value: 'فارسی', label: 'طراحی شده' },
              { value: 'رایگان', label: 'برای همه' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-4">پروژه‌ها</h3>
            <p className="text-gray-400">ابزارهای حرفه‌ای برای توسعه وب فارسی</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onHoverStart={() => setSelectedProject(project)}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${project.color} border ${project.border} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/10 ${project.accent}`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.href}
                      target="_blank"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2">{project.nameFa}</h4>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                
                <ul className="space-y-2">
                  {project.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${project.accent.replace('text-', 'bg-')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">درباره لابراتوار</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              لابراتوار پروژه‌های درهمی مجموعه‌ای از ابزارهای متن‌باز و رایگان است که با هدف 
              بهبود تجربه توسعه وب فارسی طراحی شده‌اند. تمامی پروژه‌ها با عشق و دقت ساخته شده‌اند 
              و برای استفاده عموم رایگان هستند.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://derhami.com"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1d2ea0] text-white font-semibold hover:bg-[#18298b] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                مشاهده وبسایت شخصی
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            لابراتوار پروژه‌های درهمی © {new Date().getFullYear()}
          </p>
          <p className="text-sm text-gray-500">
            ساخته شده با ♥ توسط <a href="https://derhami.com" className="text-[#7b8fe8] hover:underline">حمیدرضا درهمی</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
