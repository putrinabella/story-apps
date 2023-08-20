// Import our custom CSS
import '../scss/main.scss';

// Import javascript file as needed
import './utils/firebase';
import * as bootstrap from 'bootstrap';
import CheckUserAuth from './pages/auth/check-user-auth';

import Dashboard from './pages/dashboard';
import Add from './pages/addpage';
import About from './pages/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import './components/index';

const routes = {
  '/': Dashboard,
  '/index.html': Dashboard,
  '/addpage.html': Add,
  '/about.html': About,
  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  console.log(route);
  CheckUserAuth.checkLoginState();
  route.init();
});
