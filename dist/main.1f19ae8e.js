// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n\nbody {\n    background-color: #1B94DD;\n}\n\n.doraemon {\n\n    border: 1px solid #1B94DD;\n}\n\n.doraemon .catHead {\n    width: 388px;\n    height: 1235px;\n    border: 2px solid black;\n    border-radius: 185px / 371px;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n}\n\n.doraemon .catHead .eye {\n    width: 50px;\n    height: 70px;\n    top: 10px;\n    background: #fffcff;\n    border: 2px solid black;\n    position: absolute;\n    z-index: 2;\n}\n\n.doraemon .catHead .left {\n    width: 48px;\n    height: 65px;\n    border-radius: 31px / 40px;\n    transform: rotate(-8deg);\n    left: 125px;\n    position: relative;\n\n}\n\n.doraemon .catHead .left::before {\n    content: \"\";\n    position: absolute;\n    background-color: black;\n    width: 43px;\n    height: 3px;\n    top: 17px;\n    transform: rotate(-17deg);\n\n}\n\n.doraemon .catHead .left::after {\n    content: \"\";\n    position: absolute;\n    background: black;\n    width: 15px;\n    height: 10px;\n    top: 27px;\n    right: 6px;\n    border-radius: 18px / 8px;\n    transform: rotate(100deg);\n\n}\n\n.doraemon .catHead .right {\n    width: 55px;\n    height: 68px;\n    border-radius: 31px / 40px;\n    transform: rotate(-8deg);\n    right: 155px;\n}\n\n.doraemon .catHead .right::before {\n    content: \"\";\n    position: absolute;\n    background-color: black;\n    width: 50px;\n    height: 3px;\n    top: 17px;\n    right: -8px;\n    transform: rotate(47deg);\n\n}\n\n.doraemon .catHead .right::after {\n    content: \"\";\n    position: absolute;\n    background: black;\n    width: 15px;\n    height: 10px;\n    top: 23px;\n    left: 6px;\n    border-radius: 18px / 8px;\n    transform: rotate(100deg);\n\n}\n\n.doraemon .catHead .profile {\n    width: 235px;\n    height: 157px;\n    border: 2px solid black;\n    background: white;\n    border-radius: 300px /150px;\n    position: absolute;\n    z-index: 1;\n    transform: rotate(-5deg);\n    top: 40px;\n    left: 73px;\n\n}\n\n.doraemon .catHead .nose {\n    width: 44px;\n    height: 44px;\n    border: 2px solid black;\n    background: #E51F15;\n    border-radius: 22px;\n    position: absolute;\n    left: 158px;\n    top: 56px;\n    z-index: 3;\n\n}\n\n.doraemon .catHead .nose::before {\n    content: \"\";\n    width: 11px;\n    height: 11px;\n    background: white;\n    border-radius: 5px;\n    position: absolute;\n    top: 8px;\n    left: 8px;\n    box-shadow: inset 0px 0px 2px 1px #E51F15;\n}\n\n\n.doraemon .catHead .moustache {\n\n    height: 66px;\n    position: relative;\n    top: 32px;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n\n\n}\n\n.doraemon .catHead .moustacheLeft {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    background: white;\n\n}\n\n.doraemon .catHead .placeholder {\n    width: 5px;\n}\n\n.doraemon .catHead .mouth {\n    width: 30px;\n    border-left: 3px solid black;\n}\n\n.doraemon .catHead .mouth::before {\n    content: \"\";\n    border-top: 2px solid black;\n    border-radius: 16px 1px/14px 0 0;\n    background: white;\n    height: 30px;\n    width: 30px;\n    position: absolute;\n    top: 63px;\n    left: 160px;\n}\n\n.doraemon .catHead .moustacheRight {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n}\n\n.doraemon .catHead .moustacheLeft  li {\n    height: 3px;\n    background: black;\n}\n\n.doraemon .catHead .moustacheLeft .firstLeft {\n    width: 60px;\n    transform: rotate(8deg);\n}\n\n.doraemon .catHead .moustacheLeft .secondLeft {\n    width: 55px;\n    transform: translate(-8px) rotate(-4deg);\n\n\n}\n\n.doraemon .catHead .moustacheLeft .thirdLeft {\n    width: 60px;\n    transform: rotate(-15deg);\n\n}\n\n.doraemon .catHead .moustacheRight li {\n    height: 3px;\n    background: black;\n\n}\n\n.doraemon .catHead .moustacheRight .firstRight {\n    width: 73px;\n    transform: rotate(-8deg);\n}\n\n.doraemon .catHead .moustacheRight .secondRight {\n    width: 55px;\n    transform: rotate(9deg);\n}\n\n.doraemon .catHead .moustacheRight .thirdRight {\n    width: 71px;\n    transform: rotate(15deg);\n}\n\n.doraemon .catHead .faceLeft {\n    width: 94px;\n    height: 142px;\n    background: white;\n    border: 2px solid black;\n    z-index: 2;\n    position: absolute;\n    top: 64px;\n    left: 40px;\n    border-right-color: transparent;\n    transform: rotate(-13deg);\n    border-radius: 1207px 144px 643px 828px;\n}\n\n.doraemon .catHead .faceRight {\n    width: 114px;\n    height: 148px;\n    border: 2px solid black;\n    background: white;\n    z-index: 2;\n    position: absolute;\n    top: 68px;\n    right: 55px;\n    border-left-color: transparent;\n    transform: rotate(41deg);\n    border-radius: 166px 292px 248px 180px;\n}\n\n.lowerBody {\n    position: relative;\n    top: -1000px;\n    left: 100px;\n}\n\n\n.lowerBody .neck {\n    width: 133px;\n    height: 100px;\n    border: 10px solid #D21D18;\n    border-radius: 1px 1px 50px 53px/ 1px 1px 22px 15px;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    position: absolute;\n    top: -130px;\n    left: 14px;\n    z-index: 2;\n}\n\n\n.lowerBody .belly {\n    width: 200px;\n    height: 120px;\n    position: absolute;\n    top: -41px;\n    left: 27px;\n    z-index: 1;\n    border-radius: 1px;\n}\n\n.lowerBody .belly .bellyOut {\n    width: 140px;\n    height: 100px;\n    background: white;\n    border: 2px solid black;\n    z-index: 2;\n    position: absolute;\n    top: 9px;\n    left: -11px;\n    border-radius: 75px 75px 72px 88px/ 49px 49px 61px 58px;\n}\n\n.lowerBody .belly .bellyOut::before {\n    content: \" \";\n    width: 20px;\n    height: 20px;\n    background: #F5E650;\n    border: 2px solid black;\n    border-radius: 10px;\n    position: absolute;\n    left: 52px;\n}\n\n.lowerBody .belly .bellyOut::after {\n    content: \" \";\n    display: block;\n    width: 80px;\n    height: 40px;\n    border: 2px solid black;\n    position: absolute;\n    top: 36px;\n    left: 23px;\n    border-radius: 0 0 42px 44px;\n}\n\n.lowerBody .handsLeft {\n    width: 50px;\n    height: 50px;\n    background: white;\n    border: 2px solid black;\n    border-radius: 50%;\n    z-index: 3;\n    position: absolute;\n    top: -4px;\n    left: -30px;\n}\n\n.lowerBody .handsLeft::before {\n    content: \" \";\n    width: 57px;\n    height: 2px;\n    background: black;\n    display: block;\n    transform: rotate(136deg) translate(-12px, 12px);\n\n}\n\n.lowerBody .handsLeft::after {\n    content: \" \";\n    width: 22px;\n    height: 2px;\n    background: black;\n    display: block;\n    transform: rotate(113deg) translate(-19px, -33px);\n}\n\n.lowerBody .handsRight {\n    width: 60px;\n    height: 60px;\n    background: white;\n    border: 2px solid black;\n    border-radius: 50%;\n    z-index: 3;\n    position: absolute;\n    top: -92px;\n    left: 194px;\n}\n\n.lowerBody .handsRight::before {\n    content: \" \";\n    display: block;\n    width: 54px;\n    height: 38px;\n    background: #1B94DD;\n    border: 2px solid black;\n    border-right-color: transparent;\n    transform: rotate(114deg) translate(60px, -5px);\n    border-radius: 47px 34px 47px 34px/ 15px 15px 15px 15px;\n    z-index: -1;\n}\n\n.lowerBody .footsLeft {\n    width: 70px;\n    height: 80px;\n    border: 2px solid black;\n    background: white;\n    position: absolute;\n    z-index: 3;\n    border-radius: 45px 45px 45px 45px;\n    top: 14px;\n    left: -8px;\n}\n\n.lowerBody .footsRight {\n    width: 80px;\n    height: 90px;\n    border: 2px solid black;\n    background: white;\n    position: absolute;\n    z-index: 3;\n    border-radius: 45px 45px 45px 45px;\n    top: 19px;\n    left: 124px;\n}\n\n.lowerBody .footsRightFirst {\n    width: 84px;\n    height: 50px;\n    border: 1px solid black;\n    transform: rotate(38deg);\n    border-radius: 145px 15px 1px 1px;\n    position: absolute;\n    top: 69px;\n    left: 52px;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n}\n\n.lowerBody .footsRightLast {\n    width: 24px;\n    height: 79px;\n    border-right: 2px solid black;\n    position: absolute;\n    top: 10px;\n    left: 196px;\n    border-radius: 1px 74px 95px 1px;\n    z-index: 3;\n    transform: rotate(2deg) translate(-4px, 0px);\n}\n\n.lowerBody .footsRightLast::before {\n    content: \" \";\n    display: block;\n    width: 10px;\n    height: 2px;\n    background: black;\n    position: absolute;\n    top: 36px;\n    left: 24px;\n\n}\n\n.lowerBody .footsRightLast::after {\n    content: \" \";\n    display: block;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border: 2px solid black;\n    background: #E51F15;\n    box-shadow: inset 0px 0px 1px 1px black;\n    position: absolute;\n    top: 29px;\n    left: 34px;\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 150;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 75;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51017" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map