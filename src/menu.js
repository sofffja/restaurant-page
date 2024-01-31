export default function() {
  const content = document.querySelector('#content');
  const title = document.createElement('h1');
  const info = document.createElement('div');
  const menu = document.createElement('div');

  title.textContent = 'Menu';
  info.textContent = 'our dishes';

  menu.classList.add('menu');

  for (let i = 0; i < 8; i++) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.textContent = `food #${i+1}`;
    menuItem.classList.add('menu-item');

    menu.appendChild(menuItem);
  }


  content.append(title, info, menu);
}