import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Start.soy.js';
import {isServerSide} from 'metal';
import malarkey from 'malarkey';

export default class Start extends Component {
  attached() {
    if (!isServerSide()) {
      this.type();
    }
  }

  type() {
    const viewHeader = document.querySelector('.header');
    const viewStart = document.querySelector('.view--start');

    const demoConsole = document.querySelector('.demo-deploy-console');
    const demoLaptop = document.querySelector('.demo-deploy-laptop');
    const target = viewStart.querySelector('.heading--start strong');
    const opts = {
      typeSpeed: 100,
      deleteSpeed: 40,
      loop: true
    };

    const demoConsoleTransform = getComputedStyle(demoConsole).transform.replace(/^none$/, '');
    const demoLaptopTransform = getComputedStyle(demoLaptop).transform.replace(/^none$/, '');

    demoConsole.animate([
      { opacity: 0, transform: `${ demoConsoleTransform } translateX(20px)` },
      { opacity: 1, transform: `${ demoConsoleTransform } translateX(0)` }
    ], {
      delay: 300,
      duration: 600,
      easing: 'ease-in-out',
      fill: 'backwards'
    });

    demoLaptop.animate([
      { opacity: 0, transform: `${ demoLaptopTransform } translateX(20px)` },
      { opacity: 1, transform: `${ demoLaptopTransform } translateX(0)` }
    ], {
      delay: 600,
      duration: 600,
      easing: 'ease-in-out',
      fill: 'backwards'
    });

    viewStart.classList.remove('slide--start-preload');

    malarkey(target, opts).pause(10000).call(fadeOut).delete().call(function () {
      viewHeader.classList.remove('header--1');
      viewHeader.classList.add('header--2');
      viewStart.classList.remove('slide-1--start');
      viewStart.classList.add('slide-2--start');

      this();
    }).call(fadeIn).type('application.').pause(10000).call(fadeOut).delete().call(function () {
      viewHeader.classList.remove('header--2');
      viewHeader.classList.add('header--3');
      viewStart.classList.remove('slide-2--start');
      viewStart.classList.add('slide-3--start');

      this();
    }).call(fadeInWithDelay).type('API.').pause(10000).call(fadeOut).delete().call(function () {
      viewHeader.classList.remove('header--3');
      viewHeader.classList.add('header--1');
      viewStart.classList.remove('slide-3--start');
      viewStart.classList.add('slide-1--start');

      this();
    }).call(fadeIn).type('website.');

    function fadeIn() {
      demoLaptop.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: 2000,
        easing: 'ease-in-out',
        fill: 'both'
      });

      this();
    }

    function fadeInWithDelay() {
      demoLaptop.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        delay: 750,
        duration: 1500,
        easing: 'ease-in-out',
        fill: 'both'
      });

      this();
    }

    function fadeOut() {
      demoLaptop.animate([
        { opacity: 1 },
        { opacity: 0 }
      ], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'both'
      }).onfinish = () => {
        this();
      };
    }
  }
}

Soy.register(Start, templates);
