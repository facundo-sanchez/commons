import ae, { useState as ne, useEffect as oe } from "react";
import { createTheme as se, ThemeProvider as ie, CssBaseline as le, Modal as ce, Box as j, Typography as ue, CircularProgress as de } from "@mui/material";
import { LoadingButton as fe } from "@mui/lab";
var h = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function me() {
  if (D) return T;
  D = 1;
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
var B;
function pe() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case G:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case C:
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
      if (e === P) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function a() {
        M || (M = !0, console.error(
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
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function k(e, r, a, i, b, f, S, O) {
      return a = f.ref, e = {
        $$typeof: N,
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function v(e, r, a, i, b, f, S, O) {
      var l = r.children;
      if (l !== void 0)
        if (i)
          if (re(l)) {
            for (i = 0; i < l.length; i++)
              E(l[i]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(l);
      if (I.call(r, "key")) {
        l = t(e);
        var x = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        i = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", F[l + i] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), F[l + i] = !0);
      }
      if (l = null, a !== void 0 && (s(a), l = "" + a), m(r) && (s(r.key), l = "" + r.key), "key" in r) {
        a = {};
        for (var w in r)
          w !== "key" && (a[w] = r[w]);
      } else a = r;
      return l && p(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), k(
        e,
        l,
        f,
        b,
        c(),
        a,
        S,
        O
      );
    }
    function E(e) {
      typeof e == "object" && e !== null && e.$$typeof === N && e._store && (e._store.validated = 1);
    }
    var R = ae, N = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), A = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, re = Array.isArray, y = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var M, $ = {}, L = R.react_stack_bottom_frame.bind(
      R,
      u
    )(), Y = y(d(u)), F = {};
    _.Fragment = P, _.jsx = function(e, r, a, i, b) {
      var f = 1e4 > A.recentlyCreatedOwnerStacks++;
      return v(
        e,
        r,
        a,
        !1,
        i,
        b,
        f ? Error("react-stack-top-frame") : L,
        f ? y(d(e)) : Y
      );
    }, _.jsxs = function(e, r, a, i, b) {
      var f = 1e4 > A.recentlyCreatedOwnerStacks++;
      return v(
        e,
        r,
        a,
        !0,
        i,
        b,
        f ? Error("react-stack-top-frame") : L,
        f ? y(d(e)) : Y
      );
    };
  })()), _;
}
var W;
function be() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? h.exports = me() : h.exports = pe()), h.exports;
}
var o = be();
const xe = {
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
}, ge = se(
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
  xe
), Ee = ({ children: t }) => /* @__PURE__ */ o.jsxs(ie, { theme: ge, children: [
  /* @__PURE__ */ o.jsx(le, {}),
  t
] }), Re = "_boton_g3916_49", Te = {
  boton: Re
}, z = () => {
  const [t, n] = ne(!1);
  return oe(() => {
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
  ...k
}) => {
  const { isReady: v } = z(), E = () => /* @__PURE__ */ o.jsx(Ee, { children: /* @__PURE__ */ o.jsx(
    fe,
    {
      ...k,
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
  return v && (() => {
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
  const { isReady: s } = z();
  return /* @__PURE__ */ o.jsx("div", { className: "container-title ", children: /* @__PURE__ */ o.jsx("div", { className: "title", children: /* @__PURE__ */ o.jsx(
    "span",
    {
      style: { color: s ? "rgba(0, 0, 0, 0.88)" : "transparent" },
      children: n ? `${t?.trim()}:` : t?.trim()
    }
  ) }) });
}, Pe = ({
  title: t,
  open: n,
  width: s,
  icon: d,
  children: c = !1,
  centered: u,
  onClose: m,
  ...p
}) => /* @__PURE__ */ o.jsx(
  ce,
  {
    open: n,
    onClose: m,
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
    ...p,
    children: /* @__PURE__ */ o.jsxs(
      j,
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
            j,
            {
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              className: "modal-alertas-header",
              children: [
                d != null && /* @__PURE__ */ o.jsx("div", { className: "item-modal", children: d }),
                /* @__PURE__ */ o.jsx(
                  ue,
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
          /* @__PURE__ */ o.jsx(j, { id: "modal-description", className: "modal-description", children: c })
        ]
      }
    )
  }
), Ae = ({ styles: t, config: n }) => /* @__PURE__ */ o.jsx(j, { className: "d-flex spinner", style: t, children: /* @__PURE__ */ o.jsx(de, { sx: n }) }), ye = ({ children: t, ...n }) => /* @__PURE__ */ o.jsx("div", { className: "container", ...n, children: t });
export {
  je as Boton,
  ye as ContainerComponent,
  ke as ContainerTitle,
  Pe as ModalAlerta,
  Ae as Spinner,
  Ee as ThemeWrapper
};
