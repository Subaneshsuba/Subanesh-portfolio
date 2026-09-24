const experience = [
  {
    period: 'Present · 1.5 yrs', // TODO: replace with exact start date, e.g. "Mar 2024 – Present"
    role: 'PHP Developer (CodeIgniter)',
    org: 'Shadobooks ERP Solution',
    url: 'https://www.shadobooks.com',
    isProduct: true,
    description:
      'Working at a product-based company building Shadobooks, an ERP accounting software product, using PHP and CodeIgniter across the full stack.',
    bullets: [
      'Built modules for invoicing, ledgers, and financial reporting',
      'Worked on GST/tax calculation and compliance-related features',
      'Developed accounts payable and receivable tracking workflows',
      'Handled bank reconciliation and payment entry features',
      'Maintained and optimized MySQL schemas for financial data',
    ],
  },
]

const internships = [
  {
    period: '5 Nov 2024 – 6 May 2025',
    role: 'Python Full Stack Development Intern',
    org: 'Inmakes Info Tech',
    description: '6-month internship focused on Python full stack web development.',
  },
  {
    period: '20 Feb 2025 – 17 May 2025',
    role: 'Database, FE & SW Tester (Naan Mudhalvan – Asgardia)',
    org: 'Naan Mudhalvan',
    description: 'Training program covering database, frontend, and software testing.',
  },
  {
    period: '3 Jun 2024 – 2 Jul 2024',
    role: 'Full Stack Web Development Intern',
    org: 'AK Info Park',
    description: '1-month internship in full stack web development.',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2 style={{ fontSize: '1.7rem', marginBottom: 40 }}>Experience</h2>

        {experience.map((e, i) => (
          <ExperienceRow key={e.org} item={e} last={i === experience.length - 1 && internships.length === 0} />
        ))}

        {internships.length > 0 && (
          <>
            <h3
              style={{
                fontSize: '0.95rem',
                fontFamily: 'var(--sans)',
                fontWeight: 600,
                color: 'var(--teal)',
                margin: '36px 0 12px',
              }}
            >
              Internships & training
            </h3>
            {internships.map((e, i) => (
              <ExperienceRow key={e.org} item={e} last={i === internships.length - 1} />
            ))}
          </>
        )}
      </div>
    </section>
  )
}

function ExperienceRow({ item, last }) {
  return (
    <div>
      <div style={{ display: 'flex', gap: 24, padding: '20px 0', flexWrap: 'wrap' }}>
        <span className="muted" style={{ fontSize: '0.85rem', width: 170, flexShrink: 0 }}>
          {item.period}
        </span>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>{item.role}</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--amber)', marginBottom: 8 }}>
            {item.url ? (
              
               <a href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                {item.org}
              </a>
            ) : (
              item.org
            )}
            {item.isProduct && (
              <span className="muted" style={{ color: 'var(--paper-dim)' }}> · Product-based company</span>
            )}
          </p>
          <p className="muted" style={{ fontSize: '0.92rem' }}>{item.description}</p>
          {item.bullets && (
            <ul style={{ margin: '10px 0 0', paddingLeft: 18 }}>
              {item.bullets.map((b) => (
                <li key={b} className="muted" style={{ fontSize: '0.9rem', padding: '3px 0' }}>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {!last && <hr className="rule" />}
    </div>
  )
}