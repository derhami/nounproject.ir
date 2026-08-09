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

  const bgClass = isDark ? 'bg-[#1e1e1e]' : 'bg-[#f5f5f5]'
  const topBarBg = isDark ? 'bg-[#323233]' : 'bg-[#e8e8e8]'
  const borderColor = isDark ? 'border-[#3c3c3c]' : 'border-[#d4d4d4]'
  const textClass = isDark ? 'text-[#cccccc]' : 'text-[#333333]'
  const textMuted = isDark ? 'text-[#808080]' : 'text-[#666666]'
  const textBright = isDark ? 'text-[#ffffff]' : 'text-[#000000]'
  const sidebarBg = isDark ? 'bg-[#252526]' : 'bg-[#f3f3f3]'
  const editorBg = isDark ? 'bg-[#1e1e1e]' : 'bg-[#ffffff]'
  const hoverBg = isDark ? 'hover:bg-[#4a4a4a]' : 'hover:bg-[#d4d4d4]'
  const selectedBg = isDark ? 'bg-[#04395e]' : 'bg-[#d6e7f5]'
  const hoverBgSidebar = isDark ? 'hover:bg-[#2a2d2e]' : 'hover:bg-[#e8e8e8]'

  const codeColors = {
    keyword: isDark ? 'text-[#569cd6]' : 'text-[#0000ff]',
    string: isDark ? 'text-[#ce9178]' : 'text-[#a31515]',
    comment: isDark ? 'text-[#6a9955]' : 'text-[#008000]',
    variable: isDark ? 'text-[#9cdcfe]' : 'text-[#001080]',
    type: isDark ? 'text-[#4ec9b0]' : 'text-[#2b91af]',
    function: isDark ? 'text-[#dcdcaa]' : 'text-[#795e26]',
    punctuation: isDark ? 'text-[#808080]' : 'text-[#000000]',
    number: isDark ? 'text-[#b5cea8]' : 'text-[#098658]'
  }

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Top Bar */}
      <div className={`${topBarBg} border-b ${borderColor} px-2 py-1 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className={`flex items-center gap-1 px-3 py-1 rounded ${sidebarBg} ${textClass} text-xs`}>
            <Folder className="w-3.5 h-3.5" />
            <span>lab.derhami</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button className={`p-1.5 rounded ${hoverBg} transition-colors`}>
            <Search className={`w-4 h-4 ${textClass}`} />
          </button>
          <button className={`p-1.5 rounded ${hoverBg} transition-colors`}>
            <Settings className={`w-4 h-4 ${textClass}`} />
          </button>
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-1.5 rounded ${hoverBg} transition-colors`}
          >
            {isDark ? <Sun className={`w-4 h-4 ${textClass}`} /> : <Moon className={`w-4 h-4 ${textClass}`} />}
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-37px)]">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-12'} ${sidebarBg} border-l ${borderColor} flex flex-col transition-all duration-300`}>
          {sidebarOpen && (
            <>
              <div className={`px-3 py-2 text-xs font-semibold ${textMuted} uppercase tracking-wider border-b ${borderColor}`}>
                پروژه‌ها
              </div>
              <div className="flex-1 overflow-y-auto py-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`w-full px-3 py-2 flex items-center gap-2 text-right transition-colors ${
                      selectedProject.id === project.id
                        ? selectedBg
                        : hoverBgSidebar
                    }`}
                  >
                    <ChevronRight className={`w-3 h-3 ${textClass} shrink-0`} />
                    <span className={`text-xs ${textClass} truncate`}>
                      {project.nameFa}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-3 ${hoverBgSidebar} transition-colors border-t ${borderColor}`}
          >
            <MoreHorizontal className={`w-4 h-4 ${textClass}`} />
          </button>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs */}
          <div className={`${sidebarBg} border-b ${borderColor} flex items-center`}>
            <div className="flex">
              {['app.tsx', 'projects.ts', 'styles.css'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-mono flex items-center gap-2 border-r ${
                    activeTab === tab
                      ? `${editorBg} ${textBright} border-[#007acc]`
                      : `${sidebarBg} ${textClass} ${borderColor}`
                  } transition-colors`}
                >
                  <File className="w-3.5 h-3.5" />
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Code Editor */}
          <div className={`flex-1 overflow-auto ${editorBg} p-4`}>
            {activeTab === 'app.tsx' ? (
              <div className="font-mono text-xs leading-6">
                <div className={codeColors.keyword}>
                  <span className={codeColors.keyword}>import</span>
                  {' { '}
                  <span className={codeColors.type}>useState</span>
                  {' } '}
                  <span className={codeColors.keyword}>from</span>
                  {' '}
                  <span className={codeColors.string}>'react'</span>
                </div>
                
                <div className="my-4" />
                
                <div className={codeColors.keyword}>
                  <span className={codeColors.keyword}>function</span>
                  {' '}
                  <span className={codeColors.function}>Lab</span>
                  {'() {'}
                </div>
                
                <div className="pl-4">
                  <div className={codeColors.keyword}>
                    <span className={codeColors.keyword}>const</span>
                    {' [project, setProject] = '}
                    <span className={codeColors.keyword}>useState</span>
                    {'('}
                    <span className={codeColors.string}>'virastar'</span>
                    {')'}
                  </div>
                  
                  <div className="my-2" />
                  
                  <div className={codeColors.comment}>
                    {'// لابراتوار پروژه‌های درهمی'}
                  </div>
                  <div className={codeColors.comment}>
                    {'// مجموعه ابزارهای حرفه‌ای وب فارسی'}
                  </div>
                  
                  <div className="my-2" />
                  
                  <div className={codeColors.keyword}>
                    <span className={codeColors.keyword}>return</span>
                    {' ('}
                  </div>
                  
                  <div className="pl-4">
                    <div className={codeColors.punctuation}>
                      &lt;<span className={codeColors.keyword}>div</span> <span className={codeColors.variable}>className</span>=<span className={codeColors.string}>"lab-container"</span>&gt;
                    </div>
                    <div className="pl-4">
                      <div className={codeColors.punctuation}>
                        &lt;<span className={codeColors.keyword}>Header</span> /&gt;
                      </div>
                      <div className={codeColors.punctuation}>
                        &lt;<span className={codeColors.keyword}>ProjectCard</span> <span className={codeColors.variable}>project</span>=<span className={codeColors.punctuation}>{'{'}</span>project<span className={codeColors.punctuation}>{'}'}</span> /&gt;
                      </div>
                      <div className={codeColors.punctuation}>
                        &lt;<span className={codeColors.keyword}>Features</span> <span className={codeColors.variable}>items</span>=<span className={codeColors.punctuation}>{'{'}</span>project.features<span className={codeColors.punctuation}>{'}'}</span> /&gt;
                      </div>
                    </div>
                    <div className={codeColors.punctuation}>
                      &lt;/<span className={codeColors.keyword}>div</span>&gt;
                    </div>
                  </div>
                  
                  <div>{')'}</div>
                </div>
                
                <div>{'}'}</div>
              </div>
            ) : activeTab === 'projects.ts' ? (
              <div className="font-mono text-xs leading-6">
                <div className={codeColors.keyword}>
                  <span className={codeColors.keyword}>export</span>
                  {' '}
                  <span className={codeColors.keyword}>const</span>
                  {' '}
                  <span className={codeColors.type}>projects</span>
                  {' = ['}
                </div>
                
                {projects.map((project, index) => (
                  <div key={project.id} className="pl-4">
                    <div>{'  {'}</div>
                    <div className="pl-4">
                      <div><span className={codeColors.variable}>id</span><span className={codeColors.punctuation}>: </span><span className={codeColors.string}>'{project.id}'</span></div>
                      <div><span className={codeColors.variable}>name</span><span className={codeColors.punctuation}>: </span><span className={codeColors.string}>'{project.nameFa}'</span></div>
                      <div><span className={codeColors.variable}>url</span><span className={codeColors.punctuation}>: </span><span className={codeColors.string}>'{project.href}'</span></div>
                    </div>
                    <div>{'  }'}</div>
                    {index < projects.length - 1 && <div>,</div>}
                  </div>
                ))}
                
                <div>{']'}</div>
              </div>
            ) : (
              <div className="font-mono text-xs leading-6">
                <div className={codeColors.keyword}>
                  <span className={codeColors.keyword}>@import</span>
                  {' '}
                  <span className={codeColors.string}>"tailwindcss"</span>
                  {';'}
                </div>
                
                <div className="my-4" />
                
                <div className={codeColors.keyword}>
                  <span className={codeColors.keyword}>@font-face</span>
                  {' {'}
                </div>
                <div className="pl-4">
                  <div><span className={codeColors.variable}>font-family</span><span className={codeColors.punctuation}>: </span><span className={codeColors.string}>'IRANYekanX'</span><span className={codeColors.punctuation}>;</span></div>
                  <div><span className={codeColors.variable}>src</span><span className={codeColors.punctuation}>: </span><span className={codeColors.string}>url('/fonts/IRANYekanXVF.woff2')</span><span className={codeColors.punctuation}>;</span></div>
                </div>
                <div>{'}'}</div>
                
                <div className="my-4" />
                
                <div className={codeColors.comment}>{'/* Derhami Design System */'}</div>
                <div className={codeColors.keyword}>
                  <span className={codeColors.keyword}>@theme</span>
                  {' {'}
                </div>
                <div className="pl-4">
                  <div><span className={codeColors.variable}>--color-brand</span><span className={codeColors.punctuation}>: </span><span className={codeColors.number}>#1D2EA0</span><span className={codeColors.punctuation}>;</span></div>
                </div>
                <div>{'}'}</div>
              </div>
            )}
          </div>

          {/* Terminal */}
          <div className={`${editorBg} border-t ${borderColor} h-32 overflow-auto`}>
            <div className={`px-4 py-2 ${sidebarBg} border-b ${borderColor} flex items-center justify-between`}>
              <div className="flex items-center gap-2">
                <Terminal className={`w-3.5 h-3.5 ${textClass}`} />
                <span className={`text-xs font-semibold ${textClass}`}>Terminal</span>
              </div>
              <button className={`p-1 rounded ${hoverBg}`}>
                <Plus className={`w-3.5 h-3.5 ${textClass}`} />
              </button>
            </div>
            <div className="p-4 font-mono text-xs">
              <div className={codeColors.comment}>
                <span className={codeColors.keyword}>$</span>
                {' npm run build'}
              </div>
              <div className={textClass}>
                {'✓ Built in 2.34s'}
              </div>
              <div className={codeColors.comment}>
                <span className={codeColors.keyword}>$</span>
                {' npm run deploy'}
              </div>
              <div className={textClass}>
                {'🚀 Deployed to https://nounproject.ir'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className={`w-80 ${sidebarBg} border-l ${borderColor} flex flex-col hidden lg:flex`}>
          <div className={`px-4 py-3 ${sidebarBg} border-b ${borderColor}`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold ${textClass}`}>جزئیات پروژه</span>
              <button className={`p-1 rounded ${hoverBg}`}>
                <X className={`w-3.5 h-3.5 ${textClass}`} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${editorBg} ${codeColors.keyword}`}>
                {selectedProject.icon}
              </div>
              <div>
                <h3 className={`font-bold ${textBright}`}>
                  {selectedProject.nameFa}
                </h3>
                <p className={`text-xs ${textMuted}`}>
                  {selectedProject.name}
                </p>
              </div>
            </div>
            
            <p className={`text-xs mb-4 ${textClass}`}>
              {selectedProject.description}
            </p>
            
            <div className="mb-4">
              <h4 className={`text-xs font-semibold mb-2 ${textClass}`}>
                امکانات
              </h4>
              <ul className="space-y-1">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className={`text-xs ${textClass} flex items-center gap-2`}>
                    <CheckSquare className={`w-3 h-3 ${codeColors.type}`} />
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#007acc] hover:bg-[#0098ff] text-white text-xs font-bold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                مشاهده
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded ${sidebarBg} ${hoverBg} ${textClass} text-xs font-medium transition-colors`}
              >
                <GitBranch className="w-3.5 h-3.5" />
                کد
              </a>
            </div>
          </div>
          
          <div className={`px-4 py-3 ${sidebarBg} border-t ${borderColor}`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs ${textMuted}`}>
                لابراتوار درهمی © {new Date().getFullYear()}
              </span>
              <div className="flex items-center gap-1">
                <Heart className={`w-3 h-3 ${isDark ? 'text-[#f44747]' : 'text-[#e51400]'}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
