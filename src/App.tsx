import { useState, useEffect } from 'react'
import { 
  ExternalLink, 
  GitBranch, 
  CheckSquare, 
  Type,
  Palette,
  Sun,
  Moon,
  Folder,
  File,
  ChevronRight,
  Terminal,
  Search,
  Settings,
  MoreHorizontal,
  Plus,
  Heart,
  X
} from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  const [activeTab, setActiveTab] = useState('app.tsx')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const projects = [
    {
      id: 'virastar',
      name: 'persian-virastar',
      nameFa: 'پرشین ویراستار',
      description: 'ابزار حرفه‌ای ویرایش و نظافت متن فارسی',
      icon: <Type className="w-5 h-5" />,
      href: 'https://virastar.nounproject.ir',
      github: 'https://github.com/derhami/persian-virastar',
      features: ['ویرایش هوشمند متن فارسی', 'اصلاح نیم‌فاصله', 'تبدیل اعداد', 'تحلیل خوانایی']
    },
    {
      id: 'checklist',
      name: 'checklist',
      nameFa: 'چک‌لیست طراحی',
      description: 'مرجع جامع چک‌لیست‌های تخصصی UI/UX',
      icon: <CheckSquare className="w-5 h-5" />,
      href: 'https://checklist.nounproject.ir',
      github: 'https://github.com/derhami/checklist',
      features: ['بیش از ۲۰۰ آیتم تخصصی', 'نمودار راداری', 'گزارش‌گیری PDF', 'سیستم پروژه']
    },
    {
      id: 'tailwind',
      name: 'tailwind-visualizer',
      nameFa: 'ویژوالایزر تیلویند',
      description: 'مرجع بصری تعاملی Tailwind CSS',
      icon: <Palette className="w-5 h-5" />,
      href: 'https://tailwind.nounproject.ir',
      github: 'https://github.com/derhami/tailwind-visualizer',
      features: ['مقايسه بصری کلاس‌ها', 'شبیه‌ساز breakpoint', 'پالت رنگی', 'چت‌شیت']
    }
  ]

  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="min-h-screen bg-app transition-colors duration-150">
      {/* Top Bar - VS Code Style */}
      <div className="bg-sub border-b main-border px-2 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded bg-card main-border main-text text-xs">
            <Folder className="w-3.5 h-3.5" />
            <span>lab.derhami</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded hover-bg transition-colors main-text">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded hover-bg transition-colors main-text">
            <Settings className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 rounded hover-bg transition-colors main-text"
          >
            {isDark ? <Sun className="w-4 h-4 accent-text" /> : <Moon className="w-4 h-4 main-text" />}
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-37px)]">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-12'} bg-card border-l main-border flex flex-col transition-all duration-300`}>
          {sidebarOpen && (
            <>
              <div className="px-3 py-2 text-xs font-semibold muted-text uppercase tracking-wider border-b main-border">
                پروژه‌ها
              </div>
              <div className="flex-1 overflow-y-auto py-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`w-full px-3 py-2 flex items-center gap-2 text-right transition-colors ${
                      selectedProject.id === project.id
                        ? 'bg-accent-light-bg accent-text'
                        : 'hover-bg main-text'
                    }`}
                  >
                    <ChevronRight className="w-3 h-3 shrink-0" />
                    <span className="text-xs truncate">
                      {project.nameFa}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-3 hover-bg transition-colors border-t main-border main-text"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs */}
          <div className="bg-card border-b main-border flex items-center">
            <div className="flex">
              {['app.tsx', 'projects.ts', 'styles.css'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-mono flex items-center gap-2 border-r main-border ${
                    activeTab === tab
                      ? 'bg-app main-text border-b-2 border-b-accent-main'
                      : 'bg-card sub-text hover-bg'
                  } transition-colors`}
                >
                  <File className="w-3.5 h-3.5" />
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-auto bg-app p-4">
            {activeTab === 'app.tsx' ? (
              <div className="font-mono text-xs leading-6 sub-text">
                <div>
                  <span className="text-brand-400">import</span>
                  {' { '}
                  <span className="text-emerald-400">useState</span>
                  {' } '}
                  <span className="text-brand-400">from</span>
                  {' '}
                  <span className="text-amber-300">'react'</span>
                </div>
                
                <div className="my-4" />
                
                <div>
                  <span className="text-brand-400">function</span>
                  {' '}
                  <span className="text-brand-300">Lab</span>
                  {'() {'}
                </div>
                
                <div className="pl-4">
                  <div>
                    <span className="text-brand-400">const</span>
                    {' [project, setProject] = '}
                    <span className="text-brand-400">useState</span>
                    {'('}
                    <span className="text-amber-300">'virastar'</span>
                    {')'}
                  </div>
                  
                  <div className="my-2" />
                  
                  <div className="text-stone-500 italic">
                    {'// لابراتوار پروژه‌های درهمی'}
                  </div>
                  <div className="text-stone-500 italic">
                    {'// مجموعه ابزارهای حرفه‌ای وب فارسی'}
                  </div>
                  
                  <div className="my-2" />
                  
                  <div>
                    <span className="text-brand-400">return</span>
                    {' ('}
                  </div>
                  
                  <div className="pl-4">
                    <div className="text-stone-400">
                      &lt;<span className="text-brand-400">div</span> <span className="text-rose-300">className</span>=<span className="text-amber-300">"lab-container"</span>&gt;
                    </div>
                    <div className="pl-4">
                      <div className="text-stone-400">&lt;<span className="text-brand-400">Header</span> /&gt;</div>
                      <div className="text-stone-400">&lt;<span className="text-brand-400">ProjectCard</span> <span className="text-rose-300">project</span>=<span className="text-stone-400">{'{'}</span>project<span className="text-stone-400">{'}'}</span> /&gt;</div>
                      <div className="text-stone-400">&lt;<span className="text-brand-400">Features</span> <span className="text-rose-300">items</span>=<span className="text-stone-400">{'{'}</span>project.features<span className="text-stone-400">{'}'}</span> /&gt;</div>
                    </div>
                    <div className="text-stone-400">&lt;/<span className="text-brand-400">div</span>&gt;</div>
                  </div>
                  
                  <div>{')'}</div>
                </div>
                
                <div>{'}'}</div>
              </div>
            ) : activeTab === 'projects.ts' ? (
              <div className="font-mono text-xs leading-6 sub-text">
                <div>
                  <span className="text-brand-400">export</span>
                  {' '}
                  <span className="text-brand-400">const</span>
                  {' '}
                  <span className="text-emerald-400">projects</span>
                  {' = ['}
                </div>
                
                {projects.map((project, index) => (
                  <div key={project.id} className="pl-4">
                    <div>{'  {'}</div>
                    <div className="pl-4">
                      <div><span className="text-rose-300">id</span><span className="text-stone-400">: </span><span className="text-amber-300">'{project.id}'</span></div>
                      <div><span className="text-rose-300">name</span><span className="text-stone-400">: </span><span className="text-amber-300">'{project.nameFa}'</span></div>
                      <div><span className="text-rose-300">url</span><span className="text-stone-400">: </span><span className="text-amber-300">'{project.href}'</span></div>
                    </div>
                    <div>{'  }'}</div>
                    {index < projects.length - 1 && <div>,</div>}
                  </div>
                ))}
                
                <div>{']'}</div>
              </div>
            ) : (
              <div className="font-mono text-xs leading-6 sub-text">
                <div>
                  <span className="text-brand-400">@import</span>
                  {' '}
                  <span className="text-amber-300">"tailwindcss"</span>
                  {';'}
                </div>
                
                <div className="my-4" />
                
                <div>
                  <span className="text-brand-400">@font-face</span>
                  {' {'}
                </div>
                <div className="pl-4">
                  <div><span className="text-rose-300">font-family</span><span className="text-stone-400">: </span><span className="text-amber-300">'IRANYekanX'</span><span className="text-stone-400">;</span></div>
                  <div><span className="text-rose-300">src</span><span className="text-stone-400">: </span><span className="text-amber-300">url('/fonts/IRANYekanXVF.woff2')</span><span className="text-stone-400">;</span></div>
                </div>
                <div>{'}'}</div>
                
                <div className="my-4" />
                
                <div className="text-stone-500 italic">{'/* Derhami Design System */'}</div>
                <div>
                  <span className="text-brand-400">@theme</span>
                  {' {'}
                </div>
                <div className="pl-4">
                  <div><span className="text-rose-300">--color-brand</span><span className="text-stone-400">: </span><span className="text-emerald-400">#1D2EA0</span><span className="text-stone-400">;</span></div>
                </div>
                <div>{'}'}</div>
              </div>
            )}
          </div>

          {/* Terminal */}
          <div className="bg-card border-t main-border h-32 overflow-auto">
            <div className="px-4 py-2 bg-sub border-b main-border flex items-center justify-between">
              <div className="flex items-center gap-2 main-text">
                <Terminal className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">Terminal</span>
              </div>
              <button className="p-1 rounded hover-bg">
                <Plus className="w-3.5 h-3.5 main-text" />
              </button>
            </div>
            <div className="p-4 font-mono text-xs">
              <div>
                <span className="text-brand-400">$</span>
                {' npm run build'}
              </div>
              <div className="text-emerald-400">
                {'✓ Built in 2.34s'}
              </div>
              <div>
                <span className="text-brand-400">$</span>
                {' npm run deploy'}
              </div>
              <div className="text-brand-300">
                {'🚀 Deployed to https://nounproject.ir'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-80 bg-card border-l main-border flex flex-col hidden lg:flex">
          <div className="px-4 py-3 bg-card border-b main-border">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold main-text">جزئیات پروژه</span>
              <button className="p-1 rounded hover-bg">
                <X className="w-3.5 h-3.5 main-text" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-sub accent-text">
                {selectedProject.icon}
              </div>
              <div>
                <h3 className="font-bold main-text">
                  {selectedProject.nameFa}
                </h3>
                <p className="text-xs muted-text">
                  {selectedProject.name}
                </p>
              </div>
            </div>
            
            <p className="text-xs mb-4 sub-text">
              {selectedProject.description}
            </p>
            
            <div className="mb-4">
              <h4 className="text-xs font-semibold mb-2 main-text">
                امکانات
              </h4>
              <ul className="space-y-1">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="text-xs sub-text flex items-center gap-2">
                    <CheckSquare className="w-3 h-3 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-2">
              <a
                href={selectedProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-accent-bg text-white text-xs font-bold hover:bg-accent-hover transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                مشاهده
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-sub hover-bg sub-text text-xs font-medium transition-colors main-border"
              >
                <GitBranch className="w-3.5 h-3.5" />
                کد
              </a>
            </div>
          </div>
          
          <div className="px-4 py-3 bg-card border-t main-border">
            <div className="flex items-center justify-between">
              <span className="text-xs muted-text">
                لابراتوار درهمی © {new Date().getFullYear()}
              </span>
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-rose-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
