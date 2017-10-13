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
    const viewStart = document.querySelector('.start');

    const demoConsole = document.querySelector('.start-demo-console');
    const demoDevice = document.querySelector('.start-demo-device');
    const target = viewStart.querySelector('.start-heading-phrase-text');
    const opts = {
      typeSpeed: 100,
      deleteSpeed: 40,
      loop: true
    };

    const demoConsoleTransform = getComputedStyle(demoConsole).transform.replace(/^none$/, '');
    const demoDeviceTransform = getComputedStyle(demoDevice).transform.replace(/^none$/, '');

    demoConsole.animate([
      { opacity: 0, transform: `${ demoConsoleTransform } translateX(20px)` },
      { opacity: 1, transform: `${ demoConsoleTransform } translateX(0)` }
    ], {
      delay: 300,
      duration: 600,
      easing: 'ease-in-out',
      fill: 'backwards'
    });

    demoDevice.animate([
      { opacity: 0, transform: `${ demoDeviceTransform } translateX(20px)` },
      { opacity: 1, transform: `${ demoDeviceTransform } translateX(0)` }
    ], {
      delay: 600,
      duration: 600,
      easing: 'ease-in-out',
      fill: 'backwards'
    });

    viewStart.classList.remove('slide--start-preload');

    malarkey(target, opts).pause(10000).call(fadeOut).delete().call(function () {
      viewHeader.classList.remove('start--1');
      viewHeader.classList.add('start--2');
      viewStart.classList.remove('start--1');
      viewStart.classList.add('start--2');

      this();
    }).call(fadeIn).type('application.').pause(10000).call(fadeOut).delete().call(function () {
      viewHeader.classList.remove('start--2');
      viewHeader.classList.add('start--3');
      viewStart.classList.remove('start--2');
      viewStart.classList.add('start--3');

      this();
    }).call(fadeInWithDelay).type('API.').pause(10000).call(fadeOut).delete().call(function () {
      viewHeader.classList.remove('start--3');
      viewHeader.classList.add('start--1');
      viewStart.classList.remove('start--3');
      viewStart.classList.add('start--1');

      this();
    }).call(fadeIn).type('website.');

    function fadeIn() {
      demoDevice.animate([
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
      demoDevice.animate([
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
      demoDevice.animate([
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
