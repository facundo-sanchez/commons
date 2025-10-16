(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._boton_1h6za_1{min-width:100px;margin:.5em .5em .5em 0}._boton_1h6za_1:disabled{opacity:.5!important;cursor:not-allowed!important;background-color:#afafaf!important}.container-title{display:flex;flex-direction:row;align-items:center;padding:.5em 0 .5em 3em;gap:.5em}.container-title .title{font-size:1.7rem;font-weight:700!important;display:flex;align-items:center;gap:.2em;text-wrap:nowrap}.container-title .sub-title{font-size:1.5rem;font-weight:500!important;color:#202f95;text-wrap:nowrap}.container-title .container-line .hr-title{margin-top:.3em;background-color:#afafaf;border-top:1px solid #afafaf;border-bottom:1px solid #afafaf;height:1px}.sub-title{display:flex;gap:1em;justify-content:center;align-items:center}.top-modal-bar{display:flex;justify-content:center;align-items:center;width:100%}.top-gradient-bar{width:100%;height:10px;border-top-left-radius:16px;border-top-right-radius:16px;background:linear-gradient(90deg,#39b7bc,#1a4e80,#1a4e80);background-size:200% 100%;margin-top:-1px}.item-modal{height:1.6em;width:1.5em}.modal-alertas .modal-alertas-header{background-color:#fff;border-radius:8px 8px 0 0!important}.modal-alertas .modal-alertas-title{font-size:26px!important;font-weight:400;color:#0e2536;padding:6px 0}.modal-description{display:flex;flex-direction:column;align-items:center}.modal-alertas .modal-description{padding:0 16px}.modal-alertas .ant-modal-content{border-radius:10px}.modal-alertas .span{font-size:12px;color:#fff}.btn-cancel-content{display:flex;flex-direction:row-reverse;margin:.5em}.btn-cancel{display:flex;justify-content:center;align-items:center;border-radius:200px;width:25px;height:25px;background-color:#f6f7fb;align-self:center;cursor:pointer;transition:background-color .3s ease}.btn-cancel:hover{background-color:#dadada}.spinner{margin:auto;align-items:center;justify-content:center;padding:5em}.container{background-color:#fff;margin:1em 2em;padding:1.5em 1.5em .5em;border-radius:5px}@media only screen and (max-width: 600px){.user{display:none!important}}.container-form-item{position:relative;flex-direction:column;gap:.5em;margin-bottom:1.8em;width:max-content}.label-form{font-size:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.error-message{color:#ff0003;position:absolute;top:100%;margin-top:5px}.form-required{color:#ff0003;font-size:12}.ant-select-selection-overflow{text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important;flex-wrap:nowrap!important;overflow-x:auto!important}.ant-select-selection-overflow::-webkit-scrollbar{width:3px;height:3px;cursor:all-scroll}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as m from "react";
import xe, { useState as Hd, useEffect as qd, isValidElement as Ds, cloneElement as Rs, Children as vm } from "react";
import { createTheme as xm, ThemeProvider as Sm, CssBaseline as wm, Stack as Pm, Modal as Om, Box as Ms, Typography as Cm, CircularProgress as Em, TextField as tl, FormControlLabel as nl, Switch as Tm, Checkbox as km, Radio as Dm, Tooltip as Rm, Autocomplete as Mm, RadioGroup as _m } from "@mui/material";
import { LoadingButton as Nc } from "@mui/lab";
import { CacheProvider as Im, Global as Nm, ThemeContext as Gd, css as $m, keyframes as oi } from "@emotion/react";
import Am from "@emotion/styled";
import * as Fm from "react-dom";
import ys from "react-dom";
function rl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Wn(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      var s = !1;
      try {
        s = this instanceof r;
      } catch {
      }
      return s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var gs = { exports: {} }, oo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $c;
function jm() {
  if ($c) return oo;
  $c = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return oo.Fragment = t, oo.jsx = n, oo.jsxs = n, oo;
}
var so = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ac;
function Vm() {
  return Ac || (Ac = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(k) {
      if (k == null) return null;
      if (typeof k == "function")
        return k.$$typeof === _ ? null : k.displayName || k.name || null;
      if (typeof k == "string") return k;
      switch (k) {
        case f:
          return "Fragment";
        case C:
          return "Profiler";
        case v:
          return "StrictMode";
        case O:
          return "Suspense";
        case R:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof k == "object")
        switch (typeof k.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), k.$$typeof) {
          case g:
            return "Portal";
          case S:
            return (k.displayName || "Context") + ".Provider";
          case T:
            return (k._context.displayName || "Context") + ".Consumer";
          case w:
            var j = k.render;
            return k = k.displayName, k || (k = j.displayName || j.name || "", k = k !== "" ? "ForwardRef(" + k + ")" : "ForwardRef"), k;
          case P:
            return j = k.displayName || null, j !== null ? j : e(k.type) || "Memo";
          case E:
            j = k._payload, k = k._init;
            try {
              return e(k(j));
            } catch {
            }
        }
      return null;
    }
    function t(k) {
      return "" + k;
    }
    function n(k) {
      try {
        t(k);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var U = j.error, G = typeof Symbol == "function" && Symbol.toStringTag && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return U.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(k);
      }
    }
    function r(k) {
      if (k === f) return "<>";
      if (typeof k == "object" && k !== null && k.$$typeof === E)
        return "<...>";
      try {
        var j = e(k);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var k = I.A;
      return k === null ? null : k.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(k) {
      if (M.call(k, "key")) {
        var j = Object.getOwnPropertyDescriptor(k, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return k.key !== void 0;
    }
    function l(k, j) {
      function U() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: U,
        configurable: !0
      });
    }
    function c() {
      var k = e(this.type);
      return A[k] || (A[k] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), k = this.props.ref, k !== void 0 ? k : null;
    }
    function u(k, j, U, G, H, Z, X, re) {
      return U = Z.ref, k = {
        $$typeof: b,
        type: k,
        key: j,
        props: Z,
        _owner: H
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(k, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(k, "ref", { enumerable: !1, value: null }), k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(k, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(k, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(k, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    }
    function d(k, j, U, G, H, Z, X, re) {
      var ee = j.children;
      if (ee !== void 0)
        if (G)
          if (F(ee)) {
            for (G = 0; G < ee.length; G++)
              p(ee[G]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(ee);
      if (M.call(j, "key")) {
        ee = e(k);
        var J = Object.keys(j).filter(function(z) {
          return z !== "key";
        });
        G = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", Y[ee + G] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          ee,
          J,
          ee
        ), Y[ee + G] = !0);
      }
      if (ee = null, U !== void 0 && (n(U), ee = "" + U), a(j) && (n(j.key), ee = "" + j.key), "key" in j) {
        U = {};
        for (var q in j)
          q !== "key" && (U[q] = j[q]);
      } else U = j;
      return ee && l(
        U,
        typeof k == "function" ? k.displayName || k.name || "Unknown" : k
      ), u(
        k,
        ee,
        Z,
        H,
        s(),
        U,
        X,
        re
      );
    }
    function p(k) {
      typeof k == "object" && k !== null && k.$$typeof === b && k._store && (k._store.validated = 1);
    }
    var h = xe, b = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), S = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), I = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, F = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(k) {
        return k();
      }
    };
    var V, A = {}, $ = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), L = N(r(i)), Y = {};
    so.Fragment = f, so.jsx = function(k, j, U, G, H) {
      var Z = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        k,
        j,
        U,
        !1,
        G,
        H,
        Z ? Error("react-stack-top-frame") : $,
        Z ? N(r(k)) : L
      );
    }, so.jsxs = function(k, j, U, G, H) {
      var Z = 1e4 > I.recentlyCreatedOwnerStacks++;
      return d(
        k,
        j,
        U,
        !0,
        G,
        H,
        Z ? Error("react-stack-top-frame") : $,
        Z ? N(r(k)) : L
      );
    };
  })()), so;
}
var Fc;
function Lm() {
  return Fc || (Fc = 1, process.env.NODE_ENV === "production" ? gs.exports = jm() : gs.exports = Vm()), gs.exports;
}
var x = Lm();
const Bm = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: "Mostrar ruta"
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: (e) => e === "first" ? "Ir a la primera página" : e === "last" ? "Ir a la última página" : e === "next" ? "Ir a la página siguiente" : "Ir a la página anterior",
        labelRowsPerPage: "Filas por página:",
        labelDisplayedRows: ({
          from: e,
          to: t,
          count: n
        }) => `${e}–${t} de ${n !== -1 ? n : `más de ${t}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: (e) => `${e} Estrella${e !== 1 ? "s" : ""}`,
        emptyLabelText: "Vacío"
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: "Limpiar",
        closeText: "Cerrar",
        loadingText: "Cargando…",
        noOptionsText: "Sin opciones",
        openText: "Abierto"
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: "Cerrar"
      }
    },
    MuiPagination: {
      defaultProps: {
        "aria-label": "Paginador",
        getItemAriaLabel: (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : e === "first" ? "Ir a la primera página" : e === "last" ? "Ir a la última página" : e === "next" ? "Ir a la página siguiente" : "Ir a la página anterior"
      }
    }
  }
}, Wm = xm(
  {
    palette: {
      primary: {
        main: "#165C9D",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#E5EFFA",
        dark: "#cadbecff",
        contrastText: "#1A4A72"
      },
      action: {
        disabled: "#fff"
      }
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInput-root": {
              backgroundColor: "#f7f7f7",
              paddingLeft: "10px",
              borderRadius: "5px 5px 0px 0px",
              marginTop: "5px"
            },
            "& .MuiInputLabel-root": {
              backgroundColor: "#f7f7f7",
              padding: "0 10px",
              color: "#2e2e2e",
              marginTop: "-10px"
            },
            "& .MuiFormLabel-root": {
              zIndex: 4
            },
            "& .MuiInputLabel-animated": {
              zIndex: 4,
              backgroundColor: "transparent"
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600
          }
        }
      }
    }
  },
  Bm
), Vr = ({ children: e }) => /* @__PURE__ */ x.jsxs(Sm, { theme: Wm, children: [
  /* @__PURE__ */ x.jsx(wm, {}),
  e
] }), Ym = "_boton_1h6za_1", jc = {
  boton: Ym
}, Kd = () => {
  const [e, t] = Hd(!1);
  return qd(() => {
    t(!0);
  }, []), { isReady: e };
};
var Zd = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Vc = xe.createContext && /* @__PURE__ */ xe.createContext(Zd), zm = ["attr", "size", "title"];
function Um(e, t) {
  if (e == null) return {};
  var n = Hm(e, t), r, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      r = i[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Hm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ls() {
  return Ls = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ls.apply(this, arguments);
}
function Lc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lc(Object(n), !0).forEach(function(r) {
      qm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function qm(e, t, n) {
  return t = Gm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Gm(e) {
  var t = Km(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Km(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xd(e) {
  return e && e.map((t, n) => /* @__PURE__ */ xe.createElement(t.tag, Bs({
    key: n
  }, t.attr), Xd(t.child)));
}
function ol(e) {
  return (t) => /* @__PURE__ */ xe.createElement(Zm, Ls({
    attr: Bs({}, e.attr)
  }, t), Xd(e.child));
}
function Zm(e) {
  var t = (n) => {
    var {
      attr: r,
      size: s,
      title: i
    } = e, a = Um(e, zm), l = s || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ xe.createElement("svg", Ls({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, a, {
      className: c,
      style: Bs(Bs({
        color: e.color || n.color
      }, n.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ xe.createElement("title", null, i), e.children);
  };
  return Vc !== void 0 ? /* @__PURE__ */ xe.createElement(Vc.Consumer, null, (n) => t(n)) : t(Zd);
}
function Xm(e) {
  return ol({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" }, child: [] }] })(e);
}
function Qm(e) {
  return ol({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z", opacity: ".87" }, child: [] }, { tag: "path", attr: { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" }, child: [] }] })(e);
}
const _a = ({
  label: e,
  type: t = "primary",
  onClick: n,
  disabled: r,
  htmlType: s,
  icon: i,
  size: a,
  style: l,
  loading: c,
  ...u
}) => {
  const { isReady: d } = Kd(), p = ({ variant: g = "contained", color: f, icon: v }) => /* @__PURE__ */ x.jsx(Vr, { children: /* @__PURE__ */ x.jsx(
    Nc,
    {
      ...u,
      variant: g,
      size: a || "small",
      type: s,
      onClick: n,
      className: `${jc.boton}`,
      disabled: r,
      style: l,
      startIcon: v || i,
      loading: c,
      loadingPosition: i || c ? "end" : void 0,
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
        fontSize: "14px",
        color: f,
        padding: c ? "0px 0px 0px 20px" : "10px 35px 10px 35px",
        "& .MuiLoadingButton-loadingIndicator": {
          position: "relative",
          margin: 0,
          padding: 0
        }
      },
      children: e
    }
  ) }), h = ({ color: g, background1: f, background2: v }) => /* @__PURE__ */ x.jsx(Vr, { children: /* @__PURE__ */ x.jsx(
    Nc,
    {
      ...u,
      variant: "contained",
      size: a || "small",
      type: s,
      onClick: n,
      className: `${jc.boton}`,
      disabled: r,
      endIcon: i,
      loading: c,
      loadingPosition: i || c ? "end" : void 0,
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "17px",
        textTransform: "none",
        fontSize: "14px",
        padding: c ? "0px 0px 0px 20px" : "10px 35px 10px 35px",
        background: `linear-gradient(0deg, ${f}, ${v})`,
        color: r ? "#fff" : g,
        "&:hover": {
          background: `linear-gradient(0deg, ${f}, ${v})`,
          opacity: 0.95
        },
        "& .MuiLoadingButton-loadingIndicator": {
          position: "relative",
          margin: 0,
          padding: 0
        },
        "& .Mui-disabled": {
          position: "relative",
          margin: 0,
          padding: 0,
          color: "white"
        }
      },
      children: e
    }
  ) });
  return d && (() => {
    switch (t) {
      case "primary":
        return /* @__PURE__ */ x.jsx(h, { color: "#fff", background1: "#16436E", background2: "#3576AD" });
      case "secondary":
        return /* @__PURE__ */ x.jsx(h, { color: "#1E415B", background1: "#F6F9FC", background2: "#E3EDF7" });
      case "cancel":
        return /* @__PURE__ */ x.jsx(p, { variant: "text", color: "#18A0FB", icon: /* @__PURE__ */ x.jsx(Qm, { size: 22 }) });
      case "text":
        return /* @__PURE__ */ x.jsx(p, { variant: "text", color: "#000000", icon: /* @__PURE__ */ x.jsx(Xm, {}) });
      default:
        return /* @__PURE__ */ x.jsx(h, { color: "#fff", background1: "#16436E", background2: "#3576AD" });
    }
  })();
}, jM = ({ title: e, subTitle: t }) => {
  const { isReady: n } = Kd();
  return /* @__PURE__ */ x.jsx(Vr, { children: /* @__PURE__ */ x.jsx("div", { className: "container-title ", children: /* @__PURE__ */ x.jsx("div", { className: "title", children: /* @__PURE__ */ x.jsxs(
    "span",
    {
      style: { color: n ? "rgba(0, 0, 0, 0.88)" : "transparent" },
      children: [
        t ? `${e?.trim()}:` : e?.trim(),
        t
      ]
    }
  ) }) }) });
}, Po = ({
  className: e,
  alignItems: t,
  alignContent: n,
  justifyItems: r,
  justifySelf: s,
  alignSelf: i,
  justifyContent: a,
  flex: l,
  direction: c,
  gap: u,
  style: d,
  spacing: p,
  children: h,
  sx: b,
  useFlexGap: g,
  flexWrap: f,
  ...v
}) => /* @__PURE__ */ x.jsx(
  Pm,
  {
    flexWrap: f,
    className: e,
    alignItems: t,
    direction: c || "row",
    alignContent: n || "flex-start",
    justifyItems: r || "initial",
    justifySelf: s || "initial",
    alignSelf: i || "initial",
    gap: u || 0,
    justifyContent: a || "initial",
    spacing: p,
    style: d,
    sx: b,
    flex: l,
    useFlexGap: g,
    ...v,
    children: h
  }
);
function Jm(e) {
  return ol({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M368 368 144 144m224 0L144 368" }, child: [] }] })(e);
}
const VM = ({
  title: e,
  open: t,
  width: n,
  icon: r,
  children: s = !1,
  centered: i,
  onClose: a,
  onExecuteCallback: l,
  ...c
}) => /* @__PURE__ */ x.jsx(Vr, { children: /* @__PURE__ */ x.jsx(
  Om,
  {
    open: t,
    onClose: a,
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
    ...c,
    children: /* @__PURE__ */ x.jsxs(
      Ms,
      {
        className: "modal-alertas",
        sx: {
          position: "absolute",
          top: i ? "50%" : "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: n ?? 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          padding: 0
        },
        children: [
          /* @__PURE__ */ x.jsx("div", { className: "top-modal-bar", children: /* @__PURE__ */ x.jsx("div", { className: "top-gradient-bar" }) }),
          /* @__PURE__ */ x.jsx("div", { className: "btn-cancel-content", children: /* @__PURE__ */ x.jsx("div", { className: "btn-cancel", onClick: a, children: /* @__PURE__ */ x.jsx(Jm, { color: "#0E3E61", size: 25 }) }) }),
          /* @__PURE__ */ x.jsxs(
            Ms,
            {
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              className: "modal-alertas-header",
              children: [
                r != null && /* @__PURE__ */ x.jsx("div", { className: "item-modal", children: r }),
                /* @__PURE__ */ x.jsx(
                  Cm,
                  {
                    id: "modal-title",
                    variant: "h6",
                    component: "h2",
                    className: "modal-alertas-title",
                    fontWeight: 800,
                    children: e
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ x.jsxs(Ms, { id: "modal-description", className: "modal-description", children: [
            s,
            /* @__PURE__ */ x.jsxs(Po, { gap: 3, sx: { paddingBottom: "10px", marginTop: "1em", marginBottom: "1em" }, direction: "row-reverse", children: [
              /* @__PURE__ */ x.jsx(
                _a,
                {
                  id: "btn-aceptar",
                  "data-testid": "btn-aceptar",
                  htmlType: "button",
                  label: "Aceptar",
                  variant: "outlined",
                  onClick: () => {
                    a(), l();
                  }
                }
              ),
              /* @__PURE__ */ x.jsx(
                _a,
                {
                  "data-testid": "btn-cancelar",
                  label: "Cancelar",
                  htmlType: "button",
                  type: "secondary",
                  variant: "contained",
                  onClick: () => {
                    a();
                  }
                }
              )
            ] })
          ] })
        ]
      }
    )
  }
) }), LM = ({ styles: e, config: t }) => /* @__PURE__ */ x.jsx(Vr, { children: /* @__PURE__ */ x.jsx(Ms, { className: "d-flex spinner", style: e, children: /* @__PURE__ */ x.jsx(Em, { sx: t }) }) }), BM = ({ children: e, ...t }) => /* @__PURE__ */ x.jsx(Vr, { children: /* @__PURE__ */ x.jsx("div", { className: "container", ...t, children: e }) });
var ey = (e) => e.type === "checkbox", So = (e) => e instanceof Date, sl = (e) => e == null;
const Qd = (e) => typeof e == "object";
var lr = (e) => !sl(e) && !Array.isArray(e) && Qd(e) && !So(e), ty = (e) => lr(e) && e.target ? ey(e.target) ? e.target.checked : e.target.value : e, ny = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, ry = (e, t) => e.has(ny(t)), oy = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return lr(t) && t.hasOwnProperty("isPrototypeOf");
}, sy = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Jd(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(sy && (e instanceof Blob || r)) && (n || lr(e)))
    if (t = n ? [] : Object.create(Object.getPrototypeOf(e)), !n && !oy(e))
      t = e;
    else
      for (const s in e)
        e.hasOwnProperty(s) && (t[s] = Jd(e[s]));
  else
    return e;
  return t;
}
var ef = (e) => /^\w*$/.test(e), Ia = (e) => e === void 0, iy = (e) => Array.isArray(e) ? e.filter(Boolean) : [], tf = (e) => iy(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ct = (e, t, n) => {
  if (!t || !lr(e))
    return n;
  const r = (ef(t) ? [t] : tf(t)).reduce((s, i) => sl(s) ? s : s[i], e);
  return Ia(r) || r === e ? Ia(e[t]) ? n : e[t] : r;
}, ia = (e) => typeof e == "boolean", Bc = (e, t, n) => {
  let r = -1;
  const s = ef(t) ? [t] : tf(t), i = s.length, a = i - 1;
  for (; ++r < i; ) {
    const l = s[r];
    let c = n;
    if (r !== a) {
      const u = e[l];
      c = lr(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : [];
    }
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return;
    e[l] = c, e = e[l];
  }
};
const Wc = {
  BLUR: "blur",
  CHANGE: "change"
}, Yc = {
  all: "all"
}, il = xe.createContext(null);
il.displayName = "HookFormContext";
const Zo = () => xe.useContext(il), ay = (e) => {
  const { children: t, ...n } = e;
  return xe.createElement(il.Provider, { value: n }, t);
};
var ly = (e, t, n, r = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(s, i, {
      get: () => {
        const a = i;
        return t._proxyFormState[a] !== Yc.all && (t._proxyFormState[a] = !r || Yc.all), n && (n[a] = !0), e[a];
      }
    });
  return s;
};
const nf = typeof window < "u" ? xe.useLayoutEffect : xe.useEffect;
function cy(e) {
  const t = Zo(), { control: n = t.control, disabled: r, name: s, exact: i } = e || {}, [a, l] = xe.useState(n._formState), c = xe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return nf(() => n._subscribe({
    name: s,
    formState: c.current,
    exact: i,
    callback: (u) => {
      !r && l({
        ...n._formState,
        ...u
      });
    }
  }), [s, r, i]), xe.useEffect(() => {
    c.current.isValid && n._setValid(!0);
  }, [n]), xe.useMemo(() => ly(a, n, c.current, !1), [a, n]);
}
var uy = (e) => typeof e == "string", dy = (e, t, n, r, s) => uy(e) ? Ct(n, e, s) : Array.isArray(e) ? e.map((i) => Ct(n, i)) : n, zc = (e) => sl(e) || !Qd(e);
function rf(e, t, n = /* @__PURE__ */ new WeakSet()) {
  if (zc(e) || zc(t))
    return e === t;
  if (So(e) && So(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), s = Object.keys(t);
  if (r.length !== s.length)
    return !1;
  if (n.has(e) || n.has(t))
    return !0;
  n.add(e), n.add(t);
  for (const i of r) {
    const a = e[i];
    if (!s.includes(i))
      return !1;
    if (i !== "ref") {
      const l = t[i];
      if (So(a) && So(l) || lr(a) && lr(l) || Array.isArray(a) && Array.isArray(l) ? !rf(a, l, n) : a !== l)
        return !1;
    }
  }
  return !0;
}
function fy(e) {
  const t = Zo(), { control: n = t.control, name: r, defaultValue: s, disabled: i, exact: a, compute: l } = e || {}, c = xe.useRef(s), u = xe.useRef(l), d = xe.useRef(void 0);
  u.current = l;
  const p = xe.useMemo(() => n._getWatch(r, c.current), [n, r]), [h, b] = xe.useState(u.current ? u.current(p) : p);
  return nf(() => n._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: a,
    callback: (g) => {
      if (!i) {
        const f = dy(r, n._names, g.values || n._formValues, !1, c.current);
        if (u.current) {
          const v = u.current(f);
          rf(v, d.current) || (b(v), d.current = v);
        } else
          b(f);
      }
    }
  }), [n, i, r, a]), xe.useEffect(() => n._removeUnmounted()), h;
}
function py(e) {
  const t = Zo(), { name: n, disabled: r, control: s = t.control, shouldUnregister: i, defaultValue: a } = e, l = ry(s._names.array, n), c = xe.useMemo(() => Ct(s._formValues, n, Ct(s._defaultValues, n, a)), [s, n, a]), u = fy({
    control: s,
    name: n,
    defaultValue: c,
    exact: !0
  }), d = cy({
    control: s,
    name: n,
    exact: !0
  }), p = xe.useRef(e), h = xe.useRef(void 0), b = xe.useRef(s.register(n, {
    ...e.rules,
    value: u,
    ...ia(e.disabled) ? { disabled: e.disabled } : {}
  }));
  p.current = e;
  const g = xe.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Ct(d.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Ct(d.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Ct(d.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Ct(d.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => Ct(d.errors, n)
    }
  }), [d, n]), f = xe.useCallback((S) => b.current.onChange({
    target: {
      value: ty(S),
      name: n
    },
    type: Wc.CHANGE
  }), [n]), v = xe.useCallback(() => b.current.onBlur({
    target: {
      value: Ct(s._formValues, n),
      name: n
    },
    type: Wc.BLUR
  }), [n, s._formValues]), C = xe.useCallback((S) => {
    const w = Ct(s._fields, n);
    w && S && (w._f.ref = {
      focus: () => S.focus && S.focus(),
      select: () => S.select && S.select(),
      setCustomValidity: (O) => S.setCustomValidity(O),
      reportValidity: () => S.reportValidity()
    });
  }, [s._fields, n]), T = xe.useMemo(() => ({
    name: n,
    value: u,
    ...ia(r) || d.disabled ? { disabled: d.disabled || r } : {},
    onChange: f,
    onBlur: v,
    ref: C
  }), [n, r, d.disabled, f, v, C, u]);
  return xe.useEffect(() => {
    const S = s._options.shouldUnregister || i, w = h.current;
    w && w !== n && !l && s.unregister(w), s.register(n, {
      ...p.current.rules,
      ...ia(p.current.disabled) ? { disabled: p.current.disabled } : {}
    });
    const O = (R, P) => {
      const E = Ct(s._fields, R);
      E && E._f && (E._f.mount = P);
    };
    if (O(n, !0), S) {
      const R = Jd(Ct(s._options.defaultValues, n));
      Bc(s._defaultValues, n, R), Ia(Ct(s._formValues, n)) && Bc(s._formValues, n, R);
    }
    return !l && s.register(n), h.current = n, () => {
      (l ? S && !s._state.action : S) ? s.unregister(n) : O(n, !1);
    };
  }, [n, s, l, i]), xe.useEffect(() => {
    s._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, s]), xe.useMemo(() => ({
    field: T,
    formState: d,
    fieldState: g
  }), [T, d, g]);
}
const hy = (e) => e.render(py(e)), hr = ({ error: e, style: t = {}, children: n }) => /* @__PURE__ */ x.jsxs("div", { className: "d-flex container-form-item", style: { ...t }, children: [
  /* @__PURE__ */ x.jsx("div", { children: n }),
  /* @__PURE__ */ x.jsx("div", { className: "error-message", children: e && /* @__PURE__ */ x.jsx("span", { children: e }) })
] }), my = (e) => {
  const {
    formItemStyle: t,
    name: n,
    formStyle: r = {},
    width: s = "200px",
    height: i = "35px",
    value: a,
    placeholder: l,
    rest: c,
    ref: u,
    getLabel: d,
    renderError: p,
    onChangeForm: h,
    onChange: b
  } = e;
  return /* @__PURE__ */ x.jsx(hr, { error: p(n), style: { ...t }, children: /* @__PURE__ */ x.jsx(
    tl,
    {
      ref: u,
      id: n,
      error: !!p(n),
      label: d(),
      style: {
        width: s,
        height: i,
        ...r
      },
      value: a || "",
      placeholder: l,
      onChange: (g) => {
        h(g.target.value), typeof b == "function" && b(g.target.value);
      },
      size: "small",
      variant: "standard",
      ...c
    }
  ) });
}, yy = (e) => {
  const {
    formItemStyle: t,
    name: n,
    label: r,
    ref: s,
    value: i,
    formStyle: a,
    rest: l,
    onChangeForm: c,
    onChange: u,
    renderError: d
  } = e;
  return /* @__PURE__ */ x.jsx(hr, { error: d(n), style: { ...t }, children: /* @__PURE__ */ x.jsx(
    nl,
    {
      label: r,
      style: {
        ...a
      },
      control: /* @__PURE__ */ x.jsx(
        Tm,
        {
          ref: s,
          id: n,
          checked: i,
          onChange: (p, h) => {
            c(h), typeof u == "function" && u(h);
          },
          color: "primary",
          ...l
        }
      )
    }
  ) });
}, gy = (e) => {
  const {
    formItemStyle: t,
    ref: n,
    name: r,
    width: s = "200px",
    height: i = "35px",
    formStyle: a = {},
    value: l,
    placeholder: c,
    rest: u,
    renderError: d,
    getLabel: p,
    onChangeForm: h,
    onChange: b
  } = e;
  return /* @__PURE__ */ x.jsx(hr, { error: d(r), style: { ...t }, children: /* @__PURE__ */ x.jsx(
    tl,
    {
      ref: n,
      id: r,
      error: !!d(r),
      label: p(),
      style: {
        width: s,
        height: i,
        ...a
      },
      value: l,
      placeholder: c,
      onChange: (g) => {
        h(g.target.value), typeof b == "function" && b(g.target.value);
      },
      size: "small",
      variant: "standard",
      multiline: !0,
      ...u
    }
  ) });
}, by = (e) => {
  const {
    name: t,
    formItemStyle: n,
    label: r,
    ref: s,
    value: i,
    rest: a,
    onChangeForm: l,
    onChange: c,
    renderError: u
  } = e;
  return /* @__PURE__ */ x.jsx(hr, { error: u(t), style: { ...n }, children: /* @__PURE__ */ x.jsx(
    nl,
    {
      label: r,
      control: /* @__PURE__ */ x.jsx(
        km,
        {
          ref: s,
          id: t,
          value: i,
          onChange: (d, p) => {
            l(p), typeof c == "function" && c(p);
          },
          ...a
        }
      )
    }
  ) });
}, vy = (e) => {
  const {
    name: t,
    label: n,
    formItemStyle: r,
    ref: s,
    value: i,
    rest: a,
    renderError: l,
    onChangeForm: c,
    onChange: u
  } = e;
  return /* @__PURE__ */ x.jsx(hr, { error: l(t), style: { ...r }, children: /* @__PURE__ */ x.jsx(
    nl,
    {
      label: n,
      control: /* @__PURE__ */ x.jsx(
        Dm,
        {
          ref: s,
          id: t,
          value: i,
          onChange: (d) => {
            c(d), typeof u == "function" && u(d);
          },
          ...a
        }
      )
    }
  ) });
};
function y() {
  return y = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, y.apply(null, arguments);
}
function te(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function of(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = of(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function fe() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = of(e)) && (r && (r += " "), r += t);
  return r;
}
var bs = { exports: {} }, vs = { exports: {} }, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc;
function xy() {
  if (Uc) return je;
  Uc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function S(O) {
    if (typeof O == "object" && O !== null) {
      var R = O.$$typeof;
      switch (R) {
        case t:
          switch (O = O.type, O) {
            case c:
            case u:
            case r:
            case i:
            case s:
            case p:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case l:
                case d:
                case g:
                case b:
                case a:
                  return O;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function w(O) {
    return S(O) === u;
  }
  return je.AsyncMode = c, je.ConcurrentMode = u, je.ContextConsumer = l, je.ContextProvider = a, je.Element = t, je.ForwardRef = d, je.Fragment = r, je.Lazy = g, je.Memo = b, je.Portal = n, je.Profiler = i, je.StrictMode = s, je.Suspense = p, je.isAsyncMode = function(O) {
    return w(O) || S(O) === c;
  }, je.isConcurrentMode = w, je.isContextConsumer = function(O) {
    return S(O) === l;
  }, je.isContextProvider = function(O) {
    return S(O) === a;
  }, je.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }, je.isForwardRef = function(O) {
    return S(O) === d;
  }, je.isFragment = function(O) {
    return S(O) === r;
  }, je.isLazy = function(O) {
    return S(O) === g;
  }, je.isMemo = function(O) {
    return S(O) === b;
  }, je.isPortal = function(O) {
    return S(O) === n;
  }, je.isProfiler = function(O) {
    return S(O) === i;
  }, je.isStrictMode = function(O) {
    return S(O) === s;
  }, je.isSuspense = function(O) {
    return S(O) === p;
  }, je.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === r || O === u || O === i || O === s || O === p || O === h || typeof O == "object" && O !== null && (O.$$typeof === g || O.$$typeof === b || O.$$typeof === a || O.$$typeof === l || O.$$typeof === d || O.$$typeof === v || O.$$typeof === C || O.$$typeof === T || O.$$typeof === f);
  }, je.typeOf = S, je;
}
var Ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc;
function Sy() {
  return Hc || (Hc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === r || B === u || B === i || B === s || B === p || B === h || typeof B == "object" && B !== null && (B.$$typeof === g || B.$$typeof === b || B.$$typeof === a || B.$$typeof === l || B.$$typeof === d || B.$$typeof === v || B.$$typeof === C || B.$$typeof === T || B.$$typeof === f);
    }
    function w(B) {
      if (typeof B == "object" && B !== null) {
        var ne = B.$$typeof;
        switch (ne) {
          case t:
            var Q = B.type;
            switch (Q) {
              case c:
              case u:
              case r:
              case i:
              case s:
              case p:
                return Q;
              default:
                var ae = Q && Q.$$typeof;
                switch (ae) {
                  case l:
                  case d:
                  case g:
                  case b:
                  case a:
                    return ae;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var O = c, R = u, P = l, E = a, D = t, _ = d, I = r, M = g, F = b, N = n, V = i, A = s, $ = p, L = !1;
    function Y(B) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(B) || w(B) === c;
    }
    function k(B) {
      return w(B) === u;
    }
    function j(B) {
      return w(B) === l;
    }
    function U(B) {
      return w(B) === a;
    }
    function G(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function H(B) {
      return w(B) === d;
    }
    function Z(B) {
      return w(B) === r;
    }
    function X(B) {
      return w(B) === g;
    }
    function re(B) {
      return w(B) === b;
    }
    function ee(B) {
      return w(B) === n;
    }
    function J(B) {
      return w(B) === i;
    }
    function q(B) {
      return w(B) === s;
    }
    function z(B) {
      return w(B) === p;
    }
    Ve.AsyncMode = O, Ve.ConcurrentMode = R, Ve.ContextConsumer = P, Ve.ContextProvider = E, Ve.Element = D, Ve.ForwardRef = _, Ve.Fragment = I, Ve.Lazy = M, Ve.Memo = F, Ve.Portal = N, Ve.Profiler = V, Ve.StrictMode = A, Ve.Suspense = $, Ve.isAsyncMode = Y, Ve.isConcurrentMode = k, Ve.isContextConsumer = j, Ve.isContextProvider = U, Ve.isElement = G, Ve.isForwardRef = H, Ve.isFragment = Z, Ve.isLazy = X, Ve.isMemo = re, Ve.isPortal = ee, Ve.isProfiler = J, Ve.isStrictMode = q, Ve.isSuspense = z, Ve.isValidElementType = S, Ve.typeOf = w;
  })()), Ve;
}
var qc;
function sf() {
  return qc || (qc = 1, process.env.NODE_ENV === "production" ? vs.exports = xy() : vs.exports = Sy()), vs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var aa, Gc;
function wy() {
  if (Gc) return aa;
  Gc = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return aa = s() ? Object.assign : function(i, a) {
    for (var l, c = r(i), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          n.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, aa;
}
var la, Kc;
function al() {
  if (Kc) return la;
  Kc = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return la = e, la;
}
var ca, Zc;
function af() {
  return Zc || (Zc = 1, ca = Function.call.bind(Object.prototype.hasOwnProperty)), ca;
}
var ua, Xc;
function Py() {
  if (Xc) return ua;
  Xc = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ al(), n = {}, r = /* @__PURE__ */ af();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function s(i, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var h = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = i[d](a, d, c, l, null, t);
          } catch (g) {
            p = g;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ua = s, ua;
}
var da, Qc;
function Oy() {
  if (Qc) return da;
  Qc = 1;
  var e = sf(), t = wy(), n = /* @__PURE__ */ al(), r = /* @__PURE__ */ af(), s = /* @__PURE__ */ Py(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return da = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(k) {
      var j = k && (u && k[u] || k[d]);
      if (typeof j == "function")
        return j;
    }
    var h = "<<anonymous>>", b = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: T(),
      arrayOf: S,
      element: w(),
      elementType: O(),
      instanceOf: R,
      node: _(),
      objectOf: E,
      oneOf: P,
      oneOfType: D,
      shape: M,
      exact: F
    };
    function g(k, j) {
      return k === j ? k !== 0 || 1 / k === 1 / j : k !== k && j !== j;
    }
    function f(k, j) {
      this.message = k, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function v(k) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, U = 0;
      function G(Z, X, re, ee, J, q, z) {
        if (ee = ee || h, q = q || re, z !== n) {
          if (c) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = ee + ":" + re;
            !j[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[ne] = !0, U++);
          }
        }
        return X[re] == null ? Z ? X[re] === null ? new f("The " + J + " `" + q + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new f("The " + J + " `" + q + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : k(X, re, ee, J, q);
      }
      var H = G.bind(null, !1);
      return H.isRequired = G.bind(null, !0), H;
    }
    function C(k) {
      function j(U, G, H, Z, X, re) {
        var ee = U[G], J = A(ee);
        if (J !== k) {
          var q = $(ee);
          return new f(
            "Invalid " + Z + " `" + X + "` of type " + ("`" + q + "` supplied to `" + H + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return v(j);
    }
    function T() {
      return v(a);
    }
    function S(k) {
      function j(U, G, H, Z, X) {
        if (typeof k != "function")
          return new f("Property `" + X + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var re = U[G];
        if (!Array.isArray(re)) {
          var ee = A(re);
          return new f("Invalid " + Z + " `" + X + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected an array."));
        }
        for (var J = 0; J < re.length; J++) {
          var q = k(re, J, H, Z, X + "[" + J + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return v(j);
    }
    function w() {
      function k(j, U, G, H, Z) {
        var X = j[U];
        if (!l(X)) {
          var re = A(X);
          return new f("Invalid " + H + " `" + Z + "` of type " + ("`" + re + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(k);
    }
    function O() {
      function k(j, U, G, H, Z) {
        var X = j[U];
        if (!e.isValidElementType(X)) {
          var re = A(X);
          return new f("Invalid " + H + " `" + Z + "` of type " + ("`" + re + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(k);
    }
    function R(k) {
      function j(U, G, H, Z, X) {
        if (!(U[G] instanceof k)) {
          var re = k.name || h, ee = Y(U[G]);
          return new f("Invalid " + Z + " `" + X + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return v(j);
    }
    function P(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function j(U, G, H, Z, X) {
        for (var re = U[G], ee = 0; ee < k.length; ee++)
          if (g(re, k[ee]))
            return null;
        var J = JSON.stringify(k, function(z, B) {
          var ne = $(B);
          return ne === "symbol" ? String(B) : B;
        });
        return new f("Invalid " + Z + " `" + X + "` of value `" + String(re) + "` " + ("supplied to `" + H + "`, expected one of " + J + "."));
      }
      return v(j);
    }
    function E(k) {
      function j(U, G, H, Z, X) {
        if (typeof k != "function")
          return new f("Property `" + X + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var re = U[G], ee = A(re);
        if (ee !== "object")
          return new f("Invalid " + Z + " `" + X + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected an object."));
        for (var J in re)
          if (r(re, J)) {
            var q = k(re, J, H, Z, X + "." + J, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return v(j);
    }
    function D(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var j = 0; j < k.length; j++) {
        var U = k[j];
        if (typeof U != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(U) + " at index " + j + "."
          ), a;
      }
      function G(H, Z, X, re, ee) {
        for (var J = [], q = 0; q < k.length; q++) {
          var z = k[q], B = z(H, Z, X, re, ee, n);
          if (B == null)
            return null;
          B.data && r(B.data, "expectedType") && J.push(B.data.expectedType);
        }
        var ne = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new f("Invalid " + re + " `" + ee + "` supplied to " + ("`" + X + "`" + ne + "."));
      }
      return v(G);
    }
    function _() {
      function k(j, U, G, H, Z) {
        return N(j[U]) ? null : new f("Invalid " + H + " `" + Z + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return v(k);
    }
    function I(k, j, U, G, H) {
      return new f(
        (k || "React class") + ": " + j + " type `" + U + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function M(k) {
      function j(U, G, H, Z, X) {
        var re = U[G], ee = A(re);
        if (ee !== "object")
          return new f("Invalid " + Z + " `" + X + "` of type `" + ee + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var J in k) {
          var q = k[J];
          if (typeof q != "function")
            return I(H, Z, X, J, $(q));
          var z = q(re, J, H, Z, X + "." + J, n);
          if (z)
            return z;
        }
        return null;
      }
      return v(j);
    }
    function F(k) {
      function j(U, G, H, Z, X) {
        var re = U[G], ee = A(re);
        if (ee !== "object")
          return new f("Invalid " + Z + " `" + X + "` of type `" + ee + "` " + ("supplied to `" + H + "`, expected `object`."));
        var J = t({}, U[G], k);
        for (var q in J) {
          var z = k[q];
          if (r(k, q) && typeof z != "function")
            return I(H, Z, X, q, $(z));
          if (!z)
            return new f(
              "Invalid " + Z + " `" + X + "` key `" + q + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(U[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var B = z(re, q, H, Z, X + "." + q, n);
          if (B)
            return B;
        }
        return null;
      }
      return v(j);
    }
    function N(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(N);
          if (k === null || l(k))
            return !0;
          var j = p(k);
          if (j) {
            var U = j.call(k), G;
            if (j !== k.entries) {
              for (; !(G = U.next()).done; )
                if (!N(G.value))
                  return !1;
            } else
              for (; !(G = U.next()).done; ) {
                var H = G.value;
                if (H && !N(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(k, j) {
      return k === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function A(k) {
      var j = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : V(j, k) ? "symbol" : j;
    }
    function $(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var j = A(k);
      if (j === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function L(k) {
      var j = $(k);
      switch (j) {
        case "array":
        case "object":
          return "an " + j;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + j;
        default:
          return j;
      }
    }
    function Y(k) {
      return !k.constructor || !k.constructor.name ? h : k.constructor.name;
    }
    return b.checkPropTypes = s, b.resetWarningCache = s.resetWarningCache, b.PropTypes = b, b;
  }, da;
}
var fa, Jc;
function Cy() {
  if (Jc) return fa;
  Jc = 1;
  var e = /* @__PURE__ */ al();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, fa = function() {
    function r(a, l, c, u, d, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, fa;
}
var eu;
function Ey() {
  if (eu) return bs.exports;
  if (eu = 1, process.env.NODE_ENV !== "production") {
    var e = sf(), t = !0;
    bs.exports = /* @__PURE__ */ Oy()(e.isElement, t);
  } else
    bs.exports = /* @__PURE__ */ Cy()();
  return bs.exports;
}
var Ty = /* @__PURE__ */ Ey();
const o = /* @__PURE__ */ rl(Ty);
function On(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ky = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" })), si = "$$material";
function Dy(e) {
  for (var t = 0, n, r = 0, s = e.length; s >= 4; ++r, s -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ry = {
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
};
function My(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var _y = /[A-Z]|^ms/g, Iy = /_EMO_([^_]+?)_([^]*?)_EMO_/g, lf = function(t) {
  return t.charCodeAt(1) === 45;
}, tu = function(t) {
  return t != null && typeof t != "boolean";
}, pa = /* @__PURE__ */ My(function(e) {
  return lf(e) ? e : e.replace(_y, "-$&").toLowerCase();
}), nu = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Iy, function(r, s, i) {
          return jn = {
            name: s,
            styles: i,
            next: jn
          }, s;
        });
  }
  return Ry[t] !== 1 && !lf(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ws(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var s = n;
      if (s.anim === 1)
        return jn = {
          name: s.name,
          styles: s.styles,
          next: jn
        }, s.name;
      var i = n;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            jn = {
              name: a.name,
              styles: a.styles,
              next: jn
            }, a = a.next;
        var l = i.styles + ";";
        return l;
      }
      return Ny(e, t, n);
    }
  }
  var c = n;
  return c;
}
function Ny(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++)
      r += Ws(e, t, n[s]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        var l = a;
        tu(l) && (r += pa(i) + ":" + nu(i, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var c = 0; c < a.length; c++)
          tu(a[c]) && (r += pa(i) + ":" + nu(i, a[c]) + ";");
      else {
        var u = Ws(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += pa(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var ru = /label:\s*([^\s;{]+)\s*(;|$)/g, jn;
function $y(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, s = "";
  jn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, s += Ws(n, t, i);
  else {
    var a = i;
    s += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (s += Ws(n, t, e[l]), r) {
      var c = i;
      s += c[l];
    }
  ru.lastIndex = 0;
  for (var u = "", d; (d = ru.exec(s)) !== null; )
    u += "-" + d[1];
  var p = Dy(s) + u;
  return {
    name: p,
    styles: s,
    next: jn
  };
}
function Ay(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Fy(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var jy = /* @__PURE__ */ (function() {
  function e(n) {
    var r = this;
    this._insertTag = function(s) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(s, i), r.tags.push(s);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fy(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ay(s);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var s;
      return (s = r.parentNode) == null ? void 0 : s.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), xt = "-ms-", Ys = "-moz-", Ae = "-webkit-", cf = "comm", ll = "rule", cl = "decl", Vy = "@import", uf = "@keyframes", Ly = "@layer", By = Math.abs, ii = String.fromCharCode, Wy = Object.assign;
function Yy(e, t) {
  return bt(e, 0) ^ 45 ? (((t << 2 ^ bt(e, 0)) << 2 ^ bt(e, 1)) << 2 ^ bt(e, 2)) << 2 ^ bt(e, 3) : 0;
}
function df(e) {
  return e.trim();
}
function zy(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Fe(e, t, n) {
  return e.replace(t, n);
}
function Na(e, t) {
  return e.indexOf(t);
}
function bt(e, t) {
  return e.charCodeAt(t) | 0;
}
function No(e, t, n) {
  return e.slice(t, n);
}
function on(e) {
  return e.length;
}
function ul(e) {
  return e.length;
}
function xs(e, t) {
  return t.push(e), e;
}
function Uy(e, t) {
  return e.map(t).join("");
}
var ai = 1, Lr = 1, ff = 0, Dt = 0, ut = 0, Kr = "";
function li(e, t, n, r, s, i, a) {
  return { value: e, root: t, parent: n, type: r, props: s, children: i, line: ai, column: Lr, length: a, return: "" };
}
function io(e, t) {
  return Wy(li("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Hy() {
  return ut;
}
function qy() {
  return ut = Dt > 0 ? bt(Kr, --Dt) : 0, Lr--, ut === 10 && (Lr = 1, ai--), ut;
}
function _t() {
  return ut = Dt < ff ? bt(Kr, Dt++) : 0, Lr++, ut === 10 && (Lr = 1, ai++), ut;
}
function ln() {
  return bt(Kr, Dt);
}
function _s() {
  return Dt;
}
function Xo(e, t) {
  return No(Kr, e, t);
}
function $o(e) {
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
function pf(e) {
  return ai = Lr = 1, ff = on(Kr = e), Dt = 0, [];
}
function hf(e) {
  return Kr = "", e;
}
function Is(e) {
  return df(Xo(Dt - 1, $a(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gy(e) {
  for (; (ut = ln()) && ut < 33; )
    _t();
  return $o(e) > 2 || $o(ut) > 3 ? "" : " ";
}
function Ky(e, t) {
  for (; --t && _t() && !(ut < 48 || ut > 102 || ut > 57 && ut < 65 || ut > 70 && ut < 97); )
    ;
  return Xo(e, _s() + (t < 6 && ln() == 32 && _t() == 32));
}
function $a(e) {
  for (; _t(); )
    switch (ut) {
      // ] ) " '
      case e:
        return Dt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && $a(ut);
        break;
      // (
      case 40:
        e === 41 && $a(e);
        break;
      // \
      case 92:
        _t();
        break;
    }
  return Dt;
}
function Zy(e, t) {
  for (; _t() && e + ut !== 57; )
    if (e + ut === 84 && ln() === 47)
      break;
  return "/*" + Xo(t, Dt - 1) + "*" + ii(e === 47 ? e : _t());
}
function Xy(e) {
  for (; !$o(ln()); )
    _t();
  return Xo(e, Dt);
}
function Qy(e) {
  return hf(Ns("", null, null, null, [""], e = pf(e), 0, [0], e));
}
function Ns(e, t, n, r, s, i, a, l, c) {
  for (var u = 0, d = 0, p = a, h = 0, b = 0, g = 0, f = 1, v = 1, C = 1, T = 0, S = "", w = s, O = i, R = r, P = S; v; )
    switch (g = T, T = _t()) {
      // (
      case 40:
        if (g != 108 && bt(P, p - 1) == 58) {
          Na(P += Fe(Is(T), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        P += Is(T);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        P += Gy(g);
        break;
      // \
      case 92:
        P += Ky(_s() - 1, 7);
        continue;
      // /
      case 47:
        switch (ln()) {
          case 42:
          case 47:
            xs(Jy(Zy(_t(), _s()), t, n), c);
            break;
          default:
            P += "/";
        }
        break;
      // {
      case 123 * f:
        l[u++] = on(P) * C;
      // } ; \0
      case 125 * f:
      case 59:
      case 0:
        switch (T) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + d:
            C == -1 && (P = Fe(P, /\f/g, "")), b > 0 && on(P) - p && xs(b > 32 ? su(P + ";", r, n, p - 1) : su(Fe(P, " ", "") + ";", r, n, p - 2), c);
            break;
          // @ ;
          case 59:
            P += ";";
          // { rule/at-rule
          default:
            if (xs(R = ou(P, t, n, u, d, s, l, S, w = [], O = [], p), i), T === 123)
              if (d === 0)
                Ns(P, t, R, R, w, i, p, l, O);
              else
                switch (h === 99 && bt(P, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ns(e, R, R, r && xs(ou(e, R, R, 0, 0, s, l, S, s, w = [], p), O), s, O, p, l, r ? w : O);
                    break;
                  default:
                    Ns(P, R, R, R, [""], O, 0, l, O);
                }
        }
        u = d = b = 0, f = C = 1, S = P = "", p = a;
        break;
      // :
      case 58:
        p = 1 + on(P), b = g;
      default:
        if (f < 1) {
          if (T == 123)
            --f;
          else if (T == 125 && f++ == 0 && qy() == 125)
            continue;
        }
        switch (P += ii(T), T * f) {
          // &
          case 38:
            C = d > 0 ? 1 : (P += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = (on(P) - 1) * C, C = 1;
            break;
          // @
          case 64:
            ln() === 45 && (P += Is(_t())), h = ln(), d = p = on(S = P += Xy(_s())), T++;
            break;
          // -
          case 45:
            g === 45 && on(P) == 2 && (f = 0);
        }
    }
  return i;
}
function ou(e, t, n, r, s, i, a, l, c, u, d) {
  for (var p = s - 1, h = s === 0 ? i : [""], b = ul(h), g = 0, f = 0, v = 0; g < r; ++g)
    for (var C = 0, T = No(e, p + 1, p = By(f = a[g])), S = e; C < b; ++C)
      (S = df(f > 0 ? h[C] + " " + T : Fe(T, /&\f/g, h[C]))) && (c[v++] = S);
  return li(e, t, n, s === 0 ? ll : l, c, u, d);
}
function Jy(e, t, n) {
  return li(e, t, n, cf, ii(Hy()), No(e, 2, -2), 0);
}
function su(e, t, n, r) {
  return li(e, t, n, cl, No(e, 0, r), No(e, r + 1, -1), r);
}
function Rr(e, t) {
  for (var n = "", r = ul(e), s = 0; s < r; s++)
    n += t(e[s], s, e, t) || "";
  return n;
}
function eg(e, t, n, r) {
  switch (e.type) {
    case Ly:
      if (e.children.length) break;
    case Vy:
    case cl:
      return e.return = e.return || e.value;
    case cf:
      return "";
    case uf:
      return e.return = e.value + "{" + Rr(e.children, r) + "}";
    case ll:
      e.value = e.props.join(",");
  }
  return on(n = Rr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function tg(e) {
  var t = ul(e);
  return function(n, r, s, i) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, s, i) || "";
    return a;
  };
}
function ng(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var rg = function(t, n, r) {
  for (var s = 0, i = 0; s = i, i = ln(), s === 38 && i === 12 && (n[r] = 1), !$o(i); )
    _t();
  return Xo(t, Dt);
}, og = function(t, n) {
  var r = -1, s = 44;
  do
    switch ($o(s)) {
      case 0:
        s === 38 && ln() === 12 && (n[r] = 1), t[r] += rg(Dt - 1, n, r);
        break;
      case 2:
        t[r] += Is(s);
        break;
      case 4:
        if (s === 44) {
          t[++r] = ln() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += ii(s);
    }
  while (s = _t());
  return t;
}, sg = function(t, n) {
  return hf(og(pf(t), n));
}, iu = /* @__PURE__ */ new WeakMap(), ig = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, s = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !iu.get(r)) && !s) {
      iu.set(t, !0);
      for (var i = [], a = sg(n, i), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, ag = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function mf(e, t) {
  switch (Yy(e, t)) {
    // color-adjust
    case 5103:
      return Ae + "print-" + e + e;
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
      return Ae + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ae + e + Ys + e + xt + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Ae + e + xt + e + e;
    // order
    case 6165:
      return Ae + e + xt + "flex-" + e + e;
    // align-items
    case 5187:
      return Ae + e + Fe(e, /(\w+).+(:[^]+)/, Ae + "box-$1$2" + xt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Ae + e + xt + "flex-item-" + Fe(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Ae + e + xt + "flex-line-pack" + Fe(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Ae + e + xt + Fe(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Ae + e + xt + Fe(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Ae + "box-" + Fe(e, "-grow", "") + Ae + e + xt + Fe(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Ae + Fe(e, /([^-])(transform)/g, "$1" + Ae + "$2") + e;
    // cursor
    case 6187:
      return Fe(Fe(Fe(e, /(zoom-|grab)/, Ae + "$1"), /(image-set)/, Ae + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Fe(e, /(image-set\([^]*)/, Ae + "$1$`$1");
    // justify-content
    case 4968:
      return Fe(Fe(e, /(.+:)(flex-)?(.*)/, Ae + "box-pack:$3" + xt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ae + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Fe(e, /(.+)-inline(.+)/, Ae + "$1$2") + e;
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
      if (on(e) - 1 - t > 6) switch (bt(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (bt(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Fe(e, /(.+:)(.+)-([^]+)/, "$1" + Ae + "$2-$3$1" + Ys + (bt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Na(e, "stretch") ? mf(Fe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (bt(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (bt(e, on(e) - 3 - (~Na(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Fe(e, ":", ":" + Ae) + e;
        // (inline-)?fl(e)x
        case 101:
          return Fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ae + (bt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ae + "$2$3$1" + xt + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (bt(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Ae + e + xt + Fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Ae + e + xt + Fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Ae + e + xt + Fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ae + e + xt + e + e;
  }
  return e;
}
var lg = function(t, n, r, s) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case cl:
      t.return = mf(t.value, t.length);
      break;
    case uf:
      return Rr([io(t, {
        value: Fe(t.value, "@", "@" + Ae)
      })], s);
    case ll:
      if (t.length) return Uy(t.props, function(i) {
        switch (zy(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Rr([io(t, {
              props: [Fe(i, /:(read-\w+)/, ":" + Ys + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return Rr([io(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + Ae + "input-$1")]
            }), io(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + Ys + "$1")]
            }), io(t, {
              props: [Fe(i, /:(plac\w+)/, xt + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, cg = [lg], ug = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var v = f.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var s = t.stylisPlugins || cg, i = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var v = f.getAttribute("data-emotion").split(" "), C = 1; C < v.length; C++)
        i[v[C]] = !0;
      l.push(f);
    }
  );
  var c, u = [ig, ag];
  {
    var d, p = [eg, ng(function(f) {
      d.insert(f);
    })], h = tg(u.concat(s, p)), b = function(v) {
      return Rr(Qy(v), h);
    };
    c = function(v, C, T, S) {
      d = T, b(v ? v + "{" + C.styles + "}" : C.styles), S && (g.inserted[C.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new jy({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return g.sheet.hydrate(l), g;
};
function dg(e, t) {
  const n = ug({
    key: "css",
    prepend: e
  });
  if (t) {
    const r = n.insert;
    n.insert = (...s) => (s[1].styles.match(/^@layer\s+[^{]*$/) || (s[1].styles = `@layer mui {${s[1].styles}}`), r(...s));
  }
  return n;
}
const ha = /* @__PURE__ */ new Map();
function yf(e) {
  const {
    injectFirst: t,
    enableCssLayer: n,
    children: r
  } = e, s = m.useMemo(() => {
    const i = `${t}-${n}`;
    if (typeof document == "object" && ha.has(i))
      return ha.get(i);
    const a = dg(t, n);
    return ha.set(i, a), a;
  }, [t, n]);
  return t || n ? /* @__PURE__ */ x.jsx(Im, {
    value: s,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (yf.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: o.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: o.bool
});
function fg(e) {
  return e == null || Object.keys(e).length === 0;
}
function dl(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (s) => t(fg(s) ? n : s) : t;
  return /* @__PURE__ */ x.jsx(Nm, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (dl.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function pg(e, t) {
  const n = Am(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const s = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const hg = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, au = [];
function gf(e) {
  return au[0] = e, $y(au);
}
const mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: dl,
  StyledEngineProvider: yf,
  ThemeContext: Gd,
  css: $m,
  default: pg,
  internal_processStyles: hg,
  internal_serializeStyles: gf,
  keyframes: oi
}, Symbol.toStringTag, { value: "Module" }));
function An(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function bf(e) {
  if (/* @__PURE__ */ m.isValidElement(e) || !An(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = bf(e[n]);
  }), t;
}
function It(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? y({}, e) : e;
  return An(e) && An(t) && Object.keys(t).forEach((s) => {
    /* @__PURE__ */ m.isValidElement(t[s]) ? r[s] = t[s] : An(t[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && An(e[s]) ? r[s] = It(e[s], t[s], n) : n.clone ? r[s] = An(t[s]) ? bf(t[s]) : t[s] : r[s] = t[s];
  }), r;
}
const yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: It,
  isPlainObject: An
}, Symbol.toStringTag, { value: "Module" })), gg = ["values", "unit", "step"], bg = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => y({}, n, {
    [r.key]: r.val
  }), {});
};
function vf(e) {
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
    unit: n = "px",
    step: r = 5
  } = e, s = te(e, gg), i = bg(t), a = Object.keys(i);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, b) {
    const g = a.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : b) - r / 100}${n})`;
  }
  function d(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : l(h);
  }
  function p(h) {
    const b = a.indexOf(h);
    return b === 0 ? l(a[1]) : b === a.length - 1 ? c(a[b]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return y({
    keys: a,
    values: i,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: n
  }, s);
}
const vg = {
  borderRadius: 4
}, Yn = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function Oo(e, t) {
  return t ? It(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const fl = {
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
}, lu = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${fl[e]}px)`
};
function Cn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || lu;
    return t.reduce((a, l, c) => (a[i.up(i.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || lu;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(i.values || fl).indexOf(l) !== -1) {
        const c = i.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function xg(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, s) => {
    const i = e.up(s);
    return r[i] = {}, r;
  }, {})) || {};
}
function cu(e, t) {
  return e.reduce((n, r) => {
    const s = n[r];
    return (!s || Object.keys(s).length === 0) && delete n[r], n;
  }, t);
}
function le(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : On(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" }));
function ci(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((s, i) => s && s[i] ? s[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, s) => r && r[s] != null ? r[s] : null, e);
}
function zs(e, t, n, r = n) {
  let s;
  return typeof e == "function" ? s = e(n) : Array.isArray(e) ? s = e[n] || r : s = ci(e, n) || r, t && (s = t(s, r, e)), s;
}
function lt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: s
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = ci(c, r) || {};
    return Cn(a, l, (p) => {
      let h = zs(u, s, p);
      return p === h && typeof p == "string" && (h = zs(u, s, `${t}${p === "default" ? "" : le(p)}`, p)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Yn
  } : {}, i.filterProps = [t], i;
}
function wg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Pg = {
  m: "margin",
  p: "padding"
}, Og = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, uu = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Cg = wg((e) => {
  if (e.length > 2)
    if (uu[e])
      e = uu[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Pg[t], s = Og[n] || "";
  return Array.isArray(s) ? s.map((i) => r + i) : [r + s];
}), ui = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], di = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Eg = [...ui, ...di];
function Qo(e, t, n, r) {
  var s;
  const i = (s = ci(e, t, !1)) != null ? s : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function xf(e) {
  return Qo(e, "spacing", 8, "spacing");
}
function Jo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Tg(e, t) {
  return (n) => e.reduce((r, s) => (r[s] = Jo(t, n), r), {});
}
function kg(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const s = Cg(n), i = Tg(s, r), a = e[n];
  return Cn(e, a, i);
}
function Sf(e, t) {
  const n = xf(e.theme);
  return Object.keys(e).map((r) => kg(e, t, r, n)).reduce(Oo, {});
}
function ot(e) {
  return Sf(e, ui);
}
ot.propTypes = process.env.NODE_ENV !== "production" ? ui.reduce((e, t) => (e[t] = Yn, e), {}) : {};
ot.filterProps = ui;
function st(e) {
  return Sf(e, di);
}
st.propTypes = process.env.NODE_ENV !== "production" ? di.reduce((e, t) => (e[t] = Yn, e), {}) : {};
st.filterProps = di;
process.env.NODE_ENV !== "production" && Eg.reduce((e, t) => (e[t] = Yn, e), {});
function Dg(e = 8) {
  if (e.mui)
    return e;
  const t = xf({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function fi(...e) {
  const t = e.reduce((r, s) => (s.filterProps.forEach((i) => {
    r[i] = s;
  }), r), {}), n = (r) => Object.keys(r).reduce((s, i) => t[i] ? Oo(s, t[i](r)) : s, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, s) => Object.assign(r, s.propTypes), {}) : {}, n.filterProps = e.reduce((r, s) => r.concat(s.filterProps), []), n;
}
function jt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Yt(e, t) {
  return lt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Rg = Yt("border", jt), Mg = Yt("borderTop", jt), _g = Yt("borderRight", jt), Ig = Yt("borderBottom", jt), Ng = Yt("borderLeft", jt), $g = Yt("borderColor"), Ag = Yt("borderTopColor"), Fg = Yt("borderRightColor"), jg = Yt("borderBottomColor"), Vg = Yt("borderLeftColor"), Lg = Yt("outline", jt), Bg = Yt("outlineColor"), pi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Qo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Jo(t, r)
    });
    return Cn(e, e.borderRadius, n);
  }
  return null;
};
pi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Yn
} : {};
pi.filterProps = ["borderRadius"];
fi(Rg, Mg, _g, Ig, Ng, $g, Ag, Fg, jg, Vg, pi, Lg, Bg);
const hi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Qo(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Jo(t, r)
    });
    return Cn(e, e.gap, n);
  }
  return null;
};
hi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Yn
} : {};
hi.filterProps = ["gap"];
const mi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Qo(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Jo(t, r)
    });
    return Cn(e, e.columnGap, n);
  }
  return null;
};
mi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Yn
} : {};
mi.filterProps = ["columnGap"];
const yi = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Qo(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Jo(t, r)
    });
    return Cn(e, e.rowGap, n);
  }
  return null;
};
yi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Yn
} : {};
yi.filterProps = ["rowGap"];
const Wg = lt({
  prop: "gridColumn"
}), Yg = lt({
  prop: "gridRow"
}), zg = lt({
  prop: "gridAutoFlow"
}), Ug = lt({
  prop: "gridAutoColumns"
}), Hg = lt({
  prop: "gridAutoRows"
}), qg = lt({
  prop: "gridTemplateColumns"
}), Gg = lt({
  prop: "gridTemplateRows"
}), Kg = lt({
  prop: "gridTemplateAreas"
}), Zg = lt({
  prop: "gridArea"
});
fi(hi, mi, yi, Wg, Yg, zg, Ug, Hg, qg, Gg, Kg, Zg);
function Mr(e, t) {
  return t === "grey" ? t : e;
}
const Xg = lt({
  prop: "color",
  themeKey: "palette",
  transform: Mr
}), Qg = lt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Mr
}), Jg = lt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Mr
});
fi(Xg, Qg, Jg);
function Mt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const eb = lt({
  prop: "width",
  transform: Mt
}), pl = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, s;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || fl[n];
      return i ? ((s = e.theme) == null || (s = s.breakpoints) == null ? void 0 : s.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Mt(n)
      };
    };
    return Cn(e, e.maxWidth, t);
  }
  return null;
};
pl.filterProps = ["maxWidth"];
const tb = lt({
  prop: "minWidth",
  transform: Mt
}), nb = lt({
  prop: "height",
  transform: Mt
}), rb = lt({
  prop: "maxHeight",
  transform: Mt
}), ob = lt({
  prop: "minHeight",
  transform: Mt
});
lt({
  prop: "size",
  cssProperty: "width",
  transform: Mt
});
lt({
  prop: "size",
  cssProperty: "height",
  transform: Mt
});
const sb = lt({
  prop: "boxSizing"
});
fi(eb, pl, tb, nb, rb, ob, sb);
const es = {
  // borders
  border: {
    themeKey: "borders",
    transform: jt
  },
  borderTop: {
    themeKey: "borders",
    transform: jt
  },
  borderRight: {
    themeKey: "borders",
    transform: jt
  },
  borderBottom: {
    themeKey: "borders",
    transform: jt
  },
  borderLeft: {
    themeKey: "borders",
    transform: jt
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
    transform: jt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: pi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Mr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Mr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Mr
  },
  // spacing
  p: {
    style: st
  },
  pt: {
    style: st
  },
  pr: {
    style: st
  },
  pb: {
    style: st
  },
  pl: {
    style: st
  },
  px: {
    style: st
  },
  py: {
    style: st
  },
  padding: {
    style: st
  },
  paddingTop: {
    style: st
  },
  paddingRight: {
    style: st
  },
  paddingBottom: {
    style: st
  },
  paddingLeft: {
    style: st
  },
  paddingX: {
    style: st
  },
  paddingY: {
    style: st
  },
  paddingInline: {
    style: st
  },
  paddingInlineStart: {
    style: st
  },
  paddingInlineEnd: {
    style: st
  },
  paddingBlock: {
    style: st
  },
  paddingBlockStart: {
    style: st
  },
  paddingBlockEnd: {
    style: st
  },
  m: {
    style: ot
  },
  mt: {
    style: ot
  },
  mr: {
    style: ot
  },
  mb: {
    style: ot
  },
  ml: {
    style: ot
  },
  mx: {
    style: ot
  },
  my: {
    style: ot
  },
  margin: {
    style: ot
  },
  marginTop: {
    style: ot
  },
  marginRight: {
    style: ot
  },
  marginBottom: {
    style: ot
  },
  marginLeft: {
    style: ot
  },
  marginX: {
    style: ot
  },
  marginY: {
    style: ot
  },
  marginInline: {
    style: ot
  },
  marginInlineStart: {
    style: ot
  },
  marginInlineEnd: {
    style: ot
  },
  marginBlock: {
    style: ot
  },
  marginBlockStart: {
    style: ot
  },
  marginBlockEnd: {
    style: ot
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
    style: hi
  },
  rowGap: {
    style: yi
  },
  columnGap: {
    style: mi
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
    transform: Mt
  },
  maxWidth: {
    style: pl
  },
  minWidth: {
    transform: Mt
  },
  height: {
    transform: Mt
  },
  maxHeight: {
    transform: Mt
  },
  minHeight: {
    transform: Mt
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
function ib(...e) {
  const t = e.reduce((r, s) => r.concat(Object.keys(s)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ab(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wf() {
  function e(n, r, s, i) {
    const a = {
      [n]: r,
      theme: s
    }, l = i[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: p
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = ci(s, u) || {};
    return p ? p(a) : Cn(a, r, (g) => {
      let f = zs(h, d, g);
      return g === f && typeof g == "string" && (f = zs(h, d, `${n}${g === "default" ? "" : le(g)}`, g)), c === !1 ? f : {
        [c]: f
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: s,
      theme: i = {},
      nested: a
    } = n || {};
    if (!s)
      return null;
    const l = (r = i.unstable_sxConfig) != null ? r : es;
    function c(u) {
      let d = u;
      if (typeof u == "function")
        d = u(i);
      else if (typeof u != "object")
        return u;
      if (!d)
        return null;
      const p = xg(i.breakpoints), h = Object.keys(p);
      let b = p;
      return Object.keys(d).forEach((g) => {
        const f = ab(d[g], i);
        if (f != null)
          if (typeof f == "object")
            if (l[g])
              b = Oo(b, e(g, f, i, l));
            else {
              const v = Cn({
                theme: i
              }, f, (C) => ({
                [g]: C
              }));
              ib(v, f) ? b[g] = t({
                sx: f,
                theme: i,
                nested: !0
              }) : b = Oo(b, v);
            }
          else
            b = Oo(b, e(g, f, i, l));
      }), !a && i.modularCssLayers ? {
        "@layer sx": cu(h, b)
      } : cu(h, b);
    }
    return Array.isArray(s) ? s.map(c) : c(s);
  }
  return t;
}
const gi = wf();
gi.filterProps = ["sx"];
function Pf(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const lb = ["breakpoints", "palette", "spacing", "shape"];
function bi(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: s,
    shape: i = {}
  } = e, a = te(e, lb), l = vf(n), c = Dg(s);
  let u = It({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: y({
      mode: "light"
    }, r),
    spacing: c,
    shape: y({}, vg, i)
  }, a);
  return u.applyStyles = Pf, u = t.reduce((d, p) => It(d, p), u), u.unstable_sxConfig = y({}, es, a?.unstable_sxConfig), u.unstable_sx = function(p) {
    return gi({
      sx: p,
      theme: this
    });
  }, u;
}
const cb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bi,
  private_createBreakpoints: vf,
  unstable_applyStyles: Pf
}, Symbol.toStringTag, { value: "Module" }));
function ub(e) {
  return Object.keys(e).length === 0;
}
function Of(e = null) {
  const t = m.useContext(Gd);
  return !t || ub(t) ? e : t;
}
const db = bi();
function hl(e = db) {
  return Of(e);
}
function ma(e) {
  const t = gf(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Cf({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = hl(n), s = t && r[t] || r;
  let i = typeof e == "function" ? e(s) : e;
  return s.modularCssLayers && (Array.isArray(i) ? i = i.map((a) => ma(typeof a == "function" ? a(s) : a)) : i = ma(i)), /* @__PURE__ */ x.jsx(dl, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Cf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const fb = ["sx"], pb = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, s = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : es;
  return Object.keys(e).forEach((i) => {
    s[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Ef(e) {
  const {
    sx: t
  } = e, n = te(e, fb), {
    systemProps: r,
    otherProps: s
  } = pb(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const l = t(...a);
    return An(l) ? y({}, r, l) : r;
  } : i = y({}, r, t), y({}, s, {
    sx: i
  });
}
const hb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gi,
  extendSxProp: Ef,
  unstable_createStyleFunctionSx: wf,
  unstable_defaultSxConfig: es
}, Symbol.toStringTag, { value: "Module" })), du = (e) => e, mb = () => {
  let e = du;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = du;
    }
  };
}, yb = mb(), gb = {
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
function Ne(e, t, n = "Mui") {
  const r = gb[t];
  return r ? `${n}-${r}` : `${yb.generate(e)}-${t}`;
}
function Me(e, t, n = "Mui") {
  const r = {};
  return t.forEach((s) => {
    r[s] = Ne(e, s, n);
  }), r;
}
var Ss = { exports: {} }, Ue = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fu;
function bb() {
  if (fu) return Ue;
  fu = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
  function g(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case e:
          switch (f = f.type, f) {
            case n:
            case s:
            case r:
            case c:
            case u:
            case h:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case l:
                case p:
                case d:
                  return f;
                case i:
                  return f;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Ue.ContextConsumer = i, Ue.ContextProvider = a, Ue.Element = e, Ue.ForwardRef = l, Ue.Fragment = n, Ue.Lazy = p, Ue.Memo = d, Ue.Portal = t, Ue.Profiler = s, Ue.StrictMode = r, Ue.Suspense = c, Ue.SuspenseList = u, Ue.isContextConsumer = function(f) {
    return g(f) === i;
  }, Ue.isContextProvider = function(f) {
    return g(f) === a;
  }, Ue.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Ue.isForwardRef = function(f) {
    return g(f) === l;
  }, Ue.isFragment = function(f) {
    return g(f) === n;
  }, Ue.isLazy = function(f) {
    return g(f) === p;
  }, Ue.isMemo = function(f) {
    return g(f) === d;
  }, Ue.isPortal = function(f) {
    return g(f) === t;
  }, Ue.isProfiler = function(f) {
    return g(f) === s;
  }, Ue.isStrictMode = function(f) {
    return g(f) === r;
  }, Ue.isSuspense = function(f) {
    return g(f) === c;
  }, Ue.isSuspenseList = function(f) {
    return g(f) === u;
  }, Ue.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === s || f === r || f === c || f === u || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === a || f.$$typeof === i || f.$$typeof === l || f.$$typeof === b || f.getModuleId !== void 0);
  }, Ue.typeOf = g, Ue;
}
var He = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pu;
function vb() {
  return pu || (pu = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var v = f.$$typeof;
        switch (v) {
          case t:
            switch (f = f.type, f) {
              case r:
              case i:
              case s:
              case u:
              case d:
              case b:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case l:
                  case c:
                  case h:
                  case p:
                    return f;
                  case a:
                    return f;
                  default:
                    return v;
                }
            }
          case n:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    He.ContextConsumer = a, He.ContextProvider = l, He.Element = t, He.ForwardRef = c, He.Fragment = r, He.Lazy = h, He.Memo = p, He.Portal = n, He.Profiler = i, He.StrictMode = s, He.Suspense = u, He.SuspenseList = d, He.isContextConsumer = function(f) {
      return e(f) === a;
    }, He.isContextProvider = function(f) {
      return e(f) === l;
    }, He.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, He.isForwardRef = function(f) {
      return e(f) === c;
    }, He.isFragment = function(f) {
      return e(f) === r;
    }, He.isLazy = function(f) {
      return e(f) === h;
    }, He.isMemo = function(f) {
      return e(f) === p;
    }, He.isPortal = function(f) {
      return e(f) === n;
    }, He.isProfiler = function(f) {
      return e(f) === i;
    }, He.isStrictMode = function(f) {
      return e(f) === s;
    }, He.isSuspense = function(f) {
      return e(f) === u;
    }, He.isSuspenseList = function(f) {
      return e(f) === d;
    }, He.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === r || f === i || f === s || f === u || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === l || f.$$typeof === a || f.$$typeof === c || f.$$typeof === g || f.getModuleId !== void 0);
    }, He.typeOf = e;
  })()), He;
}
var hu;
function xb() {
  return hu || (hu = 1, process.env.NODE_ENV === "production" ? Ss.exports = /* @__PURE__ */ bb() : Ss.exports = /* @__PURE__ */ vb()), Ss.exports;
}
var Ao = /* @__PURE__ */ xb();
const Sb = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Tf(e) {
  const t = `${e}`.match(Sb);
  return t && t[1] || "";
}
function kf(e, t = "") {
  return e.displayName || e.name || Tf(e) || t;
}
function mu(e, t, n) {
  const r = kf(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function wb(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return kf(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ao.ForwardRef:
          return mu(e, e.render, "ForwardRef");
        case Ao.Memo:
          return mu(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Pb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wb,
  getFunctionName: Tf
}, Symbol.toStringTag, { value: "Module" }));
function Df(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
bi();
function Fo(e, t) {
  const n = y({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = y({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const s = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = s : !s || !Object.keys(s) ? n[r] = i : (n[r] = y({}, i), Object.keys(s).forEach((a) => {
        n[r][a] = Fo(s[a], i[a]);
      }));
    } else n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Rf(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Fo(t.components[n].defaultProps, r);
}
function Ob({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let s = hl(n);
  return s = s[r] || s, Rf({
    theme: s,
    name: t,
    props: e
  });
}
const Xt = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function Cb(e, t, n, r, s) {
  const [i, a] = m.useState(() => s && n ? n(e).matches : r ? r(e).matches : t);
  return Xt(() => {
    let l = !0;
    if (!n)
      return;
    const c = n(e), u = () => {
      l && a(c.matches);
    };
    return u(), c.addListener(u), () => {
      l = !1, c.removeListener(u);
    };
  }, [e, n]), i;
}
const Mf = m.useSyncExternalStore;
function Eb(e, t, n, r, s) {
  const i = m.useCallback(() => t, [t]), a = m.useMemo(() => {
    if (s && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: d
      } = r(e);
      return () => d;
    }
    return i;
  }, [i, e, r, s, n]), [l, c] = m.useMemo(() => {
    if (n === null)
      return [i, () => () => {
      }];
    const d = n(e);
    return [() => d.matches, (p) => (d.addListener(p), () => {
      d.removeListener(p);
    })];
  }, [i, n, e]);
  return Mf(c, l, a);
}
function _f(e, t = {}) {
  const n = Of(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: s = !1,
    matchMedia: i = r ? window.matchMedia : null,
    ssrMatchMedia: a = null,
    noSsr: l = !1
  } = Rf({
    name: "MuiUseMediaQuery",
    props: t,
    theme: n
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && n === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(n) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (Mf !== void 0 ? Eb : Cb)(c, s, i, a, l);
  return process.env.NODE_ENV !== "production" && m.useDebugValue({
    query: c,
    match: d
  }), d;
}
function If(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const Tb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: If
}, Symbol.toStringTag, { value: "Module" }));
function kb(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), If(e, t, n);
}
function Db(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, s) => s < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Nf(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Nf(Db(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : On(9, e));
  let r = e.substring(t + 1, e.length - 1), s;
  if (n === "color") {
    if (r = r.split(" "), s = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : On(10, s));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: s
  };
}
function Rb(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((s, i) => i < 3 ? parseInt(s, 10) : s) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Br(e, t) {
  return e = Nf(e), t = kb(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Rb(e);
}
function zn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Mb(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function $f(e, t, n, r, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !Mb(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ts = zn(o.element, $f);
ts.isRequired = zn(o.element.isRequired, $f);
function _b(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ib(e, t, n, r, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !_b(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const vi = zn(o.elementType, Ib), Nb = "exact-prop: ​";
function Af(e) {
  return process.env.NODE_ENV === "production" ? e : y({}, e, {
    [Nb]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function En(e, t, n, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = s || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const en = o.oneOfType([o.func, o.object]);
function yu(...e) {
  return e.reduce((t, n) => n == null ? t : function(...s) {
    t.apply(this, s), n.apply(this, s);
  }, () => {
  });
}
function Ff(e, t = 166) {
  let n;
  function r(...s) {
    const i = () => {
      e.apply(this, s);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Co(e, t) {
  var n, r;
  return /* @__PURE__ */ m.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Ot(e) {
  return e && e.ownerDocument || document;
}
function cr(e) {
  return Ot(e).defaultView || window;
}
function Aa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let gu = 0;
function $b(e) {
  const [t, n] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (gu += 1, n(`mui-${gu}`));
  }, [t]), r;
}
const bu = m.useId;
function ml(e) {
  if (bu !== void 0) {
    const t = bu();
    return e ?? t;
  }
  return $b(e);
}
function Ab(e, t, n, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = s || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function vu({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: s
  } = m.useRef(e !== void 0), [i, a] = m.useState(t), l = s ? e : i;
  if (process.env.NODE_ENV !== "production") {
    m.useEffect(() => {
      s !== (e !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${r} state of ${n} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = m.useRef(t);
    m.useEffect(() => {
      !s && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = m.useCallback((u) => {
    s || a(u);
  }, []);
  return [l, c];
}
function nr(e) {
  const t = m.useRef(e);
  return Xt(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function yt(...e) {
  return m.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Aa(n, t);
    });
  }, e);
}
const xu = {};
function Fb(e, t) {
  const n = m.useRef(xu);
  return n.current === xu && (n.current = e(t)), n;
}
const jb = [];
function Vb(e) {
  m.useEffect(e, jb);
}
let jf = class Vf {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Vf();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
};
function Lf() {
  const e = Fb(jf.create).current;
  return Vb(e.disposeEffect), e;
}
let xi = !0, Fa = !1;
const Lb = new jf(), Bb = {
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
function Wb(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Bb[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Yb(e) {
  e.metaKey || e.altKey || e.ctrlKey || (xi = !0);
}
function ya() {
  xi = !1;
}
function zb() {
  this.visibilityState === "hidden" && Fa && (xi = !0);
}
function Ub(e) {
  e.addEventListener("keydown", Yb, !0), e.addEventListener("mousedown", ya, !0), e.addEventListener("pointerdown", ya, !0), e.addEventListener("touchstart", ya, !0), e.addEventListener("visibilitychange", zb, !0);
}
function Hb(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return xi || Wb(t);
}
function qb() {
  const e = m.useCallback((s) => {
    s != null && Ub(s.ownerDocument);
  }, []), t = m.useRef(!1);
  function n() {
    return t.current ? (Fa = !0, Lb.start(100, () => {
      Fa = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(s) {
    return Hb(s) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Bf(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Gb(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Kb(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Zb = Number.isInteger || Kb;
function Wf(e, t, n, r) {
  const s = e[t];
  if (s == null || !Zb(s)) {
    const i = Gb(s);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Yf(e, t, ...n) {
  return e[t] === void 0 ? null : Wf(e, t, ...n);
}
function ja() {
  return null;
}
Yf.isRequired = Wf;
ja.isRequired = ja;
const zf = process.env.NODE_ENV === "production" ? ja : Yf;
function Be(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (s) => {
      r[s] = e[s].reduce((i, a) => {
        if (a) {
          const l = t(a);
          l !== "" && i.push(l), n && n[a] && i.push(n[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
function Wr(e) {
  return typeof e == "string";
}
function Xb(e, t, n) {
  return e === void 0 || Wr(e) ? t : y({}, t, {
    ownerState: y({}, t.ownerState, n)
  });
}
function Uf(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Su(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Qb(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!t) {
    const b = fe(n?.className, i, s?.className, r?.className), g = y({}, n?.style, s?.style, r?.style), f = y({}, n, s, r);
    return b.length > 0 && (f.className = b), Object.keys(g).length > 0 && (f.style = g), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Uf(y({}, s, r)), l = Su(r), c = Su(s), u = t(a), d = fe(u?.className, n?.className, i, s?.className, r?.className), p = y({}, u?.style, n?.style, s?.style, r?.style), h = y({}, u, n, c, l);
  return d.length > 0 && (h.className = d), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: u.ref
  };
}
function Jb(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const ev = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ur(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: s,
    skipResolvingSlotProps: i = !1
  } = e, a = te(e, ev), l = i ? {} : Jb(r, s), {
    props: c,
    internalRef: u
  } = Qb(y({}, a, {
    externalSlotProps: l
  })), d = yt(u, l?.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Xb(n, y({}, c, {
    ref: d
  }), s);
}
function ns(e) {
  if (parseInt(m.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return e?.ref || null;
}
const tv = /* @__PURE__ */ m.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const hn = () => {
  const e = m.useContext(tv);
  return e ?? !1;
}, nv = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function rv(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const s = t.components[n];
  return s.defaultProps ? Fo(s.defaultProps, r) : !s.styleOverrides && !s.variants ? Fo(s, r) : r;
}
function ov({
  props: e,
  name: t
}) {
  const n = m.useContext(nv);
  return rv({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function sv(e, t) {
  return y({
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
var tt = {}, ga = { exports: {} }, wu;
function Hf() {
  return wu || (wu = 1, (function(e) {
    function t(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(ga)), ga.exports;
}
const iv = /* @__PURE__ */ Wn(ky), av = /* @__PURE__ */ Wn(Tb);
var Pu;
function lv() {
  if (Pu) return tt;
  Pu = 1;
  var e = Hf();
  Object.defineProperty(tt, "__esModule", {
    value: !0
  }), tt.alpha = g, tt.blend = R, tt.colorChannel = void 0, tt.darken = v, tt.decomposeColor = a, tt.emphasize = w, tt.getContrastRatio = b, tt.getLuminance = h, tt.hexToRgb = s, tt.hslToRgb = p, tt.lighten = T, tt.private_safeAlpha = f, tt.private_safeColorChannel = void 0, tt.private_safeDarken = C, tt.private_safeEmphasize = O, tt.private_safeLighten = S, tt.recomposeColor = u, tt.rgbToHex = d;
  var t = e(iv), n = e(av);
  function r(P, E = 0, D = 1) {
    return process.env.NODE_ENV !== "production" && (P < E || P > D) && console.error(`MUI: The value provided ${P} is out of range [${E}, ${D}].`), (0, n.default)(P, E, D);
  }
  function s(P) {
    P = P.slice(1);
    const E = new RegExp(`.{1,${P.length >= 6 ? 2 : 1}}`, "g");
    let D = P.match(E);
    return D && D[0].length === 1 && (D = D.map((_) => _ + _)), D ? `rgb${D.length === 4 ? "a" : ""}(${D.map((_, I) => I < 3 ? parseInt(_, 16) : Math.round(parseInt(_, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function i(P) {
    const E = P.toString(16);
    return E.length === 1 ? `0${E}` : E;
  }
  function a(P) {
    if (P.type)
      return P;
    if (P.charAt(0) === "#")
      return a(s(P));
    const E = P.indexOf("("), D = P.substring(0, E);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(D) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${P}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, t.default)(9, P));
    let _ = P.substring(E + 1, P.length - 1), I;
    if (D === "color") {
      if (_ = _.split(" "), I = _.shift(), _.length === 4 && _[3].charAt(0) === "/" && (_[3] = _[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(I) === -1)
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${I}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, t.default)(10, I));
    } else
      _ = _.split(",");
    return _ = _.map((M) => parseFloat(M)), {
      type: D,
      values: _,
      colorSpace: I
    };
  }
  const l = (P) => {
    const E = a(P);
    return E.values.slice(0, 3).map((D, _) => E.type.indexOf("hsl") !== -1 && _ !== 0 ? `${D}%` : D).join(" ");
  };
  tt.colorChannel = l;
  const c = (P, E) => {
    try {
      return l(P);
    } catch {
      return E && process.env.NODE_ENV !== "production" && console.warn(E), P;
    }
  };
  tt.private_safeColorChannel = c;
  function u(P) {
    const {
      type: E,
      colorSpace: D
    } = P;
    let {
      values: _
    } = P;
    return E.indexOf("rgb") !== -1 ? _ = _.map((I, M) => M < 3 ? parseInt(I, 10) : I) : E.indexOf("hsl") !== -1 && (_[1] = `${_[1]}%`, _[2] = `${_[2]}%`), E.indexOf("color") !== -1 ? _ = `${D} ${_.join(" ")}` : _ = `${_.join(", ")}`, `${E}(${_})`;
  }
  function d(P) {
    if (P.indexOf("#") === 0)
      return P;
    const {
      values: E
    } = a(P);
    return `#${E.map((D, _) => i(_ === 3 ? Math.round(255 * D) : D)).join("")}`;
  }
  function p(P) {
    P = a(P);
    const {
      values: E
    } = P, D = E[0], _ = E[1] / 100, I = E[2] / 100, M = _ * Math.min(I, 1 - I), F = (A, $ = (A + D / 30) % 12) => I - M * Math.max(Math.min($ - 3, 9 - $, 1), -1);
    let N = "rgb";
    const V = [Math.round(F(0) * 255), Math.round(F(8) * 255), Math.round(F(4) * 255)];
    return P.type === "hsla" && (N += "a", V.push(E[3])), u({
      type: N,
      values: V
    });
  }
  function h(P) {
    P = a(P);
    let E = P.type === "hsl" || P.type === "hsla" ? a(p(P)).values : P.values;
    return E = E.map((D) => (P.type !== "color" && (D /= 255), D <= 0.03928 ? D / 12.92 : ((D + 0.055) / 1.055) ** 2.4)), Number((0.2126 * E[0] + 0.7152 * E[1] + 0.0722 * E[2]).toFixed(3));
  }
  function b(P, E) {
    const D = h(P), _ = h(E);
    return (Math.max(D, _) + 0.05) / (Math.min(D, _) + 0.05);
  }
  function g(P, E) {
    return P = a(P), E = r(E), (P.type === "rgb" || P.type === "hsl") && (P.type += "a"), P.type === "color" ? P.values[3] = `/${E}` : P.values[3] = E, u(P);
  }
  function f(P, E, D) {
    try {
      return g(P, E);
    } catch {
      return D && process.env.NODE_ENV !== "production" && console.warn(D), P;
    }
  }
  function v(P, E) {
    if (P = a(P), E = r(E), P.type.indexOf("hsl") !== -1)
      P.values[2] *= 1 - E;
    else if (P.type.indexOf("rgb") !== -1 || P.type.indexOf("color") !== -1)
      for (let D = 0; D < 3; D += 1)
        P.values[D] *= 1 - E;
    return u(P);
  }
  function C(P, E, D) {
    try {
      return v(P, E);
    } catch {
      return D && process.env.NODE_ENV !== "production" && console.warn(D), P;
    }
  }
  function T(P, E) {
    if (P = a(P), E = r(E), P.type.indexOf("hsl") !== -1)
      P.values[2] += (100 - P.values[2]) * E;
    else if (P.type.indexOf("rgb") !== -1)
      for (let D = 0; D < 3; D += 1)
        P.values[D] += (255 - P.values[D]) * E;
    else if (P.type.indexOf("color") !== -1)
      for (let D = 0; D < 3; D += 1)
        P.values[D] += (1 - P.values[D]) * E;
    return u(P);
  }
  function S(P, E, D) {
    try {
      return T(P, E);
    } catch {
      return D && process.env.NODE_ENV !== "production" && console.warn(D), P;
    }
  }
  function w(P, E = 0.15) {
    return h(P) > 0.5 ? v(P, E) : T(P, E);
  }
  function O(P, E, D) {
    try {
      return w(P, E);
    } catch {
      return D && process.env.NODE_ENV !== "production" && console.warn(D), P;
    }
  }
  function R(P, E, D, _ = 1) {
    const I = (V, A) => Math.round((V ** (1 / _) * (1 - D) + A ** (1 / _) * D) ** _), M = a(P), F = a(E), N = [I(M.values[0], F.values[0]), I(M.values[1], F.values[1]), I(M.values[2], F.values[2])];
    return u({
      type: "rgb",
      values: N
    });
  }
  return tt;
}
var Ke = /* @__PURE__ */ lv();
const jo = {
  black: "#000",
  white: "#fff"
}, cv = {
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
}, gr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, br = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ao = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, vr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, xr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Sr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, uv = ["mode", "contrastThreshold", "tonalOffset"], Ou = {
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
    paper: jo.white,
    default: jo.white
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
}, ba = {
  text: {
    primary: jo.white,
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
    active: jo.white,
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
function Cu(e, t, n, r) {
  const s = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Ke.lighten(e.main, s) : t === "dark" && (e.dark = Ke.darken(e.main, i)));
}
function dv(e = "light") {
  return e === "dark" ? {
    main: vr[200],
    light: vr[50],
    dark: vr[400]
  } : {
    main: vr[700],
    light: vr[400],
    dark: vr[800]
  };
}
function fv(e = "light") {
  return e === "dark" ? {
    main: gr[200],
    light: gr[50],
    dark: gr[400]
  } : {
    main: gr[500],
    light: gr[300],
    dark: gr[700]
  };
}
function pv(e = "light") {
  return e === "dark" ? {
    main: br[500],
    light: br[300],
    dark: br[700]
  } : {
    main: br[700],
    light: br[400],
    dark: br[800]
  };
}
function hv(e = "light") {
  return e === "dark" ? {
    main: xr[400],
    light: xr[300],
    dark: xr[700]
  } : {
    main: xr[700],
    light: xr[500],
    dark: xr[900]
  };
}
function mv(e = "light") {
  return e === "dark" ? {
    main: Sr[400],
    light: Sr[300],
    dark: Sr[700]
  } : {
    main: Sr[800],
    light: Sr[500],
    dark: Sr[900]
  };
}
function yv(e = "light") {
  return e === "dark" ? {
    main: ao[400],
    light: ao[300],
    dark: ao[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ao[500],
    dark: ao[900]
  };
}
function gv(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, s = te(e, uv), i = e.primary || dv(t), a = e.secondary || fv(t), l = e.error || pv(t), c = e.info || hv(t), u = e.success || mv(t), d = e.warning || yv(t);
  function p(f) {
    const v = Ke.getContrastRatio(f, ba.text.primary) >= n ? ba.text.primary : Ou.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Ke.getContrastRatio(f, v);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${v} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const h = ({
    color: f,
    name: v,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: S = 700
  }) => {
    if (f = y({}, f), !f.main && f[C] && (f.main = f[C]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : On(11, v ? ` (${v})` : "", C));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : On(12, v ? ` (${v})` : "", JSON.stringify(f.main)));
    return Cu(f, "light", T, r), Cu(f, "dark", S, r), f.contrastText || (f.contrastText = p(f.main)), f;
  }, b = {
    dark: ba,
    light: Ou
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), It(y({
    // A collection of common colors.
    common: y({}, jo),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: cv,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, b[t]), s);
}
const bv = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function vv(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Eu = {
  textTransform: "uppercase"
}, Tu = '"Roboto", "Helvetica", "Arial", sans-serif';
function xv(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Tu,
    // The default font size of the Material Specification.
    fontSize: s = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = n, h = te(n, bv);
  process.env.NODE_ENV !== "production" && (typeof s != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = s / 14, g = p || ((C) => `${C / u * b}rem`), f = (C, T, S, w, O) => y({
    fontFamily: r,
    fontWeight: C,
    fontSize: g(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S
  }, r === Tu ? {
    letterSpacing: `${vv(w / T)}em`
  } : {}, O, d), v = {
    h1: f(i, 96, 1.167, -1.5),
    h2: f(i, 60, 1.2, -0.5),
    h3: f(a, 48, 1.167, 0),
    h4: f(a, 34, 1.235, 0.25),
    h5: f(a, 24, 1.334, 0),
    h6: f(l, 20, 1.6, 0.15),
    subtitle1: f(a, 16, 1.75, 0.15),
    subtitle2: f(l, 14, 1.57, 0.1),
    body1: f(a, 16, 1.5, 0.15),
    body2: f(a, 14, 1.43, 0.15),
    button: f(l, 14, 1.75, 0.4, Eu),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, Eu),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return It(y({
    htmlFontSize: u,
    pxToRem: g,
    fontFamily: r,
    fontSize: s,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), h, {
    clone: !1
    // No need to clone deep
  });
}
const Sv = 0.2, wv = 0.14, Pv = 0.12;
function Je(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Sv})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wv})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Pv})`].join(",");
}
const Ov = ["none", Je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Cv = ["duration", "easing", "delay"], Ev = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Tv = {
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
function ku(e) {
  return `${Math.round(e)}ms`;
}
function kv(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Dv(e) {
  const t = y({}, Ev, e.easing), n = y({}, Tv, e.duration);
  return y({
    getAutoHeightDuration: kv,
    create: (s = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = te(i, Cv);
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", p = (h) => !isNaN(parseFloat(h));
        !d(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((d) => `${d} ${typeof a == "string" ? a : ku(a)} ${l} ${typeof c == "string" ? c : ku(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Rv = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Mv = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function _v(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: s = {},
    typography: i = {}
  } = e, a = te(e, Mv);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : On(18));
  const l = gv(r), c = bi(e);
  let u = It(c, {
    mixins: sv(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ov.slice(),
    typography: xv(l, i),
    transitions: Dv(s),
    zIndex: y({}, Rv)
  });
  if (u = It(u, a), u = t.reduce((d, p) => It(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (h, b) => {
      let g;
      for (g in h) {
        const f = h[g];
        if (d.indexOf(g) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Ne("", g);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[g] = {};
        }
      }
    };
    Object.keys(u.components).forEach((h) => {
      const b = u.components[h].styleOverrides;
      b && h.indexOf("Mui") === 0 && p(b, h);
    });
  }
  return u.unstable_sxConfig = y({}, es, a?.unstable_sxConfig), u.unstable_sx = function(p) {
    return gi({
      sx: p,
      theme: this
    });
  }, u;
}
const Si = _v();
function Zr() {
  const e = hl(Si);
  return process.env.NODE_ENV !== "production" && m.useDebugValue(e), e[si] || e;
}
function nt({
  props: e,
  name: t
}) {
  return Ob({
    props: e,
    name: t,
    defaultTheme: Si,
    themeId: si
  });
}
var Gn = {}, va = { exports: {} }, Du;
function Iv() {
  return Du || (Du = 1, (function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var s = arguments[r];
          for (var i in s) ({}).hasOwnProperty.call(s, i) && (n[i] = s[i]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(va)), va.exports;
}
var xa = { exports: {} }, Ru;
function Nv() {
  return Ru || (Ru = 1, (function(e) {
    function t(n, r) {
      if (n == null) return {};
      var s = {};
      for (var i in n) if ({}.hasOwnProperty.call(n, i)) {
        if (r.indexOf(i) !== -1) continue;
        s[i] = n[i];
      }
      return s;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(xa)), xa.exports;
}
const qf = /* @__PURE__ */ Wn(mg), $v = /* @__PURE__ */ Wn(yg), Av = /* @__PURE__ */ Wn(Sg), Fv = /* @__PURE__ */ Wn(Pb), jv = /* @__PURE__ */ Wn(cb), Vv = /* @__PURE__ */ Wn(hb);
var Mu;
function Lv() {
  if (Mu) return Gn;
  Mu = 1;
  var e = Hf();
  Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.default = P, Gn.shouldForwardProp = v, Gn.systemDefaultTheme = void 0;
  var t = e(Iv()), n = e(Nv()), r = b(qf), s = $v, i = e(Av), a = e(Fv), l = e(jv), c = e(Vv);
  const u = ["ownerState"], d = ["variants"], p = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function h(E) {
    if (typeof WeakMap != "function") return null;
    var D = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap();
    return (h = function(I) {
      return I ? _ : D;
    })(E);
  }
  function b(E, D) {
    if (E && E.__esModule) return E;
    if (E === null || typeof E != "object" && typeof E != "function") return { default: E };
    var _ = h(D);
    if (_ && _.has(E)) return _.get(E);
    var I = { __proto__: null }, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var F in E) if (F !== "default" && Object.prototype.hasOwnProperty.call(E, F)) {
      var N = M ? Object.getOwnPropertyDescriptor(E, F) : null;
      N && (N.get || N.set) ? Object.defineProperty(I, F, N) : I[F] = E[F];
    }
    return I.default = E, _ && _.set(E, I), I;
  }
  function g(E) {
    return Object.keys(E).length === 0;
  }
  function f(E) {
    return typeof E == "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    E.charCodeAt(0) > 96;
  }
  function v(E) {
    return E !== "ownerState" && E !== "theme" && E !== "sx" && E !== "as";
  }
  function C(E, D) {
    return D && E && typeof E == "object" && E.styles && !E.styles.startsWith("@layer") && (E.styles = `@layer ${D}{${String(E.styles)}}`), E;
  }
  const T = Gn.systemDefaultTheme = (0, l.default)(), S = (E) => E && E.charAt(0).toLowerCase() + E.slice(1);
  function w({
    defaultTheme: E,
    theme: D,
    themeId: _
  }) {
    return g(D) ? E : D[_] || D;
  }
  function O(E) {
    return E ? (D, _) => _[E] : null;
  }
  function R(E, D, _) {
    let {
      ownerState: I
    } = D, M = (0, n.default)(D, u);
    const F = typeof E == "function" ? E((0, t.default)({
      ownerState: I
    }, M)) : E;
    if (Array.isArray(F))
      return F.flatMap((N) => R(N, (0, t.default)({
        ownerState: I
      }, M), _));
    if (F && typeof F == "object" && Array.isArray(F.variants)) {
      const {
        variants: N = []
      } = F;
      let A = (0, n.default)(F, d);
      return N.forEach(($) => {
        let L = !0;
        if (typeof $.props == "function" ? L = $.props((0, t.default)({
          ownerState: I
        }, M, I)) : Object.keys($.props).forEach((Y) => {
          I?.[Y] !== $.props[Y] && M[Y] !== $.props[Y] && (L = !1);
        }), L) {
          Array.isArray(A) || (A = [A]);
          const Y = typeof $.style == "function" ? $.style((0, t.default)({
            ownerState: I
          }, M, I)) : $.style;
          A.push(_ ? C((0, r.internal_serializeStyles)(Y), _) : Y);
        }
      }), A;
    }
    return _ ? C((0, r.internal_serializeStyles)(F), _) : F;
  }
  function P(E = {}) {
    const {
      themeId: D,
      defaultTheme: _ = T,
      rootShouldForwardProp: I = v,
      slotShouldForwardProp: M = v
    } = E, F = (N) => (0, c.default)((0, t.default)({}, N, {
      theme: w((0, t.default)({}, N, {
        defaultTheme: _,
        themeId: D
      }))
    }));
    return F.__mui_systemSx = !0, (N, V = {}) => {
      (0, r.internal_processStyles)(N, (q) => q.filter((z) => !(z != null && z.__mui_systemSx)));
      const {
        name: A,
        slot: $,
        skipVariantsResolver: L,
        skipSx: Y,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: k = O(S($))
      } = V, j = (0, n.default)(V, p), U = A && A.startsWith("Mui") || $ ? "components" : "custom", G = L !== void 0 ? L : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        $ && $ !== "Root" && $ !== "root" || !1
      ), H = Y || !1;
      let Z;
      process.env.NODE_ENV !== "production" && A && (Z = `${A}-${S($ || "Root")}`);
      let X = v;
      $ === "Root" || $ === "root" ? X = I : $ ? X = M : f(N) && (X = void 0);
      const re = (0, r.default)(N, (0, t.default)({
        shouldForwardProp: X,
        label: Z
      }, j)), ee = (q) => typeof q == "function" && q.__emotion_real !== q || (0, s.isPlainObject)(q) ? (z) => {
        const B = w({
          theme: z.theme,
          defaultTheme: _,
          themeId: D
        });
        return R(q, (0, t.default)({}, z, {
          theme: B
        }), B.modularCssLayers ? U : void 0);
      } : q, J = (q, ...z) => {
        let B = ee(q);
        const ne = z ? z.map(ee) : [];
        A && k && ne.push((W) => {
          const se = w((0, t.default)({}, W, {
            defaultTheme: _,
            themeId: D
          }));
          if (!se.components || !se.components[A] || !se.components[A].styleOverrides)
            return null;
          const ge = se.components[A].styleOverrides, we = {};
          return Object.entries(ge).forEach(([ue, de]) => {
            we[ue] = R(de, (0, t.default)({}, W, {
              theme: se
            }), se.modularCssLayers ? "theme" : void 0);
          }), k(W, we);
        }), A && !G && ne.push((W) => {
          var se;
          const ge = w((0, t.default)({}, W, {
            defaultTheme: _,
            themeId: D
          })), we = ge == null || (se = ge.components) == null || (se = se[A]) == null ? void 0 : se.variants;
          return R({
            variants: we
          }, (0, t.default)({}, W, {
            theme: ge
          }), ge.modularCssLayers ? "theme" : void 0);
        }), H || ne.push(F);
        const Q = ne.length - z.length;
        if (Array.isArray(q) && Q > 0) {
          const W = new Array(Q).fill("");
          B = [...q, ...W], B.raw = [...q.raw, ...W];
        }
        const ae = re(B, ...ne);
        if (process.env.NODE_ENV !== "production") {
          let W;
          A && (W = `${A}${(0, i.default)($ || "")}`), W === void 0 && (W = `Styled(${(0, a.default)(N)})`), ae.displayName = W;
        }
        return N.muiName && (ae.muiName = N.muiName), ae;
      };
      return re.withConfig && (J.withConfig = re.withConfig), J;
    };
  }
  return Gn;
}
var Xr = /* @__PURE__ */ Lv();
const Bv = /* @__PURE__ */ rl(Xr);
function Gf(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const tn = (e) => Gf(e) && e !== "classes", K = Bv({
  themeId: si,
  defaultTheme: Si,
  rootShouldForwardProp: tn
}), _u = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function it(e, t, n = void 0) {
  const r = {};
  for (const s in e) {
    const i = e[s];
    let a = "", l = !0;
    for (let c = 0; c < i.length; c += 1) {
      const u = i[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (a += " " + n[u]));
    }
    r[s] = a;
  }
  return r;
}
let Iu = 0;
function Wv(e) {
  const [t, n] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (Iu += 1, n(`mui-${Iu}`));
  }, [t]), r;
}
const Yv = {
  ...m
}, Nu = Yv.useId;
function yl(e) {
  if (Nu !== void 0) {
    const t = Nu();
    return e ?? t;
  }
  return Wv(e);
}
const zv = (e) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: y({}, e)
      }
    }
  }
}), Kf = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "Open previous view",
  openNextView: "Open next view",
  calendarViewSwitchingButtonAriaLabel: (e) => e === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange labels
  start: "Start",
  end: "End",
  startDate: "Start date",
  startTime: "Start time",
  endDate: "End date",
  endTime: "End time",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  nextStepButtonLabel: "Next",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  timeRangePickerToolbarTitle: "Select time range",
  // Clock labels
  clockLabelText: (e, t) => `Select ${e}. ${t ? `Selected time is ${t}` : "No time selected"}`,
  hoursClockNumberText: (e) => `${e} hours`,
  minutesClockNumberText: (e) => `${e} minutes`,
  secondsClockNumberText: (e) => `${e} seconds`,
  // Digital clock labels
  selectViewText: (e) => `Select ${e}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (e) => `Week ${e}`,
  calendarWeekNumberText: (e) => `${e}`,
  // Open Picker labels
  openDatePickerDialogue: (e) => e ? `Choose date, selected date is ${e}` : "Choose date",
  openTimePickerDialogue: (e) => e ? `Choose time, selected time is ${e}` : "Choose time",
  openRangePickerDialogue: (e) => e ? `Choose range, selected range is ${e}` : "Choose range",
  fieldClearLabel: "Clear",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (e) => "Y".repeat(e.digitAmount),
  fieldMonthPlaceholder: (e) => e.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (e) => e.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Year",
  month: "Month",
  day: "Day",
  weekDay: "Week day",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  meridiem: "Meridiem",
  // Common
  empty: "Empty"
}, Uv = Kf;
zv(Kf);
const Hv = ["localeText"], Us = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Us.displayName = "PickerAdapterContext");
const wi = function(t) {
  const {
    localeText: n
  } = t, r = te(t, Hv), {
    adapter: s,
    localeText: i
  } = m.useContext(Us) ?? {
    adapter: void 0,
    localeText: void 0
  }, a = nt({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: r,
    name: "MuiLocalizationProvider"
  }), {
    children: l,
    dateAdapter: c,
    dateFormats: u,
    dateLibInstance: d,
    adapterLocale: p,
    localeText: h
  } = a, b = m.useMemo(() => y({}, h, i, n), [h, i, n]), g = m.useMemo(() => {
    if (!c)
      return s || null;
    const C = new c({
      locale: p,
      formats: u,
      instance: d
    });
    if (!C.isMUIAdapter)
      throw new Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/quickstart/#installation"].join(`
`));
    return C;
  }, [c, p, u, d, s]), f = m.useMemo(() => g ? {
    minDate: g.date("1900-01-01T00:00:00.000"),
    maxDate: g.date("2099-12-31T00:00:00.000")
  } : null, [g]), v = m.useMemo(() => ({
    utils: g,
    adapter: g,
    defaultDates: f,
    localeText: b
  }), [f, g, b]);
  return /* @__PURE__ */ x.jsx(Us.Provider, {
    value: v,
    children: l
  });
};
process.env.NODE_ENV !== "production" && (wi.displayName = "LocalizationProvider");
process.env.NODE_ENV !== "production" && (wi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: o.any,
  children: o.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/quickstart/#integrate-provider-and-adapter date adapter setup section} for more details.
   */
  dateAdapter: o.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: o.shape({
    dayOfMonth: o.string,
    dayOfMonthFull: o.string,
    fullDate: o.string,
    fullTime12h: o.string,
    fullTime24h: o.string,
    hours12h: o.string,
    hours24h: o.string,
    keyboardDate: o.string,
    keyboardDateTime12h: o.string,
    keyboardDateTime24h: o.string,
    meridiem: o.string,
    minutes: o.string,
    month: o.string,
    monthShort: o.string,
    normalDate: o.string,
    normalDateWithWeekday: o.string,
    seconds: o.string,
    shortDate: o.string,
    weekday: o.string,
    weekdayShort: o.string,
    year: o.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: o.any,
  /**
   * Locale for components texts
   */
  localeText: o.object
});
const gl = () => {
  const e = m.useContext(Us);
  if (e === null)
    throw new Error(["MUI X: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join(`
`));
  if (e.adapter === null)
    throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join(`
`));
  const t = m.useMemo(() => y({}, Uv, e.localeText), [e.localeText]);
  return m.useMemo(() => y({}, e, {
    localeText: t
  }), [e, t]);
}, Ge = () => gl().adapter, Un = () => gl().localeText, Va = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"], La = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"], Zf = ["minDateTime", "maxDateTime"], qv = [...Va, ...La, ...Zf], Xf = (e) => qv.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {}), Gv = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef", "unstableStartFieldRef", "unstableEndFieldRef", "enableAccessibleFieldDOMStructure", "disabled", "readOnly", "dateSeparator", "autoFocus", "focused"], Qf = (e, t) => m.useMemo(() => {
  const n = y({}, e), r = {}, s = (i) => {
    n.hasOwnProperty(i) && (r[i] = n[i], delete n[i]);
  };
  return Gv.forEach(s), t === "date" ? Va.forEach(s) : t === "time" ? La.forEach(s) : t === "date-time" && (Va.forEach(s), La.forEach(s), Zf.forEach(s)), {
    forwardedProps: n,
    internalProps: r
  };
}, [e, t]), lo = (e, t) => e.length !== t.length ? !1 : t.every((n) => e.includes(n)), Kv = ({
  openTo: e,
  defaultOpenTo: t,
  views: n,
  defaultViews: r
}) => {
  const s = n ?? r;
  let i;
  if (e != null)
    i = e;
  else if (s.includes(t))
    i = t;
  else if (s.length > 0)
    i = s[0];
  else
    throw new Error("MUI X: The `views` prop must contain at least one view.");
  return {
    views: s,
    openTo: i
  };
}, Hs = (e, t, n) => {
  let r = t;
  return r = e.setHours(r, e.getHours(n)), r = e.setMinutes(r, e.getMinutes(n)), r = e.setSeconds(r, e.getSeconds(n)), r = e.setMilliseconds(r, e.getMilliseconds(n)), r;
}, Vo = ({
  date: e,
  disableFuture: t,
  disablePast: n,
  maxDate: r,
  minDate: s,
  isDateDisabled: i,
  adapter: a,
  timezone: l
}) => {
  const c = Hs(a, a.date(void 0, l), e);
  n && a.isBefore(s, c) && (s = c), t && a.isAfter(r, c) && (r = c);
  let u = e, d = e;
  for (a.isBefore(e, s) && (u = s, d = null), a.isAfter(e, r) && (d && (d = r), u = null); u || d; ) {
    if (u && a.isAfter(u, r) && (u = null), d && a.isBefore(d, s) && (d = null), u) {
      if (!i(u))
        return u;
      u = a.addDays(u, 1);
    }
    if (d) {
      if (!i(d))
        return d;
      d = a.addDays(d, -1);
    }
  }
  return null;
}, Zv = (e, t) => e.isValid(t) ? t : null, $u = (e, t, n) => t == null || !e.isValid(t) ? n : t, Xv = (e, t, n) => !e.isValid(t) && t != null && !e.isValid(n) && n != null ? !0 : e.isEqual(t, n), bl = (e, t) => {
  const r = [e.startOfYear(t)];
  for (; r.length < 12; ) {
    const s = r[r.length - 1];
    r.push(e.addMonths(s, 1));
  }
  return r;
}, Jf = (e, t, n) => n === "date" ? e.startOfDay(e.date(void 0, t)) : e.date(void 0, t), Qv = ["year", "month", "day"], Au = (e) => Qv.includes(e), vl = (e, {
  format: t,
  views: n
}, r) => {
  if (t != null)
    return t;
  const s = e.formats;
  return lo(n, ["year"]) ? s.year : lo(n, ["month"]) ? s.month : lo(n, ["day"]) ? s.dayOfMonth : lo(n, ["month", "year"]) ? `${s.month} ${s.year}` : lo(n, ["day", "month"]) ? `${s.month} ${s.dayOfMonth}` : r ? /en/.test(e.getCurrentLocaleCode()) ? s.normalDateWithWeekday : s.normalDate : s.keyboardDate;
}, Jv = (e, t) => {
  const n = e.startOfWeek(t);
  return [0, 1, 2, 3, 4, 5, 6].map((r) => e.addDays(n, r));
}, xl = (e, t) => {
  const n = e.formatTokenMap[t];
  if (n == null)
    throw new Error([`MUI X: The token "${t}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join(`
`));
  return typeof n == "string" ? {
    type: n,
    contentType: n === "meridiem" ? "letter" : "digit",
    maxLength: void 0
  } : {
    type: n.sectionType,
    contentType: n.contentType,
    maxLength: n.maxLength
  };
}, Pi = (e, t) => {
  const n = [], r = e.date(void 0, "default"), s = e.startOfWeek(r), i = e.endOfWeek(r);
  let a = s;
  for (; e.isBefore(a, i); )
    n.push(a), a = e.addDays(a, 1);
  return n.map((l) => e.formatByString(l, t));
}, ep = (e, t, n, r) => {
  switch (n) {
    case "month":
      return bl(e, e.date(void 0, t)).map((s) => e.formatByString(s, r));
    case "weekDay":
      return Pi(e, r);
    case "meridiem": {
      const s = e.date(void 0, t);
      return [e.startOfDay(s), e.endOfDay(s)].map((i) => e.formatByString(i, r));
    }
    default:
      return [];
  }
}, Fu = "s", ex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], tx = (e) => {
  const t = e.date(void 0);
  return e.formatByString(e.setSeconds(t, 0), Fu) === "0" ? ex : Array.from({
    length: 10
  }).map((r, s) => e.formatByString(e.setSeconds(t, s), Fu));
}, dr = (e, t) => {
  if (t[0] === "0")
    return e;
  const n = [];
  let r = "";
  for (let s = 0; s < e.length; s += 1) {
    r += e[s];
    const i = t.indexOf(r);
    i > -1 && (n.push(i.toString()), r = "");
  }
  return n.join("");
}, Sl = (e, t) => t[0] === "0" ? e : e.split("").map((n) => t[Number(n)]).join(""), ju = (e, t) => {
  const n = dr(e, t);
  return n !== " " && !Number.isNaN(Number(n));
}, wl = (e, t) => Number(e).toString().padStart(t, "0"), tp = (e, t, n, r, s) => {
  if (process.env.NODE_ENV !== "production" && s.type !== "day" && s.contentType === "digit-with-letter")
    throw new Error([`MUI X: The token "${s.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join(`
`));
  if (s.type === "day" && s.contentType === "digit-with-letter") {
    const a = e.setDate(n.longestMonth, t);
    return e.formatByString(a, s.format);
  }
  let i = t.toString();
  return s.hasLeadingZerosInInput && (i = wl(i, s.maxLength)), Sl(i, r);
}, Pl = (e, t, n) => {
  let r = e.value || e.placeholder;
  const s = t === "non-input" ? e.hasLeadingZerosInFormat : e.hasLeadingZerosInInput;
  return t === "non-input" && e.hasLeadingZerosInInput && !e.hasLeadingZerosInFormat && (r = Number(dr(r, n)).toString()), ["input-rtl", "input-ltr"].includes(t) && e.contentType === "digit" && !s && r.length === 1 && (r = `${r}‎`), t === "input-rtl" && (r = `⁨${r}⁩`), r;
}, Vu = (e, t, n, r) => {
  if (process.env.NODE_ENV !== "production" && xl(e, n).type === "weekDay")
    throw new Error("changeSectionValueFormat doesn't support week day formats");
  return e.formatByString(e.parse(t, n), r);
}, nx = (e, t) => e.formatByString(e.date(void 0, "system"), t).length === 4, np = (e, t, n, r) => {
  if (t !== "digit")
    return !1;
  const s = e.date(void 0, "default");
  switch (n) {
    // We can't use `changeSectionValueFormat`, because  `adapter.parse('1', 'YYYY')` returns `1971` instead of `1`.
    case "year":
      return e.lib === "dayjs" && r === "YY" ? !0 : e.formatByString(e.setYear(s, 1), r).startsWith("0");
    case "month":
      return e.formatByString(e.startOfYear(s), r).length > 1;
    case "day":
      return e.formatByString(e.startOfMonth(s), r).length > 1;
    case "weekDay":
      return e.formatByString(e.startOfWeek(s), r).length > 1;
    case "hours":
      return e.formatByString(e.setHours(s, 1), r).length > 1;
    case "minutes":
      return e.formatByString(e.setMinutes(s, 1), r).length > 1;
    case "seconds":
      return e.formatByString(e.setSeconds(s, 1), r).length > 1;
    default:
      throw new Error("Invalid section type");
  }
}, rx = (e, t, n) => {
  const r = t.some((c) => c.type === "day"), s = [], i = [];
  for (let c = 0; c < t.length; c += 1) {
    const u = t[c];
    r && u.type === "weekDay" || (s.push(u.format), i.push(Pl(u, "non-input", n)));
  }
  const a = s.join(" "), l = i.join(" ");
  return e.parse(l, a);
}, ox = (e) => e.map((t) => `${t.startSeparator}${t.value || t.placeholder}${t.endSeparator}`).join(""), sx = (e, t, n) => {
  const s = e.map((i) => {
    const a = Pl(i, n ? "input-rtl" : "input-ltr", t);
    return `${i.startSeparator}${a}${i.endSeparator}`;
  }).join("");
  return n ? `⁦${s}⁩` : s;
}, ix = (e, t, n) => {
  const r = e.date(void 0, n), s = e.endOfYear(r), i = e.endOfDay(r), {
    maxDaysInMonth: a,
    longestMonth: l
  } = bl(e, r).reduce((c, u) => {
    const d = e.getDaysInMonth(u);
    return d > c.maxDaysInMonth ? {
      maxDaysInMonth: d,
      longestMonth: u
    } : c;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format: c
    }) => ({
      minimum: 0,
      maximum: nx(e, c) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: e.getMonth(s) + 1
    }),
    day: ({
      currentDate: c
    }) => ({
      minimum: 1,
      maximum: e.isValid(c) ? e.getDaysInMonth(c) : a,
      longestMonth: l
    }),
    weekDay: ({
      format: c,
      contentType: u
    }) => {
      if (u === "digit") {
        const d = Pi(e, c).map(Number);
        return {
          minimum: Math.min(...d),
          maximum: Math.max(...d)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format: c
    }) => {
      const u = e.getHours(i);
      return dr(e.formatByString(e.endOfDay(r), c), t) !== u.toString() ? {
        minimum: 1,
        maximum: Number(dr(e.formatByString(e.startOfDay(r), c), t))
      } : {
        minimum: 0,
        maximum: u
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: e.getMinutes(i)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: e.getSeconds(i)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 1
    }),
    empty: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
let Lu = !1;
const Bu = (e, t) => {
  if (process.env.NODE_ENV !== "production" && !Lu) {
    const n = ["empty"];
    ["date", "date-time"].includes(t) && n.push("weekDay", "day", "month", "year"), ["time", "date-time"].includes(t) && n.push("hours", "minutes", "seconds", "meridiem");
    const r = e.find((s) => !n.includes(s.type));
    r && (console.warn(`MUI X: The field component you are using is not compatible with the "${r.type}" date section.`, `The supported date sections are ["${n.join('", "')}"]\`.`), Lu = !0);
  }
}, ax = (e, t, n, r) => {
  switch (t.type) {
    case "year":
      return e.setYear(r, e.getYear(n));
    case "month":
      return e.setMonth(r, e.getMonth(n));
    case "weekDay": {
      let s = e.formatByString(n, t.format);
      t.hasLeadingZerosInInput && (s = wl(s, t.maxLength));
      const i = Pi(e, t.format), a = i.indexOf(s), c = i.indexOf(t.value) - a;
      return e.addDays(n, c);
    }
    case "day":
      return e.setDate(r, e.getDate(n));
    case "meridiem": {
      const s = e.getHours(n) < 12, i = e.getHours(r);
      return s && i >= 12 ? e.addHours(r, -12) : !s && i < 12 ? e.addHours(r, 12) : r;
    }
    case "hours":
      return e.setHours(r, e.getHours(n));
    case "minutes":
      return e.setMinutes(r, e.getMinutes(n));
    case "seconds":
      return e.setSeconds(r, e.getSeconds(n));
    default:
      return r;
  }
}, Wu = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
}, Yu = (e, t, n, r, s) => (
  // cloning sections before sort to avoid mutating it
  [...n].sort((i, a) => Wu[i.type] - Wu[a.type]).reduce((i, a) => !s || a.modified ? ax(e, a, t, i) : i, r)
), lx = () => navigator.userAgent.toLowerCase().includes("android"), cx = (e, t) => {
  const n = {};
  if (!t)
    return e.forEach((c, u) => {
      const d = u === 0 ? null : u - 1, p = u === e.length - 1 ? null : u + 1;
      n[u] = {
        leftIndex: d,
        rightIndex: p
      };
    }), {
      neighbors: n,
      startIndex: 0,
      endIndex: e.length - 1
    };
  const r = {}, s = {};
  let i = 0, a = 0, l = e.length - 1;
  for (; l >= 0; ) {
    a = e.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (c, u) => u >= i && c.endSeparator?.includes(" ") && // Special case where the spaces were not there in the initial input
      c.endSeparator !== " / "
    ), a === -1 && (a = e.length - 1);
    for (let c = a; c >= i; c -= 1)
      s[c] = l, r[l] = c, l -= 1;
    i = a + 1;
  }
  return e.forEach((c, u) => {
    const d = s[u], p = d === 0 ? null : r[d - 1], h = d === e.length - 1 ? null : r[d + 1];
    n[u] = {
      leftIndex: p,
      rightIndex: h
    };
  }), {
    neighbors: n,
    startIndex: r[0],
    endIndex: r[e.length - 1]
  };
}, Ba = (e, t) => {
  if (e == null)
    return null;
  if (e === "all")
    return "all";
  if (typeof e == "string") {
    const n = t.findIndex((r) => r.type === e);
    return n === -1 ? null : n;
  }
  return e;
}, ux = ({
  adapter: e,
  format: t
}) => {
  let n = 10, r = t, s = e.expandFormat(t);
  for (; s !== r; )
    if (r = s, s = e.expandFormat(r), n -= 1, n < 0)
      throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the component.");
  return s;
}, dx = ({
  adapter: e,
  expandedFormat: t
}) => {
  const n = [], {
    start: r,
    end: s
  } = e.escapedCharacters, i = new RegExp(`(\\${r}[^\\${s}]*\\${s})+`, "g");
  let a = null;
  for (; a = i.exec(t); )
    n.push({
      start: a.index,
      end: i.lastIndex - 1
    });
  return n;
}, fx = (e, t, n, r) => {
  switch (n.type) {
    case "year":
      return t.fieldYearPlaceholder({
        digitAmount: e.formatByString(e.date(void 0, "default"), r).length,
        format: r
      });
    case "month":
      return t.fieldMonthPlaceholder({
        contentType: n.contentType,
        format: r
      });
    case "day":
      return t.fieldDayPlaceholder({
        format: r
      });
    case "weekDay":
      return t.fieldWeekDayPlaceholder({
        contentType: n.contentType,
        format: r
      });
    case "hours":
      return t.fieldHoursPlaceholder({
        format: r
      });
    case "minutes":
      return t.fieldMinutesPlaceholder({
        format: r
      });
    case "seconds":
      return t.fieldSecondsPlaceholder({
        format: r
      });
    case "meridiem":
      return t.fieldMeridiemPlaceholder({
        format: r
      });
    default:
      return r;
  }
}, px = ({
  adapter: e,
  date: t,
  shouldRespectLeadingZeros: n,
  localeText: r,
  localizedDigits: s,
  now: i,
  token: a,
  startSeparator: l
}) => {
  if (a === "")
    throw new Error("MUI X: Should not call `commitToken` with an empty token");
  const c = xl(e, a), u = np(e, c.contentType, c.type, a), d = n ? u : c.contentType === "digit", p = e.isValid(t);
  let h = p ? e.formatByString(t, a) : "", b = null;
  if (d)
    if (u)
      b = h === "" ? e.formatByString(i, a).length : h.length;
    else {
      if (c.maxLength == null)
        throw new Error(`MUI X: The token ${a} should have a 'maxLength' property on it's adapter`);
      b = c.maxLength, p && (h = Sl(wl(dr(h, s), b), s));
    }
  return y({}, c, {
    format: a,
    maxLength: b,
    value: h,
    placeholder: fx(e, r, c, a),
    hasLeadingZerosInFormat: u,
    hasLeadingZerosInInput: d,
    startSeparator: l,
    endSeparator: "",
    modified: !1
  });
}, hx = (e) => {
  const {
    adapter: t,
    expandedFormat: n,
    escapedParts: r
  } = e, s = t.date(void 0), i = [];
  let a = "";
  const l = Object.keys(t.formatTokenMap).sort((b, g) => g.length - b.length), c = /^([a-zA-Z]+)/, u = new RegExp(`^(${l.join("|")})*$`), d = new RegExp(`^(${l.join("|")})`), p = (b) => r.find((g) => g.start <= b && g.end >= b);
  let h = 0;
  for (; h < n.length; ) {
    const b = p(h), g = b != null, f = c.exec(n.slice(h))?.[1];
    if (!g && f != null && u.test(f)) {
      let v = f;
      for (; v.length > 0; ) {
        const C = d.exec(v)[1];
        v = v.slice(C.length), i.push(px(y({}, e, {
          now: s,
          token: C,
          startSeparator: a
        }))), a = "";
      }
      h += f.length;
    } else {
      const v = n[h];
      g && b?.start === h || b?.end === h || (i.length === 0 ? a += v : (i[i.length - 1].endSeparator += v, i[i.length - 1].isEndFormatSeparator = !0)), h += 1;
    }
  }
  return i.length === 0 && a.length > 0 && i.push({
    type: "empty",
    contentType: "letter",
    maxLength: null,
    format: "",
    value: "",
    placeholder: "",
    hasLeadingZerosInFormat: !1,
    hasLeadingZerosInInput: !1,
    startSeparator: a,
    endSeparator: "",
    modified: !1
  }), i;
}, mx = ({
  isRtl: e,
  formatDensity: t,
  sections: n
}) => n.map((r) => {
  const s = (i) => {
    let a = i;
    return e && a !== null && a.includes(" ") && (a = `⁩${a}⁦`), t === "spacious" && ["/", ".", "-"].includes(a) && (a = ` ${a} `), a;
  };
  return r.startSeparator = s(r.startSeparator), r.endSeparator = s(r.endSeparator), r;
}), zu = (e) => {
  let t = ux(e);
  e.isRtl && e.enableAccessibleFieldDOMStructure && (t = t.split(" ").reverse().join(" "));
  const n = dx(y({}, e, {
    expandedFormat: t
  })), r = hx(y({}, e, {
    expandedFormat: t,
    escapedParts: n
  }));
  return mx(y({}, e, {
    sections: r
  }));
}, Oi = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Oi.displayName = "PickerContext");
const Qr = () => {
  const e = m.useContext(Oi);
  if (e == null)
    throw new Error("MUI X: The `usePickerContext` hook can only be called inside the context of a Picker component");
  return e;
}, Ol = () => m.useContext(Oi), Cl = /* @__PURE__ */ m.createContext(() => !0);
process.env.NODE_ENV !== "production" && (Cl.displayName = "IsValidValueContext");
function yx() {
  return m.useContext(Cl);
}
const El = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (El.displayName = "PickerFieldPrivateContext");
function rp() {
  return m.useContext(El);
}
const Tl = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Tl.displayName = "PickerActionsContext");
const kl = /* @__PURE__ */ m.createContext({
  ownerState: {
    isPickerDisabled: !1,
    isPickerReadOnly: !1,
    isPickerValueEmpty: !1,
    isPickerOpen: !1,
    pickerVariant: "desktop",
    pickerOrientation: "portrait"
  },
  rootRefObject: {
    current: null
  },
  labelId: void 0,
  dismissViews: () => {
  },
  hasUIView: !0,
  getCurrentViewMode: () => "UI",
  triggerElement: null,
  viewContainerRole: null,
  defaultActionBarActions: [],
  onPopperExited: void 0
});
process.env.NODE_ENV !== "production" && (kl.displayName = "PickerPrivateContext");
function op(e) {
  const {
    contextValue: t,
    actionsContextValue: n,
    privateContextValue: r,
    fieldPrivateContextValue: s,
    isValidContextValue: i,
    localeText: a,
    children: l
  } = e;
  return /* @__PURE__ */ x.jsx(Oi.Provider, {
    value: t,
    children: /* @__PURE__ */ x.jsx(Tl.Provider, {
      value: n,
      children: /* @__PURE__ */ x.jsx(kl.Provider, {
        value: r,
        children: /* @__PURE__ */ x.jsx(El.Provider, {
          value: s,
          children: /* @__PURE__ */ x.jsx(Cl.Provider, {
            value: i,
            children: /* @__PURE__ */ x.jsx(wi, {
              localeText: a,
              children: l
            })
          })
        })
      })
    })
  });
}
const gx = () => {
  const e = m.useContext(Tl);
  if (e == null)
    throw new Error(["MUI X: The `usePickerActionsContext` can only be called in fields that are used as a slot of a Picker component"].join(`
`));
  return e;
}, bx = () => gl().defaultDates, Ci = (e) => {
  const t = Ge(), n = m.useRef(void 0);
  return n.current === void 0 && (n.current = t.date(void 0, e)), n.current;
};
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function We(e) {
  return ov(e);
}
function vx(e) {
  return Ne("MuiTypography", e);
}
Me("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const xx = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Sx = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: s,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${le(t)}`, n && "gutterBottom", r && "noWrap", s && "paragraph"]
  };
  return Be(l, vx, a);
}, wx = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${le(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
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
})), Uu = {
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
}, Px = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Ox = (e) => Px[e] || e, Hn = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiTypography"
  }), s = Ox(r.color), i = Ef(y({}, r, {
    color: s
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: p = !1,
    variant: h = "body1",
    variantMapping: b = Uu
  } = i, g = te(i, xx), f = y({}, i, {
    align: a,
    color: s,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: p,
    variant: h,
    variantMapping: b
  }), v = c || (p ? "p" : b[h] || Uu[h]) || "span", C = Sx(f);
  return /* @__PURE__ */ x.jsx(wx, y({
    as: v,
    ref: n,
    ownerState: f,
    className: fe(C.root, l)
  }, g));
});
process.env.NODE_ENV !== "production" && (Hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
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
  variantMapping: o.object
});
function Rt(...e) {
  const t = m.useRef(void 0), n = m.useCallback((r) => {
    const s = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const a = i, l = a(r);
        return typeof l == "function" ? l : () => {
          a(null);
        };
      }
      return i.current = r, () => {
        i.current = null;
      };
    });
    return () => {
      s.forEach((i) => i?.());
    };
  }, e);
  return m.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function Cx(e) {
  return typeof e == "string";
}
function Ex(e, t, n) {
  return e === void 0 || Cx(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Tx(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Hu(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function kx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!t) {
    const b = fe(n?.className, i, s?.className, r?.className), g = {
      ...n?.style,
      ...s?.style,
      ...r?.style
    }, f = {
      ...n,
      ...s,
      ...r
    };
    return b.length > 0 && (f.className = b), Object.keys(g).length > 0 && (f.style = g), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Tx({
    ...s,
    ...r
  }), l = Hu(r), c = Hu(s), u = t(a), d = fe(u?.className, n?.className, i, s?.className, r?.className), p = {
    ...u?.style,
    ...n?.style,
    ...s?.style,
    ...r?.style
  }, h = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return d.length > 0 && (h.className = d), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: u.ref
  };
}
function Zt(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Le(e) {
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: s = !1,
    ...i
  } = e, a = s ? {} : Zt(n, r), {
    props: l,
    internalRef: c
  } = kx({
    ...i,
    externalSlotProps: a
  }), u = Rt(c, a?.ref, e.additionalProps?.ref);
  return Ex(t, {
    ...l,
    ref: u
  }, r);
}
function Wa(e, t) {
  return Wa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Wa(e, t);
}
function Dl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wa(e, t);
}
function Dx(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Rx(e, t) {
  e.classList ? e.classList.add(t) : Dx(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function qu(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Mx(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = qu(e.className, t) : e.setAttribute("class", qu(e.className && e.className.baseVal || "", t));
}
const Gu = {
  disabled: !1
};
var _x = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null, Ix = process.env.NODE_ENV !== "production" ? o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]) : null;
const qs = xe.createContext(null);
var sp = function(t) {
  return t.scrollTop;
}, wo = "unmounted", er = "exited", tr = "entering", Cr = "entered", Ya = "exiting", zt = /* @__PURE__ */ (function(e) {
  Dl(t, e);
  function t(r, s) {
    var i;
    i = e.call(this, r, s) || this;
    var a = s, l = a && !a.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? l ? (c = er, i.appearStatus = tr) : c = Cr : r.unmountOnExit || r.mountOnEnter ? c = wo : c = er, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(s, i) {
    var a = s.in;
    return a && i.status === wo ? {
      status: er
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(s) {
    var i = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== tr && a !== Cr && (i = tr) : (a === tr || a === Cr) && (i = Ya);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var s = this.props.timeout, i, a, l;
    return i = a = l = s, s != null && typeof s != "number" && (i = s.exit, a = s.enter, l = s.appear !== void 0 ? s.appear : a), {
      exit: i,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(s, i) {
    if (s === void 0 && (s = !1), i !== null)
      if (this.cancelNextCallback(), i === tr) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : ys.findDOMNode(this);
          a && sp(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === er && this.setState({
      status: wo
    });
  }, n.performEnter = function(s) {
    var i = this, a = this.props.enter, l = this.context ? this.context.isMounting : s, c = this.props.nodeRef ? [l] : [ys.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), h = l ? p.appear : p.enter;
    if (!s && !a || Gu.disabled) {
      this.safeSetState({
        status: Cr
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: tr
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: Cr
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var s = this, i = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : ys.findDOMNode(this);
    if (!i || Gu.disabled) {
      this.safeSetState({
        status: er
      }, function() {
        s.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Ya
    }, function() {
      s.props.onExiting(l), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: er
        }, function() {
          s.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(s, i) {
    i = this.setNextCallback(i), this.setState(s, i);
  }, n.setNextCallback = function(s) {
    var i = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, i.nextCallback = null, s(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(s, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : ys.findDOMNode(this), l = s == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, n.render = function() {
    var s = this.state.status;
    if (s === wo)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = te(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ xe.createElement(qs.Provider, {
        value: null
      }, typeof a == "function" ? a(s, l) : xe.cloneElement(xe.Children.only(a), l))
    );
  }, t;
})(xe.Component);
zt.contextType = qs;
zt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, s, i) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, s, i);
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
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
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
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
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
    var n = _x;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      s[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(s));
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
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function wr() {
}
zt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: wr,
  onEntering: wr,
  onEntered: wr,
  onExit: wr,
  onExiting: wr,
  onExited: wr
};
zt.UNMOUNTED = wo;
zt.EXITED = er;
zt.ENTERING = tr;
zt.ENTERED = Cr;
zt.EXITING = Ya;
var Nx = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return Rx(t, r);
  });
}, Sa = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return Mx(t, r);
  });
}, Rl = /* @__PURE__ */ (function(e) {
  Dl(t, e);
  function t() {
    for (var r, s = arguments.length, i = new Array(s), a = 0; a < s; a++)
      i[a] = arguments[a];
    return r = e.call.apply(e, [this].concat(i)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1];
      r.removeClasses(d, "exit"), r.addClass(d, p ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(l, c);
    }, r.onEntering = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1], h = p ? "appear" : "enter";
      r.addClass(d, h, "active"), r.props.onEntering && r.props.onEntering(l, c);
    }, r.onEntered = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1], h = p ? "appear" : "enter";
      r.removeClasses(d, h), r.addClass(d, h, "done"), r.props.onEntered && r.props.onEntered(l, c);
    }, r.onExit = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.removeClasses(u, "appear"), r.removeClasses(u, "enter"), r.addClass(u, "exit", "base"), r.props.onExit && r.props.onExit(l);
    }, r.onExiting = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.addClass(u, "exit", "active"), r.props.onExiting && r.props.onExiting(l);
    }, r.onExited = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.removeClasses(u, "exit"), r.addClass(u, "exit", "done"), r.props.onExited && r.props.onExited(l);
    }, r.resolveArguments = function(l, c) {
      return r.props.nodeRef ? [r.props.nodeRef.current, l] : [l, c];
    }, r.getClassNames = function(l) {
      var c = r.props.classNames, u = typeof c == "string", d = u && c ? c + "-" : "", p = u ? "" + d + l : c[l], h = u ? p + "-active" : c[l + "Active"], b = u ? p + "-done" : c[l + "Done"];
      return {
        baseClassName: p,
        activeClassName: h,
        doneClassName: b
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(s, i, a) {
    var l = this.getClassNames(i)[a + "ClassName"], c = this.getClassNames("enter"), u = c.doneClassName;
    i === "appear" && a === "done" && u && (l += " " + u), a === "active" && s && sp(s), l && (this.appliedClasses[i][a] = l, Nx(s, l));
  }, n.removeClasses = function(s, i) {
    var a = this.appliedClasses[i], l = a.base, c = a.active, u = a.done;
    this.appliedClasses[i] = {}, l && Sa(s, l), c && Sa(s, c), u && Sa(s, u);
  }, n.render = function() {
    var s = this.props;
    s.classNames;
    var i = te(s, ["classNames"]);
    return /* @__PURE__ */ xe.createElement(zt, y({}, i, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
})(xe.Component);
Rl.defaultProps = {
  classNames: ""
};
Rl.propTypes = process.env.NODE_ENV !== "production" ? y({}, zt.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: Ix,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: o.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: o.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: o.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: o.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: o.func
}) : {};
function $x(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ml(e, t) {
  var n = function(i) {
    return t && Ds(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && vm.map(e, function(s) {
    return s;
  }).forEach(function(s) {
    r[s.key] = n(s);
  }), r;
}
function Ax(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), s = [];
  for (var i in e)
    i in t ? s.length && (r[i] = s, s = []) : s.push(i);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < s.length; a++)
    l[s[a]] = n(s[a]);
  return l;
}
function rr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Fx(e, t) {
  return Ml(e.children, function(n) {
    return Rs(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: rr(n, "appear", e),
      enter: rr(n, "enter", e),
      exit: rr(n, "exit", e)
    });
  });
}
function jx(e, t, n) {
  var r = Ml(e.children), s = Ax(t, r);
  return Object.keys(s).forEach(function(i) {
    var a = s[i];
    if (Ds(a)) {
      var l = i in t, c = i in r, u = t[i], d = Ds(u) && !u.props.in;
      c && (!l || d) ? s[i] = Rs(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: rr(a, "exit", e),
        enter: rr(a, "enter", e)
      }) : !c && l && !d ? s[i] = Rs(a, {
        in: !1
      }) : c && l && Ds(u) && (s[i] = Rs(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: rr(a, "exit", e),
        enter: rr(a, "enter", e)
      }));
    }
  }), s;
}
var Vx = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Lx = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, rs = /* @__PURE__ */ (function(e) {
  Dl(t, e);
  function t(r, s) {
    var i;
    i = e.call(this, r, s) || this;
    var a = i.handleExited.bind($x(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(s, i) {
    var a = i.children, l = i.handleExited, c = i.firstRender;
    return {
      children: c ? Fx(s, l) : jx(s, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(s, i) {
    var a = Ml(this.props.children);
    s.key in a || (s.props.onExited && s.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = y({}, l.children);
      return delete c[s.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var s = this.props, i = s.component, a = s.childFactory, l = te(s, ["component", "childFactory"]), c = this.state.contextValue, u = Vx(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ xe.createElement(qs.Provider, {
      value: c
    }, u) : /* @__PURE__ */ xe.createElement(qs.Provider, {
      value: c
    }, /* @__PURE__ */ xe.createElement(i, l, u));
  }, t;
})(xe.Component);
rs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
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
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
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
  childFactory: o.func
} : {};
rs.defaultProps = Lx;
function ip(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: s,
    rippleY: i,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, p] = m.useState(!1), h = fe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + s
  }, g = fe(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && p(!0), m.useEffect(() => {
    if (!l && c != null) {
      const f = setTimeout(c, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ x.jsx("span", {
    className: h,
    style: b,
    children: /* @__PURE__ */ x.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (ip.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const Ft = Me("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Bx = ["center", "classes", "className"];
let Ei = (e) => e, Ku, Zu, Xu, Qu;
const za = 550, Wx = 80, Yx = oi(Ku || (Ku = Ei`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), zx = oi(Zu || (Zu = Ei`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ux = oi(Xu || (Xu = Ei`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Hx = K("span", {
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
}), qx = K(ip, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Qu || (Qu = Ei`
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
`), Ft.rippleVisible, Yx, za, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ft.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ft.child, Ft.childLeaving, zx, za, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ft.childPulsate, Ux, ({
  theme: e
}) => e.transitions.easing.easeInOut), ap = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: i = {},
    className: a
  } = r, l = te(r, Bx), [c, u] = m.useState([]), d = m.useRef(0), p = m.useRef(null);
  m.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const h = m.useRef(!1), b = Lf(), g = m.useRef(null), f = m.useRef(null), v = m.useCallback((w) => {
    const {
      pulsate: O,
      rippleX: R,
      rippleY: P,
      rippleSize: E,
      cb: D
    } = w;
    u((_) => [..._, /* @__PURE__ */ x.jsx(qx, {
      classes: {
        ripple: fe(i.ripple, Ft.ripple),
        rippleVisible: fe(i.rippleVisible, Ft.rippleVisible),
        ripplePulsate: fe(i.ripplePulsate, Ft.ripplePulsate),
        child: fe(i.child, Ft.child),
        childLeaving: fe(i.childLeaving, Ft.childLeaving),
        childPulsate: fe(i.childPulsate, Ft.childPulsate)
      },
      timeout: za,
      pulsate: O,
      rippleX: R,
      rippleY: P,
      rippleSize: E
    }, d.current)]), d.current += 1, p.current = D;
  }, [i]), C = m.useCallback((w = {}, O = {}, R = () => {
  }) => {
    const {
      pulsate: P = !1,
      center: E = s || O.pulsate,
      fakeElement: D = !1
      // For test purposes
    } = O;
    if (w?.type === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    w?.type === "touchstart" && (h.current = !0);
    const _ = D ? null : f.current, I = _ ? _.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let M, F, N;
    if (E || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      M = Math.round(I.width / 2), F = Math.round(I.height / 2);
    else {
      const {
        clientX: V,
        clientY: A
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      M = Math.round(V - I.left), F = Math.round(A - I.top);
    }
    if (E)
      N = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3), N % 2 === 0 && (N += 1);
    else {
      const V = Math.max(Math.abs((_ ? _.clientWidth : 0) - M), M) * 2 + 2, A = Math.max(Math.abs((_ ? _.clientHeight : 0) - F), F) * 2 + 2;
      N = Math.sqrt(V ** 2 + A ** 2);
    }
    w != null && w.touches ? g.current === null && (g.current = () => {
      v({
        pulsate: P,
        rippleX: M,
        rippleY: F,
        rippleSize: N,
        cb: R
      });
    }, b.start(Wx, () => {
      g.current && (g.current(), g.current = null);
    })) : v({
      pulsate: P,
      rippleX: M,
      rippleY: F,
      rippleSize: N,
      cb: R
    });
  }, [s, v, b]), T = m.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), S = m.useCallback((w, O) => {
    if (b.clear(), w?.type === "touchend" && g.current) {
      g.current(), g.current = null, b.start(0, () => {
        S(w, O);
      });
      return;
    }
    g.current = null, u((R) => R.length > 0 ? R.slice(1) : R), p.current = O;
  }, [b]);
  return m.useImperativeHandle(n, () => ({
    pulsate: T,
    start: C,
    stop: S
  }), [T, C, S]), /* @__PURE__ */ x.jsx(Hx, y({
    className: fe(Ft.root, i.root, a),
    ref: f
  }, l, {
    children: /* @__PURE__ */ x.jsx(rs, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (ap.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
function Gx(e) {
  return Ne("MuiButtonBase", e);
}
const Kx = Me("MuiButtonBase", ["root", "disabled", "focusVisible"]), Zx = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Xx = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: s
  } = e, a = Be({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Gx, s);
  return n && r && (a.root += ` ${r}`), a;
}, Qx = K("button", {
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
  [`&.${Kx.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), fr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: s,
    centerRipple: i = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: h = !1,
    LinkComponent: b = "a",
    onBlur: g,
    onClick: f,
    onContextMenu: v,
    onDragLeave: C,
    onFocus: T,
    onFocusVisible: S,
    onKeyDown: w,
    onKeyUp: O,
    onMouseDown: R,
    onMouseLeave: P,
    onMouseUp: E,
    onTouchEnd: D,
    onTouchMove: _,
    onTouchStart: I,
    tabIndex: M = 0,
    TouchRippleProps: F,
    touchRippleRef: N,
    type: V
  } = r, A = te(r, Zx), $ = m.useRef(null), L = m.useRef(null), Y = yt(L, N), {
    isFocusVisibleRef: k,
    onFocus: j,
    onBlur: U,
    ref: G
  } = qb(), [H, Z] = m.useState(!1);
  u && H && Z(!1), m.useImperativeHandle(s, () => ({
    focusVisible: () => {
      Z(!0), $.current.focus();
    }
  }), []);
  const [X, re] = m.useState(!1);
  m.useEffect(() => {
    re(!0);
  }, []);
  const ee = X && !d && !u;
  m.useEffect(() => {
    H && h && !d && X && L.current.pulsate();
  }, [d, h, H, X]);
  function J(ie, ve, Te = p) {
    return nr((Ye) => (ve && ve(Ye), !Te && L.current && L.current[ie](Ye), !0));
  }
  const q = J("start", R), z = J("stop", v), B = J("stop", C), ne = J("stop", E), Q = J("stop", (ie) => {
    H && ie.preventDefault(), P && P(ie);
  }), ae = J("start", I), W = J("stop", D), se = J("stop", _), ge = J("stop", (ie) => {
    U(ie), k.current === !1 && Z(!1), g && g(ie);
  }, !1), we = nr((ie) => {
    $.current || ($.current = ie.currentTarget), j(ie), k.current === !0 && (Z(!0), S && S(ie)), T && T(ie);
  }), ue = () => {
    const ie = $.current;
    return c && c !== "button" && !(ie.tagName === "A" && ie.href);
  }, de = m.useRef(!1), De = nr((ie) => {
    h && !de.current && H && L.current && ie.key === " " && (de.current = !0, L.current.stop(ie, () => {
      L.current.start(ie);
    })), ie.target === ie.currentTarget && ue() && ie.key === " " && ie.preventDefault(), w && w(ie), ie.target === ie.currentTarget && ue() && ie.key === "Enter" && !u && (ie.preventDefault(), f && f(ie));
  }), Ee = nr((ie) => {
    h && ie.key === " " && L.current && H && !ie.defaultPrevented && (de.current = !1, L.current.stop(ie, () => {
      L.current.pulsate(ie);
    })), O && O(ie), f && ie.target === ie.currentTarget && ue() && ie.key === " " && !ie.defaultPrevented && f(ie);
  });
  let Ce = c;
  Ce === "button" && (A.href || A.to) && (Ce = b);
  const Ze = {};
  Ce === "button" ? (Ze.type = V === void 0 ? "button" : V, Ze.disabled = u) : (!A.href && !A.to && (Ze.role = "button"), u && (Ze["aria-disabled"] = u));
  const ft = yt(n, G, $);
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    ee && !L.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [ee]);
  const mt = y({}, r, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: M,
    focusVisible: H
  }), Oe = Xx(mt);
  return /* @__PURE__ */ x.jsxs(Qx, y({
    as: Ce,
    className: fe(Oe.root, l),
    ownerState: mt,
    onBlur: ge,
    onClick: f,
    onContextMenu: z,
    onFocus: we,
    onKeyDown: De,
    onKeyUp: Ee,
    onMouseDown: q,
    onMouseLeave: Q,
    onMouseUp: ne,
    onDragLeave: B,
    onTouchEnd: W,
    onTouchMove: se,
    onTouchStart: ae,
    ref: ft,
    tabIndex: u ? -1 : M,
    type: V
  }, Ze, A, {
    children: [a, ee ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ x.jsx(ap, y({
        ref: Y,
        center: i
      }, F))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: en,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: vi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
function Jx(e) {
  return Ne("MuiIconButton", e);
}
const e0 = Me("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), t0 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], n0 = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: s,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${le(r)}`, s && `edge${le(s)}`, `size${le(i)}`]
  };
  return Be(a, Jx, t);
}, r0 = K(fr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${le(n.color)}`], n.edge && t[`edge${le(n.edge)}`], t[`size${le(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke.alpha(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return y({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && y({
    color: r?.main
  }, !t.disableRipple && {
    "&:hover": y({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke.alpha(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${e0.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Lo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: i,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, p = te(r, t0), h = y({}, r, {
    edge: s,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), b = n0(h);
  return /* @__PURE__ */ x.jsx(r0, y({
    className: fe(b.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n
  }, p, {
    ownerState: h,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Lo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: zn(o.node, (e) => m.Children.toArray(e.children).some((n) => /* @__PURE__ */ m.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function o0(e) {
  return Ne("MuiSvgIcon", e);
}
Me("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const s0 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], i0 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, s = {
    root: ["root", t !== "inherit" && `color${le(t)}`, `fontSize${le(n)}`]
  };
  return Be(s, o0, r);
}, a0 = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${le(n.color)}`], t[`fontSize${le(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, s, i, a, l, c, u, d, p, h, b, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (s = e.transitions) == null || (s = s.duration) == null ? void 0 : s.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null ? p : {
      action: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Gs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: s,
    className: i,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: h = "0 0 24 24"
  } = r, b = te(r, s0), g = /* @__PURE__ */ m.isValidElement(s) && s.type === "svg", f = y({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: g
  }), v = {};
  d || (v.viewBox = h);
  const C = i0(f);
  return /* @__PURE__ */ x.jsxs(a0, y({
    as: l,
    className: fe(C.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n
  }, v, b, g && s.props, {
    ownerState: f,
    children: [g ? s.props.children : s, p ? /* @__PURE__ */ x.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
Gs.muiName = "SvgIcon";
function mn(e, t) {
  function n(r, s) {
    return /* @__PURE__ */ x.jsx(Gs, y({
      "data-testid": `${t}Icon`,
      ref: s
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Gs.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(n));
}
const l0 = mn(/* @__PURE__ */ x.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), c0 = mn(/* @__PURE__ */ x.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft"), u0 = mn(/* @__PURE__ */ x.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight"), d0 = mn(/* @__PURE__ */ x.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
mn(/* @__PURE__ */ x.jsxs(m.Fragment, {
  children: [/* @__PURE__ */ x.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ x.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
mn(/* @__PURE__ */ x.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
mn(/* @__PURE__ */ x.jsxs(m.Fragment, {
  children: [/* @__PURE__ */ x.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ x.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
const f0 = mn(/* @__PURE__ */ x.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear"), Ju = (e) => e, p0 = () => {
  let e = Ju;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ju;
    }
  };
}, h0 = p0(), m0 = {
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
function dt(e, t, n = "Mui") {
  const r = m0[t];
  return r ? `${n}-${r}` : `${h0.generate(e)}-${t}`;
}
function ht(e, t, n = "Mui") {
  const r = {};
  return t.forEach((s) => {
    r[s] = dt(e, s, n);
  }), r;
}
function y0(e) {
  return dt("MuiPickersArrowSwitcher", e);
}
ht("MuiPickersArrowSwitcher", ["root", "spacer", "button", "previousIconButton", "nextIconButton", "leftArrowIcon", "rightArrowIcon"]);
const vt = () => m.useContext(kl), g0 = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel", "labelId", "classes"], b0 = ["ownerState"], v0 = ["ownerState"], x0 = K("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root"
})({
  display: "flex"
}), S0 = K("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer"
})(({
  theme: e
}) => ({
  width: e.spacing(3)
})), ed = K(Lo, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button"
})({
  variants: [{
    props: {
      isButtonHidden: !0
    },
    style: {
      visibility: "hidden"
    }
  }]
}), w0 = (e) => it({
  root: ["root"],
  spacer: ["spacer"],
  button: ["button"],
  previousIconButton: ["previousIconButton"],
  nextIconButton: ["nextIconButton"],
  leftArrowIcon: ["leftArrowIcon"],
  rightArrowIcon: ["rightArrowIcon"]
}, y0, e), lp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = hn(), s = nt({
    props: t,
    name: "MuiPickersArrowSwitcher"
  }), {
    children: i,
    className: a,
    slots: l,
    slotProps: c,
    isNextDisabled: u,
    isNextHidden: d,
    onGoToNext: p,
    nextLabel: h,
    isPreviousDisabled: b,
    isPreviousHidden: g,
    onGoToPrevious: f,
    previousLabel: v,
    labelId: C,
    classes: T
  } = s, S = te(s, g0), {
    ownerState: w
  } = vt(), O = w0(T), R = {
    isDisabled: u,
    isHidden: d,
    goTo: p,
    label: h
  }, P = {
    isDisabled: b,
    isHidden: g,
    goTo: f,
    label: v
  }, E = l?.previousIconButton ?? ed, D = Le({
    elementType: E,
    externalSlotProps: c?.previousIconButton,
    additionalProps: {
      size: "medium",
      title: P.label,
      "aria-label": P.label,
      disabled: P.isDisabled,
      edge: "end",
      onClick: P.goTo
    },
    ownerState: y({}, w, {
      isButtonHidden: P.isHidden ?? !1
    }),
    className: fe(O.button, O.previousIconButton)
  }), _ = l?.nextIconButton ?? ed, I = Le({
    elementType: _,
    externalSlotProps: c?.nextIconButton,
    additionalProps: {
      size: "medium",
      title: R.label,
      "aria-label": R.label,
      disabled: R.isDisabled,
      edge: "start",
      onClick: R.goTo
    },
    ownerState: y({}, w, {
      isButtonHidden: R.isHidden ?? !1
    }),
    className: fe(O.button, O.nextIconButton)
  }), M = l?.leftArrowIcon ?? c0, F = Le({
    elementType: M,
    externalSlotProps: c?.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: w,
    className: O.leftArrowIcon
  }), N = te(F, b0), V = l?.rightArrowIcon ?? u0, A = Le({
    elementType: V,
    externalSlotProps: c?.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: w,
    className: O.rightArrowIcon
  }), $ = te(A, v0);
  return /* @__PURE__ */ x.jsxs(x0, y({
    ref: n,
    className: fe(O.root, a),
    ownerState: w
  }, S, {
    children: [/* @__PURE__ */ x.jsx(E, y({}, D, {
      children: r ? /* @__PURE__ */ x.jsx(V, y({}, $)) : /* @__PURE__ */ x.jsx(M, y({}, N))
    })), i ? /* @__PURE__ */ x.jsx(Hn, {
      variant: "subtitle1",
      component: "span",
      id: C,
      children: i
    }) : /* @__PURE__ */ x.jsx(S0, {
      className: O.spacer,
      ownerState: w
    }), /* @__PURE__ */ x.jsx(_, y({}, I, {
      children: r ? /* @__PURE__ */ x.jsx(M, y({}, N)) : /* @__PURE__ */ x.jsx(V, y({}, $))
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (lp.displayName = "PickersArrowSwitcher");
const P0 = ["hours", "minutes", "seconds"], O0 = (e) => P0.includes(e), td = (e, t) => t.getHours(e) * 3600 + t.getMinutes(e) * 60 + t.getSeconds(e), C0 = (e, t) => (n, r) => e ? t.isAfter(n, r) : td(n, t) > td(r, t), un = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function he(e) {
  const t = m.useRef(e);
  return un(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Yr(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: s = "value"
  } = e, {
    current: i
  } = m.useRef(t !== void 0), [a, l] = m.useState(n), c = i ? t : a;
  if (process.env.NODE_ENV !== "production") {
    m.useEffect(() => {
      i !== (t !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${s} state of ${r} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [s, r, t]);
    const {
      current: d
    } = m.useRef(n);
    m.useEffect(() => {
      !i && JSON.stringify(n) !== JSON.stringify(d) && console.error([`MUI: A component is changing the default ${s} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(n)]);
  }
  const u = m.useCallback((d) => {
    i || l(d);
  }, []);
  return [c, u];
}
const cp = {
  hasNextStep: !1,
  hasSeveralSteps: !1,
  goToNextStep: () => {
  },
  areViewsInSameStep: () => !0
};
function E0(e) {
  const {
    steps: t,
    isViewMatchingStep: n,
    onStepChange: r
  } = e;
  return (s) => {
    if (t == null)
      return cp;
    const i = t.findIndex((l) => n(s.view, l)), a = i === -1 || i === t.length - 1 ? null : t[i + 1];
    return {
      hasNextStep: a != null,
      hasSeveralSteps: t.length > 1,
      goToNextStep: () => {
        a != null && r(y({}, s, {
          step: a
        }));
      },
      areViewsInSameStep: (l, c) => {
        const u = t.find((p) => n(l, p)), d = t.find((p) => n(c, p));
        return u === d;
      }
    };
  };
}
let wa = !1;
function up({
  onChange: e,
  onViewChange: t,
  openTo: n,
  view: r,
  views: s,
  autoFocus: i,
  focusedView: a,
  onFocusedViewChange: l,
  getStepNavigation: c
}) {
  process.env.NODE_ENV !== "production" && (wa || (r != null && !s.includes(r) && (console.warn(`MUI X: \`view="${r}"\` is not a valid prop.`, `It must be an element of \`views=["${s.join('", "')}"]\`.`), wa = !0), r == null && n != null && !s.includes(n) && (console.warn(`MUI X: \`openTo="${n}"\` is not a valid prop.`, `It must be an element of \`views=["${s.join('", "')}"]\`.`), wa = !0)));
  const u = m.useRef(n), d = m.useRef(s), p = m.useRef(s.includes(n) ? n : s[0]), [h, b] = Yr({
    name: "useViews",
    state: "view",
    controlled: r,
    default: p.current
  }), g = m.useRef(i ? h : null), [f, v] = Yr({
    name: "useViews",
    state: "focusedView",
    controlled: a,
    default: g.current
  }), C = c ? c({
    setView: b,
    view: h,
    defaultView: p.current,
    views: s
  }) : cp;
  m.useEffect(() => {
    (u.current && u.current !== n || d.current && d.current.some((D) => !s.includes(D))) && (b(s.includes(n) ? n : s[0]), d.current = s, u.current = n);
  }, [n, b, h, s]);
  const T = s.indexOf(h), S = s[T - 1] ?? null, w = s[T + 1] ?? null, O = he((D, _) => {
    v(_ ? D : (I) => D === I ? null : I), l?.(D, _);
  }), R = he((D) => {
    O(D, !0), D !== h && (b(D), t && t(D));
  }), P = he(() => {
    w && R(w);
  }), E = he((D, _, I) => {
    const M = _ === "finish", F = I ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but when it's not the final view given all `views` -> overall selection state should be `partial`.
      s.indexOf(I) < s.length - 1
    ) : !!w;
    e(D, M && F ? "partial" : _, I);
    let V = null;
    if (I != null && I !== h ? V = I : M && (V = h), V == null)
      return;
    const A = s[s.indexOf(V) + 1];
    A == null || !C.areViewsInSameStep(V, A) || R(A);
  });
  return y({}, C, {
    view: h,
    setView: R,
    focusedView: f,
    setFocusedView: O,
    nextView: w,
    previousView: S,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: s.includes(n) ? n : s[0],
    goToNextView: P,
    setValueAndGoToNextView: E
  });
}
function T0(e, {
  disableFuture: t,
  maxDate: n,
  timezone: r
}) {
  const s = Ge();
  return m.useMemo(() => {
    const i = s.date(void 0, r), a = s.startOfMonth(t && s.isBefore(i, n) ? i : n);
    return !s.isAfter(a, e);
  }, [t, n, e, s, r]);
}
function k0(e, {
  disablePast: t,
  minDate: n,
  timezone: r
}) {
  const s = Ge();
  return m.useMemo(() => {
    const i = s.date(void 0, r), a = s.startOfMonth(t && s.isAfter(i, n) ? i : n);
    return !s.isBefore(a, e);
  }, [t, n, e, s, r]);
}
const Bo = 36, Ti = 2, ki = 320, D0 = 280, _l = 336, R0 = K("div")({
  overflow: "hidden",
  width: ki,
  maxHeight: _l,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}), os = ({
  name: e,
  timezone: t,
  value: n,
  defaultValue: r,
  referenceDate: s,
  onChange: i,
  valueManager: a
}) => {
  const l = Ge(), [c, u] = Yr({
    name: e,
    state: "value",
    controlled: n,
    default: r ?? a.emptyValue
  }), d = m.useMemo(() => a.getTimezone(l, c), [l, a, c]), p = he((f) => d == null ? f : a.setTimezone(l, d, f)), h = m.useMemo(() => t || d || (s ? l.getTimezone(Array.isArray(s) ? s[0] : s) : "default"), [t, d, s, l]), b = m.useMemo(() => a.setTimezone(l, h, c), [a, l, h, c]), g = he((f, ...v) => {
    const C = p(f);
    u(C), i?.(C, ...v);
  });
  return {
    value: b,
    handleValueChange: g,
    timezone: h
  };
}, sn = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
}, M0 = (e) => Math.max(...e.map((t) => sn[t.type] ?? 1)), co = (e, t, n) => {
  if (t === sn.year)
    return e.startOfYear(n);
  if (t === sn.month)
    return e.startOfMonth(n);
  if (t === sn.day)
    return e.startOfDay(n);
  let r = n;
  return t < sn.minutes && (r = e.setMinutes(r, 0)), t < sn.seconds && (r = e.setSeconds(r, 0)), t < sn.milliseconds && (r = e.setMilliseconds(r, 0)), r;
}, _0 = ({
  props: e,
  adapter: t,
  granularity: n,
  timezone: r,
  getTodayDate: s
}) => {
  let i = s ? s() : co(t, n, Jf(t, r));
  e.minDate != null && t.isAfterDay(e.minDate, i) && (i = co(t, n, e.minDate)), e.maxDate != null && t.isBeforeDay(e.maxDate, i) && (i = co(t, n, e.maxDate));
  const a = C0(e.disableIgnoringDatePartForTimeValidation ?? !1, t);
  return e.minTime != null && a(e.minTime, i) && (i = co(t, n, e.disableIgnoringDatePartForTimeValidation ? e.minTime : Hs(t, i, e.minTime))), e.maxTime != null && a(i, e.maxTime) && (i = co(t, n, e.disableIgnoringDatePartForTimeValidation ? e.maxTime : Hs(t, i, e.maxTime))), i;
}, I0 = ["value", "referenceDate"], dn = {
  emptyValue: null,
  getTodayValue: Jf,
  getInitialReferenceValue: (e) => {
    let {
      value: t,
      referenceDate: n
    } = e, r = te(e, I0);
    return r.adapter.isValid(t) ? t : n ?? _0(r);
  },
  cleanValue: Zv,
  areValuesEqual: Xv,
  isSameError: (e, t) => e === t,
  hasError: (e) => e != null,
  defaultErrorState: null,
  getTimezone: (e, t) => e.isValid(t) ? e.getTimezone(t) : null,
  setTimezone: (e, t, n) => n == null ? null : e.setTimezone(n, t)
}, N0 = {
  updateReferenceValue: (e, t, n) => e.isValid(t) ? t : n,
  getSectionsFromValue: (e, t) => t(e),
  getV7HiddenInputValueFromSections: ox,
  getV6InputValueFromSections: sx,
  parseValueStr: (e, t, n) => n(e.trim(), t),
  getDateFromSection: (e) => e,
  getDateSectionsFromValue: (e) => e,
  updateDateInValue: (e, t, n) => n,
  clearDateSections: (e) => e.map((t) => y({}, t, {
    value: ""
  }))
}, _r = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (_r.displayName = "ListContext");
function $0(e) {
  return Ne("MuiList", e);
}
Me("MuiList", ["root", "padding", "dense", "subheader"]);
const A0 = ["children", "className", "component", "dense", "disablePadding", "subheader"], F0 = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: s
  } = e;
  return Be({
    root: ["root", !n && "padding", r && "dense", s && "subheader"]
  }, $0, t);
}, j0 = K("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => y({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Il = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiList"
  }), {
    children: s,
    className: i,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = te(r, A0), p = m.useMemo(() => ({
    dense: l
  }), [l]), h = y({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), b = F0(h);
  return /* @__PURE__ */ x.jsx(_r.Provider, {
    value: p,
    children: /* @__PURE__ */ x.jsxs(j0, y({
      as: a,
      className: fe(b.root, i),
      ref: n,
      ownerState: h
    }, d, {
      children: [u, s]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Il.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const V0 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Pa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function nd(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function dp(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function uo(e, t, n, r, s, i) {
  let a = !1, l = s(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !dp(l, i) || c)
      l = s(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const fp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: s = !1,
    autoFocusItem: i = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: p = "selectedMenu"
  } = t, h = te(t, V0), b = m.useRef(null), g = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Xt(() => {
    s && b.current.focus();
  }, [s]), m.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (S, {
      direction: w
    }) => {
      const O = !b.current.style.width;
      if (S.clientHeight < b.current.clientHeight && O) {
        const R = `${Bf(Ot(S))}px`;
        b.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = R, b.current.style.width = `calc(100% + ${R})`;
      }
      return b.current;
    }
  }), []);
  const f = (S) => {
    const w = b.current, O = S.key, R = Ot(w).activeElement;
    if (O === "ArrowDown")
      S.preventDefault(), uo(w, R, u, c, Pa);
    else if (O === "ArrowUp")
      S.preventDefault(), uo(w, R, u, c, nd);
    else if (O === "Home")
      S.preventDefault(), uo(w, null, u, c, Pa);
    else if (O === "End")
      S.preventDefault(), uo(w, null, u, c, nd);
    else if (O.length === 1) {
      const P = g.current, E = O.toLowerCase(), D = performance.now();
      P.keys.length > 0 && (D - P.lastTime > 500 ? (P.keys = [], P.repeating = !0, P.previousKeyMatched = !0) : P.repeating && E !== P.keys[0] && (P.repeating = !1)), P.lastTime = D, P.keys.push(E);
      const _ = R && !P.repeating && dp(R, P);
      P.previousKeyMatched && (_ || uo(w, R, !1, c, Pa, P)) ? S.preventDefault() : P.previousKeyMatched = !1;
    }
    d && d(S);
  }, v = yt(b, n);
  let C = -1;
  m.Children.forEach(a, (S, w) => {
    if (!/* @__PURE__ */ m.isValidElement(S)) {
      C === w && (C += 1, C >= a.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ao.isFragment(S) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), S.props.disabled || (p === "selectedMenu" && S.props.selected || C === -1) && (C = w), C === w && (S.props.disabled || S.props.muiSkipListHighlight || S.type.muiSkipListHighlight) && (C += 1, C >= a.length && (C = -1));
  });
  const T = m.Children.map(a, (S, w) => {
    if (w === C) {
      const O = {};
      return i && (O.autoFocus = !0), S.props.tabIndex === void 0 && p === "selectedMenu" && (O.tabIndex = 0), /* @__PURE__ */ m.cloneElement(S, O);
    }
    return S;
  });
  return /* @__PURE__ */ x.jsx(Il, y({
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: f,
    tabIndex: s ? 0 : -1
  }, h, {
    children: T
  }));
});
process.env.NODE_ENV !== "production" && (fp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function Eo(e) {
  return e && e.ownerDocument || document;
}
function L0(e, t) {
  return Array.isArray(t) ? t.every((n) => e.indexOf(n) !== -1) : e.indexOf(t) !== -1;
}
const B0 = (e) => {
  setTimeout(e, 0);
}, pp = (e = document) => {
  const t = e.activeElement;
  return t ? t.shadowRoot ? pp(t.shadowRoot) : t : null;
}, Pt = (e) => pp(Eo(e)), W0 = "@media (pointer: fine)";
function Y0(e) {
  return dt("MuiPickersDay", e);
}
const Kn = ht("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);
function hp(e) {
  const {
    disabled: t,
    selected: n,
    today: r,
    outsideCurrentMonth: s,
    day: i,
    disableMargin: a,
    disableHighlightToday: l,
    showDaysOutsideCurrentMonth: c
  } = e, u = Ge(), {
    ownerState: d
  } = vt();
  return m.useMemo(() => y({}, d, {
    day: i,
    isDaySelected: n ?? !1,
    isDayDisabled: t ?? !1,
    isDayCurrent: r ?? !1,
    isDayOutsideMonth: s ?? !1,
    isDayStartOfWeek: u.isSameDay(i, u.startOfWeek(i)),
    isDayEndOfWeek: u.isSameDay(i, u.endOfWeek(i)),
    disableMargin: a ?? !1,
    disableHighlightToday: l ?? !1,
    showDaysOutsideCurrentMonth: c ?? !1
  }), [u, d, i, n, t, r, s, a, l, c]);
}
const z0 = ["autoFocus", "className", "classes", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "children", "isFirstVisibleCell", "isLastVisibleCell", "day", "selected", "disabled", "today", "outsideCurrentMonth", "disableMargin", "disableHighlightToday", "showDaysOutsideCurrentMonth"], U0 = (e, t) => {
  const {
    isDaySelected: n,
    isDayDisabled: r,
    isDayCurrent: s,
    isDayOutsideMonth: i,
    disableMargin: a,
    disableHighlightToday: l,
    showDaysOutsideCurrentMonth: c
  } = t, u = i && !c;
  return it({
    root: ["root", n && !u && "selected", r && "disabled", !a && "dayWithMargin", !l && s && "today", i && c && "dayOutsideMonth", u && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  }, Y0, e);
}, mp = ({
  theme: e
}) => y({}, e.typography.caption, {
  width: Bo,
  height: Bo,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.short
  }),
  color: (e.vars || e).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Br(e.palette.primary.main, e.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : Br(e.palette.primary.main, e.palette.action.focusOpacity),
    [`&.${Kn.selected}`]: {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${Kn.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    fontWeight: e.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${Kn.disabled}:not(.${Kn.selected})`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Kn.disabled}&.${Kn.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: !1
    },
    style: {
      margin: `0 ${Ti}px`
    }
  }, {
    props: {
      isDayOutsideMonth: !0,
      showDaysOutsideCurrentMonth: !0
    },
    style: {
      color: (e.vars || e).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: !1,
      isDayCurrent: !0
    },
    style: {
      [`&:not(.${Kn.selected})`]: {
        border: `1px solid ${(e.vars || e).palette.text.secondary}`
      }
    }
  }]
}), yp = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, !n.disableMargin && t.dayWithMargin, !n.disableHighlightToday && n.isDayCurrent && t.today, !n.isDayOutsideMonth && n.showDaysOutsideCurrentMonth && t.dayOutsideMonth, n.isDayOutsideMonth && !n.showDaysOutsideCurrentMonth && t.hiddenDaySpacingFiller];
}, H0 = K(fr, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: yp
})(mp), q0 = K("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: yp
})(({
  theme: e
}) => y({}, mp({
  theme: e
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
})), fo = () => {
}, Nl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersDay"
  }), {
    autoFocus: s = !1,
    className: i,
    classes: a,
    isAnimating: l,
    onClick: c,
    onDaySelect: u,
    onFocus: d = fo,
    onBlur: p = fo,
    onKeyDown: h = fo,
    onMouseDown: b = fo,
    onMouseEnter: g = fo,
    children: f,
    day: v,
    selected: C,
    disabled: T,
    today: S,
    outsideCurrentMonth: w,
    disableMargin: O,
    disableHighlightToday: R,
    showDaysOutsideCurrentMonth: P
  } = r, E = te(r, z0), D = hp({
    day: v,
    selected: C,
    disabled: T,
    today: S,
    outsideCurrentMonth: w,
    disableMargin: O,
    disableHighlightToday: R,
    showDaysOutsideCurrentMonth: P
  }), _ = U0(a, D), I = Ge(), M = m.useRef(null), F = Rt(M, n);
  un(() => {
    s && !T && !l && !w && M.current.focus();
  }, [s, T, l, w]);
  const N = (A) => {
    b(A), w && A.preventDefault();
  }, V = (A) => {
    A.defaultMuiPrevented = !0, T || u(v), w && A.currentTarget.focus(), c && c(A);
  };
  return w && !P ? /* @__PURE__ */ x.jsx(q0, {
    className: fe(_.root, _.hiddenDaySpacingFiller, i),
    ownerState: D,
    role: E.role
  }) : /* @__PURE__ */ x.jsx(H0, y({
    className: fe(_.root, i),
    ref: F,
    centerRipple: !0,
    disabled: T,
    tabIndex: C ? 0 : -1,
    onKeyDown: (A) => h(A, v),
    onFocus: (A) => d(A, v),
    onBlur: (A) => p(A, v),
    onMouseEnter: (A) => g(A, v),
    onClick: V,
    onMouseDown: N
  }, E, {
    ownerState: D,
    children: f ?? I.format(v, "dayOfMonth")
  }));
});
process.env.NODE_ENV !== "production" && (Nl.displayName = "PickersDayRaw");
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: o.oneOfType([o.func, o.shape({
    current: o.shape({
      focusVisible: o.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  component: o.elementType,
  /**
   * The date to show.
   */
  day: o.object.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: o.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  isAnimating: o.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: o.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: o.bool.isRequired,
  onBlur: o.func,
  onDaySelect: o.func.isRequired,
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  onKeyDown: o.func,
  onMouseEnter: o.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: o.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: o.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: o.bool,
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: o.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })])
});
const gp = /* @__PURE__ */ m.memo(Nl);
process.env.NODE_ENV !== "production" && (gp.displayName = "PickersDay");
const Dn = o.oneOfType([o.func, o.object]), Pr = (e) => e.saveQuery != null, bp = ({
  stateResponse: {
    // States and derived states
    localizedDigits: e,
    sectionsValueBoundaries: t,
    state: n,
    timezone: r,
    // Methods to update the states
    setCharacterQuery: s,
    setTempAndroidValueStr: i,
    updateSectionValue: a
  }
}) => {
  const l = Ge(), c = ({
    keyPressed: p,
    sectionIndex: h
  }, b, g) => {
    const f = p.toLowerCase(), v = n.sections[h];
    if (n.characterQuery != null && (!g || g(n.characterQuery.value)) && n.characterQuery.sectionIndex === h) {
      const T = `${n.characterQuery.value}${f}`, S = b(T, v);
      if (!Pr(S))
        return s({
          sectionIndex: h,
          value: T,
          sectionType: v.type
        }), S;
    }
    const C = b(f, v);
    return Pr(C) && !C.saveQuery ? (s(null), null) : (s({
      sectionIndex: h,
      value: f,
      sectionType: v.type
    }), Pr(C) ? null : C);
  }, u = (p) => {
    const h = (f, v, C) => {
      const T = v.filter((S) => S.toLowerCase().startsWith(C));
      return T.length === 0 ? {
        saveQuery: !1
      } : {
        sectionValue: T[0],
        shouldGoToNextSection: T.length === 1
      };
    }, b = (f, v, C, T) => {
      const S = (w) => ep(l, r, v.type, w);
      if (v.contentType === "letter")
        return h(v.format, S(v.format), f);
      if (C && T != null && xl(l, C).contentType === "letter") {
        const w = S(C), O = h(C, w, f);
        return Pr(O) ? {
          saveQuery: !1
        } : y({}, O, {
          sectionValue: T(O.sectionValue, w)
        });
      }
      return {
        saveQuery: !1
      };
    };
    return c(p, (f, v) => {
      switch (v.type) {
        case "month": {
          const C = (T) => Vu(l, T, l.formats.month, v.format);
          return b(f, v, l.formats.month, C);
        }
        case "weekDay": {
          const C = (T, S) => S.indexOf(T).toString();
          return b(f, v, l.formats.weekday, C);
        }
        case "meridiem":
          return b(f, v);
        default:
          return {
            saveQuery: !1
          };
      }
    });
  }, d = (p) => {
    const h = ({
      queryValue: g,
      skipIfBelowMinimum: f,
      section: v
    }) => {
      const C = dr(g, e), T = Number(C), S = t[v.type]({
        currentDate: null,
        format: v.format,
        contentType: v.contentType
      });
      if (T > S.maximum)
        return {
          saveQuery: !1
        };
      if (f && T < S.minimum)
        return {
          saveQuery: !0
        };
      const w = T * 10 > S.maximum || C.length === S.maximum.toString().length;
      return {
        sectionValue: tp(l, T, S, e, v),
        shouldGoToNextSection: w
      };
    };
    return c(p, (g, f) => {
      if (f.contentType === "digit" || f.contentType === "digit-with-letter")
        return h({
          queryValue: g,
          skipIfBelowMinimum: !1,
          section: f
        });
      if (f.type === "month") {
        np(l, "digit", "month", "MM");
        const v = h({
          queryValue: g,
          skipIfBelowMinimum: !0,
          section: {
            type: f.type,
            format: "MM",
            hasLeadingZerosInInput: !0,
            contentType: "digit",
            maxLength: 2
          }
        });
        if (Pr(v))
          return v;
        const C = Vu(l, v.sectionValue, "MM", f.format);
        return y({}, v, {
          sectionValue: C
        });
      }
      if (f.type === "weekDay") {
        const v = h({
          queryValue: g,
          skipIfBelowMinimum: !0,
          section: f
        });
        if (Pr(v))
          return v;
        const C = Pi(l, f.format)[Number(v.sectionValue) - 1];
        return y({}, v, {
          sectionValue: C
        });
      }
      return {
        saveQuery: !1
      };
    }, (g) => ju(g, e));
  };
  return he((p) => {
    const h = n.sections[p.sectionIndex], g = ju(p.keyPressed, e) ? d(y({}, p, {
      keyPressed: Sl(p.keyPressed, e)
    })) : u(p);
    if (g == null) {
      i(null);
      return;
    }
    a({
      section: h,
      newSectionValue: g.sectionValue,
      shouldGoToNextSection: g.shouldGoToNextSection
    });
  });
}, rd = {};
function G0(e, t) {
  const n = m.useRef(rd);
  return n.current === rd && (n.current = e(t)), n;
}
const K0 = [];
function Z0(e) {
  m.useEffect(e, K0);
}
class $l {
  static create() {
    return new $l();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function Ir() {
  const e = G0($l.create).current;
  return Z0(e.disposeEffect), e;
}
const ss = ({
  props: e,
  value: t,
  timezone: n,
  adapter: r
}) => {
  if (t === null)
    return null;
  const {
    shouldDisableDate: s,
    shouldDisableMonth: i,
    shouldDisableYear: a,
    disablePast: l,
    disableFuture: c,
    minDate: u,
    maxDate: d
  } = e, p = r.date(void 0, n);
  switch (!0) {
    case !r.isValid(t):
      return "invalidDate";
    case !!(s && s(t)):
      return "shouldDisableDate";
    case !!(i && i(t)):
      return "shouldDisableMonth";
    case !!(a && a(t)):
      return "shouldDisableYear";
    case !!(c && r.isAfterDay(t, p)):
      return "disableFuture";
    case !!(l && r.isBeforeDay(t, p)):
      return "disablePast";
    case !!(u && r.isBeforeDay(t, u)):
      return "minDate";
    case !!(d && r.isAfterDay(t, d)):
      return "maxDate";
    default:
      return null;
  }
};
ss.valueManager = dn;
function vp(e) {
  const {
    props: t,
    validator: n,
    value: r,
    timezone: s,
    onError: i
  } = e, a = Ge(), l = m.useRef(n.valueManager.defaultErrorState), c = n({
    adapter: a,
    value: r,
    timezone: s,
    props: t
  }), u = n.valueManager.hasError(c);
  m.useEffect(() => {
    i && !n.valueManager.isSameError(c, l.current) && i(c, r), l.current = c;
  }, [n, i, c, r]);
  const d = he((p) => n({
    adapter: a,
    value: p,
    timezone: s,
    props: t
  }));
  return {
    validationError: c,
    hasValidationError: u,
    getValidationErrorForNewValue: d
  };
}
const X0 = 5e3, xp = (e) => {
  const t = Ge(), n = Un(), r = hn(), {
    manager: {
      validator: s,
      valueType: i,
      internal_valueManager: a,
      internal_fieldValueManager: l
    },
    internalPropsWithDefaults: c,
    internalPropsWithDefaults: {
      value: u,
      defaultValue: d,
      referenceDate: p,
      onChange: h,
      format: b,
      formatDensity: g = "dense",
      selectedSections: f,
      onSelectedSectionsChange: v,
      shouldRespectLeadingZeros: C = !1,
      timezone: T,
      enableAccessibleFieldDOMStructure: S = !0
    },
    forwardedProps: {
      error: w
    }
  } = e, {
    value: O,
    handleValueChange: R,
    timezone: P
  } = os({
    name: "a field component",
    timezone: T,
    value: u,
    defaultValue: d,
    referenceDate: p,
    onChange: h,
    valueManager: a
  }), E = m.useRef(O);
  m.useEffect(() => {
    E.current = O;
  }, [O]);
  const {
    hasValidationError: D
  } = vp({
    props: c,
    validator: s,
    timezone: P,
    value: O,
    onError: c.onError
  }), _ = m.useMemo(() => w !== void 0 ? w : D, [D, w]), I = m.useMemo(() => tx(t), [t]), M = m.useMemo(() => ix(t, I, P), [t, I, P]), F = m.useCallback((W) => l.getSectionsFromValue(W, (se) => zu({
    adapter: t,
    localeText: n,
    localizedDigits: I,
    format: b,
    date: se,
    formatDensity: g,
    shouldRespectLeadingZeros: C,
    enableAccessibleFieldDOMStructure: S,
    isRtl: r
  })), [l, b, n, I, r, C, t, g, S]), [N, V] = m.useState(() => {
    const W = F(O);
    Bu(W, i);
    const se = {
      sections: W,
      lastExternalValue: O,
      lastSectionsDependencies: {
        format: b,
        isRtl: r,
        locale: t.locale
      },
      tempValueStrAndroid: null,
      characterQuery: null
    }, ge = M0(W), we = a.getInitialReferenceValue({
      referenceDate: p,
      value: O,
      adapter: t,
      props: c,
      granularity: ge,
      timezone: P
    });
    return y({}, se, {
      referenceValue: we
    });
  }), [A, $] = Yr({
    controlled: f,
    default: null,
    name: "useField",
    state: "selectedSections"
  }), L = (W) => {
    $(W), v?.(W);
  }, Y = m.useMemo(() => Ba(A, N.sections), [A, N.sections]), k = Y === "all" ? 0 : Y, j = m.useMemo(() => cx(N.sections, r && !S), [N.sections, r, S]), U = m.useMemo(() => N.sections.every((W) => W.value === ""), [N.sections]), G = (W) => {
    const se = {
      validationError: s({
        adapter: t,
        value: W,
        timezone: P,
        props: c
      })
    };
    R(W, se);
  }, H = (W, se) => {
    const ge = [...N.sections];
    return ge[W] = y({}, ge[W], {
      value: se,
      modified: !0
    }), ge;
  }, Z = m.useRef(null), X = Ir(), re = (W) => {
    k != null && (Z.current = {
      sectionIndex: k,
      value: W
    }, X.start(0, () => {
      Z.current = null;
    }));
  }, ee = () => {
    a.areValuesEqual(t, O, a.emptyValue) ? V((W) => y({}, W, {
      sections: W.sections.map((se) => y({}, se, {
        value: ""
      })),
      tempValueStrAndroid: null,
      characterQuery: null
    })) : (V((W) => y({}, W, {
      characterQuery: null
    })), G(a.emptyValue));
  }, J = () => {
    if (k == null)
      return;
    const W = N.sections[k];
    W.value !== "" && (re(""), l.getDateFromSection(O, W) === null ? V((se) => y({}, se, {
      sections: H(k, ""),
      tempValueStrAndroid: null,
      characterQuery: null
    })) : (V((se) => y({}, se, {
      characterQuery: null
    })), G(l.updateDateInValue(O, W, null))));
  }, q = (W) => {
    const se = (we, ue) => {
      const de = t.parse(we, b);
      if (!t.isValid(de))
        return null;
      const De = zu({
        adapter: t,
        localeText: n,
        localizedDigits: I,
        format: b,
        date: de,
        formatDensity: g,
        shouldRespectLeadingZeros: C,
        enableAccessibleFieldDOMStructure: S,
        isRtl: r
      });
      return Yu(t, de, De, ue, !1);
    }, ge = l.parseValueStr(W, N.referenceValue, se);
    G(ge);
  }, z = Ir(), B = ({
    section: W,
    newSectionValue: se,
    shouldGoToNextSection: ge
  }) => {
    X.clear(), z.clear();
    const we = l.getDateFromSection(O, W);
    ge && k < N.sections.length - 1 && L(k + 1);
    const ue = H(k, se), de = l.getDateSectionsFromValue(ue, W), De = rx(t, de, I);
    if (t.isValid(De)) {
      const Ee = Yu(t, De, de, l.getDateFromSection(N.referenceValue, W), !0);
      return we == null && z.start(0, () => {
        E.current === O && V((Ce) => y({}, Ce, {
          sections: l.clearDateSections(N.sections, W),
          tempValueStrAndroid: null
        }));
      }), G(l.updateDateInValue(O, W, Ee));
    }
    return de.every((Ee) => Ee.value !== "") && (we == null || t.isValid(we)) ? (re(se), G(l.updateDateInValue(O, W, De))) : we != null ? (re(se), G(l.updateDateInValue(O, W, null))) : V((Ee) => y({}, Ee, {
      sections: ue,
      tempValueStrAndroid: null
    }));
  }, ne = (W) => V((se) => y({}, se, {
    tempValueStrAndroid: W
  })), Q = he((W) => {
    V((se) => y({}, se, {
      characterQuery: W
    }));
  });
  if (O !== N.lastExternalValue) {
    const W = Z.current != null && !t.isValid(l.getDateFromSection(O, N.sections[Z.current.sectionIndex]));
    let se;
    W ? se = H(Z.current.sectionIndex, Z.current.value) : se = F(O), V((ge) => y({}, ge, {
      lastExternalValue: O,
      sections: se,
      sectionsDependencies: {
        format: b,
        isRtl: r,
        locale: t.locale
      },
      referenceValue: W ? ge.referenceValue : l.updateReferenceValue(t, O, ge.referenceValue),
      tempValueStrAndroid: null
    }));
  }
  if (r !== N.lastSectionsDependencies.isRtl || b !== N.lastSectionsDependencies.format || t.locale !== N.lastSectionsDependencies.locale) {
    const W = F(O);
    Bu(W, i), V((se) => y({}, se, {
      lastSectionsDependencies: {
        format: b,
        isRtl: r,
        locale: t.locale
      },
      sections: W,
      tempValueStrAndroid: null,
      characterQuery: null
    }));
  }
  N.characterQuery != null && !_ && k == null && Q(null), N.characterQuery != null && N.sections[N.characterQuery.sectionIndex]?.type !== N.characterQuery.sectionType && Q(null), m.useEffect(() => {
    Z.current != null && (Z.current = null);
  });
  const ae = Ir();
  return m.useEffect(() => (N.characterQuery != null && ae.start(X0, () => Q(null)), () => {
  }), [N.characterQuery, Q, ae]), m.useEffect(() => {
    N.tempValueStrAndroid != null && k != null && J();
  }, [N.sections]), {
    // States and derived states
    activeSectionIndex: k,
    areAllSectionsEmpty: U,
    error: _,
    localizedDigits: I,
    parsedSelectedSections: Y,
    sectionOrder: j,
    sectionsValueBoundaries: M,
    state: N,
    timezone: P,
    value: O,
    // Methods to update the states
    clearValue: ee,
    clearActiveSection: J,
    setCharacterQuery: Q,
    setSelectedSections: L,
    setTempAndroidValueStr: ne,
    updateSectionValue: B,
    updateValueFromValueStr: q,
    // Utilities methods
    getSectionsFromValue: F
  };
};
function Sp(e) {
  const {
    manager: {
      internal_useApplyDefaultValuesToFieldInternalProps: t
    },
    internalProps: n,
    skipContextFieldRefAssignment: r
  } = e, s = Ol(), i = rp(), a = Rt(n.unstableFieldRef, r ? null : i?.fieldRef), l = s?.setValue, c = m.useCallback((d, p) => l?.(d, {
    validationError: p.validationError,
    shouldClose: !1
  }), [l]), u = m.useMemo(() => i != null && s != null ? y({
    value: s.value,
    onChange: c,
    timezone: s.timezone,
    disabled: s.disabled,
    readOnly: s.readOnly,
    autoFocus: s.autoFocus && !s.open,
    focused: s.open ? !0 : void 0,
    format: s.fieldFormat,
    formatDensity: i.formatDensity,
    enableAccessibleFieldDOMStructure: i.enableAccessibleFieldDOMStructure,
    selectedSections: i.selectedSections,
    onSelectedSectionsChange: i.onSelectedSectionsChange,
    unstableFieldRef: a
  }, n) : n, [s, i, n, c, a]);
  return t(u);
}
function Al(e) {
  const {
    focused: t,
    domGetters: n,
    stateResponse: {
      // States and derived states
      parsedSelectedSections: r,
      state: s
    }
  } = e;
  if (!n.isReady())
    return;
  const i = Eo(n.getRoot()).getSelection();
  if (!i)
    return;
  if (r == null) {
    i.rangeCount > 0 && // Firefox can return a Restricted object here
    i.getRangeAt(0).startContainer instanceof Node && n.getRoot().contains(i.getRangeAt(0).startContainer) && i.removeAllRanges(), t && n.getRoot().blur();
    return;
  }
  if (!n.getRoot().contains(Pt(n.getRoot())))
    return;
  const a = new window.Range();
  let l;
  r === "all" ? l = n.getRoot() : s.sections[r].type === "empty" ? l = n.getSectionContainer(r) : l = n.getSectionContent(r), a.selectNodeContents(l), l.focus(), i.removeAllRanges(), i.addRange(a);
}
function wp(e) {
  const t = Ge(), {
    manager: {
      internal_fieldValueManager: n
    },
    internalPropsWithDefaults: {
      minutesStep: r,
      disabled: s,
      readOnly: i
    },
    stateResponse: {
      // States and derived states
      state: a,
      value: l,
      activeSectionIndex: c,
      parsedSelectedSections: u,
      sectionsValueBoundaries: d,
      localizedDigits: p,
      timezone: h,
      sectionOrder: b,
      // Methods to update the states
      clearValue: g,
      clearActiveSection: f,
      setSelectedSections: v,
      updateSectionValue: C
    }
  } = e;
  return he((T) => {
    if (!s)
      switch (!0) {
        // Select all
        case ((T.ctrlKey || T.metaKey) && String.fromCharCode(T.keyCode) === "A" && !T.shiftKey && !T.altKey): {
          T.preventDefault(), v("all");
          break;
        }
        // Move selection to next section
        case T.key === "ArrowRight": {
          if (T.preventDefault(), u == null)
            v(b.startIndex);
          else if (u === "all")
            v(b.endIndex);
          else {
            const S = b.neighbors[u].rightIndex;
            S !== null && v(S);
          }
          break;
        }
        // Move selection to previous section
        case T.key === "ArrowLeft": {
          if (T.preventDefault(), u == null)
            v(b.endIndex);
          else if (u === "all")
            v(b.startIndex);
          else {
            const S = b.neighbors[u].leftIndex;
            S !== null && v(S);
          }
          break;
        }
        // Reset the value of the selected section
        case T.key === "Delete": {
          if (T.preventDefault(), i)
            break;
          u == null || u === "all" ? g() : f();
          break;
        }
        // Increment / decrement the selected section value
        case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(T.key): {
          if (T.preventDefault(), i || c == null)
            break;
          u === "all" && v(c);
          const S = a.sections[c], w = J0(t, h, S, T.key, d, p, n.getDateFromSection(l, S), {
            minutesStep: r
          });
          C({
            section: S,
            newSectionValue: w,
            shouldGoToNextSection: !1
          });
          break;
        }
      }
  });
}
function Q0(e) {
  switch (e) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
}
function J0(e, t, n, r, s, i, a, l) {
  const c = Q0(r), u = r === "Home", d = r === "End", p = n.value === "" || u || d, h = () => {
    const g = s[n.type]({
      currentDate: a,
      format: n.format,
      contentType: n.contentType
    }), f = (T) => tp(e, T, g, i, n), v = n.type === "minutes" && l?.minutesStep ? l.minutesStep : 1;
    let C;
    if (p) {
      if (n.type === "year" && !d && !u)
        return e.formatByString(e.date(void 0, t), n.format);
      c > 0 || u ? C = g.minimum : C = g.maximum;
    } else
      C = parseInt(dr(n.value, i), 10) + c * v;
    return C % v !== 0 && ((c < 0 || u) && (C += v - (v + C) % v), (c > 0 || d) && (C -= C % v)), C > g.maximum ? f(g.minimum + (C - g.maximum - 1) % (g.maximum - g.minimum + 1)) : C < g.minimum ? f(g.maximum - (g.minimum - C - 1) % (g.maximum - g.minimum + 1)) : f(C);
  }, b = () => {
    const g = ep(e, t, n.type, n.format);
    if (g.length === 0)
      return n.value;
    if (p)
      return c > 0 || u ? g[0] : g[g.length - 1];
    const C = ((g.indexOf(n.value) + c) % g.length + g.length) % g.length;
    return g[C];
  };
  return n.contentType === "digit" || n.contentType === "digit-with-letter" ? h() : b();
}
function eS(e) {
  const {
    manager: t,
    focused: n,
    setFocused: r,
    domGetters: s,
    stateResponse: i,
    applyCharacterEditing: a,
    internalPropsWithDefaults: l,
    stateResponse: {
      // States and derived states
      parsedSelectedSections: c,
      sectionOrder: u,
      state: d,
      // Methods to update the states
      clearValue: p,
      setCharacterQuery: h,
      setSelectedSections: b,
      updateValueFromValueStr: g
    },
    internalPropsWithDefaults: {
      disabled: f = !1,
      readOnly: v = !1
    }
  } = e, C = wp({
    manager: t,
    internalPropsWithDefaults: l,
    stateResponse: i
  }), T = Ir(), S = he((E) => {
    f || !s.isReady() || (r(!0), c === "all" ? T.start(0, () => {
      const D = document.getSelection().getRangeAt(0).startOffset;
      if (D === 0) {
        b(u.startIndex);
        return;
      }
      let _ = 0, I = 0;
      for (; I < D && _ < d.sections.length; ) {
        const M = d.sections[_];
        _ += 1, I += `${M.startSeparator}${M.value || M.placeholder}${M.endSeparator}`.length;
      }
      b(_ - 1);
    }) : n ? s.getRoot().contains(E.target) || b(u.startIndex) : (r(!0), b(u.startIndex)));
  }), w = he((E) => {
    if (!s.isReady() || c !== "all")
      return;
    const _ = E.target.textContent ?? "";
    s.getRoot().innerHTML = d.sections.map((I) => `${I.startSeparator}${I.value || I.placeholder}${I.endSeparator}`).join(""), Al({
      focused: n,
      domGetters: s,
      stateResponse: i
    }), _.length === 0 || _.charCodeAt(0) === 10 ? (p(), b("all")) : _.length > 1 ? g(_) : (c === "all" && b(0), a({
      keyPressed: _,
      sectionIndex: 0
    }));
  }), O = he((E) => {
    if (v || c !== "all") {
      E.preventDefault();
      return;
    }
    const D = E.clipboardData.getData("text");
    E.preventDefault(), h(null), g(D);
  }), R = he(() => {
    if (n || f || !s.isReady())
      return;
    const E = Pt(s.getRoot());
    r(!0), s.getSectionIndexFromDOMElement(E) != null || b(u.startIndex);
  }), P = he(() => {
    setTimeout(() => {
      if (!s.isReady())
        return;
      const E = Pt(s.getRoot());
      !s.getRoot().contains(E) && (r(!1), b(null));
    });
  });
  return {
    // Event handlers
    onKeyDown: C,
    onBlur: P,
    onFocus: R,
    onClick: S,
    onPaste: O,
    onInput: w,
    // Other
    contentEditable: c === "all",
    tabIndex: c === 0 ? -1 : 0
    // TODO: Try to set to undefined when there is a section selected.
  };
}
function tS(e) {
  const {
    manager: {
      internal_fieldValueManager: t
    },
    stateResponse: {
      // States and derived states
      areAllSectionsEmpty: n,
      state: r,
      // Methods to update the states
      updateValueFromValueStr: s
    }
  } = e, i = he((l) => {
    s(l.target.value);
  });
  return {
    value: m.useMemo(() => n ? "" : t.getV7HiddenInputValueFromSections(r.sections), [n, r.sections, t]),
    onChange: i
  };
}
function nS(e) {
  const {
    stateResponse: {
      // Methods to update the states
      setSelectedSections: t
    },
    internalPropsWithDefaults: {
      disabled: n = !1
    }
  } = e, r = m.useCallback((s) => (i) => {
    n || i.isDefaultPrevented() || t(s);
  }, [n, t]);
  return m.useCallback((s) => ({
    "data-sectionindex": s,
    onClick: r(s)
  }), [r]);
}
function rS(e) {
  const t = Ge(), n = Un(), {
    focused: r,
    domGetters: s,
    stateResponse: i,
    applyCharacterEditing: a,
    manager: {
      internal_fieldValueManager: l
    },
    stateResponse: {
      // States and derived states
      parsedSelectedSections: c,
      sectionsValueBoundaries: u,
      state: d,
      value: p,
      // Methods to update the states
      clearActiveSection: h,
      setCharacterQuery: b,
      setSelectedSections: g,
      updateSectionValue: f,
      updateValueFromValueStr: v
    },
    internalPropsWithDefaults: {
      disabled: C = !1,
      readOnly: T = !1
    }
  } = e, S = c === "all", w = !S && !C && !T, O = he((I) => {
    if (!s.isReady())
      return;
    const M = d.sections[I];
    s.getSectionContent(I).innerHTML = M.value || M.placeholder, Al({
      focused: r,
      domGetters: s,
      stateResponse: i
    });
  }), R = he((I) => {
    if (!s.isReady())
      return;
    const M = I.target, F = M.textContent ?? "", N = s.getSectionIndexFromDOMElement(M), V = d.sections[N];
    if (T) {
      O(N);
      return;
    }
    if (F.length === 0) {
      if (V.value === "") {
        O(N);
        return;
      }
      const A = I.nativeEvent.inputType;
      if (A === "insertParagraph" || A === "insertLineBreak") {
        O(N);
        return;
      }
      O(N), h();
      return;
    }
    a({
      keyPressed: F,
      sectionIndex: N
    }), O(N);
  }), P = he((I) => {
    I.preventDefault();
  }), E = he((I) => {
    if (I.preventDefault(), T || C || typeof c != "number")
      return;
    const M = d.sections[c], F = I.clipboardData.getData("text"), N = /^[a-zA-Z]+$/.test(F), V = /^[0-9]+$/.test(F), A = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(F);
    M.contentType === "letter" && N || M.contentType === "digit" && V || M.contentType === "digit-with-letter" && A ? (b(null), f({
      section: M,
      newSectionValue: F,
      shouldGoToNextSection: !0
    })) : !N && !V && (b(null), v(F));
  }), D = he((I) => {
    I.preventDefault(), I.dataTransfer.dropEffect = "none";
  }), _ = m.useCallback((I) => () => {
    C || g(I);
  }, [C, g]);
  return m.useCallback((I, M) => {
    const F = u[I.type]({
      currentDate: l.getDateFromSection(p, I),
      contentType: I.contentType,
      format: I.format
    });
    return {
      // Event handlers
      onInput: R,
      onPaste: E,
      onMouseUp: P,
      onDragOver: D,
      onFocus: _(M),
      // Aria attributes
      "aria-readonly": T,
      "aria-valuenow": sS(I, t),
      "aria-valuemin": F.minimum,
      "aria-valuemax": F.maximum,
      "aria-valuetext": I.value ? oS(I, t) : n.empty,
      "aria-label": n[I.type],
      "aria-disabled": C,
      // Other
      tabIndex: S || M > 0 ? -1 : 0,
      contentEditable: !S && !C && !T,
      role: "spinbutton",
      "data-range-position": I.dateName || void 0,
      spellCheck: w ? !1 : void 0,
      autoCapitalize: w ? "off" : void 0,
      autoCorrect: w ? "off" : void 0,
      children: I.value || I.placeholder,
      inputMode: I.contentType === "letter" ? "text" : "numeric"
    };
  }, [u, S, C, T, w, n, t, R, E, P, D, _, l, p]);
}
function oS(e, t) {
  if (e.value)
    switch (e.type) {
      case "month": {
        if (e.contentType === "digit") {
          const r = t.setMonth(t.date(), Number(e.value) - 1);
          return t.isValid(r) ? t.format(r, "month") : "";
        }
        const n = t.parse(e.value, e.format);
        return n && t.isValid(n) ? t.format(n, "month") : void 0;
      }
      case "day":
        if (e.contentType === "digit") {
          const n = t.setDate(t.startOfYear(t.date()), Number(e.value));
          return t.isValid(n) ? t.format(n, "dayOfMonthFull") : "";
        }
        return e.value;
      case "weekDay":
        return;
      default:
        return;
    }
}
function sS(e, t) {
  if (e.value)
    switch (e.type) {
      case "weekDay":
        return e.contentType === "letter" ? void 0 : Number(e.value);
      case "meridiem": {
        const n = t.parse(`01:00 ${e.value}`, `${t.formats.hours12h}:${t.formats.minutes} ${e.format}`);
        return n ? t.getHours(n) >= 12 ? 1 : 0 : void 0;
      }
      case "day":
        return e.contentType === "digit-with-letter" ? parseInt(e.value, 10) : Number(e.value);
      case "month": {
        if (e.contentType === "digit")
          return Number(e.value);
        const n = t.parse(e.value, e.format);
        return n ? t.getMonth(n) + 1 : void 0;
      }
      default:
        return e.contentType !== "letter" ? Number(e.value) : void 0;
    }
}
const iS = (e) => {
  const {
    props: t,
    manager: n,
    skipContextFieldRefAssignment: r,
    manager: {
      valueType: s,
      internal_useOpenPickerButtonAriaLabel: i
    }
  } = e, {
    internalProps: a,
    forwardedProps: l
  } = Qf(t, s), c = Sp({
    manager: n,
    internalProps: a,
    skipContextFieldRefAssignment: r
  }), {
    sectionListRef: u,
    onBlur: d,
    onClick: p,
    onFocus: h,
    onInput: b,
    onPaste: g,
    onKeyDown: f,
    onClear: v,
    clearable: C
  } = l, {
    disabled: T = !1,
    readOnly: S = !1,
    autoFocus: w = !1,
    focused: O,
    unstableFieldRef: R
  } = c, P = m.useRef(null), E = Rt(u, P), D = m.useMemo(() => ({
    isReady: () => P.current != null,
    getRoot: () => P.current.getRoot(),
    getSectionContainer: (W) => P.current.getSectionContainer(W),
    getSectionContent: (W) => P.current.getSectionContent(W),
    getSectionIndexFromDOMElement: (W) => P.current.getSectionIndexFromDOMElement(W)
  }), [P]), _ = xp({
    manager: n,
    internalPropsWithDefaults: c,
    forwardedProps: l
  }), {
    // States and derived states
    areAllSectionsEmpty: I,
    error: M,
    parsedSelectedSections: F,
    sectionOrder: N,
    state: V,
    value: A,
    // Methods to update the states
    clearValue: $,
    setSelectedSections: L
  } = _, Y = bp({
    stateResponse: _
  }), k = i(A), [j, U] = m.useState(!1);
  function G(W = 0) {
    if (T || !P.current || // if the field is already focused, we don't need to focus it again
    od(P) != null)
      return;
    const se = Ba(W, V.sections);
    U(!0), P.current.getSectionContent(se).focus();
  }
  const H = eS({
    manager: n,
    internalPropsWithDefaults: c,
    stateResponse: _,
    applyCharacterEditing: Y,
    focused: j,
    setFocused: U,
    domGetters: D
  }), Z = tS({
    manager: n,
    stateResponse: _
  }), X = nS({
    stateResponse: _,
    internalPropsWithDefaults: c
  }), re = rS({
    manager: n,
    stateResponse: _,
    applyCharacterEditing: Y,
    internalPropsWithDefaults: c,
    domGetters: D,
    focused: j
  }), ee = he((W) => {
    f?.(W), H.onKeyDown(W);
  }), J = he((W) => {
    d?.(W), H.onBlur(W);
  }), q = he((W) => {
    h?.(W), H.onFocus(W);
  }), z = he((W) => {
    W.isDefaultPrevented() || (p?.(W), H.onClick(W));
  }), B = he((W) => {
    g?.(W), H.onPaste(W);
  }), ne = he((W) => {
    b?.(W), H.onInput(W);
  }), Q = he((W, ...se) => {
    W.preventDefault(), v?.(W, ...se), $(), sd(P) ? L(N.startIndex) : G(0);
  }), ae = m.useMemo(() => V.sections.map((W, se) => {
    const ge = re(W, se);
    return {
      container: X(se),
      content: re(W, se),
      before: {
        children: W.startSeparator
      },
      after: {
        children: W.endSeparator,
        "data-range-position": W.isEndFormatSeparator ? ge["data-range-position"] : void 0
      }
    };
  }), [V.sections, X, re]);
  return m.useEffect(() => {
    if (P.current == null)
      throw new Error(["MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`", "You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.", "", "If you want to keep using an `<input />` HTML element for the editing, please add the `enableAccessibleFieldDOMStructure={false}` prop to your Picker or Field component:", "", "<DatePicker enableAccessibleFieldDOMStructure={false} slots={{ textField: MyCustomTextField }} />", "", "Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"].join(`
`));
    w && !T && P.current && P.current.getSectionContent(N.startIndex).focus();
  }, []), un(() => {
    if (!(!j || !P.current)) {
      if (F === "all")
        P.current.getRoot().focus();
      else if (typeof F == "number") {
        const W = P.current.getSectionContent(F);
        W && W.focus();
      }
    }
  }, [F, j]), un(() => {
    Al({
      focused: j,
      domGetters: D,
      stateResponse: _
    });
  }), m.useImperativeHandle(R, () => ({
    getSections: () => V.sections,
    getActiveSectionIndex: () => od(P),
    setSelectedSections: (W) => {
      if (T || !P.current)
        return;
      const se = Ba(W, V.sections);
      U((se === "all" ? 0 : se) !== null), L(W);
    },
    focusField: G,
    isFieldFocused: () => sd(P)
  })), y({}, l, H, {
    onBlur: J,
    onClick: z,
    onFocus: q,
    onInput: ne,
    onPaste: B,
    onKeyDown: ee,
    onClear: Q
  }, Z, {
    error: M,
    clearable: !!(C && !I && !S && !T),
    focused: O ?? j,
    sectionListRef: E,
    // Additional
    enableAccessibleFieldDOMStructure: !0,
    elements: ae,
    areAllSectionsEmpty: I,
    disabled: T,
    readOnly: S,
    autoFocus: w,
    openPickerAriaLabel: k
  });
};
function od(e) {
  const t = Pt(e.current?.getRoot());
  return !t || !e.current || !e.current.getRoot().contains(t) ? null : e.current.getSectionIndexFromDOMElement(t);
}
function sd(e) {
  const t = Pt(e.current?.getRoot());
  return !!e.current && e.current.getRoot().contains(t);
}
const kr = (e) => e.replace(/[\u2066\u2067\u2068\u2069]/g, ""), aS = (e, t, n) => {
  let r = 0, s = n ? 1 : 0;
  const i = [];
  for (let a = 0; a < e.length; a += 1) {
    const l = e[a], c = Pl(l, n ? "input-rtl" : "input-ltr", t), u = `${l.startSeparator}${c}${l.endSeparator}`, d = kr(u).length, p = u.length, h = kr(c), b = s + (h === "" ? 0 : c.indexOf(h[0])) + l.startSeparator.length, g = b + h.length;
    i.push(y({}, l, {
      start: r,
      end: r + d,
      startInInput: b,
      endInInput: g
    })), r += d, s += p;
  }
  return i;
}, lS = (e) => {
  const t = hn(), n = Ir(), r = Ir(), {
    props: s,
    manager: i,
    skipContextFieldRefAssignment: a,
    manager: {
      valueType: l,
      internal_valueManager: c,
      internal_fieldValueManager: u,
      internal_useOpenPickerButtonAriaLabel: d
    }
  } = e, {
    internalProps: p,
    forwardedProps: h
  } = Qf(s, l), b = Sp({
    manager: i,
    internalProps: p,
    skipContextFieldRefAssignment: a
  }), {
    onFocus: g,
    onClick: f,
    onPaste: v,
    onBlur: C,
    onKeyDown: T,
    onClear: S,
    clearable: w,
    inputRef: O,
    placeholder: R
  } = h, {
    readOnly: P = !1,
    disabled: E = !1,
    autoFocus: D = !1,
    focused: _,
    unstableFieldRef: I
  } = b, M = m.useRef(null), F = Rt(O, M), N = xp({
    manager: i,
    internalPropsWithDefaults: b,
    forwardedProps: h
  }), {
    // States and derived states
    activeSectionIndex: V,
    areAllSectionsEmpty: A,
    error: $,
    localizedDigits: L,
    parsedSelectedSections: Y,
    sectionOrder: k,
    state: j,
    value: U,
    // Methods to update the states
    clearValue: G,
    clearActiveSection: H,
    setCharacterQuery: Z,
    setSelectedSections: X,
    setTempAndroidValueStr: re,
    updateSectionValue: ee,
    updateValueFromValueStr: J,
    // Utilities methods
    getSectionsFromValue: q
  } = N, z = bp({
    stateResponse: N
  }), B = d(U), ne = m.useMemo(() => aS(j.sections, L, t), [j.sections, L, t]);
  function Q() {
    const ie = M.current.selectionStart ?? 0;
    let ve;
    ie <= ne[0].startInInput || ie >= ne[ne.length - 1].endInInput ? ve = 1 : ve = ne.findIndex((Ye) => Ye.startInInput - Ye.startSeparator.length > ie);
    const Te = ve === -1 ? ne.length - 1 : ve - 1;
    X(Te);
  }
  function ae(ie = 0) {
    Pt(M.current) !== M.current && (M.current?.focus(), X(ie));
  }
  const W = he((ie) => {
    g?.(ie);
    const ve = M.current;
    n.start(0, () => {
      !ve || ve !== M.current || V == null && (// avoid selecting all sections when focusing empty field without value
      ve.value.length && Number(ve.selectionEnd) - Number(ve.selectionStart) === ve.value.length ? X("all") : Q());
    });
  }), se = he((ie, ...ve) => {
    ie.isDefaultPrevented() || (f?.(ie, ...ve), Q());
  }), ge = he((ie) => {
    if (v?.(ie), ie.preventDefault(), P || E)
      return;
    const ve = ie.clipboardData.getData("text");
    if (typeof Y == "number") {
      const Te = j.sections[Y], Ye = /^[a-zA-Z]+$/.test(ve), rt = /^[0-9]+$/.test(ve), pe = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(ve);
      if (Te.contentType === "letter" && Ye || Te.contentType === "digit" && rt || Te.contentType === "digit-with-letter" && pe) {
        Z(null), ee({
          section: Te,
          newSectionValue: ve,
          shouldGoToNextSection: !0
        });
        return;
      }
      if (Ye || rt)
        return;
    }
    Z(null), J(ve);
  }), we = he((ie) => {
    C?.(ie), X(null);
  }), ue = he((ie) => {
    if (P)
      return;
    const ve = ie.target.value;
    if (ve === "") {
      G();
      return;
    }
    const Te = ie.nativeEvent.data, Ye = Te && Te.length > 1, rt = Ye ? Te : ve, pe = kr(rt);
    if (Y === "all" && X(V), V == null || Ye) {
      J(Ye ? Te : pe);
      return;
    }
    let be;
    if (Y === "all" && pe.length === 1)
      be = pe;
    else {
      const ze = kr(u.getV6InputValueFromSections(ne, L, t));
      let Se = -1, ct = -1;
      for (let rn = 0; rn < ze.length; rn += 1)
        Se === -1 && ze[rn] !== pe[rn] && (Se = rn), ct === -1 && ze[ze.length - rn - 1] !== pe[pe.length - rn - 1] && (ct = rn);
      const wt = ne[V];
      if (Se < wt.start || ze.length - ct - 1 > wt.end)
        return;
      const ro = pe.length - ze.length + wt.end - kr(wt.endSeparator || "").length;
      be = pe.slice(wt.start + kr(wt.startSeparator || "").length, ro);
    }
    if (be.length === 0) {
      lx() && re(rt), H();
      return;
    }
    z({
      keyPressed: be,
      sectionIndex: V
    });
  }), de = he((ie, ...ve) => {
    ie.preventDefault(), S?.(ie, ...ve), G(), id(M) ? X(k.startIndex) : ae(0);
  }), De = wp({
    manager: i,
    internalPropsWithDefaults: b,
    stateResponse: N
  }), Ee = he((ie) => {
    T?.(ie), De(ie);
  }), Ce = m.useMemo(() => R !== void 0 ? R : u.getV6InputValueFromSections(q(c.emptyValue), L, t), [R, u, q, c.emptyValue, L, t]), Ze = m.useMemo(() => j.tempValueStrAndroid ?? u.getV6InputValueFromSections(j.sections, L, t), [j.sections, u, j.tempValueStrAndroid, L, t]);
  m.useEffect(() => {
    M.current && M.current === Pt(M.current) && X("all");
  }, []), un(() => {
    function ie() {
      if (!M.current)
        return;
      if (Y == null) {
        M.current.scrollLeft && (M.current.scrollLeft = 0);
        return;
      }
      if (M.current !== Pt(M.current))
        return;
      const ve = M.current.scrollTop;
      if (Y === "all")
        M.current.select();
      else {
        const Te = ne[Y], Ye = Te.type === "empty" ? Te.startInInput - Te.startSeparator.length : Te.startInInput, rt = Te.type === "empty" ? Te.endInInput + Te.endSeparator.length : Te.endInInput;
        (Ye !== M.current.selectionStart || rt !== M.current.selectionEnd) && M.current === Pt(M.current) && M.current.setSelectionRange(Ye, rt), r.start(0, () => {
          M.current && M.current === Pt(M.current) && // The section might loose all selection, where `selectionStart === selectionEnd`
          // https://github.com/mui/mui-x/pull/13652
          M.current.selectionStart === M.current.selectionEnd && (M.current.selectionStart !== Ye || M.current.selectionEnd !== rt) && ie();
        });
      }
      M.current.scrollTop = ve;
    }
    ie();
  });
  const ft = m.useMemo(() => V == null || j.sections[V].contentType === "letter" ? "text" : "numeric", [V, j.sections]), Oe = !(M.current && M.current === Pt(M.current)) && A;
  return m.useImperativeHandle(I, () => ({
    getSections: () => j.sections,
    getActiveSectionIndex: () => {
      const ie = M.current.selectionStart ?? 0, ve = M.current.selectionEnd ?? 0;
      if (ie === 0 && ve === 0)
        return null;
      const Te = ie <= ne[0].startInInput ? 1 : ne.findIndex((Ye) => Ye.startInInput - Ye.startSeparator.length > ie);
      return Te === -1 ? ne.length - 1 : Te - 1;
    },
    setSelectedSections: (ie) => X(ie),
    focusField: ae,
    isFieldFocused: () => id(M)
  })), y({}, h, {
    error: $,
    clearable: !!(w && !A && !P && !E),
    onBlur: we,
    onClick: se,
    onFocus: W,
    onPaste: ge,
    onKeyDown: Ee,
    onClear: de,
    inputRef: F,
    // Additional
    enableAccessibleFieldDOMStructure: !1,
    placeholder: Ce,
    inputMode: ft,
    autoComplete: "off",
    value: Oe ? "" : Ze,
    onChange: ue,
    focused: _,
    disabled: E,
    readOnly: P,
    autoFocus: D,
    openPickerAriaLabel: B
  });
};
function id(e) {
  return e.current === Pt(e.current);
}
const cS = (e) => {
  const t = rp();
  return (e.props.enableAccessibleFieldDOMStructure ?? t?.enableAccessibleFieldDOMStructure ?? !0 ? iS : lS)(e);
};
function uS(e = {}) {
  const {
    enableAccessibleFieldDOMStructure: t = !0
  } = e;
  return m.useMemo(() => ({
    valueType: "date",
    validator: ss,
    internal_valueManager: dn,
    internal_fieldValueManager: N0,
    internal_enableAccessibleFieldDOMStructure: t,
    internal_useApplyDefaultValuesToFieldInternalProps: fS,
    internal_useOpenPickerButtonAriaLabel: dS
  }), [t]);
}
function dS(e) {
  const t = Ge(), n = Un();
  return m.useMemo(() => {
    const r = t.isValid(e) ? t.format(e, "fullDate") : null;
    return n.openDatePickerDialogue(r);
  }, [e, n, t]);
}
function fS(e) {
  const t = Ge(), n = is(e);
  return m.useMemo(() => y({}, e, n, {
    format: e.format ?? t.formats.keyboardDate
  }), [e, n, t]);
}
function is(e) {
  const t = Ge(), n = bx();
  return m.useMemo(() => ({
    disablePast: e.disablePast ?? !1,
    disableFuture: e.disableFuture ?? !1,
    minDate: $u(t, e.minDate, n.minDate),
    maxDate: $u(t, e.maxDate, n.maxDate)
  }), [e.minDate, e.maxDate, e.disableFuture, e.disablePast, t, n]);
}
const pS = (e) => {
  const t = uS(e);
  return cS({
    manager: t,
    props: e
  });
}, hS = ["onChange", "maxRows", "minRows", "style", "value"];
function ws(e) {
  return parseInt(e, 10) || 0;
}
const mS = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function yS(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ad(e) {
  return yS(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Pp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: s,
    minRows: i = 1,
    style: a,
    value: l
  } = t, c = te(t, hS), {
    current: u
  } = m.useRef(l != null), d = m.useRef(null), p = yt(n, d), h = m.useRef(null), b = m.useRef(null), g = m.useCallback(() => {
    const S = d.current, w = b.current;
    if (!S || !w)
      return;
    const R = cr(S).getComputedStyle(S);
    if (R.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = R.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const P = R.boxSizing, E = ws(R.paddingBottom) + ws(R.paddingTop), D = ws(R.borderBottomWidth) + ws(R.borderTopWidth), _ = w.scrollHeight;
    w.value = "x";
    const I = w.scrollHeight;
    let M = _;
    i && (M = Math.max(Number(i) * I, M)), s && (M = Math.min(Number(s) * I, M)), M = Math.max(M, I);
    const F = M + (P === "border-box" ? E + D : 0), N = Math.abs(M - _) <= 1;
    return {
      outerHeightStyle: F,
      overflowing: N
    };
  }, [s, i, t.placeholder]), f = nr(() => {
    const S = d.current, w = g();
    if (!S || !w || ad(w))
      return !1;
    const O = w.outerHeightStyle;
    return h.current != null && h.current !== O;
  }), v = m.useCallback(() => {
    const S = d.current, w = g();
    if (!S || !w || ad(w))
      return;
    const O = w.outerHeightStyle;
    h.current !== O && (h.current = O, S.style.height = `${O}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [g]), C = m.useRef(-1);
  Xt(() => {
    const S = Ff(v), w = d?.current;
    if (!w)
      return;
    const O = cr(w);
    O.addEventListener("resize", S);
    let R;
    return typeof ResizeObserver < "u" && (R = new ResizeObserver(() => {
      f() && (R.unobserve(w), cancelAnimationFrame(C.current), v(), C.current = requestAnimationFrame(() => {
        R.observe(w);
      }));
    }), R.observe(w)), () => {
      S.clear(), cancelAnimationFrame(C.current), O.removeEventListener("resize", S), R && R.disconnect();
    };
  }, [g, v, f]), Xt(() => {
    v();
  });
  const T = (S) => {
    u || v(), r && r(S);
  };
  return /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ x.jsx("textarea", y({
      value: l,
      onChange: T,
      ref: p,
      rows: i,
      style: a
    }, c)), /* @__PURE__ */ x.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: b,
      tabIndex: -1,
      style: y({}, mS.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Pp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
function Jr({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, s) => (r[s] = e[s], n && typeof e[s] > "u" && (r[s] = n[s]), r), {});
}
const as = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (as.displayName = "FormControlContext");
function Rn() {
  return m.useContext(as);
}
function Op(e) {
  return /* @__PURE__ */ x.jsx(Cf, y({}, e, {
    defaultTheme: Si,
    themeId: si
  }));
}
process.env.NODE_ENV !== "production" && (Op.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function ld(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ks(e, t = !1) {
  return e && (ld(e.value) && e.value !== "" || t && ld(e.defaultValue) && e.defaultValue !== "");
}
function gS(e) {
  return e.startAdornment;
}
function bS(e) {
  return Ne("MuiInputBase", e);
}
const zr = Me("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), vS = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Di = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${le(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Ri = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, xS = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: s,
    endAdornment: i,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: p,
    size: h,
    startAdornment: b,
    type: g
  } = e, f = {
    root: ["root", `color${le(n)}`, r && "disabled", s && "error", c && "fullWidth", a && "focused", l && "formControl", h && h !== "medium" && `size${le(h)}`, d && "multiline", b && "adornedStart", i && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", d && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", b && "inputAdornedStart", i && "inputAdornedEnd", p && "readOnly"]
  };
  return Be(f, bS, t);
}, Mi = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Di
})(({
  theme: e,
  ownerState: t
}) => y({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${zr.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && y({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), _i = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Ri
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = y({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), s = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return y({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${zr.formControl} &`]: {
      "&::-webkit-input-placeholder": s,
      "&::-moz-placeholder": s,
      // Firefox 19+
      "&:-ms-input-placeholder": s,
      // IE11
      "&::-ms-input-placeholder": s,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${zr.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), SS = /* @__PURE__ */ x.jsx(Op, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), Ii = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const s = We({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: p,
    disabled: h,
    disableInjectingGlobalStyles: b,
    endAdornment: g,
    fullWidth: f = !1,
    id: v,
    inputComponent: C = "input",
    inputProps: T = {},
    inputRef: S,
    maxRows: w,
    minRows: O,
    multiline: R = !1,
    name: P,
    onBlur: E,
    onChange: D,
    onClick: _,
    onFocus: I,
    onKeyDown: M,
    onKeyUp: F,
    placeholder: N,
    readOnly: V,
    renderSuffix: A,
    rows: $,
    slotProps: L = {},
    slots: Y = {},
    startAdornment: k,
    type: j = "text",
    value: U
  } = s, G = te(s, vS), H = T.value != null ? T.value : U, {
    current: Z
  } = m.useRef(H != null), X = m.useRef(), re = m.useCallback((Oe) => {
    process.env.NODE_ENV !== "production" && Oe && Oe.nodeName !== "INPUT" && !Oe.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ee = yt(X, S, T.ref, re), [J, q] = m.useState(!1), z = Rn();
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    if (z)
      return z.registerEffect();
  }, [z]);
  const B = Jr({
    props: s,
    muiFormControl: z,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  B.focused = z ? z.focused : J, m.useEffect(() => {
    !z && h && J && (q(!1), E && E());
  }, [z, h, J, E]);
  const ne = z && z.onFilled, Q = z && z.onEmpty, ae = m.useCallback((Oe) => {
    Ks(Oe) ? ne && ne() : Q && Q();
  }, [ne, Q]);
  Xt(() => {
    Z && ae({
      value: H
    });
  }, [H, ae, Z]);
  const W = (Oe) => {
    if (B.disabled) {
      Oe.stopPropagation();
      return;
    }
    I && I(Oe), T.onFocus && T.onFocus(Oe), z && z.onFocus ? z.onFocus(Oe) : q(!0);
  }, se = (Oe) => {
    E && E(Oe), T.onBlur && T.onBlur(Oe), z && z.onBlur ? z.onBlur(Oe) : q(!1);
  }, ge = (Oe, ...ie) => {
    if (!Z) {
      const ve = Oe.target || X.current;
      if (ve == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : On(1));
      ae({
        value: ve.value
      });
    }
    T.onChange && T.onChange(Oe, ...ie), D && D(Oe, ...ie);
  };
  m.useEffect(() => {
    ae(X.current);
  }, []);
  const we = (Oe) => {
    X.current && Oe.currentTarget === Oe.target && X.current.focus(), _ && _(Oe);
  };
  let ue = C, de = T;
  R && ue === "input" && ($ ? (process.env.NODE_ENV !== "production" && (O || w) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), de = y({
    type: void 0,
    minRows: $,
    maxRows: $
  }, de)) : de = y({
    type: void 0,
    maxRows: w,
    minRows: O
  }, de), ue = Pp);
  const De = (Oe) => {
    ae(Oe.animationName === "mui-auto-fill-cancel" ? X.current : {
      value: "x"
    });
  };
  m.useEffect(() => {
    z && z.setAdornedStart(!!k);
  }, [z, k]);
  const Ee = y({}, s, {
    color: B.color || "primary",
    disabled: B.disabled,
    endAdornment: g,
    error: B.error,
    focused: B.focused,
    formControl: z,
    fullWidth: f,
    hiddenLabel: B.hiddenLabel,
    multiline: R,
    size: B.size,
    startAdornment: k,
    type: j
  }), Ce = xS(Ee), Ze = Y.root || u.Root || Mi, ft = L.root || d.root || {}, mt = Y.input || u.Input || _i;
  return de = y({}, de, (r = L.input) != null ? r : d.input), /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [!b && SS, /* @__PURE__ */ x.jsxs(Ze, y({}, ft, !Wr(Ze) && {
      ownerState: y({}, Ee, ft.ownerState)
    }, {
      ref: n,
      onClick: we
    }, G, {
      className: fe(Ce.root, ft.className, c, V && "MuiInputBase-readOnly"),
      children: [k, /* @__PURE__ */ x.jsx(as.Provider, {
        value: null,
        children: /* @__PURE__ */ x.jsx(mt, y({
          ownerState: Ee,
          "aria-invalid": B.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: l,
          defaultValue: p,
          disabled: B.disabled,
          id: v,
          onAnimationStart: De,
          name: P,
          placeholder: N,
          readOnly: V,
          required: B.required,
          rows: $,
          value: H,
          onKeyDown: M,
          onKeyUp: F,
          type: j
        }, de, !Wr(mt) && {
          as: ue,
          ownerState: y({}, Ee, de.ownerState)
        }, {
          ref: ee,
          className: fe(Ce.input, de.className, V && "MuiInputBase-readOnly"),
          onBlur: se,
          onChange: ge,
          onFocus: W
        }))
      }), g, A ? A(y({}, B, {
        startAdornment: k
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Ii.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: vi,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: en,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
function wS(e) {
  return Ne("MuiInput", e);
}
const po = y({}, zr, Me("MuiInput", ["root", "underline", "input"])), PS = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], OS = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, s = Be({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, wS, t);
  return y({}, t, s);
}, CS = K(Mi, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Di(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), y({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${po.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${po.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${po.disabled}, .${po.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${po.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), ES = K(_i, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Ri
})({}), Ni = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, s, i, a;
  const l = We({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: p = !1,
    inputComponent: h = "input",
    multiline: b = !1,
    slotProps: g,
    slots: f = {},
    type: v = "text"
  } = l, C = te(l, PS), T = OS(l), w = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, O = g ?? d ? It(g ?? d, w) : w, R = (r = (s = f.root) != null ? s : u.Root) != null ? r : CS, P = (i = (a = f.input) != null ? a : u.Input) != null ? i : ES;
  return /* @__PURE__ */ x.jsx(Ii, y({
    slots: {
      root: R,
      input: P
    },
    slotProps: O,
    fullWidth: p,
    inputComponent: h,
    multiline: b,
    ref: n,
    type: v
  }, C, {
    classes: T
  }));
});
process.env.NODE_ENV !== "production" && (Ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: en,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Ni.muiName = "Input";
function TS(e) {
  return Ne("MuiFilledInput", e);
}
const Zn = y({}, zr, Me("MuiFilledInput", ["root", "underline", "input"])), kS = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], DS = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, s = Be({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, TS, t);
  return y({}, t, s);
}, RS = K(Mi, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Di(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", s = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return y({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${Zn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${Zn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Zn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Zn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : s}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Zn.disabled}, .${Zn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Zn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && y({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), MS = K(_i, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Ri
})(({
  theme: e,
  ownerState: t
}) => y({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), $i = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, s, i, a;
  const l = We({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: p = "input",
    multiline: h = !1,
    slotProps: b,
    slots: g = {},
    type: f = "text"
  } = l, v = te(l, kS), C = y({}, l, {
    fullWidth: d,
    inputComponent: p,
    multiline: h,
    type: f
  }), T = DS(l), S = {
    root: {
      ownerState: C
    },
    input: {
      ownerState: C
    }
  }, w = b ?? u ? It(S, b ?? u) : S, O = (r = (s = g.root) != null ? s : c.Root) != null ? r : RS, R = (i = (a = g.input) != null ? a : c.Input) != null ? i : MS;
  return /* @__PURE__ */ x.jsx(Ii, y({
    slots: {
      root: O,
      input: R
    },
    componentsProps: w,
    fullWidth: d,
    inputComponent: p,
    multiline: h,
    ref: n,
    type: f
  }, v, {
    classes: T
  }));
});
process.env.NODE_ENV !== "production" && ($i.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: en,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
$i.muiName = "Input";
var cd;
const _S = ["children", "classes", "className", "label", "notched"], IS = K("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: tn
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), NS = K("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: tn
})(({
  ownerState: e,
  theme: t
}) => y({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && y({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function Cp(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, s = te(e, _S), i = n != null && n !== "", a = y({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ x.jsx(IS, y({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, s, {
    children: /* @__PURE__ */ x.jsx(NS, {
      ownerState: a,
      children: i ? /* @__PURE__ */ x.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        cd || (cd = /* @__PURE__ */ x.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (Cp.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
function $S(e) {
  return Ne("MuiOutlinedInput", e);
}
const Nn = y({}, zr, Me("MuiOutlinedInput", ["root", "notchedOutline", "input"])), AS = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], FS = (e) => {
  const {
    classes: t
  } = e, r = Be({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, $S, t);
  return y({}, t, r);
}, jS = K(Mi, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Di
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return y({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Nn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Nn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Nn.focused} .${Nn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Nn.error} .${Nn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Nn.disabled} .${Nn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && y({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), VS = K(Cp, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), LS = K(_i, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Ri
})(({
  theme: e,
  ownerState: t
}) => y({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), Ai = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, s, i, a, l;
  const c = We({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: p = "input",
    label: h,
    multiline: b = !1,
    notched: g,
    slots: f = {},
    type: v = "text"
  } = c, C = te(c, AS), T = FS(c), S = Rn(), w = Jr({
    props: c,
    muiFormControl: S,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), O = y({}, c, {
    color: w.color || "primary",
    disabled: w.disabled,
    error: w.error,
    focused: w.focused,
    formControl: S,
    fullWidth: d,
    hiddenLabel: w.hiddenLabel,
    multiline: b,
    size: w.size,
    type: v
  }), R = (r = (s = f.root) != null ? s : u.Root) != null ? r : jS, P = (i = (a = f.input) != null ? a : u.Input) != null ? i : LS;
  return /* @__PURE__ */ x.jsx(Ii, y({
    slots: {
      root: R,
      input: P
    },
    renderSuffix: (E) => /* @__PURE__ */ x.jsx(VS, {
      ownerState: O,
      className: T.notchedOutline,
      label: h != null && h !== "" && w.required ? l || (l = /* @__PURE__ */ x.jsxs(m.Fragment, {
        children: [h, " ", "*"]
      })) : h,
      notched: typeof g < "u" ? g : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: d,
    inputComponent: p,
    multiline: b,
    ref: n,
    type: v
  }, C, {
    classes: y({}, T, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: en,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Ai.muiName = "Input";
function BS(e) {
  return Ne("MuiFormLabel", e);
}
const To = Me("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), WS = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], YS = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: s,
    error: i,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${le(n)}`, s && "disabled", i && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return Be(c, BS, t);
}, zS = K("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => y({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => y({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${To.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${To.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${To.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), US = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${To.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Ep = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: s,
    className: i,
    component: a = "label"
  } = r, l = te(r, WS), c = Rn(), u = Jr({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = y({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = YS(d);
  return /* @__PURE__ */ x.jsxs(zS, y({
    as: a,
    ownerState: d,
    className: fe(p.root, i),
    ref: n
  }, l, {
    children: [s, u.required && /* @__PURE__ */ x.jsxs(US, {
      ownerState: d,
      "aria-hidden": !0,
      className: p.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Ep.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function HS(e) {
  return Ne("MuiInputLabel", e);
}
Me("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const qS = ["disableAnimation", "margin", "shrink", "variant", "className"], GS = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: s,
    disableAnimation: i,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !i && "animated", s && "shrink", r && r !== "normal" && `size${le(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = Be(c, HS, t);
  return y({}, t, u);
}, KS = K(Ep, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${To.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && y({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && y({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && y({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), Fl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: s = !1,
    shrink: i,
    className: a
  } = r, l = te(r, qS), c = Rn();
  let u = i;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = Jr({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), p = y({}, r, {
    disableAnimation: s,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), h = GS(p);
  return /* @__PURE__ */ x.jsx(KS, y({
    "data-shrink": u,
    ownerState: p,
    ref: n,
    className: fe(h.root, a)
  }, l, {
    classes: h
  }));
});
process.env.NODE_ENV !== "production" && (Fl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function ZS(e) {
  return Ne("MuiFormControl", e);
}
Me("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const XS = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], QS = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, s = {
    root: ["root", n !== "none" && `margin${le(n)}`, r && "fullWidth"]
  };
  return Be(s, ZS, t);
}, JS = K("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => y({}, t.root, t[`margin${le(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => y({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), jl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiFormControl"
  }), {
    children: s,
    className: i,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: h = !1,
    margin: b = "none",
    required: g = !1,
    size: f = "medium",
    variant: v = "outlined"
  } = r, C = te(r, XS), T = y({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: h,
    margin: b,
    required: g,
    size: f,
    variant: v
  }), S = QS(T), [w, O] = m.useState(() => {
    let F = !1;
    return s && m.Children.forEach(s, (N) => {
      if (!Co(N, ["Input", "Select"]))
        return;
      const V = Co(N, ["Select"]) ? N.props.input : N;
      V && gS(V.props) && (F = !0);
    }), F;
  }), [R, P] = m.useState(() => {
    let F = !1;
    return s && m.Children.forEach(s, (N) => {
      Co(N, ["Input", "Select"]) && (Ks(N.props, !0) || Ks(N.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [E, D] = m.useState(!1);
  c && E && D(!1);
  const _ = d !== void 0 && !c ? d : E;
  let I;
  if (process.env.NODE_ENV !== "production") {
    const F = m.useRef(!1);
    I = () => (F.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), F.current = !0, () => {
      F.current = !1;
    });
  }
  const M = m.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: O,
    color: a,
    disabled: c,
    error: u,
    filled: R,
    focused: _,
    fullWidth: p,
    hiddenLabel: h,
    size: f,
    onBlur: () => {
      D(!1);
    },
    onEmpty: () => {
      P(!1);
    },
    onFilled: () => {
      P(!0);
    },
    onFocus: () => {
      D(!0);
    },
    registerEffect: I,
    required: g,
    variant: v
  }), [w, a, c, u, R, _, p, h, I, g, f, v]);
  return /* @__PURE__ */ x.jsx(as.Provider, {
    value: M,
    children: /* @__PURE__ */ x.jsx(JS, y({
      as: l,
      ownerState: T,
      className: fe(S.root, i),
      ref: n
    }, C, {
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (jl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function ew(e) {
  return Ne("MuiFormHelperText", e);
}
const ud = Me("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var dd;
const tw = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], nw = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: s,
    error: i,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", s && "disabled", i && "error", r && `size${le(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Be(u, ew, t);
}, rw = K("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${le(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${ud.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ud.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Vl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: i,
    component: a = "p"
  } = r, l = te(r, tw), c = Rn(), u = Jr({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = y({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = nw(d);
  return /* @__PURE__ */ x.jsx(rw, y({
    as: a,
    ownerState: d,
    className: fe(p.root, i),
    ref: n
  }, l, {
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      dd || (dd = /* @__PURE__ */ x.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : s
  }));
});
process.env.NODE_ENV !== "production" && (Vl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
const Tp = (e) => e.scrollTop;
function Zs(e, t) {
  var n, r;
  const {
    timeout: s,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof s == "number" ? s : s[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
const ow = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Ua(e) {
  return `scale(${e}, ${e ** 2})`;
}
const sw = {
  entering: {
    opacity: 1,
    transform: Ua(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Oa = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Fi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: s = !0,
    children: i,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: h,
    onExiting: b,
    style: g,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = zt
  } = t, C = te(t, ow), T = Lf(), S = m.useRef(), w = Zr(), O = m.useRef(null), R = yt(O, ns(i), n), P = (V) => (A) => {
    if (V) {
      const $ = O.current;
      A === void 0 ? V($) : V($, A);
    }
  }, E = P(d), D = P((V, A) => {
    Tp(V);
    const {
      duration: $,
      delay: L,
      easing: Y
    } = Zs({
      style: g,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let k;
    f === "auto" ? (k = w.transitions.getAutoHeightDuration(V.clientHeight), S.current = k) : k = $, V.style.transition = [w.transitions.create("opacity", {
      duration: k,
      delay: L
    }), w.transitions.create("transform", {
      duration: Oa ? k : k * 0.666,
      delay: L,
      easing: Y
    })].join(","), c && c(V, A);
  }), _ = P(u), I = P(b), M = P((V) => {
    const {
      duration: A,
      delay: $,
      easing: L
    } = Zs({
      style: g,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let Y;
    f === "auto" ? (Y = w.transitions.getAutoHeightDuration(V.clientHeight), S.current = Y) : Y = A, V.style.transition = [w.transitions.create("opacity", {
      duration: Y,
      delay: $
    }), w.transitions.create("transform", {
      duration: Oa ? Y : Y * 0.666,
      delay: Oa ? $ : $ || Y * 0.333,
      easing: L
    })].join(","), V.style.opacity = 0, V.style.transform = Ua(0.75), p && p(V);
  }), F = P(h), N = (V) => {
    f === "auto" && T.start(S.current || 0, V), r && r(O.current, V);
  };
  return /* @__PURE__ */ x.jsx(v, y({
    appear: s,
    in: l,
    nodeRef: O,
    onEnter: D,
    onEntered: _,
    onEntering: E,
    onExit: M,
    onExited: F,
    onExiting: I,
    addEndListener: N,
    timeout: f === "auto" ? null : f
  }, C, {
    children: (V, A) => /* @__PURE__ */ m.cloneElement(i, y({
      style: y({
        opacity: 0,
        transform: Ua(0.75),
        visibility: V === "exited" && !l ? "hidden" : void 0
      }, sw[V], g, i.props.style),
      ref: R
    }, A))
  }));
});
process.env.NODE_ENV !== "production" && (Fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: ts.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
Fi.muiSupportAuto = !0;
function iw(e) {
  const t = Ot(e);
  return t.body === e ? cr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ko(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function fd(e) {
  return parseInt(cr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function aw(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function pd(e, t, n, r, s) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = i.indexOf(a) === -1, c = !aw(a);
    l && c && ko(a, s);
  });
}
function Ca(e, t) {
  let n = -1;
  return e.some((r, s) => t(r) ? (n = s, !0) : !1), n;
}
function lw(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (iw(r)) {
      const a = Bf(Ot(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${fd(r) + a}px`;
      const l = Ot(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${fd(c) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Ot(r).body;
    else {
      const a = r.parentElement, l = cr(r);
      i = a?.nodeName === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
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
    n.forEach(({
      value: i,
      el: a,
      property: l
    }) => {
      i ? a.style.setProperty(l, i) : a.style.removeProperty(l);
    });
  };
}
function cw(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class uw {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ko(t.modalRef, !1);
    const s = cw(n);
    pd(n, t.mount, t.modalRef, s, !0);
    const i = Ca(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: s
    }), r);
  }
  mount(t, n) {
    const r = Ca(this.containers, (i) => i.modals.indexOf(t) !== -1), s = this.containers[r];
    s.restore || (s.restore = lw(s, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const s = Ca(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[s];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ko(t.modalRef, n), pd(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && ko(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const dw = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function fw(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function pw(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function hw(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || pw(e));
}
function mw(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(dw)).forEach((r, s) => {
    const i = fw(r);
    i === -1 || !hw(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: s,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, s) => r.tabIndex === s.tabIndex ? r.documentOrder - s.documentOrder : r.tabIndex - s.tabIndex).map((r) => r.node).concat(t);
}
function yw() {
  return !0;
}
function Wo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: s = !1,
    getTabbable: i = mw,
    isEnabled: a = yw,
    open: l
  } = e, c = m.useRef(!1), u = m.useRef(null), d = m.useRef(null), p = m.useRef(null), h = m.useRef(null), b = m.useRef(!1), g = m.useRef(null), f = yt(ns(t), g), v = m.useRef(null);
  m.useEffect(() => {
    !l || !g.current || (b.current = !n);
  }, [n, l]), m.useEffect(() => {
    if (!l || !g.current)
      return;
    const S = Ot(g.current);
    return g.current.contains(S.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), b.current && g.current.focus()), () => {
      s || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !g.current)
      return;
    const S = Ot(g.current), w = (P) => {
      v.current = P, !(r || !a() || P.key !== "Tab") && S.activeElement === g.current && P.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, O = () => {
      const P = g.current;
      if (P === null)
        return;
      if (!S.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (P.contains(S.activeElement) || r && S.activeElement !== u.current && S.activeElement !== d.current)
        return;
      if (S.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!b.current)
        return;
      let E = [];
      if ((S.activeElement === u.current || S.activeElement === d.current) && (E = i(g.current)), E.length > 0) {
        var D, _;
        const I = !!((D = v.current) != null && D.shiftKey && ((_ = v.current) == null ? void 0 : _.key) === "Tab"), M = E[0], F = E[E.length - 1];
        typeof M != "string" && typeof F != "string" && (I ? F.focus() : M.focus());
      } else
        P.focus();
    };
    S.addEventListener("focusin", O), S.addEventListener("keydown", w, !0);
    const R = setInterval(() => {
      S.activeElement && S.activeElement.tagName === "BODY" && O();
    }, 50);
    return () => {
      clearInterval(R), S.removeEventListener("focusin", O), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, s, a, l, i]);
  const C = (S) => {
    p.current === null && (p.current = S.relatedTarget), b.current = !0, h.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, T = (S) => {
    p.current === null && (p.current = S.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ x.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ m.cloneElement(t, {
      ref: f,
      onFocus: C
    }), /* @__PURE__ */ x.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: ts,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Wo.propTypes = Af(Wo.propTypes));
function gw(e) {
  return typeof e == "function" ? e() : e;
}
const Yo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    children: r,
    container: s,
    disablePortal: i = !1
  } = t, [a, l] = m.useState(null), c = yt(/* @__PURE__ */ m.isValidElement(r) ? ns(r) : null, n);
  if (Xt(() => {
    i || l(gw(s) || document.body);
  }, [s, i]), Xt(() => {
    if (a && !i)
      return Aa(n, a), () => {
        Aa(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ m.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ m.cloneElement(r, u);
    }
    return /* @__PURE__ */ x.jsx(m.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ x.jsx(m.Fragment, {
    children: a && /* @__PURE__ */ Fm.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
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
  container: o.oneOfType([En, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = Af(Yo.propTypes));
const bw = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], vw = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, mr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Zr(), s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: h,
    onExit: b,
    onExited: g,
    onExiting: f,
    style: v,
    timeout: C = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = zt
  } = t, S = te(t, bw), w = m.useRef(null), O = yt(w, ns(l), n), R = (N) => (V) => {
    if (N) {
      const A = w.current;
      V === void 0 ? N(A) : N(A, V);
    }
  }, P = R(h), E = R((N, V) => {
    Tp(N);
    const A = Zs({
      style: v,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    N.style.webkitTransition = r.transitions.create("opacity", A), N.style.transition = r.transitions.create("opacity", A), d && d(N, V);
  }), D = R(p), _ = R(f), I = R((N) => {
    const V = Zs({
      style: v,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    N.style.webkitTransition = r.transitions.create("opacity", V), N.style.transition = r.transitions.create("opacity", V), b && b(N);
  }), M = R(g), F = (N) => {
    i && i(w.current, N);
  };
  return /* @__PURE__ */ x.jsx(T, y({
    appear: a,
    in: u,
    nodeRef: w,
    onEnter: E,
    onEntered: D,
    onEntering: P,
    onExit: I,
    onExited: M,
    onExiting: _,
    addEndListener: F,
    timeout: C
  }, S, {
    children: (N, V) => /* @__PURE__ */ m.cloneElement(l, y({
      style: y({
        opacity: 0,
        visibility: N === "exited" && !u ? "hidden" : void 0
      }, vw[N], v, l.props.style),
      ref: O
    }, V))
  }));
});
process.env.NODE_ENV !== "production" && (mr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: ts.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function xw(e) {
  return Ne("MuiBackdrop", e);
}
Me("MuiBackdrop", ["root", "invisible"]);
const Sw = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], ww = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Be({
    root: ["root", n && "invisible"]
  }, xw, t);
}, Pw = K("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => y({
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
})), Ll = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, s, i;
  const a = We({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: h = !1,
    open: b,
    slotProps: g = {},
    slots: f = {},
    TransitionComponent: v = mr,
    transitionDuration: C
  } = a, T = te(a, Sw), S = y({}, a, {
    component: u,
    invisible: h
  }), w = ww(S), O = (r = g.root) != null ? r : p.root;
  return /* @__PURE__ */ x.jsx(v, y({
    in: b,
    timeout: C
  }, T, {
    children: /* @__PURE__ */ x.jsx(Pw, y({
      "aria-hidden": !0
    }, O, {
      as: (s = (i = f.root) != null ? i : d.Root) != null ? s : u,
      className: fe(w.root, c, O?.className),
      ownerState: y({}, S, O?.ownerState),
      classes: w,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
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
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Ow(e) {
  return typeof e == "function" ? e() : e;
}
function Cw(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ew = new uw();
function Tw(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: s = Ew,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: p
  } = e, h = m.useRef({}), b = m.useRef(null), g = m.useRef(null), f = yt(g, p), [v, C] = m.useState(!d), T = Cw(c);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const w = () => Ot(b.current), O = () => (h.current.modalRef = g.current, h.current.mount = b.current, h.current), R = () => {
    s.mount(O(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, P = nr(() => {
    const A = Ow(t) || w().body;
    s.add(O(), A), g.current && R();
  }), E = m.useCallback(() => s.isTopModal(O()), [s]), D = nr((A) => {
    b.current = A, A && (d && E() ? R() : g.current && ko(g.current, S));
  }), _ = m.useCallback(() => {
    s.remove(O(), S);
  }, [S, s]);
  m.useEffect(() => () => {
    _();
  }, [_]), m.useEffect(() => {
    d ? P() : (!T || !i) && _();
  }, [d, _, T, i, P]);
  const I = (A) => ($) => {
    var L;
    (L = A.onKeyDown) == null || L.call(A, $), !($.key !== "Escape" || $.which === 229 || // Wait until IME is settled.
    !E()) && (n || ($.stopPropagation(), u && u($, "escapeKeyDown")));
  }, M = (A) => ($) => {
    var L;
    (L = A.onClick) == null || L.call(A, $), $.target === $.currentTarget && u && u($, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const $ = Uf(e);
      delete $.onTransitionEnter, delete $.onTransitionExited;
      const L = y({}, $, A);
      return y({
        role: "presentation"
      }, L, {
        onKeyDown: I(L),
        ref: f
      });
    },
    getBackdropProps: (A = {}) => {
      const $ = A;
      return y({
        "aria-hidden": !0
      }, $, {
        onClick: M($),
        open: d
      });
    },
    getTransitionProps: () => {
      const A = () => {
        C(!1), a && a();
      }, $ = () => {
        C(!0), l && l(), i && _();
      };
      return {
        onEnter: yu(A, c?.props.onEnter),
        onExited: yu($, c?.props.onExited)
      };
    },
    rootRef: f,
    portalRef: D,
    isTopModal: E,
    exited: v,
    hasTransition: T
  };
}
function kw(e) {
  return Ne("MuiModal", e);
}
Me("MuiModal", ["root", "hidden", "backdrop"]);
const Dw = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Rw = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Be({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, kw, r);
}, Mw = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), _w = K(Ll, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Bl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, s, i, a, l, c;
  const u = We({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = _w,
    BackdropProps: p,
    className: h,
    closeAfterTransition: b = !1,
    children: g,
    container: f,
    component: v,
    components: C = {},
    componentsProps: T = {},
    disableAutoFocus: S = !1,
    disableEnforceFocus: w = !1,
    disableEscapeKeyDown: O = !1,
    disablePortal: R = !1,
    disableRestoreFocus: P = !1,
    disableScrollLock: E = !1,
    hideBackdrop: D = !1,
    keepMounted: _ = !1,
    onBackdropClick: I,
    open: M,
    slotProps: F,
    slots: N
    // eslint-disable-next-line react/prop-types
  } = u, V = te(u, Dw), A = y({}, u, {
    closeAfterTransition: b,
    disableAutoFocus: S,
    disableEnforceFocus: w,
    disableEscapeKeyDown: O,
    disablePortal: R,
    disableRestoreFocus: P,
    disableScrollLock: E,
    hideBackdrop: D,
    keepMounted: _
  }), {
    getRootProps: $,
    getBackdropProps: L,
    getTransitionProps: Y,
    portalRef: k,
    isTopModal: j,
    exited: U,
    hasTransition: G
  } = Tw(y({}, A, {
    rootRef: n
  })), H = y({}, A, {
    exited: U
  }), Z = Rw(H), X = {};
  if (g.props.tabIndex === void 0 && (X.tabIndex = "-1"), G) {
    const {
      onEnter: ne,
      onExited: Q
    } = Y();
    X.onEnter = ne, X.onExited = Q;
  }
  const re = (r = (s = N?.root) != null ? s : C.Root) != null ? r : Mw, ee = (i = (a = N?.backdrop) != null ? a : C.Backdrop) != null ? i : d, J = (l = F?.root) != null ? l : T.root, q = (c = F?.backdrop) != null ? c : T.backdrop, z = ur({
    elementType: re,
    externalSlotProps: J,
    externalForwardedProps: V,
    getSlotProps: $,
    additionalProps: {
      ref: n,
      as: v
    },
    ownerState: H,
    className: fe(h, J?.className, Z?.root, !H.open && H.exited && Z?.hidden)
  }), B = ur({
    elementType: ee,
    externalSlotProps: q,
    additionalProps: p,
    getSlotProps: (ne) => L(y({}, ne, {
      onClick: (Q) => {
        I && I(Q), ne != null && ne.onClick && ne.onClick(Q);
      }
    })),
    className: fe(q?.className, p?.className, Z?.backdrop),
    ownerState: H
  });
  return !_ && !M && (!G || U) ? null : /* @__PURE__ */ x.jsx(Yo, {
    ref: k,
    container: f,
    disablePortal: R,
    children: /* @__PURE__ */ x.jsxs(re, y({}, z, {
      children: [!D && d ? /* @__PURE__ */ x.jsx(ee, y({}, B)) : null, /* @__PURE__ */ x.jsx(Wo, {
        disableEnforceFocus: w,
        disableAutoFocus: S,
        disableRestoreFocus: P,
        isEnabled: j,
        open: M,
        children: /* @__PURE__ */ m.cloneElement(g, X)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Bl.propTypes = {
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: ts.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([En, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Iw(e) {
  return Ne("MuiPaper", e);
}
Me("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Nw = ["className", "component", "elevation", "square", "variant"], $w = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: s
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Be(i, Iw, s);
}, Aw = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return y({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && y({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Ke.alpha("#fff", _u(t.elevation))}, ${Ke.alpha("#fff", _u(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), ls = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiPaper"
  }), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = te(r, Nw), d = y({}, r, {
    component: i,
    elevation: a,
    square: l,
    variant: c
  }), p = $w(d);
  return process.env.NODE_ENV !== "production" && Zr().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ x.jsx(Aw, y({
    as: i,
    ownerState: d,
    className: fe(p.root, s),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (ls.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: zn(zf, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
function Fw(e) {
  return Ne("MuiPopover", e);
}
Me("MuiPopover", ["root", "paper"]);
const jw = ["onEntering"], Vw = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Lw = ["slotProps"];
function hd(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function md(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function yd(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function $s(e) {
  return typeof e == "function" ? e() : e;
}
const Bw = (e) => {
  const {
    classes: t
  } = e;
  return Be({
    root: ["root"],
    paper: ["paper"]
  }, Fw, t);
}, Ww = K(Bl, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), kp = K(ls, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Dp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, s, i;
  const a = We({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: p = "anchorEl",
    children: h,
    className: b,
    container: g,
    elevation: f = 8,
    marginThreshold: v = 16,
    open: C,
    PaperProps: T = {},
    slots: S,
    slotProps: w,
    transformOrigin: O = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: R = Fi,
    transitionDuration: P = "auto",
    TransitionProps: {
      onEntering: E
    } = {},
    disableScrollLock: D = !1
  } = a, _ = te(a.TransitionProps, jw), I = te(a, Vw), M = (r = w?.paper) != null ? r : T, F = m.useRef(), N = yt(F, M.ref), V = y({}, a, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: f,
    marginThreshold: v,
    externalPaperSlotProps: M,
    transformOrigin: O,
    TransitionComponent: R,
    transitionDuration: P,
    TransitionProps: _
  }), A = Bw(V), $ = m.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const ne = $s(c), Q = ne && ne.nodeType === 1 ? ne : Ot(F.current).body, ae = Q.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const W = Q.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && W.top === 0 && W.left === 0 && W.right === 0 && W.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ae.top + hd(ae, u.vertical),
      left: ae.left + md(ae, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, p]), L = m.useCallback((ne) => ({
    vertical: hd(ne, O.vertical),
    horizontal: md(ne, O.horizontal)
  }), [O.horizontal, O.vertical]), Y = m.useCallback((ne) => {
    const Q = {
      width: ne.offsetWidth,
      height: ne.offsetHeight
    }, ae = L(Q);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: yd(ae)
      };
    const W = $();
    let se = W.top - ae.vertical, ge = W.left - ae.horizontal;
    const we = se + Q.height, ue = ge + Q.width, de = cr($s(c)), De = de.innerHeight - v, Ee = de.innerWidth - v;
    if (v !== null && se < v) {
      const Ce = se - v;
      se -= Ce, ae.vertical += Ce;
    } else if (v !== null && we > De) {
      const Ce = we - De;
      se -= Ce, ae.vertical += Ce;
    }
    if (process.env.NODE_ENV !== "production" && Q.height > De && Q.height && De && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${Q.height - De}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), v !== null && ge < v) {
      const Ce = ge - v;
      ge -= Ce, ae.horizontal += Ce;
    } else if (ue > Ee) {
      const Ce = ue - Ee;
      ge -= Ce, ae.horizontal += Ce;
    }
    return {
      top: `${Math.round(se)}px`,
      left: `${Math.round(ge)}px`,
      transformOrigin: yd(ae)
    };
  }, [c, p, $, L, v]), [k, j] = m.useState(C), U = m.useCallback(() => {
    const ne = F.current;
    if (!ne)
      return;
    const Q = Y(ne);
    Q.top !== null && (ne.style.top = Q.top), Q.left !== null && (ne.style.left = Q.left), ne.style.transformOrigin = Q.transformOrigin, j(!0);
  }, [Y]);
  m.useEffect(() => (D && window.addEventListener("scroll", U), () => window.removeEventListener("scroll", U)), [c, D, U]);
  const G = (ne, Q) => {
    E && E(ne, Q), U();
  }, H = () => {
    j(!1);
  };
  m.useEffect(() => {
    C && U();
  }), m.useImperativeHandle(l, () => C ? {
    updatePosition: () => {
      U();
    }
  } : null, [C, U]), m.useEffect(() => {
    if (!C)
      return;
    const ne = Ff(() => {
      U();
    }), Q = cr(c);
    return Q.addEventListener("resize", ne), () => {
      ne.clear(), Q.removeEventListener("resize", ne);
    };
  }, [c, C, U]);
  let Z = P;
  P === "auto" && !R.muiSupportAuto && (Z = void 0);
  const X = g || (c ? Ot($s(c)).body : void 0), re = (s = S?.root) != null ? s : Ww, ee = (i = S?.paper) != null ? i : kp, J = ur({
    elementType: ee,
    externalSlotProps: y({}, M, {
      style: k ? M.style : y({}, M.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: f,
      ref: N
    },
    ownerState: V,
    className: fe(A.paper, M?.className)
  }), q = ur({
    elementType: re,
    externalSlotProps: w?.root || {},
    externalForwardedProps: I,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: X,
      open: C
    },
    ownerState: V,
    className: fe(A.root, b)
  }), {
    slotProps: z
  } = q, B = te(q, Lw);
  return /* @__PURE__ */ x.jsx(re, y({}, B, !Wr(re) && {
    slotProps: z,
    disableScrollLock: D
  }, {
    children: /* @__PURE__ */ x.jsx(R, y({
      appear: !0,
      in: C,
      onEntering: G,
      onExited: H,
      timeout: Z
    }, _, {
      children: /* @__PURE__ */ x.jsx(ee, y({}, J, {
        children: h
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Dp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: en,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: zn(o.oneOfType([En, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = $s(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([En, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: zf,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: vi
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
function Yw(e) {
  return Ne("MuiMenu", e);
}
Me("MuiMenu", ["root", "paper", "list"]);
const zw = ["onEntering"], Uw = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Hw = {
  vertical: "top",
  horizontal: "right"
}, qw = {
  vertical: "top",
  horizontal: "left"
}, Gw = (e) => {
  const {
    classes: t
  } = e;
  return Be({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Yw, t);
}, Kw = K(Dp, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Zw = K(kp, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Xw = K(fp, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Rp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, s;
  const i = We({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: p,
    open: h,
    PaperProps: b = {},
    PopoverClasses: g,
    transitionDuration: f = "auto",
    TransitionProps: {
      onEntering: v
    } = {},
    variant: C = "selectedMenu",
    slots: T = {},
    slotProps: S = {}
  } = i, w = te(i.TransitionProps, zw), O = te(i, Uw), R = hn(), P = y({}, i, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: v,
    PaperProps: b,
    transitionDuration: f,
    TransitionProps: w,
    variant: C
  }), E = Gw(P), D = a && !u && h, _ = m.useRef(null), I = (L, Y) => {
    _.current && _.current.adjustStyleForScrollbar(L, {
      direction: R ? "rtl" : "ltr"
    }), v && v(L, Y);
  }, M = (L) => {
    L.key === "Tab" && (L.preventDefault(), p && p(L, "tabKeyDown"));
  };
  let F = -1;
  m.Children.map(l, (L, Y) => {
    /* @__PURE__ */ m.isValidElement(L) && (process.env.NODE_ENV !== "production" && Ao.isFragment(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (C === "selectedMenu" && L.props.selected || F === -1) && (F = Y));
  });
  const N = (r = T.paper) != null ? r : Zw, V = (s = S.paper) != null ? s : b, A = ur({
    elementType: T.root,
    externalSlotProps: S.root,
    ownerState: P,
    className: [E.root, c]
  }), $ = ur({
    elementType: N,
    externalSlotProps: V,
    ownerState: P,
    className: E.paper
  });
  return /* @__PURE__ */ x.jsx(Kw, y({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: R ? "right" : "left"
    },
    transformOrigin: R ? Hw : qw,
    slots: {
      paper: N,
      root: T.root
    },
    slotProps: {
      root: A,
      paper: $
    },
    open: h,
    ref: n,
    transitionDuration: f,
    TransitionProps: y({
      onEntering: I
    }, w),
    ownerState: P
  }, O, {
    classes: g,
    children: /* @__PURE__ */ x.jsx(Xw, y({
      onKeyDown: M,
      actions: _,
      autoFocus: a && (F === -1 || u),
      autoFocusItem: D,
      variant: C
    }, d, {
      className: fe(E.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Rp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([En, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function Qw(e) {
  return Ne("MuiNativeSelect", e);
}
const Wl = Me("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Jw = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], eP = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${le(n)}`, i && "iconOpen", r && "disabled"]
  };
  return Be(l, Qw, t);
}, Mp = ({
  ownerState: e,
  theme: t
}) => y({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": y({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Wl.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), tP = K("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: tn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Wl.multiple}`]: t.multiple
    }];
  }
})(Mp), _p = ({
  ownerState: e,
  theme: t
}) => y({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Wl.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), nP = K("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${le(n.variant)}`], n.open && t.iconOpen];
  }
})(_p), Ip = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: s,
    error: i,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, u = te(t, Jw), d = y({}, t, {
    disabled: s,
    variant: c,
    error: i
  }), p = eP(d);
  return /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ x.jsx(tP, y({
      ownerState: d,
      className: fe(p.select, r),
      disabled: s,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ x.jsx(nP, {
      as: a,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ip.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: en,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
function rP(e) {
  return Ne("MuiSelect", e);
}
const ho = Me("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var gd;
const oP = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], sP = K("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${ho.select}`]: t.select
      },
      {
        [`&.${ho.select}`]: t[n.variant]
      },
      {
        [`&.${ho.error}`]: t.error
      },
      {
        [`&.${ho.multiple}`]: t.multiple
      }
    ];
  }
})(Mp, {
  // Win specificity over the input base
  [`&.${ho.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), iP = K("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${le(n.variant)}`], n.open && t.iconOpen];
  }
})(_p), aP = K("input", {
  shouldForwardProp: (e) => Gf(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function bd(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function lP(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const cP = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${le(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Be(l, rP, t);
}, Np = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": s,
    "aria-label": i,
    autoFocus: a,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: p,
    disabled: h,
    displayEmpty: b,
    error: g = !1,
    IconComponent: f,
    inputRef: v,
    labelId: C,
    MenuProps: T = {},
    multiple: S,
    name: w,
    onBlur: O,
    onChange: R,
    onClose: P,
    onFocus: E,
    onOpen: D,
    open: _,
    readOnly: I,
    renderValue: M,
    SelectDisplayProps: F = {},
    tabIndex: N,
    value: V,
    variant: A = "standard"
  } = t, $ = te(t, oP), [L, Y] = vu({
    controlled: V,
    default: p,
    name: "Select"
  }), [k, j] = vu({
    controlled: _,
    default: d,
    name: "Select"
  }), U = m.useRef(null), G = m.useRef(null), [H, Z] = m.useState(null), {
    current: X
  } = m.useRef(_ != null), [re, ee] = m.useState(), J = yt(n, v), q = m.useCallback((pe) => {
    G.current = pe, pe && Z(pe);
  }, []), z = H?.parentNode;
  m.useImperativeHandle(J, () => ({
    focus: () => {
      G.current.focus();
    },
    node: U.current,
    value: L
  }), [L]), m.useEffect(() => {
    d && k && H && !X && (ee(l ? null : z.clientWidth), G.current.focus());
  }, [H, l]), m.useEffect(() => {
    a && G.current.focus();
  }, [a]), m.useEffect(() => {
    if (!C)
      return;
    const pe = Ot(G.current).getElementById(C);
    if (pe) {
      const be = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return pe.addEventListener("click", be), () => {
        pe.removeEventListener("click", be);
      };
    }
  }, [C]);
  const B = (pe, be) => {
    pe ? D && D(be) : P && P(be), X || (ee(l ? null : z.clientWidth), j(pe));
  }, ne = (pe) => {
    pe.button === 0 && (pe.preventDefault(), G.current.focus(), B(!0, pe));
  }, Q = (pe) => {
    B(!1, pe);
  }, ae = m.Children.toArray(c), W = (pe) => {
    const be = ae.find((ze) => ze.props.value === pe.target.value);
    be !== void 0 && (Y(be.props.value), R && R(pe, be));
  }, se = (pe) => (be) => {
    let ze;
    if (be.currentTarget.hasAttribute("tabindex")) {
      if (S) {
        ze = Array.isArray(L) ? L.slice() : [];
        const Se = L.indexOf(pe.props.value);
        Se === -1 ? ze.push(pe.props.value) : ze.splice(Se, 1);
      } else
        ze = pe.props.value;
      if (pe.props.onClick && pe.props.onClick(be), L !== ze && (Y(ze), R)) {
        const Se = be.nativeEvent || be, ct = new Se.constructor(Se.type, Se);
        Object.defineProperty(ct, "target", {
          writable: !0,
          value: {
            value: ze,
            name: w
          }
        }), R(ct, pe);
      }
      S || B(!1, be);
    }
  }, ge = (pe) => {
    I || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(pe.key) !== -1 && (pe.preventDefault(), B(!0, pe));
  }, we = H !== null && k, ue = (pe) => {
    !we && O && (Object.defineProperty(pe, "target", {
      writable: !0,
      value: {
        value: L,
        name: w
      }
    }), O(pe));
  };
  delete $["aria-invalid"];
  let de, De;
  const Ee = [];
  let Ce = !1, Ze = !1;
  (Ks({
    value: L
  }) || b) && (M ? de = M(L) : Ce = !0);
  const ft = ae.map((pe) => {
    if (!/* @__PURE__ */ m.isValidElement(pe))
      return null;
    process.env.NODE_ENV !== "production" && Ao.isFragment(pe) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let be;
    if (S) {
      if (!Array.isArray(L))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : On(2));
      be = L.some((ze) => bd(ze, pe.props.value)), be && Ce && Ee.push(pe.props.children);
    } else
      be = bd(L, pe.props.value), be && Ce && (De = pe.props.children);
    return be && (Ze = !0), /* @__PURE__ */ m.cloneElement(pe, {
      "aria-selected": be ? "true" : "false",
      onClick: se(pe),
      onKeyUp: (ze) => {
        ze.key === " " && ze.preventDefault(), pe.props.onKeyUp && pe.props.onKeyUp(ze);
      },
      role: "option",
      selected: be,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": pe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    if (!Ze && !S && L !== "") {
      const pe = ae.map((be) => be.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${L}\` for the select ${w ? `(name="${w}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${pe.filter((be) => be != null).map((be) => `\`${be}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ze, ae, S, w, L]), Ce && (S ? Ee.length === 0 ? de = null : de = Ee.reduce((pe, be, ze) => (pe.push(be), ze < Ee.length - 1 && pe.push(", "), pe), []) : de = De);
  let mt = re;
  !l && X && H && (mt = z.clientWidth);
  let Oe;
  typeof N < "u" ? Oe = N : Oe = h ? null : 0;
  const ie = F.id || (w ? `mui-component-select-${w}` : void 0), ve = y({}, t, {
    variant: A,
    value: L,
    open: we,
    error: g
  }), Te = cP(ve), Ye = y({}, T.PaperProps, (r = T.slotProps) == null ? void 0 : r.paper), rt = ml();
  return /* @__PURE__ */ x.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ x.jsx(sP, y({
      ref: q,
      tabIndex: Oe,
      role: "combobox",
      "aria-controls": rt,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": we ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [C, ie].filter(Boolean).join(" ") || void 0,
      "aria-describedby": s,
      onKeyDown: ge,
      onMouseDown: h || I ? null : ne,
      onBlur: ue,
      onFocus: E
    }, F, {
      ownerState: ve,
      className: fe(F.className, Te.select, u),
      id: ie,
      children: lP(de) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        gd || (gd = /* @__PURE__ */ x.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : de
    })), /* @__PURE__ */ x.jsx(aP, y({
      "aria-invalid": g,
      value: Array.isArray(L) ? L.join(",") : L,
      name: w,
      ref: U,
      "aria-hidden": !0,
      onChange: W,
      tabIndex: -1,
      disabled: h,
      className: Te.nativeInput,
      autoFocus: a,
      ownerState: ve
    }, $)), /* @__PURE__ */ x.jsx(iP, {
      as: f,
      className: Te.icon,
      ownerState: ve
    }), /* @__PURE__ */ x.jsx(Rp, y({
      id: `menu-${w || ""}`,
      anchorEl: z,
      open: we,
      onClose: Q,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, T, {
      MenuListProps: y({
        "aria-labelledby": C,
        role: "listbox",
        "aria-multiselectable": S ? "true" : void 0,
        disableListWrap: !0,
        id: rt
      }, T.MenuListProps),
      slotProps: y({}, T.slotProps, {
        paper: y({}, Ye, {
          style: y({
            minWidth: mt
          }, Ye != null ? Ye.style : null)
        })
      }),
      children: ft
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Np.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: en,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const uP = mn(/* @__PURE__ */ x.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), dP = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], fP = ["root"], pP = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Yl = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => tn(e) && e !== "variant",
  slot: "Root"
}, hP = K(Ni, Yl)(""), mP = K(Ai, Yl)(""), yP = K($i, Yl)(""), zl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: s = !1,
    children: i,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = uP,
    id: p,
    input: h,
    inputProps: b,
    label: g,
    labelId: f,
    MenuProps: v,
    multiple: C = !1,
    native: T = !1,
    onClose: S,
    onOpen: w,
    open: O,
    renderValue: R,
    SelectDisplayProps: P,
    variant: E = "outlined"
  } = r, D = te(r, dP), _ = T ? Ip : Np, I = Rn(), M = Jr({
    props: r,
    muiFormControl: I,
    states: ["variant", "error"]
  }), F = M.variant || E, N = y({}, r, {
    variant: F,
    classes: a
  }), V = pP(N), A = te(V, fP), $ = h || {
    standard: /* @__PURE__ */ x.jsx(hP, {
      ownerState: N
    }),
    outlined: /* @__PURE__ */ x.jsx(mP, {
      label: g,
      ownerState: N
    }),
    filled: /* @__PURE__ */ x.jsx(yP, {
      ownerState: N
    })
  }[F], L = yt(n, ns($));
  return /* @__PURE__ */ x.jsx(m.Fragment, {
    children: /* @__PURE__ */ m.cloneElement($, y({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: _,
      inputProps: y({
        children: i,
        error: M.error,
        IconComponent: d,
        variant: F,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C
      }, T ? {
        id: p
      } : {
        autoWidth: s,
        defaultOpen: c,
        displayEmpty: u,
        labelId: f,
        MenuProps: v,
        onClose: S,
        onOpen: w,
        open: O,
        renderValue: R,
        SelectDisplayProps: y({
          id: p
        }, P)
      }, b, {
        classes: b ? It(A, b.classes) : A
      }, h ? h.props.inputProps : {})
    }, (C && T || u) && F === "outlined" ? {
      notched: !0
    } : {}, {
      ref: L,
      className: fe($.props.className, l, V.root)
    }, !h && {
      variant: F
    }, D))
  });
});
process.env.NODE_ENV !== "production" && (zl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
zl.muiName = "Select";
function gP(e) {
  return Ne("MuiTextField", e);
}
Me("MuiTextField", ["root"]);
const bP = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], vP = {
  standard: Ni,
  filled: $i,
  outlined: Ai
}, xP = (e) => {
  const {
    classes: t
  } = e;
  return Be({
    root: ["root"]
  }, gP, t);
}, SP = K(jl, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), $p = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: s,
    autoFocus: i = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: p = !1,
    FormHelperTextProps: h,
    fullWidth: b = !1,
    helperText: g,
    id: f,
    InputLabelProps: v,
    inputProps: C,
    InputProps: T,
    inputRef: S,
    label: w,
    maxRows: O,
    minRows: R,
    multiline: P = !1,
    name: E,
    onBlur: D,
    onChange: _,
    onFocus: I,
    placeholder: M,
    required: F = !1,
    rows: N,
    select: V = !1,
    SelectProps: A,
    type: $,
    value: L,
    variant: Y = "outlined"
  } = r, k = te(r, bP), j = y({}, r, {
    autoFocus: i,
    color: c,
    disabled: d,
    error: p,
    fullWidth: b,
    multiline: P,
    required: F,
    select: V,
    variant: Y
  }), U = xP(j);
  process.env.NODE_ENV !== "production" && V && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const G = {};
  Y === "outlined" && (v && typeof v.shrink < "u" && (G.notched = v.shrink), G.label = w), V && ((!A || !A.native) && (G.id = void 0), G["aria-describedby"] = void 0);
  const H = ml(f), Z = g && H ? `${H}-helper-text` : void 0, X = w && H ? `${H}-label` : void 0, re = vP[Y], ee = /* @__PURE__ */ x.jsx(re, y({
    "aria-describedby": Z,
    autoComplete: s,
    autoFocus: i,
    defaultValue: u,
    fullWidth: b,
    multiline: P,
    name: E,
    rows: N,
    maxRows: O,
    minRows: R,
    type: $,
    value: L,
    id: H,
    inputRef: S,
    onBlur: D,
    onChange: _,
    onFocus: I,
    placeholder: M,
    inputProps: C
  }, G, T));
  return /* @__PURE__ */ x.jsxs(SP, y({
    className: fe(U.root, l),
    disabled: d,
    error: p,
    fullWidth: b,
    ref: n,
    required: F,
    color: c,
    variant: Y,
    ownerState: j
  }, k, {
    children: [w != null && w !== "" && /* @__PURE__ */ x.jsx(Fl, y({
      htmlFor: H,
      id: X
    }, v, {
      children: w
    })), V ? /* @__PURE__ */ x.jsx(zl, y({
      "aria-describedby": Z,
      id: H,
      labelId: X,
      value: L,
      input: ee
    }, A, {
      children: a
    })) : ee, g && /* @__PURE__ */ x.jsx(Vl, y({
      id: Z
    }, h, {
      children: g
    }))]
  }));
});
process.env.NODE_ENV !== "production" && ($p.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: en,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function wP(e) {
  return Ne("MuiInputAdornment", e);
}
const vd = Me("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var xd;
const PP = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], OP = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${le(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, CP = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: s,
    size: i,
    variant: a
  } = e, l = {
    root: ["root", n && "disablePointerEvents", s && `position${le(s)}`, a, r && "hiddenLabel", i && `size${le(i)}`]
  };
  return Be(l, wP, t);
}, EP = K("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: OP
})(({
  theme: e,
  ownerState: t
}) => y({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${vd.positionStart}&:not(.${vd.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), Ap = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: s,
    className: i,
    component: a = "div",
    disablePointerEvents: l = !1,
    disableTypography: c = !1,
    position: u,
    variant: d
  } = r, p = te(r, PP), h = Rn() || {};
  let b = d;
  d && h.variant && process.env.NODE_ENV !== "production" && d === h.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), h && !b && (b = h.variant);
  const g = y({}, r, {
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: l,
    position: u,
    variant: b
  }), f = CP(g);
  return /* @__PURE__ */ x.jsx(as.Provider, {
    value: null,
    children: /* @__PURE__ */ x.jsx(EP, y({
      as: a,
      ownerState: g,
      className: fe(f.root, i),
      ref: n
    }, p, {
      children: typeof s == "string" && !c ? /* @__PURE__ */ x.jsx(Hn, {
        color: "text.secondary",
        children: s
      }) : /* @__PURE__ */ x.jsxs(m.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          xd || (xd = /* @__PURE__ */ x.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, s]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ap.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: o.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: o.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: o.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const Fn = 5;
function Ul(e) {
  const {
    ownerState: t
  } = vt(), n = hn();
  return m.useMemo(() => y({}, t, {
    isFieldDisabled: e.disabled ?? !1,
    isFieldReadOnly: e.readOnly ?? !1,
    isFieldRequired: e.required ?? !1,
    fieldDirection: n ? "rtl" : "ltr"
  }), [t, e.disabled, e.readOnly, e.required, n]);
}
function TP(e) {
  return dt("MuiPickersTextField", e);
}
ht("MuiPickersTextField", ["root", "focused", "disabled", "error", "required"]);
function kP(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function DP(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : kP(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const RP = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
function MP(e) {
  return dt("MuiPickersInputBase", e);
}
const Nr = ht("MuiPickersInputBase", ["root", "focused", "disabled", "error", "notchedOutline", "sectionContent", "sectionBefore", "sectionAfter", "adornedStart", "adornedEnd", "input", "inputSizeSmall", "activeBar"]);
function _P(e) {
  return dt("MuiPickersSectionList", e);
}
const mo = ht("MuiPickersSectionList", ["root", "section", "sectionContent"]), IP = ["slots", "slotProps", "elements", "sectionListRef", "classes"], Fp = K("div", {
  name: "MuiPickersSectionList",
  slot: "Root"
})({
  direction: "ltr /*! @noflip */",
  outline: "none"
}), jp = K("span", {
  name: "MuiPickersSectionList",
  slot: "Section"
})({}), Vp = K("span", {
  name: "MuiPickersSectionList",
  slot: "SectionSeparator"
})({
  whiteSpace: "pre"
}), Lp = K("span", {
  name: "MuiPickersSectionList",
  slot: "SectionContent"
})({
  outline: "none"
}), NP = (e) => it({
  root: ["root"],
  section: ["section"],
  sectionContent: ["sectionContent"]
}, _P, e);
function Bp(e) {
  const {
    slots: t,
    slotProps: n,
    element: r,
    classes: s
  } = e, {
    ownerState: i
  } = vt(), a = t?.section ?? jp, l = Le({
    elementType: a,
    externalSlotProps: n?.section,
    externalForwardedProps: r.container,
    className: s.section,
    ownerState: i
  }), c = t?.sectionContent ?? Lp, u = Le({
    elementType: c,
    externalSlotProps: n?.sectionContent,
    externalForwardedProps: r.content,
    additionalProps: {
      suppressContentEditableWarning: !0
    },
    className: s.sectionContent,
    ownerState: i
  }), d = t?.sectionSeparator ?? Vp, p = Le({
    elementType: d,
    externalSlotProps: n?.sectionSeparator,
    externalForwardedProps: r.before,
    ownerState: y({}, i, {
      separatorPosition: "before"
    })
  }), h = Le({
    elementType: d,
    externalSlotProps: n?.sectionSeparator,
    externalForwardedProps: r.after,
    ownerState: y({}, i, {
      separatorPosition: "after"
    })
  });
  return /* @__PURE__ */ x.jsxs(a, y({}, l, {
    children: [/* @__PURE__ */ x.jsx(d, y({}, p)), /* @__PURE__ */ x.jsx(c, y({}, u)), /* @__PURE__ */ x.jsx(d, y({}, h))]
  }));
}
process.env.NODE_ENV !== "production" && (Bp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: o.object.isRequired,
  element: o.shape({
    after: o.object.isRequired,
    before: o.object.isRequired,
    container: o.object.isRequired,
    content: o.object.isRequired
  }).isRequired,
  /**
   * The props used for each component slot.
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   */
  slots: o.object
});
const Hl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersSectionList"
  }), {
    slots: s,
    slotProps: i,
    elements: a,
    sectionListRef: l,
    classes: c
  } = r, u = te(r, IP), d = NP(c), {
    ownerState: p
  } = vt(), h = m.useRef(null), b = Rt(n, h), g = (C) => {
    if (!h.current)
      throw new Error(`MUI X: Cannot call sectionListRef.${C} before the mount of the component.`);
    return h.current;
  };
  m.useImperativeHandle(l, () => ({
    getRoot() {
      return g("getRoot");
    },
    getSectionContainer(C) {
      return g("getSectionContainer").querySelector(`.${mo.section}[data-sectionindex="${C}"]`);
    },
    getSectionContent(C) {
      return g("getSectionContent").querySelector(`.${mo.section}[data-sectionindex="${C}"] .${mo.sectionContent}`);
    },
    getSectionIndexFromDOMElement(C) {
      const T = g("getSectionIndexFromDOMElement");
      if (C == null || !T.contains(C))
        return null;
      let S = null;
      return C.classList.contains(mo.section) ? S = C : C.classList.contains(mo.sectionContent) && (S = C.parentElement), S == null ? null : Number(S.dataset.sectionindex);
    }
  }));
  const f = s?.root ?? Fp, v = Le({
    elementType: f,
    externalSlotProps: i?.root,
    externalForwardedProps: u,
    additionalProps: {
      ref: b,
      suppressContentEditableWarning: !0
    },
    className: d.root,
    ownerState: p
  });
  return /* @__PURE__ */ x.jsx(f, y({}, v, {
    children: v.contentEditable ? a.map(({
      content: C,
      before: T,
      after: S
    }) => `${T.children}${C.children}${S.children}`).join("") : /* @__PURE__ */ x.jsx(m.Fragment, {
      children: a.map((C, T) => /* @__PURE__ */ x.jsx(Bp, {
        slots: s,
        slotProps: i,
        element: C,
        classes: d
      }, T))
    })
  }));
});
process.env.NODE_ENV !== "production" && (Hl.displayName = "PickersSectionList");
process.env.NODE_ENV !== "production" && (Hl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: o.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: o.arrayOf(o.shape({
    after: o.object.isRequired,
    before: o.object.isRequired,
    container: o.object.isRequired,
    content: o.object.isRequired
  })).isRequired,
  sectionListRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      getRoot: o.func.isRequired,
      getSectionContainer: o.func.isRequired,
      getSectionContent: o.func.isRequired,
      getSectionIndexFromDOMElement: o.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   */
  slots: o.object
});
const ql = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (ql.displayName = "PickerTextFieldOwnerStateContext");
const ji = () => {
  const e = m.useContext(ql);
  if (e == null)
    throw new Error(["MUI X: The `usePickerTextFieldOwnerState` can only be called in components that are used inside a PickerTextField component"].join(`
`));
  return e;
}, $P = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef", "onFocus", "onBlur", "classes", "ownerState"], AP = (e) => Math.round(e * 1e5) / 1e5, Vi = K("div", {
  name: "MuiPickersInputBase",
  slot: "Root"
})(({
  theme: e
}) => y({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  cursor: "text",
  padding: 0,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  letterSpacing: `${AP(0.15 / 16)}em`,
  variants: [{
    props: {
      isInputInFullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
})), Gl = K(Fp, {
  name: "MuiPickersInputBase",
  slot: "SectionsContainer"
})(({
  theme: e
}) => ({
  padding: "4px 0 5px",
  fontFamily: e.typography.fontFamily,
  fontSize: "inherit",
  lineHeight: "1.4375em",
  // 23px
  flexGrow: 1,
  outline: "none",
  display: "flex",
  flexWrap: "nowrap",
  overflow: "hidden",
  letterSpacing: "inherit",
  // Baseline behavior
  width: "182px",
  variants: [{
    props: {
      fieldDirection: "rtl"
    },
    style: {
      justifyContent: "end"
    }
  }, {
    props: {
      inputSize: "small"
    },
    style: {
      paddingTop: 1
    }
  }, {
    props: {
      hasStartAdornment: !1,
      isFieldFocused: !1,
      isFieldValueEmpty: !0
    },
    style: {
      color: "currentColor",
      opacity: 0
    }
  }, {
    props: {
      hasStartAdornment: !1,
      isFieldFocused: !1,
      isFieldValueEmpty: !0,
      inputHasLabel: !1
    },
    style: e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: e.palette.mode === "light" ? 0.42 : 0.5
    }
  }, {
    props: {
      hasStartAdornment: !1,
      isFieldFocused: !1,
      isFieldValueEmpty: !0,
      inputHasLabel: !0,
      isLabelShrunk: !0
    },
    style: e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: e.palette.mode === "light" ? 0.42 : 0.5
    }
  }]
})), FP = K(jp, {
  name: "MuiPickersInputBase",
  slot: "Section"
})(({
  theme: e
}) => ({
  fontFamily: e.typography.fontFamily,
  fontSize: "inherit",
  letterSpacing: "inherit",
  lineHeight: "1.4375em",
  // 23px
  display: "inline-block",
  whiteSpace: "nowrap"
})), jP = K(Lp, {
  name: "MuiPickersInputBase",
  slot: "SectionContent",
  overridesResolver: (e, t) => t.content
  // FIXME: Inconsistent naming with slot
})(({
  theme: e
}) => ({
  fontFamily: e.typography.fontFamily,
  lineHeight: "1.4375em",
  // 23px
  letterSpacing: "inherit",
  width: "fit-content",
  outline: "none"
})), VP = K(Vp, {
  name: "MuiPickersInputBase",
  slot: "Separator"
})(() => ({
  whiteSpace: "pre",
  letterSpacing: "inherit"
})), LP = K("input", {
  name: "MuiPickersInputBase",
  slot: "Input",
  overridesResolver: (e, t) => t.hiddenInput
  // FIXME: Inconsistent naming with slot
})(y({}, RP)), BP = K("div", {
  name: "MuiPickersInputBase",
  slot: "ActiveBar"
})(({
  theme: e,
  ownerState: t
}) => ({
  display: "none",
  position: "absolute",
  height: 2,
  bottom: 2,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  transition: e.transitions.create(["width", "left"], {
    duration: e.transitions.duration.shortest
  }),
  backgroundColor: (e.vars || e).palette.primary.main,
  '[data-active-range-position="start"] &, [data-active-range-position="end"] &': {
    display: "block"
  },
  '[data-active-range-position="start"] &': {
    left: t.sectionOffsets[0]
  },
  '[data-active-range-position="end"] &': {
    left: t.sectionOffsets[1]
  }
})), WP = (e, t) => {
  const {
    isFieldFocused: n,
    isFieldDisabled: r,
    isFieldReadOnly: s,
    hasFieldError: i,
    inputSize: a,
    isInputInFullWidth: l,
    inputColor: c,
    hasStartAdornment: u,
    hasEndAdornment: d
  } = t, p = {
    root: ["root", n && !r && "focused", r && "disabled", s && "readOnly", i && "error", l && "fullWidth", `color${DP(c)}`, a === "small" && "inputSizeSmall", u && "adornedStart", d && "adornedEnd"],
    notchedOutline: ["notchedOutline"],
    input: ["input"],
    sectionsContainer: ["sectionsContainer"],
    sectionContent: ["sectionContent"],
    sectionBefore: ["sectionBefore"],
    sectionAfter: ["sectionAfter"],
    activeBar: ["activeBar"]
  };
  return it(p, MP, e);
};
function Sd(e, t, n, r) {
  if (e.content.id) {
    const s = t.current?.querySelectorAll(`[data-sectionindex="${n}"] [data-range-position="${r}"]`);
    if (s)
      return Array.from(s).reduce((i, a) => i + a.offsetWidth, 0);
  }
  return 0;
}
function YP(e, t) {
  let n = 0;
  if (t.current?.getAttribute("data-active-range-position") === "end")
    for (let s = e.length - 1; s >= e.length / 2; s -= 1)
      n += Sd(e[s], t, s, "end");
  else
    for (let s = 0; s < e.length / 2; s += 1)
      n += Sd(e[s], t, s, "start");
  return {
    activeBarWidth: n,
    sectionOffsets: [t.current?.querySelector('[data-sectionindex="0"]')?.offsetLeft || 0, t.current?.querySelector(`[data-sectionindex="${e.length / 2}"]`)?.offsetLeft || 0]
  };
}
const cs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersInputBase"
  }), {
    elements: s,
    areAllSectionsEmpty: i,
    value: a,
    onChange: l,
    id: c,
    endAdornment: u,
    startAdornment: d,
    renderSuffix: p,
    slots: h,
    slotProps: b,
    contentEditable: g,
    tabIndex: f,
    onInput: v,
    onPaste: C,
    onKeyDown: T,
    name: S,
    readOnly: w,
    inputProps: O,
    inputRef: R,
    sectionListRef: P,
    onFocus: E,
    onBlur: D,
    classes: _,
    ownerState: I
  } = r, M = te(r, $P), F = ji(), N = m.useRef(null), V = m.useRef(null), A = m.useRef([]), $ = Rt(n, N), L = Rt(O?.ref, R), Y = Rn();
  if (!Y)
    throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
  const k = I ?? F, j = (q) => {
    Y.onFocus?.(q), E?.(q);
  }, U = (q) => {
    j(q);
  }, G = (q) => {
    if (T?.(q), q.key === "Enter" && !q.defaultMuiPrevented) {
      if (N.current?.dataset.multiInput)
        return;
      const z = N.current?.closest("form"), B = z?.querySelector('[type="submit"]');
      if (!z || !B)
        return;
      q.preventDefault(), z.requestSubmit(B);
    }
  }, H = (q) => {
    Y.onBlur?.(q), D?.(q);
  };
  m.useEffect(() => {
    Y && Y.setAdornedStart(!!d);
  }, [Y, d]), m.useEffect(() => {
    Y && (i ? Y.onEmpty() : Y.onFilled());
  }, [Y, i]);
  const Z = WP(_, k), X = h?.root || Vi, re = Le({
    elementType: X,
    externalSlotProps: b?.root,
    externalForwardedProps: M,
    additionalProps: {
      "aria-invalid": Y.error,
      ref: $
    },
    className: Z.root,
    ownerState: k
  }), ee = h?.input || Gl, J = s.some((q) => q.content["data-range-position"] !== void 0);
  return m.useEffect(() => {
    if (!J || !k.isPickerOpen)
      return;
    const {
      activeBarWidth: q,
      sectionOffsets: z
    } = YP(s, N);
    A.current = [z[0], z[1]], V.current && (V.current.style.width = `${q}px`);
  }, [s, J, k.isPickerOpen]), /* @__PURE__ */ x.jsxs(X, y({}, re, {
    children: [d, /* @__PURE__ */ x.jsx(Hl, {
      sectionListRef: P,
      elements: s,
      contentEditable: g,
      tabIndex: f,
      className: Z.sectionsContainer,
      onFocus: j,
      onBlur: H,
      onInput: v,
      onPaste: C,
      onKeyDown: G,
      slots: {
        root: ee,
        section: FP,
        sectionContent: jP,
        sectionSeparator: VP
      },
      slotProps: {
        root: y({}, b?.input, {
          ownerState: k
        }),
        sectionContent: {
          className: Nr.sectionContent
        },
        sectionSeparator: ({
          separatorPosition: q
        }) => ({
          className: q === "before" ? Nr.sectionBefore : Nr.sectionAfter
        })
      }
    }), u, p ? p(y({}, Y)) : null, /* @__PURE__ */ x.jsx(LP, y({
      name: S,
      className: Z.input,
      value: a,
      onChange: l,
      id: c,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly: w,
      required: Y.required,
      disabled: Y.disabled,
      onFocus: U
    }, O, {
      ref: L
    })), J && /* @__PURE__ */ x.jsx(BP, {
      className: Z.activeBar,
      ref: V,
      ownerState: {
        sectionOffsets: A.current
      }
    })]
  }));
});
process.env.NODE_ENV !== "production" && (cs.displayName = "PickersInputBase");
process.env.NODE_ENV !== "production" && (cs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: o.bool.isRequired,
  className: o.string,
  component: o.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: o.bool.isRequired,
  "data-multi-input": o.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: o.arrayOf(o.shape({
    after: o.object.isRequired,
    before: o.object.isRequired,
    container: o.object.isRequired,
    content: o.object.isRequired
  })).isRequired,
  endAdornment: o.node,
  fullWidth: o.bool,
  id: o.string,
  inputProps: o.object,
  inputRef: Dn,
  label: o.node,
  margin: o.oneOf(["dense", "none", "normal"]),
  name: o.string,
  onChange: o.func.isRequired,
  onClick: o.func.isRequired,
  onInput: o.func.isRequired,
  onKeyDown: o.func.isRequired,
  onPaste: o.func.isRequired,
  ownerState: o.any,
  readOnly: o.bool,
  renderSuffix: o.func,
  sectionListRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      getRoot: o.func.isRequired,
      getSectionContainer: o.func.isRequired,
      getSectionContent: o.func.isRequired,
      getSectionIndexFromDOMElement: o.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.object,
  startAdornment: o.node,
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  value: o.string.isRequired
});
function zP(e) {
  return dt("MuiPickersOutlinedInput", e);
}
const Gt = y({}, Nr, ht("MuiPickersOutlinedInput", ["root", "notchedOutline", "input"])), UP = ["children", "className", "label", "notched", "shrink"], HP = K("fieldset", {
  name: "MuiPickersOutlinedInput",
  slot: "NotchedOutline"
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), wd = K("span")(({
  theme: e
}) => ({
  fontFamily: e.typography.fontFamily,
  fontSize: "inherit"
})), qP = K("legend", {
  shouldForwardProp: (e) => Xr.shouldForwardProp(e) && e !== "notched"
})(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: {
      inputHasLabel: !1
    },
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      inputHasLabel: !0
    },
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: {
      inputHasLabel: !0,
      notched: !0
    },
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
}));
function GP(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, s = te(e, UP), i = ji();
  return /* @__PURE__ */ x.jsx(HP, y({
    "aria-hidden": !0,
    className: t
  }, s, {
    ownerState: i,
    children: /* @__PURE__ */ x.jsx(qP, {
      ownerState: i,
      notched: r,
      children: n ? /* @__PURE__ */ x.jsx(wd, {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        /* @__PURE__ */ x.jsx(wd, {
          className: "notranslate",
          children: "​"
        })
      )
    })
  }));
}
const KP = ["label", "autoFocus", "ownerState", "classes", "notched"], ZP = K(Vi, {
  name: "MuiPickersOutlinedInput",
  slot: "Root"
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    padding: "0 14px",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Gt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${Gt.focused} .${Gt.notchedOutline}`]: {
      borderStyle: "solid",
      borderWidth: 2
    },
    [`&.${Gt.disabled}`]: {
      [`& .${Gt.notchedOutline}`]: {
        borderColor: (e.vars || e).palette.action.disabled
      },
      "*": {
        color: (e.vars || e).palette.action.disabled
      }
    },
    [`&.${Gt.error} .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    variants: Object.keys((e.vars ?? e).palette).filter((n) => (e.vars ?? e).palette[n]?.main ?? !1).map((n) => ({
      props: {
        inputColor: n
      },
      style: {
        [`&.${Gt.focused}:not(.${Gt.error}) .${Gt.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (e.vars || e).palette[n].main
        }
      }
    }))
  };
}), XP = K(Gl, {
  name: "MuiPickersOutlinedInput",
  slot: "SectionsContainer"
})({
  padding: "16.5px 0",
  variants: [{
    props: {
      inputSize: "small"
    },
    style: {
      padding: "8.5px 0"
    }
  }]
}), QP = (e) => {
  const n = it({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, zP, e);
  return y({}, e, n);
}, Li = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersOutlinedInput"
  }), {
    label: s,
    classes: i,
    notched: a
  } = r, l = te(r, KP), c = Rn(), u = QP(i);
  return /* @__PURE__ */ x.jsx(cs, y({
    slots: {
      root: ZP,
      input: XP
    },
    renderSuffix: (d) => /* @__PURE__ */ x.jsx(GP, {
      shrink: !!(a || d.adornedStart || d.focused || d.filled),
      notched: !!(a || d.adornedStart || d.focused || d.filled),
      className: u.notchedOutline,
      label: s != null && s !== "" && c?.required ? /* @__PURE__ */ x.jsxs(m.Fragment, {
        children: [s, " ", "*"]
      }) : s
    })
  }, l, {
    label: s,
    classes: u,
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (Li.displayName = "PickersOutlinedInput");
process.env.NODE_ENV !== "production" && (Li.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: o.bool.isRequired,
  className: o.string,
  component: o.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: o.bool.isRequired,
  "data-multi-input": o.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: o.arrayOf(o.shape({
    after: o.object.isRequired,
    before: o.object.isRequired,
    container: o.object.isRequired,
    content: o.object.isRequired
  })).isRequired,
  endAdornment: o.node,
  fullWidth: o.bool,
  id: o.string,
  inputProps: o.object,
  inputRef: Dn,
  label: o.node,
  margin: o.oneOf(["dense", "none", "normal"]),
  name: o.string,
  notched: o.bool,
  onChange: o.func.isRequired,
  onClick: o.func.isRequired,
  onInput: o.func.isRequired,
  onKeyDown: o.func.isRequired,
  onPaste: o.func.isRequired,
  ownerState: o.any,
  readOnly: o.bool,
  renderSuffix: o.func,
  sectionListRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      getRoot: o.func.isRequired,
      getSectionContainer: o.func.isRequired,
      getSectionContent: o.func.isRequired,
      getSectionIndexFromDOMElement: o.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.object,
  startAdornment: o.node,
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  value: o.string.isRequired
});
Li.muiName = "Input";
function JP(e) {
  return dt("MuiPickersFilledInput", e);
}
const Xn = y({}, Nr, ht("MuiPickersFilledInput", ["root", "underline", "input"])), eO = ["label", "autoFocus", "disableUnderline", "hiddenLabel", "classes"], tO = K(Vi, {
  name: "MuiPickersFilledInput",
  slot: "Root",
  shouldForwardProp: (e) => Df(e) && e !== "disableUnderline"
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${Xn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Xn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i
    },
    variants: [...Object.keys((e.vars ?? e).palette).filter((a) => (e.vars ?? e).palette[a].main).map((a) => ({
      props: {
        inputColor: a,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(e.vars || e).palette[a]?.main}`
        }
      }
    })), {
      props: {
        disableUnderline: !1
      },
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Xn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Xn.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Xn.disabled}, .${Xn.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Xn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, {
      props: {
        hasStartAdornment: !0
      },
      style: {
        paddingLeft: 12
      }
    }, {
      props: {
        hasEndAdornment: !0
      },
      style: {
        paddingRight: 12
      }
    }]
  };
}), nO = K(Gl, {
  name: "MuiPickersFilledInput",
  slot: "sectionsContainer",
  shouldForwardProp: (e) => Df(e) && e !== "hiddenLabel"
})({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [{
    props: {
      inputSize: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: {
      hasStartAdornment: !0
    },
    style: {
      paddingLeft: 0
    }
  }, {
    props: {
      hasEndAdornment: !0
    },
    style: {
      paddingRight: 0
    }
  }, {
    props: {
      hiddenLabel: !0
    },
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: {
      hiddenLabel: !0,
      inputSize: "small"
    },
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }]
}), rO = (e, t) => {
  const {
    inputHasUnderline: n
  } = t, s = it({
    root: ["root", n && "underline"],
    input: ["input"]
  }, JP, e);
  return y({}, e, s);
}, Bi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersFilledInput"
  }), {
    label: s,
    disableUnderline: i = !1,
    hiddenLabel: a = !1,
    classes: l
  } = r, c = te(r, eO), u = ji(), d = y({}, u, {
    inputHasUnderline: !i
  }), p = rO(l, d);
  return /* @__PURE__ */ x.jsx(cs, y({
    slots: {
      root: tO,
      input: nO
    },
    slotProps: {
      root: {
        disableUnderline: i
      },
      input: {
        hiddenLabel: a
      }
    }
  }, c, {
    label: s,
    classes: p,
    ref: n,
    ownerState: d
  }));
});
process.env.NODE_ENV !== "production" && (Bi.displayName = "PickersFilledInput");
process.env.NODE_ENV !== "production" && (Bi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: o.bool.isRequired,
  className: o.string,
  component: o.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: o.bool.isRequired,
  "data-multi-input": o.string,
  disableUnderline: o.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: o.arrayOf(o.shape({
    after: o.object.isRequired,
    before: o.object.isRequired,
    container: o.object.isRequired,
    content: o.object.isRequired
  })).isRequired,
  endAdornment: o.node,
  fullWidth: o.bool,
  hiddenLabel: o.bool,
  id: o.string,
  inputProps: o.object,
  inputRef: Dn,
  label: o.node,
  margin: o.oneOf(["dense", "none", "normal"]),
  name: o.string,
  onChange: o.func.isRequired,
  onClick: o.func.isRequired,
  onInput: o.func.isRequired,
  onKeyDown: o.func.isRequired,
  onPaste: o.func.isRequired,
  ownerState: o.any,
  readOnly: o.bool,
  renderSuffix: o.func,
  sectionListRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      getRoot: o.func.isRequired,
      getSectionContainer: o.func.isRequired,
      getSectionContent: o.func.isRequired,
      getSectionIndexFromDOMElement: o.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.object,
  startAdornment: o.node,
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  value: o.string.isRequired
});
Bi.muiName = "Input";
function oO(e) {
  return dt("MuiPickersFilledInput", e);
}
const yo = y({}, Nr, ht("MuiPickersInput", ["root", "underline", "input"])), sO = ["label", "autoFocus", "disableUnderline", "ownerState", "classes"], iO = K(Vi, {
  name: "MuiPickersInput",
  slot: "Root",
  shouldForwardProp: (e) => Xr.shouldForwardProp(e) && e !== "disableUnderline"
})(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    "label + &": {
      marginTop: 16
    },
    variants: [...Object.keys((e.vars ?? e).palette).filter((r) => (e.vars ?? e).palette[r].main).map((r) => ({
      props: {
        inputColor: r,
        inputHasUnderline: !0
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    })), {
      props: {
        inputHasUnderline: !0
      },
      style: {
        "&::after": {
          background: "red",
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${yo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${yo.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${yo.disabled}, .${yo.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${yo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }]
  };
}), aO = (e, t) => {
  const {
    inputHasUnderline: n
  } = t, s = it({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, oO, e);
  return y({}, e, s);
}, Wi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersInput"
  }), {
    label: s,
    disableUnderline: i = !1,
    classes: a
  } = r, l = te(r, sO), c = ji(), u = y({}, c, {
    inputHasUnderline: !i
  }), d = aO(a, u);
  return /* @__PURE__ */ x.jsx(cs, y({
    slots: {
      root: iO
    },
    slotProps: {
      root: {
        disableUnderline: i
      }
    }
  }, l, {
    ownerState: u,
    label: s,
    classes: d,
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (Wi.displayName = "PickersInput");
process.env.NODE_ENV !== "production" && (Wi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: o.bool.isRequired,
  className: o.string,
  component: o.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: o.bool.isRequired,
  "data-multi-input": o.string,
  disableUnderline: o.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: o.arrayOf(o.shape({
    after: o.object.isRequired,
    before: o.object.isRequired,
    container: o.object.isRequired,
    content: o.object.isRequired
  })).isRequired,
  endAdornment: o.node,
  fullWidth: o.bool,
  id: o.string,
  inputProps: o.object,
  inputRef: Dn,
  label: o.node,
  margin: o.oneOf(["dense", "none", "normal"]),
  name: o.string,
  onChange: o.func.isRequired,
  onClick: o.func.isRequired,
  onInput: o.func.isRequired,
  onKeyDown: o.func.isRequired,
  onPaste: o.func.isRequired,
  ownerState: o.any,
  readOnly: o.bool,
  renderSuffix: o.func,
  sectionListRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      getRoot: o.func.isRequired,
      getSectionContainer: o.func.isRequired,
      getSectionContent: o.func.isRequired,
      getSectionIndexFromDOMElement: o.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.object,
  startAdornment: o.node,
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  value: o.string.isRequired
});
Wi.muiName = "Input";
const lO = ["onFocus", "onBlur", "className", "classes", "color", "disabled", "error", "variant", "required", "hiddenLabel", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps", "data-active-range-position"], cO = {
  standard: Wi,
  filled: Bi,
  outlined: Li
}, uO = K(jl, {
  name: "MuiPickersTextField",
  slot: "Root"
})({
  maxWidth: "100%"
}), dO = (e, t) => {
  const {
    isFieldFocused: n,
    isFieldDisabled: r,
    isFieldRequired: s
  } = t;
  return it({
    root: ["root", n && !r && "focused", r && "disabled", s && "required"]
  }, TP, e);
}, Yi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersTextField"
  }), {
    // Props used by FormControl
    onFocus: s,
    onBlur: i,
    className: a,
    classes: l,
    color: c = "primary",
    disabled: u = !1,
    error: d = !1,
    variant: p = "outlined",
    required: h = !1,
    hiddenLabel: b = !1,
    // Props used by PickersInput
    InputProps: g,
    inputProps: f,
    inputRef: v,
    sectionListRef: C,
    elements: T,
    areAllSectionsEmpty: S,
    onClick: w,
    onKeyDown: O,
    onKeyUp: R,
    onPaste: P,
    onInput: E,
    endAdornment: D,
    startAdornment: _,
    tabIndex: I,
    contentEditable: M,
    focused: F,
    value: N,
    onChange: V,
    fullWidth: A,
    id: $,
    name: L,
    // Props used by FormHelperText
    helperText: Y,
    FormHelperTextProps: k,
    // Props used by InputLabel
    label: j,
    InputLabelProps: U,
    // @ts-ignore
    "data-active-range-position": G
  } = r, H = te(r, lO), Z = m.useRef(null), X = Rt(n, Z), re = yl($), ee = Y && re ? `${re}-helper-text` : void 0, J = j && re ? `${re}-label` : void 0, q = Ul({
    disabled: r.disabled,
    required: r.required,
    readOnly: g?.readOnly
  }), z = m.useMemo(() => y({}, q, {
    isFieldValueEmpty: S,
    isFieldFocused: F ?? !1,
    hasFieldError: d ?? !1,
    inputSize: r.size ?? "medium",
    inputColor: c ?? "primary",
    isInputInFullWidth: A ?? !1,
    hasStartAdornment: !!(_ ?? g?.startAdornment),
    hasEndAdornment: !!(D ?? g?.endAdornment),
    inputHasLabel: !!j,
    isLabelShrunk: !!U?.shrink
  }), [q, S, F, d, r.size, c, A, _, D, g?.startAdornment, g?.endAdornment, j, U?.shrink]), B = dO(l, z), ne = cO[p], Q = {};
  return p === "outlined" ? (U && typeof U.shrink < "u" && (Q.notched = U.shrink), Q.label = j) : p === "filled" && (Q.hiddenLabel = b), /* @__PURE__ */ x.jsx(ql.Provider, {
    value: z,
    children: /* @__PURE__ */ x.jsxs(uO, y({
      className: fe(B.root, a),
      ref: X,
      focused: F,
      disabled: u,
      variant: p,
      error: d,
      color: c,
      fullWidth: A,
      required: h,
      ownerState: z
    }, H, {
      children: [j != null && j !== "" && /* @__PURE__ */ x.jsx(Fl, y({
        htmlFor: re,
        id: J
      }, U, {
        children: j
      })), /* @__PURE__ */ x.jsx(ne, y({
        elements: T,
        areAllSectionsEmpty: S,
        onClick: w,
        onKeyDown: O,
        onKeyUp: R,
        onInput: E,
        onPaste: P,
        onFocus: s,
        onBlur: i,
        endAdornment: D,
        startAdornment: _,
        tabIndex: I,
        contentEditable: M,
        value: N,
        onChange: V,
        id: re,
        fullWidth: A,
        inputProps: f,
        inputRef: v,
        sectionListRef: C,
        label: j,
        name: L,
        role: "group",
        "aria-labelledby": J,
        "aria-describedby": ee,
        "aria-live": ee ? "polite" : void 0,
        "data-active-range-position": G
      }, Q, g)), Y && /* @__PURE__ */ x.jsx(Vl, y({
        id: ee
      }, k, {
        children: Y
      }))]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Yi.displayName = "PickersTextField");
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: o.bool.isRequired,
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: o.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: o.bool.isRequired,
  disabled: o.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: o.arrayOf(o.shape({
    after: o.object.isRequired,
    before: o.object.isRequired,
    container: o.object.isRequired,
    content: o.object.isRequired
  })).isRequired,
  endAdornment: o.node,
  error: o.bool.isRequired,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  FormHelperTextProps: o.object,
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  id: o.string,
  InputLabelProps: o.object,
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: o.object,
  inputRef: Dn,
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  name: o.string,
  onBlur: o.func.isRequired,
  onChange: o.func.isRequired,
  onClick: o.func.isRequired,
  onFocus: o.func.isRequired,
  onInput: o.func.isRequired,
  onKeyDown: o.func.isRequired,
  onPaste: o.func.isRequired,
  readOnly: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  sectionListRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      getRoot: o.func.isRequired,
      getSectionContainer: o.func.isRequired,
      getSectionContent: o.func.isRequired,
      getSectionIndexFromDOMElement: o.func.isRequired
    })
  })]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOf(["medium", "small"]),
  startAdornment: o.node,
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  value: o.string.isRequired,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const fO = ["enableAccessibleFieldDOMStructure"], pO = ["InputProps", "readOnly", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"], hO = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"], mO = ["ownerState"], yO = ["ownerState"], gO = ["ownerState"], bO = ["ownerState"], vO = ["InputProps", "inputProps"], Ea = () => {
}, xO = (e) => {
  let {
    enableAccessibleFieldDOMStructure: t
  } = e, n = te(e, fO);
  if (t) {
    const {
      InputProps: T,
      readOnly: S,
      onClear: w,
      clearable: O,
      clearButtonPosition: R,
      openPickerButtonPosition: P,
      openPickerAriaLabel: E
    } = n, D = te(n, pO), _ = Fn >= 6 && D?.slotProps?.input ? Do(D?.slotProps?.input, T) : Ea;
    return {
      clearable: O,
      onClear: w,
      clearButtonPosition: R,
      openPickerButtonPosition: P,
      openPickerAriaLabel: E,
      textFieldProps: y({}, D, Fn >= 6 && D?.slotProps?.input ? {
        slotProps: y({}, D?.slotProps, {
          input: (I) => y({}, Zt(_, I), {
            readOnly: S
          })
        })
      } : {
        InputProps: y({}, T ?? {}, {
          readOnly: S
        })
      })
    };
  }
  const {
    onPaste: r,
    onKeyDown: s,
    inputMode: i,
    readOnly: a,
    InputProps: l,
    inputProps: c,
    inputRef: u,
    onClear: d,
    clearable: p,
    clearButtonPosition: h,
    openPickerButtonPosition: b,
    openPickerAriaLabel: g
  } = n, f = te(n, hO), v = Fn >= 6 && f?.slotProps?.input ? Do(f?.slotProps?.input, l) : Ea, C = Fn >= 6 && f?.slotProps?.htmlInput ? Do(f?.slotProps?.htmlInput, c) : Ea;
  return {
    clearable: p,
    onClear: d,
    clearButtonPosition: h,
    openPickerButtonPosition: b,
    openPickerAriaLabel: g,
    textFieldProps: y({}, f, Fn >= 6 && (f?.slotProps?.input || f?.slotProps?.htmlInput) ? {
      slotProps: y({}, f?.slotProps, {
        input: (T) => y({}, Zt(v, T), {
          readOnly: a
        }),
        htmlInput: (T) => y({}, Zt(C, T), {
          inputMode: i,
          onPaste: r,
          onKeyDown: s,
          ref: u
        })
      })
    } : {
      InputProps: y({}, l ?? {}, {
        readOnly: a
      }),
      inputProps: y({}, c ?? {}, {
        inputMode: i,
        onPaste: r,
        onKeyDown: s,
        ref: u
      })
    })
  };
}, zi = /* @__PURE__ */ m.createContext({
  slots: {},
  slotProps: {},
  inputRef: void 0
});
process.env.NODE_ENV !== "production" && (zi.displayName = "PickerFieldUIContext");
function SO(e) {
  const {
    fieldResponse: t,
    defaultOpenPickerIcon: n
  } = e, r = Un(), s = Ol(), i = m.useContext(zi), {
    textFieldProps: a,
    onClear: l,
    clearable: c,
    openPickerAriaLabel: u,
    clearButtonPosition: d = "end",
    openPickerButtonPosition: p = "end"
  } = xO(t), h = Ul(a), b = he((k) => {
    k.preventDefault(), s?.setOpen((j) => !j);
  }), g = s ? s.triggerStatus : "hidden", f = c ? d : null, v = g !== "hidden" ? p : null, C = i.slots.textField ?? (t.enableAccessibleFieldDOMStructure === !1 ? $p : Yi), T = i.slots.inputAdornment ?? Ap, S = Le({
    elementType: T,
    externalSlotProps: i.slotProps.inputAdornment,
    additionalProps: {
      position: "start"
    },
    ownerState: y({}, h, {
      position: "start"
    })
  }), w = te(S, mO), O = Le({
    elementType: T,
    externalSlotProps: i.slotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: y({}, h, {
      position: "end"
    })
  }), R = te(O, yO), P = i.slots.openPickerButton ?? Lo, E = Le({
    elementType: P,
    externalSlotProps: i.slotProps.openPickerButton,
    additionalProps: {
      disabled: g === "disabled",
      onClick: b,
      "aria-label": u,
      edge: (
        // open button is always rendered at the edge
        a.variant !== "standard" ? v : !1
      )
    },
    ownerState: h
  }), D = te(E, gO), _ = i.slots.openPickerIcon ?? n, I = Le({
    elementType: _,
    externalSlotProps: i.slotProps.openPickerIcon,
    ownerState: h
  }), M = i.slots.clearButton ?? Lo, F = Le({
    elementType: M,
    externalSlotProps: i.slotProps.clearButton,
    className: "clearButton",
    additionalProps: {
      title: r.fieldClearLabel,
      tabIndex: -1,
      onClick: l,
      disabled: t.disabled || t.readOnly,
      edge: (
        // clear button can only be at the edge if it's position differs from the open button
        a.variant !== "standard" && f !== v ? f : !1
      )
    },
    ownerState: h
  }), N = te(F, bO), V = i.slots.clearIcon ?? f0, A = Le({
    elementType: V,
    externalSlotProps: i.slotProps.clearIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  });
  a.ref = Rt(a.ref, s?.rootRef);
  const $ = {}, L = Zt((Fn >= 6 && a?.slotProps?.input) ?? a.InputProps, h);
  s && ($.ref = s.triggerRef), !L?.startAdornment && (f === "start" || v === "start") && ($.startAdornment = /* @__PURE__ */ x.jsxs(T, y({}, w, {
    children: [v === "start" && /* @__PURE__ */ x.jsx(P, y({}, D, {
      children: /* @__PURE__ */ x.jsx(_, y({}, I))
    })), f === "start" && /* @__PURE__ */ x.jsx(M, y({}, N, {
      children: /* @__PURE__ */ x.jsx(V, y({}, A))
    }))]
  }))), !L?.endAdornment && (f === "end" || v === "end") && ($.endAdornment = /* @__PURE__ */ x.jsxs(T, y({}, R, {
    children: [f === "end" && /* @__PURE__ */ x.jsx(M, y({}, N, {
      children: /* @__PURE__ */ x.jsx(V, y({}, A))
    })), v === "end" && /* @__PURE__ */ x.jsx(P, y({}, D, {
      children: /* @__PURE__ */ x.jsx(_, y({}, I))
    }))]
  }))), !$?.endAdornment && !$?.startAdornment && i.slots.inputAdornment && ($.endAdornment = /* @__PURE__ */ x.jsx(T, y({}, R))), f != null && (a.sx = [{
    "& .clearButton": {
      opacity: 1
    },
    "@media (pointer: fine)": {
      "& .clearButton": {
        opacity: 0
      },
      "&:hover, &:focus-within": {
        ".clearButton": {
          opacity: 1
        }
      }
    }
  }, ...Array.isArray(a.sx) ? a.sx : [a.sx]]);
  const Y = Fn >= 6 && a?.slotProps?.input ? Zt(Do(L, $), h) : y({}, L, $);
  return a.inputProps = Fn >= 6 && a?.slotProps?.htmlInput ? Zt(a.slotProps.htmlInput, h) : a.inputProps, delete a?.slotProps?.input, t.enableAccessibleFieldDOMStructure && delete a?.slotProps, /* @__PURE__ */ x.jsx(C, y({}, a, {
    InputProps: Y
  }));
}
function Do(e, t) {
  return e ? t ? (n) => y({}, Zt(t, n), Zt(e, n)) : e : t;
}
function wO(e) {
  const {
    ref: t,
    externalForwardedProps: n,
    slotProps: r
  } = e, s = m.useContext(zi), i = Ol(), a = Ul(n), {
    InputProps: l,
    inputProps: c
  } = n, u = te(n, vO), d = Le({
    elementType: Yi,
    externalSlotProps: Do(s.slotProps.textField, r?.textField),
    externalForwardedProps: u,
    additionalProps: {
      ref: t,
      sx: i?.rootSx,
      label: i?.label,
      name: i?.name,
      className: i?.rootClassName,
      inputRef: s.inputRef
    },
    ownerState: a
  });
  return d.inputProps = y({}, c, d.inputProps), d.InputProps = y({}, l, d.InputProps), d;
}
function PO(e) {
  const {
    slots: t = {},
    slotProps: n = {},
    inputRef: r,
    children: s
  } = e, i = m.useMemo(() => ({
    inputRef: r,
    slots: {
      openPickerButton: t.openPickerButton,
      openPickerIcon: t.openPickerIcon,
      textField: t.textField,
      inputAdornment: t.inputAdornment,
      clearIcon: t.clearIcon,
      clearButton: t.clearButton
    },
    slotProps: {
      openPickerButton: n.openPickerButton,
      openPickerIcon: n.openPickerIcon,
      textField: n.textField,
      inputAdornment: n.inputAdornment,
      clearIcon: n.clearIcon,
      clearButton: n.clearButton
    }
  }), [r, t.openPickerButton, t.openPickerIcon, t.textField, t.inputAdornment, t.clearIcon, t.clearButton, n.openPickerButton, n.openPickerIcon, n.textField, n.inputAdornment, n.clearIcon, n.clearButton]);
  return /* @__PURE__ */ x.jsx(zi.Provider, {
    value: i,
    children: s
  });
}
const OO = ["slots", "slotProps"], Ui = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiDateField"
  }), {
    slots: s,
    slotProps: i
  } = r, a = te(r, OO), l = wO({
    slotProps: i,
    ref: n,
    externalForwardedProps: a
  }), c = pS(l);
  return /* @__PURE__ */ x.jsx(PO, {
    slots: s,
    slotProps: i,
    inputRef: a.inputRef,
    children: /* @__PURE__ */ x.jsx(SO, {
      fieldResponse: c,
      defaultOpenPickerIcon: d0
    })
  });
});
process.env.NODE_ENV !== "production" && (Ui.displayName = "DateField");
process.env.NODE_ENV !== "production" && (Ui.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  className: o.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: o.bool,
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition: o.oneOf(["end", "start"]),
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: o.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: o.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: o.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dn,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: o.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: o.object,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  onBlur: o.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: o.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: o.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: o.func,
  onFocus: o.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: o.func,
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition: o.oneOf(["end", "start"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: o.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: o.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: o.oneOfType([o.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), o.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: o.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: o.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: o.func,
  /**
   * If `true`, the format will respect the leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (for example "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: o.oneOfType([o.func, o.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const Wp = ({
  shouldDisableDate: e,
  shouldDisableMonth: t,
  shouldDisableYear: n,
  minDate: r,
  maxDate: s,
  disableFuture: i,
  disablePast: a,
  timezone: l
}) => {
  const c = Ge();
  return m.useCallback((u) => ss({
    adapter: c,
    value: u,
    timezone: l,
    props: {
      shouldDisableDate: e,
      shouldDisableMonth: t,
      shouldDisableYear: n,
      minDate: r,
      maxDate: s,
      disableFuture: i,
      disablePast: a
    }
  }) !== null, [c, e, t, n, r, s, i, a, l]);
}, CO = (e, t) => (n, r) => {
  switch (r.type) {
    case "setVisibleDate":
      return y({}, n, {
        slideDirection: r.direction,
        currentMonth: r.month,
        isMonthSwitchingAnimating: !t.isSameMonth(r.month, n.currentMonth) && !e && !r.skipAnimation,
        focusedDay: r.focusedDay
      });
    case "changeMonthTimezone": {
      const s = r.newTimezone;
      if (t.getTimezone(n.currentMonth) === s)
        return n;
      let i = t.setTimezone(n.currentMonth, s);
      return t.getMonth(i) !== t.getMonth(n.currentMonth) && (i = t.setMonth(i, t.getMonth(n.currentMonth))), y({}, n, {
        currentMonth: i
      });
    }
    case "finishMonthSwitchingAnimation":
      return y({}, n, {
        isMonthSwitchingAnimating: !1
      });
    default:
      throw new Error("missing support");
  }
}, EO = (e) => {
  const {
    value: t,
    referenceDate: n,
    disableFuture: r,
    disablePast: s,
    maxDate: i,
    minDate: a,
    onMonthChange: l,
    onYearChange: c,
    reduceAnimations: u,
    shouldDisableDate: d,
    timezone: p,
    getCurrentMonthFromVisibleDate: h
  } = e, b = Ge(), g = m.useRef(CO(!!u, b)).current, f = m.useMemo(
    () => dn.getInitialReferenceValue({
      value: t,
      adapter: b,
      timezone: p,
      props: e,
      referenceDate: n,
      granularity: sn.day
    }),
    // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, p]
  ), [v, C] = m.useReducer(g, {
    isMonthSwitchingAnimating: !1,
    focusedDay: f,
    currentMonth: b.startOfMonth(f),
    slideDirection: "left"
  }), T = Wp({
    shouldDisableDate: d,
    minDate: a,
    maxDate: i,
    disableFuture: r,
    disablePast: s,
    timezone: p
  });
  m.useEffect(() => {
    C({
      type: "changeMonthTimezone",
      newTimezone: b.getTimezone(f)
    });
  }, [f, b]);
  const S = he(({
    target: O,
    reason: R
  }) => {
    if (R === "cell-interaction" && v.focusedDay != null && b.isSameDay(O, v.focusedDay))
      return;
    const P = R === "cell-interaction";
    let E, D;
    if (R === "cell-interaction")
      E = h(O, v.currentMonth), D = O;
    else if (E = b.isSameMonth(O, v.currentMonth) ? v.currentMonth : b.startOfMonth(O), D = O, T(D)) {
      const M = b.startOfMonth(O), F = b.endOfMonth(O);
      D = Vo({
        adapter: b,
        date: D,
        minDate: b.isBefore(a, M) ? M : a,
        maxDate: b.isAfter(i, F) ? F : i,
        disablePast: s,
        disableFuture: r,
        isDateDisabled: T,
        timezone: p
      });
    }
    const _ = !b.isSameMonth(v.currentMonth, E), I = !b.isSameYear(v.currentMonth, E);
    _ && l?.(E), I && c?.(b.startOfYear(E)), C({
      type: "setVisibleDate",
      month: E,
      direction: b.isAfterDay(E, v.currentMonth) ? "left" : "right",
      focusedDay: v.focusedDay != null && D != null && b.isSameDay(D, v.focusedDay) ? v.focusedDay : D,
      skipAnimation: P
    });
  }), w = m.useCallback(() => {
    C({
      type: "finishMonthSwitchingAnimation"
    });
  }, []);
  return {
    referenceDate: f,
    calendarState: v,
    setVisibleDate: S,
    isDateDisabled: T,
    onMonthSwitchingAnimationEnd: w
  };
}, TO = (e) => dt("MuiPickersFadeTransitionGroup", e);
ht("MuiPickersFadeTransitionGroup", ["root"]);
const kO = ["children"], DO = (e) => it({
  root: ["root"]
}, TO, e), RO = K(rs, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root"
})({
  display: "block",
  position: "relative"
});
function Yp(e) {
  const t = nt({
    props: e,
    name: "MuiPickersFadeTransitionGroup"
  }), {
    className: n,
    reduceAnimations: r,
    transKey: s,
    classes: i
  } = t, {
    children: a
  } = t, l = te(t, kO), c = DO(i), u = Zr();
  return r ? a : /* @__PURE__ */ x.jsx(RO, {
    className: fe(c.root, n),
    ownerState: l,
    children: /* @__PURE__ */ x.jsx(mr, {
      appear: !1,
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: {
        appear: u.transitions.duration.enteringScreen,
        enter: u.transitions.duration.enteringScreen,
        exit: 0
      },
      children: a
    }, s)
  });
}
const MO = (e) => dt("MuiPickersSlideTransition", e), At = ht("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]), _O = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"], IO = (e, t) => {
  const {
    slideDirection: n
  } = t, r = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${n}`],
    exitActive: [`slideExitActiveLeft-${n}`]
  };
  return it(r, MO, e);
}, NO = K(rs, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`.${At["slideEnter-left"]}`]: t["slideEnter-left"]
  }, {
    [`.${At["slideEnter-right"]}`]: t["slideEnter-right"]
  }, {
    [`.${At.slideEnterActive}`]: t.slideEnterActive
  }, {
    [`.${At.slideExit}`]: t.slideExit
  }, {
    [`.${At["slideExitActiveLeft-left"]}`]: t["slideExitActiveLeft-left"]
  }, {
    [`.${At["slideExitActiveLeft-right"]}`]: t["slideExitActiveLeft-right"]
  }]
})(({
  theme: e
}) => {
  const t = e.transitions.create("transform", {
    duration: e.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${At["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${At["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${At.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: t
    },
    [`& .${At.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${At["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: t,
      zIndex: 0
    },
    [`& .${At["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: t,
      zIndex: 0
    }
  };
});
function $O(e) {
  const t = nt({
    props: e,
    name: "MuiPickersSlideTransition"
  }), {
    children: n,
    className: r,
    reduceAnimations: s,
    slideDirection: i,
    transKey: a,
    classes: l
  } = t, c = te(t, _O), {
    ownerState: u
  } = vt(), d = y({}, u, {
    slideDirection: i
  }), p = IO(l, d), h = Zr();
  if (s)
    return /* @__PURE__ */ x.jsx("div", {
      className: fe(p.root, r),
      children: n
    });
  const b = {
    exit: p.exit,
    enterActive: p.enterActive,
    enter: p.enter,
    exitActive: p.exitActive
  };
  return /* @__PURE__ */ x.jsx(NO, {
    className: fe(p.root, r),
    childFactory: (g) => /* @__PURE__ */ m.cloneElement(g, {
      classNames: b
    }),
    role: "presentation",
    ownerState: d,
    children: /* @__PURE__ */ x.jsx(Rl, y({
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: h.transitions.duration.complex,
      classNames: b
    }, c, {
      children: n
    }), a)
  });
}
const AO = (e) => dt("MuiDayCalendar", e);
ht("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const FO = ["parentProps", "day", "focusedDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], jO = ["ownerState"], VO = (e) => it({
  root: ["root"],
  header: ["header"],
  weekDayLabel: ["weekDayLabel"],
  loadingContainer: ["loadingContainer"],
  slideTransition: ["slideTransition"],
  monthContainer: ["monthContainer"],
  weekContainer: ["weekContainer"],
  weekNumberLabel: ["weekNumberLabel"],
  weekNumber: ["weekNumber"]
}, AO, e), zp = (Bo + Ti * 2) * 6, LO = K("div", {
  name: "MuiDayCalendar",
  slot: "Root"
})({}), BO = K("div", {
  name: "MuiDayCalendar",
  slot: "Header"
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), WO = K(Hn, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel"
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (e.vars || e).palette.text.secondary
})), YO = K(Hn, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel"
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (e.vars || e).palette.text.disabled
})), zO = K(Hn, {
  name: "MuiDayCalendar",
  slot: "WeekNumber"
})(({
  theme: e
}) => y({}, e.typography.caption, {
  width: Bo,
  height: Bo,
  padding: 0,
  margin: `0 ${Ti}px`,
  color: (e.vars || e).palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
})), UO = K("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer"
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: zp
}), HO = K($O, {
  name: "MuiDayCalendar",
  slot: "SlideTransition"
})({
  minHeight: zp
}), qO = K("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer"
})({
  overflow: "hidden"
}), GO = K("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer"
})({
  margin: `${Ti}px 0`,
  display: "flex",
  justifyContent: "center"
});
function KO(e) {
  let {
    parentProps: t,
    day: n,
    focusedDay: r,
    selectedDays: s,
    isDateDisabled: i,
    currentMonthNumber: a,
    isViewFocused: l
  } = e, c = te(e, FO);
  const {
    disabled: u,
    disableHighlightToday: d,
    isMonthSwitchingAnimating: p,
    showDaysOutsideCurrentMonth: h,
    slots: b,
    slotProps: g,
    timezone: f
  } = t, v = Ge(), C = Ci(f), T = r != null && v.isSameDay(n, r), S = l && T, w = s.some((N) => v.isSameDay(N, n)), O = v.isSameDay(n, C), R = m.useMemo(() => u || i(n), [u, i, n]), P = m.useMemo(() => v.getMonth(n) !== a, [v, n, a]), E = hp({
    day: n,
    selected: w,
    disabled: R,
    today: O,
    outsideCurrentMonth: P,
    disableMargin: void 0,
    // This prop can only be defined using slotProps.day so the ownerState for useSlotProps cannot have its value.
    disableHighlightToday: d,
    showDaysOutsideCurrentMonth: h
  }), D = b?.day ?? gp, _ = Le({
    elementType: D,
    externalSlotProps: g?.day,
    additionalProps: y({
      disableHighlightToday: d,
      showDaysOutsideCurrentMonth: h,
      role: "gridcell",
      isAnimating: p,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": v.toJsDate(n).valueOf()
    }, c),
    ownerState: y({}, E, {
      day: n,
      isDayDisabled: R,
      isDaySelected: w
    })
  }), I = te(_, jO), M = m.useMemo(() => {
    const N = v.startOfMonth(v.setMonth(n, a));
    return h ? v.isSameDay(n, v.startOfWeek(N)) : v.isSameDay(n, N);
  }, [a, n, h, v]), F = m.useMemo(() => {
    const N = v.endOfMonth(v.setMonth(n, a));
    return h ? v.isSameDay(n, v.endOfWeek(N)) : v.isSameDay(n, N);
  }, [a, n, h, v]);
  return /* @__PURE__ */ x.jsx(D, y({}, I, {
    day: n,
    disabled: R,
    autoFocus: !P && S,
    today: O,
    outsideCurrentMonth: P,
    isFirstVisibleCell: M,
    isLastVisibleCell: F,
    selected: w,
    tabIndex: T ? 0 : -1,
    "aria-selected": w,
    "aria-current": O ? "date" : void 0
  }));
}
function ZO(e) {
  const t = nt({
    props: e,
    name: "MuiDayCalendar"
  }), n = Ge(), {
    onFocusedDayChange: r,
    className: s,
    classes: i,
    currentMonth: a,
    selectedDays: l,
    focusedDay: c,
    loading: u,
    onSelectedDaysChange: d,
    onMonthSwitchingAnimationEnd: p,
    readOnly: h,
    reduceAnimations: b,
    renderLoading: g = () => /* @__PURE__ */ x.jsx("span", {
      children: "..."
    }),
    slideDirection: f,
    TransitionProps: v,
    disablePast: C,
    disableFuture: T,
    minDate: S,
    maxDate: w,
    shouldDisableDate: O,
    shouldDisableMonth: R,
    shouldDisableYear: P,
    dayOfWeekFormatter: E = (z) => n.format(z, "weekdayShort").charAt(0).toUpperCase(),
    hasFocus: D,
    onFocusedViewChange: _,
    gridLabelId: I,
    displayWeekNumber: M,
    fixedWeekNumber: F,
    timezone: N
  } = t, V = Ci(N), A = VO(i), $ = hn(), L = Wp({
    shouldDisableDate: O,
    shouldDisableMonth: R,
    shouldDisableYear: P,
    minDate: S,
    maxDate: w,
    disablePast: C,
    disableFuture: T,
    timezone: N
  }), Y = Un(), k = he((z) => {
    h || d(z);
  }), j = (z) => {
    L(z) || (r(z), _?.(!0));
  }, U = he((z, B) => {
    switch (z.key) {
      case "ArrowUp":
        j(n.addDays(B, -7)), z.preventDefault();
        break;
      case "ArrowDown":
        j(n.addDays(B, 7)), z.preventDefault();
        break;
      case "ArrowLeft": {
        const ne = n.addDays(B, $ ? 1 : -1), Q = n.addMonths(B, $ ? 1 : -1), ae = Vo({
          adapter: n,
          date: ne,
          minDate: $ ? ne : n.startOfMonth(Q),
          maxDate: $ ? n.endOfMonth(Q) : ne,
          isDateDisabled: L,
          timezone: N
        });
        j(ae || ne), z.preventDefault();
        break;
      }
      case "ArrowRight": {
        const ne = n.addDays(B, $ ? -1 : 1), Q = n.addMonths(B, $ ? -1 : 1), ae = Vo({
          adapter: n,
          date: ne,
          minDate: $ ? n.startOfMonth(Q) : ne,
          maxDate: $ ? ne : n.endOfMonth(Q),
          isDateDisabled: L,
          timezone: N
        });
        j(ae || ne), z.preventDefault();
        break;
      }
      case "Home":
        j(n.startOfWeek(B)), z.preventDefault();
        break;
      case "End":
        j(n.endOfWeek(B)), z.preventDefault();
        break;
      case "PageUp":
        j(n.addMonths(B, 1)), z.preventDefault();
        break;
      case "PageDown":
        j(n.addMonths(B, -1)), z.preventDefault();
        break;
    }
  }), G = he((z, B) => j(B)), H = he((z, B) => {
    c != null && n.isSameDay(c, B) && _?.(!1);
  }), Z = n.getMonth(a), X = n.getYear(a), re = m.useMemo(() => l.filter((z) => !!z).map((z) => n.startOfDay(z)), [n, l]), ee = `${X}-${Z}`, J = m.useMemo(() => /* @__PURE__ */ m.createRef(), [ee]), q = m.useMemo(() => {
    const z = n.getWeekArray(a);
    let B = n.addMonths(a, 1);
    for (; F && z.length < F; ) {
      const ne = n.getWeekArray(B), Q = n.isSameDay(z[z.length - 1][0], ne[0][0]);
      ne.slice(Q ? 1 : 0).forEach((ae) => {
        z.length < F && z.push(ae);
      }), B = n.addMonths(B, 1);
    }
    return z;
  }, [a, F, n]);
  return /* @__PURE__ */ x.jsxs(LO, {
    role: "grid",
    "aria-labelledby": I,
    className: A.root,
    children: [/* @__PURE__ */ x.jsxs(BO, {
      role: "row",
      className: A.header,
      children: [M && /* @__PURE__ */ x.jsx(YO, {
        variant: "caption",
        role: "columnheader",
        "aria-label": Y.calendarWeekNumberHeaderLabel,
        className: A.weekNumberLabel,
        children: Y.calendarWeekNumberHeaderText
      }), Jv(n, V).map((z, B) => /* @__PURE__ */ x.jsx(WO, {
        variant: "caption",
        role: "columnheader",
        "aria-label": n.format(z, "weekday"),
        className: A.weekDayLabel,
        children: E(z)
      }, B.toString()))]
    }), u ? /* @__PURE__ */ x.jsx(UO, {
      className: A.loadingContainer,
      children: g()
    }) : /* @__PURE__ */ x.jsx(HO, y({
      transKey: ee,
      onExited: p,
      reduceAnimations: b,
      slideDirection: f,
      className: fe(s, A.slideTransition)
    }, v, {
      nodeRef: J,
      children: /* @__PURE__ */ x.jsx(qO, {
        ref: J,
        role: "rowgroup",
        className: A.monthContainer,
        children: q.map((z, B) => /* @__PURE__ */ x.jsxs(GO, {
          role: "row",
          className: A.weekContainer,
          "aria-rowindex": B + 1,
          children: [M && /* @__PURE__ */ x.jsx(zO, {
            className: A.weekNumber,
            role: "rowheader",
            "aria-label": Y.calendarWeekNumberAriaLabelText(n.getWeekNumber(z[0])),
            children: Y.calendarWeekNumberText(n.getWeekNumber(z[0]))
          }), z.map((ne, Q) => /* @__PURE__ */ x.jsx(KO, {
            parentProps: t,
            day: ne,
            selectedDays: re,
            isViewFocused: D,
            focusedDay: c,
            onKeyDown: U,
            onFocus: G,
            onBlur: H,
            onDaySelect: k,
            isDateDisabled: L,
            currentMonthNumber: Z,
            "aria-colindex": Q + 1
          }, ne.toString()))]
        }, `week-${z[0]}`))
      })
    }))]
  });
}
function Up(e) {
  return dt("MuiMonthCalendar", e);
}
const Ps = ht("MuiMonthCalendar", ["root", "button", "disabled", "selected"]), XO = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"], QO = (e, t) => {
  const n = {
    button: ["button", t.isMonthDisabled && "disabled", t.isMonthSelected && "selected"]
  };
  return it(n, Up, e);
}, JO = K("button", {
  name: "MuiMonthCalendar",
  slot: "Button",
  overridesResolver: (e, t) => [t.button, {
    [`&.${Ps.disabled}`]: t.disabled
  }, {
    [`&.${Ps.selected}`]: t.selected
  }]
})(({
  theme: e
}) => y({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Br(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Br(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${Ps.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${Ps.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), Hp = /* @__PURE__ */ m.memo(function(t) {
  const {
    autoFocus: n,
    classes: r,
    disabled: s,
    selected: i,
    value: a,
    onClick: l,
    onKeyDown: c,
    onFocus: u,
    onBlur: d,
    slots: p,
    slotProps: h
  } = t, b = te(t, XO), g = m.useRef(null), {
    ownerState: f
  } = vt(), v = y({}, f, {
    isMonthDisabled: s,
    isMonthSelected: i
  }), C = QO(r, v);
  un(() => {
    n && g.current?.focus();
  }, [n]);
  const T = p?.monthButton ?? JO, S = Le({
    elementType: T,
    externalSlotProps: h?.monthButton,
    externalForwardedProps: b,
    additionalProps: {
      disabled: s,
      ref: g,
      type: "button",
      role: "radio",
      "aria-checked": i,
      onClick: (w) => l(w, a),
      onKeyDown: (w) => c(w, a),
      onFocus: (w) => u(w, a),
      onBlur: (w) => d(w, a)
    },
    ownerState: v,
    className: C.button
  });
  return /* @__PURE__ */ x.jsx(T, y({}, S));
});
process.env.NODE_ENV !== "production" && (Hp.displayName = "MonthCalendarButton");
const eC = ["autoFocus", "className", "currentMonth", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId", "slots", "slotProps"], tC = (e) => it({
  root: ["root"]
}, Up, e);
function nC(e, t) {
  const n = nt({
    props: e,
    name: t
  }), r = is(n);
  return y({}, n, r, {
    monthsPerRow: n.monthsPerRow ?? 3
  });
}
const Pd = (e, t, n, r, s) => !!(e === t && r && s.isSameYear(n, r)), rC = K("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  shouldForwardProp: (e) => Xr.shouldForwardProp(e) && e !== "monthsPerRow"
})({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 16,
  padding: "8px 0",
  width: ki,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  variants: [{
    props: {
      monthsPerRow: 3
    },
    style: {
      columnGap: 24
    }
  }, {
    props: {
      monthsPerRow: 4
    },
    style: {
      columnGap: 0
    }
  }]
}), Kl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nC(t, "MuiMonthCalendar"), {
    autoFocus: s,
    className: i,
    currentMonth: a,
    classes: l,
    value: c,
    defaultValue: u,
    referenceDate: d,
    disabled: p,
    disableFuture: h,
    disablePast: b,
    maxDate: g,
    minDate: f,
    onChange: v,
    shouldDisableMonth: C,
    readOnly: T,
    onMonthFocus: S,
    hasFocus: w,
    onFocusedViewChange: O,
    monthsPerRow: R,
    timezone: P,
    gridLabelId: E,
    slots: D,
    slotProps: _
  } = r, I = te(r, eC), {
    value: M,
    handleValueChange: F,
    timezone: N
  } = os({
    name: "MonthCalendar",
    timezone: P,
    value: c,
    defaultValue: u,
    referenceDate: d,
    onChange: v,
    valueManager: dn
  }), V = Ci(N), A = hn(), $ = Ge(), {
    ownerState: L
  } = vt(), Y = m.useMemo(
    () => dn.getInitialReferenceValue({
      value: M,
      adapter: $,
      props: r,
      timezone: N,
      referenceDate: d,
      granularity: sn.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), k = tC(l), j = m.useMemo(() => $.getMonth(V), [$, V]), U = m.useMemo(() => M != null ? $.getMonth(M) : null, [M, $]), [G, H] = m.useState(() => U || $.getMonth(Y)), [Z, X] = Yr({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: w,
    default: s ?? !1
  }), re = he((Q) => {
    X(Q), O && O(Q);
  }), ee = m.useCallback((Q) => {
    const ae = $.startOfMonth(b && $.isAfter(V, f) ? V : f), W = $.startOfMonth(h && $.isBefore(V, g) ? V : g), se = $.startOfMonth(Q);
    return $.isBefore(se, ae) || $.isAfter(se, W) ? !0 : C ? C(se) : !1;
  }, [h, b, g, f, V, C, $]), J = he((Q, ae) => {
    if (T)
      return;
    const W = M && a && !$.isSameYear(M, a) ? $.setYear(M, $.getYear(a)) : M, se = $.setMonth(W ?? Y, ae);
    F(se);
  }), q = he((Q) => {
    ee($.setMonth(M ?? a ?? Y, Q)) || (H(Q), re(!0), S && S(Q));
  });
  m.useEffect(() => {
    H((Q) => U !== null && Q !== U ? U : Q);
  }, [U]);
  const z = he((Q, ae) => {
    switch (Q.key) {
      case "ArrowUp":
        q((12 + ae - 3) % 12), Q.preventDefault();
        break;
      case "ArrowDown":
        q((12 + ae + 3) % 12), Q.preventDefault();
        break;
      case "ArrowLeft":
        q((12 + ae + (A ? 1 : -1)) % 12), Q.preventDefault();
        break;
      case "ArrowRight":
        q((12 + ae + (A ? -1 : 1)) % 12), Q.preventDefault();
        break;
    }
  }), B = he((Q, ae) => {
    q(ae);
  }), ne = he((Q, ae) => {
    G === ae && re(!1);
  });
  return /* @__PURE__ */ x.jsx(rC, y({
    ref: n,
    className: fe(k.root, i),
    ownerState: L,
    role: "radiogroup",
    "aria-labelledby": E,
    monthsPerRow: R
  }, I, {
    children: bl($, a ?? M ?? Y).map((Q) => {
      const ae = $.getMonth(Q), W = $.format(Q, "monthShort"), se = $.format(Q, "month"), ge = Pd(ae, U, Q, M, $), we = p || ee(Q);
      return /* @__PURE__ */ x.jsx(Hp, {
        selected: ge,
        value: ae,
        onClick: J,
        onKeyDown: z,
        autoFocus: Z && ae === G,
        disabled: we,
        tabIndex: ae === G && !we ? 0 : -1,
        onFocus: B,
        onBlur: ne,
        "aria-current": Pd(ae, j, Q, V, $) ? "date" : void 0,
        "aria-label": se,
        slots: D,
        slotProps: _,
        classes: l,
        children: W
      }, W);
    })
  }));
});
process.env.NODE_ENV !== "production" && (Kl.displayName = "MonthCalendar");
process.env.NODE_ENV !== "production" && (Kl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  currentMonth: o.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: o.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  gridLabelId: o.string,
  hasFocus: o.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: o.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: o.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: o.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: o.func,
  onFocusedViewChange: o.func,
  onMonthFocus: o.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: o.object,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: o.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.object
});
function qp(e) {
  return dt("MuiYearCalendar", e);
}
const Os = ht("MuiYearCalendar", ["root", "button", "disabled", "selected"]), oC = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"], sC = (e, t) => {
  const n = {
    button: ["button", t.isYearDisabled && "disabled", t.isYearSelected && "selected"]
  };
  return it(n, qp, e);
}, iC = K("button", {
  name: "MuiYearCalendar",
  slot: "Button",
  overridesResolver: (e, t) => [t.button, {
    [`&.${Os.disabled}`]: t.disabled
  }, {
    [`&.${Os.selected}`]: t.selected
  }]
})(({
  theme: e
}) => y({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.focusOpacity})` : Br(e.palette.action.active, e.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Br(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${Os.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${Os.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), Gp = /* @__PURE__ */ m.memo(function(t) {
  const {
    autoFocus: n,
    classes: r,
    disabled: s,
    selected: i,
    value: a,
    onClick: l,
    onKeyDown: c,
    onFocus: u,
    onBlur: d,
    slots: p,
    slotProps: h
  } = t, b = te(t, oC), g = m.useRef(null), {
    ownerState: f
  } = vt(), v = y({}, f, {
    isYearDisabled: s,
    isYearSelected: i
  }), C = sC(r, v);
  un(() => {
    n && g.current?.focus();
  }, [n]);
  const T = p?.yearButton ?? iC, S = Le({
    elementType: T,
    externalSlotProps: h?.yearButton,
    externalForwardedProps: b,
    additionalProps: {
      disabled: s,
      ref: g,
      type: "button",
      role: "radio",
      "aria-checked": i,
      onClick: (w) => l(w, a),
      onKeyDown: (w) => c(w, a),
      onFocus: (w) => u(w, a),
      onBlur: (w) => d(w, a)
    },
    ownerState: v,
    className: C.button
  });
  return /* @__PURE__ */ x.jsx(T, y({}, S));
});
process.env.NODE_ENV !== "production" && (Gp.displayName = "YearCalendarButton");
const aC = ["autoFocus", "className", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsOrder", "yearsPerRow", "timezone", "gridLabelId", "slots", "slotProps"], lC = (e) => it({
  root: ["root"]
}, qp, e);
function cC(e, t) {
  const n = nt({
    props: e,
    name: t
  }), r = is(n);
  return y({}, n, r, {
    yearsPerRow: n.yearsPerRow ?? 3,
    yearsOrder: n.yearsOrder ?? "asc"
  });
}
const uC = K("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  shouldForwardProp: (e) => Xr.shouldForwardProp(e) && e !== "yearsPerRow"
})({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 12,
  padding: "6px 0",
  overflowY: "auto",
  height: "100%",
  width: ki,
  maxHeight: D0,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative",
  variants: [{
    props: {
      yearsPerRow: 3
    },
    style: {
      columnGap: 24
    }
  }, {
    props: {
      yearsPerRow: 4
    },
    style: {
      columnGap: 0,
      padding: "0 2px"
    }
  }]
}), dC = K("div", {
  name: "MuiYearCalendar",
  slot: "ButtonFiller"
})({
  height: 36,
  width: 72
}), Zl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = cC(t, "MuiYearCalendar"), {
    autoFocus: s,
    className: i,
    classes: a,
    value: l,
    defaultValue: c,
    referenceDate: u,
    disabled: d,
    disableFuture: p,
    disablePast: h,
    maxDate: b,
    minDate: g,
    onChange: f,
    readOnly: v,
    shouldDisableYear: C,
    onYearFocus: T,
    hasFocus: S,
    onFocusedViewChange: w,
    yearsOrder: O,
    yearsPerRow: R,
    timezone: P,
    gridLabelId: E,
    slots: D,
    slotProps: _
  } = r, I = te(r, aC), {
    value: M,
    handleValueChange: F,
    timezone: N
  } = os({
    name: "YearCalendar",
    timezone: P,
    value: l,
    defaultValue: c,
    referenceDate: u,
    onChange: f,
    valueManager: dn
  }), V = Ci(N), A = hn(), $ = Ge(), {
    ownerState: L
  } = vt(), Y = m.useMemo(
    () => dn.getInitialReferenceValue({
      value: M,
      adapter: $,
      props: r,
      timezone: N,
      referenceDate: u,
      granularity: sn.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), k = lC(a), j = m.useMemo(() => $.getYear(V), [$, V]), U = m.useMemo(() => M != null ? $.getYear(M) : null, [M, $]), [G, H] = m.useState(() => U || $.getYear(Y)), [Z, X] = Yr({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: S,
    default: s ?? !1
  }), re = he((ue) => {
    X(ue), w && w(ue);
  }), ee = m.useCallback((ue) => {
    if (h && $.isBeforeYear(ue, V) || p && $.isAfterYear(ue, V) || g && $.isBeforeYear(ue, g) || b && $.isAfterYear(ue, b))
      return !0;
    if (!C)
      return !1;
    const de = $.startOfYear(ue);
    return C(de);
  }, [p, h, b, g, V, C, $]), J = he((ue, de) => {
    if (v)
      return;
    const De = $.setYear(M ?? Y, de);
    F(De);
  }), q = he((ue) => {
    ee($.setYear(M ?? Y, ue)) || (H(ue), re(!0), T?.(ue));
  });
  m.useEffect(() => {
    H((ue) => U !== null && ue !== U ? U : ue);
  }, [U]);
  const z = O !== "desc" ? R * 1 : R * -1, B = A && O === "asc" || !A && O === "desc" ? -1 : 1, ne = he((ue, de) => {
    switch (ue.key) {
      case "ArrowUp":
        q(de - z), ue.preventDefault();
        break;
      case "ArrowDown":
        q(de + z), ue.preventDefault();
        break;
      case "ArrowLeft":
        q(de - B), ue.preventDefault();
        break;
      case "ArrowRight":
        q(de + B), ue.preventDefault();
        break;
    }
  }), Q = he((ue, de) => {
    q(de);
  }), ae = he((ue, de) => {
    G === de && re(!1);
  }), W = m.useRef(null), se = Rt(n, W);
  m.useEffect(() => {
    if (s || W.current === null)
      return;
    const ue = W.current.querySelector('[tabindex="0"]');
    if (!ue)
      return;
    const de = ue.offsetHeight, De = ue.offsetTop, Ee = W.current.clientHeight, Ce = W.current.scrollTop, Ze = De + de;
    de > Ee || De < Ce || (W.current.scrollTop = Ze - Ee / 2 - de / 2);
  }, [s]);
  const ge = $.getYearRange([g, b]);
  O === "desc" && ge.reverse();
  let we = R - ge.length % R;
  return we === R && (we = 0), /* @__PURE__ */ x.jsxs(uC, y({
    ref: se,
    className: fe(k.root, i),
    ownerState: L,
    role: "radiogroup",
    "aria-labelledby": E,
    yearsPerRow: R
  }, I, {
    children: [ge.map((ue) => {
      const de = $.getYear(ue), De = de === U, Ee = d || ee(ue);
      return /* @__PURE__ */ x.jsx(Gp, {
        selected: De,
        value: de,
        onClick: J,
        onKeyDown: ne,
        autoFocus: Z && de === G,
        disabled: Ee,
        tabIndex: de === G && !Ee ? 0 : -1,
        onFocus: Q,
        onBlur: ae,
        "aria-current": j === de ? "date" : void 0,
        slots: D,
        slotProps: _,
        classes: a,
        children: $.format(ue, "year")
      }, $.format(ue, "year"));
    }), Array.from({
      length: we
    }, (ue, de) => /* @__PURE__ */ x.jsx(dC, {}, de))]
  }));
});
process.env.NODE_ENV !== "production" && (Zl.displayName = "YearCalendar");
process.env.NODE_ENV !== "production" && (Zl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: o.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  gridLabelId: o.string,
  hasFocus: o.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: o.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: o.object,
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: o.func,
  onFocusedViewChange: o.func,
  onYearFocus: o.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: o.object,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: o.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.object,
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: o.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: o.oneOf([3, 4])
});
const fC = (e) => dt("MuiPickersCalendarHeader", e), pC = ht("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]), hC = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "classes", "timezone", "format"], mC = ["ownerState"], yC = (e) => it({
  root: ["root"],
  labelContainer: ["labelContainer"],
  label: ["label"],
  switchViewButton: ["switchViewButton"],
  switchViewIcon: ["switchViewIcon"]
}, fC, e), gC = K("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root"
})({
  display: "flex",
  alignItems: "center",
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40
}), bC = K("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer"
})(({
  theme: e
}) => y({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, e.typography.body1, {
  fontWeight: e.typography.fontWeightMedium
})), vC = K("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label"
})({
  marginRight: 6
}), xC = K(Lo, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton"
})({
  marginRight: "auto",
  variants: [{
    props: {
      view: "year"
    },
    style: {
      [`.${pC.switchViewIcon}`]: {
        transform: "rotate(180deg)"
      }
    }
  }]
}), SC = K(l0, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon"
})(({
  theme: e
}) => ({
  willChange: "transform",
  transition: e.transitions.create("transform"),
  transform: "rotate(0deg)"
})), Xl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Un(), s = Ge(), i = nt({
    props: t,
    name: "MuiPickersCalendarHeader"
  }), {
    slots: a,
    slotProps: l,
    currentMonth: c,
    disabled: u,
    disableFuture: d,
    disablePast: p,
    maxDate: h,
    minDate: b,
    onMonthChange: g,
    onViewChange: f,
    view: v,
    reduceAnimations: C,
    views: T,
    labelId: S,
    className: w,
    classes: O,
    timezone: R,
    format: P = `${s.formats.month} ${s.formats.year}`
  } = i, E = te(i, hC), {
    ownerState: D
  } = vt(), _ = yC(O), I = a?.switchViewButton ?? xC, M = Le({
    elementType: I,
    externalSlotProps: l?.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": r.calendarViewSwitchingButtonAriaLabel(v)
    },
    ownerState: y({}, D, {
      view: v
    }),
    className: _.switchViewButton
  }), F = a?.switchViewIcon ?? SC, N = Le({
    elementType: F,
    externalSlotProps: l?.switchViewIcon,
    ownerState: D,
    className: _.switchViewIcon
  }), V = te(N, mC), A = () => g(s.addMonths(c, 1)), $ = () => g(s.addMonths(c, -1)), L = T0(c, {
    disableFuture: d,
    maxDate: h,
    timezone: R
  }), Y = k0(c, {
    disablePast: p,
    minDate: b,
    timezone: R
  }), k = () => {
    if (!(T.length === 1 || !f || u))
      if (T.length === 2)
        f(T.find((U) => U !== v) || T[0]);
      else {
        const U = T.indexOf(v) !== 0 ? 0 : 1;
        f(T[U]);
      }
  };
  if (T.length === 1 && T[0] === "year")
    return null;
  const j = s.formatByString(c, P);
  return /* @__PURE__ */ x.jsxs(gC, y({}, E, {
    ownerState: D,
    className: fe(_.root, w),
    ref: n,
    children: [/* @__PURE__ */ x.jsxs(bC, {
      role: "presentation",
      onClick: k,
      ownerState: D,
      "aria-live": "polite",
      className: _.labelContainer,
      children: [/* @__PURE__ */ x.jsx(Yp, {
        reduceAnimations: C,
        transKey: j,
        children: /* @__PURE__ */ x.jsx(vC, {
          id: S,
          ownerState: D,
          className: _.label,
          children: j
        })
      }), T.length > 1 && !u && /* @__PURE__ */ x.jsx(I, y({}, M, {
        children: /* @__PURE__ */ x.jsx(F, y({}, V))
      }))]
    }), /* @__PURE__ */ x.jsx(mr, {
      in: v === "day",
      appear: !C,
      enter: !C,
      children: /* @__PURE__ */ x.jsx(lp, {
        slots: a,
        slotProps: l,
        onGoToPrevious: $,
        isPreviousDisabled: Y,
        previousLabel: r.previousMonth,
        onGoToNext: A,
        isNextDisabled: L,
        nextLabel: r.nextMonth
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Xl.displayName = "PickersCalendarHeader");
process.env.NODE_ENV !== "production" && (Xl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  currentMonth: o.object.isRequired,
  disabled: o.bool,
  disableFuture: o.bool,
  disablePast: o.bool,
  /**
   * Format used to display the date.
   * @default `${adapter.formats.month} ${adapter.formats.year}`
   */
  format: o.string,
  /**
   * Id of the calendar text element.
   * It is used to establish an `aria-labelledby` relationship with the calendar `grid` element.
   */
  labelId: o.string,
  maxDate: o.object.isRequired,
  minDate: o.object.isRequired,
  onMonthChange: o.func.isRequired,
  onViewChange: o.func,
  reduceAnimations: o.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  timezone: o.string.isRequired,
  view: o.oneOf(["day", "month", "year"]).isRequired,
  views: o.arrayOf(o.oneOf(["day", "month", "year"]).isRequired).isRequired
});
const wC = "@media (prefers-reduced-motion: reduce)", $r = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), Od = $r && $r[1] ? parseInt($r[1], 10) : null, Cd = $r && $r[2] ? parseInt($r[2], 10) : null, PC = Od && Od < 10 || Cd && Cd < 13 || !1;
function Kp(e) {
  const t = _f(wC, {
    defaultMatches: !1
  });
  return e ?? (t || PC);
}
const OC = (e) => dt("MuiDateCalendar", e);
ht("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const CC = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "classes", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsOrder", "yearsPerRow", "monthsPerRow", "timezone"], EC = (e) => it({
  root: ["root"],
  viewTransitionContainer: ["viewTransitionContainer"]
}, OC, e);
function TC(e, t) {
  const n = nt({
    props: e,
    name: t
  }), r = Kp(n.reduceAnimations), s = is(n);
  return y({}, n, s, {
    loading: n.loading ?? !1,
    openTo: n.openTo ?? "day",
    views: n.views ?? ["year", "day"],
    reduceAnimations: r,
    renderLoading: n.renderLoading ?? (() => /* @__PURE__ */ x.jsx("span", {
      children: "..."
    }))
  });
}
const kC = K(R0, {
  name: "MuiDateCalendar",
  slot: "Root"
})({
  display: "flex",
  flexDirection: "column",
  height: _l
}), DC = K(Yp, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer"
})({}), Ql = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ge(), {
    ownerState: s
  } = vt(), i = yl(), a = TC(t, "MuiDateCalendar"), {
    autoFocus: l,
    onViewChange: c,
    value: u,
    defaultValue: d,
    referenceDate: p,
    disableFuture: h,
    disablePast: b,
    onChange: g,
    onMonthChange: f,
    reduceAnimations: v,
    shouldDisableDate: C,
    shouldDisableMonth: T,
    shouldDisableYear: S,
    view: w,
    views: O,
    openTo: R,
    className: P,
    classes: E,
    disabled: D,
    readOnly: _,
    minDate: I,
    maxDate: M,
    disableHighlightToday: F,
    focusedView: N,
    onFocusedViewChange: V,
    showDaysOutsideCurrentMonth: A,
    fixedWeekNumber: $,
    dayOfWeekFormatter: L,
    slots: Y,
    slotProps: k,
    loading: j,
    renderLoading: U,
    displayWeekNumber: G,
    yearsOrder: H,
    yearsPerRow: Z,
    monthsPerRow: X,
    timezone: re
  } = a, ee = te(a, CC), {
    value: J,
    handleValueChange: q,
    timezone: z
  } = os({
    name: "DateCalendar",
    timezone: re,
    value: u,
    defaultValue: d,
    referenceDate: p,
    onChange: g,
    valueManager: dn
  }), {
    view: B,
    setView: ne,
    focusedView: Q,
    setFocusedView: ae,
    goToNextView: W,
    setValueAndGoToNextView: se
  } = up({
    view: w,
    views: O,
    openTo: R,
    onChange: q,
    onViewChange: c,
    autoFocus: l,
    focusedView: N,
    onFocusedViewChange: V
  }), {
    referenceDate: ge,
    calendarState: we,
    setVisibleDate: ue,
    isDateDisabled: de,
    onMonthSwitchingAnimationEnd: De
  } = EO({
    value: J,
    referenceDate: p,
    reduceAnimations: v,
    onMonthChange: f,
    minDate: I,
    maxDate: M,
    shouldDisableDate: C,
    disablePast: b,
    disableFuture: h,
    timezone: z,
    getCurrentMonthFromVisibleDate: (Se, ct) => r.isSameMonth(Se, ct) ? ct : r.startOfMonth(Se)
  }), Ee = D && J || I, Ce = D && J || M, Ze = `${i}-grid-label`, ft = Q !== null, mt = Y?.calendarHeader ?? Xl, Oe = Le({
    elementType: mt,
    externalSlotProps: k?.calendarHeader,
    additionalProps: {
      views: O,
      view: B,
      currentMonth: we.currentMonth,
      onViewChange: ne,
      onMonthChange: (Se) => ue({
        target: Se,
        reason: "header-navigation"
      }),
      minDate: Ee,
      maxDate: Ce,
      disabled: D,
      disablePast: b,
      disableFuture: h,
      reduceAnimations: v,
      timezone: z,
      labelId: Ze
    },
    ownerState: s
  }), ie = he((Se) => {
    const ct = r.startOfMonth(Se), wt = r.endOfMonth(Se), qt = de(Se) ? Vo({
      adapter: r,
      date: Se,
      minDate: r.isBefore(I, ct) ? ct : I,
      maxDate: r.isAfter(M, wt) ? wt : M,
      disablePast: b,
      disableFuture: h,
      isDateDisabled: de,
      timezone: z
    }) : Se;
    qt ? (se(qt, "finish"), ue({
      target: qt,
      reason: "cell-interaction"
    })) : (W(), ue({
      target: ct,
      reason: "cell-interaction"
    }));
  }), ve = he((Se) => {
    const ct = r.startOfYear(Se), wt = r.endOfYear(Se), qt = de(Se) ? Vo({
      adapter: r,
      date: Se,
      minDate: r.isBefore(I, ct) ? ct : I,
      maxDate: r.isAfter(M, wt) ? wt : M,
      disablePast: b,
      disableFuture: h,
      isDateDisabled: de,
      timezone: z
    }) : Se;
    qt ? (se(qt, "finish"), ue({
      target: qt,
      reason: "cell-interaction"
    })) : (W(), ue({
      target: ct,
      reason: "cell-interaction"
    }));
  }), Te = he((Se) => q(Se && Hs(r, Se, J ?? ge), "finish", B));
  m.useEffect(() => {
    r.isValid(J) && ue({
      target: J,
      reason: "controlled-value-change"
    });
  }, [J]);
  const Ye = EC(E), rt = {
    disablePast: b,
    disableFuture: h,
    maxDate: M,
    minDate: I
  }, pe = {
    disableHighlightToday: F,
    readOnly: _,
    disabled: D,
    timezone: z,
    gridLabelId: Ze,
    slots: Y,
    slotProps: k
  }, be = m.useRef(B);
  m.useEffect(() => {
    be.current !== B && (Q === be.current && ae(B, !0), be.current = B);
  }, [Q, ae, B]);
  const ze = m.useMemo(() => [J], [J]);
  return /* @__PURE__ */ x.jsxs(kC, y({
    ref: n,
    className: fe(Ye.root, P),
    ownerState: s
  }, ee, {
    children: [/* @__PURE__ */ x.jsx(mt, y({}, Oe, {
      slots: Y,
      slotProps: k
    })), /* @__PURE__ */ x.jsx(DC, {
      reduceAnimations: v,
      className: Ye.viewTransitionContainer,
      transKey: B,
      ownerState: s,
      children: /* @__PURE__ */ x.jsxs("div", {
        children: [B === "year" && /* @__PURE__ */ x.jsx(Zl, y({}, rt, pe, {
          value: J,
          onChange: ve,
          shouldDisableYear: S,
          hasFocus: ft,
          onFocusedViewChange: (Se) => ae("year", Se),
          yearsOrder: H,
          yearsPerRow: Z,
          referenceDate: ge
        })), B === "month" && /* @__PURE__ */ x.jsx(Kl, y({}, rt, pe, {
          currentMonth: we.currentMonth,
          hasFocus: ft,
          className: P,
          value: J,
          onChange: ie,
          shouldDisableMonth: T,
          onFocusedViewChange: (Se) => ae("month", Se),
          monthsPerRow: X,
          referenceDate: ge
        })), B === "day" && /* @__PURE__ */ x.jsx(ZO, y({}, we, rt, pe, {
          onMonthSwitchingAnimationEnd: De,
          hasFocus: ft,
          onFocusedDayChange: (Se) => ue({
            target: Se,
            reason: "cell-interaction"
          }),
          reduceAnimations: v,
          selectedDays: ze,
          onSelectedDaysChange: Te,
          shouldDisableDate: C,
          shouldDisableMonth: T,
          shouldDisableYear: S,
          onFocusedViewChange: (Se) => ae("day", Se),
          showDaysOutsideCurrentMonth: A,
          fixedWeekNumber: $,
          dayOfWeekFormatter: L,
          displayWeekNumber: G,
          loading: j,
          renderLoading: U
        }))]
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Ql.displayName = "DateCalendar");
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: o.func,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: o.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: o.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: o.number,
  /**
   * Controlled focused view.
   */
  focusedView: o.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: o.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: o.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: o.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: o.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: o.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: o.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: o.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: o.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: o.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: o.oneOf(["day", "month", "year"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: o.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: o.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: o.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: o.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: o.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: o.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: o.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: o.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: o.arrayOf(o.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: o.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: o.oneOf([3, 4])
});
function RC(e) {
  return dt("MuiPickersToolbar", e);
}
ht("MuiPickersToolbar", ["root", "title", "content"]);
function Zp() {
  const {
    ownerState: e
  } = vt(), t = hn();
  return m.useMemo(() => y({}, e, {
    toolbarDirection: t ? "rtl" : "ltr"
  }), [e, t]);
}
const MC = ["children", "className", "classes", "toolbarTitle", "hidden", "titleId", "classes", "landscapeDirection"], _C = (e) => it({
  root: ["root"],
  title: ["title"],
  content: ["content"]
}, RC, e), IC = K("div", {
  name: "MuiPickersToolbar",
  slot: "Root"
})(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: e.spacing(2, 3),
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      height: "auto",
      maxWidth: 160,
      padding: 16,
      justifyContent: "flex-start",
      flexWrap: "wrap"
    }
  }]
})), NC = K("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  shouldForwardProp: (e) => Xr.shouldForwardProp(e) && e !== "landscapeDirection"
})({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column"
    }
  }, {
    props: {
      pickerOrientation: "landscape",
      landscapeDirection: "row"
    },
    style: {
      flexDirection: "row"
    }
  }]
}), Xp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersToolbar"
  }), {
    children: s,
    className: i,
    classes: a,
    toolbarTitle: l,
    hidden: c,
    titleId: u,
    landscapeDirection: d
  } = r, p = te(r, MC), h = Zp(), b = _C(a);
  return c ? null : /* @__PURE__ */ x.jsxs(IC, y({
    ref: n,
    className: fe(b.root, i),
    ownerState: h
  }, p, {
    children: [/* @__PURE__ */ x.jsx(Hn, {
      color: "text.secondary",
      variant: "overline",
      id: u,
      className: b.title,
      children: l
    }), /* @__PURE__ */ x.jsx(NC, {
      className: b.content,
      ownerState: h,
      landscapeDirection: d,
      children: s
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Xp.displayName = "PickersToolbar");
function $C(e) {
  return dt("MuiDatePickerToolbar", e);
}
ht("MuiDatePickerToolbar", ["root", "title"]);
const AC = ["toolbarFormat", "toolbarPlaceholder", "className", "classes"], FC = (e) => it({
  root: ["root"],
  title: ["title"]
}, $C, e), jC = K(Xp, {
  name: "MuiDatePickerToolbar",
  slot: "Root"
})({}), VC = K(Hn, {
  name: "MuiDatePickerToolbar",
  slot: "Title"
})({
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      margin: "auto 16px auto auto"
    }
  }]
}), Jl = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiDatePickerToolbar"
  }), {
    toolbarFormat: s,
    toolbarPlaceholder: i = "––",
    className: a,
    classes: l
  } = r, c = te(r, AC), u = Ge(), {
    value: d,
    views: p,
    orientation: h
  } = Qr(), b = Un(), g = Zp(), f = FC(l), v = m.useMemo(() => {
    if (!u.isValid(d))
      return i;
    const C = vl(u, {
      format: s,
      views: p
    }, !0);
    return u.formatByString(d, C);
  }, [d, s, i, u, p]);
  return /* @__PURE__ */ x.jsx(jC, y({
    ref: n,
    toolbarTitle: b.datePickerToolbarTitle,
    className: fe(f.root, a)
  }, c, {
    children: /* @__PURE__ */ x.jsx(VC, {
      variant: "h4",
      align: h === "landscape" ? "left" : "center",
      ownerState: g,
      className: f.title,
      children: v
    })
  }));
});
process.env.NODE_ENV !== "production" && (Jl.displayName = "DatePickerToolbar");
process.env.NODE_ENV !== "production" && (Jl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  titleId: o.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: o.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: o.node
});
function Qp(e, t) {
  const n = nt({
    props: e,
    name: t
  }), r = is(n), s = m.useMemo(() => n.localeText?.toolbarTitle == null ? n.localeText : y({}, n.localeText, {
    datePickerToolbarTitle: n.localeText.toolbarTitle
  }), [n.localeText]);
  return y({}, n, r, {
    localeText: s
  }, Kv({
    views: n.views,
    openTo: n.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    slots: y({
      toolbar: Jl
    }, n.slots)
  });
}
var go = {}, Ed;
function LC() {
  if (Ed) return go;
  Ed = 1, Object.defineProperty(go, "__esModule", {
    value: !0
  }), go.default = void 0;
  var e = r(xe), t = qf;
  function n(a) {
    if (typeof WeakMap != "function") return null;
    var l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
    return (n = function(u) {
      return u ? c : l;
    })(a);
  }
  function r(a, l) {
    if (a && a.__esModule) return a;
    if (a === null || typeof a != "object" && typeof a != "function") return { default: a };
    var c = n(l);
    if (c && c.has(a)) return c.get(a);
    var u = { __proto__: null }, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in a) if (p !== "default" && Object.prototype.hasOwnProperty.call(a, p)) {
      var h = d ? Object.getOwnPropertyDescriptor(a, p) : null;
      h && (h.get || h.set) ? Object.defineProperty(u, p, h) : u[p] = a[p];
    }
    return u.default = a, c && c.set(a, u), u;
  }
  function s(a) {
    return Object.keys(a).length === 0;
  }
  function i(a = null) {
    const l = e.useContext(t.ThemeContext);
    return !l || s(l) ? a : l;
  }
  return go.default = i, go;
}
var BC = /* @__PURE__ */ LC();
const WC = /* @__PURE__ */ rl(BC);
var Tt = "top", Bt = "bottom", Wt = "right", kt = "left", ec = "auto", us = [Tt, Bt, Wt, kt], Ur = "start", zo = "end", YC = "clippingParents", Jp = "viewport", bo = "popper", zC = "reference", Td = /* @__PURE__ */ us.reduce(function(e, t) {
  return e.concat([t + "-" + Ur, t + "-" + zo]);
}, []), eh = /* @__PURE__ */ [].concat(us, [ec]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ur, t + "-" + zo]);
}, []), UC = "beforeRead", HC = "read", qC = "afterRead", GC = "beforeMain", KC = "main", ZC = "afterMain", XC = "beforeWrite", QC = "write", JC = "afterWrite", eE = [UC, HC, qC, GC, KC, ZC, XC, QC, JC];
function fn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Nt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function pr(e) {
  var t = Nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Lt(e) {
  var t = Nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function tE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, i = t.elements[n];
    !Lt(i) || !fn(i) || (Object.assign(i.style, r), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function nE(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Lt(s) || !fn(s) || (Object.assign(s.style, l), Object.keys(i).forEach(function(c) {
        s.removeAttribute(c);
      }));
    });
  };
}
const rE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: tE,
  effect: nE,
  requires: ["computeStyles"]
};
function cn(e) {
  return e.split("-")[0];
}
var sr = Math.max, Xs = Math.min, Hr = Math.round;
function Ha() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function th() {
  return !/^((?!chrome|android).)*safari/i.test(Ha());
}
function qr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, i = 1;
  t && Lt(e) && (s = e.offsetWidth > 0 && Hr(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Hr(r.height) / e.offsetHeight || 1);
  var a = pr(e) ? Nt(e) : window, l = a.visualViewport, c = !th() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / s, d = (r.top + (c && l ? l.offsetTop : 0)) / i, p = r.width / s, h = r.height / i;
  return {
    width: p,
    height: h,
    top: d,
    right: u + p,
    bottom: d + h,
    left: u,
    x: u,
    y: d
  };
}
function nc(e) {
  var t = qr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function nh(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && tc(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Tn(e) {
  return Nt(e).getComputedStyle(e);
}
function oE(e) {
  return ["table", "td", "th"].indexOf(fn(e)) >= 0;
}
function qn(e) {
  return ((pr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Hi(e) {
  return fn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (tc(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    qn(e)
  );
}
function kd(e) {
  return !Lt(e) || // https://github.com/popperjs/popper-core/issues/837
  Tn(e).position === "fixed" ? null : e.offsetParent;
}
function sE(e) {
  var t = /firefox/i.test(Ha()), n = /Trident/i.test(Ha());
  if (n && Lt(e)) {
    var r = Tn(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Hi(e);
  for (tc(s) && (s = s.host); Lt(s) && ["html", "body"].indexOf(fn(s)) < 0; ) {
    var i = Tn(s);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function ds(e) {
  for (var t = Nt(e), n = kd(e); n && oE(n) && Tn(n).position === "static"; )
    n = kd(n);
  return n && (fn(n) === "html" || fn(n) === "body" && Tn(n).position === "static") ? t : n || sE(e) || t;
}
function rc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ro(e, t, n) {
  return sr(e, Xs(t, n));
}
function iE(e, t, n) {
  var r = Ro(e, t, n);
  return r > n ? n : r;
}
function rh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function oh(e) {
  return Object.assign({}, rh(), e);
}
function sh(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var aE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, oh(typeof t != "number" ? t : sh(t, us));
};
function lE(e) {
  var t, n = e.state, r = e.name, s = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, l = cn(n.placement), c = rc(l), u = [kt, Wt].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !a)) {
    var p = aE(s.padding, n), h = nc(i), b = c === "y" ? Tt : kt, g = c === "y" ? Bt : Wt, f = n.rects.reference[d] + n.rects.reference[c] - a[c] - n.rects.popper[d], v = a[c] - n.rects.reference[c], C = ds(i), T = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, S = f / 2 - v / 2, w = p[b], O = T - h[d] - p[g], R = T / 2 - h[d] / 2 + S, P = Ro(w, R, O), E = c;
    n.modifiersData[r] = (t = {}, t[E] = P, t.centerOffset = P - R, t);
  }
}
function cE(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || nh(t.elements.popper, s) && (t.elements.arrow = s));
}
const uE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: lE,
  effect: cE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Gr(e) {
  return e.split("-")[1];
}
var dE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function fE(e, t) {
  var n = e.x, r = e.y, s = t.devicePixelRatio || 1;
  return {
    x: Hr(n * s) / s || 0,
    y: Hr(r * s) / s || 0
  };
}
function Dd(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, i = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, h = a.x, b = h === void 0 ? 0 : h, g = a.y, f = g === void 0 ? 0 : g, v = typeof d == "function" ? d({
    x: b,
    y: f
  }) : {
    x: b,
    y: f
  };
  b = v.x, f = v.y;
  var C = a.hasOwnProperty("x"), T = a.hasOwnProperty("y"), S = kt, w = Tt, O = window;
  if (u) {
    var R = ds(n), P = "clientHeight", E = "clientWidth";
    if (R === Nt(n) && (R = qn(n), Tn(R).position !== "static" && l === "absolute" && (P = "scrollHeight", E = "scrollWidth")), R = R, s === Tt || (s === kt || s === Wt) && i === zo) {
      w = Bt;
      var D = p && R === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[P]
      );
      f -= D - r.height, f *= c ? 1 : -1;
    }
    if (s === kt || (s === Tt || s === Bt) && i === zo) {
      S = Wt;
      var _ = p && R === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[E]
      );
      b -= _ - r.width, b *= c ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: l
  }, u && dE), M = d === !0 ? fE({
    x: b,
    y: f
  }, Nt(n)) : {
    x: b,
    y: f
  };
  if (b = M.x, f = M.y, c) {
    var F;
    return Object.assign({}, I, (F = {}, F[w] = T ? "0" : "", F[S] = C ? "0" : "", F.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + f + "px)" : "translate3d(" + b + "px, " + f + "px, 0)", F));
  }
  return Object.assign({}, I, (t = {}, t[w] = T ? f + "px" : "", t[S] = C ? b + "px" : "", t.transform = "", t));
}
function pE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: cn(t.placement),
    variation: Gr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dd(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dd(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hE = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: pE,
  data: {}
};
var Cs = {
  passive: !0
};
function mE(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, i = s === void 0 ? !0 : s, a = r.resize, l = a === void 0 ? !0 : a, c = Nt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Cs);
  }), l && c.addEventListener("resize", n.update, Cs), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Cs);
    }), l && c.removeEventListener("resize", n.update, Cs);
  };
}
const yE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: mE,
  data: {}
};
var gE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function As(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return gE[t];
  });
}
var bE = {
  start: "end",
  end: "start"
};
function Rd(e) {
  return e.replace(/start|end/g, function(t) {
    return bE[t];
  });
}
function oc(e) {
  var t = Nt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function sc(e) {
  return qr(qn(e)).left + oc(e).scrollLeft;
}
function vE(e, t) {
  var n = Nt(e), r = qn(e), s = n.visualViewport, i = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (s) {
    i = s.width, a = s.height;
    var u = th();
    (u || !u && t === "fixed") && (l = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l + sc(e),
    y: c
  };
}
function xE(e) {
  var t, n = qn(e), r = oc(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, i = sr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = sr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -r.scrollLeft + sc(e), c = -r.scrollTop;
  return Tn(s || n).direction === "rtl" && (l += sr(n.clientWidth, s ? s.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function ic(e) {
  var t = Tn(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function ih(e) {
  return ["html", "body", "#document"].indexOf(fn(e)) >= 0 ? e.ownerDocument.body : Lt(e) && ic(e) ? e : ih(Hi(e));
}
function Mo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ih(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Nt(r), a = s ? [i].concat(i.visualViewport || [], ic(r) ? r : []) : r, l = t.concat(a);
  return s ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Mo(Hi(a)))
  );
}
function qa(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function SE(e, t) {
  var n = qr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Md(e, t, n) {
  return t === Jp ? qa(vE(e, n)) : pr(t) ? SE(t, n) : qa(xE(qn(e)));
}
function wE(e) {
  var t = Mo(Hi(e)), n = ["absolute", "fixed"].indexOf(Tn(e).position) >= 0, r = n && Lt(e) ? ds(e) : e;
  return pr(r) ? t.filter(function(s) {
    return pr(s) && nh(s, r) && fn(s) !== "body";
  }) : [];
}
function PE(e, t, n, r) {
  var s = t === "clippingParents" ? wE(e) : [].concat(t), i = [].concat(s, [n]), a = i[0], l = i.reduce(function(c, u) {
    var d = Md(e, u, r);
    return c.top = sr(d.top, c.top), c.right = Xs(d.right, c.right), c.bottom = Xs(d.bottom, c.bottom), c.left = sr(d.left, c.left), c;
  }, Md(e, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ah(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? cn(r) : null, i = r ? Gr(r) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (s) {
    case Tt:
      c = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Bt:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Wt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case kt:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = s ? rc(s) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Ur:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case zo:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function Uo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, l = n.boundary, c = l === void 0 ? YC : l, u = n.rootBoundary, d = u === void 0 ? Jp : u, p = n.elementContext, h = p === void 0 ? bo : p, b = n.altBoundary, g = b === void 0 ? !1 : b, f = n.padding, v = f === void 0 ? 0 : f, C = oh(typeof v != "number" ? v : sh(v, us)), T = h === bo ? zC : bo, S = e.rects.popper, w = e.elements[g ? T : h], O = PE(pr(w) ? w : w.contextElement || qn(e.elements.popper), c, d, a), R = qr(e.elements.reference), P = ah({
    reference: R,
    element: S,
    placement: s
  }), E = qa(Object.assign({}, S, P)), D = h === bo ? E : R, _ = {
    top: O.top - D.top + C.top,
    bottom: D.bottom - O.bottom + C.bottom,
    left: O.left - D.left + C.left,
    right: D.right - O.right + C.right
  }, I = e.modifiersData.offset;
  if (h === bo && I) {
    var M = I[s];
    Object.keys(_).forEach(function(F) {
      var N = [Wt, Bt].indexOf(F) >= 0 ? 1 : -1, V = [Tt, Bt].indexOf(F) >= 0 ? "y" : "x";
      _[F] += M[V] * N;
    });
  }
  return _;
}
function OE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, i = n.rootBoundary, a = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? eh : c, d = Gr(r), p = d ? l ? Td : Td.filter(function(g) {
    return Gr(g) === d;
  }) : us, h = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  h.length === 0 && (h = p);
  var b = h.reduce(function(g, f) {
    return g[f] = Uo(e, {
      placement: f,
      boundary: s,
      rootBoundary: i,
      padding: a
    })[cn(f)], g;
  }, {});
  return Object.keys(b).sort(function(g, f) {
    return b[g] - b[f];
  });
}
function CE(e) {
  if (cn(e) === ec)
    return [];
  var t = As(e);
  return [Rd(e), t, Rd(t)];
}
function EE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, i = s === void 0 ? !0 : s, a = n.altAxis, l = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, b = n.flipVariations, g = b === void 0 ? !0 : b, f = n.allowedAutoPlacements, v = t.options.placement, C = cn(v), T = C === v, S = c || (T || !g ? [As(v)] : CE(v)), w = [v].concat(S).reduce(function(H, Z) {
      return H.concat(cn(Z) === ec ? OE(t, {
        placement: Z,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: f
      }) : Z);
    }, []), O = t.rects.reference, R = t.rects.popper, P = /* @__PURE__ */ new Map(), E = !0, D = w[0], _ = 0; _ < w.length; _++) {
      var I = w[_], M = cn(I), F = Gr(I) === Ur, N = [Tt, Bt].indexOf(M) >= 0, V = N ? "width" : "height", A = Uo(t, {
        placement: I,
        boundary: d,
        rootBoundary: p,
        altBoundary: h,
        padding: u
      }), $ = N ? F ? Wt : kt : F ? Bt : Tt;
      O[V] > R[V] && ($ = As($));
      var L = As($), Y = [];
      if (i && Y.push(A[M] <= 0), l && Y.push(A[$] <= 0, A[L] <= 0), Y.every(function(H) {
        return H;
      })) {
        D = I, E = !1;
        break;
      }
      P.set(I, Y);
    }
    if (E)
      for (var k = g ? 3 : 1, j = function(Z) {
        var X = w.find(function(re) {
          var ee = P.get(re);
          if (ee)
            return ee.slice(0, Z).every(function(J) {
              return J;
            });
        });
        if (X)
          return D = X, "break";
      }, U = k; U > 0; U--) {
        var G = j(U);
        if (G === "break") break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const TE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: EE,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _d(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Id(e) {
  return [Tt, Wt, Bt, kt].some(function(t) {
    return e[t] >= 0;
  });
}
function kE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, i = t.modifiersData.preventOverflow, a = Uo(t, {
    elementContext: "reference"
  }), l = Uo(t, {
    altBoundary: !0
  }), c = _d(a, r), u = _d(l, s, i), d = Id(c), p = Id(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": p
  });
}
const DE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: kE
};
function RE(e, t, n) {
  var r = cn(e), s = [kt, Tt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], l = i[1];
  return a = a || 0, l = (l || 0) * s, [kt, Wt].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function ME(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, i = s === void 0 ? [0, 0] : s, a = eh.reduce(function(d, p) {
    return d[p] = RE(p, t.rects, i), d;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const _E = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ME
};
function IE(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ah({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const NE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: IE,
  data: {}
};
function $E(e) {
  return e === "x" ? "y" : "x";
}
function AE(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, i = s === void 0 ? !0 : s, a = n.altAxis, l = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, h = n.tether, b = h === void 0 ? !0 : h, g = n.tetherOffset, f = g === void 0 ? 0 : g, v = Uo(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), C = cn(t.placement), T = Gr(t.placement), S = !T, w = rc(C), O = $E(w), R = t.modifiersData.popperOffsets, P = t.rects.reference, E = t.rects.popper, D = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, _ = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (R) {
    if (i) {
      var F, N = w === "y" ? Tt : kt, V = w === "y" ? Bt : Wt, A = w === "y" ? "height" : "width", $ = R[w], L = $ + v[N], Y = $ - v[V], k = b ? -E[A] / 2 : 0, j = T === Ur ? P[A] : E[A], U = T === Ur ? -E[A] : -P[A], G = t.elements.arrow, H = b && G ? nc(G) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : rh(), X = Z[N], re = Z[V], ee = Ro(0, P[A], H[A]), J = S ? P[A] / 2 - k - ee - X - _.mainAxis : j - ee - X - _.mainAxis, q = S ? -P[A] / 2 + k + ee + re + _.mainAxis : U + ee + re + _.mainAxis, z = t.elements.arrow && ds(t.elements.arrow), B = z ? w === "y" ? z.clientTop || 0 : z.clientLeft || 0 : 0, ne = (F = I?.[w]) != null ? F : 0, Q = $ + J - ne - B, ae = $ + q - ne, W = Ro(b ? Xs(L, Q) : L, $, b ? sr(Y, ae) : Y);
      R[w] = W, M[w] = W - $;
    }
    if (l) {
      var se, ge = w === "x" ? Tt : kt, we = w === "x" ? Bt : Wt, ue = R[O], de = O === "y" ? "height" : "width", De = ue + v[ge], Ee = ue - v[we], Ce = [Tt, kt].indexOf(C) !== -1, Ze = (se = I?.[O]) != null ? se : 0, ft = Ce ? De : ue - P[de] - E[de] - Ze + _.altAxis, mt = Ce ? ue + P[de] + E[de] - Ze - _.altAxis : Ee, Oe = b && Ce ? iE(ft, ue, mt) : Ro(b ? ft : De, ue, b ? mt : Ee);
      R[O] = Oe, M[O] = Oe - ue;
    }
    t.modifiersData[r] = M;
  }
}
const FE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: AE,
  requiresIfExists: ["offset"]
};
function jE(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function VE(e) {
  return e === Nt(e) || !Lt(e) ? oc(e) : jE(e);
}
function LE(e) {
  var t = e.getBoundingClientRect(), n = Hr(t.width) / e.offsetWidth || 1, r = Hr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function BE(e, t, n) {
  n === void 0 && (n = !1);
  var r = Lt(t), s = Lt(t) && LE(t), i = qn(t), a = qr(e, s, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((fn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ic(i)) && (l = VE(t)), Lt(t) ? (c = qr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = sc(i))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function WE(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function s(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && s(c);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || s(i);
  }), r;
}
function YE(e) {
  var t = WE(e);
  return eE.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function zE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function UE(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Nd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $d() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function HE(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, i = s === void 0 ? Nd : s;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Nd, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], h = !1, b = {
      state: d,
      setOptions: function(C) {
        var T = typeof C == "function" ? C(d.options) : C;
        f(), d.options = Object.assign({}, i, d.options, T), d.scrollParents = {
          reference: pr(l) ? Mo(l) : l.contextElement ? Mo(l.contextElement) : [],
          popper: Mo(c)
        };
        var S = YE(UE([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = S.filter(function(w) {
          return w.enabled;
        }), g(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var C = d.elements, T = C.reference, S = C.popper;
          if ($d(T, S)) {
            d.rects = {
              reference: BE(T, ds(S), d.options.strategy === "fixed"),
              popper: nc(S)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(_) {
              return d.modifiersData[_.name] = Object.assign({}, _.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var O = d.orderedModifiers[w], R = O.fn, P = O.options, E = P === void 0 ? {} : P, D = O.name;
              typeof R == "function" && (d = R({
                state: d,
                options: E,
                name: D,
                instance: b
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: zE(function() {
        return new Promise(function(v) {
          b.forceUpdate(), v(d);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!$d(l, c))
      return b;
    b.setOptions(u).then(function(v) {
      !h && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function g() {
      d.orderedModifiers.forEach(function(v) {
        var C = v.name, T = v.options, S = T === void 0 ? {} : T, w = v.effect;
        if (typeof w == "function") {
          var O = w({
            state: d,
            name: C,
            instance: b,
            options: S
          }), R = function() {
          };
          p.push(O || R);
        }
      });
    }
    function f() {
      p.forEach(function(v) {
        return v();
      }), p = [];
    }
    return b;
  };
}
var qE = [yE, NE, hE, rE, _E, TE, FE, uE, DE], GE = /* @__PURE__ */ HE({
  defaultModifiers: qE
});
function KE(e) {
  return Ne("MuiPopper", e);
}
Me("MuiPopper", ["root"]);
const ZE = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], XE = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function QE(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Qs(e) {
  return typeof e == "function" ? e() : e;
}
function qi(e) {
  return e.nodeType !== void 0;
}
function JE(e) {
  return !qi(e);
}
const eT = (e) => {
  const {
    classes: t
  } = e;
  return Be({
    root: ["root"]
  }, KE, t);
}, tT = {}, nT = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: s,
    children: i,
    direction: a,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: p,
    popperRef: h,
    slotProps: b = {},
    slots: g = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, v = te(t, ZE), C = m.useRef(null), T = yt(C, n), S = m.useRef(null), w = yt(S, h), O = m.useRef(w);
  Xt(() => {
    O.current = w;
  }, [w]), m.useImperativeHandle(h, () => S.current, []);
  const R = QE(d, a), [P, E] = m.useState(R), [D, _] = m.useState(Qs(s));
  m.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), m.useEffect(() => {
    s && _(Qs(s));
  }, [s]), Xt(() => {
    if (!D || !u)
      return;
    const V = (L) => {
      E(L.placement);
    };
    if (process.env.NODE_ENV !== "production" && D && qi(D) && D.nodeType === 1) {
      const L = D.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && L.top === 0 && L.left === 0 && L.right === 0 && L.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let A = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: L
      }) => {
        V(L);
      }
    }];
    c != null && (A = A.concat(c)), p && p.modifiers != null && (A = A.concat(p.modifiers));
    const $ = GE(D, C.current, y({
      placement: R
    }, p, {
      modifiers: A
    }));
    return O.current($), () => {
      $.destroy(), O.current(null);
    };
  }, [D, l, c, u, p, R]);
  const I = {
    placement: P
  };
  f !== null && (I.TransitionProps = f);
  const M = eT(t), F = (r = g.root) != null ? r : "div", N = ur({
    elementType: F,
    externalSlotProps: b.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ x.jsx(F, y({}, N, {
    children: typeof i == "function" ? i(I) : i
  }));
}), lh = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: s,
    container: i,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: p = "bottom",
    popperOptions: h = tT,
    popperRef: b,
    style: g,
    transition: f = !1,
    slotProps: v = {},
    slots: C = {}
  } = t, T = te(t, XE), [S, w] = m.useState(!0), O = () => {
    w(!1);
  }, R = () => {
    w(!0);
  };
  if (!c && !d && (!f || S))
    return null;
  let P;
  if (i)
    P = i;
  else if (r) {
    const _ = Qs(r);
    P = _ && qi(_) ? Ot(_).body : Ot(null).body;
  }
  const E = !d && c && (!f || S) ? "none" : void 0, D = f ? {
    in: d,
    onEnter: O,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ x.jsx(Yo, {
    disablePortal: l,
    container: P,
    children: /* @__PURE__ */ x.jsx(nT, y({
      anchorEl: r,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: f ? !S : d,
      placement: p,
      popperOptions: h,
      popperRef: b,
      slotProps: v,
      slots: C
    }, T, {
      style: y({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: E
      }, g),
      TransitionProps: D,
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (lh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: zn(o.oneOfType([En, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Qs(e.anchorEl);
      if (t && qi(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || JE(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
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
  container: o.oneOfType([En, o.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: o.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: en,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const rT = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], oT = K(lh, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ch = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const s = WC(), i = We({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: p,
    keepMounted: h,
    modifiers: b,
    open: g,
    placement: f,
    popperOptions: v,
    popperRef: C,
    transition: T,
    slots: S,
    slotProps: w
  } = i, O = te(i, rT), R = (r = S?.root) != null ? r : c?.Root, P = y({
    anchorEl: a,
    container: d,
    disablePortal: p,
    keepMounted: h,
    modifiers: b,
    open: g,
    placement: f,
    popperOptions: v,
    popperRef: C,
    transition: T
  }, O);
  return /* @__PURE__ */ x.jsx(oT, y({
    as: l,
    direction: s?.direction,
    slots: {
      root: R
    },
    slotProps: w ?? u
  }, P, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (ch.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: o.oneOfType([En, o.object, o.func]),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: o.shape({
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([En, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: en,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
function sT(e) {
  return dt("MuiPickerPopper", e);
}
ht("MuiPickerPopper", ["root", "paper"]);
const iT = ["PaperComponent", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"], aT = (e) => it({
  root: ["root"],
  paper: ["paper"]
}, sT, e), lT = K(ch, {
  name: "MuiPickerPopper",
  slot: "Root"
})(({
  theme: e
}) => ({
  zIndex: e.zIndex.modal
})), cT = K(ls, {
  name: "MuiPickerPopper",
  slot: "Paper"
})({
  outline: 0,
  transformOrigin: "top center",
  variants: [{
    props: ({
      popperPlacement: e
    }) => (/* @__PURE__ */ new Set(["top", "top-start", "top-end"])).has(e),
    style: {
      transformOrigin: "bottom center"
    }
  }]
});
function uT(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function dT(e, t) {
  const n = m.useRef(!1), r = m.useRef(!1), s = m.useRef(null), i = m.useRef(!1);
  m.useEffect(() => {
    if (!e)
      return;
    function c() {
      i.current = !0;
    }
    return document.addEventListener("mousedown", c, !0), document.addEventListener("touchstart", c, !0), () => {
      document.removeEventListener("mousedown", c, !0), document.removeEventListener("touchstart", c, !0), i.current = !1;
    };
  }, [e]);
  const a = he((c) => {
    if (!i.current)
      return;
    const u = r.current;
    r.current = !1;
    const d = Eo(s.current);
    if (!s.current || // is a TouchEvent?
    "clientX" in c && uT(c, d))
      return;
    if (n.current) {
      n.current = !1;
      return;
    }
    let p;
    c.composedPath ? p = c.composedPath().indexOf(s.current) > -1 : p = !d.documentElement.contains(c.target) || s.current.contains(c.target), !p && !u && t(c);
  }), l = (c) => {
    c.defaultMuiPrevented || (r.current = !0);
  };
  return m.useEffect(() => {
    if (e) {
      const c = Eo(s.current), u = () => {
        n.current = !0;
      };
      return c.addEventListener("touchstart", a), c.addEventListener("touchmove", u), () => {
        c.removeEventListener("touchstart", a), c.removeEventListener("touchmove", u);
      };
    }
  }, [e, a]), m.useEffect(() => {
    if (e) {
      const c = Eo(s.current);
      return c.addEventListener("click", a), () => {
        c.removeEventListener("click", a), r.current = !1;
      };
    }
  }, [e, a]), [s, l, l];
}
const uh = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    PaperComponent: n,
    ownerState: r,
    children: s,
    paperSlotProps: i,
    paperClasses: a,
    onPaperClick: l,
    onPaperTouchStart: c
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = e, u = te(e, iT), d = Le({
    elementType: n,
    externalSlotProps: i,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref: t
    },
    className: a,
    ownerState: r
  });
  return /* @__PURE__ */ x.jsx(n, y({}, u, d, {
    onClick: (p) => {
      l(p), d.onClick?.(p);
    },
    onTouchStart: (p) => {
      c(p), d.onTouchStart?.(p);
    },
    ownerState: r,
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (uh.displayName = "PickerPopperPaperWrapper");
function fT(e) {
  const t = nt({
    props: e,
    name: "MuiPickerPopper"
  }), {
    children: n,
    placement: r = "bottom-start",
    slots: s,
    slotProps: i,
    classes: a
  } = t, {
    open: l,
    popupRef: c,
    reduceAnimations: u
  } = Qr(), {
    ownerState: d,
    rootRefObject: p
  } = vt(), {
    dismissViews: h,
    getCurrentViewMode: b,
    onPopperExited: g,
    triggerElement: f,
    viewContainerRole: v
  } = vt();
  m.useEffect(() => {
    function $(L) {
      l && L.key === "Escape" && h();
    }
    return document.addEventListener("keydown", $), () => {
      document.removeEventListener("keydown", $);
    };
  }, [h, l]);
  const C = m.useRef(null);
  m.useEffect(() => {
    v === "tooltip" || b() === "field" || (l ? C.current = Pt(p.current) : C.current && C.current instanceof HTMLElement && setTimeout(() => {
      C.current instanceof HTMLElement && C.current.focus();
    }));
  }, [l, v, b, p]);
  const T = aT(a), S = he(() => {
    v === "tooltip" ? B0(() => {
      p.current?.contains(Pt(p.current)) || c.current?.contains(Pt(c.current)) || h();
    }) : h();
  }), [w, O, R] = dT(l, S), P = m.useRef(null), E = Rt(P, c), D = Rt(E, w), _ = ($) => {
    $.key === "Escape" && ($.stopPropagation(), h());
  }, I = s?.desktopTransition ?? u ? mr : Fi, M = s?.desktopTrapFocus ?? Wo, F = s?.desktopPaper ?? cT, N = s?.popper ?? lT, V = Le({
    elementType: N,
    externalSlotProps: i?.popper,
    additionalProps: {
      transition: !0,
      role: v ?? void 0,
      open: l,
      placement: r,
      anchorEl: f,
      onKeyDown: _
    },
    className: T.root,
    ownerState: d
  }), A = m.useMemo(() => y({}, d, {
    popperPlacement: V.placement
  }), [d, V.placement]);
  return /* @__PURE__ */ x.jsx(N, y({}, V, {
    children: ({
      TransitionProps: $
    }) => /* @__PURE__ */ x.jsx(M, y({
      open: l,
      disableAutoFocus: !0,
      disableRestoreFocus: !0,
      disableEnforceFocus: v === "tooltip",
      isEnabled: () => !0
    }, i?.desktopTrapFocus, {
      children: /* @__PURE__ */ x.jsx(I, y({}, $, i?.desktopTransition, {
        onExited: (L) => {
          g?.(), i?.desktopTransition?.onExited?.(L), $?.onExited?.();
        },
        children: /* @__PURE__ */ x.jsx(uh, {
          PaperComponent: F,
          ownerState: A,
          ref: D,
          onPaperClick: O,
          onPaperTouchStart: R,
          paperClasses: T.paper,
          paperSlotProps: i?.desktopPaper,
          children: n
        })
      }))
    }))
  }));
}
function Ad() {
  return typeof window > "u" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
}
function pT(e, t) {
  const [n, r] = m.useState(Ad);
  return un(() => {
    const s = () => {
      r(Ad());
    };
    return window.addEventListener("orientationchange", s), () => {
      window.removeEventListener("orientationchange", s);
    };
  }, []), L0(e, ["hours", "minutes", "seconds"]) ? "portrait" : t ?? n;
}
const Fd = /* @__PURE__ */ new Set();
function hT(e, t = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const n = Array.isArray(e) ? e.join(`
`) : e;
  Fd.has(n) || (Fd.add(n), t === "error" ? console.error(n) : console.warn(n));
}
function mT(e) {
  const {
    props: t,
    valueManager: n,
    validator: r
  } = e, {
    value: s,
    defaultValue: i,
    onChange: a,
    referenceDate: l,
    timezone: c,
    onAccept: u,
    closeOnSelect: d,
    open: p,
    onOpen: h,
    onClose: b
  } = t, {
    current: g
  } = m.useRef(i), {
    current: f
  } = m.useRef(s !== void 0), {
    current: v
  } = m.useRef(p !== void 0), C = Ge();
  process.env.NODE_ENV !== "production" && t.renderInput != null && hT(["MUI X: The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]), process.env.NODE_ENV !== "production" && (m.useEffect(() => {
    f !== (s !== void 0) && console.error([`MUI X: A component is changing the ${f ? "" : "un"}controlled value of a Picker to be ${f ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled valuefor the lifetime of the component.", "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
  }, [s]), m.useEffect(() => {
    !f && g !== i && console.error(["MUI X: A component is changing the defaultValue of an uncontrolled Picker after being initialized. To suppress this warning opt to use a controlled value."].join(`
`));
  }, [JSON.stringify(g)]));
  const {
    timezone: T,
    value: S,
    handleValueChange: w
  } = os({
    name: "a picker component",
    timezone: c,
    value: s,
    defaultValue: g,
    referenceDate: l,
    onChange: a,
    valueManager: n
  }), [O, R] = m.useState(() => ({
    open: !1,
    lastExternalValue: S,
    clockShallowValue: void 0,
    lastCommittedValue: S,
    hasBeenModifiedSinceMount: !1
  })), {
    getValidationErrorForNewValue: P
  } = vp({
    props: t,
    validator: r,
    timezone: T,
    value: S,
    onError: t.onError
  }), E = he((M) => {
    const F = typeof M == "function" ? M(O.open) : M;
    v || R((N) => y({}, N, {
      open: F
    })), F && h && h(), F || b?.();
  }), D = he((M, F) => {
    const {
      changeImportance: N = "accept",
      skipPublicationIfPristine: V = !1,
      validationError: A,
      shortcut: $,
      shouldClose: L = N === "accept"
    } = F ?? {};
    let Y, k;
    !V && !f && !O.hasBeenModifiedSinceMount ? (Y = !0, k = N === "accept") : (Y = !n.areValuesEqual(C, M, S), k = N === "accept" && !n.areValuesEqual(C, M, O.lastCommittedValue)), R((G) => y({}, G, {
      // We reset the shallow value whenever we fire onChange.
      clockShallowValue: Y ? void 0 : G.clockShallowValue,
      lastCommittedValue: k ? M : G.lastCommittedValue,
      hasBeenModifiedSinceMount: !0
    }));
    let j = null;
    const U = () => (j || (j = {
      validationError: A ?? P(M)
    }, $ && (j.shortcut = $)), j);
    Y && w(M, U()), k && u && u(M, U()), L && E(!1);
  });
  S !== O.lastExternalValue && R((M) => y({}, M, {
    lastExternalValue: S,
    clockShallowValue: void 0,
    hasBeenModifiedSinceMount: !0
  }));
  const _ = he((M, F = "partial") => {
    if (F === "shallow") {
      R((N) => y({}, N, {
        clockShallowValue: M,
        hasBeenModifiedSinceMount: !0
      }));
      return;
    }
    D(M, {
      changeImportance: F === "finish" && d ? "accept" : "set"
    });
  });
  m.useEffect(() => {
    if (v) {
      if (p === void 0)
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      R((M) => y({}, M, {
        open: p
      }));
    }
  }, [v, p]);
  const I = m.useMemo(() => n.cleanValue(C, O.clockShallowValue === void 0 ? S : O.clockShallowValue), [C, n, O.clockShallowValue, S]);
  return {
    timezone: T,
    state: O,
    setValue: D,
    setValueFromView: _,
    setOpen: E,
    value: S,
    viewValue: I
  };
}
const yT = ["className", "sx"], dh = ({
  ref: e,
  props: t,
  valueManager: n,
  valueType: r,
  variant: s,
  validator: i,
  onPopperExited: a,
  autoFocusView: l,
  rendererInterceptor: c,
  localeText: u,
  viewContainerRole: d,
  getStepNavigation: p
}) => {
  const {
    // View props
    views: h,
    view: b,
    openTo: g,
    onViewChange: f,
    viewRenderers: v,
    reduceAnimations: C,
    orientation: T,
    disableOpenPicker: S,
    closeOnSelect: w,
    // Form props
    disabled: O,
    readOnly: R,
    // Field props
    formatDensity: P,
    enableAccessibleFieldDOMStructure: E,
    selectedSections: D,
    onSelectedSectionsChange: _,
    format: I,
    label: M,
    // Other props
    autoFocus: F,
    name: N
  } = t, {
    className: V,
    sx: A
  } = t, $ = te(t, yT), L = yl(), Y = Ge(), k = Kp(C), j = pT(h, T), {
    current: U
  } = m.useRef(g ?? null), [G, H] = m.useState(null), Z = m.useRef(null), X = m.useRef(null), re = m.useRef(null), ee = Rt(e, re), {
    timezone: J,
    state: q,
    setOpen: z,
    setValue: B,
    setValueFromView: ne,
    value: Q,
    viewValue: ae
  } = mT({
    props: t,
    valueManager: n,
    validator: i
  }), {
    view: W,
    setView: se,
    defaultView: ge,
    focusedView: we,
    setFocusedView: ue,
    setValueAndGoToNextView: de,
    goToNextStep: De,
    hasNextStep: Ee,
    hasSeveralSteps: Ce
  } = up({
    view: b,
    views: h,
    openTo: g,
    onChange: ne,
    onViewChange: f,
    autoFocus: l,
    getStepNavigation: p
  }), Ze = he(() => B(n.emptyValue)), ft = he(() => B(n.getTodayValue(Y, J, r))), mt = he(() => B(Q)), Oe = he(() => B(q.lastCommittedValue, {
    skipPublicationIfPristine: !0
  })), ie = he(() => {
    B(Q, {
      skipPublicationIfPristine: !0
    });
  }), {
    hasUIView: ve,
    viewModeLookup: Te,
    timeViewsCount: Ye
  } = m.useMemo(() => h.reduce((gt, In) => {
    const Ic = v[In] == null ? "field" : "UI";
    return gt.viewModeLookup[In] = Ic, Ic === "UI" && (gt.hasUIView = !0, O0(In) && (gt.timeViewsCount += 1)), gt;
  }, {
    hasUIView: !1,
    viewModeLookup: {},
    timeViewsCount: 0
  }), [v, h]), rt = Te[W], pe = he(() => rt), [be, ze] = m.useState(rt === "UI" ? W : null);
  be !== W && Te[W] === "UI" && ze(W), un(() => {
    rt === "field" && q.open && (z(!1), setTimeout(() => {
      X?.current?.setSelectedSections(W), X?.current?.focusField(W);
    }));
  }, [W]), un(() => {
    if (!q.open)
      return;
    let gt = W;
    rt === "field" && be != null && (gt = be), gt !== ge && Te[gt] === "UI" && Te[ge] === "UI" && (gt = ge), gt !== W && se(gt), ue(gt, !0);
  }, [q.open]);
  const Se = m.useMemo(() => ({
    isPickerValueEmpty: n.areValuesEqual(Y, Q, n.emptyValue),
    isPickerOpen: q.open,
    isPickerDisabled: t.disabled ?? !1,
    isPickerReadOnly: t.readOnly ?? !1,
    pickerOrientation: j,
    pickerVariant: s
  }), [Y, n, Q, q.open, j, s, t.disabled, t.readOnly]), ct = m.useMemo(() => S || !ve ? "hidden" : O || R ? "disabled" : "enabled", [S, ve, O, R]), wt = he(De), qt = m.useMemo(() => w && !Ce ? [] : ["cancel", "nextOrAccept"], [w, Ce]), ro = m.useMemo(() => ({
    setValue: B,
    setOpen: z,
    clearValue: Ze,
    setValueToToday: ft,
    acceptValueChanges: mt,
    cancelValueChanges: Oe,
    setView: se,
    goToNextStep: wt
  }), [B, z, Ze, ft, mt, Oe, se, wt]), rn = m.useMemo(() => y({}, ro, {
    value: Q,
    timezone: J,
    open: q.open,
    views: h,
    view: be,
    initialView: U,
    disabled: O ?? !1,
    readOnly: R ?? !1,
    autoFocus: F ?? !1,
    variant: s,
    orientation: j,
    popupRef: Z,
    reduceAnimations: k,
    triggerRef: H,
    triggerStatus: ct,
    hasNextStep: Ee,
    fieldFormat: I ?? "",
    name: N,
    label: M,
    rootSx: A,
    rootRef: ee,
    rootClassName: V
  }), [ro, Q, ee, s, j, k, O, R, I, V, N, M, A, ct, Ee, J, q.open, be, h, U, F]), gm = m.useMemo(() => ({
    dismissViews: ie,
    ownerState: Se,
    hasUIView: ve,
    getCurrentViewMode: pe,
    rootRefObject: re,
    labelId: L,
    triggerElement: G,
    viewContainerRole: d,
    defaultActionBarActions: qt,
    onPopperExited: a
  }), [ie, Se, ve, pe, L, G, d, qt, a]), bm = m.useMemo(() => ({
    formatDensity: P,
    enableAccessibleFieldDOMStructure: E,
    selectedSections: D,
    onSelectedSectionsChange: _,
    fieldRef: X
  }), [P, E, D, _, X]);
  return {
    providerProps: {
      localeText: u,
      contextValue: rn,
      privateContextValue: gm,
      actionsContextValue: ro,
      fieldPrivateContextValue: bm,
      isValidContextValue: (gt) => {
        const In = i({
          adapter: Y,
          value: gt,
          timezone: J,
          props: t
        });
        return !n.hasError(In);
      }
    },
    renderCurrentView: () => {
      if (be == null)
        return null;
      const gt = v[be];
      if (gt == null)
        return null;
      const In = y({}, $, {
        views: h,
        timezone: J,
        value: ae,
        onChange: de,
        view: be,
        onViewChange: se,
        showViewSwitcher: Ye > 1,
        timeViewsCount: Ye
      }, d === "tooltip" ? {
        focusedView: null,
        onFocusedViewChange: () => {
        }
      } : {
        focusedView: we,
        onFocusedViewChange: ue
      });
      return c ? /* @__PURE__ */ x.jsx(c, {
        viewRenderers: v,
        popperView: be,
        rendererProps: In
      }) : gt(In);
    },
    ownerState: Se
  };
};
function fh(e) {
  return dt("MuiPickersLayout", e);
}
const Qn = ht("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);
function gT(e) {
  return Ne("MuiButton", e);
}
const Es = Me("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ph = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (ph.displayName = "ButtonGroupContext");
const hh = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (hh.displayName = "ButtonGroupButtonContext");
const bT = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], vT = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: s,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, `${i}${le(t)}`, `size${le(s)}`, `${i}Size${le(s)}`, `color${le(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${le(s)}`],
    endIcon: ["icon", "endIcon", `iconSize${le(s)}`]
  }, c = Be(l, gT, a);
  return y({}, a, c);
}, mh = (e) => y({}, e.size === "small" && {
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
}), xT = K(fr, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${le(n.color)}`], t[`size${le(n.size)}`], t[`${n.variant}Size${le(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const s = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return y({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": y({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke.alpha(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Es.focusVisible}`]: y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Es.disabled}`]: y({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ke.alpha(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : s,
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
  [`&.${Es.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Es.disabled}`]: {
    boxShadow: "none"
  }
}), ST = K("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${le(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, mh(e))), wT = K("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${le(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, mh(e))), $n = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = m.useContext(ph), s = m.useContext(hh), i = Fo(r, t), a = We({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: h = !1,
    disableFocusRipple: b = !1,
    endIcon: g,
    focusVisibleClassName: f,
    fullWidth: v = !1,
    size: C = "medium",
    startIcon: T,
    type: S,
    variant: w = "text"
  } = a, O = te(a, bT), R = y({}, a, {
    color: c,
    component: u,
    disabled: p,
    disableElevation: h,
    disableFocusRipple: b,
    fullWidth: v,
    size: C,
    type: S,
    variant: w
  }), P = vT(R), E = T && /* @__PURE__ */ x.jsx(ST, {
    className: P.startIcon,
    ownerState: R,
    children: T
  }), D = g && /* @__PURE__ */ x.jsx(wT, {
    className: P.endIcon,
    ownerState: R,
    children: g
  }), _ = s || "";
  return /* @__PURE__ */ x.jsxs(xT, y({
    ownerState: R,
    className: fe(r.className, P.root, d, _),
    component: u,
    disabled: p,
    focusRipple: !b,
    focusVisibleClassName: fe(P.focusVisible, f),
    ref: n,
    type: S
  }, O, {
    classes: P,
    children: [E, l, D]
  }));
});
process.env.NODE_ENV !== "production" && ($n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * Element placed after the children.
   */
  endIcon: o.node,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * Element placed before the children.
   */
  startIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["contained", "outlined", "text"]), o.string])
});
function PT(e) {
  return Ne("MuiDialogActions", e);
}
Me("MuiDialogActions", ["root", "spacing"]);
const OT = ["className", "disableSpacing"], CT = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return Be({
    root: ["root", !n && "spacing"]
  }, PT, t);
}, ET = K("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => y({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), yh = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: s,
    disableSpacing: i = !1
  } = r, a = te(r, OT), l = y({}, r, {
    disableSpacing: i
  }), c = CT(l);
  return /* @__PURE__ */ x.jsx(ET, y({
    className: fe(c.root, s),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (yh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const TT = ["actions"], kT = K(yh, {
  name: "MuiPickersLayout",
  slot: "ActionBar"
})({});
function gh(e) {
  const {
    actions: t
  } = e, n = te(e, TT), r = Un(), {
    clearValue: s,
    setValueToToday: i,
    acceptValueChanges: a,
    cancelValueChanges: l,
    goToNextStep: c,
    hasNextStep: u
  } = Qr();
  if (t == null || t.length === 0)
    return null;
  const d = t?.map((p) => {
    switch (p) {
      case "clear":
        return /* @__PURE__ */ x.jsx($n, {
          onClick: s,
          children: r.clearButtonLabel
        }, p);
      case "cancel":
        return /* @__PURE__ */ x.jsx($n, {
          onClick: l,
          children: r.cancelButtonLabel
        }, p);
      case "accept":
        return /* @__PURE__ */ x.jsx($n, {
          onClick: a,
          children: r.okButtonLabel
        }, p);
      case "today":
        return /* @__PURE__ */ x.jsx($n, {
          onClick: i,
          children: r.todayButtonLabel
        }, p);
      case "next":
        return /* @__PURE__ */ x.jsx($n, {
          onClick: c,
          children: r.nextStepButtonLabel
        }, p);
      case "nextOrAccept":
        return u ? /* @__PURE__ */ x.jsx($n, {
          onClick: c,
          children: r.nextStepButtonLabel
        }, p) : /* @__PURE__ */ x.jsx($n, {
          onClick: a,
          children: r.okButtonLabel
        }, p);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ x.jsx(kT, y({}, n, {
    children: d
  }));
}
process.env.NODE_ENV !== "production" && (gh.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default
   * - `[]` for Pickers with one selection step which `closeOnSelect`.
   * - `['cancel', 'nextOrAccept']` for all other Pickers.
   */
  actions: o.arrayOf(o.oneOf(["accept", "cancel", "clear", "next", "nextOrAccept", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const bh = /* @__PURE__ */ m.memo(gh);
process.env.NODE_ENV !== "production" && (bh.displayName = "PickersActionBar");
function DT(e) {
  return Ne("MuiListItem", e);
}
const Er = Me("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), RT = Me("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
function MT(e) {
  return Ne("MuiListItemSecondaryAction", e);
}
Me("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const _T = ["className"], IT = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return Be({
    root: ["root", t && "disableGutters"]
  }, MT, n);
}, NT = K("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => y({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), ac = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: s
  } = r, i = te(r, _T), a = m.useContext(_r), l = y({}, r, {
    disableGutters: a.disableGutters
  }), c = IT(l);
  return /* @__PURE__ */ x.jsx(NT, y({
    className: fe(c.root, s),
    ownerState: l,
    ref: n
  }, i));
});
process.env.NODE_ENV !== "production" && (ac.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
ac.muiName = "ListItemSecondaryAction";
const $T = ["className"], AT = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], FT = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction];
}, jT = (e) => {
  const {
    alignItems: t,
    button: n,
    classes: r,
    dense: s,
    disabled: i,
    disableGutters: a,
    disablePadding: l,
    divider: c,
    hasSecondaryAction: u,
    selected: d
  } = e;
  return Be({
    root: ["root", s && "dense", !a && "gutters", !l && "padding", c && "divider", i && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, DT, r);
}, VT = K("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: FT
})(({
  theme: e,
  ownerState: t
}) => y({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && y({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${RT.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${Er.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Er.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ke.alpha(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Er.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ke.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Er.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Er.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ke.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ke.alpha(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), LT = K("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), vh = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: s = "center",
    autoFocus: i = !1,
    button: a = !1,
    children: l,
    className: c,
    component: u,
    components: d = {},
    componentsProps: p = {},
    ContainerComponent: h = "li",
    ContainerProps: {
      className: b
    } = {},
    dense: g = !1,
    disabled: f = !1,
    disableGutters: v = !1,
    disablePadding: C = !1,
    divider: T = !1,
    focusVisibleClassName: S,
    secondaryAction: w,
    selected: O = !1,
    slotProps: R = {},
    slots: P = {}
  } = r, E = te(r.ContainerProps, $T), D = te(r, AT), _ = m.useContext(_r), I = m.useMemo(() => ({
    dense: g || _.dense || !1,
    alignItems: s,
    disableGutters: v
  }), [s, _.dense, g, v]), M = m.useRef(null);
  Xt(() => {
    i && (M.current ? M.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [i]);
  const F = m.Children.toArray(l), N = F.length && Co(F[F.length - 1], ["ListItemSecondaryAction"]), V = y({}, r, {
    alignItems: s,
    autoFocus: i,
    button: a,
    dense: I.dense,
    disabled: f,
    disableGutters: v,
    disablePadding: C,
    divider: T,
    hasSecondaryAction: N,
    selected: O
  }), A = jT(V), $ = yt(M, n), L = P.root || d.Root || VT, Y = R.root || p.root || {}, k = y({
    className: fe(A.root, Y.className, c),
    disabled: f
  }, D);
  let j = u || "li";
  return a && (k.component = u || "div", k.focusVisibleClassName = fe(Er.focusVisible, S), j = fr), N ? (j = !k.component && !u ? "div" : j, h === "li" && (j === "li" ? j = "div" : k.component === "li" && (k.component = "div")), /* @__PURE__ */ x.jsx(_r.Provider, {
    value: I,
    children: /* @__PURE__ */ x.jsxs(LT, y({
      as: h,
      className: fe(A.container, b),
      ref: $,
      ownerState: V
    }, E, {
      children: [/* @__PURE__ */ x.jsx(L, y({}, Y, !Wr(L) && {
        as: j,
        ownerState: y({}, V, Y.ownerState)
      }, k, {
        children: F
      })), F.pop()]
    }))
  })) : /* @__PURE__ */ x.jsx(_r.Provider, {
    value: I,
    children: /* @__PURE__ */ x.jsxs(L, y({}, Y, {
      as: j,
      ref: $
    }, !Wr(L) && {
      ownerState: y({}, V, Y.ownerState)
    }, k, {
      children: [F, w && /* @__PURE__ */ x.jsx(ac, {
        children: w
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (vh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: o.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: o.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: o.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: zn(o.node, (e) => {
    const t = m.Children.toArray(e.children);
    let n = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const s = t[r];
      if (Co(s, ["ListItemSecondaryAction"])) {
        n = r;
        break;
      }
    }
    return n !== -1 && n !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
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
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: vi,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: o.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: o.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: o.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: o.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const BT = mn(/* @__PURE__ */ x.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function WT(e) {
  return Ne("MuiChip", e);
}
const _e = Me("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), YT = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], zT = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: s,
    iconColor: i,
    onDelete: a,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, n && "disabled", `size${le(r)}`, `color${le(s)}`, l && "clickable", l && `clickableColor${le(s)}`, a && "deletable", a && `deletableColor${le(s)}`, `${c}${le(s)}`],
    label: ["label", `label${le(r)}`],
    avatar: ["avatar", `avatar${le(r)}`, `avatarColor${le(s)}`],
    icon: ["icon", `icon${le(r)}`, `iconColor${le(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${le(r)}`, `deleteIconColor${le(s)}`, `deleteIcon${le(c)}Color${le(s)}`]
  };
  return Be(u, WT, t);
}, UT = K("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: s,
      clickable: i,
      onDelete: a,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${_e.avatar}`]: t.avatar
    }, {
      [`& .${_e.avatar}`]: t[`avatar${le(l)}`]
    }, {
      [`& .${_e.avatar}`]: t[`avatarColor${le(r)}`]
    }, {
      [`& .${_e.icon}`]: t.icon
    }, {
      [`& .${_e.icon}`]: t[`icon${le(l)}`]
    }, {
      [`& .${_e.icon}`]: t[`iconColor${le(s)}`]
    }, {
      [`& .${_e.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${_e.deleteIcon}`]: t[`deleteIcon${le(l)}`]
    }, {
      [`& .${_e.deleteIcon}`]: t[`deleteIconColor${le(r)}`]
    }, {
      [`& .${_e.deleteIcon}`]: t[`deleteIcon${le(c)}Color${le(r)}`]
    }, t.root, t[`size${le(l)}`], t[`color${le(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${le(r)})`], a && t.deletable, a && r !== "default" && t[`deletableColor${le(r)}`], t[c], t[`${c}${le(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return y({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${_e.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${_e.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${_e.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${_e.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${_e.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${_e.icon}`]: y({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && y({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${_e.deleteIcon}`]: y({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Ke.alpha(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Ke.alpha(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : Ke.alpha(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${_e.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ke.alpha(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${_e.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => y({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ke.alpha(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${_e.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ke.alpha(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${_e.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => y({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${_e.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${_e.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${_e.avatar}`]: {
    marginLeft: 4
  },
  [`& .${_e.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${_e.icon}`]: {
    marginLeft: 4
  },
  [`& .${_e.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${_e.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${_e.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ke.alpha(e.palette[t.color].main, 0.7)}`,
  [`&.${_e.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${_e.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ke.alpha(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${_e.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ke.alpha(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), HT = K("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${le(r)}`]];
  }
})(({
  ownerState: e
}) => y({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, e.size === "small" && e.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function jd(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const xh = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiChip"
  }), {
    avatar: s,
    className: i,
    clickable: a,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: p,
    label: h,
    onClick: b,
    onDelete: g,
    onKeyDown: f,
    onKeyUp: v,
    size: C = "medium",
    variant: T = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: w = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, O = te(r, YT), R = m.useRef(null), P = yt(R, n), E = (Y) => {
    Y.stopPropagation(), g && g(Y);
  }, D = (Y) => {
    Y.currentTarget === Y.target && jd(Y) && Y.preventDefault(), f && f(Y);
  }, _ = (Y) => {
    Y.currentTarget === Y.target && (g && jd(Y) ? g(Y) : Y.key === "Escape" && R.current && R.current.blur()), v && v(Y);
  }, I = a !== !1 && b ? !0 : a, M = I || g ? fr : c || "div", F = y({}, r, {
    component: M,
    disabled: d,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ m.isValidElement(p) && p.props.color || l,
    onDelete: !!g,
    clickable: I,
    variant: T
  }), N = zT(F), V = M === fr ? y({
    component: c || "div",
    focusVisibleClassName: N.focusVisible
  }, g && {
    disableRipple: !0
  }) : {};
  let A = null;
  g && (A = u && /* @__PURE__ */ m.isValidElement(u) ? /* @__PURE__ */ m.cloneElement(u, {
    className: fe(u.props.className, N.deleteIcon),
    onClick: E
  }) : /* @__PURE__ */ x.jsx(BT, {
    className: fe(N.deleteIcon),
    onClick: E
  }));
  let $ = null;
  s && /* @__PURE__ */ m.isValidElement(s) && ($ = /* @__PURE__ */ m.cloneElement(s, {
    className: fe(N.avatar, s.props.className)
  }));
  let L = null;
  return p && /* @__PURE__ */ m.isValidElement(p) && (L = /* @__PURE__ */ m.cloneElement(p, {
    className: fe(N.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && $ && L && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ x.jsxs(UT, y({
    as: M,
    className: fe(N.root, i),
    disabled: I && d ? !0 : void 0,
    onClick: b,
    onKeyDown: D,
    onKeyUp: _,
    ref: P,
    tabIndex: w && d ? -1 : S,
    ownerState: F
  }, V, O, {
    children: [$ || L, /* @__PURE__ */ x.jsx(HT, {
      className: fe(N.label),
      ownerState: F,
      children: h
    }), A]
  }));
});
process.env.NODE_ENV !== "production" && (xh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: o.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Ab,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: o.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: o.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Icon element.
   */
  icon: o.element,
  /**
   * The content of the component.
   */
  label: o.node,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  tabIndex: o.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined"]), o.string])
});
const qT = ["items", "changeImportance"], GT = ["getValue"], KT = K(Il, {
  name: "MuiPickersLayout",
  slot: "Shortcuts"
})({});
function Sh(e) {
  const {
    items: t,
    changeImportance: n = "accept"
  } = e, r = te(e, qT), {
    setValue: s
  } = gx(), i = yx();
  if (t == null || t.length === 0)
    return null;
  const a = t.map((l) => {
    let {
      getValue: c
    } = l, u = te(l, GT);
    const d = c({
      isValid: i
    });
    return y({}, u, {
      label: u.label,
      onClick: () => {
        s(d, {
          changeImportance: n,
          shortcut: u
        });
      },
      disabled: !i(d)
    });
  });
  return /* @__PURE__ */ x.jsx(KT, y({
    dense: !0,
    sx: [{
      maxHeight: _l,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(r.sx) ? r.sx : [r.sx]]
  }, r, {
    children: a.map((l) => /* @__PURE__ */ x.jsx(vh, {
      children: /* @__PURE__ */ x.jsx(xh, y({}, l))
    }, l.id ?? l.label))
  }));
}
process.env.NODE_ENV !== "production" && (Sh.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the Picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the Picker.
   * @default "accept"
   */
  changeImportance: o.oneOf(["accept", "set"]),
  className: o.string,
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default []
   */
  items: o.arrayOf(o.shape({
    getValue: o.func.isRequired,
    id: o.string,
    label: o.string.isRequired
  })),
  style: o.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const ZT = ["ownerState"];
function XT(e) {
  return e.view !== null;
}
const QT = (e, t) => {
  const {
    pickerOrientation: n
  } = t;
  return it({
    root: ["root", n === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  }, fh, e);
}, JT = (e) => {
  const {
    ownerState: t,
    defaultActionBarActions: n
  } = vt(), {
    view: r
  } = Qr(), s = hn(), {
    children: i,
    slots: a,
    slotProps: l,
    classes: c
  } = e, u = m.useMemo(() => y({}, t, {
    layoutDirection: s ? "rtl" : "ltr",
    hasShortcuts: !1
  }), [t, s]), d = QT(c, u), p = a?.actionBar ?? bh, h = Le({
    elementType: p,
    externalSlotProps: l?.actionBar,
    additionalProps: {
      actions: n
    },
    className: d.actionBar,
    ownerState: u
  }), b = te(h, ZT), g = /* @__PURE__ */ x.jsx(p, y({}, b)), f = a?.toolbar, v = Le({
    elementType: f,
    externalSlotProps: l?.toolbar,
    className: d.toolbar,
    ownerState: u
  }), C = XT(v) && f ? /* @__PURE__ */ x.jsx(f, y({}, v)) : null, T = i, S = a?.tabs, w = r && S ? /* @__PURE__ */ x.jsx(S, y({
    className: d.tabs
  }, l?.tabs)) : null, O = a?.shortcuts ?? Sh, R = Le({
    elementType: O,
    externalSlotProps: l?.shortcuts,
    className: d.shortcuts,
    ownerState: u
  }), P = Array.isArray(R?.items) && R.items.length > 0, E = r && O ? /* @__PURE__ */ x.jsx(O, y({}, R)) : null;
  return {
    toolbar: C,
    content: T,
    tabs: w,
    actionBar: g,
    shortcuts: E,
    ownerState: y({}, u, {
      hasShortcuts: P
    })
  };
}, ek = (e, t) => {
  const {
    pickerOrientation: n
  } = t;
  return it({
    root: ["root", n === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"]
  }, fh, e);
}, tk = K("div", {
  name: "MuiPickersLayout",
  slot: "Root"
})({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${Qn.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  },
  variants: [{
    props: {
      pickerOrientation: "landscape",
      hasShortcuts: !1
    },
    style: {
      [`& .${Qn.toolbar}`]: {
        gridColumn: 1,
        gridRow: "1 / 3"
      }
    }
  }, {
    props: {
      pickerOrientation: "landscape",
      hasShortcuts: !0
    },
    style: {
      [`& .${Qn.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1,
        maxWidth: "max-content"
      },
      [`& .${Qn.shortcuts}`]: {
        gridColumn: 1,
        gridRow: 2
      }
    }
  }, {
    props: {
      pickerOrientation: "portrait"
    },
    style: {
      [`& .${Qn.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      },
      [`& .${Qn.shortcuts}`]: {
        gridColumn: 1,
        gridRow: "2 / 3"
      }
    }
  }, {
    props: {
      hasShortcuts: !0,
      layoutDirection: "rtl"
    },
    style: {
      [`& .${Qn.shortcuts}`]: {
        gridColumn: 4
      }
    }
  }]
}), nk = K("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper"
})({
  gridColumn: "2 / 4",
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
}), Gi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiPickersLayout"
  }), {
    toolbar: s,
    content: i,
    tabs: a,
    actionBar: l,
    shortcuts: c,
    ownerState: u
  } = JT(r), {
    orientation: d,
    variant: p
  } = Qr(), {
    sx: h,
    className: b,
    classes: g
  } = r, f = ek(g, u);
  return /* @__PURE__ */ x.jsxs(tk, {
    ref: n,
    sx: h,
    className: fe(f.root, b),
    ownerState: u,
    children: [d === "landscape" ? c : s, d === "landscape" ? s : c, /* @__PURE__ */ x.jsx(nk, {
      className: f.contentWrapper,
      ownerState: u,
      children: p === "desktop" ? /* @__PURE__ */ x.jsxs(m.Fragment, {
        children: [i, a]
      }) : /* @__PURE__ */ x.jsxs(m.Fragment, {
        children: [a, i]
      })
    }), l]
  });
});
process.env.NODE_ENV !== "production" && (Gi.displayName = "PickersLayout");
process.env.NODE_ENV !== "production" && (Gi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  className: o.string,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function wh(e) {
  const {
    steps: t
  } = e;
  return E0({
    steps: t,
    isViewMatchingStep: (n, r) => r.views == null || r.views.includes(n),
    onStepChange: ({
      step: n,
      defaultView: r,
      setView: s,
      view: i,
      views: a
    }) => {
      const l = n.views == null ? r : n.views.find((c) => a.includes(c));
      l !== i && s(l);
    }
  });
}
const rk = ["props", "steps"], ok = ["ownerState"], sk = (e) => {
  let {
    props: t,
    steps: n
  } = e, r = te(e, rk);
  const {
    slots: s,
    slotProps: i,
    label: a,
    inputRef: l,
    localeText: c
  } = t, u = wh({
    steps: n
  }), {
    providerProps: d,
    renderCurrentView: p,
    ownerState: h
  } = dh(y({}, r, {
    props: t,
    localeText: c,
    autoFocusView: !0,
    viewContainerRole: "dialog",
    variant: "desktop",
    getStepNavigation: u
  })), b = d.privateContextValue.labelId, g = i?.toolbar?.hidden ?? !1, f = s.field, v = Le({
    elementType: f,
    externalSlotProps: i?.field,
    additionalProps: y({}, g && {
      id: b
    }),
    ownerState: h
  }), C = te(v, ok), T = s.layout ?? Gi;
  let S = b;
  g && (a ? S = `${b}-label` : S = void 0);
  const w = y({}, i, {
    toolbar: y({}, i?.toolbar, {
      titleId: b
    }),
    popper: y({
      "aria-labelledby": S
    }, i?.popper)
  }), O = () => /* @__PURE__ */ x.jsxs(op, y({}, d, {
    children: [/* @__PURE__ */ x.jsx(f, y({}, C, {
      slots: s,
      slotProps: w,
      inputRef: l
    })), /* @__PURE__ */ x.jsx(fT, {
      slots: s,
      slotProps: w,
      children: /* @__PURE__ */ x.jsx(T, y({}, w?.layout, {
        slots: s,
        slotProps: w,
        children: p()
      }))
    })]
  }));
  return process.env.NODE_ENV !== "production" && (O.displayName = "renderPicker"), {
    renderPicker: O
  };
}, ir = ({
  view: e,
  onViewChange: t,
  views: n,
  focusedView: r,
  onFocusedViewChange: s,
  value: i,
  defaultValue: a,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: p,
  disablePast: h,
  minDate: b,
  maxDate: g,
  shouldDisableDate: f,
  shouldDisableMonth: v,
  shouldDisableYear: C,
  reduceAnimations: T,
  onMonthChange: S,
  monthsPerRow: w,
  onYearChange: O,
  yearsOrder: R,
  yearsPerRow: P,
  slots: E,
  slotProps: D,
  loading: _,
  renderLoading: I,
  disableHighlightToday: M,
  readOnly: F,
  disabled: N,
  showDaysOutsideCurrentMonth: V,
  dayOfWeekFormatter: A,
  sx: $,
  autoFocus: L,
  fixedWeekNumber: Y,
  displayWeekNumber: k,
  timezone: j
}) => /* @__PURE__ */ x.jsx(Ql, {
  view: e,
  onViewChange: t,
  views: n.filter(Au),
  focusedView: r && Au(r) ? r : null,
  onFocusedViewChange: s,
  value: i,
  defaultValue: a,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: p,
  disablePast: h,
  minDate: b,
  maxDate: g,
  shouldDisableDate: f,
  shouldDisableMonth: v,
  shouldDisableYear: C,
  reduceAnimations: T,
  onMonthChange: S,
  monthsPerRow: w,
  onYearChange: O,
  yearsOrder: R,
  yearsPerRow: P,
  slots: E,
  slotProps: D,
  loading: _,
  renderLoading: I,
  disableHighlightToday: M,
  readOnly: F,
  disabled: N,
  showDaysOutsideCurrentMonth: V,
  dayOfWeekFormatter: A,
  sx: $,
  autoFocus: L,
  fixedWeekNumber: Y,
  displayWeekNumber: k,
  timezone: j
});
process.env.NODE_ENV !== "production" && (ir.displayName = "renderDateViewCalendar");
const lc = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ge(), s = Qp(t, "MuiDesktopDatePicker"), i = y({
    day: ir,
    month: ir,
    year: ir
  }, s.viewRenderers), a = y({}, s, {
    closeOnSelect: s.closeOnSelect ?? !0,
    viewRenderers: i,
    format: vl(r, s, !1),
    yearsPerRow: s.yearsPerRow ?? 4,
    slots: y({
      field: Ui
    }, s.slots),
    slotProps: y({}, s.slotProps, {
      field: (c) => y({}, Zt(s.slotProps?.field, c), Xf(s)),
      toolbar: y({
        hidden: !0
      }, s.slotProps?.toolbar)
    })
  }), {
    renderPicker: l
  } = sk({
    ref: n,
    props: a,
    valueManager: dn,
    valueType: "date",
    validator: ss,
    steps: null
  });
  return l();
});
process.env.NODE_ENV !== "production" && (lc.displayName = "DesktopDatePicker");
lc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: o.bool,
  className: o.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default true
   */
  closeOnSelect: o.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: o.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: o.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: o.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: o.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: o.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: o.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: o.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: o.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dn,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: o.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: o.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: o.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: o.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: o.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: o.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: o.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: o.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: o.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: o.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: o.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: o.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: o.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: o.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: o.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: o.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: o.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: o.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: o.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: o.oneOfType([o.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), o.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: o.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: o.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: o.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: o.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: o.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: o.shape({
    day: o.func,
    month: o.func,
    year: o.func
  }),
  /**
   * Available views.
   */
  views: o.arrayOf(o.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: o.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: o.oneOf([3, 4])
};
function ik(e) {
  return Ne("MuiDialogContent", e);
}
Me("MuiDialogContent", ["root", "dividers"]);
const ak = Me("MuiDialogTitle", ["root"]), lk = ["className", "dividers"], ck = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return Be({
    root: ["root", n && "dividers"]
  }, ik, t);
}, uk = K("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${ak.root} + &`]: {
    paddingTop: 0
  }
})), Ph = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: s,
    dividers: i = !1
  } = r, a = te(r, lk), l = y({}, r, {
    dividers: i
  }), c = ck(l);
  return /* @__PURE__ */ x.jsx(uk, y({
    className: fe(c.root, s),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Ph.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function dk(e) {
  return Ne("MuiDialog", e);
}
const _o = Me("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Oh = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (Oh.displayName = "DialogContext");
const fk = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], pk = K(Ll, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), hk = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: s,
    fullScreen: i
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${le(n)}`],
    paper: ["paper", `paperScroll${le(n)}`, `paperWidth${le(String(r))}`, s && "paperFullWidth", i && "paperFullScreen"]
  };
  return Be(a, dk, t);
}, mk = K(Bl, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), yk = K("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${le(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => y({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), gk = K(ls, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${le(n.scroll)}`], t[`paperWidth${le(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${_o.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${_o.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 64)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${_o.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Ch = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = We({
    props: t,
    name: "MuiDialog"
  }), s = Zr(), i = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: p,
    disableEscapeKeyDown: h = !1,
    fullScreen: b = !1,
    fullWidth: g = !1,
    maxWidth: f = "sm",
    onBackdropClick: v,
    onClick: C,
    onClose: T,
    open: S,
    PaperComponent: w = ls,
    PaperProps: O = {},
    scroll: R = "paper",
    TransitionComponent: P = mr,
    transitionDuration: E = i,
    TransitionProps: D
  } = r, _ = te(r, fk), I = y({}, r, {
    disableEscapeKeyDown: h,
    fullScreen: b,
    fullWidth: g,
    maxWidth: f,
    scroll: R
  }), M = hk(I), F = m.useRef(), N = (L) => {
    F.current = L.target === L.currentTarget;
  }, V = (L) => {
    C && C(L), F.current && (F.current = null, v && v(L), T && T(L, "backdropClick"));
  }, A = ml(l), $ = m.useMemo(() => ({
    titleId: A
  }), [A]);
  return /* @__PURE__ */ x.jsx(mk, y({
    className: fe(M.root, p),
    closeAfterTransition: !0,
    components: {
      Backdrop: pk
    },
    componentsProps: {
      backdrop: y({
        transitionDuration: E,
        as: c
      }, u)
    },
    disableEscapeKeyDown: h,
    onClose: T,
    open: S,
    ref: n,
    onClick: V,
    ownerState: I
  }, _, {
    children: /* @__PURE__ */ x.jsx(P, y({
      appear: !0,
      in: S,
      timeout: E,
      role: "presentation"
    }, D, {
      children: /* @__PURE__ */ x.jsx(yk, {
        className: fe(M.container),
        onMouseDown: N,
        ownerState: I,
        children: /* @__PURE__ */ x.jsx(gk, y({
          as: w,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": A
        }, O, {
          className: fe(M.paper, O.className),
          ownerState: I,
          children: /* @__PURE__ */ x.jsx(Oh.Provider, {
            value: $,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ch.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": o.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": o.string,
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
  BackdropComponent: o.elementType,
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: o.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: o.oneOfType([o.oneOf(["xs", "sm", "md", "lg", "xl", !1]), o.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: o.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: o.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: o.object
});
const bk = K(Ch)({
  [`& .${_o.container}`]: {
    outline: 0
  },
  [`& .${_o.paper}`]: {
    outline: 0,
    minWidth: ki
  }
}), vk = K(Ph)({
  "&:first-of-type": {
    padding: 0
  }
});
function xk(e) {
  const {
    children: t,
    slots: n,
    slotProps: r
  } = e, {
    open: s
  } = Qr(), {
    dismissViews: i,
    onPopperExited: a
  } = vt(), l = n?.dialog ?? bk, c = n?.mobileTransition ?? mr;
  return /* @__PURE__ */ x.jsx(l, y({
    open: s,
    onClose: () => {
      i(), a?.();
    }
  }, r?.dialog, {
    TransitionComponent: c,
    TransitionProps: r?.mobileTransition,
    PaperComponent: n?.mobilePaper,
    PaperProps: r?.mobilePaper,
    children: /* @__PURE__ */ x.jsx(vk, {
      children: t
    })
  }));
}
const Sk = ["props", "steps"], wk = ["ownerState"], Pk = (e) => {
  let {
    props: t,
    steps: n
  } = e, r = te(e, Sk);
  const {
    slots: s,
    slotProps: i,
    label: a,
    inputRef: l,
    localeText: c
  } = t, u = wh({
    steps: n
  }), {
    providerProps: d,
    renderCurrentView: p,
    ownerState: h
  } = dh(y({}, r, {
    props: t,
    localeText: c,
    autoFocusView: !0,
    viewContainerRole: "dialog",
    variant: "mobile",
    getStepNavigation: u
  })), b = d.privateContextValue.labelId, g = i?.toolbar?.hidden ?? !1, f = s.field, v = Le({
    elementType: f,
    externalSlotProps: i?.field,
    additionalProps: y({}, g && {
      id: b
    }),
    ownerState: h
  }), C = te(v, wk), T = s.layout ?? Gi;
  let S = b;
  g && (a ? S = `${b}-label` : S = void 0);
  const w = y({}, i, {
    toolbar: y({}, i?.toolbar, {
      titleId: b
    }),
    mobilePaper: y({
      "aria-labelledby": S
    }, i?.mobilePaper)
  }), O = () => /* @__PURE__ */ x.jsxs(op, y({}, d, {
    children: [/* @__PURE__ */ x.jsx(f, y({}, C, {
      slots: s,
      slotProps: w,
      inputRef: l
    })), /* @__PURE__ */ x.jsx(xk, {
      slots: s,
      slotProps: w,
      children: /* @__PURE__ */ x.jsx(T, y({}, w?.layout, {
        slots: s,
        slotProps: w,
        children: p()
      }))
    })]
  }));
  return process.env.NODE_ENV !== "production" && (O.displayName = "renderPicker"), {
    renderPicker: O
  };
}, cc = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ge(), s = Qp(t, "MuiMobileDatePicker"), i = y({
    day: ir,
    month: ir,
    year: ir
  }, s.viewRenderers), a = y({}, s, {
    viewRenderers: i,
    format: vl(r, s, !1),
    slots: y({
      field: Ui
    }, s.slots),
    slotProps: y({}, s.slotProps, {
      field: (c) => y({}, Zt(s.slotProps?.field, c), Xf(s)),
      toolbar: y({
        hidden: !1
      }, s.slotProps?.toolbar)
    })
  }), {
    renderPicker: l
  } = Pk({
    ref: n,
    props: a,
    valueManager: dn,
    valueType: "date",
    validator: ss,
    steps: null
  });
  return l();
});
process.env.NODE_ENV !== "production" && (cc.displayName = "MobileDatePicker");
cc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: o.bool,
  className: o.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: o.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: o.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: o.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: o.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: o.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: o.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: o.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: o.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: o.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dn,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: o.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: o.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: o.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: o.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: o.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: o.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: o.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: o.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: o.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: o.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: o.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: o.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: o.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: o.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: o.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: o.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: o.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: o.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: o.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: o.oneOfType([o.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), o.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: o.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: o.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: o.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: o.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: o.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: o.shape({
    day: o.func,
    month: o.func,
    year: o.func
  }),
  /**
   * Available views.
   */
  views: o.arrayOf(o.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: o.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: o.oneOf([3, 4])
};
const Ok = ["desktopModeMediaQuery"], uc = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = nt({
    props: t,
    name: "MuiDatePicker"
  }), {
    desktopModeMediaQuery: s = W0
  } = r, i = te(r, Ok);
  return _f(s, {
    defaultMatches: !0
  }) ? /* @__PURE__ */ x.jsx(lc, y({
    ref: n
  }, i)) : /* @__PURE__ */ x.jsx(cc, y({
    ref: n
  }, i));
});
process.env.NODE_ENV !== "production" && (uc.displayName = "DatePicker");
process.env.NODE_ENV !== "production" && (uc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: o.bool,
  className: o.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: o.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: o.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: o.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: o.string,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: o.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: o.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: o.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: o.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: o.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: o.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: o.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: o.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: o.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dn,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: o.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: o.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: o.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: o.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: o.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: o.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: o.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: o.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: o.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: o.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: o.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: o.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: o.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: o.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: o.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: o.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: o.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: o.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: o.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: o.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: o.oneOfType([o.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), o.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: o.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: o.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: o.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: o.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: o.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: o.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: o.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: o.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: o.shape({
    day: o.func,
    month: o.func,
    year: o.func
  }),
  /**
   * Available views.
   */
  views: o.arrayOf(o.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: o.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: o.oneOf([3, 4])
});
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Eh;
function ce() {
  return Eh.apply(null, arguments);
}
function Ck(e) {
  Eh = e;
}
function Qt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ar(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Ie(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function dc(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Ie(e, t))
      return !1;
  return !0;
}
function Et(e) {
  return e === void 0;
}
function kn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function fs(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Th(e, t) {
  var n = [], r, s = e.length;
  for (r = 0; r < s; ++r)
    n.push(t(e[r], r));
  return n;
}
function Vn(e, t) {
  for (var n in t)
    Ie(t, n) && (e[n] = t[n]);
  return Ie(t, "toString") && (e.toString = t.toString), Ie(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function yn(e, t, n, r) {
  return Zh(e, t, n, r, !0).utc();
}
function Ek() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function Pe(e) {
  return e._pf == null && (e._pf = Ek()), e._pf;
}
var Ga;
Array.prototype.some ? Ga = Array.prototype.some : Ga = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function fc(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = Pe(e), n = Ga.call(t.parsedDateParts, function(s) {
    return s != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Ki(e) {
  var t = yn(NaN);
  return e != null ? Vn(Pe(t), e) : Pe(t).userInvalidated = !0, t;
}
var Vd = ce.momentProperties = [], Ta = !1;
function pc(e, t) {
  var n, r, s, i = Vd.length;
  if (Et(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Et(t._i) || (e._i = t._i), Et(t._f) || (e._f = t._f), Et(t._l) || (e._l = t._l), Et(t._strict) || (e._strict = t._strict), Et(t._tzm) || (e._tzm = t._tzm), Et(t._isUTC) || (e._isUTC = t._isUTC), Et(t._offset) || (e._offset = t._offset), Et(t._pf) || (e._pf = Pe(t)), Et(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      r = Vd[n], s = t[r], Et(s) || (e[r] = s);
  return e;
}
function ps(e) {
  pc(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ta === !1 && (Ta = !0, ce.updateOffset(this), Ta = !1);
}
function Jt(e) {
  return e instanceof ps || e != null && e._isAMomentObject != null;
}
function kh(e) {
  ce.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Ut(e, t) {
  var n = !0;
  return Vn(function() {
    if (ce.deprecationHandler != null && ce.deprecationHandler(null, e), n) {
      var r = [], s, i, a, l = arguments.length;
      for (i = 0; i < l; i++) {
        if (s = "", typeof arguments[i] == "object") {
          s += `
[` + i + "] ";
          for (a in arguments[0])
            Ie(arguments[0], a) && (s += a + ": " + arguments[0][a] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[i];
        r.push(s);
      }
      kh(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ld = {};
function Dh(e, t) {
  ce.deprecationHandler != null && ce.deprecationHandler(e, t), Ld[e] || (kh(t), Ld[e] = !0);
}
ce.suppressDeprecationWarnings = !1;
ce.deprecationHandler = null;
function gn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Tk(e) {
  var t, n;
  for (n in e)
    Ie(e, n) && (t = e[n], gn(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Ka(e, t) {
  var n = Vn({}, e), r;
  for (r in t)
    Ie(t, r) && (ar(e[r]) && ar(t[r]) ? (n[r] = {}, Vn(n[r], e[r]), Vn(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Ie(e, r) && !Ie(t, r) && ar(e[r]) && (n[r] = Vn({}, n[r]));
  return n;
}
function hc(e) {
  e != null && this.set(e);
}
var Za;
Object.keys ? Za = Object.keys : Za = function(e) {
  var t, n = [];
  for (t in e)
    Ie(e, t) && n.push(t);
  return n;
};
var kk = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Dk(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return gn(r) ? r.call(t, n) : r;
}
function pn(e, t, n) {
  var r = "" + Math.abs(e), s = t - r.length, i = e >= 0;
  return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
}
var mc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ts = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ka = {}, Ar = {};
function ye(e, t, n, r) {
  var s = r;
  typeof r == "string" && (s = function() {
    return this[r]();
  }), e && (Ar[e] = s), t && (Ar[t[0]] = function() {
    return pn(s.apply(this, arguments), t[1], t[2]);
  }), n && (Ar[n] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function Rk(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Mk(e) {
  var t = e.match(mc), n, r;
  for (n = 0, r = t.length; n < r; n++)
    Ar[t[n]] ? t[n] = Ar[t[n]] : t[n] = Rk(t[n]);
  return function(s) {
    var i = "", a;
    for (a = 0; a < r; a++)
      i += gn(t[a]) ? t[a].call(s, e) : t[a];
    return i;
  };
}
function Fs(e, t) {
  return e.isValid() ? (t = Rh(t, e.localeData()), ka[t] = ka[t] || Mk(t), ka[t](e)) : e.localeData().invalidDate();
}
function Rh(e, t) {
  var n = 5;
  function r(s) {
    return t.longDateFormat(s) || s;
  }
  for (Ts.lastIndex = 0; n >= 0 && Ts.test(e); )
    e = e.replace(
      Ts,
      r
    ), Ts.lastIndex = 0, n -= 1;
  return e;
}
var _k = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ik(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(mc).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Nk = "Invalid date";
function $k() {
  return this._invalidDate;
}
var Ak = "%d", Fk = /\d{1,2}/;
function jk(e) {
  return this._ordinal.replace("%d", e);
}
var Vk = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Lk(e, t, n, r) {
  var s = this._relativeTime[n];
  return gn(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
}
function Bk(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return gn(n) ? n(t) : n.replace(/%s/i, t);
}
var Bd = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Ht(e) {
  return typeof e == "string" ? Bd[e] || Bd[e.toLowerCase()] : void 0;
}
function yc(e) {
  var t = {}, n, r;
  for (r in e)
    Ie(e, r) && (n = Ht(r), n && (t[n] = e[r]));
  return t;
}
var Wk = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Yk(e) {
  var t = [], n;
  for (n in e)
    Ie(e, n) && t.push({ unit: n, priority: Wk[n] });
  return t.sort(function(r, s) {
    return r.priority - s.priority;
  }), t;
}
var Mh = /\d/, $t = /\d\d/, _h = /\d{3}/, gc = /\d{4}/, Zi = /[+-]?\d{6}/, Qe = /\d\d?/, Ih = /\d\d\d\d?/, Nh = /\d\d\d\d\d\d?/, Xi = /\d{1,3}/, bc = /\d{1,4}/, Qi = /[+-]?\d{1,6}/, eo = /\d+/, Ji = /[+-]?\d+/, zk = /Z|[+-]\d\d:?\d\d/gi, ea = /Z|[+-]\d\d(?::?\d\d)?/gi, Uk = /[+-]?\d+(\.\d{1,3})?/, hs = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, to = /^[1-9]\d?/, vc = /^([1-9]\d|\d)/, Js;
Js = {};
function me(e, t, n) {
  Js[e] = gn(t) ? t : function(r, s) {
    return r && n ? n : t;
  };
}
function Hk(e, t) {
  return Ie(Js, e) ? Js[e](t._strict, t._locale) : new RegExp(qk(e));
}
function qk(e) {
  return wn(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, s, i) {
        return n || r || s || i;
      }
    )
  );
}
function wn(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Vt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ke(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Vt(t)), n;
}
var Xa = {};
function qe(e, t) {
  var n, r = t, s;
  for (typeof e == "string" && (e = [e]), kn(t) && (r = function(i, a) {
    a[t] = ke(i);
  }), s = e.length, n = 0; n < s; n++)
    Xa[e[n]] = r;
}
function ms(e, t) {
  qe(e, function(n, r, s, i) {
    s._w = s._w || {}, t(n, s._w, s, i);
  });
}
function Gk(e, t, n) {
  t != null && Ie(Xa, e) && Xa[e](t, n._a, n, e);
}
function ta(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var St = 0, xn = 1, an = 2, pt = 3, Kt = 4, Sn = 5, or = 6, Kk = 7, Zk = 8;
ye("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? pn(e, 4) : "+" + e;
});
ye(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
ye(0, ["YYYY", 4], 0, "year");
ye(0, ["YYYYY", 5], 0, "year");
ye(0, ["YYYYYY", 6, !0], 0, "year");
me("Y", Ji);
me("YY", Qe, $t);
me("YYYY", bc, gc);
me("YYYYY", Qi, Zi);
me("YYYYYY", Qi, Zi);
qe(["YYYYY", "YYYYYY"], St);
qe("YYYY", function(e, t) {
  t[St] = e.length === 2 ? ce.parseTwoDigitYear(e) : ke(e);
});
qe("YY", function(e, t) {
  t[St] = ce.parseTwoDigitYear(e);
});
qe("Y", function(e, t) {
  t[St] = parseInt(e, 10);
});
function Io(e) {
  return ta(e) ? 366 : 365;
}
ce.parseTwoDigitYear = function(e) {
  return ke(e) + (ke(e) > 68 ? 1900 : 2e3);
};
var $h = no("FullYear", !0);
function Xk() {
  return ta(this.year());
}
function no(e, t) {
  return function(n) {
    return n != null ? (Ah(this, e, n), ce.updateOffset(this, t), this) : Ho(this, e);
  };
}
function Ho(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return r ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return r ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return r ? n.getUTCHours() : n.getHours();
    case "Date":
      return r ? n.getUTCDate() : n.getDate();
    case "Day":
      return r ? n.getUTCDay() : n.getDay();
    case "Month":
      return r ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return r ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function Ah(e, t, n) {
  var r, s, i, a, l;
  if (!(!e.isValid() || isNaN(n))) {
    switch (r = e._d, s = e._isUTC, t) {
      case "Milliseconds":
        return void (s ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
      case "Seconds":
        return void (s ? r.setUTCSeconds(n) : r.setSeconds(n));
      case "Minutes":
        return void (s ? r.setUTCMinutes(n) : r.setMinutes(n));
      case "Hours":
        return void (s ? r.setUTCHours(n) : r.setHours(n));
      case "Date":
        return void (s ? r.setUTCDate(n) : r.setDate(n));
      // case 'Day': // Not real
      //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
      // case 'Month': // Not used because we need to pass two variables
      //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
      case "FullYear":
        break;
      // See below ...
      default:
        return;
    }
    i = n, a = e.month(), l = e.date(), l = l === 29 && a === 1 && !ta(i) ? 28 : l, s ? r.setUTCFullYear(i, a, l) : r.setFullYear(i, a, l);
  }
}
function Qk(e) {
  return e = Ht(e), gn(this[e]) ? this[e]() : this;
}
function Jk(e, t) {
  if (typeof e == "object") {
    e = yc(e);
    var n = Yk(e), r, s = n.length;
    for (r = 0; r < s; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Ht(e), gn(this[e]))
    return this[e](t);
  return this;
}
function e1(e, t) {
  return (e % t + t) % t;
}
var at;
Array.prototype.indexOf ? at = Array.prototype.indexOf : at = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function xc(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = e1(t, 12);
  return e += (t - n) / 12, n === 1 ? ta(e) ? 29 : 28 : 31 - n % 7 % 2;
}
ye("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
ye("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
ye("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
me("M", Qe, to);
me("MM", Qe, $t);
me("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
me("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
qe(["M", "MM"], function(e, t) {
  t[xn] = ke(e) - 1;
});
qe(["MMM", "MMMM"], function(e, t, n, r) {
  var s = n._locale.monthsParse(e, r, n._strict);
  s != null ? t[xn] = s : Pe(n).invalidMonth = e;
});
var t1 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Fh = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), jh = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, n1 = hs, r1 = hs;
function o1(e, t) {
  return e ? Qt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || jh).test(t) ? "format" : "standalone"][e.month()] : Qt(this._months) ? this._months : this._months.standalone;
}
function s1(e, t) {
  return e ? Qt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[jh.test(t) ? "format" : "standalone"][e.month()] : Qt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function i1(e, t, n) {
  var r, s, i, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = yn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (s = at.call(this._shortMonthsParse, a), s !== -1 ? s : null) : (s = at.call(this._longMonthsParse, a), s !== -1 ? s : null) : t === "MMM" ? (s = at.call(this._shortMonthsParse, a), s !== -1 ? s : (s = at.call(this._longMonthsParse, a), s !== -1 ? s : null)) : (s = at.call(this._longMonthsParse, a), s !== -1 ? s : (s = at.call(this._shortMonthsParse, a), s !== -1 ? s : null));
}
function a1(e, t, n) {
  var r, s, i;
  if (this._monthsParseExact)
    return i1.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (s = yn([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function Vh(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ke(t);
    else if (t = e.localeData().monthsParse(t), !kn(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, xc(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function Lh(e) {
  return e != null ? (Vh(this, e), ce.updateOffset(this, !0), this) : Ho(this, "Month");
}
function l1() {
  return xc(this.year(), this.month());
}
function c1(e) {
  return this._monthsParseExact ? (Ie(this, "_monthsRegex") || Bh.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ie(this, "_monthsShortRegex") || (this._monthsShortRegex = n1), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function u1(e) {
  return this._monthsParseExact ? (Ie(this, "_monthsRegex") || Bh.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Ie(this, "_monthsRegex") || (this._monthsRegex = r1), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Bh() {
  function e(c, u) {
    return u.length - c.length;
  }
  var t = [], n = [], r = [], s, i, a, l;
  for (s = 0; s < 12; s++)
    i = yn([2e3, s]), a = wn(this.monthsShort(i, "")), l = wn(this.months(i, "")), t.push(a), n.push(l), r.push(l), r.push(a);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function d1(e, t, n, r, s, i, a) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, r, s, i, a), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, r, s, i, a), l;
}
function qo(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function ei(e, t, n) {
  var r = 7 + t - n, s = (7 + qo(e, 0, r).getUTCDay() - t) % 7;
  return -s + r - 1;
}
function Wh(e, t, n, r, s) {
  var i = (7 + n - r) % 7, a = ei(e, r, s), l = 1 + 7 * (t - 1) + i + a, c, u;
  return l <= 0 ? (c = e - 1, u = Io(c) + l) : l > Io(e) ? (c = e + 1, u = l - Io(e)) : (c = e, u = l), {
    year: c,
    dayOfYear: u
  };
}
function Go(e, t, n) {
  var r = ei(e.year(), t, n), s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, a;
  return s < 1 ? (a = e.year() - 1, i = s + Pn(a, t, n)) : s > Pn(e.year(), t, n) ? (i = s - Pn(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = s), {
    week: i,
    year: a
  };
}
function Pn(e, t, n) {
  var r = ei(e, t, n), s = ei(e + 1, t, n);
  return (Io(e) - r + s) / 7;
}
ye("w", ["ww", 2], "wo", "week");
ye("W", ["WW", 2], "Wo", "isoWeek");
me("w", Qe, to);
me("ww", Qe, $t);
me("W", Qe, to);
me("WW", Qe, $t);
ms(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = ke(e);
  }
);
function f1(e) {
  return Go(e, this._week.dow, this._week.doy).week;
}
var p1 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function h1() {
  return this._week.dow;
}
function m1() {
  return this._week.doy;
}
function y1(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function g1(e) {
  var t = Go(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
ye("d", 0, "do", "day");
ye("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
ye("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
ye("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
ye("e", 0, 0, "weekday");
ye("E", 0, 0, "isoWeekday");
me("d", Qe);
me("e", Qe);
me("E", Qe);
me("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
me("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
me("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
ms(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var s = n._locale.weekdaysParse(e, r, n._strict);
  s != null ? t.d = s : Pe(n).invalidWeekday = e;
});
ms(["d", "e", "E"], function(e, t, n, r) {
  t[r] = ke(e);
});
function b1(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function v1(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Sc(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var x1 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Yh = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), S1 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), w1 = hs, P1 = hs, O1 = hs;
function C1(e, t) {
  var n = Qt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Sc(n, this._week.dow) : e ? n[e.day()] : n;
}
function E1(e) {
  return e === !0 ? Sc(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function T1(e) {
  return e === !0 ? Sc(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function k1(e, t, n) {
  var r, s, i, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = yn([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (s = at.call(this._weekdaysParse, a), s !== -1 ? s : null) : t === "ddd" ? (s = at.call(this._shortWeekdaysParse, a), s !== -1 ? s : null) : (s = at.call(this._minWeekdaysParse, a), s !== -1 ? s : null) : t === "dddd" ? (s = at.call(this._weekdaysParse, a), s !== -1 || (s = at.call(this._shortWeekdaysParse, a), s !== -1) ? s : (s = at.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : t === "ddd" ? (s = at.call(this._shortWeekdaysParse, a), s !== -1 || (s = at.call(this._weekdaysParse, a), s !== -1) ? s : (s = at.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : (s = at.call(this._minWeekdaysParse, a), s !== -1 || (s = at.call(this._weekdaysParse, a), s !== -1) ? s : (s = at.call(this._shortWeekdaysParse, a), s !== -1 ? s : null));
}
function D1(e, t, n) {
  var r, s, i;
  if (this._weekdaysParseExact)
    return k1.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (s = yn([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function R1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Ho(this, "Day");
  return e != null ? (e = b1(e, this.localeData()), this.add(e - t, "d")) : t;
}
function M1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function _1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = v1(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function I1(e) {
  return this._weekdaysParseExact ? (Ie(this, "_weekdaysRegex") || wc.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ie(this, "_weekdaysRegex") || (this._weekdaysRegex = w1), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function N1(e) {
  return this._weekdaysParseExact ? (Ie(this, "_weekdaysRegex") || wc.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ie(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = P1), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function $1(e) {
  return this._weekdaysParseExact ? (Ie(this, "_weekdaysRegex") || wc.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ie(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = O1), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function wc() {
  function e(d, p) {
    return p.length - d.length;
  }
  var t = [], n = [], r = [], s = [], i, a, l, c, u;
  for (i = 0; i < 7; i++)
    a = yn([2e3, 1]).day(i), l = wn(this.weekdaysMin(a, "")), c = wn(this.weekdaysShort(a, "")), u = wn(this.weekdays(a, "")), t.push(l), n.push(c), r.push(u), s.push(l), s.push(c), s.push(u);
  t.sort(e), n.sort(e), r.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Pc() {
  return this.hours() % 12 || 12;
}
function A1() {
  return this.hours() || 24;
}
ye("H", ["HH", 2], 0, "hour");
ye("h", ["hh", 2], 0, Pc);
ye("k", ["kk", 2], 0, A1);
ye("hmm", 0, 0, function() {
  return "" + Pc.apply(this) + pn(this.minutes(), 2);
});
ye("hmmss", 0, 0, function() {
  return "" + Pc.apply(this) + pn(this.minutes(), 2) + pn(this.seconds(), 2);
});
ye("Hmm", 0, 0, function() {
  return "" + this.hours() + pn(this.minutes(), 2);
});
ye("Hmmss", 0, 0, function() {
  return "" + this.hours() + pn(this.minutes(), 2) + pn(this.seconds(), 2);
});
function zh(e, t) {
  ye(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
zh("a", !0);
zh("A", !1);
function Uh(e, t) {
  return t._meridiemParse;
}
me("a", Uh);
me("A", Uh);
me("H", Qe, vc);
me("h", Qe, to);
me("k", Qe, to);
me("HH", Qe, $t);
me("hh", Qe, $t);
me("kk", Qe, $t);
me("hmm", Ih);
me("hmmss", Nh);
me("Hmm", Ih);
me("Hmmss", Nh);
qe(["H", "HH"], pt);
qe(["k", "kk"], function(e, t, n) {
  var r = ke(e);
  t[pt] = r === 24 ? 0 : r;
});
qe(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
qe(["h", "hh"], function(e, t, n) {
  t[pt] = ke(e), Pe(n).bigHour = !0;
});
qe("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[pt] = ke(e.substr(0, r)), t[Kt] = ke(e.substr(r)), Pe(n).bigHour = !0;
});
qe("hmmss", function(e, t, n) {
  var r = e.length - 4, s = e.length - 2;
  t[pt] = ke(e.substr(0, r)), t[Kt] = ke(e.substr(r, 2)), t[Sn] = ke(e.substr(s)), Pe(n).bigHour = !0;
});
qe("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[pt] = ke(e.substr(0, r)), t[Kt] = ke(e.substr(r));
});
qe("Hmmss", function(e, t, n) {
  var r = e.length - 4, s = e.length - 2;
  t[pt] = ke(e.substr(0, r)), t[Kt] = ke(e.substr(r, 2)), t[Sn] = ke(e.substr(s));
});
function F1(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var j1 = /[ap]\.?m?\.?/i, V1 = no("Hours", !0);
function L1(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Hh = {
  calendar: kk,
  longDateFormat: _k,
  invalidDate: Nk,
  ordinal: Ak,
  dayOfMonthOrdinalParse: Fk,
  relativeTime: Vk,
  months: t1,
  monthsShort: Fh,
  week: p1,
  weekdays: x1,
  weekdaysMin: S1,
  weekdaysShort: Yh,
  meridiemParse: j1
}, et = {}, vo = {}, Ko;
function B1(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function Wd(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function W1(e) {
  for (var t = 0, n, r, s, i; t < e.length; ) {
    for (i = Wd(e[t]).split("-"), n = i.length, r = Wd(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (s = na(i.slice(0, n).join("-")), s)
        return s;
      if (r && r.length >= n && B1(i, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Ko;
}
function Y1(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function na(e) {
  var t = null, n;
  if (et[e] === void 0 && typeof module < "u" && module && module.exports && Y1(e))
    try {
      t = Ko._abbr, n = require, n("./locale/" + e), Bn(t);
    } catch {
      et[e] = null;
    }
  return et[e];
}
function Bn(e, t) {
  var n;
  return e && (Et(t) ? n = Mn(e) : n = Oc(e, t), n ? Ko = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Ko._abbr;
}
function Oc(e, t) {
  if (t !== null) {
    var n, r = Hh;
    if (t.abbr = e, et[e] != null)
      Dh(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = et[e]._config;
    else if (t.parentLocale != null)
      if (et[t.parentLocale] != null)
        r = et[t.parentLocale]._config;
      else if (n = na(t.parentLocale), n != null)
        r = n._config;
      else
        return vo[t.parentLocale] || (vo[t.parentLocale] = []), vo[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return et[e] = new hc(Ka(r, t)), vo[e] && vo[e].forEach(function(s) {
      Oc(s.name, s.config);
    }), Bn(e), et[e];
  } else
    return delete et[e], null;
}
function z1(e, t) {
  if (t != null) {
    var n, r, s = Hh;
    et[e] != null && et[e].parentLocale != null ? et[e].set(Ka(et[e]._config, t)) : (r = na(e), r != null && (s = r._config), t = Ka(s, t), r == null && (t.abbr = e), n = new hc(t), n.parentLocale = et[e], et[e] = n), Bn(e);
  } else
    et[e] != null && (et[e].parentLocale != null ? (et[e] = et[e].parentLocale, e === Bn() && Bn(e)) : et[e] != null && delete et[e]);
  return et[e];
}
function Mn(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Ko;
  if (!Qt(e)) {
    if (t = na(e), t)
      return t;
    e = [e];
  }
  return W1(e);
}
function U1() {
  return Za(et);
}
function Cc(e) {
  var t, n = e._a;
  return n && Pe(e).overflow === -2 && (t = n[xn] < 0 || n[xn] > 11 ? xn : n[an] < 1 || n[an] > xc(n[St], n[xn]) ? an : n[pt] < 0 || n[pt] > 24 || n[pt] === 24 && (n[Kt] !== 0 || n[Sn] !== 0 || n[or] !== 0) ? pt : n[Kt] < 0 || n[Kt] > 59 ? Kt : n[Sn] < 0 || n[Sn] > 59 ? Sn : n[or] < 0 || n[or] > 999 ? or : -1, Pe(e)._overflowDayOfYear && (t < St || t > an) && (t = an), Pe(e)._overflowWeeks && t === -1 && (t = Kk), Pe(e)._overflowWeekday && t === -1 && (t = Zk), Pe(e).overflow = t), e;
}
var H1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, q1 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, G1 = /Z|[+-]\d\d(?::?\d\d)?/, ks = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Da = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], K1 = /^\/?Date\((-?\d+)/i, Z1 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, X1 = {
  UT: 0,
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
function qh(e) {
  var t, n, r = e._i, s = H1.exec(r) || q1.exec(r), i, a, l, c, u = ks.length, d = Da.length;
  if (s) {
    for (Pe(e).iso = !0, t = 0, n = u; t < n; t++)
      if (ks[t][1].exec(s[1])) {
        a = ks[t][0], i = ks[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, n = d; t < n; t++)
        if (Da[t][1].exec(s[3])) {
          l = (s[2] || " ") + Da[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && l != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (G1.exec(s[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (l || "") + (c || ""), Tc(e);
  } else
    e._isValid = !1;
}
function Q1(e, t, n, r, s, i) {
  var a = [
    J1(e),
    Fh.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(s, 10)
  ];
  return i && a.push(parseInt(i, 10)), a;
}
function J1(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function eD(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function tD(e, t, n) {
  if (e) {
    var r = Yh.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== s)
      return Pe(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function nD(e, t, n) {
  if (e)
    return X1[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), s = r % 100, i = (r - s) / 100;
  return i * 60 + s;
}
function Gh(e) {
  var t = Z1.exec(eD(e._i)), n;
  if (t) {
    if (n = Q1(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !tD(t[1], n, e))
      return;
    e._a = n, e._tzm = nD(t[8], t[9], t[10]), e._d = qo.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Pe(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function rD(e) {
  var t = K1.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (qh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Gh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : ce.createFromInputFallback(e);
}
ce.createFromInputFallback = Ut(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Tr(e, t, n) {
  return e ?? t ?? n;
}
function oD(e) {
  var t = new Date(ce.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ec(e) {
  var t, n, r = [], s, i, a;
  if (!e._d) {
    for (s = oD(e), e._w && e._a[an] == null && e._a[xn] == null && sD(e), e._dayOfYear != null && (a = Tr(e._a[St], s[St]), (e._dayOfYear > Io(a) || e._dayOfYear === 0) && (Pe(e)._overflowDayOfYear = !0), n = qo(a, 0, e._dayOfYear), e._a[xn] = n.getUTCMonth(), e._a[an] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[pt] === 24 && e._a[Kt] === 0 && e._a[Sn] === 0 && e._a[or] === 0 && (e._nextDay = !0, e._a[pt] = 0), e._d = (e._useUTC ? qo : d1).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[pt] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (Pe(e).weekdayMismatch = !0);
  }
}
function sD(e) {
  var t, n, r, s, i, a, l, c, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, a = 4, n = Tr(
    t.GG,
    e._a[St],
    Go(Xe(), 1, 4).year
  ), r = Tr(t.W, 1), s = Tr(t.E, 1), (s < 1 || s > 7) && (c = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, u = Go(Xe(), i, a), n = Tr(t.gg, e._a[St], u.year), r = Tr(t.w, u.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (c = !0)) : t.e != null ? (s = t.e + i, (t.e < 0 || t.e > 6) && (c = !0)) : s = i), r < 1 || r > Pn(n, i, a) ? Pe(e)._overflowWeeks = !0 : c != null ? Pe(e)._overflowWeekday = !0 : (l = Wh(n, r, s, i, a), e._a[St] = l.year, e._dayOfYear = l.dayOfYear);
}
ce.ISO_8601 = function() {
};
ce.RFC_2822 = function() {
};
function Tc(e) {
  if (e._f === ce.ISO_8601) {
    qh(e);
    return;
  }
  if (e._f === ce.RFC_2822) {
    Gh(e);
    return;
  }
  e._a = [], Pe(e).empty = !0;
  var t = "" + e._i, n, r, s, i, a, l = t.length, c = 0, u, d;
  for (s = Rh(e._f, e._locale).match(mc) || [], d = s.length, n = 0; n < d; n++)
    i = s[n], r = (t.match(Hk(i, e)) || [])[0], r && (a = t.substr(0, t.indexOf(r)), a.length > 0 && Pe(e).unusedInput.push(a), t = t.slice(
      t.indexOf(r) + r.length
    ), c += r.length), Ar[i] ? (r ? Pe(e).empty = !1 : Pe(e).unusedTokens.push(i), Gk(i, r, e)) : e._strict && !r && Pe(e).unusedTokens.push(i);
  Pe(e).charsLeftOver = l - c, t.length > 0 && Pe(e).unusedInput.push(t), e._a[pt] <= 12 && Pe(e).bigHour === !0 && e._a[pt] > 0 && (Pe(e).bigHour = void 0), Pe(e).parsedDateParts = e._a.slice(0), Pe(e).meridiem = e._meridiem, e._a[pt] = iD(
    e._locale,
    e._a[pt],
    e._meridiem
  ), u = Pe(e).era, u !== null && (e._a[St] = e._locale.erasConvertYear(u, e._a[St])), Ec(e), Cc(e);
}
function iD(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function aD(e) {
  var t, n, r, s, i, a, l = !1, c = e._f.length;
  if (c === 0) {
    Pe(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < c; s++)
    i = 0, a = !1, t = pc({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Tc(t), fc(t) && (a = !0), i += Pe(t).charsLeftOver, i += Pe(t).unusedTokens.length * 10, Pe(t).score = i, l ? i < r && (r = i, n = t) : (r == null || i < r || a) && (r = i, n = t, a && (l = !0));
  Vn(e, n || t);
}
function lD(e) {
  if (!e._d) {
    var t = yc(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Th(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Ec(e);
  }
}
function cD(e) {
  var t = new ps(Cc(Kh(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Kh(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Mn(e._l), t === null || n === void 0 && t === "" ? Ki({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Jt(t) ? new ps(Cc(t)) : (fs(t) ? e._d = t : Qt(n) ? aD(e) : n ? Tc(e) : uD(e), fc(e) || (e._d = null), e));
}
function uD(e) {
  var t = e._i;
  Et(t) ? e._d = new Date(ce.now()) : fs(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? rD(e) : Qt(t) ? (e._a = Th(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Ec(e)) : ar(t) ? lD(e) : kn(t) ? e._d = new Date(t) : ce.createFromInputFallback(e);
}
function Zh(e, t, n, r, s) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (ar(e) && dc(e) || Qt(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = n, i._i = e, i._f = t, i._strict = r, cD(i);
}
function Xe(e, t, n, r) {
  return Zh(e, t, n, r, !1);
}
var dD = Ut(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Xe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ki();
  }
), fD = Ut(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Xe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ki();
  }
);
function Xh(e, t) {
  var n, r;
  if (t.length === 1 && Qt(t[0]) && (t = t[0]), !t.length)
    return Xe();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function pD() {
  var e = [].slice.call(arguments, 0);
  return Xh("isBefore", e);
}
function hD() {
  var e = [].slice.call(arguments, 0);
  return Xh("isAfter", e);
}
var mD = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, xo = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function yD(e) {
  var t, n = !1, r, s = xo.length;
  for (t in e)
    if (Ie(e, t) && !(at.call(xo, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < s; ++r)
    if (e[xo[r]]) {
      if (n)
        return !1;
      parseFloat(e[xo[r]]) !== ke(e[xo[r]]) && (n = !0);
    }
  return !0;
}
function gD() {
  return this._isValid;
}
function bD() {
  return nn(NaN);
}
function ra(e) {
  var t = yc(e), n = t.year || 0, r = t.quarter || 0, s = t.month || 0, i = t.week || t.isoWeek || 0, a = t.day || 0, l = t.hour || 0, c = t.minute || 0, u = t.second || 0, d = t.millisecond || 0;
  this._isValid = yD(t), this._milliseconds = +d + u * 1e3 + // 1000
  c * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = Mn(), this._bubble();
}
function js(e) {
  return e instanceof ra;
}
function Qa(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function vD(e, t, n) {
  var r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), i = 0, a;
  for (a = 0; a < r; a++)
    ke(e[a]) !== ke(t[a]) && i++;
  return i + s;
}
function Qh(e, t) {
  ye(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + pn(~~(n / 60), 2) + t + pn(~~n % 60, 2);
  });
}
Qh("Z", ":");
Qh("ZZ", "");
me("Z", ea);
me("ZZ", ea);
qe(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = kc(ea, e);
});
var xD = /([\+\-]|\d\d)/gi;
function kc(e, t) {
  var n = (t || "").match(e), r, s, i;
  return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(xD) || ["-", 0, 0], i = +(s[1] * 60) + ke(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i);
}
function Dc(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (Jt(e) || fs(e) ? e.valueOf() : Xe(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), ce.updateOffset(n, !1), n) : Xe(e).local();
}
function Ja(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
ce.updateOffset = function() {
};
function SD(e, t, n) {
  var r = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = kc(ea, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (s = Ja(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), r !== e && (!t || this._changeInProgress ? tm(
      this,
      nn(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, ce.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Ja(this);
}
function wD(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function PD(e) {
  return this.utcOffset(0, e);
}
function OD(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ja(this), "m")), this;
}
function CD() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = kc(zk, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function ED(e) {
  return this.isValid() ? (e = e ? Xe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function TD() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function kD() {
  if (!Et(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return pc(e, this), e = Kh(e), e._a ? (t = e._isUTC ? yn(e._a) : Xe(e._a), this._isDSTShifted = this.isValid() && vD(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function DD() {
  return this.isValid() ? !this._isUTC : !1;
}
function RD() {
  return this.isValid() ? this._isUTC : !1;
}
function Jh() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var MD = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, _D = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function nn(e, t) {
  var n = e, r = null, s, i, a;
  return js(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : kn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = MD.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ke(r[an]) * s,
    h: ke(r[pt]) * s,
    m: ke(r[Kt]) * s,
    s: ke(r[Sn]) * s,
    ms: ke(Qa(r[or] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (r = _D.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
    y: Jn(r[2], s),
    M: Jn(r[3], s),
    w: Jn(r[4], s),
    d: Jn(r[5], s),
    h: Jn(r[6], s),
    m: Jn(r[7], s),
    s: Jn(r[8], s)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (a = ID(
    Xe(n.from),
    Xe(n.to)
  ), n = {}, n.ms = a.milliseconds, n.M = a.months), i = new ra(n), js(e) && Ie(e, "_locale") && (i._locale = e._locale), js(e) && Ie(e, "_isValid") && (i._isValid = e._isValid), i;
}
nn.fn = ra.prototype;
nn.invalid = bD;
function Jn(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Yd(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function ID(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Dc(t, e), e.isBefore(t) ? n = Yd(e, t) : (n = Yd(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function em(e, t) {
  return function(n, r) {
    var s, i;
    return r !== null && !isNaN(+r) && (Dh(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = r, r = i), s = nn(n, r), tm(this, s, e), this;
  };
}
function tm(e, t, n, r) {
  var s = t._milliseconds, i = Qa(t._days), a = Qa(t._months);
  e.isValid() && (r = r ?? !0, a && Vh(e, Ho(e, "Month") + a * n), i && Ah(e, "Date", Ho(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && ce.updateOffset(e, i || a));
}
var ND = em(1, "add"), $D = em(-1, "subtract");
function nm(e) {
  return typeof e == "string" || e instanceof String;
}
function AD(e) {
  return Jt(e) || fs(e) || nm(e) || kn(e) || jD(e) || FD(e) || e === null || e === void 0;
}
function FD(e) {
  var t = ar(e) && !dc(e), n = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], s, i, a = r.length;
  for (s = 0; s < a; s += 1)
    i = r[s], n = n || Ie(e, i);
  return t && n;
}
function jD(e) {
  var t = Qt(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !kn(r) && nm(e);
  }).length === 0), t && n;
}
function VD(e) {
  var t = ar(e) && !dc(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, i;
  for (s = 0; s < r.length; s += 1)
    i = r[s], n = n || Ie(e, i);
  return t && n;
}
function LD(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function BD(e, t) {
  arguments.length === 1 && (arguments[0] ? AD(arguments[0]) ? (e = arguments[0], t = void 0) : VD(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || Xe(), r = Dc(n, this).startOf("day"), s = ce.calendarFormat(this, r) || "sameElse", i = t && (gn(t[s]) ? t[s].call(this, n) : t[s]);
  return this.format(
    i || this.localeData().calendar(s, this, Xe(n))
  );
}
function WD() {
  return new ps(this);
}
function YD(e, t) {
  var n = Jt(e) ? e : Xe(e);
  return this.isValid() && n.isValid() ? (t = Ht(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function zD(e, t) {
  var n = Jt(e) ? e : Xe(e);
  return this.isValid() && n.isValid() ? (t = Ht(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function UD(e, t, n, r) {
  var s = Jt(e) ? e : Xe(e), i = Jt(t) ? t : Xe(t);
  return this.isValid() && s.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function HD(e, t) {
  var n = Jt(e) ? e : Xe(e), r;
  return this.isValid() && n.isValid() ? (t = Ht(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function qD(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function GD(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function KD(e, t, n) {
  var r, s, i;
  if (!this.isValid())
    return NaN;
  if (r = Dc(e, this), !r.isValid())
    return NaN;
  switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, t = Ht(t), t) {
    case "year":
      i = Vs(this, r) / 12;
      break;
    case "month":
      i = Vs(this, r);
      break;
    case "quarter":
      i = Vs(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    // 1000
    case "minute":
      i = (this - r) / 6e4;
      break;
    // 1000 * 60
    case "hour":
      i = (this - r) / 36e5;
      break;
    // 1000 * 60 * 60
    case "day":
      i = (this - r - s) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst
    case "week":
      i = (this - r - s) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst
    default:
      i = this - r;
  }
  return n ? i : Vt(i);
}
function Vs(e, t) {
  if (e.date() < t.date())
    return -Vs(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), s, i;
  return t - r < 0 ? (s = e.clone().add(n - 1, "months"), i = (t - r) / (r - s)) : (s = e.clone().add(n + 1, "months"), i = (t - r) / (s - r)), -(n + i) || 0;
}
ce.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ce.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function ZD() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function XD(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Fs(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : gn(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Fs(n, "Z")) : Fs(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function QD() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, s, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + r + s + i);
}
function JD(e) {
  e || (e = this.isUtc() ? ce.defaultFormatUtc : ce.defaultFormat);
  var t = Fs(this, e);
  return this.localeData().postformat(t);
}
function eR(e, t) {
  return this.isValid() && (Jt(e) && e.isValid() || Xe(e).isValid()) ? nn({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function tR(e) {
  return this.from(Xe(), e);
}
function nR(e, t) {
  return this.isValid() && (Jt(e) && e.isValid() || Xe(e).isValid()) ? nn({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function rR(e) {
  return this.to(Xe(), e);
}
function rm(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Mn(e), t != null && (this._locale = t), this);
}
var om = Ut(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function sm() {
  return this._locale;
}
var ti = 1e3, Fr = 60 * ti, ni = 60 * Fr, im = (365 * 400 + 97) * 24 * ni;
function jr(e, t) {
  return (e % t + t) % t;
}
function am(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - im : new Date(e, t, n).valueOf();
}
function lm(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - im : Date.UTC(e, t, n);
}
function oR(e) {
  var t, n;
  if (e = Ht(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? lm : am, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= jr(
        t + (this._isUTC ? 0 : this.utcOffset() * Fr),
        ni
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= jr(t, Fr);
      break;
    case "second":
      t = this._d.valueOf(), t -= jr(t, ti);
      break;
  }
  return this._d.setTime(t), ce.updateOffset(this, !0), this;
}
function sR(e) {
  var t, n;
  if (e = Ht(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? lm : am, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += ni - jr(
        t + (this._isUTC ? 0 : this.utcOffset() * Fr),
        ni
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Fr - jr(t, Fr) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += ti - jr(t, ti) - 1;
      break;
  }
  return this._d.setTime(t), ce.updateOffset(this, !0), this;
}
function iR() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function aR() {
  return Math.floor(this.valueOf() / 1e3);
}
function lR() {
  return new Date(this.valueOf());
}
function cR() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function uR() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function dR() {
  return this.isValid() ? this.toISOString() : null;
}
function fR() {
  return fc(this);
}
function pR() {
  return Vn({}, Pe(this));
}
function hR() {
  return Pe(this).overflow;
}
function mR() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
ye("N", 0, 0, "eraAbbr");
ye("NN", 0, 0, "eraAbbr");
ye("NNN", 0, 0, "eraAbbr");
ye("NNNN", 0, 0, "eraName");
ye("NNNNN", 0, 0, "eraNarrow");
ye("y", ["y", 1], "yo", "eraYear");
ye("y", ["yy", 2], 0, "eraYear");
ye("y", ["yyy", 3], 0, "eraYear");
ye("y", ["yyyy", 4], 0, "eraYear");
me("N", Rc);
me("NN", Rc);
me("NNN", Rc);
me("NNNN", ER);
me("NNNNN", TR);
qe(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var s = n._locale.erasParse(e, r, n._strict);
    s ? Pe(n).era = s : Pe(n).invalidEra = e;
  }
);
me("y", eo);
me("yy", eo);
me("yyy", eo);
me("yyyy", eo);
me("yo", kR);
qe(["y", "yy", "yyy", "yyyy"], St);
qe(["yo"], function(e, t, n, r) {
  var s;
  n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[St] = n._locale.eraYearOrdinalParse(e, s) : t[St] = parseInt(e, 10);
});
function yR(e, t) {
  var n, r, s, i = this._eras || Mn("en")._eras;
  for (n = 0, r = i.length; n < r; ++n) {
    switch (typeof i[n].since) {
      case "string":
        s = ce(i[n].since).startOf("day"), i[n].since = s.valueOf();
        break;
    }
    switch (typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        s = ce(i[n].until).startOf("day").valueOf(), i[n].until = s.valueOf();
        break;
    }
  }
  return i;
}
function gR(e, t, n) {
  var r, s, i = this.eras(), a, l, c;
  for (e = e.toUpperCase(), r = 0, s = i.length; r < s; ++r)
    if (a = i[r].name.toUpperCase(), l = i[r].abbr.toUpperCase(), c = i[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
            return i[r];
          break;
        case "NNNN":
          if (a === e)
            return i[r];
          break;
        case "NNNNN":
          if (c === e)
            return i[r];
          break;
      }
    else if ([a, l, c].indexOf(e) >= 0)
      return i[r];
}
function bR(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? ce(e.since).year() : ce(e.since).year() + (t - e.offset) * n;
}
function vR() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function xR() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function SR() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function wR() {
  var e, t, n, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return (this.year() - ce(s[e].since).year()) * n + s[e].offset;
  return this.year();
}
function PR(e) {
  return Ie(this, "_erasNameRegex") || Mc.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function OR(e) {
  return Ie(this, "_erasAbbrRegex") || Mc.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function CR(e) {
  return Ie(this, "_erasNarrowRegex") || Mc.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Rc(e, t) {
  return t.erasAbbrRegex(e);
}
function ER(e, t) {
  return t.erasNameRegex(e);
}
function TR(e, t) {
  return t.erasNarrowRegex(e);
}
function kR(e, t) {
  return t._eraYearOrdinalRegex || eo;
}
function Mc() {
  var e = [], t = [], n = [], r = [], s, i, a, l, c, u = this.eras();
  for (s = 0, i = u.length; s < i; ++s)
    a = wn(u[s].name), l = wn(u[s].abbr), c = wn(u[s].narrow), t.push(a), e.push(l), n.push(c), r.push(a), r.push(l), r.push(c);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
ye(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
ye(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function oa(e, t) {
  ye(0, [e, e.length], 0, t);
}
oa("gggg", "weekYear");
oa("ggggg", "weekYear");
oa("GGGG", "isoWeekYear");
oa("GGGGG", "isoWeekYear");
me("G", Ji);
me("g", Ji);
me("GG", Qe, $t);
me("gg", Qe, $t);
me("GGGG", bc, gc);
me("gggg", bc, gc);
me("GGGGG", Qi, Zi);
me("ggggg", Qi, Zi);
ms(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = ke(e);
  }
);
ms(["gg", "GG"], function(e, t, n, r) {
  t[r] = ce.parseTwoDigitYear(e);
});
function DR(e) {
  return cm.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function RR(e) {
  return cm.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function MR() {
  return Pn(this.year(), 1, 4);
}
function _R() {
  return Pn(this.isoWeekYear(), 1, 4);
}
function IR() {
  var e = this.localeData()._week;
  return Pn(this.year(), e.dow, e.doy);
}
function NR() {
  var e = this.localeData()._week;
  return Pn(this.weekYear(), e.dow, e.doy);
}
function cm(e, t, n, r, s) {
  var i;
  return e == null ? Go(this, r, s).year : (i = Pn(e, r, s), t > i && (t = i), $R.call(this, e, t, n, r, s));
}
function $R(e, t, n, r, s) {
  var i = Wh(e, t, n, r, s), a = qo(i.year, 0, i.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
ye("Q", 0, "Qo", "quarter");
me("Q", Mh);
qe("Q", function(e, t) {
  t[xn] = (ke(e) - 1) * 3;
});
function AR(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
ye("D", ["DD", 2], "Do", "date");
me("D", Qe, to);
me("DD", Qe, $t);
me("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
qe(["D", "DD"], an);
qe("Do", function(e, t) {
  t[an] = ke(e.match(Qe)[0]);
});
var um = no("Date", !0);
ye("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
me("DDD", Xi);
me("DDDD", _h);
qe(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ke(e);
});
function FR(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
ye("m", ["mm", 2], 0, "minute");
me("m", Qe, vc);
me("mm", Qe, $t);
qe(["m", "mm"], Kt);
var jR = no("Minutes", !1);
ye("s", ["ss", 2], 0, "second");
me("s", Qe, vc);
me("ss", Qe, $t);
qe(["s", "ss"], Sn);
var VR = no("Seconds", !1);
ye("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
ye(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
ye(0, ["SSS", 3], 0, "millisecond");
ye(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
ye(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
ye(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
ye(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
ye(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
ye(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
me("S", Xi, Mh);
me("SS", Xi, $t);
me("SSS", Xi, _h);
var Ln, dm;
for (Ln = "SSSS"; Ln.length <= 9; Ln += "S")
  me(Ln, eo);
function LR(e, t) {
  t[or] = ke(("0." + e) * 1e3);
}
for (Ln = "S"; Ln.length <= 9; Ln += "S")
  qe(Ln, LR);
dm = no("Milliseconds", !1);
ye("z", 0, 0, "zoneAbbr");
ye("zz", 0, 0, "zoneName");
function BR() {
  return this._isUTC ? "UTC" : "";
}
function WR() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var oe = ps.prototype;
oe.add = ND;
oe.calendar = BD;
oe.clone = WD;
oe.diff = KD;
oe.endOf = sR;
oe.format = JD;
oe.from = eR;
oe.fromNow = tR;
oe.to = nR;
oe.toNow = rR;
oe.get = Qk;
oe.invalidAt = hR;
oe.isAfter = YD;
oe.isBefore = zD;
oe.isBetween = UD;
oe.isSame = HD;
oe.isSameOrAfter = qD;
oe.isSameOrBefore = GD;
oe.isValid = fR;
oe.lang = om;
oe.locale = rm;
oe.localeData = sm;
oe.max = fD;
oe.min = dD;
oe.parsingFlags = pR;
oe.set = Jk;
oe.startOf = oR;
oe.subtract = $D;
oe.toArray = cR;
oe.toObject = uR;
oe.toDate = lR;
oe.toISOString = XD;
oe.inspect = QD;
typeof Symbol < "u" && Symbol.for != null && (oe[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
oe.toJSON = dR;
oe.toString = ZD;
oe.unix = aR;
oe.valueOf = iR;
oe.creationData = mR;
oe.eraName = vR;
oe.eraNarrow = xR;
oe.eraAbbr = SR;
oe.eraYear = wR;
oe.year = $h;
oe.isLeapYear = Xk;
oe.weekYear = DR;
oe.isoWeekYear = RR;
oe.quarter = oe.quarters = AR;
oe.month = Lh;
oe.daysInMonth = l1;
oe.week = oe.weeks = y1;
oe.isoWeek = oe.isoWeeks = g1;
oe.weeksInYear = IR;
oe.weeksInWeekYear = NR;
oe.isoWeeksInYear = MR;
oe.isoWeeksInISOWeekYear = _R;
oe.date = um;
oe.day = oe.days = R1;
oe.weekday = M1;
oe.isoWeekday = _1;
oe.dayOfYear = FR;
oe.hour = oe.hours = V1;
oe.minute = oe.minutes = jR;
oe.second = oe.seconds = VR;
oe.millisecond = oe.milliseconds = dm;
oe.utcOffset = SD;
oe.utc = PD;
oe.local = OD;
oe.parseZone = CD;
oe.hasAlignedHourOffset = ED;
oe.isDST = TD;
oe.isLocal = DD;
oe.isUtcOffset = RD;
oe.isUtc = Jh;
oe.isUTC = Jh;
oe.zoneAbbr = BR;
oe.zoneName = WR;
oe.dates = Ut(
  "dates accessor is deprecated. Use date instead.",
  um
);
oe.months = Ut(
  "months accessor is deprecated. Use month instead",
  Lh
);
oe.years = Ut(
  "years accessor is deprecated. Use year instead",
  $h
);
oe.zone = Ut(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  wD
);
oe.isDSTShifted = Ut(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  kD
);
function YR(e) {
  return Xe(e * 1e3);
}
function zR() {
  return Xe.apply(null, arguments).parseZone();
}
function fm(e) {
  return e;
}
var $e = hc.prototype;
$e.calendar = Dk;
$e.longDateFormat = Ik;
$e.invalidDate = $k;
$e.ordinal = jk;
$e.preparse = fm;
$e.postformat = fm;
$e.relativeTime = Lk;
$e.pastFuture = Bk;
$e.set = Tk;
$e.eras = yR;
$e.erasParse = gR;
$e.erasConvertYear = bR;
$e.erasAbbrRegex = OR;
$e.erasNameRegex = PR;
$e.erasNarrowRegex = CR;
$e.months = o1;
$e.monthsShort = s1;
$e.monthsParse = a1;
$e.monthsRegex = u1;
$e.monthsShortRegex = c1;
$e.week = f1;
$e.firstDayOfYear = m1;
$e.firstDayOfWeek = h1;
$e.weekdays = C1;
$e.weekdaysMin = T1;
$e.weekdaysShort = E1;
$e.weekdaysParse = D1;
$e.weekdaysRegex = I1;
$e.weekdaysShortRegex = N1;
$e.weekdaysMinRegex = $1;
$e.isPM = F1;
$e.meridiem = L1;
function ri(e, t, n, r) {
  var s = Mn(), i = yn().set(r, t);
  return s[n](i, e);
}
function pm(e, t, n) {
  if (kn(e) && (t = e, e = void 0), e = e || "", t != null)
    return ri(e, t, n, "month");
  var r, s = [];
  for (r = 0; r < 12; r++)
    s[r] = ri(e, r, n, "month");
  return s;
}
function _c(e, t, n, r) {
  typeof e == "boolean" ? (kn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, kn(t) && (n = t, t = void 0), t = t || "");
  var s = Mn(), i = e ? s._week.dow : 0, a, l = [];
  if (n != null)
    return ri(t, (n + i) % 7, r, "day");
  for (a = 0; a < 7; a++)
    l[a] = ri(t, (a + i) % 7, r, "day");
  return l;
}
function UR(e, t) {
  return pm(e, t, "months");
}
function HR(e, t) {
  return pm(e, t, "monthsShort");
}
function qR(e, t, n) {
  return _c(e, t, n, "weekdays");
}
function GR(e, t, n) {
  return _c(e, t, n, "weekdaysShort");
}
function KR(e, t, n) {
  return _c(e, t, n, "weekdaysMin");
}
Bn("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = ke(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
ce.lang = Ut(
  "moment.lang is deprecated. Use moment.locale instead.",
  Bn
);
ce.langData = Ut(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Mn
);
var bn = Math.abs;
function ZR() {
  var e = this._data;
  return this._milliseconds = bn(this._milliseconds), this._days = bn(this._days), this._months = bn(this._months), e.milliseconds = bn(e.milliseconds), e.seconds = bn(e.seconds), e.minutes = bn(e.minutes), e.hours = bn(e.hours), e.months = bn(e.months), e.years = bn(e.years), this;
}
function hm(e, t, n, r) {
  var s = nn(t, n);
  return e._milliseconds += r * s._milliseconds, e._days += r * s._days, e._months += r * s._months, e._bubble();
}
function XR(e, t) {
  return hm(this, e, t, 1);
}
function QR(e, t) {
  return hm(this, e, t, -1);
}
function zd(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function JR() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, s, i, a, l, c;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += zd(el(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, s = Vt(e / 1e3), r.seconds = s % 60, i = Vt(s / 60), r.minutes = i % 60, a = Vt(i / 60), r.hours = a % 24, t += Vt(a / 24), c = Vt(mm(t)), n += c, t -= zd(el(c)), l = Vt(n / 12), n %= 12, r.days = t, r.months = n, r.years = l, this;
}
function mm(e) {
  return e * 4800 / 146097;
}
function el(e) {
  return e * 146097 / 4800;
}
function eM(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Ht(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + mm(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(el(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      // Math.floor prevents floating point math errors here
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function _n(e) {
  return function() {
    return this.as(e);
  };
}
var ym = _n("ms"), tM = _n("s"), nM = _n("m"), rM = _n("h"), oM = _n("d"), sM = _n("w"), iM = _n("M"), aM = _n("Q"), lM = _n("y"), cM = ym;
function uM() {
  return nn(this);
}
function dM(e) {
  return e = Ht(e), this.isValid() ? this[e + "s"]() : NaN;
}
function yr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var fM = yr("milliseconds"), pM = yr("seconds"), hM = yr("minutes"), mM = yr("hours"), yM = yr("days"), gM = yr("months"), bM = yr("years");
function vM() {
  return Vt(this.days() / 7);
}
var vn = Math.round, Dr = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function xM(e, t, n, r, s) {
  return s.relativeTime(t || 1, !!n, e, r);
}
function SM(e, t, n, r) {
  var s = nn(e).abs(), i = vn(s.as("s")), a = vn(s.as("m")), l = vn(s.as("h")), c = vn(s.as("d")), u = vn(s.as("M")), d = vn(s.as("w")), p = vn(s.as("y")), h = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || a <= 1 && ["m"] || a < n.m && ["mm", a] || l <= 1 && ["h"] || l < n.h && ["hh", l] || c <= 1 && ["d"] || c < n.d && ["dd", c];
  return n.w != null && (h = h || d <= 1 && ["w"] || d < n.w && ["ww", d]), h = h || u <= 1 && ["M"] || u < n.M && ["MM", u] || p <= 1 && ["y"] || ["yy", p], h[2] = t, h[3] = +e > 0, h[4] = r, xM.apply(null, h);
}
function wM(e) {
  return e === void 0 ? vn : typeof e == "function" ? (vn = e, !0) : !1;
}
function PM(e, t) {
  return Dr[e] === void 0 ? !1 : t === void 0 ? Dr[e] : (Dr[e] = t, e === "s" && (Dr.ss = t - 1), !0);
}
function OM(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Dr, s, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Dr, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), s = this.localeData(), i = SM(this, !n, r, s), n && (i = s.pastFuture(+this, i)), s.postformat(i);
}
var Ra = Math.abs;
function Or(e) {
  return (e > 0) - (e < 0) || +e;
}
function sa() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ra(this._milliseconds) / 1e3, t = Ra(this._days), n = Ra(this._months), r, s, i, a, l = this.asSeconds(), c, u, d, p;
  return l ? (r = Vt(e / 60), s = Vt(r / 60), e %= 60, r %= 60, i = Vt(n / 12), n %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = l < 0 ? "-" : "", u = Or(this._months) !== Or(l) ? "-" : "", d = Or(this._days) !== Or(l) ? "-" : "", p = Or(this._milliseconds) !== Or(l) ? "-" : "", c + "P" + (i ? u + i + "Y" : "") + (n ? u + n + "M" : "") + (t ? d + t + "D" : "") + (s || r || e ? "T" : "") + (s ? p + s + "H" : "") + (r ? p + r + "M" : "") + (e ? p + a + "S" : "")) : "P0D";
}
var Re = ra.prototype;
Re.isValid = gD;
Re.abs = ZR;
Re.add = XR;
Re.subtract = QR;
Re.as = eM;
Re.asMilliseconds = ym;
Re.asSeconds = tM;
Re.asMinutes = nM;
Re.asHours = rM;
Re.asDays = oM;
Re.asWeeks = sM;
Re.asMonths = iM;
Re.asQuarters = aM;
Re.asYears = lM;
Re.valueOf = cM;
Re._bubble = JR;
Re.clone = uM;
Re.get = dM;
Re.milliseconds = fM;
Re.seconds = pM;
Re.minutes = hM;
Re.hours = mM;
Re.days = yM;
Re.weeks = vM;
Re.months = gM;
Re.years = bM;
Re.humanize = OM;
Re.toISOString = sa;
Re.toString = sa;
Re.toJSON = sa;
Re.locale = rm;
Re.localeData = sm;
Re.toIsoString = Ut(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  sa
);
Re.lang = om;
ye("X", 0, 0, "unix");
ye("x", 0, 0, "valueOf");
me("x", Ji);
me("X", Uk);
qe("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
qe("x", function(e, t, n) {
  n._d = new Date(ke(e));
});
//! moment.js
ce.version = "2.30.1";
Ck(Xe);
ce.fn = oe;
ce.min = pD;
ce.max = hD;
ce.now = mD;
ce.utc = yn;
ce.unix = YR;
ce.months = UR;
ce.isDate = fs;
ce.locale = Bn;
ce.invalid = Ki;
ce.duration = nn;
ce.isMoment = Jt;
ce.weekdays = qR;
ce.parseZone = zR;
ce.localeData = Mn;
ce.isDuration = js;
ce.monthsShort = HR;
ce.weekdaysMin = KR;
ce.defineLocale = Oc;
ce.updateLocale = z1;
ce.locales = U1;
ce.weekdaysShort = GR;
ce.normalizeUnits = Ht;
ce.relativeTimeRounding = wM;
ce.relativeTimeThreshold = PM;
ce.calendarFormat = LD;
ce.prototype = oe;
ce.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const CM = {
  // Year
  Y: "year",
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  E: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 1
  },
  // eslint-disable-next-line id-denylist
  e: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 1
  },
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 1
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, EM = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  dayOfMonthFull: "Do",
  weekday: "dddd",
  weekdayShort: "ddd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, Ud = ["Missing timezone plugin", "To be able to use timezones, you have to pass the default export from `moment-timezone` to the `dateLibInstance` prop of `LocalizationProvider`", "Find more information on https://mui.com/x/react-date-pickers/timezone/#moment-and-timezone"].join(`
`);
class TM {
  isMUIAdapter = !0;
  isTimezoneCompatible = !0;
  lib = "moment";
  escapedCharacters = {
    start: "[",
    end: "]"
  };
  formatTokenMap = CM;
  constructor({
    locale: t,
    formats: n,
    instance: r
  } = {}) {
    this.moment = r || ce, this.locale = t, this.formats = y({}, EM, n);
  }
  setLocaleToValue = (t) => {
    const n = this.getCurrentLocaleCode();
    return n === t.locale() ? t : t.locale(n);
  };
  hasTimezonePlugin = () => typeof this.moment.tz < "u";
  createSystemDate = (t) => {
    const n = this.moment(t).local();
    return this.locale === void 0 ? n : n.locale(this.locale);
  };
  createUTCDate = (t) => {
    const n = this.moment.utc(t);
    return this.locale === void 0 ? n : n.locale(this.locale);
  };
  createTZDate = (t, n) => {
    if (!this.hasTimezonePlugin())
      throw new Error(Ud);
    const r = n === "default" ? this.moment(t) : this.moment.tz(t, n);
    return this.locale === void 0 ? r : r.locale(this.locale);
  };
  date = (t, n = "default") => t === null ? null : n === "UTC" ? this.createUTCDate(t) : n === "system" || n === "default" && !this.hasTimezonePlugin() ? this.createSystemDate(t) : this.createTZDate(t, n);
  getInvalidDate = () => this.moment(/* @__PURE__ */ new Date("Invalid Date"));
  getTimezone = (t) => {
    const n = t._z?.name, r = t.isUTC() ? "UTC" : "system";
    return n ?? this.moment.defaultZone?.name ?? r;
  };
  setTimezone = (t, n) => {
    if (this.getTimezone(t) === n)
      return t;
    if (n === "UTC")
      return t.clone().utc();
    if (n === "system")
      return t.clone().local();
    if (!this.hasTimezonePlugin()) {
      if (n !== "default")
        throw new Error(Ud);
      return t;
    }
    const r = n === "default" ? (
      // @ts-ignore
      this.moment.defaultZone?.name ?? "system"
    ) : n;
    if (r === "system")
      return t.clone().local();
    const s = t.clone();
    return s.tz(r), s;
  };
  toJsDate = (t) => t.toDate();
  parse = (t, n) => t === "" ? null : this.locale ? this.moment(t, n, this.locale, !0) : this.moment(t, n, !0);
  getCurrentLocaleCode = () => this.locale || ce.locale();
  is12HourCycleInCurrentLocale = () => /A|a/.test(ce.localeData(this.getCurrentLocaleCode()).longDateFormat("LT"));
  expandFormat = (t) => {
    const n = /(\[[^[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})|./g;
    return t.match(n).map((r) => {
      const s = r[0];
      return s === "L" || s === ";" ? ce.localeData(this.getCurrentLocaleCode()).longDateFormat(r) : r;
    }).join("");
  };
  isValid = (t) => t == null ? !1 : t.isValid();
  format = (t, n) => this.formatByString(t, this.formats[n]);
  formatByString = (t, n) => {
    const r = t.clone();
    return r.locale(this.getCurrentLocaleCode()), r.format(n);
  };
  formatNumber = (t) => t;
  isEqual = (t, n) => t === null && n === null ? !0 : t === null || n === null ? !1 : t.isSame(n);
  isSameYear = (t, n) => t.isSame(n, "year");
  isSameMonth = (t, n) => t.isSame(n, "month");
  isSameDay = (t, n) => t.isSame(n, "day");
  isSameHour = (t, n) => t.isSame(n, "hour");
  isAfter = (t, n) => t.isAfter(n);
  isAfterYear = (t, n) => t.isAfter(n, "year");
  isAfterDay = (t, n) => t.isAfter(n, "day");
  isBefore = (t, n) => t.isBefore(n);
  isBeforeYear = (t, n) => t.isBefore(n, "year");
  isBeforeDay = (t, n) => t.isBefore(n, "day");
  isWithinRange = (t, [n, r]) => t.isBetween(n, r, null, "[]");
  startOfYear = (t) => t.clone().startOf("year");
  startOfMonth = (t) => t.clone().startOf("month");
  startOfWeek = (t) => this.setLocaleToValue(t.clone()).startOf("week");
  startOfDay = (t) => t.clone().startOf("day");
  endOfYear = (t) => t.clone().endOf("year");
  endOfMonth = (t) => t.clone().endOf("month");
  endOfWeek = (t) => this.setLocaleToValue(t.clone()).endOf("week");
  endOfDay = (t) => t.clone().endOf("day");
  addYears = (t, n) => n < 0 ? t.clone().subtract(Math.abs(n), "years") : t.clone().add(n, "years");
  addMonths = (t, n) => n < 0 ? t.clone().subtract(Math.abs(n), "months") : t.clone().add(n, "months");
  addWeeks = (t, n) => n < 0 ? t.clone().subtract(Math.abs(n), "weeks") : t.clone().add(n, "weeks");
  addDays = (t, n) => n < 0 ? t.clone().subtract(Math.abs(n), "days") : t.clone().add(n, "days");
  addHours = (t, n) => n < 0 ? t.clone().subtract(Math.abs(n), "hours") : t.clone().add(n, "hours");
  addMinutes = (t, n) => n < 0 ? t.clone().subtract(Math.abs(n), "minutes") : t.clone().add(n, "minutes");
  addSeconds = (t, n) => n < 0 ? t.clone().subtract(Math.abs(n), "seconds") : t.clone().add(n, "seconds");
  getYear = (t) => t.get("year");
  getMonth = (t) => t.get("month");
  getDate = (t) => t.get("date");
  getHours = (t) => t.get("hours");
  getMinutes = (t) => t.get("minutes");
  getSeconds = (t) => t.get("seconds");
  getMilliseconds = (t) => t.get("milliseconds");
  setYear = (t, n) => t.clone().year(n);
  setMonth = (t, n) => t.clone().month(n);
  setDate = (t, n) => t.clone().date(n);
  setHours = (t, n) => t.clone().hours(n);
  setMinutes = (t, n) => t.clone().minutes(n);
  setSeconds = (t, n) => t.clone().seconds(n);
  setMilliseconds = (t, n) => t.clone().milliseconds(n);
  getDaysInMonth = (t) => t.daysInMonth();
  getWeekArray = (t) => {
    const n = this.startOfWeek(this.startOfMonth(t)), r = this.endOfWeek(this.endOfMonth(t));
    let s = 0, i = n, a = i.get("dayOfYear");
    const l = [];
    for (; i.isBefore(r); ) {
      const c = Math.floor(s / 7);
      l[c] = l[c] || [], l[c].push(i);
      const u = a;
      i = this.addDays(i, 1), a = i.get("dayOfYear"), u === a && (i = i.add(12, "h").startOf("day")), s += 1;
    }
    return l;
  };
  getWeekNumber = (t) => t.week();
  getDayOfWeek = (t) => t.day() + 1;
  getYearRange([t, n]) {
    const r = this.startOfYear(t), s = this.endOfYear(n), i = [];
    let a = r;
    for (; this.isBefore(a, s); )
      i.push(a), a = this.addYears(a, 1);
    return i;
  }
}
const kM = (e) => {
  const {
    name: t,
    formItemStyle: n,
    ref: r,
    value: s,
    width: i = "200px",
    height: a = "35px",
    formStyle: l = {},
    rest: c,
    rangeDate: u,
    renderError: d,
    getLabel: p,
    onChangeForm: h,
    onChange: b
  } = e;
  return /* @__PURE__ */ x.jsx(hr, { error: d(t), style: { ...n }, children: u ? /* @__PURE__ */ x.jsx("div", {}) : /* @__PURE__ */ x.jsx(wi, { dateAdapter: TM, children: /* @__PURE__ */ x.jsx(
    uc,
    {
      ref: r,
      sx: {
        width: i,
        height: a,
        ...l
      },
      label: p(),
      value: s ? ce(s) : null,
      slotProps: {
        textField: {
          variant: "standard",
          color: d(t) ? "error" : "primary",
          //! Logica para agregar ERROR
          "data-testid": c?.["data-testid"]
        }
      },
      defaultValue: s,
      onChange: (g, f) => {
        h(g), typeof b == "function" && b(g, f);
      },
      ...c
    }
  ) }) });
}, DM = (e) => {
  const {
    name: t,
    formItemStyle: n,
    ref: r,
    value: s,
    rest: i,
    tooltip: a,
    width: l = "200px",
    height: c = "35px",
    formStyle: u = {},
    placeholder: d,
    tooltipStr: p,
    options: h,
    loading: b,
    renderError: g,
    getLabel: f,
    onChangeForm: v,
    onChange: C,
    getTextTooltip: T
  } = e;
  return /* @__PURE__ */ x.jsx(hr, { error: g(t), style: { ...n }, children: /* @__PURE__ */ x.jsx(
    Rm,
    {
      title: a ? p?.filter((S) => !!S)?.length === 0 ? "" : /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx(Po, { direction: "column", children: p?.map((S) => /* @__PURE__ */ x.jsx("span", { children: S }, S)) }) }) : "",
      children: /* @__PURE__ */ x.jsx(
        Mm,
        {
          ref: r,
          id: t,
          style: {
            width: l,
            height: c,
            ...u
          },
          value: h?.find((S) => S.value === s) || null,
          options: h,
          loading: b,
          onChange: (S, w) => {
            //! validar
            v(w?.value), typeof C == "function" && C(w?.value, S), a && T();
          },
          renderInput: (S) => /* @__PURE__ */ x.jsx(
            tl,
            {
              ...S,
              value: h?.find((w) => w.value === s)?.label || "",
              label: f(),
              placeholder: d,
              error: !!g(t),
              variant: "standard"
            }
          ),
          ...i
        }
      )
    }
  ) });
}, Ma = (e) => {
  const {
    type: t,
    name: n,
    label: r,
    mode: s = "",
    options: i,
    required: a = !1,
    tooltip: l = !0
  } = e, { control: c, getFieldState: u, watch: d, formState: p, getValues: h } = Zo(), b = d(n), [g, f] = Hd([]), v = (S) => u(S, p)?.error?.message ?? "", C = () => r ? /* @__PURE__ */ x.jsx("div", { className: "label-form", children: /* @__PURE__ */ x.jsxs(
    "label",
    {
      htmlFor: n,
      title: r,
      style: {
        color: v(n) ? "#d32f2f" : "rgba(0, 0, 0, 0.87)"
      },
      children: [
        a && /* @__PURE__ */ x.jsx("span", { className: "form-required", children: "*" }),
        r
      ]
    }
  ) }) : /* @__PURE__ */ x.jsx(x.Fragment, {}), T = () => {
    const S = h(n);
    if (!S) {
      f([]);
      return;
    }
    f(typeof S == "string" ? [S] : typeof S == "object" ? s ? [...g, S.label] : [S.label] : [
      i?.find((w) => w?.value === S?.value)?.label
    ]);
  };
  return qd(() => {
    //! Se resetea el valor del tooltip
    l && !b && T();
  }, [b]), /* @__PURE__ */ x.jsx(
    hy,
    {
      control: c,
      name: n,
      render: ({ field: { onChange: S, value: w, ref: O } }) => {
        const R = {
          ref: O,
          getLabel: C,
          renderError: v,
          onChangeForm: S,
          value: w,
          ...e
        };
        switch (t) {
          case "input":
          default:
            return /* @__PURE__ */ x.jsx(my, { ...R });
          case "select":
            return /* @__PURE__ */ x.jsx(DM, { getTextTooltip: T, ...R });
          case "date":
            return /* @__PURE__ */ x.jsx(kM, { ...R });
          case "textarea":
            return /* @__PURE__ */ x.jsx(gy, { ...R });
          case "checkbox":
            return /* @__PURE__ */ x.jsx(by, { ...R });
          case "radio":
            return /* @__PURE__ */ x.jsx(vy, { ...R });
          case "switch":
            return /* @__PURE__ */ x.jsx(yy, { ...R });
        }
      }
    }
  );
}, WM = ({ children: e, onSubmit: t, methods: n, formItems: r }) => {
  const s = (i) => i.map((a, l) => Array.isArray(a) ? a[0].type === "radio" ? /* @__PURE__ */ x.jsx(Po, { direction: "row", gap: 4, children: /* @__PURE__ */ x.jsx(_m, { name: a[0].name, defaultValue: a[0].defaultValue, children: /* @__PURE__ */ x.jsx(Po, { direction: "row", gap: 4, children: a.map((c, u) => /* @__PURE__ */ x.jsx(Ma, { ...c }, `${l}-${u}`)) }, `${l}`) }) }, `${l}`) : /* @__PURE__ */ x.jsx(Po, { direction: "row", gap: 4, children: a.map((c, u) => /* @__PURE__ */ x.jsx(Ma, { ...c }, `${l}-${u}`)) }, `${l}`) : /* @__PURE__ */ x.jsx(Ma, { ...a }, l));
  return /* @__PURE__ */ x.jsx(ay, { ...n, children: /* @__PURE__ */ x.jsxs("form", { onSubmit: n.handleSubmit(t), children: [
    Array.isArray(r) && s(r),
    e
  ] }) });
}, YM = ({
  label: e,
  type: t,
  icon: n,
  disabledBoton: r,
  htmlType: s,
  ...i
}) => {
  const {
    formState: { isValid: a }
  } = Zo();
  return /* @__PURE__ */ x.jsx(
    _a,
    {
      label: e,
      icon: n,
      type: t,
      htmlType: s,
      disabled: r ? !a : !1,
      ...i
    }
  );
}, zM = () => /* @__PURE__ */ x.jsx("div", { children: "Esto es un hola mundo" });
export {
  _a as Boton,
  BM as ContainerComponent,
  jM as ContainerTitle,
  Po as Flex,
  YM as FormBoton,
  Ma as FormInput,
  hr as FormItem,
  WM as Formulario,
  zM as HolaMundo,
  VM as ModalPopup,
  LM as Spinner,
  Vr as ThemeWrapper
};
