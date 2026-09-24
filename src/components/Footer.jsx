export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '28px 0' }}>
      <div
        className="wrap"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span className="muted" style={{ fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Subanesh S K
        </span>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          <a href="https://github.com/Subaneshsuba" className="muted" style={{ fontSize: '0.85rem', textDecoration: 'none' }}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/Subaneshsuba" className="muted" style={{ fontSize: '0.85rem', textDecoration: 'none' }}>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/invites/contact/?utm_content=c0rk0g7&stkn=u247oly2b64m" className="muted" style={{ fontSize: '0.85rem', textDecoration: 'none' }}>
            Instagram
          </a>
          <a href="https://www.facebook.com/share/19c7JyD2wc/" className="muted" style={{ fontSize: '0.85rem', textDecoration: 'none' }}>
            Facebook
          </a>
          
           <a href="https://wa.me/919042190886"
            target="_blank"
            rel="noopener noreferrer"
            className="muted"
            style={{ fontSize: '0.85rem', textDecoration: 'none' }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}