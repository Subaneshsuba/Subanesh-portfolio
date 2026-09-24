const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'rgba(18,21,27,0.9)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <nav
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.1rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Subanesh S K
        </a>
        <div style={{ display: 'flex', gap: 28 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="muted"
              style={{ textDecoration: 'none', fontSize: '0.92rem' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
