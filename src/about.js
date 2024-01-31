export default function() {
  const content = document.querySelector('#content');
  const title = document.createElement('h1');
  const info = document.createElement('div');

  title.textContent = 'About';
  info.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corrupti numquam laborum nostrum architecto ea impedit non, error eius optio nesciunt! Cumque dolores atque ducimus quod obcaecati amet nostrum molestiae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corrupti numquam laborum nostrum architecto ea impedit non, error eius optio nesciunt! Cumque dolores atque ducimus quod obcaecati amet nostrum molestiae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corrupti numquam laborum nostrum architecto ea impedit non, error eius optio nesciunt! Cumque dolores atque ducimus quod obcaecati amet nostrum molestiae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corrupti numquam laborum nostrum architecto ea impedit non, error eius optio nesciunt! Cumque dolores atque ducimus quod obcaecati amet nostrum molestiae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corrupti numquam laborum nostrum architecto ea impedit non, error eius optio nesciunt! Cumque dolores atque ducimus quod obcaecati amet nostrum molestiae?';

  content.append(title, info);
}