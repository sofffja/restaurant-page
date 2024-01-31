import homeLoad from './home.js';
import menuLoad from './menu.js'
import aboutLoad from './about.js';
import './style.css';

const buttons = function() {
  const homeBtn = document.querySelector('#home-btn');
  const menuBtn = document.querySelector('#menu-btn');
  const aboutBtn = document.querySelector('#about-btn');
  const contentDiv = document.querySelector('#content');

  homeLoad();

  homeBtn.addEventListener('click', function() {
    contentDiv.textContent = '';
    homeLoad();
  });

  menuBtn.addEventListener('click',function() {
    contentDiv.textContent = '';
    menuLoad();
  });

  aboutBtn.addEventListener('click',function() {
    contentDiv.textContent = '';
    aboutLoad();
  });
}();

