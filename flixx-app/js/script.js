const global = {
  currentPage: window.location.pathname
}

//init App
function Infinity() {
  switch(global.currentPage) {
    case '/':
      console.log('Home');
      break;
  }
}

document.addEventListener('DOMContentLoaded', init)