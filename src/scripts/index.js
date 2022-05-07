import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/util.css';
import '../styles/detail-page.css';
import App from './views/app';
import './components/NavBar';
import './components/NavLink';
import { renderComponent } from './utils/component-maker';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

renderComponent('nav-bar', 'header');
renderComponent('nav-link', 'header');

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  const url = window.location.hash.slice(1).toLowerCase();
  if (url !== 'main-content') {
    app.renderPage();
  }
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});

const menuIcon = document.querySelector('.menu-icon');
const navLink = document.querySelector('.nav-link');
menuIcon.addEventListener('click', (event) => {
  event.preventDefault();
  navLink.classList.toggle('active');
});
