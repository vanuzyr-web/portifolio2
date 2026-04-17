// src/App.jsx
import { useState, useEffect } from 'react';

import projt from './assets/projt.jpeg';
import perfil from './assets/perfil.jpeg';
import ProjectCard from './assets/components/ProjectCard';
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  // Atualiza o ano no footer dinamicamente
  useEffect(() => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simulação de envio (aqui você pode integrar com uma API real)
    if (name && email && message) {
      setFormStatus({ type: 'success', message: '✅ Mensagem enviada com sucesso! Em breve retornarei o contato.' });
      form.reset();
    } else {
      setFormStatus({ type: 'error', message: '❌ Por favor, preencha todos os campos.' });
    }

    // Limpa a mensagem de status após 5 segundos
    setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="logo">Portfólio</a>
          <nav className={`nav ${menuOpen ? 'active' : ''}`} id="nav">
            <a href="#projetos" onClick={() => setMenuOpen(false)}>Meus Projetos</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
          <button onClick={toggleMenu} className="menu-btn" aria-label="Menu">☰</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>Vanuzy Vencao Rodrigues</h1>
              <p>Desenvolvedora em formação TSI</p>
              <a className="btn" href="#contato">Fale comigo</a>
            </div>
            <div className="hero-image">
              <img src={perfil} alt="Vanuzy" />
            </div>
          </div>
        </section>

        <section id="projetos" className="projects container">
          <h2>Meus Projetos</h2>
          <div className="project-list">
            <ProjectCard
              image={projt}
              title="Em andamento"
              description="Sem código no momento"
              projectLink="https://github.com/vanuzyr-web/portifolio"
              codeLink="https://github.com/vanuzyr-web/portifolio"
            />
            {/* Adicione mais ProjectCard aqui conforme necessário */}
          </div>
        </section>

        <section id="sobre" className="about container">
          <h2>Sobre Mim</h2>
          <div className="about-grid">
            <img className="about-photo" src={perfil} alt="Vanuzy" />
            <div>
              <p>Sou estudante de Tecnologia em Sistemas para Internet (Polo Santa Cruz dos Milagres-PI) e tenho formação em Recursos Humanos.</p>
              <ul>
                <li>HTML, CSS, JS</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" className="contact container">
          <h2>📬 Vamos conversar</h2>
          <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input type="text" name="name" placeholder="Seu nome" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="seu@email.com" required />
            </label>
            <label>
              Mensagem
              <textarea name="message" rows="4" placeholder="Sua mensagem..." required />
            </label>
            <button type="submit" className="btn">📨 Enviar mensagem</button>
            {formStatus.message && (
              <p className={`form-status ${formStatus.type}`}>{formStatus.message}</p>
            )}
          </form>
          <div className="contact-info">
            <p>📧 Vanuzyr@gmail.com</p>
            <p>
              <a href="https://github.com/vanuzyr-web/portifolio" target="_blank" rel="noopener noreferrer">
                github.com/Vanuzyr
              </a>
            </p>
            <p>
              <a href="https://wa.me/558899161616?text=Olá%20Vanuzy!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer">
                WhatsApp: +55 89 9916-1616
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© <span id="year"></span> Vanuzy Vencao Rodrigues</p>
        </div>
      </footer>
    </>
  );
}

export default App;