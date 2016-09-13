(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var main = querySelector('main');
  var menuicon = querySelector('#menuicon');
  var nav = querySelector('#mobilenav');
  var body = querySelector('body');
  var html = querySelector('html');

  function closeMenu() {
    menuicon.classList.remove('cross');
    nav.classList.remove('open');
  };

  function toggleMenu(){
    menuicon.classList.toggle('cross');
    nav.classList.toggle('open');
    body.classList.toggle('preventscroll');
    html.classList.toggle('preventscroll');
  };

  menuicon.addEventListener('click', toggleMenu);
  main.addEventListener('click', closeMenu);
  window.addEventListener('resize', closeMenu);

  nav.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();
