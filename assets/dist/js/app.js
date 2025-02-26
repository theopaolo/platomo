// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"h9WnM":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 52488;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "061eebfa9d09263a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6Bv9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
var _swup = require("swup");
var _swupDefault = parcelHelpers.interopDefault(_swup);
var _plyr = require("plyr");
var _plyrDefault = parcelHelpers.interopDefault(_plyr);
// import 'lazysizes';
const controls = `
<div class="plyr__controls">
    <button type="button" class="plyr__control" data-plyr="fullscreen">
      FULLSCREEN
    </button>

    <div class="plyr_duration_times">
      <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
      <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
    </div>

    <div class="plyr__volume">
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
    </div>

    <div class="plyr__progress">
      <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
      <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
      <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
</div>

<button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-pressed="false" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>
`;
// Initialize Swup
const swup = new (0, _swupDefault.default)();
const pageWrapper = document.querySelector("#swup");
let previousURL = window.location.href;
const player = new (0, _plyrDefault.default)("#player", {
    controls
});
function goBackWithSwup() {
    const pageWrapper = document.querySelector(".swup-page-home .page-wrapper");
    document.body.classList.remove("no-scroll");
    if (pageWrapper) {
        // Add the fade-out-animation class to trigger the fade out
        pageWrapper.classList.add("fade-out-animation");
        // Listen for the end of the fade-out animation on the main element
        const mainElement = pageWrapper.querySelector("main");
        mainElement.addEventListener("animationend", ()=>{
            // Perform any cleanup after the animation (like hiding or removing the element)
            swup.navigate(previousURL);
        }, {
            once: true
        });
    }
}
// Add event listener for all links with 'data-swup-transition' attribute
document.addEventListener("click", (event)=>{
    if (event.target.matches("a[data-swup]")) document.body.classList.add("no-scroll");
    // Add event listener for page background to close swup page
    if (event.target.matches(".bg-blur")) goBackWithSwup();
});
// listen to esc key and close swup page
document.addEventListener("keydown", (event)=>{
    if (event.key === "Escape") goBackWithSwup();
});
// Init Plyr player when swup page is loaded
swup.hooks.on("content:replace", ()=>{
    const player = new (0, _plyrDefault.default)("#player", {
        controls
    });
});
swup.hooks.on("page:view", (visit)=>{
    newUrl = visit.to.url;
    console.log("newUrl", newUrl);
    console.log("prevUrl", previousURL);
});
swup.hooks.on("visit:start", (visit)=>{
    console.log("visit:start", visit);
});
// Initialize Alpine.js
window.Alpine = (0, _alpinejsDefault.default);
(0, _alpinejsDefault.default).start();
let newUrl = 123;
console.log("object");
console.log("undefined");
console.log("string");
console.log("number");
console.log("number");
console.log(typeof goBackWithSwup);

},{"alpinejs":"69hXP","swup":"5QjrV","plyr":"aqcBy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69hXP":[function(require,module,exports) {
// packages/alpinejs/src/scheduler.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>module_default);
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++){
        queue[i]();
        lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
}
// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
}
function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback)=>engine.effect(callback, {
            scheduler: (task)=>{
                if (shouldSchedule) scheduler(task);
                else task();
            }
        });
    raw = engine.raw;
}
function overrideEffect(override) {
    effect = override;
}
function elementBoundEffect(el) {
    let cleanup2 = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el._x_effects) {
            el._x_effects = /* @__PURE__ */ new Set();
            el._x_runEffects = ()=>{
                el._x_effects.forEach((i)=>i());
            };
        }
        el._x_effects.add(effectReference);
        cleanup2 = ()=>{
            if (effectReference === void 0) return;
            el._x_effects.delete(effectReference);
            release(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup2();
        }
    ];
}
// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
    }));
}
// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2)=>walk(el2, callback));
        return;
    }
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}
// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
}
// packages/alpinejs/src/lifecycle.js
var started = false;
function start() {
    if (started) warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el)=>initTree(el, walk));
    onElRemoved((el)=>destroyTree(el));
    onAttributesAdded((el, attrs)=>{
        directives(el, attrs).forEach((handle)=>handle());
    });
    let outNestedComponents = (el)=>!closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el)=>{
        initTree(el);
    });
    dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((fn)=>fn());
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn)=>fn());
}
function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element)=>{
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector)=>element.matches(selector))) return true;
    });
}
function findClosest(el, callback) {
    if (!el) return;
    if (callback(el)) return el;
    if (el._x_teleportBack) el = el._x_teleportBack;
    if (!el.parentElement) return;
    return findClosest(el.parentElement, callback);
}
function isRoot(el) {
    return rootSelectors().some((selector)=>el.matches(selector));
}
var initInterceptors = [];
function interceptInit(callback) {
    initInterceptors.push(callback);
}
function initTree(el, walker = walk, intercept = ()=>{}) {
    deferHandlingDirectives(()=>{
        walker(el, (el2, skip)=>{
            intercept(el2, skip);
            initInterceptors.forEach((i)=>i(el2, skip));
            directives(el2, el2.attributes).forEach((handle)=>handle());
            el2._x_ignore && skip();
        });
    });
}
function destroyTree(root) {
    walk(root, (el)=>{
        cleanupAttributes(el);
        cleanupElement(el);
    });
}
// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value])=>{
        if (names === void 0 || names.includes(name)) {
            value.forEach((i)=>i());
            delete el._x_attributeCleanups[name];
        }
    });
}
function cleanupElement(el) {
    if (el._x_cleanups) while(el._x_cleanups.length)el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
        willProcessRecordQueue = true;
        queueMicrotask(()=>{
            processRecordQueue();
            willProcessRecordQueue = false;
        });
    }
}
function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target._x_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].addedNodes.forEach((node)=>node.nodeType === 1 && addedNodes.push(node));
            mutations[i].removedNodes.forEach((node)=>node.nodeType === 1 && removedNodes.push(node));
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add2 = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            if (el.hasAttribute(name) && oldValue === null) add2();
            else if (el.hasAttribute(name)) {
                remove();
                add2();
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    for (let node of removedNodes){
        if (addedNodes.includes(node)) continue;
        onElRemoveds.forEach((i)=>i(node));
        destroyTree(node);
    }
    addedNodes.forEach((node)=>{
        node._x_ignoreSelf = true;
        node._x_ignore = true;
    });
    for (let node of addedNodes){
        if (removedNodes.includes(node)) continue;
        if (!node.isConnected) continue;
        delete node._x_ignoreSelf;
        delete node._x_ignore;
        onElAddeds.forEach((i)=>i(node));
        node._x_ignore = true;
        node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node)=>{
        delete node._x_ignoreSelf;
        delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}
// packages/alpinejs/src/scope.js
function scope(node) {
    return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [
        data2,
        ...closestDataStack(referenceNode || node)
    ];
    return ()=>{
        node._x_dataStack = node._x_dataStack.filter((i)=>i !== data2);
    };
}
function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) return closestDataStack(node.host);
    if (!node.parentNode) return [];
    return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
    return new Proxy({
        objects
    }, mergeProxyTrap);
}
var mergeProxyTrap = {
    ownKeys ({ objects }) {
        return Array.from(new Set(objects.flatMap((i)=>Object.keys(i))));
    },
    has ({ objects }, name) {
        if (name == Symbol.unscopables) return false;
        return objects.some((obj)=>Object.prototype.hasOwnProperty.call(obj, name));
    },
    get ({ objects }, name, thisProxy) {
        if (name == "toJSON") return collapseProxies;
        return Reflect.get(objects.find((obj)=>Object.prototype.hasOwnProperty.call(obj, name)) || {}, name, thisProxy);
    },
    set ({ objects }, name, value, thisProxy) {
        const target = objects.find((obj)=>Object.prototype.hasOwnProperty.call(obj, name)) || objects[objects.length - 1];
        const descriptor = Object.getOwnPropertyDescriptor(target, name);
        if (descriptor?.set && descriptor?.get) return Reflect.set(target, name, value, thisProxy);
        return Reflect.set(target, name, value);
    }
};
function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key)=>{
        acc[key] = Reflect.get(this, key);
        return acc;
    }, {});
}
// packages/alpinejs/src/interceptor.js
function initInterceptors2(data2) {
    let isObject2 = (val)=>typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "")=>{
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }])=>{
            if (enumerable === false || value === void 0) return;
            let path = basePath === "" ? key : `${basePath}.${key}`;
            if (typeof value === "object" && value !== null && value._x_interceptor) obj[key] = value.initialize(data2, path, key);
            else if (isObject2(value) && value !== obj && !(value instanceof Element)) recurse(value, path);
        });
    };
    return recurse(data2);
}
function interceptor(callback, mutateObj = ()=>{}) {
    let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize (data2, path, key) {
            return callback(this.initialValue, ()=>get(data2, path), (value)=>set(data2, path, value), path, key);
        }
    };
    mutateObj(obj);
    return (initialValue)=>{
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
            let initialize = obj.initialize.bind(obj);
            obj.initialize = (data2, path, key)=>{
                let innerValue = initialValue.initialize(data2, path, key);
                obj.initialValue = innerValue;
                return initialize(data2, path, key);
            };
        } else obj.initialValue = initialValue;
        return obj;
    };
}
function get(obj, path) {
    return path.split(".").reduce((carry, segment)=>carry[segment], obj);
}
function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;
    else if (path.length === 0) throw error;
    else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);
        else {
            obj[path[0]] = {};
            return set(obj[path[0]], path.slice(1), value);
        }
    }
}
// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
    magics[name] = callback;
}
function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback])=>{
        let memoizedUtilities = null;
        function getUtilities() {
            if (memoizedUtilities) return memoizedUtilities;
            else {
                let [utilities, cleanup2] = getElementBoundUtilities(el);
                memoizedUtilities = {
                    interceptor,
                    ...utilities
                };
                onElRemoved(el, cleanup2);
                return memoizedUtilities;
            }
        }
        Object.defineProperty(obj, `$${name}`, {
            get () {
                return callback(el, getUtilities());
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
    try {
        return callback(...args);
    } catch (e) {
        handleError(e, el, expression);
    }
}
function handleError(error2, el, expression) {
    Object.assign(error2, {
        el,
        expression
    });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(()=>{
        throw error2;
    }, 0);
}
// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
}
function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value)=>result = value, extras);
    return result;
}
function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [
        overriddenMagics,
        ...closestDataStack(el)
    ];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [] } = {})=>{
        let result = func.apply(mergeProxies([
            scope2,
            ...dataStack
        ]), params);
        runIfTypeOfFunction(receiver, result);
    };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) return evaluatorMemo[expression];
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = ()=>{
        try {
            let func2 = new AsyncFunction([
                "__self",
                "scope"
            ], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
            Object.defineProperty(func2, "name", {
                value: `[Alpine] ${expression}`
            });
            return func2;
        } catch (error2) {
            handleError(error2, el, expression);
            return Promise.resolve();
        }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [] } = {})=>{
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([
            scope2,
            ...dataStack
        ]);
        if (typeof func === "function") {
            let promise = func(func, completeScope).catch((error2)=>handleError(error2, el, expression));
            if (func.finished) {
                runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
                func.result = void 0;
            } else promise.then((result)=>{
                runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error2)=>handleError(error2, el, expression)).finally(()=>func.result = void 0);
        }
    };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope2, params);
        if (result instanceof Promise) result.then((i)=>runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2)=>handleError(error2, el, value));
        else receiver(result);
    } else if (typeof value === "object" && value instanceof Promise) value.then((i)=>receiver(i));
    else receiver(value);
}
// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
    return prefixAsString + subject;
}
function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
        before (directive2) {
            if (!directiveHandlers[directive2]) {
                console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
                return;
            }
            const pos = directiveOrder.indexOf(directive2);
            directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
        }
    };
}
function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
        let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value])=>({
                name,
                value
            }));
        let staticAttributes = attributesOnly(vAttributes);
        vAttributes = vAttributes.map((attribute)=>{
            if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
                name: `x-bind:${attribute.name}`,
                value: `"${attribute.value}"`
            };
            return attribute;
        });
        attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName)=>transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2)=>{
        return getDirectiveHandler(el, directive2);
    });
}
function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr)=>!outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback)=>cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup: cleanup2,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = ()=>cleanups.forEach((i)=>i());
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive2) {
    let noop = ()=>{};
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = ()=>{
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler4.inline && handler4.inline(el, directive2, utilities);
        handler4 = handler4.bind(handler4, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
}
var startingWith = (subject, replacement)=>({ name, value })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    };
var into = (i)=>i;
function toTransformedAttributes(callback = ()=>{}) {
    return ({ name, value })=>{
        let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform)=>{
            return transform(carry);
        }, {
            name,
            value
        });
        if (newName !== name) callback(newName, name);
        return {
            name: newName,
            value: newValue
        };
    };
}
var attributeTransformers = [];
function mapAttributes(callback) {
    attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = ()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value })=>{
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
            type: typeMatch ? typeMatch[1] : null,
            value: valueMatch ? valueMatch[1] : null,
            modifiers: modifiers.map((i)=>i.replace(".", "")),
            expression: value,
            original
        };
    };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
];
function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}
// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
    if (Array.isArray(value)) return setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return setClassesFromObject(el, value);
    else if (typeof value === "function") return setClasses(el, value());
    return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
    let split = (classString2)=>classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2)=>classString2.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes)=>{
        el.classList.add(...classes);
        return ()=>{
            el.classList.remove(...classes);
        };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}
// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
    if (typeof value === "object" && value !== null) return setStylesFromObject(el, value);
    return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2])=>{
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) key = kebabCase(key);
        el.style.setProperty(key, value2);
    });
    setTimeout(()=>{
        if (el.style.length === 0) el.removeAttribute("style");
    });
    return ()=>{
        setStyles(el, previousStyles);
    };
}
function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return ()=>{
        el.setAttribute("style", cache || "");
    };
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
// packages/alpinejs/src/utils/once.js
function once(callback, fallback = ()=>{}) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            callback.apply(this, arguments);
        } else fallback.apply(this, arguments);
    };
}
// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "function") expression = evaluate2(expression);
    if (expression === false) return;
    if (!expression || typeof expression === "boolean") registerTransitionsFromHelper(el, modifiers, value);
    else registerTransitionsFromClassString(el, expression, value);
});
function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
        "enter": (classes)=>{
            el._x_transition.enter.during = classes;
        },
        "enter-start": (classes)=>{
            el._x_transition.enter.start = classes;
        },
        "enter-end": (classes)=>{
            el._x_transition.enter.end = classes;
        },
        "leave": (classes)=>{
            el._x_transition.leave.during = classes;
        },
        "leave-start": (classes)=>{
            el._x_transition.leave.start = classes;
        },
        "leave-end": (classes)=>{
            el._x_transition.leave.end = classes;
        }
    };
    directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || [
        "enter"
    ].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || [
        "leave"
    ].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index < modifiers.indexOf("out"));
    if (modifiers.includes("out") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index > modifiers.indexOf("out"));
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
        el._x_transition.enter.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationIn}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
            opacity: 1,
            transform: `scale(1)`
        };
    }
    if (transitioningOut) {
        el._x_transition.leave.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationOut}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
            opacity: 1,
            transform: `scale(1)`
        };
        el._x_transition.leave.end = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
    }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition) el._x_transition = {
        enter: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        leave: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        in (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, before, after);
        },
        out (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, before, after);
        }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = ()=>nextTick2(show);
    if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        else el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject)=>{
        el._x_transition.out(()=>{}, ()=>resolve(hide));
        el._x_transitioning && el._x_transitioning.beforeCancel(()=>reject({
                isFromCancelledTransition: true
            }));
    }) : Promise.resolve(hide);
    queueMicrotask(()=>{
        let closest = closestHide(el);
        if (closest) {
            if (!closest._x_hideChildren) closest._x_hideChildren = [];
            closest._x_hideChildren.push(el);
        } else nextTick2(()=>{
            let hideAfterChildren = (el2)=>{
                let carry = Promise.all([
                    el2._x_hidePromise,
                    ...(el2._x_hideChildren || []).map(hideAfterChildren)
                ]).then(([i])=>i());
                delete el2._x_hidePromise;
                delete el2._x_hideChildren;
                return carry;
            };
            hideAfterChildren(el).catch((e)=>{
                if (!e.isFromCancelledTransition) throw e;
            });
        });
    });
};
function closestHide(el) {
    let parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = ()=>{}, after = ()=>{}) {
    if (el._x_transitioning) el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
        start () {
            undoStart = setFunction(el, start2);
        },
        during () {
            undoDuring = setFunction(el, during);
        },
        before,
        end () {
            undoStart();
            undoEnd = setFunction(el, end);
        },
        after,
        cleanup () {
            undoDuring();
            undoEnd();
        }
    });
}
function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(()=>{
        mutateDom(()=>{
            interrupted = true;
            if (!reachedBefore) stages.before();
            if (!reachedEnd) {
                stages.end();
                releaseNextTicks();
            }
            stages.after();
            if (el.isConnected) stages.cleanup();
            delete el._x_transitioning;
        });
    });
    el._x_transitioning = {
        beforeCancels: [],
        beforeCancel (callback) {
            this.beforeCancels.push(callback);
        },
        cancel: once(function() {
            while(this.beforeCancels.length)this.beforeCancels.shift()();
            finish();
        }),
        finish
    };
    mutateDom(()=>{
        stages.start();
        stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(()=>{
        if (interrupted) return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(()=>{
            stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(()=>{
            if (interrupted) return;
            mutateDom(()=>{
                stages.end();
            });
            releaseNextTicks();
            setTimeout(el._x_transitioning.finish, duration + delay);
            reachedEnd = true;
        });
    });
}
function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1) return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;
    if (key === "scale") {
        if (isNaN(rawValue)) return fallback;
    }
    if (key === "duration" || key === "delay") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
    }
    if (key === "origin") {
        if ([
            "top",
            "right",
            "left",
            "center",
            "bottom"
        ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
            rawValue,
            modifiers[modifiers.indexOf(key) + 2]
        ].join(" ");
    }
    return rawValue;
}
// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = ()=>{}) {
    return (...args)=>isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
    return (...args)=>isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
    interceptors.push(callback);
}
function cloneNode(from, to) {
    interceptors.forEach((i)=>i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(()=>{
        initTree(to, (el, callback)=>{
            callback(el, ()=>{});
        });
    });
    isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
    if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(()=>{
        cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
}
function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback)=>{
        walk(el2, (el3, skip)=>{
            if (hasRunThroughFirstEl && isRoot(el3)) return skip();
            hasRunThroughFirstEl = true;
            callback(el3, skip);
        });
    };
    initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el)=>{
        let storedEffect = cache(callback2);
        release(storedEffect);
        return ()=>{};
    });
    callback();
    overrideEffect(cache);
}
// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings) el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch(name){
        case "value":
            bindInputValue(el, value);
            break;
        case "style":
            bindStyles(el, value);
            break;
        case "class":
            bindClasses(el, value);
            break;
        case "selected":
        case "checked":
            bindAttributeAndProperty(el, name, value);
            break;
        default:
            bindAttribute(el, name, value);
            break;
    }
}
function bindInputValue(el, value) {
    if (el.type === "radio") {
        if (el.attributes.value === void 0) el.value = value;
        if (window.fromModel) {
            if (typeof value === "boolean") el.checked = safeParseBoolean(el.value) === value;
            else el.checked = checkedAttrLooseCompare(el.value, value);
        }
    } else if (el.type === "checkbox") {
        if (Number.isInteger(value)) el.value = value;
        else if (!Array.isArray(value) && typeof value !== "boolean" && ![
            null,
            void 0
        ].includes(value)) el.value = String(value);
        else if (Array.isArray(value)) el.checked = value.some((val)=>checkedAttrLooseCompare(val, el.value));
        else el.checked = !!value;
    } else if (el.tagName === "SELECT") updateSelect(el, value);
    else {
        if (el.value === value) return;
        el.value = value === void 0 ? "" : value;
    }
}
function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
    if ([
        null,
        void 0,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2)=>{
        return value2 + "";
    });
    Array.from(el.options).forEach((option)=>{
        option.selected = arrayWrappedValue.includes(option.value);
    });
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function safeParseBoolean(rawValue) {
    if ([
        1,
        "1",
        "true",
        "on",
        "yes",
        true
    ].includes(rawValue)) return true;
    if ([
        0,
        "0",
        "false",
        "off",
        "no",
        false
    ].includes(rawValue)) return false;
    return rawValue ? Boolean(rawValue) : null;
}
function isBooleanAttr(attrName) {
    const booleanAttributes = [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule"
    ];
    return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}
function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
        let binding = el._x_inlineBindings[name];
        binding.extract = extract;
        return dontAutoEvaluateFunctions(()=>{
            return evaluate(el, binding.expression);
        });
    }
    return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null) return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "") return true;
    if (isBooleanAttr(name)) return !![
        name,
        "true"
    ].includes(attr);
    return attr;
}
// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
// packages/alpinejs/src/entangle.js
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let reference = effect(()=>{
        const outer = outerGet();
        const inner = innerGet();
        if (firstRun) {
            innerSet(cloneIfObject(outer));
            firstRun = false;
            outerHash = JSON.stringify(outer);
        } else {
            const outerHashLatest = JSON.stringify(outer);
            if (outerHashLatest !== outerHash) {
                innerSet(cloneIfObject(outer));
                outerHash = outerHashLatest;
            } else {
                outerSet(cloneIfObject(inner));
                outerHash = JSON.stringify(inner);
            }
        }
        JSON.stringify(innerGet());
        JSON.stringify(outerGet());
    });
    return ()=>{
        release(reference);
    };
}
function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
// packages/alpinejs/src/plugin.js
function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [
        callback
    ];
    callbacks.forEach((i)=>i(alpine_default));
}
// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
    if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
    }
    if (value === void 0) return stores[name];
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") stores[name].init();
    initInterceptors2(stores[name]);
}
function getStores() {
    return stores;
}
// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? ()=>bindings : bindings;
    if (name instanceof Element) return applyBindingsObject(name, getBindings());
    else binds[name] = getBindings;
    return ()=>{};
}
function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback(...args);
                };
            }
        });
    });
    return obj;
}
function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while(cleanupRunners.length)cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value])=>({
            name,
            value
        }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute)=>{
        if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
        };
        return attribute;
    });
    directives(el, attributes, original).map((handle)=>{
        cleanupRunners.push(handle.runCleanups);
        handle();
    });
    return ()=>{
        while(cleanupRunners.length)cleanupRunners.pop()();
    };
}
// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
    datas[name] = callback;
}
function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback.bind(context)(...args);
                };
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/alpine.js
var Alpine = {
    get reactive () {
        return reactive;
    },
    get release () {
        return release;
    },
    get effect () {
        return effect;
    },
    get raw () {
        return raw;
    },
    version: "3.13.3",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    walk,
    data,
    bind: bind2
};
var alpine_default = Alpine;
// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key)=>hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val)=>toTypeString(val) === "[object Map]";
var isString = (val)=>typeof val === "string";
var isSymbol = (val)=>typeof val === "symbol";
var isObject = (val)=>val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value)=>objectToString.call(value);
var toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue)=>value !== oldValue && (value === value || oldValue === oldValue);
// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) fn = fn.raw;
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) effect3();
    return effect3;
}
function stop(effect3) {
    if (effect3.active) {
        cleanup(effect3);
        if (effect3.options.onStop) effect3.options.onStop();
        effect3.active = false;
    }
}
var uid = 0;
function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
        if (!effect3.active) return fn();
        if (!effectStack.includes(effect3)) {
            cleanup(effect3);
            try {
                enableTracking();
                effectStack.push(effect3);
                activeEffect = effect3;
                return fn();
            } finally{
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
}
function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = /* @__PURE__ */ new Set());
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd)=>{
        if (effectsToAdd) effectsToAdd.forEach((effect3)=>{
            if (effect3 !== activeEffect || effect3.allowRecurse) effects.add(effect3);
        });
    };
    if (type === "clear") depsMap.forEach(add2);
    else if (key === "length" && isArray(target)) depsMap.forEach((dep, key2)=>{
        if (key2 === "length" || key2 >= newValue) add2(dep);
    });
    else {
        if (key !== void 0) add2(depsMap.get(key));
        switch(type){
            case "add":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (isIntegerKey(key)) add2(depsMap.get("length"));
                break;
            case "delete":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if (isMap(target)) add2(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const run = (effect3)=>{
        if (effect3.options.onTrigger) effect3.options.onTrigger({
            effect: effect3,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
        });
        if (effect3.options.scheduler) effect3.options.scheduler(effect3);
        else effect3();
    };
    effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = isArray(target);
        if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get", key);
        if (shallow) return res;
        if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (isObject(res)) return isReadonly ? readonly(res) : reactive2(res);
        return res;
    };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
};
var readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
var toReactive = (value)=>isObject(value) ? reactive2(value) : value;
var toReadonly = (value)=>isObject(value) ? readonly(value) : value;
var toShallow = (value)=>value;
var getProto = (v)=>Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get", key);
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has", key);
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
    if (target && target["__v_isReadonly"]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0) return target;
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", ()=>nextTick);
// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el)=>dispatch.bind(dispatch, el));
// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 })=>(key, callback)=>{
        let evaluate2 = evaluateLater2(key);
        let firstTime = true;
        let oldValue;
        let effectReference = effect3(()=>evaluate2((value)=>{
                JSON.stringify(value);
                if (!firstTime) queueMicrotask(()=>{
                    callback(value, oldValue);
                    oldValue = value;
                });
                else oldValue = value;
                firstTime = false;
            }));
        el._x_effects.delete(effectReference);
    });
