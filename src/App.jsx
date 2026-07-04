import './App.css'

const navItems = [
  ['#hero', 'Origin'],
  ['#about', 'About'],
  ['#features', 'Systems'],
  ['#data', 'Data'],
  ['#contact', 'Contact'],
]

const features = [
  {
    title: 'Wave Synthesis',
    icon: 'wave',
    body: 'Real-time generation of multi-layered waveforms through algorithmic interpolation and frequency modulation.',
  },
  {
    title: 'Field Mapping',
    icon: 'target',
    body: 'Spatial noise fields projected onto coordinate grids, creating depth and dimension in two-dimensional space.',
  },
  {
    title: 'Data Flow',
    icon: 'chart',
    body: 'Continuous stream processing that transforms raw input into structured visual output at microsecond precision.',
  },
  {
    title: 'Grid Logic',
    icon: 'grid',
    body: 'Underlying structural framework that provides spatial coherence and proportional balance across all compositions.',
  },
  {
    title: 'Entropy Engine',
    icon: 'entropy',
    body: 'Controlled randomness injected at key intervals ensures organic variation while maintaining structural integrity.',
  },
  {
    title: 'Phase Shift',
    icon: 'phase',
    body: 'Dynamic phase manipulation that creates visual rhythm and temporal depth across continuous wave streams.',
  },
]

const tickerItems = [
  'Wave Synthesis',
  'Perlin Noise',
  'Field Mapping',
  'Entropy Engine',
  'Phase Shift',
  'Grid Logic',
  'Data Flow',
  'Generative',
  'Abstract',
  'Monochrome',
]

const dataBarHeights = [
  40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 50, 75, 100, 65, 88, 42, 78, 56,
  92, 48,
]

function Logo() {
  return (
    <div className="logo" aria-label="Waveform">
      <span className="logo-mark" aria-hidden="true" />
      WAVEFORM
    </div>
  )
}

