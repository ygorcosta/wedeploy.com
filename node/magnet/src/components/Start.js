import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Start.soy.js';
import {isServerSide} from 'metal';
import malarkey from 'malarkey';

export default class Start extends Component {
  attached() {
    if (!isServerSide()) {
      this.type();
      this.console();
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

  console() {
    /* ...
    /* ========================================================================== */

    const returnKeyCode = 13;
    const kKeyCode = 75;

    const $console = document.querySelector('.start-demo-content pre');

    $console.parentNode.parentNode.addEventListener('click', ondemoclick);

    /* ...
    /* ========================================================================== */

    function ondemoclick(event) {
      const $contenteditable = $console.querySelector('[contenteditable]');

      if ($contenteditable) {
        if (!$contenteditable.contains(event.target)) {

          $contenteditable.focus();
        }
      }
    }

    /* ...
    /* ========================================================================== */

    function promise_display(content, isEncoded, beforeMs, afterMs) {
      return new Promise(resolve => setTimeout(resolve, beforeMs || 0))
      .then(() => display(content, isEncoded))
      .then(() => new Promise(resolve => setTimeout(resolve, afterMs || 0)));
    }

    function promise_display_then_input(content, isEncoded, beforeMs, afterMs) {
      return promise_display(content, isEncoded, beforeMs, afterMs).then(() => input('', { isFocusing: true, isInteractive: true }));
    }

    function display(content, isEncoded) {
      const $sandbox = document.createElement('x');
      const $fragment = document.createDocumentFragment();

      if (isEncoded) {
        $sandbox.innerHTML = document.createElement('x').appendChild(document.createTextNode(content)).parentNode.innerHTML;
      } else {
        $sandbox.innerHTML = content;
      }

      while ($sandbox.lastChild) {
        $fragment.appendChild($sandbox.firstChild);
      }

      $console.appendChild($fragment);

      $console.parentNode.scrollTop = $console.parentNode.scrollHeight;
    }

    /* ...
    /* ========================================================================== */

    function input(content, rawopts) {
      const opts = Object(rawopts);

      return new Promise(resolve => {
        // display the current directory
        display('  <span>•</span>  /yoursite $ ', false, 0, 0);

        // create an input plaintext element
        const $input = document.createElement('plaintext');

        $console.appendChild($input);

        // if the plain text element is to be interactive
        if (opts.isInteractive) {
          // configure the plain text element as an input
          $input.setAttribute('contenteditable', true);
          $input.setAttribute('spellcheck', false);

          $input.addEventListener('keydown', onkeydown);
          $input.addEventListener('input', oninput);

          if (opts.isFocusing) {
            $input.focus();
          }
        } else {
          // otherwise, simulate typed in text
          malarkey($input).pause(opts.beforeMs || 0).type(content, opts.speed || 0).pause(opts.afterMs || 0).call(resolve);
        }

        // disable elements from being added to the plain text element
        function oninput() {
          while ($input.lastElementChild) {
            $input.removeChild($input.lastElementChild);
          }
        }

        //
        function onkeydown(event) {
          // if the return key is pressed
          if (returnKeyCode === event.keyCode) {
            // do not input the return character
            event.preventDefault();

            // disable the plain text element as an input
            $input.removeAttribute('contenteditable');
            $input.removeEventListener('keydown', onkeydown);

            // input text
            const input = $input.innerText;

            if ('clear' === input) {
              // $ clear
              run_clear_then_input('', { isFocusing: true, isInteractive: true });
            } else if ('pwd' === input) {
              // $ pwd
              promise_display_then_input('\n     <b>/yoursite</b>\n', false, 0, 200);
            } else if ('ls' === input) {
              // $ ls
              run_ls_then_input('', { isFocusing: true, isInteractive: true });
            } else if (/^we(\s+|$)/.test(input)) {
              // $ we
              const links = ['', '', 'login', 'logout', 'deploy', 'log', 'domain', 'env', 'list', 'delete', 'console', 'update'];
              const cmd = input.replace(/^we\s*/, '');

              if (!cmd) {
                run_we_then_input('', { isFocusing: true, isInteractive: true });
              } else if (links.indexOf(cmd) !== -1) {
                const url = `https://wedeploy.com/docs/intro/using-the-command-line/#${links.indexOf(cmd)}`;

                window.open(url, '_blank');

                promise_display_then_input('\n', false, 0, 0);
              }
            } else if (/^echo(\s+|$)/.test(input)) {
              // $ echo
              promise_display_then_input(input.replace(/^echo(?:\s+(")?([\W\w]+)\1)?$/, '\n     $2\n'), true);
            } else if (/^man(\s+|$)/.test(input)) {
              // $ man
              location.href = 'https://wedeploy.com/docs/';
            } else if (/^cd(\s+|$)/.test(input)) {
              // $ cd
              promise_display_then_input('\n', false, 0, 0);
            } else if ('sudo we deploy' === input) {
              // $ sudo we deploy (easter egg)
              const $script = document.createElement('script');

              $script.src = 'https://rawgit.com/jonathantneal/656b23d080994df1587f770f61d88c77/raw/a083b647b930ab11417c6c820d714632f3524cc0/harlem-shake.js';

              document.head.appendChild($script);

              run_clear_then_input('', { isFocusing: true, isInteractive: true });
            } else {
              // otherwise
              promise_display_then_input('\n     command not found: ' + input.replace(/\s+[\W\w]*$/, '') + '\n', true);
            }
          } else if (event.metaKey && kKeyCode === event.keyCode) {
            // otherwise, CMD+K to clear the console
            run_clear_then_input('', { isFocusing: true, isInteractive: true });
          }
        }
      })
    }

    /* ...
    /* ========================================================================== */

    function run_clear_then_input(content, opts) {
      return new Promise(resolve => {
        while ($console.lastChild) {
          $console.removeChild($console.lastChild);
        }

        resolve();
      }).then(() => input(content, opts));
    }

    /* ...
    /* ========================================================================== */

    function run_ls_then_input(content, opts) {
      return promise_display('\n     <b>index.html</b>\n', false, 0, 200).then(() => input(content, opts));
    }

    function run_we_then_input(content, opts) {
      return promise_display([
        '',
        '  <span>!</span>   Usage: we [command] [flag]'
      ].join('\n'), false, 0, 300)
      .then(() => promise_display([
        '',
        '  Command          Description',
        '  <b>deploy</b>           Perform services deployment',
        '  <b>list</b>             Show list of projects and services',
        '  <b>console</b>          Open the console on your browser',
        '  <b>docs</b>             Open docs on your browser',
        '  <b>log</b>              Show logs of the services',
        '  <b>domain</b>           Show and configure domain names for services',
        '  <b>env</b>              Show and configure environment variables for services',
        '  <b>restart</b>          Restart project or services',
        '  <b>login</b>            Login into your account',
        '  <b>logout</b>           Logout from your account',
        '  <b>diagnostics</b>      Run system diagnostics and show report',
        '  <b>version</b>          Show CLI version',
        '  <b>update</b>           Update CLI to the latest version',
        '  <b>uninstall</b>        Uninstall CLI'
      ].join('\n'), false, 0, 100))
      .then(() => promise_display([
        '',
        '  Flag             Description',
        '  <b>-h</b>, <b>--help</b>       Show help message',
        '  <b>-v</b>, <b>--verbose</b>    Show more information about an operation',
        ''
      ].join('\n')))
      .then(() => input(content, opts));
    }

    function run_we_deploy_then_input(content, opts) {
      return promise_display('\n  >  <b>yourapp</b> in <b>wedeploy</b>', false, 0, 100)
      .then(() => promise_display('\n     Initializing deployment process\n     Preparing package', false, 0, 1000))
      .then(() => promise_display('\n  <b>!</b>  Deployment Successful in 3s', false, 0, 100))
      .then(() => promise_display('\n  <b>!</b>  Deployed <b>hosting-yourapp.wedeploy.io</b>\n'))
      .then(() => input(content, opts))
    }

    input('ls', false, 100, 500, 0)
    .then(() => run_ls_then_input('we deploy', { speed: 60, beforeMs: 1500, afterMs: 1500 }))
    .then(() => run_we_deploy_then_input('', { isInteractive: true }));
  }
}

Soy.register(Start, templates);