// packages/alpinejs/src/magics/$store.js
magic("store", getStores);
// packages/alpinejs/src/magics/$data.js
magic("data", (el)=>scope(el));
// packages/alpinejs/src/magics/$root.js
magic("root", (el)=>closestRoot(el));
// packages/alpinejs/src/magics/$refs.js
magic("refs", (el)=>{
    if (el._x_refs_proxy) return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while(currentEl){
        if (currentEl._x_refs) refObjects.push(currentEl._x_refs);
        currentEl = currentEl.parentNode;
    }
    return refObjects;
}
// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
    if (!globalIdMemo[name]) globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
    return findClosest(el, (element)=>{
        if (element._x_ids && element._x_ids[name]) return true;
    });
}
function setIdRoot(el, name) {
    if (!el._x_ids) el._x_ids = {};
    if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
}
// packages/alpinejs/src/magics/$id.js
magic("id", (el)=>(name, key = null)=>{
        let root = closestIdRoot(el, name);
        let id = root ? root._x_ids[name] : findAndIncrementId(name);
        return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    });
// packages/alpinejs/src/magics/$el.js
magic("el", (el)=>el);
// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el)=>warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 })=>{
    let func = evaluateLater2(expression);
    let innerGet = ()=>{
        let result;
        func((i)=>result = i);
        return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val)=>evaluateInnerSet(()=>{}, {
            scope: {
                "__placeholder": val
            }
        });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(()=>{
        if (!el._x_model) return;
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        let releaseEntanglement = entangle({
            get () {
                return outerGet();
            },
            set (value) {
                outerSet(value);
            }
        }, {
            get () {
                return innerGet();
            },
            set (value) {
                innerSet(value);
            }
        });
        cleanup2(releaseEntanglement);
    });
});
// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) el._x_forwardEvents.forEach((eventName)=>{
        clone2.addEventListener(eventName, (e)=>{
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
        });
    });
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2)=>{
        if (modifiers2.includes("prepend")) target2.parentNode.insertBefore(clone3, target2);
        else if (modifiers2.includes("append")) target2.parentNode.insertBefore(clone3, target2.nextSibling);
        else target2.appendChild(clone3);
    };
    mutateDom(()=>{
        placeInDom(clone2, target, modifiers);
        initTree(clone2);
        clone2._x_ignore = true;
    });
    el._x_teleportPutBack = ()=>{
        let target2 = getTarget(expression);
        mutateDom(()=>{
            placeInDom(el._x_teleport, target2, modifiers);
        });
    };
    cleanup2(()=>clone2.remove());
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
    let target = skipDuringClone(()=>{
        return document.querySelector(expression);
    }, ()=>{
        return teleportContainerDuringClone;
    })();
    if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
}
// packages/alpinejs/src/directives/x-ignore.js
var handler = ()=>{};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 })=>{
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(()=>{
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
};
directive("ignore", handler);
// packages/alpinejs/src/directives/x-effect.js
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 })=>{
    effect3(evaluateLater(el, expression));
}));
// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e)=>callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper)=>(e)=>wrapper(callback2, e);
    if (modifiers.includes("dot")) event = dotSyntax(event);
    if (modifiers.includes("camel")) event = camelCase2(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("capture")) options.capture = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
        let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.preventDefault();
        next(e);
    });
    if (modifiers.includes("stop")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.stopPropagation();
        next(e);
    });
    if (modifiers.includes("self")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.target === el && next(e);
    });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler4 = wrapHandler(handler4, (next, e)=>{
            if (el.contains(e.target)) return;
            if (e.target.isConnected === false) return;
            if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
            if (el._x_isShown === false) return;
            next(e);
        });
    }
    if (modifiers.includes("once")) handler4 = wrapHandler(handler4, (next, e)=>{
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
    });
    handler4 = wrapHandler(handler4, (next, e)=>{
        if (isKeyEvent(event)) {
            if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
        }
        next(e);
    });
    listenerTarget.addEventListener(event, handler4, options);
    return ()=>{
        listenerTarget.removeEventListener(event, handler4, options);
    };
}
function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
    if ([
        " ",
        "_"
    ].includes(subject)) return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
    return [
        "keydown",
        "keyup"
    ].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i)=>{
        return ![
            "window",
            "document",
            "prevent",
            "stop",
            "once",
            "capture"
        ].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
        let debounceIndex = keyModifiers.indexOf("throttle");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0) return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    const systemKeyModifiers = [
        "ctrl",
        "shift",
        "alt",
        "meta",
        "cmd",
        "super"
    ];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
            if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
    }
    return true;
}
function keyToModifiers(key) {
    if (!key) return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
        "ctrl": "control",
        "slash": "/",
        "space": " ",
        "spacebar": " ",
        "cmd": "meta",
        "esc": "escape",
        "up": "arrow-up",
        "down": "arrow-down",
        "left": "arrow-left",
        "right": "arrow-right",
        "period": ".",
        "equal": "=",
        "minus": "-",
        "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier)=>{
        if (modifierToKeyMap[modifier] === key) return modifier;
    }).filter((modifier)=>modifier);
}
// packages/alpinejs/src/directives/x-model.js
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let scopeTarget = el;
    if (modifiers.includes("parent")) scopeTarget = el.parentNode;
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    else if (typeof expression === "function" && typeof expression() === "string") evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    else evaluateSet = ()=>{};
    let getValue = ()=>{
        let result;
        evaluateGet((value)=>result = value);
        return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value)=>{
        let result;
        evaluateGet((value2)=>result = value2);
        if (isGetterSetter(result)) result.set(value);
        else evaluateSet(()=>{}, {
            scope: {
                "__placeholder": value
            }
        });
    };
    if (typeof expression === "string" && el.type === "radio") mutateDom(()=>{
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
    var event = el.tagName.toLowerCase() === "select" || [
        "checkbox",
        "radio"
    ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? ()=>{} : on(el, event, modifiers, (e)=>{
        setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
        if ([
            null,
            ""
        ].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue())) el.dispatchEvent(new Event(event, {}));
    }
    if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(()=>el._x_removeModelListeners["default"]());
    if (el.form) {
        let removeResetListener = on(el.form, "reset", [], (e)=>{
            nextTick(()=>el._x_model && el._x_model.set(el.value));
        });
        cleanup2(()=>removeResetListener());
    }
    el._x_model = {
        get () {
            return getValue();
        },
        set (value) {
            setValue(value);
        }
    };
    el._x_forceModelUpdate = (value)=>{
        if (value === void 0 && typeof expression === "string" && expression.match(/\./)) value = "";
        window.fromModel = true;
        mutateDom(()=>bind(el, "value", value));
        delete window.fromModel;
    };
    effect3(()=>{
        let value = getValue();
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate(value);
    });
});
function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(()=>{
        if (event instanceof CustomEvent && event.detail !== void 0) return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
        else if (el.type === "checkbox") {
            if (Array.isArray(currentValue)) {
                let newValue = null;
                if (modifiers.includes("number")) newValue = safeParseNumber(event.target.value);
                else if (modifiers.includes("boolean")) newValue = safeParseBoolean(event.target.value);
                else newValue = event.target.value;
                return event.target.checked ? currentValue.concat([
                    newValue
                ]) : currentValue.filter((el2)=>!checkedAttrLooseCompare2(el2, newValue));
            } else return event.target.checked;
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
            if (modifiers.includes("number")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
            });
            else if (modifiers.includes("boolean")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseBoolean(rawValue);
            });
            return Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
        } else {
            if (modifiers.includes("number")) return safeParseNumber(event.target.value);
            else if (modifiers.includes("boolean")) return safeParseBoolean(event.target.value);
            return modifiers.includes("trim") ? event.target.value.trim() : event.target.value;
        }
    });
}
function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
}
function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el)=>queueMicrotask(()=>mutateDom(()=>el.removeAttribute(prefix("cloak")))));
// packages/alpinejs/src/directives/x-init.js
addInitSelector(()=>`[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "string") return !!expression.trim() && evaluate2(expression, {}, false);
    return evaluate2(expression, {}, false);
}));
// packages/alpinejs/src/directives/x-text.js
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.textContent = value;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-html.js
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.innerHTML = value;
                el._x_ignoreSelf = true;
                initTree(el);
                delete el._x_ignoreSelf;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3 })=>{
    if (!value) {
        let bindingProviders = {};
        injectBindingProviders(bindingProviders);
        let getBindings = evaluateLater(el, expression);
        getBindings((bindings)=>{
            applyBindingsObject(el, bindings, original);
        }, {
            scope: bindingProviders
        });
        return;
    }
    if (value === "key") return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) return;
    let evaluate2 = evaluateLater(el, expression);
    effect3(()=>evaluate2((result)=>{
            if (result === void 0 && typeof expression === "string" && expression.match(/\./)) result = "";
            mutateDom(()=>bind(el, value, result, modifiers));
        }));
};
handler2.inline = (el, { value, modifiers, expression })=>{
    if (!value) return;
    if (!el._x_inlineBindings) el._x_inlineBindings = {};
    el._x_inlineBindings[value] = {
        expression,
        extract: false
    };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
}
// packages/alpinejs/src/directives/x-data.js
addRootSelector(()=>`[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 })=>{
    if (shouldSkipRegisteringDataDuringClone(el)) return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, {
        scope: dataProviderContext
    });
    if (data2 === void 0 || data2 === true) data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors2(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(()=>{
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
    });
});
interceptClone((from, to)=>{
    if (from._x_dataStack) {
        to._x_dataStack = from._x_dataStack;
        to.setAttribute("data-has-alpine-state", true);
    }
});
function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning) return false;
    if (isCloningLegacy) return true;
    return el.hasAttribute("data-has-alpine-state");
}
// packages/alpinejs/src/directives/x-show.js
directive("show", (el, { modifiers, expression }, { effect: effect3 })=>{
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide) el._x_doHide = ()=>{
        mutateDom(()=>{
            el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
    };
    if (!el._x_doShow) el._x_doShow = ()=>{
        mutateDom(()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        });
    };
    let hide = ()=>{
        el._x_doHide();
        el._x_isShown = false;
    };
    let show = ()=>{
        el._x_doShow();
        el._x_isShown = true;
    };
    let clickAwayCompatibleShow = ()=>setTimeout(show);
    let toggle = once((value)=>value ? show() : hide(), (value)=>{
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        else value ? clickAwayCompatibleShow() : hide();
    });
    let oldValue;
    let firstTime = true;
    effect3(()=>evaluate2((value)=>{
            if (!firstTime && value === oldValue) return;
            if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
            toggle(value);
            oldValue = value;
            firstTime = false;
        }));
});
// packages/alpinejs/src/directives/x-for.js
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(()=>loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(()=>{
        Object.values(el._x_lookup).forEach((el2)=>el2.remove());
        delete el._x_prevKeys;
        delete el._x_lookup;
    });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i)=>typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items)=>{
        if (isNumeric3(items) && items >= 0) items = Array.from(Array(items).keys(), (i)=>i + 1);
        if (items === void 0) items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject2(items)) items = Object.entries(items).map(([key, value])=>{
            let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2)=>keys.push(value2), {
                scope: {
                    index: key,
                    ...scope2
                }
            });
            scopes.push(scope2);
        });
        else for(let i = 0; i < items.length; i++){
            let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value)=>keys.push(value), {
                scope: {
                    index: i,
                    ...scope2
                }
            });
            scopes.push(scope2);
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for(let i = 0; i < prevKeys.length; i++){
            let key = prevKeys[i];
            if (keys.indexOf(key) === -1) removes.push(key);
        }
        prevKeys = prevKeys.filter((key)=>!removes.includes(key));
        let lastKey = "template";
        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            let prevIndex = prevKeys.indexOf(key);
            if (prevIndex === -1) {
                prevKeys.splice(i, 0, key);
                adds.push([
                    lastKey,
                    i
                ]);
            } else if (prevIndex !== i) {
                let keyInSpot = prevKeys.splice(i, 1)[0];
                let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
                prevKeys.splice(i, 0, keyForSpot);
                prevKeys.splice(prevIndex, 0, keyInSpot);
                moves.push([
                    keyInSpot,
                    keyForSpot
                ]);
            } else sames.push(key);
            lastKey = key;
        }
        for(let i = 0; i < removes.length; i++){
            let key = removes[i];
            if (!!lookup[key]._x_effects) lookup[key]._x_effects.forEach(dequeueJob);
            lookup[key].remove();
            lookup[key] = null;
            delete lookup[key];
        }
        for(let i = 0; i < moves.length; i++){
            let [keyInSpot, keyForSpot] = moves[i];
            let elInSpot = lookup[keyInSpot];
            let elForSpot = lookup[keyForSpot];
            let marker = document.createElement("div");
            mutateDom(()=>{
                if (!elForSpot) warn(`x-for ":key" is undefined or invalid`, templateEl);
                elForSpot.after(marker);
                elInSpot.after(elForSpot);
                elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
                marker.before(elInSpot);
                elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
                marker.remove();
            });
            elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
        }
        for(let i = 0; i < adds.length; i++){
            let [lastKey2, index] = adds[i];
            let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
            if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
            let scope2 = scopes[index];
            let key = keys[index];
            let clone2 = document.importNode(templateEl.content, true).firstElementChild;
            let reactiveScope = reactive(scope2);
            addScopeToNode(clone2, reactiveScope, templateEl);
            clone2._x_refreshXForScope = (newScope)=>{
                Object.entries(newScope).forEach(([key2, value])=>{
                    reactiveScope[key2] = value;
                });
            };
            mutateDom(()=>{
                lastEl.after(clone2);
                initTree(clone2);
            });
            if (typeof key === "object") warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
            lookup[key] = clone2;
        }
        for(let i = 0; i < sames.length; i++)lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
        templateEl._x_prevKeys = keys;
    });
}
function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.collection = iteratorMatch[2].trim();
    } else res.item = item;
    return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i)=>i.trim());
        names.forEach((name, i)=>{
            scopeVariables[name] = item[i];
        });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i)=>i.trim());
        names.forEach((name)=>{
            scopeVariables[name] = item[name];
        });
    } else scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
}
function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-ref.js
function handler3() {}
handler3.inline = (el, { expression }, { cleanup: cleanup2 })=>{
    let root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(()=>delete root._x_refs[expression]);
};
directive("ref", handler3);
// packages/alpinejs/src/directives/x-if.js
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = ()=>{
        if (el._x_currentIfEl) return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(()=>{
            el.after(clone2);
            initTree(clone2);
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = ()=>{
            walk(clone2, (node)=>{
                if (!!node._x_effects) node._x_effects.forEach(dequeueJob);
            });
            clone2.remove();
            delete el._x_currentIfEl;
        };
        return clone2;
    };
    let hide = ()=>{
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
    };
    effect3(()=>evaluate2((value)=>{
            value ? show() : hide();
        }));
    cleanup2(()=>el._x_undoIf && el._x_undoIf());
});
// packages/alpinejs/src/directives/x-id.js
directive("id", (el, { expression }, { evaluate: evaluate2 })=>{
    let names = evaluate2(expression);
    names.forEach((name)=>setIdRoot(el, name));
});
// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 })=>{
    let evaluate2 = expression ? evaluateLater(el, expression) : ()=>{};
    if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e)=>{
        evaluate2(()=>{}, {
            scope: {
                "$event": e
            },
            params: [
                e
            ]
        });
    });
    cleanup2(()=>removeListener());
}));
// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el)=>warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
    reactive: reactive2,
    effect: effect2,
    release: stop,
    raw: toRaw
});
var src_default = alpine_default;
// packages/alpinejs/builds/module.js
var module_default = src_default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5QjrV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Location", ()=>a);
parcelHelpers.export(exports, "classify", ()=>n);
parcelHelpers.export(exports, "createHistoryRecord", ()=>o);
parcelHelpers.export(exports, "default", ()=>z);
parcelHelpers.export(exports, "delegateEvent", ()=>s);
parcelHelpers.export(exports, "escapeCssIdentifier", ()=>w);
parcelHelpers.export(exports, "forceReflow", ()=>g);
parcelHelpers.export(exports, "getCurrentUrl", ()=>r);
parcelHelpers.export(exports, "isPromise", ()=>p);
parcelHelpers.export(exports, "matchPath", ()=>c);
parcelHelpers.export(exports, "nextTick", ()=>f);
parcelHelpers.export(exports, "query", ()=>d);
parcelHelpers.export(exports, "queryAll", ()=>m);
parcelHelpers.export(exports, "runAsPromise", ()=>v);
parcelHelpers.export(exports, "toMs", ()=>y);
parcelHelpers.export(exports, "updateHistoryRecord", ()=>i);
var _delegateIt = require("delegate-it");
var _delegateItDefault = parcelHelpers.interopDefault(_delegateIt);
var _pathToRegexp = require("path-to-regexp");
const n = (t, e)=>String(t).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || e || "", r = ({ hash: t } = {})=>location.pathname + location.search + (t ? location.hash : ""), o = (t, e = {})=>{
    const n = {
        url: t = t || r({
            hash: !0
        }),
        random: Math.random(),
        source: "swup",
        ...e
    };
    history.pushState(n, "", t);
}, i = (t = null, e = {})=>{
    t = t || r({
        hash: !0
    });
    const n = {
        ...history.state || {},
        url: t,
        random: Math.random(),
        source: "swup",
        ...e
    };
    history.replaceState(n, "", t);
}, s = (e, n, r, o)=>{
    const i = new AbortController;
    return o = {
        ...o,
        signal: i.signal
    }, (0, _delegateItDefault.default)(e, n, r, o), {
        destroy: ()=>i.abort()
    };
};
class a extends URL {
    constructor(t, e = document.baseURI){
        super(t.toString(), e), Object.setPrototypeOf(this, a.prototype);
    }
    get url() {
        return this.pathname + this.search;
    }
    static fromElement(t) {
        const e = t.getAttribute("href") || t.getAttribute("xlink:href") || "";
        return new a(e);
    }
    static fromUrl(t) {
        return new a(t);
    }
}
const c = (t, n)=>{
    try {
        return (0, _pathToRegexp.match)(t, n);
    } catch (e) {
        throw new Error(`[swup] Error parsing path "${String(t)}":\n${String(e)}`);
    }
}, l = function(t, e = {}) {
    try {
        const r = this;
        function n(n) {
            const { status: i, url: s } = u;
            return Promise.resolve(u.text()).then(function(n) {
                if (500 === i) throw r.hooks.call("fetch:error", o, {
                    status: i,
                    response: u,
                    url: s
                }), new h(`Server error: ${s}`, {
                    status: i,
                    url: s
                });
                if (!n) throw new h(`Empty response: ${s}`, {
                    status: i,
                    url: s
                });
                const { url: c } = a.fromUrl(s), l = {
                    url: c,
                    html: n
                };
                return !o.cache.write || e.method && "GET" !== e.method || t !== c || r.cache.set(l.url, l), l;
            });
        }
        t = a.fromUrl(t).url;
        const { visit: o = r.visit } = e, i = {
            ...r.options.requestHeaders,
            ...e.headers
        }, s = e.timeout ?? r.options.timeout, c = new AbortController, { signal: l } = c;
        e = {
            ...e,
            headers: i,
            signal: l
        };
        let u, d = !1, m = null;
        s && s > 0 && (m = setTimeout(()=>{
            d = !0, c.abort("timeout");
        }, s));
        const f = function(n, i) {
            try {
                var s = Promise.resolve(r.hooks.call("fetch:request", o, {
                    url: t,
                    options: e
                }, (t, { url: e, options: n })=>fetch(e, n))).then(function(t) {
                    u = t, m && clearTimeout(m);
                });
            } catch (t) {
                return i(t);
            }
            return s && s.then ? s.then(void 0, i) : s;
        }(0, function(e) {
            if (d) throw r.hooks.call("fetch:timeout", o, {
                url: t
            }), new h(`Request timed out: ${t}`, {
                url: t,
                timedOut: d
            });
            if ("AbortError" === e?.name || l.aborted) throw new h(`Request aborted: ${t}`, {
                url: t,
                aborted: !0
            });
            throw e;
        });
        return Promise.resolve(f && f.then ? f.then(n) : n());
    } catch (p) {
        return Promise.reject(p);
    }
};
class h extends Error {
    constructor(t, e){
        super(t), this.url = void 0, this.status = void 0, this.aborted = void 0, this.timedOut = void 0, this.name = "FetchError", this.url = e.url, this.status = e.status, this.aborted = e.aborted || !1, this.timedOut = e.timedOut || !1;
    }
}
class u {
    constructor(t){
        this.swup = void 0, this.pages = new Map, this.swup = t;
    }
    get size() {
        return this.pages.size;
    }
    get all() {
        const t = new Map;
        return this.pages.forEach((e, n)=>{
            t.set(n, {
                ...e
            });
        }), t;
    }
    has(t) {
        return this.pages.has(this.resolve(t));
    }
    get(t) {
        const e = this.pages.get(this.resolve(t));
        return e ? {
            ...e
        } : e;
    }
    set(t, e) {
        t = this.resolve(t), e = {
            ...e,
            url: t
        }, this.pages.set(t, e), this.swup.hooks.callSync("cache:set", void 0, {
            page: e
        });
    }
    update(t, e) {
        t = this.resolve(t);
        const n = {
            ...this.get(t),
            ...e,
            url: t
        };
        this.pages.set(t, n);
    }
    delete(t) {
        this.pages.delete(this.resolve(t));
    }
    clear() {
        this.pages.clear(), this.swup.hooks.callSync("cache:clear", void 0, void 0);
    }
    prune(t) {
        this.pages.forEach((e, n)=>{
            t(n, e) && this.delete(n);
        });
    }
    resolve(t) {
        const { url: e } = a.fromUrl(t);
        return this.swup.resolveUrl(e);
    }
}
const d = (t, e = document)=>e.querySelector(t), m = (t, e = document)=>Array.from(e.querySelectorAll(t)), f = ()=>new Promise((t)=>{
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                t();
            });
        });
    });