function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <Logo />
      <ul className="nav-links">
        {navItems.map(([href, label]) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function HeroWaves() {
  return (
    <div className="wave-container" aria-hidden="true">
      <div className="wave-layer">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M0,400 C200,300 400,500 720,400 C1040,300 1240,500 1440,400" />
          <path d="M0,420 C240,320 480,520 720,420 C960,320 1200,520 1440,420" />
        </svg>
      </div>
      <div className="wave-layer">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M0,350 C360,250 540,500 720,380 C900,260 1080,480 1440,350" />
          <path d="M0,370 C300,270 600,500 720,390 C840,280 1140,480 1440,370" />
        </svg>
      </div>
      <div className="wave-layer">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M0,450 C180,350 360,550 720,430 C1080,310 1260,530 1440,430" />
        </svg>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" aria-hidden="true" />
      <HeroWaves />

      <span className="side-text side-text-left">System V.2026 - Active</span>
      <span className="side-text side-text-right">Frequency - 432Hz</span>

      <div className="hero-content">
        <p className="hero-tag">Abstract Wave Technology / 2026</p>
        <h1 className="hero-title">
          BEYOND
          <br />
          THE WAVE
        </h1>
        <p className="hero-sub">
          Infinite lines converge at the intersection of data and form. A
          generative system that transforms noise into structure, chaos into
          rhythm.
        </p>
        <a href="#about" className="hero-cta">
          Explore System <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

function WaveDivider() {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path
          d="M0,100 Q360,20 720,100 T1440,100 L1440,200 L0,200 Z"
          className="divider-fill"
        />
        <path d="M0,120 Q360,50 720,120 T1440,120" className="divider-line" />
        <path d="M0,110 Q360,40 720,110 T1440,110" className="divider-line thin" />
      </svg>
    </div>
  )
}

function WaveArt() {
  const lines = [
    [240, 6],
    [220, 7],
    [260, 8],
    [200, 9],
    [280, 7.5],
    [180, 10],
    [300, 6.5],
    [160, 8.5],
    [320, 7.2],
  ]

  return (
    <svg className="wave-art" viewBox="0 0 500 480" aria-hidden="true">
      <defs>
        <linearGradient id="fadeLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="30%" stopColor="white" stopOpacity="0.4" />
          <stop offset="70%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="circleClip">
          <circle cx="250" cy="240" r="200" />
        </clipPath>
      </defs>

      <g clipPath="url(#circleClip)">
        {lines.map(([y, duration]) => (
          <path
            key={y}
            d={`M50,${y} C120,${y - 40} 190,${y + 40} 250,${y} C310,${y - 40} 380,${y + 40} 450,${y}`}
            stroke="url(#fadeLine)"
            strokeWidth="0.5"
            fill="none"
          >
            <animate
              attributeName="d"
              dur={`${duration}s`}
              repeatCount="indefinite"
              values={`M50,${y} C120,${y - 40} 190,${y + 40} 250,${y} C310,${y - 40} 380,${y + 40} 450,${y};
                       M50,${y} C120,${y + 40} 190,${y - 40} 250,${y} C310,${y + 40} 380,${y - 40} 450,${y};
                       M50,${y} C120,${y - 40} 190,${y + 40} 250,${y} C310,${y - 40} 380,${y + 40} 450,${y}`}
            />
          </path>
        ))}
      </g>

      <circle cx="250" cy="240" r="200" className="wave-circle" />
      <circle cx="250" cy="240" r="3" className="wave-dot">
        <animate attributeName="r" dur="3s" repeatCount="indefinite" values="2;4;2" />
      </circle>
      <line x1="240" y1="240" x2="245" y2="240" />
      <line x1="255" y1="240" x2="260" y2="240" />
      <line x1="250" y1="230" x2="250" y2="235" />
      <line x1="250" y1="245" x2="250" y2="250" />
    </svg>
  )
}

function About() {
  return (
    <section className="lines-section" id="about">
      <div className="lines-bg-pattern" aria-hidden="true" />
      <div className="abstract-wave-canvas" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
          {Array.from({ length: 11 }, (_, index) => {
            const y = 200 + index * 50
            return (
              <path
                key={y}
                d={`M0,${y} C120,${y - 20} 240,${y + 20} 360,${y} C480,${y - 20} 600,${y + 20} 720,${y} C840,${y - 20} 960,${y + 20} 1080,${y} C1200,${y - 20} 1320,${y + 20} 1440,${y}`}
              />
            )
          })}
        </svg>
      </div>

      <div className="lines-content">
        <div className="lines-left">
          <p className="label">Generative Wave Engine</p>
          <h2>
            Structured
            <br />
            From
            <br />
            Entropy
          </h2>
          <p>
            Each curve is computed from stochastic processes - Perlin noise
            fields mapped to vector space, producing wave patterns that exist
            between order and chaos. No two outputs are identical.
          </p>
          <div className="stat-row">
            <div className="stat-item">
              <span className="num">INF</span>
              <span className="desc">Variations</span>
            </div>
            <div className="stat-item">
              <span className="num">4096</span>
              <span className="desc">Resolution</span>
            </div>
            <div className="stat-item">
              <span className="num">0.01</span>
              <span className="desc">Ms Latency</span>
            </div>
          </div>
        </div>
        <div className="lines-right">
          <WaveArt />
        </div>
      </div>
    </section>
  )
}

function FeatureIcon({ type }) {
  const icons = {
    wave: (
      <>
        <path d="M4,24 Q12,8 24,24 T44,24" />
        <path d="M4,28 Q12,12 24,28 T44,28" opacity="0.5" />
        <path d="M4,32 Q12,16 24,32 T44,32" opacity="0.3" />
      </>
    ),
    target: (
      <>
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="12" />
        <circle cx="24" cy="24" r="6" />
        <line x1="24" y1="6" x2="24" y2="2" />
        <line x1="24" y1="46" x2="24" y2="42" />
        <line x1="6" y1="24" x2="2" y2="24" />
        <line x1="46" y1="24" x2="42" y2="24" />
      </>
    ),
    chart: (
      <>
        <polyline points="4,36 12,20 20,28 28,12 36,24 44,8" />
        <circle cx="44" cy="8" r="2" />
      </>
    ),
    grid: (
      <>
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <line x1="8" y1="24" x2="40" y2="24" />
        <line x1="24" y1="8" x2="24" y2="40" />
        <line x1="8" y1="16" x2="40" y2="16" opacity="0.3" />
        <line x1="8" y1="32" x2="40" y2="32" opacity="0.3" />
        <line x1="16" y1="8" x2="16" y2="40" opacity="0.3" />
        <line x1="32" y1="8" x2="32" y2="40" opacity="0.3" />
      </>
    ),
    entropy: (
      <>
        <path d="M24,4 L24,44" strokeDasharray="2,4" />
        <path d="M4,24 L44,24" strokeDasharray="2,4" />
        <circle cx="24" cy="24" r="8" strokeDasharray="3,3" />
      </>
    ),
    phase: (
      <>
        <path d="M12,36 Q24,4 36,36" />
        <path d="M12,36 L36,36" />
        <line x1="24" y1="4" x2="24" y2="36" strokeDasharray="2,3" />
        <circle cx="24" cy="4" r="2" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {icons[type]}
    </svg>
  )
}

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-header">
        <p className="label">Core Systems</p>
        <h2>
          Architecture
          <br />
          Of Flow
        </h2>
        <p>
          Built on a modular wave-generation framework. Each system operates
          independently yet synchronizes through shared frequency domains.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <article className="feature-card" key={feature.title}>
            <span className="feature-num">{String(index + 1).padStart(2, '0')}</span>
            <div className="feature-icon">
              <FeatureIcon type={feature.icon} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Ticker() {
  const repeated = [...tickerItems, ...tickerItems]

  return (
    <div className="ticker-section" aria-label="Waveform capabilities">
      <div className="ticker-track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <span className="dot" aria-hidden="true">
              {' '}
              *
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

function DataSection() {
  return (
    <section className="data-section" id="data">
      <div className="data-bg-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
          <path d="M0,400 Q360,300 720,400 T1440,400" />
          <path d="M0,380 Q360,280 720,380 T1440,380" />
          <path d="M0,420 Q360,320 720,420 T1440,420" />
        </svg>
      </div>

      <div className="data-content">
        <p className="label">Signal Processing</p>
        <h2>
          Live Frequency
          <br />
          Analysis
        </h2>
        <p>
          Real-time visualization of wave amplitude across the temporal spectrum.
          Each bar represents a discrete frequency band in the synthesis pipeline.
        </p>
        <div className="data-bars" aria-label="Frequency amplitude visualization">
          {dataBarHeights.map((height, index) => (
            <span
              className="data-bar"
              key={`${height}-${index}`}
              style={{ '--bar-height': `${height}%`, '--bar-delay': `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section" id="contact">
      {Array.from({ length: 4 }, (_, index) => (
        <div className="cta-ripple" key={index} aria-hidden="true" />
      ))}

      <div className="cta-content">
        <p className="label">Initialize Sequence</p>
        <h2>
          Begin The
          <br />
          Transmission
        </h2>
        <p>
          Connect to the wave synthesis engine.
          <br />
          Transform data into form, noise into structure.
        </p>
        <button className="cta-btn" type="button">
          Engage System -&gt;
        </button>
      </div>
    </section>
  )
}

function Footer() {
  const columns = [
    ['System', 'Architecture', 'Documentation', 'API Access', 'Changelog'],
    ['Resources', 'Wave Library', 'Noise Maps', 'Templates', 'Export Tools'],
    ['Connect', 'GitHub', 'Discord', 'Twitter/X', 'Contact'],
  ]

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>A generative abstract wave system. Monochrome. Precise. Infinite.</p>
        </div>
        {columns.map(([heading, ...links]) => (
          <div className="footer-col" key={heading}>
            <h4>{heading}</h4>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href="#hero">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 WAVEFORM. All frequencies reserved.</span>
        <span>V.2026.07.04</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WaveDivider />
        <About />
        <Features />
        <Ticker />
        <DataSection />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
