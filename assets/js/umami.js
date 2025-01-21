!(function () {
  "use strict";
  (t => {
    const {
        screen: { width: e, height: a },
        navigator: { language: r },
        location: n,
        localStorage: i,
        document: c,
        history: o,
      } = t,
      { hostname: s, pathname: u, search: l } = n,
      { currentScript: d, referrer: f } = c;
    if (!d) return;
    const m = "data-",
      h = d.getAttribute.bind(d),
      p = h(m + "website-id"),
      g = h(m + "host-url"),
      y = h(m + "tag"),
      b = "false" !== h(m + "auto-track"),
      v = "true" === h(m + "exclude-search"),
      S = h(m + "domains") || "",
      w = S.split(",").map(t => t.trim()),
      N = `${(g || "" || d.src.split("/").slice(0, -1).join("/")).replace(/\/$/, "")}/api/send`,
      T = `${e}x${a}`,
      A = /data-umami-event-([\w-_]+)/,
      $ = m + "umami-event",
      x = 300,
      O = t => {
        if (t) {
          try {
            const e = decodeURI(t);
            if (e !== t) return e;
          } catch {
            return t;
          }
          return encodeURI(t);
        }
      },
      j = () => ({ website: p, hostname: s, screen: T, language: r, title: O(_), url: O(D), referrer: O(R), tag: y || void 0 }),
      k = (t, e, a) => {
        a && ((R = D), (D = (t => (v ? t.split("?")[0] : t))(a.toString())), D !== R && setTimeout(I, x));
      },
      E = () => (i && i.getItem("umami.disabled")) || (S && !w.includes(s)),
      U = async (t, e = "event") => {
        if (E()) return;
        const a = { "Content-Type": "application/json" };
        void 0 !== L && (a["x-umami-cache"] = L);
        try {
          const r = await fetch(N, { method: "POST", body: JSON.stringify({ type: e, payload: t }), headers: a }),
            n = await r.text();
          return (L = n);
        } catch {}
      },
      I = (t, e) =>
        U(
          "string" == typeof t
            ? { ...j(), name: t, data: "object" == typeof e ? e : void 0 }
            : "object" == typeof t
              ? t
              : "function" == typeof t
                ? t(j())
                : j(),
        ),
      K = t => U({ ...j(), data: t }, "identify");
    t.umami || (t.umami = { track: I, identify: K });
    let L,
      B,
      D = `${u}${l}`,
      R = f !== s ? f : "",
      _ = c.title;
    if (b && !E()) {
      (() => {
        const t = (t, e, a) => {
          const r = t[e];
          return (...e) => (a.apply(null, e), r.apply(t, e));
        };
        (o.pushState = t(o, "pushState", k)), (o.replaceState = t(o, "replaceState", k));
      })(),
        (() => {
          const t = new MutationObserver(([t]) => {
              _ = t && t.target ? t.target.text : void 0;
            }),
            e = c.querySelector("head > title");
          e && t.observe(e, { subtree: !0, characterData: !0, childList: !0 });
        })(),
        c.addEventListener(
          "click",
          async t => {
            const e = t => ["BUTTON", "A"].includes(t),
              a = async t => {
                const e = t.getAttribute.bind(t),
                  a = e($);
                if (a) {
                  const r = {};
                  return (
                    t.getAttributeNames().forEach(t => {
                      const a = t.match(A);
                      a && (r[a[1]] = e(t));
                    }),
                    I(a, r)
                  );
                }
              },
              r = t.target,
              i = e(r.tagName)
                ? r
                : ((t, a) => {
                    let r = t;
                    for (let t = 0; t < a; t++) {
                      if (e(r.tagName)) return r;
                      if (((r = r.parentElement), !r)) return null;
                    }
                  })(r, 10);
            if (!i) return a(r);
            {
              const { href: e, target: r } = i,
                c = i.getAttribute($);
              if (c)
                if ("A" === i.tagName) {
                  const o = "_blank" === r || t.ctrlKey || t.shiftKey || t.metaKey || (t.button && 1 === t.button);
                  if (c && e)
                    return (
                      o || t.preventDefault(),
                      a(i).then(() => {
                        o || (n.href = e);
                      })
                    );
                } else if ("BUTTON" === i.tagName) return a(i);
            }
          },
          !0,
        );
      const t = () => {
        "complete" !== c.readyState || B || (I(), (B = !0));
      };
      c.addEventListener("readystatechange", t, !0), t();
    }
  })(window);
})();
