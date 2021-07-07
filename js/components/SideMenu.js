import {select, classNames} from '../settings.js';

class SideMenu {
  constructor(element){
    const thisSideMenu = this;

    thisSideMenu.getElements(element);
    thisSideMenu.initActions();
  }

  getElements(element){
    const thisSideMenu = this;

    thisSideMenu.dom = {};

    thisSideMenu.dom.wrapper = element;

    thisSideMenu.dom.togglerButton = thisSideMenu.dom.wrapper.querySelector(select.sideMenu.toggler);
    thisSideMenu.dom.togglerBars = thisSideMenu.dom.wrapper.querySelectorAll(select.sideMenu.togglerBars);

    thisSideMenu.dom.optionsList = thisSideMenu.dom.wrapper.querySelector(select.sideMenu.options);
  }

  initActions(){
    const thisSideMenu = this;

    thisSideMenu.manageVisibility();

    thisSideMenu.dom.togglerButton.addEventListener('click', function(){
      for (const bar of thisSideMenu.dom.togglerBars) {
        bar.classList.toggle(classNames.sideMenu.bars.clicked);
      }

      thisSideMenu.dom.optionsList.classList.toggle(classNames.sideMenu.options.collapsed);
    });

    window.addEventListener('resize', function() {
      thisSideMenu.manageVisibility();
    });

  }

  manageVisibility(){
    const thisSideMenu = this;

    if(document.documentElement.clientWidth < '960') {

      for (const bar of thisSideMenu.dom.togglerBars) {
        bar.classList.add(classNames.sideMenu.bars.add);
      }

      thisSideMenu.dom.optionsList.classList.add(classNames.sideMenu.options.collapsed);
      thisSideMenu.dom.wrapper.classList.remove(classNames.sideMenu.div.fixedPosition);

    } else {

      for (const bar of thisSideMenu.dom.togglerBars) {
        bar.classList.remove(classNames.sideMenu.bars.add);
      }

      thisSideMenu.dom.optionsList.classList.remove(classNames.sideMenu.options.collapsed);
      thisSideMenu.dom.wrapper.classList.add(classNames.sideMenu.div.fixedPosition);

    }
  }
}

export default SideMenu;