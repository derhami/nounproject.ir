import { useState, useEffect } from 'react'
import { 
  ArrowLeft, 
  ExternalLink, 
  GitBranch, 
  Globe, 
  CheckSquare, 
  Sparkles, 
  Shield,
  Zap,
  Heart,
  Type,
  Palette,
  Rocket,
  Users,
  Code2
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

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-['Vazirmatn',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-600 flex items-center justify-center">
                <span className="text-white font-black text-lg">N</span>
              </div>
              <span className="font-bold text-lg hidden sm:block">Noun Project</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#projects" className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                پروژه‌ها
              </a>
              <a href="#about" className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                درباره تیم
              </a>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/20 dark:to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-sm font-medium border border-brand-200 dark:border-brand-800/50 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>تیم درهمی • ابزارهای حرفه‌ای وب ایران</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight animate-slide-up">
              <span className="text-brand-600 dark:text-brand-400">Noun Project</span>
              <br />
              <span className="text-stone-900 dark:text-stone-100">پلتفرم ابزارهای تیم درهمی</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              مجموعه‌ای از پروژه‌های متن‌باز و رایگان برای جامعه وب ایران، ساخته شده با عشق و دقت
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-all shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5"
              >
                مشاهده پروژه‌ها
                <ArrowLeft className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/derhami"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 font-bold transition-all border border-stone-200 dark:border-stone-700"
              >
                <GitBranch className="w-5 h-5" />
                گیت‌هاب تیم
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-black text-brand-600 dark:text-brand-400">۲+</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">پروژه فعال</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-brand-600 dark:text-brand-400">۱۰۰٪</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">متن‌باز و رایگان</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-brand-600 dark:text-brand-400">RTL</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">پشتیبانی کامل فارسی</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-brand-600 dark:text-brand-400">۲۴/۷</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">آماده استفاده</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 mb-4">
              پروژه‌های تیم درهمی
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              ابزارهای حرفه‌ای که برای بهبود تجربه کاربری جامعه وب ایران ساخته شده‌اند
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: Persian Virastar */}
            <ProjectCard
              title="پرشین ویراستار"
              titleEn="Persian Virastar"
              description="ابزار حرفه‌ای ویرایش و نظافت متن فارسی با الگوریتم‌های هوشمند"
              icon={<Type className="w-8 h-8" />}
              features={[
                'حذف فاصله‌های اضافی و نیم‌فاصله',
                'ترکیب و جداسازی کلمات',
                'تبدیل اعداد فارسی به لاتین',
                'فرمت‌های متنی هوشمند'
              ]}
              href="https://virastar.nounproject.ir"
              github="https://github.com/derhami/persian-virastar"
              accentColor="rose"
            />
            
            {/* Project 2: UX Checklist */}
            <ProjectCard
              title="چک‌لیست UX"
              titleEn="UX Checklist"
              description="چک‌لیست جامع ارزیابی تجربه کاربری با بیش از ۲۰۰ آیتم تخصصی"
              icon={<CheckSquare className="w-8 h-8" />}
              features={[
                'دسته‌بندی ۵ حوزه اصلی UX',
                'نمودار راداری بلوغ تجربه کاربری',
                'سیستم پروژه چندگانه',
                'گزارش‌گیری PDF حرفه‌ای'
              ]}
              href="https://checklist.nounproject.ir"
              github="https://github.com/derhami/checklist"
              accentColor="emerald"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 mb-4">
              چرا پروژه‌های درهمی؟
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              کیفیت، جزئیات و تمرکز بر نیاز کاربر ایرانی
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Palette className="w-6 h-6" />}
              title="طراحی برند یکپارچه"
              description="تمام پروژه‌ها با پالت رنگی یکسان و هویت بصری منسجم طراحی شده‌اند"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="کاملاً رایگان"
              description="تمام پروژه‌ها به صورت متن‌باز و رایگان در اختیار جامعه طراحی قرار دارند"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="عملکرد بالا"
              description="بهینه‌سازی شده برای سرعت و کارایی با استفاده از فناوری‌های نوین"
            />
            <FeatureCard
              icon={<Code2 className="w-6 h-6" />}
              title="توسعه حرفه‌ای"
              description="با استفاده از TypeScript، React و استانداردهای روز توسعه وب"
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="پشتیبانی از RTL"
              description="طراحی کاملاً سازگار با راست‌به‌چپ و زبان فارسی"
            />
            <FeatureCard
              icon={<Rocket className="w-6 h-6" />}
              title="به‌روزرسانی مداوم"
              description="پروژه‌ها به صورت مداوم بهبود و به‌روزرسانی می‌شوند"
            />
          </div>
        </div>
      </section>

      {/* About Team Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200 dark:border-stone-800">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-2xl font-black mx-auto">
                D
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100">
                تیم درهمی
              </h2>
              
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
                تیم درهمی مجموعه‌ای از علاقه‌مندان به طراحی و توسعه وب است که با هدف بهبود تجربه کاربری جامعه وب ایران، ابزارهای حرفه‌ای و رایگان می‌سازد. ما باور داریم که ابزارهای خوب باید در دسترس همه باشند.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 text-sm font-medium">
                  <Users className="w-4 h-4" />
                  تیم توسعه
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 text-sm font-medium">
                  <Heart className="w-4 h-4" />
                  ساخته شده با عشق
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  برای ایران
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">N</span>
              </div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Noun Project</span>
            </div>
            
            <p className="text-sm text-stone-500 dark:text-stone-400 flex items-center gap-1">
              ساخته شده با <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> تیم درهمی
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  titleEn: string
  description: string
  icon: React.ReactNode
  features: string[]
  href: string
  github: string
  accentColor: 'rose' | 'emerald'
}

function ProjectCard({ title, titleEn, description, icon, features, href, github, accentColor }: ProjectCardProps) {
  const colorClasses = accentColor === 'rose' 
    ? 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800/50'
    : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50'
  
  const hoverClasses = accentColor === 'rose'
    ? 'hover:border-rose-400 dark:hover:border-rose-600'
    : 'hover:border-emerald-400 dark:hover:border-emerald-600'

  return (
    <div className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 ${hoverClasses} transition-all shadow-sm hover:shadow-md group`}>
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-3 rounded-2xl ${colorClasses}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-black text-stone-900 dark:text-stone-100">
            {title}
          </h3>
          <p className="text-sm text-stone-500 dark:text-stone-400 font-mono">
            {titleEn}
          </p>
        </div>
      </div>
      
      <p className="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300">
            <CheckSquare className="w-4 h-4 text-brand-500 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="flex gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          مشاهده
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-sm font-medium transition-colors"
        >
          <GitBranch className="w-4 h-4" />
          کد
        </a>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700/50">
      <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">
        {title}
      </h3>
      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default App
