import './styles/App.css';
import { faBars, faClose, faEnvelope, faUserTie, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import profilepic from './media/photo.jpeg'
import java_icon from './media/java.svg';
import react_icon from './media/react.svg';
import sql_icon from './media/sql.svg';
import html_icon from './media/html.svg';
import css_icon from './media/css.svg';
import Slider from './components/Slider';

function App() {

  const [togle, setTogle] = useState(true);

  return (
    <div className="App">
      <header>
      
          <a href='/' className="neon-logo">IvanChavez.dev</a>
          
          <ul className='menu-cont'>
            <li><a href="#experiencia">Experiencia</a></li>
            <li className='submenu-container'><a href="#proyectos">Proyectos</a>
            </li>
            <li className='submenu-container'><a href="#sobre-mi">Sobre mi</a>
            </li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

          { togle ? (
              <button className='toggle-container' name='menu-boton' onClick={() => { setTogle(false)}}>
                  <FontAwesomeIcon icon={faBars} size='2x'/>
              </button>
          ) : (
              <>
              <button className='toggle-container' name='menu-boton' onClick={() => { setTogle(true)}}> 
                  <FontAwesomeIcon icon={faClose} size='2x' />
              </button>
              <ul className='menu-container'>
                <li><a href="#experiencia">Experiencia</a></li>
                <li className='submenu-container'><a href="#proyectos">Proyectos</a>
                </li>
                <li className='submenu-container'><a href="#sobre-mi">Sobre mi</a>
                </li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
              </>
          )}
        </header>
      <main>
        <section id='contacto' className='contacto-container'>
          <img class="img-cv" src={profilepic} alt="FotoCv"></img>
          <h1>Ivan Dario Chavez Vargas</h1>
          <span>Desarrollo Web en Java y React</span>
          <div className='links-container'>
            <a href='https://www.linkedin.com/in/ivan-chavez-vargas-software-developer/'>
              <FontAwesomeIcon icon={faLinkedin} className='icon-links'/>
              Linkedin
            </a>
            <a href='https://github.com/idchavez'>
              <FontAwesomeIcon icon={faGithub} className='icon-links'/>
              Github
            </a>
            <a href='mailto:ivan971325@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} className='icon-links'/>
              ivan971325@gmail.com
            </a>
          </div>
        </section>
        
        <section id='sobre-mi' className='sobre-mi-container'>
          <article>
            <h2>
              <FontAwesomeIcon icon={faUserTie} className='iconos-secciones' />
              Ingeniero de sistemas
            </h2>
            <p>
              Enfocado en desarrollo de software con Java-Spring y Javascript-React.
              <br/>
              Experiencia en proyectos personales y académicos enfocados en la construcción de aplicaciones web.
            </p>
          </article>
        </section>

        <section id='experiencia' className='experiencia-container'>
          <h2>
            <FontAwesomeIcon icon={faCode} className='iconos-secciones' />
            Tecnologías
          </h2>
          <div className='tecnologias-container'>
            <span><img src={java_icon} alt='java'/>Java</span>
            <span><img src={react_icon} alt='react'/>React</span>
            <span><img src={sql_icon} alt='sql'/>Sql</span>
            <span><img src={html_icon} alt='html'/>Html</span>
            <span><img src={css_icon} alt='css'/>Css</span>
          </div>
        </section>

        <section id='proyectos' className='proyectos-container'>
          <h2>
            <FontAwesomeIcon icon={faBriefcase} className='iconos-secciones' />
            Proyectos
            </h2>
          <span>Proyectos en los que trabajo actualmente</span>
          <Slider/>
        </section>
      </main>
    </div>
  );
}

export default App;
