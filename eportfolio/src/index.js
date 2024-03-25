import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const images = require.context('./assets', false, /\.(png|jpe?g|svg)$/);

const SocialLink = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" className="about-me__link">
      {icon}
    </a>
  );
};

const NavLink = ({ href, className, children }) => {

  return (
    <li className="nav__link">
      <a href={href} className={`nav__link--anchor link__hover-effect link__hover-effect--blue ${className ? className : ''}`}>
        {children}
      </a>
    </li>
  );
};

const AboutMe = () => {
  return (
    <section id="about-me">
      <nav>
        <div className="personal__logo">Kolby Sarson</div>
        <ul className="nav__link--list">
          <NavLink href="#languages" className="">Languages</NavLink>
          <NavLink href="#projects" className="">Projects</NavLink>
          <NavLink href="mailto:ksarson10@gmail.com" className="nav__link--anchor-primary">Contact</NavLink>
        </ul>
      </nav>

      <div className="flex flex-1">
        <div className="about-me__info row">
          <div className="about-me__info--container">
            <figure className="about-me__picture--mask">
              <img src={images('./me.jpg')} className="about-me__picture" alt="Picture of Me!" />
            </figure>
            <h1 className="about-me__info--title">
              Hey! I'm <span className="text--blue">Kolby Sarson</span>&nbsp;<span className="wave">👋</span>
            </h1>
            <p className="about-me__info--para">
              I'm an <strong className="text--blue">early career software developer</strong> possesing both a BSc and MSc of Computer Science.
              I am currently pursuing career opportunites and am eager to begin the next chapter of my software engineering journey!
            </p>
            <div className="about-me__links">
              <SocialLink href="https://www.linkedin.com/in/sarsonk/" icon={<FaLinkedin />} />
              <SocialLink href="https://www.github.com/ksarson" icon={<FaGithub />} />
              <SocialLink href="mailto:ksarson10@gmail.com" icon={<FaEnvelope />} />
              <SocialLink href="assets/KSarsonResumeWeb.pdf" icon={<FaFilePdf />} />
            </div>
          </div>
          <figure className="about-me__img--container">
            <img src={images('./undraw_code_thinking.svg')} className="about-me__img" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

const Language = ({ src, alt, name }) => {
  return (
    <div className="language">
      <figure className="language__img__wrapper">
        <img src={images(src)} className="language__img" alt={alt} />
      </figure>
      <span className="language__name">{name}</span>
    </div>
  );
};

const Languages = () => {
  return (
    <section id="languages">
      <div className="container">
        <div className="row">
          <h1 className="section__title section__tech-stack">This is my <span className="text--blue">technology stack</span></h1>
          <div className="language__list">
            <Language src='./html.png' alt="" name="HTML" />
            <Language src='./css.png' alt="" name="CSS" />
            <Language src='./js.png' alt="" name="JAVASCRIPT" />
            <Language src='./react.png' alt="" name="REACT" />
            <Language src='./matlab.png' alt="" name="MATLAB" />
            <Language src='./python.png' alt="" name="PYTHON" />
            <Language src='./java.png' alt="" name="JAVA" />
            <Language src='./mysql.png' alt="" name="MYSQL" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectLink = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="project__description--link">
      {children}
    </a>
  );
};

const Project = ({ src, alt, title, subtitle, para, githubHref }) => {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img src={images(src)} className="project__img" alt={alt} />
        <div className="project__description">
          <h3 className="project__description--title">{title}</h3>
          <h4 className="project__description--subtitle">{subtitle}</h4>
          <p className="project__description--para">{para}</p>
          <div className="project__description--links">
            {githubHref && <ProjectLink href={githubHref}><i className="fab fa-github"></i></ProjectLink>}
          </div>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title section__projects">Here are some of my <span className="text--blue">projects</span></h1>
          <ul className="projects__list">
            <Project
              src="./CapstoneMap.png"
              alt="Capstone project"
              title="Windsor Hospice Mapping Application"
              subtitle="CSS&nbsp;&nbsp;HTML&nbsp;&nbsp;JavaScript&nbsp;&nbsp;PHP&nbsp;&nbsp;phpMyAdmin"
              para="This project is a mapping visualization web application which pins patients on a map and
                colour codes them by their designated 'level.' For this project, Windsor-Essex Compassion
                Care Community (WECCC) was worked with closely as a client to develop a visualization tool
                that could be used for both quick and easy access to information on their patients, as well
                as being used as a simple way to show analyze their data for funding purposes."
              githubHref="https://www.github.com/ksarson/COMP-4990"
            />
            <Project
              src="./DropletAddition.png"
              alt="HCI project"
              title="Droplet Addition Browser Game"
              subtitle="CSS&nbsp;&nbsp;HTML&nbsp;&nbsp;JavaScript&nbsp;&nbsp;React"
              para="This project is a redesign of a simple mathematics browser game. The objective was to take a
                current educational browser game and redesign it paying heavy attention to the design
                principles which could be utilized to improve the original. The game selected was called
                'Deep Sea Duel' and was redesigned as 'Droplet Addition.'"
              githubHref="https://github.com/ksarson/CS9552"
            />
            <Project
              src="./Webpage.png"
              alt="Webpage project"
              title="My E-Protfolio Project"
              para="This project was my first dive into the world of web and front-end development.
                I decided recently that I wanted to learn a little bit of web and front-end development
                and this webpage was my first full webpage. I utilized flexboxes, animations, mobile
                resposiveness practices. This webpage is currently my E-Portfolio and will be adjusted as I
                continue to learn with my next planned subject being javascript."
              subtitle="CSS&nbsp;&nbsp;HTML"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};


const FootLink = ({ href, children }) => {
  return (
    <a href={href} className="footer__socials--link link__hover-effect link__hover-effect--white" target="_blank">
      {children}
    </a>
  );
};

const Foot = () => {
  return (
    <footer>
      <div className="row footer__row">
        <a href="#" className="footer__anchor">
          <figure className="footer__logo">
            <img src={images('./logo.png')} className="footer__logo--img" alt="" />
          </figure>
          <span className="footer__logo--popper">
            Top
            <i className="fas fa-arrow-up"></i>
          </span>
        </a>
        <div className="footer__socials--list">
          <FootLink href="https://www.github.com/ksarson">GitHub</FootLink>
          <FootLink href="https://www.linkedin.com/in/sarsonk">LinkedIn</FootLink>
          <FootLink href="mailto:ksarson10@gmail.com">Email</FootLink>
          <FootLink href="./assets/KSarsonResume.pdf">Resume</FootLink>
        </div>
        <div className="footer__copyright">Copyright Ⓒ 2024 Kolby Sarson</div>
      </div>
    </footer>
  );
};

const render = () => {
  ReactDOM.createRoot(document.getElementById('about-me')).render(<AboutMe />);
  ReactDOM.createRoot(document.getElementById('languages')).render(<Languages />);
  ReactDOM.createRoot(document.getElementById('projects')).render(<Projects />);
  ReactDOM.createRoot(document.getElementById('foot')).render(<Foot />);
};

document.addEventListener('DOMContentLoaded', render);
