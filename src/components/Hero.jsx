export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 120, paddingBottom: 100 }}>
      <div className="wrap">
        <p
          className="muted"
          style={{ fontSize: '0.95rem', marginBottom: 18 }}
        >
          Full Stack Developer
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 3.6rem)',
            lineHeight: 1.12,
            letterSpacing: '-0.01em',
          }}
        >
          I build web apps
          <br />
          with PHP, Django and React,
          <br />
          end to end.
        </h1>

        <p
          className="muted"
          style={{ marginTop: 26, fontSize: '1.05rem' }}
        >
          I'm Subanesh S K, a Full Stack Developer with 1.5 years of
          professional experience in PHP and CodeIgniter, along with
          hands-on experience in Python, Django, React, MySQL, JavaScript,
          jQuery, and AJAX.
        </p>

        <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
          <a href="#projects" className="btn btn-solid">
            See my work
          </a>

          <a href="#contact" className="btn">
            Get in touch
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 18,
            marginTop: 30,
            fontSize: '0.88rem',
          }}
        >
          <a
            href="https://github.com/Subaneshsuba"
            className="muted"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suba-dev/"
            className="muted"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://subaneshsuba.com"
            className="muted"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noreferrer"
          >
            subaneshsuba.com
          </a>
        </div>
      </div>
    </section>
  );
}