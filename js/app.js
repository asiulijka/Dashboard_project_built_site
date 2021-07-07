import {select} from './settings.js';
import SideMenu from './components/SideMenu.js';

const app = {
  initSideMenu: function(){
    const sideMenuElem = document.querySelector(select.containerOf.sideMenu);
    new SideMenu(sideMenuElem);
  },

  init: function(){
    this.initSideMenu();
  },

};

app.init();