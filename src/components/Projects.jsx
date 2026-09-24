const projects = [
  {
    year: '',
    title: 'Ecommerce website',
    description:
      'A dynamic e-commerce site with login/logout authentication, add-to-cart, remove-from-cart, and wishlist features. Integrated Razorpay for payments, with a responsive Bootstrap/CSS interface and an admin panel for product and order management.',
    stack: 'Django · JavaScript · MySQL',
    link: 'https://github.com/Subaneshsuba/Django_Ecommerce_website',
  },
  {
    year: '',
    title: 'Tourist destination REST API (CRUD)',
    description:
      'A CRUD web application for managing tourist destination data, with full login/logout auth and create, read, update, delete operations. Responsive frontend with an admin panel for content management.',
    stack: 'Django REST Framework · MySQL · JavaScript',
    link: 'https://github.com/Subaneshsuba/Tourist_Destination',
  },
  {
    year: '',
    title: 'React user management app',
    description:
      'A user management CRUD application built with ReactJS and a JSON REST API — create, view, edit, and delete users dynamically, with a clean, component-based, responsive UI.',
    stack: 'React JS · REST API · Bootstrap',
    link: 'https://github.com/Subaneshsuba/React-CRUD-Project',
  },
  {
    year: '',
    title: 'React calculator app',
    description:
      'A responsive calculator with real-time calculation updates, built with a focus on component reusability and clean state management.',
    stack: 'React JS · CSS',
    link: 'https://github.com/Subaneshsuba/React_Calculator-App',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2 style={{ fontSize: '1.7rem', marginBottom: 40 }}>Selected work</h2>
        <div>
          {projects.map((p, i) => (
            <div key={p.title}>
              <a
                href={p.link}
                style={{
                  display: 'flex',
                  gap: 24,
                  padding: '26px 0',
                  textDecoration: 'none',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ flex: 1, minWidth: 220 }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: 8 }}>{p.title}</h3>
                  <p className="muted" style={{ fontSize: '0.95rem' }}>{p.description}</p>
                  <p style={{ marginTop: 10, fontSize: '0.82rem', color: 'var(--amber)' }}>
                    {p.stack}
                  </p>
                </div>
              </a>
              {i < projects.length - 1 && <hr className="rule" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
