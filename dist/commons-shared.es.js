(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("._success_g3916_9{background-color:var(--success)!important}._success_g3916_9:hover{background-color:var(--success-hover)!important}._danger_g3916_17{background-color:var(--danger)!important}._danger_g3916_17:hover{background-color:var(--danger-hover)!important}._warning_g3916_25{background-color:var(--warning)!important}._warning_g3916_25:hover{background-color:var(--warning-hover)!important}._default_g3916_33{background-color:var(--default)!important}._default_g3916_33:disabled{background-color:var(--disabled)!important}._default_g3916_33:hover{background-color:var(--default-hover)!important}._disabled_g3916_45{background-color:var(--disabled)}._boton_g3916_49{color:#fff!important;min-width:100px;margin:.5em .5em .5em 0}._boton_g3916_49:disabled{opacity:.5!important;cursor:not-allowed!important;background-color:#afafaf!important}.container-title{display:flex;flex-direction:row;align-items:center;padding:.5em 0 .5em 3em;gap:.5em}.container-title .title{font-size:1.7rem;font-weight:700!important;display:flex;align-items:center;gap:.2em;text-wrap:nowrap}.container-title .sub-title{font-size:1.5rem;font-weight:500!important;color:#202f95;text-wrap:nowrap}.container-title .container-line .hr-title{margin-top:.3em;background-color:#afafaf;border-top:1px solid #afafaf;border-bottom:1px solid #afafaf;height:1px}.sub-title{display:flex;gap:1em;justify-content:center;align-items:center}.item-modal{height:1.6em;width:1.5em}.modal-alertas .modal-alertas-header{background-color:#121a52;border-radius:8px 8px 0 0!important}.modal-alertas .modal-alertas-title{font-size:26px!important;font-weight:400;color:#fff;padding:6px 0}.modal-alertas .modal-description{padding:0 16px}.modal-alertas .ant-modal-content{border-radius:10px}.modal-alertas .span{font-size:12px;color:#fff}.spinner{margin:auto;align-items:center;justify-content:center;padding:5em}.container{background-color:#fff;margin:1em 2em;padding:1.5em 1.5em .5em;border-radius:5px}@media only screen and (max-width: 600px){.user{display:none!important}}.container-form-item{position:relative;flex-direction:column;gap:.5em;margin-bottom:1.5em;width:max-content}.label-form{font-size:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.error-message{color:#ff0003;position:absolute;top:100%;margin-top:10px}.form-required{color:#ff0003;font-size:12}.ant-select-selection-overflow{text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important;flex-wrap:nowrap!important;overflow-x:auto!important}.ant-select-selection-overflow::-webkit-scrollbar{width:3px;height:3px;cursor:all-scroll}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import * as m from "react";
import ve, { useState as vc, useEffect as xc, isValidElement as br, cloneElement as gr, Children as Jd } from "react";
import { createTheme as ep, ThemeProvider as tp, CssBaseline as np, Stack as op, Modal as rp, Box as yr, Typography as sp, CircularProgress as ip, Switch as ap, TextField as Os, Tooltip as lp, Autocomplete as cp } from "@mui/material";
import { LoadingButton as up } from "@mui/lab";
import { CacheProvider as dp, Global as pp, ThemeContext as Pc, css as fp, keyframes as Ar } from "@emotion/react";
import mp from "@emotion/styled";
import * as hp from "react-dom";
import sr from "react-dom";
function ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function en(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var o = function r() {
      var s = !1;
      try {
        s = this instanceof r;
      } catch {
      }
      return s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    o.prototype = t.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(o, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), o;
}
var ir = { exports: {} }, no = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ya;
function bp() {
  if (ya) return no;
  ya = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(r, s, i) {
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
  return no.Fragment = t, no.jsx = o, no.jsxs = o, no;
}
var oo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function gp() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === M ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case p:
          return "Fragment";
        case C:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case I:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case g:
            return "Portal";
          case S:
            return (R.displayName || "Context") + ".Provider";
          case T:
            return (R._context.displayName || "Context") + ".Consumer";
          case x:
            var _ = R.render;
            return R = R.displayName, R || (R = _.displayName || _.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case P:
            return _ = R.displayName || null, _ !== null ? _ : e(R.type) || "Memo";
          case w:
            _ = R._payload, R = R._init;
            try {
              return e(R(_));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function o(R) {
      try {
        t(R);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var q = _.error, K = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return q.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(R);
      }
    }
    function r(R) {
      if (R === p) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === w)
        return "<...>";
      try {
        var _ = e(R);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var R = N.A;
      return R === null ? null : R.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(R) {
      if (D.call(R, "key")) {
        var _ = Object.getOwnPropertyDescriptor(R, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, _) {
      function q() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      q.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: q,
        configurable: !0
      });
    }
    function c() {
      var R = e(this.type);
      return j[R] || (j[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function u(R, _, q, K, H, X, Q, oe) {
      return q = X.ref, R = {
        $$typeof: y,
        type: R,
        key: _,
        props: X,
        _owner: H
      }, (q !== void 0 ? q : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(R, "ref", { enumerable: !1, value: null }), R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(R, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(R, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function d(R, _, q, K, H, X, Q, oe) {
      var ee = _.children;
      if (ee !== void 0)
        if (K)
          if (F(ee)) {
            for (K = 0; K < ee.length; K++)
              f(ee[K]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ee);
      if (D.call(_, "key")) {
        ee = e(R);
        var J = Object.keys(_).filter(function(U) {
          return U !== "key";
        });
        K = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", B[ee + K] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          ee,
          J,
          ee
        ), B[ee + K] = !0);
      }
      if (ee = null, q !== void 0 && (o(q), ee = "" + q), a(_) && (o(_.key), ee = "" + _.key), "key" in _) {
        q = {};
        for (var Y in _)
          Y !== "key" && (q[Y] = _[Y]);
      } else q = _;
      return ee && l(
        q,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), u(
        R,
        ee,
        X,
        H,
        s(),
        q,
        Q,
        oe
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === y && R._store && (R._store.validated = 1);
    }
    var h = ve, y = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), S = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), N = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, F = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var V, j = {}, A = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), L = $(r(i)), B = {};
    oo.Fragment = p, oo.jsx = function(R, _, q, K, H) {
      var X = 1e4 > N.recentlyCreatedOwnerStacks++;
      return d(
        R,
        _,
        q,
        !1,
        K,
        H,
        X ? Error("react-stack-top-frame") : A,
        X ? $(r(R)) : L
      );
    }, oo.jsxs = function(R, _, q, K, H) {
      var X = 1e4 > N.recentlyCreatedOwnerStacks++;
      return d(
        R,
        _,
        q,
        !0,
        K,
        H,
        X ? Error("react-stack-top-frame") : A,
        X ? $(r(R)) : L
      );
    };
  })()), oo;
}
var xa;
function yp() {
  return xa || (xa = 1, process.env.NODE_ENV === "production" ? ir.exports = bp() : ir.exports = gp()), ir.exports;
}
var O = yp();
const vp = {
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
          count: o
        }) => `${e}–${t} de ${o !== -1 ? o : `más de ${t}`}`
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
        getItemAriaLabel: (e, t, o) => e === "page" ? `${o ? "" : "Ir a la "}página ${t}` : e === "first" ? "Ir a la primera página" : e === "last" ? "Ir a la última página" : e === "next" ? "Ir a la página siguiente" : "Ir a la página anterior"
      }
    }
  }
}, xp = ep(
  {
    palette: {
      primary: {
        main: "#121A52",
        light: "#121A52",
        dark: "#0c1342"
      },
      secondary: {
        main: "#202F95EB",
        light: "#3c4ebeeb",
        dark: "#1b2980eb"
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
      }
    }
  },
  vp
), Wo = ({ children: e }) => /* @__PURE__ */ O.jsxs(tp, { theme: xp, children: [
  /* @__PURE__ */ O.jsx(np, {}),
  e
] }), Pp = "_boton_g3916_49", Cp = {
  boton: Pp
}, Cc = () => {
  const [e, t] = vc(!1);
  return xc(() => {
    t(!0);
  }, []), { isReady: e };
}, Ys = ({
  label: e,
  color: t,
  onClick: o,
  disabled: r,
  htmlType: s,
  icon: i,
  size: a,
  style: l,
  loading: c,
  ...u
}) => {
  const { isReady: d } = Cc(), f = () => /* @__PURE__ */ O.jsx(Wo, { children: /* @__PURE__ */ O.jsx(
    up,
    {
      ...u,
      variant: "contained",
      size: a || "small",
      type: s,
      onClick: o,
      className: `${Cp.boton}`,
      color: t,
      disabled: r,
      style: l,
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
        padding: c ? "0px 0px 0px 20px" : "0px 20px 0px 20px",
        "& .MuiLoadingButton-loadingIndicator": {
          position: "relative",
          margin: 0,
          padding: 0
        }
      },
      children: e
    }
  ) });
  return d && (() => {
    switch (t) {
      case "success":
      case "error":
      case "warning":
        return /* @__PURE__ */ O.jsx(f, {});
      case "primary":
      default:
        return /* @__PURE__ */ O.jsx(f, {});
    }
  })();
}, QE = ({ title: e, subTitle: t }) => {
  const { isReady: o } = Cc();
  return /* @__PURE__ */ O.jsx(Wo, { children: /* @__PURE__ */ O.jsx("div", { className: "container-title ", children: /* @__PURE__ */ O.jsx("div", { className: "title", children: /* @__PURE__ */ O.jsxs(
    "span",
    {
      style: { color: o ? "rgba(0, 0, 0, 0.88)" : "transparent" },
      children: [
        t ? `${e?.trim()}:` : e?.trim(),
        t
      ]
    }
  ) }) }) });
}, Sc = ({
  className: e,
  alignItems: t,
  alignContent: o,
  justifyItems: r,
  justifySelf: s,
  alignSelf: i,
  justifyContent: a,
  flex: l,
  direction: c,
  gap: u,
  style: d,
  spacing: f,
  children: h,
  sx: y,
  useFlexGap: g,
  flexWrap: p,
  ...v
}) => /* @__PURE__ */ O.jsx(
  op,
  {
    flexWrap: p,
    className: e,
    alignItems: t,
    direction: c || "row",
    alignContent: o || "flex-start",
    justifyItems: r || "initial",
    justifySelf: s || "initial",
    alignSelf: i || "initial",
    gap: u || 0,
    justifyContent: a || "initial",
    spacing: f,
    style: d,
    sx: y,
    flex: l,
    useFlexGap: g,
    ...v,
    children: h
  }
), ZE = ({
  title: e,
  open: t,
  width: o,
  icon: r,
  children: s = !1,
  centered: i,
  onClose: a,
  onExecuteCallback: l,
  ...c
}) => /* @__PURE__ */ O.jsx(Wo, { children: /* @__PURE__ */ O.jsx(
  rp,
  {
    open: t,
    onClose: a,
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
    ...c,
    children: /* @__PURE__ */ O.jsxs(
      yr,
      {
        className: "modal-alertas",
        sx: {
          position: "absolute",
          top: i ? "50%" : "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: o ?? 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          padding: 0
        },
        children: [
          /* @__PURE__ */ O.jsxs(
            yr,
            {
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              className: "modal-alertas-header",
              children: [
                r != null && /* @__PURE__ */ O.jsx("div", { className: "item-modal", children: r }),
                /* @__PURE__ */ O.jsx(
                  sp,
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
          /* @__PURE__ */ O.jsxs(yr, { id: "modal-description", className: "modal-description", children: [
            s,
            /* @__PURE__ */ O.jsxs(Sc, { gap: 3, sx: { paddingBottom: "10px", marginTop: "0.5em" }, direction: "row-reverse", children: [
              /* @__PURE__ */ O.jsx(
                Ys,
                {
                  id: "btn-aceptar",
                  "data-testid": "btn-aceptar",
                  htmlType: "button",
                  label: "Aceptar",
                  color: "success",
                  onClick: () => {
                    a(), l();
                  }
                }
              ),
              /* @__PURE__ */ O.jsx(
                Ys,
                {
                  "data-testid": "btn-cancelar",
                  label: "Cancelar",
                  htmlType: "button",
                  color: "error",
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
) }), JE = ({ styles: e, config: t }) => /* @__PURE__ */ O.jsx(Wo, { children: /* @__PURE__ */ O.jsx(yr, { className: "d-flex spinner", style: e, children: /* @__PURE__ */ O.jsx(ip, { sx: t }) }) }), eO = ({ children: e, ...t }) => /* @__PURE__ */ O.jsx(Wo, { children: /* @__PURE__ */ O.jsx("div", { className: "container", ...t, children: e }) });
var Sp = (e) => e.type === "checkbox", vo = (e) => e instanceof Date, ui = (e) => e == null;
const Ec = (e) => typeof e == "object";
var yn = (e) => !ui(e) && !Array.isArray(e) && Ec(e) && !vo(e), Ep = (e) => yn(e) && e.target ? Sp(e.target) ? e.target.checked : e.target.value : e, Op = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, wp = (e, t) => e.has(Op(t)), Tp = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return yn(t) && t.hasOwnProperty("isPrototypeOf");
}, Rp = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Oc(e) {
  let t;
  const o = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(Rp && (e instanceof Blob || r)) && (o || yn(e)))
    if (t = o ? [] : Object.create(Object.getPrototypeOf(e)), !o && !Tp(e))
      t = e;
    else
      for (const s in e)
        e.hasOwnProperty(s) && (t[s] = Oc(e[s]));
  else
    return e;
  return t;
}
var wc = (e) => /^\w*$/.test(e), Ks = (e) => e === void 0, kp = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Tc = (e) => kp(e.replace(/["|']|\]/g, "").split(/\.|\[/)), ct = (e, t, o) => {
  if (!t || !yn(e))
    return o;
  const r = (wc(t) ? [t] : Tc(t)).reduce((s, i) => ui(s) ? s : s[i], e);
  return Ks(r) || r === e ? Ks(e[t]) ? o : e[t] : r;
}, ws = (e) => typeof e == "boolean", Pa = (e, t, o) => {
  let r = -1;
  const s = wc(t) ? [t] : Tc(t), i = s.length, a = i - 1;
  for (; ++r < i; ) {
    const l = s[r];
    let c = o;
    if (r !== a) {
      const u = e[l];
      c = yn(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : [];
    }
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return;
    e[l] = c, e = e[l];
  }
};
const Ca = {
  BLUR: "blur",
  CHANGE: "change"
}, Sa = {
  all: "all"
}, di = ve.createContext(null);
di.displayName = "HookFormContext";
const zo = () => ve.useContext(di), Dp = (e) => {
  const { children: t, ...o } = e;
  return ve.createElement(di.Provider, { value: o }, t);
};
var Mp = (e, t, o, r = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(s, i, {
      get: () => {
        const a = i;
        return t._proxyFormState[a] !== Sa.all && (t._proxyFormState[a] = !r || Sa.all), o && (o[a] = !0), e[a];
      }
    });
  return s;
};
const Rc = typeof window < "u" ? ve.useLayoutEffect : ve.useEffect;
function Ip(e) {
  const t = zo(), { control: o = t.control, disabled: r, name: s, exact: i } = e || {}, [a, l] = ve.useState(o._formState), c = ve.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Rc(() => o._subscribe({
    name: s,
    formState: c.current,
    exact: i,
    callback: (u) => {
      !r && l({
        ...o._formState,
        ...u
      });
    }
  }), [s, r, i]), ve.useEffect(() => {
    c.current.isValid && o._setValid(!0);
  }, [o]), ve.useMemo(() => Mp(a, o, c.current, !1), [a, o]);
}
var Np = (e) => typeof e == "string", $p = (e, t, o, r, s) => Np(e) ? ct(o, e, s) : Array.isArray(e) ? e.map((i) => ct(o, i)) : o, Ea = (e) => ui(e) || !Ec(e);
function kc(e, t, o = /* @__PURE__ */ new WeakSet()) {
  if (Ea(e) || Ea(t))
    return e === t;
  if (vo(e) && vo(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), s = Object.keys(t);
  if (r.length !== s.length)
    return !1;
  if (o.has(e) || o.has(t))
    return !0;
  o.add(e), o.add(t);
  for (const i of r) {
    const a = e[i];
    if (!s.includes(i))
      return !1;
    if (i !== "ref") {
      const l = t[i];
      if (vo(a) && vo(l) || yn(a) && yn(l) || Array.isArray(a) && Array.isArray(l) ? !kc(a, l, o) : a !== l)
        return !1;
    }
  }
  return !0;
}
function Ap(e) {
  const t = zo(), { control: o = t.control, name: r, defaultValue: s, disabled: i, exact: a, compute: l } = e || {}, c = ve.useRef(s), u = ve.useRef(l), d = ve.useRef(void 0);
  u.current = l;
  const f = ve.useMemo(() => o._getWatch(r, c.current), [o, r]), [h, y] = ve.useState(u.current ? u.current(f) : f);
  return Rc(() => o._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: a,
    callback: (g) => {
      if (!i) {
        const p = $p(r, o._names, g.values || o._formValues, !1, c.current);
        if (u.current) {
          const v = u.current(p);
          kc(v, d.current) || (y(v), d.current = v);
        } else
          y(p);
      }
    }
  }), [o, i, r, a]), ve.useEffect(() => o._removeUnmounted()), h;
}
function jp(e) {
  const t = zo(), { name: o, disabled: r, control: s = t.control, shouldUnregister: i, defaultValue: a } = e, l = wp(s._names.array, o), c = ve.useMemo(() => ct(s._formValues, o, ct(s._defaultValues, o, a)), [s, o, a]), u = Ap({
    control: s,
    name: o,
    defaultValue: c,
    exact: !0
  }), d = Ip({
    control: s,
    name: o,
    exact: !0
  }), f = ve.useRef(e), h = ve.useRef(void 0), y = ve.useRef(s.register(o, {
    ...e.rules,
    value: u,
    ...ws(e.disabled) ? { disabled: e.disabled } : {}
  }));
  f.current = e;
  const g = ve.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!ct(d.errors, o)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!ct(d.dirtyFields, o)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!ct(d.touchedFields, o)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!ct(d.validatingFields, o)
    },
    error: {
      enumerable: !0,
      get: () => ct(d.errors, o)
    }
  }), [d, o]), p = ve.useCallback((S) => y.current.onChange({
    target: {
      value: Ep(S),
      name: o
    },
    type: Ca.CHANGE
  }), [o]), v = ve.useCallback(() => y.current.onBlur({
    target: {
      value: ct(s._formValues, o),
      name: o
    },
    type: Ca.BLUR
  }), [o, s._formValues]), C = ve.useCallback((S) => {
    const x = ct(s._fields, o);
    x && S && (x._f.ref = {
      focus: () => S.focus && S.focus(),
      select: () => S.select && S.select(),
      setCustomValidity: (E) => S.setCustomValidity(E),
      reportValidity: () => S.reportValidity()
    });
  }, [s._fields, o]), T = ve.useMemo(() => ({
    name: o,
    value: u,
    ...ws(r) || d.disabled ? { disabled: d.disabled || r } : {},
    onChange: p,
    onBlur: v,
    ref: C
  }), [o, r, d.disabled, p, v, C, u]);
  return ve.useEffect(() => {
    const S = s._options.shouldUnregister || i, x = h.current;
    x && x !== o && !l && s.unregister(x), s.register(o, {
      ...f.current.rules,
      ...ws(f.current.disabled) ? { disabled: f.current.disabled } : {}
    });
    const E = (I, P) => {
      const w = ct(s._fields, I);
      w && w._f && (w._f.mount = P);
    };
    if (E(o, !0), S) {
      const I = Oc(ct(s._options.defaultValues, o));
      Pa(s._defaultValues, o, I), Ks(ct(s._formValues, o)) && Pa(s._formValues, o, I);
    }
    return !l && s.register(o), h.current = o, () => {
      (l ? S && !s._state.action : S) ? s.unregister(o) : E(o, !1);
    };
  }, [o, s, l, i]), ve.useEffect(() => {
    s._setDisabledField({
      disabled: r,
      name: o
    });
  }, [r, o, s]), ve.useMemo(() => ({
    field: T,
    formState: d,
    fieldState: g
  }), [T, d, g]);
}
const ro = (e) => e.render(jp(e)), tO = ({ children: e, onSubmit: t, methods: o }) => /* @__PURE__ */ O.jsx(Dp, { ...o, children: /* @__PURE__ */ O.jsx("form", { onSubmit: o.handleSubmit(t), children: e }) }), nO = ({
  label: e,
  type: t,
  icon: o,
  disabledBoton: r,
  htmlType: s,
  ...i
}) => {
  const {
    formState: { isValid: a }
  } = zo();
  return /* @__PURE__ */ O.jsx(
    Ys,
    {
      label: e,
      icon: o,
      type: t,
      htmlType: s,
      disabled: r ? !a : !1,
      ...i
    }
  );
};
function b() {
  return b = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, b.apply(null, arguments);
}
function te(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    o[r] = e[r];
  }
  return o;
}
var ar = { exports: {} }, lr = { exports: {} }, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function Fp() {
  if (Oa) return ke;
  Oa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var I = E.$$typeof;
      switch (I) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case r:
            case i:
            case s:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case d:
                case g:
                case y:
                case a:
                  return E;
                default:
                  return I;
              }
          }
        case o:
          return I;
      }
    }
  }
  function x(E) {
    return S(E) === u;
  }
  return ke.AsyncMode = c, ke.ConcurrentMode = u, ke.ContextConsumer = l, ke.ContextProvider = a, ke.Element = t, ke.ForwardRef = d, ke.Fragment = r, ke.Lazy = g, ke.Memo = y, ke.Portal = o, ke.Profiler = i, ke.StrictMode = s, ke.Suspense = f, ke.isAsyncMode = function(E) {
    return x(E) || S(E) === c;
  }, ke.isConcurrentMode = x, ke.isContextConsumer = function(E) {
    return S(E) === l;
  }, ke.isContextProvider = function(E) {
    return S(E) === a;
  }, ke.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, ke.isForwardRef = function(E) {
    return S(E) === d;
  }, ke.isFragment = function(E) {
    return S(E) === r;
  }, ke.isLazy = function(E) {
    return S(E) === g;
  }, ke.isMemo = function(E) {
    return S(E) === y;
  }, ke.isPortal = function(E) {
    return S(E) === o;
  }, ke.isProfiler = function(E) {
    return S(E) === i;
  }, ke.isStrictMode = function(E) {
    return S(E) === s;
  }, ke.isSuspense = function(E) {
    return S(E) === f;
  }, ke.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === u || E === i || E === s || E === f || E === h || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === y || E.$$typeof === a || E.$$typeof === l || E.$$typeof === d || E.$$typeof === v || E.$$typeof === C || E.$$typeof === T || E.$$typeof === p);
  }, ke.typeOf = S, ke;
}
var De = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function Vp() {
  return wa || (wa = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === r || W === u || W === i || W === s || W === f || W === h || typeof W == "object" && W !== null && (W.$$typeof === g || W.$$typeof === y || W.$$typeof === a || W.$$typeof === l || W.$$typeof === d || W.$$typeof === v || W.$$typeof === C || W.$$typeof === T || W.$$typeof === p);
    }
    function x(W) {
      if (typeof W == "object" && W !== null) {
        var ne = W.$$typeof;
        switch (ne) {
          case t:
            var Z = W.type;
            switch (Z) {
              case c:
              case u:
              case r:
              case i:
              case s:
              case f:
                return Z;
              default:
                var ie = Z && Z.$$typeof;
                switch (ie) {
                  case l:
                  case d:
                  case g:
                  case y:
                  case a:
                    return ie;
                  default:
                    return ne;
                }
            }
          case o:
            return ne;
        }
      }
    }
    var E = c, I = u, P = l, w = a, k = t, M = d, N = r, D = g, F = y, $ = o, V = i, j = s, A = f, L = !1;
    function B(W) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(W) || x(W) === c;
    }
    function R(W) {
      return x(W) === u;
    }
    function _(W) {
      return x(W) === l;
    }
    function q(W) {
      return x(W) === a;
    }
    function K(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function H(W) {
      return x(W) === d;
    }
    function X(W) {
      return x(W) === r;
    }
    function Q(W) {
      return x(W) === g;
    }
    function oe(W) {
      return x(W) === y;
    }
    function ee(W) {
      return x(W) === o;
    }
    function J(W) {
      return x(W) === i;
    }
    function Y(W) {
      return x(W) === s;
    }
    function U(W) {
      return x(W) === f;
    }
    De.AsyncMode = E, De.ConcurrentMode = I, De.ContextConsumer = P, De.ContextProvider = w, De.Element = k, De.ForwardRef = M, De.Fragment = N, De.Lazy = D, De.Memo = F, De.Portal = $, De.Profiler = V, De.StrictMode = j, De.Suspense = A, De.isAsyncMode = B, De.isConcurrentMode = R, De.isContextConsumer = _, De.isContextProvider = q, De.isElement = K, De.isForwardRef = H, De.isFragment = X, De.isLazy = Q, De.isMemo = oe, De.isPortal = ee, De.isProfiler = J, De.isStrictMode = Y, De.isSuspense = U, De.isValidElementType = S, De.typeOf = x;
  })()), De;
}
var Ta;
function Dc() {
  return Ta || (Ta = 1, process.env.NODE_ENV === "production" ? lr.exports = Fp() : lr.exports = Vp()), lr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ts, Ra;
function _p() {
  if (Ra) return Ts;
  Ra = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
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
  return Ts = s() ? Object.assign : function(i, a) {
    for (var l, c = r(i), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          o.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, Ts;
}
var Rs, ka;
function pi() {
  if (ka) return Rs;
  ka = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rs = e, Rs;
}
var ks, Da;
function Mc() {
  return Da || (Da = 1, ks = Function.call.bind(Object.prototype.hasOwnProperty)), ks;
}
var Ds, Ma;
function Lp() {
  if (Ma) return Ds;
  Ma = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ pi(), o = {}, r = /* @__PURE__ */ Mc();
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
          var f;
          try {
            if (typeof i[d] != "function") {
              var h = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = i[d](a, d, c, l, null, t);
          } catch (g) {
            f = g;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in o)) {
            o[f.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (y ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Ds = s, Ds;
}
var Ms, Ia;
function Bp() {
  if (Ia) return Ms;
  Ia = 1;
  var e = Dc(), t = _p(), o = /* @__PURE__ */ pi(), r = /* @__PURE__ */ Mc(), s = /* @__PURE__ */ Lp(), i = function() {
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
  return Ms = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(R) {
      var _ = R && (u && R[u] || R[d]);
      if (typeof _ == "function")
        return _;
    }
    var h = "<<anonymous>>", y = {
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
      element: x(),
      elementType: E(),
      instanceOf: I,
      node: M(),
      objectOf: w,
      oneOf: P,
      oneOfType: k,
      shape: D,
      exact: F
    };
    function g(R, _) {
      return R === _ ? R !== 0 || 1 / R === 1 / _ : R !== R && _ !== _;
    }
    function p(R, _) {
      this.message = R, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function v(R) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, q = 0;
      function K(X, Q, oe, ee, J, Y, U) {
        if (ee = ee || h, Y = Y || oe, U !== o) {
          if (c) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = ee + ":" + oe;
            !_[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ne] = !0, q++);
          }
        }
        return Q[oe] == null ? X ? Q[oe] === null ? new p("The " + J + " `" + Y + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new p("The " + J + " `" + Y + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : R(Q, oe, ee, J, Y);
      }
      var H = K.bind(null, !1);
      return H.isRequired = K.bind(null, !0), H;
    }
    function C(R) {
      function _(q, K, H, X, Q, oe) {
        var ee = q[K], J = j(ee);
        if (J !== R) {
          var Y = A(ee);
          return new p(
            "Invalid " + X + " `" + Q + "` of type " + ("`" + Y + "` supplied to `" + H + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return v(_);
    }
    function T() {
      return v(a);
    }
    function S(R) {
      function _(q, K, H, X, Q) {
        if (typeof R != "function")
          return new p("Property `" + Q + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var oe = q[K];
        if (!Array.isArray(oe)) {
          var ee = j(oe);
          return new p("Invalid " + X + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected an array."));
        }
        for (var J = 0; J < oe.length; J++) {
          var Y = R(oe, J, H, X, Q + "[" + J + "]", o);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return v(_);
    }
    function x() {
      function R(_, q, K, H, X) {
        var Q = _[q];
        if (!l(Q)) {
          var oe = j(Q);
          return new p("Invalid " + H + " `" + X + "` of type " + ("`" + oe + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(R);
    }
    function E() {
      function R(_, q, K, H, X) {
        var Q = _[q];
        if (!e.isValidElementType(Q)) {
          var oe = j(Q);
          return new p("Invalid " + H + " `" + X + "` of type " + ("`" + oe + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(R);
    }
    function I(R) {
      function _(q, K, H, X, Q) {
        if (!(q[K] instanceof R)) {
          var oe = R.name || h, ee = B(q[K]);
          return new p("Invalid " + X + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return v(_);
    }
    function P(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(q, K, H, X, Q) {
        for (var oe = q[K], ee = 0; ee < R.length; ee++)
          if (g(oe, R[ee]))
            return null;
        var J = JSON.stringify(R, function(U, W) {
          var ne = A(W);
          return ne === "symbol" ? String(W) : W;
        });
        return new p("Invalid " + X + " `" + Q + "` of value `" + String(oe) + "` " + ("supplied to `" + H + "`, expected one of " + J + "."));
      }
      return v(_);
    }
    function w(R) {
      function _(q, K, H, X, Q) {
        if (typeof R != "function")
          return new p("Property `" + Q + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var oe = q[K], ee = j(oe);
        if (ee !== "object")
          return new p("Invalid " + X + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected an object."));
        for (var J in oe)
          if (r(oe, J)) {
            var Y = R(oe, J, H, X, Q + "." + J, o);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return v(_);
    }
    function k(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < R.length; _++) {
        var q = R[_];
        if (typeof q != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(q) + " at index " + _ + "."
          ), a;
      }
      function K(H, X, Q, oe, ee) {
        for (var J = [], Y = 0; Y < R.length; Y++) {
          var U = R[Y], W = U(H, X, Q, oe, ee, o);
          if (W == null)
            return null;
          W.data && r(W.data, "expectedType") && J.push(W.data.expectedType);
        }
        var ne = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new p("Invalid " + oe + " `" + ee + "` supplied to " + ("`" + Q + "`" + ne + "."));
      }
      return v(K);
    }
    function M() {
      function R(_, q, K, H, X) {
        return $(_[q]) ? null : new p("Invalid " + H + " `" + X + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return v(R);
    }
    function N(R, _, q, K, H) {
      return new p(
        (R || "React class") + ": " + _ + " type `" + q + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function D(R) {
      function _(q, K, H, X, Q) {
        var oe = q[K], ee = j(oe);
        if (ee !== "object")
          return new p("Invalid " + X + " `" + Q + "` of type `" + ee + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var J in R) {
          var Y = R[J];
          if (typeof Y != "function")
            return N(H, X, Q, J, A(Y));
          var U = Y(oe, J, H, X, Q + "." + J, o);
          if (U)
            return U;
        }
        return null;
      }
      return v(_);
    }
    function F(R) {
      function _(q, K, H, X, Q) {
        var oe = q[K], ee = j(oe);
        if (ee !== "object")
          return new p("Invalid " + X + " `" + Q + "` of type `" + ee + "` " + ("supplied to `" + H + "`, expected `object`."));
        var J = t({}, q[K], R);
        for (var Y in J) {
          var U = R[Y];
          if (r(R, Y) && typeof U != "function")
            return N(H, X, Q, Y, A(U));
          if (!U)
            return new p(
              "Invalid " + X + " `" + Q + "` key `" + Y + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(q[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var W = U(oe, Y, H, X, Q + "." + Y, o);
          if (W)
            return W;
        }
        return null;
      }
      return v(_);
    }
    function $(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every($);
          if (R === null || l(R))
            return !0;
          var _ = f(R);
          if (_) {
            var q = _.call(R), K;
            if (_ !== R.entries) {
              for (; !(K = q.next()).done; )
                if (!$(K.value))
                  return !1;
            } else
              for (; !(K = q.next()).done; ) {
                var H = K.value;
                if (H && !$(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(R, _) {
      return R === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function j(R) {
      var _ = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : V(_, R) ? "symbol" : _;
    }
    function A(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var _ = j(R);
      if (_ === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function L(R) {
      var _ = A(R);
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
    function B(R) {
      return !R.constructor || !R.constructor.name ? h : R.constructor.name;
    }
    return y.checkPropTypes = s, y.resetWarningCache = s.resetWarningCache, y.PropTypes = y, y;
  }, Ms;
}
var Is, Na;
function Wp() {
  if (Na) return Is;
  Na = 1;
  var e = /* @__PURE__ */ pi();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Is = function() {
    function r(a, l, c, u, d, f) {
      if (f !== e) {
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
      checkPropTypes: o,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Is;
}
var $a;
function zp() {
  if ($a) return ar.exports;
  if ($a = 1, process.env.NODE_ENV !== "production") {
    var e = Dc(), t = !0;
    ar.exports = /* @__PURE__ */ Bp()(e.isElement, t);
  } else
    ar.exports = /* @__PURE__ */ Wp()();
  return ar.exports;
}
var Up = /* @__PURE__ */ zp();
const n = /* @__PURE__ */ ci(Up), kt = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function Do(e, t) {
  const o = b({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = b({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const s = e[r] || {}, i = t[r];
      o[r] = {}, !i || !Object.keys(i) ? o[r] = s : !s || !Object.keys(s) ? o[r] = i : (o[r] = b({}, i), Object.keys(s).forEach((a) => {
        o[r][a] = Do(s[a], i[a]);
      }));
    } else o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function Ic(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Do(t.components[o].defaultProps, r);
}
function Qt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Nc(e) {
  if (/* @__PURE__ */ m.isValidElement(e) || !Qt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Nc(e[o]);
  }), t;
}
function ht(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? b({}, e) : e;
  return Qt(e) && Qt(t) && Object.keys(t).forEach((s) => {
    /* @__PURE__ */ m.isValidElement(t[s]) ? r[s] = t[s] : Qt(t[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && Qt(e[s]) ? r[s] = ht(e[s], t[s], o) : o.clone ? r[s] = Qt(t[s]) ? Nc(t[s]) : t[s] : r[s] = t[s];
  }), r;
}
const qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ht,
  isPlainObject: Qt
}, Symbol.toStringTag, { value: "Module" })), Hp = ["values", "unit", "step"], Yp = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => b({}, o, {
    [r.key]: r.val
  }), {});
};
function $c(e) {
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
    unit: o = "px",
    step: r = 5
  } = e, s = te(e, Hp), i = Yp(t), a = Object.keys(i);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${o})`;
  }
  function u(h, y) {
    const g = a.indexOf(y);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : y) - r / 100}${o})`;
  }
  function d(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : l(h);
  }
  function f(h) {
    const y = a.indexOf(h);
    return y === 0 ? l(a[1]) : y === a.length - 1 ? c(a[y]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return b({
    keys: a,
    values: i,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: o
  }, s);
}
const Kp = {
  borderRadius: 4
}, tn = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function Po(e, t) {
  return t ? ht(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const fi = {
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
}, Aa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${fi[e]}px)`
};
function Wt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Aa;
    return t.reduce((a, l, c) => (a[i.up(i.keys[c])] = o(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Aa;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(i.values || fi).indexOf(l) !== -1) {
        const c = i.up(l);
        a[c] = o(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return o(t);
}
function Gp(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, s) => {
    const i = e.up(s);
    return r[i] = {}, r;
  }, {})) || {};
}
function ja(e, t) {
  return e.reduce((o, r) => {
    const s = o[r];
    return (!s || Object.keys(s).length === 0) && delete o[r], o;
  }, t);
}
function zt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zt
}, Symbol.toStringTag, { value: "Module" }));
function ae(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : zt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ae
}, Symbol.toStringTag, { value: "Module" }));
function jr(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((s, i) => s && s[i] ? s[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, s) => r && r[s] != null ? r[s] : null, e);
}
function Er(e, t, o, r = o) {
  let s;
  return typeof e == "function" ? s = e(o) : Array.isArray(e) ? s = e[o] || r : s = jr(e, o) || r, t && (s = t(s, r, e)), s;
}
function Ke(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: s
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = jr(c, r) || {};
    return Wt(a, l, (f) => {
      let h = Er(u, s, f);
      return f === h && typeof f == "string" && (h = Er(u, s, `${t}${f === "default" ? "" : ae(f)}`, f)), o === !1 ? h : {
        [o]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: tn
  } : {}, i.filterProps = [t], i;
}
function Zp(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Jp = {
  m: "margin",
  p: "padding"
}, ef = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Fa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, tf = Zp((e) => {
  if (e.length > 2)
    if (Fa[e])
      e = Fa[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Jp[t], s = ef[o] || "";
  return Array.isArray(s) ? s.map((i) => r + i) : [r + s];
}), Fr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Vr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], nf = [...Fr, ...Vr];
function Uo(e, t, o, r) {
  var s;
  const i = (s = jr(e, t, !1)) != null ? s : o;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ac(e) {
  return Uo(e, "spacing", 8, "spacing");
}
function qo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function of(e, t) {
  return (o) => e.reduce((r, s) => (r[s] = qo(t, o), r), {});
}
function rf(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const s = tf(o), i = of(s, r), a = e[o];
  return Wt(e, a, i);
}
function jc(e, t) {
  const o = Ac(e.theme);
  return Object.keys(e).map((r) => rf(e, t, r, o)).reduce(Po, {});
}
function qe(e) {
  return jc(e, Fr);
}
qe.propTypes = process.env.NODE_ENV !== "production" ? Fr.reduce((e, t) => (e[t] = tn, e), {}) : {};
qe.filterProps = Fr;
function He(e) {
  return jc(e, Vr);
}
He.propTypes = process.env.NODE_ENV !== "production" ? Vr.reduce((e, t) => (e[t] = tn, e), {}) : {};
He.filterProps = Vr;
process.env.NODE_ENV !== "production" && nf.reduce((e, t) => (e[t] = tn, e), {});
function sf(e = 8) {
  if (e.mui)
    return e;
  const t = Ac({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return o.mui = !0, o;
}
function _r(...e) {
  const t = e.reduce((r, s) => (s.filterProps.forEach((i) => {
    r[i] = s;
  }), r), {}), o = (r) => Object.keys(r).reduce((s, i) => t[i] ? Po(s, t[i](r)) : s, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, s) => Object.assign(r, s.propTypes), {}) : {}, o.filterProps = e.reduce((r, s) => r.concat(s.filterProps), []), o;
}
function xt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Et(e, t) {
  return Ke({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const af = Et("border", xt), lf = Et("borderTop", xt), cf = Et("borderRight", xt), uf = Et("borderBottom", xt), df = Et("borderLeft", xt), pf = Et("borderColor"), ff = Et("borderTopColor"), mf = Et("borderRightColor"), hf = Et("borderBottomColor"), bf = Et("borderLeftColor"), gf = Et("outline", xt), yf = Et("outlineColor"), Lr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Uo(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: qo(t, r)
    });
    return Wt(e, e.borderRadius, o);
  }
  return null;
};
Lr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: tn
} : {};
Lr.filterProps = ["borderRadius"];
_r(af, lf, cf, uf, df, pf, ff, mf, hf, bf, Lr, gf, yf);
const Br = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Uo(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: qo(t, r)
    });
    return Wt(e, e.gap, o);
  }
  return null;
};
Br.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: tn
} : {};
Br.filterProps = ["gap"];
const Wr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Uo(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: qo(t, r)
    });
    return Wt(e, e.columnGap, o);
  }
  return null;
};
Wr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: tn
} : {};
Wr.filterProps = ["columnGap"];
const zr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Uo(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: qo(t, r)
    });
    return Wt(e, e.rowGap, o);
  }
  return null;
};
zr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: tn
} : {};
zr.filterProps = ["rowGap"];
const vf = Ke({
  prop: "gridColumn"
}), xf = Ke({
  prop: "gridRow"
}), Pf = Ke({
  prop: "gridAutoFlow"
}), Cf = Ke({
  prop: "gridAutoColumns"
}), Sf = Ke({
  prop: "gridAutoRows"
}), Ef = Ke({
  prop: "gridTemplateColumns"
}), Of = Ke({
  prop: "gridTemplateRows"
}), wf = Ke({
  prop: "gridTemplateAreas"
}), Tf = Ke({
  prop: "gridArea"
});
_r(Br, Wr, zr, vf, xf, Pf, Cf, Sf, Ef, Of, wf, Tf);
function An(e, t) {
  return t === "grey" ? t : e;
}
const Rf = Ke({
  prop: "color",
  themeKey: "palette",
  transform: An
}), kf = Ke({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: An
}), Df = Ke({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: An
});
_r(Rf, kf, Df);
function mt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Mf = Ke({
  prop: "width",
  transform: mt
}), mi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r, s;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || fi[o];
      return i ? ((s = e.theme) == null || (s = s.breakpoints) == null ? void 0 : s.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: mt(o)
      };
    };
    return Wt(e, e.maxWidth, t);
  }
  return null;
};
mi.filterProps = ["maxWidth"];
const If = Ke({
  prop: "minWidth",
  transform: mt
}), Nf = Ke({
  prop: "height",
  transform: mt
}), $f = Ke({
  prop: "maxHeight",
  transform: mt
}), Af = Ke({
  prop: "minHeight",
  transform: mt
});
Ke({
  prop: "size",
  cssProperty: "width",
  transform: mt
});
Ke({
  prop: "size",
  cssProperty: "height",
  transform: mt
});
const jf = Ke({
  prop: "boxSizing"
});
_r(Mf, mi, If, Nf, $f, Af, jf);
const Ho = {
  // borders
  border: {
    themeKey: "borders",
    transform: xt
  },
  borderTop: {
    themeKey: "borders",
    transform: xt
  },
  borderRight: {
    themeKey: "borders",
    transform: xt
  },
  borderBottom: {
    themeKey: "borders",
    transform: xt
  },
  borderLeft: {
    themeKey: "borders",
    transform: xt
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
    transform: xt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Lr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: An
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: An
  },
  backgroundColor: {
    themeKey: "palette",
    transform: An
  },
  // spacing
  p: {
    style: He
  },
  pt: {
    style: He
  },
  pr: {
    style: He
  },
  pb: {
    style: He
  },
  pl: {
    style: He
  },
  px: {
    style: He
  },
  py: {
    style: He
  },
  padding: {
    style: He
  },
  paddingTop: {
    style: He
  },
  paddingRight: {
    style: He
  },
  paddingBottom: {
    style: He
  },
  paddingLeft: {
    style: He
  },
  paddingX: {
    style: He
  },
  paddingY: {
    style: He
  },
  paddingInline: {
    style: He
  },
  paddingInlineStart: {
    style: He
  },
  paddingInlineEnd: {
    style: He
  },
  paddingBlock: {
    style: He
  },
  paddingBlockStart: {
    style: He
  },
  paddingBlockEnd: {
    style: He
  },
  m: {
    style: qe
  },
  mt: {
    style: qe
  },
  mr: {
    style: qe
  },
  mb: {
    style: qe
  },
  ml: {
    style: qe
  },
  mx: {
    style: qe
  },
  my: {
    style: qe
  },
  margin: {
    style: qe
  },
  marginTop: {
    style: qe
  },
  marginRight: {
    style: qe
  },
  marginBottom: {
    style: qe
  },
  marginLeft: {
    style: qe
  },
  marginX: {
    style: qe
  },
  marginY: {
    style: qe
  },
  marginInline: {
    style: qe
  },
  marginInlineStart: {
    style: qe
  },
  marginInlineEnd: {
    style: qe
  },
  marginBlock: {
    style: qe
  },
  marginBlockStart: {
    style: qe
  },
  marginBlockEnd: {
    style: qe
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
    style: Br
  },
  rowGap: {
    style: zr
  },
  columnGap: {
    style: Wr
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
    transform: mt
  },
  maxWidth: {
    style: mi
  },
  minWidth: {
    transform: mt
  },
  height: {
    transform: mt
  },
  maxHeight: {
    transform: mt
  },
  minHeight: {
    transform: mt
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
function Ff(...e) {
  const t = e.reduce((r, s) => r.concat(Object.keys(s)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Vf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fc() {
  function e(o, r, s, i) {
    const a = {
      [o]: r,
      theme: s
    }, l = i[o];
    if (!l)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const h = jr(s, u) || {};
    return f ? f(a) : Wt(a, r, (g) => {
      let p = Er(h, d, g);
      return g === p && typeof g == "string" && (p = Er(h, d, `${o}${g === "default" ? "" : ae(g)}`, g)), c === !1 ? p : {
        [c]: p
      };
    });
  }
  function t(o) {
    var r;
    const {
      sx: s,
      theme: i = {},
      nested: a
    } = o || {};
    if (!s)
      return null;
    const l = (r = i.unstable_sxConfig) != null ? r : Ho;
    function c(u) {
      let d = u;
      if (typeof u == "function")
        d = u(i);
      else if (typeof u != "object")
        return u;
      if (!d)
        return null;
      const f = Gp(i.breakpoints), h = Object.keys(f);
      let y = f;
      return Object.keys(d).forEach((g) => {
        const p = Vf(d[g], i);
        if (p != null)
          if (typeof p == "object")
            if (l[g])
              y = Po(y, e(g, p, i, l));
            else {
              const v = Wt({
                theme: i
              }, p, (C) => ({
                [g]: C
              }));
              Ff(v, p) ? y[g] = t({
                sx: p,
                theme: i,
                nested: !0
              }) : y = Po(y, v);
            }
          else
            y = Po(y, e(g, p, i, l));
      }), !a && i.modularCssLayers ? {
        "@layer sx": ja(h, y)
      } : ja(h, y);
    }
    return Array.isArray(s) ? s.map(c) : c(s);
  }
  return t;
}
const Ur = Fc();
Ur.filterProps = ["sx"];
function Vc(e, t) {
  const o = this;
  return o.vars && typeof o.getColorSchemeSelector == "function" ? {
    [o.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : o.palette.mode === e ? t : {};
}
const _f = ["breakpoints", "palette", "spacing", "shape"];
function qr(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: s,
    shape: i = {}
  } = e, a = te(e, _f), l = $c(o), c = sf(s);
  let u = ht({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: b({
      mode: "light"
    }, r),
    spacing: c,
    shape: b({}, Kp, i)
  }, a);
  return u.applyStyles = Vc, u = t.reduce((d, f) => ht(d, f), u), u.unstable_sxConfig = b({}, Ho, a?.unstable_sxConfig), u.unstable_sx = function(f) {
    return Ur({
      sx: f,
      theme: this
    });
  }, u;
}
const Lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qr,
  private_createBreakpoints: $c,
  unstable_applyStyles: Vc
}, Symbol.toStringTag, { value: "Module" }));
function Bf(e) {
  for (var t = 0, o, r = 0, s = e.length; s >= 4; ++r, s -= 4)
    o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, t = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
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
var Wf = {
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
function zf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var Uf = /[A-Z]|^ms/g, qf = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _c = function(t) {
  return t.charCodeAt(1) === 45;
}, Va = function(t) {
  return t != null && typeof t != "boolean";
}, Ns = /* @__PURE__ */ zf(function(e) {
  return _c(e) ? e : e.replace(Uf, "-$&").toLowerCase();
}), _a = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(qf, function(r, s, i) {
          return Jt = {
            name: s,
            styles: i,
            next: Jt
          }, s;
        });
  }
  return Wf[t] !== 1 && !_c(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function Or(e, t, o) {
  if (o == null)
    return "";
  var r = o;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var s = o;
      if (s.anim === 1)
        return Jt = {
          name: s.name,
          styles: s.styles,
          next: Jt
        }, s.name;
      var i = o;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Jt = {
              name: a.name,
              styles: a.styles,
              next: Jt
            }, a = a.next;
        var l = i.styles + ";";
        return l;
      }
      return Hf(e, t, o);
    }
  }
  var c = o;
  return c;
}
function Hf(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var s = 0; s < o.length; s++)
      r += Or(e, t, o[s]) + ";";
  else
    for (var i in o) {
      var a = o[i];
      if (typeof a != "object") {
        var l = a;
        Va(l) && (r += Ns(i) + ":" + _a(i, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var c = 0; c < a.length; c++)
          Va(a[c]) && (r += Ns(i) + ":" + _a(i, a[c]) + ";");
      else {
        var u = Or(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ns(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var La = /label:\s*([^\s;{]+)\s*(;|$)/g, Jt;
function Yf(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, s = "";
  Jt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, s += Or(o, t, i);
  else {
    var a = i;
    s += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (s += Or(o, t, e[l]), r) {
      var c = i;
      s += c[l];
    }
  La.lastIndex = 0;
  for (var u = "", d; (d = La.exec(s)) !== null; )
    u += "-" + d[1];
  var f = Bf(s) + u;
  return {
    name: f,
    styles: s,
    next: Jt
  };
}
function Kf(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Gf(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Xf = /* @__PURE__ */ (function() {
  function e(o) {
    var r = this;
    this._insertTag = function(s) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(s, i), r.tags.push(s);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gf(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Kf(s);
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
})(), st = "-ms-", wr = "-moz-", Te = "-webkit-", Lc = "comm", hi = "rule", bi = "decl", Qf = "@import", Bc = "@keyframes", Zf = "@layer", Jf = Math.abs, Hr = String.fromCharCode, em = Object.assign;
function tm(e, t) {
  return ot(e, 0) ^ 45 ? (((t << 2 ^ ot(e, 0)) << 2 ^ ot(e, 1)) << 2 ^ ot(e, 2)) << 2 ^ ot(e, 3) : 0;
}
function Wc(e) {
  return e.trim();
}
function nm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Re(e, t, o) {
  return e.replace(t, o);
}
function Gs(e, t) {
  return e.indexOf(t);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function Mo(e, t, o) {
  return e.slice(t, o);
}
function Nt(e) {
  return e.length;
}
function gi(e) {
  return e.length;
}
function cr(e, t) {
  return t.push(e), e;
}
function om(e, t) {
  return e.map(t).join("");
}
var Yr = 1, Bn = 1, zc = 0, pt = 0, Xe = 0, Xn = "";
function Kr(e, t, o, r, s, i, a) {
  return { value: e, root: t, parent: o, type: r, props: s, children: i, line: Yr, column: Bn, length: a, return: "" };
}
function so(e, t) {
  return em(Kr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function rm() {
  return Xe;
}
function sm() {
  return Xe = pt > 0 ? ot(Xn, --pt) : 0, Bn--, Xe === 10 && (Bn = 1, Yr--), Xe;
}
function bt() {
  return Xe = pt < zc ? ot(Xn, pt++) : 0, Bn++, Xe === 10 && (Bn = 1, Yr++), Xe;
}
function At() {
  return ot(Xn, pt);
}
function vr() {
  return pt;
}
function Yo(e, t) {
  return Mo(Xn, e, t);
}
function Io(e) {
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
function Uc(e) {
  return Yr = Bn = 1, zc = Nt(Xn = e), pt = 0, [];
}
function qc(e) {
  return Xn = "", e;
}
function xr(e) {
  return Wc(Yo(pt - 1, Xs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function im(e) {
  for (; (Xe = At()) && Xe < 33; )
    bt();
  return Io(e) > 2 || Io(Xe) > 3 ? "" : " ";
}
function am(e, t) {
  for (; --t && bt() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return Yo(e, vr() + (t < 6 && At() == 32 && bt() == 32));
}
function Xs(e) {
  for (; bt(); )
    switch (Xe) {
      // ] ) " '
      case e:
        return pt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xs(Xe);
        break;
      // (
      case 40:
        e === 41 && Xs(e);
        break;
      // \
      case 92:
        bt();
        break;
    }
  return pt;
}
function lm(e, t) {
  for (; bt() && e + Xe !== 57; )
    if (e + Xe === 84 && At() === 47)
      break;
  return "/*" + Yo(t, pt - 1) + "*" + Hr(e === 47 ? e : bt());
}
function cm(e) {
  for (; !Io(At()); )
    bt();
  return Yo(e, pt);
}
function um(e) {
  return qc(Pr("", null, null, null, [""], e = Uc(e), 0, [0], e));
}
function Pr(e, t, o, r, s, i, a, l, c) {
  for (var u = 0, d = 0, f = a, h = 0, y = 0, g = 0, p = 1, v = 1, C = 1, T = 0, S = "", x = s, E = i, I = r, P = S; v; )
    switch (g = T, T = bt()) {
      // (
      case 40:
        if (g != 108 && ot(P, f - 1) == 58) {
          Gs(P += Re(xr(T), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        P += xr(T);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        P += im(g);
        break;
      // \
      case 92:
        P += am(vr() - 1, 7);
        continue;
      // /
      case 47:
        switch (At()) {
          case 42:
          case 47:
            cr(dm(lm(bt(), vr()), t, o), c);
            break;
          default:
            P += "/";
        }
        break;
      // {
      case 123 * p:
        l[u++] = Nt(P) * C;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (T) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + d:
            C == -1 && (P = Re(P, /\f/g, "")), y > 0 && Nt(P) - f && cr(y > 32 ? Wa(P + ";", r, o, f - 1) : Wa(Re(P, " ", "") + ";", r, o, f - 2), c);
            break;
          // @ ;
          case 59:
            P += ";";
          // { rule/at-rule
          default:
            if (cr(I = Ba(P, t, o, u, d, s, l, S, x = [], E = [], f), i), T === 123)
              if (d === 0)
                Pr(P, t, I, I, x, i, f, l, E);
              else
                switch (h === 99 && ot(P, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pr(e, I, I, r && cr(Ba(e, I, I, 0, 0, s, l, S, s, x = [], f), E), s, E, f, l, r ? x : E);
                    break;
                  default:
                    Pr(P, I, I, I, [""], E, 0, l, E);
                }
        }
        u = d = y = 0, p = C = 1, S = P = "", f = a;
        break;
      // :
      case 58:
        f = 1 + Nt(P), y = g;
      default:
        if (p < 1) {
          if (T == 123)
            --p;
          else if (T == 125 && p++ == 0 && sm() == 125)
            continue;
        }
        switch (P += Hr(T), T * p) {
          // &
          case 38:
            C = d > 0 ? 1 : (P += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = (Nt(P) - 1) * C, C = 1;
            break;
          // @
          case 64:
            At() === 45 && (P += xr(bt())), h = At(), d = f = Nt(S = P += cm(vr())), T++;
            break;
          // -
          case 45:
            g === 45 && Nt(P) == 2 && (p = 0);
        }
    }
  return i;
}
function Ba(e, t, o, r, s, i, a, l, c, u, d) {
  for (var f = s - 1, h = s === 0 ? i : [""], y = gi(h), g = 0, p = 0, v = 0; g < r; ++g)
    for (var C = 0, T = Mo(e, f + 1, f = Jf(p = a[g])), S = e; C < y; ++C)
      (S = Wc(p > 0 ? h[C] + " " + T : Re(T, /&\f/g, h[C]))) && (c[v++] = S);
  return Kr(e, t, o, s === 0 ? hi : l, c, u, d);
}
function dm(e, t, o) {
  return Kr(e, t, o, Lc, Hr(rm()), Mo(e, 2, -2), 0);
}
function Wa(e, t, o, r) {
  return Kr(e, t, o, bi, Mo(e, 0, r), Mo(e, r + 1, -1), r);
}
function jn(e, t) {
  for (var o = "", r = gi(e), s = 0; s < r; s++)
    o += t(e[s], s, e, t) || "";
  return o;
}
function pm(e, t, o, r) {
  switch (e.type) {
    case Zf:
      if (e.children.length) break;
    case Qf:
    case bi:
      return e.return = e.return || e.value;
    case Lc:
      return "";
    case Bc:
      return e.return = e.value + "{" + jn(e.children, r) + "}";
    case hi:
      e.value = e.props.join(",");
  }
  return Nt(o = jn(e.children, r)) ? e.return = e.value + "{" + o + "}" : "";
}
function fm(e) {
  var t = gi(e);
  return function(o, r, s, i) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](o, r, s, i) || "";
    return a;
  };
}
function mm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var hm = function(t, o, r) {
  for (var s = 0, i = 0; s = i, i = At(), s === 38 && i === 12 && (o[r] = 1), !Io(i); )
    bt();
  return Yo(t, pt);
}, bm = function(t, o) {
  var r = -1, s = 44;
  do
    switch (Io(s)) {
      case 0:
        s === 38 && At() === 12 && (o[r] = 1), t[r] += hm(pt - 1, o, r);
        break;
      case 2:
        t[r] += xr(s);
        break;
      case 4:
        if (s === 44) {
          t[++r] = At() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Hr(s);
    }
  while (s = bt());
  return t;
}, gm = function(t, o) {
  return qc(bm(Uc(t), o));
}, za = /* @__PURE__ */ new WeakMap(), ym = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, s = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !za.get(r)) && !s) {
      za.set(t, !0);
      for (var i = [], a = gm(o, i), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, vm = function(t) {
  if (t.type === "decl") {
    var o = t.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Hc(e, t) {
  switch (tm(e, t)) {
    // color-adjust
    case 5103:
      return Te + "print-" + e + e;
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
      return Te + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Te + e + wr + e + st + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Te + e + st + e + e;
    // order
    case 6165:
      return Te + e + st + "flex-" + e + e;
    // align-items
    case 5187:
      return Te + e + Re(e, /(\w+).+(:[^]+)/, Te + "box-$1$2" + st + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Te + e + st + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Te + e + st + "flex-line-pack" + Re(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Te + e + st + Re(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Te + e + st + Re(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Te + "box-" + Re(e, "-grow", "") + Te + e + st + Re(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Te + Re(e, /([^-])(transform)/g, "$1" + Te + "$2") + e;
    // cursor
    case 6187:
      return Re(Re(Re(e, /(zoom-|grab)/, Te + "$1"), /(image-set)/, Te + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Re(e, /(image-set\([^]*)/, Te + "$1$`$1");
    // justify-content
    case 4968:
      return Re(Re(e, /(.+:)(flex-)?(.*)/, Te + "box-pack:$3" + st + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Te + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Re(e, /(.+)-inline(.+)/, Te + "$1$2") + e;
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
      if (Nt(e) - 1 - t > 6) switch (ot(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ot(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Re(e, /(.+:)(.+)-([^]+)/, "$1" + Te + "$2-$3$1" + wr + (ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Gs(e, "stretch") ? Hc(Re(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ot(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ot(e, Nt(e) - 3 - (~Gs(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Re(e, ":", ":" + Te) + e;
        // (inline-)?fl(e)x
        case 101:
          return Re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Te + (ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Te + "$2$3$1" + st + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ot(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Te + e + st + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Te + e + st + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Te + e + st + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Te + e + st + e + e;
  }
  return e;
}
var xm = function(t, o, r, s) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case bi:
      t.return = Hc(t.value, t.length);
      break;
    case Bc:
      return jn([so(t, {
        value: Re(t.value, "@", "@" + Te)
      })], s);
    case hi:
      if (t.length) return om(t.props, function(i) {
        switch (nm(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return jn([so(t, {
              props: [Re(i, /:(read-\w+)/, ":" + wr + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return jn([so(t, {
              props: [Re(i, /:(plac\w+)/, ":" + Te + "input-$1")]
            }), so(t, {
              props: [Re(i, /:(plac\w+)/, ":" + wr + "$1")]
            }), so(t, {
              props: [Re(i, /:(plac\w+)/, st + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, Pm = [xm], Cm = function(t) {
  var o = t.key;
  if (o === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var v = p.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var s = t.stylisPlugins || Pm, i = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(p) {
      for (var v = p.getAttribute("data-emotion").split(" "), C = 1; C < v.length; C++)
        i[v[C]] = !0;
      l.push(p);
    }
  );
  var c, u = [ym, vm];
  {
    var d, f = [pm, mm(function(p) {
      d.insert(p);
    })], h = fm(u.concat(s, f)), y = function(v) {
      return jn(um(v), h);
    };
    c = function(v, C, T, S) {
      d = T, y(v ? v + "{" + C.styles + "}" : C.styles), S && (g.inserted[C.name] = !0);
    };
  }
  var g = {
    key: o,
    sheet: new Xf({
      key: o,
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
function Sm(e, t) {
  const o = Cm({
    key: "css",
    prepend: e
  });
  if (t) {
    const r = o.insert;
    o.insert = (...s) => (s[1].styles.match(/^@layer\s+[^{]*$/) || (s[1].styles = `@layer mui {${s[1].styles}}`), r(...s));
  }
  return o;
}
const $s = /* @__PURE__ */ new Map();
function Yc(e) {
  const {
    injectFirst: t,
    enableCssLayer: o,
    children: r
  } = e, s = m.useMemo(() => {
    const i = `${t}-${o}`;
    if (typeof document == "object" && $s.has(i))
      return $s.get(i);
    const a = Sm(t, o);
    return $s.set(i, a), a;
  }, [t, o]);
  return t || o ? /* @__PURE__ */ O.jsx(dp, {
    value: s,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Yc.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: n.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: n.bool
});
function Em(e) {
  return e == null || Object.keys(e).length === 0;
}
function yi(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e, r = typeof t == "function" ? (s) => t(Em(s) ? o : s) : t;
  return /* @__PURE__ */ O.jsx(pp, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Om(e, t) {
  const o = mp(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const s = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const wm = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Ua = [];
function Kc(e) {
  return Ua[0] = e, Yf(Ua);
}
const Tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: yi,
  StyledEngineProvider: Yc,
  ThemeContext: Pc,
  css: fp,
  default: Om,
  internal_processStyles: wm,
  internal_serializeStyles: Kc,
  keyframes: Ar
}, Symbol.toStringTag, { value: "Module" }));
function Rm(e) {
  return Object.keys(e).length === 0;
}
function Gc(e = null) {
  const t = m.useContext(Pc);
  return !t || Rm(t) ? e : t;
}
const km = qr();
function vi(e = km) {
  return Gc(e);
}
function Dm({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let s = vi(o);
  return s = s[r] || s, Ic({
    theme: s,
    name: t,
    props: e
  });
}
function Mm(e, t, o, r, s) {
  const [i, a] = m.useState(() => s && o ? o(e).matches : r ? r(e).matches : t);
  return kt(() => {
    let l = !0;
    if (!o)
      return;
    const c = o(e), u = () => {
      l && a(c.matches);
    };
    return u(), c.addListener(u), () => {
      l = !1, c.removeListener(u);
    };
  }, [e, o]), i;
}
const Xc = m.useSyncExternalStore;
function Im(e, t, o, r, s) {
  const i = m.useCallback(() => t, [t]), a = m.useMemo(() => {
    if (s && o)
      return () => o(e).matches;
    if (r !== null) {
      const {
        matches: d
      } = r(e);
      return () => d;
    }
    return i;
  }, [i, e, r, s, o]), [l, c] = m.useMemo(() => {
    if (o === null)
      return [i, () => () => {
      }];
    const d = o(e);
    return [() => d.matches, (f) => (d.addListener(f), () => {
      d.removeListener(f);
    })];
  }, [i, o, e]);
  return Xc(c, l, a);
}
function Qc(e, t = {}) {
  const o = Gc(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: s = !1,
    matchMedia: i = r ? window.matchMedia : null,
    ssrMatchMedia: a = null,
    noSsr: l = !1
  } = Ic({
    name: "MuiUseMediaQuery",
    props: t,
    theme: o
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && o === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(o) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (Xc !== void 0 ? Im : Mm)(c, s, i, a, l);
  return process.env.NODE_ENV !== "production" && m.useDebugValue({
    query: c,
    match: d
  }), d;
}
const Gr = "$$material";
function As(e) {
  const t = Kc(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Zc({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = vi(o), s = t && r[t] || r;
  let i = typeof e == "function" ? e(s) : e;
  return s.modularCssLayers && (Array.isArray(i) ? i = i.map((a) => As(typeof a == "function" ? a(s) : a)) : i = As(i)), /* @__PURE__ */ O.jsx(yi, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
const Nm = ["sx"], $m = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, s = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : Ho;
  return Object.keys(e).forEach((i) => {
    s[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Jc(e) {
  const {
    sx: t
  } = e, o = te(e, Nm), {
    systemProps: r,
    otherProps: s
  } = $m(o);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const l = t(...a);
    return Qt(l) ? b({}, r, l) : r;
  } : i = b({}, r, t), b({}, s, {
    sx: i
  });
}
const Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ur,
  extendSxProp: Jc,
  unstable_createStyleFunctionSx: Fc,
  unstable_defaultSxConfig: Ho
}, Symbol.toStringTag, { value: "Module" })), qa = (e) => e, jm = () => {
  let e = qa;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = qa;
    }
  };
}, Fm = jm();
function eu(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (o = eu(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function ue() {
  for (var e, t, o = 0, r = "", s = arguments.length; o < s; o++) (e = arguments[o]) && (t = eu(e)) && (r && (r += " "), r += t);
  return r;
}
const Vm = {
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
function we(e, t, o = "Mui") {
  const r = Vm[t];
  return r ? `${o}-${r}` : `${Fm.generate(e)}-${t}`;
}
function Ee(e, t, o = "Mui") {
  const r = {};
  return t.forEach((s) => {
    r[s] = we(e, s, o);
  }), r;
}
var ur = { exports: {} }, je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function _m() {
  if (Ha) return je;
  Ha = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case o:
            case s:
            case r:
            case c:
            case u:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
                case f:
                case d:
                  return p;
                case i:
                  return p;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return je.ContextConsumer = i, je.ContextProvider = a, je.Element = e, je.ForwardRef = l, je.Fragment = o, je.Lazy = f, je.Memo = d, je.Portal = t, je.Profiler = s, je.StrictMode = r, je.Suspense = c, je.SuspenseList = u, je.isContextConsumer = function(p) {
    return g(p) === i;
  }, je.isContextProvider = function(p) {
    return g(p) === a;
  }, je.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, je.isForwardRef = function(p) {
    return g(p) === l;
  }, je.isFragment = function(p) {
    return g(p) === o;
  }, je.isLazy = function(p) {
    return g(p) === f;
  }, je.isMemo = function(p) {
    return g(p) === d;
  }, je.isPortal = function(p) {
    return g(p) === t;
  }, je.isProfiler = function(p) {
    return g(p) === s;
  }, je.isStrictMode = function(p) {
    return g(p) === r;
  }, je.isSuspense = function(p) {
    return g(p) === c;
  }, je.isSuspenseList = function(p) {
    return g(p) === u;
  }, je.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === o || p === s || p === r || p === c || p === u || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === a || p.$$typeof === i || p.$$typeof === l || p.$$typeof === y || p.getModuleId !== void 0);
  }, je.typeOf = g, je;
}
var Fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya;
function Lm() {
  return Ya || (Ya = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var v = p.$$typeof;
        switch (v) {
          case t:
            switch (p = p.type, p) {
              case r:
              case i:
              case s:
              case u:
              case d:
              case y:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case l:
                  case c:
                  case h:
                  case f:
                    return p;
                  case a:
                    return p;
                  default:
                    return v;
                }
            }
          case o:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Fe.ContextConsumer = a, Fe.ContextProvider = l, Fe.Element = t, Fe.ForwardRef = c, Fe.Fragment = r, Fe.Lazy = h, Fe.Memo = f, Fe.Portal = o, Fe.Profiler = i, Fe.StrictMode = s, Fe.Suspense = u, Fe.SuspenseList = d, Fe.isContextConsumer = function(p) {
      return e(p) === a;
    }, Fe.isContextProvider = function(p) {
      return e(p) === l;
    }, Fe.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, Fe.isForwardRef = function(p) {
      return e(p) === c;
    }, Fe.isFragment = function(p) {
      return e(p) === r;
    }, Fe.isLazy = function(p) {
      return e(p) === h;
    }, Fe.isMemo = function(p) {
      return e(p) === f;
    }, Fe.isPortal = function(p) {
      return e(p) === o;
    }, Fe.isProfiler = function(p) {
      return e(p) === i;
    }, Fe.isStrictMode = function(p) {
      return e(p) === s;
    }, Fe.isSuspense = function(p) {
      return e(p) === u;
    }, Fe.isSuspenseList = function(p) {
      return e(p) === d;
    }, Fe.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === r || p === i || p === s || p === u || p === d || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === f || p.$$typeof === l || p.$$typeof === a || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
    }, Fe.typeOf = e;
  })()), Fe;
}
var Ka;
function Bm() {
  return Ka || (Ka = 1, process.env.NODE_ENV === "production" ? ur.exports = /* @__PURE__ */ _m() : ur.exports = /* @__PURE__ */ Lm()), ur.exports;
}
var No = /* @__PURE__ */ Bm();
const Wm = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function tu(e) {
  const t = `${e}`.match(Wm);
  return t && t[1] || "";
}
function nu(e, t = "") {
  return e.displayName || e.name || tu(e) || t;
}
function Ga(e, t, o) {
  const r = nu(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function zm(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return nu(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case No.ForwardRef:
          return Ga(e, e.render, "ForwardRef");
        case No.Memo:
          return Ga(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zm,
  getFunctionName: tu
}, Symbol.toStringTag, { value: "Module" }));
function ou(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
qr();
function ru(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
const qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ru
}, Symbol.toStringTag, { value: "Module" }));
function Hm(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), ru(e, t, o);
}
function Ym(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, s) => s < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function su(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return su(Ym(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : zt(9, e));
  let r = e.substring(t + 1, e.length - 1), s;
  if (o === "color") {
    if (r = r.split(" "), s = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : zt(10, s));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: o,
    values: r,
    colorSpace: s
  };
}
function Km(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((s, i) => i < 3 ? parseInt(s, 10) : s) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Wn(e, t) {
  return e = su(e), t = Hm(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Km(e);
}
function nn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Gm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function iu(e, t, o, r, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !Gm(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ko = nn(n.element, iu);
Ko.isRequired = nn(n.element.isRequired, iu);
function Xm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Qm(e, t, o, r, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !Xm(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Xr = nn(n.elementType, Qm), Zm = "exact-prop: ​";
function au(e) {
  return process.env.NODE_ENV === "production" ? e : b({}, e, {
    [Zm]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Ut(e, t, o, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = s || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const Dt = n.oneOfType([n.func, n.object]);
function Xa(...e) {
  return e.reduce((t, o) => o == null ? t : function(...s) {
    t.apply(this, s), o.apply(this, s);
  }, () => {
  });
}
function lu(e, t = 166) {
  let o;
  function r(...s) {
    const i = () => {
      e.apply(this, s);
    };
    clearTimeout(o), o = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function Co(e, t) {
  var o, r;
  return /* @__PURE__ */ m.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (o = e.type.muiName) != null ? o : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function lt(e) {
  return e && e.ownerDocument || document;
}
function vn(e) {
  return lt(e).defaultView || window;
}
function Qs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Qa = 0;
function Jm(e) {
  const [t, o] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (Qa += 1, o(`mui-${Qa}`));
  }, [t]), r;
}
const Za = m.useId;
function xi(e) {
  if (Za !== void 0) {
    const t = Za();
    return e ?? t;
  }
  return Jm(e);
}
function eh(e, t, o, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = s || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Ja({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: s
  } = m.useRef(e !== void 0), [i, a] = m.useState(t), l = s ? e : i;
  if (process.env.NODE_ENV !== "production") {
    m.useEffect(() => {
      s !== (e !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${r} state of ${o} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: u
    } = m.useRef(t);
    m.useEffect(() => {
      !s && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = m.useCallback((u) => {
    s || a(u);
  }, []);
  return [l, c];
}
function mn(e) {
  const t = m.useRef(e);
  return kt(() => {
    t.current = e;
  }), m.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function tt(...e) {
  return m.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      Qs(o, t);
    });
  }, e);
}
const el = {};
function th(e, t) {
  const o = m.useRef(el);
  return o.current === el && (o.current = e(t)), o;
}
const nh = [];
function oh(e) {
  m.useEffect(e, nh);
}
let cu = class uu {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new uu();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
};
function du() {
  const e = th(cu.create).current;
  return oh(e.disposeEffect), e;
}
let Qr = !0, Zs = !1;
const rh = new cu(), sh = {
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
function ih(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && sh[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function ah(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Qr = !0);
}
function js() {
  Qr = !1;
}
function lh() {
  this.visibilityState === "hidden" && Zs && (Qr = !0);
}
function ch(e) {
  e.addEventListener("keydown", ah, !0), e.addEventListener("mousedown", js, !0), e.addEventListener("pointerdown", js, !0), e.addEventListener("touchstart", js, !0), e.addEventListener("visibilitychange", lh, !0);
}
function uh(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Qr || ih(t);
}
function dh() {
  const e = m.useCallback((s) => {
    s != null && ch(s.ownerDocument);
  }, []), t = m.useRef(!1);
  function o() {
    return t.current ? (Zs = !0, rh.start(100, () => {
      Zs = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(s) {
    return uh(s) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function pu(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function ph(e) {
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
function fh(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const mh = Number.isInteger || fh;
function fu(e, t, o, r) {
  const s = e[t];
  if (s == null || !mh(s)) {
    const i = ph(s);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function mu(e, t, ...o) {
  return e[t] === void 0 ? null : fu(e, t, ...o);
}
function Js() {
  return null;
}
mu.isRequired = fu;
Js.isRequired = Js;
const hu = process.env.NODE_ENV === "production" ? Js : mu;
function Ie(e, t, o = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (s) => {
      r[s] = e[s].reduce((i, a) => {
        if (a) {
          const l = t(a);
          l !== "" && i.push(l), o && o[a] && i.push(o[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
function zn(e) {
  return typeof e == "string";
}
function hh(e, t, o) {
  return e === void 0 || zn(e) ? t : b({}, t, {
    ownerState: b({}, t.ownerState, o)
  });
}
function bu(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function tl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function bh(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!t) {
    const y = ue(o?.className, i, s?.className, r?.className), g = b({}, o?.style, s?.style, r?.style), p = b({}, o, s, r);
    return y.length > 0 && (p.className = y), Object.keys(g).length > 0 && (p.style = g), {
      props: p,
      internalRef: void 0
    };
  }
  const a = bu(b({}, s, r)), l = tl(r), c = tl(s), u = t(a), d = ue(u?.className, o?.className, i, s?.className, r?.className), f = b({}, u?.style, o?.style, s?.style, r?.style), h = b({}, u, o, c, l);
  return d.length > 0 && (h.className = d), Object.keys(f).length > 0 && (h.style = f), {
    props: h,
    internalRef: u.ref
  };
}
function gh(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
const yh = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function xn(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: s,
    skipResolvingSlotProps: i = !1
  } = e, a = te(e, yh), l = i ? {} : gh(r, s), {
    props: c,
    internalRef: u
  } = bh(b({}, a, {
    externalSlotProps: l
  })), d = tt(u, l?.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return hh(o, b({}, c, {
    ref: d
  }), s);
}
function Go(e) {
  if (parseInt(m.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return e?.ref || null;
}
const vh = /* @__PURE__ */ m.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Lt = () => {
  const e = m.useContext(vh);
  return e ?? !1;
}, xh = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function Ph(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const s = t.components[o];
  return s.defaultProps ? Do(s.defaultProps, r) : !s.styleOverrides && !s.variants ? Do(s, r) : r;
}
function Ch({
  props: e,
  name: t
}) {
  const o = m.useContext(xh);
  return Ph({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
function Sh(e, t) {
  return b({
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
var We = {}, Fs = { exports: {} }, nl;
function gu() {
  return nl || (nl = 1, (function(e) {
    function t(o) {
      return o && o.__esModule ? o : {
        default: o
      };
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(Fs)), Fs.exports;
}
const Eh = /* @__PURE__ */ en(Xp), Oh = /* @__PURE__ */ en(qm);
var ol;
function wh() {
  if (ol) return We;
  ol = 1;
  var e = gu();
  Object.defineProperty(We, "__esModule", {
    value: !0
  }), We.alpha = g, We.blend = I, We.colorChannel = void 0, We.darken = v, We.decomposeColor = a, We.emphasize = x, We.getContrastRatio = y, We.getLuminance = h, We.hexToRgb = s, We.hslToRgb = f, We.lighten = T, We.private_safeAlpha = p, We.private_safeColorChannel = void 0, We.private_safeDarken = C, We.private_safeEmphasize = E, We.private_safeLighten = S, We.recomposeColor = u, We.rgbToHex = d;
  var t = e(Eh), o = e(Oh);
  function r(P, w = 0, k = 1) {
    return process.env.NODE_ENV !== "production" && (P < w || P > k) && console.error(`MUI: The value provided ${P} is out of range [${w}, ${k}].`), (0, o.default)(P, w, k);
  }
  function s(P) {
    P = P.slice(1);
    const w = new RegExp(`.{1,${P.length >= 6 ? 2 : 1}}`, "g");
    let k = P.match(w);
    return k && k[0].length === 1 && (k = k.map((M) => M + M)), k ? `rgb${k.length === 4 ? "a" : ""}(${k.map((M, N) => N < 3 ? parseInt(M, 16) : Math.round(parseInt(M, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function i(P) {
    const w = P.toString(16);
    return w.length === 1 ? `0${w}` : w;
  }
  function a(P) {
    if (P.type)
      return P;
    if (P.charAt(0) === "#")
      return a(s(P));
    const w = P.indexOf("("), k = P.substring(0, w);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(k) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${P}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, t.default)(9, P));
    let M = P.substring(w + 1, P.length - 1), N;
    if (k === "color") {
      if (M = M.split(" "), N = M.shift(), M.length === 4 && M[3].charAt(0) === "/" && (M[3] = M[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(N) === -1)
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${N}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, t.default)(10, N));
    } else
      M = M.split(",");
    return M = M.map((D) => parseFloat(D)), {
      type: k,
      values: M,
      colorSpace: N
    };
  }
  const l = (P) => {
    const w = a(P);
    return w.values.slice(0, 3).map((k, M) => w.type.indexOf("hsl") !== -1 && M !== 0 ? `${k}%` : k).join(" ");
  };
  We.colorChannel = l;
  const c = (P, w) => {
    try {
      return l(P);
    } catch {
      return w && process.env.NODE_ENV !== "production" && console.warn(w), P;
    }
  };
  We.private_safeColorChannel = c;
  function u(P) {
    const {
      type: w,
      colorSpace: k
    } = P;
    let {
      values: M
    } = P;
    return w.indexOf("rgb") !== -1 ? M = M.map((N, D) => D < 3 ? parseInt(N, 10) : N) : w.indexOf("hsl") !== -1 && (M[1] = `${M[1]}%`, M[2] = `${M[2]}%`), w.indexOf("color") !== -1 ? M = `${k} ${M.join(" ")}` : M = `${M.join(", ")}`, `${w}(${M})`;
  }
  function d(P) {
    if (P.indexOf("#") === 0)
      return P;
    const {
      values: w
    } = a(P);
    return `#${w.map((k, M) => i(M === 3 ? Math.round(255 * k) : k)).join("")}`;
  }
  function f(P) {
    P = a(P);
    const {
      values: w
    } = P, k = w[0], M = w[1] / 100, N = w[2] / 100, D = M * Math.min(N, 1 - N), F = (j, A = (j + k / 30) % 12) => N - D * Math.max(Math.min(A - 3, 9 - A, 1), -1);
    let $ = "rgb";
    const V = [Math.round(F(0) * 255), Math.round(F(8) * 255), Math.round(F(4) * 255)];
    return P.type === "hsla" && ($ += "a", V.push(w[3])), u({
      type: $,
      values: V
    });
  }
  function h(P) {
    P = a(P);
    let w = P.type === "hsl" || P.type === "hsla" ? a(f(P)).values : P.values;
    return w = w.map((k) => (P.type !== "color" && (k /= 255), k <= 0.03928 ? k / 12.92 : ((k + 0.055) / 1.055) ** 2.4)), Number((0.2126 * w[0] + 0.7152 * w[1] + 0.0722 * w[2]).toFixed(3));
  }
  function y(P, w) {
    const k = h(P), M = h(w);
    return (Math.max(k, M) + 0.05) / (Math.min(k, M) + 0.05);
  }
  function g(P, w) {
    return P = a(P), w = r(w), (P.type === "rgb" || P.type === "hsl") && (P.type += "a"), P.type === "color" ? P.values[3] = `/${w}` : P.values[3] = w, u(P);
  }
  function p(P, w, k) {
    try {
      return g(P, w);
    } catch {
      return k && process.env.NODE_ENV !== "production" && console.warn(k), P;
    }
  }
  function v(P, w) {
    if (P = a(P), w = r(w), P.type.indexOf("hsl") !== -1)
      P.values[2] *= 1 - w;
    else if (P.type.indexOf("rgb") !== -1 || P.type.indexOf("color") !== -1)
      for (let k = 0; k < 3; k += 1)
        P.values[k] *= 1 - w;
    return u(P);
  }
  function C(P, w, k) {
    try {
      return v(P, w);
    } catch {
      return k && process.env.NODE_ENV !== "production" && console.warn(k), P;
    }
  }
  function T(P, w) {
    if (P = a(P), w = r(w), P.type.indexOf("hsl") !== -1)
      P.values[2] += (100 - P.values[2]) * w;
    else if (P.type.indexOf("rgb") !== -1)
      for (let k = 0; k < 3; k += 1)
        P.values[k] += (255 - P.values[k]) * w;
    else if (P.type.indexOf("color") !== -1)
      for (let k = 0; k < 3; k += 1)
        P.values[k] += (1 - P.values[k]) * w;
    return u(P);
  }
  function S(P, w, k) {
    try {
      return T(P, w);
    } catch {
      return k && process.env.NODE_ENV !== "production" && console.warn(k), P;
    }
  }
  function x(P, w = 0.15) {
    return h(P) > 0.5 ? v(P, w) : T(P, w);
  }
  function E(P, w, k) {
    try {
      return x(P, w);
    } catch {
      return k && process.env.NODE_ENV !== "production" && console.warn(k), P;
    }
  }
  function I(P, w, k, M = 1) {
    const N = (V, j) => Math.round((V ** (1 / M) * (1 - k) + j ** (1 / M) * k) ** M), D = a(P), F = a(w), $ = [N(D.values[0], F.values[0]), N(D.values[1], F.values[1]), N(D.values[2], F.values[2])];
    return u({
      type: "rgb",
      values: $
    });
  }
  return We;
}
var _e = /* @__PURE__ */ wh();
const $o = {
  black: "#000",
  white: "#fff"
}, Th = {
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
}, On = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, wn = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, io = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Tn = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Rn = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, kn = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Rh = ["mode", "contrastThreshold", "tonalOffset"], rl = {
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
    paper: $o.white,
    default: $o.white
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
}, Vs = {
  text: {
    primary: $o.white,
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
    active: $o.white,
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
function sl(e, t, o, r) {
  const s = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = _e.lighten(e.main, s) : t === "dark" && (e.dark = _e.darken(e.main, i)));
}
function kh(e = "light") {
  return e === "dark" ? {
    main: Tn[200],
    light: Tn[50],
    dark: Tn[400]
  } : {
    main: Tn[700],
    light: Tn[400],
    dark: Tn[800]
  };
}
function Dh(e = "light") {
  return e === "dark" ? {
    main: On[200],
    light: On[50],
    dark: On[400]
  } : {
    main: On[500],
    light: On[300],
    dark: On[700]
  };
}
function Mh(e = "light") {
  return e === "dark" ? {
    main: wn[500],
    light: wn[300],
    dark: wn[700]
  } : {
    main: wn[700],
    light: wn[400],
    dark: wn[800]
  };
}
function Ih(e = "light") {
  return e === "dark" ? {
    main: Rn[400],
    light: Rn[300],
    dark: Rn[700]
  } : {
    main: Rn[700],
    light: Rn[500],
    dark: Rn[900]
  };
}
function Nh(e = "light") {
  return e === "dark" ? {
    main: kn[400],
    light: kn[300],
    dark: kn[700]
  } : {
    main: kn[800],
    light: kn[500],
    dark: kn[900]
  };
}
function $h(e = "light") {
  return e === "dark" ? {
    main: io[400],
    light: io[300],
    dark: io[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: io[500],
    dark: io[900]
  };
}
function Ah(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, s = te(e, Rh), i = e.primary || kh(t), a = e.secondary || Dh(t), l = e.error || Mh(t), c = e.info || Ih(t), u = e.success || Nh(t), d = e.warning || $h(t);
  function f(p) {
    const v = _e.getContrastRatio(p, Vs.text.primary) >= o ? Vs.text.primary : rl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = _e.getContrastRatio(p, v);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${v} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const h = ({
    color: p,
    name: v,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: S = 700
  }) => {
    if (p = b({}, p), !p.main && p[C] && (p.main = p[C]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : zt(11, v ? ` (${v})` : "", C));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : zt(12, v ? ` (${v})` : "", JSON.stringify(p.main)));
    return sl(p, "light", T, r), sl(p, "dark", S, r), p.contrastText || (p.contrastText = f(p.main)), p;
  }, y = {
    dark: Vs,
    light: rl
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ht(b({
    // A collection of common colors.
    common: b({}, $o),
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
    grey: Th,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, y[t]), s);
}
const jh = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Fh(e) {
  return Math.round(e * 1e5) / 1e5;
}
const il = {
  textTransform: "uppercase"
}, al = '"Roboto", "Helvetica", "Arial", sans-serif';
function Vh(e, t) {
  const o = typeof t == "function" ? t(e) : t, {
    fontFamily: r = al,
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
    pxToRem: f
  } = o, h = te(o, jh);
  process.env.NODE_ENV !== "production" && (typeof s != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = s / 14, g = f || ((C) => `${C / u * y}rem`), p = (C, T, S, x, E) => b({
    fontFamily: r,
    fontWeight: C,
    fontSize: g(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S
  }, r === al ? {
    letterSpacing: `${Fh(x / T)}em`
  } : {}, E, d), v = {
    h1: p(i, 96, 1.167, -1.5),
    h2: p(i, 60, 1.2, -0.5),
    h3: p(a, 48, 1.167, 0),
    h4: p(a, 34, 1.235, 0.25),
    h5: p(a, 24, 1.334, 0),
    h6: p(l, 20, 1.6, 0.15),
    subtitle1: p(a, 16, 1.75, 0.15),
    subtitle2: p(l, 14, 1.57, 0.1),
    body1: p(a, 16, 1.5, 0.15),
    body2: p(a, 14, 1.43, 0.15),
    button: p(l, 14, 1.75, 0.4, il),
    caption: p(a, 12, 1.66, 0.4),
    overline: p(a, 12, 2.66, 1, il),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ht(b({
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
const _h = 0.2, Lh = 0.14, Bh = 0.12;
function Be(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_h})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Lh})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Bh})`].join(",");
}
const Wh = ["none", Be(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Be(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Be(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Be(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Be(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Be(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Be(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Be(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Be(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Be(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Be(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Be(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Be(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Be(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Be(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Be(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Be(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Be(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Be(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Be(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Be(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Be(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Be(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Be(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zh = ["duration", "easing", "delay"], Uh = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, qh = {
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
function ll(e) {
  return `${Math.round(e)}ms`;
}
function Hh(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Yh(e) {
  const t = b({}, Uh, e.easing), o = b({}, qh, e.duration);
  return b({
    getAutoHeightDuration: Hh,
    create: (s = ["all"], i = {}) => {
      const {
        duration: a = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = te(i, zh);
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", f = (h) => !isNaN(parseFloat(h));
        !d(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((d) => `${d} ${typeof a == "string" ? a : ll(a)} ${l} ${typeof c == "string" ? c : ll(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: o
  });
}
const Kh = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Gh = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Xh(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: s = {},
    typography: i = {}
  } = e, a = te(e, Gh);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : zt(18));
  const l = Ah(r), c = qr(e);
  let u = ht(c, {
    mixins: Sh(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Wh.slice(),
    typography: Vh(l, i),
    transitions: Yh(s),
    zIndex: b({}, Kh)
  });
  if (u = ht(u, a), u = t.reduce((d, f) => ht(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (h, y) => {
      let g;
      for (g in h) {
        const p = h[g];
        if (d.indexOf(g) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = we("", g);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: p
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[g] = {};
        }
      }
    };
    Object.keys(u.components).forEach((h) => {
      const y = u.components[h].styleOverrides;
      y && h.indexOf("Mui") === 0 && f(y, h);
    });
  }
  return u.unstable_sxConfig = b({}, Ho, a?.unstable_sxConfig), u.unstable_sx = function(f) {
    return Ur({
      sx: f,
      theme: this
    });
  }, u;
}
const Zr = Xh();
function Qn() {
  const e = vi(Zr);
  return process.env.NODE_ENV !== "production" && m.useDebugValue(e), e[Gr] || e;
}
function ze({
  props: e,
  name: t
}) {
  return Dm({
    props: e,
    name: t,
    defaultTheme: Zr,
    themeId: Gr
  });
}
var an = {}, _s = { exports: {} }, cl;
function Qh() {
  return cl || (cl = 1, (function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(o) {
        for (var r = 1; r < arguments.length; r++) {
          var s = arguments[r];
          for (var i in s) ({}).hasOwnProperty.call(s, i) && (o[i] = s[i]);
        }
        return o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(_s)), _s.exports;
}
var Ls = { exports: {} }, ul;
function Zh() {
  return ul || (ul = 1, (function(e) {
    function t(o, r) {
      if (o == null) return {};
      var s = {};
      for (var i in o) if ({}.hasOwnProperty.call(o, i)) {
        if (r.indexOf(i) !== -1) continue;
        s[i] = o[i];
      }
      return s;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  })(Ls)), Ls.exports;
}
const yu = /* @__PURE__ */ en(Tm), Jh = /* @__PURE__ */ en(qp), eb = /* @__PURE__ */ en(Qp), tb = /* @__PURE__ */ en(Um), nb = /* @__PURE__ */ en(Lf), ob = /* @__PURE__ */ en(Am);
var dl;
function rb() {
  if (dl) return an;
  dl = 1;
  var e = gu();
  Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.default = P, an.shouldForwardProp = v, an.systemDefaultTheme = void 0;
  var t = e(Qh()), o = e(Zh()), r = y(yu), s = Jh, i = e(eb), a = e(tb), l = e(nb), c = e(ob);
  const u = ["ownerState"], d = ["variants"], f = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function h(w) {
    if (typeof WeakMap != "function") return null;
    var k = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
    return (h = function(N) {
      return N ? M : k;
    })(w);
  }
  function y(w, k) {
    if (w && w.__esModule) return w;
    if (w === null || typeof w != "object" && typeof w != "function") return { default: w };
    var M = h(k);
    if (M && M.has(w)) return M.get(w);
    var N = { __proto__: null }, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var F in w) if (F !== "default" && Object.prototype.hasOwnProperty.call(w, F)) {
      var $ = D ? Object.getOwnPropertyDescriptor(w, F) : null;
      $ && ($.get || $.set) ? Object.defineProperty(N, F, $) : N[F] = w[F];
    }
    return N.default = w, M && M.set(w, N), N;
  }
  function g(w) {
    return Object.keys(w).length === 0;
  }
  function p(w) {
    return typeof w == "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    w.charCodeAt(0) > 96;
  }
  function v(w) {
    return w !== "ownerState" && w !== "theme" && w !== "sx" && w !== "as";
  }
  function C(w, k) {
    return k && w && typeof w == "object" && w.styles && !w.styles.startsWith("@layer") && (w.styles = `@layer ${k}{${String(w.styles)}}`), w;
  }
  const T = an.systemDefaultTheme = (0, l.default)(), S = (w) => w && w.charAt(0).toLowerCase() + w.slice(1);
  function x({
    defaultTheme: w,
    theme: k,
    themeId: M
  }) {
    return g(k) ? w : k[M] || k;
  }
  function E(w) {
    return w ? (k, M) => M[w] : null;
  }
  function I(w, k, M) {
    let {
      ownerState: N
    } = k, D = (0, o.default)(k, u);
    const F = typeof w == "function" ? w((0, t.default)({
      ownerState: N
    }, D)) : w;
    if (Array.isArray(F))
      return F.flatMap(($) => I($, (0, t.default)({
        ownerState: N
      }, D), M));
    if (F && typeof F == "object" && Array.isArray(F.variants)) {
      const {
        variants: $ = []
      } = F;
      let j = (0, o.default)(F, d);
      return $.forEach((A) => {
        let L = !0;
        if (typeof A.props == "function" ? L = A.props((0, t.default)({
          ownerState: N
        }, D, N)) : Object.keys(A.props).forEach((B) => {
          N?.[B] !== A.props[B] && D[B] !== A.props[B] && (L = !1);
        }), L) {
          Array.isArray(j) || (j = [j]);
          const B = typeof A.style == "function" ? A.style((0, t.default)({
            ownerState: N
          }, D, N)) : A.style;
          j.push(M ? C((0, r.internal_serializeStyles)(B), M) : B);
        }
      }), j;
    }
    return M ? C((0, r.internal_serializeStyles)(F), M) : F;
  }
  function P(w = {}) {
    const {
      themeId: k,
      defaultTheme: M = T,
      rootShouldForwardProp: N = v,
      slotShouldForwardProp: D = v
    } = w, F = ($) => (0, c.default)((0, t.default)({}, $, {
      theme: x((0, t.default)({}, $, {
        defaultTheme: M,
        themeId: k
      }))
    }));
    return F.__mui_systemSx = !0, ($, V = {}) => {
      (0, r.internal_processStyles)($, (Y) => Y.filter((U) => !(U != null && U.__mui_systemSx)));
      const {
        name: j,
        slot: A,
        skipVariantsResolver: L,
        skipSx: B,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: R = E(S(A))
      } = V, _ = (0, o.default)(V, f), q = j && j.startsWith("Mui") || A ? "components" : "custom", K = L !== void 0 ? L : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        A && A !== "Root" && A !== "root" || !1
      ), H = B || !1;
      let X;
      process.env.NODE_ENV !== "production" && j && (X = `${j}-${S(A || "Root")}`);
      let Q = v;
      A === "Root" || A === "root" ? Q = N : A ? Q = D : p($) && (Q = void 0);
      const oe = (0, r.default)($, (0, t.default)({
        shouldForwardProp: Q,
        label: X
      }, _)), ee = (Y) => typeof Y == "function" && Y.__emotion_real !== Y || (0, s.isPlainObject)(Y) ? (U) => {
        const W = x({
          theme: U.theme,
          defaultTheme: M,
          themeId: k
        });
        return I(Y, (0, t.default)({}, U, {
          theme: W
        }), W.modularCssLayers ? q : void 0);
      } : Y, J = (Y, ...U) => {
        let W = ee(Y);
        const ne = U ? U.map(ee) : [];
        j && R && ne.push((z) => {
          const re = x((0, t.default)({}, z, {
            defaultTheme: M,
            themeId: k
          }));
          if (!re.components || !re.components[j] || !re.components[j].styleOverrides)
            return null;
          const fe = re.components[j].styleOverrides, ge = {};
          return Object.entries(fe).forEach(([le, ce]) => {
            ge[le] = I(ce, (0, t.default)({}, z, {
              theme: re
            }), re.modularCssLayers ? "theme" : void 0);
          }), R(z, ge);
        }), j && !K && ne.push((z) => {
          var re;
          const fe = x((0, t.default)({}, z, {
            defaultTheme: M,
            themeId: k
          })), ge = fe == null || (re = fe.components) == null || (re = re[j]) == null ? void 0 : re.variants;
          return I({
            variants: ge
          }, (0, t.default)({}, z, {
            theme: fe
          }), fe.modularCssLayers ? "theme" : void 0);
        }), H || ne.push(F);
        const Z = ne.length - U.length;
        if (Array.isArray(Y) && Z > 0) {
          const z = new Array(Z).fill("");
          W = [...Y, ...z], W.raw = [...Y.raw, ...z];
        }
        const ie = oe(W, ...ne);
        if (process.env.NODE_ENV !== "production") {
          let z;
          j && (z = `${j}${(0, i.default)(A || "")}`), z === void 0 && (z = `Styled(${(0, a.default)($)})`), ie.displayName = z;
        }
        return $.muiName && (ie.muiName = $.muiName), ie;
      };
      return oe.withConfig && (J.withConfig = oe.withConfig), J;
    };
  }
  return an;
}
var Zn = /* @__PURE__ */ rb();
const sb = /* @__PURE__ */ ci(Zn);
function vu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Mt = (e) => vu(e) && e !== "classes", G = sb({
  themeId: Gr,
  defaultTheme: Zr,
  rootShouldForwardProp: Mt
}), pl = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Ht = n.oneOfType([n.func, n.object]);
function Rt(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
const ao = (e, t) => e.length !== t.length ? !1 : t.every((o) => e.includes(o)), ib = ({
  openTo: e,
  defaultOpenTo: t,
  views: o,
  defaultViews: r
}) => {
  const s = o ?? r;
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
}, Tr = (e, t, o) => {
  let r = t;
  return r = e.setHours(r, e.getHours(o)), r = e.setMinutes(r, e.getMinutes(o)), r = e.setSeconds(r, e.getSeconds(o)), r = e.setMilliseconds(r, e.getMilliseconds(o)), r;
}, Ao = ({
  date: e,
  disableFuture: t,
  disablePast: o,
  maxDate: r,
  minDate: s,
  isDateDisabled: i,
  adapter: a,
  timezone: l
}) => {
  const c = Tr(a, a.date(void 0, l), e);
  o && a.isBefore(s, c) && (s = c), t && a.isAfter(r, c) && (r = c);
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
}, ab = (e, t) => e.isValid(t) ? t : null, fl = (e, t, o) => t == null || !e.isValid(t) ? o : t, lb = (e, t, o) => !e.isValid(t) && t != null && !e.isValid(o) && o != null ? !0 : e.isEqual(t, o), Pi = (e, t) => {
  const r = [e.startOfYear(t)];
  for (; r.length < 12; ) {
    const s = r[r.length - 1];
    r.push(e.addMonths(s, 1));
  }
  return r;
}, xu = (e, t, o) => o === "date" ? e.startOfDay(e.date(void 0, t)) : e.date(void 0, t), cb = ["year", "month", "day"], ml = (e) => cb.includes(e), Ci = (e, {
  format: t,
  views: o
}, r) => {
  if (t != null)
    return t;
  const s = e.formats;
  return ao(o, ["year"]) ? s.year : ao(o, ["month"]) ? s.month : ao(o, ["day"]) ? s.dayOfMonth : ao(o, ["month", "year"]) ? `${s.month} ${s.year}` : ao(o, ["day", "month"]) ? `${s.month} ${s.dayOfMonth}` : r ? /en/.test(e.getCurrentLocaleCode()) ? s.normalDateWithWeekday : s.normalDate : s.keyboardDate;
}, ub = (e, t) => {
  const o = e.startOfWeek(t);
  return [0, 1, 2, 3, 4, 5, 6].map((r) => e.addDays(o, r));
}, db = ["hours", "minutes", "seconds"], pb = (e) => db.includes(e), hl = (e, t) => t.getHours(e) * 3600 + t.getMinutes(e) * 60 + t.getSeconds(e), fb = (e, t) => (o, r) => e ? t.isAfter(o, r) : hl(o, t) > hl(r, t), $t = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
}, mb = (e) => Math.max(...e.map((t) => $t[t.type] ?? 1)), lo = (e, t, o) => {
  if (t === $t.year)
    return e.startOfYear(o);
  if (t === $t.month)
    return e.startOfMonth(o);
  if (t === $t.day)
    return e.startOfDay(o);
  let r = o;
  return t < $t.minutes && (r = e.setMinutes(r, 0)), t < $t.seconds && (r = e.setSeconds(r, 0)), t < $t.milliseconds && (r = e.setMilliseconds(r, 0)), r;
}, hb = ({
  props: e,
  adapter: t,
  granularity: o,
  timezone: r,
  getTodayDate: s
}) => {
  let i = s ? s() : lo(t, o, xu(t, r));
  e.minDate != null && t.isAfterDay(e.minDate, i) && (i = lo(t, o, e.minDate)), e.maxDate != null && t.isBeforeDay(e.maxDate, i) && (i = lo(t, o, e.maxDate));
  const a = fb(e.disableIgnoringDatePartForTimeValidation ?? !1, t);
  return e.minTime != null && a(e.minTime, i) && (i = lo(t, o, e.disableIgnoringDatePartForTimeValidation ? e.minTime : Tr(t, i, e.minTime))), e.maxTime != null && a(i, e.maxTime) && (i = lo(t, o, e.disableIgnoringDatePartForTimeValidation ? e.maxTime : Tr(t, i, e.maxTime))), i;
}, Si = (e, t) => {
  const o = e.formatTokenMap[t];
  if (o == null)
    throw new Error([`MUI X: The token "${t}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join(`
`));
  return typeof o == "string" ? {
    type: o,
    contentType: o === "meridiem" ? "letter" : "digit",
    maxLength: void 0
  } : {
    type: o.sectionType,
    contentType: o.contentType,
    maxLength: o.maxLength
  };
}, Jr = (e, t) => {
  const o = [], r = e.date(void 0, "default"), s = e.startOfWeek(r), i = e.endOfWeek(r);
  let a = s;
  for (; e.isBefore(a, i); )
    o.push(a), a = e.addDays(a, 1);
  return o.map((l) => e.formatByString(l, t));
}, Pu = (e, t, o, r) => {
  switch (o) {
    case "month":
      return Pi(e, e.date(void 0, t)).map((s) => e.formatByString(s, r));
    case "weekDay":
      return Jr(e, r);
    case "meridiem": {
      const s = e.date(void 0, t);
      return [e.startOfDay(s), e.endOfDay(s)].map((i) => e.formatByString(i, r));
    }
    default:
      return [];
  }
}, bl = "s", bb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], gb = (e) => {
  const t = e.date(void 0);
  return e.formatByString(e.setSeconds(t, 0), bl) === "0" ? bb : Array.from({
    length: 10
  }).map((r, s) => e.formatByString(e.setSeconds(t, s), bl));
}, Pn = (e, t) => {
  if (t[0] === "0")
    return e;
  const o = [];
  let r = "";
  for (let s = 0; s < e.length; s += 1) {
    r += e[s];
    const i = t.indexOf(r);
    i > -1 && (o.push(i.toString()), r = "");
  }
  return o.join("");
}, Ei = (e, t) => t[0] === "0" ? e : e.split("").map((o) => t[Number(o)]).join(""), gl = (e, t) => {
  const o = Pn(e, t);
  return o !== " " && !Number.isNaN(Number(o));
}, Oi = (e, t) => Number(e).toString().padStart(t, "0"), Cu = (e, t, o, r, s) => {
  if (process.env.NODE_ENV !== "production" && s.type !== "day" && s.contentType === "digit-with-letter")
    throw new Error([`MUI X: The token "${s.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join(`
`));
  if (s.type === "day" && s.contentType === "digit-with-letter") {
    const a = e.setDate(o.longestMonth, t);
    return e.formatByString(a, s.format);
  }
  let i = t.toString();
  return s.hasLeadingZerosInInput && (i = Oi(i, s.maxLength)), Ei(i, r);
}, wi = (e, t, o) => {
  let r = e.value || e.placeholder;
  const s = t === "non-input" ? e.hasLeadingZerosInFormat : e.hasLeadingZerosInInput;
  return t === "non-input" && e.hasLeadingZerosInInput && !e.hasLeadingZerosInFormat && (r = Number(Pn(r, o)).toString()), ["input-rtl", "input-ltr"].includes(t) && e.contentType === "digit" && !s && r.length === 1 && (r = `${r}‎`), t === "input-rtl" && (r = `⁨${r}⁩`), r;
}, yl = (e, t, o, r) => {
  if (process.env.NODE_ENV !== "production" && Si(e, o).type === "weekDay")
    throw new Error("changeSectionValueFormat doesn't support week day formats");
  return e.formatByString(e.parse(t, o), r);
}, yb = (e, t) => e.formatByString(e.date(void 0, "system"), t).length === 4, Su = (e, t, o, r) => {
  if (t !== "digit")
    return !1;
  const s = e.date(void 0, "default");
  switch (o) {
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
}, vb = (e, t, o) => {
  const r = t.some((c) => c.type === "day"), s = [], i = [];
  for (let c = 0; c < t.length; c += 1) {
    const u = t[c];
    r && u.type === "weekDay" || (s.push(u.format), i.push(wi(u, "non-input", o)));
  }
  const a = s.join(" "), l = i.join(" ");
  return e.parse(l, a);
}, xb = (e) => e.map((t) => `${t.startSeparator}${t.value || t.placeholder}${t.endSeparator}`).join(""), Pb = (e, t, o) => {
  const s = e.map((i) => {
    const a = wi(i, o ? "input-rtl" : "input-ltr", t);
    return `${i.startSeparator}${a}${i.endSeparator}`;
  }).join("");
  return o ? `⁦${s}⁩` : s;
}, Cb = (e, t, o) => {
  const r = e.date(void 0, o), s = e.endOfYear(r), i = e.endOfDay(r), {
    maxDaysInMonth: a,
    longestMonth: l
  } = Pi(e, r).reduce((c, u) => {
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
      maximum: yb(e, c) ? 9999 : 99
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
        const d = Jr(e, c).map(Number);
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
      return Pn(e.formatByString(e.endOfDay(r), c), t) !== u.toString() ? {
        minimum: 1,
        maximum: Number(Pn(e.formatByString(e.startOfDay(r), c), t))
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
let vl = !1;
const xl = (e, t) => {
  if (process.env.NODE_ENV !== "production" && !vl) {
    const o = ["empty"];
    ["date", "date-time"].includes(t) && o.push("weekDay", "day", "month", "year"), ["time", "date-time"].includes(t) && o.push("hours", "minutes", "seconds", "meridiem");
    const r = e.find((s) => !o.includes(s.type));
    r && (console.warn(`MUI X: The field component you are using is not compatible with the "${r.type}" date section.`, `The supported date sections are ["${o.join('", "')}"]\`.`), vl = !0);
  }
}, Sb = (e, t, o, r) => {
  switch (t.type) {
    case "year":
      return e.setYear(r, e.getYear(o));
    case "month":
      return e.setMonth(r, e.getMonth(o));
    case "weekDay": {
      let s = e.formatByString(o, t.format);
      t.hasLeadingZerosInInput && (s = Oi(s, t.maxLength));
      const i = Jr(e, t.format), a = i.indexOf(s), c = i.indexOf(t.value) - a;
      return e.addDays(o, c);
    }
    case "day":
      return e.setDate(r, e.getDate(o));
    case "meridiem": {
      const s = e.getHours(o) < 12, i = e.getHours(r);
      return s && i >= 12 ? e.addHours(r, -12) : !s && i < 12 ? e.addHours(r, 12) : r;
    }
    case "hours":
      return e.setHours(r, e.getHours(o));
    case "minutes":
      return e.setMinutes(r, e.getMinutes(o));
    case "seconds":
      return e.setSeconds(r, e.getSeconds(o));
    default:
      return r;
  }
}, Pl = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
}, Cl = (e, t, o, r, s) => (
  // cloning sections before sort to avoid mutating it
  [...o].sort((i, a) => Pl[i.type] - Pl[a.type]).reduce((i, a) => !s || a.modified ? Sb(e, a, t, i) : i, r)
), Eb = () => navigator.userAgent.toLowerCase().includes("android"), Ob = (e, t) => {
  const o = {};
  if (!t)
    return e.forEach((c, u) => {
      const d = u === 0 ? null : u - 1, f = u === e.length - 1 ? null : u + 1;
      o[u] = {
        leftIndex: d,
        rightIndex: f
      };
    }), {
      neighbors: o,
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
    const d = s[u], f = d === 0 ? null : r[d - 1], h = d === e.length - 1 ? null : r[d + 1];
    o[u] = {
      leftIndex: f,
      rightIndex: h
    };
  }), {
    neighbors: o,
    startIndex: r[0],
    endIndex: r[e.length - 1]
  };
}, ei = (e, t) => {
  if (e == null)
    return null;
  if (e === "all")
    return "all";
  if (typeof e == "string") {
    const o = t.findIndex((r) => r.type === e);
    return o === -1 ? null : o;
  }
  return e;
}, wb = ["value", "referenceDate"], Ft = {
  emptyValue: null,
  getTodayValue: xu,
  getInitialReferenceValue: (e) => {
    let {
      value: t,
      referenceDate: o
    } = e, r = te(e, wb);
    return r.adapter.isValid(t) ? t : o ?? hb(r);
  },
  cleanValue: ab,
  areValuesEqual: lb,
  isSameError: (e, t) => e === t,
  hasError: (e) => e != null,
  defaultErrorState: null,
  getTimezone: (e, t) => e.isValid(t) ? e.getTimezone(t) : null,
  setTimezone: (e, t, o) => o == null ? null : e.setTimezone(o, t)
}, Tb = {
  updateReferenceValue: (e, t, o) => e.isValid(t) ? t : o,
  getSectionsFromValue: (e, t) => t(e),
  getV7HiddenInputValueFromSections: xb,
  getV6InputValueFromSections: Pb,
  parseValueStr: (e, t, o) => o(e.trim(), t),
  getDateFromSection: (e) => e,
  getDateSectionsFromValue: (e) => e,
  updateDateInValue: (e, t, o) => o,
  clearDateSections: (e) => e.map((t) => b({}, t, {
    value: ""
  }))
};
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function Ne(e) {
  return Ch(e);
}
function Rb(e) {
  return we("MuiTypography", e);
}
Ee("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const kb = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Db = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: s,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${ae(t)}`, o && "gutterBottom", r && "noWrap", s && "paragraph"]
  };
  return Ie(l, Rb, a);
}, Mb = G("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${ae(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
})), Sl = {
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
}, Ib = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Nb = (e) => Ib[e] || e, on = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiTypography"
  }), s = Nb(r.color), i = Jc(b({}, r, {
    color: s
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: f = !1,
    variant: h = "body1",
    variantMapping: y = Sl
  } = i, g = te(i, kb), p = b({}, i, {
    align: a,
    color: s,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: f,
    variant: h,
    variantMapping: y
  }), v = c || (f ? "p" : y[h] || Sl[h]) || "span", C = Db(p);
  return /* @__PURE__ */ O.jsx(Mb, b({
    as: v,
    ref: o,
    ownerState: p,
    className: ue(C.root, l)
  }, g));
});
process.env.NODE_ENV !== "production" && (on.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
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
  variantMapping: n.object
});
function Ye(e, t, o = void 0) {
  const r = {};
  for (const s in e) {
    const i = e[s];
    let a = "", l = !0;
    for (let c = 0; c < i.length; c += 1) {
      const u = i[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, o && o[u] && (a += " " + o[u]));
    }
    r[s] = a;
  }
  return r;
}
const El = (e) => e, $b = () => {
  let e = El;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = El;
    }
  };
}, Ab = $b(), jb = {
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
function Qe(e, t, o = "Mui") {
  const r = jb[t];
  return r ? `${o}-${r}` : `${Ab.generate(e)}-${t}`;
}
function Je(e, t, o = "Mui") {
  const r = {};
  return t.forEach((s) => {
    r[s] = Qe(e, s, o);
  }), r;
}
function Fb(e) {
  return Qe("MuiPickersToolbar", e);
}
Je("MuiPickersToolbar", ["root", "title", "content"]);
const Vb = ["localeText"], Rr = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Rr.displayName = "PickerAdapterContext");
const Ti = function(t) {
  const {
    localeText: o
  } = t, r = te(t, Vb), {
    adapter: s,
    localeText: i
  } = m.useContext(Rr) ?? {
    adapter: void 0,
    localeText: void 0
  }, a = ze({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: r,
    name: "MuiLocalizationProvider"
  }), {
    children: l,
    dateAdapter: c,
    dateFormats: u,
    dateLibInstance: d,
    adapterLocale: f,
    localeText: h
  } = a, y = m.useMemo(() => b({}, h, i, o), [h, i, o]), g = m.useMemo(() => {
    if (!c)
      return s || null;
    const C = new c({
      locale: f,
      formats: u,
      instance: d
    });
    if (!C.isMUIAdapter)
      throw new Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/quickstart/#installation"].join(`
`));
    return C;
  }, [c, f, u, d, s]), p = m.useMemo(() => g ? {
    minDate: g.date("1900-01-01T00:00:00.000"),
    maxDate: g.date("2099-12-31T00:00:00.000")
  } : null, [g]), v = m.useMemo(() => ({
    utils: g,
    adapter: g,
    defaultDates: p,
    localeText: y
  }), [p, g, y]);
  return /* @__PURE__ */ O.jsx(Rr.Provider, {
    value: v,
    children: l
  });
};
process.env.NODE_ENV !== "production" && (Ti.displayName = "LocalizationProvider");
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: n.any,
  children: n.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/quickstart/#integrate-provider-and-adapter date adapter setup section} for more details.
   */
  dateAdapter: n.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: n.shape({
    dayOfMonth: n.string,
    dayOfMonthFull: n.string,
    fullDate: n.string,
    fullTime12h: n.string,
    fullTime24h: n.string,
    hours12h: n.string,
    hours24h: n.string,
    keyboardDate: n.string,
    keyboardDateTime12h: n.string,
    keyboardDateTime24h: n.string,
    meridiem: n.string,
    minutes: n.string,
    month: n.string,
    monthShort: n.string,
    normalDate: n.string,
    normalDateWithWeekday: n.string,
    seconds: n.string,
    shortDate: n.string,
    weekday: n.string,
    weekdayShort: n.string,
    year: n.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: n.any,
  /**
   * Locale for components texts
   */
  localeText: n.object
});
const Ri = /* @__PURE__ */ m.createContext(() => !0);
process.env.NODE_ENV !== "production" && (Ri.displayName = "IsValidValueContext");
function _b() {
  return m.useContext(Ri);
}
const ki = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (ki.displayName = "PickerFieldPrivateContext");
function Eu() {
  return m.useContext(ki);
}
const es = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (es.displayName = "PickerContext");
const Jn = () => {
  const e = m.useContext(es);
  if (e == null)
    throw new Error("MUI X: The `usePickerContext` hook can only be called inside the context of a Picker component");
  return e;
}, Di = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Di.displayName = "PickerActionsContext");
const Mi = /* @__PURE__ */ m.createContext({
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
process.env.NODE_ENV !== "production" && (Mi.displayName = "PickerPrivateContext");
function Ou(e) {
  const {
    contextValue: t,
    actionsContextValue: o,
    privateContextValue: r,
    fieldPrivateContextValue: s,
    isValidContextValue: i,
    localeText: a,
    children: l
  } = e;
  return /* @__PURE__ */ O.jsx(es.Provider, {
    value: t,
    children: /* @__PURE__ */ O.jsx(Di.Provider, {
      value: o,
      children: /* @__PURE__ */ O.jsx(Mi.Provider, {
        value: r,
        children: /* @__PURE__ */ O.jsx(ki.Provider, {
          value: s,
          children: /* @__PURE__ */ O.jsx(Ri.Provider, {
            value: i,
            children: /* @__PURE__ */ O.jsx(Ti, {
              localeText: a,
              children: l
            })
          })
        })
      })
    })
  });
}
const rt = () => m.useContext(Mi);
function wu() {
  const {
    ownerState: e
  } = rt(), t = Lt();
  return m.useMemo(() => b({}, e, {
    toolbarDirection: t ? "rtl" : "ltr"
  }), [e, t]);
}
const Lb = ["children", "className", "classes", "toolbarTitle", "hidden", "titleId", "classes", "landscapeDirection"], Bb = (e) => Ye({
  root: ["root"],
  title: ["title"],
  content: ["content"]
}, Fb, e), Wb = G("div", {
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
})), zb = G("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  shouldForwardProp: (e) => Zn.shouldForwardProp(e) && e !== "landscapeDirection"
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
}), Tu = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
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
  } = r, f = te(r, Lb), h = wu(), y = Bb(a);
  return c ? null : /* @__PURE__ */ O.jsxs(Wb, b({
    ref: o,
    className: ue(y.root, i),
    ownerState: h
  }, f, {
    children: [/* @__PURE__ */ O.jsx(on, {
      color: "text.secondary",
      variant: "overline",
      id: u,
      className: y.title,
      children: l
    }), /* @__PURE__ */ O.jsx(zb, {
      className: y.content,
      ownerState: h,
      landscapeDirection: d,
      children: s
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Tu.displayName = "PickersToolbar");
const Ub = (e) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: b({}, e)
      }
    }
  }
}), Ru = {
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
}, qb = Ru;
Ub(Ru);
const Ii = () => {
  const e = m.useContext(Rr);
  if (e === null)
    throw new Error(["MUI X: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join(`
`));
  if (e.adapter === null)
    throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join(`
`));
  const t = m.useMemo(() => b({}, qb, e.localeText), [e.localeText]);
  return m.useMemo(() => b({}, e, {
    localeText: t
  }), [e, t]);
}, Ve = () => Ii().adapter, rn = () => Ii().localeText, ti = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"], ni = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"], ku = ["minDateTime", "maxDateTime"], Hb = [...ti, ...ni, ...ku], Du = (e) => Hb.reduce((t, o) => (e.hasOwnProperty(o) && (t[o] = e[o]), t), {}), Yb = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef", "unstableStartFieldRef", "unstableEndFieldRef", "enableAccessibleFieldDOMStructure", "disabled", "readOnly", "dateSeparator", "autoFocus", "focused"], Mu = (e, t) => m.useMemo(() => {
  const o = b({}, e), r = {}, s = (i) => {
    o.hasOwnProperty(i) && (r[i] = o[i], delete o[i]);
  };
  return Yb.forEach(s), t === "date" ? ti.forEach(s) : t === "time" ? ni.forEach(s) : t === "date-time" && (ti.forEach(s), ni.forEach(s), ku.forEach(s)), {
    forwardedProps: o,
    internalProps: r
  };
}, [e, t]), Kb = ({
  adapter: e,
  format: t
}) => {
  let o = 10, r = t, s = e.expandFormat(t);
  for (; s !== r; )
    if (r = s, s = e.expandFormat(r), o -= 1, o < 0)
      throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the component.");
  return s;
}, Gb = ({
  adapter: e,
  expandedFormat: t
}) => {
  const o = [], {
    start: r,
    end: s
  } = e.escapedCharacters, i = new RegExp(`(\\${r}[^\\${s}]*\\${s})+`, "g");
  let a = null;
  for (; a = i.exec(t); )
    o.push({
      start: a.index,
      end: i.lastIndex - 1
    });
  return o;
}, Xb = (e, t, o, r) => {
  switch (o.type) {
    case "year":
      return t.fieldYearPlaceholder({
        digitAmount: e.formatByString(e.date(void 0, "default"), r).length,
        format: r
      });
    case "month":
      return t.fieldMonthPlaceholder({
        contentType: o.contentType,
        format: r
      });
    case "day":
      return t.fieldDayPlaceholder({
        format: r
      });
    case "weekDay":
      return t.fieldWeekDayPlaceholder({
        contentType: o.contentType,
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
}, Qb = ({
  adapter: e,
  date: t,
  shouldRespectLeadingZeros: o,
  localeText: r,
  localizedDigits: s,
  now: i,
  token: a,
  startSeparator: l
}) => {
  if (a === "")
    throw new Error("MUI X: Should not call `commitToken` with an empty token");
  const c = Si(e, a), u = Su(e, c.contentType, c.type, a), d = o ? u : c.contentType === "digit", f = e.isValid(t);
  let h = f ? e.formatByString(t, a) : "", y = null;
  if (d)
    if (u)
      y = h === "" ? e.formatByString(i, a).length : h.length;
    else {
      if (c.maxLength == null)
        throw new Error(`MUI X: The token ${a} should have a 'maxLength' property on it's adapter`);
      y = c.maxLength, f && (h = Ei(Oi(Pn(h, s), y), s));
    }
  return b({}, c, {
    format: a,
    maxLength: y,
    value: h,
    placeholder: Xb(e, r, c, a),
    hasLeadingZerosInFormat: u,
    hasLeadingZerosInInput: d,
    startSeparator: l,
    endSeparator: "",
    modified: !1
  });
}, Zb = (e) => {
  const {
    adapter: t,
    expandedFormat: o,
    escapedParts: r
  } = e, s = t.date(void 0), i = [];
  let a = "";
  const l = Object.keys(t.formatTokenMap).sort((y, g) => g.length - y.length), c = /^([a-zA-Z]+)/, u = new RegExp(`^(${l.join("|")})*$`), d = new RegExp(`^(${l.join("|")})`), f = (y) => r.find((g) => g.start <= y && g.end >= y);
  let h = 0;
  for (; h < o.length; ) {
    const y = f(h), g = y != null, p = c.exec(o.slice(h))?.[1];
    if (!g && p != null && u.test(p)) {
      let v = p;
      for (; v.length > 0; ) {
        const C = d.exec(v)[1];
        v = v.slice(C.length), i.push(Qb(b({}, e, {
          now: s,
          token: C,
          startSeparator: a
        }))), a = "";
      }
      h += p.length;
    } else {
      const v = o[h];
      g && y?.start === h || y?.end === h || (i.length === 0 ? a += v : (i[i.length - 1].endSeparator += v, i[i.length - 1].isEndFormatSeparator = !0)), h += 1;
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
}, Jb = ({
  isRtl: e,
  formatDensity: t,
  sections: o
}) => o.map((r) => {
  const s = (i) => {
    let a = i;
    return e && a !== null && a.includes(" ") && (a = `⁩${a}⁦`), t === "spacious" && ["/", ".", "-"].includes(a) && (a = ` ${a} `), a;
  };
  return r.startSeparator = s(r.startSeparator), r.endSeparator = s(r.endSeparator), r;
}), Ol = (e) => {
  let t = Kb(e);
  e.isRtl && e.enableAccessibleFieldDOMStructure && (t = t.split(" ").reverse().join(" "));
  const o = Gb(b({}, e, {
    expandedFormat: t
  })), r = Zb(b({}, e, {
    expandedFormat: t,
    escapedParts: o
  }));
  return Jb(b({}, e, {
    sections: r
  }));
}, Ni = () => m.useContext(es), eg = () => {
  const e = m.useContext(Di);
  if (e == null)
    throw new Error(["MUI X: The `usePickerActionsContext` can only be called in fields that are used as a slot of a Picker component"].join(`
`));
  return e;
};
function tg(e) {
  return Qe("MuiDatePickerToolbar", e);
}
Je("MuiDatePickerToolbar", ["root", "title"]);
const ng = ["toolbarFormat", "toolbarPlaceholder", "className", "classes"], og = (e) => Ye({
  root: ["root"],
  title: ["title"]
}, tg, e), rg = G(Tu, {
  name: "MuiDatePickerToolbar",
  slot: "Root"
})({}), sg = G(on, {
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
}), $i = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiDatePickerToolbar"
  }), {
    toolbarFormat: s,
    toolbarPlaceholder: i = "––",
    className: a,
    classes: l
  } = r, c = te(r, ng), u = Ve(), {
    value: d,
    views: f,
    orientation: h
  } = Jn(), y = rn(), g = wu(), p = og(l), v = m.useMemo(() => {
    if (!u.isValid(d))
      return i;
    const C = Ci(u, {
      format: s,
      views: f
    }, !0);
    return u.formatByString(d, C);
  }, [d, s, i, u, f]);
  return /* @__PURE__ */ O.jsx(rg, b({
    ref: o,
    toolbarTitle: y.datePickerToolbarTitle,
    className: ue(p.root, a)
  }, c, {
    children: /* @__PURE__ */ O.jsx(sg, {
      variant: "h4",
      align: h === "landscape" ? "left" : "center",
      ownerState: g,
      className: p.title,
      children: v
    })
  }));
});
process.env.NODE_ENV !== "production" && ($i.displayName = "DatePickerToolbar");
process.env.NODE_ENV !== "production" && ($i.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  titleId: n.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: n.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: n.node
});
const Xo = ({
  props: e,
  value: t,
  timezone: o,
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
  } = e, f = r.date(void 0, o);
  switch (!0) {
    case !r.isValid(t):
      return "invalidDate";
    case !!(s && s(t)):
      return "shouldDisableDate";
    case !!(i && i(t)):
      return "shouldDisableMonth";
    case !!(a && a(t)):
      return "shouldDisableYear";
    case !!(c && r.isAfterDay(t, f)):
      return "disableFuture";
    case !!(l && r.isBeforeDay(t, f)):
      return "disablePast";
    case !!(u && r.isBeforeDay(t, u)):
      return "minDate";
    case !!(d && r.isAfterDay(t, d)):
      return "maxDate";
    default:
      return null;
  }
};
Xo.valueManager = Ft;
const Vt = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function pe(e) {
  const t = m.useRef(e);
  return Vt(() => {
    t.current = e;
  }), m.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Iu(e) {
  const {
    props: t,
    validator: o,
    value: r,
    timezone: s,
    onError: i
  } = e, a = Ve(), l = m.useRef(o.valueManager.defaultErrorState), c = o({
    adapter: a,
    value: r,
    timezone: s,
    props: t
  }), u = o.valueManager.hasError(c);
  m.useEffect(() => {
    i && !o.valueManager.isSameError(c, l.current) && i(c, r), l.current = c;
  }, [o, i, c, r]);
  const d = pe((f) => o({
    adapter: a,
    value: f,
    timezone: s,
    props: t
  }));
  return {
    validationError: c,
    hasValidationError: u,
    getValidationErrorForNewValue: d
  };
}
const ig = () => Ii().defaultDates, ts = (e) => {
  const t = Ve(), o = m.useRef(void 0);
  return o.current === void 0 && (o.current = t.date(void 0, e)), o.current;
};
function ag(e = {}) {
  const {
    enableAccessibleFieldDOMStructure: t = !0
  } = e;
  return m.useMemo(() => ({
    valueType: "date",
    validator: Xo,
    internal_valueManager: Ft,
    internal_fieldValueManager: Tb,
    internal_enableAccessibleFieldDOMStructure: t,
    internal_useApplyDefaultValuesToFieldInternalProps: cg,
    internal_useOpenPickerButtonAriaLabel: lg
  }), [t]);
}
function lg(e) {
  const t = Ve(), o = rn();
  return m.useMemo(() => {
    const r = t.isValid(e) ? t.format(e, "fullDate") : null;
    return o.openDatePickerDialogue(r);
  }, [e, o, t]);
}
function cg(e) {
  const t = Ve(), o = Qo(e);
  return m.useMemo(() => b({}, e, o, {
    format: e.format ?? t.formats.keyboardDate
  }), [e, o, t]);
}
function Qo(e) {
  const t = Ve(), o = ig();
  return m.useMemo(() => ({
    disablePast: e.disablePast ?? !1,
    disableFuture: e.disableFuture ?? !1,
    minDate: fl(t, e.minDate, o.minDate),
    maxDate: fl(t, e.maxDate, o.maxDate)
  }), [e.minDate, e.maxDate, e.disableFuture, e.disablePast, t, o]);
}
function Nu(e, t) {
  const o = ze({
    props: e,
    name: t
  }), r = Qo(o), s = m.useMemo(() => o.localeText?.toolbarTitle == null ? o.localeText : b({}, o.localeText, {
    datePickerToolbarTitle: o.localeText.toolbarTitle
  }), [o.localeText]);
  return b({}, o, r, {
    localeText: s
  }, ib({
    views: o.views,
    openTo: o.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    slots: b({
      toolbar: $i
    }, o.slots)
  });
}
function ft(...e) {
  const t = m.useRef(void 0), o = m.useCallback((r) => {
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
    t.current && (t.current(), t.current = void 0), r != null && (t.current = o(r));
  }, e);
}
function ug(e) {
  return typeof e == "string";
}
function dg(e, t, o) {
  return e === void 0 || ug(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function pg(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function wl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function fg(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!t) {
    const y = ue(o?.className, i, s?.className, r?.className), g = {
      ...o?.style,
      ...s?.style,
      ...r?.style
    }, p = {
      ...o,
      ...s,
      ...r
    };
    return y.length > 0 && (p.className = y), Object.keys(g).length > 0 && (p.style = g), {
      props: p,
      internalRef: void 0
    };
  }
  const a = pg({
    ...s,
    ...r
  }), l = wl(r), c = wl(s), u = t(a), d = ue(u?.className, o?.className, i, s?.className, r?.className), f = {
    ...u?.style,
    ...o?.style,
    ...s?.style,
    ...r?.style
  }, h = {
    ...u,
    ...o,
    ...c,
    ...l
  };
  return d.length > 0 && (h.className = d), Object.keys(f).length > 0 && (h.style = f), {
    props: h,
    internalRef: u.ref
  };
}
function Me(e) {
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: s = !1,
    ...i
  } = e, a = s ? {} : Rt(o, r), {
    props: l,
    internalRef: c
  } = fg({
    ...i,
    externalSlotProps: a
  }), u = ft(c, a?.ref, e.additionalProps?.ref);
  return dg(t, {
    ...l,
    ref: u
  }, r);
}
function oi(e, t) {
  return oi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, oi(e, t);
}
function Ai(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, oi(e, t);
}
function mg(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function hg(e, t) {
  e.classList ? e.classList.add(t) : mg(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Tl(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function bg(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Tl(e.className, t) : e.setAttribute("class", Tl(e.className && e.className.baseVal || "", t));
}
const Rl = {
  disabled: !1
};
var gg = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null, yg = process.env.NODE_ENV !== "production" ? n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]) : null;
const kr = ve.createContext(null);
var $u = function(t) {
  return t.scrollTop;
}, xo = "unmounted", pn = "exited", fn = "entering", In = "entered", ri = "exiting", Ot = /* @__PURE__ */ (function(e) {
  Ai(t, e);
  function t(r, s) {
    var i;
    i = e.call(this, r, s) || this;
    var a = s, l = a && !a.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? l ? (c = pn, i.appearStatus = fn) : c = In : r.unmountOnExit || r.mountOnEnter ? c = xo : c = pn, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(s, i) {
    var a = s.in;
    return a && i.status === xo ? {
      status: pn
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(s) {
    var i = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== fn && a !== In && (i = fn) : (a === fn || a === In) && (i = ri);
    }
    this.updateStatus(!1, i);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var s = this.props.timeout, i, a, l;
    return i = a = l = s, s != null && typeof s != "number" && (i = s.exit, a = s.enter, l = s.appear !== void 0 ? s.appear : a), {
      exit: i,
      enter: a,
      appear: l
    };
  }, o.updateStatus = function(s, i) {
    if (s === void 0 && (s = !1), i !== null)
      if (this.cancelNextCallback(), i === fn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : sr.findDOMNode(this);
          a && $u(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === pn && this.setState({
      status: xo
    });
  }, o.performEnter = function(s) {
    var i = this, a = this.props.enter, l = this.context ? this.context.isMounting : s, c = this.props.nodeRef ? [l] : [sr.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), h = l ? f.appear : f.enter;
    if (!s && !a || Rl.disabled) {
      this.safeSetState({
        status: In
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: fn
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: In
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var s = this, i = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : sr.findDOMNode(this);
    if (!i || Rl.disabled) {
      this.safeSetState({
        status: pn
      }, function() {
        s.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: ri
    }, function() {
      s.props.onExiting(l), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: pn
        }, function() {
          s.props.onExited(l);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(s, i) {
    i = this.setNextCallback(i), this.setState(s, i);
  }, o.setNextCallback = function(s) {
    var i = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, i.nextCallback = null, s(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(s, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : sr.findDOMNode(this), l = s == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, o.render = function() {
    var s = this.state.status;
    if (s === xo)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = te(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ve.createElement(kr.Provider, {
        value: null
      }, typeof a == "function" ? a(s, l) : ve.cloneElement(ve.Children.only(a), l))
    );
  }, t;
})(ve.Component);
Ot.contextType = kr;
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, o, r, s, i) {
      var a = e[t];
      return n.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, o, r, s, i);
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
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
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
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
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
    var o = gg;
    t.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      s[i - 1] = arguments[i];
    return o.apply(void 0, [t].concat(s));
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
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function Dn() {
}
Ot.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Dn,
  onEntering: Dn,
  onEntered: Dn,
  onExit: Dn,
  onExiting: Dn,
  onExited: Dn
};
Ot.UNMOUNTED = xo;
Ot.EXITED = pn;
Ot.ENTERING = fn;
Ot.ENTERED = In;
Ot.EXITING = ri;
var vg = function(t, o) {
  return t && o && o.split(" ").forEach(function(r) {
    return hg(t, r);
  });
}, Bs = function(t, o) {
  return t && o && o.split(" ").forEach(function(r) {
    return bg(t, r);
  });
}, ji = /* @__PURE__ */ (function(e) {
  Ai(t, e);
  function t() {
    for (var r, s = arguments.length, i = new Array(s), a = 0; a < s; a++)
      i[a] = arguments[a];
    return r = e.call.apply(e, [this].concat(i)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], f = u[1];
      r.removeClasses(d, "exit"), r.addClass(d, f ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(l, c);
    }, r.onEntering = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], f = u[1], h = f ? "appear" : "enter";
      r.addClass(d, h, "active"), r.props.onEntering && r.props.onEntering(l, c);
    }, r.onEntered = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], f = u[1], h = f ? "appear" : "enter";
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
      var c = r.props.classNames, u = typeof c == "string", d = u && c ? c + "-" : "", f = u ? "" + d + l : c[l], h = u ? f + "-active" : c[l + "Active"], y = u ? f + "-done" : c[l + "Done"];
      return {
        baseClassName: f,
        activeClassName: h,
        doneClassName: y
      };
    }, r;
  }
  var o = t.prototype;
  return o.addClass = function(s, i, a) {
    var l = this.getClassNames(i)[a + "ClassName"], c = this.getClassNames("enter"), u = c.doneClassName;
    i === "appear" && a === "done" && u && (l += " " + u), a === "active" && s && $u(s), l && (this.appliedClasses[i][a] = l, vg(s, l));
  }, o.removeClasses = function(s, i) {
    var a = this.appliedClasses[i], l = a.base, c = a.active, u = a.done;
    this.appliedClasses[i] = {}, l && Bs(s, l), c && Bs(s, c), u && Bs(s, u);
  }, o.render = function() {
    var s = this.props;
    s.classNames;
    var i = te(s, ["classNames"]);
    return /* @__PURE__ */ ve.createElement(Ot, b({}, i, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
})(ve.Component);
ji.defaultProps = {
  classNames: ""
};
ji.propTypes = process.env.NODE_ENV !== "production" ? b({}, Ot.propTypes, {
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
  classNames: yg,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: n.func
}) : {};
function xg(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fi(e, t) {
  var o = function(i) {
    return t && br(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Jd.map(e, function(s) {
    return s;
  }).forEach(function(s) {
    r[s.key] = o(s);
  }), r;
}
function Pg(e, t) {
  e = e || {}, t = t || {};
  function o(d) {
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
        l[r[c][a]] = o(u);
      }
    l[c] = o(c);
  }
  for (a = 0; a < s.length; a++)
    l[s[a]] = o(s[a]);
  return l;
}
function hn(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Cg(e, t) {
  return Fi(e.children, function(o) {
    return gr(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: hn(o, "appear", e),
      enter: hn(o, "enter", e),
      exit: hn(o, "exit", e)
    });
  });
}
function Sg(e, t, o) {
  var r = Fi(e.children), s = Pg(t, r);
  return Object.keys(s).forEach(function(i) {
    var a = s[i];
    if (br(a)) {
      var l = i in t, c = i in r, u = t[i], d = br(u) && !u.props.in;
      c && (!l || d) ? s[i] = gr(a, {
        onExited: o.bind(null, a),
        in: !0,
        exit: hn(a, "exit", e),
        enter: hn(a, "enter", e)
      }) : !c && l && !d ? s[i] = gr(a, {
        in: !1
      }) : c && l && br(u) && (s[i] = gr(a, {
        onExited: o.bind(null, a),
        in: u.props.in,
        exit: hn(a, "exit", e),
        enter: hn(a, "enter", e)
      }));
    }
  }), s;
}
var Eg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Og = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Zo = /* @__PURE__ */ (function(e) {
  Ai(t, e);
  function t(r, s) {
    var i;
    i = e.call(this, r, s) || this;
    var a = i.handleExited.bind(xg(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(s, i) {
    var a = i.children, l = i.handleExited, c = i.firstRender;
    return {
      children: c ? Cg(s, l) : Sg(s, a, l),
      firstRender: !1
    };
  }, o.handleExited = function(s, i) {
    var a = Fi(this.props.children);
    s.key in a || (s.props.onExited && s.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = b({}, l.children);
      return delete c[s.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var s = this.props, i = s.component, a = s.childFactory, l = te(s, ["component", "childFactory"]), c = this.state.contextValue, u = Eg(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ ve.createElement(kr.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ve.createElement(kr.Provider, {
      value: c
    }, /* @__PURE__ */ ve.createElement(i, l, u));
  }, t;
})(ve.Component);
Zo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
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
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
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
  childFactory: n.func
} : {};
Zo.defaultProps = Og;
const Au = (e) => e.scrollTop;
function Dr(e, t) {
  var o, r;
  const {
    timeout: s,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (o = a.transitionDuration) != null ? o : typeof s == "number" ? s : s[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
const wg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function si(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Tg = {
  entering: {
    opacity: 1,
    transform: si(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ws = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ns = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: s = !0,
    children: i,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: h,
    onExiting: y,
    style: g,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Ot
  } = t, C = te(t, wg), T = du(), S = m.useRef(), x = Qn(), E = m.useRef(null), I = tt(E, Go(i), o), P = (V) => (j) => {
    if (V) {
      const A = E.current;
      j === void 0 ? V(A) : V(A, j);
    }
  }, w = P(d), k = P((V, j) => {
    Au(V);
    const {
      duration: A,
      delay: L,
      easing: B
    } = Dr({
      style: g,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let R;
    p === "auto" ? (R = x.transitions.getAutoHeightDuration(V.clientHeight), S.current = R) : R = A, V.style.transition = [x.transitions.create("opacity", {
      duration: R,
      delay: L
    }), x.transitions.create("transform", {
      duration: Ws ? R : R * 0.666,
      delay: L,
      easing: B
    })].join(","), c && c(V, j);
  }), M = P(u), N = P(y), D = P((V) => {
    const {
      duration: j,
      delay: A,
      easing: L
    } = Dr({
      style: g,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let B;
    p === "auto" ? (B = x.transitions.getAutoHeightDuration(V.clientHeight), S.current = B) : B = j, V.style.transition = [x.transitions.create("opacity", {
      duration: B,
      delay: A
    }), x.transitions.create("transform", {
      duration: Ws ? B : B * 0.666,
      delay: Ws ? A : A || B * 0.333,
      easing: L
    })].join(","), V.style.opacity = 0, V.style.transform = si(0.75), f && f(V);
  }), F = P(h), $ = (V) => {
    p === "auto" && T.start(S.current || 0, V), r && r(E.current, V);
  };
  return /* @__PURE__ */ O.jsx(v, b({
    appear: s,
    in: l,
    nodeRef: E,
    onEnter: k,
    onEntered: M,
    onEntering: w,
    onExit: D,
    onExited: F,
    onExiting: N,
    addEndListener: $,
    timeout: p === "auto" ? null : p
  }, C, {
    children: (V, j) => /* @__PURE__ */ m.cloneElement(i, b({
      style: b({
        opacity: 0,
        transform: si(0.75),
        visibility: V === "exited" && !l ? "hidden" : void 0
      }, Tg[V], g, i.props.style),
      ref: I
    }, j))
  }));
});
process.env.NODE_ENV !== "production" && (ns.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Ko.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
ns.muiSupportAuto = !0;
const Rg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], kg = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, En = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Qn(), s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: h,
    onExit: y,
    onExited: g,
    onExiting: p,
    style: v,
    timeout: C = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Ot
  } = t, S = te(t, Rg), x = m.useRef(null), E = tt(x, Go(l), o), I = ($) => (V) => {
    if ($) {
      const j = x.current;
      V === void 0 ? $(j) : $(j, V);
    }
  }, P = I(h), w = I(($, V) => {
    Au($);
    const j = Dr({
      style: v,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    $.style.webkitTransition = r.transitions.create("opacity", j), $.style.transition = r.transitions.create("opacity", j), d && d($, V);
  }), k = I(f), M = I(p), N = I(($) => {
    const V = Dr({
      style: v,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    $.style.webkitTransition = r.transitions.create("opacity", V), $.style.transition = r.transitions.create("opacity", V), y && y($);
  }), D = I(g), F = ($) => {
    i && i(x.current, $);
  };
  return /* @__PURE__ */ O.jsx(T, b({
    appear: a,
    in: u,
    nodeRef: x,
    onEnter: w,
    onEntered: k,
    onEntering: P,
    onExit: N,
    onExited: D,
    onExiting: M,
    addEndListener: F,
    timeout: C
  }, S, {
    children: ($, V) => /* @__PURE__ */ m.cloneElement(l, b({
      style: b({
        opacity: 0,
        visibility: $ === "exited" && !u ? "hidden" : void 0
      }, kg[$], v, l.props.style),
      ref: E
    }, V))
  }));
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Ko.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function Dg(e) {
  return we("MuiPaper", e);
}
Ee("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Mg = ["className", "component", "elevation", "square", "variant"], Ig = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: s
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return Ie(i, Dg, s);
}, Ng = G("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return b({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && b({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${_e.alpha("#fff", pl(t.elevation))}, ${_e.alpha("#fff", pl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), Jo = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiPaper"
  }), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = te(r, Mg), d = b({}, r, {
    component: i,
    elevation: a,
    square: l,
    variant: c
  }), f = Ig(d);
  return process.env.NODE_ENV !== "production" && Qn().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ O.jsx(Ng, b({
    as: i,
    ownerState: d,
    className: ue(f.root, s),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (Jo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: nn(hu, (e) => {
    const {
      elevation: t,
      variant: o
    } = e;
    return t > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
var co = {}, kl;
function $g() {
  if (kl) return co;
  kl = 1, Object.defineProperty(co, "__esModule", {
    value: !0
  }), co.default = void 0;
  var e = r(ve), t = yu;
  function o(a) {
    if (typeof WeakMap != "function") return null;
    var l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
    return (o = function(u) {
      return u ? c : l;
    })(a);
  }
  function r(a, l) {
    if (a && a.__esModule) return a;
    if (a === null || typeof a != "object" && typeof a != "function") return { default: a };
    var c = o(l);
    if (c && c.has(a)) return c.get(a);
    var u = { __proto__: null }, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var f in a) if (f !== "default" && Object.prototype.hasOwnProperty.call(a, f)) {
      var h = d ? Object.getOwnPropertyDescriptor(a, f) : null;
      h && (h.get || h.set) ? Object.defineProperty(u, f, h) : u[f] = a[f];
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
  return co.default = i, co;
}
var Ag = /* @__PURE__ */ $g();
const jg = /* @__PURE__ */ ci(Ag);
var ut = "top", Ct = "bottom", St = "right", dt = "left", Vi = "auto", er = [ut, Ct, St, dt], Un = "start", jo = "end", Fg = "clippingParents", ju = "viewport", uo = "popper", Vg = "reference", Dl = /* @__PURE__ */ er.reduce(function(e, t) {
  return e.concat([t + "-" + Un, t + "-" + jo]);
}, []), Fu = /* @__PURE__ */ [].concat(er, [Vi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Un, t + "-" + jo]);
}, []), _g = "beforeRead", Lg = "read", Bg = "afterRead", Wg = "beforeMain", zg = "main", Ug = "afterMain", qg = "beforeWrite", Hg = "write", Yg = "afterWrite", Kg = [_g, Lg, Bg, Wg, zg, Ug, qg, Hg, Yg];
function _t(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function gt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Cn(e) {
  var t = gt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pt(e) {
  var t = gt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function _i(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = gt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Gg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, s = t.attributes[o] || {}, i = t.elements[o];
    !Pt(i) || !_t(i) || (Object.assign(i.style, r), Object.keys(s).forEach(function(a) {
      var l = s[a];
      l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Xg(e) {
  var t = e.state, o = {
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
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Pt(s) || !_t(s) || (Object.assign(s.style, l), Object.keys(i).forEach(function(c) {
        s.removeAttribute(c);
      }));
    });
  };
}
const Qg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gg,
  effect: Xg,
  requires: ["computeStyles"]
};
function jt(e) {
  return e.split("-")[0];
}
var bn = Math.max, Mr = Math.min, qn = Math.round;
function ii() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Vu() {
  return !/^((?!chrome|android).)*safari/i.test(ii());
}
function Hn(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), s = 1, i = 1;
  t && Pt(e) && (s = e.offsetWidth > 0 && qn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && qn(r.height) / e.offsetHeight || 1);
  var a = Cn(e) ? gt(e) : window, l = a.visualViewport, c = !Vu() && o, u = (r.left + (c && l ? l.offsetLeft : 0)) / s, d = (r.top + (c && l ? l.offsetTop : 0)) / i, f = r.width / s, h = r.height / i;
  return {
    width: f,
    height: h,
    top: d,
    right: u + f,
    bottom: d + h,
    left: u,
    x: u,
    y: d
  };
}
function Li(e) {
  var t = Hn(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function _u(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && _i(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function qt(e) {
  return gt(e).getComputedStyle(e);
}
function Zg(e) {
  return ["table", "td", "th"].indexOf(_t(e)) >= 0;
}
function sn(e) {
  return ((Cn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function os(e) {
  return _t(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (_i(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    sn(e)
  );
}
function Ml(e) {
  return !Pt(e) || // https://github.com/popperjs/popper-core/issues/837
  qt(e).position === "fixed" ? null : e.offsetParent;
}
function Jg(e) {
  var t = /firefox/i.test(ii()), o = /Trident/i.test(ii());
  if (o && Pt(e)) {
    var r = qt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = os(e);
  for (_i(s) && (s = s.host); Pt(s) && ["html", "body"].indexOf(_t(s)) < 0; ) {
    var i = qt(s);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function tr(e) {
  for (var t = gt(e), o = Ml(e); o && Zg(o) && qt(o).position === "static"; )
    o = Ml(o);
  return o && (_t(o) === "html" || _t(o) === "body" && qt(o).position === "static") ? t : o || Jg(e) || t;
}
function Bi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function So(e, t, o) {
  return bn(e, Mr(t, o));
}
function ey(e, t, o) {
  var r = So(e, t, o);
  return r > o ? o : r;
}
function Lu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Bu(e) {
  return Object.assign({}, Lu(), e);
}
function Wu(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var ty = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Bu(typeof t != "number" ? t : Wu(t, er));
};
function ny(e) {
  var t, o = e.state, r = e.name, s = e.options, i = o.elements.arrow, a = o.modifiersData.popperOffsets, l = jt(o.placement), c = Bi(l), u = [dt, St].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !a)) {
    var f = ty(s.padding, o), h = Li(i), y = c === "y" ? ut : dt, g = c === "y" ? Ct : St, p = o.rects.reference[d] + o.rects.reference[c] - a[c] - o.rects.popper[d], v = a[c] - o.rects.reference[c], C = tr(i), T = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, S = p / 2 - v / 2, x = f[y], E = T - h[d] - f[g], I = T / 2 - h[d] / 2 + S, P = So(x, I, E), w = c;
    o.modifiersData[r] = (t = {}, t[w] = P, t.centerOffset = P - I, t);
  }
}
function oy(e) {
  var t = e.state, o = e.options, r = o.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || _u(t.elements.popper, s) && (t.elements.arrow = s));
}
const ry = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ny,
  effect: oy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Yn(e) {
  return e.split("-")[1];
}
var sy = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function iy(e, t) {
  var o = e.x, r = e.y, s = t.devicePixelRatio || 1;
  return {
    x: qn(o * s) / s || 0,
    y: qn(r * s) / s || 0
  };
}
function Il(e) {
  var t, o = e.popper, r = e.popperRect, s = e.placement, i = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, h = a.x, y = h === void 0 ? 0 : h, g = a.y, p = g === void 0 ? 0 : g, v = typeof d == "function" ? d({
    x: y,
    y: p
  }) : {
    x: y,
    y: p
  };
  y = v.x, p = v.y;
  var C = a.hasOwnProperty("x"), T = a.hasOwnProperty("y"), S = dt, x = ut, E = window;
  if (u) {
    var I = tr(o), P = "clientHeight", w = "clientWidth";
    if (I === gt(o) && (I = sn(o), qt(I).position !== "static" && l === "absolute" && (P = "scrollHeight", w = "scrollWidth")), I = I, s === ut || (s === dt || s === St) && i === jo) {
      x = Ct;
      var k = f && I === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[P]
      );
      p -= k - r.height, p *= c ? 1 : -1;
    }
    if (s === dt || (s === ut || s === Ct) && i === jo) {
      S = St;
      var M = f && I === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[w]
      );
      y -= M - r.width, y *= c ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, u && sy), D = d === !0 ? iy({
    x: y,
    y: p
  }, gt(o)) : {
    x: y,
    y: p
  };
  if (y = D.x, p = D.y, c) {
    var F;
    return Object.assign({}, N, (F = {}, F[x] = T ? "0" : "", F[S] = C ? "0" : "", F.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + p + "px)" : "translate3d(" + y + "px, " + p + "px, 0)", F));
  }
  return Object.assign({}, N, (t = {}, t[x] = T ? p + "px" : "", t[S] = C ? y + "px" : "", t.transform = "", t));
}
function ay(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, s = r === void 0 ? !0 : r, i = o.adaptive, a = i === void 0 ? !0 : i, l = o.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: jt(t.placement),
    variation: Yn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Il(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Il(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ly = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ay,
  data: {}
};
var dr = {
  passive: !0
};
function cy(e) {
  var t = e.state, o = e.instance, r = e.options, s = r.scroll, i = s === void 0 ? !0 : s, a = r.resize, l = a === void 0 ? !0 : a, c = gt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", o.update, dr);
  }), l && c.addEventListener("resize", o.update, dr), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", o.update, dr);
    }), l && c.removeEventListener("resize", o.update, dr);
  };
}
const uy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: cy,
  data: {}
};
var dy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Cr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return dy[t];
  });
}
var py = {
  start: "end",
  end: "start"
};
function Nl(e) {
  return e.replace(/start|end/g, function(t) {
    return py[t];
  });
}
function Wi(e) {
  var t = gt(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function zi(e) {
  return Hn(sn(e)).left + Wi(e).scrollLeft;
}
function fy(e, t) {
  var o = gt(e), r = sn(e), s = o.visualViewport, i = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (s) {
    i = s.width, a = s.height;
    var u = Vu();
    (u || !u && t === "fixed") && (l = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l + zi(e),
    y: c
  };
}
function my(e) {
  var t, o = sn(e), r = Wi(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, i = bn(o.scrollWidth, o.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = bn(o.scrollHeight, o.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -r.scrollLeft + zi(e), c = -r.scrollTop;
  return qt(s || o).direction === "rtl" && (l += bn(o.clientWidth, s ? s.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Ui(e) {
  var t = qt(e), o = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + s + r);
}
function zu(e) {
  return ["html", "body", "#document"].indexOf(_t(e)) >= 0 ? e.ownerDocument.body : Pt(e) && Ui(e) ? e : zu(os(e));
}
function Eo(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = zu(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = gt(r), a = s ? [i].concat(i.visualViewport || [], Ui(r) ? r : []) : r, l = t.concat(a);
  return s ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Eo(os(a)))
  );
}
function ai(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function hy(e, t) {
  var o = Hn(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function $l(e, t, o) {
  return t === ju ? ai(fy(e, o)) : Cn(t) ? hy(t, o) : ai(my(sn(e)));
}
function by(e) {
  var t = Eo(os(e)), o = ["absolute", "fixed"].indexOf(qt(e).position) >= 0, r = o && Pt(e) ? tr(e) : e;
  return Cn(r) ? t.filter(function(s) {
    return Cn(s) && _u(s, r) && _t(s) !== "body";
  }) : [];
}
function gy(e, t, o, r) {
  var s = t === "clippingParents" ? by(e) : [].concat(t), i = [].concat(s, [o]), a = i[0], l = i.reduce(function(c, u) {
    var d = $l(e, u, r);
    return c.top = bn(d.top, c.top), c.right = Mr(d.right, c.right), c.bottom = Mr(d.bottom, c.bottom), c.left = bn(d.left, c.left), c;
  }, $l(e, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Uu(e) {
  var t = e.reference, o = e.element, r = e.placement, s = r ? jt(r) : null, i = r ? Yn(r) : null, a = t.x + t.width / 2 - o.width / 2, l = t.y + t.height / 2 - o.height / 2, c;
  switch (s) {
    case ut:
      c = {
        x: a,
        y: t.y - o.height
      };
      break;
    case Ct:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case St:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case dt:
      c = {
        x: t.x - o.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = s ? Bi(s) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Un:
        c[u] = c[u] - (t[d] / 2 - o[d] / 2);
        break;
      case jo:
        c[u] = c[u] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function Fo(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, s = r === void 0 ? e.placement : r, i = o.strategy, a = i === void 0 ? e.strategy : i, l = o.boundary, c = l === void 0 ? Fg : l, u = o.rootBoundary, d = u === void 0 ? ju : u, f = o.elementContext, h = f === void 0 ? uo : f, y = o.altBoundary, g = y === void 0 ? !1 : y, p = o.padding, v = p === void 0 ? 0 : p, C = Bu(typeof v != "number" ? v : Wu(v, er)), T = h === uo ? Vg : uo, S = e.rects.popper, x = e.elements[g ? T : h], E = gy(Cn(x) ? x : x.contextElement || sn(e.elements.popper), c, d, a), I = Hn(e.elements.reference), P = Uu({
    reference: I,
    element: S,
    placement: s
  }), w = ai(Object.assign({}, S, P)), k = h === uo ? w : I, M = {
    top: E.top - k.top + C.top,
    bottom: k.bottom - E.bottom + C.bottom,
    left: E.left - k.left + C.left,
    right: k.right - E.right + C.right
  }, N = e.modifiersData.offset;
  if (h === uo && N) {
    var D = N[s];
    Object.keys(M).forEach(function(F) {
      var $ = [St, Ct].indexOf(F) >= 0 ? 1 : -1, V = [ut, Ct].indexOf(F) >= 0 ? "y" : "x";
      M[F] += D[V] * $;
    });
  }
  return M;
}
function yy(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, s = o.boundary, i = o.rootBoundary, a = o.padding, l = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? Fu : c, d = Yn(r), f = d ? l ? Dl : Dl.filter(function(g) {
    return Yn(g) === d;
  }) : er, h = f.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  h.length === 0 && (h = f);
  var y = h.reduce(function(g, p) {
    return g[p] = Fo(e, {
      placement: p,
      boundary: s,
      rootBoundary: i,
      padding: a
    })[jt(p)], g;
  }, {});
  return Object.keys(y).sort(function(g, p) {
    return y[g] - y[p];
  });
}
function vy(e) {
  if (jt(e) === Vi)
    return [];
  var t = Cr(e);
  return [Nl(e), t, Nl(t)];
}
function xy(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = o.mainAxis, i = s === void 0 ? !0 : s, a = o.altAxis, l = a === void 0 ? !0 : a, c = o.fallbackPlacements, u = o.padding, d = o.boundary, f = o.rootBoundary, h = o.altBoundary, y = o.flipVariations, g = y === void 0 ? !0 : y, p = o.allowedAutoPlacements, v = t.options.placement, C = jt(v), T = C === v, S = c || (T || !g ? [Cr(v)] : vy(v)), x = [v].concat(S).reduce(function(H, X) {
      return H.concat(jt(X) === Vi ? yy(t, {
        placement: X,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: p
      }) : X);
    }, []), E = t.rects.reference, I = t.rects.popper, P = /* @__PURE__ */ new Map(), w = !0, k = x[0], M = 0; M < x.length; M++) {
      var N = x[M], D = jt(N), F = Yn(N) === Un, $ = [ut, Ct].indexOf(D) >= 0, V = $ ? "width" : "height", j = Fo(t, {
        placement: N,
        boundary: d,
        rootBoundary: f,
        altBoundary: h,
        padding: u
      }), A = $ ? F ? St : dt : F ? Ct : ut;
      E[V] > I[V] && (A = Cr(A));
      var L = Cr(A), B = [];
      if (i && B.push(j[D] <= 0), l && B.push(j[A] <= 0, j[L] <= 0), B.every(function(H) {
        return H;
      })) {
        k = N, w = !1;
        break;
      }
      P.set(N, B);
    }
    if (w)
      for (var R = g ? 3 : 1, _ = function(X) {
        var Q = x.find(function(oe) {
          var ee = P.get(oe);
          if (ee)
            return ee.slice(0, X).every(function(J) {
              return J;
            });
        });
        if (Q)
          return k = Q, "break";
      }, q = R; q > 0; q--) {
        var K = _(q);
        if (K === "break") break;
      }
    t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const Py = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: xy,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Al(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function jl(e) {
  return [ut, St, Ct, dt].some(function(t) {
    return e[t] >= 0;
  });
}
function Cy(e) {
  var t = e.state, o = e.name, r = t.rects.reference, s = t.rects.popper, i = t.modifiersData.preventOverflow, a = Fo(t, {
    elementContext: "reference"
  }), l = Fo(t, {
    altBoundary: !0
  }), c = Al(a, r), u = Al(l, s, i), d = jl(c), f = jl(u);
  t.modifiersData[o] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const Sy = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Cy
};
function Ey(e, t, o) {
  var r = jt(e), s = [dt, ut].indexOf(r) >= 0 ? -1 : 1, i = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, a = i[0], l = i[1];
  return a = a || 0, l = (l || 0) * s, [dt, St].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Oy(e) {
  var t = e.state, o = e.options, r = e.name, s = o.offset, i = s === void 0 ? [0, 0] : s, a = Fu.reduce(function(d, f) {
    return d[f] = Ey(f, t.rects, i), d;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const wy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Oy
};
function Ty(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Uu({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Ry = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ty,
  data: {}
};
function ky(e) {
  return e === "x" ? "y" : "x";
}
function Dy(e) {
  var t = e.state, o = e.options, r = e.name, s = o.mainAxis, i = s === void 0 ? !0 : s, a = o.altAxis, l = a === void 0 ? !1 : a, c = o.boundary, u = o.rootBoundary, d = o.altBoundary, f = o.padding, h = o.tether, y = h === void 0 ? !0 : h, g = o.tetherOffset, p = g === void 0 ? 0 : g, v = Fo(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), C = jt(t.placement), T = Yn(t.placement), S = !T, x = Bi(C), E = ky(x), I = t.modifiersData.popperOffsets, P = t.rects.reference, w = t.rects.popper, k = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, M = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (I) {
    if (i) {
      var F, $ = x === "y" ? ut : dt, V = x === "y" ? Ct : St, j = x === "y" ? "height" : "width", A = I[x], L = A + v[$], B = A - v[V], R = y ? -w[j] / 2 : 0, _ = T === Un ? P[j] : w[j], q = T === Un ? -w[j] : -P[j], K = t.elements.arrow, H = y && K ? Li(K) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Lu(), Q = X[$], oe = X[V], ee = So(0, P[j], H[j]), J = S ? P[j] / 2 - R - ee - Q - M.mainAxis : _ - ee - Q - M.mainAxis, Y = S ? -P[j] / 2 + R + ee + oe + M.mainAxis : q + ee + oe + M.mainAxis, U = t.elements.arrow && tr(t.elements.arrow), W = U ? x === "y" ? U.clientTop || 0 : U.clientLeft || 0 : 0, ne = (F = N?.[x]) != null ? F : 0, Z = A + J - ne - W, ie = A + Y - ne, z = So(y ? Mr(L, Z) : L, A, y ? bn(B, ie) : B);
      I[x] = z, D[x] = z - A;
    }
    if (l) {
      var re, fe = x === "x" ? ut : dt, ge = x === "x" ? Ct : St, le = I[E], ce = E === "y" ? "height" : "width", Se = le + v[fe], Pe = le - v[ge], xe = [ut, dt].indexOf(C) !== -1, Le = (re = N?.[E]) != null ? re : 0, Ze = xe ? Se : le - P[ce] - w[ce] - Le + M.altAxis, et = xe ? le + P[ce] + w[ce] - Le - M.altAxis : Pe, ye = y && xe ? ey(Ze, le, et) : So(y ? Ze : Se, le, y ? et : Pe);
      I[E] = ye, D[E] = ye - le;
    }
    t.modifiersData[r] = D;
  }
}
const My = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Dy,
  requiresIfExists: ["offset"]
};
function Iy(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ny(e) {
  return e === gt(e) || !Pt(e) ? Wi(e) : Iy(e);
}
function $y(e) {
  var t = e.getBoundingClientRect(), o = qn(t.width) / e.offsetWidth || 1, r = qn(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Ay(e, t, o) {
  o === void 0 && (o = !1);
  var r = Pt(t), s = Pt(t) && $y(t), i = sn(t), a = Hn(e, s, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((_t(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ui(i)) && (l = Ny(t)), Pt(t) ? (c = Hn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = zi(i))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function jy(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function s(i) {
    o.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(l) {
      if (!o.has(l)) {
        var c = t.get(l);
        c && s(c);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    o.has(i.name) || s(i);
  }), r;
}
function Fy(e) {
  var t = jy(e);
  return Kg.reduce(function(o, r) {
    return o.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Vy(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function _y(e) {
  var t = e.reduce(function(o, r) {
    var s = o[r.name];
    return o[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var Fl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vl() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ly(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, s = t.defaultOptions, i = s === void 0 ? Fl : s;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Fl, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], h = !1, y = {
      state: d,
      setOptions: function(C) {
        var T = typeof C == "function" ? C(d.options) : C;
        p(), d.options = Object.assign({}, i, d.options, T), d.scrollParents = {
          reference: Cn(l) ? Eo(l) : l.contextElement ? Eo(l.contextElement) : [],
          popper: Eo(c)
        };
        var S = Fy(_y([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = S.filter(function(x) {
          return x.enabled;
        }), g(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var C = d.elements, T = C.reference, S = C.popper;
          if (Vl(T, S)) {
            d.rects = {
              reference: Ay(T, tr(S), d.options.strategy === "fixed"),
              popper: Li(S)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
              return d.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var x = 0; x < d.orderedModifiers.length; x++) {
              if (d.reset === !0) {
                d.reset = !1, x = -1;
                continue;
              }
              var E = d.orderedModifiers[x], I = E.fn, P = E.options, w = P === void 0 ? {} : P, k = E.name;
              typeof I == "function" && (d = I({
                state: d,
                options: w,
                name: k,
                instance: y
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Vy(function() {
        return new Promise(function(v) {
          y.forceUpdate(), v(d);
        });
      }),
      destroy: function() {
        p(), h = !0;
      }
    };
    if (!Vl(l, c))
      return y;
    y.setOptions(u).then(function(v) {
      !h && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function g() {
      d.orderedModifiers.forEach(function(v) {
        var C = v.name, T = v.options, S = T === void 0 ? {} : T, x = v.effect;
        if (typeof x == "function") {
          var E = x({
            state: d,
            name: C,
            instance: y,
            options: S
          }), I = function() {
          };
          f.push(E || I);
        }
      });
    }
    function p() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return y;
  };
}
var By = [uy, Ry, ly, Qg, wy, Py, My, ry, Sy], Wy = /* @__PURE__ */ Ly({
  defaultModifiers: By
});
function zy(e) {
  return typeof e == "function" ? e() : e;
}
const Vo = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    children: r,
    container: s,
    disablePortal: i = !1
  } = t, [a, l] = m.useState(null), c = tt(/* @__PURE__ */ m.isValidElement(r) ? Go(r) : null, o);
  if (kt(() => {
    i || l(zy(s) || document.body);
  }, [s, i]), kt(() => {
    if (a && !i)
      return Qs(o, a), () => {
        Qs(o, null);
      };
  }, [o, a, i]), i) {
    if (/* @__PURE__ */ m.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ m.cloneElement(r, u);
    }
    return /* @__PURE__ */ O.jsx(m.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ O.jsx(m.Fragment, {
    children: a && /* @__PURE__ */ hp.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (Vo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
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
  container: n.oneOfType([Ut, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Vo.propTypes = au(Vo.propTypes));
function Uy(e) {
  return we("MuiPopper", e);
}
Ee("MuiPopper", ["root"]);
const qy = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Hy = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Yy(e, t) {
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
function Ir(e) {
  return typeof e == "function" ? e() : e;
}
function rs(e) {
  return e.nodeType !== void 0;
}
function Ky(e) {
  return !rs(e);
}
const Gy = (e) => {
  const {
    classes: t
  } = e;
  return Ie({
    root: ["root"]
  }, Uy, t);
}, Xy = {}, Qy = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r;
  const {
    anchorEl: s,
    children: i,
    direction: a,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: f,
    popperRef: h,
    slotProps: y = {},
    slots: g = {},
    TransitionProps: p
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, v = te(t, qy), C = m.useRef(null), T = tt(C, o), S = m.useRef(null), x = tt(S, h), E = m.useRef(x);
  kt(() => {
    E.current = x;
  }, [x]), m.useImperativeHandle(h, () => S.current, []);
  const I = Yy(d, a), [P, w] = m.useState(I), [k, M] = m.useState(Ir(s));
  m.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), m.useEffect(() => {
    s && M(Ir(s));
  }, [s]), kt(() => {
    if (!k || !u)
      return;
    const V = (L) => {
      w(L.placement);
    };
    if (process.env.NODE_ENV !== "production" && k && rs(k) && k.nodeType === 1) {
      const L = k.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && L.top === 0 && L.left === 0 && L.right === 0 && L.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let j = [{
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
    c != null && (j = j.concat(c)), f && f.modifiers != null && (j = j.concat(f.modifiers));
    const A = Wy(k, C.current, b({
      placement: I
    }, f, {
      modifiers: j
    }));
    return E.current(A), () => {
      A.destroy(), E.current(null);
    };
  }, [k, l, c, u, f, I]);
  const N = {
    placement: P
  };
  p !== null && (N.TransitionProps = p);
  const D = Gy(t), F = (r = g.root) != null ? r : "div", $ = xn({
    elementType: F,
    externalSlotProps: y.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: D.root
  });
  return /* @__PURE__ */ O.jsx(F, b({}, $, {
    children: typeof i == "function" ? i(N) : i
  }));
}), qu = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: s,
    container: i,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: h = Xy,
    popperRef: y,
    style: g,
    transition: p = !1,
    slotProps: v = {},
    slots: C = {}
  } = t, T = te(t, Hy), [S, x] = m.useState(!0), E = () => {
    x(!1);
  }, I = () => {
    x(!0);
  };
  if (!c && !d && (!p || S))
    return null;
  let P;
  if (i)
    P = i;
  else if (r) {
    const M = Ir(r);
    P = M && rs(M) ? lt(M).body : lt(null).body;
  }
  const w = !d && c && (!p || S) ? "none" : void 0, k = p ? {
    in: d,
    onEnter: E,
    onExited: I
  } : void 0;
  return /* @__PURE__ */ O.jsx(Vo, {
    disablePortal: l,
    container: P,
    children: /* @__PURE__ */ O.jsx(Qy, b({
      anchorEl: r,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: o,
      open: p ? !S : d,
      placement: f,
      popperOptions: h,
      popperRef: y,
      slotProps: v,
      slots: C
    }, T, {
      style: b({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: w
      }, g),
      TransitionProps: k,
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (qu.propTypes = {
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
  anchorEl: nn(n.oneOfType([Ut, n.object, n.func]), (e) => {
    if (e.open) {
      const t = Ir(e.anchorEl);
      if (t && rs(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Ky(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
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
  container: n.oneOfType([Ut, n.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: n.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Dt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const Zy = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Jy = G(qu, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Hu = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r;
  const s = jg(), i = Ne({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: f,
    keepMounted: h,
    modifiers: y,
    open: g,
    placement: p,
    popperOptions: v,
    popperRef: C,
    transition: T,
    slots: S,
    slotProps: x
  } = i, E = te(i, Zy), I = (r = S?.root) != null ? r : c?.Root, P = b({
    anchorEl: a,
    container: d,
    disablePortal: f,
    keepMounted: h,
    modifiers: y,
    open: g,
    placement: p,
    popperOptions: v,
    popperRef: C,
    transition: T
  }, E);
  return /* @__PURE__ */ O.jsx(Jy, b({
    as: l,
    direction: s?.direction,
    slots: {
      root: I
    },
    slotProps: x ?? u
  }, P, {
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (Hu.propTypes = {
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
  anchorEl: n.oneOfType([Ut, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
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
  container: n.oneOfType([Ut, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Dt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const ev = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function tv(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function nv(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function ov(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || nv(e));
}
function rv(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(ev)).forEach((r, s) => {
    const i = tv(r);
    i === -1 || !ov(r) || (i === 0 ? t.push(r) : o.push({
      documentOrder: s,
      tabIndex: i,
      node: r
    }));
  }), o.sort((r, s) => r.tabIndex === s.tabIndex ? r.documentOrder - s.documentOrder : r.tabIndex - s.tabIndex).map((r) => r.node).concat(t);
}
function sv() {
  return !0;
}
function _o(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: s = !1,
    getTabbable: i = rv,
    isEnabled: a = sv,
    open: l
  } = e, c = m.useRef(!1), u = m.useRef(null), d = m.useRef(null), f = m.useRef(null), h = m.useRef(null), y = m.useRef(!1), g = m.useRef(null), p = tt(Go(t), g), v = m.useRef(null);
  m.useEffect(() => {
    !l || !g.current || (y.current = !o);
  }, [o, l]), m.useEffect(() => {
    if (!l || !g.current)
      return;
    const S = lt(g.current);
    return g.current.contains(S.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), y.current && g.current.focus()), () => {
      s || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !g.current)
      return;
    const S = lt(g.current), x = (P) => {
      v.current = P, !(r || !a() || P.key !== "Tab") && S.activeElement === g.current && P.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, E = () => {
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
      if (!y.current)
        return;
      let w = [];
      if ((S.activeElement === u.current || S.activeElement === d.current) && (w = i(g.current)), w.length > 0) {
        var k, M;
        const N = !!((k = v.current) != null && k.shiftKey && ((M = v.current) == null ? void 0 : M.key) === "Tab"), D = w[0], F = w[w.length - 1];
        typeof D != "string" && typeof F != "string" && (N ? F.focus() : D.focus());
      } else
        P.focus();
    };
    S.addEventListener("focusin", E), S.addEventListener("keydown", x, !0);
    const I = setInterval(() => {
      S.activeElement && S.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(I), S.removeEventListener("focusin", E), S.removeEventListener("keydown", x, !0);
    };
  }, [o, r, s, a, l, i]);
  const C = (S) => {
    f.current === null && (f.current = S.relatedTarget), y.current = !0, h.current = S.target;
    const x = t.props.onFocus;
    x && x(S);
  }, T = (S) => {
    f.current === null && (f.current = S.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ O.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ O.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ m.cloneElement(t, {
      ref: p,
      onFocus: C
    }), /* @__PURE__ */ O.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (_o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Ko,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (_o.propTypes = au(_o.propTypes));
function Oo(e) {
  return e && e.ownerDocument || document;
}
function iv(e) {
  return Qe("MuiPickerPopper", e);
}
Je("MuiPickerPopper", ["root", "paper"]);
function av(e, t) {
  return Array.isArray(t) ? t.every((o) => e.indexOf(o) !== -1) : e.indexOf(t) !== -1;
}
const lv = (e) => {
  setTimeout(e, 0);
}, Yu = (e = document) => {
  const t = e.activeElement;
  return t ? t.shadowRoot ? Yu(t.shadowRoot) : t : null;
}, at = (e) => Yu(Oo(e)), cv = "@media (pointer: fine)", uv = ["PaperComponent", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"], dv = (e) => Ye({
  root: ["root"],
  paper: ["paper"]
}, iv, e), pv = G(Hu, {
  name: "MuiPickerPopper",
  slot: "Root"
})(({
  theme: e
}) => ({
  zIndex: e.zIndex.modal
})), fv = G(Jo, {
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
function mv(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function hv(e, t) {
  const o = m.useRef(!1), r = m.useRef(!1), s = m.useRef(null), i = m.useRef(!1);
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
  const a = pe((c) => {
    if (!i.current)
      return;
    const u = r.current;
    r.current = !1;
    const d = Oo(s.current);
    if (!s.current || // is a TouchEvent?
    "clientX" in c && mv(c, d))
      return;
    if (o.current) {
      o.current = !1;
      return;
    }
    let f;
    c.composedPath ? f = c.composedPath().indexOf(s.current) > -1 : f = !d.documentElement.contains(c.target) || s.current.contains(c.target), !f && !u && t(c);
  }), l = (c) => {
    c.defaultMuiPrevented || (r.current = !0);
  };
  return m.useEffect(() => {
    if (e) {
      const c = Oo(s.current), u = () => {
        o.current = !0;
      };
      return c.addEventListener("touchstart", a), c.addEventListener("touchmove", u), () => {
        c.removeEventListener("touchstart", a), c.removeEventListener("touchmove", u);
      };
    }
  }, [e, a]), m.useEffect(() => {
    if (e) {
      const c = Oo(s.current);
      return c.addEventListener("click", a), () => {
        c.removeEventListener("click", a), r.current = !1;
      };
    }
  }, [e, a]), [s, l, l];
}
const Ku = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    PaperComponent: o,
    ownerState: r,
    children: s,
    paperSlotProps: i,
    paperClasses: a,
    onPaperClick: l,
    onPaperTouchStart: c
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = e, u = te(e, uv), d = Me({
    elementType: o,
    externalSlotProps: i,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref: t
    },
    className: a,
    ownerState: r
  });
  return /* @__PURE__ */ O.jsx(o, b({}, u, d, {
    onClick: (f) => {
      l(f), d.onClick?.(f);
    },
    onTouchStart: (f) => {
      c(f), d.onTouchStart?.(f);
    },
    ownerState: r,
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (Ku.displayName = "PickerPopperPaperWrapper");
function bv(e) {
  const t = ze({
    props: e,
    name: "MuiPickerPopper"
  }), {
    children: o,
    placement: r = "bottom-start",
    slots: s,
    slotProps: i,
    classes: a
  } = t, {
    open: l,
    popupRef: c,
    reduceAnimations: u
  } = Jn(), {
    ownerState: d,
    rootRefObject: f
  } = rt(), {
    dismissViews: h,
    getCurrentViewMode: y,
    onPopperExited: g,
    triggerElement: p,
    viewContainerRole: v
  } = rt();
  m.useEffect(() => {
    function A(L) {
      l && L.key === "Escape" && h();
    }
    return document.addEventListener("keydown", A), () => {
      document.removeEventListener("keydown", A);
    };
  }, [h, l]);
  const C = m.useRef(null);
  m.useEffect(() => {
    v === "tooltip" || y() === "field" || (l ? C.current = at(f.current) : C.current && C.current instanceof HTMLElement && setTimeout(() => {
      C.current instanceof HTMLElement && C.current.focus();
    }));
  }, [l, v, y, f]);
  const T = dv(a), S = pe(() => {
    v === "tooltip" ? lv(() => {
      f.current?.contains(at(f.current)) || c.current?.contains(at(c.current)) || h();
    }) : h();
  }), [x, E, I] = hv(l, S), P = m.useRef(null), w = ft(P, c), k = ft(w, x), M = (A) => {
    A.key === "Escape" && (A.stopPropagation(), h());
  }, N = s?.desktopTransition ?? u ? En : ns, D = s?.desktopTrapFocus ?? _o, F = s?.desktopPaper ?? fv, $ = s?.popper ?? pv, V = Me({
    elementType: $,
    externalSlotProps: i?.popper,
    additionalProps: {
      transition: !0,
      role: v ?? void 0,
      open: l,
      placement: r,
      anchorEl: p,
      onKeyDown: M
    },
    className: T.root,
    ownerState: d
  }), j = m.useMemo(() => b({}, d, {
    popperPlacement: V.placement
  }), [d, V.placement]);
  return /* @__PURE__ */ O.jsx($, b({}, V, {
    children: ({
      TransitionProps: A
    }) => /* @__PURE__ */ O.jsx(D, b({
      open: l,
      disableAutoFocus: !0,
      disableRestoreFocus: !0,
      disableEnforceFocus: v === "tooltip",
      isEnabled: () => !0
    }, i?.desktopTrapFocus, {
      children: /* @__PURE__ */ O.jsx(N, b({}, A, i?.desktopTransition, {
        onExited: (L) => {
          g?.(), i?.desktopTransition?.onExited?.(L), A?.onExited?.();
        },
        children: /* @__PURE__ */ O.jsx(Ku, {
          PaperComponent: F,
          ownerState: j,
          ref: k,
          onPaperClick: E,
          onPaperTouchStart: I,
          paperClasses: T.paper,
          paperSlotProps: i?.desktopPaper,
          children: o
        })
      }))
    }))
  }));
}
let _l = 0;
function gv(e) {
  const [t, o] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (_l += 1, o(`mui-${_l}`));
  }, [t]), r;
}
const yv = {
  ...m
}, Ll = yv.useId;
function qi(e) {
  if (Ll !== void 0) {
    const t = Ll();
    return e ?? t;
  }
  return gv(e);
}
const vv = "@media (prefers-reduced-motion: reduce)", Fn = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), Bl = Fn && Fn[1] ? parseInt(Fn[1], 10) : null, Wl = Fn && Fn[2] ? parseInt(Fn[2], 10) : null, xv = Bl && Bl < 10 || Wl && Wl < 13 || !1;
function Gu(e) {
  const t = Qc(vv, {
    defaultMatches: !1
  });
  return e ?? (t || xv);
}
function Kn(e) {
  const {
    controlled: t,
    default: o,
    name: r,
    state: s = "value"
  } = e, {
    current: i
  } = m.useRef(t !== void 0), [a, l] = m.useState(o), c = i ? t : a;
  if (process.env.NODE_ENV !== "production") {
    m.useEffect(() => {
      i !== (t !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${s} state of ${r} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [s, r, t]);
    const {
      current: d
    } = m.useRef(o);
    m.useEffect(() => {
      !i && JSON.stringify(o) !== JSON.stringify(d) && console.error([`MUI: A component is changing the default ${s} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(o)]);
  }
  const u = m.useCallback((d) => {
    i || l(d);
  }, []);
  return [c, u];
}
const Xu = {
  hasNextStep: !1,
  hasSeveralSteps: !1,
  goToNextStep: () => {
  },
  areViewsInSameStep: () => !0
};
function Pv(e) {
  const {
    steps: t,
    isViewMatchingStep: o,
    onStepChange: r
  } = e;
  return (s) => {
    if (t == null)
      return Xu;
    const i = t.findIndex((l) => o(s.view, l)), a = i === -1 || i === t.length - 1 ? null : t[i + 1];
    return {
      hasNextStep: a != null,
      hasSeveralSteps: t.length > 1,
      goToNextStep: () => {
        a != null && r(b({}, s, {
          step: a
        }));
      },
      areViewsInSameStep: (l, c) => {
        const u = t.find((f) => o(l, f)), d = t.find((f) => o(c, f));
        return u === d;
      }
    };
  };
}
let zs = !1;
function Qu({
  onChange: e,
  onViewChange: t,
  openTo: o,
  view: r,
  views: s,
  autoFocus: i,
  focusedView: a,
  onFocusedViewChange: l,
  getStepNavigation: c
}) {
  process.env.NODE_ENV !== "production" && (zs || (r != null && !s.includes(r) && (console.warn(`MUI X: \`view="${r}"\` is not a valid prop.`, `It must be an element of \`views=["${s.join('", "')}"]\`.`), zs = !0), r == null && o != null && !s.includes(o) && (console.warn(`MUI X: \`openTo="${o}"\` is not a valid prop.`, `It must be an element of \`views=["${s.join('", "')}"]\`.`), zs = !0)));
  const u = m.useRef(o), d = m.useRef(s), f = m.useRef(s.includes(o) ? o : s[0]), [h, y] = Kn({
    name: "useViews",
    state: "view",
    controlled: r,
    default: f.current
  }), g = m.useRef(i ? h : null), [p, v] = Kn({
    name: "useViews",
    state: "focusedView",
    controlled: a,
    default: g.current
  }), C = c ? c({
    setView: y,
    view: h,
    defaultView: f.current,
    views: s
  }) : Xu;
  m.useEffect(() => {
    (u.current && u.current !== o || d.current && d.current.some((k) => !s.includes(k))) && (y(s.includes(o) ? o : s[0]), d.current = s, u.current = o);
  }, [o, y, h, s]);
  const T = s.indexOf(h), S = s[T - 1] ?? null, x = s[T + 1] ?? null, E = pe((k, M) => {
    v(M ? k : (N) => k === N ? null : N), l?.(k, M);
  }), I = pe((k) => {
    E(k, !0), k !== h && (y(k), t && t(k));
  }), P = pe(() => {
    x && I(x);
  }), w = pe((k, M, N) => {
    const D = M === "finish", F = N ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but when it's not the final view given all `views` -> overall selection state should be `partial`.
      s.indexOf(N) < s.length - 1
    ) : !!x;
    e(k, D && F ? "partial" : M, N);
    let V = null;
    if (N != null && N !== h ? V = N : D && (V = h), V == null)
      return;
    const j = s[s.indexOf(V) + 1];
    j == null || !C.areViewsInSameStep(V, j) || I(j);
  });
  return b({}, C, {
    view: h,
    setView: I,
    focusedView: p,
    setFocusedView: E,
    nextView: x,
    previousView: S,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: s.includes(o) ? o : s[0],
    goToNextView: P,
    setValueAndGoToNextView: w
  });
}
function zl() {
  return typeof window > "u" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
}
function Cv(e, t) {
  const [o, r] = m.useState(zl);
  return Vt(() => {
    const s = () => {
      r(zl());
    };
    return window.addEventListener("orientationchange", s), () => {
      window.removeEventListener("orientationchange", s);
    };
  }, []), av(e, ["hours", "minutes", "seconds"]) ? "portrait" : t ?? o;
}
const Ul = /* @__PURE__ */ new Set();
function Sv(e, t = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const o = Array.isArray(e) ? e.join(`
`) : e;
  Ul.has(o) || (Ul.add(o), t === "error" ? console.error(o) : console.warn(o));
}
const nr = ({
  name: e,
  timezone: t,
  value: o,
  defaultValue: r,
  referenceDate: s,
  onChange: i,
  valueManager: a
}) => {
  const l = Ve(), [c, u] = Kn({
    name: e,
    state: "value",
    controlled: o,
    default: r ?? a.emptyValue
  }), d = m.useMemo(() => a.getTimezone(l, c), [l, a, c]), f = pe((p) => d == null ? p : a.setTimezone(l, d, p)), h = m.useMemo(() => t || d || (s ? l.getTimezone(Array.isArray(s) ? s[0] : s) : "default"), [t, d, s, l]), y = m.useMemo(() => a.setTimezone(l, h, c), [a, l, h, c]), g = pe((p, ...v) => {
    const C = f(p);
    u(C), i?.(C, ...v);
  });
  return {
    value: y,
    handleValueChange: g,
    timezone: h
  };
};
function Ev(e) {
  const {
    props: t,
    valueManager: o,
    validator: r
  } = e, {
    value: s,
    defaultValue: i,
    onChange: a,
    referenceDate: l,
    timezone: c,
    onAccept: u,
    closeOnSelect: d,
    open: f,
    onOpen: h,
    onClose: y
  } = t, {
    current: g
  } = m.useRef(i), {
    current: p
  } = m.useRef(s !== void 0), {
    current: v
  } = m.useRef(f !== void 0), C = Ve();
  process.env.NODE_ENV !== "production" && t.renderInput != null && Sv(["MUI X: The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]), process.env.NODE_ENV !== "production" && (m.useEffect(() => {
    p !== (s !== void 0) && console.error([`MUI X: A component is changing the ${p ? "" : "un"}controlled value of a Picker to be ${p ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled valuefor the lifetime of the component.", "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
  }, [s]), m.useEffect(() => {
    !p && g !== i && console.error(["MUI X: A component is changing the defaultValue of an uncontrolled Picker after being initialized. To suppress this warning opt to use a controlled value."].join(`
`));
  }, [JSON.stringify(g)]));
  const {
    timezone: T,
    value: S,
    handleValueChange: x
  } = nr({
    name: "a picker component",
    timezone: c,
    value: s,
    defaultValue: g,
    referenceDate: l,
    onChange: a,
    valueManager: o
  }), [E, I] = m.useState(() => ({
    open: !1,
    lastExternalValue: S,
    clockShallowValue: void 0,
    lastCommittedValue: S,
    hasBeenModifiedSinceMount: !1
  })), {
    getValidationErrorForNewValue: P
  } = Iu({
    props: t,
    validator: r,
    timezone: T,
    value: S,
    onError: t.onError
  }), w = pe((D) => {
    const F = typeof D == "function" ? D(E.open) : D;
    v || I(($) => b({}, $, {
      open: F
    })), F && h && h(), F || y?.();
  }), k = pe((D, F) => {
    const {
      changeImportance: $ = "accept",
      skipPublicationIfPristine: V = !1,
      validationError: j,
      shortcut: A,
      shouldClose: L = $ === "accept"
    } = F ?? {};
    let B, R;
    !V && !p && !E.hasBeenModifiedSinceMount ? (B = !0, R = $ === "accept") : (B = !o.areValuesEqual(C, D, S), R = $ === "accept" && !o.areValuesEqual(C, D, E.lastCommittedValue)), I((K) => b({}, K, {
      // We reset the shallow value whenever we fire onChange.
      clockShallowValue: B ? void 0 : K.clockShallowValue,
      lastCommittedValue: R ? D : K.lastCommittedValue,
      hasBeenModifiedSinceMount: !0
    }));
    let _ = null;
    const q = () => (_ || (_ = {
      validationError: j ?? P(D)
    }, A && (_.shortcut = A)), _);
    B && x(D, q()), R && u && u(D, q()), L && w(!1);
  });
  S !== E.lastExternalValue && I((D) => b({}, D, {
    lastExternalValue: S,
    clockShallowValue: void 0,
    hasBeenModifiedSinceMount: !0
  }));
  const M = pe((D, F = "partial") => {
    if (F === "shallow") {
      I(($) => b({}, $, {
        clockShallowValue: D,
        hasBeenModifiedSinceMount: !0
      }));
      return;
    }
    k(D, {
      changeImportance: F === "finish" && d ? "accept" : "set"
    });
  });
  m.useEffect(() => {
    if (v) {
      if (f === void 0)
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      I((D) => b({}, D, {
        open: f
      }));
    }
  }, [v, f]);
  const N = m.useMemo(() => o.cleanValue(C, E.clockShallowValue === void 0 ? S : E.clockShallowValue), [C, o, E.clockShallowValue, S]);
  return {
    timezone: T,
    state: E,
    setValue: k,
    setValueFromView: M,
    setOpen: w,
    value: S,
    viewValue: N
  };
}
const Ov = ["className", "sx"], Zu = ({
  ref: e,
  props: t,
  valueManager: o,
  valueType: r,
  variant: s,
  validator: i,
  onPopperExited: a,
  autoFocusView: l,
  rendererInterceptor: c,
  localeText: u,
  viewContainerRole: d,
  getStepNavigation: f
}) => {
  const {
    // View props
    views: h,
    view: y,
    openTo: g,
    onViewChange: p,
    viewRenderers: v,
    reduceAnimations: C,
    orientation: T,
    disableOpenPicker: S,
    closeOnSelect: x,
    // Form props
    disabled: E,
    readOnly: I,
    // Field props
    formatDensity: P,
    enableAccessibleFieldDOMStructure: w,
    selectedSections: k,
    onSelectedSectionsChange: M,
    format: N,
    label: D,
    // Other props
    autoFocus: F,
    name: $
  } = t, {
    className: V,
    sx: j
  } = t, A = te(t, Ov), L = qi(), B = Ve(), R = Gu(C), _ = Cv(h, T), {
    current: q
  } = m.useRef(g ?? null), [K, H] = m.useState(null), X = m.useRef(null), Q = m.useRef(null), oe = m.useRef(null), ee = ft(e, oe), {
    timezone: J,
    state: Y,
    setOpen: U,
    setValue: W,
    setValueFromView: ne,
    value: Z,
    viewValue: ie
  } = Ev({
    props: t,
    valueManager: o,
    validator: i
  }), {
    view: z,
    setView: re,
    defaultView: fe,
    focusedView: ge,
    setFocusedView: le,
    setValueAndGoToNextView: ce,
    goToNextStep: Se,
    hasNextStep: Pe,
    hasSeveralSteps: xe
  } = Qu({
    view: y,
    views: h,
    openTo: g,
    onChange: ne,
    onViewChange: p,
    autoFocus: l,
    getStepNavigation: f
  }), Le = pe(() => W(o.emptyValue)), Ze = pe(() => W(o.getTodayValue(B, J, r))), et = pe(() => W(Z)), ye = pe(() => W(Y.lastCommittedValue, {
    skipPublicationIfPristine: !0
  })), se = pe(() => {
    W(Z, {
      skipPublicationIfPristine: !0
    });
  }), {
    hasUIView: he,
    viewModeLookup: Ce,
    timeViewsCount: $e
  } = m.useMemo(() => h.reduce((nt, Kt) => {
    const ga = v[Kt] == null ? "field" : "UI";
    return nt.viewModeLookup[Kt] = ga, ga === "UI" && (nt.hasUIView = !0, pb(Kt) && (nt.timeViewsCount += 1)), nt;
  }, {
    hasUIView: !1,
    viewModeLookup: {},
    timeViewsCount: 0
  }), [v, h]), Ue = Ce[z], de = pe(() => Ue), [me, Ae] = m.useState(Ue === "UI" ? z : null);
  me !== z && Ce[z] === "UI" && Ae(z), Vt(() => {
    Ue === "field" && Y.open && (U(!1), setTimeout(() => {
      Q?.current?.setSelectedSections(z), Q?.current?.focusField(z);
    }));
  }, [z]), Vt(() => {
    if (!Y.open)
      return;
    let nt = z;
    Ue === "field" && me != null && (nt = me), nt !== fe && Ce[nt] === "UI" && Ce[fe] === "UI" && (nt = fe), nt !== z && re(nt), le(nt, !0);
  }, [Y.open]);
  const be = m.useMemo(() => ({
    isPickerValueEmpty: o.areValuesEqual(B, Z, o.emptyValue),
    isPickerOpen: Y.open,
    isPickerDisabled: t.disabled ?? !1,
    isPickerReadOnly: t.readOnly ?? !1,
    pickerOrientation: _,
    pickerVariant: s
  }), [B, o, Z, Y.open, _, s, t.disabled, t.readOnly]), Ge = m.useMemo(() => S || !he ? "hidden" : E || I ? "disabled" : "enabled", [S, he, E, I]), it = pe(Se), wt = m.useMemo(() => x && !xe ? [] : ["cancel", "nextOrAccept"], [x, xe]), to = m.useMemo(() => ({
    setValue: W,
    setOpen: U,
    clearValue: Le,
    setValueToToday: Ze,
    acceptValueChanges: et,
    cancelValueChanges: ye,
    setView: re,
    goToNextStep: it
  }), [W, U, Le, Ze, et, ye, re, it]), It = m.useMemo(() => b({}, to, {
    value: Z,
    timezone: J,
    open: Y.open,
    views: h,
    view: me,
    initialView: q,
    disabled: E ?? !1,
    readOnly: I ?? !1,
    autoFocus: F ?? !1,
    variant: s,
    orientation: _,
    popupRef: X,
    reduceAnimations: R,
    triggerRef: H,
    triggerStatus: Ge,
    hasNextStep: Pe,
    fieldFormat: N ?? "",
    name: $,
    label: D,
    rootSx: j,
    rootRef: ee,
    rootClassName: V
  }), [to, Z, ee, s, _, R, E, I, N, V, $, D, j, Ge, Pe, J, Y.open, me, h, q, F]), Qd = m.useMemo(() => ({
    dismissViews: se,
    ownerState: be,
    hasUIView: he,
    getCurrentViewMode: de,
    rootRefObject: oe,
    labelId: L,
    triggerElement: K,
    viewContainerRole: d,
    defaultActionBarActions: wt,
    onPopperExited: a
  }), [se, be, he, de, L, K, d, wt, a]), Zd = m.useMemo(() => ({
    formatDensity: P,
    enableAccessibleFieldDOMStructure: w,
    selectedSections: k,
    onSelectedSectionsChange: M,
    fieldRef: Q
  }), [P, w, k, M, Q]);
  return {
    providerProps: {
      localeText: u,
      contextValue: It,
      privateContextValue: Qd,
      actionsContextValue: to,
      fieldPrivateContextValue: Zd,
      isValidContextValue: (nt) => {
        const Kt = i({
          adapter: B,
          value: nt,
          timezone: J,
          props: t
        });
        return !o.hasError(Kt);
      }
    },
    renderCurrentView: () => {
      if (me == null)
        return null;
      const nt = v[me];
      if (nt == null)
        return null;
      const Kt = b({}, A, {
        views: h,
        timezone: J,
        value: ie,
        onChange: ce,
        view: me,
        onViewChange: re,
        showViewSwitcher: $e > 1,
        timeViewsCount: $e
      }, d === "tooltip" ? {
        focusedView: null,
        onFocusedViewChange: () => {
        }
      } : {
        focusedView: ge,
        onFocusedViewChange: le
      });
      return c ? /* @__PURE__ */ O.jsx(c, {
        viewRenderers: v,
        popperView: me,
        rendererProps: Kt
      }) : nt(Kt);
    },
    ownerState: be
  };
};
function Ju(e) {
  return Qe("MuiPickersLayout", e);
}
const ln = Je("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);
function ed(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: s,
    rippleY: i,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = m.useState(!1), h = ue(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), y = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + s
  }, g = ue(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && f(!0), m.useEffect(() => {
    if (!l && c != null) {
      const p = setTimeout(c, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ O.jsx("span", {
    className: h,
    style: y,
    children: /* @__PURE__ */ O.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (ed.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const vt = Ee("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), wv = ["center", "classes", "className"];
let ss = (e) => e, ql, Hl, Yl, Kl;
const li = 550, Tv = 80, Rv = Ar(ql || (ql = ss`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), kv = Ar(Hl || (Hl = ss`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Dv = Ar(Yl || (Yl = ss`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Mv = G("span", {
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
}), Iv = G(ed, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Kl || (Kl = ss`
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
`), vt.rippleVisible, Rv, li, ({
  theme: e
}) => e.transitions.easing.easeInOut, vt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, vt.child, vt.childLeaving, kv, li, ({
  theme: e
}) => e.transitions.easing.easeInOut, vt.childPulsate, Dv, ({
  theme: e
}) => e.transitions.easing.easeInOut), td = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: i = {},
    className: a
  } = r, l = te(r, wv), [c, u] = m.useState([]), d = m.useRef(0), f = m.useRef(null);
  m.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const h = m.useRef(!1), y = du(), g = m.useRef(null), p = m.useRef(null), v = m.useCallback((x) => {
    const {
      pulsate: E,
      rippleX: I,
      rippleY: P,
      rippleSize: w,
      cb: k
    } = x;
    u((M) => [...M, /* @__PURE__ */ O.jsx(Iv, {
      classes: {
        ripple: ue(i.ripple, vt.ripple),
        rippleVisible: ue(i.rippleVisible, vt.rippleVisible),
        ripplePulsate: ue(i.ripplePulsate, vt.ripplePulsate),
        child: ue(i.child, vt.child),
        childLeaving: ue(i.childLeaving, vt.childLeaving),
        childPulsate: ue(i.childPulsate, vt.childPulsate)
      },
      timeout: li,
      pulsate: E,
      rippleX: I,
      rippleY: P,
      rippleSize: w
    }, d.current)]), d.current += 1, f.current = k;
  }, [i]), C = m.useCallback((x = {}, E = {}, I = () => {
  }) => {
    const {
      pulsate: P = !1,
      center: w = s || E.pulsate,
      fakeElement: k = !1
      // For test purposes
    } = E;
    if (x?.type === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    x?.type === "touchstart" && (h.current = !0);
    const M = k ? null : p.current, N = M ? M.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let D, F, $;
    if (w || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      D = Math.round(N.width / 2), F = Math.round(N.height / 2);
    else {
      const {
        clientX: V,
        clientY: j
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      D = Math.round(V - N.left), F = Math.round(j - N.top);
    }
    if (w)
      $ = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), $ % 2 === 0 && ($ += 1);
    else {
      const V = Math.max(Math.abs((M ? M.clientWidth : 0) - D), D) * 2 + 2, j = Math.max(Math.abs((M ? M.clientHeight : 0) - F), F) * 2 + 2;
      $ = Math.sqrt(V ** 2 + j ** 2);
    }
    x != null && x.touches ? g.current === null && (g.current = () => {
      v({
        pulsate: P,
        rippleX: D,
        rippleY: F,
        rippleSize: $,
        cb: I
      });
    }, y.start(Tv, () => {
      g.current && (g.current(), g.current = null);
    })) : v({
      pulsate: P,
      rippleX: D,
      rippleY: F,
      rippleSize: $,
      cb: I
    });
  }, [s, v, y]), T = m.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), S = m.useCallback((x, E) => {
    if (y.clear(), x?.type === "touchend" && g.current) {
      g.current(), g.current = null, y.start(0, () => {
        S(x, E);
      });
      return;
    }
    g.current = null, u((I) => I.length > 0 ? I.slice(1) : I), f.current = E;
  }, [y]);
  return m.useImperativeHandle(o, () => ({
    pulsate: T,
    start: C,
    stop: S
  }), [T, C, S]), /* @__PURE__ */ O.jsx(Mv, b({
    className: ue(vt.root, i.root, a),
    ref: p
  }, l, {
    children: /* @__PURE__ */ O.jsx(Zo, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (td.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
function Nv(e) {
  return we("MuiButtonBase", e);
}
const $v = Ee("MuiButtonBase", ["root", "disabled", "focusVisible"]), Av = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], jv = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: s
  } = e, a = Ie({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, Nv, s);
  return o && r && (a.root += ` ${r}`), a;
}, Fv = G("button", {
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
  [`&.${$v.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Sn = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
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
    disableTouchRipple: f = !1,
    focusRipple: h = !1,
    LinkComponent: y = "a",
    onBlur: g,
    onClick: p,
    onContextMenu: v,
    onDragLeave: C,
    onFocus: T,
    onFocusVisible: S,
    onKeyDown: x,
    onKeyUp: E,
    onMouseDown: I,
    onMouseLeave: P,
    onMouseUp: w,
    onTouchEnd: k,
    onTouchMove: M,
    onTouchStart: N,
    tabIndex: D = 0,
    TouchRippleProps: F,
    touchRippleRef: $,
    type: V
  } = r, j = te(r, Av), A = m.useRef(null), L = m.useRef(null), B = tt(L, $), {
    isFocusVisibleRef: R,
    onFocus: _,
    onBlur: q,
    ref: K
  } = dh(), [H, X] = m.useState(!1);
  u && H && X(!1), m.useImperativeHandle(s, () => ({
    focusVisible: () => {
      X(!0), A.current.focus();
    }
  }), []);
  const [Q, oe] = m.useState(!1);
  m.useEffect(() => {
    oe(!0);
  }, []);
  const ee = Q && !d && !u;
  m.useEffect(() => {
    H && h && !d && Q && L.current.pulsate();
  }, [d, h, H, Q]);
  function J(se, he, Ce = f) {
    return mn(($e) => (he && he($e), !Ce && L.current && L.current[se]($e), !0));
  }
  const Y = J("start", I), U = J("stop", v), W = J("stop", C), ne = J("stop", w), Z = J("stop", (se) => {
    H && se.preventDefault(), P && P(se);
  }), ie = J("start", N), z = J("stop", k), re = J("stop", M), fe = J("stop", (se) => {
    q(se), R.current === !1 && X(!1), g && g(se);
  }, !1), ge = mn((se) => {
    A.current || (A.current = se.currentTarget), _(se), R.current === !0 && (X(!0), S && S(se)), T && T(se);
  }), le = () => {
    const se = A.current;
    return c && c !== "button" && !(se.tagName === "A" && se.href);
  }, ce = m.useRef(!1), Se = mn((se) => {
    h && !ce.current && H && L.current && se.key === " " && (ce.current = !0, L.current.stop(se, () => {
      L.current.start(se);
    })), se.target === se.currentTarget && le() && se.key === " " && se.preventDefault(), x && x(se), se.target === se.currentTarget && le() && se.key === "Enter" && !u && (se.preventDefault(), p && p(se));
  }), Pe = mn((se) => {
    h && se.key === " " && L.current && H && !se.defaultPrevented && (ce.current = !1, L.current.stop(se, () => {
      L.current.pulsate(se);
    })), E && E(se), p && se.target === se.currentTarget && le() && se.key === " " && !se.defaultPrevented && p(se);
  });
  let xe = c;
  xe === "button" && (j.href || j.to) && (xe = y);
  const Le = {};
  xe === "button" ? (Le.type = V === void 0 ? "button" : V, Le.disabled = u) : (!j.href && !j.to && (Le.role = "button"), u && (Le["aria-disabled"] = u));
  const Ze = tt(o, K, A);
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    ee && !L.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [ee]);
  const et = b({}, r, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: h,
    tabIndex: D,
    focusVisible: H
  }), ye = jv(et);
  return /* @__PURE__ */ O.jsxs(Fv, b({
    as: xe,
    className: ue(ye.root, l),
    ownerState: et,
    onBlur: fe,
    onClick: p,
    onContextMenu: U,
    onFocus: ge,
    onKeyDown: Se,
    onKeyUp: Pe,
    onMouseDown: Y,
    onMouseLeave: Z,
    onMouseUp: ne,
    onDragLeave: W,
    onTouchEnd: z,
    onTouchMove: re,
    onTouchStart: ie,
    ref: Ze,
    tabIndex: u ? -1 : D,
    type: V
  }, Le, j, {
    children: [a, ee ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ O.jsx(td, b({
        ref: B,
        center: i
      }, F))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Dt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Xr,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
function Vv(e) {
  return we("MuiButton", e);
}
const pr = Ee("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), nd = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (nd.displayName = "ButtonGroupContext");
const od = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (od.displayName = "ButtonGroupButtonContext");
const _v = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Lv = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: s,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, `${i}${ae(t)}`, `size${ae(s)}`, `${i}Size${ae(s)}`, `color${ae(t)}`, o && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ae(s)}`],
    endIcon: ["icon", "endIcon", `iconSize${ae(s)}`]
  }, c = Ie(l, Vv, a);
  return b({}, a, c);
}, rd = (e) => b({}, e.size === "small" && {
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
}), Bv = G(Sn, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${ae(o.color)}`], t[`size${ae(o.size)}`], t[`${o.variant}Size${ae(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r;
  const s = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return b({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": b({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : _e.alpha(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _e.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _e.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": b({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${pr.focusVisible}`]: b({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${pr.disabled}`]: b({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${_e.alpha(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (o = (r = e.palette).getContrastText) == null ? void 0 : o.call(r, e.palette.grey[300]),
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
  [`&.${pr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${pr.disabled}`]: {
    boxShadow: "none"
  }
}), Wv = G("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, t[`iconSize${ae(o.size)}`]];
  }
})(({
  ownerState: e
}) => b({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, rd(e))), zv = G("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, t[`iconSize${ae(o.size)}`]];
  }
})(({
  ownerState: e
}) => b({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, rd(e))), Xt = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = m.useContext(nd), s = m.useContext(od), i = Do(r, t), a = Ne({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: h = !1,
    disableFocusRipple: y = !1,
    endIcon: g,
    focusVisibleClassName: p,
    fullWidth: v = !1,
    size: C = "medium",
    startIcon: T,
    type: S,
    variant: x = "text"
  } = a, E = te(a, _v), I = b({}, a, {
    color: c,
    component: u,
    disabled: f,
    disableElevation: h,
    disableFocusRipple: y,
    fullWidth: v,
    size: C,
    type: S,
    variant: x
  }), P = Lv(I), w = T && /* @__PURE__ */ O.jsx(Wv, {
    className: P.startIcon,
    ownerState: I,
    children: T
  }), k = g && /* @__PURE__ */ O.jsx(zv, {
    className: P.endIcon,
    ownerState: I,
    children: g
  }), M = s || "";
  return /* @__PURE__ */ O.jsxs(Bv, b({
    ownerState: I,
    className: ue(r.className, P.root, d, M),
    component: u,
    disabled: f,
    focusRipple: !y,
    focusVisibleClassName: ue(P.focusVisible, p),
    ref: o,
    type: S
  }, E, {
    classes: P,
    children: [w, l, k]
  }));
});
process.env.NODE_ENV !== "production" && (Xt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
function Uv(e) {
  return we("MuiDialogActions", e);
}
Ee("MuiDialogActions", ["root", "spacing"]);
const qv = ["className", "disableSpacing"], Hv = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return Ie({
    root: ["root", !o && "spacing"]
  }, Uv, t);
}, Yv = G("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => b({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), sd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: s,
    disableSpacing: i = !1
  } = r, a = te(r, qv), l = b({}, r, {
    disableSpacing: i
  }), c = Hv(l);
  return /* @__PURE__ */ O.jsx(Yv, b({
    className: ue(c.root, s),
    ownerState: l,
    ref: o
  }, a));
});
process.env.NODE_ENV !== "production" && (sd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Kv = ["actions"], Gv = G(sd, {
  name: "MuiPickersLayout",
  slot: "ActionBar"
})({});
function id(e) {
  const {
    actions: t
  } = e, o = te(e, Kv), r = rn(), {
    clearValue: s,
    setValueToToday: i,
    acceptValueChanges: a,
    cancelValueChanges: l,
    goToNextStep: c,
    hasNextStep: u
  } = Jn();
  if (t == null || t.length === 0)
    return null;
  const d = t?.map((f) => {
    switch (f) {
      case "clear":
        return /* @__PURE__ */ O.jsx(Xt, {
          onClick: s,
          children: r.clearButtonLabel
        }, f);
      case "cancel":
        return /* @__PURE__ */ O.jsx(Xt, {
          onClick: l,
          children: r.cancelButtonLabel
        }, f);
      case "accept":
        return /* @__PURE__ */ O.jsx(Xt, {
          onClick: a,
          children: r.okButtonLabel
        }, f);
      case "today":
        return /* @__PURE__ */ O.jsx(Xt, {
          onClick: i,
          children: r.todayButtonLabel
        }, f);
      case "next":
        return /* @__PURE__ */ O.jsx(Xt, {
          onClick: c,
          children: r.nextStepButtonLabel
        }, f);
      case "nextOrAccept":
        return u ? /* @__PURE__ */ O.jsx(Xt, {
          onClick: c,
          children: r.nextStepButtonLabel
        }, f) : /* @__PURE__ */ O.jsx(Xt, {
          onClick: a,
          children: r.okButtonLabel
        }, f);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ O.jsx(Gv, b({}, o, {
    children: d
  }));
}
process.env.NODE_ENV !== "production" && (id.propTypes = {
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
  actions: n.arrayOf(n.oneOf(["accept", "cancel", "clear", "next", "nextOrAccept", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const ad = /* @__PURE__ */ m.memo(id);
process.env.NODE_ENV !== "production" && (ad.displayName = "PickersActionBar");
const Vn = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (Vn.displayName = "ListContext");
function Xv(e) {
  return we("MuiList", e);
}
Ee("MuiList", ["root", "padding", "dense", "subheader"]);
const Qv = ["children", "className", "component", "dense", "disablePadding", "subheader"], Zv = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: s
  } = e;
  return Ie({
    root: ["root", !o && "padding", r && "dense", s && "subheader"]
  }, Xv, t);
}, Jv = G("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => b({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Hi = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiList"
  }), {
    children: s,
    className: i,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = te(r, Qv), f = m.useMemo(() => ({
    dense: l
  }), [l]), h = b({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), y = Zv(h);
  return /* @__PURE__ */ O.jsx(Vn.Provider, {
    value: f,
    children: /* @__PURE__ */ O.jsxs(Jv, b({
      as: a,
      className: ue(y.root, i),
      ref: o,
      ownerState: h
    }, d, {
      children: [u, s]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function ex(e) {
  return we("MuiListItem", e);
}
const Nn = Ee("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), tx = Ee("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
function nx(e) {
  return we("MuiListItemSecondaryAction", e);
}
Ee("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const ox = ["className"], rx = (e) => {
  const {
    disableGutters: t,
    classes: o
  } = e;
  return Ie({
    root: ["root", t && "disableGutters"]
  }, nx, o);
}, sx = G("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => b({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Yi = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: s
  } = r, i = te(r, ox), a = m.useContext(Vn), l = b({}, r, {
    disableGutters: a.disableGutters
  }), c = rx(l);
  return /* @__PURE__ */ O.jsx(sx, b({
    className: ue(c.root, s),
    ownerState: l,
    ref: o
  }, i));
});
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
Yi.muiName = "ListItemSecondaryAction";
const ix = ["className"], ax = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], lx = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters, !o.disablePadding && t.padding, o.button && t.button, o.hasSecondaryAction && t.secondaryAction];
}, cx = (e) => {
  const {
    alignItems: t,
    button: o,
    classes: r,
    dense: s,
    disabled: i,
    disableGutters: a,
    disablePadding: l,
    divider: c,
    hasSecondaryAction: u,
    selected: d
  } = e;
  return Ie({
    root: ["root", s && "dense", !a && "gutters", !l && "padding", c && "divider", i && "disabled", o && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, ex, r);
}, ux = G("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: lx
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && b({
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
  [`& > .${tx.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${Nn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Nn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : _e.alpha(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Nn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : _e.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Nn.disabled}`]: {
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
  [`&.${Nn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : _e.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : _e.alpha(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), dx = G("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), ld = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
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
    componentsProps: f = {},
    ContainerComponent: h = "li",
    ContainerProps: {
      className: y
    } = {},
    dense: g = !1,
    disabled: p = !1,
    disableGutters: v = !1,
    disablePadding: C = !1,
    divider: T = !1,
    focusVisibleClassName: S,
    secondaryAction: x,
    selected: E = !1,
    slotProps: I = {},
    slots: P = {}
  } = r, w = te(r.ContainerProps, ix), k = te(r, ax), M = m.useContext(Vn), N = m.useMemo(() => ({
    dense: g || M.dense || !1,
    alignItems: s,
    disableGutters: v
  }), [s, M.dense, g, v]), D = m.useRef(null);
  kt(() => {
    i && (D.current ? D.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [i]);
  const F = m.Children.toArray(l), $ = F.length && Co(F[F.length - 1], ["ListItemSecondaryAction"]), V = b({}, r, {
    alignItems: s,
    autoFocus: i,
    button: a,
    dense: N.dense,
    disabled: p,
    disableGutters: v,
    disablePadding: C,
    divider: T,
    hasSecondaryAction: $,
    selected: E
  }), j = cx(V), A = tt(D, o), L = P.root || d.Root || ux, B = I.root || f.root || {}, R = b({
    className: ue(j.root, B.className, c),
    disabled: p
  }, k);
  let _ = u || "li";
  return a && (R.component = u || "div", R.focusVisibleClassName = ue(Nn.focusVisible, S), _ = Sn), $ ? (_ = !R.component && !u ? "div" : _, h === "li" && (_ === "li" ? _ = "div" : R.component === "li" && (R.component = "div")), /* @__PURE__ */ O.jsx(Vn.Provider, {
    value: N,
    children: /* @__PURE__ */ O.jsxs(dx, b({
      as: h,
      className: ue(j.container, y),
      ref: A,
      ownerState: V
    }, w, {
      children: [/* @__PURE__ */ O.jsx(L, b({}, B, !zn(L) && {
        as: _,
        ownerState: b({}, V, B.ownerState)
      }, R, {
        children: F
      })), F.pop()]
    }))
  })) : /* @__PURE__ */ O.jsx(Vn.Provider, {
    value: N,
    children: /* @__PURE__ */ O.jsxs(L, b({}, B, {
      as: _,
      ref: A
    }, !zn(L) && {
      ownerState: b({}, V, B.ownerState)
    }, R, {
      children: [F, x && /* @__PURE__ */ O.jsx(Yi, {
        children: x
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (ld.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: n.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: n.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: n.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: nn(n.node, (e) => {
    const t = m.Children.toArray(e.children);
    let o = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const s = t[r];
      if (Co(s, ["ListItemSecondaryAction"])) {
        o = r;
        break;
      }
    }
    return o !== -1 && o !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
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
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: Xr,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: n.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: n.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: n.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: n.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function px(e) {
  return we("MuiSvgIcon", e);
}
Ee("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const fx = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], mx = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, s = {
    root: ["root", t !== "inherit" && `color${ae(t)}`, `fontSize${ae(o)}`]
  };
  return Ie(s, px, r);
}, hx = G("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${ae(o.color)}`], t[`fontSize${ae(o.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, s, i, a, l, c, u, d, f, h, y, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (o = e.transitions) == null || (r = o.create) == null ? void 0 : r.call(o, "fill", {
      duration: (s = e.transitions) == null || (s = s.duration) == null ? void 0 : s.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null ? f : {
      action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Nr = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
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
    titleAccess: f,
    viewBox: h = "0 0 24 24"
  } = r, y = te(r, fx), g = /* @__PURE__ */ m.isValidElement(s) && s.type === "svg", p = b({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: g
  }), v = {};
  d || (v.viewBox = h);
  const C = mx(p);
  return /* @__PURE__ */ O.jsxs(hx, b({
    as: l,
    className: ue(C.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: o
  }, v, y, g && s.props, {
    ownerState: p,
    children: [g ? s.props.children : s, f ? /* @__PURE__ */ O.jsx("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Nr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
Nr.muiName = "SvgIcon";
function Bt(e, t) {
  function o(r, s) {
    return /* @__PURE__ */ O.jsx(Nr, b({
      "data-testid": `${t}Icon`,
      ref: s
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = Nr.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(o));
}
const bx = Bt(/* @__PURE__ */ O.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function gx(e) {
  return we("MuiChip", e);
}
const Oe = Ee("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), yx = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], vx = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: s,
    iconColor: i,
    onDelete: a,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, o && "disabled", `size${ae(r)}`, `color${ae(s)}`, l && "clickable", l && `clickableColor${ae(s)}`, a && "deletable", a && `deletableColor${ae(s)}`, `${c}${ae(s)}`],
    label: ["label", `label${ae(r)}`],
    avatar: ["avatar", `avatar${ae(r)}`, `avatarColor${ae(s)}`],
    icon: ["icon", `icon${ae(r)}`, `iconColor${ae(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ae(r)}`, `deleteIconColor${ae(s)}`, `deleteIcon${ae(c)}Color${ae(s)}`]
  };
  return Ie(u, gx, t);
}, xx = G("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      color: r,
      iconColor: s,
      clickable: i,
      onDelete: a,
      size: l,
      variant: c
    } = o;
    return [{
      [`& .${Oe.avatar}`]: t.avatar
    }, {
      [`& .${Oe.avatar}`]: t[`avatar${ae(l)}`]
    }, {
      [`& .${Oe.avatar}`]: t[`avatarColor${ae(r)}`]
    }, {
      [`& .${Oe.icon}`]: t.icon
    }, {
      [`& .${Oe.icon}`]: t[`icon${ae(l)}`]
    }, {
      [`& .${Oe.icon}`]: t[`iconColor${ae(s)}`]
    }, {
      [`& .${Oe.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Oe.deleteIcon}`]: t[`deleteIcon${ae(l)}`]
    }, {
      [`& .${Oe.deleteIcon}`]: t[`deleteIconColor${ae(r)}`]
    }, {
      [`& .${Oe.deleteIcon}`]: t[`deleteIcon${ae(c)}Color${ae(r)}`]
    }, t.root, t[`size${ae(l)}`], t[`color${ae(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${ae(r)})`], a && t.deletable, a && r !== "default" && t[`deletableColor${ae(r)}`], t[c], t[`${c}${ae(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return b({
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
    [`&.${Oe.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Oe.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : o,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Oe.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Oe.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Oe.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Oe.icon}`]: b({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && b({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : o
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Oe.deleteIcon}`]: b({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : _e.alpha(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : _e.alpha(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : _e.alpha(e.palette[t.color].contrastText, 0.7),
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
    [`&.${Oe.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : _e.alpha(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Oe.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => b({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : _e.alpha(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Oe.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : _e.alpha(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${Oe.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => b({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${Oe.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Oe.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${Oe.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Oe.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Oe.icon}`]: {
    marginLeft: 4
  },
  [`& .${Oe.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Oe.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Oe.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : _e.alpha(e.palette[t.color].main, 0.7)}`,
  [`&.${Oe.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _e.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Oe.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : _e.alpha(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Oe.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : _e.alpha(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Px = G("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${ae(r)}`]];
  }
})(({
  ownerState: e
}) => b({
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
function Gl(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const cd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
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
    icon: f,
    label: h,
    onClick: y,
    onDelete: g,
    onKeyDown: p,
    onKeyUp: v,
    size: C = "medium",
    variant: T = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: x = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, E = te(r, yx), I = m.useRef(null), P = tt(I, o), w = (B) => {
    B.stopPropagation(), g && g(B);
  }, k = (B) => {
    B.currentTarget === B.target && Gl(B) && B.preventDefault(), p && p(B);
  }, M = (B) => {
    B.currentTarget === B.target && (g && Gl(B) ? g(B) : B.key === "Escape" && I.current && I.current.blur()), v && v(B);
  }, N = a !== !1 && y ? !0 : a, D = N || g ? Sn : c || "div", F = b({}, r, {
    component: D,
    disabled: d,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ m.isValidElement(f) && f.props.color || l,
    onDelete: !!g,
    clickable: N,
    variant: T
  }), $ = vx(F), V = D === Sn ? b({
    component: c || "div",
    focusVisibleClassName: $.focusVisible
  }, g && {
    disableRipple: !0
  }) : {};
  let j = null;
  g && (j = u && /* @__PURE__ */ m.isValidElement(u) ? /* @__PURE__ */ m.cloneElement(u, {
    className: ue(u.props.className, $.deleteIcon),
    onClick: w
  }) : /* @__PURE__ */ O.jsx(bx, {
    className: ue($.deleteIcon),
    onClick: w
  }));
  let A = null;
  s && /* @__PURE__ */ m.isValidElement(s) && (A = /* @__PURE__ */ m.cloneElement(s, {
    className: ue($.avatar, s.props.className)
  }));
  let L = null;
  return f && /* @__PURE__ */ m.isValidElement(f) && (L = /* @__PURE__ */ m.cloneElement(f, {
    className: ue($.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && A && L && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ O.jsxs(xx, b({
    as: D,
    className: ue($.root, i),
    disabled: N && d ? !0 : void 0,
    onClick: y,
    onKeyDown: k,
    onKeyUp: M,
    ref: P,
    tabIndex: x && d ? -1 : S,
    ownerState: F
  }, V, E, {
    children: [A || L, /* @__PURE__ */ O.jsx(Px, {
      className: ue($.label),
      ownerState: F,
      children: h
    }), j]
  }));
});
process.env.NODE_ENV !== "production" && (cd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: n.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: eh,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: n.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: n.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * Icon element.
   */
  icon: n.element,
  /**
   * The content of the component.
   */
  label: n.node,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  tabIndex: n.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined"]), n.string])
});
const Lo = 36, is = 2, as = 320, Cx = 280, Ki = 336, Sx = ["items", "changeImportance"], Ex = ["getValue"], Ox = G(Hi, {
  name: "MuiPickersLayout",
  slot: "Shortcuts"
})({});
function ud(e) {
  const {
    items: t,
    changeImportance: o = "accept"
  } = e, r = te(e, Sx), {
    setValue: s
  } = eg(), i = _b();
  if (t == null || t.length === 0)
    return null;
  const a = t.map((l) => {
    let {
      getValue: c
    } = l, u = te(l, Ex);
    const d = c({
      isValid: i
    });
    return b({}, u, {
      label: u.label,
      onClick: () => {
        s(d, {
          changeImportance: o,
          shortcut: u
        });
      },
      disabled: !i(d)
    });
  });
  return /* @__PURE__ */ O.jsx(Ox, b({
    dense: !0,
    sx: [{
      maxHeight: Ki,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(r.sx) ? r.sx : [r.sx]]
  }, r, {
    children: a.map((l) => /* @__PURE__ */ O.jsx(ld, {
      children: /* @__PURE__ */ O.jsx(cd, b({}, l))
    }, l.id ?? l.label))
  }));
}
process.env.NODE_ENV !== "production" && (ud.propTypes = {
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
  changeImportance: n.oneOf(["accept", "set"]),
  className: n.string,
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default []
   */
  items: n.arrayOf(n.shape({
    getValue: n.func.isRequired,
    id: n.string,
    label: n.string.isRequired
  })),
  style: n.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const wx = ["ownerState"];
function Tx(e) {
  return e.view !== null;
}
const Rx = (e, t) => {
  const {
    pickerOrientation: o
  } = t;
  return Ye({
    root: ["root", o === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  }, Ju, e);
}, kx = (e) => {
  const {
    ownerState: t,
    defaultActionBarActions: o
  } = rt(), {
    view: r
  } = Jn(), s = Lt(), {
    children: i,
    slots: a,
    slotProps: l,
    classes: c
  } = e, u = m.useMemo(() => b({}, t, {
    layoutDirection: s ? "rtl" : "ltr",
    hasShortcuts: !1
  }), [t, s]), d = Rx(c, u), f = a?.actionBar ?? ad, h = Me({
    elementType: f,
    externalSlotProps: l?.actionBar,
    additionalProps: {
      actions: o
    },
    className: d.actionBar,
    ownerState: u
  }), y = te(h, wx), g = /* @__PURE__ */ O.jsx(f, b({}, y)), p = a?.toolbar, v = Me({
    elementType: p,
    externalSlotProps: l?.toolbar,
    className: d.toolbar,
    ownerState: u
  }), C = Tx(v) && p ? /* @__PURE__ */ O.jsx(p, b({}, v)) : null, T = i, S = a?.tabs, x = r && S ? /* @__PURE__ */ O.jsx(S, b({
    className: d.tabs
  }, l?.tabs)) : null, E = a?.shortcuts ?? ud, I = Me({
    elementType: E,
    externalSlotProps: l?.shortcuts,
    className: d.shortcuts,
    ownerState: u
  }), P = Array.isArray(I?.items) && I.items.length > 0, w = r && E ? /* @__PURE__ */ O.jsx(E, b({}, I)) : null;
  return {
    toolbar: C,
    content: T,
    tabs: x,
    actionBar: g,
    shortcuts: w,
    ownerState: b({}, u, {
      hasShortcuts: P
    })
  };
}, Dx = (e, t) => {
  const {
    pickerOrientation: o
  } = t;
  return Ye({
    root: ["root", o === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"]
  }, Ju, e);
}, Mx = G("div", {
  name: "MuiPickersLayout",
  slot: "Root"
})({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${ln.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  },
  variants: [{
    props: {
      pickerOrientation: "landscape",
      hasShortcuts: !1
    },
    style: {
      [`& .${ln.toolbar}`]: {
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
      [`& .${ln.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1,
        maxWidth: "max-content"
      },
      [`& .${ln.shortcuts}`]: {
        gridColumn: 1,
        gridRow: 2
      }
    }
  }, {
    props: {
      pickerOrientation: "portrait"
    },
    style: {
      [`& .${ln.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      },
      [`& .${ln.shortcuts}`]: {
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
      [`& .${ln.shortcuts}`]: {
        gridColumn: 4
      }
    }
  }]
}), Ix = G("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper"
})({
  gridColumn: "2 / 4",
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
}), ls = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiPickersLayout"
  }), {
    toolbar: s,
    content: i,
    tabs: a,
    actionBar: l,
    shortcuts: c,
    ownerState: u
  } = kx(r), {
    orientation: d,
    variant: f
  } = Jn(), {
    sx: h,
    className: y,
    classes: g
  } = r, p = Dx(g, u);
  return /* @__PURE__ */ O.jsxs(Mx, {
    ref: o,
    sx: h,
    className: ue(p.root, y),
    ownerState: u,
    children: [d === "landscape" ? c : s, d === "landscape" ? s : c, /* @__PURE__ */ O.jsx(Ix, {
      className: p.contentWrapper,
      ownerState: u,
      children: f === "desktop" ? /* @__PURE__ */ O.jsxs(m.Fragment, {
        children: [i, a]
      }) : /* @__PURE__ */ O.jsxs(m.Fragment, {
        children: [a, i]
      })
    }), l]
  });
});
process.env.NODE_ENV !== "production" && (ls.displayName = "PickersLayout");
process.env.NODE_ENV !== "production" && (ls.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function dd(e) {
  const {
    steps: t
  } = e;
  return Pv({
    steps: t,
    isViewMatchingStep: (o, r) => r.views == null || r.views.includes(o),
    onStepChange: ({
      step: o,
      defaultView: r,
      setView: s,
      view: i,
      views: a
    }) => {
      const l = o.views == null ? r : o.views.find((c) => a.includes(c));
      l !== i && s(l);
    }
  });
}
const Nx = ["props", "steps"], $x = ["ownerState"], Ax = (e) => {
  let {
    props: t,
    steps: o
  } = e, r = te(e, Nx);
  const {
    slots: s,
    slotProps: i,
    label: a,
    inputRef: l,
    localeText: c
  } = t, u = dd({
    steps: o
  }), {
    providerProps: d,
    renderCurrentView: f,
    ownerState: h
  } = Zu(b({}, r, {
    props: t,
    localeText: c,
    autoFocusView: !0,
    viewContainerRole: "dialog",
    variant: "desktop",
    getStepNavigation: u
  })), y = d.privateContextValue.labelId, g = i?.toolbar?.hidden ?? !1, p = s.field, v = Me({
    elementType: p,
    externalSlotProps: i?.field,
    additionalProps: b({}, g && {
      id: y
    }),
    ownerState: h
  }), C = te(v, $x), T = s.layout ?? ls;
  let S = y;
  g && (a ? S = `${y}-label` : S = void 0);
  const x = b({}, i, {
    toolbar: b({}, i?.toolbar, {
      titleId: y
    }),
    popper: b({
      "aria-labelledby": S
    }, i?.popper)
  }), E = () => /* @__PURE__ */ O.jsxs(Ou, b({}, d, {
    children: [/* @__PURE__ */ O.jsx(p, b({}, C, {
      slots: s,
      slotProps: x,
      inputRef: l
    })), /* @__PURE__ */ O.jsx(bv, {
      slots: s,
      slotProps: x,
      children: /* @__PURE__ */ O.jsx(T, b({}, x?.layout, {
        slots: s,
        slotProps: x,
        children: f()
      }))
    })]
  }));
  return process.env.NODE_ENV !== "production" && (E.displayName = "renderPicker"), {
    renderPicker: E
  };
}, Mn = (e) => e.saveQuery != null, pd = ({
  stateResponse: {
    // States and derived states
    localizedDigits: e,
    sectionsValueBoundaries: t,
    state: o,
    timezone: r,
    // Methods to update the states
    setCharacterQuery: s,
    setTempAndroidValueStr: i,
    updateSectionValue: a
  }
}) => {
  const l = Ve(), c = ({
    keyPressed: f,
    sectionIndex: h
  }, y, g) => {
    const p = f.toLowerCase(), v = o.sections[h];
    if (o.characterQuery != null && (!g || g(o.characterQuery.value)) && o.characterQuery.sectionIndex === h) {
      const T = `${o.characterQuery.value}${p}`, S = y(T, v);
      if (!Mn(S))
        return s({
          sectionIndex: h,
          value: T,
          sectionType: v.type
        }), S;
    }
    const C = y(p, v);
    return Mn(C) && !C.saveQuery ? (s(null), null) : (s({
      sectionIndex: h,
      value: p,
      sectionType: v.type
    }), Mn(C) ? null : C);
  }, u = (f) => {
    const h = (p, v, C) => {
      const T = v.filter((S) => S.toLowerCase().startsWith(C));
      return T.length === 0 ? {
        saveQuery: !1
      } : {
        sectionValue: T[0],
        shouldGoToNextSection: T.length === 1
      };
    }, y = (p, v, C, T) => {
      const S = (x) => Pu(l, r, v.type, x);
      if (v.contentType === "letter")
        return h(v.format, S(v.format), p);
      if (C && T != null && Si(l, C).contentType === "letter") {
        const x = S(C), E = h(C, x, p);
        return Mn(E) ? {
          saveQuery: !1
        } : b({}, E, {
          sectionValue: T(E.sectionValue, x)
        });
      }
      return {
        saveQuery: !1
      };
    };
    return c(f, (p, v) => {
      switch (v.type) {
        case "month": {
          const C = (T) => yl(l, T, l.formats.month, v.format);
          return y(p, v, l.formats.month, C);
        }
        case "weekDay": {
          const C = (T, S) => S.indexOf(T).toString();
          return y(p, v, l.formats.weekday, C);
        }
        case "meridiem":
          return y(p, v);
        default:
          return {
            saveQuery: !1
          };
      }
    });
  }, d = (f) => {
    const h = ({
      queryValue: g,
      skipIfBelowMinimum: p,
      section: v
    }) => {
      const C = Pn(g, e), T = Number(C), S = t[v.type]({
        currentDate: null,
        format: v.format,
        contentType: v.contentType
      });
      if (T > S.maximum)
        return {
          saveQuery: !1
        };
      if (p && T < S.minimum)
        return {
          saveQuery: !0
        };
      const x = T * 10 > S.maximum || C.length === S.maximum.toString().length;
      return {
        sectionValue: Cu(l, T, S, e, v),
        shouldGoToNextSection: x
      };
    };
    return c(f, (g, p) => {
      if (p.contentType === "digit" || p.contentType === "digit-with-letter")
        return h({
          queryValue: g,
          skipIfBelowMinimum: !1,
          section: p
        });
      if (p.type === "month") {
        Su(l, "digit", "month", "MM");
        const v = h({
          queryValue: g,
          skipIfBelowMinimum: !0,
          section: {
            type: p.type,
            format: "MM",
            hasLeadingZerosInInput: !0,
            contentType: "digit",
            maxLength: 2
          }
        });
        if (Mn(v))
          return v;
        const C = yl(l, v.sectionValue, "MM", p.format);
        return b({}, v, {
          sectionValue: C
        });
      }
      if (p.type === "weekDay") {
        const v = h({
          queryValue: g,
          skipIfBelowMinimum: !0,
          section: p
        });
        if (Mn(v))
          return v;
        const C = Jr(l, p.format)[Number(v.sectionValue) - 1];
        return b({}, v, {
          sectionValue: C
        });
      }
      return {
        saveQuery: !1
      };
    }, (g) => gl(g, e));
  };
  return pe((f) => {
    const h = o.sections[f.sectionIndex], g = gl(f.keyPressed, e) ? d(b({}, f, {
      keyPressed: Ei(f.keyPressed, e)
    })) : u(f);
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
}, Xl = {};
function jx(e, t) {
  const o = m.useRef(Xl);
  return o.current === Xl && (o.current = e(t)), o;
}
const Fx = [];
function Vx(e) {
  m.useEffect(e, Fx);
}
class Gi {
  static create() {
    return new Gi();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function _n() {
  const e = jx(Gi.create).current;
  return Vx(e.disposeEffect), e;
}
const _x = 5e3, fd = (e) => {
  const t = Ve(), o = rn(), r = Lt(), {
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
      referenceDate: f,
      onChange: h,
      format: y,
      formatDensity: g = "dense",
      selectedSections: p,
      onSelectedSectionsChange: v,
      shouldRespectLeadingZeros: C = !1,
      timezone: T,
      enableAccessibleFieldDOMStructure: S = !0
    },
    forwardedProps: {
      error: x
    }
  } = e, {
    value: E,
    handleValueChange: I,
    timezone: P
  } = nr({
    name: "a field component",
    timezone: T,
    value: u,
    defaultValue: d,
    referenceDate: f,
    onChange: h,
    valueManager: a
  }), w = m.useRef(E);
  m.useEffect(() => {
    w.current = E;
  }, [E]);
  const {
    hasValidationError: k
  } = Iu({
    props: c,
    validator: s,
    timezone: P,
    value: E,
    onError: c.onError
  }), M = m.useMemo(() => x !== void 0 ? x : k, [k, x]), N = m.useMemo(() => gb(t), [t]), D = m.useMemo(() => Cb(t, N, P), [t, N, P]), F = m.useCallback((z) => l.getSectionsFromValue(z, (re) => Ol({
    adapter: t,
    localeText: o,
    localizedDigits: N,
    format: y,
    date: re,
    formatDensity: g,
    shouldRespectLeadingZeros: C,
    enableAccessibleFieldDOMStructure: S,
    isRtl: r
  })), [l, y, o, N, r, C, t, g, S]), [$, V] = m.useState(() => {
    const z = F(E);
    xl(z, i);
    const re = {
      sections: z,
      lastExternalValue: E,
      lastSectionsDependencies: {
        format: y,
        isRtl: r,
        locale: t.locale
      },
      tempValueStrAndroid: null,
      characterQuery: null
    }, fe = mb(z), ge = a.getInitialReferenceValue({
      referenceDate: f,
      value: E,
      adapter: t,
      props: c,
      granularity: fe,
      timezone: P
    });
    return b({}, re, {
      referenceValue: ge
    });
  }), [j, A] = Kn({
    controlled: p,
    default: null,
    name: "useField",
    state: "selectedSections"
  }), L = (z) => {
    A(z), v?.(z);
  }, B = m.useMemo(() => ei(j, $.sections), [j, $.sections]), R = B === "all" ? 0 : B, _ = m.useMemo(() => Ob($.sections, r && !S), [$.sections, r, S]), q = m.useMemo(() => $.sections.every((z) => z.value === ""), [$.sections]), K = (z) => {
    const re = {
      validationError: s({
        adapter: t,
        value: z,
        timezone: P,
        props: c
      })
    };
    I(z, re);
  }, H = (z, re) => {
    const fe = [...$.sections];
    return fe[z] = b({}, fe[z], {
      value: re,
      modified: !0
    }), fe;
  }, X = m.useRef(null), Q = _n(), oe = (z) => {
    R != null && (X.current = {
      sectionIndex: R,
      value: z
    }, Q.start(0, () => {
      X.current = null;
    }));
  }, ee = () => {
    a.areValuesEqual(t, E, a.emptyValue) ? V((z) => b({}, z, {
      sections: z.sections.map((re) => b({}, re, {
        value: ""
      })),
      tempValueStrAndroid: null,
      characterQuery: null
    })) : (V((z) => b({}, z, {
      characterQuery: null
    })), K(a.emptyValue));
  }, J = () => {
    if (R == null)
      return;
    const z = $.sections[R];
    z.value !== "" && (oe(""), l.getDateFromSection(E, z) === null ? V((re) => b({}, re, {
      sections: H(R, ""),
      tempValueStrAndroid: null,
      characterQuery: null
    })) : (V((re) => b({}, re, {
      characterQuery: null
    })), K(l.updateDateInValue(E, z, null))));
  }, Y = (z) => {
    const re = (ge, le) => {
      const ce = t.parse(ge, y);
      if (!t.isValid(ce))
        return null;
      const Se = Ol({
        adapter: t,
        localeText: o,
        localizedDigits: N,
        format: y,
        date: ce,
        formatDensity: g,
        shouldRespectLeadingZeros: C,
        enableAccessibleFieldDOMStructure: S,
        isRtl: r
      });
      return Cl(t, ce, Se, le, !1);
    }, fe = l.parseValueStr(z, $.referenceValue, re);
    K(fe);
  }, U = _n(), W = ({
    section: z,
    newSectionValue: re,
    shouldGoToNextSection: fe
  }) => {
    Q.clear(), U.clear();
    const ge = l.getDateFromSection(E, z);
    fe && R < $.sections.length - 1 && L(R + 1);
    const le = H(R, re), ce = l.getDateSectionsFromValue(le, z), Se = vb(t, ce, N);
    if (t.isValid(Se)) {
      const Pe = Cl(t, Se, ce, l.getDateFromSection($.referenceValue, z), !0);
      return ge == null && U.start(0, () => {
        w.current === E && V((xe) => b({}, xe, {
          sections: l.clearDateSections($.sections, z),
          tempValueStrAndroid: null
        }));
      }), K(l.updateDateInValue(E, z, Pe));
    }
    return ce.every((Pe) => Pe.value !== "") && (ge == null || t.isValid(ge)) ? (oe(re), K(l.updateDateInValue(E, z, Se))) : ge != null ? (oe(re), K(l.updateDateInValue(E, z, null))) : V((Pe) => b({}, Pe, {
      sections: le,
      tempValueStrAndroid: null
    }));
  }, ne = (z) => V((re) => b({}, re, {
    tempValueStrAndroid: z
  })), Z = pe((z) => {
    V((re) => b({}, re, {
      characterQuery: z
    }));
  });
  if (E !== $.lastExternalValue) {
    const z = X.current != null && !t.isValid(l.getDateFromSection(E, $.sections[X.current.sectionIndex]));
    let re;
    z ? re = H(X.current.sectionIndex, X.current.value) : re = F(E), V((fe) => b({}, fe, {
      lastExternalValue: E,
      sections: re,
      sectionsDependencies: {
        format: y,
        isRtl: r,
        locale: t.locale
      },
      referenceValue: z ? fe.referenceValue : l.updateReferenceValue(t, E, fe.referenceValue),
      tempValueStrAndroid: null
    }));
  }
  if (r !== $.lastSectionsDependencies.isRtl || y !== $.lastSectionsDependencies.format || t.locale !== $.lastSectionsDependencies.locale) {
    const z = F(E);
    xl(z, i), V((re) => b({}, re, {
      lastSectionsDependencies: {
        format: y,
        isRtl: r,
        locale: t.locale
      },
      sections: z,
      tempValueStrAndroid: null,
      characterQuery: null
    }));
  }
  $.characterQuery != null && !M && R == null && Z(null), $.characterQuery != null && $.sections[$.characterQuery.sectionIndex]?.type !== $.characterQuery.sectionType && Z(null), m.useEffect(() => {
    X.current != null && (X.current = null);
  });
  const ie = _n();
  return m.useEffect(() => ($.characterQuery != null && ie.start(_x, () => Z(null)), () => {
  }), [$.characterQuery, Z, ie]), m.useEffect(() => {
    $.tempValueStrAndroid != null && R != null && J();
  }, [$.sections]), {
    // States and derived states
    activeSectionIndex: R,
    areAllSectionsEmpty: q,
    error: M,
    localizedDigits: N,
    parsedSelectedSections: B,
    sectionOrder: _,
    sectionsValueBoundaries: D,
    state: $,
    timezone: P,
    value: E,
    // Methods to update the states
    clearValue: ee,
    clearActiveSection: J,
    setCharacterQuery: Z,
    setSelectedSections: L,
    setTempAndroidValueStr: ne,
    updateSectionValue: W,
    updateValueFromValueStr: Y,
    // Utilities methods
    getSectionsFromValue: F
  };
};
function md(e) {
  const {
    manager: {
      internal_useApplyDefaultValuesToFieldInternalProps: t
    },
    internalProps: o,
    skipContextFieldRefAssignment: r
  } = e, s = Ni(), i = Eu(), a = ft(o.unstableFieldRef, r ? null : i?.fieldRef), l = s?.setValue, c = m.useCallback((d, f) => l?.(d, {
    validationError: f.validationError,
    shouldClose: !1
  }), [l]), u = m.useMemo(() => i != null && s != null ? b({
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
  }, o) : o, [s, i, o, c, a]);
  return t(u);
}
function Xi(e) {
  const {
    focused: t,
    domGetters: o,
    stateResponse: {
      // States and derived states
      parsedSelectedSections: r,
      state: s
    }
  } = e;
  if (!o.isReady())
    return;
  const i = Oo(o.getRoot()).getSelection();
  if (!i)
    return;
  if (r == null) {
    i.rangeCount > 0 && // Firefox can return a Restricted object here
    i.getRangeAt(0).startContainer instanceof Node && o.getRoot().contains(i.getRangeAt(0).startContainer) && i.removeAllRanges(), t && o.getRoot().blur();
    return;
  }
  if (!o.getRoot().contains(at(o.getRoot())))
    return;
  const a = new window.Range();
  let l;
  r === "all" ? l = o.getRoot() : s.sections[r].type === "empty" ? l = o.getSectionContainer(r) : l = o.getSectionContent(r), a.selectNodeContents(l), l.focus(), i.removeAllRanges(), i.addRange(a);
}
function hd(e) {
  const t = Ve(), {
    manager: {
      internal_fieldValueManager: o
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
      localizedDigits: f,
      timezone: h,
      sectionOrder: y,
      // Methods to update the states
      clearValue: g,
      clearActiveSection: p,
      setSelectedSections: v,
      updateSectionValue: C
    }
  } = e;
  return pe((T) => {
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
            v(y.startIndex);
          else if (u === "all")
            v(y.endIndex);
          else {
            const S = y.neighbors[u].rightIndex;
            S !== null && v(S);
          }
          break;
        }
        // Move selection to previous section
        case T.key === "ArrowLeft": {
          if (T.preventDefault(), u == null)
            v(y.endIndex);
          else if (u === "all")
            v(y.startIndex);
          else {
            const S = y.neighbors[u].leftIndex;
            S !== null && v(S);
          }
          break;
        }
        // Reset the value of the selected section
        case T.key === "Delete": {
          if (T.preventDefault(), i)
            break;
          u == null || u === "all" ? g() : p();
          break;
        }
        // Increment / decrement the selected section value
        case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(T.key): {
          if (T.preventDefault(), i || c == null)
            break;
          u === "all" && v(c);
          const S = a.sections[c], x = Bx(t, h, S, T.key, d, f, o.getDateFromSection(l, S), {
            minutesStep: r
          });
          C({
            section: S,
            newSectionValue: x,
            shouldGoToNextSection: !1
          });
          break;
        }
      }
  });
}
function Lx(e) {
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
function Bx(e, t, o, r, s, i, a, l) {
  const c = Lx(r), u = r === "Home", d = r === "End", f = o.value === "" || u || d, h = () => {
    const g = s[o.type]({
      currentDate: a,
      format: o.format,
      contentType: o.contentType
    }), p = (T) => Cu(e, T, g, i, o), v = o.type === "minutes" && l?.minutesStep ? l.minutesStep : 1;
    let C;
    if (f) {
      if (o.type === "year" && !d && !u)
        return e.formatByString(e.date(void 0, t), o.format);
      c > 0 || u ? C = g.minimum : C = g.maximum;
    } else
      C = parseInt(Pn(o.value, i), 10) + c * v;
    return C % v !== 0 && ((c < 0 || u) && (C += v - (v + C) % v), (c > 0 || d) && (C -= C % v)), C > g.maximum ? p(g.minimum + (C - g.maximum - 1) % (g.maximum - g.minimum + 1)) : C < g.minimum ? p(g.maximum - (g.minimum - C - 1) % (g.maximum - g.minimum + 1)) : p(C);
  }, y = () => {
    const g = Pu(e, t, o.type, o.format);
    if (g.length === 0)
      return o.value;
    if (f)
      return c > 0 || u ? g[0] : g[g.length - 1];
    const C = ((g.indexOf(o.value) + c) % g.length + g.length) % g.length;
    return g[C];
  };
  return o.contentType === "digit" || o.contentType === "digit-with-letter" ? h() : y();
}
function Wx(e) {
  const {
    manager: t,
    focused: o,
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
      clearValue: f,
      setCharacterQuery: h,
      setSelectedSections: y,
      updateValueFromValueStr: g
    },
    internalPropsWithDefaults: {
      disabled: p = !1,
      readOnly: v = !1
    }
  } = e, C = hd({
    manager: t,
    internalPropsWithDefaults: l,
    stateResponse: i
  }), T = _n(), S = pe((w) => {
    p || !s.isReady() || (r(!0), c === "all" ? T.start(0, () => {
      const k = document.getSelection().getRangeAt(0).startOffset;
      if (k === 0) {
        y(u.startIndex);
        return;
      }
      let M = 0, N = 0;
      for (; N < k && M < d.sections.length; ) {
        const D = d.sections[M];
        M += 1, N += `${D.startSeparator}${D.value || D.placeholder}${D.endSeparator}`.length;
      }
      y(M - 1);
    }) : o ? s.getRoot().contains(w.target) || y(u.startIndex) : (r(!0), y(u.startIndex)));
  }), x = pe((w) => {
    if (!s.isReady() || c !== "all")
      return;
    const M = w.target.textContent ?? "";
    s.getRoot().innerHTML = d.sections.map((N) => `${N.startSeparator}${N.value || N.placeholder}${N.endSeparator}`).join(""), Xi({
      focused: o,
      domGetters: s,
      stateResponse: i
    }), M.length === 0 || M.charCodeAt(0) === 10 ? (f(), y("all")) : M.length > 1 ? g(M) : (c === "all" && y(0), a({
      keyPressed: M,
      sectionIndex: 0
    }));
  }), E = pe((w) => {
    if (v || c !== "all") {
      w.preventDefault();
      return;
    }
    const k = w.clipboardData.getData("text");
    w.preventDefault(), h(null), g(k);
  }), I = pe(() => {
    if (o || p || !s.isReady())
      return;
    const w = at(s.getRoot());
    r(!0), s.getSectionIndexFromDOMElement(w) != null || y(u.startIndex);
  }), P = pe(() => {
    setTimeout(() => {
      if (!s.isReady())
        return;
      const w = at(s.getRoot());
      !s.getRoot().contains(w) && (r(!1), y(null));
    });
  });
  return {
    // Event handlers
    onKeyDown: C,
    onBlur: P,
    onFocus: I,
    onClick: S,
    onPaste: E,
    onInput: x,
    // Other
    contentEditable: c === "all",
    tabIndex: c === 0 ? -1 : 0
    // TODO: Try to set to undefined when there is a section selected.
  };
}
function zx(e) {
  const {
    manager: {
      internal_fieldValueManager: t
    },
    stateResponse: {
      // States and derived states
      areAllSectionsEmpty: o,
      state: r,
      // Methods to update the states
      updateValueFromValueStr: s
    }
  } = e, i = pe((l) => {
    s(l.target.value);
  });
  return {
    value: m.useMemo(() => o ? "" : t.getV7HiddenInputValueFromSections(r.sections), [o, r.sections, t]),
    onChange: i
  };
}
function Ux(e) {
  const {
    stateResponse: {
      // Methods to update the states
      setSelectedSections: t
    },
    internalPropsWithDefaults: {
      disabled: o = !1
    }
  } = e, r = m.useCallback((s) => (i) => {
    o || i.isDefaultPrevented() || t(s);
  }, [o, t]);
  return m.useCallback((s) => ({
    "data-sectionindex": s,
    onClick: r(s)
  }), [r]);
}
function qx(e) {
  const t = Ve(), o = rn(), {
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
      value: f,
      // Methods to update the states
      clearActiveSection: h,
      setCharacterQuery: y,
      setSelectedSections: g,
      updateSectionValue: p,
      updateValueFromValueStr: v
    },
    internalPropsWithDefaults: {
      disabled: C = !1,
      readOnly: T = !1
    }
  } = e, S = c === "all", x = !S && !C && !T, E = pe((N) => {
    if (!s.isReady())
      return;
    const D = d.sections[N];
    s.getSectionContent(N).innerHTML = D.value || D.placeholder, Xi({
      focused: r,
      domGetters: s,
      stateResponse: i
    });
  }), I = pe((N) => {
    if (!s.isReady())
      return;
    const D = N.target, F = D.textContent ?? "", $ = s.getSectionIndexFromDOMElement(D), V = d.sections[$];
    if (T) {
      E($);
      return;
    }
    if (F.length === 0) {
      if (V.value === "") {
        E($);
        return;
      }
      const j = N.nativeEvent.inputType;
      if (j === "insertParagraph" || j === "insertLineBreak") {
        E($);
        return;
      }
      E($), h();
      return;
    }
    a({
      keyPressed: F,
      sectionIndex: $
    }), E($);
  }), P = pe((N) => {
    N.preventDefault();
  }), w = pe((N) => {
    if (N.preventDefault(), T || C || typeof c != "number")
      return;
    const D = d.sections[c], F = N.clipboardData.getData("text"), $ = /^[a-zA-Z]+$/.test(F), V = /^[0-9]+$/.test(F), j = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(F);
    D.contentType === "letter" && $ || D.contentType === "digit" && V || D.contentType === "digit-with-letter" && j ? (y(null), p({
      section: D,
      newSectionValue: F,
      shouldGoToNextSection: !0
    })) : !$ && !V && (y(null), v(F));
  }), k = pe((N) => {
    N.preventDefault(), N.dataTransfer.dropEffect = "none";
  }), M = m.useCallback((N) => () => {
    C || g(N);
  }, [C, g]);
  return m.useCallback((N, D) => {
    const F = u[N.type]({
      currentDate: l.getDateFromSection(f, N),
      contentType: N.contentType,
      format: N.format
    });
    return {
      // Event handlers
      onInput: I,
      onPaste: w,
      onMouseUp: P,
      onDragOver: k,
      onFocus: M(D),
      // Aria attributes
      "aria-readonly": T,
      "aria-valuenow": Yx(N, t),
      "aria-valuemin": F.minimum,
      "aria-valuemax": F.maximum,
      "aria-valuetext": N.value ? Hx(N, t) : o.empty,
      "aria-label": o[N.type],
      "aria-disabled": C,
      // Other
      tabIndex: S || D > 0 ? -1 : 0,
      contentEditable: !S && !C && !T,
      role: "spinbutton",
      "data-range-position": N.dateName || void 0,
      spellCheck: x ? !1 : void 0,
      autoCapitalize: x ? "off" : void 0,
      autoCorrect: x ? "off" : void 0,
      children: N.value || N.placeholder,
      inputMode: N.contentType === "letter" ? "text" : "numeric"
    };
  }, [u, S, C, T, x, o, t, I, w, P, k, M, l, f]);
}
function Hx(e, t) {
  if (e.value)
    switch (e.type) {
      case "month": {
        if (e.contentType === "digit") {
          const r = t.setMonth(t.date(), Number(e.value) - 1);
          return t.isValid(r) ? t.format(r, "month") : "";
        }
        const o = t.parse(e.value, e.format);
        return o && t.isValid(o) ? t.format(o, "month") : void 0;
      }
      case "day":
        if (e.contentType === "digit") {
          const o = t.setDate(t.startOfYear(t.date()), Number(e.value));
          return t.isValid(o) ? t.format(o, "dayOfMonthFull") : "";
        }
        return e.value;
      case "weekDay":
        return;
      default:
        return;
    }
}
function Yx(e, t) {
  if (e.value)
    switch (e.type) {
      case "weekDay":
        return e.contentType === "letter" ? void 0 : Number(e.value);
      case "meridiem": {
        const o = t.parse(`01:00 ${e.value}`, `${t.formats.hours12h}:${t.formats.minutes} ${e.format}`);
        return o ? t.getHours(o) >= 12 ? 1 : 0 : void 0;
      }
      case "day":
        return e.contentType === "digit-with-letter" ? parseInt(e.value, 10) : Number(e.value);
      case "month": {
        if (e.contentType === "digit")
          return Number(e.value);
        const o = t.parse(e.value, e.format);
        return o ? t.getMonth(o) + 1 : void 0;
      }
      default:
        return e.contentType !== "letter" ? Number(e.value) : void 0;
    }
}
const Kx = (e) => {
  const {
    props: t,
    manager: o,
    skipContextFieldRefAssignment: r,
    manager: {
      valueType: s,
      internal_useOpenPickerButtonAriaLabel: i
    }
  } = e, {
    internalProps: a,
    forwardedProps: l
  } = Mu(t, s), c = md({
    manager: o,
    internalProps: a,
    skipContextFieldRefAssignment: r
  }), {
    sectionListRef: u,
    onBlur: d,
    onClick: f,
    onFocus: h,
    onInput: y,
    onPaste: g,
    onKeyDown: p,
    onClear: v,
    clearable: C
  } = l, {
    disabled: T = !1,
    readOnly: S = !1,
    autoFocus: x = !1,
    focused: E,
    unstableFieldRef: I
  } = c, P = m.useRef(null), w = ft(u, P), k = m.useMemo(() => ({
    isReady: () => P.current != null,
    getRoot: () => P.current.getRoot(),
    getSectionContainer: (z) => P.current.getSectionContainer(z),
    getSectionContent: (z) => P.current.getSectionContent(z),
    getSectionIndexFromDOMElement: (z) => P.current.getSectionIndexFromDOMElement(z)
  }), [P]), M = fd({
    manager: o,
    internalPropsWithDefaults: c,
    forwardedProps: l
  }), {
    // States and derived states
    areAllSectionsEmpty: N,
    error: D,
    parsedSelectedSections: F,
    sectionOrder: $,
    state: V,
    value: j,
    // Methods to update the states
    clearValue: A,
    setSelectedSections: L
  } = M, B = pd({
    stateResponse: M
  }), R = i(j), [_, q] = m.useState(!1);
  function K(z = 0) {
    if (T || !P.current || // if the field is already focused, we don't need to focus it again
    Ql(P) != null)
      return;
    const re = ei(z, V.sections);
    q(!0), P.current.getSectionContent(re).focus();
  }
  const H = Wx({
    manager: o,
    internalPropsWithDefaults: c,
    stateResponse: M,
    applyCharacterEditing: B,
    focused: _,
    setFocused: q,
    domGetters: k
  }), X = zx({
    manager: o,
    stateResponse: M
  }), Q = Ux({
    stateResponse: M,
    internalPropsWithDefaults: c
  }), oe = qx({
    manager: o,
    stateResponse: M,
    applyCharacterEditing: B,
    internalPropsWithDefaults: c,
    domGetters: k,
    focused: _
  }), ee = pe((z) => {
    p?.(z), H.onKeyDown(z);
  }), J = pe((z) => {
    d?.(z), H.onBlur(z);
  }), Y = pe((z) => {
    h?.(z), H.onFocus(z);
  }), U = pe((z) => {
    z.isDefaultPrevented() || (f?.(z), H.onClick(z));
  }), W = pe((z) => {
    g?.(z), H.onPaste(z);
  }), ne = pe((z) => {
    y?.(z), H.onInput(z);
  }), Z = pe((z, ...re) => {
    z.preventDefault(), v?.(z, ...re), A(), Zl(P) ? L($.startIndex) : K(0);
  }), ie = m.useMemo(() => V.sections.map((z, re) => {
    const fe = oe(z, re);
    return {
      container: Q(re),
      content: oe(z, re),
      before: {
        children: z.startSeparator
      },
      after: {
        children: z.endSeparator,
        "data-range-position": z.isEndFormatSeparator ? fe["data-range-position"] : void 0
      }
    };
  }), [V.sections, Q, oe]);
  return m.useEffect(() => {
    if (P.current == null)
      throw new Error(["MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`", "You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.", "", "If you want to keep using an `<input />` HTML element for the editing, please add the `enableAccessibleFieldDOMStructure={false}` prop to your Picker or Field component:", "", "<DatePicker enableAccessibleFieldDOMStructure={false} slots={{ textField: MyCustomTextField }} />", "", "Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"].join(`
`));
    x && !T && P.current && P.current.getSectionContent($.startIndex).focus();
  }, []), Vt(() => {
    if (!(!_ || !P.current)) {
      if (F === "all")
        P.current.getRoot().focus();
      else if (typeof F == "number") {
        const z = P.current.getSectionContent(F);
        z && z.focus();
      }
    }
  }, [F, _]), Vt(() => {
    Xi({
      focused: _,
      domGetters: k,
      stateResponse: M
    });
  }), m.useImperativeHandle(I, () => ({
    getSections: () => V.sections,
    getActiveSectionIndex: () => Ql(P),
    setSelectedSections: (z) => {
      if (T || !P.current)
        return;
      const re = ei(z, V.sections);
      q((re === "all" ? 0 : re) !== null), L(z);
    },
    focusField: K,
    isFieldFocused: () => Zl(P)
  })), b({}, l, H, {
    onBlur: J,
    onClick: U,
    onFocus: Y,
    onInput: ne,
    onPaste: W,
    onKeyDown: ee,
    onClear: Z
  }, X, {
    error: D,
    clearable: !!(C && !N && !S && !T),
    focused: E ?? _,
    sectionListRef: w,
    // Additional
    enableAccessibleFieldDOMStructure: !0,
    elements: ie,
    areAllSectionsEmpty: N,
    disabled: T,
    readOnly: S,
    autoFocus: x,
    openPickerAriaLabel: R
  });
};
function Ql(e) {
  const t = at(e.current?.getRoot());
  return !t || !e.current || !e.current.getRoot().contains(t) ? null : e.current.getSectionIndexFromDOMElement(t);
}
function Zl(e) {
  const t = at(e.current?.getRoot());
  return !!e.current && e.current.getRoot().contains(t);
}
const $n = (e) => e.replace(/[\u2066\u2067\u2068\u2069]/g, ""), Gx = (e, t, o) => {
  let r = 0, s = o ? 1 : 0;
  const i = [];
  for (let a = 0; a < e.length; a += 1) {
    const l = e[a], c = wi(l, o ? "input-rtl" : "input-ltr", t), u = `${l.startSeparator}${c}${l.endSeparator}`, d = $n(u).length, f = u.length, h = $n(c), y = s + (h === "" ? 0 : c.indexOf(h[0])) + l.startSeparator.length, g = y + h.length;
    i.push(b({}, l, {
      start: r,
      end: r + d,
      startInInput: y,
      endInInput: g
    })), r += d, s += f;
  }
  return i;
}, Xx = (e) => {
  const t = Lt(), o = _n(), r = _n(), {
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
    internalProps: f,
    forwardedProps: h
  } = Mu(s, l), y = md({
    manager: i,
    internalProps: f,
    skipContextFieldRefAssignment: a
  }), {
    onFocus: g,
    onClick: p,
    onPaste: v,
    onBlur: C,
    onKeyDown: T,
    onClear: S,
    clearable: x,
    inputRef: E,
    placeholder: I
  } = h, {
    readOnly: P = !1,
    disabled: w = !1,
    autoFocus: k = !1,
    focused: M,
    unstableFieldRef: N
  } = y, D = m.useRef(null), F = ft(E, D), $ = fd({
    manager: i,
    internalPropsWithDefaults: y,
    forwardedProps: h
  }), {
    // States and derived states
    activeSectionIndex: V,
    areAllSectionsEmpty: j,
    error: A,
    localizedDigits: L,
    parsedSelectedSections: B,
    sectionOrder: R,
    state: _,
    value: q,
    // Methods to update the states
    clearValue: K,
    clearActiveSection: H,
    setCharacterQuery: X,
    setSelectedSections: Q,
    setTempAndroidValueStr: oe,
    updateSectionValue: ee,
    updateValueFromValueStr: J,
    // Utilities methods
    getSectionsFromValue: Y
  } = $, U = pd({
    stateResponse: $
  }), W = d(q), ne = m.useMemo(() => Gx(_.sections, L, t), [_.sections, L, t]);
  function Z() {
    const se = D.current.selectionStart ?? 0;
    let he;
    se <= ne[0].startInInput || se >= ne[ne.length - 1].endInInput ? he = 1 : he = ne.findIndex(($e) => $e.startInInput - $e.startSeparator.length > se);
    const Ce = he === -1 ? ne.length - 1 : he - 1;
    Q(Ce);
  }
  function ie(se = 0) {
    at(D.current) !== D.current && (D.current?.focus(), Q(se));
  }
  const z = pe((se) => {
    g?.(se);
    const he = D.current;
    o.start(0, () => {
      !he || he !== D.current || V == null && (// avoid selecting all sections when focusing empty field without value
      he.value.length && Number(he.selectionEnd) - Number(he.selectionStart) === he.value.length ? Q("all") : Z());
    });
  }), re = pe((se, ...he) => {
    se.isDefaultPrevented() || (p?.(se, ...he), Z());
  }), fe = pe((se) => {
    if (v?.(se), se.preventDefault(), P || w)
      return;
    const he = se.clipboardData.getData("text");
    if (typeof B == "number") {
      const Ce = _.sections[B], $e = /^[a-zA-Z]+$/.test(he), Ue = /^[0-9]+$/.test(he), de = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(he);
      if (Ce.contentType === "letter" && $e || Ce.contentType === "digit" && Ue || Ce.contentType === "digit-with-letter" && de) {
        X(null), ee({
          section: Ce,
          newSectionValue: he,
          shouldGoToNextSection: !0
        });
        return;
      }
      if ($e || Ue)
        return;
    }
    X(null), J(he);
  }), ge = pe((se) => {
    C?.(se), Q(null);
  }), le = pe((se) => {
    if (P)
      return;
    const he = se.target.value;
    if (he === "") {
      K();
      return;
    }
    const Ce = se.nativeEvent.data, $e = Ce && Ce.length > 1, Ue = $e ? Ce : he, de = $n(Ue);
    if (B === "all" && Q(V), V == null || $e) {
      J($e ? Ce : de);
      return;
    }
    let me;
    if (B === "all" && de.length === 1)
      me = de;
    else {
      const Ae = $n(u.getV6InputValueFromSections(ne, L, t));
      let be = -1, Ge = -1;
      for (let It = 0; It < Ae.length; It += 1)
        be === -1 && Ae[It] !== de[It] && (be = It), Ge === -1 && Ae[Ae.length - It - 1] !== de[de.length - It - 1] && (Ge = It);
      const it = ne[V];
      if (be < it.start || Ae.length - Ge - 1 > it.end)
        return;
      const to = de.length - Ae.length + it.end - $n(it.endSeparator || "").length;
      me = de.slice(it.start + $n(it.startSeparator || "").length, to);
    }
    if (me.length === 0) {
      Eb() && oe(Ue), H();
      return;
    }
    U({
      keyPressed: me,
      sectionIndex: V
    });
  }), ce = pe((se, ...he) => {
    se.preventDefault(), S?.(se, ...he), K(), Jl(D) ? Q(R.startIndex) : ie(0);
  }), Se = hd({
    manager: i,
    internalPropsWithDefaults: y,
    stateResponse: $
  }), Pe = pe((se) => {
    T?.(se), Se(se);
  }), xe = m.useMemo(() => I !== void 0 ? I : u.getV6InputValueFromSections(Y(c.emptyValue), L, t), [I, u, Y, c.emptyValue, L, t]), Le = m.useMemo(() => _.tempValueStrAndroid ?? u.getV6InputValueFromSections(_.sections, L, t), [_.sections, u, _.tempValueStrAndroid, L, t]);
  m.useEffect(() => {
    D.current && D.current === at(D.current) && Q("all");
  }, []), Vt(() => {
    function se() {
      if (!D.current)
        return;
      if (B == null) {
        D.current.scrollLeft && (D.current.scrollLeft = 0);
        return;
      }
      if (D.current !== at(D.current))
        return;
      const he = D.current.scrollTop;
      if (B === "all")
        D.current.select();
      else {
        const Ce = ne[B], $e = Ce.type === "empty" ? Ce.startInInput - Ce.startSeparator.length : Ce.startInInput, Ue = Ce.type === "empty" ? Ce.endInInput + Ce.endSeparator.length : Ce.endInInput;
        ($e !== D.current.selectionStart || Ue !== D.current.selectionEnd) && D.current === at(D.current) && D.current.setSelectionRange($e, Ue), r.start(0, () => {
          D.current && D.current === at(D.current) && // The section might loose all selection, where `selectionStart === selectionEnd`
          // https://github.com/mui/mui-x/pull/13652
          D.current.selectionStart === D.current.selectionEnd && (D.current.selectionStart !== $e || D.current.selectionEnd !== Ue) && se();
        });
      }
      D.current.scrollTop = he;
    }
    se();
  });
  const Ze = m.useMemo(() => V == null || _.sections[V].contentType === "letter" ? "text" : "numeric", [V, _.sections]), ye = !(D.current && D.current === at(D.current)) && j;
  return m.useImperativeHandle(N, () => ({
    getSections: () => _.sections,
    getActiveSectionIndex: () => {
      const se = D.current.selectionStart ?? 0, he = D.current.selectionEnd ?? 0;
      if (se === 0 && he === 0)
        return null;
      const Ce = se <= ne[0].startInInput ? 1 : ne.findIndex(($e) => $e.startInInput - $e.startSeparator.length > se);
      return Ce === -1 ? ne.length - 1 : Ce - 1;
    },
    setSelectedSections: (se) => Q(se),
    focusField: ie,
    isFieldFocused: () => Jl(D)
  })), b({}, h, {
    error: A,
    clearable: !!(x && !j && !P && !w),
    onBlur: ge,
    onClick: re,
    onFocus: z,
    onPaste: fe,
    onKeyDown: Pe,
    onClear: ce,
    inputRef: F,
    // Additional
    enableAccessibleFieldDOMStructure: !1,
    placeholder: xe,
    inputMode: Ze,
    autoComplete: "off",
    value: ye ? "" : Le,
    onChange: le,
    focused: M,
    disabled: w,
    readOnly: P,
    autoFocus: k,
    openPickerAriaLabel: W
  });
};
function Jl(e) {
  return e.current === at(e.current);
}
const Qx = (e) => {
  const t = Eu();
  return (e.props.enableAccessibleFieldDOMStructure ?? t?.enableAccessibleFieldDOMStructure ?? !0 ? Kx : Xx)(e);
}, Zx = (e) => {
  const t = ag(e);
  return Qx({
    manager: t,
    props: e
  });
}, Jx = ["onChange", "maxRows", "minRows", "style", "value"];
function fr(e) {
  return parseInt(e, 10) || 0;
}
const e0 = {
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
function t0(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ec(e) {
  return t0(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const bd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: s,
    minRows: i = 1,
    style: a,
    value: l
  } = t, c = te(t, Jx), {
    current: u
  } = m.useRef(l != null), d = m.useRef(null), f = tt(o, d), h = m.useRef(null), y = m.useRef(null), g = m.useCallback(() => {
    const S = d.current, x = y.current;
    if (!S || !x)
      return;
    const I = vn(S).getComputedStyle(S);
    if (I.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    x.style.width = I.width, x.value = S.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const P = I.boxSizing, w = fr(I.paddingBottom) + fr(I.paddingTop), k = fr(I.borderBottomWidth) + fr(I.borderTopWidth), M = x.scrollHeight;
    x.value = "x";
    const N = x.scrollHeight;
    let D = M;
    i && (D = Math.max(Number(i) * N, D)), s && (D = Math.min(Number(s) * N, D)), D = Math.max(D, N);
    const F = D + (P === "border-box" ? w + k : 0), $ = Math.abs(D - M) <= 1;
    return {
      outerHeightStyle: F,
      overflowing: $
    };
  }, [s, i, t.placeholder]), p = mn(() => {
    const S = d.current, x = g();
    if (!S || !x || ec(x))
      return !1;
    const E = x.outerHeightStyle;
    return h.current != null && h.current !== E;
  }), v = m.useCallback(() => {
    const S = d.current, x = g();
    if (!S || !x || ec(x))
      return;
    const E = x.outerHeightStyle;
    h.current !== E && (h.current = E, S.style.height = `${E}px`), S.style.overflow = x.overflowing ? "hidden" : "";
  }, [g]), C = m.useRef(-1);
  kt(() => {
    const S = lu(v), x = d?.current;
    if (!x)
      return;
    const E = vn(x);
    E.addEventListener("resize", S);
    let I;
    return typeof ResizeObserver < "u" && (I = new ResizeObserver(() => {
      p() && (I.unobserve(x), cancelAnimationFrame(C.current), v(), C.current = requestAnimationFrame(() => {
        I.observe(x);
      }));
    }), I.observe(x)), () => {
      S.clear(), cancelAnimationFrame(C.current), E.removeEventListener("resize", S), I && I.disconnect();
    };
  }, [g, v, p]), kt(() => {
    v();
  });
  const T = (S) => {
    u || v(), r && r(S);
  };
  return /* @__PURE__ */ O.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ O.jsx("textarea", b({
      value: l,
      onChange: T,
      ref: f,
      rows: i,
      style: a
    }, c)), /* @__PURE__ */ O.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: y,
      tabIndex: -1,
      style: b({}, e0.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (bd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  placeholder: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * @ignore
   */
  value: n.oneOfType([n.arrayOf(n.string), n.number, n.string])
});
function eo({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, s) => (r[s] = e[s], o && typeof e[s] > "u" && (r[s] = o[s]), r), {});
}
const or = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (or.displayName = "FormControlContext");
function Yt() {
  return m.useContext(or);
}
function gd(e) {
  return /* @__PURE__ */ O.jsx(Zc, b({}, e, {
    defaultTheme: Zr,
    themeId: Gr
  }));
}
process.env.NODE_ENV !== "production" && (gd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function tc(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function $r(e, t = !1) {
  return e && (tc(e.value) && e.value !== "" || t && tc(e.defaultValue) && e.defaultValue !== "");
}
function n0(e) {
  return e.startAdornment;
}
function o0(e) {
  return we("MuiInputBase", e);
}
const Gn = Ee("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), r0 = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], cs = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${ae(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, us = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, s0 = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    error: s,
    endAdornment: i,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: h,
    startAdornment: y,
    type: g
  } = e, p = {
    root: ["root", `color${ae(o)}`, r && "disabled", s && "error", c && "fullWidth", a && "focused", l && "formControl", h && h !== "medium" && `size${ae(h)}`, d && "multiline", y && "adornedStart", i && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", d && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", y && "inputAdornedStart", i && "inputAdornedEnd", f && "readOnly"]
  };
  return Ie(p, o0, t);
}, ds = G("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: cs
})(({
  theme: e,
  ownerState: t
}) => b({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Gn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && b({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), ps = G("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: us
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light", r = b({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), s = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  };
  return b({
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
    [`label[data-shrink=false] + .${Gn.formControl} &`]: {
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
    [`&.${Gn.disabled}`]: {
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
}), i0 = /* @__PURE__ */ O.jsx(gd, {
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
}), fs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r;
  const s = Ne({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: h,
    disableInjectingGlobalStyles: y,
    endAdornment: g,
    fullWidth: p = !1,
    id: v,
    inputComponent: C = "input",
    inputProps: T = {},
    inputRef: S,
    maxRows: x,
    minRows: E,
    multiline: I = !1,
    name: P,
    onBlur: w,
    onChange: k,
    onClick: M,
    onFocus: N,
    onKeyDown: D,
    onKeyUp: F,
    placeholder: $,
    readOnly: V,
    renderSuffix: j,
    rows: A,
    slotProps: L = {},
    slots: B = {},
    startAdornment: R,
    type: _ = "text",
    value: q
  } = s, K = te(s, r0), H = T.value != null ? T.value : q, {
    current: X
  } = m.useRef(H != null), Q = m.useRef(), oe = m.useCallback((ye) => {
    process.env.NODE_ENV !== "production" && ye && ye.nodeName !== "INPUT" && !ye.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ee = tt(Q, S, T.ref, oe), [J, Y] = m.useState(!1), U = Yt();
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    if (U)
      return U.registerEffect();
  }, [U]);
  const W = eo({
    props: s,
    muiFormControl: U,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  W.focused = U ? U.focused : J, m.useEffect(() => {
    !U && h && J && (Y(!1), w && w());
  }, [U, h, J, w]);
  const ne = U && U.onFilled, Z = U && U.onEmpty, ie = m.useCallback((ye) => {
    $r(ye) ? ne && ne() : Z && Z();
  }, [ne, Z]);
  kt(() => {
    X && ie({
      value: H
    });
  }, [H, ie, X]);
  const z = (ye) => {
    if (W.disabled) {
      ye.stopPropagation();
      return;
    }
    N && N(ye), T.onFocus && T.onFocus(ye), U && U.onFocus ? U.onFocus(ye) : Y(!0);
  }, re = (ye) => {
    w && w(ye), T.onBlur && T.onBlur(ye), U && U.onBlur ? U.onBlur(ye) : Y(!1);
  }, fe = (ye, ...se) => {
    if (!X) {
      const he = ye.target || Q.current;
      if (he == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : zt(1));
      ie({
        value: he.value
      });
    }
    T.onChange && T.onChange(ye, ...se), k && k(ye, ...se);
  };
  m.useEffect(() => {
    ie(Q.current);
  }, []);
  const ge = (ye) => {
    Q.current && ye.currentTarget === ye.target && Q.current.focus(), M && M(ye);
  };
  let le = C, ce = T;
  I && le === "input" && (A ? (process.env.NODE_ENV !== "production" && (E || x) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), ce = b({
    type: void 0,
    minRows: A,
    maxRows: A
  }, ce)) : ce = b({
    type: void 0,
    maxRows: x,
    minRows: E
  }, ce), le = bd);
  const Se = (ye) => {
    ie(ye.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  m.useEffect(() => {
    U && U.setAdornedStart(!!R);
  }, [U, R]);
  const Pe = b({}, s, {
    color: W.color || "primary",
    disabled: W.disabled,
    endAdornment: g,
    error: W.error,
    focused: W.focused,
    formControl: U,
    fullWidth: p,
    hiddenLabel: W.hiddenLabel,
    multiline: I,
    size: W.size,
    startAdornment: R,
    type: _
  }), xe = s0(Pe), Le = B.root || u.Root || ds, Ze = L.root || d.root || {}, et = B.input || u.Input || ps;
  return ce = b({}, ce, (r = L.input) != null ? r : d.input), /* @__PURE__ */ O.jsxs(m.Fragment, {
    children: [!y && i0, /* @__PURE__ */ O.jsxs(Le, b({}, Ze, !zn(Le) && {
      ownerState: b({}, Pe, Ze.ownerState)
    }, {
      ref: o,
      onClick: ge
    }, K, {
      className: ue(xe.root, Ze.className, c, V && "MuiInputBase-readOnly"),
      children: [R, /* @__PURE__ */ O.jsx(or.Provider, {
        value: null,
        children: /* @__PURE__ */ O.jsx(et, b({
          ownerState: Pe,
          "aria-invalid": W.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: l,
          defaultValue: f,
          disabled: W.disabled,
          id: v,
          onAnimationStart: Se,
          name: P,
          placeholder: $,
          readOnly: V,
          required: W.required,
          rows: A,
          value: H,
          onKeyDown: D,
          onKeyUp: F,
          type: _
        }, ce, !zn(et) && {
          as: le,
          ownerState: b({}, Pe, ce.ownerState)
        }, {
          ref: ee,
          className: ue(xe.input, ce.className, V && "MuiInputBase-readOnly"),
          onBlur: re,
          onChange: fe,
          onFocus: z
        }))
      }), g, j ? j(b({}, W, {
        startAdornment: R
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (fs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
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
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Xr,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * @ignore
   */
  renderSuffix: n.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
function a0(e) {
  return we("MuiInput", e);
}
const po = b({}, Gn, Ee("MuiInput", ["root", "underline", "input"])), l0 = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], c0 = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, s = Ie({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, a0, t);
  return b({}, t, s);
}, u0 = G(ds, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...cs(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), b({
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
}), d0 = G(ps, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: us
})({}), ms = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, s, i, a;
  const l = Ne({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: f = !1,
    inputComponent: h = "input",
    multiline: y = !1,
    slotProps: g,
    slots: p = {},
    type: v = "text"
  } = l, C = te(l, l0), T = c0(l), x = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, E = g ?? d ? ht(g ?? d, x) : x, I = (r = (s = p.root) != null ? s : u.Root) != null ? r : u0, P = (i = (a = p.input) != null ? a : u.Input) != null ? i : d0;
  return /* @__PURE__ */ O.jsx(fs, b({
    slots: {
      root: I,
      input: P
    },
    slotProps: E,
    fullWidth: f,
    inputComponent: h,
    multiline: y,
    ref: o,
    type: v
  }, C, {
    classes: T
  }));
});
process.env.NODE_ENV !== "production" && (ms.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
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
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
ms.muiName = "Input";
function p0(e) {
  return we("MuiFilledInput", e);
}
const cn = b({}, Gn, Ee("MuiFilledInput", ["root", "underline", "input"])), f0 = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], m0 = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, s = Ie({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, p0, t);
  return b({}, t, s);
}, h0 = G(ds, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...cs(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = e.palette.mode === "light", s = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return b({
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
    [`&.${cn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${cn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(o = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : o.main}`,
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
    [`&.${cn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${cn.error}`]: {
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
    [`&:hover:not(.${cn.disabled}, .${cn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${cn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && b({
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
}), b0 = G(ps, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: us
})(({
  theme: e,
  ownerState: t
}) => b({
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
})), hs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, s, i, a;
  const l = Ne({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: h = !1,
    slotProps: y,
    slots: g = {},
    type: p = "text"
  } = l, v = te(l, f0), C = b({}, l, {
    fullWidth: d,
    inputComponent: f,
    multiline: h,
    type: p
  }), T = m0(l), S = {
    root: {
      ownerState: C
    },
    input: {
      ownerState: C
    }
  }, x = y ?? u ? ht(S, y ?? u) : S, E = (r = (s = g.root) != null ? s : c.Root) != null ? r : h0, I = (i = (a = g.input) != null ? a : c.Input) != null ? i : b0;
  return /* @__PURE__ */ O.jsx(fs, b({
    slots: {
      root: E,
      input: I
    },
    componentsProps: x,
    fullWidth: d,
    inputComponent: f,
    multiline: h,
    ref: o,
    type: p
  }, v, {
    classes: T
  }));
});
process.env.NODE_ENV !== "production" && (hs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
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
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
hs.muiName = "Input";
var nc;
const g0 = ["children", "classes", "className", "label", "notched"], y0 = G("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Mt
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
}), v0 = G("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Mt
})(({
  ownerState: e,
  theme: t
}) => b({
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
}, e.withLabel && b({
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
function yd(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, s = te(e, g0), i = o != null && o !== "", a = b({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ O.jsx(y0, b({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, s, {
    children: /* @__PURE__ */ O.jsx(v0, {
      ownerState: a,
      children: i ? /* @__PURE__ */ O.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        nc || (nc = /* @__PURE__ */ O.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (yd.propTypes = {
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The label.
   */
  label: n.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool.isRequired,
  /**
   * @ignore
   */
  style: n.object
});
function x0(e) {
  return we("MuiOutlinedInput", e);
}
const Gt = b({}, Gn, Ee("MuiOutlinedInput", ["root", "notchedOutline", "input"])), P0 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], C0 = (e) => {
  const {
    classes: t
  } = e, r = Ie({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, x0, t);
  return b({}, t, r);
}, S0 = G(ds, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: cs
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return b({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Gt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
      }
    },
    [`&.${Gt.focused} .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Gt.error} .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Gt.disabled} .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && b({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), E0 = G(yd, {
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
}), O0 = G(ps, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: us
})(({
  theme: e,
  ownerState: t
}) => b({
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
})), bs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, s, i, a, l;
  const c = Ne({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: f = "input",
    label: h,
    multiline: y = !1,
    notched: g,
    slots: p = {},
    type: v = "text"
  } = c, C = te(c, P0), T = C0(c), S = Yt(), x = eo({
    props: c,
    muiFormControl: S,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), E = b({}, c, {
    color: x.color || "primary",
    disabled: x.disabled,
    error: x.error,
    focused: x.focused,
    formControl: S,
    fullWidth: d,
    hiddenLabel: x.hiddenLabel,
    multiline: y,
    size: x.size,
    type: v
  }), I = (r = (s = p.root) != null ? s : u.Root) != null ? r : S0, P = (i = (a = p.input) != null ? a : u.Input) != null ? i : O0;
  return /* @__PURE__ */ O.jsx(fs, b({
    slots: {
      root: I,
      input: P
    },
    renderSuffix: (w) => /* @__PURE__ */ O.jsx(E0, {
      ownerState: E,
      className: T.notchedOutline,
      label: h != null && h !== "" && x.required ? l || (l = /* @__PURE__ */ O.jsxs(m.Fragment, {
        children: [h, " ", "*"]
      })) : h,
      notched: typeof g < "u" ? g : !!(w.startAdornment || w.filled || w.focused)
    }),
    fullWidth: d,
    inputComponent: f,
    multiline: y,
    ref: o,
    type: v
  }, C, {
    classes: b({}, T, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (bs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: n.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
bs.muiName = "Input";
function w0(e) {
  return we("MuiFormLabel", e);
}
const wo = Ee("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), T0 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], R0 = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: s,
    error: i,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${ae(o)}`, s && "disabled", i && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return Ie(c, w0, t);
}, k0 = G("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => b({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => b({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${wo.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${wo.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${wo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), D0 = G("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${wo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), vd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: s,
    className: i,
    component: a = "label"
  } = r, l = te(r, T0), c = Yt(), u = eo({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = b({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = R0(d);
  return /* @__PURE__ */ O.jsxs(k0, b({
    as: a,
    ownerState: d,
    className: ue(f.root, i),
    ref: o
  }, l, {
    children: [s, u.required && /* @__PURE__ */ O.jsxs(D0, {
      ownerState: d,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function M0(e) {
  return we("MuiInputLabel", e);
}
Ee("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const I0 = ["disableAnimation", "margin", "shrink", "variant", "className"], N0 = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: s,
    disableAnimation: i,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", o && "formControl", !i && "animated", s && "shrink", r && r !== "normal" && `size${ae(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = Ie(c, M0, t);
  return b({}, t, u);
}, $0 = G(vd, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${wo.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
}, t.variant === "filled" && b({
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
}, t.shrink && b({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && b({
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
}))), Qi = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: s = !1,
    shrink: i,
    className: a
  } = r, l = te(r, I0), c = Yt();
  let u = i;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = eo({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), f = b({}, r, {
    disableAnimation: s,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), h = N0(f);
  return /* @__PURE__ */ O.jsx($0, b({
    "data-shrink": u,
    ownerState: f,
    ref: o,
    className: ue(h.root, a)
  }, l, {
    classes: h
  }));
});
process.env.NODE_ENV !== "production" && (Qi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: n.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: n.oneOfType([n.oneOf(["normal", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function A0(e) {
  return we("MuiFormControl", e);
}
Ee("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const j0 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], F0 = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, s = {
    root: ["root", o !== "none" && `margin${ae(o)}`, r && "fullWidth"]
  };
  return Ie(s, A0, t);
}, V0 = G("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => b({}, t.root, t[`margin${ae(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => b({
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
})), Zi = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
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
    fullWidth: f = !1,
    hiddenLabel: h = !1,
    margin: y = "none",
    required: g = !1,
    size: p = "medium",
    variant: v = "outlined"
  } = r, C = te(r, j0), T = b({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: h,
    margin: y,
    required: g,
    size: p,
    variant: v
  }), S = F0(T), [x, E] = m.useState(() => {
    let F = !1;
    return s && m.Children.forEach(s, ($) => {
      if (!Co($, ["Input", "Select"]))
        return;
      const V = Co($, ["Select"]) ? $.props.input : $;
      V && n0(V.props) && (F = !0);
    }), F;
  }), [I, P] = m.useState(() => {
    let F = !1;
    return s && m.Children.forEach(s, ($) => {
      Co($, ["Input", "Select"]) && ($r($.props, !0) || $r($.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [w, k] = m.useState(!1);
  c && w && k(!1);
  const M = d !== void 0 && !c ? d : w;
  let N;
  if (process.env.NODE_ENV !== "production") {
    const F = m.useRef(!1);
    N = () => (F.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), F.current = !0, () => {
      F.current = !1;
    });
  }
  const D = m.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: E,
    color: a,
    disabled: c,
    error: u,
    filled: I,
    focused: M,
    fullWidth: f,
    hiddenLabel: h,
    size: p,
    onBlur: () => {
      k(!1);
    },
    onEmpty: () => {
      P(!1);
    },
    onFilled: () => {
      P(!0);
    },
    onFocus: () => {
      k(!0);
    },
    registerEffect: N,
    required: g,
    variant: v
  }), [x, a, c, u, I, M, f, h, N, g, p, v]);
  return /* @__PURE__ */ O.jsx(or.Provider, {
    value: D,
    children: /* @__PURE__ */ O.jsx(V0, b({
      as: l,
      ownerState: T,
      className: ue(S.root, i),
      ref: o
    }, C, {
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (Zi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function _0(e) {
  return we("MuiFormHelperText", e);
}
const oc = Ee("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var rc;
const L0 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], B0 = (e) => {
  const {
    classes: t,
    contained: o,
    size: r,
    disabled: s,
    error: i,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", s && "disabled", i && "error", r && `size${ae(r)}`, o && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Ie(u, _0, t);
}, W0 = G("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${ae(o.size)}`], o.contained && t.contained, o.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${oc.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${oc.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Ji = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: i,
    component: a = "p"
  } = r, l = te(r, L0), c = Yt(), u = eo({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = b({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = B0(d);
  return /* @__PURE__ */ O.jsx(W0, b({
    as: a,
    ownerState: d,
    className: ue(f.root, i),
    ref: o
  }, l, {
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      rc || (rc = /* @__PURE__ */ O.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : s
  }));
});
process.env.NODE_ENV !== "production" && (Ji.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
const z0 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Us(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function sc(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function xd(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.indexOf(t.keys.join("")) === 0;
}
function fo(e, t, o, r, s, i) {
  let a = !1, l = s(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !xd(l, i) || c)
      l = s(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Pd = /* @__PURE__ */ m.forwardRef(function(t, o) {
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
    variant: f = "selectedMenu"
  } = t, h = te(t, z0), y = m.useRef(null), g = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  kt(() => {
    s && y.current.focus();
  }, [s]), m.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (S, {
      direction: x
    }) => {
      const E = !y.current.style.width;
      if (S.clientHeight < y.current.clientHeight && E) {
        const I = `${pu(lt(S))}px`;
        y.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = I, y.current.style.width = `calc(100% + ${I})`;
      }
      return y.current;
    }
  }), []);
  const p = (S) => {
    const x = y.current, E = S.key, I = lt(x).activeElement;
    if (E === "ArrowDown")
      S.preventDefault(), fo(x, I, u, c, Us);
    else if (E === "ArrowUp")
      S.preventDefault(), fo(x, I, u, c, sc);
    else if (E === "Home")
      S.preventDefault(), fo(x, null, u, c, Us);
    else if (E === "End")
      S.preventDefault(), fo(x, null, u, c, sc);
    else if (E.length === 1) {
      const P = g.current, w = E.toLowerCase(), k = performance.now();
      P.keys.length > 0 && (k - P.lastTime > 500 ? (P.keys = [], P.repeating = !0, P.previousKeyMatched = !0) : P.repeating && w !== P.keys[0] && (P.repeating = !1)), P.lastTime = k, P.keys.push(w);
      const M = I && !P.repeating && xd(I, P);
      P.previousKeyMatched && (M || fo(x, I, !1, c, Us, P)) ? S.preventDefault() : P.previousKeyMatched = !1;
    }
    d && d(S);
  }, v = tt(y, o);
  let C = -1;
  m.Children.forEach(a, (S, x) => {
    if (!/* @__PURE__ */ m.isValidElement(S)) {
      C === x && (C += 1, C >= a.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && No.isFragment(S) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), S.props.disabled || (f === "selectedMenu" && S.props.selected || C === -1) && (C = x), C === x && (S.props.disabled || S.props.muiSkipListHighlight || S.type.muiSkipListHighlight) && (C += 1, C >= a.length && (C = -1));
  });
  const T = m.Children.map(a, (S, x) => {
    if (x === C) {
      const E = {};
      return i && (E.autoFocus = !0), S.props.tabIndex === void 0 && f === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ m.cloneElement(S, E);
    }
    return S;
  });
  return /* @__PURE__ */ O.jsx(Hi, b({
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: p,
    tabIndex: s ? 0 : -1
  }, h, {
    children: T
  }));
});
process.env.NODE_ENV !== "production" && (Pd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function U0(e) {
  const t = lt(e);
  return t.body === e ? vn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function To(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ic(e) {
  return parseInt(vn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function q0(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function ac(e, t, o, r, s) {
  const i = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const l = i.indexOf(a) === -1, c = !q0(a);
    l && c && To(a, s);
  });
}
function qs(e, t) {
  let o = -1;
  return e.some((r, s) => t(r) ? (o = s, !0) : !1), o;
}
function H0(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (U0(r)) {
      const a = pu(lt(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${ic(r) + a}px`;
      const l = lt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${ic(c) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = lt(r).body;
    else {
      const a = r.parentElement, l = vn(r);
      i = a?.nodeName === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    o.push({
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
    o.forEach(({
      value: i,
      el: a,
      property: l
    }) => {
      i ? a.style.setProperty(l, i) : a.style.removeProperty(l);
    });
  };
}
function Y0(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class K0 {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && To(t.modalRef, !1);
    const s = Y0(o);
    ac(o, t.mount, t.modalRef, s, !0);
    const i = qs(this.containers, (a) => a.container === o);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: s
    }), r);
  }
  mount(t, o) {
    const r = qs(this.containers, (i) => i.modals.indexOf(t) !== -1), s = this.containers[r];
    s.restore || (s.restore = H0(s, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const s = qs(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[s];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && To(t.modalRef, o), ac(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && To(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function G0(e) {
  return we("MuiBackdrop", e);
}
Ee("MuiBackdrop", ["root", "invisible"]);
const X0 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Q0 = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return Ie({
    root: ["root", o && "invisible"]
  }, G0, t);
}, Z0 = G("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => b({
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
})), ea = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, s, i;
  const a = Ne({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: f = {},
    invisible: h = !1,
    open: y,
    slotProps: g = {},
    slots: p = {},
    TransitionComponent: v = En,
    transitionDuration: C
  } = a, T = te(a, X0), S = b({}, a, {
    component: u,
    invisible: h
  }), x = Q0(S), E = (r = g.root) != null ? r : f.root;
  return /* @__PURE__ */ O.jsx(v, b({
    in: y,
    timeout: C
  }, T, {
    children: /* @__PURE__ */ O.jsx(Z0, b({
      "aria-hidden": !0
    }, E, {
      as: (s = (i = p.root) != null ? i : d.Root) != null ? s : u,
      className: ue(x.root, c, E?.className),
      ownerState: b({}, S, E?.ownerState),
      classes: x,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
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
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function J0(e) {
  return typeof e == "function" ? e() : e;
}
function eP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const tP = new K0();
function nP(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: s = tP,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, h = m.useRef({}), y = m.useRef(null), g = m.useRef(null), p = tt(g, f), [v, C] = m.useState(!d), T = eP(c);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const x = () => lt(y.current), E = () => (h.current.modalRef = g.current, h.current.mount = y.current, h.current), I = () => {
    s.mount(E(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, P = mn(() => {
    const j = J0(t) || x().body;
    s.add(E(), j), g.current && I();
  }), w = m.useCallback(() => s.isTopModal(E()), [s]), k = mn((j) => {
    y.current = j, j && (d && w() ? I() : g.current && To(g.current, S));
  }), M = m.useCallback(() => {
    s.remove(E(), S);
  }, [S, s]);
  m.useEffect(() => () => {
    M();
  }, [M]), m.useEffect(() => {
    d ? P() : (!T || !i) && M();
  }, [d, M, T, i, P]);
  const N = (j) => (A) => {
    var L;
    (L = j.onKeyDown) == null || L.call(j, A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !w()) && (o || (A.stopPropagation(), u && u(A, "escapeKeyDown")));
  }, D = (j) => (A) => {
    var L;
    (L = j.onClick) == null || L.call(j, A), A.target === A.currentTarget && u && u(A, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const A = bu(e);
      delete A.onTransitionEnter, delete A.onTransitionExited;
      const L = b({}, A, j);
      return b({
        role: "presentation"
      }, L, {
        onKeyDown: N(L),
        ref: p
      });
    },
    getBackdropProps: (j = {}) => {
      const A = j;
      return b({
        "aria-hidden": !0
      }, A, {
        onClick: D(A),
        open: d
      });
    },
    getTransitionProps: () => {
      const j = () => {
        C(!1), a && a();
      }, A = () => {
        C(!0), l && l(), i && M();
      };
      return {
        onEnter: Xa(j, c?.props.onEnter),
        onExited: Xa(A, c?.props.onExited)
      };
    },
    rootRef: p,
    portalRef: k,
    isTopModal: w,
    exited: v,
    hasTransition: T
  };
}
function oP(e) {
  return we("MuiModal", e);
}
Ee("MuiModal", ["root", "hidden", "backdrop"]);
const rP = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], sP = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return Ie({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, oP, r);
}, iP = G("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), aP = G(ea, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), ta = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, s, i, a, l, c;
  const u = Ne({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = aP,
    BackdropProps: f,
    className: h,
    closeAfterTransition: y = !1,
    children: g,
    container: p,
    component: v,
    components: C = {},
    componentsProps: T = {},
    disableAutoFocus: S = !1,
    disableEnforceFocus: x = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: I = !1,
    disableRestoreFocus: P = !1,
    disableScrollLock: w = !1,
    hideBackdrop: k = !1,
    keepMounted: M = !1,
    onBackdropClick: N,
    open: D,
    slotProps: F,
    slots: $
    // eslint-disable-next-line react/prop-types
  } = u, V = te(u, rP), j = b({}, u, {
    closeAfterTransition: y,
    disableAutoFocus: S,
    disableEnforceFocus: x,
    disableEscapeKeyDown: E,
    disablePortal: I,
    disableRestoreFocus: P,
    disableScrollLock: w,
    hideBackdrop: k,
    keepMounted: M
  }), {
    getRootProps: A,
    getBackdropProps: L,
    getTransitionProps: B,
    portalRef: R,
    isTopModal: _,
    exited: q,
    hasTransition: K
  } = nP(b({}, j, {
    rootRef: o
  })), H = b({}, j, {
    exited: q
  }), X = sP(H), Q = {};
  if (g.props.tabIndex === void 0 && (Q.tabIndex = "-1"), K) {
    const {
      onEnter: ne,
      onExited: Z
    } = B();
    Q.onEnter = ne, Q.onExited = Z;
  }
  const oe = (r = (s = $?.root) != null ? s : C.Root) != null ? r : iP, ee = (i = (a = $?.backdrop) != null ? a : C.Backdrop) != null ? i : d, J = (l = F?.root) != null ? l : T.root, Y = (c = F?.backdrop) != null ? c : T.backdrop, U = xn({
    elementType: oe,
    externalSlotProps: J,
    externalForwardedProps: V,
    getSlotProps: A,
    additionalProps: {
      ref: o,
      as: v
    },
    ownerState: H,
    className: ue(h, J?.className, X?.root, !H.open && H.exited && X?.hidden)
  }), W = xn({
    elementType: ee,
    externalSlotProps: Y,
    additionalProps: f,
    getSlotProps: (ne) => L(b({}, ne, {
      onClick: (Z) => {
        N && N(Z), ne != null && ne.onClick && ne.onClick(Z);
      }
    })),
    className: ue(Y?.className, f?.className, X?.backdrop),
    ownerState: H
  });
  return !M && !D && (!K || q) ? null : /* @__PURE__ */ O.jsx(Vo, {
    ref: R,
    container: p,
    disablePortal: I,
    children: /* @__PURE__ */ O.jsxs(oe, b({}, U, {
      children: [!k && d ? /* @__PURE__ */ O.jsx(ee, b({}, W)) : null, /* @__PURE__ */ O.jsx(_o, {
        disableEnforceFocus: x,
        disableAutoFocus: S,
        disableRestoreFocus: P,
        isEnabled: _,
        open: D,
        children: /* @__PURE__ */ m.cloneElement(g, Q)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (ta.propTypes = {
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
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: Ko.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
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
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
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
  container: n.oneOfType([Ut, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function lP(e) {
  return we("MuiPopover", e);
}
Ee("MuiPopover", ["root", "paper"]);
const cP = ["onEntering"], uP = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], dP = ["slotProps"];
function lc(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function cc(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function uc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Sr(e) {
  return typeof e == "function" ? e() : e;
}
const pP = (e) => {
  const {
    classes: t
  } = e;
  return Ie({
    root: ["root"],
    paper: ["paper"]
  }, lP, t);
}, fP = G(ta, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Cd = G(Jo, {
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
}), Sd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, s, i;
  const a = Ne({
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
    anchorReference: f = "anchorEl",
    children: h,
    className: y,
    container: g,
    elevation: p = 8,
    marginThreshold: v = 16,
    open: C,
    PaperProps: T = {},
    slots: S,
    slotProps: x,
    transformOrigin: E = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: I = ns,
    transitionDuration: P = "auto",
    TransitionProps: {
      onEntering: w
    } = {},
    disableScrollLock: k = !1
  } = a, M = te(a.TransitionProps, cP), N = te(a, uP), D = (r = x?.paper) != null ? r : T, F = m.useRef(), $ = tt(F, D.ref), V = b({}, a, {
    anchorOrigin: u,
    anchorReference: f,
    elevation: p,
    marginThreshold: v,
    externalPaperSlotProps: D,
    transformOrigin: E,
    TransitionComponent: I,
    transitionDuration: P,
    TransitionProps: M
  }), j = pP(V), A = m.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const ne = Sr(c), Z = ne && ne.nodeType === 1 ? ne : lt(F.current).body, ie = Z.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const z = Z.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && z.top === 0 && z.left === 0 && z.right === 0 && z.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ie.top + lc(ie, u.vertical),
      left: ie.left + cc(ie, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, f]), L = m.useCallback((ne) => ({
    vertical: lc(ne, E.vertical),
    horizontal: cc(ne, E.horizontal)
  }), [E.horizontal, E.vertical]), B = m.useCallback((ne) => {
    const Z = {
      width: ne.offsetWidth,
      height: ne.offsetHeight
    }, ie = L(Z);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: uc(ie)
      };
    const z = A();
    let re = z.top - ie.vertical, fe = z.left - ie.horizontal;
    const ge = re + Z.height, le = fe + Z.width, ce = vn(Sr(c)), Se = ce.innerHeight - v, Pe = ce.innerWidth - v;
    if (v !== null && re < v) {
      const xe = re - v;
      re -= xe, ie.vertical += xe;
    } else if (v !== null && ge > Se) {
      const xe = ge - Se;
      re -= xe, ie.vertical += xe;
    }
    if (process.env.NODE_ENV !== "production" && Z.height > Se && Z.height && Se && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${Z.height - Se}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), v !== null && fe < v) {
      const xe = fe - v;
      fe -= xe, ie.horizontal += xe;
    } else if (le > Pe) {
      const xe = le - Pe;
      fe -= xe, ie.horizontal += xe;
    }
    return {
      top: `${Math.round(re)}px`,
      left: `${Math.round(fe)}px`,
      transformOrigin: uc(ie)
    };
  }, [c, f, A, L, v]), [R, _] = m.useState(C), q = m.useCallback(() => {
    const ne = F.current;
    if (!ne)
      return;
    const Z = B(ne);
    Z.top !== null && (ne.style.top = Z.top), Z.left !== null && (ne.style.left = Z.left), ne.style.transformOrigin = Z.transformOrigin, _(!0);
  }, [B]);
  m.useEffect(() => (k && window.addEventListener("scroll", q), () => window.removeEventListener("scroll", q)), [c, k, q]);
  const K = (ne, Z) => {
    w && w(ne, Z), q();
  }, H = () => {
    _(!1);
  };
  m.useEffect(() => {
    C && q();
  }), m.useImperativeHandle(l, () => C ? {
    updatePosition: () => {
      q();
    }
  } : null, [C, q]), m.useEffect(() => {
    if (!C)
      return;
    const ne = lu(() => {
      q();
    }), Z = vn(c);
    return Z.addEventListener("resize", ne), () => {
      ne.clear(), Z.removeEventListener("resize", ne);
    };
  }, [c, C, q]);
  let X = P;
  P === "auto" && !I.muiSupportAuto && (X = void 0);
  const Q = g || (c ? lt(Sr(c)).body : void 0), oe = (s = S?.root) != null ? s : fP, ee = (i = S?.paper) != null ? i : Cd, J = xn({
    elementType: ee,
    externalSlotProps: b({}, D, {
      style: R ? D.style : b({}, D.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: p,
      ref: $
    },
    ownerState: V,
    className: ue(j.paper, D?.className)
  }), Y = xn({
    elementType: oe,
    externalSlotProps: x?.root || {},
    externalForwardedProps: N,
    additionalProps: {
      ref: o,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: Q,
      open: C
    },
    ownerState: V,
    className: ue(j.root, y)
  }), {
    slotProps: U
  } = Y, W = te(Y, dP);
  return /* @__PURE__ */ O.jsx(oe, b({}, W, !zn(oe) && {
    slotProps: U,
    disableScrollLock: k
  }, {
    children: /* @__PURE__ */ O.jsx(I, b({
      appear: !0,
      in: C,
      onEntering: K,
      onExited: H,
      timeout: X
    }, M, {
      children: /* @__PURE__ */ O.jsx(ee, b({}, J, {
        children: h
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Sd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Dt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: nn(n.oneOfType([Ut, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Sr(e.anchorEl);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
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
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Ut, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: hu,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: Xr
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
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
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object
});
function mP(e) {
  return we("MuiMenu", e);
}
Ee("MuiMenu", ["root", "paper", "list"]);
const hP = ["onEntering"], bP = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], gP = {
  vertical: "top",
  horizontal: "right"
}, yP = {
  vertical: "top",
  horizontal: "left"
}, vP = (e) => {
  const {
    classes: t
  } = e;
  return Ie({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, mP, t);
}, xP = G(Sd, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), PP = G(Cd, {
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
}), CP = G(Pd, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ed = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, s;
  const i = Ne({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: f,
    open: h,
    PaperProps: y = {},
    PopoverClasses: g,
    transitionDuration: p = "auto",
    TransitionProps: {
      onEntering: v
    } = {},
    variant: C = "selectedMenu",
    slots: T = {},
    slotProps: S = {}
  } = i, x = te(i.TransitionProps, hP), E = te(i, bP), I = Lt(), P = b({}, i, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: v,
    PaperProps: y,
    transitionDuration: p,
    TransitionProps: x,
    variant: C
  }), w = vP(P), k = a && !u && h, M = m.useRef(null), N = (L, B) => {
    M.current && M.current.adjustStyleForScrollbar(L, {
      direction: I ? "rtl" : "ltr"
    }), v && v(L, B);
  }, D = (L) => {
    L.key === "Tab" && (L.preventDefault(), f && f(L, "tabKeyDown"));
  };
  let F = -1;
  m.Children.map(l, (L, B) => {
    /* @__PURE__ */ m.isValidElement(L) && (process.env.NODE_ENV !== "production" && No.isFragment(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (C === "selectedMenu" && L.props.selected || F === -1) && (F = B));
  });
  const $ = (r = T.paper) != null ? r : PP, V = (s = S.paper) != null ? s : y, j = xn({
    elementType: T.root,
    externalSlotProps: S.root,
    ownerState: P,
    className: [w.root, c]
  }), A = xn({
    elementType: $,
    externalSlotProps: V,
    ownerState: P,
    className: w.paper
  });
  return /* @__PURE__ */ O.jsx(xP, b({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: I ? "right" : "left"
    },
    transformOrigin: I ? gP : yP,
    slots: {
      paper: $,
      root: T.root
    },
    slotProps: {
      root: j,
      paper: A
    },
    open: h,
    ref: o,
    transitionDuration: p,
    TransitionProps: b({
      onEntering: N
    }, x),
    ownerState: P
  }, E, {
    classes: g,
    children: /* @__PURE__ */ O.jsx(CP, b({
      onKeyDown: D,
      actions: M,
      autoFocus: a && (F === -1 || u),
      autoFocusItem: k,
      variant: C
    }, d, {
      className: ue(w.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ed.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([Ut, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function SP(e) {
  return we("MuiNativeSelect", e);
}
const na = Ee("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), EP = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], OP = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${ae(o)}`, i && "iconOpen", r && "disabled"]
  };
  return Ie(l, SP, t);
}, Od = ({
  ownerState: e,
  theme: t
}) => b({
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
  "&:focus": b({}, t.vars ? {
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
  [`&.${na.disabled}`]: {
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
}), wP = G("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Mt,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${na.multiple}`]: t.multiple
    }];
  }
})(Od), wd = ({
  ownerState: e,
  theme: t
}) => b({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${na.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), TP = G("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${ae(o.variant)}`], o.open && t.iconOpen];
  }
})(wd), Td = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: s,
    error: i,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, u = te(t, EP), d = b({}, t, {
    disabled: s,
    variant: c,
    error: i
  }), f = OP(d);
  return /* @__PURE__ */ O.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ O.jsx(wP, b({
      ownerState: d,
      className: ue(f.select, r),
      disabled: s,
      ref: l || o
    }, u)), t.multiple ? null : /* @__PURE__ */ O.jsx(TP, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Td.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Dt,
  /**
   * @ignore
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
function RP(e) {
  return we("MuiSelect", e);
}
const mo = Ee("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var dc;
const kP = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], DP = G("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${mo.select}`]: t.select
      },
      {
        [`&.${mo.select}`]: t[o.variant]
      },
      {
        [`&.${mo.error}`]: t.error
      },
      {
        [`&.${mo.multiple}`]: t.multiple
      }
    ];
  }
})(Od, {
  // Win specificity over the input base
  [`&.${mo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), MP = G("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${ae(o.variant)}`], o.open && t.iconOpen];
  }
})(wd), IP = G("input", {
  shouldForwardProp: (e) => vu(e) && e !== "classes",
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
function pc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function NP(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const $P = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${ae(o)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Ie(l, RP, t);
}, Rd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r;
  const {
    "aria-describedby": s,
    "aria-label": i,
    autoFocus: a,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: f,
    disabled: h,
    displayEmpty: y,
    error: g = !1,
    IconComponent: p,
    inputRef: v,
    labelId: C,
    MenuProps: T = {},
    multiple: S,
    name: x,
    onBlur: E,
    onChange: I,
    onClose: P,
    onFocus: w,
    onOpen: k,
    open: M,
    readOnly: N,
    renderValue: D,
    SelectDisplayProps: F = {},
    tabIndex: $,
    value: V,
    variant: j = "standard"
  } = t, A = te(t, kP), [L, B] = Ja({
    controlled: V,
    default: f,
    name: "Select"
  }), [R, _] = Ja({
    controlled: M,
    default: d,
    name: "Select"
  }), q = m.useRef(null), K = m.useRef(null), [H, X] = m.useState(null), {
    current: Q
  } = m.useRef(M != null), [oe, ee] = m.useState(), J = tt(o, v), Y = m.useCallback((de) => {
    K.current = de, de && X(de);
  }, []), U = H?.parentNode;
  m.useImperativeHandle(J, () => ({
    focus: () => {
      K.current.focus();
    },
    node: q.current,
    value: L
  }), [L]), m.useEffect(() => {
    d && R && H && !Q && (ee(l ? null : U.clientWidth), K.current.focus());
  }, [H, l]), m.useEffect(() => {
    a && K.current.focus();
  }, [a]), m.useEffect(() => {
    if (!C)
      return;
    const de = lt(K.current).getElementById(C);
    if (de) {
      const me = () => {
        getSelection().isCollapsed && K.current.focus();
      };
      return de.addEventListener("click", me), () => {
        de.removeEventListener("click", me);
      };
    }
  }, [C]);
  const W = (de, me) => {
    de ? k && k(me) : P && P(me), Q || (ee(l ? null : U.clientWidth), _(de));
  }, ne = (de) => {
    de.button === 0 && (de.preventDefault(), K.current.focus(), W(!0, de));
  }, Z = (de) => {
    W(!1, de);
  }, ie = m.Children.toArray(c), z = (de) => {
    const me = ie.find((Ae) => Ae.props.value === de.target.value);
    me !== void 0 && (B(me.props.value), I && I(de, me));
  }, re = (de) => (me) => {
    let Ae;
    if (me.currentTarget.hasAttribute("tabindex")) {
      if (S) {
        Ae = Array.isArray(L) ? L.slice() : [];
        const be = L.indexOf(de.props.value);
        be === -1 ? Ae.push(de.props.value) : Ae.splice(be, 1);
      } else
        Ae = de.props.value;
      if (de.props.onClick && de.props.onClick(me), L !== Ae && (B(Ae), I)) {
        const be = me.nativeEvent || me, Ge = new be.constructor(be.type, be);
        Object.defineProperty(Ge, "target", {
          writable: !0,
          value: {
            value: Ae,
            name: x
          }
        }), I(Ge, de);
      }
      S || W(!1, me);
    }
  }, fe = (de) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(de.key) !== -1 && (de.preventDefault(), W(!0, de));
  }, ge = H !== null && R, le = (de) => {
    !ge && E && (Object.defineProperty(de, "target", {
      writable: !0,
      value: {
        value: L,
        name: x
      }
    }), E(de));
  };
  delete A["aria-invalid"];
  let ce, Se;
  const Pe = [];
  let xe = !1, Le = !1;
  ($r({
    value: L
  }) || y) && (D ? ce = D(L) : xe = !0);
  const Ze = ie.map((de) => {
    if (!/* @__PURE__ */ m.isValidElement(de))
      return null;
    process.env.NODE_ENV !== "production" && No.isFragment(de) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let me;
    if (S) {
      if (!Array.isArray(L))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : zt(2));
      me = L.some((Ae) => pc(Ae, de.props.value)), me && xe && Pe.push(de.props.children);
    } else
      me = pc(L, de.props.value), me && xe && (Se = de.props.children);
    return me && (Le = !0), /* @__PURE__ */ m.cloneElement(de, {
      "aria-selected": me ? "true" : "false",
      onClick: re(de),
      onKeyUp: (Ae) => {
        Ae.key === " " && Ae.preventDefault(), de.props.onKeyUp && de.props.onKeyUp(Ae);
      },
      role: "option",
      selected: me,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": de.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    if (!Le && !S && L !== "") {
      const de = ie.map((me) => me.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${L}\` for the select ${x ? `(name="${x}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${de.filter((me) => me != null).map((me) => `\`${me}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Le, ie, S, x, L]), xe && (S ? Pe.length === 0 ? ce = null : ce = Pe.reduce((de, me, Ae) => (de.push(me), Ae < Pe.length - 1 && de.push(", "), de), []) : ce = Se);
  let et = oe;
  !l && Q && H && (et = U.clientWidth);
  let ye;
  typeof $ < "u" ? ye = $ : ye = h ? null : 0;
  const se = F.id || (x ? `mui-component-select-${x}` : void 0), he = b({}, t, {
    variant: j,
    value: L,
    open: ge,
    error: g
  }), Ce = $P(he), $e = b({}, T.PaperProps, (r = T.slotProps) == null ? void 0 : r.paper), Ue = xi();
  return /* @__PURE__ */ O.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ O.jsx(DP, b({
      ref: Y,
      tabIndex: ye,
      role: "combobox",
      "aria-controls": Ue,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": ge ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [C, se].filter(Boolean).join(" ") || void 0,
      "aria-describedby": s,
      onKeyDown: fe,
      onMouseDown: h || N ? null : ne,
      onBlur: le,
      onFocus: w
    }, F, {
      ownerState: he,
      className: ue(F.className, Ce.select, u),
      id: se,
      children: NP(ce) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        dc || (dc = /* @__PURE__ */ O.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : ce
    })), /* @__PURE__ */ O.jsx(IP, b({
      "aria-invalid": g,
      value: Array.isArray(L) ? L.join(",") : L,
      name: x,
      ref: q,
      "aria-hidden": !0,
      onChange: z,
      tabIndex: -1,
      disabled: h,
      className: Ce.nativeInput,
      autoFocus: a,
      ownerState: he
    }, A)), /* @__PURE__ */ O.jsx(MP, {
      as: p,
      className: Ce.icon,
      ownerState: he
    }), /* @__PURE__ */ O.jsx(Ed, b({
      id: `menu-${x || ""}`,
      anchorEl: U,
      open: ge,
      onClose: Z,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, T, {
      MenuListProps: b({
        "aria-labelledby": C,
        role: "listbox",
        "aria-multiselectable": S ? "true" : void 0,
        disableListWrap: !0,
        id: Ue
      }, T.MenuListProps),
      slotProps: b({}, T.slotProps, {
        paper: b({}, $e, {
          style: b({
            minWidth: et
          }, $e != null ? $e.style : null)
        })
      }),
      children: Ze
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * @ignore
   */
  "aria-label": n.string,
  /**
   * @ignore
   */
  autoFocus: n.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Dt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * @ignore
   */
  readOnly: n.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  type: n.any,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const AP = Bt(/* @__PURE__ */ O.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), jP = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], FP = ["root"], VP = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, oa = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Mt(e) && e !== "variant",
  slot: "Root"
}, _P = G(ms, oa)(""), LP = G(bs, oa)(""), BP = G(hs, oa)(""), ra = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: s = !1,
    children: i,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = AP,
    id: f,
    input: h,
    inputProps: y,
    label: g,
    labelId: p,
    MenuProps: v,
    multiple: C = !1,
    native: T = !1,
    onClose: S,
    onOpen: x,
    open: E,
    renderValue: I,
    SelectDisplayProps: P,
    variant: w = "outlined"
  } = r, k = te(r, jP), M = T ? Td : Rd, N = Yt(), D = eo({
    props: r,
    muiFormControl: N,
    states: ["variant", "error"]
  }), F = D.variant || w, $ = b({}, r, {
    variant: F,
    classes: a
  }), V = VP($), j = te(V, FP), A = h || {
    standard: /* @__PURE__ */ O.jsx(_P, {
      ownerState: $
    }),
    outlined: /* @__PURE__ */ O.jsx(LP, {
      label: g,
      ownerState: $
    }),
    filled: /* @__PURE__ */ O.jsx(BP, {
      ownerState: $
    })
  }[F], L = tt(o, Go(A));
  return /* @__PURE__ */ O.jsx(m.Fragment, {
    children: /* @__PURE__ */ m.cloneElement(A, b({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: M,
      inputProps: b({
        children: i,
        error: D.error,
        IconComponent: d,
        variant: F,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C
      }, T ? {
        id: f
      } : {
        autoWidth: s,
        defaultOpen: c,
        displayEmpty: u,
        labelId: p,
        MenuProps: v,
        onClose: S,
        onOpen: x,
        open: E,
        renderValue: I,
        SelectDisplayProps: b({
          id: f
        }, P)
      }, y, {
        classes: y ? ht(j, y.classes) : j
      }, h ? h.props.inputProps : {})
    }, (C && T || u) && F === "outlined" ? {
      notched: !0
    } : {}, {
      ref: L,
      className: ue(A.props.className, l, V.root)
    }, !h && {
      variant: F
    }, k))
  });
});
process.env.NODE_ENV !== "production" && (ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
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
  displayEmpty: n.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: n.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: n.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: n.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: n.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: n.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: n.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: n.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: n.oneOfType([n.oneOf([""]), n.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
ra.muiName = "Select";
function WP(e) {
  return we("MuiTextField", e);
}
Ee("MuiTextField", ["root"]);
const zP = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], UP = {
  standard: ms,
  filled: hs,
  outlined: bs
}, qP = (e) => {
  const {
    classes: t
  } = e;
  return Ie({
    root: ["root"]
  }, WP, t);
}, HP = G(Zi, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), kd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
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
    error: f = !1,
    FormHelperTextProps: h,
    fullWidth: y = !1,
    helperText: g,
    id: p,
    InputLabelProps: v,
    inputProps: C,
    InputProps: T,
    inputRef: S,
    label: x,
    maxRows: E,
    minRows: I,
    multiline: P = !1,
    name: w,
    onBlur: k,
    onChange: M,
    onFocus: N,
    placeholder: D,
    required: F = !1,
    rows: $,
    select: V = !1,
    SelectProps: j,
    type: A,
    value: L,
    variant: B = "outlined"
  } = r, R = te(r, zP), _ = b({}, r, {
    autoFocus: i,
    color: c,
    disabled: d,
    error: f,
    fullWidth: y,
    multiline: P,
    required: F,
    select: V,
    variant: B
  }), q = qP(_);
  process.env.NODE_ENV !== "production" && V && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const K = {};
  B === "outlined" && (v && typeof v.shrink < "u" && (K.notched = v.shrink), K.label = x), V && ((!j || !j.native) && (K.id = void 0), K["aria-describedby"] = void 0);
  const H = xi(p), X = g && H ? `${H}-helper-text` : void 0, Q = x && H ? `${H}-label` : void 0, oe = UP[B], ee = /* @__PURE__ */ O.jsx(oe, b({
    "aria-describedby": X,
    autoComplete: s,
    autoFocus: i,
    defaultValue: u,
    fullWidth: y,
    multiline: P,
    name: w,
    rows: $,
    maxRows: E,
    minRows: I,
    type: A,
    value: L,
    id: H,
    inputRef: S,
    onBlur: k,
    onChange: M,
    onFocus: N,
    placeholder: D,
    inputProps: C
  }, K, T));
  return /* @__PURE__ */ O.jsxs(HP, b({
    className: ue(q.root, l),
    disabled: d,
    error: f,
    fullWidth: y,
    ref: o,
    required: F,
    color: c,
    variant: B,
    ownerState: _
  }, R, {
    children: [x != null && x !== "" && /* @__PURE__ */ O.jsx(Qi, b({
      htmlFor: H,
      id: Q
    }, v, {
      children: x
    })), V ? /* @__PURE__ */ O.jsx(ra, b({
      "aria-describedby": X,
      id: H,
      labelId: Q,
      value: L,
      input: ee
    }, j, {
      children: a
    })) : ee, g && /* @__PURE__ */ O.jsx(Ji, b({
      id: X
    }, h, {
      children: g
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (kd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: n.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: n.object,
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function YP(e) {
  return we("MuiIconButton", e);
}
const KP = Ee("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), GP = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], XP = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: s,
    size: i
  } = e, a = {
    root: ["root", o && "disabled", r !== "default" && `color${ae(r)}`, s && `edge${ae(s)}`, `size${ae(i)}`]
  };
  return Ie(a, YP, t);
}, QP = G(Sn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${ae(o.color)}`], o.edge && t[`edge${ae(o.edge)}`], t[`size${ae(o.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : _e.alpha(e.palette.action.active, e.palette.action.hoverOpacity),
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
  var o;
  const r = (o = (e.vars || e).palette) == null ? void 0 : o[t.color];
  return b({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && b({
    color: r?.main
  }, !t.disableRipple && {
    "&:hover": b({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _e.alpha(r.main, e.palette.action.hoverOpacity)
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
    [`&.${KP.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Bo = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
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
  } = r, f = te(r, GP), h = b({}, r, {
    edge: s,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), y = XP(h);
  return /* @__PURE__ */ O.jsx(QP, b({
    className: ue(y.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: o
  }, f, {
    ownerState: h,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Bo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: nn(n.node, (e) => m.Children.toArray(e.children).some((o) => /* @__PURE__ */ m.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function ZP(e) {
  return we("MuiInputAdornment", e);
}
const fc = Ee("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var mc;
const JP = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], eC = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[`position${ae(o.position)}`], o.disablePointerEvents === !0 && t.disablePointerEvents, t[o.variant]];
}, tC = (e) => {
  const {
    classes: t,
    disablePointerEvents: o,
    hiddenLabel: r,
    position: s,
    size: i,
    variant: a
  } = e, l = {
    root: ["root", o && "disablePointerEvents", s && `position${ae(s)}`, a, r && "hiddenLabel", i && `size${ae(i)}`]
  };
  return Ie(l, ZP, t);
}, nC = G("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: eC
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${fc.positionStart}&:not(.${fc.hiddenLabel})`]: {
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
})), Dd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
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
  } = r, f = te(r, JP), h = Yt() || {};
  let y = d;
  d && h.variant && process.env.NODE_ENV !== "production" && d === h.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), h && !y && (y = h.variant);
  const g = b({}, r, {
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: l,
    position: u,
    variant: y
  }), p = tC(g);
  return /* @__PURE__ */ O.jsx(or.Provider, {
    value: null,
    children: /* @__PURE__ */ O.jsx(nC, b({
      as: a,
      ownerState: g,
      className: ue(p.root, i),
      ref: o
    }, f, {
      children: typeof s == "string" && !c ? /* @__PURE__ */ O.jsx(on, {
        color: "text.secondary",
        children: s
      }) : /* @__PURE__ */ O.jsxs(m.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          mc || (mc = /* @__PURE__ */ O.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, s]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (Dd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: n.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: n.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: n.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const Zt = 5;
function sa(e) {
  const {
    ownerState: t
  } = rt(), o = Lt();
  return m.useMemo(() => b({}, t, {
    isFieldDisabled: e.disabled ?? !1,
    isFieldReadOnly: e.readOnly ?? !1,
    isFieldRequired: e.required ?? !1,
    fieldDirection: o ? "rtl" : "ltr"
  }), [t, e.disabled, e.readOnly, e.required, o]);
}
const oC = Bt(/* @__PURE__ */ O.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), rC = Bt(/* @__PURE__ */ O.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft"), sC = Bt(/* @__PURE__ */ O.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight"), iC = Bt(/* @__PURE__ */ O.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
Bt(/* @__PURE__ */ O.jsxs(m.Fragment, {
  children: [/* @__PURE__ */ O.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ O.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
Bt(/* @__PURE__ */ O.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
Bt(/* @__PURE__ */ O.jsxs(m.Fragment, {
  children: [/* @__PURE__ */ O.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ O.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
const aC = Bt(/* @__PURE__ */ O.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
function lC(e) {
  return Qe("MuiPickersTextField", e);
}
Je("MuiPickersTextField", ["root", "focused", "disabled", "error", "required"]);
function cC(e, ...t) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
function uC(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : cC(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const dC = {
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
function pC(e) {
  return Qe("MuiPickersInputBase", e);
}
const Ln = Je("MuiPickersInputBase", ["root", "focused", "disabled", "error", "notchedOutline", "sectionContent", "sectionBefore", "sectionAfter", "adornedStart", "adornedEnd", "input", "inputSizeSmall", "activeBar"]);
function fC(e) {
  return Qe("MuiPickersSectionList", e);
}
const ho = Je("MuiPickersSectionList", ["root", "section", "sectionContent"]), mC = ["slots", "slotProps", "elements", "sectionListRef", "classes"], Md = G("div", {
  name: "MuiPickersSectionList",
  slot: "Root"
})({
  direction: "ltr /*! @noflip */",
  outline: "none"
}), Id = G("span", {
  name: "MuiPickersSectionList",
  slot: "Section"
})({}), Nd = G("span", {
  name: "MuiPickersSectionList",
  slot: "SectionSeparator"
})({
  whiteSpace: "pre"
}), $d = G("span", {
  name: "MuiPickersSectionList",
  slot: "SectionContent"
})({
  outline: "none"
}), hC = (e) => Ye({
  root: ["root"],
  section: ["section"],
  sectionContent: ["sectionContent"]
}, fC, e);
function Ad(e) {
  const {
    slots: t,
    slotProps: o,
    element: r,
    classes: s
  } = e, {
    ownerState: i
  } = rt(), a = t?.section ?? Id, l = Me({
    elementType: a,
    externalSlotProps: o?.section,
    externalForwardedProps: r.container,
    className: s.section,
    ownerState: i
  }), c = t?.sectionContent ?? $d, u = Me({
    elementType: c,
    externalSlotProps: o?.sectionContent,
    externalForwardedProps: r.content,
    additionalProps: {
      suppressContentEditableWarning: !0
    },
    className: s.sectionContent,
    ownerState: i
  }), d = t?.sectionSeparator ?? Nd, f = Me({
    elementType: d,
    externalSlotProps: o?.sectionSeparator,
    externalForwardedProps: r.before,
    ownerState: b({}, i, {
      separatorPosition: "before"
    })
  }), h = Me({
    elementType: d,
    externalSlotProps: o?.sectionSeparator,
    externalForwardedProps: r.after,
    ownerState: b({}, i, {
      separatorPosition: "after"
    })
  });
  return /* @__PURE__ */ O.jsxs(a, b({}, l, {
    children: [/* @__PURE__ */ O.jsx(d, b({}, f)), /* @__PURE__ */ O.jsx(c, b({}, u)), /* @__PURE__ */ O.jsx(d, b({}, h))]
  }));
}
process.env.NODE_ENV !== "production" && (Ad.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object.isRequired,
  element: n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  }).isRequired,
  /**
   * The props used for each component slot.
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   */
  slots: n.object
});
const ia = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiPickersSectionList"
  }), {
    slots: s,
    slotProps: i,
    elements: a,
    sectionListRef: l,
    classes: c
  } = r, u = te(r, mC), d = hC(c), {
    ownerState: f
  } = rt(), h = m.useRef(null), y = ft(o, h), g = (C) => {
    if (!h.current)
      throw new Error(`MUI X: Cannot call sectionListRef.${C} before the mount of the component.`);
    return h.current;
  };
  m.useImperativeHandle(l, () => ({
    getRoot() {
      return g("getRoot");
    },
    getSectionContainer(C) {
      return g("getSectionContainer").querySelector(`.${ho.section}[data-sectionindex="${C}"]`);
    },
    getSectionContent(C) {
      return g("getSectionContent").querySelector(`.${ho.section}[data-sectionindex="${C}"] .${ho.sectionContent}`);
    },
    getSectionIndexFromDOMElement(C) {
      const T = g("getSectionIndexFromDOMElement");
      if (C == null || !T.contains(C))
        return null;
      let S = null;
      return C.classList.contains(ho.section) ? S = C : C.classList.contains(ho.sectionContent) && (S = C.parentElement), S == null ? null : Number(S.dataset.sectionindex);
    }
  }));
  const p = s?.root ?? Md, v = Me({
    elementType: p,
    externalSlotProps: i?.root,
    externalForwardedProps: u,
    additionalProps: {
      ref: y,
      suppressContentEditableWarning: !0
    },
    className: d.root,
    ownerState: f
  });
  return /* @__PURE__ */ O.jsx(p, b({}, v, {
    children: v.contentEditable ? a.map(({
      content: C,
      before: T,
      after: S
    }) => `${T.children}${C.children}${S.children}`).join("") : /* @__PURE__ */ O.jsx(m.Fragment, {
      children: a.map((C, T) => /* @__PURE__ */ O.jsx(Ad, {
        slots: s,
        slotProps: i,
        element: C,
        classes: d
      }, T))
    })
  }));
});
process.env.NODE_ENV !== "production" && (ia.displayName = "PickersSectionList");
process.env.NODE_ENV !== "production" && (ia.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   */
  slots: n.object
});
const aa = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (aa.displayName = "PickerTextFieldOwnerStateContext");
const gs = () => {
  const e = m.useContext(aa);
  if (e == null)
    throw new Error(["MUI X: The `usePickerTextFieldOwnerState` can only be called in components that are used inside a PickerTextField component"].join(`
`));
  return e;
}, bC = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef", "onFocus", "onBlur", "classes", "ownerState"], gC = (e) => Math.round(e * 1e5) / 1e5, ys = G("div", {
  name: "MuiPickersInputBase",
  slot: "Root"
})(({
  theme: e
}) => b({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  cursor: "text",
  padding: 0,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  letterSpacing: `${gC(0.15 / 16)}em`,
  variants: [{
    props: {
      isInputInFullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
})), la = G(Md, {
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
})), yC = G(Id, {
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
})), vC = G($d, {
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
})), xC = G(Nd, {
  name: "MuiPickersInputBase",
  slot: "Separator"
})(() => ({
  whiteSpace: "pre",
  letterSpacing: "inherit"
})), PC = G("input", {
  name: "MuiPickersInputBase",
  slot: "Input",
  overridesResolver: (e, t) => t.hiddenInput
  // FIXME: Inconsistent naming with slot
})(b({}, dC)), CC = G("div", {
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
})), SC = (e, t) => {
  const {
    isFieldFocused: o,
    isFieldDisabled: r,
    isFieldReadOnly: s,
    hasFieldError: i,
    inputSize: a,
    isInputInFullWidth: l,
    inputColor: c,
    hasStartAdornment: u,
    hasEndAdornment: d
  } = t, f = {
    root: ["root", o && !r && "focused", r && "disabled", s && "readOnly", i && "error", l && "fullWidth", `color${uC(c)}`, a === "small" && "inputSizeSmall", u && "adornedStart", d && "adornedEnd"],
    notchedOutline: ["notchedOutline"],
    input: ["input"],
    sectionsContainer: ["sectionsContainer"],
    sectionContent: ["sectionContent"],
    sectionBefore: ["sectionBefore"],
    sectionAfter: ["sectionAfter"],
    activeBar: ["activeBar"]
  };
  return Ye(f, pC, e);
};
function hc(e, t, o, r) {
  if (e.content.id) {
    const s = t.current?.querySelectorAll(`[data-sectionindex="${o}"] [data-range-position="${r}"]`);
    if (s)
      return Array.from(s).reduce((i, a) => i + a.offsetWidth, 0);
  }
  return 0;
}
function EC(e, t) {
  let o = 0;
  if (t.current?.getAttribute("data-active-range-position") === "end")
    for (let s = e.length - 1; s >= e.length / 2; s -= 1)
      o += hc(e[s], t, s, "end");
  else
    for (let s = 0; s < e.length / 2; s += 1)
      o += hc(e[s], t, s, "start");
  return {
    activeBarWidth: o,
    sectionOffsets: [t.current?.querySelector('[data-sectionindex="0"]')?.offsetLeft || 0, t.current?.querySelector(`[data-sectionindex="${e.length / 2}"]`)?.offsetLeft || 0]
  };
}
const rr = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
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
    renderSuffix: f,
    slots: h,
    slotProps: y,
    contentEditable: g,
    tabIndex: p,
    onInput: v,
    onPaste: C,
    onKeyDown: T,
    name: S,
    readOnly: x,
    inputProps: E,
    inputRef: I,
    sectionListRef: P,
    onFocus: w,
    onBlur: k,
    classes: M,
    ownerState: N
  } = r, D = te(r, bC), F = gs(), $ = m.useRef(null), V = m.useRef(null), j = m.useRef([]), A = ft(o, $), L = ft(E?.ref, I), B = Yt();
  if (!B)
    throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
  const R = N ?? F, _ = (Y) => {
    B.onFocus?.(Y), w?.(Y);
  }, q = (Y) => {
    _(Y);
  }, K = (Y) => {
    if (T?.(Y), Y.key === "Enter" && !Y.defaultMuiPrevented) {
      if ($.current?.dataset.multiInput)
        return;
      const U = $.current?.closest("form"), W = U?.querySelector('[type="submit"]');
      if (!U || !W)
        return;
      Y.preventDefault(), U.requestSubmit(W);
    }
  }, H = (Y) => {
    B.onBlur?.(Y), k?.(Y);
  };
  m.useEffect(() => {
    B && B.setAdornedStart(!!d);
  }, [B, d]), m.useEffect(() => {
    B && (i ? B.onEmpty() : B.onFilled());
  }, [B, i]);
  const X = SC(M, R), Q = h?.root || ys, oe = Me({
    elementType: Q,
    externalSlotProps: y?.root,
    externalForwardedProps: D,
    additionalProps: {
      "aria-invalid": B.error,
      ref: A
    },
    className: X.root,
    ownerState: R
  }), ee = h?.input || la, J = s.some((Y) => Y.content["data-range-position"] !== void 0);
  return m.useEffect(() => {
    if (!J || !R.isPickerOpen)
      return;
    const {
      activeBarWidth: Y,
      sectionOffsets: U
    } = EC(s, $);
    j.current = [U[0], U[1]], V.current && (V.current.style.width = `${Y}px`);
  }, [s, J, R.isPickerOpen]), /* @__PURE__ */ O.jsxs(Q, b({}, oe, {
    children: [d, /* @__PURE__ */ O.jsx(ia, {
      sectionListRef: P,
      elements: s,
      contentEditable: g,
      tabIndex: p,
      className: X.sectionsContainer,
      onFocus: _,
      onBlur: H,
      onInput: v,
      onPaste: C,
      onKeyDown: K,
      slots: {
        root: ee,
        section: yC,
        sectionContent: vC,
        sectionSeparator: xC
      },
      slotProps: {
        root: b({}, y?.input, {
          ownerState: R
        }),
        sectionContent: {
          className: Ln.sectionContent
        },
        sectionSeparator: ({
          separatorPosition: Y
        }) => ({
          className: Y === "before" ? Ln.sectionBefore : Ln.sectionAfter
        })
      }
    }), u, f ? f(b({}, B)) : null, /* @__PURE__ */ O.jsx(PC, b({
      name: S,
      className: X.input,
      value: a,
      onChange: l,
      id: c,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly: x,
      required: B.required,
      disabled: B.disabled,
      onFocus: q
    }, E, {
      ref: L
    })), J && /* @__PURE__ */ O.jsx(CC, {
      className: X.activeBar,
      ref: V,
      ownerState: {
        sectionOffsets: j.current
      }
    })]
  }));
});
process.env.NODE_ENV !== "production" && (rr.displayName = "PickersInputBase");
process.env.NODE_ENV !== "production" && (rr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  "data-multi-input": n.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  fullWidth: n.bool,
  id: n.string,
  inputProps: n.object,
  inputRef: Ht,
  label: n.node,
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  ownerState: n.any,
  readOnly: n.bool,
  renderSuffix: n.func,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.object,
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired
});
function OC(e) {
  return Qe("MuiPickersOutlinedInput", e);
}
const Tt = b({}, Ln, Je("MuiPickersOutlinedInput", ["root", "notchedOutline", "input"])), wC = ["children", "className", "label", "notched", "shrink"], TC = G("fieldset", {
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
}), bc = G("span")(({
  theme: e
}) => ({
  fontFamily: e.typography.fontFamily,
  fontSize: "inherit"
})), RC = G("legend", {
  shouldForwardProp: (e) => Zn.shouldForwardProp(e) && e !== "notched"
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
function kC(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, s = te(e, wC), i = gs();
  return /* @__PURE__ */ O.jsx(TC, b({
    "aria-hidden": !0,
    className: t
  }, s, {
    ownerState: i,
    children: /* @__PURE__ */ O.jsx(RC, {
      ownerState: i,
      notched: r,
      children: o ? /* @__PURE__ */ O.jsx(bc, {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        /* @__PURE__ */ O.jsx(bc, {
          className: "notranslate",
          children: "​"
        })
      )
    })
  }));
}
const DC = ["label", "autoFocus", "ownerState", "classes", "notched"], MC = G(ys, {
  name: "MuiPickersOutlinedInput",
  slot: "Root"
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    padding: "0 14px",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Tt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Tt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${Tt.focused} .${Tt.notchedOutline}`]: {
      borderStyle: "solid",
      borderWidth: 2
    },
    [`&.${Tt.disabled}`]: {
      [`& .${Tt.notchedOutline}`]: {
        borderColor: (e.vars || e).palette.action.disabled
      },
      "*": {
        color: (e.vars || e).palette.action.disabled
      }
    },
    [`&.${Tt.error} .${Tt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    variants: Object.keys((e.vars ?? e).palette).filter((o) => (e.vars ?? e).palette[o]?.main ?? !1).map((o) => ({
      props: {
        inputColor: o
      },
      style: {
        [`&.${Tt.focused}:not(.${Tt.error}) .${Tt.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (e.vars || e).palette[o].main
        }
      }
    }))
  };
}), IC = G(la, {
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
}), NC = (e) => {
  const o = Ye({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, OC, e);
  return b({}, e, o);
}, vs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiPickersOutlinedInput"
  }), {
    label: s,
    classes: i,
    notched: a
  } = r, l = te(r, DC), c = Yt(), u = NC(i);
  return /* @__PURE__ */ O.jsx(rr, b({
    slots: {
      root: MC,
      input: IC
    },
    renderSuffix: (d) => /* @__PURE__ */ O.jsx(kC, {
      shrink: !!(a || d.adornedStart || d.focused || d.filled),
      notched: !!(a || d.adornedStart || d.focused || d.filled),
      className: u.notchedOutline,
      label: s != null && s !== "" && c?.required ? /* @__PURE__ */ O.jsxs(m.Fragment, {
        children: [s, " ", "*"]
      }) : s
    })
  }, l, {
    label: s,
    classes: u,
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (vs.displayName = "PickersOutlinedInput");
process.env.NODE_ENV !== "production" && (vs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  "data-multi-input": n.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  fullWidth: n.bool,
  id: n.string,
  inputProps: n.object,
  inputRef: Ht,
  label: n.node,
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  notched: n.bool,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  ownerState: n.any,
  readOnly: n.bool,
  renderSuffix: n.func,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.object,
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired
});
vs.muiName = "Input";
function $C(e) {
  return Qe("MuiPickersFilledInput", e);
}
const un = b({}, Ln, Je("MuiPickersFilledInput", ["root", "underline", "input"])), AC = ["label", "autoFocus", "disableUnderline", "hiddenLabel", "classes"], jC = G(ys, {
  name: "MuiPickersFilledInput",
  slot: "Root",
  shouldForwardProp: (e) => ou(e) && e !== "disableUnderline"
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light", o = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
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
    [`&.${un.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${un.disabled}`]: {
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
        [`&.${un.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${un.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
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
        [`&:hover:not(.${un.disabled}, .${un.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${un.disabled}:before`]: {
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
}), FC = G(la, {
  name: "MuiPickersFilledInput",
  slot: "sectionsContainer",
  shouldForwardProp: (e) => ou(e) && e !== "hiddenLabel"
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
}), VC = (e, t) => {
  const {
    inputHasUnderline: o
  } = t, s = Ye({
    root: ["root", o && "underline"],
    input: ["input"]
  }, $C, e);
  return b({}, e, s);
}, xs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiPickersFilledInput"
  }), {
    label: s,
    disableUnderline: i = !1,
    hiddenLabel: a = !1,
    classes: l
  } = r, c = te(r, AC), u = gs(), d = b({}, u, {
    inputHasUnderline: !i
  }), f = VC(l, d);
  return /* @__PURE__ */ O.jsx(rr, b({
    slots: {
      root: jC,
      input: FC
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
    classes: f,
    ref: o,
    ownerState: d
  }));
});
process.env.NODE_ENV !== "production" && (xs.displayName = "PickersFilledInput");
process.env.NODE_ENV !== "production" && (xs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  "data-multi-input": n.string,
  disableUnderline: n.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  fullWidth: n.bool,
  hiddenLabel: n.bool,
  id: n.string,
  inputProps: n.object,
  inputRef: Ht,
  label: n.node,
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  ownerState: n.any,
  readOnly: n.bool,
  renderSuffix: n.func,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.object,
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired
});
xs.muiName = "Input";
function _C(e) {
  return Qe("MuiPickersFilledInput", e);
}
const bo = b({}, Ln, Je("MuiPickersInput", ["root", "underline", "input"])), LC = ["label", "autoFocus", "disableUnderline", "ownerState", "classes"], BC = G(ys, {
  name: "MuiPickersInput",
  slot: "Root",
  shouldForwardProp: (e) => Zn.shouldForwardProp(e) && e !== "disableUnderline"
})(({
  theme: e
}) => {
  let o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (o = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
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
        [`&.${bo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${bo.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${o}`,
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
        [`&:hover:not(.${bo.disabled}, .${bo.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${o}`
          }
        },
        [`&.${bo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }]
  };
}), WC = (e, t) => {
  const {
    inputHasUnderline: o
  } = t, s = Ye({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, _C, e);
  return b({}, e, s);
}, Ps = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiPickersInput"
  }), {
    label: s,
    disableUnderline: i = !1,
    classes: a
  } = r, l = te(r, LC), c = gs(), u = b({}, c, {
    inputHasUnderline: !i
  }), d = WC(a, u);
  return /* @__PURE__ */ O.jsx(rr, b({
    slots: {
      root: BC
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
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (Ps.displayName = "PickersInput");
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  "data-multi-input": n.string,
  disableUnderline: n.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  fullWidth: n.bool,
  id: n.string,
  inputProps: n.object,
  inputRef: Ht,
  label: n.node,
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  ownerState: n.any,
  readOnly: n.bool,
  renderSuffix: n.func,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.object,
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired
});
Ps.muiName = "Input";
const zC = ["onFocus", "onBlur", "className", "classes", "color", "disabled", "error", "variant", "required", "hiddenLabel", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps", "data-active-range-position"], UC = {
  standard: Ps,
  filled: xs,
  outlined: vs
}, qC = G(Zi, {
  name: "MuiPickersTextField",
  slot: "Root"
})({
  maxWidth: "100%"
}), HC = (e, t) => {
  const {
    isFieldFocused: o,
    isFieldDisabled: r,
    isFieldRequired: s
  } = t;
  return Ye({
    root: ["root", o && !r && "focused", r && "disabled", s && "required"]
  }, lC, e);
}, Cs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
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
    variant: f = "outlined",
    required: h = !1,
    hiddenLabel: y = !1,
    // Props used by PickersInput
    InputProps: g,
    inputProps: p,
    inputRef: v,
    sectionListRef: C,
    elements: T,
    areAllSectionsEmpty: S,
    onClick: x,
    onKeyDown: E,
    onKeyUp: I,
    onPaste: P,
    onInput: w,
    endAdornment: k,
    startAdornment: M,
    tabIndex: N,
    contentEditable: D,
    focused: F,
    value: $,
    onChange: V,
    fullWidth: j,
    id: A,
    name: L,
    // Props used by FormHelperText
    helperText: B,
    FormHelperTextProps: R,
    // Props used by InputLabel
    label: _,
    InputLabelProps: q,
    // @ts-ignore
    "data-active-range-position": K
  } = r, H = te(r, zC), X = m.useRef(null), Q = ft(o, X), oe = qi(A), ee = B && oe ? `${oe}-helper-text` : void 0, J = _ && oe ? `${oe}-label` : void 0, Y = sa({
    disabled: r.disabled,
    required: r.required,
    readOnly: g?.readOnly
  }), U = m.useMemo(() => b({}, Y, {
    isFieldValueEmpty: S,
    isFieldFocused: F ?? !1,
    hasFieldError: d ?? !1,
    inputSize: r.size ?? "medium",
    inputColor: c ?? "primary",
    isInputInFullWidth: j ?? !1,
    hasStartAdornment: !!(M ?? g?.startAdornment),
    hasEndAdornment: !!(k ?? g?.endAdornment),
    inputHasLabel: !!_,
    isLabelShrunk: !!q?.shrink
  }), [Y, S, F, d, r.size, c, j, M, k, g?.startAdornment, g?.endAdornment, _, q?.shrink]), W = HC(l, U), ne = UC[f], Z = {};
  return f === "outlined" ? (q && typeof q.shrink < "u" && (Z.notched = q.shrink), Z.label = _) : f === "filled" && (Z.hiddenLabel = y), /* @__PURE__ */ O.jsx(aa.Provider, {
    value: U,
    children: /* @__PURE__ */ O.jsxs(qC, b({
      className: ue(W.root, a),
      ref: Q,
      focused: F,
      disabled: u,
      variant: f,
      error: d,
      color: c,
      fullWidth: j,
      required: h,
      ownerState: U
    }, H, {
      children: [_ != null && _ !== "" && /* @__PURE__ */ O.jsx(Qi, b({
        htmlFor: oe,
        id: J
      }, q, {
        children: _
      })), /* @__PURE__ */ O.jsx(ne, b({
        elements: T,
        areAllSectionsEmpty: S,
        onClick: x,
        onKeyDown: E,
        onKeyUp: I,
        onInput: w,
        onPaste: P,
        onFocus: s,
        onBlur: i,
        endAdornment: k,
        startAdornment: M,
        tabIndex: N,
        contentEditable: D,
        value: $,
        onChange: V,
        id: oe,
        fullWidth: j,
        inputProps: p,
        inputRef: v,
        sectionListRef: C,
        label: _,
        name: L,
        role: "group",
        "aria-labelledby": J,
        "aria-describedby": ee,
        "aria-live": ee ? "polite" : void 0,
        "data-active-range-position": K
      }, Z, g)), B && /* @__PURE__ */ O.jsx(Ji, b({
        id: ee
      }, R, {
        children: B
      }))]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Cs.displayName = "PickersTextField");
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  disabled: n.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  error: n.bool.isRequired,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  FormHelperTextProps: n.object,
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  id: n.string,
  InputLabelProps: n.object,
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  inputRef: Ht,
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  onBlur: n.func.isRequired,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onFocus: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  readOnly: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOf(["medium", "small"]),
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const YC = ["enableAccessibleFieldDOMStructure"], KC = ["InputProps", "readOnly", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"], GC = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"], XC = ["ownerState"], QC = ["ownerState"], ZC = ["ownerState"], JC = ["ownerState"], eS = ["InputProps", "inputProps"], Hs = () => {
}, tS = (e) => {
  let {
    enableAccessibleFieldDOMStructure: t
  } = e, o = te(e, YC);
  if (t) {
    const {
      InputProps: T,
      readOnly: S,
      onClear: x,
      clearable: E,
      clearButtonPosition: I,
      openPickerButtonPosition: P,
      openPickerAriaLabel: w
    } = o, k = te(o, KC), M = Zt >= 6 && k?.slotProps?.input ? Ro(k?.slotProps?.input, T) : Hs;
    return {
      clearable: E,
      onClear: x,
      clearButtonPosition: I,
      openPickerButtonPosition: P,
      openPickerAriaLabel: w,
      textFieldProps: b({}, k, Zt >= 6 && k?.slotProps?.input ? {
        slotProps: b({}, k?.slotProps, {
          input: (N) => b({}, Rt(M, N), {
            readOnly: S
          })
        })
      } : {
        InputProps: b({}, T ?? {}, {
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
    clearable: f,
    clearButtonPosition: h,
    openPickerButtonPosition: y,
    openPickerAriaLabel: g
  } = o, p = te(o, GC), v = Zt >= 6 && p?.slotProps?.input ? Ro(p?.slotProps?.input, l) : Hs, C = Zt >= 6 && p?.slotProps?.htmlInput ? Ro(p?.slotProps?.htmlInput, c) : Hs;
  return {
    clearable: f,
    onClear: d,
    clearButtonPosition: h,
    openPickerButtonPosition: y,
    openPickerAriaLabel: g,
    textFieldProps: b({}, p, Zt >= 6 && (p?.slotProps?.input || p?.slotProps?.htmlInput) ? {
      slotProps: b({}, p?.slotProps, {
        input: (T) => b({}, Rt(v, T), {
          readOnly: a
        }),
        htmlInput: (T) => b({}, Rt(C, T), {
          inputMode: i,
          onPaste: r,
          onKeyDown: s,
          ref: u
        })
      })
    } : {
      InputProps: b({}, l ?? {}, {
        readOnly: a
      }),
      inputProps: b({}, c ?? {}, {
        inputMode: i,
        onPaste: r,
        onKeyDown: s,
        ref: u
      })
    })
  };
}, Ss = /* @__PURE__ */ m.createContext({
  slots: {},
  slotProps: {},
  inputRef: void 0
});
process.env.NODE_ENV !== "production" && (Ss.displayName = "PickerFieldUIContext");
function nS(e) {
  const {
    fieldResponse: t,
    defaultOpenPickerIcon: o
  } = e, r = rn(), s = Ni(), i = m.useContext(Ss), {
    textFieldProps: a,
    onClear: l,
    clearable: c,
    openPickerAriaLabel: u,
    clearButtonPosition: d = "end",
    openPickerButtonPosition: f = "end"
  } = tS(t), h = sa(a), y = pe((R) => {
    R.preventDefault(), s?.setOpen((_) => !_);
  }), g = s ? s.triggerStatus : "hidden", p = c ? d : null, v = g !== "hidden" ? f : null, C = i.slots.textField ?? (t.enableAccessibleFieldDOMStructure === !1 ? kd : Cs), T = i.slots.inputAdornment ?? Dd, S = Me({
    elementType: T,
    externalSlotProps: i.slotProps.inputAdornment,
    additionalProps: {
      position: "start"
    },
    ownerState: b({}, h, {
      position: "start"
    })
  }), x = te(S, XC), E = Me({
    elementType: T,
    externalSlotProps: i.slotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: b({}, h, {
      position: "end"
    })
  }), I = te(E, QC), P = i.slots.openPickerButton ?? Bo, w = Me({
    elementType: P,
    externalSlotProps: i.slotProps.openPickerButton,
    additionalProps: {
      disabled: g === "disabled",
      onClick: y,
      "aria-label": u,
      edge: (
        // open button is always rendered at the edge
        a.variant !== "standard" ? v : !1
      )
    },
    ownerState: h
  }), k = te(w, ZC), M = i.slots.openPickerIcon ?? o, N = Me({
    elementType: M,
    externalSlotProps: i.slotProps.openPickerIcon,
    ownerState: h
  }), D = i.slots.clearButton ?? Bo, F = Me({
    elementType: D,
    externalSlotProps: i.slotProps.clearButton,
    className: "clearButton",
    additionalProps: {
      title: r.fieldClearLabel,
      tabIndex: -1,
      onClick: l,
      disabled: t.disabled || t.readOnly,
      edge: (
        // clear button can only be at the edge if it's position differs from the open button
        a.variant !== "standard" && p !== v ? p : !1
      )
    },
    ownerState: h
  }), $ = te(F, JC), V = i.slots.clearIcon ?? aC, j = Me({
    elementType: V,
    externalSlotProps: i.slotProps.clearIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  });
  a.ref = ft(a.ref, s?.rootRef);
  const A = {}, L = Rt((Zt >= 6 && a?.slotProps?.input) ?? a.InputProps, h);
  s && (A.ref = s.triggerRef), !L?.startAdornment && (p === "start" || v === "start") && (A.startAdornment = /* @__PURE__ */ O.jsxs(T, b({}, x, {
    children: [v === "start" && /* @__PURE__ */ O.jsx(P, b({}, k, {
      children: /* @__PURE__ */ O.jsx(M, b({}, N))
    })), p === "start" && /* @__PURE__ */ O.jsx(D, b({}, $, {
      children: /* @__PURE__ */ O.jsx(V, b({}, j))
    }))]
  }))), !L?.endAdornment && (p === "end" || v === "end") && (A.endAdornment = /* @__PURE__ */ O.jsxs(T, b({}, I, {
    children: [p === "end" && /* @__PURE__ */ O.jsx(D, b({}, $, {
      children: /* @__PURE__ */ O.jsx(V, b({}, j))
    })), v === "end" && /* @__PURE__ */ O.jsx(P, b({}, k, {
      children: /* @__PURE__ */ O.jsx(M, b({}, N))
    }))]
  }))), !A?.endAdornment && !A?.startAdornment && i.slots.inputAdornment && (A.endAdornment = /* @__PURE__ */ O.jsx(T, b({}, I))), p != null && (a.sx = [{
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
  const B = Zt >= 6 && a?.slotProps?.input ? Rt(Ro(L, A), h) : b({}, L, A);
  return a.inputProps = Zt >= 6 && a?.slotProps?.htmlInput ? Rt(a.slotProps.htmlInput, h) : a.inputProps, delete a?.slotProps?.input, t.enableAccessibleFieldDOMStructure && delete a?.slotProps, /* @__PURE__ */ O.jsx(C, b({}, a, {
    InputProps: B
  }));
}
function Ro(e, t) {
  return e ? t ? (o) => b({}, Rt(t, o), Rt(e, o)) : e : t;
}
function oS(e) {
  const {
    ref: t,
    externalForwardedProps: o,
    slotProps: r
  } = e, s = m.useContext(Ss), i = Ni(), a = sa(o), {
    InputProps: l,
    inputProps: c
  } = o, u = te(o, eS), d = Me({
    elementType: Cs,
    externalSlotProps: Ro(s.slotProps.textField, r?.textField),
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
  return d.inputProps = b({}, c, d.inputProps), d.InputProps = b({}, l, d.InputProps), d;
}
function rS(e) {
  const {
    slots: t = {},
    slotProps: o = {},
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
      openPickerButton: o.openPickerButton,
      openPickerIcon: o.openPickerIcon,
      textField: o.textField,
      inputAdornment: o.inputAdornment,
      clearIcon: o.clearIcon,
      clearButton: o.clearButton
    }
  }), [r, t.openPickerButton, t.openPickerIcon, t.textField, t.inputAdornment, t.clearIcon, t.clearButton, o.openPickerButton, o.openPickerIcon, o.textField, o.inputAdornment, o.clearIcon, o.clearButton]);
  return /* @__PURE__ */ O.jsx(Ss.Provider, {
    value: i,
    children: s
  });
}
const sS = ["slots", "slotProps"], Es = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiDateField"
  }), {
    slots: s,
    slotProps: i
  } = r, a = te(r, sS), l = oS({
    slotProps: i,
    ref: o,
    externalForwardedProps: a
  }), c = Zx(l);
  return /* @__PURE__ */ O.jsx(rS, {
    slots: s,
    slotProps: i,
    inputRef: a.inputRef,
    children: /* @__PURE__ */ O.jsx(nS, {
      fieldResponse: c,
      defaultOpenPickerIcon: iC
    })
  });
});
process.env.NODE_ENV !== "production" && (Es.displayName = "DateField");
process.env.NODE_ENV !== "production" && (Es.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: n.bool,
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition: n.oneOf(["end", "start"]),
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: n.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: n.object,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  onBlur: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: n.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: n.func,
  onFocus: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition: n.oneOf(["end", "start"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: n.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: n.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
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
  shouldRespectLeadingZeros: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: n.oneOfType([n.func, n.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const jd = ({
  shouldDisableDate: e,
  shouldDisableMonth: t,
  shouldDisableYear: o,
  minDate: r,
  maxDate: s,
  disableFuture: i,
  disablePast: a,
  timezone: l
}) => {
  const c = Ve();
  return m.useCallback((u) => Xo({
    adapter: c,
    value: u,
    timezone: l,
    props: {
      shouldDisableDate: e,
      shouldDisableMonth: t,
      shouldDisableYear: o,
      minDate: r,
      maxDate: s,
      disableFuture: i,
      disablePast: a
    }
  }) !== null, [c, e, t, o, r, s, i, a, l]);
}, iS = (e, t) => (o, r) => {
  switch (r.type) {
    case "setVisibleDate":
      return b({}, o, {
        slideDirection: r.direction,
        currentMonth: r.month,
        isMonthSwitchingAnimating: !t.isSameMonth(r.month, o.currentMonth) && !e && !r.skipAnimation,
        focusedDay: r.focusedDay
      });
    case "changeMonthTimezone": {
      const s = r.newTimezone;
      if (t.getTimezone(o.currentMonth) === s)
        return o;
      let i = t.setTimezone(o.currentMonth, s);
      return t.getMonth(i) !== t.getMonth(o.currentMonth) && (i = t.setMonth(i, t.getMonth(o.currentMonth))), b({}, o, {
        currentMonth: i
      });
    }
    case "finishMonthSwitchingAnimation":
      return b({}, o, {
        isMonthSwitchingAnimating: !1
      });
    default:
      throw new Error("missing support");
  }
}, aS = (e) => {
  const {
    value: t,
    referenceDate: o,
    disableFuture: r,
    disablePast: s,
    maxDate: i,
    minDate: a,
    onMonthChange: l,
    onYearChange: c,
    reduceAnimations: u,
    shouldDisableDate: d,
    timezone: f,
    getCurrentMonthFromVisibleDate: h
  } = e, y = Ve(), g = m.useRef(iS(!!u, y)).current, p = m.useMemo(
    () => Ft.getInitialReferenceValue({
      value: t,
      adapter: y,
      timezone: f,
      props: e,
      referenceDate: o,
      granularity: $t.day
    }),
    // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, f]
  ), [v, C] = m.useReducer(g, {
    isMonthSwitchingAnimating: !1,
    focusedDay: p,
    currentMonth: y.startOfMonth(p),
    slideDirection: "left"
  }), T = jd({
    shouldDisableDate: d,
    minDate: a,
    maxDate: i,
    disableFuture: r,
    disablePast: s,
    timezone: f
  });
  m.useEffect(() => {
    C({
      type: "changeMonthTimezone",
      newTimezone: y.getTimezone(p)
    });
  }, [p, y]);
  const S = pe(({
    target: E,
    reason: I
  }) => {
    if (I === "cell-interaction" && v.focusedDay != null && y.isSameDay(E, v.focusedDay))
      return;
    const P = I === "cell-interaction";
    let w, k;
    if (I === "cell-interaction")
      w = h(E, v.currentMonth), k = E;
    else if (w = y.isSameMonth(E, v.currentMonth) ? v.currentMonth : y.startOfMonth(E), k = E, T(k)) {
      const D = y.startOfMonth(E), F = y.endOfMonth(E);
      k = Ao({
        adapter: y,
        date: k,
        minDate: y.isBefore(a, D) ? D : a,
        maxDate: y.isAfter(i, F) ? F : i,
        disablePast: s,
        disableFuture: r,
        isDateDisabled: T,
        timezone: f
      });
    }
    const M = !y.isSameMonth(v.currentMonth, w), N = !y.isSameYear(v.currentMonth, w);
    M && l?.(w), N && c?.(y.startOfYear(w)), C({
      type: "setVisibleDate",
      month: w,
      direction: y.isAfterDay(w, v.currentMonth) ? "left" : "right",
      focusedDay: v.focusedDay != null && k != null && y.isSameDay(k, v.focusedDay) ? v.focusedDay : k,
      skipAnimation: P
    });
  }), x = m.useCallback(() => {
    C({
      type: "finishMonthSwitchingAnimation"
    });
  }, []);
  return {
    referenceDate: p,
    calendarState: v,
    setVisibleDate: S,
    isDateDisabled: T,
    onMonthSwitchingAnimationEnd: x
  };
}, lS = (e) => Qe("MuiPickersFadeTransitionGroup", e);
Je("MuiPickersFadeTransitionGroup", ["root"]);
const cS = ["children"], uS = (e) => Ye({
  root: ["root"]
}, lS, e), dS = G(Zo, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root"
})({
  display: "block",
  position: "relative"
});
function Fd(e) {
  const t = ze({
    props: e,
    name: "MuiPickersFadeTransitionGroup"
  }), {
    className: o,
    reduceAnimations: r,
    transKey: s,
    classes: i
  } = t, {
    children: a
  } = t, l = te(t, cS), c = uS(i), u = Qn();
  return r ? a : /* @__PURE__ */ O.jsx(dS, {
    className: ue(c.root, o),
    ownerState: l,
    children: /* @__PURE__ */ O.jsx(En, {
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
function pS(e) {
  return Qe("MuiPickersDay", e);
}
const dn = Je("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);
function Vd(e) {
  const {
    disabled: t,
    selected: o,
    today: r,
    outsideCurrentMonth: s,
    day: i,
    disableMargin: a,
    disableHighlightToday: l,
    showDaysOutsideCurrentMonth: c
  } = e, u = Ve(), {
    ownerState: d
  } = rt();
  return m.useMemo(() => b({}, d, {
    day: i,
    isDaySelected: o ?? !1,
    isDayDisabled: t ?? !1,
    isDayCurrent: r ?? !1,
    isDayOutsideMonth: s ?? !1,
    isDayStartOfWeek: u.isSameDay(i, u.startOfWeek(i)),
    isDayEndOfWeek: u.isSameDay(i, u.endOfWeek(i)),
    disableMargin: a ?? !1,
    disableHighlightToday: l ?? !1,
    showDaysOutsideCurrentMonth: c ?? !1
  }), [u, d, i, o, t, r, s, a, l, c]);
}
const fS = ["autoFocus", "className", "classes", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "children", "isFirstVisibleCell", "isLastVisibleCell", "day", "selected", "disabled", "today", "outsideCurrentMonth", "disableMargin", "disableHighlightToday", "showDaysOutsideCurrentMonth"], mS = (e, t) => {
  const {
    isDaySelected: o,
    isDayDisabled: r,
    isDayCurrent: s,
    isDayOutsideMonth: i,
    disableMargin: a,
    disableHighlightToday: l,
    showDaysOutsideCurrentMonth: c
  } = t, u = i && !c;
  return Ye({
    root: ["root", o && !u && "selected", r && "disabled", !a && "dayWithMargin", !l && s && "today", i && c && "dayOutsideMonth", u && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  }, pS, e);
}, _d = ({
  theme: e
}) => b({}, e.typography.caption, {
  width: Lo,
  height: Lo,
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Wn(e.palette.primary.main, e.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : Wn(e.palette.primary.main, e.palette.action.focusOpacity),
    [`&.${dn.selected}`]: {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${dn.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    fontWeight: e.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${dn.disabled}:not(.${dn.selected})`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${dn.disabled}&.${dn.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: !1
    },
    style: {
      margin: `0 ${is}px`
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
      [`&:not(.${dn.selected})`]: {
        border: `1px solid ${(e.vars || e).palette.text.secondary}`
      }
    }
  }]
}), Ld = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, !o.disableMargin && t.dayWithMargin, !o.disableHighlightToday && o.isDayCurrent && t.today, !o.isDayOutsideMonth && o.showDaysOutsideCurrentMonth && t.dayOutsideMonth, o.isDayOutsideMonth && !o.showDaysOutsideCurrentMonth && t.hiddenDaySpacingFiller];
}, hS = G(Sn, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: Ld
})(_d), bS = G("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: Ld
})(({
  theme: e
}) => b({}, _d({
  theme: e
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
})), go = () => {
}, ca = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiPickersDay"
  }), {
    autoFocus: s = !1,
    className: i,
    classes: a,
    isAnimating: l,
    onClick: c,
    onDaySelect: u,
    onFocus: d = go,
    onBlur: f = go,
    onKeyDown: h = go,
    onMouseDown: y = go,
    onMouseEnter: g = go,
    children: p,
    day: v,
    selected: C,
    disabled: T,
    today: S,
    outsideCurrentMonth: x,
    disableMargin: E,
    disableHighlightToday: I,
    showDaysOutsideCurrentMonth: P
  } = r, w = te(r, fS), k = Vd({
    day: v,
    selected: C,
    disabled: T,
    today: S,
    outsideCurrentMonth: x,
    disableMargin: E,
    disableHighlightToday: I,
    showDaysOutsideCurrentMonth: P
  }), M = mS(a, k), N = Ve(), D = m.useRef(null), F = ft(D, o);
  Vt(() => {
    s && !T && !l && !x && D.current.focus();
  }, [s, T, l, x]);
  const $ = (j) => {
    y(j), x && j.preventDefault();
  }, V = (j) => {
    j.defaultMuiPrevented = !0, T || u(v), x && j.currentTarget.focus(), c && c(j);
  };
  return x && !P ? /* @__PURE__ */ O.jsx(bS, {
    className: ue(M.root, M.hiddenDaySpacingFiller, i),
    ownerState: k,
    role: w.role
  }) : /* @__PURE__ */ O.jsx(hS, b({
    className: ue(M.root, i),
    ref: F,
    centerRipple: !0,
    disabled: T,
    tabIndex: C ? 0 : -1,
    onKeyDown: (j) => h(j, v),
    onFocus: (j) => d(j, v),
    onBlur: (j) => f(j, v),
    onMouseEnter: (j) => g(j, v),
    onClick: V,
    onMouseDown: $
  }, w, {
    ownerState: k,
    children: p ?? N.format(v, "dayOfMonth")
  }));
});
process.env.NODE_ENV !== "production" && (ca.displayName = "PickersDayRaw");
process.env.NODE_ENV !== "production" && (ca.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: n.oneOfType([n.func, n.shape({
    current: n.shape({
      focusVisible: n.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  component: n.elementType,
  /**
   * The date to show.
   */
  day: n.object.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  isAnimating: n.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: n.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: n.bool.isRequired,
  onBlur: n.func,
  onDaySelect: n.func.isRequired,
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  onKeyDown: n.func,
  onMouseEnter: n.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: n.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: n.bool,
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
  showDaysOutsideCurrentMonth: n.bool,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: n.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })])
});
const Bd = /* @__PURE__ */ m.memo(ca);
process.env.NODE_ENV !== "production" && (Bd.displayName = "PickersDay");
const gS = (e) => Qe("MuiPickersSlideTransition", e), yt = Je("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]), yS = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"], vS = (e, t) => {
  const {
    slideDirection: o
  } = t, r = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${o}`],
    exitActive: [`slideExitActiveLeft-${o}`]
  };
  return Ye(r, gS, e);
}, xS = G(Zo, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`.${yt["slideEnter-left"]}`]: t["slideEnter-left"]
  }, {
    [`.${yt["slideEnter-right"]}`]: t["slideEnter-right"]
  }, {
    [`.${yt.slideEnterActive}`]: t.slideEnterActive
  }, {
    [`.${yt.slideExit}`]: t.slideExit
  }, {
    [`.${yt["slideExitActiveLeft-left"]}`]: t["slideExitActiveLeft-left"]
  }, {
    [`.${yt["slideExitActiveLeft-right"]}`]: t["slideExitActiveLeft-right"]
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
    [`& .${yt["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${yt["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${yt.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: t
    },
    [`& .${yt.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${yt["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: t,
      zIndex: 0
    },
    [`& .${yt["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: t,
      zIndex: 0
    }
  };
});
function PS(e) {
  const t = ze({
    props: e,
    name: "MuiPickersSlideTransition"
  }), {
    children: o,
    className: r,
    reduceAnimations: s,
    slideDirection: i,
    transKey: a,
    classes: l
  } = t, c = te(t, yS), {
    ownerState: u
  } = rt(), d = b({}, u, {
    slideDirection: i
  }), f = vS(l, d), h = Qn();
  if (s)
    return /* @__PURE__ */ O.jsx("div", {
      className: ue(f.root, r),
      children: o
    });
  const y = {
    exit: f.exit,
    enterActive: f.enterActive,
    enter: f.enter,
    exitActive: f.exitActive
  };
  return /* @__PURE__ */ O.jsx(xS, {
    className: ue(f.root, r),
    childFactory: (g) => /* @__PURE__ */ m.cloneElement(g, {
      classNames: y
    }),
    role: "presentation",
    ownerState: d,
    children: /* @__PURE__ */ O.jsx(ji, b({
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: h.transitions.duration.complex,
      classNames: y
    }, c, {
      children: o
    }), a)
  });
}
const CS = (e) => Qe("MuiDayCalendar", e);
Je("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const SS = ["parentProps", "day", "focusedDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], ES = ["ownerState"], OS = (e) => Ye({
  root: ["root"],
  header: ["header"],
  weekDayLabel: ["weekDayLabel"],
  loadingContainer: ["loadingContainer"],
  slideTransition: ["slideTransition"],
  monthContainer: ["monthContainer"],
  weekContainer: ["weekContainer"],
  weekNumberLabel: ["weekNumberLabel"],
  weekNumber: ["weekNumber"]
}, CS, e), Wd = (Lo + is * 2) * 6, wS = G("div", {
  name: "MuiDayCalendar",
  slot: "Root"
})({}), TS = G("div", {
  name: "MuiDayCalendar",
  slot: "Header"
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), RS = G(on, {
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
})), kS = G(on, {
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
})), DS = G(on, {
  name: "MuiDayCalendar",
  slot: "WeekNumber"
})(({
  theme: e
}) => b({}, e.typography.caption, {
  width: Lo,
  height: Lo,
  padding: 0,
  margin: `0 ${is}px`,
  color: (e.vars || e).palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
})), MS = G("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer"
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: Wd
}), IS = G(PS, {
  name: "MuiDayCalendar",
  slot: "SlideTransition"
})({
  minHeight: Wd
}), NS = G("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer"
})({
  overflow: "hidden"
}), $S = G("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer"
})({
  margin: `${is}px 0`,
  display: "flex",
  justifyContent: "center"
});
function AS(e) {
  let {
    parentProps: t,
    day: o,
    focusedDay: r,
    selectedDays: s,
    isDateDisabled: i,
    currentMonthNumber: a,
    isViewFocused: l
  } = e, c = te(e, SS);
  const {
    disabled: u,
    disableHighlightToday: d,
    isMonthSwitchingAnimating: f,
    showDaysOutsideCurrentMonth: h,
    slots: y,
    slotProps: g,
    timezone: p
  } = t, v = Ve(), C = ts(p), T = r != null && v.isSameDay(o, r), S = l && T, x = s.some(($) => v.isSameDay($, o)), E = v.isSameDay(o, C), I = m.useMemo(() => u || i(o), [u, i, o]), P = m.useMemo(() => v.getMonth(o) !== a, [v, o, a]), w = Vd({
    day: o,
    selected: x,
    disabled: I,
    today: E,
    outsideCurrentMonth: P,
    disableMargin: void 0,
    // This prop can only be defined using slotProps.day so the ownerState for useSlotProps cannot have its value.
    disableHighlightToday: d,
    showDaysOutsideCurrentMonth: h
  }), k = y?.day ?? Bd, M = Me({
    elementType: k,
    externalSlotProps: g?.day,
    additionalProps: b({
      disableHighlightToday: d,
      showDaysOutsideCurrentMonth: h,
      role: "gridcell",
      isAnimating: f,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": v.toJsDate(o).valueOf()
    }, c),
    ownerState: b({}, w, {
      day: o,
      isDayDisabled: I,
      isDaySelected: x
    })
  }), N = te(M, ES), D = m.useMemo(() => {
    const $ = v.startOfMonth(v.setMonth(o, a));
    return h ? v.isSameDay(o, v.startOfWeek($)) : v.isSameDay(o, $);
  }, [a, o, h, v]), F = m.useMemo(() => {
    const $ = v.endOfMonth(v.setMonth(o, a));
    return h ? v.isSameDay(o, v.endOfWeek($)) : v.isSameDay(o, $);
  }, [a, o, h, v]);
  return /* @__PURE__ */ O.jsx(k, b({}, N, {
    day: o,
    disabled: I,
    autoFocus: !P && S,
    today: E,
    outsideCurrentMonth: P,
    isFirstVisibleCell: D,
    isLastVisibleCell: F,
    selected: x,
    tabIndex: T ? 0 : -1,
    "aria-selected": x,
    "aria-current": E ? "date" : void 0
  }));
}
function jS(e) {
  const t = ze({
    props: e,
    name: "MuiDayCalendar"
  }), o = Ve(), {
    onFocusedDayChange: r,
    className: s,
    classes: i,
    currentMonth: a,
    selectedDays: l,
    focusedDay: c,
    loading: u,
    onSelectedDaysChange: d,
    onMonthSwitchingAnimationEnd: f,
    readOnly: h,
    reduceAnimations: y,
    renderLoading: g = () => /* @__PURE__ */ O.jsx("span", {
      children: "..."
    }),
    slideDirection: p,
    TransitionProps: v,
    disablePast: C,
    disableFuture: T,
    minDate: S,
    maxDate: x,
    shouldDisableDate: E,
    shouldDisableMonth: I,
    shouldDisableYear: P,
    dayOfWeekFormatter: w = (U) => o.format(U, "weekdayShort").charAt(0).toUpperCase(),
    hasFocus: k,
    onFocusedViewChange: M,
    gridLabelId: N,
    displayWeekNumber: D,
    fixedWeekNumber: F,
    timezone: $
  } = t, V = ts($), j = OS(i), A = Lt(), L = jd({
    shouldDisableDate: E,
    shouldDisableMonth: I,
    shouldDisableYear: P,
    minDate: S,
    maxDate: x,
    disablePast: C,
    disableFuture: T,
    timezone: $
  }), B = rn(), R = pe((U) => {
    h || d(U);
  }), _ = (U) => {
    L(U) || (r(U), M?.(!0));
  }, q = pe((U, W) => {
    switch (U.key) {
      case "ArrowUp":
        _(o.addDays(W, -7)), U.preventDefault();
        break;
      case "ArrowDown":
        _(o.addDays(W, 7)), U.preventDefault();
        break;
      case "ArrowLeft": {
        const ne = o.addDays(W, A ? 1 : -1), Z = o.addMonths(W, A ? 1 : -1), ie = Ao({
          adapter: o,
          date: ne,
          minDate: A ? ne : o.startOfMonth(Z),
          maxDate: A ? o.endOfMonth(Z) : ne,
          isDateDisabled: L,
          timezone: $
        });
        _(ie || ne), U.preventDefault();
        break;
      }
      case "ArrowRight": {
        const ne = o.addDays(W, A ? -1 : 1), Z = o.addMonths(W, A ? -1 : 1), ie = Ao({
          adapter: o,
          date: ne,
          minDate: A ? o.startOfMonth(Z) : ne,
          maxDate: A ? ne : o.endOfMonth(Z),
          isDateDisabled: L,
          timezone: $
        });
        _(ie || ne), U.preventDefault();
        break;
      }
      case "Home":
        _(o.startOfWeek(W)), U.preventDefault();
        break;
      case "End":
        _(o.endOfWeek(W)), U.preventDefault();
        break;
      case "PageUp":
        _(o.addMonths(W, 1)), U.preventDefault();
        break;
      case "PageDown":
        _(o.addMonths(W, -1)), U.preventDefault();
        break;
    }
  }), K = pe((U, W) => _(W)), H = pe((U, W) => {
    c != null && o.isSameDay(c, W) && M?.(!1);
  }), X = o.getMonth(a), Q = o.getYear(a), oe = m.useMemo(() => l.filter((U) => !!U).map((U) => o.startOfDay(U)), [o, l]), ee = `${Q}-${X}`, J = m.useMemo(() => /* @__PURE__ */ m.createRef(), [ee]), Y = m.useMemo(() => {
    const U = o.getWeekArray(a);
    let W = o.addMonths(a, 1);
    for (; F && U.length < F; ) {
      const ne = o.getWeekArray(W), Z = o.isSameDay(U[U.length - 1][0], ne[0][0]);
      ne.slice(Z ? 1 : 0).forEach((ie) => {
        U.length < F && U.push(ie);
      }), W = o.addMonths(W, 1);
    }
    return U;
  }, [a, F, o]);
  return /* @__PURE__ */ O.jsxs(wS, {
    role: "grid",
    "aria-labelledby": N,
    className: j.root,
    children: [/* @__PURE__ */ O.jsxs(TS, {
      role: "row",
      className: j.header,
      children: [D && /* @__PURE__ */ O.jsx(kS, {
        variant: "caption",
        role: "columnheader",
        "aria-label": B.calendarWeekNumberHeaderLabel,
        className: j.weekNumberLabel,
        children: B.calendarWeekNumberHeaderText
      }), ub(o, V).map((U, W) => /* @__PURE__ */ O.jsx(RS, {
        variant: "caption",
        role: "columnheader",
        "aria-label": o.format(U, "weekday"),
        className: j.weekDayLabel,
        children: w(U)
      }, W.toString()))]
    }), u ? /* @__PURE__ */ O.jsx(MS, {
      className: j.loadingContainer,
      children: g()
    }) : /* @__PURE__ */ O.jsx(IS, b({
      transKey: ee,
      onExited: f,
      reduceAnimations: y,
      slideDirection: p,
      className: ue(s, j.slideTransition)
    }, v, {
      nodeRef: J,
      children: /* @__PURE__ */ O.jsx(NS, {
        ref: J,
        role: "rowgroup",
        className: j.monthContainer,
        children: Y.map((U, W) => /* @__PURE__ */ O.jsxs($S, {
          role: "row",
          className: j.weekContainer,
          "aria-rowindex": W + 1,
          children: [D && /* @__PURE__ */ O.jsx(DS, {
            className: j.weekNumber,
            role: "rowheader",
            "aria-label": B.calendarWeekNumberAriaLabelText(o.getWeekNumber(U[0])),
            children: B.calendarWeekNumberText(o.getWeekNumber(U[0]))
          }), U.map((ne, Z) => /* @__PURE__ */ O.jsx(AS, {
            parentProps: t,
            day: ne,
            selectedDays: oe,
            isViewFocused: k,
            focusedDay: c,
            onKeyDown: q,
            onFocus: K,
            onBlur: H,
            onDaySelect: R,
            isDateDisabled: L,
            currentMonthNumber: X,
            "aria-colindex": Z + 1
          }, ne.toString()))]
        }, `week-${U[0]}`))
      })
    }))]
  });
}
function zd(e) {
  return Qe("MuiMonthCalendar", e);
}
const mr = Je("MuiMonthCalendar", ["root", "button", "disabled", "selected"]), FS = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"], VS = (e, t) => {
  const o = {
    button: ["button", t.isMonthDisabled && "disabled", t.isMonthSelected && "selected"]
  };
  return Ye(o, zd, e);
}, _S = G("button", {
  name: "MuiMonthCalendar",
  slot: "Button",
  overridesResolver: (e, t) => [t.button, {
    [`&.${mr.disabled}`]: t.disabled
  }, {
    [`&.${mr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => b({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Wn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Wn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${mr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${mr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), Ud = /* @__PURE__ */ m.memo(function(t) {
  const {
    autoFocus: o,
    classes: r,
    disabled: s,
    selected: i,
    value: a,
    onClick: l,
    onKeyDown: c,
    onFocus: u,
    onBlur: d,
    slots: f,
    slotProps: h
  } = t, y = te(t, FS), g = m.useRef(null), {
    ownerState: p
  } = rt(), v = b({}, p, {
    isMonthDisabled: s,
    isMonthSelected: i
  }), C = VS(r, v);
  Vt(() => {
    o && g.current?.focus();
  }, [o]);
  const T = f?.monthButton ?? _S, S = Me({
    elementType: T,
    externalSlotProps: h?.monthButton,
    externalForwardedProps: y,
    additionalProps: {
      disabled: s,
      ref: g,
      type: "button",
      role: "radio",
      "aria-checked": i,
      onClick: (x) => l(x, a),
      onKeyDown: (x) => c(x, a),
      onFocus: (x) => u(x, a),
      onBlur: (x) => d(x, a)
    },
    ownerState: v,
    className: C.button
  });
  return /* @__PURE__ */ O.jsx(T, b({}, S));
});
process.env.NODE_ENV !== "production" && (Ud.displayName = "MonthCalendarButton");
const LS = ["autoFocus", "className", "currentMonth", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId", "slots", "slotProps"], BS = (e) => Ye({
  root: ["root"]
}, zd, e);
function WS(e, t) {
  const o = ze({
    props: e,
    name: t
  }), r = Qo(o);
  return b({}, o, r, {
    monthsPerRow: o.monthsPerRow ?? 3
  });
}
const gc = (e, t, o, r, s) => !!(e === t && r && s.isSameYear(o, r)), zS = G("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  shouldForwardProp: (e) => Zn.shouldForwardProp(e) && e !== "monthsPerRow"
})({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 16,
  padding: "8px 0",
  width: as,
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
}), ua = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = WS(t, "MuiMonthCalendar"), {
    autoFocus: s,
    className: i,
    currentMonth: a,
    classes: l,
    value: c,
    defaultValue: u,
    referenceDate: d,
    disabled: f,
    disableFuture: h,
    disablePast: y,
    maxDate: g,
    minDate: p,
    onChange: v,
    shouldDisableMonth: C,
    readOnly: T,
    onMonthFocus: S,
    hasFocus: x,
    onFocusedViewChange: E,
    monthsPerRow: I,
    timezone: P,
    gridLabelId: w,
    slots: k,
    slotProps: M
  } = r, N = te(r, LS), {
    value: D,
    handleValueChange: F,
    timezone: $
  } = nr({
    name: "MonthCalendar",
    timezone: P,
    value: c,
    defaultValue: u,
    referenceDate: d,
    onChange: v,
    valueManager: Ft
  }), V = ts($), j = Lt(), A = Ve(), {
    ownerState: L
  } = rt(), B = m.useMemo(
    () => Ft.getInitialReferenceValue({
      value: D,
      adapter: A,
      props: r,
      timezone: $,
      referenceDate: d,
      granularity: $t.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), R = BS(l), _ = m.useMemo(() => A.getMonth(V), [A, V]), q = m.useMemo(() => D != null ? A.getMonth(D) : null, [D, A]), [K, H] = m.useState(() => q || A.getMonth(B)), [X, Q] = Kn({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: x,
    default: s ?? !1
  }), oe = pe((Z) => {
    Q(Z), E && E(Z);
  }), ee = m.useCallback((Z) => {
    const ie = A.startOfMonth(y && A.isAfter(V, p) ? V : p), z = A.startOfMonth(h && A.isBefore(V, g) ? V : g), re = A.startOfMonth(Z);
    return A.isBefore(re, ie) || A.isAfter(re, z) ? !0 : C ? C(re) : !1;
  }, [h, y, g, p, V, C, A]), J = pe((Z, ie) => {
    if (T)
      return;
    const z = D && a && !A.isSameYear(D, a) ? A.setYear(D, A.getYear(a)) : D, re = A.setMonth(z ?? B, ie);
    F(re);
  }), Y = pe((Z) => {
    ee(A.setMonth(D ?? a ?? B, Z)) || (H(Z), oe(!0), S && S(Z));
  });
  m.useEffect(() => {
    H((Z) => q !== null && Z !== q ? q : Z);
  }, [q]);
  const U = pe((Z, ie) => {
    switch (Z.key) {
      case "ArrowUp":
        Y((12 + ie - 3) % 12), Z.preventDefault();
        break;
      case "ArrowDown":
        Y((12 + ie + 3) % 12), Z.preventDefault();
        break;
      case "ArrowLeft":
        Y((12 + ie + (j ? 1 : -1)) % 12), Z.preventDefault();
        break;
      case "ArrowRight":
        Y((12 + ie + (j ? -1 : 1)) % 12), Z.preventDefault();
        break;
    }
  }), W = pe((Z, ie) => {
    Y(ie);
  }), ne = pe((Z, ie) => {
    K === ie && oe(!1);
  });
  return /* @__PURE__ */ O.jsx(zS, b({
    ref: o,
    className: ue(R.root, i),
    ownerState: L,
    role: "radiogroup",
    "aria-labelledby": w,
    monthsPerRow: I
  }, N, {
    children: Pi(A, a ?? D ?? B).map((Z) => {
      const ie = A.getMonth(Z), z = A.format(Z, "monthShort"), re = A.format(Z, "month"), fe = gc(ie, q, Z, D, A), ge = f || ee(Z);
      return /* @__PURE__ */ O.jsx(Ud, {
        selected: fe,
        value: ie,
        onClick: J,
        onKeyDown: U,
        autoFocus: X && ie === K,
        disabled: ge,
        tabIndex: ie === K && !ge ? 0 : -1,
        onFocus: W,
        onBlur: ne,
        "aria-current": gc(ie, _, Z, V, A) ? "date" : void 0,
        "aria-label": re,
        slots: k,
        slotProps: M,
        classes: l,
        children: z
      }, z);
    })
  }));
});
process.env.NODE_ENV !== "production" && (ua.displayName = "MonthCalendar");
process.env.NODE_ENV !== "production" && (ua.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  currentMonth: n.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  gridLabelId: n.string,
  hasFocus: n.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: n.func,
  onFocusedViewChange: n.func,
  onMonthFocus: n.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: n.object,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object
});
function qd(e) {
  return Qe("MuiYearCalendar", e);
}
const hr = Je("MuiYearCalendar", ["root", "button", "disabled", "selected"]), US = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"], qS = (e, t) => {
  const o = {
    button: ["button", t.isYearDisabled && "disabled", t.isYearSelected && "selected"]
  };
  return Ye(o, qd, e);
}, HS = G("button", {
  name: "MuiYearCalendar",
  slot: "Button",
  overridesResolver: (e, t) => [t.button, {
    [`&.${hr.disabled}`]: t.disabled
  }, {
    [`&.${hr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => b({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.focusOpacity})` : Wn(e.palette.action.active, e.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Wn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${hr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${hr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), Hd = /* @__PURE__ */ m.memo(function(t) {
  const {
    autoFocus: o,
    classes: r,
    disabled: s,
    selected: i,
    value: a,
    onClick: l,
    onKeyDown: c,
    onFocus: u,
    onBlur: d,
    slots: f,
    slotProps: h
  } = t, y = te(t, US), g = m.useRef(null), {
    ownerState: p
  } = rt(), v = b({}, p, {
    isYearDisabled: s,
    isYearSelected: i
  }), C = qS(r, v);
  Vt(() => {
    o && g.current?.focus();
  }, [o]);
  const T = f?.yearButton ?? HS, S = Me({
    elementType: T,
    externalSlotProps: h?.yearButton,
    externalForwardedProps: y,
    additionalProps: {
      disabled: s,
      ref: g,
      type: "button",
      role: "radio",
      "aria-checked": i,
      onClick: (x) => l(x, a),
      onKeyDown: (x) => c(x, a),
      onFocus: (x) => u(x, a),
      onBlur: (x) => d(x, a)
    },
    ownerState: v,
    className: C.button
  });
  return /* @__PURE__ */ O.jsx(T, b({}, S));
});
process.env.NODE_ENV !== "production" && (Hd.displayName = "YearCalendarButton");
const YS = ["autoFocus", "className", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsOrder", "yearsPerRow", "timezone", "gridLabelId", "slots", "slotProps"], KS = (e) => Ye({
  root: ["root"]
}, qd, e);
function GS(e, t) {
  const o = ze({
    props: e,
    name: t
  }), r = Qo(o);
  return b({}, o, r, {
    yearsPerRow: o.yearsPerRow ?? 3,
    yearsOrder: o.yearsOrder ?? "asc"
  });
}
const XS = G("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  shouldForwardProp: (e) => Zn.shouldForwardProp(e) && e !== "yearsPerRow"
})({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 12,
  padding: "6px 0",
  overflowY: "auto",
  height: "100%",
  width: as,
  maxHeight: Cx,
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
}), QS = G("div", {
  name: "MuiYearCalendar",
  slot: "ButtonFiller"
})({
  height: 36,
  width: 72
}), da = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = GS(t, "MuiYearCalendar"), {
    autoFocus: s,
    className: i,
    classes: a,
    value: l,
    defaultValue: c,
    referenceDate: u,
    disabled: d,
    disableFuture: f,
    disablePast: h,
    maxDate: y,
    minDate: g,
    onChange: p,
    readOnly: v,
    shouldDisableYear: C,
    onYearFocus: T,
    hasFocus: S,
    onFocusedViewChange: x,
    yearsOrder: E,
    yearsPerRow: I,
    timezone: P,
    gridLabelId: w,
    slots: k,
    slotProps: M
  } = r, N = te(r, YS), {
    value: D,
    handleValueChange: F,
    timezone: $
  } = nr({
    name: "YearCalendar",
    timezone: P,
    value: l,
    defaultValue: c,
    referenceDate: u,
    onChange: p,
    valueManager: Ft
  }), V = ts($), j = Lt(), A = Ve(), {
    ownerState: L
  } = rt(), B = m.useMemo(
    () => Ft.getInitialReferenceValue({
      value: D,
      adapter: A,
      props: r,
      timezone: $,
      referenceDate: u,
      granularity: $t.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), R = KS(a), _ = m.useMemo(() => A.getYear(V), [A, V]), q = m.useMemo(() => D != null ? A.getYear(D) : null, [D, A]), [K, H] = m.useState(() => q || A.getYear(B)), [X, Q] = Kn({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: S,
    default: s ?? !1
  }), oe = pe((le) => {
    Q(le), x && x(le);
  }), ee = m.useCallback((le) => {
    if (h && A.isBeforeYear(le, V) || f && A.isAfterYear(le, V) || g && A.isBeforeYear(le, g) || y && A.isAfterYear(le, y))
      return !0;
    if (!C)
      return !1;
    const ce = A.startOfYear(le);
    return C(ce);
  }, [f, h, y, g, V, C, A]), J = pe((le, ce) => {
    if (v)
      return;
    const Se = A.setYear(D ?? B, ce);
    F(Se);
  }), Y = pe((le) => {
    ee(A.setYear(D ?? B, le)) || (H(le), oe(!0), T?.(le));
  });
  m.useEffect(() => {
    H((le) => q !== null && le !== q ? q : le);
  }, [q]);
  const U = E !== "desc" ? I * 1 : I * -1, W = j && E === "asc" || !j && E === "desc" ? -1 : 1, ne = pe((le, ce) => {
    switch (le.key) {
      case "ArrowUp":
        Y(ce - U), le.preventDefault();
        break;
      case "ArrowDown":
        Y(ce + U), le.preventDefault();
        break;
      case "ArrowLeft":
        Y(ce - W), le.preventDefault();
        break;
      case "ArrowRight":
        Y(ce + W), le.preventDefault();
        break;
    }
  }), Z = pe((le, ce) => {
    Y(ce);
  }), ie = pe((le, ce) => {
    K === ce && oe(!1);
  }), z = m.useRef(null), re = ft(o, z);
  m.useEffect(() => {
    if (s || z.current === null)
      return;
    const le = z.current.querySelector('[tabindex="0"]');
    if (!le)
      return;
    const ce = le.offsetHeight, Se = le.offsetTop, Pe = z.current.clientHeight, xe = z.current.scrollTop, Le = Se + ce;
    ce > Pe || Se < xe || (z.current.scrollTop = Le - Pe / 2 - ce / 2);
  }, [s]);
  const fe = A.getYearRange([g, y]);
  E === "desc" && fe.reverse();
  let ge = I - fe.length % I;
  return ge === I && (ge = 0), /* @__PURE__ */ O.jsxs(XS, b({
    ref: re,
    className: ue(R.root, i),
    ownerState: L,
    role: "radiogroup",
    "aria-labelledby": w,
    yearsPerRow: I
  }, N, {
    children: [fe.map((le) => {
      const ce = A.getYear(le), Se = ce === q, Pe = d || ee(le);
      return /* @__PURE__ */ O.jsx(Hd, {
        selected: Se,
        value: ce,
        onClick: J,
        onKeyDown: ne,
        autoFocus: X && ce === K,
        disabled: Pe,
        tabIndex: ce === K && !Pe ? 0 : -1,
        onFocus: Z,
        onBlur: ie,
        "aria-current": _ === ce ? "date" : void 0,
        slots: k,
        slotProps: M,
        classes: a,
        children: A.format(le, "year")
      }, A.format(le, "year"));
    }), Array.from({
      length: ge
    }, (le, ce) => /* @__PURE__ */ O.jsx(QS, {}, ce))]
  }));
});
process.env.NODE_ENV !== "production" && (da.displayName = "YearCalendar");
process.env.NODE_ENV !== "production" && (da.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  gridLabelId: n.string,
  hasFocus: n.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: n.object,
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: n.func,
  onFocusedViewChange: n.func,
  onYearFocus: n.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: n.object,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: n.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
});
const ZS = (e) => Qe("MuiPickersCalendarHeader", e), JS = Je("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]);
function eE(e) {
  return Qe("MuiPickersArrowSwitcher", e);
}
Je("MuiPickersArrowSwitcher", ["root", "spacer", "button", "previousIconButton", "nextIconButton", "leftArrowIcon", "rightArrowIcon"]);
const tE = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel", "labelId", "classes"], nE = ["ownerState"], oE = ["ownerState"], rE = G("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root"
})({
  display: "flex"
}), sE = G("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer"
})(({
  theme: e
}) => ({
  width: e.spacing(3)
})), yc = G(Bo, {
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
}), iE = (e) => Ye({
  root: ["root"],
  spacer: ["spacer"],
  button: ["button"],
  previousIconButton: ["previousIconButton"],
  nextIconButton: ["nextIconButton"],
  leftArrowIcon: ["leftArrowIcon"],
  rightArrowIcon: ["rightArrowIcon"]
}, eE, e), Yd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Lt(), s = ze({
    props: t,
    name: "MuiPickersArrowSwitcher"
  }), {
    children: i,
    className: a,
    slots: l,
    slotProps: c,
    isNextDisabled: u,
    isNextHidden: d,
    onGoToNext: f,
    nextLabel: h,
    isPreviousDisabled: y,
    isPreviousHidden: g,
    onGoToPrevious: p,
    previousLabel: v,
    labelId: C,
    classes: T
  } = s, S = te(s, tE), {
    ownerState: x
  } = rt(), E = iE(T), I = {
    isDisabled: u,
    isHidden: d,
    goTo: f,
    label: h
  }, P = {
    isDisabled: y,
    isHidden: g,
    goTo: p,
    label: v
  }, w = l?.previousIconButton ?? yc, k = Me({
    elementType: w,
    externalSlotProps: c?.previousIconButton,
    additionalProps: {
      size: "medium",
      title: P.label,
      "aria-label": P.label,
      disabled: P.isDisabled,
      edge: "end",
      onClick: P.goTo
    },
    ownerState: b({}, x, {
      isButtonHidden: P.isHidden ?? !1
    }),
    className: ue(E.button, E.previousIconButton)
  }), M = l?.nextIconButton ?? yc, N = Me({
    elementType: M,
    externalSlotProps: c?.nextIconButton,
    additionalProps: {
      size: "medium",
      title: I.label,
      "aria-label": I.label,
      disabled: I.isDisabled,
      edge: "start",
      onClick: I.goTo
    },
    ownerState: b({}, x, {
      isButtonHidden: I.isHidden ?? !1
    }),
    className: ue(E.button, E.nextIconButton)
  }), D = l?.leftArrowIcon ?? rC, F = Me({
    elementType: D,
    externalSlotProps: c?.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: x,
    className: E.leftArrowIcon
  }), $ = te(F, nE), V = l?.rightArrowIcon ?? sC, j = Me({
    elementType: V,
    externalSlotProps: c?.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: x,
    className: E.rightArrowIcon
  }), A = te(j, oE);
  return /* @__PURE__ */ O.jsxs(rE, b({
    ref: o,
    className: ue(E.root, a),
    ownerState: x
  }, S, {
    children: [/* @__PURE__ */ O.jsx(w, b({}, k, {
      children: r ? /* @__PURE__ */ O.jsx(V, b({}, A)) : /* @__PURE__ */ O.jsx(D, b({}, $))
    })), i ? /* @__PURE__ */ O.jsx(on, {
      variant: "subtitle1",
      component: "span",
      id: C,
      children: i
    }) : /* @__PURE__ */ O.jsx(sE, {
      className: E.spacer,
      ownerState: x
    }), /* @__PURE__ */ O.jsx(M, b({}, N, {
      children: r ? /* @__PURE__ */ O.jsx(D, b({}, $)) : /* @__PURE__ */ O.jsx(V, b({}, A))
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Yd.displayName = "PickersArrowSwitcher");
function aE(e, {
  disableFuture: t,
  maxDate: o,
  timezone: r
}) {
  const s = Ve();
  return m.useMemo(() => {
    const i = s.date(void 0, r), a = s.startOfMonth(t && s.isBefore(i, o) ? i : o);
    return !s.isAfter(a, e);
  }, [t, o, e, s, r]);
}
function lE(e, {
  disablePast: t,
  minDate: o,
  timezone: r
}) {
  const s = Ve();
  return m.useMemo(() => {
    const i = s.date(void 0, r), a = s.startOfMonth(t && s.isAfter(i, o) ? i : o);
    return !s.isBefore(a, e);
  }, [t, o, e, s, r]);
}
const cE = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "classes", "timezone", "format"], uE = ["ownerState"], dE = (e) => Ye({
  root: ["root"],
  labelContainer: ["labelContainer"],
  label: ["label"],
  switchViewButton: ["switchViewButton"],
  switchViewIcon: ["switchViewIcon"]
}, ZS, e), pE = G("div", {
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
}), fE = G("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer"
})(({
  theme: e
}) => b({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, e.typography.body1, {
  fontWeight: e.typography.fontWeightMedium
})), mE = G("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label"
})({
  marginRight: 6
}), hE = G(Bo, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton"
})({
  marginRight: "auto",
  variants: [{
    props: {
      view: "year"
    },
    style: {
      [`.${JS.switchViewIcon}`]: {
        transform: "rotate(180deg)"
      }
    }
  }]
}), bE = G(oC, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon"
})(({
  theme: e
}) => ({
  willChange: "transform",
  transition: e.transitions.create("transform"),
  transform: "rotate(0deg)"
})), pa = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = rn(), s = Ve(), i = ze({
    props: t,
    name: "MuiPickersCalendarHeader"
  }), {
    slots: a,
    slotProps: l,
    currentMonth: c,
    disabled: u,
    disableFuture: d,
    disablePast: f,
    maxDate: h,
    minDate: y,
    onMonthChange: g,
    onViewChange: p,
    view: v,
    reduceAnimations: C,
    views: T,
    labelId: S,
    className: x,
    classes: E,
    timezone: I,
    format: P = `${s.formats.month} ${s.formats.year}`
  } = i, w = te(i, cE), {
    ownerState: k
  } = rt(), M = dE(E), N = a?.switchViewButton ?? hE, D = Me({
    elementType: N,
    externalSlotProps: l?.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": r.calendarViewSwitchingButtonAriaLabel(v)
    },
    ownerState: b({}, k, {
      view: v
    }),
    className: M.switchViewButton
  }), F = a?.switchViewIcon ?? bE, $ = Me({
    elementType: F,
    externalSlotProps: l?.switchViewIcon,
    ownerState: k,
    className: M.switchViewIcon
  }), V = te($, uE), j = () => g(s.addMonths(c, 1)), A = () => g(s.addMonths(c, -1)), L = aE(c, {
    disableFuture: d,
    maxDate: h,
    timezone: I
  }), B = lE(c, {
    disablePast: f,
    minDate: y,
    timezone: I
  }), R = () => {
    if (!(T.length === 1 || !p || u))
      if (T.length === 2)
        p(T.find((q) => q !== v) || T[0]);
      else {
        const q = T.indexOf(v) !== 0 ? 0 : 1;
        p(T[q]);
      }
  };
  if (T.length === 1 && T[0] === "year")
    return null;
  const _ = s.formatByString(c, P);
  return /* @__PURE__ */ O.jsxs(pE, b({}, w, {
    ownerState: k,
    className: ue(M.root, x),
    ref: o,
    children: [/* @__PURE__ */ O.jsxs(fE, {
      role: "presentation",
      onClick: R,
      ownerState: k,
      "aria-live": "polite",
      className: M.labelContainer,
      children: [/* @__PURE__ */ O.jsx(Fd, {
        reduceAnimations: C,
        transKey: _,
        children: /* @__PURE__ */ O.jsx(mE, {
          id: S,
          ownerState: k,
          className: M.label,
          children: _
        })
      }), T.length > 1 && !u && /* @__PURE__ */ O.jsx(N, b({}, D, {
        children: /* @__PURE__ */ O.jsx(F, b({}, V))
      }))]
    }), /* @__PURE__ */ O.jsx(En, {
      in: v === "day",
      appear: !C,
      enter: !C,
      children: /* @__PURE__ */ O.jsx(Yd, {
        slots: a,
        slotProps: l,
        onGoToPrevious: A,
        isPreviousDisabled: B,
        previousLabel: r.previousMonth,
        onGoToNext: j,
        isNextDisabled: L,
        nextLabel: r.nextMonth
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (pa.displayName = "PickersCalendarHeader");
process.env.NODE_ENV !== "production" && (pa.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  currentMonth: n.object.isRequired,
  disabled: n.bool,
  disableFuture: n.bool,
  disablePast: n.bool,
  /**
   * Format used to display the date.
   * @default `${adapter.formats.month} ${adapter.formats.year}`
   */
  format: n.string,
  /**
   * Id of the calendar text element.
   * It is used to establish an `aria-labelledby` relationship with the calendar `grid` element.
   */
  labelId: n.string,
  maxDate: n.object.isRequired,
  minDate: n.object.isRequired,
  onMonthChange: n.func.isRequired,
  onViewChange: n.func,
  reduceAnimations: n.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  timezone: n.string.isRequired,
  view: n.oneOf(["day", "month", "year"]).isRequired,
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired).isRequired
});
const gE = G("div")({
  overflow: "hidden",
  width: as,
  maxHeight: Ki,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}), yE = (e) => Qe("MuiDateCalendar", e);
Je("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const vE = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "classes", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsOrder", "yearsPerRow", "monthsPerRow", "timezone"], xE = (e) => Ye({
  root: ["root"],
  viewTransitionContainer: ["viewTransitionContainer"]
}, yE, e);
function PE(e, t) {
  const o = ze({
    props: e,
    name: t
  }), r = Gu(o.reduceAnimations), s = Qo(o);
  return b({}, o, s, {
    loading: o.loading ?? !1,
    openTo: o.openTo ?? "day",
    views: o.views ?? ["year", "day"],
    reduceAnimations: r,
    renderLoading: o.renderLoading ?? (() => /* @__PURE__ */ O.jsx("span", {
      children: "..."
    }))
  });
}
const CE = G(gE, {
  name: "MuiDateCalendar",
  slot: "Root"
})({
  display: "flex",
  flexDirection: "column",
  height: Ki
}), SE = G(Fd, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer"
})({}), fa = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ve(), {
    ownerState: s
  } = rt(), i = qi(), a = PE(t, "MuiDateCalendar"), {
    autoFocus: l,
    onViewChange: c,
    value: u,
    defaultValue: d,
    referenceDate: f,
    disableFuture: h,
    disablePast: y,
    onChange: g,
    onMonthChange: p,
    reduceAnimations: v,
    shouldDisableDate: C,
    shouldDisableMonth: T,
    shouldDisableYear: S,
    view: x,
    views: E,
    openTo: I,
    className: P,
    classes: w,
    disabled: k,
    readOnly: M,
    minDate: N,
    maxDate: D,
    disableHighlightToday: F,
    focusedView: $,
    onFocusedViewChange: V,
    showDaysOutsideCurrentMonth: j,
    fixedWeekNumber: A,
    dayOfWeekFormatter: L,
    slots: B,
    slotProps: R,
    loading: _,
    renderLoading: q,
    displayWeekNumber: K,
    yearsOrder: H,
    yearsPerRow: X,
    monthsPerRow: Q,
    timezone: oe
  } = a, ee = te(a, vE), {
    value: J,
    handleValueChange: Y,
    timezone: U
  } = nr({
    name: "DateCalendar",
    timezone: oe,
    value: u,
    defaultValue: d,
    referenceDate: f,
    onChange: g,
    valueManager: Ft
  }), {
    view: W,
    setView: ne,
    focusedView: Z,
    setFocusedView: ie,
    goToNextView: z,
    setValueAndGoToNextView: re
  } = Qu({
    view: x,
    views: E,
    openTo: I,
    onChange: Y,
    onViewChange: c,
    autoFocus: l,
    focusedView: $,
    onFocusedViewChange: V
  }), {
    referenceDate: fe,
    calendarState: ge,
    setVisibleDate: le,
    isDateDisabled: ce,
    onMonthSwitchingAnimationEnd: Se
  } = aS({
    value: J,
    referenceDate: f,
    reduceAnimations: v,
    onMonthChange: p,
    minDate: N,
    maxDate: D,
    shouldDisableDate: C,
    disablePast: y,
    disableFuture: h,
    timezone: U,
    getCurrentMonthFromVisibleDate: (be, Ge) => r.isSameMonth(be, Ge) ? Ge : r.startOfMonth(be)
  }), Pe = k && J || N, xe = k && J || D, Le = `${i}-grid-label`, Ze = Z !== null, et = B?.calendarHeader ?? pa, ye = Me({
    elementType: et,
    externalSlotProps: R?.calendarHeader,
    additionalProps: {
      views: E,
      view: W,
      currentMonth: ge.currentMonth,
      onViewChange: ne,
      onMonthChange: (be) => le({
        target: be,
        reason: "header-navigation"
      }),
      minDate: Pe,
      maxDate: xe,
      disabled: k,
      disablePast: y,
      disableFuture: h,
      reduceAnimations: v,
      timezone: U,
      labelId: Le
    },
    ownerState: s
  }), se = pe((be) => {
    const Ge = r.startOfMonth(be), it = r.endOfMonth(be), wt = ce(be) ? Ao({
      adapter: r,
      date: be,
      minDate: r.isBefore(N, Ge) ? Ge : N,
      maxDate: r.isAfter(D, it) ? it : D,
      disablePast: y,
      disableFuture: h,
      isDateDisabled: ce,
      timezone: U
    }) : be;
    wt ? (re(wt, "finish"), le({
      target: wt,
      reason: "cell-interaction"
    })) : (z(), le({
      target: Ge,
      reason: "cell-interaction"
    }));
  }), he = pe((be) => {
    const Ge = r.startOfYear(be), it = r.endOfYear(be), wt = ce(be) ? Ao({
      adapter: r,
      date: be,
      minDate: r.isBefore(N, Ge) ? Ge : N,
      maxDate: r.isAfter(D, it) ? it : D,
      disablePast: y,
      disableFuture: h,
      isDateDisabled: ce,
      timezone: U
    }) : be;
    wt ? (re(wt, "finish"), le({
      target: wt,
      reason: "cell-interaction"
    })) : (z(), le({
      target: Ge,
      reason: "cell-interaction"
    }));
  }), Ce = pe((be) => Y(be && Tr(r, be, J ?? fe), "finish", W));
  m.useEffect(() => {
    r.isValid(J) && le({
      target: J,
      reason: "controlled-value-change"
    });
  }, [J]);
  const $e = xE(w), Ue = {
    disablePast: y,
    disableFuture: h,
    maxDate: D,
    minDate: N
  }, de = {
    disableHighlightToday: F,
    readOnly: M,
    disabled: k,
    timezone: U,
    gridLabelId: Le,
    slots: B,
    slotProps: R
  }, me = m.useRef(W);
  m.useEffect(() => {
    me.current !== W && (Z === me.current && ie(W, !0), me.current = W);
  }, [Z, ie, W]);
  const Ae = m.useMemo(() => [J], [J]);
  return /* @__PURE__ */ O.jsxs(CE, b({
    ref: o,
    className: ue($e.root, P),
    ownerState: s
  }, ee, {
    children: [/* @__PURE__ */ O.jsx(et, b({}, ye, {
      slots: B,
      slotProps: R
    })), /* @__PURE__ */ O.jsx(SE, {
      reduceAnimations: v,
      className: $e.viewTransitionContainer,
      transKey: W,
      ownerState: s,
      children: /* @__PURE__ */ O.jsxs("div", {
        children: [W === "year" && /* @__PURE__ */ O.jsx(da, b({}, Ue, de, {
          value: J,
          onChange: he,
          shouldDisableYear: S,
          hasFocus: Ze,
          onFocusedViewChange: (be) => ie("year", be),
          yearsOrder: H,
          yearsPerRow: X,
          referenceDate: fe
        })), W === "month" && /* @__PURE__ */ O.jsx(ua, b({}, Ue, de, {
          currentMonth: ge.currentMonth,
          hasFocus: Ze,
          className: P,
          value: J,
          onChange: se,
          shouldDisableMonth: T,
          onFocusedViewChange: (be) => ie("month", be),
          monthsPerRow: Q,
          referenceDate: fe
        })), W === "day" && /* @__PURE__ */ O.jsx(jS, b({}, ge, Ue, de, {
          onMonthSwitchingAnimationEnd: Se,
          hasFocus: Ze,
          onFocusedDayChange: (be) => le({
            target: be,
            reason: "cell-interaction"
          }),
          reduceAnimations: v,
          selectedDays: Ae,
          onSelectedDaysChange: Ce,
          shouldDisableDate: C,
          shouldDisableMonth: T,
          shouldDisableYear: S,
          onFocusedViewChange: (be) => ie("day", be),
          showDaysOutsideCurrentMonth: j,
          fixedWeekNumber: A,
          dayOfWeekFormatter: L,
          displayWeekNumber: K,
          loading: _,
          renderLoading: q
        }))]
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (fa.displayName = "DateCalendar");
process.env.NODE_ENV !== "production" && (fa.propTypes = {
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
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: n.number,
  /**
   * Controlled focused view.
   */
  focusedView: n.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: n.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: n.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: n.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: n.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
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
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: n.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
});
const gn = ({
  view: e,
  onViewChange: t,
  views: o,
  focusedView: r,
  onFocusedViewChange: s,
  value: i,
  defaultValue: a,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: f,
  disablePast: h,
  minDate: y,
  maxDate: g,
  shouldDisableDate: p,
  shouldDisableMonth: v,
  shouldDisableYear: C,
  reduceAnimations: T,
  onMonthChange: S,
  monthsPerRow: x,
  onYearChange: E,
  yearsOrder: I,
  yearsPerRow: P,
  slots: w,
  slotProps: k,
  loading: M,
  renderLoading: N,
  disableHighlightToday: D,
  readOnly: F,
  disabled: $,
  showDaysOutsideCurrentMonth: V,
  dayOfWeekFormatter: j,
  sx: A,
  autoFocus: L,
  fixedWeekNumber: B,
  displayWeekNumber: R,
  timezone: _
}) => /* @__PURE__ */ O.jsx(fa, {
  view: e,
  onViewChange: t,
  views: o.filter(ml),
  focusedView: r && ml(r) ? r : null,
  onFocusedViewChange: s,
  value: i,
  defaultValue: a,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: f,
  disablePast: h,
  minDate: y,
  maxDate: g,
  shouldDisableDate: p,
  shouldDisableMonth: v,
  shouldDisableYear: C,
  reduceAnimations: T,
  onMonthChange: S,
  monthsPerRow: x,
  onYearChange: E,
  yearsOrder: I,
  yearsPerRow: P,
  slots: w,
  slotProps: k,
  loading: M,
  renderLoading: N,
  disableHighlightToday: D,
  readOnly: F,
  disabled: $,
  showDaysOutsideCurrentMonth: V,
  dayOfWeekFormatter: j,
  sx: A,
  autoFocus: L,
  fixedWeekNumber: B,
  displayWeekNumber: R,
  timezone: _
});
process.env.NODE_ENV !== "production" && (gn.displayName = "renderDateViewCalendar");
const ma = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ve(), s = Nu(t, "MuiDesktopDatePicker"), i = b({
    day: gn,
    month: gn,
    year: gn
  }, s.viewRenderers), a = b({}, s, {
    closeOnSelect: s.closeOnSelect ?? !0,
    viewRenderers: i,
    format: Ci(r, s, !1),
    yearsPerRow: s.yearsPerRow ?? 4,
    slots: b({
      field: Es
    }, s.slots),
    slotProps: b({}, s.slotProps, {
      field: (c) => b({}, Rt(s.slotProps?.field, c), Du(s)),
      toolbar: b({
        hidden: !0
      }, s.slotProps?.toolbar)
    })
  }), {
    renderPicker: l
  } = Ax({
    ref: o,
    props: a,
    valueManager: Ft,
    valueType: "date",
    validator: Xo,
    steps: null
  });
  return l();
});
process.env.NODE_ENV !== "production" && (ma.displayName = "DesktopDatePicker");
ma.propTypes = {
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
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default true
   */
  closeOnSelect: n.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: n.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
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
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: n.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: n.oneOf([3, 4])
};
function EE(e) {
  return we("MuiDialogContent", e);
}
Ee("MuiDialogContent", ["root", "dividers"]);
const OE = Ee("MuiDialogTitle", ["root"]), wE = ["className", "dividers"], TE = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return Ie({
    root: ["root", o && "dividers"]
  }, EE, t);
}, RE = G("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
  [`.${OE.root} + &`]: {
    paddingTop: 0
  }
})), Kd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: s,
    dividers: i = !1
  } = r, a = te(r, wE), l = b({}, r, {
    dividers: i
  }), c = TE(l);
  return /* @__PURE__ */ O.jsx(RE, b({
    className: ue(c.root, s),
    ownerState: l,
    ref: o
  }, a));
});
process.env.NODE_ENV !== "production" && (Kd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function kE(e) {
  return we("MuiDialog", e);
}
const ko = Ee("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Gd = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (Gd.displayName = "DialogContext");
const DE = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], ME = G(ea, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), IE = (e) => {
  const {
    classes: t,
    scroll: o,
    maxWidth: r,
    fullWidth: s,
    fullScreen: i
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${ae(o)}`],
    paper: ["paper", `paperScroll${ae(o)}`, `paperWidth${ae(String(r))}`, s && "paperFullWidth", i && "paperFullScreen"]
  };
  return Ie(a, kE, t);
}, NE = G(ta, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), $E = G("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.container, t[`scroll${ae(o.scroll)}`]];
  }
})(({
  ownerState: e
}) => b({
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
})), AE = G(Jo, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`scrollPaper${ae(o.scroll)}`], t[`paperWidth${ae(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
  [`&.${ko.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${ko.paperScrollBody}`]: {
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
  [`&.${ko.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Xd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ne({
    props: t,
    name: "MuiDialog"
  }), s = Qn(), i = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: f,
    disableEscapeKeyDown: h = !1,
    fullScreen: y = !1,
    fullWidth: g = !1,
    maxWidth: p = "sm",
    onBackdropClick: v,
    onClick: C,
    onClose: T,
    open: S,
    PaperComponent: x = Jo,
    PaperProps: E = {},
    scroll: I = "paper",
    TransitionComponent: P = En,
    transitionDuration: w = i,
    TransitionProps: k
  } = r, M = te(r, DE), N = b({}, r, {
    disableEscapeKeyDown: h,
    fullScreen: y,
    fullWidth: g,
    maxWidth: p,
    scroll: I
  }), D = IE(N), F = m.useRef(), $ = (L) => {
    F.current = L.target === L.currentTarget;
  }, V = (L) => {
    C && C(L), F.current && (F.current = null, v && v(L), T && T(L, "backdropClick"));
  }, j = xi(l), A = m.useMemo(() => ({
    titleId: j
  }), [j]);
  return /* @__PURE__ */ O.jsx(NE, b({
    className: ue(D.root, f),
    closeAfterTransition: !0,
    components: {
      Backdrop: ME
    },
    componentsProps: {
      backdrop: b({
        transitionDuration: w,
        as: c
      }, u)
    },
    disableEscapeKeyDown: h,
    onClose: T,
    open: S,
    ref: o,
    onClick: V,
    ownerState: N
  }, M, {
    children: /* @__PURE__ */ O.jsx(P, b({
      appear: !0,
      in: S,
      timeout: w,
      role: "presentation"
    }, k, {
      children: /* @__PURE__ */ O.jsx($E, {
        className: ue(D.container),
        onMouseDown: $,
        ownerState: N,
        children: /* @__PURE__ */ O.jsx(AE, b({
          as: x,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": j
        }, E, {
          className: ue(D.paper, E.className),
          ownerState: N,
          children: /* @__PURE__ */ O.jsx(Gd.Provider, {
            value: A,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Xd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": n.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": n.string,
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
  BackdropComponent: n.elementType,
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: n.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: n.oneOfType([n.oneOf(["xs", "sm", "md", "lg", "xl", !1]), n.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: n.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: n.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: n.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: n.object
});
const jE = G(Xd)({
  [`& .${ko.container}`]: {
    outline: 0
  },
  [`& .${ko.paper}`]: {
    outline: 0,
    minWidth: as
  }
}), FE = G(Kd)({
  "&:first-of-type": {
    padding: 0
  }
});
function VE(e) {
  const {
    children: t,
    slots: o,
    slotProps: r
  } = e, {
    open: s
  } = Jn(), {
    dismissViews: i,
    onPopperExited: a
  } = rt(), l = o?.dialog ?? jE, c = o?.mobileTransition ?? En;
  return /* @__PURE__ */ O.jsx(l, b({
    open: s,
    onClose: () => {
      i(), a?.();
    }
  }, r?.dialog, {
    TransitionComponent: c,
    TransitionProps: r?.mobileTransition,
    PaperComponent: o?.mobilePaper,
    PaperProps: r?.mobilePaper,
    children: /* @__PURE__ */ O.jsx(FE, {
      children: t
    })
  }));
}
const _E = ["props", "steps"], LE = ["ownerState"], BE = (e) => {
  let {
    props: t,
    steps: o
  } = e, r = te(e, _E);
  const {
    slots: s,
    slotProps: i,
    label: a,
    inputRef: l,
    localeText: c
  } = t, u = dd({
    steps: o
  }), {
    providerProps: d,
    renderCurrentView: f,
    ownerState: h
  } = Zu(b({}, r, {
    props: t,
    localeText: c,
    autoFocusView: !0,
    viewContainerRole: "dialog",
    variant: "mobile",
    getStepNavigation: u
  })), y = d.privateContextValue.labelId, g = i?.toolbar?.hidden ?? !1, p = s.field, v = Me({
    elementType: p,
    externalSlotProps: i?.field,
    additionalProps: b({}, g && {
      id: y
    }),
    ownerState: h
  }), C = te(v, LE), T = s.layout ?? ls;
  let S = y;
  g && (a ? S = `${y}-label` : S = void 0);
  const x = b({}, i, {
    toolbar: b({}, i?.toolbar, {
      titleId: y
    }),
    mobilePaper: b({
      "aria-labelledby": S
    }, i?.mobilePaper)
  }), E = () => /* @__PURE__ */ O.jsxs(Ou, b({}, d, {
    children: [/* @__PURE__ */ O.jsx(p, b({}, C, {
      slots: s,
      slotProps: x,
      inputRef: l
    })), /* @__PURE__ */ O.jsx(VE, {
      slots: s,
      slotProps: x,
      children: /* @__PURE__ */ O.jsx(T, b({}, x?.layout, {
        slots: s,
        slotProps: x,
        children: f()
      }))
    })]
  }));
  return process.env.NODE_ENV !== "production" && (E.displayName = "renderPicker"), {
    renderPicker: E
  };
}, ha = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ve(), s = Nu(t, "MuiMobileDatePicker"), i = b({
    day: gn,
    month: gn,
    year: gn
  }, s.viewRenderers), a = b({}, s, {
    viewRenderers: i,
    format: Ci(r, s, !1),
    slots: b({
      field: Es
    }, s.slots),
    slotProps: b({}, s.slotProps, {
      field: (c) => b({}, Rt(s.slotProps?.field, c), Du(s)),
      toolbar: b({
        hidden: !1
      }, s.slotProps?.toolbar)
    })
  }), {
    renderPicker: l
  } = BE({
    ref: o,
    props: a,
    valueManager: Ft,
    valueType: "date",
    validator: Xo,
    steps: null
  });
  return l();
});
process.env.NODE_ENV !== "production" && (ha.displayName = "MobileDatePicker");
ha.propTypes = {
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
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: n.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: n.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
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
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: n.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
};
const WE = ["desktopModeMediaQuery"], ba = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = ze({
    props: t,
    name: "MuiDatePicker"
  }), {
    desktopModeMediaQuery: s = cv
  } = r, i = te(r, WE);
  return Qc(s, {
    defaultMatches: !0
  }) ? /* @__PURE__ */ O.jsx(ma, b({
    ref: o
  }, i)) : /* @__PURE__ */ O.jsx(ha, b({
    ref: o
  }, i));
});
process.env.NODE_ENV !== "production" && (ba.displayName = "DatePicker");
process.env.NODE_ENV !== "production" && (ba.propTypes = {
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
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: n.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: n.string,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: n.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
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
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: n.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: n.oneOf([3, 4])
});
const yo = ({ error: e, style: t = {}, children: o }) => /* @__PURE__ */ O.jsxs("div", { className: "d-flex container-form-item", style: { ...t }, children: [
  /* @__PURE__ */ O.jsx("div", { children: o }),
  /* @__PURE__ */ O.jsx("div", { className: "error-message", children: e && /* @__PURE__ */ O.jsx("span", { children: e }) })
] }), oO = ({
  type: e,
  name: t,
  label: o,
  value: r,
  defaultValue: s,
  placeholder: i,
  mode: a = "",
  error: l,
  width: c = "200px",
  height: u = "35px",
  options: d,
  required: f = !1,
  loading: h,
  rangeDate: y = !1,
  tooltip: g = !0,
  formItemStyle: p = {},
  formStyle: v = {},
  onChange: C,
  ...T
}) => {
  const { control: S, getFieldState: x, watch: E, formState: I, getValues: P } = zo(), w = E(t), [k, M] = vc([]), N = ($) => x($, I)?.error?.message ?? "", D = () => o ? /* @__PURE__ */ O.jsx("div", { className: "label-form", children: /* @__PURE__ */ O.jsxs(
    "label",
    {
      htmlFor: t,
      title: o,
      style: {
        color: N(t) ? "#d32f2f" : "rgba(0, 0, 0, 0.87)"
      },
      children: [
        f && /* @__PURE__ */ O.jsx("span", { className: "form-required", children: "*" }),
        o
      ]
    }
  ) }) : /* @__PURE__ */ O.jsx(O.Fragment, {}), F = () => {
    const $ = P(t);
    if (!$) {
      M([]);
      return;
    }
    M(typeof $ == "string" ? [$] : typeof $ == "object" ? a ? [...k, $.label] : [$.label] : [
      d?.find((V) => V?.value === $?.value)?.label
    ]);
  };
  switch (xc(() => {
    //! Se resetea el valor del tooltip
    g && !w && F();
  }, [w]), e) {
    case "input":
    default:
      return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx(
        ro,
        {
          control: S,
          name: t,
          render: ({
            field: { onChange: V, onBlur: j, value: A, ref: L }
          }) => /* @__PURE__ */ O.jsx(yo, { error: N(t), style: { ...p }, children: /* @__PURE__ */ O.jsx(
            Os,
            {
              ref: L,
              id: t,
              error: !!N(t),
              label: D(),
              style: {
                width: c,
                height: u
              },
              value: A || "",
              placeholder: i,
              onChange: (B) => {
                V(B.target.value), typeof C == "function" && C(B.target.value);
              },
              size: "small",
              variant: "standard",
              ...T
            }
          ) })
        }
      ) });
    case "select":
      const $ = {};
      return a === "multiple" && ($.mode = "multiple"), /* @__PURE__ */ O.jsx(
        ro,
        {
          control: S,
          name: t,
          render: ({
            field: { onChange: V, onBlur: j, value: A, ref: L }
          }) => /* @__PURE__ */ O.jsx(yo, { error: N(t), style: { ...p }, children: /* @__PURE__ */ O.jsx(
            lp,
            {
              title: g ? k?.filter((B) => !!B)?.length === 0 ? "" : /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx(Sc, { direction: "column", children: k?.map((B) => /* @__PURE__ */ O.jsx("span", { children: B }, B)) }) }) : "",
              children: /* @__PURE__ */ O.jsx(
                cp,
                {
                  ref: L,
                  id: t,
                  style: {
                    width: c,
                    height: u,
                    ...v
                  },
                  value: d?.find((B) => B.value === A)?.label || "",
                  options: d,
                  loading: h,
                  onChange: (B, R) => {
                    //! validar
                    V(R?.value), typeof C == "function" && C(R?.value, B), g && F();
                  },
                  renderInput: (B) => /* @__PURE__ */ O.jsx(
                    Os,
                    {
                      ...B,
                      value: d?.find((R) => R.value === A)?.label || "",
                      label: D(),
                      placeholder: i,
                      error: !!N(t),
                      variant: "standard"
                    }
                  ),
                  ...$,
                  ...T
                }
              )
            }
          ) })
        }
      );
    case "date":
      return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx(
        ro,
        {
          control: S,
          name: t,
          render: ({
            field: { onChange: V, onBlur: j, value: A, ref: L }
          }) => /* @__PURE__ */ O.jsx(yo, { error: N(t), style: { ...p }, children: y ? /* @__PURE__ */ O.jsx("div", {}) : /* @__PURE__ */ O.jsx(
            ba,
            {
              ref: L,
              label: D(),
              value: A,
              slotProps: {
                textField: {
                  variant: "standard",
                  color: N(t) ? "error" : "primary"
                  //! Logica para agregar ERROR
                }
              },
              defaultValue: A,
              onChange: (B, R) => {
                V(B), typeof C == "function" && C(B, R);
              },
              ...T
            }
          ) })
        }
      ) });
    case "textarea":
      return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx(
        ro,
        {
          control: S,
          name: t,
          render: ({
            field: { onChange: V, onBlur: j, value: A, ref: L }
          }) => /* @__PURE__ */ O.jsx(yo, { error: N(t), style: { ...p }, children: /* @__PURE__ */ O.jsx(
            Os,
            {
              ref: L,
              id: t,
              error: !!N(t),
              label: D(),
              style: {
                width: c,
                height: u
              },
              value: A,
              placeholder: i,
              onChange: (B) => {
                V(B.target.value), typeof C == "function" && C(B.target.value);
              },
              size: "small",
              variant: "standard",
              multiline: !0,
              ...T
            }
          ) })
        }
      ) });
    case "checkbox":
      return /* @__PURE__ */ O.jsx(O.Fragment, {});
    case "radio":
      return /* @__PURE__ */ O.jsx(O.Fragment, {});
    case "switch":
      return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx(
        ro,
        {
          control: S,
          name: t,
          render: ({
            field: { onChange: V, onBlur: j, value: A, ref: L }
          }) => /* @__PURE__ */ O.jsx(yo, { error: N(t), style: { ...p }, children: /* @__PURE__ */ O.jsx(
            ap,
            {
              ref: L,
              id: t,
              value: A,
              defaultValue: s,
              onChange: (B, R) => {
                V(R), typeof C == "function" && C(R);
              },
              color: "primary",
              style: {
                // width,
                // height,
                ...v
              },
              ...T
            }
          ) })
        }
      ) });
  }
}, rO = () => /* @__PURE__ */ O.jsx("div", { children: "Esto es un hola mundo" });
export {
  Ys as Boton,
  eO as ContainerComponent,
  QE as ContainerTitle,
  Sc as Flex,
  nO as FormBoton,
  oO as FormInput,
  yo as FormItem,
  tO as Formulario,
  rO as HolaMundo,
  ZE as ModalPopup,
  JE as Spinner,
  Wo as ThemeWrapper
};
