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
    const RETURN_KEY_CODE = 13;
    const K_KEY_CODE = 75;
    const CMD_MATCH = /^(?:(sudo)\s+)?([^\s]+)?(?:\s+([\W\w]*))?$/;
    const $console = document.querySelector('.start-demo-content pre');

    /* Initialize Console demo
    /* ========================================================================== */

    input('ls', { speed: 100, beforeMs: 1000, afterMs: 1000 })
    .then(() => run_display('\n     <b>index.html</b>\n', { afterMs: 300 }))
    .then(() => input('we deploy', { speed: 60, afterMs: 1500 }))
    .then(() => run_display('\n  >  <b>yourapp</b> in <b>wedeploy</b>', { afterMs: 100 }))
    .then(() => run_display('\n     Initializing deployment process\n     Preparing package', { afterMs: 1500 }))
    .then(() => run_display('\n  <b>!</b>  Deployment Successful in 3s', { afterMs: 200 }))
    .then(() => run_display('\n  <b>!</b>  Deployed <b>hosting-yourapp.wedeploy.io</b>\n', { afterMs: 100 }))
    .then(() => input('', { isInteractive: true }));

    /* Initialize Console clickability
    /* ========================================================================== */

    $console.parentNode.parentNode.addEventListener('click', ondemoclick);

    function ondemoclick(event) {
      const $contenteditable = $console.querySelector('[contenteditable]');

      if ($contenteditable) {
        if (!$contenteditable.contains(event.target)) {

          $contenteditable.focus();
        }
      }
    }

    /* Promise Display
    /* ====================================================================== */

    function run_display(content, rawopts) {
      const opts = Object(rawopts);

      return new Promise(resolve => setTimeout(resolve, opts.beforeMs || 0))
      .then(() => display(content))
      .then(() => new Promise(resolve => setTimeout(resolve, opts.afterMs || 0)));
    }

    function run_display_then_input(content, opts) {
      return run_display(content, opts).then(() => input('', opts));
    }

    function display(content) {
      const $sandbox = document.createElement('x');
      const $fragment = document.createDocumentFragment();

      $sandbox.innerHTML = content;

      while ($sandbox.lastChild) {
        $fragment.appendChild($sandbox.firstChild);
      }

      $console.appendChild($fragment);

      $console.parentNode.scrollTop = $console.parentNode.scrollHeight;
    }

    /* Encode HTML (preventing element injections)
    /* ====================================================================== */

    function encodeHTML(content) {
      return document.createElement('x').appendChild(document.createTextNode(content)).parentNode.innerHTML;
    }

    /* Input
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
        if (opts.isInteractive || opts.isFocusInteractive) {
          // configure the plain text element as an input
          $input.setAttribute('contenteditable', true);
          $input.setAttribute('spellcheck', false);

          $input.addEventListener('keydown', onkeydown);
          $input.addEventListener('input', oninput);

          if (opts.isFocusInteractive) {
            $input.focus();
          }
        } else {
          // otherwise, simulate typed in text
          malarkey($input).pause(opts.beforeMs || 0).type(content, opts.speed || 0).pause(opts.afterMs || 0).call(resolve);
        }

        // on input, disable elements from being added to the plain text element
        function oninput() {
          while ($input.lastElementChild) {
            $input.removeChild($input.lastElementChild);
          }
        }

        // on keydown, manage commands
        function onkeydown(event) {
          // if the return key is pressed
          if (RETURN_KEY_CODE === event.keyCode) {
            // do not input the return character
            event.preventDefault();

            // disable the plain text element as an input
            $input.removeAttribute('contenteditable');
            $input.removeEventListener('keydown', onkeydown);

            const input = $input.innerText.replace(/^[\s;]+|[\s;]+$/g, '');
            const sudo  = input.replace(CMD_MATCH, '$1');
            const cmd   = input.replace(CMD_MATCH, '$2');
            const args  = input.replace(CMD_MATCH, '$3');

            if (sudo && 'we' === cmd && 'deploy' === args) {
              // if "sudo we deploy" is run, harlemify the page
              const $script = document.createElement('script');

              $script.src = 'https://rawgit.com/jonathantneal/656b23d080994df1587f770f61d88c77/raw/a083b647b930ab11417c6c820d714632f3524cc0/harlem-shake.js';

              document.head.appendChild($script);

              run_clear_then_input('', { isFocusInteractive: true });
            } else if ('clear' === cmd) {
              // if "clear" is run, clear the console
              run_clear_then_input('', { isFocusInteractive: true });
            } else if ('pwd' === cmd) {
              // if "pwd" is run, show the working directory
              run_display_then_input('\n     <b>/yoursite</b>\n', { afterMs: 200, isFocusInteractive: true });
            } else if ('ls' === cmd) {
              // if "ls" is run, show any files in the working directory
              run_display_then_input('\n     <b>index.html</b>\n', { isFocusInteractive: true, afterMs: 200 });
            } else if ('we' === cmd) {
              // we command documentation by index
              const cmdDocsByIndex = ['', '', 'login', 'logout', 'deploy', 'log', 'domain', 'env', 'list', 'delete', 'console', 'update'];

              if (args && cmdDocsByIndex.indexOf(args) !== -1) {
                // if args are passed and a documented command is available, show that documentation in a new tab
                const docURL = `https://wedeploy.com/docs/intro/using-the-command-line/#${cmdDocsByIndex.indexOf(args)}`;

                window.open(docURL, '_blank');

                // then, continue the interactive prompt
                run_display_then_input('\n', { isFocusInteractive: true });
              } else {
                // otherwise, show available "we" commands
                run_we_then_input('', { isFocusInteractive: true });
              }
            } else if ('cat' === cmd) {
              // if "cat" is run, show a picture of a cat, then, continue the interactive prompt
              const catascii = [
                '',
                '      /\\_/\\',
                '     ( o.o )',
                '      > ^ <',
                ''
              ].join('\n');

              run_display_then_input(catascii, { afterMs: 300, beforeMs: 200, isFocusInteractive: true });
            } else if ('echo' === cmd) {
              // if "echo" is run, show the args
              const echoArgs = args.replace(/^(["'])?([\W\w]*)\1$/, '$2');
              run_display_then_input(`\n${encodeHTML(echoArgs)}\n`, { isFocusInteractive: true });
            } else if ('man' === cmd) {
              // if "man" is run, open wedeploy documentation in a new tab
              window.open('https://wedeploy.com/docs/', '_blank');

              // then, continue the interactive prompt
              run_display_then_input('\n', { isFocusInteractive: true });
            } else if ('open' === cmd) {
              // if "open" is run, open anything from the args
              window.open(args, '_blank');

              // then, continue the interactive prompt
              run_display_then_input('\n', { isFocusInteractive: true });
            } else if ('cd' === cmd || 'cp' === cmd || 'find' === cmd || 'grep' === cmd || 'mkdir' === cmd || 'mv' === cmd || 'rm' === cmd || 'touch' === cmd) {
              // if various common commands are run, do nothing
              run_display_then_input('\n', { isFocusInteractive: true });
            } else {
              // otherwise, report that the command is not found
              run_display_then_input(`\n     command not found: ${encodeHTML(cmd)}\n`, { isFocusInteractive: true });
            }
          } else if (event.metaKey && K_KEY_CODE === event.keyCode) {
            // otherwise, CMD+K will clear the console
            run_clear_then_input('', { isFocusInteractive: true });
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

    function run_we_then_input(content, opts) {
      return run_display([
        '',
        '  <span>!</span>   Usage: we [command] [flag]'
      ].join('\n'), { afterMs: 300 })
      .then(() => run_display([
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
      ].join('\n'), { afterMs: 100 }))
      .then(() => run_display_then_input([
        '',
        '  Flag             Description',
        '  <b>-h</b>, <b>--help</b>       Show help message',
        '  <b>-v</b>, <b>--verbose</b>    Show more information about an operation',
        ''
      ].join('\n'), opts));
    }
  }
}

Soy.register(Start, templates);
