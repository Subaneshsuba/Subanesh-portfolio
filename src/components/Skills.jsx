const groups = [
  {
    title: 'Programming languages',
    items: ['PHP', 'Python', 'JavaScript (ES6+)'],
  },
  {
    title: 'Frameworks',
    items: ['CodeIgniter', 'Django', 'Django REST API', 'React JS', 'Bootstrap'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3'],
  },
  {
    title: 'MS Office',
    items: ['Word', 'Excel', 'PowerPoint'],
  },
  {
    title: 'Version Control & Dev Tools',
    items: ['Git', 'GitHub',' Visual Studio Code (VS Code)', 'Webpack', 'NPM', 'Yarn', 'ESLINT', 'Prettier'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2 style={{ fontSize: '1.7rem', marginBottom: 40 }}>What I work with</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 32,
          }}
        >
          {groups.map((g) => (
            <div key={g.title}>
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'var(--sans)',
                  fontWeight: 600,
                  color: 'var(--teal)',
                  marginBottom: 12,
                }}
              >
                {g.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="muted"
                    style={{ padding: '6px 0', fontSize: '0.95rem' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
