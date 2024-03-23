const nevyTopMenu = () => {

  const style = {
    flexDirection: 'row',
    top: '0',
    left: '0',
    width: '100vw',
    height: '50px',
  }

  const menu = document.querySelector('.comfy-menu')

  if (menu) {
    // Apply each style property to the menu
    Object.keys(style).forEach(key => {
      menu.style[key] = style[key];
    });
  }

  menu.classList.add('nevy-top-menu');

  //add link to style.css in the head
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/extensions/nevysha-top-menu/style.css';
  document.head.appendChild(link);
};

window.nevyTopMenu = nevyTopMenu;
nevyTopMenu();

