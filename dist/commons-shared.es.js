import * as O from "react";
import Ie, { forwardRef as Ni, useContext as Ii, isValidElement as Gt, cloneElement as Xt, Children as Mi, useState as Ai, useEffect as ji } from "react";
import * as Di from "react-dom";
import zt from "react-dom";
function $o(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function qe(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var o = !1;
      try {
        o = this instanceof n;
      } catch {
      }
      return o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Vt = { exports: {} }, bt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function Li() {
  if (yn) return bt;
  yn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var l in o)
        l !== "key" && (i[l] = o[l]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return bt.Fragment = t, bt.jsx = r, bt.jsxs = r, bt;
}
var vt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function Fi() {
  return gn || (gn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === R ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case c:
          return "Fragment";
        case $:
          return "Profiler";
        case T:
          return "StrictMode";
        case m:
          return "Suspense";
        case N:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case g:
            return "Portal";
          case P:
            return (d.displayName || "Context") + ".Provider";
          case k:
            return (d._context.displayName || "Context") + ".Consumer";
          case C:
            var _ = d.render;
            return d = d.displayName, d || (d = _.displayName || _.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case y:
            return _ = d.displayName || null, _ !== null ? _ : e(d.type) || "Memo";
          case v:
            _ = d._payload, d = d._init;
            try {
              return e(d(_));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var j = _.error, F = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return j.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), t(d);
      }
    }
    function n(d) {
      if (d === c) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === v)
        return "<...>";
      try {
        var _ = e(d);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var d = M.A;
      return d === null ? null : d.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(d) {
      if (H.call(d, "key")) {
        var _ = Object.getOwnPropertyDescriptor(d, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function l(d, _) {
      function j() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: j,
        configurable: !0
      });
    }
    function u() {
      var d = e(this.type);
      return I[d] || (I[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function f(d, _, j, F, D, z, W, q) {
      return j = z.ref, d = {
        $$typeof: x,
        type: d,
        key: _,
        props: z,
        _owner: D
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function p(d, _, j, F, D, z, W, q) {
      var B = _.children;
      if (B !== void 0)
        if (F)
          if (U(B)) {
            for (F = 0; F < B.length; F++)
              h(B[F]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(B);
      if (H.call(_, "key")) {
        B = e(d);
        var Y = Object.keys(_).filter(function(Z) {
          return Z !== "key";
        });
        F = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", fe[B + F] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          B,
          Y,
          B
        ), fe[B + F] = !0);
      }
      if (B = null, j !== void 0 && (r(j), B = "" + j), s(_) && (r(_.key), B = "" + _.key), "key" in _) {
        j = {};
        for (var V in _)
          V !== "key" && (j[V] = _[V]);
      } else j = _;
      return B && l(
        j,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), f(
        d,
        B,
        z,
        D,
        o(),
        j,
        W,
        q
      );
    }
    function h(d) {
      typeof d == "object" && d !== null && d.$$typeof === x && d._store && (d._store.validated = 1);
    }
    var b = Ie, x = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), P = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), M = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, U = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var J, I = {}, L = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), G = A(n(i)), fe = {};
    vt.Fragment = c, vt.jsx = function(d, _, j, F, D) {
      var z = 1e4 > M.recentlyCreatedOwnerStacks++;
      return p(
        d,
        _,
        j,
        !1,
        F,
        D,
        z ? Error("react-stack-top-frame") : L,
        z ? A(n(d)) : G
      );
    }, vt.jsxs = function(d, _, j, F, D) {
      var z = 1e4 > M.recentlyCreatedOwnerStacks++;
      return p(
        d,
        _,
        j,
        !0,
        F,
        D,
        z ? Error("react-stack-top-frame") : L,
        z ? A(n(d)) : G
      );
    };
  })()), vt;
}
var bn;
function Bi() {
  return bn || (bn = 1, process.env.NODE_ENV === "production" ? Vt.exports = Li() : Vt.exports = Fi()), Vt.exports;
}
var K = Bi();
function w() {
  return w = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, w.apply(null, arguments);
}
function ge(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Wt = { exports: {} }, Ut = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function zi() {
  if (vn) return te;
  vn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function P(m) {
    if (typeof m == "object" && m !== null) {
      var N = m.$$typeof;
      switch (N) {
        case t:
          switch (m = m.type, m) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case p:
                case g:
                case x:
                case s:
                  return m;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function C(m) {
    return P(m) === f;
  }
  return te.AsyncMode = u, te.ConcurrentMode = f, te.ContextConsumer = l, te.ContextProvider = s, te.Element = t, te.ForwardRef = p, te.Fragment = n, te.Lazy = g, te.Memo = x, te.Portal = r, te.Profiler = i, te.StrictMode = o, te.Suspense = h, te.isAsyncMode = function(m) {
    return C(m) || P(m) === u;
  }, te.isConcurrentMode = C, te.isContextConsumer = function(m) {
    return P(m) === l;
  }, te.isContextProvider = function(m) {
    return P(m) === s;
  }, te.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, te.isForwardRef = function(m) {
    return P(m) === p;
  }, te.isFragment = function(m) {
    return P(m) === n;
  }, te.isLazy = function(m) {
    return P(m) === g;
  }, te.isMemo = function(m) {
    return P(m) === x;
  }, te.isPortal = function(m) {
    return P(m) === r;
  }, te.isProfiler = function(m) {
    return P(m) === i;
  }, te.isStrictMode = function(m) {
    return P(m) === o;
  }, te.isSuspense = function(m) {
    return P(m) === h;
  }, te.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === f || m === i || m === o || m === h || m === b || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === x || m.$$typeof === s || m.$$typeof === l || m.$$typeof === p || m.$$typeof === T || m.$$typeof === $ || m.$$typeof === k || m.$$typeof === c);
  }, te.typeOf = P, te;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function Vi() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function P(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === f || E === i || E === o || E === h || E === b || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === x || E.$$typeof === s || E.$$typeof === l || E.$$typeof === p || E.$$typeof === T || E.$$typeof === $ || E.$$typeof === k || E.$$typeof === c);
    }
    function C(E) {
      if (typeof E == "object" && E !== null) {
        var ie = E.$$typeof;
        switch (ie) {
          case t:
            var be = E.type;
            switch (be) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case h:
                return be;
              default:
                var we = be && be.$$typeof;
                switch (we) {
                  case l:
                  case p:
                  case g:
                  case x:
                  case s:
                    return we;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var m = u, N = f, y = l, v = s, S = t, R = p, M = n, H = g, U = x, A = r, J = i, I = o, L = h, G = !1;
    function fe(E) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(E) || C(E) === u;
    }
    function d(E) {
      return C(E) === f;
    }
    function _(E) {
      return C(E) === l;
    }
    function j(E) {
      return C(E) === s;
    }
    function F(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function D(E) {
      return C(E) === p;
    }
    function z(E) {
      return C(E) === n;
    }
    function W(E) {
      return C(E) === g;
    }
    function q(E) {
      return C(E) === x;
    }
    function B(E) {
      return C(E) === r;
    }
    function Y(E) {
      return C(E) === i;
    }
    function V(E) {
      return C(E) === o;
    }
    function Z(E) {
      return C(E) === h;
    }
    re.AsyncMode = m, re.ConcurrentMode = N, re.ContextConsumer = y, re.ContextProvider = v, re.Element = S, re.ForwardRef = R, re.Fragment = M, re.Lazy = H, re.Memo = U, re.Portal = A, re.Profiler = J, re.StrictMode = I, re.Suspense = L, re.isAsyncMode = fe, re.isConcurrentMode = d, re.isContextConsumer = _, re.isContextProvider = j, re.isElement = F, re.isForwardRef = D, re.isFragment = z, re.isLazy = W, re.isMemo = q, re.isPortal = B, re.isProfiler = Y, re.isStrictMode = V, re.isSuspense = Z, re.isValidElementType = P, re.typeOf = C;
  })()), re;
}
var xn;
function wo() {
  return xn || (xn = 1, process.env.NODE_ENV === "production" ? Ut.exports = zi() : Ut.exports = Vi()), Ut.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tr, Tn;
function Wi() {
  if (Tn) return Tr;
  Tn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Tr = o() ? Object.assign : function(i, s) {
    for (var l, u = n(i), f, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var h in l)
        t.call(l, h) && (u[h] = l[h]);
      if (e) {
        f = e(l);
        for (var b = 0; b < f.length; b++)
          r.call(l, f[b]) && (u[f[b]] = l[f[b]]);
      }
    }
    return u;
  }, Tr;
}
var Sr, Sn;
function Hr() {
  if (Sn) return Sr;
  Sn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Sr = e, Sr;
}
var Rr, Rn;
function ko() {
  return Rn || (Rn = 1, Rr = Function.call.bind(Object.prototype.hasOwnProperty)), Rr;
}
var _r, _n;
function Ui() {
  if (_n) return _r;
  _n = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Hr(), r = {}, n = /* @__PURE__ */ ko();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, l, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var b = Error(
                (u || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            h = i[p](s, p, u, l, null, t);
          } catch (g) {
            h = g;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var x = f ? f() : "";
            e(
              "Failed " + l + " type: " + h.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, _r = o, _r;
}
var Pr, Pn;
function Yi() {
  if (Pn) return Pr;
  Pn = 1;
  var e = wo(), t = Wi(), r = /* @__PURE__ */ Hr(), n = /* @__PURE__ */ ko(), o = /* @__PURE__ */ Ui(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Pr = function(l, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(d) {
      var _ = d && (f && d[f] || d[p]);
      if (typeof _ == "function")
        return _;
    }
    var b = "<<anonymous>>", x = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: k(),
      arrayOf: P,
      element: C(),
      elementType: m(),
      instanceOf: N,
      node: R(),
      objectOf: v,
      oneOf: y,
      oneOfType: S,
      shape: H,
      exact: U
    };
    function g(d, _) {
      return d === _ ? d !== 0 || 1 / d === 1 / _ : d !== d && _ !== _;
    }
    function c(d, _) {
      this.message = d, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function T(d) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, j = 0;
      function F(z, W, q, B, Y, V, Z) {
        if (B = B || b, V = V || q, Z !== r) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = B + ":" + q;
            !_[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ie] = !0, j++);
          }
        }
        return W[q] == null ? z ? W[q] === null ? new c("The " + Y + " `" + V + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new c("The " + Y + " `" + V + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : d(W, q, B, Y, V);
      }
      var D = F.bind(null, !1);
      return D.isRequired = F.bind(null, !0), D;
    }
    function $(d) {
      function _(j, F, D, z, W, q) {
        var B = j[F], Y = I(B);
        if (Y !== d) {
          var V = L(B);
          return new c(
            "Invalid " + z + " `" + W + "` of type " + ("`" + V + "` supplied to `" + D + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return T(_);
    }
    function k() {
      return T(s);
    }
    function P(d) {
      function _(j, F, D, z, W) {
        if (typeof d != "function")
          return new c("Property `" + W + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var q = j[F];
        if (!Array.isArray(q)) {
          var B = I(q);
          return new c("Invalid " + z + " `" + W + "` of type " + ("`" + B + "` supplied to `" + D + "`, expected an array."));
        }
        for (var Y = 0; Y < q.length; Y++) {
          var V = d(q, Y, D, z, W + "[" + Y + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return T(_);
    }
    function C() {
      function d(_, j, F, D, z) {
        var W = _[j];
        if (!l(W)) {
          var q = I(W);
          return new c("Invalid " + D + " `" + z + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(d);
    }
    function m() {
      function d(_, j, F, D, z) {
        var W = _[j];
        if (!e.isValidElementType(W)) {
          var q = I(W);
          return new c("Invalid " + D + " `" + z + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(d);
    }
    function N(d) {
      function _(j, F, D, z, W) {
        if (!(j[F] instanceof d)) {
          var q = d.name || b, B = fe(j[F]);
          return new c("Invalid " + z + " `" + W + "` of type " + ("`" + B + "` supplied to `" + D + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return T(_);
    }
    function y(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function _(j, F, D, z, W) {
        for (var q = j[F], B = 0; B < d.length; B++)
          if (g(q, d[B]))
            return null;
        var Y = JSON.stringify(d, function(Z, E) {
          var ie = L(E);
          return ie === "symbol" ? String(E) : E;
        });
        return new c("Invalid " + z + " `" + W + "` of value `" + String(q) + "` " + ("supplied to `" + D + "`, expected one of " + Y + "."));
      }
      return T(_);
    }
    function v(d) {
      function _(j, F, D, z, W) {
        if (typeof d != "function")
          return new c("Property `" + W + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var q = j[F], B = I(q);
        if (B !== "object")
          return new c("Invalid " + z + " `" + W + "` of type " + ("`" + B + "` supplied to `" + D + "`, expected an object."));
        for (var Y in q)
          if (n(q, Y)) {
            var V = d(q, Y, D, z, W + "." + Y, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return T(_);
    }
    function S(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var _ = 0; _ < d.length; _++) {
        var j = d[_];
        if (typeof j != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(j) + " at index " + _ + "."
          ), s;
      }
      function F(D, z, W, q, B) {
        for (var Y = [], V = 0; V < d.length; V++) {
          var Z = d[V], E = Z(D, z, W, q, B, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && Y.push(E.data.expectedType);
        }
        var ie = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new c("Invalid " + q + " `" + B + "` supplied to " + ("`" + W + "`" + ie + "."));
      }
      return T(F);
    }
    function R() {
      function d(_, j, F, D, z) {
        return A(_[j]) ? null : new c("Invalid " + D + " `" + z + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return T(d);
    }
    function M(d, _, j, F, D) {
      return new c(
        (d || "React class") + ": " + _ + " type `" + j + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function H(d) {
      function _(j, F, D, z, W) {
        var q = j[F], B = I(q);
        if (B !== "object")
          return new c("Invalid " + z + " `" + W + "` of type `" + B + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var Y in d) {
          var V = d[Y];
          if (typeof V != "function")
            return M(D, z, W, Y, L(V));
          var Z = V(q, Y, D, z, W + "." + Y, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return T(_);
    }
    function U(d) {
      function _(j, F, D, z, W) {
        var q = j[F], B = I(q);
        if (B !== "object")
          return new c("Invalid " + z + " `" + W + "` of type `" + B + "` " + ("supplied to `" + D + "`, expected `object`."));
        var Y = t({}, j[F], d);
        for (var V in Y) {
          var Z = d[V];
          if (n(d, V) && typeof Z != "function")
            return M(D, z, W, V, L(Z));
          if (!Z)
            return new c(
              "Invalid " + z + " `" + W + "` key `" + V + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(j[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var E = Z(q, V, D, z, W + "." + V, r);
          if (E)
            return E;
        }
        return null;
      }
      return T(_);
    }
    function A(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(A);
          if (d === null || l(d))
            return !0;
          var _ = h(d);
          if (_) {
            var j = _.call(d), F;
            if (_ !== d.entries) {
              for (; !(F = j.next()).done; )
                if (!A(F.value))
                  return !1;
            } else
              for (; !(F = j.next()).done; ) {
                var D = F.value;
                if (D && !A(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(d, _) {
      return d === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function I(d) {
      var _ = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : J(_, d) ? "symbol" : _;
    }
    function L(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var _ = I(d);
      if (_ === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function G(d) {
      var _ = L(d);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function fe(d) {
      return !d.constructor || !d.constructor.name ? b : d.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Pr;
}
var Or, On;
function qi() {
  if (On) return Or;
  On = 1;
  var e = /* @__PURE__ */ Hr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Or = function() {
    function n(s, l, u, f, p, h) {
      if (h !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Or;
}
var Cn;
function Hi() {
  if (Cn) return Wt.exports;
  if (Cn = 1, process.env.NODE_ENV !== "production") {
    var e = wo(), t = !0;
    Wt.exports = /* @__PURE__ */ Yi()(e.isElement, t);
  } else
    Wt.exports = /* @__PURE__ */ qi()();
  return Wt.exports;
}
var Ki = /* @__PURE__ */ Hi();
const a = /* @__PURE__ */ $o(Ki);
function No(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = No(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function he() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = No(e)) && (n && (n += " "), n += t);
  return n;
}
function et(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const l = t(s);
          l !== "" && i.push(l), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
var ue = {}, Cr = { exports: {} }, $n;
function Io() {
  return $n || ($n = 1, (function(e) {
    function t(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(Cr)), Cr.exports;
}
function Pt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pt
}, Symbol.toStringTag, { value: "Module" })), Xi = /* @__PURE__ */ qe(Gi);
function Ji(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ji
}, Symbol.toStringTag, { value: "Module" })), Qi = /* @__PURE__ */ qe(Zi);
var wn;
function es() {
  if (wn) return ue;
  wn = 1;
  var e = Io();
  Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.alpha = g, ue.blend = N, ue.colorChannel = void 0, ue.darken = T, ue.decomposeColor = s, ue.emphasize = C, ue.getContrastRatio = x, ue.getLuminance = b, ue.hexToRgb = o, ue.hslToRgb = h, ue.lighten = k, ue.private_safeAlpha = c, ue.private_safeColorChannel = void 0, ue.private_safeDarken = $, ue.private_safeEmphasize = m, ue.private_safeLighten = P, ue.recomposeColor = f, ue.rgbToHex = p;
  var t = e(Xi), r = e(Qi);
  function n(y, v = 0, S = 1) {
    return process.env.NODE_ENV !== "production" && (y < v || y > S) && console.error(`MUI: The value provided ${y} is out of range [${v}, ${S}].`), (0, r.default)(y, v, S);
  }
  function o(y) {
    y = y.slice(1);
    const v = new RegExp(`.{1,${y.length >= 6 ? 2 : 1}}`, "g");
    let S = y.match(v);
    return S && S[0].length === 1 && (S = S.map((R) => R + R)), S ? `rgb${S.length === 4 ? "a" : ""}(${S.map((R, M) => M < 3 ? parseInt(R, 16) : Math.round(parseInt(R, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function i(y) {
    const v = y.toString(16);
    return v.length === 1 ? `0${v}` : v;
  }
  function s(y) {
    if (y.type)
      return y;
    if (y.charAt(0) === "#")
      return s(o(y));
    const v = y.indexOf("("), S = y.substring(0, v);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(S) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${y}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, t.default)(9, y));
    let R = y.substring(v + 1, y.length - 1), M;
    if (S === "color") {
      if (R = R.split(" "), M = R.shift(), R.length === 4 && R[3].charAt(0) === "/" && (R[3] = R[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(M) === -1)
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${M}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, t.default)(10, M));
    } else
      R = R.split(",");
    return R = R.map((H) => parseFloat(H)), {
      type: S,
      values: R,
      colorSpace: M
    };
  }
  const l = (y) => {
    const v = s(y);
    return v.values.slice(0, 3).map((S, R) => v.type.indexOf("hsl") !== -1 && R !== 0 ? `${S}%` : S).join(" ");
  };
  ue.colorChannel = l;
  const u = (y, v) => {
    try {
      return l(y);
    } catch {
      return v && process.env.NODE_ENV !== "production" && console.warn(v), y;
    }
  };
  ue.private_safeColorChannel = u;
  function f(y) {
    const {
      type: v,
      colorSpace: S
    } = y;
    let {
      values: R
    } = y;
    return v.indexOf("rgb") !== -1 ? R = R.map((M, H) => H < 3 ? parseInt(M, 10) : M) : v.indexOf("hsl") !== -1 && (R[1] = `${R[1]}%`, R[2] = `${R[2]}%`), v.indexOf("color") !== -1 ? R = `${S} ${R.join(" ")}` : R = `${R.join(", ")}`, `${v}(${R})`;
  }
  function p(y) {
    if (y.indexOf("#") === 0)
      return y;
    const {
      values: v
    } = s(y);
    return `#${v.map((S, R) => i(R === 3 ? Math.round(255 * S) : S)).join("")}`;
  }
  function h(y) {
    y = s(y);
    const {
      values: v
    } = y, S = v[0], R = v[1] / 100, M = v[2] / 100, H = R * Math.min(M, 1 - M), U = (I, L = (I + S / 30) % 12) => M - H * Math.max(Math.min(L - 3, 9 - L, 1), -1);
    let A = "rgb";
    const J = [Math.round(U(0) * 255), Math.round(U(8) * 255), Math.round(U(4) * 255)];
    return y.type === "hsla" && (A += "a", J.push(v[3])), f({
      type: A,
      values: J
    });
  }
  function b(y) {
    y = s(y);
    let v = y.type === "hsl" || y.type === "hsla" ? s(h(y)).values : y.values;
    return v = v.map((S) => (y.type !== "color" && (S /= 255), S <= 0.03928 ? S / 12.92 : ((S + 0.055) / 1.055) ** 2.4)), Number((0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]).toFixed(3));
  }
  function x(y, v) {
    const S = b(y), R = b(v);
    return (Math.max(S, R) + 0.05) / (Math.min(S, R) + 0.05);
  }
  function g(y, v) {
    return y = s(y), v = n(v), (y.type === "rgb" || y.type === "hsl") && (y.type += "a"), y.type === "color" ? y.values[3] = `/${v}` : y.values[3] = v, f(y);
  }
  function c(y, v, S) {
    try {
      return g(y, v);
    } catch {
      return S && process.env.NODE_ENV !== "production" && console.warn(S), y;
    }
  }
  function T(y, v) {
    if (y = s(y), v = n(v), y.type.indexOf("hsl") !== -1)
      y.values[2] *= 1 - v;
    else if (y.type.indexOf("rgb") !== -1 || y.type.indexOf("color") !== -1)
      for (let S = 0; S < 3; S += 1)
        y.values[S] *= 1 - v;
    return f(y);
  }
  function $(y, v, S) {
    try {
      return T(y, v);
    } catch {
      return S && process.env.NODE_ENV !== "production" && console.warn(S), y;
    }
  }
  function k(y, v) {
    if (y = s(y), v = n(v), y.type.indexOf("hsl") !== -1)
      y.values[2] += (100 - y.values[2]) * v;
    else if (y.type.indexOf("rgb") !== -1)
      for (let S = 0; S < 3; S += 1)
        y.values[S] += (255 - y.values[S]) * v;
    else if (y.type.indexOf("color") !== -1)
      for (let S = 0; S < 3; S += 1)
        y.values[S] += (1 - y.values[S]) * v;
    return f(y);
  }
  function P(y, v, S) {
    try {
      return k(y, v);
    } catch {
      return S && process.env.NODE_ENV !== "production" && console.warn(S), y;
    }
  }
  function C(y, v = 0.15) {
    return b(y) > 0.5 ? T(y, v) : k(y, v);
  }
  function m(y, v, S) {
    try {
      return C(y, v);
    } catch {
      return S && process.env.NODE_ENV !== "production" && console.warn(S), y;
    }
  }
  function N(y, v, S, R = 1) {
    const M = (J, I) => Math.round((J ** (1 / R) * (1 - S) + I ** (1 / R) * S) ** R), H = s(y), U = s(v), A = [M(H.values[0], U.values[0]), M(H.values[1], U.values[1]), M(H.values[2], U.values[2])];
    return f({
      type: "rgb",
      values: A
    });
  }
  return ue;
}
var Ue = /* @__PURE__ */ es();
function Ot(e, t) {
  const r = w({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = w({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = w({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = Ot(o[s], i[s]);
      }));
    } else r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function We(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Mo(e) {
  if (/* @__PURE__ */ O.isValidElement(e) || !We(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Mo(e[r]);
  }), t;
}
function Me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? w({}, e) : e;
  return We(e) && We(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ O.isValidElement(t[o]) ? n[o] = t[o] : We(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && We(e[o]) ? n[o] = Me(e[o], t[o], r) : r.clone ? n[o] = We(t[o]) ? Mo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me,
  isPlainObject: We
}, Symbol.toStringTag, { value: "Module" })), rs = ["values", "unit", "step"], ns = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => w({}, r, {
    [n.key]: n.val
  }), {});
};
function Ao(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = ge(e, rs), i = ns(t), s = Object.keys(i);
  function l(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r})`;
  }
  function u(b) {
    return `@media (max-width:${(typeof t[b] == "number" ? t[b] : b) - n / 100}${r})`;
  }
  function f(b, x) {
    const g = s.indexOf(x);
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : x) - n / 100}${r})`;
  }
  function p(b) {
    return s.indexOf(b) + 1 < s.length ? f(b, s[s.indexOf(b) + 1]) : l(b);
  }
  function h(b) {
    const x = s.indexOf(b);
    return x === 0 ? l(s[1]) : x === s.length - 1 ? u(s[x]) : f(b, s[s.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return w({
    keys: s,
    values: i,
    up: l,
    down: u,
    between: f,
    only: p,
    not: h,
    unit: r
  }, o);
}
const os = {
  borderRadius: 4
}, He = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {};
function St(e, t) {
  return t ? Me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Kr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, kn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Kr[e]}px)`
};
function De(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || kn;
    return t.reduce((s, l, u) => (s[i.up(i.keys[u])] = r(t[u]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || kn;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || Kr).indexOf(l) !== -1) {
        const u = i.up(l);
        s[u] = r(t[l], l);
      } else {
        const u = l;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return r(t);
}
function is(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Nn(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function le(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Pt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" }));
function ir(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function er(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = ir(e, r) || n, t && (o = t(o, n, e)), o;
}
function me(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], u = s.theme, f = ir(u, n) || {};
    return De(s, l, (h) => {
      let b = er(f, o, h);
      return h === b && typeof h == "string" && (b = er(f, o, `${t}${h === "default" ? "" : le(h)}`, h)), r === !1 ? b : {
        [r]: b
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: He
  } : {}, i.filterProps = [t], i;
}
function as(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const cs = {
  m: "margin",
  p: "padding"
}, ls = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, In = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, us = as((e) => {
  if (e.length > 2)
    if (In[e])
      e = In[e];
    else
      return [e];
  const [t, r] = e.split(""), n = cs[t], o = ls[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), sr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ar = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], fs = [...sr, ...ar];
function Nt(e, t, r, n) {
  var o;
  const i = (o = ir(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function jo(e) {
  return Nt(e, "spacing", 8, "spacing");
}
function It(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ds(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = It(t, r), n), {});
}
function ps(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = us(r), i = ds(o, n), s = e[r];
  return De(e, s, i);
}
function Do(e, t) {
  const r = jo(e.theme);
  return Object.keys(e).map((n) => ps(e, t, n, r)).reduce(St, {});
}
function de(e) {
  return Do(e, sr);
}
de.propTypes = process.env.NODE_ENV !== "production" ? sr.reduce((e, t) => (e[t] = He, e), {}) : {};
de.filterProps = sr;
function pe(e) {
  return Do(e, ar);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, t) => (e[t] = He, e), {}) : {};
pe.filterProps = ar;
process.env.NODE_ENV !== "production" && fs.reduce((e, t) => (e[t] = He, e), {});
function ms(e = 8) {
  if (e.mui)
    return e;
  const t = jo({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function cr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? St(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ce(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $e(e, t) {
  return me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const hs = $e("border", Ce), ys = $e("borderTop", Ce), gs = $e("borderRight", Ce), bs = $e("borderBottom", Ce), vs = $e("borderLeft", Ce), Es = $e("borderColor"), xs = $e("borderTopColor"), Ts = $e("borderRightColor"), Ss = $e("borderBottomColor"), Rs = $e("borderLeftColor"), _s = $e("outline", Ce), Ps = $e("outlineColor"), lr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Nt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: It(t, n)
    });
    return De(e, e.borderRadius, r);
  }
  return null;
};
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: He
} : {};
lr.filterProps = ["borderRadius"];
cr(hs, ys, gs, bs, vs, Es, xs, Ts, Ss, Rs, lr, _s, Ps);
const ur = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Nt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: It(t, n)
    });
    return De(e, e.gap, r);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: He
} : {};
ur.filterProps = ["gap"];
const fr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Nt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: It(t, n)
    });
    return De(e, e.columnGap, r);
  }
  return null;
};
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: He
} : {};
fr.filterProps = ["columnGap"];
const dr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Nt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: It(t, n)
    });
    return De(e, e.rowGap, r);
  }
  return null;
};
dr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: He
} : {};
dr.filterProps = ["rowGap"];
const Os = me({
  prop: "gridColumn"
}), Cs = me({
  prop: "gridRow"
}), $s = me({
  prop: "gridAutoFlow"
}), ws = me({
  prop: "gridAutoColumns"
}), ks = me({
  prop: "gridAutoRows"
}), Ns = me({
  prop: "gridTemplateColumns"
}), Is = me({
  prop: "gridTemplateRows"
}), Ms = me({
  prop: "gridTemplateAreas"
}), As = me({
  prop: "gridArea"
});
cr(ur, fr, dr, Os, Cs, $s, ws, ks, Ns, Is, Ms, As);
function ut(e, t) {
  return t === "grey" ? t : e;
}
const js = me({
  prop: "color",
  themeKey: "palette",
  transform: ut
}), Ds = me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ut
}), Ls = me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ut
});
cr(js, Ds, Ls);
function _e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Fs = me({
  prop: "width",
  transform: _e
}), Gr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Kr[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: _e(r)
      };
    };
    return De(e, e.maxWidth, t);
  }
  return null;
};
Gr.filterProps = ["maxWidth"];
const Bs = me({
  prop: "minWidth",
  transform: _e
}), zs = me({
  prop: "height",
  transform: _e
}), Vs = me({
  prop: "maxHeight",
  transform: _e
}), Ws = me({
  prop: "minHeight",
  transform: _e
});
me({
  prop: "size",
  cssProperty: "width",
  transform: _e
});
me({
  prop: "size",
  cssProperty: "height",
  transform: _e
});
const Us = me({
  prop: "boxSizing"
});
cr(Fs, Gr, Bs, zs, Vs, Ws, Us);
const Mt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ce
  },
  borderTop: {
    themeKey: "borders",
    transform: Ce
  },
  borderRight: {
    themeKey: "borders",
    transform: Ce
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ce
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ce
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ce
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: lr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ut
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ut
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ut
  },
  // spacing
  p: {
    style: pe
  },
  pt: {
    style: pe
  },
  pr: {
    style: pe
  },
  pb: {
    style: pe
  },
  pl: {
    style: pe
  },
  px: {
    style: pe
  },
  py: {
    style: pe
  },
  padding: {
    style: pe
  },
  paddingTop: {
    style: pe
  },
  paddingRight: {
    style: pe
  },
  paddingBottom: {
    style: pe
  },
  paddingLeft: {
    style: pe
  },
  paddingX: {
    style: pe
  },
  paddingY: {
    style: pe
  },
  paddingInline: {
    style: pe
  },
  paddingInlineStart: {
    style: pe
  },
  paddingInlineEnd: {
    style: pe
  },
  paddingBlock: {
    style: pe
  },
  paddingBlockStart: {
    style: pe
  },
  paddingBlockEnd: {
    style: pe
  },
  m: {
    style: de
  },
  mt: {
    style: de
  },
  mr: {
    style: de
  },
  mb: {
    style: de
  },
  ml: {
    style: de
  },
  mx: {
    style: de
  },
  my: {
    style: de
  },
  margin: {
    style: de
  },
  marginTop: {
    style: de
  },
  marginRight: {
    style: de
  },
  marginBottom: {
    style: de
  },
  marginLeft: {
    style: de
  },
  marginX: {
    style: de
  },
  marginY: {
    style: de
  },
  marginInline: {
    style: de
  },
  marginInlineStart: {
    style: de
  },
  marginInlineEnd: {
    style: de
  },
  marginBlock: {
    style: de
  },
  marginBlockStart: {
    style: de
  },
  marginBlockEnd: {
    style: de
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ur
  },
  rowGap: {
    style: dr
  },
  columnGap: {
    style: fr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: _e
  },
  maxWidth: {
    style: Gr
  },
  minWidth: {
    transform: _e
  },
  height: {
    transform: _e
  },
  maxHeight: {
    transform: _e
  },
  minHeight: {
    transform: _e
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ys(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function qs(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Lo() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, l = i[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: p,
      style: h
    } = l;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const b = ir(o, f) || {};
    return h ? h(s) : De(s, n, (g) => {
      let c = er(b, p, g);
      return g === c && typeof g == "string" && (c = er(b, p, `${r}${g === "default" ? "" : le(g)}`, g)), u === !1 ? c : {
        [u]: c
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {},
      nested: s
    } = r || {};
    if (!o)
      return null;
    const l = (n = i.unstable_sxConfig) != null ? n : Mt;
    function u(f) {
      let p = f;
      if (typeof f == "function")
        p = f(i);
      else if (typeof f != "object")
        return f;
      if (!p)
        return null;
      const h = is(i.breakpoints), b = Object.keys(h);
      let x = h;
      return Object.keys(p).forEach((g) => {
        const c = qs(p[g], i);
        if (c != null)
          if (typeof c == "object")
            if (l[g])
              x = St(x, e(g, c, i, l));
            else {
              const T = De({
                theme: i
              }, c, ($) => ({
                [g]: $
              }));
              Ys(T, c) ? x[g] = t({
                sx: c,
                theme: i,
                nested: !0
              }) : x = St(x, T);
            }
          else
            x = St(x, e(g, c, i, l));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Nn(b, x)
      } : Nn(b, x);
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return t;
}
const At = Lo();
At.filterProps = ["sx"];
function Fo(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const Hs = ["breakpoints", "palette", "spacing", "shape"];
function Xr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = ge(e, Hs), l = Ao(r), u = ms(o);
  let f = Me({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: w({
      mode: "light"
    }, n),
    spacing: u,
    shape: w({}, os, i)
  }, s);
  return f.applyStyles = Fo, f = t.reduce((p, h) => Me(p, h), f), f.unstable_sxConfig = w({}, Mt, s?.unstable_sxConfig), f.unstable_sx = function(h) {
    return At({
      sx: h,
      theme: this
    });
  }, f;
}
const Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xr,
  private_createBreakpoints: Ao,
  unstable_applyStyles: Fo
}, Symbol.toStringTag, { value: "Module" }));
function Gs(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Xs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Js = /* @__PURE__ */ (function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Xs(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Gs(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), xe = "-ms-", tr = "-moz-", Q = "-webkit-", Bo = "comm", Jr = "rule", Zr = "decl", Zs = "@import", zo = "@keyframes", Qs = "@layer", ea = Math.abs, pr = String.fromCharCode, ta = Object.assign;
function ra(e, t) {
  return ve(e, 0) ^ 45 ? (((t << 2 ^ ve(e, 0)) << 2 ^ ve(e, 1)) << 2 ^ ve(e, 2)) << 2 ^ ve(e, 3) : 0;
}
function Vo(e) {
  return e.trim();
}
function na(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Dr(e, t) {
  return e.indexOf(t);
}
function ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ct(e, t, r) {
  return e.slice(t, r);
}
function ke(e) {
  return e.length;
}
function Qr(e) {
  return e.length;
}
function Yt(e, t) {
  return t.push(e), e;
}
function oa(e, t) {
  return e.map(t).join("");
}
var mr = 1, dt = 1, Wo = 0, Se = 0, ye = 0, pt = "";
function hr(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: mr, column: dt, length: s, return: "" };
}
function Et(e, t) {
  return ta(hr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ia() {
  return ye;
}
function sa() {
  return ye = Se > 0 ? ve(pt, --Se) : 0, dt--, ye === 10 && (dt = 1, mr--), ye;
}
function Pe() {
  return ye = Se < Wo ? ve(pt, Se++) : 0, dt++, ye === 10 && (dt = 1, mr++), ye;
}
function Ae() {
  return ve(pt, Se);
}
function Jt() {
  return Se;
}
function jt(e, t) {
  return Ct(pt, e, t);
}
function $t(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Uo(e) {
  return mr = dt = 1, Wo = ke(pt = e), Se = 0, [];
}
function Yo(e) {
  return pt = "", e;
}
function Zt(e) {
  return Vo(jt(Se - 1, Lr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function aa(e) {
  for (; (ye = Ae()) && ye < 33; )
    Pe();
  return $t(e) > 2 || $t(ye) > 3 ? "" : " ";
}
function ca(e, t) {
  for (; --t && Pe() && !(ye < 48 || ye > 102 || ye > 57 && ye < 65 || ye > 70 && ye < 97); )
    ;
  return jt(e, Jt() + (t < 6 && Ae() == 32 && Pe() == 32));
}
function Lr(e) {
  for (; Pe(); )
    switch (ye) {
      // ] ) " '
      case e:
        return Se;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Lr(ye);
        break;
      // (
      case 40:
        e === 41 && Lr(e);
        break;
      // \
      case 92:
        Pe();
        break;
    }
  return Se;
}
function la(e, t) {
  for (; Pe() && e + ye !== 57; )
    if (e + ye === 84 && Ae() === 47)
      break;
  return "/*" + jt(t, Se - 1) + "*" + pr(e === 47 ? e : Pe());
}
function ua(e) {
  for (; !$t(Ae()); )
    Pe();
  return jt(e, Se);
}
function fa(e) {
  return Yo(Qt("", null, null, null, [""], e = Uo(e), 0, [0], e));
}
function Qt(e, t, r, n, o, i, s, l, u) {
  for (var f = 0, p = 0, h = s, b = 0, x = 0, g = 0, c = 1, T = 1, $ = 1, k = 0, P = "", C = o, m = i, N = n, y = P; T; )
    switch (g = k, k = Pe()) {
      // (
      case 40:
        if (g != 108 && ve(y, h - 1) == 58) {
          Dr(y += ee(Zt(k), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Zt(k);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += aa(g);
        break;
      // \
      case 92:
        y += ca(Jt() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ae()) {
          case 42:
          case 47:
            Yt(da(la(Pe(), Jt()), t, r), u);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * c:
        l[f++] = ke(y) * $;
      // } ; \0
      case 125 * c:
      case 59:
      case 0:
        switch (k) {
          // \0 }
          case 0:
          case 125:
            T = 0;
          // ;
          case 59 + p:
            $ == -1 && (y = ee(y, /\f/g, "")), x > 0 && ke(y) - h && Yt(x > 32 ? An(y + ";", n, r, h - 1) : An(ee(y, " ", "") + ";", n, r, h - 2), u);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Yt(N = Mn(y, t, r, f, p, o, l, P, C = [], m = [], h), i), k === 123)
              if (p === 0)
                Qt(y, t, N, N, C, i, h, l, m);
              else
                switch (b === 99 && ve(y, 3) === 110 ? 100 : b) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qt(e, N, N, n && Yt(Mn(e, N, N, 0, 0, o, l, P, o, C = [], h), m), o, m, h, l, n ? C : m);
                    break;
                  default:
                    Qt(y, N, N, N, [""], m, 0, l, m);
                }
        }
        f = p = x = 0, c = $ = 1, P = y = "", h = s;
        break;
      // :
      case 58:
        h = 1 + ke(y), x = g;
      default:
        if (c < 1) {
          if (k == 123)
            --c;
          else if (k == 125 && c++ == 0 && sa() == 125)
            continue;
        }
        switch (y += pr(k), k * c) {
          // &
          case 38:
            $ = p > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            l[f++] = (ke(y) - 1) * $, $ = 1;
            break;
          // @
          case 64:
            Ae() === 45 && (y += Zt(Pe())), b = Ae(), p = h = ke(P = y += ua(Jt())), k++;
            break;
          // -
          case 45:
            g === 45 && ke(y) == 2 && (c = 0);
        }
    }
  return i;
}
function Mn(e, t, r, n, o, i, s, l, u, f, p) {
  for (var h = o - 1, b = o === 0 ? i : [""], x = Qr(b), g = 0, c = 0, T = 0; g < n; ++g)
    for (var $ = 0, k = Ct(e, h + 1, h = ea(c = s[g])), P = e; $ < x; ++$)
      (P = Vo(c > 0 ? b[$] + " " + k : ee(k, /&\f/g, b[$]))) && (u[T++] = P);
  return hr(e, t, r, o === 0 ? Jr : l, u, f, p);
}
function da(e, t, r) {
  return hr(e, t, r, Bo, pr(ia()), Ct(e, 2, -2), 0);
}
function An(e, t, r, n) {
  return hr(e, t, r, Zr, Ct(e, 0, n), Ct(e, n + 1, -1), n);
}
function ft(e, t) {
  for (var r = "", n = Qr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function pa(e, t, r, n) {
  switch (e.type) {
    case Qs:
      if (e.children.length) break;
    case Zs:
    case Zr:
      return e.return = e.return || e.value;
    case Bo:
      return "";
    case zo:
      return e.return = e.value + "{" + ft(e.children, n) + "}";
    case Jr:
      e.value = e.props.join(",");
  }
  return ke(r = ft(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ma(e) {
  var t = Qr(e);
  return function(r, n, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](r, n, o, i) || "";
    return s;
  };
}
function ha(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function qo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ya = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ae(), o === 38 && i === 12 && (r[n] = 1), !$t(i); )
    Pe();
  return jt(t, Se);
}, ga = function(t, r) {
  var n = -1, o = 44;
  do
    switch ($t(o)) {
      case 0:
        o === 38 && Ae() === 12 && (r[n] = 1), t[n] += ya(Se - 1, r, n);
        break;
      case 2:
        t[n] += Zt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ae() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += pr(o);
    }
  while (o = Pe());
  return t;
}, ba = function(t, r) {
  return Yo(ga(Uo(t), r));
}, jn = /* @__PURE__ */ new WeakMap(), va = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !jn.get(n)) && !o) {
      jn.set(t, !0);
      for (var i = [], s = ba(r, i), l = n.props, u = 0, f = 0; u < s.length; u++)
        for (var p = 0; p < l.length; p++, f++)
          t.props[f] = i[u] ? s[u].replace(/&\f/g, l[p]) : l[p] + " " + s[u];
    }
  }
}, Ea = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ho(e, t) {
  switch (ra(e, t)) {
    // color-adjust
    case 5103:
      return Q + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Q + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Q + e + tr + e + xe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Q + e + xe + e + e;
    // order
    case 6165:
      return Q + e + xe + "flex-" + e + e;
    // align-items
    case 5187:
      return Q + e + ee(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + xe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Q + e + xe + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Q + e + xe + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Q + e + xe + ee(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Q + e + xe + ee(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Q + "box-" + ee(e, "-grow", "") + Q + e + xe + ee(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Q + ee(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    // cursor
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Q + "$1$`$1");
    // justify-content
    case 4968:
      return ee(ee(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Q + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ke(e) - 1 - t > 6) switch (ve(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ve(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ee(e, /(.+:)(.+)-([^]+)/, "$1" + Q + "$2-$3$1" + tr + (ve(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Dr(e, "stretch") ? Ho(ee(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ve(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ve(e, ke(e) - 3 - (~Dr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ee(e, ":", ":" + Q) + e;
        // (inline-)?fl(e)x
        case 101:
          return ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Q + (ve(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Q + "$2$3$1" + xe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ve(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Q + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Q + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Q + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + xe + e + e;
  }
  return e;
}
var xa = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Zr:
      t.return = Ho(t.value, t.length);
      break;
    case zo:
      return ft([Et(t, {
        value: ee(t.value, "@", "@" + Q)
      })], o);
    case Jr:
      if (t.length) return oa(t.props, function(i) {
        switch (na(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ft([Et(t, {
              props: [ee(i, /:(read-\w+)/, ":" + tr + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return ft([Et(t, {
              props: [ee(i, /:(plac\w+)/, ":" + Q + "input-$1")]
            }), Et(t, {
              props: [ee(i, /:(plac\w+)/, ":" + tr + "$1")]
            }), Et(t, {
              props: [ee(i, /:(plac\w+)/, xe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ta = [xa], Ko = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(c) {
      var T = c.getAttribute("data-emotion");
      T.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ta, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(c) {
      for (var T = c.getAttribute("data-emotion").split(" "), $ = 1; $ < T.length; $++)
        i[T[$]] = !0;
      l.push(c);
    }
  );
  var u, f = [va, Ea];
  {
    var p, h = [pa, ha(function(c) {
      p.insert(c);
    })], b = ma(f.concat(o, h)), x = function(T) {
      return ft(fa(T), b);
    };
    u = function(T, $, k, P) {
      p = k, x(T ? T + "{" + $.styles + "}" : $.styles), P && (g.inserted[$.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new Js({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return g.sheet.hydrate(l), g;
}, qt = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function Sa() {
  if (Dn) return ne;
  Dn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function P(m) {
    if (typeof m == "object" && m !== null) {
      var N = m.$$typeof;
      switch (N) {
        case t:
          switch (m = m.type, m) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case p:
                case g:
                case x:
                case s:
                  return m;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function C(m) {
    return P(m) === f;
  }
  return ne.AsyncMode = u, ne.ConcurrentMode = f, ne.ContextConsumer = l, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = p, ne.Fragment = n, ne.Lazy = g, ne.Memo = x, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = h, ne.isAsyncMode = function(m) {
    return C(m) || P(m) === u;
  }, ne.isConcurrentMode = C, ne.isContextConsumer = function(m) {
    return P(m) === l;
  }, ne.isContextProvider = function(m) {
    return P(m) === s;
  }, ne.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, ne.isForwardRef = function(m) {
    return P(m) === p;
  }, ne.isFragment = function(m) {
    return P(m) === n;
  }, ne.isLazy = function(m) {
    return P(m) === g;
  }, ne.isMemo = function(m) {
    return P(m) === x;
  }, ne.isPortal = function(m) {
    return P(m) === r;
  }, ne.isProfiler = function(m) {
    return P(m) === i;
  }, ne.isStrictMode = function(m) {
    return P(m) === o;
  }, ne.isSuspense = function(m) {
    return P(m) === h;
  }, ne.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === f || m === i || m === o || m === h || m === b || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === x || m.$$typeof === s || m.$$typeof === l || m.$$typeof === p || m.$$typeof === T || m.$$typeof === $ || m.$$typeof === k || m.$$typeof === c);
  }, ne.typeOf = P, ne;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function Ra() {
  return Ln || (Ln = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function P(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === f || E === i || E === o || E === h || E === b || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === x || E.$$typeof === s || E.$$typeof === l || E.$$typeof === p || E.$$typeof === T || E.$$typeof === $ || E.$$typeof === k || E.$$typeof === c);
    }
    function C(E) {
      if (typeof E == "object" && E !== null) {
        var ie = E.$$typeof;
        switch (ie) {
          case t:
            var be = E.type;
            switch (be) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case h:
                return be;
              default:
                var we = be && be.$$typeof;
                switch (we) {
                  case l:
                  case p:
                  case g:
                  case x:
                  case s:
                    return we;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var m = u, N = f, y = l, v = s, S = t, R = p, M = n, H = g, U = x, A = r, J = i, I = o, L = h, G = !1;
    function fe(E) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(E) || C(E) === u;
    }
    function d(E) {
      return C(E) === f;
    }
    function _(E) {
      return C(E) === l;
    }
    function j(E) {
      return C(E) === s;
    }
    function F(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function D(E) {
      return C(E) === p;
    }
    function z(E) {
      return C(E) === n;
    }
    function W(E) {
      return C(E) === g;
    }
    function q(E) {
      return C(E) === x;
    }
    function B(E) {
      return C(E) === r;
    }
    function Y(E) {
      return C(E) === i;
    }
    function V(E) {
      return C(E) === o;
    }
    function Z(E) {
      return C(E) === h;
    }
    oe.AsyncMode = m, oe.ConcurrentMode = N, oe.ContextConsumer = y, oe.ContextProvider = v, oe.Element = S, oe.ForwardRef = R, oe.Fragment = M, oe.Lazy = H, oe.Memo = U, oe.Portal = A, oe.Profiler = J, oe.StrictMode = I, oe.Suspense = L, oe.isAsyncMode = fe, oe.isConcurrentMode = d, oe.isContextConsumer = _, oe.isContextProvider = j, oe.isElement = F, oe.isForwardRef = D, oe.isFragment = z, oe.isLazy = W, oe.isMemo = q, oe.isPortal = B, oe.isProfiler = Y, oe.isStrictMode = V, oe.isSuspense = Z, oe.isValidElementType = P, oe.typeOf = C;
  })()), oe;
}
var Fn;
function _a() {
  return Fn || (Fn = 1, process.env.NODE_ENV === "production" ? qt.exports = Sa() : qt.exports = Ra()), qt.exports;
}
var $r, Bn;
function Pa() {
  if (Bn) return $r;
  Bn = 1;
  var e = _a(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, i = {};
  i[e.ForwardRef] = n, i[e.Memo] = o;
  function s(g) {
    return e.isMemo(g) ? o : i[g.$$typeof] || t;
  }
  var l = Object.defineProperty, u = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, p = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, b = Object.prototype;
  function x(g, c, T) {
    if (typeof c != "string") {
      if (b) {
        var $ = h(c);
        $ && $ !== b && x(g, $, T);
      }
      var k = u(c);
      f && (k = k.concat(f(c)));
      for (var P = s(g), C = s(c), m = 0; m < k.length; ++m) {
        var N = k[m];
        if (!r[N] && !(T && T[N]) && !(C && C[N]) && !(P && P[N])) {
          var y = p(c, N);
          try {
            l(g, N, y);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return $r = x, $r;
}
Pa();
var Oa = !0;
function Go(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var en = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Oa === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, tn = function(t, r, n) {
  en(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ca(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var $a = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, wa = /[A-Z]|^ms/g, ka = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Xo = function(t) {
  return t.charCodeAt(1) === 45;
}, zn = function(t) {
  return t != null && typeof t != "boolean";
}, wr = /* @__PURE__ */ qo(function(e) {
  return Xo(e) ? e : e.replace(wa, "-$&").toLowerCase();
}), Vn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ka, function(n, o, i) {
          return Ne = {
            name: o,
            styles: i,
            next: Ne
          }, o;
        });
  }
  return $a[t] !== 1 && !Xo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function wt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ne = {
          name: o.name,
          styles: o.styles,
          next: Ne
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ne = {
              name: s.name,
              styles: s.styles,
              next: Ne
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Na(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Ne, f = r(e);
        return Ne = u, wt(e, t, f);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var h = t[p];
  return h !== void 0 ? h : p;
}
function Na(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += wt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? n += i + "{" + t[l] + "}" : zn(l) && (n += wr(i) + ":" + Vn(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var u = 0; u < s.length; u++)
          zn(s[u]) && (n += wr(i) + ":" + Vn(i, s[u]) + ";");
      else {
        var f = wt(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += wr(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Wn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ne;
function Dt(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ne = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += wt(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += wt(r, t, e[l]), n) {
      var u = i;
      o += u[l];
    }
  Wn.lastIndex = 0;
  for (var f = "", p; (p = Wn.exec(o)) !== null; )
    f += "-" + p[1];
  var h = Ca(o) + f;
  return {
    name: h,
    styles: o,
    next: Ne
  };
}
var Ia = function(t) {
  return t();
}, Jo = O.useInsertionEffect ? O.useInsertionEffect : !1, Zo = Jo || Ia, Un = Jo || O.useLayoutEffect, Qo = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ko({
    key: "css"
  }) : null
), Ma = Qo.Provider, rn = function(t) {
  return /* @__PURE__ */ Ni(function(r, n) {
    var o = Ii(Qo);
    return t(r, o, n);
  });
}, Lt = /* @__PURE__ */ O.createContext({}), nn = {}.hasOwnProperty, Fr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Aa = function(t, r) {
  var n = {};
  for (var o in r)
    nn.call(r, o) && (n[o] = r[o]);
  return n[Fr] = t, n;
}, ja = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return en(r, n, o), Zo(function() {
    return tn(r, n, o);
  }), null;
}, Da = /* @__PURE__ */ rn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Fr], i = [n], s = "";
  typeof e.className == "string" ? s = Go(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = Dt(i, void 0, O.useContext(Lt));
  s += t.key + "-" + l.name;
  var u = {};
  for (var f in e)
    nn.call(e, f) && f !== "css" && f !== Fr && (u[f] = e[f]);
  return u.className = s, r && (u.ref = r), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(ja, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ O.createElement(o, u));
}), La = Da, Yn = function(t, r) {
  var n = arguments;
  if (r == null || !nn.call(r, "css"))
    return O.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = La, i[1] = Aa(t, r);
  for (var s = 2; s < o; s++)
    i[s] = n[s];
  return O.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Yn || (Yn = {}));
var Fa = /* @__PURE__ */ rn(function(e, t) {
  var r = e.styles, n = Dt([r], void 0, O.useContext(Lt)), o = O.useRef();
  return Un(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), u !== null && (l = !0, u.setAttribute("data-emotion", i), s.hydrate([u])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), Un(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && tn(t, n.next, !0), s.tags.length) {
      var u = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = u, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
function yr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Dt(t);
}
function mt() {
  var e = yr.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Ba = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, za = /* @__PURE__ */ qo(
  function(e) {
    return Ba.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Va = za, Wa = function(t) {
  return t !== "theme";
}, qn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Va : Wa;
}, Hn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Ua = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return en(r, n, o), Zo(function() {
    return tn(r, n, o);
  }), null;
}, Ya = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var l = Hn(t, r, n), u = l || qn(o), f = !u("as");
  return function() {
    var p = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      h.push.apply(h, p);
    else {
      var b = p[0];
      h.push(b[0]);
      for (var x = p.length, g = 1; g < x; g++)
        h.push(p[g], b[g]);
    }
    var c = rn(function(T, $, k) {
      var P = f && T.as || o, C = "", m = [], N = T;
      if (T.theme == null) {
        N = {};
        for (var y in T)
          N[y] = T[y];
        N.theme = O.useContext(Lt);
      }
      typeof T.className == "string" ? C = Go($.registered, m, T.className) : T.className != null && (C = T.className + " ");
      var v = Dt(h.concat(m), $.registered, N);
      C += $.key + "-" + v.name, s !== void 0 && (C += " " + s);
      var S = f && l === void 0 ? qn(P) : u, R = {};
      for (var M in T)
        f && M === "as" || S(M) && (R[M] = T[M]);
      return R.className = C, k && (R.ref = k), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Ua, {
        cache: $,
        serialized: v,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ O.createElement(P, R));
    });
    return c.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", c.defaultProps = t.defaultProps, c.__emotion_real = c, c.__emotion_base = o, c.__emotion_styles = h, c.__emotion_forwardProp = l, Object.defineProperty(c, "toString", {
      value: function() {
        return "." + s;
      }
    }), c.withComponent = function(T, $) {
      var k = e(T, w({}, r, $, {
        shouldForwardProp: Hn(c, $, !0)
      }));
      return k.apply(void 0, h);
    }, c;
  };
}, qa = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Br = Ya.bind(null);
qa.forEach(function(e) {
  Br[e] = Br(e);
});
function Ha(e, t) {
  const r = Ko({
    key: "css",
    prepend: e
  });
  if (t) {
    const n = r.insert;
    r.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), n(...o));
  }
  return r;
}
const kr = /* @__PURE__ */ new Map();
function ei(e) {
  const {
    injectFirst: t,
    enableCssLayer: r,
    children: n
  } = e, o = O.useMemo(() => {
    const i = `${t}-${r}`;
    if (typeof document == "object" && kr.has(i))
      return kr.get(i);
    const s = Ha(t, r);
    return kr.set(i, s), s;
  }, [t, r]);
  return t || r ? /* @__PURE__ */ K.jsx(Ma, {
    value: o,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (ei.propTypes = {
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: a.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: a.bool
});
function Ka(e) {
  return e == null || Object.keys(e).length === 0;
}
function ti(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Ka(o) ? r : o) : t;
  return /* @__PURE__ */ K.jsx(Fa, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  defaultTheme: a.object,
  styles: a.oneOfType([a.array, a.string, a.object, a.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ri(e, t) {
  const r = Br(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Ga = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Kn = [];
function Xa(e) {
  return Kn[0] = e, Dt(Kn);
}
const Ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: ti,
  StyledEngineProvider: ei,
  ThemeContext: Lt,
  css: yr,
  default: ri,
  internal_processStyles: Ga,
  internal_serializeStyles: Xa,
  keyframes: mt
}, Symbol.toStringTag, { value: "Module" }));
function Za(e) {
  return Object.keys(e).length === 0;
}
function Qa(e = null) {
  const t = O.useContext(Lt);
  return !t || Za(t) ? e : t;
}
const ec = Xr();
function ni(e = ec) {
  return Qa(e);
}
const tc = ["sx"], rc = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : Mt;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function on(e) {
  const {
    sx: t
  } = e, r = ge(e, tc), {
    systemProps: n,
    otherProps: o
  } = rc(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const l = t(...s);
    return We(l) ? w({}, n, l) : n;
  } : i = w({}, n, t), w({}, o, {
    sx: i
  });
}
const nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At,
  extendSxProp: on,
  unstable_createStyleFunctionSx: Lo,
  unstable_defaultSxConfig: Mt
}, Symbol.toStringTag, { value: "Module" })), Gn = (e) => e, oc = () => {
  let e = Gn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Gn;
    }
  };
}, oi = oc(), ic = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Le(e, t, r = "Mui") {
  const n = ic[t];
  return n ? `${r}-${n}` : `${oi.generate(e)}-${t}`;
}
function sc(e, t) {
  return w({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const kt = {
  black: "#000",
  white: "#fff"
}, ac = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, rt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, nt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, xt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, ot = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, it = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, st = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, cc = ["mode", "contrastThreshold", "tonalOffset"], Xn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: kt.white,
    default: kt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Nr = {
  text: {
    primary: kt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: kt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Jn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Ue.lighten(e.main, o) : t === "dark" && (e.dark = Ue.darken(e.main, i)));
}
function lc(e = "light") {
  return e === "dark" ? {
    main: ot[200],
    light: ot[50],
    dark: ot[400]
  } : {
    main: ot[700],
    light: ot[400],
    dark: ot[800]
  };
}
function uc(e = "light") {
  return e === "dark" ? {
    main: rt[200],
    light: rt[50],
    dark: rt[400]
  } : {
    main: rt[500],
    light: rt[300],
    dark: rt[700]
  };
}
function fc(e = "light") {
  return e === "dark" ? {
    main: nt[500],
    light: nt[300],
    dark: nt[700]
  } : {
    main: nt[700],
    light: nt[400],
    dark: nt[800]
  };
}
function dc(e = "light") {
  return e === "dark" ? {
    main: it[400],
    light: it[300],
    dark: it[700]
  } : {
    main: it[700],
    light: it[500],
    dark: it[900]
  };
}
function pc(e = "light") {
  return e === "dark" ? {
    main: st[400],
    light: st[300],
    dark: st[700]
  } : {
    main: st[800],
    light: st[500],
    dark: st[900]
  };
}
function mc(e = "light") {
  return e === "dark" ? {
    main: xt[400],
    light: xt[300],
    dark: xt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: xt[500],
    dark: xt[900]
  };
}
function hc(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = ge(e, cc), i = e.primary || lc(t), s = e.secondary || uc(t), l = e.error || fc(t), u = e.info || dc(t), f = e.success || pc(t), p = e.warning || mc(t);
  function h(c) {
    const T = Ue.getContrastRatio(c, Nr.text.primary) >= r ? Nr.text.primary : Xn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const $ = Ue.getContrastRatio(c, T);
      $ < 3 && console.error([`MUI: The contrast ratio of ${$}:1 for ${T} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return T;
  }
  const b = ({
    color: c,
    name: T,
    mainShade: $ = 500,
    lightShade: k = 300,
    darkShade: P = 700
  }) => {
    if (c = w({}, c), !c.main && c[$] && (c.main = c[$]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${$}\` property.` : Pt(11, T ? ` (${T})` : "", $));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Pt(12, T ? ` (${T})` : "", JSON.stringify(c.main)));
    return Jn(c, "light", k, n), Jn(c, "dark", P, n), c.contrastText || (c.contrastText = h(c.main)), c;
  }, x = {
    dark: Nr,
    light: Xn
  };
  return process.env.NODE_ENV !== "production" && (x[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Me(w({
    // A collection of common colors.
    common: w({}, kt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: ac,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, x[t]), o);
}
const yc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function gc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zn = {
  textTransform: "uppercase"
}, Qn = '"Roboto", "Helvetica", "Arial", sans-serif';
function bc(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Qn,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: h
  } = r, b = ge(r, yc);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const x = o / 14, g = h || (($) => `${$ / f * x}rem`), c = ($, k, P, C, m) => w({
    fontFamily: n,
    fontWeight: $,
    fontSize: g(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P
  }, n === Qn ? {
    letterSpacing: `${gc(C / k)}em`
  } : {}, m, p), T = {
    h1: c(i, 96, 1.167, -1.5),
    h2: c(i, 60, 1.2, -0.5),
    h3: c(s, 48, 1.167, 0),
    h4: c(s, 34, 1.235, 0.25),
    h5: c(s, 24, 1.334, 0),
    h6: c(l, 20, 1.6, 0.15),
    subtitle1: c(s, 16, 1.75, 0.15),
    subtitle2: c(l, 14, 1.57, 0.1),
    body1: c(s, 16, 1.5, 0.15),
    body2: c(s, 14, 1.43, 0.15),
    button: c(l, 14, 1.75, 0.4, Zn),
    caption: c(s, 12, 1.66, 0.4),
    overline: c(s, 12, 2.66, 1, Zn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Me(w({
    htmlFontSize: f,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: u
  }, T), b, {
    clone: !1
    // No need to clone deep
  });
}
const vc = 0.2, Ec = 0.14, xc = 0.12;
function ce(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${vc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ec})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xc})`].join(",");
}
const Tc = ["none", ce(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ce(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ce(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ce(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ce(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ce(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ce(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ce(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ce(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ce(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ce(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ce(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ce(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ce(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ce(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ce(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ce(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ce(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ce(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ce(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ce(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ce(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ce(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ce(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sc = ["duration", "easing", "delay"], Rc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, _c = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function eo(e) {
  return `${Math.round(e)}ms`;
}
function Pc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Oc(e) {
  const t = w({}, Rc, e.easing), r = w({}, _c, e.duration);
  return w({
    getAutoHeightDuration: Pc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: u = 0
      } = i, f = ge(i, Sc);
      if (process.env.NODE_ENV !== "production") {
        const p = (b) => typeof b == "string", h = (b) => !isNaN(parseFloat(b));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !p(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : eo(s)} ${l} ${typeof u == "string" ? u : eo(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Cc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, $c = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function ii(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = ge(e, $c);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Pt(18));
  const l = hc(n), u = Xr(e);
  let f = Me(u, {
    mixins: sc(u.breakpoints, r),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Tc.slice(),
    typography: bc(l, i),
    transitions: Oc(o),
    zIndex: w({}, Cc)
  });
  if (f = Me(f, s), f = t.reduce((p, h) => Me(p, h), f), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (b, x) => {
      let g;
      for (g in b) {
        const c = b[g];
        if (p.indexOf(g) !== -1 && Object.keys(c).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = Le("", g);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: c
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[g] = {};
        }
      }
    };
    Object.keys(f.components).forEach((b) => {
      const x = f.components[b].styleOverrides;
      x && b.indexOf("Mui") === 0 && h(x, b);
    });
  }
  return f.unstable_sxConfig = w({}, Mt, s?.unstable_sxConfig), f.unstable_sx = function(h) {
    return At({
      sx: h,
      theme: this
    });
  }, f;
}
const si = ii(), sn = "$$material";
var Ge = {}, Ir = { exports: {} }, to;
function wc() {
  return to || (to = 1, (function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o) ({}).hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(Ir)), Ir.exports;
}
var Mr = { exports: {} }, ro;
function kc() {
  return ro || (ro = 1, (function(e) {
    function t(r, n) {
      if (r == null) return {};
      var o = {};
      for (var i in r) if ({}.hasOwnProperty.call(r, i)) {
        if (n.indexOf(i) !== -1) continue;
        o[i] = r[i];
      }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(Mr)), Mr.exports;
}
const Nc = /* @__PURE__ */ qe(Ja), Ic = /* @__PURE__ */ qe(ts), Mc = /* @__PURE__ */ qe(ss);
var Ht = { exports: {} }, se = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function Ac() {
  if (no) return se;
  no = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), x = Symbol.for("react.client.reference");
  function g(c) {
    if (typeof c == "object" && c !== null) {
      var T = c.$$typeof;
      switch (T) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case u:
            case f:
            case b:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case l:
                case h:
                case p:
                  return c;
                case i:
                  return c;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return se.ContextConsumer = i, se.ContextProvider = s, se.Element = e, se.ForwardRef = l, se.Fragment = r, se.Lazy = h, se.Memo = p, se.Portal = t, se.Profiler = o, se.StrictMode = n, se.Suspense = u, se.SuspenseList = f, se.isContextConsumer = function(c) {
    return g(c) === i;
  }, se.isContextProvider = function(c) {
    return g(c) === s;
  }, se.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, se.isForwardRef = function(c) {
    return g(c) === l;
  }, se.isFragment = function(c) {
    return g(c) === r;
  }, se.isLazy = function(c) {
    return g(c) === h;
  }, se.isMemo = function(c) {
    return g(c) === p;
  }, se.isPortal = function(c) {
    return g(c) === t;
  }, se.isProfiler = function(c) {
    return g(c) === o;
  }, se.isStrictMode = function(c) {
    return g(c) === n;
  }, se.isSuspense = function(c) {
    return g(c) === u;
  }, se.isSuspenseList = function(c) {
    return g(c) === f;
  }, se.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === u || c === f || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === p || c.$$typeof === s || c.$$typeof === i || c.$$typeof === l || c.$$typeof === x || c.getModuleId !== void 0);
  }, se.typeOf = g, se;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function jc() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var T = c.$$typeof;
        switch (T) {
          case t:
            switch (c = c.type, c) {
              case n:
              case i:
              case o:
              case f:
              case p:
              case x:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case l:
                  case u:
                  case b:
                  case h:
                    return c;
                  case s:
                    return c;
                  default:
                    return T;
                }
            }
          case r:
            return T;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    ae.ContextConsumer = s, ae.ContextProvider = l, ae.Element = t, ae.ForwardRef = u, ae.Fragment = n, ae.Lazy = b, ae.Memo = h, ae.Portal = r, ae.Profiler = i, ae.StrictMode = o, ae.Suspense = f, ae.SuspenseList = p, ae.isContextConsumer = function(c) {
      return e(c) === s;
    }, ae.isContextProvider = function(c) {
      return e(c) === l;
    }, ae.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, ae.isForwardRef = function(c) {
      return e(c) === u;
    }, ae.isFragment = function(c) {
      return e(c) === n;
    }, ae.isLazy = function(c) {
      return e(c) === b;
    }, ae.isMemo = function(c) {
      return e(c) === h;
    }, ae.isPortal = function(c) {
      return e(c) === r;
    }, ae.isProfiler = function(c) {
      return e(c) === i;
    }, ae.isStrictMode = function(c) {
      return e(c) === o;
    }, ae.isSuspense = function(c) {
      return e(c) === f;
    }, ae.isSuspenseList = function(c) {
      return e(c) === p;
    }, ae.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === i || c === o || c === f || c === p || typeof c == "object" && c !== null && (c.$$typeof === b || c.$$typeof === h || c.$$typeof === l || c.$$typeof === s || c.$$typeof === u || c.$$typeof === g || c.getModuleId !== void 0);
    }, ae.typeOf = e;
  })()), ae;
}
var io;
function Dc() {
  return io || (io = 1, process.env.NODE_ENV === "production" ? Ht.exports = /* @__PURE__ */ Ac() : Ht.exports = /* @__PURE__ */ jc()), Ht.exports;
}
var so = /* @__PURE__ */ Dc();
const Lc = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ai(e) {
  const t = `${e}`.match(Lc);
  return t && t[1] || "";
}
function ci(e, t = "") {
  return e.displayName || e.name || ai(e) || t;
}
function ao(e, t, r) {
  const n = ci(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Fc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ci(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case so.ForwardRef:
          return ao(e, e.render, "ForwardRef");
        case so.Memo:
          return ao(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fc,
  getFunctionName: ai
}, Symbol.toStringTag, { value: "Module" })), zc = /* @__PURE__ */ qe(Bc), Vc = /* @__PURE__ */ qe(Ks), Wc = /* @__PURE__ */ qe(nc);
var co;
function Uc() {
  if (co) return Ge;
  co = 1;
  var e = Io();
  Object.defineProperty(Ge, "__esModule", {
    value: !0
  }), Ge.default = y, Ge.shouldForwardProp = T, Ge.systemDefaultTheme = void 0;
  var t = e(wc()), r = e(kc()), n = x(Nc), o = Ic, i = e(Mc), s = e(zc), l = e(Vc), u = e(Wc);
  const f = ["ownerState"], p = ["variants"], h = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function b(v) {
    if (typeof WeakMap != "function") return null;
    var S = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (b = function(M) {
      return M ? R : S;
    })(v);
  }
  function x(v, S) {
    if (v && v.__esModule) return v;
    if (v === null || typeof v != "object" && typeof v != "function") return { default: v };
    var R = b(S);
    if (R && R.has(v)) return R.get(v);
    var M = { __proto__: null }, H = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var U in v) if (U !== "default" && Object.prototype.hasOwnProperty.call(v, U)) {
      var A = H ? Object.getOwnPropertyDescriptor(v, U) : null;
      A && (A.get || A.set) ? Object.defineProperty(M, U, A) : M[U] = v[U];
    }
    return M.default = v, R && R.set(v, M), M;
  }
  function g(v) {
    return Object.keys(v).length === 0;
  }
  function c(v) {
    return typeof v == "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    v.charCodeAt(0) > 96;
  }
  function T(v) {
    return v !== "ownerState" && v !== "theme" && v !== "sx" && v !== "as";
  }
  function $(v, S) {
    return S && v && typeof v == "object" && v.styles && !v.styles.startsWith("@layer") && (v.styles = `@layer ${S}{${String(v.styles)}}`), v;
  }
  const k = Ge.systemDefaultTheme = (0, l.default)(), P = (v) => v && v.charAt(0).toLowerCase() + v.slice(1);
  function C({
    defaultTheme: v,
    theme: S,
    themeId: R
  }) {
    return g(S) ? v : S[R] || S;
  }
  function m(v) {
    return v ? (S, R) => R[v] : null;
  }
  function N(v, S, R) {
    let {
      ownerState: M
    } = S, H = (0, r.default)(S, f);
    const U = typeof v == "function" ? v((0, t.default)({
      ownerState: M
    }, H)) : v;
    if (Array.isArray(U))
      return U.flatMap((A) => N(A, (0, t.default)({
        ownerState: M
      }, H), R));
    if (U && typeof U == "object" && Array.isArray(U.variants)) {
      const {
        variants: A = []
      } = U;
      let I = (0, r.default)(U, p);
      return A.forEach((L) => {
        let G = !0;
        if (typeof L.props == "function" ? G = L.props((0, t.default)({
          ownerState: M
        }, H, M)) : Object.keys(L.props).forEach((fe) => {
          M?.[fe] !== L.props[fe] && H[fe] !== L.props[fe] && (G = !1);
        }), G) {
          Array.isArray(I) || (I = [I]);
          const fe = typeof L.style == "function" ? L.style((0, t.default)({
            ownerState: M
          }, H, M)) : L.style;
          I.push(R ? $((0, n.internal_serializeStyles)(fe), R) : fe);
        }
      }), I;
    }
    return R ? $((0, n.internal_serializeStyles)(U), R) : U;
  }
  function y(v = {}) {
    const {
      themeId: S,
      defaultTheme: R = k,
      rootShouldForwardProp: M = T,
      slotShouldForwardProp: H = T
    } = v, U = (A) => (0, u.default)((0, t.default)({}, A, {
      theme: C((0, t.default)({}, A, {
        defaultTheme: R,
        themeId: S
      }))
    }));
    return U.__mui_systemSx = !0, (A, J = {}) => {
      (0, n.internal_processStyles)(A, (V) => V.filter((Z) => !(Z != null && Z.__mui_systemSx)));
      const {
        name: I,
        slot: L,
        skipVariantsResolver: G,
        skipSx: fe,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: d = m(P(L))
      } = J, _ = (0, r.default)(J, h), j = I && I.startsWith("Mui") || L ? "components" : "custom", F = G !== void 0 ? G : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        L && L !== "Root" && L !== "root" || !1
      ), D = fe || !1;
      let z;
      process.env.NODE_ENV !== "production" && I && (z = `${I}-${P(L || "Root")}`);
      let W = T;
      L === "Root" || L === "root" ? W = M : L ? W = H : c(A) && (W = void 0);
      const q = (0, n.default)(A, (0, t.default)({
        shouldForwardProp: W,
        label: z
      }, _)), B = (V) => typeof V == "function" && V.__emotion_real !== V || (0, o.isPlainObject)(V) ? (Z) => {
        const E = C({
          theme: Z.theme,
          defaultTheme: R,
          themeId: S
        });
        return N(V, (0, t.default)({}, Z, {
          theme: E
        }), E.modularCssLayers ? j : void 0);
      } : V, Y = (V, ...Z) => {
        let E = B(V);
        const ie = Z ? Z.map(B) : [];
        I && d && ie.push((Ee) => {
          const Re = C((0, t.default)({}, Ee, {
            defaultTheme: R,
            themeId: S
          }));
          if (!Re.components || !Re.components[I] || !Re.components[I].styleOverrides)
            return null;
          const ze = Re.components[I].styleOverrides, tt = {};
          return Object.entries(ze).forEach(([ht, yt]) => {
            tt[ht] = N(yt, (0, t.default)({}, Ee, {
              theme: Re
            }), Re.modularCssLayers ? "theme" : void 0);
          }), d(Ee, tt);
        }), I && !F && ie.push((Ee) => {
          var Re;
          const ze = C((0, t.default)({}, Ee, {
            defaultTheme: R,
            themeId: S
          })), tt = ze == null || (Re = ze.components) == null || (Re = Re[I]) == null ? void 0 : Re.variants;
          return N({
            variants: tt
          }, (0, t.default)({}, Ee, {
            theme: ze
          }), ze.modularCssLayers ? "theme" : void 0);
        }), D || ie.push(U);
        const be = ie.length - Z.length;
        if (Array.isArray(V) && be > 0) {
          const Ee = new Array(be).fill("");
          E = [...V, ...Ee], E.raw = [...V.raw, ...Ee];
        }
        const we = q(E, ...ie);
        if (process.env.NODE_ENV !== "production") {
          let Ee;
          I && (Ee = `${I}${(0, i.default)(L || "")}`), Ee === void 0 && (Ee = `Styled(${(0, s.default)(A)})`), we.displayName = Ee;
        }
        return A.muiName && (we.muiName = A.muiName), we;
      };
      return q.withConfig && (Y.withConfig = q.withConfig), Y;
    };
  }
  return Ge;
}
var Yc = /* @__PURE__ */ Uc();
const qc = /* @__PURE__ */ $o(Yc);
function Hc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const li = (e) => Hc(e) && e !== "classes", Te = qc({
  themeId: sn,
  defaultTheme: si,
  rootShouldForwardProp: li
}), Kc = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (a.node, a.object);
function Gc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Ot(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Ot(o, n) : n;
}
function Xc({
  props: e,
  name: t
}) {
  const r = O.useContext(Kc);
  return Gc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
process.env.NODE_ENV !== "production" && (a.node, a.object.isRequired);
function Ke(e) {
  return Xc(e);
}
function zr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Qe(...e) {
  return O.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      zr(r, t);
    });
  }, e);
}
function Jc(e) {
  return typeof e == "string";
}
function Zc(e, t, r) {
  return e === void 0 || Jc(e) ? t : w({}, t, {
    ownerState: w({}, t.ownerState, r)
  });
}
function Qc(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function ui(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function lo(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function el(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const x = he(r?.className, i, o?.className, n?.className), g = w({}, r?.style, o?.style, n?.style), c = w({}, r, o, n);
    return x.length > 0 && (c.className = x), Object.keys(g).length > 0 && (c.style = g), {
      props: c,
      internalRef: void 0
    };
  }
  const s = ui(w({}, o, n)), l = lo(n), u = lo(o), f = t(s), p = he(f?.className, r?.className, i, o?.className, n?.className), h = w({}, f?.style, r?.style, o?.style, n?.style), b = w({}, f, r, u, l);
  return p.length > 0 && (b.className = p), Object.keys(h).length > 0 && (b.style = h), {
    props: b,
    internalRef: f.ref
  };
}
function Ft(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
const tl = ["className", "component"];
function rl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = ri("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(At);
  return /* @__PURE__ */ O.forwardRef(function(u, f) {
    const p = ni(r), h = on(u), {
      className: b,
      component: x = "div"
    } = h, g = ge(h, tl);
    return /* @__PURE__ */ K.jsx(i, w({
      as: x,
      ref: f,
      className: he(b, o ? o(n) : n),
      theme: t && p[t] || p
    }, g));
  });
}
function Fe(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Le(e, o, r);
  }), n;
}
const Vr = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function nl(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function fi(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const u = i.type;
  return typeof u == "function" && !nl(u) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const gr = Ft(a.element, fi);
gr.isRequired = Ft(a.element.isRequired, fi);
function ol(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function il(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !ol(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const sl = Ft(a.elementType, il), al = "exact-prop: ​";
function di(e) {
  return process.env.NODE_ENV === "production" ? e : w({}, e, {
    [al]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function pi(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const cl = a.oneOfType([a.func, a.object]);
function uo(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Ye(e) {
  return e && e.ownerDocument || document;
}
function an(e) {
  return Ye(e).defaultView || window;
}
let fo = 0;
function ll(e) {
  const [t, r] = O.useState(e), n = e || t;
  return O.useEffect(() => {
    t == null && (fo += 1, r(`mui-${fo}`));
  }, [t]), n;
}
const po = O.useId;
function ul(e) {
  if (po !== void 0) {
    const t = po();
    return e ?? t;
  }
  return ll(e);
}
function lt(e) {
  const t = O.useRef(e);
  return Vr(() => {
    t.current = e;
  }), O.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
const mo = {};
function fl(e, t) {
  const r = O.useRef(mo);
  return r.current === mo && (r.current = e(t)), r;
}
const dl = [];
function pl(e) {
  O.useEffect(e, dl);
}
class br {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new br();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function ml() {
  const e = fl(br.create).current;
  return pl(e.disposeEffect), e;
}
let vr = !0, Wr = !1;
const hl = new br(), yl = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function gl(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && yl[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function bl(e) {
  e.metaKey || e.altKey || e.ctrlKey || (vr = !0);
}
function Ar() {
  vr = !1;
}
function vl() {
  this.visibilityState === "hidden" && Wr && (vr = !0);
}
function El(e) {
  e.addEventListener("keydown", bl, !0), e.addEventListener("mousedown", Ar, !0), e.addEventListener("pointerdown", Ar, !0), e.addEventListener("touchstart", Ar, !0), e.addEventListener("visibilitychange", vl, !0);
}
function xl(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return vr || gl(t);
}
function Tl() {
  const e = O.useCallback((o) => {
    o != null && El(o.ownerDocument);
  }, []), t = O.useRef(!1);
  function r() {
    return t.current ? (Wr = !0, hl.start(100, () => {
      Wr = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return xl(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function Sl(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Rl = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ho(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = ge(e, Rl), l = i ? {} : Qc(n, o), {
    props: u,
    internalRef: f
  } = el(w({}, s, {
    externalSlotProps: l
  })), p = Qe(f, l?.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Zc(r, w({}, u, {
    ref: p
  }), o);
}
function cn(e) {
  if (parseInt(O.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return e?.ref || null;
}
function _l() {
  const e = ni(si);
  return process.env.NODE_ENV !== "production" && O.useDebugValue(e), e[sn] || e;
}
function Ur(e, t) {
  return Ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ur(e, t);
}
function mi(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ur(e, t);
}
const yo = {
  disabled: !1
};
var Pl = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
  enter: a.number,
  exit: a.number,
  appear: a.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && a.oneOfType([a.string, a.shape({
  enter: a.string,
  exit: a.string,
  active: a.string
}), a.shape({
  enter: a.string,
  enterDone: a.string,
  enterActive: a.string,
  exit: a.string,
  exitDone: a.string,
  exitActive: a.string
})]);
const rr = Ie.createContext(null);
var Ol = function(t) {
  return t.scrollTop;
}, Tt = "unmounted", Xe = "exited", Je = "entering", ct = "entered", Yr = "exiting", Be = /* @__PURE__ */ (function(e) {
  mi(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, l = s && !s.isMounting ? n.enter : n.appear, u;
    return i.appearStatus = null, n.in ? l ? (u = Xe, i.appearStatus = Je) : u = ct : n.unmountOnExit || n.mountOnEnter ? u = Tt : u = Xe, i.state = {
      status: u
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Tt ? {
      status: Xe
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Je && s !== ct && (i = Je) : (s === Je || s === ct) && (i = Yr);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, s, l;
    return i = s = l = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, l = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: l
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Je) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : zt.findDOMNode(this);
          s && Ol(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Xe && this.setState({
      status: Tt
    });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : o, u = this.props.nodeRef ? [l] : [zt.findDOMNode(this), l], f = u[0], p = u[1], h = this.getTimeouts(), b = l ? h.appear : h.enter;
    if (!o && !s || yo.disabled) {
      this.safeSetState({
        status: ct
      }, function() {
        i.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, p), this.safeSetState({
      status: Je
    }, function() {
      i.props.onEntering(f, p), i.onTransitionEnd(b, function() {
        i.safeSetState({
          status: ct
        }, function() {
          i.props.onEntered(f, p);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : zt.findDOMNode(this);
    if (!i || yo.disabled) {
      this.safeSetState({
        status: Xe
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Yr
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Xe
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, i.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : zt.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], f = u[0], p = u[1];
      this.props.addEndListener(f, p);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Tt)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = ge(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ie.createElement(rr.Provider, {
        value: null
      }, typeof s == "function" ? s(o, l) : Ie.cloneElement(Ie.Children.only(s), l))
    );
  }, t;
})(Ie.Component);
Be.contextType = rr;
Be.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: a.shape({
    current: typeof Element > "u" ? a.any : function(e, t, r, n, o, i) {
      var s = e[t];
      return a.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: a.oneOfType([a.func.isRequired, a.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: a.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: a.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: a.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: a.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: a.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: a.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = Pl;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: a.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: a.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: a.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: a.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: a.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: a.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: a.func
} : {};
function at() {
}
Be.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: at,
  onEntering: at,
  onEntered: at,
  onExit: at,
  onExiting: at,
  onExited: at
};
Be.UNMOUNTED = Tt;
Be.EXITED = Xe;
Be.ENTERING = Je;
Be.ENTERED = ct;
Be.EXITING = Yr;
function Cl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ln(e, t) {
  var r = function(i) {
    return t && Gt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Mi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function $l(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var u in t) {
    if (n[u])
      for (s = 0; s < n[u].length; s++) {
        var f = n[u][s];
        l[n[u][s]] = r(f);
      }
    l[u] = r(u);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = r(o[s]);
  return l;
}
function Ze(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function wl(e, t) {
  return ln(e.children, function(r) {
    return Xt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ze(r, "appear", e),
      enter: Ze(r, "enter", e),
      exit: Ze(r, "exit", e)
    });
  });
}
function kl(e, t, r) {
  var n = ln(e.children), o = $l(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Gt(s)) {
      var l = i in t, u = i in n, f = t[i], p = Gt(f) && !f.props.in;
      u && (!l || p) ? o[i] = Xt(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Ze(s, "exit", e),
        enter: Ze(s, "enter", e)
      }) : !u && l && !p ? o[i] = Xt(s, {
        in: !1
      }) : u && l && Gt(f) && (o[i] = Xt(s, {
        onExited: r.bind(null, s),
        in: f.props.in,
        exit: Ze(s, "exit", e),
        enter: Ze(s, "enter", e)
      }));
    }
  }), o;
}
var Nl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Il = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, un = /* @__PURE__ */ (function(e) {
  mi(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Cl(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, l = i.handleExited, u = i.firstRender;
    return {
      children: u ? wl(o, l) : kl(o, s, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = ln(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var u = w({}, l.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = ge(o, ["component", "childFactory"]), u = this.state.contextValue, f = Nl(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ Ie.createElement(rr.Provider, {
      value: u
    }, f) : /* @__PURE__ */ Ie.createElement(rr.Provider, {
      value: u
    }, /* @__PURE__ */ Ie.createElement(i, l, f));
  }, t;
})(Ie.Component);
un.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: a.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: a.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: a.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: a.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: a.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: a.func
} : {};
un.defaultProps = Il;
function hi(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: u,
    timeout: f
  } = e, [p, h] = O.useState(!1), b = he(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, g = he(r.child, p && r.childLeaving, n && r.childPulsate);
  return !l && !p && h(!0), O.useEffect(() => {
    if (!l && u != null) {
      const c = setTimeout(u, f);
      return () => {
        clearTimeout(c);
      };
    }
  }, [u, l, f]), /* @__PURE__ */ K.jsx("span", {
    className: b,
    style: x,
    children: /* @__PURE__ */ K.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (hi.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object.isRequired,
  className: a.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: a.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: a.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: a.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: a.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: a.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: a.number,
  /**
   * exit delay
   */
  timeout: a.number.isRequired
});
const Oe = Fe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ml = ["center", "classes", "className"];
let Er = (e) => e, go, bo, vo, Eo;
const qr = 550, Al = 80, jl = mt(go || (go = Er`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Dl = mt(bo || (bo = Er`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ll = mt(vo || (vo = Er`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Fl = Te("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Bl = Te(hi, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Eo || (Eo = Er`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Oe.rippleVisible, jl, qr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Oe.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Oe.child, Oe.childLeaving, Dl, qr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Oe.childPulsate, Ll, ({
  theme: e
}) => e.transitions.easing.easeInOut), yi = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = Ke({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, l = ge(n, Ml), [u, f] = O.useState([]), p = O.useRef(0), h = O.useRef(null);
  O.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [u]);
  const b = O.useRef(!1), x = ml(), g = O.useRef(null), c = O.useRef(null), T = O.useCallback((C) => {
    const {
      pulsate: m,
      rippleX: N,
      rippleY: y,
      rippleSize: v,
      cb: S
    } = C;
    f((R) => [...R, /* @__PURE__ */ K.jsx(Bl, {
      classes: {
        ripple: he(i.ripple, Oe.ripple),
        rippleVisible: he(i.rippleVisible, Oe.rippleVisible),
        ripplePulsate: he(i.ripplePulsate, Oe.ripplePulsate),
        child: he(i.child, Oe.child),
        childLeaving: he(i.childLeaving, Oe.childLeaving),
        childPulsate: he(i.childPulsate, Oe.childPulsate)
      },
      timeout: qr,
      pulsate: m,
      rippleX: N,
      rippleY: y,
      rippleSize: v
    }, p.current)]), p.current += 1, h.current = S;
  }, [i]), $ = O.useCallback((C = {}, m = {}, N = () => {
  }) => {
    const {
      pulsate: y = !1,
      center: v = o || m.pulsate,
      fakeElement: S = !1
      // For test purposes
    } = m;
    if (C?.type === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    C?.type === "touchstart" && (b.current = !0);
    const R = S ? null : c.current, M = R ? R.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let H, U, A;
    if (v || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      H = Math.round(M.width / 2), U = Math.round(M.height / 2);
    else {
      const {
        clientX: J,
        clientY: I
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      H = Math.round(J - M.left), U = Math.round(I - M.top);
    }
    if (v)
      A = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3), A % 2 === 0 && (A += 1);
    else {
      const J = Math.max(Math.abs((R ? R.clientWidth : 0) - H), H) * 2 + 2, I = Math.max(Math.abs((R ? R.clientHeight : 0) - U), U) * 2 + 2;
      A = Math.sqrt(J ** 2 + I ** 2);
    }
    C != null && C.touches ? g.current === null && (g.current = () => {
      T({
        pulsate: y,
        rippleX: H,
        rippleY: U,
        rippleSize: A,
        cb: N
      });
    }, x.start(Al, () => {
      g.current && (g.current(), g.current = null);
    })) : T({
      pulsate: y,
      rippleX: H,
      rippleY: U,
      rippleSize: A,
      cb: N
    });
  }, [o, T, x]), k = O.useCallback(() => {
    $({}, {
      pulsate: !0
    });
  }, [$]), P = O.useCallback((C, m) => {
    if (x.clear(), C?.type === "touchend" && g.current) {
      g.current(), g.current = null, x.start(0, () => {
        P(C, m);
      });
      return;
    }
    g.current = null, f((N) => N.length > 0 ? N.slice(1) : N), h.current = m;
  }, [x]);
  return O.useImperativeHandle(r, () => ({
    pulsate: k,
    start: $,
    stop: P
  }), [k, $, P]), /* @__PURE__ */ K.jsx(Fl, w({
    className: he(Oe.root, i.root, s),
    ref: c
  }, l, {
    children: /* @__PURE__ */ K.jsx(un, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: a.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string
});
function zl(e) {
  return Le("MuiButtonBase", e);
}
const Vl = Fe("MuiButtonBase", ["root", "disabled", "focusVisible"]), Wl = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Ul = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = et({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, zl, o);
  return r && n && (s.root += ` ${n}`), s;
}, Yl = Te("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Vl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), gi = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = Ke({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: u = "button",
    disabled: f = !1,
    disableRipple: p = !1,
    disableTouchRipple: h = !1,
    focusRipple: b = !1,
    LinkComponent: x = "a",
    onBlur: g,
    onClick: c,
    onContextMenu: T,
    onDragLeave: $,
    onFocus: k,
    onFocusVisible: P,
    onKeyDown: C,
    onKeyUp: m,
    onMouseDown: N,
    onMouseLeave: y,
    onMouseUp: v,
    onTouchEnd: S,
    onTouchMove: R,
    onTouchStart: M,
    tabIndex: H = 0,
    TouchRippleProps: U,
    touchRippleRef: A,
    type: J
  } = n, I = ge(n, Wl), L = O.useRef(null), G = O.useRef(null), fe = Qe(G, A), {
    isFocusVisibleRef: d,
    onFocus: _,
    onBlur: j,
    ref: F
  } = Tl(), [D, z] = O.useState(!1);
  f && D && z(!1), O.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), L.current.focus();
    }
  }), []);
  const [W, q] = O.useState(!1);
  O.useEffect(() => {
    q(!0);
  }, []);
  const B = W && !p && !f;
  O.useEffect(() => {
    D && b && !p && W && G.current.pulsate();
  }, [p, b, D, W]);
  function Y(X, mn, ki = h) {
    return lt((hn) => (mn && mn(hn), !ki && G.current && G.current[X](hn), !0));
  }
  const V = Y("start", N), Z = Y("stop", T), E = Y("stop", $), ie = Y("stop", v), be = Y("stop", (X) => {
    D && X.preventDefault(), y && y(X);
  }), we = Y("start", M), Ee = Y("stop", S), Re = Y("stop", R), ze = Y("stop", (X) => {
    j(X), d.current === !1 && z(!1), g && g(X);
  }, !1), tt = lt((X) => {
    L.current || (L.current = X.currentTarget), _(X), d.current === !0 && (z(!0), P && P(X)), k && k(X);
  }), ht = () => {
    const X = L.current;
    return u && u !== "button" && !(X.tagName === "A" && X.href);
  }, yt = O.useRef(!1), Oi = lt((X) => {
    b && !yt.current && D && G.current && X.key === " " && (yt.current = !0, G.current.stop(X, () => {
      G.current.start(X);
    })), X.target === X.currentTarget && ht() && X.key === " " && X.preventDefault(), C && C(X), X.target === X.currentTarget && ht() && X.key === "Enter" && !f && (X.preventDefault(), c && c(X));
  }), Ci = lt((X) => {
    b && X.key === " " && G.current && D && !X.defaultPrevented && (yt.current = !1, G.current.stop(X, () => {
      G.current.pulsate(X);
    })), m && m(X), c && X.target === X.currentTarget && ht() && X.key === " " && !X.defaultPrevented && c(X);
  });
  let Bt = u;
  Bt === "button" && (I.href || I.to) && (Bt = x);
  const gt = {};
  Bt === "button" ? (gt.type = J === void 0 ? "button" : J, gt.disabled = f) : (!I.href && !I.to && (gt.role = "button"), f && (gt["aria-disabled"] = f));
  const $i = Qe(r, F, L);
  process.env.NODE_ENV !== "production" && O.useEffect(() => {
    B && !G.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [B]);
  const pn = w({}, n, {
    centerRipple: i,
    component: u,
    disabled: f,
    disableRipple: p,
    disableTouchRipple: h,
    focusRipple: b,
    tabIndex: H,
    focusVisible: D
  }), wi = Ul(pn);
  return /* @__PURE__ */ K.jsxs(Yl, w({
    as: Bt,
    className: he(wi.root, l),
    ownerState: pn,
    onBlur: ze,
    onClick: c,
    onContextMenu: Z,
    onFocus: tt,
    onKeyDown: Oi,
    onKeyUp: Ci,
    onMouseDown: V,
    onMouseLeave: be,
    onMouseUp: ie,
    onDragLeave: E,
    onTouchEnd: Ee,
    onTouchMove: Re,
    onTouchStart: we,
    ref: $i,
    tabIndex: f ? -1 : H,
    type: J
  }, gt, I, {
    children: [s, B ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ K.jsx(yi, w({
        ref: fe,
        center: i
      }, U))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: cl,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: a.bool,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: sl,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: a.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  /**
   * @ignore
   */
  href: a.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: a.elementType,
  /**
   * @ignore
   */
  onBlur: a.func,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * @ignore
   */
  onContextMenu: a.func,
  /**
   * @ignore
   */
  onDragLeave: a.func,
  /**
   * @ignore
   */
  onFocus: a.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * @ignore
   */
  onMouseDown: a.func,
  /**
   * @ignore
   */
  onMouseLeave: a.func,
  /**
   * @ignore
   */
  onMouseUp: a.func,
  /**
   * @ignore
   */
  onTouchEnd: a.func,
  /**
   * @ignore
   */
  onTouchMove: a.func,
  /**
   * @ignore
   */
  onTouchStart: a.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @default 0
   */
  tabIndex: a.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: a.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: a.oneOfType([a.func, a.shape({
    current: a.shape({
      pulsate: a.func.isRequired,
      start: a.func.isRequired,
      stop: a.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string])
});
function ql(e) {
  return Le("MuiTypography", e);
}
Fe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Hl = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Kl = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${le(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return et(l, ql, s);
}, Gl = Te("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${le(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), xo = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Xl = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Jl = (e) => Xl[e] || e, bi = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = Ke({
    props: t,
    name: "MuiTypography"
  }), o = Jl(n.color), i = on(w({}, n, {
    color: o
  })), {
    align: s = "inherit",
    className: l,
    component: u,
    gutterBottom: f = !1,
    noWrap: p = !1,
    paragraph: h = !1,
    variant: b = "body1",
    variantMapping: x = xo
  } = i, g = ge(i, Hl), c = w({}, i, {
    align: s,
    color: o,
    className: l,
    component: u,
    gutterBottom: f,
    noWrap: p,
    paragraph: h,
    variant: b,
    variantMapping: x
  }), T = u || (h ? "p" : x[b] || xo[b]) || "span", $ = Kl(c);
  return /* @__PURE__ */ K.jsx(Gl, w({
    as: T,
    ref: r,
    ownerState: c,
    className: he($.root, l)
  }, g));
});
process.env.NODE_ENV !== "production" && (bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: a.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: a.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: a.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: a.oneOfType([a.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), a.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: a.object
});
function Zl(e) {
  return typeof e == "function" ? e() : e;
}
const nr = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = O.useState(null), u = Qe(/* @__PURE__ */ O.isValidElement(n) ? cn(n) : null, r);
  if (Vr(() => {
    i || l(Zl(o) || document.body);
  }, [o, i]), Vr(() => {
    if (s && !i)
      return zr(r, s), () => {
        zr(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ O.isValidElement(n)) {
      const f = {
        ref: u
      };
      return /* @__PURE__ */ O.cloneElement(n, f);
    }
    return /* @__PURE__ */ K.jsx(O.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ K.jsx(O.Fragment, {
    children: s && /* @__PURE__ */ Di.createPortal(n, s)
  });
});
process.env.NODE_ENV !== "production" && (nr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: a.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([pi, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (nr.propTypes = di(nr.propTypes));
function Ql(e) {
  return Le("MuiButton", e);
}
const Kt = Fe("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), fn = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && (fn.displayName = "ButtonGroupContext");
const vi = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (vi.displayName = "ButtonGroupButtonContext");
const eu = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], tu = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, `${i}${le(t)}`, `size${le(o)}`, `${i}Size${le(o)}`, `color${le(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${le(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${le(o)}`]
  }, u = et(l, Ql, s);
  return w({}, s, u);
}, Ei = (e) => w({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), ru = Te(gi, {
  shouldForwardProp: (e) => li(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${le(r.color)}`], t[`size${le(r.size)}`], t[`${r.variant}Size${le(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return w({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": w({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ue.alpha(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ue.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ue.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": w({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Kt.focusVisible}`]: w({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Kt.disabled}`]: w({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ue.alpha(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (r = (n = e.palette).getContrastText) == null ? void 0 : r.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Kt.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Kt.disabled}`]: {
    boxShadow: "none"
  }
}), nu = Te("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${le(r.size)}`]];
  }
})(({
  ownerState: e
}) => w({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Ei(e))), ou = Te("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${le(r.size)}`]];
  }
})(({
  ownerState: e
}) => w({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Ei(e))), xi = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = O.useContext(fn), o = O.useContext(vi), i = Ot(n, t), s = Ke({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: u = "primary",
    component: f = "button",
    className: p,
    disabled: h = !1,
    disableElevation: b = !1,
    disableFocusRipple: x = !1,
    endIcon: g,
    focusVisibleClassName: c,
    fullWidth: T = !1,
    size: $ = "medium",
    startIcon: k,
    type: P,
    variant: C = "text"
  } = s, m = ge(s, eu), N = w({}, s, {
    color: u,
    component: f,
    disabled: h,
    disableElevation: b,
    disableFocusRipple: x,
    fullWidth: T,
    size: $,
    type: P,
    variant: C
  }), y = tu(N), v = k && /* @__PURE__ */ K.jsx(nu, {
    className: y.startIcon,
    ownerState: N,
    children: k
  }), S = g && /* @__PURE__ */ K.jsx(ou, {
    className: y.endIcon,
    ownerState: N,
    children: g
  }), R = o || "";
  return /* @__PURE__ */ K.jsxs(ru, w({
    ownerState: N,
    className: he(n.className, y.root, p, R),
    component: f,
    disabled: h,
    focusRipple: !x,
    focusVisibleClassName: he(y.focusVisible, c),
    ref: r,
    type: P
  }, m, {
    classes: y,
    children: [v, l, S]
  }));
});
process.env.NODE_ENV !== "production" && (xi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: a.oneOfType([a.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: a.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * Element placed after the children.
   */
  endIcon: a.node,
  /**
   * @ignore
   */
  focusVisibleClassName: a.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: a.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: a.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium", "large"]), a.string]),
  /**
   * Element placed before the children.
   */
  startIcon: a.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: a.oneOfType([a.oneOf(["contained", "outlined", "text"]), a.string])
});
function iu(e) {
  return Le("MuiCircularProgress", e);
}
Fe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const su = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let xr = (e) => e, To, So, Ro, _o;
const Ve = 44, au = mt(To || (To = xr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), cu = mt(So || (So = xr`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), lu = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${le(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${le(r)}`, o && "circleDisableShrink"]
  };
  return et(i, iu, t);
}, uu = Te("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${le(r.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => w({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: t.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (t.vars || t).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && yr(Ro || (Ro = xr`
      animation: ${0} 1.4s linear infinite;
    `), au)), fu = Te("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), du = Te("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${le(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: t
}) => w({
  stroke: "currentColor"
}, e.variant === "determinate" && {
  transition: t.transitions.create("stroke-dashoffset")
}, e.variant === "indeterminate" && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
  // Add the unit to fix a Edge 16 and below bug.
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && !e.disableShrink && yr(_o || (_o = xr`
      animation: ${0} 1.4s ease-in-out infinite;
    `), cu)), dn = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = Ke({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: l = 40,
    style: u,
    thickness: f = 3.6,
    value: p = 0,
    variant: h = "indeterminate"
  } = n, b = ge(n, su), x = w({}, n, {
    color: i,
    disableShrink: s,
    size: l,
    thickness: f,
    value: p,
    variant: h
  }), g = lu(x), c = {}, T = {}, $ = {};
  if (h === "determinate") {
    const k = 2 * Math.PI * ((Ve - f) / 2);
    c.strokeDasharray = k.toFixed(3), $["aria-valuenow"] = Math.round(p), c.strokeDashoffset = `${((100 - p) / 100 * k).toFixed(3)}px`, T.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ K.jsx(uu, w({
    className: he(g.root, o),
    style: w({
      width: l,
      height: l
    }, T, u),
    ownerState: x,
    ref: r,
    role: "progressbar"
  }, $, b, {
    children: /* @__PURE__ */ K.jsx(fu, {
      className: g.svg,
      ownerState: x,
      viewBox: `${Ve / 2} ${Ve / 2} ${Ve} ${Ve}`,
      children: /* @__PURE__ */ K.jsx(du, {
        className: g.circle,
        style: c,
        ownerState: x,
        cx: Ve,
        cy: Ve,
        r: (Ve - f) / 2,
        fill: "none",
        strokeWidth: f
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (dn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: a.oneOfType([a.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Ft(a.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: a.oneOfType([a.number, a.string]),
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: a.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: a.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: a.oneOf(["determinate", "indeterminate"])
});
function pu(e) {
  return Le("MuiLoadingButton", e);
}
const je = Fe("MuiLoadingButton", ["root", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]), mu = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"], hu = (e) => {
  const {
    loading: t,
    loadingPosition: r,
    classes: n
  } = e, o = {
    root: ["root", t && "loading"],
    startIcon: [t && `startIconLoading${le(r)}`],
    endIcon: [t && `endIconLoading${le(r)}`],
    loadingIndicator: ["loadingIndicator", t && `loadingIndicator${le(r)}`]
  }, i = et(o, pu, n);
  return w({}, n, i);
}, yu = (e) => e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as" && e !== "classes", gu = Te(xi, {
  shouldForwardProp: (e) => yu(e) || e === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, t.startIconLoadingStart && {
    [`& .${je.startIconLoadingStart}`]: t.startIconLoadingStart
  }, t.endIconLoadingEnd && {
    [`& .${je.endIconLoadingEnd}`]: t.endIconLoadingEnd
  }]
})(({
  ownerState: e,
  theme: t
}) => w({
  [`& .${je.startIconLoadingStart}, & .${je.endIconLoadingEnd}`]: {
    transition: t.transitions.create(["opacity"], {
      duration: t.transitions.duration.short
    }),
    opacity: 0
  }
}, e.loadingPosition === "center" && {
  transition: t.transitions.create(["background-color", "box-shadow", "border-color"], {
    duration: t.transitions.duration.short
  }),
  [`&.${je.loading}`]: {
    color: "transparent"
  }
}, e.loadingPosition === "start" && e.fullWidth && {
  [`& .${je.startIconLoadingStart}, & .${je.endIconLoadingEnd}`]: {
    transition: t.transitions.create(["opacity"], {
      duration: t.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, e.loadingPosition === "end" && e.fullWidth && {
  [`& .${je.startIconLoadingStart}, & .${je.endIconLoadingEnd}`]: {
    transition: t.transitions.create(["opacity"], {
      duration: t.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
})), bu = Te("span", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.loadingIndicator, t[`loadingIndicator${le(r.loadingPosition)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  position: "absolute",
  visibility: "visible",
  display: "flex"
}, t.loadingPosition === "start" && (t.variant === "outlined" || t.variant === "contained") && {
  left: t.size === "small" ? 10 : 14
}, t.loadingPosition === "start" && t.variant === "text" && {
  left: 6
}, t.loadingPosition === "center" && {
  left: "50%",
  transform: "translate(-50%)",
  color: (e.vars || e).palette.action.disabled
}, t.loadingPosition === "end" && (t.variant === "outlined" || t.variant === "contained") && {
  right: t.size === "small" ? 10 : 14
}, t.loadingPosition === "end" && t.variant === "text" && {
  right: 6
}, t.loadingPosition === "start" && t.fullWidth && {
  position: "relative",
  left: -10
}, t.loadingPosition === "end" && t.fullWidth && {
  position: "relative",
  right: -10
})), Ti = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = O.useContext(fn), o = Ot(n, t), i = Ke({
    props: o,
    name: "MuiLoadingButton"
  }), {
    children: s,
    disabled: l = !1,
    id: u,
    loading: f = !1,
    loadingIndicator: p,
    loadingPosition: h = "center",
    variant: b = "text"
  } = i, x = ge(i, mu), g = ul(u), c = p ?? /* @__PURE__ */ K.jsx(dn, {
    "aria-labelledby": g,
    color: "inherit",
    size: 16
  }), T = w({}, i, {
    disabled: l,
    loading: f,
    loadingIndicator: c,
    loadingPosition: h,
    variant: b
  }), $ = hu(T), k = f ? /* @__PURE__ */ K.jsx(bu, {
    className: $.loadingIndicator,
    ownerState: T,
    children: c
  }) : null;
  return /* @__PURE__ */ K.jsxs(gu, w({
    disabled: l || f,
    id: g,
    ref: r
  }, x, {
    variant: b,
    classes: $,
    ownerState: T,
    children: [T.loadingPosition === "end" ? s : k, T.loadingPosition === "end" ? k : s]
  }));
});
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * @ignore
   */
  id: a.string,
  /**
   * If `true`, the loading indicator is shown and the button becomes disabled.
   * @default false
   */
  loading: a.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: a.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: Ft(a.oneOf(["start", "end", "center"]), (e) => e.loadingPosition === "start" && !e.startIcon ? new Error('MUI: The loadingPosition="start" should be used in combination with startIcon.') : e.loadingPosition === "end" && !e.endIcon ? new Error('MUI: The loadingPosition="end" should be used in combination with endIcon.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: a.oneOfType([a.oneOf(["contained", "outlined", "text"]), a.string])
});
const vu = (e) => e.scrollTop;
function Po(e, t) {
  var r, n;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (r = s.transitionDuration) != null ? r : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (n = s.transitionTimingFunction) != null ? n : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
const Eu = "_boton_g3916_49", xu = {
  boton: Eu
}, Si = () => {
  const [e, t] = Ai(!1);
  return ji(() => {
    t(!0);
  }, []), { isReady: e };
}, Qu = ({
  label: e,
  color: t,
  onClick: r,
  disabled: n,
  htmlType: o,
  icon: i,
  size: s,
  style: l,
  loading: u,
  ...f
}) => {
  const { isReady: p } = Si(), h = () => /* @__PURE__ */ K.jsx(
    Ti,
    {
      ...f,
      variant: "contained",
      size: s || "small",
      type: o,
      onClick: r,
      className: `${xu.boton}`,
      color: t,
      disabled: n,
      style: l,
      endIcon: i,
      loading: u,
      loadingPosition: i || u ? "end" : void 0,
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "17px",
        textTransform: "none",
        fontSize: "14px",
        padding: u ? "0px 0px 0px 20px" : "0px 20px 0px 20px",
        "& .MuiLoadingButton-loadingIndicator": {
          position: "relative",
          margin: 0,
          padding: 0
        }
      },
      children: e
    }
  );
  return p && (() => {
    switch (t) {
      case "success":
      case "error":
      case "warning":
        return /* @__PURE__ */ K.jsx(h, {});
      case "primary":
      default:
        return /* @__PURE__ */ K.jsx(h, {});
    }
  })();
}, ef = ({ title: e, subTitle: t }) => {
  const { isReady: r } = Si();
  return /* @__PURE__ */ K.jsx("div", { className: "container-title ", children: /* @__PURE__ */ K.jsx("div", { className: "title", children: /* @__PURE__ */ K.jsx(
    "span",
    {
      style: { color: r ? "rgba(0, 0, 0, 0.88)" : "transparent" },
      children: t ? `${e?.trim()}:` : e?.trim()
    }
  ) }) });
}, Tu = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Su = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ri = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = _l(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    easing: u,
    in: f,
    onEnter: p,
    onEntered: h,
    onEntering: b,
    onExit: x,
    onExited: g,
    onExiting: c,
    style: T,
    timeout: $ = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: k = Be
  } = t, P = ge(t, Tu), C = O.useRef(null), m = Qe(C, cn(l), r), N = (A) => (J) => {
    if (A) {
      const I = C.current;
      J === void 0 ? A(I) : A(I, J);
    }
  }, y = N(b), v = N((A, J) => {
    vu(A);
    const I = Po({
      style: T,
      timeout: $,
      easing: u
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = n.transitions.create("opacity", I), A.style.transition = n.transitions.create("opacity", I), p && p(A, J);
  }), S = N(h), R = N(c), M = N((A) => {
    const J = Po({
      style: T,
      timeout: $,
      easing: u
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = n.transitions.create("opacity", J), A.style.transition = n.transitions.create("opacity", J), x && x(A);
  }), H = N(g), U = (A) => {
    i && i(C.current, A);
  };
  return /* @__PURE__ */ K.jsx(k, w({
    appear: s,
    in: f,
    nodeRef: C,
    onEnter: v,
    onEntered: S,
    onEntering: y,
    onExit: M,
    onExited: H,
    onExiting: R,
    addEndListener: U,
    timeout: $
  }, P, {
    children: (A, J) => /* @__PURE__ */ O.cloneElement(l, w({
      style: w({
        opacity: 0,
        visibility: A === "exited" && !f ? "hidden" : void 0
      }, Su[A], T, l.props.style),
      ref: m
    }, J))
  }));
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: gr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
function Ru(e) {
  return Le("MuiBackdrop", e);
}
Fe("MuiBackdrop", ["root", "invisible"]);
const _u = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Pu = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return et({
    root: ["root", r && "invisible"]
  }, Ru, t);
}, Ou = Te("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => w({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), _i = /* @__PURE__ */ O.forwardRef(function(t, r) {
  var n, o, i;
  const s = Ke({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: u,
    component: f = "div",
    components: p = {},
    componentsProps: h = {},
    invisible: b = !1,
    open: x,
    slotProps: g = {},
    slots: c = {},
    TransitionComponent: T = Ri,
    transitionDuration: $
  } = s, k = ge(s, _u), P = w({}, s, {
    component: f,
    invisible: b
  }), C = Pu(P), m = (n = g.root) != null ? n : h.root;
  return /* @__PURE__ */ K.jsx(T, w({
    in: x,
    timeout: $
  }, k, {
    children: /* @__PURE__ */ K.jsx(Ou, w({
      "aria-hidden": !0
    }, m, {
      as: (o = (i = c.root) != null ? i : p.Root) != null ? o : f,
      className: he(C.root, u, m?.className),
      ownerState: w({}, P, m?.ownerState),
      classes: C,
      ref: r,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (_i.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: a.shape({
    root: a.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: a.bool,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: a.shape({
    root: a.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: a.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
const Cu = Fe("MuiBox", ["root"]), $u = ii(), Rt = rl({
  themeId: sn,
  defaultTheme: $u,
  defaultClassName: Cu.root,
  generateClassName: oi.generate
});
process.env.NODE_ENV !== "production" && (Rt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: a.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function wu(e) {
  const t = Ye(e);
  return t.body === e ? an(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function _t(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Oo(e) {
  return parseInt(an(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ku(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function Co(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1, u = !ku(s);
    l && u && _t(s, o);
  });
}
function jr(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function Nu(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (wu(n)) {
      const s = Sl(Ye(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${Oo(n) + s}px`;
      const l = Ye(n).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (u) => {
        r.push({
          value: u.style.paddingRight,
          property: "padding-right",
          el: u
        }), u.style.paddingRight = `${Oo(u) + s}px`;
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment)
      i = Ye(n).body;
    else {
      const s = n.parentElement, l = an(n);
      i = s?.nodeName === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : n;
    }
    r.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: i,
      el: s,
      property: l
    }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function Iu(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class Mu {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && _t(t.modalRef, !1);
    const o = Iu(r);
    Co(r, t.mount, t.modalRef, o, !0);
    const i = jr(this.containers, (s) => s.container === r);
    return i !== -1 ? (this.containers[i].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = jr(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[n];
    o.restore || (o.restore = Nu(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = jr(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && _t(t.modalRef, r), Co(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && _t(s.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Au = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function ju(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Du(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function Lu(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Du(e));
}
function Fu(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(Au)).forEach((n, o) => {
    const i = ju(n);
    i === -1 || !Lu(n) || (i === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: i,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function Bu() {
  return !0;
}
function or(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Fu,
    isEnabled: s = Bu,
    open: l
  } = e, u = O.useRef(!1), f = O.useRef(null), p = O.useRef(null), h = O.useRef(null), b = O.useRef(null), x = O.useRef(!1), g = O.useRef(null), c = Qe(cn(t), g), T = O.useRef(null);
  O.useEffect(() => {
    !l || !g.current || (x.current = !r);
  }, [r, l]), O.useEffect(() => {
    if (!l || !g.current)
      return;
    const P = Ye(g.current);
    return g.current.contains(P.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), x.current && g.current.focus()), () => {
      o || (h.current && h.current.focus && (u.current = !0, h.current.focus()), h.current = null);
    };
  }, [l]), O.useEffect(() => {
    if (!l || !g.current)
      return;
    const P = Ye(g.current), C = (y) => {
      T.current = y, !(n || !s() || y.key !== "Tab") && P.activeElement === g.current && y.shiftKey && (u.current = !0, p.current && p.current.focus());
    }, m = () => {
      const y = g.current;
      if (y === null)
        return;
      if (!P.hasFocus() || !s() || u.current) {
        u.current = !1;
        return;
      }
      if (y.contains(P.activeElement) || n && P.activeElement !== f.current && P.activeElement !== p.current)
        return;
      if (P.activeElement !== b.current)
        b.current = null;
      else if (b.current !== null)
        return;
      if (!x.current)
        return;
      let v = [];
      if ((P.activeElement === f.current || P.activeElement === p.current) && (v = i(g.current)), v.length > 0) {
        var S, R;
        const M = !!((S = T.current) != null && S.shiftKey && ((R = T.current) == null ? void 0 : R.key) === "Tab"), H = v[0], U = v[v.length - 1];
        typeof H != "string" && typeof U != "string" && (M ? U.focus() : H.focus());
      } else
        y.focus();
    };
    P.addEventListener("focusin", m), P.addEventListener("keydown", C, !0);
    const N = setInterval(() => {
      P.activeElement && P.activeElement.tagName === "BODY" && m();
    }, 50);
    return () => {
      clearInterval(N), P.removeEventListener("focusin", m), P.removeEventListener("keydown", C, !0);
    };
  }, [r, n, o, s, l, i]);
  const $ = (P) => {
    h.current === null && (h.current = P.relatedTarget), x.current = !0, b.current = P.target;
    const C = t.props.onFocus;
    C && C(P);
  }, k = (P) => {
    h.current === null && (h.current = P.relatedTarget), x.current = !0;
  };
  return /* @__PURE__ */ K.jsxs(O.Fragment, {
    children: [/* @__PURE__ */ K.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: k,
      ref: f,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ O.cloneElement(t, {
      ref: c,
      onFocus: $
    }), /* @__PURE__ */ K.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: k,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (or.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: gr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: a.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: a.func,
  /**
   * If `true`, focus is locked.
   */
  open: a.bool.isRequired
});
process.env.NODE_ENV !== "production" && (or.propTypes = di(or.propTypes));
function zu(e) {
  return typeof e == "function" ? e() : e;
}
function Vu(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Wu = new Mu();
function Uu(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = Wu,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: l,
    children: u,
    onClose: f,
    open: p,
    rootRef: h
  } = e, b = O.useRef({}), x = O.useRef(null), g = O.useRef(null), c = Qe(g, h), [T, $] = O.useState(!p), k = Vu(u);
  let P = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (P = !1);
  const C = () => Ye(x.current), m = () => (b.current.modalRef = g.current, b.current.mount = x.current, b.current), N = () => {
    o.mount(m(), {
      disableScrollLock: n
    }), g.current && (g.current.scrollTop = 0);
  }, y = lt(() => {
    const I = zu(t) || C().body;
    o.add(m(), I), g.current && N();
  }), v = O.useCallback(() => o.isTopModal(m()), [o]), S = lt((I) => {
    x.current = I, I && (p && v() ? N() : g.current && _t(g.current, P));
  }), R = O.useCallback(() => {
    o.remove(m(), P);
  }, [P, o]);
  O.useEffect(() => () => {
    R();
  }, [R]), O.useEffect(() => {
    p ? y() : (!k || !i) && R();
  }, [p, R, k, i, y]);
  const M = (I) => (L) => {
    var G;
    (G = I.onKeyDown) == null || G.call(I, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !v()) && (r || (L.stopPropagation(), f && f(L, "escapeKeyDown")));
  }, H = (I) => (L) => {
    var G;
    (G = I.onClick) == null || G.call(I, L), L.target === L.currentTarget && f && f(L, "backdropClick");
  };
  return {
    getRootProps: (I = {}) => {
      const L = ui(e);
      delete L.onTransitionEnter, delete L.onTransitionExited;
      const G = w({}, L, I);
      return w({
        role: "presentation"
      }, G, {
        onKeyDown: M(G),
        ref: c
      });
    },
    getBackdropProps: (I = {}) => {
      const L = I;
      return w({
        "aria-hidden": !0
      }, L, {
        onClick: H(L),
        open: p
      });
    },
    getTransitionProps: () => {
      const I = () => {
        $(!1), s && s();
      }, L = () => {
        $(!0), l && l(), i && R();
      };
      return {
        onEnter: uo(I, u?.props.onEnter),
        onExited: uo(L, u?.props.onExited)
      };
    },
    rootRef: c,
    portalRef: S,
    isTopModal: v,
    exited: T,
    hasTransition: k
  };
}
function Yu(e) {
  return Le("MuiModal", e);
}
Fe("MuiModal", ["root", "hidden", "backdrop"]);
const qu = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Hu = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return et({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, Yu, n);
}, Ku = Te("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Gu = Te(_i, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Pi = /* @__PURE__ */ O.forwardRef(function(t, r) {
  var n, o, i, s, l, u;
  const f = Ke({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: p = Gu,
    BackdropProps: h,
    className: b,
    closeAfterTransition: x = !1,
    children: g,
    container: c,
    component: T,
    components: $ = {},
    componentsProps: k = {},
    disableAutoFocus: P = !1,
    disableEnforceFocus: C = !1,
    disableEscapeKeyDown: m = !1,
    disablePortal: N = !1,
    disableRestoreFocus: y = !1,
    disableScrollLock: v = !1,
    hideBackdrop: S = !1,
    keepMounted: R = !1,
    onBackdropClick: M,
    open: H,
    slotProps: U,
    slots: A
    // eslint-disable-next-line react/prop-types
  } = f, J = ge(f, qu), I = w({}, f, {
    closeAfterTransition: x,
    disableAutoFocus: P,
    disableEnforceFocus: C,
    disableEscapeKeyDown: m,
    disablePortal: N,
    disableRestoreFocus: y,
    disableScrollLock: v,
    hideBackdrop: S,
    keepMounted: R
  }), {
    getRootProps: L,
    getBackdropProps: G,
    getTransitionProps: fe,
    portalRef: d,
    isTopModal: _,
    exited: j,
    hasTransition: F
  } = Uu(w({}, I, {
    rootRef: r
  })), D = w({}, I, {
    exited: j
  }), z = Hu(D), W = {};
  if (g.props.tabIndex === void 0 && (W.tabIndex = "-1"), F) {
    const {
      onEnter: ie,
      onExited: be
    } = fe();
    W.onEnter = ie, W.onExited = be;
  }
  const q = (n = (o = A?.root) != null ? o : $.Root) != null ? n : Ku, B = (i = (s = A?.backdrop) != null ? s : $.Backdrop) != null ? i : p, Y = (l = U?.root) != null ? l : k.root, V = (u = U?.backdrop) != null ? u : k.backdrop, Z = ho({
    elementType: q,
    externalSlotProps: Y,
    externalForwardedProps: J,
    getSlotProps: L,
    additionalProps: {
      ref: r,
      as: T
    },
    ownerState: D,
    className: he(b, Y?.className, z?.root, !D.open && D.exited && z?.hidden)
  }), E = ho({
    elementType: B,
    externalSlotProps: V,
    additionalProps: h,
    getSlotProps: (ie) => G(w({}, ie, {
      onClick: (be) => {
        M && M(be), ie != null && ie.onClick && ie.onClick(be);
      }
    })),
    className: he(V?.className, h?.className, z?.backdrop),
    ownerState: D
  });
  return !R && !H && (!F || j) ? null : /* @__PURE__ */ K.jsx(nr, {
    ref: d,
    container: c,
    disablePortal: N,
    children: /* @__PURE__ */ K.jsxs(q, w({}, Z, {
      children: [!S && p ? /* @__PURE__ */ K.jsx(B, w({}, E)) : null, /* @__PURE__ */ K.jsx(or, {
        disableEnforceFocus: C,
        disableAutoFocus: P,
        disableRestoreFocus: y,
        isEnabled: _,
        open: H,
        children: /* @__PURE__ */ O.cloneElement(g, W)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: a.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: a.object,
  /**
   * A single child content element.
   */
  children: gr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: a.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: a.shape({
    Backdrop: a.elementType,
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([pi, a.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: a.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: a.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: a.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: a.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: a.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    backdrop: a.elementType,
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const tf = ({
  title: e,
  open: t,
  width: r,
  icon: n,
  children: o = !1,
  centered: i,
  onClose: s,
  ...l
}) => /* @__PURE__ */ K.jsx(
  Pi,
  {
    open: t,
    onClose: s,
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
    ...l,
    children: /* @__PURE__ */ K.jsxs(
      Rt,
      {
        className: "modal-alertas",
        sx: {
          position: "absolute",
          top: i ? "50%" : "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: r ?? 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          padding: 0
        },
        children: [
          /* @__PURE__ */ K.jsxs(
            Rt,
            {
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              className: "modal-alertas-header",
              children: [
                n != null && /* @__PURE__ */ K.jsx("div", { className: "item-modal", children: n }),
                /* @__PURE__ */ K.jsx(
                  bi,
                  {
                    id: "modal-title",
                    variant: "h6",
                    component: "h2",
                    className: "modal-alertas-title",
                    children: e
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ K.jsx(Rt, { id: "modal-description", className: "modal-description", children: o })
        ]
      }
    )
  }
), rf = ({ styles: e, config: t }) => /* @__PURE__ */ K.jsx(Rt, { className: "d-flex spinner", style: e, children: /* @__PURE__ */ K.jsx(dn, { sx: t }) });
export {
  Qu as Boton,
  ef as ContainerTitle,
  tf as ModalAlerta,
  rf as Spinner
};
