export default function() {
  const content = document.querySelector('#content');
  const title = document.createElement('h1');
  const info = document.createElement('div');
  const img = new Image();

  title.textContent = 'My Restaurant';
  info.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ';
  img.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  content.append(title, info, img);
}