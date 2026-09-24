export default function About() {
  return (
    <section id="about">
      <div className="wrap" style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
        <img
          src="/profile.jpg"
          alt="Subanesh S K"
          style={{
            width: 148,
            height: 240,
            borderRadius: '3px',
            objectFit: 'cover',
            border: '1px solid var(--line)',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 260 }}>
          <h2 style={{ fontSize: '1.7rem', marginBottom: 18 }}>About</h2>
          <p className="muted">
            I'm a full stack developer currently working at Shadobooks ERP
            Solution, a product-based company, where I build accounting and
            financial modules using PHP and CodeIgniter. I also have a strong
            foundation in Python and Django from my personal projects and
            internships.
          </p>
          <p className="muted" style={{ marginTop: 14 }}>
            I care about clean, maintainable code and enjoy working close to
            real business logic — invoicing, ledgers, reconciliation — where
            correctness actually matters. I hold a Bachelor of Computer
            Science from Pioneer Kumaraswamy College, Nagercoil (2021–2024,
            CGPA 7.8), and I'm always looking to grow in a team that values
            innovation, collaboration, and continuous learning.
          </p>
          <p style={{ marginTop: 20, fontSize: '0.9rem' }}>
            Languages: Tamil (native), English (professional), Malayalam (fluent)
          </p>
        </div>
      </div>
    </section>
  )
}