function p(t) {
    return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
}
function v(t, e = []) {
    return new Promise((n, r)=>{
        const o = t(...e);
        p(o) ? o.then(n, r) : n(o);
    });
}
function g(t) {
    return t = t || document.body, t?.offsetHeight;
}
const w = (t)=>window.CSS && window.CSS.escape ? CSS.escape(t) : t, y = (t)=>1e3 * Number(t.slice(0, -1).replace(",", "."));
class P {
    constructor(t){
        this.swup = void 0, this.swupClasses = [
            "to-",
            "is-changing",
            "is-rendering",
            "is-popstate",
            "is-animating",
            "is-leaving"
        ], this.swup = t;
    }
    get selectors() {
        const { scope: t } = this.swup.visit.animation;
        return "containers" === t ? this.swup.visit.containers : "html" === t ? [
            "html"
        ] : Array.isArray(t) ? t : [];
    }
    get selector() {
        return this.selectors.join(",");
    }
    get targets() {
        return this.selector.trim() ? m(this.selector) : [];
    }
    add() {
        this.targets.forEach((t)=>t.classList.add(...[].slice.call(arguments)));
    }
    remove() {
        this.targets.forEach((t)=>t.classList.remove(...[].slice.call(arguments)));
    }
    clear() {
        this.targets.forEach((t)=>{
            const e = t.className.split(" ").filter((t)=>this.isSwupClass(t));
            t.classList.remove(...e);
        });
    }
    isSwupClass(t) {
        return this.swupClasses.some((e)=>t.startsWith(e));
    }
}
class k {
    constructor(t, e){
        this.id = void 0, this.state = void 0, this.from = void 0, this.to = void 0, this.containers = void 0, this.animation = void 0, this.trigger = void 0, this.cache = void 0, this.history = void 0, this.scroll = void 0;
        const { to: n, from: r = t.currentPageUrl, hash: o, el: i, event: s } = e;
        this.id = Math.random(), this.state = 1, this.from = {
            url: r
        }, this.to = {
            url: n,
            hash: o
        }, this.containers = t.options.containers, this.animation = {
            animate: !0,
            wait: !1,
            name: void 0,
            native: t.options.native,
            scope: t.options.animationScope,
            selector: t.options.animationSelector
        }, this.trigger = {
            el: i,
            event: s
        }, this.cache = {
            read: t.options.cache,
            write: t.options.cache
        }, this.history = {
            action: "push",
            popstate: !1,
            direction: void 0
        }, this.scroll = {
            reset: !0,
            target: void 0
        };
    }
    advance(t) {
        this.state < t && (this.state = t);
    }
    abort() {
        this.state = 8;
    }
    get done() {
        return this.state >= 7;
    }
}
function b(t) {
    return new k(this, t);
}
const S = "undefined" != typeof Symbol ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function E(t, e, n) {
    if (!t.s) {
        if (n instanceof U) {
            if (!n.s) return void (n.o = E.bind(null, t, e));
            1 & e && (e = n.s), n = n.v;
        }
        if (n && n.then) return void n.then(E.bind(null, t, e), E.bind(null, t, 2));
        t.s = e, t.v = n;
        const r = t.o;
        r && r(t);
    }
}
const U = /*#__PURE__*/ function() {
    function t() {}
    return t.prototype.then = function(e, n) {
        const r = new t, o = this.s;
        if (o) {
            const t = 1 & o ? e : n;
            if (t) {
                try {
                    E(r, 1, t(this.v));
                } catch (t) {
                    E(r, 2, t);
                }
                return r;
            }
            return this;
        }
        return this.o = function(t) {
            try {
                const o = t.v;
                1 & t.s ? E(r, 1, e ? e(o) : o) : n ? E(r, 1, n(o)) : E(r, 2, o);
            } catch (t) {
                E(r, 2, t);
            }
        }, r;
    }, t;
}();
function C(t) {
    return t instanceof U && 1 & t.s;
}
class $ {
    constructor(t){
        this.swup = void 0, this.registry = new Map, this.hooks = [
            "animation:out:start",
            "animation:out:await",
            "animation:out:end",
            "animation:in:start",
            "animation:in:await",
            "animation:in:end",
            "animation:skip",
            "cache:clear",
            "cache:set",
            "content:replace",
            "content:scroll",
            "enable",
            "disable",
            "fetch:request",
            "fetch:error",
            "fetch:timeout",
            "history:popstate",
            "link:click",
            "link:self",
            "link:anchor",
            "link:newtab",
            "page:load",
            "page:view",
            "scroll:top",
            "scroll:anchor",
            "visit:start",
            "visit:transition",
            "visit:abort",
            "visit:end"
        ], this.swup = t, this.init();
    }
    init() {
        this.hooks.forEach((t)=>this.create(t));
    }
    create(t) {
        this.registry.has(t) || this.registry.set(t, new Map);
    }
    exists(t) {
        return this.registry.has(t);
    }
    get(t) {
        const e = this.registry.get(t);
        if (e) return e;
        console.error(`Unknown hook '${t}'`);
    }
    clear() {
        this.registry.forEach((t)=>t.clear());
    }
    on(t, e, n = {}) {
        const r = this.get(t);
        if (!r) return console.warn(`Hook '${t}' not found.`), ()=>{};
        const o = {
            ...n,
            id: r.size + 1,
            hook: t,
            handler: e
        };
        return r.set(e, o), ()=>this.off(t, e);
    }
    before(t, e, n = {}) {
        return this.on(t, e, {
            ...n,
            before: !0
        });
    }
    replace(t, e, n = {}) {
        return this.on(t, e, {
            ...n,
            replace: !0
        });
    }
    once(t, e, n = {}) {
        return this.on(t, e, {
            ...n,
            once: !0
        });
    }
    off(t, e) {
        const n = this.get(t);
        n && e ? n.delete(e) || console.warn(`Handler for hook '${t}' not found.`) : n && n.clear();
    }
    call(t, e, n, r) {
        try {
            const o = this, [i, s, a] = o.parseCallArgs(t, e, n, r), { before: c, handler: l, after: h } = o.getHandlers(t, a);
            return Promise.resolve(o.run(c, i, s)).then(function() {
                return Promise.resolve(o.run(l, i, s)).then(function([e]) {
                    return Promise.resolve(o.run(h, i, s)).then(function() {
                        return o.dispatchDomEvent(t, i, s), e;
                    });
                });
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }
    callSync(t, e, n, r) {
        const [o, i, s] = this.parseCallArgs(t, e, n, r), { before: a, handler: c, after: l } = this.getHandlers(t, s);
        this.runSync(a, o, i);
        const [h] = this.runSync(c, o, i);
        return this.runSync(l, o, i), this.dispatchDomEvent(t, o, i), h;
    }
    parseCallArgs(t, e, n, r) {
        return e instanceof k || "object" != typeof e && "function" != typeof n ? [
            e,
            n,
            r
        ] : [
            void 0,
            e,
            n
        ];
    }
    run(t, e, n) {
        try {
            const r = this, o = [], i = function(t, e, n) {
                if ("function" == typeof t[S]) {
                    var r, o, i, s = t[S]();
                    if (function t(n) {
                        try {
                            for(; !(r = s.next()).done;)if ((n = e(r.value)) && n.then) {
                                if (!C(n)) return void n.then(t, i || (i = E.bind(null, o = new U, 2)));
                                n = n.v;
                            }
                            o ? E(o, 1, n) : o = n;
                        } catch (t) {
                            E(o || (o = new U), 2, t);
                        }
                    }(), s.return) {
                        var a = function(t) {
                            try {
                                r.done || s.return();
                            } catch (t) {}
                            return t;
                        };
                        if (o && o.then) return o.then(a, function(t) {
                            throw a(t);
                        });
                        a();
                    }
                    return o;
                }
                if (!("length" in t)) throw new TypeError("Object is not iterable");
                for(var c = [], l = 0; l < t.length; l++)c.push(t[l]);
                return function(t, e, n) {
                    var r, o, i = -1;
                    return function n(s) {
                        try {
                            for(; ++i < t.length;)if ((s = e(i)) && s.then) {
                                if (!C(s)) return void s.then(n, o || (o = E.bind(null, r = new U, 2)));
                                s = s.v;
                            }
                            r ? E(r, 1, s) : r = s;
                        } catch (t) {
                            E(r || (r = new U), 2, t);
                        }
                    }(), r;
                }(c, function(t) {
                    return e(c[t]);
                });
            }(t, function({ hook: t, handler: i, defaultHandler: s, once: a }) {
                if (!e?.done) return a && r.off(t, i), Promise.resolve(v(i, [
                    e || r.swup.visit,
                    n,
                    s
                ])).then(function(t) {
                    o.push(t);
                });
            });
            return Promise.resolve(i && i.then ? i.then(function() {
                return o;
            }) : o);
        } catch (t) {
            return Promise.reject(t);
        }
    }
    runSync(t, e, n) {
        const r = [];
        for (const { hook: o, handler: i, defaultHandler: s, once: a } of t){
            if (e?.done) continue;
            a && this.off(o, i);
            const t = i(e || this.swup.visit, n, s);
            r.push(t), p(t) && console.warn(`Promise returned from handler for synchronous hook '${o}'.Swup will not wait for it to resolve.`);
        }
        return r;
    }
    getHandlers(t, e) {
        const n = this.get(t);
        if (!n) return {
            found: !1,
            before: [],
            handler: [],
            after: [],
            replaced: !1
        };
        const r = Array.from(n.values()), o = this.sortRegistrations, i = r.filter(({ before: t, replace: e })=>t && !e).sort(o), s = r.filter(({ replace: t })=>t).filter((t)=>!0).sort(o), a = r.filter(({ before: t, replace: e })=>!t && !e).sort(o), c = s.length > 0;
        let l = [];
        if (e && (l = [
            {
                id: 0,
                hook: t,
                handler: e
            }
        ], c)) {
            const n = s.length - 1, r = (t)=>{
                const n = s[t - 1];
                return n ? (e, o)=>n.handler(e, o, r(t - 1)) : e;
            };
            l = [
                {
                    id: 0,
                    hook: t,
                    handler: s[n].handler,
                    defaultHandler: r(n)
                }
            ];
        }
        return {
            found: !0,
            before: i,
            handler: l,
            after: a,
            replaced: c
        };
    }
    sortRegistrations(t, e) {
        return (t.priority ?? 0) - (e.priority ?? 0) || t.id - e.id || 0;
    }
    dispatchDomEvent(t, e, n) {
        if (e?.done) return;
        const r = {
            hook: t,
            args: n,
            visit: e || this.swup.visit
        };
        document.dispatchEvent(new CustomEvent("swup:any", {
            detail: r,
            bubbles: !0
        })), document.dispatchEvent(new CustomEvent(`swup:${t}`, {
            detail: r,
            bubbles: !0
        }));
    }
}
const x = (t)=>{
    if (t && "#" === t.charAt(0) && (t = t.substring(1)), !t) return null;
    const e = decodeURIComponent(t);
    let n = document.getElementById(t) || document.getElementById(e) || d(`a[name='${w(t)}']`) || d(`a[name='${w(e)}']`);
    return n || "top" !== t || (n = document.body), n;
}, A = function({ elements: t, selector: e }) {
    try {
        if (!1 === e && !t) return Promise.resolve();
        let n = [];
        if (t) n = Array.from(t);
        else if (e && (n = m(e, document.body), !n.length)) return console.warn(`[swup] No elements found matching animationSelector \`${e}\``), Promise.resolve();
        const r = n.map((t)=>(function(t) {
                const { type: e, timeout: n, propCount: r } = function(t, e) {
                    const n = window.getComputedStyle(t), r = q(n, `${H}Delay`), o = q(n, `${H}Duration`), i = V(r, o), s = q(n, `${j}Delay`), a = q(n, `${j}Duration`), c = V(s, a);
                    let l = null, h = 0, u = 0;
                    return e === H ? i > 0 && (l = H, h = i, u = o.length) : e === j ? c > 0 && (l = j, h = c, u = a.length) : (h = Math.max(i, c), l = h > 0 ? i > c ? H : j : null, u = l ? l === H ? o.length : a.length : 0), {
                        type: l,
                        timeout: h,
                        propCount: u
                    };
                }(t);
                return !(!e || !n) && new Promise((o)=>{
                    const i = `${e}end`, s = performance.now();
                    let a = 0;
                    const c = ()=>{
                        t.removeEventListener(i, l), o();
                    }, l = (e)=>{
                        if (e.target === t) {
                            if (!function(t) {
                                return [
                                    `${H}end`,
                                    `${j}end`
                                ].includes(t.type);
                            }(e)) throw new Error("Not a transition or animation event.");
                            (performance.now() - s) / 1e3 < e.elapsedTime || ++a >= r && c();
                        }
                    };
                    setTimeout(()=>{
                        a < r && c();
                    }, n + 1), t.addEventListener(i, l);
                });
            })(t));
        return r.filter(Boolean).length > 0 ? Promise.resolve(Promise.all(r)).then(function() {}) : (e && console.warn(`[swup] No CSS animation duration defined on elements matching \`${e}\``), Promise.resolve());
    } catch (t) {
        return Promise.reject(t);
    }
}, H = "transition", j = "animation";
function q(t, e) {
    return (t[e] || "").split(", ");
}
function V(t, e) {
    for(; t.length < e.length;)t = t.concat(t);
    return Math.max(...e.map((e, n)=>y(e) + y(t[n])));
}
const I = function(t, e = {}) {
    try {
        let a;
        const c = this;
        function s(s) {
            if (a) return s;
            c.navigating = !0, c.visit = t;
            const { el: l } = t.trigger;
            e.referrer = e.referrer || c.currentPageUrl, !1 === e.animate && (t.animation.animate = !1), t.animation.animate || c.classes.clear();
            const h = e.history || l?.getAttribute("data-swup-history") || void 0;
            h && [
                "push",
                "replace"
            ].includes(h) && (t.history.action = h);
            const u = e.animation || l?.getAttribute("data-swup-animation") || void 0;
            return u && (t.animation.name = u), "object" == typeof e.cache ? (t.cache.read = e.cache.read ?? t.cache.read, t.cache.write = e.cache.write ?? t.cache.write) : void 0 !== e.cache && (t.cache = {
                read: !!e.cache,
                write: !!e.cache
            }), delete e.cache, function(s, a) {
                try {
                    var l = Promise.resolve(c.hooks.call("visit:start", t, void 0)).then(function() {
                        function s() {
                            if (!t.done) return Promise.resolve(c.hooks.call("visit:transition", t, void 0, function() {
                                try {
                                    let n;
                                    function e(e) {
                                        return n ? e : (t.advance(4), Promise.resolve(c.animatePageOut(t)).then(function() {
                                            function e() {
                                                return Promise.resolve(c.animatePageIn(t)).then(function() {});
                                            }
                                            const n = function() {
                                                if (t.animation.native && document.startViewTransition) return Promise.resolve(document.startViewTransition(function() {
                                                    try {
                                                        const e = c.renderPage;
                                                        return Promise.resolve(a).then(function(n) {
                                                            return Promise.resolve(e.call(c, t, n));
                                                        });
                                                    } catch (t) {
                                                        return Promise.reject(t);
                                                    }
                                                }).finished).then(function() {});
                                                {
                                                    const e = c.renderPage;
                                                    return Promise.resolve(a).then(function(n) {
                                                        return Promise.resolve(e.call(c, t, n)).then(function() {});
                                                    });
                                                }
                                            }();
                                            return n && n.then ? n.then(e) : e();
                                        }));
                                    }
                                    const r = function() {
                                        if (!t.animation.animate) return Promise.resolve(c.hooks.call("animation:skip", void 0)).then(function() {
                                            const e = c.renderPage;
                                            return Promise.resolve(a).then(function(r) {
                                                return Promise.resolve(e.call(c, t, r)).then(function() {
                                                    n = 1;
                                                });
                                            });
                                        });
                                    }();
                                    return Promise.resolve(r && r.then ? r.then(e) : e(r));
                                } catch (o) {
                                    return Promise.reject(o);
                                }
                            })).then(function() {
                                if (!t.done) return Promise.resolve(c.hooks.call("visit:end", t, void 0, ()=>c.classes.clear())).then(function() {
                                    t.state = 7, c.navigating = !1, c.onVisitEnd && (c.onVisitEnd(), c.onVisitEnd = void 0);
                                });
                            });
                        }
                        t.state = 3;
                        const a = c.hooks.call("page:load", t, {
                            options: e
                        }, function(t, e) {
                            try {
                                function n(t) {
                                    return e.page = t, e.cache = !!r, e.page;
                                }
                                let r;
                                return t.cache.read && (r = c.cache.get(t.to.url)), Promise.resolve(r ? n(r) : Promise.resolve(c.fetchPage(t.to.url, e.options)).then(n));
                            } catch (o) {
                                return Promise.reject(o);
                            }
                        });
                        if (a.then(({ html: e })=>{
                            t.advance(5), t.to.html = e;
                        }), !t.history.popstate) {
                            const e = t.to.url + t.to.hash;
                            "replace" === t.history.action || t.to.url === c.currentPageUrl ? i(e) : (c.currentHistoryIndex++, o(e, {
                                index: c.currentHistoryIndex
                            }));
                        }
                        c.currentPageUrl = r(), t.history.popstate && c.classes.add("is-popstate"), t.animation.name && c.classes.add(`to-${n(t.animation.name)}`);
                        const l = function() {
                            if (t.animation.wait) return Promise.resolve(a).then(function() {});
                        }();
                        return l && l.then ? l.then(s) : s();
                    });
                } catch (t) {
                    return a(t);
                }
                return l && l.then ? l.then(void 0, a) : l;
            }(0, function(e) {
                e && !e?.aborted ? (t.state = 9, console.error(e), c.options.skipPopStateHandling = ()=>(window.location.href = t.to.url + t.to.hash, !0), window.history.go(-1)) : t.state = 8;
            });
        }
        const l = function() {
            if (c.navigating) return function() {
                if (!(c.visit.state >= 6)) return Promise.resolve(c.hooks.call("visit:abort", c.visit, void 0)).then(function() {
                    c.visit.state = 8;
                });
                t.state = 2, c.onVisitEnd = ()=>c.performNavigation(t, e), a = 1;
            }();
        }();
        return Promise.resolve(l && l.then ? l.then(s) : s(l));
    } catch (h) {
        return Promise.reject(h);
    }
};
function L(t, e = {}, n = {}) {
    if ("string" != typeof t) throw new Error("swup.navigate() requires a URL parameter");
    if (this.shouldIgnoreVisit(t, {
        el: n.el,
        event: n.event
    })) return void (window.location.href = t);
    const { url: r, hash: o } = a.fromUrl(t), i = this.createVisit({
        ...n,
        to: r,
        hash: o
    });
    this.performNavigation(i, e);
}
const R = function(t) {
    try {
        const e = this;
        return Promise.resolve(e.hooks.call("animation:out:start", t, void 0, ()=>{
            e.classes.add("is-changing", "is-animating", "is-leaving");
        })).then(function() {
            return Promise.resolve(e.hooks.call("animation:out:await", t, {
                skip: !1
            }, (t, { skip: n })=>{
                if (!n) return e.awaitAnimations({
                    selector: t.animation.selector
                });
            })).then(function() {
                return Promise.resolve(e.hooks.call("animation:out:end", t, void 0)).then(function() {});
            });
        });
    } catch (t) {
        return Promise.reject(t);
    }
}, T = function({ html: t }, { containers: e } = this.options) {
    const n = (new DOMParser).parseFromString(t, "text/html"), r = n.querySelector("title")?.innerText || "";
    document.title = r;
    const o = m('[data-swup-persist]:not([data-swup-persist=""])'), i = e.map((t)=>{
        const e = document.querySelector(t), r = n.querySelector(t);
        return e && r ? (e.replaceWith(r), !0) : (e || console.warn(`[swup] Container missing in current document: ${t}`), r || console.warn(`[swup] Container missing in incoming document: ${t}`), !1);
    }).filter(Boolean);
    return o.forEach((t)=>{
        const e = t.getAttribute("data-swup-persist"), n = d(`[data-swup-persist="${e}"]`);
        n && n !== t && n.replaceWith(t);
    }), i.length === e.length;
}, N = function(t) {
    const e = {
        behavior: "auto"
    }, { target: n, reset: r } = t.scroll, o = n ?? t.to.hash;
    let i = !1;
    return o && (i = this.hooks.callSync("scroll:anchor", t, {
        hash: o,
        options: e
    }, (t, { hash: e, options: n })=>{
        const r = this.getAnchorElement(e);
        return r && r.scrollIntoView(n), !!r;
    })), r && !i && (i = this.hooks.callSync("scroll:top", t, {
        options: e
    }, (t, { options: e })=>(window.scrollTo({
            top: 0,
            left: 0,
            ...e
        }), !0))), i;
}, D = function(t) {
    try {
        const e = this;
        if (t.done) return Promise.resolve();
        const n = e.hooks.call("animation:in:await", t, {
            skip: !1
        }, (t, { skip: n })=>{
            if (!n) return e.awaitAnimations({
                selector: t.animation.selector
            });
        });
        return Promise.resolve(f()).then(function() {
            return Promise.resolve(e.hooks.call("animation:in:start", t, void 0, ()=>{
                e.classes.remove("is-animating");
            })).then(function() {
                return Promise.resolve(n).then(function() {
                    return Promise.resolve(e.hooks.call("animation:in:end", t, void 0)).then(function() {});
                });
            });
        });
    } catch (t) {
        return Promise.reject(t);
    }
}, M = function(t, e) {
    try {
        const o = this;
        if (t.done) return Promise.resolve();
        t.advance(6);
        const { url: s } = e;
        return o.classes.remove("is-leaving"), o.isSameResolvedUrl(r(), s) || (i(s), o.currentPageUrl = r(), t.to.url = o.currentPageUrl), t.animation.animate && o.classes.add("is-rendering"), Promise.resolve(o.hooks.call("content:replace", t, {
            page: e
        }, (t, { page: e })=>{
            if (!o.replaceContent(e, {
                containers: t.containers
            })) throw new Error("[swup] Container mismatch, aborting");
            t.animation.animate && (o.classes.add("is-changing", "is-animating", "is-rendering"), t.animation.name && o.classes.add(`to-${n(t.animation.name)}`));
        })).then(function() {
            return Promise.resolve(o.hooks.call("content:scroll", t, void 0, ()=>o.scrollToContent(t))).then(function() {
                return Promise.resolve(o.hooks.call("page:view", t, {
                    url: o.currentPageUrl,
                    title: document.title
                })).then(function() {});
            });
        });
    } catch (t) {
        return Promise.reject(t);
    }
}, O = function(t) {
    var e;
    if (e = t, Boolean(e?.isSwupPlugin)) {
        if (t.swup = this, !t._checkRequirements || t._checkRequirements()) return t._beforeMount && t._beforeMount(), t.mount(), this.plugins.push(t), this.plugins;
    } else console.error("Not a swup plugin instance", t);
};
function W(t) {
    const e = this.findPlugin(t);
    if (e) return e.unmount(), e._afterUnmount && e._afterUnmount(), this.plugins = this.plugins.filter((t)=>t !== e), this.plugins;
    console.error("No such plugin", e);
}
function B(t) {
    return this.plugins.find((e)=>e === t || e.name === t || e.name === `Swup${String(t)}`);
}
function _(t) {
    if ("function" != typeof this.options.resolveUrl) return console.warn("[swup] options.resolveUrl expects a callback function."), t;
    const e = this.options.resolveUrl(t);
    return e && "string" == typeof e ? e.startsWith("//") || e.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t) : e : (console.warn("[swup] options.resolveUrl needs to return a url"), t);
}
function F(t, e) {
    return this.resolveUrl(t) === this.resolveUrl(e);
}
const K = {
    animateHistoryBrowsing: !1,
    animationSelector: '[class*="transition-"]',
    animationScope: "html",
    cache: !0,
    containers: [
        "#swup"
    ],
    ignoreVisit: (t, { el: e } = {})=>!!e?.closest("[data-no-swup]"),
    linkSelector: "a[href]",
    linkToSelf: "scroll",
    native: !1,
    plugins: [],
    resolveUrl: (t)=>t,
    requestHeaders: {
        "X-Requested-With": "swup",
        Accept: "text/html, application/xhtml+xml"
    },
    skipPopStateHandling: (t)=>"swup" !== t.state?.source,
    timeout: 0
};
class z {
    constructor(t = {}){
        this.version = "4.5.0", this.options = void 0, this.defaults = K, this.plugins = [], this.visit = void 0, this.cache = void 0, this.hooks = void 0, this.classes = void 0, this.currentPageUrl = r(), this.currentHistoryIndex = void 0, this.clickDelegate = void 0, this.navigating = !1, this.onVisitEnd = void 0, this.use = O, this.unuse = W, this.findPlugin = B, this.log = ()=>{}, this.navigate = L, this.performNavigation = I, this.createVisit = b, this.delegateEvent = s, this.fetchPage = l, this.awaitAnimations = A, this.renderPage = M, this.replaceContent = T, this.animatePageIn = D, this.animatePageOut = R, this.scrollToContent = N, this.getAnchorElement = x, this.getCurrentUrl = r, this.resolveUrl = _, this.isSameResolvedUrl = F, this.options = {
            ...this.defaults,
            ...t
        }, this.handleLinkClick = this.handleLinkClick.bind(this), this.handlePopState = this.handlePopState.bind(this), this.cache = new u(this), this.classes = new P(this), this.hooks = new $(this), this.visit = this.createVisit({
            to: ""
        }), this.currentHistoryIndex = history.state?.index ?? 1, this.checkRequirements() && this.enable();
    }
    checkRequirements() {
        return "undefined" != typeof Promise || (console.warn("Promise is not supported"), !1);
    }
    enable() {
        try {
            const t = this, { linkSelector: e } = t.options;
            return t.clickDelegate = t.delegateEvent(e, "click", t.handleLinkClick), window.addEventListener("popstate", t.handlePopState), t.options.animateHistoryBrowsing && (window.history.scrollRestoration = "manual"), t.options.native = t.options.native && !!document.startViewTransition, t.options.plugins.forEach((e)=>t.use(e)), "swup" !== history.state?.source && i(null, {
                index: t.currentHistoryIndex
            }), Promise.resolve(f()).then(function() {
                return Promise.resolve(t.hooks.call("enable", void 0, void 0, ()=>{
                    const e = document.documentElement;
                    e.classList.add("swup-enabled"), e.classList.toggle("swup-native", t.options.native);
                })).then(function() {});
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }
    destroy() {
        try {
            const t = this;
            return t.clickDelegate.destroy(), window.removeEventListener("popstate", t.handlePopState), t.cache.clear(), t.options.plugins.forEach((e)=>t.unuse(e)), Promise.resolve(t.hooks.call("disable", void 0, void 0, ()=>{
                const t = document.documentElement;
                t.classList.remove("swup-enabled"), t.classList.remove("swup-native");
            })).then(function() {
                t.hooks.clear();
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }
    shouldIgnoreVisit(t, { el: e, event: n } = {}) {
        const { origin: r, url: o, hash: i } = a.fromUrl(t);
        return r !== window.location.origin || !(!e || !this.triggerWillOpenNewWindow(e)) || !!this.options.ignoreVisit(o + i, {
            el: e,
            event: n
        });
    }
    handleLinkClick(t) {
        const e = t.delegateTarget, { href: n, url: r, hash: o } = a.fromElement(e);
        if (this.shouldIgnoreVisit(n, {
            el: e,
            event: t
        })) return;
        if (this.navigating && r === this.visit.to.url) return void t.preventDefault();
        const s = this.createVisit({
            to: r,
            hash: o,
            el: e,
            event: t
        });
        t.metaKey || t.ctrlKey || t.shiftKey || t.altKey ? this.hooks.callSync("link:newtab", s, {
            href: n
        }) : 0 === t.button && this.hooks.callSync("link:click", s, {
            el: e,
            event: t
        }, ()=>{
            const e = s.from.url ?? "";
            t.preventDefault(), r && r !== e ? this.isSameResolvedUrl(r, e) || this.performNavigation(s) : o ? this.hooks.callSync("link:anchor", s, {
                hash: o
            }, ()=>{
                i(r + o), this.scrollToContent(s);
            }) : this.hooks.callSync("link:self", s, void 0, ()=>{
                "navigate" === this.options.linkToSelf ? this.performNavigation(s) : (i(r), this.scrollToContent(s));
            });
        });
    }
    handlePopState(t) {
        const e = t.state?.url ?? location.href;
        if (this.options.skipPopStateHandling(t)) return;
        if (this.isSameResolvedUrl(r(), this.currentPageUrl)) return;
        const { url: n, hash: o } = a.fromUrl(e), i = this.createVisit({
            to: n,
            hash: o,
            event: t
        });
        i.history.popstate = !0;
        const s = t.state?.index ?? 0;
        s && s !== this.currentHistoryIndex && (i.history.direction = s - this.currentHistoryIndex > 0 ? "forwards" : "backwards", this.currentHistoryIndex = s), i.animation.animate = !1, i.scroll.reset = !1, i.scroll.target = !1, this.options.animateHistoryBrowsing && (i.animation.animate = !0, i.scroll.reset = !0), this.hooks.callSync("history:popstate", i, {
            event: t
        }, ()=>{
            this.performNavigation(i);
        });
    }
    triggerWillOpenNewWindow(t) {
        return !!t.matches('[download], [target="_blank"]');
    }
}

},{"delegate-it":"8XKdG","path-to-regexp":"4T8UM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XKdG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _delegateJsDefault.default));
parcelHelpers.export(exports, "oneEvent", ()=>(0, _oneEventJsDefault.default));
var _delegateJs = require("./delegate.js");
parcelHelpers.exportAll(_delegateJs, exports);
var _delegateJsDefault = parcelHelpers.interopDefault(_delegateJs);
var _oneEventJs = require("./one-event.js");
var _oneEventJsDefault = parcelHelpers.interopDefault(_oneEventJs);

},{"./delegate.js":"5OGHy","./one-event.js":"iETTn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OGHy":[function(require,module,exports) {
/** Keeps track of raw listeners added to the base elements to avoid duplication */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const ledger = new WeakMap();
function editLedger(wanted, baseElement, callback, setup) {
    if (!wanted && !ledger.has(baseElement)) return false;
    const elementMap = ledger.get(baseElement) ?? new WeakMap();
    ledger.set(baseElement, elementMap);
    const setups = elementMap.get(callback) ?? new Set();
    elementMap.set(callback, setups);
    const existed = setups.has(setup);
    if (wanted) setups.add(setup);
    else setups.delete(setup);
    return existed && wanted;
}
function safeClosest(event, selector) {
    let target = event.target;
    if (target instanceof Text) target = target.parentElement;
    if (target instanceof Element && event.currentTarget instanceof Element) {
        // `.closest()` may match ancestors of `currentTarget` but we only need its children
        const closest = target.closest(selector);
        if (closest && event.currentTarget.contains(closest)) return closest;
    }
}
// This type isn't exported as a declaration, so it needs to be duplicated above
function delegate(selector, type, callback, options = {}) {
    const { signal, base = document } = options;
    if (signal?.aborted) return;
    // Don't pass `once` to `addEventListener` because it needs to be handled in `delegate-it`
    const { once, ...nativeListenerOptions } = options;
    // `document` should never be the base, it's just an easy way to define "global event listeners"
    const baseElement = base instanceof Document ? base.documentElement : base;
    // Handle the regular Element usage
    const capture = Boolean(typeof options === "object" ? options.capture : options);
    const listenerFn = (event)=>{
        const delegateTarget = safeClosest(event, selector);
        if (delegateTarget) {
            const delegateEvent = Object.assign(event, {
                delegateTarget
            });
            callback.call(baseElement, delegateEvent);
            if (once) {
                baseElement.removeEventListener(type, listenerFn, nativeListenerOptions);
                editLedger(false, baseElement, callback, setup);
            }
        }
    };
    const setup = JSON.stringify({
        selector,
        type,
        capture
    });
    const isAlreadyListening = editLedger(true, baseElement, callback, setup);
    if (!isAlreadyListening) baseElement.addEventListener(type, listenerFn, nativeListenerOptions);
    signal?.addEventListener("abort", ()=>{
        editLedger(false, baseElement, callback, setup);
    });
}
exports.default = delegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iETTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _delegateJs = require("./delegate.js");
var _delegateJsDefault = parcelHelpers.interopDefault(_delegateJs);
// This type isn't exported as a declaration, so it needs to be duplicated above
async function oneEvent(selector, type, options = {}) {
    return new Promise((resolve)=>{
        options.once = true;
        if (options.signal?.aborted) resolve(undefined);
        options.signal?.addEventListener("abort", ()=>{
            resolve(undefined);
        });
        (0, _delegateJsDefault.default)(selector, type, // @ts-expect-error Seems to work fine
        resolve, options);
    });
}
exports.default = oneEvent;

},{"./delegate.js":"5OGHy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4T8UM":[function(require,module,exports) {
/**
 * Tokenize input string.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parse a string for the raw tokens.
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Compile a string to a template function for the path.
 */ parcelHelpers.export(exports, "compile", ()=>compile);
/**
 * Expose a method for transforming tokens into the path function.
 */ parcelHelpers.export(exports, "tokensToFunction", ()=>tokensToFunction);
/**
 * Create path match function from `path-to-regexp` spec.
 */ parcelHelpers.export(exports, "match", ()=>match);
/**
 * Create a path match function from `path-to-regexp` output.
 */ parcelHelpers.export(exports, "regexpToFunction", ()=>regexpToFunction);
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ parcelHelpers.export(exports, "tokensToRegexp", ()=>tokensToRegexp);
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ parcelHelpers.export(exports, "pathToRegexp", ()=>pathToRegexp);
function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(j));
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError("Capturing groups are not allowed at ".concat(j));
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern) throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function parse(str, options) {
    if (options === void 0) options = {};
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function() {
        var result = "";
        var value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
    if (options === void 0) options = {};
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
        }
        return path;
    };
}
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
    if (options === void 0) options = {};
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        };
        for(var i = 1; i < m.length; i++)_loop_1(i);
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) options = {};
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") route += escapeString(encode(token));
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    } else route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                } else if (token.modifier === "+" || token.modifier === "*") route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                else route += "(".concat(token.pattern, ")").concat(token.modifier);
            } else route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
        }
    }
    if (end) {
        if (!strict) route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        if (!isEndDelimited) route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
    return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqcBy":[function(require,module,exports) {
var global = arguments[3];
"object" == typeof navigator && function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(e, t, i) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var s = i.call(e, t || "default");
                    if ("object" != typeof s) return s;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            }(e, "string");
            return "symbol" == typeof t ? t : String(t);
        }(t)) in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e;
    }
    function t(e, t) {
        for(var i = 0; i < t.length; i++){
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
        }
    }
    function i(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e;
    }
    function s(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t && (s = s.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, s);
        }
        return i;
    }
    function n(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach(function(t) {
                i(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    var a = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };
    var l = function(e) {
        return null != e ? e.constructor : null;
    }, r = function(e, t) {
        return !!(e && t && e instanceof t);
    }, o = function(e) {
        return null == e;
    }, c = function(e) {
        return l(e) === Object;
    }, u = function(e) {
        return l(e) === String;
    }, h = function(e) {
        return Array.isArray(e);
    }, d = function(e) {
        return r(e, NodeList);
    }, m = {
        nullOrUndefined: o,
        object: c,
        number: function(e) {
            return l(e) === Number && !Number.isNaN(e);
        },
        string: u,
        boolean: function(e) {
            return l(e) === Boolean;
        },
        function: function(e) {
            return l(e) === Function;
        },
        array: h,
        nodeList: d,
        element: function(e) {
            return r(e, Element);
        },
        event: function(e) {
            return r(e, Event);
        },
        empty: function(e) {
            return o(e) || (u(e) || h(e) || d(e)) && !e.length || c(e) && !Object.keys(e).length;
        }
    };
    function p(e, t) {
        if (1 > t) {
            var i = function(e) {
                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
            }(t);
            return parseFloat(e.toFixed(i));
        }
        return Math.round(e / t) * t;
    }
    var g = function() {
        function e(t, i) {
            (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e), m.element(t) ? this.element = t : m.string(t) && (this.element = document.querySelector(t)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n({}, a, {}, i), this.init());
        }
        return function(e, i, s) {
            i && t(e.prototype, i), s && t(e, s);
        }(e, [
            {
                key: "init",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
                }
            },
            {
                key: "destroy",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
                }
            },
            {
                key: "listeners",
                value: function(e) {
                    var t = this, i = e ? "addEventListener" : "removeEventListener";
                    [
                        "touchstart",
                        "touchmove",
                        "touchend"
                    ].forEach(function(e) {
                        t.element[i](e, function(e) {
                            return t.set(e);
                        }, !1);
                    });
                }
            },
            {
                key: "get",
                value: function(t) {
                    if (!e.enabled || !m.event(t)) return null;
                    var i, s = t.target, n = t.changedTouches[0], a = parseFloat(s.getAttribute("min")) || 0, l = parseFloat(s.getAttribute("max")) || 100, r = parseFloat(s.getAttribute("step")) || 1, o = s.getBoundingClientRect(), c = 100 / o.width * (this.config.thumbWidth / 2) / 100;
                    return 0 > (i = 100 / o.width * (n.clientX - o.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + p(i / 100 * (l - a), r);
                }
            },
            {
                key: "set",
                value: function(t) {
                    e.enabled && m.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                        if (e && t) {
                            var i = new Event(t, {
                                bubbles: !0
                            });
                            e.dispatchEvent(i);
                        }
                    }(t.target, "touchend" === t.type ? "change" : "input"));
                }
            }
        ], [
            {
                key: "setup",
                value: function(t) {
                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = null;
                    if (m.empty(t) || m.string(t) ? s = Array.from(document.querySelectorAll(m.string(t) ? t : 'input[type="range"]')) : m.element(t) ? s = [
                        t
                    ] : m.nodeList(t) ? s = Array.from(t) : m.array(t) && (s = t.filter(m.element)), m.empty(s)) return null;
                    var l = n({}, a, {}, i);
                    if (m.string(t) && l.watch) {
                        var r = new MutationObserver(function(i) {
                            Array.from(i).forEach(function(i) {
                                Array.from(i.addedNodes).forEach(function(i) {
                                    m.element(i) && function(e, t) {
                                        return (function() {
                                            return Array.from(document.querySelectorAll(t)).includes(this);
                                        }).call(e, t);
                                    }(i, t) && new e(i, l);
                                });
                            });
                        });
                        r.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        });
                    }
                    return s.map(function(t) {
                        return new e(t, i);
                    });
                }
            },
            {
                key: "enabled",
                get: function() {
                    return "ontouchstart" in document.documentElement;
                }
            }
        ]), e;
    }();
    const f = (e)=>null != e ? e.constructor : null, y = (e, t)=>Boolean(e && t && e instanceof t), b = (e)=>null == e, v = (e)=>f(e) === Object, w = (e)=>f(e) === String, T = (e)=>"function" == typeof e, k = (e)=>Array.isArray(e), C = (e)=>y(e, NodeList), A = (e)=>b(e) || (w(e) || k(e) || C(e)) && !e.length || v(e) && !Object.keys(e).length;
    var S = {
        nullOrUndefined: b,
        object: v,
        number: (e)=>f(e) === Number && !Number.isNaN(e),
        string: w,
        boolean: (e)=>f(e) === Boolean,
        function: T,
        array: k,
        weakMap: (e)=>y(e, WeakMap),
        nodeList: C,
        element: (e)=>null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
        textNode: (e)=>f(e) === Text,
        event: (e)=>y(e, Event),
        keyboardEvent: (e)=>y(e, KeyboardEvent),
        cue: (e)=>y(e, window.TextTrackCue) || y(e, window.VTTCue),
        track: (e)=>y(e, TextTrack) || !b(e) && w(e.kind),
        promise: (e)=>y(e, Promise) && T(e.then),
        url: (e)=>{
            if (y(e, window.URL)) return !0;
            if (!w(e)) return !1;
            let t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = `http://${e}`);
            try {
                return !A(new URL(t).hostname);
            } catch (e) {
                return !1;
            }
        },
        empty: A
    };
    const E = (()=>{
        const e = document.createElement("span"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, i = Object.keys(t).find((t)=>void 0 !== e.style[t]);
        return !!S.string(i) && t[i];
    })();
    function P(e, t) {
        setTimeout(()=>{
            try {
                e.hidden = !0, e.offsetHeight, e.hidden = !1;
            } catch (e) {}
        }, t);
    }
    var M = {
        isIE: Boolean(window.document.documentMode),
        isEdge: /Edge/g.test(navigator.userAgent),
        isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent),
        isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
        isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
        isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1
    };
    function N(e, t) {
        return t.split(".").reduce((e, t)=>e && e[t], e);
    }
    function x(e = {}, ...t) {
        if (!t.length) return e;
        const i = t.shift();
        return S.object(i) ? (Object.keys(i).forEach((t)=>{
            S.object(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {
                [t]: {}
            }), x(e[t], i[t])) : Object.assign(e, {
                [t]: i[t]
            });
        }), x(e, ...t)) : e;
    }
    function L(e, t) {
        const i = e.length ? e : [
            e
        ];
        Array.from(i).reverse().forEach((e, i)=>{
            const s = i > 0 ? t.cloneNode(!0) : t, n = e.parentNode, a = e.nextSibling;
            s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
        });
    }
    function I(e, t) {
        S.element(e) && !S.empty(t) && Object.entries(t).filter(([, e])=>!S.nullOrUndefined(e)).forEach(([t, i])=>e.setAttribute(t, i));
    }
    function $(e, t, i) {
        const s = document.createElement(e);
        return S.object(t) && I(s, t), S.string(i) && (s.innerText = i), s;
    }
    function _(e, t, i, s) {
        S.element(t) && t.appendChild($(e, i, s));
    }
    function O(e) {
        S.nodeList(e) || S.array(e) ? Array.from(e).forEach(O) : S.element(e) && S.element(e.parentNode) && e.parentNode.removeChild(e);
    }
    function j(e) {
        if (!S.element(e)) return;
        let { length: t } = e.childNodes;
        for(; t > 0;)e.removeChild(e.lastChild), t -= 1;
    }
    function q(e, t) {
        return S.element(t) && S.element(t.parentNode) && S.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
    }
    function D(e, t) {
        if (!S.string(e) || S.empty(e)) return {};
        const i = {}, s = x({}, t);
        return e.split(",").forEach((e)=>{
            const t = e.trim(), n = t.replace(".", ""), a = t.replace(/[[\]]/g, "").split("="), [l] = a, r = a.length > 1 ? a[1].replace(/["']/g, "") : "";
            switch(t.charAt(0)){
                case ".":
                    S.string(s.class) ? i.class = `${s.class} ${n}` : i.class = n;
                    break;
                case "#":
                    i.id = t.replace("#", "");
                    break;
                case "[":
                    i[l] = r;
            }
        }), x(s, i);
    }
    function H(e, t) {
        if (!S.element(e)) return;
        let i = t;
        S.boolean(i) || (i = !e.hidden), e.hidden = i;
    }
    function R(e, t, i) {
        if (S.nodeList(e)) return Array.from(e).map((e)=>R(e, t, i));
        if (S.element(e)) {
            let s = "toggle";
            return void 0 !== i && (s = i ? "add" : "remove"), e.classList[s](t), e.classList.contains(t);
        }
        return !1;
    }
    function F(e, t) {
        return S.element(e) && e.classList.contains(t);
    }
    function V(e, t) {
        const { prototype: i } = Element;
        return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t)).includes(this);
        }).call(e, t);
    }
    function U(e) {
        return this.elements.container.querySelectorAll(e);
    }
    function B(e) {
        return this.elements.container.querySelector(e);
    }
    function W(e = null, t = !1) {
        S.element(e) && e.focus({
            preventScroll: !0,
            focusVisible: t
        });
    }
    const z = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
    }, K = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check (e, t) {
            const i = K[e] || "html5" !== t;
            return {
                api: i,
                ui: i && K.rangeInput
            };
        },
        pip: !(M.isIPhone || !S.function($("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $("video").disablePictureInPicture)),
        airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime (e) {
            if (S.empty(e)) return !1;
            const [t] = e.split("/");
            let i = e;
            if (!this.isHTML5 || t !== this.type) return !1;
            Object.keys(z).includes(i) && (i += `; codecs="${z[e]}"`);
            try {
                return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
            } catch (e) {
                return !1;
            }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (()=>{
            const e = document.createElement("input");
            return e.type = "range", "range" === e.type;
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== E,
        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
    }, Y = (()=>{
        let e = !1;
        try {
            const t = Object.defineProperty({}, "passive", {
                get: ()=>(e = !0, null)
            });
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
    })();
    function Q(e, t, i, s = !1, n = !0, a = !1) {
        if (!e || !("addEventListener" in e) || S.empty(t) || !S.function(i)) return;
        const l = t.split(" ");
        let r = a;
        Y && (r = {
            passive: n,
            capture: a
        }), l.forEach((t)=>{
            this && this.eventListeners && s && this.eventListeners.push({
                element: e,
                type: t,
                callback: i,
                options: r
            }), e[s ? "addEventListener" : "removeEventListener"](t, i, r);
        });
    }
    function X(e, t = "", i, s = !0, n = !1) {
        Q.call(this, e, t, i, !0, s, n);
    }
    function J(e, t = "", i, s = !0, n = !1) {
        Q.call(this, e, t, i, !1, s, n);
    }
    function G(e, t = "", i, s = !0, n = !1) {
        const a = (...l)=>{
            J(e, t, a, s, n), i.apply(this, l);
        };
        Q.call(this, e, t, a, !0, s, n);
    }
    function Z(e, t = "", i = !1, s = {}) {
        if (!S.element(e) || S.empty(t)) return;
        const n = new CustomEvent(t, {
            bubbles: i,
            detail: {
                ...s,
                plyr: this
            }
        });
        e.dispatchEvent(n);
    }
    function ee() {
        this && this.eventListeners && (this.eventListeners.forEach((e)=>{
            const { element: t, type: i, callback: s, options: n } = e;
            t.removeEventListener(i, s, n);
        }), this.eventListeners = []);
    }
    function te() {
        return new Promise((e)=>this.ready ? setTimeout(e, 0) : X.call(this, this.elements.container, "ready", e)).then(()=>{});
    }
    function ie(e) {
        S.promise(e) && e.then(null, ()=>{});
    }
    function se(e) {
        return S.array(e) ? e.filter((t, i)=>e.indexOf(t) === i) : e;
    }
    function ne(e, t) {
        return S.array(e) && e.length ? e.reduce((e, i)=>Math.abs(i - t) < Math.abs(e - t) ? i : e) : null;
    }
    function ae(e) {
        return !(!window || !window.CSS) && window.CSS.supports(e);
    }
    const le = [
        [
            1,
            1
        ],
        [
            4,
            3
        ],
        [
            3,
            4
        ],
        [
            5,
            4
        ],
        [
            4,
            5
        ],
        [
            3,
            2
        ],
        [
            2,
            3
        ],
        [
            16,
            10
        ],
        [
            10,
            16
        ],
        [
            16,
            9
        ],
        [
            9,
            16
        ],
        [
            21,
            9
        ],
        [
            9,
            21
        ],
        [
            32,
            9
        ],
        [
            9,
            32
        ]
    ].reduce((e, [t, i])=>({
            ...e,
            [t / i]: [
                t,
                i
            ]
        }), {});
    function re(e) {
        if (!(S.array(e) || S.string(e) && e.includes(":"))) return !1;
        return (S.array(e) ? e : e.split(":")).map(Number).every(S.number);
    }
    function oe(e) {
        if (!S.array(e) || !e.every(S.number)) return null;
        const [t, i] = e, s = (e, t)=>0 === t ? e : s(t, e % t), n = s(t, i);
        return [
            t / n,
            i / n
        ];
    }
    function ce(e) {
        const t = (e)=>re(e) ? e.split(":").map(Number) : null;
        let i = t(e);
        if (null === i && (i = t(this.config.ratio)), null === i && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ ratio: i } = this.embed), null === i && this.isHTML5) {
            const { videoWidth: e, videoHeight: t } = this.media;
            i = [
                e,
                t
            ];
        }
        return oe(i);
    }
    function ue(e) {
        if (!this.isVideo) return {};
        const { wrapper: t } = this.elements, i = ce.call(this, e);
        if (!S.array(i)) return {};
        const [s, n] = oe(i), a = 100 / s * n;
        if (ae(`aspect-ratio: ${s}/${n}`) ? t.style.aspectRatio = `${s}/${n}` : t.style.paddingBottom = `${a}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i = (e - a) / (e / 50);
            this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`;
        } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
        return {
            padding: a,
            ratio: i
        };
    }
    function he(e, t, i = .05) {
        const s = e / t, n = ne(Object.keys(le), s);
        return Math.abs(n - s) <= i ? le[n] : [
            e,
            t
        ];
    }
    const de = {
        getSources () {
            if (!this.isHTML5) return [];
            return Array.from(this.media.querySelectorAll("source")).filter((e)=>{
                const t = e.getAttribute("type");
                return !!S.empty(t) || K.mime.call(this, t);
            });
        },
        getQualityOptions () {
            return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e)=>Number(e.getAttribute("size"))).filter(Boolean);
        },
        setup () {
            if (!this.isHTML5) return;
            const e = this;
            e.options.speed = e.config.speed.options, S.empty(this.config.ratio) || ue.call(e), Object.defineProperty(e.media, "quality", {
                get () {
                    const t = de.getSources.call(e).find((t)=>t.getAttribute("src") === e.source);
                    return t && Number(t.getAttribute("size"));
                },
                set (t) {
                    if (e.quality !== t) {
                        if (e.config.quality.forced && S.function(e.config.quality.onChange)) e.config.quality.onChange(t);
                        else {
                            const i = de.getSources.call(e).find((e)=>Number(e.getAttribute("size")) === t);
                            if (!i) return;
                            const { currentTime: s, paused: n, preload: a, readyState: l, playbackRate: r } = e.media;
                            e.media.src = i.getAttribute("src"), ("none" !== a || l) && (e.once("loadedmetadata", ()=>{
                                e.speed = r, e.currentTime = s, n || ie(e.play());
                            }), e.media.load());
                        }
                        Z.call(e, e.media, "qualitychange", !1, {
                            quality: t
                        });
                    }
                }
            });
        },
        cancelRequests () {
            this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        }
    };
    function me(e, ...t) {
        return S.empty(e) ? e : e.toString().replace(/{(\d+)}/g, (e, i)=>t[i].toString());
    }
    const pe = (e = "", t = "", i = "")=>e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()), ge = (e = "")=>e.toString().replace(/\w\S*/g, (e)=>e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
    function fe(e = "") {
        let t = e.toString();
        return t = function(e = "") {
            let t = e.toString();
            return t = pe(t, "-", " "), t = pe(t, "_", " "), t = ge(t), pe(t, " ", "");
        }(t), t.charAt(0).toLowerCase() + t.slice(1);
    }
    function ye(e) {
        const t = document.createElement("div");
        return t.appendChild(e), t.innerHTML;
    }
    const be = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube"
    }, ve = {
        get (e = "", t = {}) {
            if (S.empty(e) || S.empty(t)) return "";
            let i = N(t.i18n, e);
            if (S.empty(i)) return Object.keys(be).includes(e) ? be[e] : "";
            const s = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(s).forEach(([e, t])=>{
                i = pe(i, e, t);
            }), i;
        }
    };
    class we {
        constructor(t){
            e(this, "get", (e)=>{
                if (!we.supported || !this.enabled) return null;
                const t = window.localStorage.getItem(this.key);
                if (S.empty(t)) return null;
                const i = JSON.parse(t);
                return S.string(e) && e.length ? i[e] : i;
            }), e(this, "set", (e)=>{
                if (!we.supported || !this.enabled) return;
                if (!S.object(e)) return;
                let t = this.get();
                S.empty(t) && (t = {}), x(t, e);
                try {
                    window.localStorage.setItem(this.key, JSON.stringify(t));
                } catch (e) {}
            }), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
        }
        static get supported() {
            try {
                if (!("localStorage" in window)) return !1;
                const e = "___test";
                return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
            } catch (e) {
                return !1;
            }
        }
    }
    function Te(e, t = "text") {
        return new Promise((i, s)=>{
            try {
                const s = new XMLHttpRequest;
                if (!("withCredentials" in s)) return;
                s.addEventListener("load", ()=>{
                    if ("text" === t) try {
                        i(JSON.parse(s.responseText));
                    } catch (e) {
                        i(s.responseText);
                    }
                    else i(s.response);
                }), s.addEventListener("error", ()=>{
                    throw new Error(s.status);
                }), s.open("GET", e, !0), s.responseType = t, s.send();
            } catch (e) {
                s(e);
            }
        });
    }
    function ke(e, t) {
        if (!S.string(e)) return;
        const i = "cache", s = S.string(t);
        let n = !1;
        const a = ()=>null !== document.getElementById(t), l = (e, t)=>{
            e.innerHTML = t, s && a() || document.body.insertAdjacentElement("afterbegin", e);
        };
        if (!s || !a()) {
            const a = we.supported, r = document.createElement("div");
            if (r.setAttribute("hidden", ""), s && r.setAttribute("id", t), a) {
                const e = window.localStorage.getItem(`${i}-${t}`);
                if (n = null !== e, n) {
                    const t = JSON.parse(e);
                    l(r, t.content);
                }
            }
            Te(e).then((e)=>{
                if (!S.empty(e)) {
                    if (a) try {
                        window.localStorage.setItem(`${i}-${t}`, JSON.stringify({
                            content: e
                        }));
                    } catch (e) {}
                    l(r, e);
                }
            }).catch(()=>{});
        }
    }
    const Ce = (e)=>Math.trunc(e / 60 / 60 % 60, 10), Ae = (e)=>Math.trunc(e / 60 % 60, 10), Se = (e)=>Math.trunc(e % 60, 10);
    function Ee(e = 0, t = !1, i = !1) {
        if (!S.number(e)) return Ee(void 0, t, i);
        const s = (e)=>`0${e}`.slice(-2);
        let n = Ce(e);
        const a = Ae(e), l = Se(e);
        return n = t || n > 0 ? `${n}:` : "", `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(l)}`;
    }
    const Pe = {
        getIconUrl () {
            const e = new URL(this.config.iconUrl, window.location), t = window.location.host ? window.location.host : window.top.location.host, i = e.host !== t || M.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: i
            };
        },
        findElements () {
            try {
                return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: U.call(this, this.config.selectors.buttons.play),
                    pause: B.call(this, this.config.selectors.buttons.pause),
                    restart: B.call(this, this.config.selectors.buttons.restart),
                    rewind: B.call(this, this.config.selectors.buttons.rewind),
                    fastForward: B.call(this, this.config.selectors.buttons.fastForward),
                    mute: B.call(this, this.config.selectors.buttons.mute),
                    pip: B.call(this, this.config.selectors.buttons.pip),
                    airplay: B.call(this, this.config.selectors.buttons.airplay),
                    settings: B.call(this, this.config.selectors.buttons.settings),
                    captions: B.call(this, this.config.selectors.buttons.captions),
                    fullscreen: B.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: B.call(this, this.config.selectors.inputs.seek),
                    volume: B.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: B.call(this, this.config.selectors.display.buffer),
                    currentTime: B.call(this, this.config.selectors.display.currentTime),
                    duration: B.call(this, this.config.selectors.display.duration)
                }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0;
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
            }
        },
        createIcon (e, t) {
            const i = "http://www.w3.org/2000/svg", s = Pe.getIconUrl.call(this), n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`, a = document.createElementNS(i, "svg");
            I(a, x(t, {
                "aria-hidden": "true",
                focusable: "false"
            }));
            const l = document.createElementNS(i, "use"), r = `${n}-${e}`;
            return "href" in l && l.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r), a.appendChild(l), a;
        },
        createLabel (e, t = {}) {
            const i = ve.get(e, this.config);
            return $("span", {
                ...t,
                class: [
                    t.class,
                    this.config.classNames.hidden
                ].filter(Boolean).join(" ")
            }, i);
        },
        createBadge (e) {
            if (S.empty(e)) return null;
            const t = $("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild($("span", {
                class: this.config.classNames.menu.badge
            }, e)), t;
        },
        createButton (e, t) {
            const i = x({}, t);
            let s = fe(e);
            const n = {
                element: "button",
                toggle: !1,
                label: null,
                icon: null,
                labelPressed: null,
                iconPressed: null
            };
            switch([
                "element",
                "icon",
                "label"
            ].forEach((e)=>{
                Object.keys(i).includes(e) && (n[e] = i[e], delete i[e]);
            }), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((e)=>e === this.config.classNames.control) || x(i, {
                class: `${i.class} ${this.config.classNames.control}`
            }) : i.class = this.config.classNames.control, e){
                case "play":
                    n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                    break;
                case "mute":
                    n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                    break;
                case "captions":
                    n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
                    break;
                case "fullscreen":
                    n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
                    break;
                case "play-large":
                    i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
                    break;
                default:
                    S.empty(n.label) && (n.label = s), S.empty(n.icon) && (n.icon = e);
            }
            const a = $(n.element);
            return n.toggle ? (a.appendChild(Pe.createIcon.call(this, n.iconPressed, {
                class: "icon--pressed"
            })), a.appendChild(Pe.createIcon.call(this, n.icon, {
                class: "icon--not-pressed"
            })), a.appendChild(Pe.createLabel.call(this, n.labelPressed, {
                class: "label--pressed"
            })), a.appendChild(Pe.createLabel.call(this, n.label, {
                class: "label--not-pressed"
            }))) : (a.appendChild(Pe.createIcon.call(this, n.icon)), a.appendChild(Pe.createLabel.call(this, n.label))), x(i, D(this.config.selectors.buttons[s], i)), I(a, i), "play" === s ? (S.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a;
        },
        createRange (e, t) {
            const i = $("input", x(D(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": ve.get(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = i, Pe.updateRangeFill.call(this, i), g.setup(i), i;
        },
        createProgress (e, t) {
            const i = $("progress", x(D(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                i.appendChild($("span", null, "0"));
                const t = {
                    played: "played",
                    buffer: "buffered"
                }[e], s = t ? ve.get(t, this.config) : "";
                i.innerText = `% ${s.toLowerCase()}`;
            }
            return this.elements.display[e] = i, i;
        },
        createTime (e, t) {
            const i = D(this.config.selectors.display[e], t), s = $("div", x(i, {
                class: `${i.class ? i.class : ""} ${this.config.classNames.display.time} `.trim(),
                "aria-label": ve.get(e, this.config),
                role: "timer"
            }), "00:00");
            return this.elements.display[e] = s, s;
        },
        bindMenuItemShortcuts (e, t) {
            X.call(this, e, "keydown keyup", (i)=>{
                if (![
                    " ",
                    "ArrowUp",
                    "ArrowDown",
                    "ArrowRight"
                ].includes(i.key)) return;
                if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
                const s = V(e, '[role="menuitemradio"]');
                if (!s && [
                    " ",
                    "ArrowRight"
                ].includes(i.key)) Pe.showMenuPanel.call(this, t, !0);
                else {
                    let t;
                    " " !== i.key && ("ArrowDown" === i.key || s && "ArrowRight" === i.key ? (t = e.nextElementSibling, S.element(t) || (t = e.parentNode.firstElementChild)) : (t = e.previousElementSibling, S.element(t) || (t = e.parentNode.lastElementChild)), W.call(this, t, !0));
                }
            }, !1), X.call(this, e, "keyup", (e)=>{
                "Return" === e.key && Pe.focusFirstMenuItem.call(this, null, !0);
            });
        },
        createMenuItem ({ value: e, list: t, type: i, title: s, badge: n = null, checked: a = !1 }) {
            const l = D(this.config.selectors.inputs[i]), r = $("button", x(l, {
                type: "button",
                role: "menuitemradio",
                class: `${this.config.classNames.control} ${l.class ? l.class : ""}`.trim(),
                "aria-checked": a,
                value: e
            })), o = $("span");
            o.innerHTML = s, S.element(n) && o.appendChild(n), r.appendChild(o), Object.defineProperty(r, "checked", {
                enumerable: !0,
                get: ()=>"true" === r.getAttribute("aria-checked"),
                set (e) {
                    e && Array.from(r.parentNode.children).filter((e)=>V(e, '[role="menuitemradio"]')).forEach((e)=>e.setAttribute("aria-checked", "false")), r.setAttribute("aria-checked", e ? "true" : "false");
                }
            }), this.listeners.bind(r, "click keyup", (t)=>{
                if (!S.keyboardEvent(t) || " " === t.key) {
                    switch(t.preventDefault(), t.stopPropagation(), r.checked = !0, i){
                        case "language":
                            this.currentTrack = Number(e);
                            break;
                        case "quality":
                            this.quality = e;
                            break;
                        case "speed":
                            this.speed = parseFloat(e);
                    }
                    Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t));
                }
            }, i, !1), Pe.bindMenuItemShortcuts.call(this, r, i), t.appendChild(r);
        },
        formatTime (e = 0, t = !1) {
            if (!S.number(e)) return e;
            return Ee(e, Ce(this.duration) > 0, t);
        },
        updateTimeDisplay (e = null, t = 0, i = !1) {
            S.element(e) && S.number(t) && (e.innerText = Pe.formatTime(t, i));
        },
        updateVolume () {
            this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        },
        setRange (e, t = 0) {
            S.element(e) && (e.value = t, Pe.updateRangeFill.call(this, e));
        },
        updateProgress (e) {
            if (!this.supported.ui || !S.event(e)) return;
            let t = 0;
            const i = (e, t)=>{
                const i = S.number(t) ? t : 0, s = S.element(e) ? e : this.elements.display.buffer;
                if (S.element(s)) {
                    s.value = i;
                    const e = s.getElementsByTagName("span")[0];
                    S.element(e) && (e.childNodes[0].nodeValue = i);
                }
            };
            if (e) switch(e.type){
                case "timeupdate":
                case "seeking":
                case "seeked":
                    s = this.currentTime, n = this.duration, t = 0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n) ? 0 : (s / n * 100).toFixed(2), "timeupdate" === e.type && Pe.setRange.call(this, this.elements.inputs.seek, t);
                    break;
                case "playing":
                case "progress":
                    i(this.elements.display.buffer, 100 * this.buffered);
            }
            var s, n;
        },
        updateRangeFill (e) {
            const t = S.event(e) ? e.target : e;
            if (S.element(t) && "range" === t.getAttribute("type")) {
                if (V(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    const e = Pe.formatTime(this.currentTime), i = Pe.formatTime(this.duration), s = ve.get("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i));
                } else if (V(t, this.config.selectors.inputs.volume)) {
                    const e = 100 * t.value;
                    t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
                } else t.setAttribute("aria-valuenow", t.value);
                (M.isWebKit || M.isIPadOS) && t.style.setProperty("--value", t.value / t.max * 100 + "%");
            }
        },
        updateSeekTooltip (e) {
            var t, i;
            if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
            const s = this.elements.display.seekTooltip, n = `${this.config.classNames.tooltip}--visible`, a = (e)=>R(s, n, e);
            if (this.touch) return void a(!1);
            let l = 0;
            const r = this.elements.progress.getBoundingClientRect();
            if (S.event(e)) l = 100 / r.width * (e.pageX - r.left);
            else {
                if (!F(s, n)) return;
                l = parseFloat(s.style.left, 10);
            }
            l < 0 ? l = 0 : l > 100 && (l = 100);
            const o = this.duration / 100 * l;
            s.innerText = Pe.formatTime(o);
            const c = null === (t = this.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find(({ time: e })=>e === Math.round(o));
            c && s.insertAdjacentHTML("afterbegin", `${c.label}<br>`), s.style.left = `${l}%`, S.event(e) && [
                "mouseenter",
                "mouseleave"
            ].includes(e.type) && a("mouseenter" === e.type);
        },
        timeUpdate (e) {
            const t = !S.element(this.elements.display.duration) && this.config.invertTime;
            Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Pe.updateProgress.call(this, e);
        },
        durationUpdate () {
            if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
            if (this.duration >= 2 ** 32) return H(this.elements.display.currentTime, !0), void H(this.elements.progress, !0);
            S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            const e = S.element(this.elements.display.duration);
            !e && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
        },
        toggleMenuButton (e, t) {
            H(this.elements.settings.buttons[e], !t);
        },
        updateSetting (e, t, i) {
            const s = this.elements.settings.panels[e];
            let n = null, a = t;
            if ("captions" === e) n = this.currentTrack;
            else {
                if (n = S.empty(i) ? this[e] : i, S.empty(n) && (n = this.config[e].default), !S.empty(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
                if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
            }
            if (S.element(a) || (a = s && s.querySelector('[role="menu"]')), !S.element(a)) return;
            this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = Pe.getLabel.call(this, e, n);
            const l = a && a.querySelector(`[value="${n}"]`);
            S.element(l) && (l.checked = !0);
        },
        getLabel (e, t) {
            switch(e){
                case "speed":
                    return 1 === t ? ve.get("normal", this.config) : `${t}&times;`;
                case "quality":
                    if (S.number(t)) {
                        const e = ve.get(`qualityLabel.${t}`, this.config);
                        return e.length ? e : `${t}p`;
                    }
                    return ge(t);
                case "captions":
                    return xe.getLabel.call(this);
                default:
                    return null;
            }
        },
        setQualityMenu (e) {
            if (!S.element(this.elements.settings.panels.quality)) return;
            const t = "quality", i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
            S.array(e) && (this.options.quality = se(e).filter((e)=>this.config.quality.options.includes(e)));
            const s = !S.empty(this.options.quality) && this.options.quality.length > 1;
            if (Pe.toggleMenuButton.call(this, t, s), j(i), Pe.checkMenu.call(this), !s) return;
            const n = (e)=>{
                const t = ve.get(`qualityBadge.${e}`, this.config);
                return t.length ? Pe.createBadge.call(this, t) : null;
            };
            this.options.quality.sort((e, t)=>{
                const i = this.config.quality.options;
                return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
            }).forEach((e)=>{
                Pe.createMenuItem.call(this, {
                    value: e,
                    list: i,
                    type: t,
                    title: Pe.getLabel.call(this, "quality", e),
                    badge: n(e)
                });
            }), Pe.updateSetting.call(this, t, i);
        },
        setCaptionsMenu () {
            if (!S.element(this.elements.settings.panels.captions)) return;
            const e = "captions", t = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i = xe.getTracks.call(this), s = Boolean(i.length);
            if (Pe.toggleMenuButton.call(this, e, s), j(t), Pe.checkMenu.call(this), !s) return;
            const n = i.map((e, i)=>({
                    value: i,
                    checked: this.captions.toggled && this.currentTrack === i,
                    title: xe.getLabel.call(this, e),
                    badge: e.language && Pe.createBadge.call(this, e.language.toUpperCase()),
                    list: t,
                    type: "language"
                }));
            n.unshift({
                value: -1,
                checked: !this.captions.toggled,
                title: ve.get("disabled", this.config),
                list: t,
                type: "language"
            }), n.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e, t);
        },
        setSpeedMenu () {
            if (!S.element(this.elements.settings.panels.speed)) return;
            const e = "speed", t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
            this.options.speed = this.options.speed.filter((e)=>e >= this.minimumSpeed && e <= this.maximumSpeed);
            const i = !S.empty(this.options.speed) && this.options.speed.length > 1;
            Pe.toggleMenuButton.call(this, e, i), j(t), Pe.checkMenu.call(this), i && (this.options.speed.forEach((i)=>{
                Pe.createMenuItem.call(this, {
                    value: i,
                    list: t,
                    type: e,
                    title: Pe.getLabel.call(this, "speed", i)
                });
            }), Pe.updateSetting.call(this, e, t));
        },
        checkMenu () {
            const { buttons: e } = this.elements.settings, t = !S.empty(e) && Object.values(e).some((e)=>!e.hidden);
            H(this.elements.settings.menu, !t);
        },
        focusFirstMenuItem (e, t = !1) {
            if (this.elements.settings.popup.hidden) return;
            let i = e;
            S.element(i) || (i = Object.values(this.elements.settings.panels).find((e)=>!e.hidden));
            const s = i.querySelector('[role^="menuitem"]');
            W.call(this, s, t);
        },
        toggleMenu (e) {
            const { popup: t } = this.elements.settings, i = this.elements.buttons.settings;
            if (!S.element(t) || !S.element(i)) return;
            const { hidden: s } = t;
            let n = s;
            if (S.boolean(e)) n = e;
            else if (S.keyboardEvent(e) && "Escape" === e.key) n = !1;
            else if (S.event(e)) {
                const s = S.function(e.composedPath) ? e.composedPath()[0] : e.target, a = t.contains(s);
                if (a || !a && e.target !== i && n) return;
            }
            i.setAttribute("aria-expanded", n), H(t, !n), R(this.elements.container, this.config.classNames.menu.open, n), n && S.keyboardEvent(e) ? Pe.focusFirstMenuItem.call(this, null, !0) : n || s || W.call(this, i, S.keyboardEvent(e));
        },
        getMenuSize (e) {
            const t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            const i = t.scrollWidth, s = t.scrollHeight;
            return O(t), {
                width: i,
                height: s
            };
        },
        showMenuPanel (e = "", t = !1) {
            const i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
            if (!S.element(i)) return;
            const s = i.parentNode, n = Array.from(s.children).find((e)=>!e.hidden);
            if (K.transitions && !K.reducedMotion) {
                s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
                const e = Pe.getMenuSize.call(this, i), t = (e)=>{
                    e.target === s && [
                        "width",
                        "height"
                    ].includes(e.propertyName) && (s.style.width = "", s.style.height = "", J.call(this, s, E, t));
                };
                X.call(this, s, E, t), s.style.width = `${e.width}px`, s.style.height = `${e.height}px`;
            }
            H(n, !0), H(i, !1), Pe.focusFirstMenuItem.call(this, i, t);
        },
        setDownloadUrl () {
            const e = this.elements.buttons.download;
            S.element(e) && e.setAttribute("href", this.download);
        },
        create (e) {
            const { bindMenuItemShortcuts: t, createButton: i, createProgress: s, createRange: n, createTime: a, setQualityMenu: l, setSpeedMenu: r, showMenuPanel: o } = Pe;
            this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
            const c = $("div", D(this.config.selectors.controls.wrapper));
            this.elements.controls = c;
            const u = {
                class: "plyr__controls__item"
            };
            return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l)=>{
                if ("restart" === l && c.appendChild(i.call(this, "restart", u)), "rewind" === l && c.appendChild(i.call(this, "rewind", u)), "play" === l && c.appendChild(i.call(this, "play", u)), "fast-forward" === l && c.appendChild(i.call(this, "fast-forward", u)), "progress" === l) {
                    const t = $("div", {
                        class: `${u.class} plyr__progress__container`
                    }), i = $("div", D(this.config.selectors.progress));
                    if (i.appendChild(n.call(this, "seek", {
                        id: `plyr-seek-${e.id}`
                    })), i.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
                        const e = $("span", {
                            class: this.config.classNames.tooltip
                        }, "00:00");
                        i.appendChild(e), this.elements.display.seekTooltip = e;
                    }
                    this.elements.progress = i, t.appendChild(this.elements.progress), c.appendChild(t);
                }
                if ("current-time" === l && c.appendChild(a.call(this, "currentTime", u)), "duration" === l && c.appendChild(a.call(this, "duration", u)), "mute" === l || "volume" === l) {
                    let { volume: t } = this.elements;
                    if (S.element(t) && c.contains(t) || (t = $("div", x({}, u, {
                        class: `${u.class} plyr__volume`.trim()
                    })), this.elements.volume = t, c.appendChild(t)), "mute" === l && t.appendChild(i.call(this, "mute")), "volume" === l && !M.isIos && !M.isIPadOS) {
                        const i = {
                            max: 1,
                            step: .05,
                            value: this.config.volume
                        };
                        t.appendChild(n.call(this, "volume", x(i, {
                            id: `plyr-volume-${e.id}`
                        })));
                    }
                }
                if ("captions" === l && c.appendChild(i.call(this, "captions", u)), "settings" === l && !S.empty(this.config.settings)) {
                    const s = $("div", x({}, u, {
                        class: `${u.class} plyr__menu`.trim(),
                        hidden: ""
                    }));
                    s.appendChild(i.call(this, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": `plyr-settings-${e.id}`,
                        "aria-expanded": !1
                    }));
                    const n = $("div", {
                        class: "plyr__menu__container",
                        id: `plyr-settings-${e.id}`,
                        hidden: ""
                    }), a = $("div"), l = $("div", {
                        id: `plyr-settings-${e.id}-home`
                    }), r = $("div", {
                        role: "menu"
                    });
                    l.appendChild(r), a.appendChild(l), this.elements.settings.panels.home = l, this.config.settings.forEach((i)=>{
                        const s = $("button", x(D(this.config.selectors.buttons.settings), {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        t.call(this, s, i), X.call(this, s, "click", ()=>{
                            o.call(this, i, !1);
                        });
                        const n = $("span", null, ve.get(i, this.config)), l = $("span", {
                            class: this.config.classNames.menu.value
                        });
                        l.innerHTML = e[i], n.appendChild(l), s.appendChild(n), r.appendChild(s);
                        const c = $("div", {
                            id: `plyr-settings-${e.id}-${i}`,
                            hidden: ""
                        }), u = $("button", {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                        });
                        u.appendChild($("span", {
                            "aria-hidden": !0
                        }, ve.get(i, this.config))), u.appendChild($("span", {
                            class: this.config.classNames.hidden
                        }, ve.get("menuBack", this.config))), X.call(this, c, "keydown", (e)=>{
                            "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), o.call(this, "home", !0));
                        }, !1), X.call(this, u, "click", ()=>{
                            o.call(this, "home", !1);
                        }), c.appendChild(u), c.appendChild($("div", {
                            role: "menu"
                        })), a.appendChild(c), this.elements.settings.buttons[i] = s, this.elements.settings.panels[i] = c;
                    }), n.appendChild(a), s.appendChild(n), c.appendChild(s), this.elements.settings.popup = n, this.elements.settings.menu = s;
                }
                if ("pip" === l && K.pip && c.appendChild(i.call(this, "pip", u)), "airplay" === l && K.airplay && c.appendChild(i.call(this, "airplay", u)), "download" === l) {
                    const e = x({}, u, {
                        element: "a",
                        href: this.download,
                        target: "_blank"
                    });
                    this.isHTML5 && (e.download = "");
                    const { download: t } = this.config.urls;
                    !S.url(t) && this.isEmbed && x(e, {
                        icon: `logo-${this.provider}`,
                        label: this.provider
                    }), c.appendChild(i.call(this, "download", e));
                }
                "fullscreen" === l && c.appendChild(i.call(this, "fullscreen", u));
            }), this.isHTML5 && l.call(this, de.getQualityOptions.call(this)), r.call(this), c;
        },
        inject () {
            if (this.config.loadSprite) {
                const e = Pe.getIconUrl.call(this);
                e.cors && ke(e.url, "sprite-plyr");
            }
            this.id = Math.floor(1e4 * Math.random());
            let e = null;
            this.elements.controls = null;
            const t = {
                id: this.id,
                seektime: this.config.seekTime,
                title: this.config.title
            };
            let i = !0;
            S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e = this.config.controls : (e = Pe.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: xe.getLabel.call(this)
            }), i = !1);
            let s;
            i && S.string(this.config.controls) && (e = ((e)=>{
                let i = e;
                return Object.entries(t).forEach(([e, t])=>{
                    i = pe(i, `{${e}}`, t);
                }), i;
            })(e)), S.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), S.element(s) || (s = this.elements.container);
            if (s[S.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
                const e = (e)=>{
                    const t = this.config.classNames.controlPressed;
                    e.setAttribute("aria-pressed", "false"), Object.defineProperty(e, "pressed", {
                        configurable: !0,
                        enumerable: !0,
                        get: ()=>F(e, t),
                        set (i = !1) {
                            R(e, t, i), e.setAttribute("aria-pressed", i ? "true" : "false");
                        }
                    });
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach((t)=>{
                    S.array(t) || S.nodeList(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t);
                });
            }
            if (M.isEdge && P(s), this.config.tooltips.controls) {
                const { classNames: e, selectors: t } = this.config, i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`, s = U.call(this, i);
                Array.from(s).forEach((e)=>{
                    R(e, this.config.classNames.hidden, !1), R(e, this.config.classNames.tooltip, !0);
                });
            }
        },
        setMediaMetadata () {
            try {
                "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                    title: this.config.mediaMetadata.title,
                    artist: this.config.mediaMetadata.artist,
                    album: this.config.mediaMetadata.album,
                    artwork: this.config.mediaMetadata.artwork
                }));
            } catch (e) {}
        },
        setMarkers () {
            var e, t;
            if (!this.duration || this.elements.markers) return;
            const i = null === (e = this.config.markers) || void 0 === e || null === (t = e.points) || void 0 === t ? void 0 : t.filter(({ time: e })=>e > 0 && e < this.duration);
            if (null == i || !i.length) return;
            const s = document.createDocumentFragment(), n = document.createDocumentFragment();
            let a = null;
            const l = `${this.config.classNames.tooltip}--visible`, r = (e)=>R(a, l, e);
            i.forEach((e)=>{
                const t = $("span", {
                    class: this.config.classNames.marker
                }, ""), i = e.time / this.duration * 100 + "%";
                a && (t.addEventListener("mouseenter", ()=>{
                    e.label || (a.style.left = i, a.innerHTML = e.label, r(!0));
                }), t.addEventListener("mouseleave", ()=>{
                    r(!1);
                })), t.addEventListener("click", ()=>{
                    this.currentTime = e.time;
                }), t.style.left = i, n.appendChild(t);
            }), s.appendChild(n), this.config.tooltips.seek || (a = $("span", {
                class: this.config.classNames.tooltip
            }, ""), s.appendChild(a)), this.elements.markers = {
                points: n,
                tip: a
            }, this.elements.progress.appendChild(s);
        }
    };
    function Me(e, t = !0) {
        let i = e;
        if (t) {
            const e = document.createElement("a");
            e.href = i, i = e.href;
        }
        try {
            return new URL(i);
        } catch (e) {
            return null;
        }
    }
    function Ne(e) {
        const t = new URLSearchParams;
        return S.object(e) && Object.entries(e).forEach(([e, i])=>{
            t.set(e, i);
        }), t;
    }
    const xe = {
        setup () {
            if (!this.supported.ui) return;
            if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks) return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
            var e, t;
            if (S.element(this.elements.captions) || (this.elements.captions = $("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e = this.elements.captions, t = this.elements.wrapper, S.element(e) && S.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), M.isIE && window.URL) {
                const e = this.media.querySelectorAll("track");
                Array.from(e).forEach((e)=>{
                    const t = e.getAttribute("src"), i = Me(t);
                    null !== i && i.hostname !== window.location.href.hostname && [
                        "http:",
                        "https:"
                    ].includes(i.protocol) && Te(t, "blob").then((t)=>{
                        e.setAttribute("src", window.URL.createObjectURL(t));
                    }).catch(()=>{
                        O(e);
                    });
                });
            }
            const i = se((navigator.languages || [
                navigator.language || navigator.userLanguage || "en"
            ]).map((e)=>e.split("-")[0]));
            let s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
            "auto" === s && ([s] = i);
            let n = this.storage.get("captions");
            if (S.boolean(n) || ({ active: n } = this.config.captions), Object.assign(this.captions, {
                toggled: !1,
                active: n,
                language: s,
                languages: i
            }), this.isHTML5) {
                const e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                X.call(this, this.media.textTracks, e, xe.update.bind(this));
            }
            setTimeout(xe.update.bind(this), 0);
        },
        update () {
            const e = xe.getTracks.call(this, !0), { active: t, language: i, meta: s, currentTrackNode: n } = this.captions, a = Boolean(e.find((e)=>e.language === i));
            this.isHTML5 && this.isVideo && e.filter((e)=>!s.get(e)).forEach((e)=>{
                this.debug.log("Track added", e), s.set(e, {
                    default: "showing" === e.mode
                }), "showing" === e.mode && (e.mode = "hidden"), X.call(this, e, "cuechange", ()=>xe.updateCues.call(this));
            }), (a && this.language !== i || !e.includes(n)) && (xe.setLanguage.call(this, i), xe.toggle.call(this, t && a)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
        },
        toggle (e, t = !0) {
            if (!this.supported.ui) return;
            const { toggled: i } = this.captions, s = this.config.classNames.captions.active, n = S.nullOrUndefined(e) ? !i : e;
            if (n !== i) {
                if (t || (this.captions.active = n, this.storage.set({
                    captions: n
                })), !this.language && n && !t) {
                    const e = xe.getTracks.call(this), t = xe.findTrack.call(this, [
                        this.captions.language,
                        ...this.captions.languages
                    ], !0);
                    return this.captions.language = t.language, void xe.set.call(this, e.indexOf(t));
                }
                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), R(this.elements.container, s, n), this.captions.toggled = n, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
            }
            setTimeout(()=>{
                n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
            });
        },
        set (e, t = !0) {
            const i = xe.getTracks.call(this);
            if (-1 !== e) {
                if (S.number(e)) {
                    if (e in i) {
                        if (this.captions.currentTrack !== e) {
                            this.captions.currentTrack = e;
                            const s = i[e], { language: n } = s || {};
                            this.captions.currentTrackNode = s, Pe.updateSetting.call(this, "captions"), t || (this.captions.language = n, this.storage.set({
                                language: n
                            })), this.isVimeo && this.embed.enableTextTrack(n), Z.call(this, this.media, "languagechange");
                        }
                        xe.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
                    } else this.debug.warn("Track not found", e);
                } else this.debug.warn("Invalid caption argument", e);
            } else xe.toggle.call(this, !1, t);
        },
        setLanguage (e, t = !0) {
            if (!S.string(e)) return void this.debug.warn("Invalid language argument", e);
            const i = e.toLowerCase();
            this.captions.language = i;
            const s = xe.getTracks.call(this), n = xe.findTrack.call(this, [
                i
            ]);
            xe.set.call(this, s.indexOf(n), t);
        },
        getTracks (e = !1) {
            return Array.from((this.media || {}).textTracks || []).filter((t)=>!this.isHTML5 || e || this.captions.meta.has(t)).filter((e)=>[
                    "captions",
                    "subtitles"
                ].includes(e.kind));
        },
        findTrack (e, t = !1) {
            const i = xe.getTracks.call(this), s = (e)=>Number((this.captions.meta.get(e) || {}).default), n = Array.from(i).sort((e, t)=>s(t) - s(e));
            let a;
            return e.every((e)=>(a = n.find((t)=>t.language === e), !a)), a || (t ? n[0] : void 0);
        },
        getCurrentTrack () {
            return xe.getTracks.call(this)[this.currentTrack];
        },
        getLabel (e) {
            let t = e;
            return !S.track(t) && K.textTracks && this.captions.toggled && (t = xe.getCurrentTrack.call(this)), S.track(t) ? S.empty(t.label) ? S.empty(t.language) ? ve.get("enabled", this.config) : e.language.toUpperCase() : t.label : ve.get("disabled", this.config);
        },
        updateCues (e) {
            if (!this.supported.ui) return;
            if (!S.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
            if (!S.nullOrUndefined(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
            let t = e;
            if (!t) {
                const e = xe.getCurrentTrack.call(this);
                t = Array.from((e || {}).activeCues || []).map((e)=>e.getCueAsHTML()).map(ye);
            }
            const i = t.map((e)=>e.trim()).join("\n");
            if (i !== this.elements.captions.innerHTML) {
                j(this.elements.captions);
                const e = $("span", D(this.config.selectors.caption));
                e.innerHTML = i, this.elements.captions.appendChild(e), Z.call(this, this.media, "cuechange");
            }
        }
    }, Le = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
            default: 576,
            options: [
                4320,
                2880,
                2160,
                1440,
                1080,
                720,
                576,
                480,
                360,
                240
            ],
            forced: !1,
            onChange: null
        },
        loop: {
            active: !1
        },
        speed: {
            selected: 1,
            options: [
                .5,
                .75,
                1,
                1.25,
                1.5,
                1.75,
                2,
                4
            ]
        },
        keyboard: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        captions: {
            active: !1,
            language: "auto",
            update: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "captions",
            "settings",
            "pip",
            "airplay",
            "fullscreen"
        ],
        settings: [
            "captions",
            "quality",
            "speed"
        ],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
                2160: "4K",
                1440: "HD",
                1080: "HD",
                720: "HD",
                576: "SD",
                480: "SD"
            }
        },
        urls: {
            download: null,
            vimeo: {
                sdk: "https://player.vimeo.com/api/player.js",
                iframe: "https://player.vimeo.com/video/{0}?{1}",
                api: "https://vimeo.com/api/oembed.json?url={0}"
            },
            youtube: {
                sdk: "https://www.youtube.com/iframe_api",
                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
            },
            googleIMA: {
                sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
        },
        events: [
            "ended",
            "progress",
            "stalled",
            "playing",
            "waiting",
            "canplay",
            "canplaythrough",
            "loadstart",
            "loadeddata",
            "loadedmetadata",
            "timeupdate",
            "volumechange",
            "play",
            "pause",
            "error",
            "seeking",
            "seeked",
            "emptied",
            "ratechange",
            "cuechange",
            "download",
            "enterfullscreen",
            "exitfullscreen",
            "captionsenabled",
            "captionsdisabled",
            "languagechange",
            "controlshidden",
            "controlsshown",
            "ready",
            "statechange",
            "qualitychange",
            "adsloaded",
            "adscontentpause",
            "adscontentresume",
            "adstarted",
            "adsmidpoint",
            "adscomplete",
            "adsallcomplete",
            "adsimpression",
            "adsclick"
        ],
        selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                fastForward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                download: '[data-plyr="download"]',
                fullscreen: '[data-plyr="fullscreen"]',
                pip: '[data-plyr="pip"]',
                airplay: '[data-plyr="airplay"]',
                settings: '[data-plyr="settings"]',
                loop: '[data-plyr="loop"]'
            },
            inputs: {
                seek: '[data-plyr="seek"]',
                volume: '[data-plyr="volume"]',
                speed: '[data-plyr="speed"]',
                language: '[data-plyr="language"]',
                quality: '[data-plyr="quality"]'
            },
            display: {
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration",
                buffer: ".plyr__progress__buffer",
                loop: ".plyr__progress__loop",
                volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption"
        },
        classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            marker: "plyr__progress__marker",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
                time: "plyr__time"
            },
            menu: {
                value: "plyr__menu__value",
                badge: "plyr__badge",
                open: "plyr--menu-open"
            },
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                fallback: "plyr--fullscreen-fallback"
            },
            pip: {
                supported: "plyr--pip-supported",
                active: "plyr--pip-active"
            },
            airplay: {
                supported: "plyr--airplay-supported",
                active: "plyr--airplay-active"
            },
            previewThumbnails: {
                thumbContainer: "plyr__preview-thumb",
                thumbContainerShown: "plyr__preview-thumb--is-shown",
                imageContainer: "plyr__preview-thumb__image-container",
                timeContainer: "plyr__preview-thumb__time-container",
                scrubbingContainer: "plyr__preview-scrubbing",
                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
            }
        },
        attributes: {
            embed: {
                provider: "data-plyr-provider",
                id: "data-plyr-embed-id",
                hash: "data-plyr-embed-hash"
            }
        },
        ads: {
            enabled: !1,
            publisherId: "",
            tagUrl: ""
        },
        previewThumbnails: {
            enabled: !1,
            src: ""
        },
        vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            speed: !0,
            transparent: !1,
            customControls: !0,
            referrerPolicy: null,
            premium: !1
        },
        youtube: {
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            customControls: !0,
            noCookie: !1
        },
        mediaMetadata: {
            title: "",
            artist: "",
            album: "",
            artwork: []
        },
        markers: {
            enabled: !1,
            points: []
        }
    }, Ie = "picture-in-picture", $e = "inline", _e = {
        html5: "html5",
        youtube: "youtube",
        vimeo: "vimeo"
    }, Oe = "audio", je = "video";
    const qe = ()=>{};
    class De {
        constructor(e = !1){
            this.enabled = window.console && e, this.enabled && this.log("Debugging enabled");
        }
        get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : qe;
        }
        get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe;
        }
        get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : qe;
        }
    }
    class He {
        constructor(t){
            e(this, "onChange", ()=>{
                if (!this.supported) return;
                const e = this.player.elements.buttons.fullscreen;
                S.element(e) && (e.pressed = this.active);
                const t = this.target === this.player.media ? this.target : this.player.elements.container;
                Z.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0);
            }), e(this, "toggleFallback", (e = !1)=>{
                if (e ? this.scrollPosition = {
                    x: window.scrollX ?? 0,
                    y: window.scrollY ?? 0
                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", R(this.target, this.player.config.classNames.fullscreen.fallback, e), M.isIos) {
                    let t = document.head.querySelector('meta[name="viewport"]');
                    const i = "viewport-fit=cover";
                    t || (t = document.createElement("meta"), t.setAttribute("name", "viewport"));
                    const s = S.string(t.content) && t.content.includes(i);
                    e ? (this.cleanupViewport = !s, s || (t.content += `,${i}`)) : this.cleanupViewport && (t.content = t.content.split(",").filter((e)=>e.trim() !== i).join(","));
                }
                this.onChange();
            }), e(this, "trapFocus", (e)=>{
                if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e.key) return;
                const t = document.activeElement, i = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s] = i, n = i[i.length - 1];
                t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault());
            }), e(this, "update", ()=>{
                if (this.supported) {
                    let e;
                    e = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", this.player.debug.log(`${e} fullscreen enabled`);
                } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e(this, "enter", ()=>{
                this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? S.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                    navigationUI: "hide"
                }));
            }), e(this, "exit", ()=>{
                if (this.supported) {
                    if (M.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie(this.player.play());
                    else if (!He.nativeSupported || this.forceFallback) this.toggleFallback(!1);
                    else if (this.prefix) {
                        if (!S.empty(this.prefix)) {
                            const e = "moz" === this.prefix ? "Cancel" : "Exit";
                            document[`${this.prefix}${e}${this.property}`]();
                        }
                    } else (document.cancelFullScreen || document.exitFullscreen).call(document);
                }
            }), e(this, "toggle", ()=>{
                this.active ? this.exit() : this.enter();
            }), this.player = t, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = {
                x: 0,
                y: 0
            }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                const { prototype: i } = Element;
                return (i.closest || function() {
                    let e = this;
                    do {
                        if (V.matches(e, t)) return e;
                        e = e.parentElement || e.parentNode;
                    }while (null !== e && 1 === e.nodeType);
                    return null;
                }).call(e, t);
            }(this.player.elements.container, t.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, ()=>{
                this.onChange();
            }), X.call(this.player, this.player.elements.container, "dblclick", (e)=>{
                S.element(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen");
            }), X.call(this, this.player.elements.container, "keydown", (e)=>this.trapFocus(e)), this.update();
        }
        static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
        }
        get useNative() {
            return He.nativeSupported && !this.forceFallback;
        }
        static get prefix() {
            if (S.function(document.exitFullscreen)) return "";
            let e = "";
            return [
                "webkit",
                "moz",
                "ms"
            ].some((t)=>!(!S.function(document[`${t}ExitFullscreen`]) && !S.function(document[`${t}CancelFullScreen`])) && (e = t, !0)), e;
        }
        static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
        }
        get supported() {
            return [
                this.player.config.fullscreen.enabled,
                this.player.isVideo,
                He.nativeSupported || this.player.config.fullscreen.fallback,
                !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative
            ].every(Boolean);
        }
        get active() {
            if (!this.supported) return !1;
            if (!He.nativeSupported || this.forceFallback) return F(this.target, this.player.config.classNames.fullscreen.fallback);
            const e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
        }
        get target() {
            return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
        }
    }
    function Re(e, t = 1) {
        return new Promise((i, s)=>{
            const n = new Image, a = ()=>{
                delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
            };
            Object.assign(n, {
                onload: a,
                onerror: a,
                src: e
            });
        });
    }
    const Fe = {
        addStyleHook () {
            R(this.elements.container, this.config.selectors.container.replace(".", ""), !0), R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        },
        toggleNativeControls (e = !1) {
            e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        },
        build () {
            if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void Fe.toggleNativeControls.call(this, !0);
            S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(()=>{
                Z.call(this, this.media, "ready");
            }, 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, !1).catch(()=>{}), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
        },
        setTitle () {
            let e = ve.get("play", this.config);
            if (S.string(this.config.title) && !S.empty(this.config.title) && (e += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t)=>{
                t.setAttribute("aria-label", e);
            }), this.isEmbed) {
                const e = B.call(this, "iframe");
                if (!S.element(e)) return;
                const t = S.empty(this.config.title) ? "video" : this.config.title, i = ve.get("frameTitle", this.config);
                e.setAttribute("title", i.replace("{title}", t));
            }
        },
        togglePoster (e) {
            R(this.elements.container, this.config.classNames.posterEnabled, e);
        },
        setPoster (e, t = !0) {
            return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), te.call(this).then(()=>Re(e)).catch((t)=>{
                throw e === this.poster && Fe.togglePoster.call(this, !1), t;
            }).then(()=>{
                if (e !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
            }).then(()=>(Object.assign(this.elements.poster.style, {
                    backgroundImage: `url('${e}')`,
                    backgroundSize: ""
                }), Fe.togglePoster.call(this, !0), e)));
        },
        checkPlaying (e) {
            R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e)=>{
                Object.assign(e, {
                    pressed: this.playing
                }), e.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
            }), S.event(e) && "timeupdate" === e.type || Fe.toggleControls.call(this);
        },
        checkLoading (e) {
            this.loading = [
                "stalled",
                "waiting"
            ].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(()=>{
                R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
            }, this.loading ? 250 : 0);
        },
        toggleControls (e) {
            const { controls: t } = this.elements;
            if (t && this.config.hideControls) {
                const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i));
            }
        },
        migrateStyles () {
            Object.values({
                ...this.media.style
            }).filter((e)=>!S.empty(e) && S.string(e) && e.startsWith("--plyr")).forEach((e)=>{
                this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e);
            }), S.empty(this.media.style) && this.media.removeAttribute("style");
        }
    };
    class Ve {
        constructor(t){
            e(this, "firstTouch", ()=>{
                const { player: e } = this, { elements: t } = e;
                e.touch = !0, R(t.container, e.config.classNames.isTouch, !0);
            }), e(this, "global", (e = !0)=>{
                const { player: t } = this;
                t.config.keyboard.global && Q.call(t, window, "keydown keyup", this.handleKey, e, !1), Q.call(t, document.body, "click", this.toggleMenu, e), G.call(t, document.body, "touchstart", this.firstTouch);
            }), e(this, "container", ()=>{
                const { player: e } = this, { config: t, elements: i, timers: s } = e;
                !t.keyboard.global && t.keyboard.focused && X.call(e, i.container, "keydown keyup", this.handleKey, !1), X.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t)=>{
                    const { controls: n } = i;
                    n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                    let a = 0;
                    [
                        "touchstart",
                        "touchmove",
                        "mousemove"
                    ].includes(t.type) && (Fe.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout(()=>Fe.toggleControls.call(e, !1), a);
                });
                const n = ()=>{
                    if (!e.isVimeo || e.config.vimeo.premium) return;
                    const t = i.wrapper, { active: s } = e.fullscreen, [n, a] = ce.call(e), l = ae(`aspect-ratio: ${n} / ${a}`);
                    if (!s) return void (l ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, t.style.margin = null));
                    const [r, o] = [
                        Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                        Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                    ], c = r / o > n / a;
                    l ? (t.style.width = c ? "auto" : "100%", t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? o / a * n + "px" : null, t.style.margin = c ? "0 auto" : null);
                }, a = ()=>{
                    clearTimeout(s.resized), s.resized = setTimeout(n, 50);
                };
                X.call(e, i.container, "enterfullscreen exitfullscreen", (t)=>{
                    const { target: s } = e.fullscreen;
                    if (s !== i.container) return;
                    if (!e.isEmbed && S.empty(e.config.ratio)) return;
                    n();
                    ("enterfullscreen" === t.type ? X : J).call(e, window, "resize", a);
                });
            }), e(this, "media", ()=>{
                const { player: e } = this, { elements: t } = e;
                if (X.call(e, e.media, "timeupdate seeking seeked", (t)=>Pe.timeUpdate.call(e, t)), X.call(e, e.media, "durationchange loadeddata loadedmetadata", (t)=>Pe.durationUpdate.call(e, t)), X.call(e, e.media, "ended", ()=>{
                    e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause());
                }), X.call(e, e.media, "progress playing seeking seeked", (t)=>Pe.updateProgress.call(e, t)), X.call(e, e.media, "volumechange", (t)=>Pe.updateVolume.call(e, t)), X.call(e, e.media, "playing play pause ended emptied timeupdate", (t)=>Fe.checkPlaying.call(e, t)), X.call(e, e.media, "waiting canplay seeked playing", (t)=>Fe.checkLoading.call(e, t)), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                    const i = B.call(e, `.${e.config.classNames.video}`);
                    if (!S.element(i)) return;
                    X.call(e, t.container, "click", (s)=>{
                        ([
                            t.container,
                            i
                        ].includes(s.target) || i.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(s, e.restart, "restart"), this.proxy(s, ()=>{
                            ie(e.play());
                        }, "play")) : this.proxy(s, ()=>{
                            ie(e.togglePlay());
                        }, "play")));
                    });
                }
                e.supported.ui && e.config.disableContextMenu && X.call(e, t.wrapper, "contextmenu", (e)=>{
                    e.preventDefault();
                }, !1), X.call(e, e.media, "volumechange", ()=>{
                    e.storage.set({
                        volume: e.volume,
                        muted: e.muted
                    });
                }), X.call(e, e.media, "ratechange", ()=>{
                    Pe.updateSetting.call(e, "speed"), e.storage.set({
                        speed: e.speed
                    });
                }), X.call(e, e.media, "qualitychange", (t)=>{
                    Pe.updateSetting.call(e, "quality", null, t.detail.quality);
                }), X.call(e, e.media, "ready qualitychange", ()=>{
                    Pe.setDownloadUrl.call(e);
                });
                const i = e.config.events.concat([
                    "keyup",
                    "keydown"
                ]).join(" ");
                X.call(e, e.media, i, (i)=>{
                    let { detail: s = {} } = i;
                    "error" === i.type && (s = e.media.error), Z.call(e, t.container, i.type, !0, s);
                });
            }), e(this, "proxy", (e, t, i)=>{
                const { player: s } = this, n = s.config.listeners[i];
                let a = !0;
                S.function(n) && (a = n.call(s, e)), !1 !== a && S.function(t) && t.call(s, e);
            }), e(this, "bind", (e, t, i, s, n = !0)=>{
                const { player: a } = this, l = a.config.listeners[s], r = S.function(l);
                X.call(a, e, t, (e)=>this.proxy(e, i, s), n && !r);
            }), e(this, "controls", ()=>{
                const { player: e } = this, { elements: t } = e, i = M.isIE ? "change" : "input";
                if (t.buttons.play && Array.from(t.buttons.play).forEach((t)=>{
                    this.bind(t, "click", ()=>{
                        ie(e.togglePlay());
                    }, "play");
                }), this.bind(t.buttons.restart, "click", e.restart, "restart"), this.bind(t.buttons.rewind, "click", ()=>{
                    e.lastSeekTime = Date.now(), e.rewind();
                }, "rewind"), this.bind(t.buttons.fastForward, "click", ()=>{
                    e.lastSeekTime = Date.now(), e.forward();
                }, "fastForward"), this.bind(t.buttons.mute, "click", ()=>{
                    e.muted = !e.muted;
                }, "mute"), this.bind(t.buttons.captions, "click", ()=>e.toggleCaptions()), this.bind(t.buttons.download, "click", ()=>{
                    Z.call(e, e.media, "download");
                }, "download"), this.bind(t.buttons.fullscreen, "click", ()=>{
                    e.fullscreen.toggle();
                }, "fullscreen"), this.bind(t.buttons.pip, "click", ()=>{
                    e.pip = "toggle";
                }, "pip"), this.bind(t.buttons.airplay, "click", e.airplay, "airplay"), this.bind(t.buttons.settings, "click", (t)=>{
                    t.stopPropagation(), t.preventDefault(), Pe.toggleMenu.call(e, t);
                }, null, !1), this.bind(t.buttons.settings, "keyup", (t)=>{
                    [
                        " ",
                        "Enter"
                    ].includes(t.key) && ("Enter" !== t.key ? (t.preventDefault(), t.stopPropagation(), Pe.toggleMenu.call(e, t)) : Pe.focusFirstMenuItem.call(e, null, !0));
                }, null, !1), this.bind(t.settings.menu, "keydown", (t)=>{
                    "Escape" === t.key && Pe.toggleMenu.call(e, t);
                }), this.bind(t.inputs.seek, "mousedown mousemove", (e)=>{
                    const i = t.progress.getBoundingClientRect(), s = 100 / i.width * (e.pageX - i.left);
                    e.currentTarget.setAttribute("seek-value", s);
                }), this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t)=>{
                    const i = t.currentTarget, s = "play-on-seeked";
                    if (S.keyboardEvent(t) && ![
                        "ArrowLeft",
                        "ArrowRight"
                    ].includes(t.key)) return;
                    e.lastSeekTime = Date.now();
                    const n = i.hasAttribute(s), a = [
                        "mouseup",
                        "touchend",
                        "keyup"
                    ].includes(t.type);
                    n && a ? (i.removeAttribute(s), ie(e.play())) : !a && e.playing && (i.setAttribute(s, ""), e.pause());
                }), M.isIos) {
                    const t = U.call(e, 'input[type="range"]');
                    Array.from(t).forEach((e)=>this.bind(e, i, (e)=>P(e.target)));
                }
                this.bind(t.inputs.seek, i, (t)=>{
                    const i = t.currentTarget;
                    let s = i.getAttribute("seek-value");
                    S.empty(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration;
                }, "seek"), this.bind(t.progress, "mouseenter mouseleave mousemove", (t)=>Pe.updateSeekTooltip.call(e, t)), this.bind(t.progress, "mousemove touchmove", (t)=>{
                    const { previewThumbnails: i } = e;
                    i && i.loaded && i.startMove(t);
                }), this.bind(t.progress, "mouseleave touchend click", ()=>{
                    const { previewThumbnails: t } = e;
                    t && t.loaded && t.endMove(!1, !0);
                }), this.bind(t.progress, "mousedown touchstart", (t)=>{
                    const { previewThumbnails: i } = e;
                    i && i.loaded && i.startScrubbing(t);
                }), this.bind(t.progress, "mouseup touchend", (t)=>{
                    const { previewThumbnails: i } = e;
                    i && i.loaded && i.endScrubbing(t);
                }), M.isWebKit && Array.from(U.call(e, 'input[type="range"]')).forEach((t)=>{
                    this.bind(t, "input", (t)=>Pe.updateRangeFill.call(e, t.target));
                }), e.config.toggleInvert && !S.element(t.display.duration) && this.bind(t.display.currentTime, "click", ()=>{
                    0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, Pe.timeUpdate.call(e));
                }), this.bind(t.inputs.volume, i, (t)=>{
                    e.volume = t.target.value;
                }, "volume"), this.bind(t.controls, "mouseenter mouseleave", (i)=>{
                    t.controls.hover = !e.touch && "mouseenter" === i.type;
                }), t.fullscreen && Array.from(t.fullscreen.children).filter((e)=>!e.contains(t.container)).forEach((i)=>{
                    this.bind(i, "mouseenter mouseleave", (i)=>{
                        t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type);
                    });
                }), this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (e)=>{
                    t.controls.pressed = [
                        "mousedown",
                        "touchstart"
                    ].includes(e.type);
                }), this.bind(t.controls, "focusin", ()=>{
                    const { config: i, timers: s } = e;
                    R(t.controls, i.classNames.noTransition, !0), Fe.toggleControls.call(e, !0), setTimeout(()=>{
                        R(t.controls, i.classNames.noTransition, !1);
                    }, 0);
                    const n = this.touch ? 3e3 : 4e3;
                    clearTimeout(s.controls), s.controls = setTimeout(()=>Fe.toggleControls.call(e, !1), n);
                }), this.bind(t.inputs.volume, "wheel", (t)=>{
                    const i = t.webkitDirectionInvertedFromDevice, [s, n] = [
                        t.deltaX,
                        -t.deltaY
                    ].map((e)=>i ? -e : e), a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                    e.increaseVolume(a / 50);
                    const { volume: l } = e.media;
                    (1 === a && l < 1 || -1 === a && l > 0) && t.preventDefault();
                }, "volume", !1);
            }), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
        }
        handleKey(e) {
            const { player: t } = this, { elements: i } = t, { key: s, type: n, altKey: a, ctrlKey: l, metaKey: r, shiftKey: o } = e, c = "keydown" === n, u = c && s === this.lastKey;
            if (a || l || r || o) return;
            if (!s) return;
            if (c) {
                const n = document.activeElement;
                if (S.element(n)) {
                    const { editable: s } = t.config.selectors, { seek: a } = i.inputs;
                    if (n !== a && V(n, s)) return;
                    if (" " === e.key && V(n, 'button, [role^="menuitem"]')) return;
                }
                switch([
                    " ",
                    "ArrowLeft",
                    "ArrowUp",
                    "ArrowRight",
                    "ArrowDown",
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "c",
                    "f",
                    "k",
                    "l",
                    "m"
                ].includes(s) && (e.preventDefault(), e.stopPropagation()), s){
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        u || (h = parseInt(s, 10), t.currentTime = t.duration / 10 * h);
                        break;
                    case " ":
                    case "k":
                        u || ie(t.togglePlay());
                        break;
                    case "ArrowUp":
                        t.increaseVolume(.1);
                        break;
                    case "ArrowDown":
                        t.decreaseVolume(.1);
                        break;
                    case "m":
                        u || (t.muted = !t.muted);
                        break;
                    case "ArrowRight":
                        t.forward();
                        break;
                    case "ArrowLeft":
                        t.rewind();
                        break;
                    case "f":
                        t.fullscreen.toggle();
                        break;
                    case "c":
                        u || t.toggleCaptions();
                        break;
                    case "l":
                        t.loop = !t.loop;
                }
                "Escape" === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s;
            } else this.lastKey = null;
            var h;
        }
        toggleMenu(e) {
            Pe.toggleMenu.call(this.player, e);
        }
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var Ue = function(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports;
    }(function(e, t) {
        e.exports = function() {
            var e = function() {}, t = {}, i = {}, s = {};
            function n(e, t) {
                e = e.push ? e : [
                    e
                ];
                var n, a, l, r = [], o = e.length, c = o;
                for(n = function(e, i) {
                    i.length && r.push(e), --c || t(r);
                }; o--;)a = e[o], (l = i[a]) ? n(a, l) : (s[a] = s[a] || []).push(n);
            }
            function a(e, t) {
                if (e) {
                    var n = s[e];
                    if (i[e] = t, n) for(; n.length;)n[0](e, t), n.splice(0, 1);
                }
            }
            function l(t, i) {
                t.call && (t = {
                    success: t
                }), i.length ? (t.error || e)(i) : (t.success || e)(t);
            }
            function r(t, i, s, n) {
                var a, l, o = document, c = s.async, u = (s.numRetries || 0) + 1, h = s.before || e, d = t.replace(/[\?|#].*$/, ""), m = t.replace(/^(css|img)!/, "");
                n = n || 0, /(^css!|\.css$)/.test(d) ? ((l = o.createElement("link")).rel = "stylesheet", l.href = m, (a = "hideFocus" in l) && l.relList && (a = 0, l.rel = "preload", l.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (l = o.createElement("img")).src = m : ((l = o.createElement("script")).src = t, l.async = void 0 === c || c), l.onload = l.onerror = l.onbeforeload = function(e) {
                    var o = e.type[0];
                    if (a) try {
                        l.sheet.cssText.length || (o = "e");
                    } catch (e) {
                        18 != e.code && (o = "e");
                    }
                    if ("e" == o) {
                        if ((n += 1) < u) return r(t, i, s, n);
                    } else if ("preload" == l.rel && "style" == l.as) return l.rel = "stylesheet";
                    i(t, o, e.defaultPrevented);
                }, !1 !== h(t, l) && o.head.appendChild(l);
            }
            function o(e, t, i) {
                var s, n, a = (e = e.push ? e : [
                    e
                ]).length, l = a, o = [];
                for(s = function(e, i, s) {
                    if ("e" == i && o.push(e), "b" == i) {
                        if (!s) return;
                        o.push(e);
                    }
                    --a || t(o);
                }, n = 0; n < l; n++)r(e[n], s, i);
            }
            function c(e, i, s) {
                var n, r;
                if (i && i.trim && (n = i), r = (n ? s : i) || {}, n) {
                    if (n in t) throw "LoadJS";
                    t[n] = !0;
                }
                function c(t, i) {
                    o(e, function(e) {
                        l(r, e), t && l({
                            success: t,
                            error: i
                        }, e), a(n, e);
                    }, r);
                }
                if (r.returnPromise) return new Promise(c);
                c();
            }
            return c.ready = function(e, t) {
                return n(e, function(e) {
                    l(t, e);
                }), c;
            }, c.done = function(e) {
                a(e, []);
            }, c.reset = function() {
                t = {}, i = {}, s = {};
            }, c.isDefined = function(e) {
                return e in t;
            }, c;
        }();
    });
    function Be(e) {
        return new Promise((t, i)=>{
            Ue(e, {
                success: t,
                error: i
            });
        });
    }
    function We(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Z.call(this, this.media, e ? "play" : "pause"));
    }
    const ze = {
        setup () {
            const e = this;
            R(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, ue.call(e), S.object(window.Vimeo) ? ze.ready.call(e) : Be(e.config.urls.vimeo.sdk).then(()=>{
                ze.ready.call(e);
            }).catch((t)=>{
                e.debug.warn("Vimeo SDK (player.js) failed to load", t);
            });
        },
        ready () {
            const e = this, t = e.config.vimeo, { premium: i, referrerPolicy: s, ...n } = t;
            let a = e.media.getAttribute("src"), l = "";
            S.empty(a) ? (a = e.media.getAttribute(e.config.attributes.embed.id), l = e.media.getAttribute(e.config.attributes.embed.hash)) : l = function(e) {
                const t = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                return t && 5 === t.length ? t[4] : null;
            }(a);
            const r = l ? {
                h: l
            } : {};
            i && Object.assign(n, {
                controls: !1,
                sidedock: !1
            });
            const o = Ne({
                loop: e.config.loop.active,
                autoplay: e.autoplay,
                muted: e.muted,
                gesture: "media",
                playsinline: e.config.playsinline,
                ...r,
                ...n
            }), c = (u = a, S.empty(u) ? null : S.number(Number(u)) ? u : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u);
            var u;
            const h = $("iframe"), d = me(e.config.urls.vimeo.iframe, c, o);
            if (h.setAttribute("src", d), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", [
                "autoplay",
                "fullscreen",
                "picture-in-picture",
                "encrypted-media",
                "accelerometer",
                "gyroscope"
            ].join("; ")), S.empty(s) || h.setAttribute("referrerPolicy", s), i || !t.customControls) h.setAttribute("data-poster", e.poster), e.media = q(h, e.media);
            else {
                const t = $("div", {
                    class: e.config.classNames.embedContainer,
                    "data-poster": e.poster
                });
                t.appendChild(h), e.media = q(t, e.media);
            }
            t.customControls || Te(me(e.config.urls.vimeo.api, d)).then((t)=>{
                !S.empty(t) && t.thumbnail_url && Fe.setPoster.call(e, t.thumbnail_url).catch(()=>{});
            }), e.embed = new window.Vimeo.Player(h, {
                autopause: e.config.autopause,
                muted: e.muted
            }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = ()=>(We.call(e, !0), e.embed.play()), e.media.pause = ()=>(We.call(e, !1), e.embed.pause()), e.media.stop = ()=>{
                e.pause(), e.currentTime = 0;
            };
            let { currentTime: m } = e.media;
            Object.defineProperty(e.media, "currentTime", {
                get: ()=>m,
                set (t) {
                    const { embed: i, media: s, paused: n, volume: a } = e, l = n && !i.hasPlayed;
                    s.seeking = !0, Z.call(e, s, "seeking"), Promise.resolve(l && i.setVolume(0)).then(()=>i.setCurrentTime(t)).then(()=>l && i.pause()).then(()=>l && i.setVolume(a)).catch(()=>{});
                }
            });
            let p = e.config.speed.selected;
            Object.defineProperty(e.media, "playbackRate", {
                get: ()=>p,
                set (t) {
                    e.embed.setPlaybackRate(t).then(()=>{
                        p = t, Z.call(e, e.media, "ratechange");
                    }).catch(()=>{
                        e.options.speed = [
                            1
                        ];
                    });
                }
            });
            let { volume: g } = e.config;
            Object.defineProperty(e.media, "volume", {
                get: ()=>g,
                set (t) {
                    e.embed.setVolume(t).then(()=>{
                        g = t, Z.call(e, e.media, "volumechange");
                    });
                }
            });
            let { muted: f } = e.config;
            Object.defineProperty(e.media, "muted", {
                get: ()=>f,
                set (t) {
                    const i = !!S.boolean(t) && t;
                    e.embed.setMuted(!!i || e.config.muted).then(()=>{
                        f = i, Z.call(e, e.media, "volumechange");
                    });
                }
            });
            let y, { loop: b } = e.config;
            Object.defineProperty(e.media, "loop", {
                get: ()=>b,
                set (t) {
                    const i = S.boolean(t) ? t : e.config.loop.active;
                    e.embed.setLoop(i).then(()=>{
                        b = i;
                    });
                }
            }), e.embed.getVideoUrl().then((t)=>{
                y = t, Pe.setDownloadUrl.call(e);
            }).catch((e)=>{
                this.debug.warn(e);
            }), Object.defineProperty(e.media, "currentSrc", {
                get: ()=>y
            }), Object.defineProperty(e.media, "ended", {
                get: ()=>e.currentTime === e.duration
            }), Promise.all([
                e.embed.getVideoWidth(),
                e.embed.getVideoHeight()
            ]).then((t)=>{
                const [i, s] = t;
                e.embed.ratio = he(i, s), ue.call(this);
            }), e.embed.setAutopause(e.config.autopause).then((t)=>{
                e.config.autopause = t;
            }), e.embed.getVideoTitle().then((t)=>{
                e.config.title = t, Fe.setTitle.call(this);
            }), e.embed.getCurrentTime().then((t)=>{
                m = t, Z.call(e, e.media, "timeupdate");
            }), e.embed.getDuration().then((t)=>{
                e.media.duration = t, Z.call(e, e.media, "durationchange");
            }), e.embed.getTextTracks().then((t)=>{
                e.media.textTracks = t, xe.setup.call(e);
            }), e.embed.on("cuechange", ({ cues: t = [] })=>{
                const i = t.map((e)=>(function(e) {
                        const t = document.createDocumentFragment(), i = document.createElement("div");
                        return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
                    })(e.text));
                xe.updateCues.call(e, i);
            }), e.embed.on("loaded", ()=>{
                if (e.embed.getPaused().then((t)=>{
                    We.call(e, !t), t || Z.call(e, e.media, "playing");
                }), S.element(e.embed.element) && e.supported.ui) e.embed.element.setAttribute("tabindex", -1);
            }), e.embed.on("bufferstart", ()=>{
                Z.call(e, e.media, "waiting");
            }), e.embed.on("bufferend", ()=>{
                Z.call(e, e.media, "playing");
            }), e.embed.on("play", ()=>{
                We.call(e, !0), Z.call(e, e.media, "playing");
            }), e.embed.on("pause", ()=>{
                We.call(e, !1);
            }), e.embed.on("timeupdate", (t)=>{
                e.media.seeking = !1, m = t.seconds, Z.call(e, e.media, "timeupdate");
            }), e.embed.on("progress", (t)=>{
                e.media.buffered = t.percent, Z.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && Z.call(e, e.media, "canplaythrough"), e.embed.getDuration().then((t)=>{
                    t !== e.media.duration && (e.media.duration = t, Z.call(e, e.media, "durationchange"));
                });
            }), e.embed.on("seeked", ()=>{
                e.media.seeking = !1, Z.call(e, e.media, "seeked");
            }), e.embed.on("ended", ()=>{
                e.media.paused = !0, Z.call(e, e.media, "ended");
            }), e.embed.on("error", (t)=>{
                e.media.error = t, Z.call(e, e.media, "error");
            }), t.customControls && setTimeout(()=>Fe.build.call(e), 0);
        }
    };
    function Ke(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Z.call(this, this.media, e ? "play" : "pause"));
    }
    function Ye(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
    }
    const Qe = {
        setup () {
            if (R(this.elements.wrapper, this.config.classNames.embed, !0), S.object(window.YT) && S.function(window.YT.Player)) Qe.ready.call(this);
            else {
                const e = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = ()=>{
                    S.function(e) && e(), Qe.ready.call(this);
                }, Be(this.config.urls.youtube.sdk).catch((e)=>{
                    this.debug.warn("YouTube API failed to load", e);
                });
            }
        },
        getTitle (e) {
            Te(me(this.config.urls.youtube.api, e)).then((e)=>{
                if (S.object(e)) {
                    const { title: t, height: i, width: s } = e;
                    this.config.title = t, Fe.setTitle.call(this), this.embed.ratio = he(s, i);
                }
                ue.call(this);
            }).catch(()=>{
                ue.call(this);
            });
        },
        ready () {
            const e = this, t = e.config.youtube, i = e.media && e.media.getAttribute("id");
            if (!S.empty(i) && i.startsWith("youtube-")) return;
            let s = e.media.getAttribute("src");
            S.empty(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
            const n = (a = s, S.empty(a) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a);
            var a;
            const l = $("div", {
                id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                "data-poster": t.customControls ? e.poster : void 0
            });
            if (e.media = q(l, e.media), t.customControls) {
                const t = (e)=>`https://i.ytimg.com/vi/${n}/${e}default.jpg`;
                Re(t("maxres"), 121).catch(()=>Re(t("sd"), 121)).catch(()=>Re(t("hq"))).then((t)=>Fe.setPoster.call(e, t.src)).then((t)=>{
                    t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
                }).catch(()=>{});
            }
            e.embed = new window.YT.Player(e.media, {
                videoId: n,
                host: Ye(t),
                playerVars: x({}, {
                    autoplay: e.config.autoplay ? 1 : 0,
                    hl: e.config.hl,
                    controls: e.supported.ui && t.customControls ? 0 : 1,
                    disablekb: 1,
                    playsinline: e.config.playsinline && !e.config.fullscreen.iosNative ? 1 : 0,
                    cc_load_policy: e.captions.active ? 1 : 0,
                    cc_lang_pref: e.config.captions.language,
                    widget_referrer: window ? window.location.href : null
                }, t),
                events: {
                    onError (t) {
                        if (!e.media.error) {
                            const i = t.data, s = {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players."
                            }[i] || "An unknown error occurred";
                            e.media.error = {
                                code: i,
                                message: s
                            }, Z.call(e, e.media, "error");
                        }
                    },
                    onPlaybackRateChange (t) {
                        const i = t.target;
                        e.media.playbackRate = i.getPlaybackRate(), Z.call(e, e.media, "ratechange");
                    },
                    onReady (i) {
                        if (S.function(e.media.play)) return;
                        const s = i.target;
                        Qe.getTitle.call(e, n), e.media.play = ()=>{
                            Ke.call(e, !0), s.playVideo();
                        }, e.media.pause = ()=>{
                            Ke.call(e, !1), s.pauseVideo();
                        }, e.media.stop = ()=>{
                            s.stopVideo();
                        }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                            get: ()=>Number(s.getCurrentTime()),
                            set (t) {
                                e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Z.call(e, e.media, "seeking"), s.seekTo(t);
                            }
                        }), Object.defineProperty(e.media, "playbackRate", {
                            get: ()=>s.getPlaybackRate(),
                            set (e) {
                                s.setPlaybackRate(e);
                            }
                        });
                        let { volume: a } = e.config;
                        Object.defineProperty(e.media, "volume", {
                            get: ()=>a,
                            set (t) {
                                a = t, s.setVolume(100 * a), Z.call(e, e.media, "volumechange");
                            }
                        });
                        let { muted: l } = e.config;
                        Object.defineProperty(e.media, "muted", {
                            get: ()=>l,
                            set (t) {
                                const i = S.boolean(t) ? t : l;
                                l = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * a), Z.call(e, e.media, "volumechange");
                            }
                        }), Object.defineProperty(e.media, "currentSrc", {
                            get: ()=>s.getVideoUrl()
                        }), Object.defineProperty(e.media, "ended", {
                            get: ()=>e.currentTime === e.duration
                        });
                        const r = s.getAvailablePlaybackRates();
                        e.options.speed = r.filter((t)=>e.config.speed.options.includes(t)), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), Z.call(e, e.media, "timeupdate"), Z.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(()=>{
                            e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Z.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Z.call(e, e.media, "canplaythrough"));
                        }, 200), t.customControls && setTimeout(()=>Fe.build.call(e), 50);
                    },
                    onStateChange (i) {
                        const s = i.target;
                        clearInterval(e.timers.playing);
                        switch(e.media.seeking && [
                            1,
                            2
                        ].includes(i.data) && (e.media.seeking = !1, Z.call(e, e.media, "seeked")), i.data){
                            case -1:
                                Z.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), Z.call(e, e.media, "progress");
                                break;
                            case 0:
                                Ke.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : Z.call(e, e.media, "ended");
                                break;
                            case 1:
                                t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Ke.call(e, !0), Z.call(e, e.media, "playing"), e.timers.playing = setInterval(()=>{
                                    Z.call(e, e.media, "timeupdate");
                                }, 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), Z.call(e, e.media, "durationchange")));
                                break;
                            case 2:
                                e.muted || e.embed.unMute(), Ke.call(e, !1);
                                break;
                            case 3:
                                Z.call(e, e.media, "waiting");
                        }
                        Z.call(e, e.elements.container, "statechange", !1, {
                            code: i.data
                        });
                    }
                }
            });
        }
    }, Xe = {
        setup () {
            this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = $("div", {
                class: this.config.classNames.video
            }), L(this.media, this.elements.wrapper), this.elements.poster = $("div", {
                class: this.config.classNames.poster
            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
        }
    };
    class Je {
        constructor(t){
            e(this, "load", ()=>{
                this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then(()=>{
                    this.ready();
                }).catch(()=>{
                    this.trigger("error", new Error("Google IMA SDK failed to load"));
                }));
            }), e(this, "ready", ()=>{
                var e;
                this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(()=>{
                    this.clearSafetyTimer("onAdsManagerLoaded()");
                }), this.listeners(), this.setupIMA();
            }), e(this, "setupIMA", ()=>{
                this.elements.container = $("div", {
                    class: this.player.config.classNames.ads
                }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e)=>this.onAdsManagerLoaded(e), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e)=>this.onAdError(e), !1), this.requestAds();
            }), e(this, "requestAds", ()=>{
                const { container: e } = this.player.elements;
                try {
                    const t = new google.ima.AdsRequest;
                    t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t);
                } catch (e) {
                    this.onAdError(e);
                }
            }), e(this, "pollCountdown", (e = !1)=>{
                if (!e) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                this.countdownTimer = setInterval(()=>{
                    const e = Ee(Math.max(this.manager.getRemainingTime(), 0)), t = `${ve.get("advertisement", this.player.config)} - ${e}`;
                    this.elements.container.setAttribute("data-badge-text", t);
                }, 100);
            }), e(this, "onAdsManagerLoaded", (e)=>{
                if (!this.enabled) return;
                const t = new google.ima.AdsRenderingSettings;
                t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e)=>this.onAdError(e)), Object.keys(google.ima.AdEvent.Type).forEach((e)=>{
                    this.manager.addEventListener(google.ima.AdEvent.Type[e], (e)=>this.onAdEvent(e));
                }), this.trigger("loaded");
            }), e(this, "addCuePoints", ()=>{
                S.empty(this.cuePoints) || this.cuePoints.forEach((e)=>{
                    if (0 !== e && -1 !== e && e < this.player.duration) {
                        const t = this.player.elements.progress;
                        if (S.element(t)) {
                            const i = 100 / this.player.duration * e, s = $("span", {
                                class: this.player.config.classNames.cues
                            });
                            s.style.left = `${i.toString()}%`, t.appendChild(s);
                        }
                    }
                });
            }), e(this, "onAdEvent", (e)=>{
                const { container: t } = this.player.elements, i = e.getAd(), s = e.getAdData();
                switch(((e)=>{
                    Z.call(this.player, this.player.media, `ads${e.replace(/_/g, "").toLowerCase()}`);
                })(e.type), e.type){
                    case google.ima.AdEvent.Type.LOADED:
                        this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                        this.manager.setVolume(this.player.volume);
                        break;
                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                        this.player.ended ? this.loadAds() : this.loader.contentComplete();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                        this.pauseContent();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                        this.pollCountdown(), this.resumeContent();
                        break;
                    case google.ima.AdEvent.Type.LOG:
                        s.adError && this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`);
                }
            }), e(this, "onAdError", (e)=>{
                this.cancel(), this.player.debug.warn("Ads error", e);
            }), e(this, "listeners", ()=>{
                const { container: e } = this.player.elements;
                let t;
                this.player.on("canplay", ()=>{
                    this.addCuePoints();
                }), this.player.on("ended", ()=>{
                    this.loader.contentComplete();
                }), this.player.on("timeupdate", ()=>{
                    t = this.player.currentTime;
                }), this.player.on("seeked", ()=>{
                    const e = this.player.currentTime;
                    S.empty(this.cuePoints) || this.cuePoints.forEach((i, s)=>{
                        t < i && i < e && (this.manager.discardAdBreak(), this.cuePoints.splice(s, 1));
                    });
                }), window.addEventListener("resize", ()=>{
                    this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL);
                });
            }), e(this, "play", ()=>{
                const { container: e } = this.player.elements;
                this.managerPromise || this.resumeContent(), this.managerPromise.then(()=>{
                    this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                    try {
                        this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0;
                    } catch (e) {
                        this.onAdError(e);
                    }
                }).catch(()=>{});
            }), e(this, "resumeContent", ()=>{
                this.elements.container.style.zIndex = "", this.playing = !1, ie(this.player.media.play());
            }), e(this, "pauseContent", ()=>{
                this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
            }), e(this, "cancel", ()=>{
                this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e(this, "loadAds", ()=>{
                this.managerPromise.then(()=>{
                    this.manager && this.manager.destroy(), this.managerPromise = new Promise((e)=>{
                        this.on("loaded", e), this.player.debug.log(this.manager);
                    }), this.initialized = !1, this.requestAds();
                }).catch(()=>{});
            }), e(this, "trigger", (e, ...t)=>{
                const i = this.events[e];
                S.array(i) && i.forEach((e)=>{
                    S.function(e) && e.apply(this, t);
                });
            }), e(this, "on", (e, t)=>(S.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this)), e(this, "startSafetyTimer", (e, t)=>{
                this.player.debug.log(`Safety timer invoked from: ${t}`), this.safetyTimer = setTimeout(()=>{
                    this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
                }, e);
            }), e(this, "clearSafetyTimer", (e)=>{
                S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                container: null,
                displayContainer: null
            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e, t)=>{
                this.on("loaded", e), this.on("error", t);
            }), this.load();
        }
        get enabled() {
            const { config: e } = this;
            return this.player.isHTML5 && this.player.isVideo && e.enabled && (!S.empty(e.publisherId) || S.url(e.tagUrl));
        }
        get tagUrl() {
            const { config: e } = this;
            if (S.url(e.tagUrl)) return e.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ne({
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: e.publisherId
            })}`;
        }
    }
    function Ge(e = 0, t = 0, i = 255) {
        return Math.min(Math.max(e, t), i);
    }
    const Ze = (e)=>{
        const t = [];
        return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e)=>{
            const i = {};
            e.split(/\r\n|\n|\r/).forEach((e)=>{
                if (S.number(i.startTime)) {
                    if (!S.empty(e.trim()) && S.empty(i.text)) {
                        const t = e.trim().split("#xywh=");
                        [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                    }
                } else {
                    const t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                    t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number(`0.${t[4]}`), i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number(`0.${t[9]}`));
                }
            }), i.text && t.push(i);
        }), t;
    }, et = (e, t)=>{
        const i = {};
        return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i;
    };
    class tt {
        constructor(t){
            e(this, "load", ()=>{
                this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(()=>{
                    this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = !0);
                });
            }), e(this, "getThumbnails", ()=>new Promise((e)=>{
                    const { src: t } = this.player.config.previewThumbnails;
                    if (S.empty(t)) throw new Error("Missing previewThumbnails.src config attribute");
                    const i = ()=>{
                        this.thumbnails.sort((e, t)=>e.height - t.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e();
                    };
                    if (S.function(t)) t((e)=>{
                        this.thumbnails = e, i();
                    });
                    else {
                        const e = (S.string(t) ? [
                            t
                        ] : t).map((e)=>this.getThumbnail(e));
                        Promise.all(e).then(i);
                    }
                })), e(this, "getThumbnail", (e)=>new Promise((t)=>{
                    Te(e).then((i)=>{
                        const s = {
                            frames: Ze(i),
                            height: null,
                            urlPrefix: ""
                        };
                        s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                        const n = new Image;
                        n.onload = ()=>{
                            s.height = n.naturalHeight, s.width = n.naturalWidth, this.thumbnails.push(s), t();
                        }, n.src = s.urlPrefix + s.frames[0].text;
                    });
                })), e(this, "startMove", (e)=>{
                if (this.loaded && S.event(e) && [
                    "touchmove",
                    "mousemove"
                ].includes(e.type) && this.player.media.duration) {
                    if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                    else {
                        var t, i;
                        const s = this.player.elements.progress.getBoundingClientRect(), n = 100 / s.width * (e.pageX - s.left);
                        this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                        const a = null === (t = this.player.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find(({ time: e })=>e === Math.round(this.seekTime));
                        a && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a.label}<br>`);
                    }
                    this.showImageAtCurrentTime();
                }
            }), e(this, "endMove", ()=>{
                this.toggleThumbContainer(!1, !0);
            }), e(this, "startScrubbing", (e)=>{
                (S.nullOrUndefined(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()));
            }), e(this, "endScrubbing", ()=>{
                this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : G.call(this.player, this.player.media, "timeupdate", ()=>{
                    this.mouseDown || this.toggleScrubbingContainer(!1);
                });
            }), e(this, "listeners", ()=>{
                this.player.on("play", ()=>{
                    this.toggleThumbContainer(!1, !0);
                }), this.player.on("seeked", ()=>{
                    this.toggleThumbContainer(!1);
                }), this.player.on("timeupdate", ()=>{
                    this.lastTime = this.player.media.currentTime;
                });
            }), e(this, "render", ()=>{
                this.elements.thumb.container = $("div", {
                    class: this.player.config.classNames.previewThumbnails.thumbContainer
                }), this.elements.thumb.imageContainer = $("div", {
                    class: this.player.config.classNames.previewThumbnails.imageContainer
                }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                const e = $("div", {
                    class: this.player.config.classNames.previewThumbnails.timeContainer
                });
                this.elements.thumb.time = $("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $("div", {
                    class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e(this, "destroy", ()=>{
                this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e(this, "showImageAtCurrentTime", ()=>{
                this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                const e = this.thumbnails[0].frames.findIndex((e)=>this.seekTime >= e.startTime && this.seekTime <= e.endTime), t = e >= 0;
                let i = 0;
                this.mouseDown || this.toggleThumbContainer(t), t && (this.thumbnails.forEach((t, s)=>{
                    this.loadedImages.includes(t.frames[e].text) && (i = s);
                }), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)));
            }), e(this, "loadImage", (e = 0)=>{
                const t = this.showingThumb, i = this.thumbnails[e], { urlPrefix: s } = i, n = i.frames[t], a = i.frames[t].text, l = s + a;
                if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, n, e, t, a, !1), this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement);
                else {
                    this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                    const i = new Image;
                    i.src = l, i.dataset.index = t, i.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log(`Loading image: ${l}`), i.onload = ()=>this.showImage(i, n, e, t, a, !0), this.loadingImage = i, this.removeOldImages(i);
                }
            }), e(this, "showImage", (e, t, i, s, n, a = !0)=>{
                this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`), this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n));
            }), e(this, "removeOldImages", (e)=>{
                Array.from(this.currentImageContainer.children).forEach((t)=>{
                    if ("img" !== t.tagName.toLowerCase()) return;
                    const i = this.usingSprites ? 500 : 1e3;
                    if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                        t.dataset.deleting = !0;
                        const { currentImageContainer: e } = this;
                        setTimeout(()=>{
                            e.removeChild(t), this.player.debug.log(`Removing thumb: ${t.dataset.filename}`);
                        }, i);
                    }
                });
            }), e(this, "preloadNearby", (e, t = !0)=>new Promise((i)=>{
                    setTimeout(()=>{
                        const s = this.thumbnails[0].frames[e].text;
                        if (this.showingThumbFilename === s) {
                            let n;
                            n = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                            let a = !1;
                            n.forEach((e)=>{
                                const t = e.text;
                                if (t !== s && !this.loadedImages.includes(t)) {
                                    a = !0, this.player.debug.log(`Preloading thumb filename: ${t}`);
                                    const { urlPrefix: e } = this.thumbnails[0], s = e + t, n = new Image;
                                    n.src = s, n.onload = ()=>{
                                        this.player.debug.log(`Preloaded thumb filename: ${t}`), this.loadedImages.includes(t) || this.loadedImages.push(t), i();
                                    };
                                }
                            }), a || i();
                        }
                    }, 300);
                })), e(this, "getHigherQuality", (e, t, i, s)=>{
                if (e < this.thumbnails.length - 1) {
                    let n = t.naturalHeight;
                    this.usingSprites && (n = i.h), n < this.thumbContainerHeight && setTimeout(()=>{
                        this.showingThumbFilename === s && (this.player.debug.log(`Showing higher quality thumb for: ${s}`), this.loadImage(e + 1));
                    }, 300);
                }
            }), e(this, "toggleThumbContainer", (e = !1, t = !1)=>{
                const i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "toggleScrubbingContainer", (e = !1)=>{
                const t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "determineContainerAutoSizing", ()=>{
                (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
            }), e(this, "setThumbContainerSizeAndPos", ()=>{
                const { imageContainer: e } = this.elements.thumb;
                if (this.sizeSpecifiedInCSS) {
                    if (e.clientHeight > 20 && e.clientWidth < 20) {
                        const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                        e.style.width = `${t}px`;
                    } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                        const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                        e.style.height = `${t}px`;
                    }
                } else {
                    const t = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                    e.style.height = `${this.thumbContainerHeight}px`, e.style.width = `${t}px`;
                }
                this.setThumbContainerPos();
            }), e(this, "setThumbContainerPos", ()=>{
                const e = this.player.elements.progress.getBoundingClientRect(), t = this.player.elements.container.getBoundingClientRect(), { container: i } = this.elements.thumb, s = t.left - e.left + 10, n = t.right - e.left - i.clientWidth - 10, a = this.mousePosX - e.left - i.clientWidth / 2, l = Ge(a, s, n);
                i.style.left = `${l}px`, i.style.setProperty("--preview-arrow-offset", a - l + "px");
            }), e(this, "setScrubbingContainerSize", ()=>{
                const { width: e, height: t } = et(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                this.elements.scrubbing.container.style.width = `${e}px`, this.elements.scrubbing.container.style.height = `${t}px`;
            }), e(this, "setImageSizeAndOffset", (e, t)=>{
                if (!this.usingSprites) return;
                const i = this.thumbContainerHeight / t.h;
                e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = `-${t.x * i}px`, e.style.top = `-${t.y * i}px`;
            }), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                thumb: {},
                scrubbing: {}
            }, this.load();
        }
        get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
        }
        get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
        }
        get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
        }
        get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
        }
        get thumbContainerHeight() {
            if (this.mouseDown) {
                const { height: e } = et(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                return e;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
        }
        get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
        }
        set currentImageElement(e) {
            this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
        }
    }
    const it = {
        insertElements (e, t) {
            S.string(t) ? _(e, this.media, {
                src: t
            }) : S.array(t) && t.forEach((t)=>{
                _(e, this.media, t);
            });
        },
        change (e) {
            N(e, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, ()=>{
                this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
                const { sources: t, type: i } = e, [{ provider: s = _e.html5, src: n }] = t, a = "html5" === s ? i : "div", l = "html5" === s ? {} : {
                    src: n
                };
                Object.assign(this, {
                    provider: s,
                    type: i,
                    supported: K.check(i, s, this.config.playsinline),
                    media: $(a, l)
                }), this.elements.container.appendChild(this.media), S.boolean(e.autoplay) && (this.config.autoplay = e.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e.poster) || (this.poster = e.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), this.isHTML5 && it.insertElements.call(this, "source", t), this.config.title = e.title, Xe.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && it.insertElements.call(this, "track", e.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), S.empty(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), this.fullscreen.update();
            }, !0)) : this.debug.warn("Invalid source format");
        }
    };
    class st {
        constructor(t, i){
            if (e(this, "play", ()=>S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(()=>this.ads.play()).catch(()=>ie(this.media.play())), this.media.play()) : null), e(this, "pause", ()=>this.playing && S.function(this.media.pause) ? this.media.pause() : null), e(this, "togglePlay", (e)=>(S.boolean(e) ? e : !this.playing) ? this.play() : this.pause()), e(this, "stop", ()=>{
                this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
            }), e(this, "restart", ()=>{
                this.currentTime = 0;
            }), e(this, "rewind", (e)=>{
                this.currentTime -= S.number(e) ? e : this.config.seekTime;
            }), e(this, "forward", (e)=>{
                this.currentTime += S.number(e) ? e : this.config.seekTime;
            }), e(this, "increaseVolume", (e)=>{
                const t = this.media.muted ? 0 : this.volume;
                this.volume = t + (S.number(e) ? e : 0);
            }), e(this, "decreaseVolume", (e)=>{
                this.increaseVolume(-e);
            }), e(this, "airplay", ()=>{
                K.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e(this, "toggleControls", (e)=>{
                if (this.supported.ui && !this.isAudio) {
                    const t = F(this.elements.container, this.config.classNames.hideControls), i = void 0 === e ? void 0 : !e, s = R(this.elements.container, this.config.classNames.hideControls, i);
                    if (s && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, !1), s !== t) {
                        const e = s ? "controlshidden" : "controlsshown";
                        Z.call(this, this.media, e);
                    }
                    return !s;
                }
                return !1;
            }), e(this, "on", (e, t)=>{
                X.call(this, this.elements.container, e, t);
            }), e(this, "once", (e, t)=>{
                G.call(this, this.elements.container, e, t);
            }), e(this, "off", (e, t)=>{
                J(this.elements.container, e, t);
            }), e(this, "destroy", (e, t = !1)=>{
                if (!this.ready) return;
                const i = ()=>{
                    document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S.function(e) && e()) : (ee.call(this), de.cancelRequests.call(this), q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", !0), S.function(e) && e.call(this.elements.original), this.ready = !1, setTimeout(()=>{
                        this.elements = null, this.media = null;
                    }, 200));
                };
                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200));
            }), e(this, "supports", (e)=>K.mime.call(this, e)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = K.touch, this.media = t, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i || {}, (()=>{
                try {
                    return JSON.parse(this.media.getAttribute("data-plyr-config"));
                } catch (e) {
                    return {};
                }
            })()), this.elements = {
                container: null,
                fullscreen: null,
                captions: null,
                buttons: {},
                display: {},
                progress: {},
                inputs: {},
                settings: {
                    popup: null,
                    menu: null,
                    panels: {},
                    buttons: {}
                }
            }, this.captions = {
                active: null,
                currentTrack: -1,
                meta: new WeakMap
            }, this.fullscreen = {
                active: !1
            }, this.options = {
                speed: [],
                quality: []
            }, this.debug = new De(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!K.check().api) return void this.debug.error("Setup failed: no support");
            const s = this.media.cloneNode(!0);
            s.autoplay = !1, this.elements.original = s;
            const n = this.media.tagName.toLowerCase();
            let a = null, l = null;
            switch(n){
                case "div":
                    if (a = this.media.querySelector("iframe"), S.element(a)) {
                        if (l = Me(a.getAttribute("src")), this.provider = function(e) {
                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? _e.vimeo : null;
                        }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                            const e = [
                                "1",
                                "true"
                            ];
                            e.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), e.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = e.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
                        }
                    } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                    if (S.empty(this.provider) || !Object.values(_e).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                    this.type = je;
                    break;
                case "video":
                case "audio":
                    this.type = n, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                    break;
                default:
                    return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $("div"), L(this.media, this.elements.container)), Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e)=>{
                this.debug.log(`event: ${e.type}`);
            }), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", ()=>ie(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
        }
        get isHTML5() {
            return this.provider === _e.html5;
        }
        get isEmbed() {
            return this.isYouTube || this.isVimeo;
        }
        get isYouTube() {
            return this.provider === _e.youtube;
        }
        get isVimeo() {
            return this.provider === _e.vimeo;
        }
        get isVideo() {
            return this.type === je;
        }
        get isAudio() {
            return this.type === Oe;
        }
        get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
        }
        get paused() {
            return Boolean(this.media.paused);
        }
        get stopped() {
            return Boolean(this.paused && 0 === this.currentTime);
        }
        get ended() {
            return Boolean(this.media.ended);
        }
        set currentTime(e) {
            if (!this.duration) return;
            const t = S.number(e) && e > 0;
            this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
        }
        get currentTime() {
            return Number(this.media.currentTime);
        }
        get buffered() {
            const { buffered: e } = this.media;
            return S.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
        }
        get seeking() {
            return Boolean(this.media.seeking);
        }
        get duration() {
            const e = parseFloat(this.config.duration), t = (this.media || {}).duration, i = S.number(t) && t !== 1 / 0 ? t : 0;
            return e || i;
        }
        set volume(e) {
            let t = e;
            S.string(t) && (t = Number(t)), S.number(t) || (t = this.storage.get("volume")), S.number(t) || ({ volume: t } = this.config), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !S.empty(e) && this.muted && t > 0 && (this.muted = !1);
        }
        get volume() {
            return Number(this.media.volume);
        }
        set muted(e) {
            let t = e;
            S.boolean(t) || (t = this.storage.get("muted")), S.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
        }
        get muted() {
            return Boolean(this.media.muted);
        }
        get hasAudio() {
            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
        }
        set speed(e) {
            let t = null;
            S.number(e) && (t = e), S.number(t) || (t = this.storage.get("speed")), S.number(t) || (t = this.config.speed.selected);
            const { minimumSpeed: i, maximumSpeed: s } = this;
            t = Ge(t, i, s), this.config.speed.selected = t, setTimeout(()=>{
                this.media && (this.media.playbackRate = t);
            }, 0);
        }
        get speed() {
            return Number(this.media.playbackRate);
        }
        get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625;
        }
        get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
        }
        set quality(e) {
            const t = this.config.quality, i = this.options.quality;
            if (!i.length) return;
            let s = [
                !S.empty(e) && Number(e),
                this.storage.get("quality"),
                t.selected,
                t.default
            ].find(S.number), n = !0;
            if (!i.includes(s)) {
                const e = ne(i, s);
                this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`), s = e, n = !1;
            }
            t.selected = s, this.media.quality = s, n && this.storage.set({
                quality: s
            });
        }
        get quality() {
            return this.media.quality;
        }
        set loop(e) {
            const t = S.boolean(e) ? e : this.config.loop.active;
            this.config.loop.active = t, this.media.loop = t;
        }
        get loop() {
            return Boolean(this.media.loop);
        }
        set source(e) {
            it.change.call(this, e);
        }
        get source() {
            return this.media.currentSrc;
        }
        get download() {
            const { download: e } = this.config.urls;
            return S.url(e) ? e : this.source;
        }
        set download(e) {
            S.url(e) && (this.config.urls.download = e, Pe.setDownloadUrl.call(this));
        }
        set poster(e) {
            this.isVideo ? Fe.setPoster.call(this, e, !1).catch(()=>{}) : this.debug.warn("Poster can only be set for video");
        }
        get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
        }
        get ratio() {
            if (!this.isVideo) return null;
            const e = oe(ce.call(this));
            return S.array(e) ? e.join(":") : e;
        }
        set ratio(e) {
            this.isVideo ? S.string(e) && re(e) ? (this.config.ratio = oe(e), ue.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video");
        }
        set autoplay(e) {
            this.config.autoplay = S.boolean(e) ? e : this.config.autoplay;
        }
        get autoplay() {
            return Boolean(this.config.autoplay);
        }
        toggleCaptions(e) {
            xe.toggle.call(this, e, !1);
        }
        set currentTrack(e) {
            xe.set.call(this, e, !1), xe.setup.call(this);
        }
        get currentTrack() {
            const { toggled: e, currentTrack: t } = this.captions;
            return e ? t : -1;
        }
        set language(e) {
            xe.setLanguage.call(this, e, !1);
        }
        get language() {
            return (xe.getCurrentTrack.call(this) || {}).language;
        }
        set pip(e) {
            if (!K.pip) return;
            const t = S.boolean(e) ? e : !this.pip;
            S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
        }
        get pip() {
            return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
        }
        setPreviewThumbnails(e) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
        }
        static supported(e, t) {
            return K.check(e, t);
        }
        static loadSprite(e, t) {
            return ke(e, t);
        }
        static setup(e, t = {}) {
            let i = null;
            return S.string(e) ? i = Array.from(document.querySelectorAll(e)) : S.nodeList(e) ? i = Array.from(e) : S.array(e) && (i = e.filter(S.element)), S.empty(i) ? null : i.map((e)=>new st(e, t));
        }
    }
    var nt;
    return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
});

},{}]},["h9WnM","6Bv9J"], "6Bv9J", "parcelRequire0d4e")

//# sourceMappingURL=app.js.map
