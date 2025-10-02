(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("._success_g3916_9{background-color:var(--success)!important}._success_g3916_9:hover{background-color:var(--success-hover)!important}._danger_g3916_17{background-color:var(--danger)!important}._danger_g3916_17:hover{background-color:var(--danger-hover)!important}._warning_g3916_25{background-color:var(--warning)!important}._warning_g3916_25:hover{background-color:var(--warning-hover)!important}._default_g3916_33{background-color:var(--default)!important}._default_g3916_33:disabled{background-color:var(--disabled)!important}._default_g3916_33:hover{background-color:var(--default-hover)!important}._disabled_g3916_45{background-color:var(--disabled)}._boton_g3916_49{color:#fff!important;min-width:100px;margin:.5em .5em .5em 0}._boton_g3916_49:disabled{opacity:.5!important;cursor:not-allowed!important;background-color:#afafaf!important}.container-title{display:flex;flex-direction:row;align-items:center;padding:.5em 0 .5em 3em;gap:.5em}.container-title .title{font-size:1.7rem;font-weight:700!important;display:flex;align-items:center;gap:.2em;text-wrap:nowrap}.container-title .sub-title{font-size:1.5rem;font-weight:500!important;color:#202f95;text-wrap:nowrap}.container-title .container-line .hr-title{margin-top:.3em;background-color:#afafaf;border-top:1px solid #afafaf;border-bottom:1px solid #afafaf;height:1px}.sub-title{display:flex;gap:1em;justify-content:center;align-items:center}.item-modal{height:1.6em;width:1.5em}.modal-alertas .modal-alertas-header{background-color:#121a52;border-radius:8px 8px 0 0!important}.modal-alertas .modal-alertas-title{font-size:26px!important;font-weight:400;color:#fff;padding:6px 0}.modal-alertas .modal-description{padding:0 16px}.modal-alertas .ant-modal-content{border-radius:10px}.modal-alertas .span{font-size:12px;color:#fff}.spinner{margin:auto;align-items:center;justify-content:center;padding:5em}.container{background-color:#fff;margin:1em 2em;padding:1.5em 1.5em .5em;border-radius:5px}@media only screen and (max-width: 600px){.user{display:none!important}}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import ae, { useState as oe, useEffect as se } from "react";
import { createTheme as ie, ThemeProvider as le, CssBaseline as ce, Modal as ue, Box as k, Typography as de, CircularProgress as fe } from "@mui/material";
import { LoadingButton as me } from "@mui/lab";
var j = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function pe() {
  if (B) return T;
  B = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function s(d, c, u) {
    var m = null;
    if (u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), "key" in c) {
      u = {};
      for (var p in c)
        p !== "key" && (u[p] = c[p]);
    } else u = c;
    return c = u.ref, {
      $$typeof: t,
      type: d,
      key: m,
      ref: c !== void 0 ? c : null,
      props: u
    };
  }
  return T.Fragment = n, T.jsx = s, T.jsxs = s, T;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function be() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case I:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function s(e) {
      try {
        n(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), n(e);
      }
    }
    function d(e) {
      if (e === A) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function a() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function g() {
      var e = t(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function P(e, r, a, i, b, f, O, w) {
      return a = f.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: f,
        _owner: b
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, a, i, b, f, O, w) {
      var l = r.children;
      if (l !== void 0)
        if (i)
          if (te(l)) {
            for (i = 0; i < l.length; i++)
              E(l[i]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(l);
      if (M.call(r, "key")) {
        l = t(e);
        var x = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        i = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", D[l + i] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          l,
          x,
          l
        ), D[l + i] = !0);
      }
      if (l = null, a !== void 0 && (s(a), l = "" + a), m(r) && (s(r.key), l = "" + r.key), "key" in r) {
        a = {};
        for (var N in r)
          N !== "key" && (a[N] = r[N]);
      } else a = r;
      return l && p(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), P(
        e,
        l,
        f,
        b,
        c(),
        a,
        O,
        w
      );
    }
    function E(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var R = ae, C = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), X = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), y = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, te = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var $, L = {}, Y = R.react_stack_bottom_frame.bind(
      R,
      u
    )(), F = S(d(u)), D = {};
    _.Fragment = A, _.jsx = function(e, r, a, i, b) {
      var f = 1e4 > y.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !1,
        i,
        b,
        f ? Error("react-stack-top-frame") : Y,
        f ? S(d(e)) : F
      );
    }, _.jsxs = function(e, r, a, i, b) {
      var f = 1e4 > y.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !0,
        i,
        b,
        f ? Error("react-stack-top-frame") : Y,
        f ? S(d(e)) : F
      );
    };
  })()), _;
}
var z;
function xe() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? j.exports = pe() : j.exports = be()), j.exports;
}
var o = xe();
const ge = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: "Mostrar ruta"
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: (t) => t === "first" ? "Ir a la primera página" : t === "last" ? "Ir a la última página" : t === "next" ? "Ir a la página siguiente" : "Ir a la página anterior",
        labelRowsPerPage: "Filas por página:",
        labelDisplayedRows: ({
          from: t,
          to: n,
          count: s
        }) => `${t}–${n} de ${s !== -1 ? s : `más de ${n}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: (t) => `${t} Estrella${t !== 1 ? "s" : ""}`,
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
        getItemAriaLabel: (t, n, s) => t === "page" ? `${s ? "" : "Ir a la "}página ${n}` : t === "first" ? "Ir a la primera página" : t === "last" ? "Ir a la última página" : t === "next" ? "Ir a la página siguiente" : "Ir a la página anterior"
      }
    }
  }
}, Ee = ie(
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
  ge
), v = ({ children: t }) => /* @__PURE__ */ o.jsxs(le, { theme: Ee, children: [
  /* @__PURE__ */ o.jsx(ce, {}),
  t
] }), Re = "_boton_g3916_49", Te = {
  boton: Re
}, U = () => {
  const [t, n] = oe(!1);
  return se(() => {
    n(!0);
  }, []), { isReady: t };
}, je = ({
  label: t,
  color: n,
  onClick: s,
  disabled: d,
  htmlType: c,
  icon: u,
  size: m,
  style: p,
  loading: g,
  ...P
}) => {
  const { isReady: h } = U(), E = () => /* @__PURE__ */ o.jsx(v, { children: /* @__PURE__ */ o.jsx(
    me,
    {
      ...P,
      variant: "contained",
      size: m || "small",
      type: c,
      onClick: s,
      className: `${Te.boton}`,
      color: n,
      disabled: d,
      style: p,
      endIcon: u,
      loading: g,
      loadingPosition: u || g ? "end" : void 0,
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "17px",
        textTransform: "none",
        fontSize: "14px",
        padding: g ? "0px 0px 0px 20px" : "0px 20px 0px 20px",
        "& .MuiLoadingButton-loadingIndicator": {
          position: "relative",
          margin: 0,
          padding: 0
        }
      },
      children: t
    }
  ) });
  return h && (() => {
    switch (n) {
      case "success":
      case "error":
      case "warning":
        return /* @__PURE__ */ o.jsx(E, {});
      case "primary":
      default:
        return /* @__PURE__ */ o.jsx(E, {});
    }
  })();
}, ke = ({ title: t, subTitle: n }) => {
  const { isReady: s } = U();
  return /* @__PURE__ */ o.jsx(v, { children: /* @__PURE__ */ o.jsx("div", { className: "container-title ", children: /* @__PURE__ */ o.jsx("div", { className: "title", children: /* @__PURE__ */ o.jsxs(
    "span",
    {
      style: { color: s ? "rgba(0, 0, 0, 0.88)" : "transparent" },
      children: [
        n ? `${t?.trim()}:` : t?.trim(),
        n
      ]
    }
  ) }) }) });
}, Pe = ({
  title: t,
  open: n,
  width: s,
  icon: d,
  children: c = !1,
  centered: u,
  onClose: m,
  ...p
}) => /* @__PURE__ */ o.jsx(v, { children: /* @__PURE__ */ o.jsx(
  ue,
  {
    open: n,
    onClose: m,
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
    ...p,
    children: /* @__PURE__ */ o.jsxs(
      k,
      {
        className: "modal-alertas",
        sx: {
          position: "absolute",
          top: u ? "50%" : "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: s ?? 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          padding: 0
        },
        children: [
          /* @__PURE__ */ o.jsxs(
            k,
            {
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              className: "modal-alertas-header",
              children: [
                d != null && /* @__PURE__ */ o.jsx("div", { className: "item-modal", children: d }),
                /* @__PURE__ */ o.jsx(
                  de,
                  {
                    id: "modal-title",
                    variant: "h6",
                    component: "h2",
                    className: "modal-alertas-title",
                    children: t
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(k, { id: "modal-description", className: "modal-description", children: c })
        ]
      }
    )
  }
) }), Ae = ({ styles: t, config: n }) => /* @__PURE__ */ o.jsx(v, { children: /* @__PURE__ */ o.jsx(k, { className: "d-flex spinner", style: t, children: /* @__PURE__ */ o.jsx(fe, { sx: n }) }) }), ye = ({ children: t, ...n }) => /* @__PURE__ */ o.jsx(v, { children: /* @__PURE__ */ o.jsx("div", { className: "container", ...n, children: t }) });
export {
  je as Boton,
  ye as ContainerComponent,
  ke as ContainerTitle,
  Pe as ModalAlerta,
  Ae as Spinner,
  v as ThemeWrapper
};
