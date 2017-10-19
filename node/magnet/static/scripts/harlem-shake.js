(function () {
  function c() {
    var e = document.createElement("link");

    e.setAttribute("rel", "stylesheet");
    e.setAttribute("href", f);
    e.setAttribute("class", l);

    document.body.appendChild(e);
  }

  function h() {
    var e = document.getElementsByClassName(l);

    for (var t = 0; t < e.length; t++) {
      document.body.removeChild(e[t]);
    }
  }

  function p() {
    var e = document.createElement("div");

    e.setAttribute("class", a);

    document.body.appendChild(e);

    setTimeout(function () {
      document.body.removeChild(e);
    }, 100);
  }

  function d(e) {
    return {
      height: e.offsetHeight,
      width: e.offsetWidth
    };
  }

  function v(i) {
    var s = d(i);

    return s.height > e && s.height < n && s.width > t && s.width < r;
  }

  function m(e) {
    var t = e;
    var n = 0;

    while ( !! t) {
      n += t.offsetTop;

      t = t.offsetParent;
    }

    return n;
  }

  function g() {
    var e = document.documentElement;

    if ( !! window.innerWidth) {
      return window.innerHeight;
    } else if (e && !isNaN(e.clientHeight)) {
      return e.clientHeight;
    }

    return 0;
  }

  function y() {
    if (window.pageYOffset) {
      return window.pageYOffset;
    }

    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  }

  function E(e) {
    var t = m(e);

    return t >= w && t <= b + w;
  }

  function S() {
    var e = document.createElement("audio");
    var h = 1;
    var j = 1;

    e.setAttribute("class", l);
    e.src = i;
    e.loop = false;

    e.addEventListener("timeupdate", function () {
      if (h && e.currentTime > 15.4) {
        h = 0;

        N();
        p();

        for (var f = 0; f < O.length; f++) {
          T(O[f]);
        }
      } else if (j && e.currentTime > 1.8) {
        j = 0;

        x(k);
      }
    });

    e.addEventListener("ended", function () {
        N();
        h();
    }, true);

    document.body.appendChild(e);

    e.play();
  }

  function x(e) {
    e.classList.add(s);
    e.classList.add(o);
  }

  function T(e) {
    e.classList.add(s);
    e.classList.add(u[Math.floor(Math.random() * u.length)]);
  }

  function N() {
    var e = document.getElementsByClassName(s);

    for (var n = 0; n < e.length;) {
      e[n].classList.remove(s);
    }
  }

  var e = 30;
  var t = 30;
  var n = 350;
  var r = 350;
  var i = "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
  var s = "mw-harlem_shake_me";
  var o = "im_first";
  var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
  var a = "mw-strobe_light";
  var f = "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
  var l = "mw_added_css";
  var b = g();
  var w = y();
  var C = document.getElementsByTagName("*");
  var k = null;

  for (var L = 0; L < C.length; L++) {
    var A = C[L];

    if (v(A)) {
      if (E(A)) {
        k = A;

        break;
      }
    }
  }

  if (A === null) {
      console.warn("Could not find a node of the right size. Please try a different page.");

      return;
  }

  c();
  S();

  var O = [];

  for (var L = 0; L < C.length; L++) {
    var A = C[L];

    if (v(A)) {
      O.push(A);
    }
  }
})();
