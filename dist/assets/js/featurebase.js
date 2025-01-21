/* eslint-disable no-cond-assign */
/* eslint-disable require-yield */
/* eslint-disable no-empty */
/* eslint-disable no-control-regex */
/* eslint-disable prefer-spread */
/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */
/* eslint-disable no-undef */
!(function (e, t) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
			? define("FeaturebaseSDK", [], t)
			: "object" == typeof exports
				? (exports.FeaturebaseSDK = t())
				: (e.FeaturebaseSDK = t());
})(this, () =>
	(() => {
		let e,
			t,
			i = {
				702: (e, t) => {
					let i, n, a;
					!(function (r) {
						if ("undefined" != typeof window) {
							var s,
								o = 0,
								l = !1,
								d = !1,
								c = 7,
								u = "[iFrameSizer]",
								h = u.length,
								f = null,
								p = window.requestAnimationFrame,
								m = Object.freeze({ max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 }),
								g = {},
								v = null,
								y = Object.freeze({
									autoResize: !0,
									bodyBackground: null,
									bodyMargin: null,
									bodyMarginV1: 8,
									bodyPadding: null,
									checkOrigin: !0,
									inPageLinks: !1,
									enablePublicMethods: !0,
									heightCalculationMethod: "bodyOffset",
									id: "iFrameResizer",
									interval: 32,
									log: !1,
									maxHeight: 1 / 0,
									maxWidth: 1 / 0,
									minHeight: 0,
									minWidth: 0,
									mouseEvents: !0,
									resizeFrom: "parent",
									scrolling: !1,
									sizeHeight: !0,
									sizeWidth: !1,
									warningTimeout: 5e3,
									tolerance: 0,
									widthCalculationMethod: "scroll",
									onClose: function () {
										return !0;
									},
									onClosed: function () {},
									onInit: function () {},
									onMessage: function () {
										C("onMessage function not defined");
									},
									onMouseEnter: function () {},
									onMouseLeave: function () {},
									onResized: function () {},
									onScroll: function () {
										return !0;
									},
								}),
								b = {};
							window.jQuery !== r &&
								((s = window.jQuery).fn
									? s.fn.iFrameResize ||
										(s.fn.iFrameResize = function (e) {
											return this.filter("iframe")
												.each(function (t, i) {
													$(i, e);
												})
												.end();
										})
									: T("", "Unable to bind to jQuery, it is not fully loaded.")),
								(n = []),
								(a = "function" == typeof (i = V) ? i.apply(t, n) : i) === r || (e.exports = a),
								(window.iFrameResize = window.iFrameResize || V());
						}
						function w() {
							return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
						}
						function k(e, t, i) {
							e.addEventListener(t, i, !1);
						}
						function _(e, t, i) {
							e.removeEventListener(t, i, !1);
						}
						function x(e) {
							return (
								u +
								"[" +
								(function (e) {
									let t = "Host page: " + e;
									return (
										window.top !== window.self &&
											(t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e),
										t
									);
								})(e) +
								"]"
							);
						}
						function E(e) {
							return g[e] ? g[e].log : l;
						}
						function S(e, t) {
							j("log", e, t, E(e));
						}
						function T(e, t) {
							j("info", e, t, E(e));
						}
						function C(e, t) {
							j("warn", e, t, !0);
						}
						function j(e, t, i, n) {
							!0 === n && "object" == typeof window.console && console[e](x(t), i);
						}
						function I(e) {
							function t() {
								a("Height"),
									a("Width"),
									N(
										function () {
											W(O), z($), m("onResized", O);
										},
										O,
										"init",
									);
							}
							function i(e) {
								return "border-box" !== e.boxSizing
									? 0
									: (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
							}
							function n(e) {
								return "border-box" !== e.boxSizing
									? 0
									: (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0);
							}
							function a(e) {
								let t = Number(g[$]["max" + e]),
									i = Number(g[$]["min" + e]),
									n = e.toLowerCase(),
									a = Number(O[n]);
								S($, "Checking " + n + " is in range " + i + "-" + t),
									a < i && ((a = i), S($, "Set " + n + " to min value")),
									a > t && ((a = t), S($, "Set " + n + " to max value")),
									(O[n] = "" + a);
							}
							function r(e) {
								return I.slice(I.indexOf(":") + c + e);
							}
							function s(e, t) {
								let i, n, a;
								(i = function () {
									let i, n;
									Z(
										"Send Page Info",
										"pageInfo:" +
											((i = document.body.getBoundingClientRect()),
											(n = O.iframe.getBoundingClientRect()),
											JSON.stringify({
												iframeHeight: n.height,
												iframeWidth: n.width,
												clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
												clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
												offsetTop: parseInt(n.top - i.top, 10),
												offsetLeft: parseInt(n.left - i.left, 10),
												scrollTop: window.pageYOffset,
												scrollLeft: window.pageXOffset,
												documentHeight: document.documentElement.clientHeight,
												documentWidth: document.documentElement.clientWidth,
												windowHeight: window.innerHeight,
												windowWidth: window.innerWidth,
											})),
										e,
										t,
									);
								}),
									(n = 32),
									b[(a = t)] ||
										(b[a] = setTimeout(function () {
											(b[a] = null), i();
										}, n));
							}
							function o(e) {
								let t = e.getBoundingClientRect();
								return L($), { x: Math.floor(Number(t.left) + Number(f.x)), y: Math.floor(Number(t.top) + Number(f.y)) };
							}
							function l(e) {
								let t = e ? o(O.iframe) : { x: 0, y: 0 },
									i = { x: Number(O.width) + t.x, y: Number(O.height) + t.y };
								S($, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"),
									window.top === window.self
										? ((f = i), d(), S($, "--"))
										: window.parentIFrame
											? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](i.x, i.y)
											: C($, "Unable to scroll to requested position, window.parentIFrame not found");
							}
							function d() {
								!1 === m("onScroll", f) ? F() : z($);
							}
							function p(e) {
								let t = {};
								if (0 === Number(O.width) && 0 === Number(O.height)) {
									let i = r(9).split(":");
									t = { x: i[1], y: i[0] };
								} else t = { x: O.width, y: O.height };
								m(e, { iframe: O.iframe, screenX: Number(t.x), screenY: Number(t.y), type: O.type });
							}
							function m(e, t) {
								return A($, e, t);
							}
							var v,
								y,
								w,
								x,
								E,
								j,
								I = e.data,
								O = {},
								$ = null;
							"[iFrameResizerChild]Ready" === I
								? (function () {
										for (let e in g) Z("iFrame requested init", M(e), g[e].iframe, e);
									})()
								: u === ("" + I).slice(0, h) && I.slice(h).split(":")[0] in g
									? ((w = I.slice(h).split(":")),
										(x = w[1] ? parseInt(w[1], 10) : 0),
										(E = g[w[0]] && g[w[0]].iframe),
										(j = getComputedStyle(E)),
										(O = { iframe: E, id: w[0], height: x + i(j) + n(j), width: w[2], type: w[3] }),
										($ = O.id),
										g[$] && (g[$].loaded = !0),
										(y = O.type in { true: 1, false: 1, undefined: 1 }) && S($, "Ignoring init message from meta parent page"),
										!y &&
											(function (e) {
												let t = !0;
												return g[e] || ((t = !1), C(O.type + " No settings for " + e + ". Message was: " + I)), t;
											})($) &&
											(S($, "Received: " + I),
											(v = !0),
											null === O.iframe && (C($, "IFrame (" + O.id + ") not found"), (v = !1)),
											v &&
												(function () {
													let t,
														i = e.origin,
														n = g[$] && g[$].checkOrigin;
													if (
														n &&
														"" + i != "null" &&
														!(n.constructor === Array
															? (function () {
																	let e = 0,
																		t = !1;
																	for (S($, "Checking connection is from allowed list of origins: " + n); e < n.length; e++)
																		if (n[e] === i) {
																			t = !0;
																			break;
																		}
																	return t;
																})()
															: ((t = g[$] && g[$].remoteHost), S($, "Checking connection is from: " + t), i === t))
													)
														throw new Error(
															"Unexpected message received from: " +
																i +
																" for " +
																O.iframe.id +
																". Message was: " +
																e.data +
																". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.",
														);
													return !0;
												})() &&
												(function () {
													switch ((g[$] && g[$].firstRun && g[$] && (g[$].firstRun = !1), O.type)) {
														case "close":
															P(O.iframe);
															break;
														case "message":
															(c = r(6)),
																S($, "onMessage passed: {iframe: " + O.iframe.id + ", message: " + c + "}"),
																m("onMessage", { iframe: O.iframe, message: JSON.parse(c) }),
																S($, "--");
															break;
														case "mouseenter":
															p("onMouseEnter");
															break;
														case "mouseleave":
															p("onMouseLeave");
															break;
														case "autoResize":
															g[$].autoResize = JSON.parse(r(9));
															break;
														case "scrollTo":
															l(!1);
															break;
														case "scrollToOffset":
															l(!0);
															break;
														case "pageInfo":
															s(g[$] && g[$].iframe, $),
																(function () {
																	function e(e, n) {
																		function a() {
																			g[i] ? s(g[i].iframe, i) : t();
																		}
																		["scroll", "resize"].forEach(function (t) {
																			S(i, e + t + " listener for sendPageInfo"), n(window, t, a);
																		});
																	}
																	function t() {
																		e("Remove ", _);
																	}
																	var i = $;
																	e("Add ", k), g[i] && (g[i].stopPageInfo = t);
																})();
															break;
														case "pageInfoStop":
															g[$] && g[$].stopPageInfo && (g[$].stopPageInfo(), delete g[$].stopPageInfo);
															break;
														case "inPageLink":
															(i = r(9).split("#")[1] || ""),
																(n = decodeURIComponent(i)),
																(a = document.getElementById(n) || document.getElementsByName(n)[0])
																	? ((e = o(a)),
																		S($, "Moving to in page link (#" + i + ") at x: " + e.x + " y: " + e.y),
																		(f = { x: e.x, y: e.y }),
																		d(),
																		S($, "--"))
																	: window.top === window.self
																		? S($, "In page link #" + i + " not found")
																		: window.parentIFrame
																			? window.parentIFrame.moveToAnchor(i)
																			: S($, "In page link #" + i + " not found and window.parentIFrame not found");
															break;
														case "reset":
															R(O);
															break;
														case "init":
															t(), m("onInit", O.iframe);
															break;
														default:
															0 === Number(O.width) && 0 === Number(O.height)
																? C(
																		"Unsupported message received (" +
																			O.type +
																			"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page",
																	)
																: t();
													}
													let e, i, n, a, c;
												})()))
									: T($, "Ignored: " + I);
						}
						function A(e, t, i) {
							let n = null,
								a = null;
							if (g[e]) {
								if ("function" != typeof (n = g[e][t])) throw new TypeError(t + " on iFrame[" + e + "] is not a function");
								a = n(i);
							}
							return a;
						}
						function O(e) {
							let t = e.id;
							delete g[t];
						}
						function P(e) {
							let t = e.id;
							if (!1 !== A(t, "onClose", t)) {
								S(t, "Removing iFrame: " + t);
								try {
									e.parentNode && e.parentNode.removeChild(e);
								} catch (e) {
									C(e);
								}
								A(t, "onClosed", t), S(t, "--"), O(e);
							} else S(t, "Close iframe cancelled by onClose event");
						}
						function L(e) {
							null === f &&
								S(
									e,
									"Get page position: " +
										(f = {
											x: window.pageXOffset === r ? document.documentElement.scrollLeft : window.pageXOffset,
											y: window.pageYOffset === r ? document.documentElement.scrollTop : window.pageYOffset,
										}).x +
										"," +
										f.y,
								);
						}
						function z(e) {
							null !== f && (window.scrollTo(f.x, f.y), S(e, "Set page position: " + f.x + "," + f.y), F());
						}
						function F() {
							f = null;
						}
						function R(e) {
							S(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")),
								L(e.id),
								N(
									function () {
										W(e), Z("reset", "reset", e.iframe, e.id);
									},
									e,
									"reset",
								);
						}
						function W(e) {
							function t(t) {
								d ||
									"0" !== e[t] ||
									((d = !0),
									S(n, "Hidden iFrame detected, creating visibility listener"),
									(function () {
										function e() {
											function e(e) {
												function t(t) {
													return "0px" === (g[e] && g[e].iframe.style[t]);
												}
												function i(e) {
													return null !== e.offsetParent;
												}
												g[e] && i(g[e].iframe) && (t("height") || t("width")) && Z("Visibility change", "resize", g[e].iframe, e);
											}
											Object.keys(g).forEach(function (t) {
												e(t);
											});
										}
										function t(t) {
											S("window", "Mutation observed: " + t[0].target + " " + t[0].type), D(e, 16);
										}
										function i() {
											let e = document.querySelector("body"),
												i = { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 };
											new n(t).observe(e, i);
										}
										var n = w();
										n && i();
									})());
							}
							function i(i) {
								!(function (t) {
									e.id
										? ((e.iframe.style[t] = e[t] + "px"), S(e.id, "IFrame (" + n + ") " + t + " set to " + e[t] + "px"))
										: S("undefined", "messageData id not set");
								})(i),
									t(i);
							}
							var n = e.iframe.id;
							g[n] && (g[n].sizeHeight && i("height"), g[n].sizeWidth && i("width"));
						}
						function N(e, t, i) {
							i !== t.type && p && !window.jasmine ? (S(t.id, "Requesting animation frame"), p(e)) : e();
						}
						function Z(e, t, i, n, a) {
							let r,
								s = !1;
							(n = n || i.id),
								g[n] &&
									(i && "contentWindow" in i && null !== i.contentWindow
										? ((r = g[n] && g[n].targetOrigin),
											S(n, "[" + e + "] Sending msg to iframe[" + n + "] (" + t + ") targetOrigin: " + r),
											i.contentWindow.postMessage(u + t, r))
										: C(n, "[" + e + "] IFrame(" + n + ") not found"),
									a &&
										g[n] &&
										g[n].warningTimeout &&
										(g[n].msgTimeout = setTimeout(function () {
											!g[n] ||
												g[n].loaded ||
												s ||
												((s = !0),
												C(
													n,
													"IFrame has not responded within " +
														g[n].warningTimeout / 1e3 +
														" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.",
												));
										}, g[n].warningTimeout)));
						}
						function M(e) {
							return (
								e +
								":" +
								g[e].bodyMarginV1 +
								":" +
								g[e].sizeWidth +
								":" +
								g[e].log +
								":" +
								g[e].interval +
								":" +
								g[e].enablePublicMethods +
								":" +
								g[e].autoResize +
								":" +
								g[e].bodyMargin +
								":" +
								g[e].heightCalculationMethod +
								":" +
								g[e].bodyBackground +
								":" +
								g[e].bodyPadding +
								":" +
								g[e].tolerance +
								":" +
								g[e].inPageLinks +
								":" +
								g[e].resizeFrom +
								":" +
								g[e].widthCalculationMethod +
								":" +
								g[e].mouseEvents
							);
						}
						function $(e, t) {
							function i(e) {
								let t = e.split("Callback");
								if (2 === t.length) {
									let i = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
									(this[i] = this[e]),
										delete this[e],
										C(n, "Deprecated: '" + e + "' has been renamed '" + i + "'. The old method will be removed in the next major version.");
								}
							}
							var n = (function (i) {
								if ("string" != typeof i) throw new TypeError("Invaild id for iFrame. Expected String");
								let n;
								return (
									"" === i &&
										((e.id = ((n = (t && t.id) || y.id + o++), null !== document.getElementById(n) && (n += o++), (i = n))),
										(l = (t || {}).log),
										S(i, "Added missing iframe ID: " + i + " (" + e.src + ")")),
									i
								);
							})(e.id);
							n in g && "iFrameResizer" in e
								? C(n, "Ignored iFrame, already setup.")
								: (!(function (t) {
										let a;
										(t = t || {}),
											(g[n] = Object.create(null)),
											(g[n].iframe = e),
											(g[n].firstRun = !0),
											(g[n].remoteHost = e.src && e.src.split("/").slice(0, 3).join("/")),
											(function (e) {
												if ("object" != typeof e) throw new TypeError("Options is not an object");
											})(t),
											Object.keys(t).forEach(i, t),
											(function (e) {
												for (let t in y)
													Object.prototype.hasOwnProperty.call(y, t) && (g[n][t] = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : y[t]);
											})(t),
											g[n] &&
												(g[n].targetOrigin =
													!0 === g[n].checkOrigin
														? "" === (a = g[n].remoteHost) || null !== a.match(/^(about:blank|javascript:|file:\/\/)/)
															? "*"
															: a
														: "*");
									})(t),
									(function () {
										switch (
											(S(n, "IFrame scrolling " + (g[n] && g[n].scrolling ? "enabled" : "disabled") + " for " + n),
											(e.style.overflow = !1 === (g[n] && g[n].scrolling) ? "hidden" : "auto"),
											g[n] && g[n].scrolling)
										) {
											case "omit":
												break;
											case !0:
												e.scrolling = "yes";
												break;
											case !1:
												e.scrolling = "no";
												break;
											default:
												e.scrolling = g[n] ? g[n].scrolling : "no";
										}
									})(),
									(function () {
										function t(t) {
											let i = g[n][t];
											1 / 0 !== i && 0 !== i && ((e.style[t] = "number" == typeof i ? i + "px" : i), S(n, "Set " + t + " = " + e.style[t]));
										}
										function i(e) {
											if (g[n]["min" + e] > g[n]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e);
										}
										i("Height"), i("Width"), t("maxHeight"), t("minHeight"), t("maxWidth"), t("minWidth");
									})(),
									("number" != typeof (g[n] && g[n].bodyMargin) && "0" !== (g[n] && g[n].bodyMargin)) ||
										((g[n].bodyMarginV1 = g[n].bodyMargin), (g[n].bodyMargin = g[n].bodyMargin + "px")),
									(function (t) {
										let i = w();
										i &&
											(function (t) {
												e.parentNode &&
													new t(function (t) {
														t.forEach(function (t) {
															Array.prototype.slice.call(t.removedNodes).forEach(function (t) {
																t === e && P(e);
															});
														});
													}).observe(e.parentNode, { childList: !0 });
											})(i),
											k(e, "load", function () {
												let i, a;
												Z("iFrame.onload", t, e, r, !0),
													(i = g[n] && g[n].firstRun),
													(a = g[n] && g[n].heightCalculationMethod in m),
													!i && a && R({ iframe: e, height: 0, width: 0, type: "init" });
											}),
											Z("init", t, e, r, !0);
									})(M(n)),
									g[n] &&
										(g[n].iframe.iFrameResizer = {
											close: P.bind(null, g[n].iframe),
											removeListeners: O.bind(null, g[n].iframe),
											resize: Z.bind(null, "Window resize", "resize", g[n].iframe),
											moveToAnchor: function (e) {
												Z("Move to anchor", "moveToAnchor:" + e, g[n].iframe, n);
											},
											sendMessage: function (e) {
												Z("Send Message", "message:" + (e = JSON.stringify(e)), g[n].iframe, n);
											},
										}));
						}
						function D(e, t) {
							null === v &&
								(v = setTimeout(function () {
									(v = null), e();
								}, t));
						}
						function B() {
							"hidden" !== document.visibilityState &&
								(S("document", "Trigger event: Visibility change"),
								D(function () {
									U("Tab Visible", "resize");
								}, 16));
						}
						function U(e, t) {
							Object.keys(g).forEach(function (i) {
								(function (e) {
									return g[e] && "parent" === g[e].resizeFrom && g[e].autoResize && !g[e].firstRun;
								})(i) && Z(e, t, g[i].iframe, i);
							});
						}
						function K() {
							k(window, "message", I),
								k(window, "resize", function () {
									let e;
									S("window", "Trigger event: " + (e = "resize")),
										D(function () {
											U("Window " + e, "resize");
										}, 16);
								}),
								k(document, "visibilitychange", B),
								k(document, "-webkit-visibilitychange", B);
						}
						function V() {
							function e(e, i) {
								i &&
									(!(function () {
										if (!i.tagName) throw new TypeError("Object is not a valid DOM element");
										if ("IFRAME" !== i.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + i.tagName + ">");
									})(),
									$(i, e),
									t.push(i));
							}
							let t;
							return (
								(function () {
									let e,
										t = ["moz", "webkit", "o", "ms"];
									for (e = 0; e < t.length && !p; e += 1) p = window[t[e] + "RequestAnimationFrame"];
									p ? (p = p.bind(window)) : S("setup", "RequestAnimationFrame not supported");
								})(),
								K(),
								function (i, n) {
									switch (
										((t = []),
										(function (e) {
											e &&
												e.enablePublicMethods &&
												C("enablePublicMethods option has been removed, public methods are now always available in the iFrame");
										})(i),
										typeof n)
									) {
										case "undefined":
										case "string":
											Array.prototype.forEach.call(document.querySelectorAll(n || "iframe"), e.bind(r, i));
											break;
										case "object":
											e(i, n);
											break;
										default:
											throw new TypeError("Unexpected data type (" + typeof n + ")");
									}
									return t;
								}
							);
						}
					})();
				},
				981: (e, t, i) => {
					"use strict";
					i.d(t, { I: () => a });
					const n = {
						en: {
							feedback: "Feedback",
							highlight: "Highlight",
							comment: "Comment",
							draw: "Draw",
							hide: "Hide",
							done: "Done",
							"type-your-text-here": "Type your text here...",
						},
						de: {
							feedback: "Feedback",
							highlight: "Markieren",
							comment: "Kommentar",
							draw: "Zeichnen",
							hide: "Verstecken",
							done: "Fertig",
							"type-your-text-here": "Geben Sie hier Ihren Text ein...",
						},
						es: {
							feedback: "Comentarios",
							highlight: "Resaltar",
							comment: "Comentario",
							draw: "Dibujar",
							hide: "Ocultar",
							done: "Listo",
							"type-your-text-here": "Escriba su texto aquÃ­...",
						},
						et: {
							feedback: "Tagasiside",
							highlight: "EsiletÃµstmine",
							comment: "Kommentaar",
							draw: "Joonista",
							hide: "Peida",
							done: "Valmis",
							"type-your-text-here": "Kirjutage oma tekst siia...",
						},
						fr: {
							feedback: "Avis",
							highlight: "Surligner",
							comment: "Commentaire",
							draw: "Dessiner",
							hide: "Cacher",
							done: "TerminÃ©",
							"type-your-text-here": "Tapez votre texte ici...",
						},
						ko: {
							feedback: "í”¼ë“œë°±",
							highlight: "ê°•ì¡°",
							comment: "ëŒ“ê¸€",
							draw: "ê·¸ë¦¬ê¸°",
							hide: "ìˆ¨ê¸°ê¸°",
							done: "ì™„ë£Œ",
							"type-your-text-here": "ì—¬ê¸°ì— í…ìŠ¤íŠ¸ë¥¼ ìž…ë ¥í•˜ì„¸ìš”...",
						},
						nl: {
							feedback: "Feedback",
							highlight: "Markeren",
							comment: "Opmerking",
							draw: "Tekenen",
							hide: "Verbergen",
							done: "Gereed",
							"type-your-text-here": "Typ hier uw tekst...",
						},
						pt: {
							feedback: "ComentÃ¡rios",
							highlight: "Destacar",
							comment: "ComentÃ¡rio",
							draw: "Desenhar",
							hide: "Ocultar",
							done: "ConcluÃ­do",
							"type-your-text-here": "Digite seu texto aqui...",
						},
						ru: {
							feedback: "ÐžÑ‚Ð·Ñ‹Ð²",
							highlight: "Ð’Ñ‹Ð´ÐµÐ»Ð¸Ñ‚ÑŒ",
							comment: "ÐšÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹",
							draw: "Ð Ð¸ÑÐ¾Ð²Ð°Ñ‚ÑŒ",
							hide: "Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ",
							done: "Ð“Ð¾Ñ‚Ð¾Ð²Ð¾",
							"type-your-text-here": "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð²Ð°Ñˆ Ñ‚ÐµÐºÑÑ‚ Ð·Ð´ÐµÑÑŒ...",
						},
						hu: {
							feedback: "VisszajelzÃ©s",
							highlight: "KiemelÃ©s",
							comment: "HozzÃ¡szÃ³lÃ¡s",
							draw: "RajzolÃ¡s",
							hide: "ElrejtÃ©s",
							done: "KÃ©sz",
							"type-your-text-here": "Ãrd be ide a szÃ¶veged...",
						},
						it: {
							feedback: "Feedback",
							highlight: "Evidenzia",
							comment: "Commento",
							draw: "Disegna",
							hide: "Nascondi",
							done: "Fatto",
							"type-your-text-here": "Scrivi il testo qui...",
						},
						uk: {
							feedback: "Ð’Ñ–Ð´Ð³ÑƒÐº",
							highlight: "Ð’Ð¸Ð´Ñ–Ð»Ð¸Ñ‚Ð¸",
							comment: "ÐšÐ¾Ð¼ÐµÐ½Ñ‚Ð°Ñ€",
							draw: "ÐœÐ°Ð»ÑŽÐ²Ð°Ñ‚Ð¸",
							hide: "ÐŸÑ€Ð¸Ñ…Ð¾Ð²Ð°Ñ‚Ð¸",
							done: "Ð“Ð¾Ñ‚Ð¾Ð²Ð¾",
							"type-your-text-here": "Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ Ñ‚ÐµÐºÑÑ‚ Ñ‚ÑƒÑ‚...",
						},
						bn: {
							feedback: "à¦ªà§à¦°à¦¤à¦¿à¦•à§à¦°à¦¿à¦¯à¦¼à¦¾",
							highlight: "à¦¹à¦¾à¦‡à¦²à¦¾à¦‡à¦Ÿ",
							comment: "à¦®à¦¨à§à¦¤à¦¬à§à¦¯",
							draw: "à¦†à¦à¦•à§à¦¨",
							hide: "à¦²à§à¦•à¦¾à¦¨",
							done: "à¦¸à¦®à§à¦ªà¦¨à§à¦¨",
							"type-your-text-here": "à¦à¦–à¦¾à¦¨à§‡ à¦†à¦ªà¦¨à¦¾à¦° à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦Ÿà¦¾à¦‡à¦ª à¦•à¦°à§à¦¨...",
						},
						bs: {
							feedback: "Povratne informacije",
							highlight: "Istakni",
							comment: "Komentar",
							draw: "Crtaj",
							hide: "Sakrij",
							done: "Gotovo",
							"type-your-text-here": "Unesite svoj tekst ovdje...",
						},
						"pt-BR": {
							feedback: "Feedback",
							highlight: "Destacar",
							comment: "ComentÃ¡rio",
							draw: "Desenhar",
							hide: "Ocultar",
							done: "ConcluÃ­do",
							"type-your-text-here": "Digite seu texto aqui...",
						},
						bg: {
							feedback: "ÐžÐ±Ñ€Ð°Ñ‚Ð½Ð° Ð²Ñ€ÑŠÐ·ÐºÐ°",
							highlight: "ÐŸÐ¾Ð´Ñ‡ÐµÑ€Ñ‚Ð°Ð¹",
							comment: "ÐšÐ¾Ð¼ÐµÐ½Ñ‚Ð°Ñ€",
							draw: "Ð Ð¸ÑÑƒÐ²Ð°Ð¹",
							hide: "Ð¡ÐºÑ€Ð¸Ð¹",
							done: "Ð“Ð¾Ñ‚Ð¾Ð²Ð¾",
							"type-your-text-here": "Ð’ÑŠÐ²ÐµÐ´ÐµÑ‚Ðµ Ñ‚ÐµÐºÑÑ‚Ð° ÑÐ¸ Ñ‚ÑƒÐº...",
						},
						ca: {
							feedback: "Comentaris",
							highlight: "Ressaltar",
							comment: "Comentari",
							draw: "Dibuixar",
							hide: "Amagar",
							done: "Fet",
							"type-your-text-here": "Escriviu el vostre text aquÃ­...",
						},
						hr: {
							feedback: "Povratne informacije",
							highlight: "Istakni",
							comment: "Komentar",
							draw: "Crtaj",
							hide: "Sakrij",
							done: "Gotovo",
							"type-your-text-here": "UpiÅ¡ite svoj tekst ovdje...",
						},
						cs: {
							feedback: "ZpÄ›tnÃ¡ vazba",
							highlight: "ZvÃ½raznit",
							comment: "KomentÃ¡Å™",
							draw: "Kreslit",
							hide: "SkrÃ½t",
							done: "Hotovo",
							"type-your-text-here": "Zde napiÅ¡te svÅ¯j text...",
						},
						da: {
							feedback: "Feedback",
							highlight: "FremhÃ¦v",
							comment: "Kommentar",
							draw: "Tegn",
							hide: "Skjul",
							done: "FÃ¦rdig",
							"type-your-text-here": "Skriv din tekst her...",
						},
						fi: {
							feedback: "Palaute",
							highlight: "Korosta",
							comment: "Kommentti",
							draw: "PiirrÃ¤",
							hide: "Piilota",
							done: "Valmis",
							"type-your-text-here": "Kirjoita tekstisi tÃ¤hÃ¤n...",
						},
						el: {
							feedback: "Î‘Î½Î±Ï„ÏÎ¿Ï†Î¿Î´ÏŒÏ„Î·ÏƒÎ·",
							highlight: "Î•Ï€Î¹ÏƒÎ®Î¼Î±Î½ÏƒÎ·",
							comment: "Î£Ï‡ÏŒÎ»Î¹Î¿",
							draw: "Î£Ï‡ÎµÎ´Î¯Î±ÏƒÎ·",
							hide: "Î‘Ï€ÏŒÎºÏÏ…ÏˆÎ·",
							done: "Î¤Î­Î»Î¿Ï‚",
							"type-your-text-here": "Î Î»Î·ÎºÏ„ÏÎ¿Î»Î¿Î³Î®ÏƒÏ„Îµ Ï„Î¿ ÎºÎµÎ¯Î¼ÎµÎ½ÏŒ ÏƒÎ±Ï‚ ÎµÎ´ÏŽ...",
						},
						hi: {
							feedback: "à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾",
							highlight: "à¤¹à¤¾à¤‡à¤²à¤¾à¤‡à¤Ÿ",
							comment: "à¤Ÿà¤¿à¤ªà¥à¤ªà¤£à¥€",
							draw: "à¤šà¤¿à¤¤à¥à¤° à¤¬à¤¨à¤¾à¤à¤‚",
							hide: "à¤›à¤¿à¤ªà¤¾à¤à¤‚",
							done: "à¤¹à¥‹ à¤—à¤¯à¤¾",
							"type-your-text-here": "à¤…à¤ªà¤¨à¤¾ à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ à¤¯à¤¹à¤¾à¤‚ à¤Ÿà¤¾à¤‡à¤ª à¤•à¤°à¥‡à¤‚...",
						},
						id: {
							feedback: "Umpan balik",
							highlight: "Sorot",
							comment: "Komentar",
							draw: "Gambar",
							hide: "Sembunyikan",
							done: "Selesai",
							"type-your-text-here": "Ketik teks Anda di sini...",
						},
						ja: {
							feedback: "ãƒ•ã‚£ãƒ¼ãƒ‰ãƒãƒƒã‚¯",
							highlight: "ãƒã‚¤ãƒ©ã‚¤ãƒˆ",
							comment: "ã‚³ãƒ¡ãƒ³ãƒˆ",
							draw: "æç”»",
							hide: "éžè¡¨ç¤º",
							done: "å®Œäº†",
							"type-your-text-here": "ã“ã“ã«ãƒ†ã‚­ã‚¹ãƒˆã‚’å…¥åŠ›ã—ã¦ãã ã•ã„...",
						},
						lv: {
							feedback: "Atsauksmes",
							highlight: "Izcelt",
							comment: "KomentÄrs",
							draw: "ZÄ«mÄ“t",
							hide: "SlÄ“pt",
							done: "Gatavs",
							"type-your-text-here": "Ievadiet savu tekstu Å¡eit...",
						},
						lt: {
							feedback: "Atsiliepimas",
							highlight: "ParyÅ¡kinti",
							comment: "Komentaras",
							draw: "PieÅ¡ti",
							hide: "SlÄ—pti",
							done: "Atlikta",
							"type-your-text-here": "Ä®veskite savo tekstÄ… Äia...",
						},
						ms: {
							feedback: "Maklum balas",
							highlight: "Sorot",
							comment: "Komen",
							draw: "Lukis",
							hide: "Sembunyi",
							done: "Selesai",
							"type-your-text-here": "Taip teks anda di sini...",
						},
						mn: {
							feedback: "Ð¡Ð°Ð½Ð°Ð» Ñ…Ò¯ÑÑÐ»Ñ‚",
							highlight: "Ð¢Ð¾Ð´Ñ€ÑƒÑƒÐ»Ð°Ñ…",
							comment: "Ð¡ÑÑ‚Ð³ÑÐ³Ð´ÑÐ»",
							draw: "Ð—ÑƒÑ€Ð°Ñ…",
							hide: "ÐÑƒÑƒÑ…",
							done: "Ð”ÑƒÑƒÑÑÐ°Ð½",
							"type-your-text-here": "Ð¢ÐµÐºÑÑ‚ÑÑ ÑÐ½Ð´ Ð±Ð¸Ñ‡Ð½Ñ Ò¯Ò¯...",
						},
						nb: {
							feedback: "Tilbakemelding",
							highlight: "Fremhev",
							comment: "Kommentar",
							draw: "Tegn",
							hide: "Skjul",
							done: "Ferdig",
							"type-your-text-here": "Skriv inn teksten din her...",
						},
						pl: {
							feedback: "Opinie",
							highlight: "PodÅ›wietl",
							comment: "Komentarz",
							draw: "Rysuj",
							hide: "Ukryj",
							done: "Gotowe",
							"type-your-text-here": "Wpisz swÃ³j tekst tutaj...",
						},
						ro: {
							feedback: "Feedback",
							highlight: "EvidenÈ›iazÄƒ",
							comment: "Comentariu",
							draw: "DeseneazÄƒ",
							hide: "Ascunde",
							done: "Gata",
							"type-your-text-here": "Scrie textul tÄƒu aici...",
						},
						sr: {
							feedback: "ÐŸÐ¾Ð²Ñ€Ð°Ñ‚Ð½Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ˜Ðµ",
							highlight: "Ð˜ÑÑ‚Ð°ÐºÐ½Ð¸",
							comment: "ÐšÐ¾Ð¼ÐµÐ½Ñ‚Ð°Ñ€",
							draw: "Ð¦Ñ€Ñ‚Ð°Ñ˜",
							hide: "Ð¡Ð°ÐºÑ€Ð¸Ñ˜",
							done: "Ð“Ð¾Ñ‚Ð¾Ð²Ð¾",
							"type-your-text-here": "Ð£Ð½ÐµÑÐ¸Ñ‚Ðµ ÑÐ²Ð¾Ñ˜ Ñ‚ÐµÐºÑÑ‚ Ð¾Ð²Ð´Ðµ...",
						},
						"zh-CN": {
							feedback: "åé¦ˆ",
							highlight: "é«˜äº®",
							comment: "è¯„è®º",
							draw: "ç»˜ç”»",
							hide: "éšè—",
							done: "å®Œæˆ",
							"type-your-text-here": "åœ¨æ­¤è¾“å…¥æ‚¨çš„æ–‡æœ¬...",
						},
						sl: {
							feedback: "Povratne informacije",
							highlight: "OznaÄi",
							comment: "Komentar",
							draw: "RiÅ¡i",
							hide: "Skrij",
							done: "KonÄano",
							"type-your-text-here": "Vnesite svoje besedilo tukaj...",
						},
						sw: {
							feedback: "Maoni",
							highlight: "Angazia",
							comment: "Maoni",
							draw: "Chora",
							hide: "Ficha",
							done: "Imekamilika",
							"type-your-text-here": "Andika maandishi yako hapa...",
						},
						sv: {
							feedback: "Ã…terkoppling",
							highlight: "Markera",
							comment: "Kommentar",
							draw: "Rita",
							hide: "DÃ¶lj",
							done: "Klar",
							"type-your-text-here": "Skriv din text hÃ¤r...",
						},
						th: {
							feedback: "à¸‚à¹‰à¸­à¹€à¸ªà¸™à¸­à¹à¸™à¸°",
							highlight: "à¹„à¸®à¹„à¸¥à¸•à¹Œ",
							comment: "à¸„à¸§à¸²à¸¡à¸„à¸´à¸”à¹€à¸«à¹‡à¸™",
							draw: "à¸§à¸²à¸”",
							hide: "à¸‹à¹ˆà¸­à¸™",
							done: "à¹€à¸ªà¸£à¹‡à¸ˆà¸ªà¸´à¹‰à¸™",
							"type-your-text-here": "à¸žà¸´à¸¡à¸žà¹Œà¸‚à¹‰à¸­à¸„à¸§à¸²à¸¡à¸‚à¸­à¸‡à¸„à¸¸à¸“à¸—à¸µà¹ˆà¸™à¸µà¹ˆ...",
						},
						"zh-TW": {
							feedback: "åé¥‹",
							highlight: "çªå‡ºé¡¯ç¤º",
							comment: "è©•è«–",
							draw: "ç¹ªç•«",
							hide: "éš±è—",
							done: "å®Œæˆ",
							"type-your-text-here": "åœ¨æ­¤è¼¸å…¥æ‚¨çš„æ–‡å­—...",
						},
						tr: {
							feedback: "Geri bildirim",
							highlight: "Vurgula",
							comment: "Yorum",
							draw: "Ã‡iz",
							hide: "Gizle",
							done: "Tamam",
							"type-your-text-here": "Metninizi buraya yazÄ±n...",
						},
						vi: {
							feedback: "Pháº£n há»“i",
							highlight: "ÄÃ¡nh dáº¥u",
							comment: "BÃ¬nh luáº­n",
							draw: "Váº½",
							hide: "áº¨n",
							done: "Xong",
							"type-your-text-here": "Nháº­p vÄƒn báº£n cá»§a báº¡n táº¡i Ä‘Ã¢y...",
						},
					};
					function a(e, t) {
						return n[t] && n[t][e] ? n[t][e] : n.en[e] ? n.en[e] : e;
					}
				},
			},
			n = {};
		function a(e) {
			let t = n[e];
			if (void 0 !== t) return t.exports;
			let r = (n[e] = { exports: {} });
			return i[e](r, r.exports, a), r.exports;
		}
		(a.m = i),
			(a.n = e => {
				let t = e && e.__esModule ? () => e.default : () => e;
				return a.d(t, { a: t }), t;
			}),
			(a.d = (e, t) => {
				for (let i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
			}),
			(a.f = {}),
			(a.e = e => Promise.all(Object.keys(a.f).reduce((t, i) => (a.f[i](e, t), t), []))),
			(a.u = e => ({ 92: "snapsvg", 154: "screenshot", 682: "pako", 737: "html-to-canvas" })[e] + "." + a.h() + ".chunk.js"),
			(a.miniCssF = e => "screenshot-" + e + "." + a.h() + ".css"),
			(a.h = () => "4fa0f560d23b36a47c90"),
			(a.g = (function () {
				if ("object" == typeof globalThis) return globalThis;
				try {
					return this || new Function("return this")();
				} catch (e) {
					if ("object" == typeof window) return window;
				}
			})()),
			(a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
			(e = {}),
			(t = "FeaturebaseSDK:"),
			(a.l = (i, n, r, s) => {
				if (e[i]) e[i].push(n);
				else {
					let o, l;
					if (void 0 !== r)
						for (let d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
							let u = d[c];
							if (u.getAttribute("src") == i || u.getAttribute("data-webpack") == t + r) {
								o = u;
								break;
							}
						}
					o ||
						((l = !0),
						((o = document.createElement("script")).charset = "utf-8"),
						(o.timeout = 120),
						a.nc && o.setAttribute("nonce", a.nc),
						o.setAttribute("data-webpack", t + r),
						(o.src = i)),
						(e[i] = [n]);
					var h = (t, n) => {
							(o.onerror = o.onload = null), clearTimeout(f);
							let a = e[i];
							if ((delete e[i], o.parentNode && o.parentNode.removeChild(o), a && a.forEach(e => e(n)), t)) return t(n);
						},
						f = setTimeout(h.bind(null, void 0, { type: "timeout", target: o }), 12e4);
					(o.onerror = h.bind(null, o.onerror)), (o.onload = h.bind(null, o.onload)), l && document.head.appendChild(o);
				}
			}),
			(a.r = e => {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			(() => {
				let e;
				a.g.importScripts && (e = a.g.location + "");
				let t = a.g.document;
				if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
					let i = t.getElementsByTagName("script");
					if (i.length) for (let n = i.length - 1; n > -1 && !e; ) e = i[n--].src;
				}
				if (!e) throw new Error("Automatic publicPath is not supported in this browser");
				(e = e
					.replace(/#.*$/, "")
					.replace(/\?.*$/, "")
					.replace(/\/[^\/]+$/, "/")),
					(a.p = e);
			})(),
			(() => {
				if ("undefined" != typeof document) {
					let e = e =>
							new Promise((t, i) => {
								let n = a.miniCssF(e),
									r = a.p + n;
								if (
									((e, t) => {
										for (var i = document.getElementsByTagName("link"), n = 0; n < i.length; n++) {
											var a = (s = i[n]).getAttribute("data-href") || s.getAttribute("href");
											if ("stylesheet" === s.rel && (a === e || a === t)) return s;
										}
										let r = document.getElementsByTagName("style");
										for (n = 0; n < r.length; n++) {
											var s;
											if ((a = (s = r[n]).getAttribute("data-href")) === e || a === t) return s;
										}
									})(n, r)
								)
									return t();
								((e, t, i, n, r) => {
									let s = document.createElement("link");
									(s.rel = "stylesheet"),
										(s.type = "text/css"),
										a.nc && (s.nonce = a.nc),
										(s.onerror = s.onload =
											i => {
												if (((s.onerror = s.onload = null), "load" === i.type)) n();
												else {
													let a = i && i.type,
														o = (i && i.target && i.target.href) || t,
														l = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + o + ")");
													(l.name = "ChunkLoadError"),
														(l.code = "CSS_CHUNK_LOAD_FAILED"),
														(l.type = a),
														(l.request = o),
														s.parentNode && s.parentNode.removeChild(s),
														r(l);
												}
											}),
										(s.href = t),
										i ? i.parentNode.insertBefore(s, i.nextSibling) : document.head.appendChild(s);
								})(e, r, null, t, i);
							}),
						t = { 630: 0 };
					a.f.miniCss = (i, n) => {
						t[i]
							? n.push(t[i])
							: 0 !== t[i] &&
								{ 154: 1 }[i] &&
								n.push(
									(t[i] = e(i).then(
										() => {
											t[i] = 0;
										},
										e => {
											throw (delete t[i], e);
										},
									)),
								);
					};
				}
			})(),
			(() => {
				let e = { 630: 0 };
				a.f.j = (t, i) => {
					let n = a.o(e, t) ? e[t] : void 0;
					if (0 !== n)
						if (n) i.push(n[2]);
						else {
							let r = new Promise((i, a) => (n = e[t] = [i, a]));
							i.push((n[2] = r));
							let s = a.p + a.u(t),
								o = new Error();
							a.l(
								s,
								i => {
									if (a.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
										let r = i && ("load" === i.type ? "missing" : i.type),
											s = i && i.target && i.target.src;
										(o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + s + ")"),
											(o.name = "ChunkLoadError"),
											(o.type = r),
											(o.request = s),
											n[1](o);
									}
								},
								"chunk-" + t,
								t,
							);
						}
				};
				let t = (t, i) => {
						let n,
							r,
							[s, o, l] = i,
							d = 0;
						if (s.some(t => 0 !== e[t])) {
							for (n in o) a.o(o, n) && (a.m[n] = o[n]);
							if (l) l(a);
						}
						for (t && t(i); d < s.length; d++) (r = s[d]), a.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
					},
					i = (this.webpackChunkFeaturebaseSDK = this.webpackChunkFeaturebaseSDK || []);
				i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
			})();
		let r = {};
		return (
			(() => {
				"use strict";
				let e, t;
				a.r(r),
					(function (e) {
						(e.assertEqual = e => e),
							(e.assertIs = function (e) {}),
							(e.assertNever = function (e) {
								throw new Error();
							}),
							(e.arrayToEnum = e => {
								const t = {};
								for (const i of e) t[i] = i;
								return t;
							}),
							(e.getValidEnumValues = t => {
								const i = e.objectKeys(t).filter(e => "number" != typeof t[t[e]]),
									n = {};
								for (const e of i) n[e] = t[e];
								return e.objectValues(n);
							}),
							(e.objectValues = t =>
								e.objectKeys(t).map(function (e) {
									return t[e];
								})),
							(e.objectKeys =
								"function" == typeof Object.keys
									? e => Object.keys(e)
									: e => {
											const t = [];
											for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && t.push(i);
											return t;
										}),
							(e.find = (e, t) => {
								for (const i of e) if (t(i)) return i;
							}),
							(e.isInteger =
								"function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e),
							(e.joinValues = function (e, t = " | ") {
								return e.map(e => ("string" == typeof e ? `'${e}'` : e)).join(t);
							}),
							(e.jsonStringifyReplacer = (e, t) => ("bigint" == typeof t ? t.toString() : t));
					})(e || (e = {})),
					(function (e) {
						e.mergeShapes = (e, t) => ({ ...e, ...t });
					})(t || (t = {}));
				const i = e.arrayToEnum([
						"string",
						"nan",
						"number",
						"integer",
						"float",
						"boolean",
						"date",
						"bigint",
						"symbol",
						"function",
						"undefined",
						"null",
						"array",
						"object",
						"unknown",
						"promise",
						"void",
						"never",
						"map",
						"set",
					]),
					n = e => {
						switch (typeof e) {
							case "undefined":
								return i.undefined;
							case "string":
								return i.string;
							case "number":
								return isNaN(e) ? i.nan : i.number;
							case "boolean":
								return i.boolean;
							case "function":
								return i.function;
							case "bigint":
								return i.bigint;
							case "symbol":
								return i.symbol;
							case "object":
								return Array.isArray(e)
									? i.array
									: null === e
										? i.null
										: e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch
											? i.promise
											: "undefined" != typeof Map && e instanceof Map
												? i.map
												: "undefined" != typeof Set && e instanceof Set
													? i.set
													: "undefined" != typeof Date && e instanceof Date
														? i.date
														: i.object;
							default:
								return i.unknown;
						}
					},
					s = e.arrayToEnum([
						"invalid_type",
						"invalid_literal",
						"custom",
						"invalid_union",
						"invalid_union_discriminator",
						"invalid_enum_value",
						"unrecognized_keys",
						"invalid_arguments",
						"invalid_return_type",
						"invalid_date",
						"invalid_string",
						"too_small",
						"too_big",
						"invalid_intersection_types",
						"not_multiple_of",
						"not_finite",
					]);
				class o extends Error {
					constructor(e) {
						super(),
							(this.issues = []),
							(this.addIssue = e => {
								this.issues = [...this.issues, e];
							}),
							(this.addIssues = (e = []) => {
								this.issues = [...this.issues, ...e];
							});
						const t = new.target.prototype;
						Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t), (this.name = "ZodError"), (this.issues = e);
					}
					get errors() {
						return this.issues;
					}
					format(e) {
						const t =
								e ||
								function (e) {
									return e.message;
								},
							i = { _errors: [] },
							n = e => {
								for (const a of e.issues)
									if ("invalid_union" === a.code) a.unionErrors.map(n);
									else if ("invalid_return_type" === a.code) n(a.returnTypeError);
									else if ("invalid_arguments" === a.code) n(a.argumentsError);
									else if (0 === a.path.length) i._errors.push(t(a));
									else {
										let e = i,
											n = 0;
										for (; n < a.path.length; ) {
											const i = a.path[n];
											n === a.path.length - 1 ? ((e[i] = e[i] || { _errors: [] }), e[i]._errors.push(t(a))) : (e[i] = e[i] || { _errors: [] }),
												(e = e[i]),
												n++;
										}
									}
							};
						return n(this), i;
					}
					static assert(e) {
						if (!(e instanceof o)) throw new Error(`Not a ZodError: ${e}`);
					}
					toString() {
						return this.message;
					}
					get message() {
						return JSON.stringify(this.issues, e.jsonStringifyReplacer, 2);
					}
					get isEmpty() {
						return 0 === this.issues.length;
					}
					flatten(e = e => e.message) {
						const t = {},
							i = [];
						for (const n of this.issues) n.path.length > 0 ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n))) : i.push(e(n));
						return { formErrors: i, fieldErrors: t };
					}
					get formErrors() {
						return this.flatten();
					}
				}
				o.create = e => new o(e);
				const l = (t, n) => {
					let a;
					switch (t.code) {
						case s.invalid_type:
							a = t.received === i.undefined ? "Required" : `Expected ${t.expected}, received ${t.received}`;
							break;
						case s.invalid_literal:
							a = `Invalid literal value, expected ${JSON.stringify(t.expected, e.jsonStringifyReplacer)}`;
							break;
						case s.unrecognized_keys:
							a = `Unrecognized key(s) in object: ${e.joinValues(t.keys, ", ")}`;
							break;
						case s.invalid_union:
							a = "Invalid input";
							break;
						case s.invalid_union_discriminator:
							a = `Invalid discriminator value. Expected ${e.joinValues(t.options)}`;
							break;
						case s.invalid_enum_value:
							a = `Invalid enum value. Expected ${e.joinValues(t.options)}, received '${t.received}'`;
							break;
						case s.invalid_arguments:
							a = "Invalid function arguments";
							break;
						case s.invalid_return_type:
							a = "Invalid function return type";
							break;
						case s.invalid_date:
							a = "Invalid date";
							break;
						case s.invalid_string:
							"object" == typeof t.validation
								? "includes" in t.validation
									? ((a = `Invalid input: must include "${t.validation.includes}"`),
										"number" == typeof t.validation.position &&
											(a = `${a} at one or more positions greater than or equal to ${t.validation.position}`))
									: "startsWith" in t.validation
										? (a = `Invalid input: must start with "${t.validation.startsWith}"`)
										: "endsWith" in t.validation
											? (a = `Invalid input: must end with "${t.validation.endsWith}"`)
											: e.assertNever(t.validation)
								: (a = "regex" !== t.validation ? `Invalid ${t.validation}` : "Invalid");
							break;
						case s.too_small:
							a =
								"array" === t.type
									? `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)`
									: "string" === t.type
										? `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)`
										: "number" === t.type
											? `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`
											: "date" === t.type
												? `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}`
												: "Invalid input";
							break;
						case s.too_big:
							a =
								"array" === t.type
									? `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)`
									: "string" === t.type
										? `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)`
										: "number" === t.type
											? `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`
											: "bigint" === t.type
												? `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`
												: "date" === t.type
													? `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}`
													: "Invalid input";
							break;
						case s.custom:
							a = "Invalid input";
							break;
						case s.invalid_intersection_types:
							a = "Intersection results could not be merged";
							break;
						case s.not_multiple_of:
							a = `Number must be a multiple of ${t.multipleOf}`;
							break;
						case s.not_finite:
							a = "Number must be finite";
							break;
						default:
							(a = n.defaultError), e.assertNever(t);
					}
					return { message: a };
				};
				let d = l;
				function c() {
					return d;
				}
				const u = e => {
					const { data: t, path: i, errorMaps: n, issueData: a } = e,
						r = [...i, ...(a.path || [])],
						s = { ...a, path: r };
					if (void 0 !== a.message) return { ...a, path: r, message: a.message };
					let o = "";
					const l = n
						.filter(e => !!e)
						.slice()
						.reverse();
					for (const e of l) o = e(s, { data: t, defaultError: o }).message;
					return { ...a, path: r, message: o };
				};
				function h(e, t) {
					const i = c(),
						n = u({
							issueData: t,
							data: e.data,
							path: e.path,
							errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, i, i === l ? void 0 : l].filter(e => !!e),
						});
					e.common.issues.push(n);
				}
				class f {
					constructor() {
						this.value = "valid";
					}
					dirty() {
						"valid" === this.value && (this.value = "dirty");
					}
					abort() {
						"aborted" !== this.value && (this.value = "aborted");
					}
					static mergeArray(e, t) {
						const i = [];
						for (const n of t) {
							if ("aborted" === n.status) return p;
							"dirty" === n.status && e.dirty(), i.push(n.value);
						}
						return { status: e.value, value: i };
					}
					static async mergeObjectAsync(e, t) {
						const i = [];
						for (const e of t) {
							const t = await e.key,
								n = await e.value;
							i.push({ key: t, value: n });
						}
						return f.mergeObjectSync(e, i);
					}
					static mergeObjectSync(e, t) {
						const i = {};
						for (const n of t) {
							const { key: t, value: a } = n;
							if ("aborted" === t.status) return p;
							if ("aborted" === a.status) return p;
							"dirty" === t.status && e.dirty(),
								"dirty" === a.status && e.dirty(),
								"__proto__" === t.value || (void 0 === a.value && !n.alwaysSet) || (i[t.value] = a.value);
						}
						return { status: e.value, value: i };
					}
				}
				const p = Object.freeze({ status: "aborted" }),
					m = e => ({ status: "dirty", value: e }),
					g = e => ({ status: "valid", value: e }),
					v = e => "aborted" === e.status,
					y = e => "dirty" === e.status,
					b = e => "valid" === e.status,
					w = e => "undefined" != typeof Promise && e instanceof Promise;
				function k(e, t, i, n) {
					if ("a" === i && !n) throw new TypeError("Private accessor was defined without a getter");
					if ("function" == typeof t ? e !== t || !n : !t.has(e))
						throw new TypeError("Cannot read private member from an object whose class did not declare it");
					return "m" === i ? n : "a" === i ? n.call(e) : n ? n.value : t.get(e);
				}
				function _(e, t, i, n, a) {
					if ("m" === n) throw new TypeError("Private method is not writable");
					if ("a" === n && !a) throw new TypeError("Private accessor was defined without a setter");
					if ("function" == typeof t ? e !== t || !a : !t.has(e))
						throw new TypeError("Cannot write private member to an object whose class did not declare it");
					return "a" === n ? a.call(e, i) : a ? (a.value = i) : t.set(e, i), i;
				}
				let x, E, S;
				"function" == typeof SuppressedError && SuppressedError,
					(function (e) {
						(e.errToObj = e => ("string" == typeof e ? { message: e } : e || {})),
							(e.toString = e => ("string" == typeof e ? e : null == e ? void 0 : e.message));
					})(x || (x = {}));
				class T {
					constructor(e, t, i, n) {
						(this._cachedPath = []), (this.parent = e), (this.data = t), (this._path = i), (this._key = n);
					}
					get path() {
						return (
							this._cachedPath.length ||
								(this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
							this._cachedPath
						);
					}
				}
				const C = (e, t) => {
					if (b(t)) return { success: !0, data: t.value };
					if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
					return {
						success: !1,
						get error() {
							if (this._error) return this._error;
							const t = new o(e.common.issues);
							return (this._error = t), this._error;
						},
					};
				};
				function j(e) {
					if (!e) return {};
					const { errorMap: t, invalid_type_error: i, required_error: n, description: a } = e;
					if (t && (i || n)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
					if (t) return { errorMap: t, description: a };
					return {
						errorMap: (t, a) => {
							let r, s;
							const { message: o } = e;
							return "invalid_enum_value" === t.code
								? { message: null != o ? o : a.defaultError }
								: void 0 === a.data
									? { message: null !== (r = null != o ? o : n) && void 0 !== r ? r : a.defaultError }
									: "invalid_type" !== t.code
										? { message: a.defaultError }
										: { message: null !== (s = null != o ? o : i) && void 0 !== s ? s : a.defaultError };
						},
						description: a,
					};
				}
				class I {
					constructor(e) {
						(this.spa = this.safeParseAsync),
							(this._def = e),
							(this.parse = this.parse.bind(this)),
							(this.safeParse = this.safeParse.bind(this)),
							(this.parseAsync = this.parseAsync.bind(this)),
							(this.safeParseAsync = this.safeParseAsync.bind(this)),
							(this.spa = this.spa.bind(this)),
							(this.refine = this.refine.bind(this)),
							(this.refinement = this.refinement.bind(this)),
							(this.superRefine = this.superRefine.bind(this)),
							(this.optional = this.optional.bind(this)),
							(this.nullable = this.nullable.bind(this)),
							(this.nullish = this.nullish.bind(this)),
							(this.array = this.array.bind(this)),
							(this.promise = this.promise.bind(this)),
							(this.or = this.or.bind(this)),
							(this.and = this.and.bind(this)),
							(this.transform = this.transform.bind(this)),
							(this.brand = this.brand.bind(this)),
							(this.default = this.default.bind(this)),
							(this.catch = this.catch.bind(this)),
							(this.describe = this.describe.bind(this)),
							(this.pipe = this.pipe.bind(this)),
							(this.readonly = this.readonly.bind(this)),
							(this.isNullable = this.isNullable.bind(this)),
							(this.isOptional = this.isOptional.bind(this));
					}
					get description() {
						return this._def.description;
					}
					_getType(e) {
						return n(e.data);
					}
					_getOrReturnCtx(e, t) {
						return (
							t || {
								common: e.parent.common,
								data: e.data,
								parsedType: n(e.data),
								schemaErrorMap: this._def.errorMap,
								path: e.path,
								parent: e.parent,
							}
						);
					}
					_processInputParams(e) {
						return {
							status: new f(),
							ctx: {
								common: e.parent.common,
								data: e.data,
								parsedType: n(e.data),
								schemaErrorMap: this._def.errorMap,
								path: e.path,
								parent: e.parent,
							},
						};
					}
					_parseSync(e) {
						const t = this._parse(e);
						if (w(t)) throw new Error("Synchronous parse encountered promise.");
						return t;
					}
					_parseAsync(e) {
						const t = this._parse(e);
						return Promise.resolve(t);
					}
					parse(e, t) {
						const i = this.safeParse(e, t);
						if (i.success) return i.data;
						throw i.error;
					}
					safeParse(e, t) {
						let i;
						const a = {
								common: {
									issues: [],
									async: null !== (i = null == t ? void 0 : t.async) && void 0 !== i && i,
									contextualErrorMap: null == t ? void 0 : t.errorMap,
								},
								path: (null == t ? void 0 : t.path) || [],
								schemaErrorMap: this._def.errorMap,
								parent: null,
								data: e,
								parsedType: n(e),
							},
							r = this._parseSync({ data: e, path: a.path, parent: a });
						return C(a, r);
					}
					async parseAsync(e, t) {
						const i = await this.safeParseAsync(e, t);
						if (i.success) return i.data;
						throw i.error;
					}
					async safeParseAsync(e, t) {
						const i = {
								common: { issues: [], contextualErrorMap: null == t ? void 0 : t.errorMap, async: !0 },
								path: (null == t ? void 0 : t.path) || [],
								schemaErrorMap: this._def.errorMap,
								parent: null,
								data: e,
								parsedType: n(e),
							},
							a = this._parse({ data: e, path: i.path, parent: i }),
							r = await (w(a) ? a : Promise.resolve(a));
						return C(i, r);
					}
					refine(e, t) {
						const i = e => ("string" == typeof t || void 0 === t ? { message: t } : "function" == typeof t ? t(e) : t);
						return this._refinement((t, n) => {
							const a = e(t),
								r = () => n.addIssue({ code: s.custom, ...i(t) });
							return "undefined" != typeof Promise && a instanceof Promise ? a.then(e => !!e || (r(), !1)) : !!a || (r(), !1);
						});
					}
					refinement(e, t) {
						return this._refinement((i, n) => !!e(i) || (n.addIssue("function" == typeof t ? t(i, n) : t), !1));
					}
					_refinement(e) {
						return new Ee({ schema: this, typeName: Re.ZodEffects, effect: { type: "refinement", refinement: e } });
					}
					superRefine(e) {
						return this._refinement(e);
					}
					optional() {
						return Se.create(this, this._def);
					}
					nullable() {
						return Te.create(this, this._def);
					}
					nullish() {
						return this.nullable().optional();
					}
					array() {
						return re.create(this, this._def);
					}
					promise() {
						return xe.create(this, this._def);
					}
					or(e) {
						return le.create([this, e], this._def);
					}
					and(e) {
						return he.create(this, e, this._def);
					}
					transform(e) {
						return new Ee({ ...j(this._def), schema: this, typeName: Re.ZodEffects, effect: { type: "transform", transform: e } });
					}
					default(e) {
						const t = "function" == typeof e ? e : () => e;
						return new Ce({ ...j(this._def), innerType: this, defaultValue: t, typeName: Re.ZodDefault });
					}
					brand() {
						return new Oe({ typeName: Re.ZodBranded, type: this, ...j(this._def) });
					}
					catch(e) {
						const t = "function" == typeof e ? e : () => e;
						return new je({ ...j(this._def), innerType: this, catchValue: t, typeName: Re.ZodCatch });
					}
					describe(e) {
						return new (0, this.constructor)({ ...this._def, description: e });
					}
					pipe(e) {
						return Pe.create(this, e);
					}
					readonly() {
						return Le.create(this);
					}
					isOptional() {
						return this.safeParse(void 0).success;
					}
					isNullable() {
						return this.safeParse(null).success;
					}
				}
				const A = /^c[^\s-]{8,}$/i,
					O = /^[0-9a-z]+$/,
					P = /^[0-9A-HJKMNP-TV-Z]{26}$/,
					L = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
					z = /^[a-z0-9_-]{21}$/i,
					F =
						/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
					R = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
				let W;
				const N = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
					Z =
						/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
					M = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
					$ =
						"((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
					D = new RegExp(`^${$}$`);
				function B(e) {
					let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
					return e.precision ? (t = `${t}\\.\\d{${e.precision}}`) : null == e.precision && (t = `${t}(\\.\\d+)?`), t;
				}
				function U(e) {
					let t = `${$}T${B(e)}`;
					const i = [];
					return i.push(e.local ? "Z?" : "Z"), e.offset && i.push("([+-]\\d{2}:?\\d{2})"), (t = `${t}(${i.join("|")})`), new RegExp(`^${t}$`);
				}
				function K(e, t) {
					return !(("v4" !== t && t) || !N.test(e)) || !(("v6" !== t && t) || !Z.test(e));
				}
				class V extends I {
					_parse(t) {
						this._def.coerce && (t.data = String(t.data));
						if (this._getType(t) !== i.string) {
							const e = this._getOrReturnCtx(t);
							return h(e, { code: s.invalid_type, expected: i.string, received: e.parsedType }), p;
						}
						const n = new f();
						let a;
						for (const i of this._def.checks)
							if ("min" === i.kind)
								t.data.length < i.value &&
									((a = this._getOrReturnCtx(t, a)),
									h(a, { code: s.too_small, minimum: i.value, type: "string", inclusive: !0, exact: !1, message: i.message }),
									n.dirty());
							else if ("max" === i.kind)
								t.data.length > i.value &&
									((a = this._getOrReturnCtx(t, a)),
									h(a, { code: s.too_big, maximum: i.value, type: "string", inclusive: !0, exact: !1, message: i.message }),
									n.dirty());
							else if ("length" === i.kind) {
								const e = t.data.length > i.value,
									r = t.data.length < i.value;
								(e || r) &&
									((a = this._getOrReturnCtx(t, a)),
									e
										? h(a, { code: s.too_big, maximum: i.value, type: "string", inclusive: !0, exact: !0, message: i.message })
										: r && h(a, { code: s.too_small, minimum: i.value, type: "string", inclusive: !0, exact: !0, message: i.message }),
									n.dirty());
							} else if ("email" === i.kind)
								R.test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { validation: "email", code: s.invalid_string, message: i.message }), n.dirty());
							else if ("emoji" === i.kind)
								W || (W = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")),
									W.test(t.data) ||
										((a = this._getOrReturnCtx(t, a)), h(a, { validation: "emoji", code: s.invalid_string, message: i.message }), n.dirty());
							else if ("uuid" === i.kind)
								L.test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { validation: "uuid", code: s.invalid_string, message: i.message }), n.dirty());
							else if ("nanoid" === i.kind)
								z.test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { validation: "nanoid", code: s.invalid_string, message: i.message }), n.dirty());
							else if ("cuid" === i.kind)
								A.test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { validation: "cuid", code: s.invalid_string, message: i.message }), n.dirty());
							else if ("cuid2" === i.kind)
								O.test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { validation: "cuid2", code: s.invalid_string, message: i.message }), n.dirty());
							else if ("ulid" === i.kind)
								P.test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { validation: "ulid", code: s.invalid_string, message: i.message }), n.dirty());
							else if ("url" === i.kind)
								try {
									new URL(t.data);
								} catch (e) {
									(a = this._getOrReturnCtx(t, a)), h(a, { validation: "url", code: s.invalid_string, message: i.message }), n.dirty();
								}
							else if ("regex" === i.kind) {
								i.regex.lastIndex = 0;
								i.regex.test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { validation: "regex", code: s.invalid_string, message: i.message }), n.dirty());
							} else if ("trim" === i.kind) t.data = t.data.trim();
							else if ("includes" === i.kind)
								t.data.includes(i.value, i.position) ||
									((a = this._getOrReturnCtx(t, a)),
									h(a, { code: s.invalid_string, validation: { includes: i.value, position: i.position }, message: i.message }),
									n.dirty());
							else if ("toLowerCase" === i.kind) t.data = t.data.toLowerCase();
							else if ("toUpperCase" === i.kind) t.data = t.data.toUpperCase();
							else if ("startsWith" === i.kind)
								t.data.startsWith(i.value) ||
									((a = this._getOrReturnCtx(t, a)),
									h(a, { code: s.invalid_string, validation: { startsWith: i.value }, message: i.message }),
									n.dirty());
							else if ("endsWith" === i.kind)
								t.data.endsWith(i.value) ||
									((a = this._getOrReturnCtx(t, a)),
									h(a, { code: s.invalid_string, validation: { endsWith: i.value }, message: i.message }),
									n.dirty());
							else if ("datetime" === i.kind) {
								U(i).test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { code: s.invalid_string, validation: "datetime", message: i.message }), n.dirty());
							} else if ("date" === i.kind) {
								D.test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { code: s.invalid_string, validation: "date", message: i.message }), n.dirty());
							} else if ("time" === i.kind) {
								new RegExp(`^${B(i)}$`).test(t.data) ||
									((a = this._getOrReturnCtx(t, a)), h(a, { code: s.invalid_string, validation: "time", message: i.message }), n.dirty());
							} else
								"duration" === i.kind
									? F.test(t.data) ||
										((a = this._getOrReturnCtx(t, a)), h(a, { validation: "duration", code: s.invalid_string, message: i.message }), n.dirty())
									: "ip" === i.kind
										? K(t.data, i.version) ||
											((a = this._getOrReturnCtx(t, a)), h(a, { validation: "ip", code: s.invalid_string, message: i.message }), n.dirty())
										: "base64" === i.kind
											? M.test(t.data) ||
												((a = this._getOrReturnCtx(t, a)), h(a, { validation: "base64", code: s.invalid_string, message: i.message }), n.dirty())
											: e.assertNever(i);
						return { status: n.value, value: t.data };
					}
					_regex(e, t, i) {
						return this.refinement(t => e.test(t), { validation: t, code: s.invalid_string, ...x.errToObj(i) });
					}
					_addCheck(e) {
						return new V({ ...this._def, checks: [...this._def.checks, e] });
					}
					email(e) {
						return this._addCheck({ kind: "email", ...x.errToObj(e) });
					}
					url(e) {
						return this._addCheck({ kind: "url", ...x.errToObj(e) });
					}
					emoji(e) {
						return this._addCheck({ kind: "emoji", ...x.errToObj(e) });
					}
					uuid(e) {
						return this._addCheck({ kind: "uuid", ...x.errToObj(e) });
					}
					nanoid(e) {
						return this._addCheck({ kind: "nanoid", ...x.errToObj(e) });
					}
					cuid(e) {
						return this._addCheck({ kind: "cuid", ...x.errToObj(e) });
					}
					cuid2(e) {
						return this._addCheck({ kind: "cuid2", ...x.errToObj(e) });
					}
					ulid(e) {
						return this._addCheck({ kind: "ulid", ...x.errToObj(e) });
					}
					base64(e) {
						return this._addCheck({ kind: "base64", ...x.errToObj(e) });
					}
					ip(e) {
						return this._addCheck({ kind: "ip", ...x.errToObj(e) });
					}
					datetime(e) {
						let t, i;
						return "string" == typeof e
							? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: e })
							: this._addCheck({
									kind: "datetime",
									precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
									offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
									local: null !== (i = null == e ? void 0 : e.local) && void 0 !== i && i,
									...x.errToObj(null == e ? void 0 : e.message),
								});
					}
					date(e) {
						return this._addCheck({ kind: "date", message: e });
					}
					time(e) {
						return "string" == typeof e
							? this._addCheck({ kind: "time", precision: null, message: e })
							: this._addCheck({
									kind: "time",
									precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
									...x.errToObj(null == e ? void 0 : e.message),
								});
					}
					duration(e) {
						return this._addCheck({ kind: "duration", ...x.errToObj(e) });
					}
					regex(e, t) {
						return this._addCheck({ kind: "regex", regex: e, ...x.errToObj(t) });
					}
					includes(e, t) {
						return this._addCheck({
							kind: "includes",
							value: e,
							position: null == t ? void 0 : t.position,
							...x.errToObj(null == t ? void 0 : t.message),
						});
					}
					startsWith(e, t) {
						return this._addCheck({ kind: "startsWith", value: e, ...x.errToObj(t) });
					}
					endsWith(e, t) {
						return this._addCheck({ kind: "endsWith", value: e, ...x.errToObj(t) });
					}
					min(e, t) {
						return this._addCheck({ kind: "min", value: e, ...x.errToObj(t) });
					}
					max(e, t) {
						return this._addCheck({ kind: "max", value: e, ...x.errToObj(t) });
					}
					length(e, t) {
						return this._addCheck({ kind: "length", value: e, ...x.errToObj(t) });
					}
					nonempty(e) {
						return this.min(1, x.errToObj(e));
					}
					trim() {
						return new V({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
					}
					toLowerCase() {
						return new V({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
					}
					toUpperCase() {
						return new V({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
					}
					get isDatetime() {
						return !!this._def.checks.find(e => "datetime" === e.kind);
					}
					get isDate() {
						return !!this._def.checks.find(e => "date" === e.kind);
					}
					get isTime() {
						return !!this._def.checks.find(e => "time" === e.kind);
					}
					get isDuration() {
						return !!this._def.checks.find(e => "duration" === e.kind);
					}
					get isEmail() {
						return !!this._def.checks.find(e => "email" === e.kind);
					}
					get isURL() {
						return !!this._def.checks.find(e => "url" === e.kind);
					}
					get isEmoji() {
						return !!this._def.checks.find(e => "emoji" === e.kind);
					}
					get isUUID() {
						return !!this._def.checks.find(e => "uuid" === e.kind);
					}
					get isNANOID() {
						return !!this._def.checks.find(e => "nanoid" === e.kind);
					}
					get isCUID() {
						return !!this._def.checks.find(e => "cuid" === e.kind);
					}
					get isCUID2() {
						return !!this._def.checks.find(e => "cuid2" === e.kind);
					}
					get isULID() {
						return !!this._def.checks.find(e => "ulid" === e.kind);
					}
					get isIP() {
						return !!this._def.checks.find(e => "ip" === e.kind);
					}
					get isBase64() {
						return !!this._def.checks.find(e => "base64" === e.kind);
					}
					get minLength() {
						let e = null;
						for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
						return e;
					}
					get maxLength() {
						let e = null;
						for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
						return e;
					}
				}
				function H(e, t) {
					const i = (e.toString().split(".")[1] || "").length,
						n = (t.toString().split(".")[1] || "").length,
						a = i > n ? i : n;
					return (parseInt(e.toFixed(a).replace(".", "")) % parseInt(t.toFixed(a).replace(".", ""))) / Math.pow(10, a);
				}
				V.create = e => {
					let t;
					return new V({ checks: [], typeName: Re.ZodString, coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t, ...j(e) });
				};
				class q extends I {
					constructor() {
						super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
					}
					_parse(t) {
						this._def.coerce && (t.data = Number(t.data));
						if (this._getType(t) !== i.number) {
							const e = this._getOrReturnCtx(t);
							return h(e, { code: s.invalid_type, expected: i.number, received: e.parsedType }), p;
						}
						let n;
						const a = new f();
						for (const i of this._def.checks)
							if ("int" === i.kind)
								e.isInteger(t.data) ||
									((n = this._getOrReturnCtx(t, n)),
									h(n, { code: s.invalid_type, expected: "integer", received: "float", message: i.message }),
									a.dirty());
							else if ("min" === i.kind) {
								(i.inclusive ? t.data < i.value : t.data <= i.value) &&
									((n = this._getOrReturnCtx(t, n)),
									h(n, { code: s.too_small, minimum: i.value, type: "number", inclusive: i.inclusive, exact: !1, message: i.message }),
									a.dirty());
							} else if ("max" === i.kind) {
								(i.inclusive ? t.data > i.value : t.data >= i.value) &&
									((n = this._getOrReturnCtx(t, n)),
									h(n, { code: s.too_big, maximum: i.value, type: "number", inclusive: i.inclusive, exact: !1, message: i.message }),
									a.dirty());
							} else
								"multipleOf" === i.kind
									? 0 !== H(t.data, i.value) &&
										((n = this._getOrReturnCtx(t, n)), h(n, { code: s.not_multiple_of, multipleOf: i.value, message: i.message }), a.dirty())
									: "finite" === i.kind
										? Number.isFinite(t.data) || ((n = this._getOrReturnCtx(t, n)), h(n, { code: s.not_finite, message: i.message }), a.dirty())
										: e.assertNever(i);
						return { status: a.value, value: t.data };
					}
					gte(e, t) {
						return this.setLimit("min", e, !0, x.toString(t));
					}
					gt(e, t) {
						return this.setLimit("min", e, !1, x.toString(t));
					}
					lte(e, t) {
						return this.setLimit("max", e, !0, x.toString(t));
					}
					lt(e, t) {
						return this.setLimit("max", e, !1, x.toString(t));
					}
					setLimit(e, t, i, n) {
						return new q({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: i, message: x.toString(n) }] });
					}
					_addCheck(e) {
						return new q({ ...this._def, checks: [...this._def.checks, e] });
					}
					int(e) {
						return this._addCheck({ kind: "int", message: x.toString(e) });
					}
					positive(e) {
						return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: x.toString(e) });
					}
					negative(e) {
						return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: x.toString(e) });
					}
					nonpositive(e) {
						return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: x.toString(e) });
					}
					nonnegative(e) {
						return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: x.toString(e) });
					}
					multipleOf(e, t) {
						return this._addCheck({ kind: "multipleOf", value: e, message: x.toString(t) });
					}
					finite(e) {
						return this._addCheck({ kind: "finite", message: x.toString(e) });
					}
					safe(e) {
						return this._addCheck({ kind: "min", inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: x.toString(e) })._addCheck({
							kind: "max",
							inclusive: !0,
							value: Number.MAX_SAFE_INTEGER,
							message: x.toString(e),
						});
					}
					get minValue() {
						let e = null;
						for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
						return e;
					}
					get maxValue() {
						let e = null;
						for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
						return e;
					}
					get isInt() {
						return !!this._def.checks.find(t => "int" === t.kind || ("multipleOf" === t.kind && e.isInteger(t.value)));
					}
					get isFinite() {
						let e = null,
							t = null;
						for (const i of this._def.checks) {
							if ("finite" === i.kind || "int" === i.kind || "multipleOf" === i.kind) return !0;
							"min" === i.kind ? (null === t || i.value > t) && (t = i.value) : "max" === i.kind && (null === e || i.value < e) && (e = i.value);
						}
						return Number.isFinite(t) && Number.isFinite(e);
					}
				}
				q.create = e => new q({ checks: [], typeName: Re.ZodNumber, coerce: (null == e ? void 0 : e.coerce) || !1, ...j(e) });
				class J extends I {
					constructor() {
						super(...arguments), (this.min = this.gte), (this.max = this.lte);
					}
					_parse(t) {
						this._def.coerce && (t.data = BigInt(t.data));
						if (this._getType(t) !== i.bigint) {
							const e = this._getOrReturnCtx(t);
							return h(e, { code: s.invalid_type, expected: i.bigint, received: e.parsedType }), p;
						}
						let n;
						const a = new f();
						for (const i of this._def.checks)
							if ("min" === i.kind) {
								(i.inclusive ? t.data < i.value : t.data <= i.value) &&
									((n = this._getOrReturnCtx(t, n)),
									h(n, { code: s.too_small, type: "bigint", minimum: i.value, inclusive: i.inclusive, message: i.message }),
									a.dirty());
							} else if ("max" === i.kind) {
								(i.inclusive ? t.data > i.value : t.data >= i.value) &&
									((n = this._getOrReturnCtx(t, n)),
									h(n, { code: s.too_big, type: "bigint", maximum: i.value, inclusive: i.inclusive, message: i.message }),
									a.dirty());
							} else
								"multipleOf" === i.kind
									? t.data % i.value !== BigInt(0) &&
										((n = this._getOrReturnCtx(t, n)), h(n, { code: s.not_multiple_of, multipleOf: i.value, message: i.message }), a.dirty())
									: e.assertNever(i);
						return { status: a.value, value: t.data };
					}
					gte(e, t) {
						return this.setLimit("min", e, !0, x.toString(t));
					}
					gt(e, t) {
						return this.setLimit("min", e, !1, x.toString(t));
					}
					lte(e, t) {
						return this.setLimit("max", e, !0, x.toString(t));
					}
					lt(e, t) {
						return this.setLimit("max", e, !1, x.toString(t));
					}
					setLimit(e, t, i, n) {
						return new J({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: i, message: x.toString(n) }] });
					}
					_addCheck(e) {
						return new J({ ...this._def, checks: [...this._def.checks, e] });
					}
					positive(e) {
						return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: x.toString(e) });
					}
					negative(e) {
						return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: x.toString(e) });
					}
					nonpositive(e) {
						return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: x.toString(e) });
					}
					nonnegative(e) {
						return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: x.toString(e) });
					}
					multipleOf(e, t) {
						return this._addCheck({ kind: "multipleOf", value: e, message: x.toString(t) });
					}
					get minValue() {
						let e = null;
						for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
						return e;
					}
					get maxValue() {
						let e = null;
						for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
						return e;
					}
				}
				J.create = e => {
					let t;
					return new J({ checks: [], typeName: Re.ZodBigInt, coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t, ...j(e) });
				};
				class G extends I {
					_parse(e) {
						this._def.coerce && (e.data = Boolean(e.data));
						if (this._getType(e) !== i.boolean) {
							const t = this._getOrReturnCtx(e);
							return h(t, { code: s.invalid_type, expected: i.boolean, received: t.parsedType }), p;
						}
						return g(e.data);
					}
				}
				G.create = e => new G({ typeName: Re.ZodBoolean, coerce: (null == e ? void 0 : e.coerce) || !1, ...j(e) });
				class X extends I {
					_parse(t) {
						this._def.coerce && (t.data = new Date(t.data));
						if (this._getType(t) !== i.date) {
							const e = this._getOrReturnCtx(t);
							return h(e, { code: s.invalid_type, expected: i.date, received: e.parsedType }), p;
						}
						if (isNaN(t.data.getTime())) {
							return h(this._getOrReturnCtx(t), { code: s.invalid_date }), p;
						}
						const n = new f();
						let a;
						for (const i of this._def.checks)
							"min" === i.kind
								? t.data.getTime() < i.value &&
									((a = this._getOrReturnCtx(t, a)),
									h(a, { code: s.too_small, message: i.message, inclusive: !0, exact: !1, minimum: i.value, type: "date" }),
									n.dirty())
								: "max" === i.kind
									? t.data.getTime() > i.value &&
										((a = this._getOrReturnCtx(t, a)),
										h(a, { code: s.too_big, message: i.message, inclusive: !0, exact: !1, maximum: i.value, type: "date" }),
										n.dirty())
									: e.assertNever(i);
						return { status: n.value, value: new Date(t.data.getTime()) };
					}
					_addCheck(e) {
						return new X({ ...this._def, checks: [...this._def.checks, e] });
					}
					min(e, t) {
						return this._addCheck({ kind: "min", value: e.getTime(), message: x.toString(t) });
					}
					max(e, t) {
						return this._addCheck({ kind: "max", value: e.getTime(), message: x.toString(t) });
					}
					get minDate() {
						let e = null;
						for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
						return null != e ? new Date(e) : null;
					}
					get maxDate() {
						let e = null;
						for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
						return null != e ? new Date(e) : null;
					}
				}
				X.create = e => new X({ checks: [], coerce: (null == e ? void 0 : e.coerce) || !1, typeName: Re.ZodDate, ...j(e) });
				class Y extends I {
					_parse(e) {
						if (this._getType(e) !== i.symbol) {
							const t = this._getOrReturnCtx(e);
							return h(t, { code: s.invalid_type, expected: i.symbol, received: t.parsedType }), p;
						}
						return g(e.data);
					}
				}
				Y.create = e => new Y({ typeName: Re.ZodSymbol, ...j(e) });
				class Q extends I {
					_parse(e) {
						if (this._getType(e) !== i.undefined) {
							const t = this._getOrReturnCtx(e);
							return h(t, { code: s.invalid_type, expected: i.undefined, received: t.parsedType }), p;
						}
						return g(e.data);
					}
				}
				Q.create = e => new Q({ typeName: Re.ZodUndefined, ...j(e) });
				class ee extends I {
					_parse(e) {
						if (this._getType(e) !== i.null) {
							const t = this._getOrReturnCtx(e);
							return h(t, { code: s.invalid_type, expected: i.null, received: t.parsedType }), p;
						}
						return g(e.data);
					}
				}
				ee.create = e => new ee({ typeName: Re.ZodNull, ...j(e) });
				class te extends I {
					constructor() {
						super(...arguments), (this._any = !0);
					}
					_parse(e) {
						return g(e.data);
					}
				}
				te.create = e => new te({ typeName: Re.ZodAny, ...j(e) });
				class ie extends I {
					constructor() {
						super(...arguments), (this._unknown = !0);
					}
					_parse(e) {
						return g(e.data);
					}
				}
				ie.create = e => new ie({ typeName: Re.ZodUnknown, ...j(e) });
				class ne extends I {
					_parse(e) {
						const t = this._getOrReturnCtx(e);
						return h(t, { code: s.invalid_type, expected: i.never, received: t.parsedType }), p;
					}
				}
				ne.create = e => new ne({ typeName: Re.ZodNever, ...j(e) });
				class ae extends I {
					_parse(e) {
						if (this._getType(e) !== i.undefined) {
							const t = this._getOrReturnCtx(e);
							return h(t, { code: s.invalid_type, expected: i.void, received: t.parsedType }), p;
						}
						return g(e.data);
					}
				}
				ae.create = e => new ae({ typeName: Re.ZodVoid, ...j(e) });
				class re extends I {
					_parse(e) {
						const { ctx: t, status: n } = this._processInputParams(e),
							a = this._def;
						if (t.parsedType !== i.array) return h(t, { code: s.invalid_type, expected: i.array, received: t.parsedType }), p;
						if (null !== a.exactLength) {
							const e = t.data.length > a.exactLength.value,
								i = t.data.length < a.exactLength.value;
							(e || i) &&
								(h(t, {
									code: e ? s.too_big : s.too_small,
									minimum: i ? a.exactLength.value : void 0,
									maximum: e ? a.exactLength.value : void 0,
									type: "array",
									inclusive: !0,
									exact: !0,
									message: a.exactLength.message,
								}),
								n.dirty());
						}
						if (
							(null !== a.minLength &&
								t.data.length < a.minLength.value &&
								(h(t, { code: s.too_small, minimum: a.minLength.value, type: "array", inclusive: !0, exact: !1, message: a.minLength.message }),
								n.dirty()),
							null !== a.maxLength &&
								t.data.length > a.maxLength.value &&
								(h(t, { code: s.too_big, maximum: a.maxLength.value, type: "array", inclusive: !0, exact: !1, message: a.maxLength.message }),
								n.dirty()),
							t.common.async)
						)
							return Promise.all([...t.data].map((e, i) => a.type._parseAsync(new T(t, e, t.path, i)))).then(e => f.mergeArray(n, e));
						const r = [...t.data].map((e, i) => a.type._parseSync(new T(t, e, t.path, i)));
						return f.mergeArray(n, r);
					}
					get element() {
						return this._def.type;
					}
					min(e, t) {
						return new re({ ...this._def, minLength: { value: e, message: x.toString(t) } });
					}
					max(e, t) {
						return new re({ ...this._def, maxLength: { value: e, message: x.toString(t) } });
					}
					length(e, t) {
						return new re({ ...this._def, exactLength: { value: e, message: x.toString(t) } });
					}
					nonempty(e) {
						return this.min(1, e);
					}
				}
				function se(e) {
					if (e instanceof oe) {
						const t = {};
						for (const i in e.shape) {
							const n = e.shape[i];
							t[i] = Se.create(se(n));
						}
						return new oe({ ...e._def, shape: () => t });
					}
					return e instanceof re
						? new re({ ...e._def, type: se(e.element) })
						: e instanceof Se
							? Se.create(se(e.unwrap()))
							: e instanceof Te
								? Te.create(se(e.unwrap()))
								: e instanceof fe
									? fe.create(e.items.map(e => se(e)))
									: e;
				}
				re.create = (e, t) => new re({ type: e, minLength: null, maxLength: null, exactLength: null, typeName: Re.ZodArray, ...j(t) });
				class oe extends I {
					constructor() {
						super(...arguments), (this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend);
					}
					_getCached() {
						if (null !== this._cached) return this._cached;
						const t = this._def.shape(),
							i = e.objectKeys(t);
						return (this._cached = { shape: t, keys: i });
					}
					_parse(e) {
						if (this._getType(e) !== i.object) {
							const t = this._getOrReturnCtx(e);
							return h(t, { code: s.invalid_type, expected: i.object, received: t.parsedType }), p;
						}
						const { status: t, ctx: n } = this._processInputParams(e),
							{ shape: a, keys: r } = this._getCached(),
							o = [];
						if (!(this._def.catchall instanceof ne && "strip" === this._def.unknownKeys)) for (const e in n.data) r.includes(e) || o.push(e);
						const l = [];
						for (const e of r) {
							const t = a[e],
								i = n.data[e];
							l.push({ key: { status: "valid", value: e }, value: t._parse(new T(n, i, n.path, e)), alwaysSet: e in n.data });
						}
						if (this._def.catchall instanceof ne) {
							const e = this._def.unknownKeys;
							if ("passthrough" === e)
								for (const e of o) l.push({ key: { status: "valid", value: e }, value: { status: "valid", value: n.data[e] } });
							else if ("strict" === e) o.length > 0 && (h(n, { code: s.unrecognized_keys, keys: o }), t.dirty());
							else if ("strip" !== e) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
						} else {
							const e = this._def.catchall;
							for (const t of o) {
								const i = n.data[t];
								l.push({ key: { status: "valid", value: t }, value: e._parse(new T(n, i, n.path, t)), alwaysSet: t in n.data });
							}
						}
						return n.common.async
							? Promise.resolve()
									.then(async () => {
										const e = [];
										for (const t of l) {
											const i = await t.key,
												n = await t.value;
											e.push({ key: i, value: n, alwaysSet: t.alwaysSet });
										}
										return e;
									})
									.then(e => f.mergeObjectSync(t, e))
							: f.mergeObjectSync(t, l);
					}
					get shape() {
						return this._def.shape();
					}
					strict(e) {
						return (
							x.errToObj,
							new oe({
								...this._def,
								unknownKeys: "strict",
								...(void 0 !== e
									? {
											errorMap: (t, i) => {
												let n, a, r, s;
												const o =
													null !== (r = null === (a = (n = this._def).errorMap) || void 0 === a ? void 0 : a.call(n, t, i).message) && void 0 !== r
														? r
														: i.defaultError;
												return "unrecognized_keys" === t.code
													? { message: null !== (s = x.errToObj(e).message) && void 0 !== s ? s : o }
													: { message: o };
											},
										}
									: {}),
							})
						);
					}
					strip() {
						return new oe({ ...this._def, unknownKeys: "strip" });
					}
					passthrough() {
						return new oe({ ...this._def, unknownKeys: "passthrough" });
					}
					extend(e) {
						return new oe({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
					}
					merge(e) {
						return new oe({
							unknownKeys: e._def.unknownKeys,
							catchall: e._def.catchall,
							shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
							typeName: Re.ZodObject,
						});
					}
					setKey(e, t) {
						return this.augment({ [e]: t });
					}
					catchall(e) {
						return new oe({ ...this._def, catchall: e });
					}
					pick(t) {
						const i = {};
						return (
							e.objectKeys(t).forEach(e => {
								t[e] && this.shape[e] && (i[e] = this.shape[e]);
							}),
							new oe({ ...this._def, shape: () => i })
						);
					}
					omit(t) {
						const i = {};
						return (
							e.objectKeys(this.shape).forEach(e => {
								t[e] || (i[e] = this.shape[e]);
							}),
							new oe({ ...this._def, shape: () => i })
						);
					}
					deepPartial() {
						return se(this);
					}
					partial(t) {
						const i = {};
						return (
							e.objectKeys(this.shape).forEach(e => {
								const n = this.shape[e];
								t && !t[e] ? (i[e] = n) : (i[e] = n.optional());
							}),
							new oe({ ...this._def, shape: () => i })
						);
					}
					required(t) {
						const i = {};
						return (
							e.objectKeys(this.shape).forEach(e => {
								if (t && !t[e]) i[e] = this.shape[e];
								else {
									let t = this.shape[e];
									for (; t instanceof Se; ) t = t._def.innerType;
									i[e] = t;
								}
							}),
							new oe({ ...this._def, shape: () => i })
						);
					}
					keyof() {
						return we(e.objectKeys(this.shape));
					}
				}
				(oe.create = (e, t) => new oe({ shape: () => e, unknownKeys: "strip", catchall: ne.create(), typeName: Re.ZodObject, ...j(t) })),
					(oe.strictCreate = (e, t) => new oe({ shape: () => e, unknownKeys: "strict", catchall: ne.create(), typeName: Re.ZodObject, ...j(t) })),
					(oe.lazycreate = (e, t) => new oe({ shape: e, unknownKeys: "strip", catchall: ne.create(), typeName: Re.ZodObject, ...j(t) }));
				class le extends I {
					_parse(e) {
						const { ctx: t } = this._processInputParams(e),
							i = this._def.options;
						if (t.common.async)
							return Promise.all(
								i.map(async e => {
									const i = { ...t, common: { ...t.common, issues: [] }, parent: null };
									return { result: await e._parseAsync({ data: t.data, path: t.path, parent: i }), ctx: i };
								}),
							).then(function (e) {
								for (const t of e) if ("valid" === t.result.status) return t.result;
								for (const i of e) if ("dirty" === i.result.status) return t.common.issues.push(...i.ctx.common.issues), i.result;
								const i = e.map(e => new o(e.ctx.common.issues));
								return h(t, { code: s.invalid_union, unionErrors: i }), p;
							});
						{
							let e;
							const n = [];
							for (const a of i) {
								const i = { ...t, common: { ...t.common, issues: [] }, parent: null },
									r = a._parseSync({ data: t.data, path: t.path, parent: i });
								if ("valid" === r.status) return r;
								"dirty" !== r.status || e || (e = { result: r, ctx: i }), i.common.issues.length && n.push(i.common.issues);
							}
							if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
							const a = n.map(e => new o(e));
							return h(t, { code: s.invalid_union, unionErrors: a }), p;
						}
					}
					get options() {
						return this._def.options;
					}
				}
				le.create = (e, t) => new le({ options: e, typeName: Re.ZodUnion, ...j(t) });
				const de = t =>
					t instanceof ye
						? de(t.schema)
						: t instanceof Ee
							? de(t.innerType())
							: t instanceof be
								? [t.value]
								: t instanceof ke
									? t.options
									: t instanceof _e
										? e.objectValues(t.enum)
										: t instanceof Ce
											? de(t._def.innerType)
											: t instanceof Q
												? [void 0]
												: t instanceof ee
													? [null]
													: t instanceof Se
														? [void 0, ...de(t.unwrap())]
														: t instanceof Te
															? [null, ...de(t.unwrap())]
															: t instanceof Oe || t instanceof Le
																? de(t.unwrap())
																: t instanceof je
																	? de(t._def.innerType)
																	: [];
				class ce extends I {
					_parse(e) {
						const { ctx: t } = this._processInputParams(e);
						if (t.parsedType !== i.object) return h(t, { code: s.invalid_type, expected: i.object, received: t.parsedType }), p;
						const n = this.discriminator,
							a = t.data[n],
							r = this.optionsMap.get(a);
						return r
							? t.common.async
								? r._parseAsync({ data: t.data, path: t.path, parent: t })
								: r._parseSync({ data: t.data, path: t.path, parent: t })
							: (h(t, { code: s.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [n] }), p);
					}
					get discriminator() {
						return this._def.discriminator;
					}
					get options() {
						return this._def.options;
					}
					get optionsMap() {
						return this._def.optionsMap;
					}
					static create(e, t, i) {
						const n = new Map();
						for (const i of t) {
							const t = de(i.shape[e]);
							if (!t.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
							for (const a of t) {
								if (n.has(a)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
								n.set(a, i);
							}
						}
						return new ce({ typeName: Re.ZodDiscriminatedUnion, discriminator: e, options: t, optionsMap: n, ...j(i) });
					}
				}
				function ue(t, a) {
					const r = n(t),
						s = n(a);
					if (t === a) return { valid: !0, data: t };
					if (r === i.object && s === i.object) {
						const i = e.objectKeys(a),
							n = e.objectKeys(t).filter(e => -1 !== i.indexOf(e)),
							r = { ...t, ...a };
						for (const e of n) {
							const i = ue(t[e], a[e]);
							if (!i.valid) return { valid: !1 };
							r[e] = i.data;
						}
						return { valid: !0, data: r };
					}
					if (r === i.array && s === i.array) {
						if (t.length !== a.length) return { valid: !1 };
						const e = [];
						for (let i = 0; i < t.length; i++) {
							const n = ue(t[i], a[i]);
							if (!n.valid) return { valid: !1 };
							e.push(n.data);
						}
						return { valid: !0, data: e };
					}
					return r === i.date && s === i.date && +t == +a ? { valid: !0, data: t } : { valid: !1 };
				}
				class he extends I {
					_parse(e) {
						const { status: t, ctx: i } = this._processInputParams(e),
							n = (e, n) => {
								if (v(e) || v(n)) return p;
								const a = ue(e.value, n.value);
								return a.valid
									? ((y(e) || y(n)) && t.dirty(), { status: t.value, value: a.data })
									: (h(i, { code: s.invalid_intersection_types }), p);
							};
						return i.common.async
							? Promise.all([
									this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
									this._def.right._parseAsync({ data: i.data, path: i.path, parent: i }),
								]).then(([e, t]) => n(e, t))
							: n(
									this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
									this._def.right._parseSync({ data: i.data, path: i.path, parent: i }),
								);
					}
				}
				he.create = (e, t, i) => new he({ left: e, right: t, typeName: Re.ZodIntersection, ...j(i) });
				class fe extends I {
					_parse(e) {
						const { status: t, ctx: n } = this._processInputParams(e);
						if (n.parsedType !== i.array) return h(n, { code: s.invalid_type, expected: i.array, received: n.parsedType }), p;
						if (n.data.length < this._def.items.length)
							return h(n, { code: s.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }), p;
						!this._def.rest &&
							n.data.length > this._def.items.length &&
							(h(n, { code: s.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }), t.dirty());
						const a = [...n.data]
							.map((e, t) => {
								const i = this._def.items[t] || this._def.rest;
								return i ? i._parse(new T(n, e, n.path, t)) : null;
							})
							.filter(e => !!e);
						return n.common.async ? Promise.all(a).then(e => f.mergeArray(t, e)) : f.mergeArray(t, a);
					}
					get items() {
						return this._def.items;
					}
					rest(e) {
						return new fe({ ...this._def, rest: e });
					}
				}
				fe.create = (e, t) => {
					if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
					return new fe({ items: e, typeName: Re.ZodTuple, rest: null, ...j(t) });
				};
				class pe extends I {
					get keySchema() {
						return this._def.keyType;
					}
					get valueSchema() {
						return this._def.valueType;
					}
					_parse(e) {
						const { status: t, ctx: n } = this._processInputParams(e);
						if (n.parsedType !== i.object) return h(n, { code: s.invalid_type, expected: i.object, received: n.parsedType }), p;
						const a = [],
							r = this._def.keyType,
							o = this._def.valueType;
						for (const e in n.data)
							a.push({ key: r._parse(new T(n, e, n.path, e)), value: o._parse(new T(n, n.data[e], n.path, e)), alwaysSet: e in n.data });
						return n.common.async ? f.mergeObjectAsync(t, a) : f.mergeObjectSync(t, a);
					}
					get element() {
						return this._def.valueType;
					}
					static create(e, t, i) {
						return new pe(
							t instanceof I
								? { keyType: e, valueType: t, typeName: Re.ZodRecord, ...j(i) }
								: { keyType: V.create(), valueType: e, typeName: Re.ZodRecord, ...j(t) },
						);
					}
				}
				class me extends I {
					get keySchema() {
						return this._def.keyType;
					}
					get valueSchema() {
						return this._def.valueType;
					}
					_parse(e) {
						const { status: t, ctx: n } = this._processInputParams(e);
						if (n.parsedType !== i.map) return h(n, { code: s.invalid_type, expected: i.map, received: n.parsedType }), p;
						const a = this._def.keyType,
							r = this._def.valueType,
							o = [...n.data.entries()].map(([e, t], i) => ({
								key: a._parse(new T(n, e, n.path, [i, "key"])),
								value: r._parse(new T(n, t, n.path, [i, "value"])),
							}));
						if (n.common.async) {
							const e = new Map();
							return Promise.resolve().then(async () => {
								for (const i of o) {
									const n = await i.key,
										a = await i.value;
									if ("aborted" === n.status || "aborted" === a.status) return p;
									("dirty" !== n.status && "dirty" !== a.status) || t.dirty(), e.set(n.value, a.value);
								}
								return { status: t.value, value: e };
							});
						}
						{
							const e = new Map();
							for (const i of o) {
								const n = i.key,
									a = i.value;
								if ("aborted" === n.status || "aborted" === a.status) return p;
								("dirty" !== n.status && "dirty" !== a.status) || t.dirty(), e.set(n.value, a.value);
							}
							return { status: t.value, value: e };
						}
					}
				}
				me.create = (e, t, i) => new me({ valueType: t, keyType: e, typeName: Re.ZodMap, ...j(i) });
				class ge extends I {
					_parse(e) {
						const { status: t, ctx: n } = this._processInputParams(e);
						if (n.parsedType !== i.set) return h(n, { code: s.invalid_type, expected: i.set, received: n.parsedType }), p;
						const a = this._def;
						null !== a.minSize &&
							n.data.size < a.minSize.value &&
							(h(n, { code: s.too_small, minimum: a.minSize.value, type: "set", inclusive: !0, exact: !1, message: a.minSize.message }), t.dirty()),
							null !== a.maxSize &&
								n.data.size > a.maxSize.value &&
								(h(n, { code: s.too_big, maximum: a.maxSize.value, type: "set", inclusive: !0, exact: !1, message: a.maxSize.message }), t.dirty());
						const r = this._def.valueType;
						function o(e) {
							const i = new Set();
							for (const n of e) {
								if ("aborted" === n.status) return p;
								"dirty" === n.status && t.dirty(), i.add(n.value);
							}
							return { status: t.value, value: i };
						}
						const l = [...n.data.values()].map((e, t) => r._parse(new T(n, e, n.path, t)));
						return n.common.async ? Promise.all(l).then(e => o(e)) : o(l);
					}
					min(e, t) {
						return new ge({ ...this._def, minSize: { value: e, message: x.toString(t) } });
					}
					max(e, t) {
						return new ge({ ...this._def, maxSize: { value: e, message: x.toString(t) } });
					}
					size(e, t) {
						return this.min(e, t).max(e, t);
					}
					nonempty(e) {
						return this.min(1, e);
					}
				}
				ge.create = (e, t) => new ge({ valueType: e, minSize: null, maxSize: null, typeName: Re.ZodSet, ...j(t) });
				class ve extends I {
					constructor() {
						super(...arguments), (this.validate = this.implement);
					}
					_parse(e) {
						const { ctx: t } = this._processInputParams(e);
						if (t.parsedType !== i.function) return h(t, { code: s.invalid_type, expected: i.function, received: t.parsedType }), p;
						function n(e, i) {
							return u({
								data: e,
								path: t.path,
								errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, c(), l].filter(e => !!e),
								issueData: { code: s.invalid_arguments, argumentsError: i },
							});
						}
						function a(e, i) {
							return u({
								data: e,
								path: t.path,
								errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, c(), l].filter(e => !!e),
								issueData: { code: s.invalid_return_type, returnTypeError: i },
							});
						}
						const r = { errorMap: t.common.contextualErrorMap },
							d = t.data;
						if (this._def.returns instanceof xe) {
							const e = this;
							return g(async function (...t) {
								const i = new o([]),
									s = await e._def.args.parseAsync(t, r).catch(e => {
										throw (i.addIssue(n(t, e)), i);
									}),
									l = await Reflect.apply(d, this, s),
									c = await e._def.returns._def.type.parseAsync(l, r).catch(e => {
										throw (i.addIssue(a(l, e)), i);
									});
								return c;
							});
						}
						{
							const e = this;
							return g(function (...t) {
								const i = e._def.args.safeParse(t, r);
								if (!i.success) throw new o([n(t, i.error)]);
								const s = Reflect.apply(d, this, i.data),
									l = e._def.returns.safeParse(s, r);
								if (!l.success) throw new o([a(s, l.error)]);
								return l.data;
							});
						}
					}
					parameters() {
						return this._def.args;
					}
					returnType() {
						return this._def.returns;
					}
					args(...e) {
						return new ve({ ...this._def, args: fe.create(e).rest(ie.create()) });
					}
					returns(e) {
						return new ve({ ...this._def, returns: e });
					}
					implement(e) {
						return this.parse(e);
					}
					strictImplement(e) {
						return this.parse(e);
					}
					static create(e, t, i) {
						return new ve({ args: e || fe.create([]).rest(ie.create()), returns: t || ie.create(), typeName: Re.ZodFunction, ...j(i) });
					}
				}
				class ye extends I {
					get schema() {
						return this._def.getter();
					}
					_parse(e) {
						const { ctx: t } = this._processInputParams(e);
						return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
					}
				}
				ye.create = (e, t) => new ye({ getter: e, typeName: Re.ZodLazy, ...j(t) });
				class be extends I {
					_parse(e) {
						if (e.data !== this._def.value) {
							const t = this._getOrReturnCtx(e);
							return h(t, { received: t.data, code: s.invalid_literal, expected: this._def.value }), p;
						}
						return { status: "valid", value: e.data };
					}
					get value() {
						return this._def.value;
					}
				}
				function we(e, t) {
					return new ke({ values: e, typeName: Re.ZodEnum, ...j(t) });
				}
				be.create = (e, t) => new be({ value: e, typeName: Re.ZodLiteral, ...j(t) });
				class ke extends I {
					constructor() {
						super(...arguments), E.set(this, void 0);
					}
					_parse(t) {
						if ("string" != typeof t.data) {
							const i = this._getOrReturnCtx(t),
								n = this._def.values;
							return h(i, { expected: e.joinValues(n), received: i.parsedType, code: s.invalid_type }), p;
						}
						if ((k(this, E, "f") || _(this, E, new Set(this._def.values), "f"), !k(this, E, "f").has(t.data))) {
							const e = this._getOrReturnCtx(t),
								i = this._def.values;
							return h(e, { received: e.data, code: s.invalid_enum_value, options: i }), p;
						}
						return g(t.data);
					}
					get options() {
						return this._def.values;
					}
					get enum() {
						const e = {};
						for (const t of this._def.values) e[t] = t;
						return e;
					}
					get Values() {
						const e = {};
						for (const t of this._def.values) e[t] = t;
						return e;
					}
					get Enum() {
						const e = {};
						for (const t of this._def.values) e[t] = t;
						return e;
					}
					extract(e, t = this._def) {
						return ke.create(e, { ...this._def, ...t });
					}
					exclude(e, t = this._def) {
						return ke.create(
							this.options.filter(t => !e.includes(t)),
							{ ...this._def, ...t },
						);
					}
				}
				(E = new WeakMap()), (ke.create = we);
				class _e extends I {
					constructor() {
						super(...arguments), S.set(this, void 0);
					}
					_parse(t) {
						const n = e.getValidEnumValues(this._def.values),
							a = this._getOrReturnCtx(t);
						if (a.parsedType !== i.string && a.parsedType !== i.number) {
							const t = e.objectValues(n);
							return h(a, { expected: e.joinValues(t), received: a.parsedType, code: s.invalid_type }), p;
						}
						if ((k(this, S, "f") || _(this, S, new Set(e.getValidEnumValues(this._def.values)), "f"), !k(this, S, "f").has(t.data))) {
							const t = e.objectValues(n);
							return h(a, { received: a.data, code: s.invalid_enum_value, options: t }), p;
						}
						return g(t.data);
					}
					get enum() {
						return this._def.values;
					}
				}
				(S = new WeakMap()), (_e.create = (e, t) => new _e({ values: e, typeName: Re.ZodNativeEnum, ...j(t) }));
				class xe extends I {
					unwrap() {
						return this._def.type;
					}
					_parse(e) {
						const { ctx: t } = this._processInputParams(e);
						if (t.parsedType !== i.promise && !1 === t.common.async)
							return h(t, { code: s.invalid_type, expected: i.promise, received: t.parsedType }), p;
						const n = t.parsedType === i.promise ? t.data : Promise.resolve(t.data);
						return g(n.then(e => this._def.type.parseAsync(e, { path: t.path, errorMap: t.common.contextualErrorMap })));
					}
				}
				xe.create = (e, t) => new xe({ type: e, typeName: Re.ZodPromise, ...j(t) });
				class Ee extends I {
					innerType() {
						return this._def.schema;
					}
					sourceType() {
						return this._def.schema._def.typeName === Re.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
					}
					_parse(t) {
						const { status: i, ctx: n } = this._processInputParams(t),
							a = this._def.effect || null,
							r = {
								addIssue: e => {
									h(n, e), e.fatal ? i.abort() : i.dirty();
								},
								get path() {
									return n.path;
								},
							};
						if (((r.addIssue = r.addIssue.bind(r)), "preprocess" === a.type)) {
							const e = a.transform(n.data, r);
							if (n.common.async)
								return Promise.resolve(e).then(async e => {
									if ("aborted" === i.value) return p;
									const t = await this._def.schema._parseAsync({ data: e, path: n.path, parent: n });
									return "aborted" === t.status ? p : "dirty" === t.status || "dirty" === i.value ? m(t.value) : t;
								});
							{
								if ("aborted" === i.value) return p;
								const t = this._def.schema._parseSync({ data: e, path: n.path, parent: n });
								return "aborted" === t.status ? p : "dirty" === t.status || "dirty" === i.value ? m(t.value) : t;
							}
						}
						if ("refinement" === a.type) {
							const e = e => {
								const t = a.refinement(e, r);
								if (n.common.async) return Promise.resolve(t);
								if (t instanceof Promise)
									throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
								return e;
							};
							if (!1 === n.common.async) {
								const t = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
								return "aborted" === t.status ? p : ("dirty" === t.status && i.dirty(), e(t.value), { status: i.value, value: t.value });
							}
							return this._def.schema
								._parseAsync({ data: n.data, path: n.path, parent: n })
								.then(t =>
									"aborted" === t.status ? p : ("dirty" === t.status && i.dirty(), e(t.value).then(() => ({ status: i.value, value: t.value }))),
								);
						}
						if ("transform" === a.type) {
							if (!1 === n.common.async) {
								const e = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
								if (!b(e)) return e;
								const t = a.transform(e.value, r);
								if (t instanceof Promise)
									throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
								return { status: i.value, value: t };
							}
							return this._def.schema
								._parseAsync({ data: n.data, path: n.path, parent: n })
								.then(e => (b(e) ? Promise.resolve(a.transform(e.value, r)).then(e => ({ status: i.value, value: e })) : e));
						}
						e.assertNever(a);
					}
				}
				(Ee.create = (e, t, i) => new Ee({ schema: e, typeName: Re.ZodEffects, effect: t, ...j(i) })),
					(Ee.createWithPreprocess = (e, t, i) =>
						new Ee({ schema: t, effect: { type: "preprocess", transform: e }, typeName: Re.ZodEffects, ...j(i) }));
				class Se extends I {
					_parse(e) {
						return this._getType(e) === i.undefined ? g(void 0) : this._def.innerType._parse(e);
					}
					unwrap() {
						return this._def.innerType;
					}
				}
				Se.create = (e, t) => new Se({ innerType: e, typeName: Re.ZodOptional, ...j(t) });
				class Te extends I {
					_parse(e) {
						return this._getType(e) === i.null ? g(null) : this._def.innerType._parse(e);
					}
					unwrap() {
						return this._def.innerType;
					}
				}
				Te.create = (e, t) => new Te({ innerType: e, typeName: Re.ZodNullable, ...j(t) });
				class Ce extends I {
					_parse(e) {
						const { ctx: t } = this._processInputParams(e);
						let n = t.data;
						return t.parsedType === i.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({ data: n, path: t.path, parent: t });
					}
					removeDefault() {
						return this._def.innerType;
					}
				}
				Ce.create = (e, t) =>
					new Ce({ innerType: e, typeName: Re.ZodDefault, defaultValue: "function" == typeof t.default ? t.default : () => t.default, ...j(t) });
				class je extends I {
					_parse(e) {
						const { ctx: t } = this._processInputParams(e),
							i = { ...t, common: { ...t.common, issues: [] } },
							n = this._def.innerType._parse({ data: i.data, path: i.path, parent: { ...i } });
						return w(n)
							? n.then(e => ({
									status: "valid",
									value:
										"valid" === e.status
											? e.value
											: this._def.catchValue({
													get error() {
														return new o(i.common.issues);
													},
													input: i.data,
												}),
								}))
							: {
									status: "valid",
									value:
										"valid" === n.status
											? n.value
											: this._def.catchValue({
													get error() {
														return new o(i.common.issues);
													},
													input: i.data,
												}),
								};
					}
					removeCatch() {
						return this._def.innerType;
					}
				}
				je.create = (e, t) =>
					new je({ innerType: e, typeName: Re.ZodCatch, catchValue: "function" == typeof t.catch ? t.catch : () => t.catch, ...j(t) });
				class Ie extends I {
					_parse(e) {
						if (this._getType(e) !== i.nan) {
							const t = this._getOrReturnCtx(e);
							return h(t, { code: s.invalid_type, expected: i.nan, received: t.parsedType }), p;
						}
						return { status: "valid", value: e.data };
					}
				}
				Ie.create = e => new Ie({ typeName: Re.ZodNaN, ...j(e) });
				const Ae = Symbol("zod_brand");
				class Oe extends I {
					_parse(e) {
						const { ctx: t } = this._processInputParams(e),
							i = t.data;
						return this._def.type._parse({ data: i, path: t.path, parent: t });
					}
					unwrap() {
						return this._def.type;
					}
				}
				class Pe extends I {
					_parse(e) {
						const { status: t, ctx: i } = this._processInputParams(e);
						if (i.common.async) {
							return (async () => {
								const e = await this._def.in._parseAsync({ data: i.data, path: i.path, parent: i });
								return "aborted" === e.status
									? p
									: "dirty" === e.status
										? (t.dirty(), m(e.value))
										: this._def.out._parseAsync({ data: e.value, path: i.path, parent: i });
							})();
						}
						{
							const e = this._def.in._parseSync({ data: i.data, path: i.path, parent: i });
							return "aborted" === e.status
								? p
								: "dirty" === e.status
									? (t.dirty(), { status: "dirty", value: e.value })
									: this._def.out._parseSync({ data: e.value, path: i.path, parent: i });
						}
					}
					static create(e, t) {
						return new Pe({ in: e, out: t, typeName: Re.ZodPipeline });
					}
				}
				class Le extends I {
					_parse(e) {
						const t = this._def.innerType._parse(e),
							i = e => (b(e) && (e.value = Object.freeze(e.value)), e);
						return w(t) ? t.then(e => i(e)) : i(t);
					}
					unwrap() {
						return this._def.innerType;
					}
				}
				function ze(e, t = {}, i) {
					return e
						? te.create().superRefine((n, a) => {
								let r, s;
								if (!e(n)) {
									const e = "function" == typeof t ? t(n) : "string" == typeof t ? { message: t } : t,
										o = null === (s = null !== (r = e.fatal) && void 0 !== r ? r : i) || void 0 === s || s,
										l = "string" == typeof e ? { message: e } : e;
									a.addIssue({ code: "custom", ...l, fatal: o });
								}
							})
						: te.create();
				}
				Le.create = (e, t) => new Le({ innerType: e, typeName: Re.ZodReadonly, ...j(t) });
				const Fe = { object: oe.lazycreate };
				let Re;
				!(function (e) {
					(e.ZodString = "ZodString"),
						(e.ZodNumber = "ZodNumber"),
						(e.ZodNaN = "ZodNaN"),
						(e.ZodBigInt = "ZodBigInt"),
						(e.ZodBoolean = "ZodBoolean"),
						(e.ZodDate = "ZodDate"),
						(e.ZodSymbol = "ZodSymbol"),
						(e.ZodUndefined = "ZodUndefined"),
						(e.ZodNull = "ZodNull"),
						(e.ZodAny = "ZodAny"),
						(e.ZodUnknown = "ZodUnknown"),
						(e.ZodNever = "ZodNever"),
						(e.ZodVoid = "ZodVoid"),
						(e.ZodArray = "ZodArray"),
						(e.ZodObject = "ZodObject"),
						(e.ZodUnion = "ZodUnion"),
						(e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
						(e.ZodIntersection = "ZodIntersection"),
						(e.ZodTuple = "ZodTuple"),
						(e.ZodRecord = "ZodRecord"),
						(e.ZodMap = "ZodMap"),
						(e.ZodSet = "ZodSet"),
						(e.ZodFunction = "ZodFunction"),
						(e.ZodLazy = "ZodLazy"),
						(e.ZodLiteral = "ZodLiteral"),
						(e.ZodEnum = "ZodEnum"),
						(e.ZodEffects = "ZodEffects"),
						(e.ZodNativeEnum = "ZodNativeEnum"),
						(e.ZodOptional = "ZodOptional"),
						(e.ZodNullable = "ZodNullable"),
						(e.ZodDefault = "ZodDefault"),
						(e.ZodCatch = "ZodCatch"),
						(e.ZodPromise = "ZodPromise"),
						(e.ZodBranded = "ZodBranded"),
						(e.ZodPipeline = "ZodPipeline"),
						(e.ZodReadonly = "ZodReadonly");
				})(Re || (Re = {}));
				const We = V.create,
					Ne = q.create,
					Ze = Ie.create,
					Me = J.create,
					$e = G.create,
					De = X.create,
					Be = Y.create,
					Ue = Q.create,
					Ke = ee.create,
					Ve = te.create,
					He = ie.create,
					qe = ne.create,
					Je = ae.create,
					Ge = re.create,
					Xe = oe.create,
					Ye = oe.strictCreate,
					Qe = le.create,
					et = ce.create,
					tt = he.create,
					it = fe.create,
					nt = pe.create,
					at = me.create,
					rt = ge.create,
					st = ve.create,
					ot = ye.create,
					lt = be.create,
					dt = ke.create,
					ct = _e.create,
					ut = xe.create,
					ht = Ee.create,
					ft = Se.create,
					pt = Te.create,
					mt = Ee.createWithPreprocess,
					gt = Pe.create,
					vt = {
						string: e => V.create({ ...e, coerce: !0 }),
						number: e => q.create({ ...e, coerce: !0 }),
						boolean: e => G.create({ ...e, coerce: !0 }),
						bigint: e => J.create({ ...e, coerce: !0 }),
						date: e => X.create({ ...e, coerce: !0 }),
					},
					yt = p;
				let bt = Object.freeze({
					__proto__: null,
					defaultErrorMap: l,
					setErrorMap: function (e) {
						d = e;
					},
					getErrorMap: c,
					makeIssue: u,
					EMPTY_PATH: [],
					addIssueToContext: h,
					ParseStatus: f,
					INVALID: p,
					DIRTY: m,
					OK: g,
					isAborted: v,
					isDirty: y,
					isValid: b,
					isAsync: w,
					get util() {
						return e;
					},
					get objectUtil() {
						return t;
					},
					ZodParsedType: i,
					getParsedType: n,
					ZodType: I,
					datetimeRegex: U,
					ZodString: V,
					ZodNumber: q,
					ZodBigInt: J,
					ZodBoolean: G,
					ZodDate: X,
					ZodSymbol: Y,
					ZodUndefined: Q,
					ZodNull: ee,
					ZodAny: te,
					ZodUnknown: ie,
					ZodNever: ne,
					ZodVoid: ae,
					ZodArray: re,
					ZodObject: oe,
					ZodUnion: le,
					ZodDiscriminatedUnion: ce,
					ZodIntersection: he,
					ZodTuple: fe,
					ZodRecord: pe,
					ZodMap: me,
					ZodSet: ge,
					ZodFunction: ve,
					ZodLazy: ye,
					ZodLiteral: be,
					ZodEnum: ke,
					ZodNativeEnum: _e,
					ZodPromise: xe,
					ZodEffects: Ee,
					ZodTransformer: Ee,
					ZodOptional: Se,
					ZodNullable: Te,
					ZodDefault: Ce,
					ZodCatch: je,
					ZodNaN: Ie,
					BRAND: Ae,
					ZodBranded: Oe,
					ZodPipeline: Pe,
					ZodReadonly: Le,
					custom: ze,
					Schema: I,
					ZodSchema: I,
					late: Fe,
					get ZodFirstPartyTypeKind() {
						return Re;
					},
					coerce: vt,
					any: Ve,
					array: Ge,
					bigint: Me,
					boolean: $e,
					date: De,
					discriminatedUnion: et,
					effect: ht,
					enum: dt,
					function: st,
					instanceof: (e, t = { message: `Input not instance of ${e.name}` }) => ze(t => t instanceof e, t),
					intersection: tt,
					lazy: ot,
					literal: lt,
					map: at,
					nan: Ze,
					nativeEnum: ct,
					never: qe,
					null: Ke,
					nullable: pt,
					number: Ne,
					object: Xe,
					oboolean: () => $e().optional(),
					onumber: () => Ne().optional(),
					optional: ft,
					ostring: () => We().optional(),
					pipeline: gt,
					preprocess: mt,
					promise: ut,
					record: nt,
					set: rt,
					strictObject: Ye,
					string: We,
					symbol: Be,
					transformer: ht,
					tuple: it,
					undefined: Ue,
					union: Qe,
					unknown: He,
					void: Je,
					NEVER: yt,
					ZodIssueCode: s,
					quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
					ZodError: o,
				});
				const wt = [
						"bn",
						"bs",
						"pt-BR",
						"bg",
						"ca",
						"hr",
						"cs",
						"da",
						"nl",
						"en",
						"et",
						"fi",
						"fr",
						"de",
						"el",
						"hi",
						"hu",
						"id",
						"it",
						"ja",
						"ko",
						"lv",
						"lt",
						"ms",
						"mn",
						"nb",
						"pl",
						"pt",
						"ro",
						"ru",
						"sr",
						"zh-CN",
						"sl",
						"es",
						"sw",
						"sv",
						"th",
						"zh-TW",
						"tr",
						"uk",
						"vi",
					],
					kt = bt.enum(wt),
					_t = bt.record(bt.string()).nullable(),
					xt = bt.object({
						id: bt.string().nonempty(),
						name: bt.string().nonempty(),
						monthlySpend: bt.number().min(0).optional(),
						createdAt: bt.string().optional(),
						customFields: _t.optional(),
					}),
					Et = bt.preprocess(
						e => {
							if ("object" == typeof e && null !== e) {
								const t = e;
								return !("userId" in t) && "id" in t && ((t.userId = t.id), delete t.id), t;
							}
							return e;
						},
						bt
							.object({
								organization: bt.string().nonempty(),
								email: bt.string().email().nonempty().optional(),
								name: bt.string().nonempty(),
								userId: bt.string().nonempty().optional(),
								userHash: bt.string().optional(),
								profilePicture: bt.string().url().nullable().optional(),
								createdAt: bt.string().optional(),
								customFields: _t.optional(),
								companies: bt.array(xt).optional(),
								locale: kt.optional(),
							})
							.refine(
								e => {
									const t = !!e.email,
										i = !!e.userId;
									return t || i;
								},
								{ message: "Either email or userId (or both) must be provided", path: ["email", "userId"] },
							),
					);
				class St {
					constructor(e) {
						(this.organization = e.organization),
							(this.iframe = null),
							(this.overlay = null),
							(this.popper = null),
							(this.activeSubmissionId = e.submissionId || null);
					}
					initialize() {
						this.setupIframeEmbed(), this.setupListeners();
					}
					setupIframeEmbed() {
						const e = this.setupOverlay();
						(this.popper = document.createElement("div")),
							this.popper.setAttribute("id", "featurebase-popup-iframe"),
							(this.iframe = document.createElement("iframe")),
							this.iframe.setAttribute("src", `https://${this.organization}.featurebase.app/popup`),
							this.iframe.setAttribute("class", "featurebase-popup-iframe"),
							this.iframe.setAttribute("referrerPolicy", "origin"),
							this.iframe.setAttribute(
								"sandbox",
								"allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals",
							),
							this.popper.appendChild(this.iframe),
							this.popper.appendChild(e),
							document.body.appendChild(this.popper);
					}
					setupOverlay() {
						const e = this;
						return (
							(this.overlay = document.createElement("div")),
							this.overlay.setAttribute("id", "featurebase-popup-overlay"),
							this.overlay.setAttribute("class", "featurebase-popup-overlay fb-fade-in"),
							this.overlay.addEventListener("click", function () {
								e.togglePopup();
							}),
							this.overlay
						);
					}
					setupListeners() {
						window.addEventListener("message", this.handlePostMessage.bind(this));
					}
					togglePopup() {
						this.iframe && (this.iframe.classList.contains("featurebase-popup-iframe-show") ? this.closePopup() : this.openPopup());
					}
					openPopup() {
						let e, t, i, n, a;
						this.popper &&
							(null === (e = this.iframe) || void 0 === e || e.classList.add("featurebase-popup-iframe-show"),
							null === (t = this.overlay) || void 0 === t || t.style.setProperty("display", "block"),
							null === (i = this.iframe) ||
								void 0 === i ||
								i.setAttribute("src", `https://${this.organization}.featurebase.app/popup/${this.activeSubmissionId}`),
							null === (a = null === (n = this.iframe) || void 0 === n ? void 0 : n.contentWindow) ||
								void 0 === a ||
								a.postMessage({ target: "FeaturebaseWidget", data: { action: "widgetOpened" } }, "*"));
					}
					closePopup() {
						let e, t;
						this.popper &&
							(null === (e = this.iframe) || void 0 === e || e.classList.remove("featurebase-popup-iframe-show"),
							null === (t = this.overlay) || void 0 === t || t.style.setProperty("display", "none"));
					}
					handlePostMessage(e) {
						if ((e.preventDefault(), e.data && "FeaturebasePopup" === e.data.target))
							switch (e.data.data.action) {
								case "openPopup":
									const t = e.data.data.submissionId;
									e.data.data.organization;
									if (!t) return void console.error("[Featurebase Popup] Missing submissionId in postMessage.");
									(this.activeSubmissionId = t), this.openPopup();
									break;
								case "closePopup":
									this.closePopup();
									break;
								default:
									return;
							}
					}
				}
				const Tt = () => (window && window.FEATUREBASE_ENV && "development" === window.FEATUREBASE_ENV ? "development" : "production"),
					Ct = (e, t, i) => {
						(null == e ? void 0 : e.jwtToken) &&
							i &&
							(null == t ? void 0 : t.jwtToken) !== e.jwtToken &&
							((t.jwtToken = e.jwtToken),
							i.forEach(t => {
								const i = new URL(t.src);
								i.searchParams.set("jwt", e.jwtToken || ""), (t.src = i.toString());
							}));
					};
				class jt {
					constructor(e, t) {
						(this.openIcon =
							'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 14.4241 4.31039 12.8637 4.91345 11.4078C5.5165 9.95189 6.40042 8.62902 7.51472 7.51472C8.62902 6.40042 9.95189 5.5165 11.4078 4.91345C12.8637 4.31039 14.4241 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.333 13.3334C12.6663 12 9.99967 12 9.33301 13.3334" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22.667 13.3334C22.0003 12 19.3337 12 18.667 13.3334" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.3337 20C18.8992 20.4435 18.3805 20.7958 17.8082 21.0363C17.2358 21.2768 16.6212 21.4007 16.0003 21.4007C15.3795 21.4007 14.7649 21.2768 14.1925 21.0363C13.6201 20.7958 13.1015 20.4435 12.667 20" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> </svg>'),
							(this.closeIcon =
								'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256"><line x1="200" y1="56" x2="56" y2="200" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="200" y1="200" x2="56" y2="56" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>'),
							(this.setInnerIframeStyles = (e, t) => {
								(e.style.margin = "0"),
									(e.style.padding = "0"),
									(e.style.width = "50px"),
									(e.style.height = "50px"),
									(e.style.border = "none"),
									(e.style.outline = "none"),
									(e.style.display = "flex"),
									(e.style.cursor = "pointer"),
									(e.style.appearance = "none"),
									(e.style.overflow = "hidden"),
									(e.style.alignItems = "center"),
									(e.style.justifyContent = "center"),
									(e.style.background = t || "#4a90e2");
							}),
							(this.config = e),
							(this.iframe = null),
							(this.overlay = null),
							(this.popper = null),
							(this.buttonIFrame = null),
							(this.openButton = null),
							(this.fullscreenXButton = null),
							(this.callbackFunction = t),
							this.config.placement || (this.config.placement = "right"),
							this.config.initialPage || (this.config.initialPage = "MainView"),
							this.config.fullScreen || (this.config.fullScreen = !1),
							this.config.disableCloseBtn || (this.config.disableCloseBtn = !1);
					}
					initialize() {
						this.setupIframeEmbed(), this.setupListeners();
					}
					setupIframeEmbed() {
						let e, t;
						if (this.iframe) return;
						const i = this.setupOverlay();
						this.setCSSVariables(),
							(this.popper = document.createElement("div")),
							this.popper.setAttribute("data-featurebase-widget", ""),
							(this.iframe = document.createElement("iframe")),
							this.iframe.setAttribute("class", "featurebase-widget-iframe"),
							this.iframe.setAttribute("referrerPolicy", "origin"),
							this.iframe.setAttribute("allow", "fullscreen; clipboard-write"),
							this.iframe.setAttribute(
								"sandbox",
								"allow-scripts allow-forms allow-storage-access-by-user-activation allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals",
							);
						const n =
							"production" === Tt()
								? new URL(`https://${this.config.organization}.featurebase.app/${this.config.locale}/widget`)
								: new URL(`http://${this.config.organization}.localhost:3000/${this.config.locale}/widget`);
						this.config.initialPage && n.searchParams.append("page", this.config.initialPage),
							this.config.jwtToken && n.searchParams.append("jwt", this.config.jwtToken),
							(null === (e = this.config) || void 0 === e ? void 0 : e.metadata) &&
								n.searchParams.append("metaData", JSON.stringify(this.config.metadata)),
							(null === (t = this.config) || void 0 === t ? void 0 : t.theme) && n.searchParams.append("theme", this.config.theme),
							this.iframe.setAttribute("src", n.toString()),
							this.setupFullscreenButton(),
							this.popper.appendChild(i),
							this.popper.appendChild(this.iframe),
							!this.config.disableCloseBtn && this.fullscreenXButton && this.popper.appendChild(this.fullscreenXButton),
							document.body.appendChild(this.popper);
					}
					setCSSVariables() {
						const e = document.documentElement;
						e &&
							(e.classList.add("featurebase-widget"),
							this.config.fullScreen ? e.classList.add("featurebase-fullscreen") : e.classList.remove("featurebase-fullscreen"),
							"left" === this.config.placement
								? (e.classList.add("featurebase-left"), e.classList.remove("featurebase-right"))
								: (e.classList.add("featurebase-right"), e.classList.remove("featurebase-left")));
					}
					setupFloatingOpenButton(e) {
						const t = this;
						(this.buttonIFrame = document.createElement("iframe")),
							this.buttonIFrame.setAttribute("class", "featurebase-widget-button-iframe"),
							(this.openButton = document.createElement("button")),
							(this.openButton.innerHTML = this.openIcon),
							this.setInnerIframeStyles(this.openButton, e),
							this.openButton.setAttribute("class", "featurebase-floaterbtn-iframe-button"),
							this.openButton.addEventListener("click", function () {
								t.toggleWidget();
							}),
							this.iframe &&
								(this.iframe.classList.remove(
									"featurebase-floaterbtn-fullscreen-right",
									"featurebase-floaterbtn-fullscreen-left",
									"featurebase-floaterbtn-not-fullscreen",
									"featurebase-floaterbtn-not-fullscreen-right",
									"featurebase-floaterbtn-not-fullscreen-left",
								),
								this.config.fullScreen
									? "right" === this.config.placement
										? this.iframe.classList.add("featurebase-floaterbtn-fullscreen-right")
										: this.iframe.classList.add("featurebase-floaterbtn-fullscreen-left")
									: (this.iframe.classList.add("featurebase-floaterbtn-not-fullscreen"),
										"right" === this.config.placement
											? this.iframe.classList.add("featurebase-floaterbtn-not-fullscreen-right")
											: this.iframe.classList.add("featurebase-floaterbtn-not-fullscreen-left"))),
							(this.buttonIFrame.onload = function () {
								let i, n, a, r, s;
								if (null !== t.buttonIFrame && (null === (s = t.buttonIFrame) || void 0 === s ? void 0 : s.contentDocument)) {
									const s = null === (i = t.buttonIFrame.contentDocument) || void 0 === i ? void 0 : i.body,
										o = null === (n = t.buttonIFrame.contentDocument) || void 0 === n ? void 0 : n.documentElement;
									s && t.setInnerIframeStyles(s, e),
										o && t.setInnerIframeStyles(o, e),
										t.openButton &&
											(null === (r = null === (a = t.buttonIFrame) || void 0 === a ? void 0 : a.contentDocument) ||
												void 0 === r ||
												r.body.appendChild(t.openButton));
								}
							}),
							(null == this ? void 0 : this.popper) &&
								(this.buttonIFrame && (null == this || this.popper.appendChild(this.buttonIFrame)),
								(this.config.selector || document.querySelector("button[data-featurebase-feedback-portal]")) &&
									this.buttonIFrame &&
									(this.buttonIFrame.style.display = "none"));
					}
					setupFullscreenButton() {
						const e = this;
						(this.fullscreenXButton = document.createElement("button")),
							this.fullscreenXButton.setAttribute("class", "fb-widget-fullscreen-x fb-button-x-fade-in");
						const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
						t.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
							t.setAttribute("fill", "none"),
							t.setAttribute("viewBox", "0 0 24 24"),
							t.setAttribute("stroke-width", "1.8"),
							t.setAttribute("stroke", "#fff"),
							t.setAttribute("class", "featurebase-x-svg-icon");
						const i = document.createElementNS("http://www.w3.org/2000/svg", "path");
						i.setAttribute("stroke-linecap", "round"),
							i.setAttribute("stroke-linejoin", "round"),
							i.setAttribute("d", "M6 18L18 6M6 6l12 12"),
							t.appendChild(i),
							this.fullscreenXButton.appendChild(t),
							this.fullscreenXButton.addEventListener("click", function () {
								e.toggleWidget();
							}),
							this.iframe &&
								("right" === this.config.placement
									? (this.iframe.classList.add("featurebase-widget-iframe-right"),
										this.fullscreenXButton.classList.add("fb-widget-fullscreen-x-right"))
									: (this.iframe.classList.add("featurebase-widget-iframe-left"),
										this.fullscreenXButton.classList.add("fb-widget-fullscreen-x-left")));
					}
					updateWidgetSize(e, t, i, n) {
						const a = document.documentElement;
						this.config.fullScreen ||
							(a.style.setProperty("--featurebase-widget-max-height", e),
							a.style.setProperty("--featurebase-widget-height", t),
							a.style.setProperty("--featurebase-widget-width", i)),
							this.iframe &&
								((this.iframe.style.transformOrigin = "right" === this.config.placement ? "bottom right" : "bottom left"),
								(this.iframe.style.transition =
									"transform cubic-bezier(0, 0.3, 0.6, 1) 0.3s, opacity 0.1s ease-in-out, visibility 0.3s linear, width 0.3s, height 0.3s"),
								n
									? ((this.iframe.style.transform = "scale(1)"), (this.iframe.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px"))
									: ((this.iframe.style.transform = "scale(0.1)"), (this.iframe.style.boxShadow = "none")));
					}
					setupOverlay() {
						const e = this;
						return (
							(this.overlay = document.createElement("div")),
							this.overlay.setAttribute("id", "featurebase-widget-overlay"),
							this.overlay.setAttribute("class", "featurebase-widget-overlay fb-widget-fade-in"),
							this.overlay.addEventListener("click", function () {
								e.toggleWidget();
							}),
							this.overlay
						);
					}
					setupListeners() {
						const e = this;
						document.addEventListener("click", function (t) {
							e.handleGlobalClickEvent(t);
						}),
							window.addEventListener("message", this.handlePostMessage.bind(this)),
							document.addEventListener("identifyAuthChange", e => {
								const t = e;
								t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail);
							});
					}
					handleGlobalAuthChange(e) {
						this.iframe && Ct(e, this.config, [this.iframe]);
					}
					handleGlobalClickEvent(e) {
						if (e && e.target) {
							let t = [];
							this.config.selector && t.push(...document.querySelectorAll(this.config.selector)),
								t.push(...document.querySelectorAll("button[data-featurebase-feedback-portal]"));
							for (let i = 0; i < t.length; i++) {
								let n = t[i];
								if (e.target === t[i] || n.contains(e.target)) return this.toggleWidget();
							}
						}
					}
					trackWidgetOpen() {
						let e;
						this.iframe && (null === (e = this.iframe.contentWindow) || void 0 === e || e.postMessage({ type: "widgetOpened" }, "*"));
					}
					toggleWidget() {
						let e, t, i, n;
						this.iframe &&
							(this.iframe.classList.contains("featurebase-widget-iframe-show")
								? (this.closeWidget(),
									null === (e = this.buttonIFrame) || void 0 === e || e.classList.remove("fb-widget-opened-toggle-button"),
									this.config.fullScreen
										? (null === (t = this.buttonIFrame) || void 0 === t || t.classList.remove("fb-widget-hide-toggle-button"),
											"right" === this.config.placement
												? (this.iframe.style.transform = "translateX(500px)")
												: (this.iframe.style.transform = "translateX(-500px)"))
										: (this.iframe.style.transform = "scale(0.1)"))
								: (this.openWidget(),
									this.config.fullScreen
										? (null === (i = this.buttonIFrame) || void 0 === i || i.classList.add("fb-widget-hide-toggle-button"),
											(this.iframe.style.transform = "translateX(0px)"))
										: (null === (n = this.buttonIFrame) || void 0 === n || n.classList.add("fb-widget-opened-toggle-button"),
											(this.iframe.style.transform = "scale(1)"))));
					}
					openWidget() {
						let e, t, i, n;
						this.popper &&
							this.iframe &&
							(this.iframe.classList.add("featurebase-widget-iframe-show"),
							this.trackWidgetOpen(),
							this.config.fullScreen &&
								this.overlay &&
								(this.overlay.classList.remove("featurebase-display-none"), this.overlay.classList.add("featurebase-display-block")),
							this.openButton && (this.openButton.innerHTML = this.closeIcon),
							null === (t = null === (e = this.iframe) || void 0 === e ? void 0 : e.contentWindow) ||
								void 0 === t ||
								t.postMessage({ target: "FeaturebaseWidget", data: { action: "widgetOpened" } }, "*"),
							this.config.fullScreen &&
								this.fullscreenXButton &&
								(this.fullscreenXButton.classList.remove("featurebase-display-none"),
								this.fullscreenXButton.classList.add("featurebase-display-block")),
							(this.config.selector || document.querySelector("button[data-featurebase-feedback-portal]")) &&
								(null === (i = this.buttonIFrame) || void 0 === i || i.classList.remove("featurebase-display-none"),
								null === (n = this.buttonIFrame) || void 0 === n || n.classList.add("featurebase-display-block")));
					}
					closeWidget() {
						let e, t, i, n;
						this.popper &&
							this.iframe &&
							(this.iframe.classList.remove("featurebase-widget-iframe-show"),
							this.config.fullScreen &&
								(null === (e = this.overlay) || void 0 === e || e.classList.remove("featurebase-display-block"),
								null === (t = this.overlay) || void 0 === t || t.classList.add("featurebase-display-none")),
							this.openButton && (this.openButton.innerHTML = this.openIcon),
							this.config.fullScreen &&
								this.fullscreenXButton &&
								(this.fullscreenXButton.classList.remove("featurebase-display-block"),
								this.fullscreenXButton.classList.add("featurebase-display-none")),
							(this.config.selector || document.querySelector("button[data-featurebase-feedback-portal]")) &&
								(null === (i = this.buttonIFrame) || void 0 === i || i.classList.remove("featurebase-display-block"),
								null === (n = this.buttonIFrame) || void 0 === n || n.classList.add("featurebase-display-none")));
					}
					handlePostMessage(e) {
						let t, i, n, a, r, s, o, l, d, c, u;
						if ((e.preventDefault(), e.data && "FeaturebaseWidget" === e.data.target))
							switch (e.data.data.action) {
								case "changePage":
									null === (i = null === (t = this.iframe) || void 0 === t ? void 0 : t.contentWindow) ||
										void 0 === i ||
										i.postMessage({ target: "FeaturebaseWidget", data: e.data.data }, "*"),
										e.data.data.openWidget &&
											(this.openWidget(),
											null === (a = null === (n = this.iframe) || void 0 === n ? void 0 : n.contentWindow) ||
												void 0 === a ||
												a.postMessage({ target: "FeaturebaseWidget", data: { action: "widgetOpened" } }, "*"));
									break;
								case "updateMetadata":
									const h = null === (s = null === (r = e.data) || void 0 === r ? void 0 : r.data) || void 0 === s ? void 0 : s.metadata;
									this.iframe &&
										(null === (o = this.iframe.contentWindow) ||
											void 0 === o ||
											o.postMessage({ target: "FeaturebaseWidget", data: { action: "updateMetadata", metadata: h } }, "*"));
									break;
								case "openWidget":
									this.openWidget(),
										null === (d = null === (l = this.iframe) || void 0 === l ? void 0 : l.contentWindow) ||
											void 0 === d ||
											d.postMessage({ target: "FeaturebaseWidget", data: { action: "widgetOpened" } }, "*");
									break;
								case "closeWidget":
									this.closeWidget();
									break;
								case "toggleWidget":
									this.toggleWidget();
									break;
								case "toggleWideView":
									this.updateWidgetSize("90vh", "90vh", "720px", !0);
									break;
								case "closeWideView":
									this.updateWidgetSize("700px", "75vh", "420px", !1);
									break;
								case "initializePortalOrg":
									!(null == this ? void 0 : this.popper) ||
										this.buttonIFrame ||
										this.config.fullScreen ||
										this.setupFloatingOpenButton(e.data.data.data.color),
										this.callbackFunction && this.callbackFunction(null, { action: "widgetReady" });
									break;
								case "requestJwt":
									this.config.jwtToken &&
										(null === (u = null === (c = this.iframe) || void 0 === c ? void 0 : c.contentWindow) ||
											void 0 === u ||
											u.postMessage({ target: "FeaturebaseWidget", data: { action: "jwtAuth", payload: this.config.jwtToken } }, "*"));
									break;
								default:
									return;
							}
					}
				}
				function It(e, t) {
					const i = new jt(e, t);
					return i.initialize(), i;
				}
				const At = bt.record(bt.string()).nullable(),
					Ot = bt.object({
						organization: bt.string().nonempty(),
						placement: bt.enum(["bottom-right", "bottom-left", "left", "right"]).optional(),
						theme: bt.string().nonempty(),
						defaultBoard: bt.string().optional(),
						jwtToken: bt.string().default("").optional(),
						metadata: At.optional(),
						locale: kt.default("en"),
						email: bt.string().email().optional(),
						userId: bt.string().optional(),
						userHash: bt.string().optional(),
					}),
					Pt = bt.object({
						organization: bt.string().nonempty(),
						placement: bt.enum(["left", "right"]).optional(),
						initialPage: bt.enum(["MainView", "RoadmapView", "CreatePost", "PostsView", "ChangelogView", "HelpView"]).default("MainView"),
						fullScreen: bt.boolean().default(!1),
						jwtToken: bt.string().default("").optional(),
						selector: bt.string().optional(),
						disableCloseBtn: bt.boolean().default(!1).optional(),
						metadata: At.optional(),
						theme: bt.string().nonempty().optional(),
						locale: kt.default("en"),
						email: bt.string().email().optional(),
						userId: bt.string().optional(),
						userHash: bt.string().optional(),
					}),
					Lt = bt.object({
						organization: bt.string().nonempty(),
						placement: bt.enum(["bottom", "top", "left", "right", "auto"]).optional(),
						theme: bt.string().nonempty(),
						fullscreenPopup: bt.boolean().optional(),
						usersName: bt.string().optional(),
						alwaysShow: bt.boolean().optional(),
						jwtToken: bt.string().default("").optional(),
						locale: kt.default("en"),
						email: bt.string().email().optional(),
						userId: bt.string().optional(),
						userHash: bt.string().optional(),
						lazyLoadDropdown: bt.boolean().optional(),
					});
				function zt(e) {
					return e.split("-")[1];
				}
				function Ft(e) {
					return "y" === e ? "height" : "width";
				}
				function Rt(e) {
					return e.split("-")[0];
				}
				function Wt(e) {
					return ["top", "bottom"].includes(Rt(e)) ? "x" : "y";
				}
				function Nt(e, t, i) {
					let { reference: n, floating: a } = e;
					const r = n.x + n.width / 2 - a.width / 2,
						s = n.y + n.height / 2 - a.height / 2,
						o = Wt(t),
						l = Ft(o),
						d = n[l] / 2 - a[l] / 2,
						c = "x" === o;
					let u;
					switch (Rt(t)) {
						case "top":
							u = { x: r, y: n.y - a.height };
							break;
						case "bottom":
							u = { x: r, y: n.y + n.height };
							break;
						case "right":
							u = { x: n.x + n.width, y: s };
							break;
						case "left":
							u = { x: n.x - a.width, y: s };
							break;
						default:
							u = { x: n.x, y: n.y };
					}
					switch (zt(t)) {
						case "start":
							u[o] -= d * (i && c ? -1 : 1);
							break;
						case "end":
							u[o] += d * (i && c ? -1 : 1);
					}
					return u;
				}
				const Zt = async (e, t, i) => {
					const { placement: n = "bottom", strategy: a = "absolute", middleware: r = [], platform: s } = i,
						o = r.filter(Boolean),
						l = await (null == s.isRTL ? void 0 : s.isRTL(t));
					let d = await s.getElementRects({ reference: e, floating: t, strategy: a }),
						{ x: c, y: u } = Nt(d, n, l),
						h = n,
						f = {},
						p = 0;
					for (let i = 0; i < o.length; i++) {
						const { name: r, fn: m } = o[i],
							{
								x: g,
								y: v,
								data: y,
								reset: b,
							} = await m({
								x: c,
								y: u,
								initialPlacement: n,
								placement: h,
								strategy: a,
								middlewareData: f,
								rects: d,
								platform: s,
								elements: { reference: e, floating: t },
							});
						(c = null != g ? g : c),
							(u = null != v ? v : u),
							(f = { ...f, [r]: { ...f[r], ...y } }),
							b &&
								p <= 50 &&
								(p++,
								"object" == typeof b &&
									(b.placement && (h = b.placement),
									b.rects && (d = !0 === b.rects ? await s.getElementRects({ reference: e, floating: t, strategy: a }) : b.rects),
									({ x: c, y: u } = Nt(d, h, l))),
								(i = -1));
					}
					return { x: c, y: u, placement: h, strategy: a, middlewareData: f };
				};
				function Mt(e) {
					return "number" != typeof e
						? (function (e) {
								return { top: 0, right: 0, bottom: 0, left: 0, ...e };
							})(e)
						: { top: e, right: e, bottom: e, left: e };
				}
				function $t(e) {
					return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
				}
				async function Dt(e, t) {
					let i;
					void 0 === t && (t = {});
					const { x: n, y: a, platform: r, rects: s, elements: o, strategy: l } = e,
						{
							boundary: d = "clippingAncestors",
							rootBoundary: c = "viewport",
							elementContext: u = "floating",
							altBoundary: h = !1,
							padding: f = 0,
						} = t,
						p = Mt(f),
						m = o[h ? ("floating" === u ? "reference" : "floating") : u],
						g = $t(
							await r.getClippingRect({
								element:
									null == (i = await (null == r.isElement ? void 0 : r.isElement(m))) || i
										? m
										: m.contextElement || (await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(o.floating))),
								boundary: d,
								rootBoundary: c,
								strategy: l,
							}),
						),
						v = "floating" === u ? { ...s.floating, x: n, y: a } : s.reference,
						y = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(o.floating)),
						b = ((await (null == r.isElement ? void 0 : r.isElement(y))) && (await (null == r.getScale ? void 0 : r.getScale(y)))) || { x: 1, y: 1 },
						w = $t(
							r.convertOffsetParentRelativeRectToViewportRelativeRect
								? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v, offsetParent: y, strategy: l })
								: v,
						);
					return {
						top: (g.top - w.top + p.top) / b.y,
						bottom: (w.bottom - g.bottom + p.bottom) / b.y,
						left: (g.left - w.left + p.left) / b.x,
						right: (w.right - g.right + p.right) / b.x,
					};
				}
				const Bt = Math.min,
					Ut = Math.max;
				function Kt(e, t, i) {
					return Ut(e, Bt(t, i));
				}
				const Vt = ["top", "right", "bottom", "left"],
					Ht = Vt.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
					qt = { left: "right", right: "left", bottom: "top", top: "bottom" };
				function Jt(e) {
					return e.replace(/left|right|bottom|top/g, e => qt[e]);
				}
				function Gt(e, t, i) {
					void 0 === i && (i = !1);
					const n = zt(e),
						a = Wt(e),
						r = Ft(a);
					let s = "x" === a ? (n === (i ? "end" : "start") ? "right" : "left") : "start" === n ? "bottom" : "top";
					return t.reference[r] > t.floating[r] && (s = Jt(s)), { main: s, cross: Jt(s) };
				}
				const Xt = { start: "end", end: "start" };
				function Yt(e) {
					return e.replace(/start|end/g, e => Xt[e]);
				}
				const Qt = function (e) {
					return (
						void 0 === e && (e = {}),
						{
							name: "flip",
							options: e,
							async fn(t) {
								let i;
								const { placement: n, middlewareData: a, rects: r, initialPlacement: s, platform: o, elements: l } = t,
									{
										mainAxis: d = !0,
										crossAxis: c = !0,
										fallbackPlacements: u,
										fallbackStrategy: h = "bestFit",
										fallbackAxisSideDirection: f = "none",
										flipAlignment: p = !0,
										...m
									} = e,
									g = Rt(n),
									v = Rt(s) === s,
									y = await (null == o.isRTL ? void 0 : o.isRTL(l.floating)),
									b =
										u ||
										(v || !p
											? [Jt(s)]
											: (function (e) {
													const t = Jt(e);
													return [Yt(e), t, Yt(t)];
												})(s));
								u ||
									"none" === f ||
									b.push(
										...(function (e, t, i, n) {
											const a = zt(e);
											let r = (function (e, t, i) {
												const n = ["left", "right"],
													a = ["right", "left"],
													r = ["top", "bottom"],
													s = ["bottom", "top"];
												switch (e) {
													case "top":
													case "bottom":
														return i ? (t ? a : n) : t ? n : a;
													case "left":
													case "right":
														return t ? r : s;
													default:
														return [];
												}
											})(Rt(e), "start" === i, n);
											return a && ((r = r.map(e => e + "-" + a)), t && (r = r.concat(r.map(Yt)))), r;
										})(s, p, f, y),
									);
								const w = [s, ...b],
									k = await Dt(t, m),
									_ = [];
								let x = (null == (i = a.flip) ? void 0 : i.overflows) || [];
								if ((d && _.push(k[g]), c)) {
									const { main: e, cross: t } = Gt(n, r, y);
									_.push(k[e], k[t]);
								}
								if (((x = [...x, { placement: n, overflows: _ }]), !_.every(e => e <= 0))) {
									let E, S;
									const e = ((null == (E = a.flip) ? void 0 : E.index) || 0) + 1,
										t = w[e];
									if (t) return { data: { index: e, overflows: x }, reset: { placement: t } };
									let i = null == (S = x.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : S.placement;
									if (!i)
										switch (h) {
											case "bestFit": {
												let T;
												const e =
													null ==
													(T = x.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0])
														? void 0
														: T[0];
												e && (i = e);
												break;
											}
											case "initialPlacement":
												i = s;
										}
									if (n !== i) return { reset: { placement: i } };
								}
								return {};
							},
						}
					);
				};
				const ei = function (e) {
					return (
						void 0 === e && (e = 0),
						{
							name: "offset",
							options: e,
							async fn(t) {
								const { x: i, y: n } = t,
									a = await (async function (e, t) {
										const { placement: i, platform: n, elements: a } = e,
											r = await (null == n.isRTL ? void 0 : n.isRTL(a.floating)),
											s = Rt(i),
											o = zt(i),
											l = "x" === Wt(i),
											d = ["left", "top"].includes(s) ? -1 : 1,
											c = r && l ? -1 : 1,
											u = "function" == typeof t ? t(e) : t;
										let {
											mainAxis: h,
											crossAxis: f,
											alignmentAxis: p,
										} = "number" == typeof u
											? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
											: { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
										return o && "number" == typeof p && (f = "end" === o ? -1 * p : p), l ? { x: f * c, y: h * d } : { x: h * d, y: f * c };
									})(t, e);
								return { x: i + a.x, y: n + a.y, data: a };
							},
						}
					);
				};
				function ti(e) {
					return "x" === e ? "y" : "x";
				}
				const ii = function (e) {
						return (
							void 0 === e && (e = {}),
							{
								name: "shift",
								options: e,
								async fn(t) {
									const { x: i, y: n, placement: a } = t,
										{
											mainAxis: r = !0,
											crossAxis: s = !1,
											limiter: o = {
												fn: e => {
													let { x: t, y: i } = e;
													return { x: t, y: i };
												},
											},
											...l
										} = e,
										d = { x: i, y: n },
										c = await Dt(t, l),
										u = Wt(Rt(a)),
										h = ti(u);
									let f = d[u],
										p = d[h];
									if (r) {
										const e = "y" === u ? "bottom" : "right";
										f = Kt(f + c["y" === u ? "top" : "left"], f, f - c[e]);
									}
									if (s) {
										const e = "y" === h ? "bottom" : "right";
										p = Kt(p + c["y" === h ? "top" : "left"], p, p - c[e]);
									}
									const m = o.fn({ ...t, [u]: f, [h]: p });
									return { ...m, data: { x: m.x - i, y: m.y - n } };
								},
							}
						);
					},
					ni = function (e) {
						return (
							void 0 === e && (e = {}),
							{
								options: e,
								fn(t) {
									const { x: i, y: n, placement: a, rects: r, middlewareData: s } = t,
										{ offset: o = 0, mainAxis: l = !0, crossAxis: d = !0 } = e,
										c = { x: i, y: n },
										u = Wt(a),
										h = ti(u);
									let f = c[u],
										p = c[h];
									const m = "function" == typeof o ? o(t) : o,
										g = "number" == typeof m ? { mainAxis: m, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...m };
									if (l) {
										const e = "y" === u ? "height" : "width",
											t = r.reference[u] - r.floating[e] + g.mainAxis,
											i = r.reference[u] + r.reference[e] - g.mainAxis;
										f < t ? (f = t) : f > i && (f = i);
									}
									if (d) {
										let v, y;
										const e = "y" === u ? "width" : "height",
											t = ["top", "left"].includes(Rt(a)),
											i = r.reference[h] - r.floating[e] + ((t && (null == (v = s.offset) ? void 0 : v[h])) || 0) + (t ? 0 : g.crossAxis),
											n = r.reference[h] + r.reference[e] + (t ? 0 : (null == (y = s.offset) ? void 0 : y[h]) || 0) - (t ? g.crossAxis : 0);
										p < i ? (p = i) : p > n && (p = n);
									}
									return { [u]: f, [h]: p };
								},
							}
						);
					};
				function ai(e) {
					let t;
					return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
				}
				function ri(e) {
					return ai(e).getComputedStyle(e);
				}
				function si(e) {
					return e instanceof ai(e).Node;
				}
				function oi(e) {
					return si(e) ? (e.nodeName || "").toLowerCase() : "";
				}
				let li;
				function di() {
					if (li) return li;
					const e = navigator.userAgentData;
					return e && Array.isArray(e.brands) ? ((li = e.brands.map(e => e.brand + "/" + e.version).join(" ")), li) : navigator.userAgent;
				}
				function ci(e) {
					return e instanceof ai(e).HTMLElement;
				}
				function ui(e) {
					return e instanceof ai(e).Element;
				}
				function hi(e) {
					return "undefined" != typeof ShadowRoot && (e instanceof ai(e).ShadowRoot || e instanceof ShadowRoot);
				}
				function fi(e) {
					const { overflow: t, overflowX: i, overflowY: n, display: a } = ri(e);
					return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
				}
				function pi(e) {
					return ["table", "td", "th"].includes(oi(e));
				}
				function mi(e) {
					const t = /firefox/i.test(di()),
						i = ri(e),
						n = i.backdropFilter || i.WebkitBackdropFilter;
					return (
						"none" !== i.transform ||
						"none" !== i.perspective ||
						(!!n && "none" !== n) ||
						(t && "filter" === i.willChange) ||
						(t && !!i.filter && "none" !== i.filter) ||
						["transform", "perspective"].some(e => i.willChange.includes(e)) ||
						["paint", "layout", "strict", "content"].some(e => {
							const t = i.contain;
							return null != t && t.includes(e);
						})
					);
				}
				function gi() {
					return /^((?!chrome|android).)*safari/i.test(di());
				}
				function vi(e) {
					return ["html", "body", "#document"].includes(oi(e));
				}
				const yi = Math.min,
					bi = Math.max,
					wi = Math.round;
				function ki(e) {
					const t = ri(e);
					let i = parseFloat(t.width) || 0,
						n = parseFloat(t.height) || 0;
					const a = ci(e),
						r = a ? e.offsetWidth : i,
						s = a ? e.offsetHeight : n,
						o = wi(i) !== r || wi(n) !== s;
					return o && ((i = r), (n = s)), { width: i, height: n, fallback: o };
				}
				function _i(e) {
					return ui(e) ? e : e.contextElement;
				}
				const xi = { x: 1, y: 1 };
				function Ei(e) {
					const t = _i(e);
					if (!ci(t)) return xi;
					const i = t.getBoundingClientRect(),
						{ width: n, height: a, fallback: r } = ki(t);
					let s = (r ? wi(i.width) : i.width) / n,
						o = (r ? wi(i.height) : i.height) / a;
					return (s && Number.isFinite(s)) || (s = 1), (o && Number.isFinite(o)) || (o = 1), { x: s, y: o };
				}
				function Si(e, t, i, n) {
					let a, r;
					void 0 === t && (t = !1), void 0 === i && (i = !1);
					const s = e.getBoundingClientRect(),
						o = _i(e);
					let l = xi;
					t && (n ? ui(n) && (l = Ei(n)) : (l = Ei(e)));
					const d = o ? ai(o) : window,
						c = gi() && i;
					let u = (s.left + ((c && (null == (a = d.visualViewport) ? void 0 : a.offsetLeft)) || 0)) / l.x,
						h = (s.top + ((c && (null == (r = d.visualViewport) ? void 0 : r.offsetTop)) || 0)) / l.y,
						f = s.width / l.x,
						p = s.height / l.y;
					if (o) {
						const e = ai(o),
							t = n && ui(n) ? ai(n) : n;
						let i = e.frameElement;
						for (; i && n && t !== e; ) {
							const e = Ei(i),
								t = i.getBoundingClientRect(),
								n = getComputedStyle(i);
							(t.x += (i.clientLeft + parseFloat(n.paddingLeft)) * e.x),
								(t.y += (i.clientTop + parseFloat(n.paddingTop)) * e.y),
								(u *= e.x),
								(h *= e.y),
								(f *= e.x),
								(p *= e.y),
								(u += t.x),
								(h += t.y),
								(i = ai(i).frameElement);
						}
					}
					return $t({ width: f, height: p, x: u, y: h });
				}
				function Ti(e) {
					return ((si(e) ? e.ownerDocument : e.document) || window.document).documentElement;
				}
				function Ci(e) {
					return ui(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
				}
				function ji(e) {
					return Si(Ti(e)).left + Ci(e).scrollLeft;
				}
				function Ii(e) {
					if ("html" === oi(e)) return e;
					const t = e.assignedSlot || e.parentNode || (hi(e) && e.host) || Ti(e);
					return hi(t) ? t.host : t;
				}
				function Ai(e) {
					const t = Ii(e);
					return vi(t) ? t.ownerDocument.body : ci(t) && fi(t) ? t : Ai(t);
				}
				function Oi(e, t) {
					let i;
					void 0 === t && (t = []);
					const n = Ai(e),
						a = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
						r = ai(n);
					return a ? t.concat(r, r.visualViewport || [], fi(n) ? n : []) : t.concat(n, Oi(n));
				}
				function Pi(e, t, i) {
					let n;
					if ("viewport" === t)
						n = (function (e, t) {
							const i = ai(e),
								n = Ti(e),
								a = i.visualViewport;
							let r = n.clientWidth,
								s = n.clientHeight,
								o = 0,
								l = 0;
							if (a) {
								(r = a.width), (s = a.height);
								const e = gi();
								(!e || (e && "fixed" === t)) && ((o = a.offsetLeft), (l = a.offsetTop));
							}
							return { width: r, height: s, x: o, y: l };
						})(e, i);
					else if ("document" === t)
						n = (function (e) {
							const t = Ti(e),
								i = Ci(e),
								n = e.ownerDocument.body,
								a = bi(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
								r = bi(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
							let s = -i.scrollLeft + ji(e);
							const o = -i.scrollTop;
							return "rtl" === ri(n).direction && (s += bi(t.clientWidth, n.clientWidth) - a), { width: a, height: r, x: s, y: o };
						})(Ti(e));
					else if (ui(t))
						n = (function (e, t) {
							const i = Si(e, !0, "fixed" === t),
								n = i.top + e.clientTop,
								a = i.left + e.clientLeft,
								r = ci(e) ? Ei(e) : { x: 1, y: 1 };
							return { width: e.clientWidth * r.x, height: e.clientHeight * r.y, x: a * r.x, y: n * r.y };
						})(t, i);
					else {
						const i = { ...t };
						if (gi()) {
							let a, r;
							const t = ai(e);
							(i.x -= (null == (a = t.visualViewport) ? void 0 : a.offsetLeft) || 0),
								(i.y -= (null == (r = t.visualViewport) ? void 0 : r.offsetTop) || 0);
						}
						n = i;
					}
					return $t(n);
				}
				function Li(e, t) {
					const i = Ii(e);
					return !(i === t || !ui(i) || vi(i)) && ("fixed" === ri(i).position || Li(i, t));
				}
				function zi(e, t) {
					return ci(e) && "fixed" !== ri(e).position ? (t ? t(e) : e.offsetParent) : null;
				}
				function Fi(e, t) {
					const i = ai(e);
					if (!ci(e)) return i;
					let n = zi(e, t);
					for (; n && pi(n) && "static" === ri(n).position; ) n = zi(n, t);
					return n && ("html" === oi(n) || ("body" === oi(n) && "static" === ri(n).position && !mi(n)))
						? i
						: n ||
								(function (e) {
									let t = Ii(e);
									for (; ci(t) && !vi(t); ) {
										if (mi(t)) return t;
										t = Ii(t);
									}
									return null;
								})(e) ||
								i;
				}
				function Ri(e, t, i) {
					const n = ci(t),
						a = Ti(t),
						r = Si(e, !0, "fixed" === i, t);
					let s = { scrollLeft: 0, scrollTop: 0 };
					const o = { x: 0, y: 0 };
					if (n || (!n && "fixed" !== i))
						if ((("body" !== oi(t) || fi(a)) && (s = Ci(t)), ci(t))) {
							const e = Si(t, !0);
							(o.x = e.x + t.clientLeft), (o.y = e.y + t.clientTop);
						} else a && (o.x = ji(a));
					return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
				}
				const Wi = {
					getClippingRect: function (e) {
						let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
						const r =
								"clippingAncestors" === i
									? (function (e, t) {
											const i = t.get(e);
											if (i) return i;
											let n = Oi(e).filter(e => ui(e) && "body" !== oi(e)),
												a = null;
											const r = "fixed" === ri(e).position;
											let s = r ? Ii(e) : e;
											for (; ui(s) && !vi(s); ) {
												const t = ri(s),
													i = mi(s);
												i || "fixed" !== t.position || (a = null),
													(
														r
															? !i && !a
															: (!i && "static" === t.position && a && ["absolute", "fixed"].includes(a.position)) || (fi(s) && !i && Li(e, s))
													)
														? (n = n.filter(e => e !== s))
														: (a = t),
													(s = Ii(s));
											}
											return t.set(e, n), n;
										})(t, this._c)
									: [].concat(i),
							s = [...r, n],
							o = s[0],
							l = s.reduce(
								(e, i) => {
									const n = Pi(t, i, a);
									return (
										(e.top = bi(n.top, e.top)),
										(e.right = yi(n.right, e.right)),
										(e.bottom = yi(n.bottom, e.bottom)),
										(e.left = bi(n.left, e.left)),
										e
									);
								},
								Pi(t, o, a),
							);
						return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
					},
					convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
						let { rect: t, offsetParent: i, strategy: n } = e;
						const a = ci(i),
							r = Ti(i);
						if (i === r) return t;
						let s = { scrollLeft: 0, scrollTop: 0 },
							o = { x: 1, y: 1 };
						const l = { x: 0, y: 0 };
						if ((a || (!a && "fixed" !== n)) && (("body" !== oi(i) || fi(r)) && (s = Ci(i)), ci(i))) {
							const e = Si(i);
							(o = Ei(i)), (l.x = e.x + i.clientLeft), (l.y = e.y + i.clientTop);
						}
						return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
					},
					isElement: ui,
					getDimensions: function (e) {
						return ki(e);
					},
					getOffsetParent: Fi,
					getDocumentElement: Ti,
					getScale: Ei,
					async getElementRects(e) {
						let { reference: t, floating: i, strategy: n } = e;
						const a = this.getOffsetParent || Fi,
							r = this.getDimensions;
						return { reference: Ri(t, await a(i), n), floating: { x: 0, y: 0, ...(await r(i)) } };
					},
					getClientRects: e => Array.from(e.getClientRects()),
					isRTL: e => "rtl" === ri(e).direction,
				};
				class Ni {
					constructor(e) {
						(this.initialFullscreenSrc = null),
							(this.isWidgetIframeLoaded = !1),
							(this.hasDetectedButton = !1),
							(this._observer = null),
							(this._observerTimeout = null),
							(this.config = e),
							(this.iframeElement = null),
							(this.floatingElement = null),
							(this.referenceElement = null),
							(this.cleanupUpdate = null),
							(this.unviewedChangelogCount = null),
							(this.fullscreenOverlay = null),
							(this.fullscreenIframeElement = null),
							(this.initialFullscreenSrc = null),
							(this.isWidgetIframeLoaded = !1),
							(this.updatePosition = this.updatePosition.bind(this));
					}
					initialize() {
						this.setupFloatingElement(),
							this.setupFullscreenPopup(),
							this.setupListeners(),
							this.startBadgeCheckInterval(),
							this.config.lazyLoadDropdown || this.checkForChangelogButton();
					}
					setupFloatingElement() {
						this.floatingElement ||
							((this.floatingElement = document.createElement("div")),
							this.floatingElement.classList.add("fb-changelog-popup-hidden", "fb-changelog-popup-wrapper"),
							this.floatingElement.setAttribute("data-featurebase-widget", ""),
							(this.floatingElement.style.background = "dark" === this.config.theme ? "#242837" : "#fff"),
							(this.floatingElement.style.filter =
								"dark" === this.config.theme ? "drop-shadow(0 25px 25px rgb(0 0 0 / 0.45))" : "drop-shadow(0 20px 13px rgb(0 0 0 / 0.1)"),
							(this.floatingElement.tabIndex = -1),
							(this.floatingElement.style.top = "0px"),
							(this.floatingElement.style.left = "0px"),
							document.body.appendChild(this.floatingElement));
					}
					createWidgetIframe() {
						if (this.isWidgetIframeLoaded || !this.floatingElement) return;
						this.iframeElement = document.createElement("iframe");
						const e =
								"production" === Tt()
									? `https://${this.config.organization}.featurebase.app/${this.config.locale}/widget/changelogWidgetSSR`
									: `http://${this.config.organization}.localhost:3000/${this.config.locale}/widget/changelogWidgetSSR`,
							t = new URL(e);
						t.searchParams.set("theme", this.config.theme),
							this.config.jwtToken && t.searchParams.set("jwtToken", this.config.jwtToken),
							(this.iframeElement.src = t.toString()),
							this.iframeElement.setAttribute("allow", "fullscreen; clipboard-write"),
							this.iframeElement.classList.add("fb-changelog-popup-iframe"),
							(this.iframeElement.style.background = "dark" === this.config.theme ? "#242837" : "#fff"),
							this.floatingElement.append(this.iframeElement),
							(this.isWidgetIframeLoaded = !0);
					}
					setupFullscreenPopup() {
						if (!this.config.fullscreenPopup) return;
						(this.fullscreenOverlay = document.createElement("div")),
							this.fullscreenOverlay.classList.add("fb-changelog-popup-overlay"),
							this.fullscreenOverlay.setAttribute("data-featurebase-widget", ""),
							(this.fullscreenOverlay.style.background = "dark" === this.config.theme ? "rgba(16 , 18, 25, 0.8)" : "rgba(255, 255, 255, 0.1)"),
							(this.fullscreenOverlay.tabIndex = -1),
							this.fullscreenOverlay.setAttribute(
								"sandbox",
								"allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals",
							),
							(this.fullscreenIframeElement = document.createElement("iframe"));
						const e =
								"production" === Tt()
									? `https://${this.config.organization}.featurebase.app/${this.config.locale}/widget/changelogPopupSSR`
									: `http://${this.config.organization}.localhost:3000/${this.config.locale}/widget/changelogPopupSSR`,
							t = new URL(e);
						t.searchParams.set("theme", this.config.theme),
							this.config.usersName && t.searchParams.set("name", this.config.usersName),
							this.config.alwaysShow && t.searchParams.set("alwaysShow", this.config.alwaysShow.toString()),
							this.config.jwtToken && t.searchParams.set("jwtToken", this.config.jwtToken);
						const i = localStorage.getItem("FBVisitedChangelogsTracker-" + this.config.organization);
						i && t.searchParams.set("trackerData", encodeURIComponent(i)),
							(this.fullscreenIframeElement.src = t.toString()),
							(this.initialFullscreenSrc = t.toString()),
							this.fullscreenIframeElement.setAttribute("allow", "fullscreen; clipboard-write"),
							this.fullscreenIframeElement.classList.add("fb-changelog-popup-overlay-iframe"),
							(this.fullscreenIframeElement.style.background = "dark" === this.config.theme ? "#242837" : "#f5f6f9"),
							(this.fullscreenIframeElement.style.boxShadow =
								"dark" === this.config.theme ? " 0 25px 25px rgba(0, 0, 0, 0.25)" : "0 15px 25px rgb(0 0 0 / 0.1)"),
							(this.fullscreenIframeElement.style.border = "dark" === this.config.theme ? "1px solid #32384D" : "1px solid #DEE1EA"),
							this.fullscreenOverlay.append(this.fullscreenIframeElement),
							this.fullscreenOverlay.classList.add("fb-changelog-popup-overlay-hidden", "fb-changelog-popup-display-none"),
							document.body.appendChild(this.fullscreenOverlay);
					}
					handleClickEvent(e) {
						let t, i, n;
						if (!e || !e.target) return;
						let a = e.target;
						if (
							(this.config.fullscreenPopup &&
								(null == this ? void 0 : this.fullscreenOverlay) &&
								!(null === (i = null === (t = null == this ? void 0 : this.fullscreenOverlay) || void 0 === t ? void 0 : t.classList) || void 0 === i
									? void 0
									: i.contains("fb-changelog-popup-overlay-hidden")) &&
								(e.target === this.fullscreenIframeElement ||
									(null === (n = this.fullscreenIframeElement) || void 0 === n ? void 0 : n.contains(e.target)) ||
									(this.togglePopupWidget(!1), this.setAllAsViewed())),
							"handled" === this.handleOutsideClickEvent(a))
						)
							return;
						const r = document.querySelectorAll("button[data-featurebase-changelog]");
						for (let s = 0; s < r.length; s++) {
							let o = r[s];
							if (e.target === r[s] || o.contains(e.target)) return this.handleClickInsideButton(o);
						}
					}
					handleClickInsideButton(e) {
						e &&
							((this.referenceElement = e),
							this.config.lazyLoadDropdown && !this.isWidgetIframeLoaded && this.createWidgetIframe(),
							this.referenceElement &&
								this.floatingElement &&
								this.updatePosition &&
								(this.updatePosition(),
								this.floatingElement &&
									(this.floatingElement.classList.contains("fb-changelog-popup-hidden")
										? ((this.cleanupUpdate = (function (e, t, i, n) {
												void 0 === n && (n = {});
												const { ancestorScroll: a = !0, ancestorResize: r = !0, elementResize: s = !0, animationFrame: o = !1 } = n,
													l = a || r ? [...(ui(e) ? Oi(e) : e.contextElement ? Oi(e.contextElement) : []), ...Oi(t)] : [];
												l.forEach(e => {
													const t = !ui(e) && e.toString().includes("V");
													!a || (o && !t) || e.addEventListener("scroll", i, { passive: !0 }), r && e.addEventListener("resize", i);
												});
												let d,
													c = null;
												s &&
													((c = new ResizeObserver(() => {
														i();
													})),
													ui(e) && !o && c.observe(e),
													ui(e) || !e.contextElement || o || c.observe(e.contextElement),
													c.observe(t));
												let u = o ? Si(e) : null;
												return (
													o &&
														(function t() {
															const n = Si(e);
															!u || (n.x === u.x && n.y === u.y && n.width === u.width && n.height === u.height) || i(),
																(u = n),
																(d = requestAnimationFrame(t));
														})(),
													i(),
													() => {
														let e;
														l.forEach(e => {
															a && e.removeEventListener("scroll", i), r && e.removeEventListener("resize", i);
														}),
															null == (e = c) || e.disconnect(),
															(c = null),
															o && cancelAnimationFrame(d);
													}
												);
											})(this.referenceElement, this.floatingElement, this.updatePosition)),
											this.floatingElement.classList.remove("fb-changelog-popup-hidden"),
											this.floatingElement.classList.add("fb-changelog-popup"),
											this.trackChangelogOpen(!1))
										: (this.floatingElement.classList.remove("fb-changelog-popup"),
											this.floatingElement.classList.add("fb-changelog-popup-hidden"),
											this.cleanupUpdate && (this.cleanupUpdate(), (this.cleanupUpdate = null))))));
					}
					handleOutsideClickEvent(e) {
						return e &&
							this.floatingElement &&
							this.floatingElement.classList.contains("fb-changelog-popup") &&
							!this.floatingElement.contains(e) &&
							this.referenceElement &&
							!this.referenceElement.contains(e) &&
							(this.floatingElement.classList.remove("fb-changelog-popup"),
							this.floatingElement.classList.add("fb-changelog-popup-hidden"),
							this.cleanupUpdate)
							? (this.cleanupUpdate(), (this.cleanupUpdate = null), "handled")
							: "not-handled";
					}
					togglePopupWidget(e = !1) {
						let t, i, n;
						e
							? (null === (i = this.fullscreenOverlay) || void 0 === i || i.classList.remove("fb-changelog-popup-overlay-hidden"),
								null === (n = this.fullscreenOverlay) || void 0 === n || n.classList.remove("fb-changelog-popup-display-none"))
							: (null === (t = this.fullscreenOverlay) || void 0 === t || t.classList.add("fb-changelog-popup-overlay-hidden"),
								setTimeout(() => {
									let e;
									null === (e = this.fullscreenOverlay) || void 0 === e || e.classList.add("fb-changelog-popup-display-none");
								}, 300));
					}
					setupListeners() {
						const e = this;
						if (
							(document.addEventListener(
								"click",
								function (t) {
									e.handleClickEvent(t);
								},
								!0,
							),
							!this.config.lazyLoadDropdown)
						) {
							const e = new MutationObserver(() => {
								this._observerTimeout && clearTimeout(this._observerTimeout),
									(this._observerTimeout = setTimeout(() => this.checkForChangelogButton(), 100));
							});
							e.observe(document.body, { childList: !0, subtree: !0, attributes: !1, characterData: !1 }), (this._observer = e);
						}
						window.addEventListener("message", this.handleIframeMessage.bind(this), !1),
							this.config.fullscreenPopup &&
								(window.addEventListener(
									"keydown",
									function (t) {
										e.handleKeyPressEvent(t);
									},
									!0,
								),
								window.addEventListener("resize", this.handleResizeEvent.bind(this))),
							document.addEventListener("identifyAuthChange", e => {
								const t = e;
								t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail);
							});
					}
					handleGlobalAuthChange(e) {
						this.fullscreenIframeElement && this.iframeElement && Ct(e, this.config, [this.fullscreenIframeElement, this.iframeElement]);
					}
					handleKeyPressEvent(e) {
						let t, i;
						["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) &&
							this.fullscreenOverlay &&
							!this.fullscreenOverlay.classList.contains("fb-feedback-widget-overlay-hidden") &&
							(null === (i = null === (t = this.iframeElement) || void 0 === t ? void 0 : t.contentWindow) ||
								void 0 === i ||
								i.postMessage({ target: "FeaturebaseWidget", data: { action: "numberKeyPress", key: e.key } }, "*")),
							"Escape" === e.key &&
								this.fullscreenOverlay &&
								!this.fullscreenOverlay.classList.contains("fb-feedback-widget-overlay-hidden") &&
								(this.togglePopupWidget(!1), this.setAllAsViewed());
					}
					handleResizeEvent() {
						let e, t, i;
						if (null === (e = this.fullscreenIframeElement) || void 0 === e ? void 0 : e.contentWindow) {
							const e = document.body.offsetWidth;
							null === (i = null === (t = null == this ? void 0 : this.fullscreenIframeElement) || void 0 === t ? void 0 : t.contentWindow) ||
								void 0 === i ||
								i.postMessage({ target: "FeaturebaseWidget", data: { action: "viewportResized", width: e } }, "*");
						}
					}
					setAllAsViewed() {
						let e, t;
						null === (t = null === (e = null == this ? void 0 : this.fullscreenIframeElement) || void 0 === e ? void 0 : e.contentWindow) ||
							void 0 === t ||
							t.postMessage({ target: "FeaturebaseWidget", data: { action: "setAsViewed" } }, "*");
					}
					handleIframeMessage(e) {
						let t, i;
						if ((e.preventDefault(), e.data && "FeaturebaseWidget" === e.data.target))
							switch (e.data.data.action) {
								case "menuHeightChanged":
									this.floatingElement &&
										((this.floatingElement.style.height = `${e.data.data.data}px`),
										(this.floatingElement.style.maxHeight = e.data.data.data >= 350 ? "350px" : `${e.data.data.data}px`));
									break;
								case "popupHeightChanged":
									this.fullscreenIframeElement && (this.fullscreenIframeElement.style.height = `${e.data.data.data}px`);
									break;
								case "closeWidget":
									this.fullscreenOverlay && this.togglePopupWidget(!1);
									break;
								case "updateHasUpdates":
									if (!this.config.organization) return;
									localStorage.setItem("FBVisitedChangelogsTracker-" + this.config.organization, e.data.data.data);
									const n = document.getElementById("fb-update-badge");
									localStorage.getItem("FBVisitedChangelogsTracker") && localStorage.removeItem("FBVisitedChangelogsTracker");
									const a = JSON.parse(
										localStorage.getItem("FBVisitedChangelogsTracker-" + this.config.organization) ||
											localStorage.getItem("FBVisitedChangelogsTracker") ||
											"{}",
									);
									if (this.config.fullscreenPopup) {
										(null === (t = null == a ? void 0 : a.unviewedChangelogs) || void 0 === t ? void 0 : t.length) >= 1 &&
											(this.handleResizeEvent(), this.config.alwaysShow || (this.togglePopupWidget(!0), this.trackChangelogOpen(!0)));
									}
									if (
										((this.unviewedChangelogCount =
											(null === (i = null == a ? void 0 : a.unviewedChangelogs) || void 0 === i ? void 0 : i.length) || 0),
										n)
									) {
										let e = "";
										n && (e = this.unviewedChangelogCount >= 1 ? this.unviewedChangelogCount : ""), (n.innerHTML = e);
									}
									break;
								default:
									return;
							}
					}
					updatePosition() {
						if (this.referenceElement && this.floatingElement) {
							let e = [Qt(), ii({ limiter: ni() }), ei(8), ii({ padding: 8 })];
							"auto" === this.config.placement &&
								e.push(
									(function (e) {
										return (
											void 0 === e && (e = {}),
											{
												name: "autoPlacement",
												options: e,
												async fn(t) {
													let i, n, a;
													const { rects: r, middlewareData: s, placement: o, platform: l, elements: d } = t,
														{ crossAxis: c = !1, alignment: u, allowedPlacements: h = Ht, autoAlignment: f = !0, ...p } = e,
														m =
															void 0 !== u || h === Ht
																? (function (e, t, i) {
																		return (e ? [...i.filter(t => zt(t) === e), ...i.filter(t => zt(t) !== e)] : i.filter(e => Rt(e) === e)).filter(
																			i => !e || zt(i) === e || (!!t && Yt(i) !== i),
																		);
																	})(u || null, f, h)
																: h,
														g = await Dt(t, p),
														v = (null == (i = s.autoPlacement) ? void 0 : i.index) || 0,
														y = m[v];
													if (null == y) return {};
													const { main: b, cross: w } = Gt(y, r, await (null == l.isRTL ? void 0 : l.isRTL(d.floating)));
													if (o !== y) return { reset: { placement: m[0] } };
													const k = [g[Rt(y)], g[b], g[w]],
														_ = [...((null == (n = s.autoPlacement) ? void 0 : n.overflows) || []), { placement: y, overflows: k }],
														x = m[v + 1];
													if (x) return { data: { index: v + 1, overflows: _ }, reset: { placement: x } };
													const E = _.map(e => {
															const t = zt(e.placement);
															return [e.placement, t && c ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows];
														}).sort((e, t) => e[1] - t[1]),
														S = (null == (a = E.filter(e => e[2].slice(0, zt(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? void 0 : a[0]) || E[0][0];
													return S !== o ? { data: { index: v + 1, overflows: _ }, reset: { placement: S } } : {};
												},
											}
										);
									})(),
								),
								((e, t, i) => {
									const n = new Map(),
										a = { platform: Wi, ...i },
										r = { ...a.platform, _c: n };
									return Zt(e, t, { ...a, platform: r });
								})(this.referenceElement, this.floatingElement, {
									placement: "auto" !== this.config.placement ? this.config.placement : void 0,
									middleware: e,
								}).then(({ x: e, y: t }) => {
									this.floatingElement && Object.assign(this.floatingElement.style, { left: `${e}px`, top: `${t}px` });
								});
						}
					}
					manuallyOpenChangelogPopup(e) {
						if (this.fullscreenOverlay && this.fullscreenIframeElement) {
							const t = new URL(this.fullscreenIframeElement.src);
							let i = !1;
							(null == e ? void 0 : e.slug)
								? t.searchParams.get("slug") !== e.slug && (t.searchParams.set("slug", e.slug), (i = !0))
								: t.searchParams.has("slug") && (t.searchParams.delete("slug"), (i = !0)),
								i && (this.fullscreenIframeElement.src = t.toString()),
								this.togglePopupWidget(!0),
								this.trackChangelogOpen(!0);
						}
					}
					trackChangelogOpen(e = !1) {
						let t, i;
						!e &&
							this.iframeElement &&
							(null === (t = this.iframeElement.contentWindow) ||
								void 0 === t ||
								t.postMessage({ target: "FeaturebaseWidget", data: { action: "smallWidgetOpened" } }, "*")),
							e &&
								this.fullscreenIframeElement &&
								(null === (i = this.fullscreenIframeElement.contentWindow) ||
									void 0 === i ||
									i.postMessage({ target: "FeaturebaseWidget", data: { action: "largeWidgetOpened" } }, "*"));
					}
					getUnviewedChangelogCount() {
						return this.unviewedChangelogCount || 0;
					}
					startBadgeCheckInterval() {
						setInterval(() => {
							this.updateBadgeSpan();
						}, 2500);
					}
					updateBadgeSpan() {
						let e;
						if (0 === this.unviewedChangelogCount) return;
						let t = document.getElementById("fb-update-badge");
						t &&
							"" === t.textContent &&
							(t.textContent = (null === (e = null == this ? void 0 : this.unviewedChangelogCount) || void 0 === e ? void 0 : e.toString()) || "");
					}
					checkForChangelogButton() {
						if (this.hasDetectedButton) return;
						document.querySelector("button[data-featurebase-changelog]") &&
							!this.isWidgetIframeLoaded &&
							((this.hasDetectedButton = !0), this.createWidgetIframe(), this.cleanupObserver());
					}
					cleanupObserver() {
						this._observerTimeout && (clearTimeout(this._observerTimeout), (this._observerTimeout = null)),
							this._observer && (this._observer.disconnect(), (this._observer = null));
					}
					destroy() {
						this._removeEventListeners(),
							this.fullscreenOverlay &&
								this.fullscreenOverlay.parentNode &&
								(this.fullscreenOverlay.parentNode.removeChild(this.fullscreenOverlay), (this.fullscreenOverlay = null)),
							this.floatingElement &&
								this.floatingElement.parentNode &&
								(this.floatingElement.parentNode.removeChild(this.floatingElement), (this.floatingElement = null)),
							(this.iframeElement = null),
							(this.referenceElement = null),
							(this.unviewedChangelogCount = null),
							(this.cleanupUpdate = null),
							(this.fullscreenIframeElement = null),
							(this.isWidgetIframeLoaded = !1),
							this.cleanupObserver();
					}
					_removeEventListeners() {
						const e = this;
						document.removeEventListener(
							"click",
							function (t) {
								e.handleClickEvent(t);
							},
							!0,
						),
							window.removeEventListener("message", this.handleIframeMessage.bind(this), !1),
							this.config.fullscreenPopup &&
								(window.removeEventListener(
									"keydown",
									function (t) {
										e.handleKeyPressEvent(t);
									},
									!0,
								),
								window.removeEventListener("resize", this.handleResizeEvent.bind(this))),
							document.removeEventListener("identifyAuthChange", e => {
								const t = e;
								t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail);
							});
					}
				}
				let Zi = a(981);
				class Mi {
					constructor(e, t) {
						(this.screenshot = null),
							(this.feedbackButtonElement = null),
							(this.getWidgetTheme = () => this.config.theme),
							(this.updateWidgetTheme = e => {
								(this.config.theme = e), this.overlayElement && this.overlayElement.remove(), this.setupWidget();
							}),
							(this.config = e),
							(this.overlayElement = null),
							(this.iframeElement = null),
							(this.feedbackButtonElement = null),
							(this.callbackFunction = t);
					}
					initialize() {
						this.setupListeners(), this.setupWidget();
					}
					setupWidget() {
						let e;
						(this.overlayElement = document.createElement("div")),
							this.overlayElement.classList.add("fb-feedback-widget-overlay"),
							this.overlayElement.setAttribute("data-featurebase-widget", ""),
							(this.overlayElement.style.background =
								"dark" === this.config.theme ? "rgba(var(--fb-feedback-iframe-bg-color), 0.5)" : "rgba(255, 255, 255, 0.05)"),
							(this.iframeElement = document.createElement("iframe"));
						const t =
							"production" === Tt()
								? new URL(`https://${this.config.organization}.featurebase.app/${this.config.locale}/widget/feedbackWidgetSSR`)
								: new URL(`http://${this.config.organization}.localhost:3000/${this.config.locale}/widget/feedbackWidgetSSR`);
						t.searchParams.append("theme", this.config.theme),
							this.config.defaultBoard && t.searchParams.append("defaultBoard", this.config.defaultBoard),
							this.config.jwtToken && t.searchParams.append("jwtToken", this.config.jwtToken),
							(null === (e = this.config) || void 0 === e ? void 0 : e.metadata) &&
								t.searchParams.append("metaData", JSON.stringify(this.config.metadata)),
							(this.iframeElement.src = t.toString()),
							this.iframeElement.classList.add("fb-feedback-widget-iframe"),
							(this.iframeElement.style.background =
								"dark" === this.config.theme ? "rgba(var(--fb-feedback-iframe-bg-color), 1)" : "rgba(245, 246, 249, 0.8)"),
							(this.iframeElement.style.boxShadow =
								"dark" === this.config.theme ? " 0 25px 25px rgba(0, 0, 0, 0.3)" : "0px 17px 17px rgba(0, 0, 0, 0.1)"),
							(this.iframeElement.style.border =
								"dark" === this.config.theme ? "1px solid rgba(var(--fb-feedback-iframe-border-color), 1)" : "1px solid #DEE1EA"),
							(this.overlayElement.tabIndex = -1),
							this.overlayElement.setAttribute(
								"sandbox",
								"allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals",
							),
							this.overlayElement.append(this.iframeElement),
							this.overlayElement.classList.add("fb-feedback-widget-overlay-hidden"),
							document.body.appendChild(this.overlayElement),
							this.iframeElement.focus();
					}
					toggleWidgetFeedbackButton(e) {
						if (this.config.placement) {
							const t = document.querySelector(".fb-feedback-widget-feedback-button-container");
							if (t) e && t.remove();
							else {
								(this.feedbackButtonElement = document.createElement("fbdiv")),
									this.feedbackButtonElement.classList.add("fb-feedback-widget-feedback-button-container");
								const e = document.createElement("fbdiv");
								e.classList.add("fb-feedback-widget-feedback-button"),
									"bottom-left" === this.config.placement
										? e.classList.add("fb-feedback-widget-feedback-button-bl")
										: "bottom-right" === this.config.placement
											? e.classList.add("fb-feedback-widget-feedback-button-br")
											: "right" === this.config.placement
												? e.classList.add("fb-feedback-widget-feedback-button-right")
												: "left" === this.config.placement && e.classList.add("fb-feedback-widget-feedback-button-left"),
									(e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />\n      </svg>\n       ${(0, Zi.I)("feedback", this.config.locale)}`),
									e.classList.add("fb-opacity-07"),
									this.feedbackButtonElement.append(e),
									document.body.appendChild(this.feedbackButtonElement);
							}
						}
					}
					toggleWidget(e = null) {
						let t, i;
						this.overlayElement &&
							(this.overlayElement.classList.contains("fb-feedback-widget-overlay-hidden")
								? (this.trackFeedbackOpen(),
									this.overlayElement.classList.remove("fb-feedback-widget-overlay-hidden"),
									null === (i = null === (t = this.iframeElement) || void 0 === t ? void 0 : t.contentWindow) ||
										void 0 === i ||
										i.postMessage({ target: "FeaturebaseWidget", data: { action: "openFeedbackWidget", setBoard: e || null } }, "*"),
									this.callbackFunction && this.callbackFunction(null, { action: "widgetOpened" }))
								: this.overlayElement.classList.add("fb-feedback-widget-overlay-hidden"),
							this.iframeElement && (null == this || this.iframeElement.focus()));
					}
					screenshotCallback(e) {
						let t, i, n;
						0 === e.length
							? (null === (t = this.screenshot) || void 0 === t || t.toggleVisibility(!1),
								this.overlayElement && this.overlayElement.classList.remove("fb-feedback-widget-overlay-hidden"))
							: (null === (i = this.screenshot) || void 0 === i || i.toggleVisibility(!1),
								this.overlayElement && this.overlayElement.classList.remove("fb-feedback-widget-overlay-hidden"),
								this.iframeElement &&
									(null === (n = this.iframeElement.contentWindow) ||
										void 0 === n ||
										n.postMessage({ target: "FeaturebaseWidget", data: { action: "screenshotCallback", snapshot: e } }, "*"))),
							this.toggleWidgetFeedbackButton();
					}
					handleIframeMessage(e) {
						let t, i, n, r, s, o, l, d, c, u, h;
						if ((e.preventDefault(), e.data && "FeaturebaseWidget" === e.data.target))
							switch (e.data.data.action) {
								case "menuHeightChangedFeedback":
									this.iframeElement &&
										((this.iframeElement.style.transition = "height 0.95s ease, min-height 0.95s ease, opacity 0.2s ease"),
										(this.iframeElement.style.height = `${e.data.data.data}px`),
										(this.iframeElement.style.minHeight = `${e.data.data.data}px`));
									break;
								case "menuHeightChangedFeedbackContent":
									this.iframeElement &&
										((this.iframeElement.style.height = `${e.data.data.data}px`),
										(this.iframeElement.style.minHeight = `${e.data.data.data}px`),
										(this.iframeElement.style.transition = "height 0s ease-in, min-height 0.2s ease, opacity 0.2s ease"));
									break;
								case "closeWidget":
									this.overlayElement && this.overlayElement.classList.add("fb-feedback-widget-overlay-hidden");
									break;
								case "initializeOrg":
									this.overlayElement &&
										(document.documentElement.style.setProperty("--fb-feedback-button-bg-color", e.data.data.data.color),
										document.documentElement.style.setProperty(
											"--fb-feedback-iframe-bg-color",
											null === (t = e.data.data.data) || void 0 === t ? void 0 : t.background,
										),
										document.documentElement.style.setProperty(
											"--fb-feedback-iframe-border-color",
											null === (i = e.data.data.data) || void 0 === i ? void 0 : i.borderColor,
										),
										document.documentElement.style.setProperty(
											"--fb-feedback-button-text-color",
											null === (n = e.data.data.data) || void 0 === n ? void 0 : n.primaryForeground,
										),
										this.toggleWidgetFeedbackButton()),
										this.callbackFunction && this.callbackFunction(null, { action: "widgetReady" });
									break;
								case "openFeedbackWidget":
									const f =
										null === (s = null === (r = null == e ? void 0 : e.data) || void 0 === r ? void 0 : r.data) || void 0 === s ? void 0 : s.setBoard;
									this.toggleWidget(f);
									break;
								case "updateMetadata":
									const p =
										null === (l = null === (o = null == e ? void 0 : e.data) || void 0 === o ? void 0 : o.data) || void 0 === l ? void 0 : l.metadata;
									this.iframeElement &&
										(null === (d = this.iframeElement.contentWindow) ||
											void 0 === d ||
											d.postMessage({ target: "FeaturebaseWidget", data: { action: "updateMetadata", metadata: p } }, "*"));
									break;
								case "feedbackSubmitted":
									this.callbackFunction &&
										this.callbackFunction(null, {
											action: "feedbackSubmitted",
											post:
												null === (u = null === (c = null == e ? void 0 : e.data) || void 0 === c ? void 0 : c.data) || void 0 === u ? void 0 : u.post,
										});
									break;
								case "startScreenshot":
									this.screenshot
										? (this.screenshot.resetEverything(),
											null === (h = this.screenshot) || void 0 === h || h.activate(),
											null == this || this.toggleWidget(),
											this.toggleWidgetFeedbackButton(!0))
										: Promise.all([a.e(682), a.e(92), a.e(154)])
												.then(a.bind(a, 925))
												.then(e => {
													let t;
													(this.screenshot = new e.default(this.config.locale, this.screenshotCallback.bind(this))),
														null === (t = this.screenshot) || void 0 === t || t.activate(),
														null == this || this.toggleWidget(),
														this.toggleWidgetFeedbackButton(!0);
												})
												.catch(e => console.error("Error loading screenshot module:", e));
								default:
									return;
							}
					}
					handleClickEvent(e) {
						if (!e || !e.target) return;
						if (e.target.matches(".fb-feedback-widget-feedback-button")) return this.toggleWidget();
						const t = document.querySelectorAll("button[data-featurebase-feedback]");
						for (let i = 0; i < t.length; i++) {
							let n = t[i];
							if (e.target === t[i] || n.contains(e.target)) return this.toggleWidget();
						}
					}
					handleKeyPressEvent(e) {
						let t, i;
						["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) &&
							this.overlayElement &&
							!this.overlayElement.classList.contains("fb-feedback-widget-overlay-hidden") &&
							(null === (i = null === (t = this.iframeElement) || void 0 === t ? void 0 : t.contentWindow) ||
								void 0 === i ||
								i.postMessage({ target: "FeaturebaseWidget", data: { action: "numberKeyPress", key: e.key } }, "*")),
							"Escape" === e.key &&
								this.overlayElement &&
								!this.overlayElement.classList.contains("fb-feedback-widget-overlay-hidden") &&
								this.toggleWidget();
					}
					setupListeners() {
						const e = this;
						document.addEventListener("click", function (t) {
							e.handleClickEvent(t);
						}),
							window.addEventListener("message", this.handleIframeMessage.bind(this), !1),
							window.addEventListener("keydown", function (t) {
								e.handleKeyPressEvent(t);
							}),
							document.addEventListener("identifyAuthChange", e => {
								const t = e;
								t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail);
							});
					}
					handleGlobalAuthChange(e) {
						this.iframeElement && Ct(e, this.config, [this.iframeElement]);
					}
					trackFeedbackOpen() {
						let e;
						this.iframeElement &&
							(null === (e = this.iframeElement.contentWindow) ||
								void 0 === e ||
								e.postMessage({ target: "FeaturebaseWidget", data: { action: "widgetOpened" } }, "*"));
					}
					destroy() {
						document.removeEventListener("click", this.handleClickEvent),
							window.removeEventListener("message", this.handleIframeMessage.bind(this), !1),
							window.removeEventListener("keydown", this.handleKeyPressEvent),
							document.removeEventListener("identifyAuthChange", this.handleGlobalAuthChange),
							this.overlayElement && (document.body.removeChild(this.overlayElement), (this.overlayElement = null)),
							this.feedbackButtonElement && (document.body.removeChild(this.feedbackButtonElement), (this.feedbackButtonElement = null)),
							this.screenshot && (this.screenshot.deactivate(), (this.screenshot = null)),
							(this.callbackFunction = void 0);
					}
				}
				let $i = a(702),
					Di = a.n($i);
				class Bi extends EventTarget {
					constructor(e) {
						super(),
							(this.initialPath = ""),
							(this.generateConfigQueryParams = () => {
								let e;
								const t = new URLSearchParams();
								return (
									this.config.hideLogo && t.append("hideLogo", "true"),
									this.config.hideMenu && t.append("hideMenu", "true"),
									this.config.theme && t.append("theme", this.config.theme),
									this.config.jwtToken && t.append("jwt", this.config.jwtToken),
									(null === (e = this.config) || void 0 === e ? void 0 : e.metadata) && t.append("metaData", JSON.stringify(this.config.metadata)),
									t.append("embed", "true"),
									t
								);
							}),
							(this.mergeQueryParams = (e, t) => {
								if (!t) return e;
								if ("string" == typeof t)
									try {
										t = new URLSearchParams(t);
									} catch (t) {
										return (
											console.error(
												'[Featurebase SDK] Error with action: "embed". The filters you provided are not in a valid format. Skipping applying the filters. Error:',
												t.message,
											),
											e
										);
									}
								const i = new URL(e, "https://featurebase.app");
								for (let [e, n] of t) i.searchParams.has(e) || i.searchParams.append(e, n);
								return `${i.pathname}${i.search}${i.hash}`;
							}),
							(this.config = e),
							this.config.basePath && !this.config.basePath.startsWith("/") && (this.config.basePath = "/" + this.config.basePath),
							this.config.basePath &&
								this.config.basePath.endsWith("/") &&
								(this.config.basePath = this.config.basePath.substring(0, this.config.basePath.length - 1)),
							this.config.filters && this.config.filters.startsWith("/") && (this.config.filters = this.config.filters.substring(1)),
							this.config.filters && this.config.filters.startsWith("?") && (this.config.filters = this.config.filters.substring(1));
						const t = window.location.pathname + window.location.search + window.location.hash;
						t && this.config.basePath && t.startsWith(this.config.basePath) && (this.initialPath = t.substring(this.config.basePath.length)),
							(this.iframe = null);
					}
					initialize() {
						let e;
						const t = document.querySelector("[data-featurebase-embed]");
						((null === (e = null == t ? void 0 : t.childNodes) || void 0 === e ? void 0 : e.length) || 0) > 0 ||
							(t
								? (this.setupIframeEmbed(), this.setupListeners())
								: console.warn(
										"No element with data-featurebase-embed found in the DOM. Please add the data-featurebase-embed attribute to the element you want to embed the widget into.",
									));
					}
					setupIframeEmbed() {
						if (this.iframe) return;
						let e = this;
						(this.iframe = document.createElement("iframe")),
							this.iframe.setAttribute("id", "featurebase-embed-iframe"),
							this.iframe.setAttribute("class", "featurebase-embed-iframe"),
							this.iframe.setAttribute("referrerPolicy", "origin"),
							this.iframe.setAttribute("width", "100%"),
							this.iframe.setAttribute("height", "1px"),
							this.iframe.classList.add("featurebase-display-none"),
							this.iframe.setAttribute(
								"sandbox",
								"allow-scripts allow-forms allow-storage-access-by-user-activation allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-modals",
							),
							this.iframe.setAttribute("data-featurebase-widget", ""),
							this.iframe.setAttribute("allow", "fullscreen; clipboard-write"),
							this.iframe.setAttribute("frameborder", "0"),
							this.iframe.setAttribute("allow", "clipboard-write"),
							(this.iframe.onload = function () {
								e.iframe &&
									e.iframe.contentWindow &&
									e.config.jwtToken &&
									e.iframe.contentWindow.postMessage({ type: "auth", jwt: e.config.jwtToken }, "*");
							});
						const t = this.generateConfigQueryParams(),
							i = this.mergeQueryParams(this.initialPath || "", t);
						if (this.initialPath && "/" !== this.initialPath) {
							let e = !0;
							wt.some(e => {
								const t = `/${e}`;
								return i.startsWith(`${t}/`) || i === t || i.startsWith(`${t}?`);
							}) && (e = !1),
								this.iframe.setAttribute(
									"src",
									"production" === Tt()
										? `https://${this.config.organization}.featurebase.app/${e ? this.config.locale : ""}${i}`
										: `http://${this.config.organization}.localhost:3000/${e ? this.config.locale : ""}${i}`,
								);
						} else if (this.config.initialPage) {
							const e = this.mergeQueryParams(i, this.config.filters);
							switch (this.config.initialPage) {
								case "Board":
									this.iframe.setAttribute(
										"src",
										"production" === Tt()
											? `https://${this.config.organization}.featurebase.app/${this.config.locale}${e}`
											: `http://${this.config.organization}.localhost:3000/${this.config.locale}${e}`,
									);
									break;
								case "Roadmap":
									this.iframe.setAttribute(
										"src",
										"production" === Tt()
											? `https://${this.config.organization}.featurebase.app/${this.config.locale}/roadmap${e}`
											: `http://${this.config.organization}.localhost:3000/${this.config.locale}/roadmap${e}`,
									);
									break;
								case "Changelog":
									this.iframe.setAttribute(
										"src",
										"production" === Tt()
											? `https://${this.config.organization}.featurebase.app/${this.config.locale}/changelog${e}`
											: `http://${this.config.organization}.localhost:3000/${this.config.locale}/changelog${e}`,
									);
									break;
								case "Help":
									this.iframe.setAttribute(
										"src",
										"production" === Tt()
											? `https://${this.config.organization}.featurebase.app/${this.config.locale}/help${e}`
											: `http://${this.config.organization}.localhost:3000/${this.config.locale}/help${e}`,
									);
									break;
								default:
									this.iframe.setAttribute(
										"src",
										"production" === Tt()
											? `https://${this.config.organization}.featurebase.app/${this.config.locale}${i}`
											: `http://${this.config.organization}.localhost:3000/${this.config.locale}${i}`,
									);
							}
						} else
							this.iframe.setAttribute(
								"src",
								"production" === Tt()
									? `https://${this.config.organization}.featurebase.app/${this.config.locale}${i}`
									: `http://${this.config.organization}.localhost:3000/${this.config.locale}${i}`,
							);
						const n = document.querySelector("[data-featurebase-embed]");
						n
							? (n.appendChild(this.iframe), this.adjustIframeHeight())
							: (document.body.appendChild(this.iframe),
								Di()(
									{
										log: !1,
										onInit: () => {
											e.iframe && (e.iframe.classList.remove("featurebase-display-none"), e.iframe.classList.add("featurebase-display-block"));
										},
										heightCalculationMethod: "lowestElement",
										checkOrigin: !1,
									},
									this.iframe,
								));
					}
					adjustIframeHeight() {
						const e = document.querySelector("[data-featurebase-embed]");
						if (e) {
							let t = null == e ? void 0 : e.getBoundingClientRect().top;
							this.iframe &&
								((this.iframe.style.display = "block"),
								(this.iframe.style.height = "calc(100dvh - " + t + "px)"),
								(this.iframe.style.minHeight = "800px"));
						}
					}
					setupListeners() {
						let e;
						window.addEventListener("message", this.handlePostMessage.bind(this)),
							window.addEventListener("resize", this.adjustIframeHeight.bind(this));
						const t = this;
						null === (e = null == this ? void 0 : this.iframe) ||
							void 0 === e ||
							e.addEventListener("load", () => {
								t.dispatchEvent(new Event("finishedLoading"));
							}),
							document.addEventListener("identifyAuthChange", e => {
								const t = e;
								t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail);
							});
					}
					handleGlobalAuthChange(e) {
						this.iframe && Ct(e, this.config, [this.iframe]);
					}
					handlePostMessage(e) {
						let t, i, n;
						e.preventDefault();
						const a = e.data;
						if (a && "FeaturebaseEmbed" === a.target)
							switch (a.action) {
								case "routeChange":
									if (!this.config.basePath) return;
									const r = (this.config.basePath || "") + a.url;
									window.history.pushState({}, "", r);
									break;
								case "updateMetadata":
									const s = null === (i = null === (t = e.data) || void 0 === t ? void 0 : t.data) || void 0 === i ? void 0 : i.metadata;
									this.iframe &&
										(null === (n = this.iframe.contentWindow) ||
											void 0 === n ||
											n.postMessage({ target: "FeaturebaseWidget", data: { action: "updateMetadata", metadata: s } }, "*"));
									break;
								default:
									return;
							}
					}
				}
				const Ui = bt.object({
						organization: bt.string().nonempty(),
						basePath: bt.string().nullable().default("").optional(),
						jwtToken: bt.string().nullable().default("").optional(),
						hideMenu: bt.boolean().default(!1).optional(),
						hideLogo: bt.boolean().default(!1).optional(),
						initialPage: bt.enum(["Board", "Roadmap", "Changelog", "Help"]).default("Board"),
						filters: bt.string().nullable().default("").optional(),
						theme: bt.enum(["light", "dark", ""]).nullable().default("").optional(),
						metadata: At.optional(),
						locale: kt.default("en"),
						email: bt.string().email().optional(),
						userId: bt.string().optional(),
						userHash: bt.string().optional(),
					}),
					Ki = bt.enum(["text", "link", "rating", "multiple-choice"]),
					Vi = bt.enum(["is", "is not", "is not null", "is null", "contains", "does not contain"]),
					Hi = bt.enum(["greater than", "is", "is not", "is not null", "is null", "less than"]),
					qi = bt.enum(["is one of", "is not in"]),
					Ji = bt.union([
						bt.object({ type: bt.literal("page"), pageId: bt.string().min(2, "pageId can't be empty") }),
						bt.object({ type: bt.literal("end") }),
						bt.object({ type: bt.literal("next") }),
					]),
					Gi = e =>
						bt
							.object({ _id: bt.string(), comparator: bt.union([Vi, Hi, qi]), value: bt.union([e, bt.string().max(0).optional()]), next: Ji })
							.refine(
								t => (["is null", "is not null"].includes(t.comparator) ? void 0 === t.value || "" === t.value : e.safeParse(t.value).success),
								{ message: "Please enter a value for the comparator, otherwise delete the logic.", path: ["value"] },
							),
					Xi = Gi(bt.string().min(1, "Value can't be empty")),
					Yi = Gi(bt.union([bt.number().min(1, "Value must be greater than 0"), bt.string().regex(/^\d+$/, "Value must be a valid number")])),
					Qi = Gi(bt.array(bt.string().min(1, "Value can't be empty")).nonempty("Array can't be empty")),
					en = bt.union([Xi, Yi, Qi]),
					tn = bt.object({
						type: Ki,
						title: bt.string().refine(e => e.trim().length > 0, { message: "Title must contain at least 1 character." }),
						description: bt.string().optional(),
						_id: bt.string().optional(),
						logic: bt.array(en).optional(),
						defaultAction: Ji,
					}),
					nn = bt.object({
						segmentIds: bt.array(bt.string()).optional(),
						url: bt
							.array(bt.object({ value: bt.string(), matchType: bt.enum(["exact", "contains", "regex"]).optional(), _id: bt.string().optional() }))
							.optional(),
						css: bt.array(bt.object({ value: bt.string(), _id: bt.string().optional() })).optional(),
						loginRequired: bt.boolean().optional(),
					}),
					an = tn.extend({
						type: bt.literal("text"),
						placeholder: bt.string().refine(e => e.trim().length > 0, { message: "Placeholder must contain at least 1 character." }),
						logic: bt.array(Xi).optional(),
					}),
					rn = tn.extend({
						type: bt.literal("link"),
						linkButtonText: bt.string().refine(e => e.trim().length > 0, { message: "Link button text must contain at least 1 character." }),
						linkRedirectUrl: bt.string().url(),
						linkTarget: bt.string().refine(e => ["_blank", "_self"].includes(e), { message: 'Link target must be either "_blank" or "_self".' }),
					}),
					sn = tn.extend({
						type: bt.literal("rating"),
						subType: bt.enum(["number", "emoji", "nps"]),
						scale: bt.number(),
						lowLabel: bt.string().refine(e => e.trim().length > 0, { message: "Low label must contain at least 1 character." }),
						highLabel: bt.string().refine(e => e.trim().length > 0, { message: "High label must contain at least 1 character." }),
						logic: bt.array(Yi).optional(),
					}),
					on = bt.enum(["generic", "featurebase-posts"]),
					ln = tn.extend({
						type: bt.literal("multiple-choice"),
						subType: on,
						allowSelectMultiple: bt.boolean().default(!1),
						choices: bt.array(bt.object({ _id: bt.string(), choice: bt.string().nonempty() })),
						logic: bt.array(Qi).optional(),
					}),
					dn = bt.discriminatedUnion("type", [an, rn, sn, ln]),
					cn = bt
						.object({
							isActive: bt.boolean(),
							organization: bt.string(),
							_id: bt.string(),
							title: bt.string().refine(e => e.trim().length > 0, { message: "Title must contain at least 1 character." }),
							description: bt.string().optional(),
							pages: bt.array(dn),
							targeting: nn,
						})
						.passthrough(),
					un =
						(bt.object({ success: bt.boolean(), surveys: bt.array(cn).default([]), message: bt.string().optional() }).passthrough(),
						bt.enum(["bottom-left", "bottom-right"]).default("bottom-right").nullish()),
					hn = bt.object({
						organization: bt.string(),
						jwtToken: bt.string().nullish(),
						placement: un,
						theme: bt.string().optional(),
						locale: kt.default("en"),
						email: bt.string().email().optional().nullish(),
						userId: bt.string().optional().nullish(),
						userHash: bt.string().optional().nullish(),
					}),
					fn = bt.object({ context: hn, survey: bt.any() });
				class pn {
					constructor(e) {
						(this.heightReceivedForTheFirstTime = !0),
							(this.previousHeight = 0),
							(this.linkToOpenOnClose = null),
							(this.surveyCloseCallback = () => {}),
							(this.config = e),
							(this.iframeElement = null),
							(this.widgetWrapper = null),
							(this.iframeWrapper = null),
							(this.closeButton = null);
					}
					initialize() {
						try {
							if (JSON.parse(localStorage.getItem("featurebaseRespondedSurveys") || "[]").includes(this.config.survey._id)) return;
						} catch (e) {}
						this.setupListeners(), this.setupWidget();
					}
					closeWidget(e = "dismiss") {
						if (this.widgetWrapper) {
							if ("dismiss" === e) {
								const e =
									"production" === Tt()
										? `https://${this.config.context.organization}.featurebase.app/api/v1/organization/advancedSurvey/s`
										: `http://${this.config.context.organization}.localhost:3000/api/v1/organization/advancedSurvey/s`;
								fetch(e, {
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ surveyId: this.config.survey._id, type: "dismiss", jwt: this.config.context.jwtToken }),
								});
							}
							try {
								const e = JSON.parse(localStorage.getItem("featurebaseRespondedSurveys") || "[]");
								e.push(this.config.survey._id), localStorage.setItem("featurebaseRespondedSurveys", JSON.stringify(e));
							} catch (e) {}
							this.linkToOpenOnClose && window.open(this.linkToOpenOnClose, "_self"),
								(this.widgetWrapper.style.opacity = "0"),
								setTimeout(() => {
									let e;
									return null === (e = this.widgetWrapper) || void 0 === e ? void 0 : e.remove();
								}, 1e3),
								this.surveyCloseCallback && this.surveyCloseCallback();
						}
					}
					setupWidget() {
						let e;
						if (document.getElementById("fb-survey-widget-iframe"))
							return void console.warn("[Featurebase SDK] An instance of survey widget already exists.");
						(this.widgetWrapper = document.createElement("fbdiv")),
							this.widgetWrapper.setAttribute("data-featurebase-widget", ""),
							(this.widgetWrapper.id = "fb-survey-widget-wrapper"),
							this.widgetWrapper.classList.add("fb-survey-widget-wrapper"),
							(this.widgetWrapper.style.visibility = "hidden"),
							(this.iframeWrapper = document.createElement("fbdiv")),
							(this.iframeWrapper.id = "fb-survey-widget-iframe-wrapper"),
							this.iframeWrapper.classList.add("fb-survey-widget-iframe-wrapper"),
							(this.closeButton = document.createElement("fbdiv")),
							(this.closeButton.id = "fb-survey-widget-close"),
							this.closeButton.classList.add("fb-survey-widget-close"),
							(this.closeButton.innerHTML =
								'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>'),
							this.closeButton.addEventListener("click", () => this.closeWidget()),
							(this.iframeElement = document.createElement("iframe")),
							(this.iframeElement.frameBorder = "0");
						const t =
							"production" === Tt()
								? new URL(`https://${this.config.context.organization}.featurebase.app/${this.config.context.locale || "en"}/widget/surveySSR`)
								: new URL(`http://${this.config.context.organization}.localhost:3000/${this.config.context.locale || "en"}/widget/surveySSR`);
						this.config.context.jwtToken && t.searchParams.append("jwt", this.config.context.jwtToken),
							this.config.context.theme &&
								(t.searchParams.append("theme", this.config.context.theme),
								document.documentElement.style.setProperty(
									"--featurebase-survey-widget-close-btn-color",
									"light" === this.config.context.theme ? "black" : "white",
								)),
							"bottom-left" === this.config.context.placement &&
								(document.documentElement.style.setProperty("--featurebase-survey-widget-wrapper-right", "auto"),
								document.documentElement.style.setProperty(
									"--featurebase-survey-widget-wrapper-left",
									"var(--featurebase-survey-widget-horizontal-padding)",
								));
						const i = null === (e = this.config.survey) || void 0 === e ? void 0 : e._id;
						t.searchParams.append("surveyId", i),
							(this.iframeElement.src = t.toString()),
							(this.iframeElement.id = "fb-survey-widget-iframe"),
							this.iframeElement.classList.add("fb-survey-widget-iframe"),
							this.iframeWrapper.appendChild(this.iframeElement),
							this.iframeWrapper.appendChild(this.closeButton),
							this.widgetWrapper.appendChild(this.iframeWrapper),
							document.body.appendChild(this.widgetWrapper);
					}
					handleIframeMessage(e) {
						let t, i, n;
						if ((e.preventDefault(), e.data && "FeaturebaseWidget" === e.data.target))
							switch (e.data.data.action) {
								case "menuHeightChangedSurvey":
									if (this.iframeElement) {
										if (this.heightReceivedForTheFirstTime && this.widgetWrapper && e.data.data.data > 0) {
											(this.widgetWrapper.style.visibility = "visible"),
												(this.widgetWrapper.style.opacity = "1"),
												(this.heightReceivedForTheFirstTime = !1),
												document.documentElement.style.setProperty(
													"--fb-survey-iframe-primary-color",
													null === (t = e.data.data) || void 0 === t ? void 0 : t.primary,
												),
												document.documentElement.style.setProperty(
													"--fb-survey-iframe-foreground-color",
													null === (i = e.data.data) || void 0 === i ? void 0 : i.foreground,
												),
												document.documentElement.style.setProperty(
													"--fb-survey-iframe-border-color",
													null === (n = e.data.data) || void 0 === n ? void 0 : n.border,
												);
											let a = this.config.context.theme;
											a || (a = "custom" === e.data.data.theme ? "dark" : "client" === e.data.data.theme ? "light" : e.data.data.theme),
												(this.iframeElement.style.boxShadow = "dark" === a ? " 0 25px 25px rgba(0, 0, 0, 0.3)" : "0px 17px 17px rgba(0, 0, 0, 0.1)"),
												(this.iframeElement.style.border =
													"dark" === a ? "1px solid rgba(var(--fb-survey-iframe-primary-color), 0.5)" : "1px solid #DEE1EA");
										}
										0 !== this.previousHeight &&
											this.previousHeight !== e.data.data.data &&
											(this.iframeElement.style.transition = "height 0.95s ease, min-height 0.95s ease, opacity 0.2s ease"),
											(this.iframeElement.style.height = `${e.data.data.data}px`),
											(this.iframeElement.style.minHeight = `${e.data.data.data}px`),
											(this.previousHeight = e.data.data.data);
									}
									break;
								case "closeSurveyWidget":
									this.closeWidget(e.data.data.data);
									break;
								case "openLinkOnClose":
									if (e.data.data.data)
										try {
											const t = new URL(e.data.data.data);
											if ("http:" !== t.protocol && "https:" !== t.protocol) throw new Error("Invalid URL");
											this.linkToOpenOnClose = t.toString();
										} catch (t) {
											console.error("[Featurebase SDK] Invalid URL in link open.", e.data.data.data);
										}
									break;
								default:
									return;
							}
					}
					setupListeners() {
						window.addEventListener("message", this.handleIframeMessage.bind(this), !1),
							document.addEventListener("identifyAuthChange", e => {
								const t = e;
								t.detail && t.detail.jwtToken && this.handleGlobalAuthChange(t.detail);
							});
					}
					handleGlobalAuthChange(e) {
						let t, i;
						if (
							(null == e ? void 0 : e.jwtToken) &&
							this.iframeElement &&
							(null === (i = null === (t = this.config) || void 0 === t ? void 0 : t.context) || void 0 === i ? void 0 : i.jwtToken) !== e.jwtToken
						) {
							this.config.context.jwtToken = e.jwtToken;
							const t = new URL(this.iframeElement.src);
							t.searchParams.set("jwt", e.jwtToken), (this.iframeElement.src = t.toString());
						}
					}
				}
				const mn = "3.7.7",
					gn = mn,
					vn = "function" == typeof Buffer,
					yn = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
					bn = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
					wn = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
					kn = (e => {
						let t = {};
						return e.forEach((e, i) => (t[e] = i)), t;
					})(wn),
					_n = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
					xn = String.fromCharCode.bind(String),
					En = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : e => new Uint8Array(Array.prototype.slice.call(e, 0)),
					Sn = e => e.replace(/=/g, "").replace(/[+\/]/g, e => ("+" == e ? "-" : "_")),
					Tn = e => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
					Cn = e => {
						let t,
							i,
							n,
							a,
							r = "";
						const s = e.length % 3;
						for (let s = 0; s < e.length; ) {
							if ((i = e.charCodeAt(s++)) > 255 || (n = e.charCodeAt(s++)) > 255 || (a = e.charCodeAt(s++)) > 255)
								throw new TypeError("invalid character found");
							(t = (i << 16) | (n << 8) | a), (r += wn[(t >> 18) & 63] + wn[(t >> 12) & 63] + wn[(t >> 6) & 63] + wn[63 & t]);
						}
						return s ? r.slice(0, s - 3) + "===".substring(s) : r;
					},
					jn = "function" == typeof btoa ? e => btoa(e) : vn ? e => Buffer.from(e, "binary").toString("base64") : Cn,
					In = vn
						? e => Buffer.from(e).toString("base64")
						: e => {
								let t = [];
								for (let i = 0, n = e.length; i < n; i += 4096) t.push(xn.apply(null, e.subarray(i, i + 4096)));
								return jn(t.join(""));
							},
					An = (e, t = !1) => (t ? Sn(In(e)) : In(e)),
					On = e => {
						if (e.length < 2)
							return (t = e.charCodeAt(0)) < 128
								? e
								: t < 2048
									? xn(192 | (t >>> 6)) + xn(128 | (63 & t))
									: xn(224 | ((t >>> 12) & 15)) + xn(128 | ((t >>> 6) & 63)) + xn(128 | (63 & t));
						var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
						return xn(240 | ((t >>> 18) & 7)) + xn(128 | ((t >>> 12) & 63)) + xn(128 | ((t >>> 6) & 63)) + xn(128 | (63 & t));
					},
					Pn = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
					Ln = e => e.replace(Pn, On),
					zn = vn ? e => Buffer.from(e, "utf8").toString("base64") : bn ? e => In(bn.encode(e)) : e => jn(Ln(e)),
					Fn = (e, t = !1) => (t ? Sn(zn(e)) : zn(e)),
					Rn = e => Fn(e, !0),
					Wn = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
					Nn = e => {
						switch (e.length) {
							case 4:
								var t =
									(((7 & e.charCodeAt(0)) << 18) | ((63 & e.charCodeAt(1)) << 12) | ((63 & e.charCodeAt(2)) << 6) | (63 & e.charCodeAt(3))) - 65536;
								return xn(55296 + (t >>> 10)) + xn(56320 + (1023 & t));
							case 3:
								return xn(((15 & e.charCodeAt(0)) << 12) | ((63 & e.charCodeAt(1)) << 6) | (63 & e.charCodeAt(2)));
							default:
								return xn(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
						}
					},
					Zn = e => e.replace(Wn, Nn),
					Mn = e => {
						if (((e = e.replace(/\s+/g, "")), !_n.test(e))) throw new TypeError("malformed base64.");
						e += "==".slice(2 - (3 & e.length));
						let t,
							i,
							n,
							a = "";
						for (let r = 0; r < e.length; )
							(t = (kn[e.charAt(r++)] << 18) | (kn[e.charAt(r++)] << 12) | ((i = kn[e.charAt(r++)]) << 6) | (n = kn[e.charAt(r++)])),
								(a += 64 === i ? xn((t >> 16) & 255) : 64 === n ? xn((t >> 16) & 255, (t >> 8) & 255) : xn((t >> 16) & 255, (t >> 8) & 255, 255 & t));
						return a;
					},
					$n = "function" == typeof atob ? e => atob(Tn(e)) : vn ? e => Buffer.from(e, "base64").toString("binary") : Mn,
					Dn = vn
						? e => En(Buffer.from(e, "base64"))
						: e =>
								En(
									$n(e)
										.split("")
										.map(e => e.charCodeAt(0)),
								),
					Bn = e => Dn(Kn(e)),
					Un = vn ? e => Buffer.from(e, "base64").toString("utf8") : yn ? e => yn.decode(Dn(e)) : e => Zn($n(e)),
					Kn = e => Tn(e.replace(/[-_]/g, e => ("-" == e ? "+" : "/"))),
					Vn = e => Un(Kn(e)),
					Hn = e => ({ value: e, enumerable: !1, writable: !0, configurable: !0 }),
					qn = function () {
						const e = (e, t) => Object.defineProperty(String.prototype, e, Hn(t));
						e("fromBase64", function () {
							return Vn(this);
						}),
							e("toBase64", function (e) {
								return Fn(this, e);
							}),
							e("toBase64URI", function () {
								return Fn(this, !0);
							}),
							e("toBase64URL", function () {
								return Fn(this, !0);
							}),
							e("toUint8Array", function () {
								return Bn(this);
							});
					},
					Jn = function () {
						const e = (e, t) => Object.defineProperty(Uint8Array.prototype, e, Hn(t));
						e("toBase64", function (e) {
							return An(this, e);
						}),
							e("toBase64URI", function () {
								return An(this, !0);
							}),
							e("toBase64URL", function () {
								return An(this, !0);
							});
					},
					Gn = {
						version: mn,
						VERSION: gn,
						atob: $n,
						atobPolyfill: Mn,
						btoa: jn,
						btoaPolyfill: Cn,
						fromBase64: Vn,
						toBase64: Fn,
						encode: Fn,
						encodeURI: Rn,
						encodeURL: Rn,
						utob: Ln,
						btou: Zn,
						decode: Vn,
						isValid: e => {
							if ("string" != typeof e) return !1;
							const t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
							return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
						},
						fromUint8Array: An,
						toUint8Array: Bn,
						extendString: qn,
						extendUint8Array: Jn,
						extendBuiltins: () => {
							qn(), Jn();
						},
					};
				let Xn,
					Yn = function (e, t, i, n) {
						return new (i || (i = Promise))(function (a, r) {
							function s(e) {
								try {
									l(n.next(e));
								} catch (e) {
									r(e);
								}
							}
							function o(e) {
								try {
									l(n.throw(e));
								} catch (e) {
									r(e);
								}
							}
							function l(e) {
								let t;
								e.done
									? a(e.value)
									: ((t = e.value),
										t instanceof i
											? t
											: new i(function (e) {
													e(t);
												})).then(s, o);
							}
							l((n = n.apply(e, t || [])).next());
						});
					};
				console.log("[Featurebase SDK] Initializing SDK!");
				let Qn = null,
					ea = null,
					ta = null,
					ia = null,
					na = null;
				const aa = { state: "inactive", hasCssTargetedSurveys: !1, hasUrlTargetedSurveys: !1, surveys: [] };
				let ra = Object.assign({}, aa);
				document.addEventListener("identifyAuthChange", e =>
					Yn(void 0, void 0, void 0, function* () {
						let t;
						const i = e;
						!ra.config ||
							("initializing" !== ra.state && "initialized" !== ra.state) ||
							(ra.config &&
								i.detail &&
								i.detail.jwtToken &&
								(null === (t = ra.config) || void 0 === t ? void 0 : t.jwtToken) !== i.detail.jwtToken &&
								((ra.config.jwtToken = i.detail.jwtToken), clearInterval(ga), (ra.state = "initializing"), yield ua(fa)));
					}),
				);
				let sa = null;
				function oa(e) {
					sa || (sa = {}),
						e.organization && (sa.organization = e.organization),
						e.fromWidget && (null == e ? void 0 : e.jwt) && (sa.fromWidget = !0),
						e.jwt &&
							(sa.jwt && (null == sa ? void 0 : sa.fromWidget)
								? sa.jwt && (null == e ? void 0 : e.fromWidget) && (sa.jwt = e.jwt)
								: (sa.jwt = e.jwt));
					try {
						localStorage.setItem("featurebaseGlobalAuth", JSON.stringify(sa)),
							document.dispatchEvent(new CustomEvent("identifyAuthChange", { detail: sa.jwt ? { jwtToken: sa.jwt } : {} }));
					} catch (e) {
						console.warn("[Featurebase SDK] Error storing global auth to localStorage:", e.message);
					}
				}
				const la = {};
				function da(e) {
					const t = "production" === Tt() ? "https://do.featurebase.app/js/sdk.css" : "http://127.0.0.1:5502/dist/sdk.css";
					return (
						t in la ||
							(la[t] = new Promise(e => {
								const i = document.querySelector(`link[href="${t}"]`);
								if (i) i.sheet ? e() : (i.onload = () => e());
								else {
									const i = document.createElement("link");
									(i.href = t), (i.rel = "stylesheet"), (i.type = "text/css"), (i.onload = () => e()), document.head.appendChild(i);
								}
							})),
						la[t].then(() => {
							e && e();
						})
					);
				}
				function ca(e, t, i) {
					switch (e) {
						case "identify":
							!(function (e, t) {
								let i;
								try {
									i = Et.parse(e);
								} catch (e) {
									if (e instanceof bt.ZodError)
										return (
											console.error("[Featurebase SDK] Error with action: 'identify'. The Data you provided has validation errors:", e.errors),
											void (t && t(e, null))
										);
									throw e;
								}
								const n = { alg: "HS256", typ: "JWT" },
									a = Gn.encodeURI(JSON.stringify(n)),
									r = Gn.encodeURI(JSON.stringify(i)),
									s = `${a}.${r}.sdk-identify`;
								oa({ organization: null == i ? void 0 : i.organization, jwt: s });
								const o = (function (e) {
										const t = JSON.stringify(e);
										let i = 0;
										if (0 === t.length) return i.toString();
										for (let e = 0; e < t.length; e++) {
											(i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
										}
										return i.toString();
									})(i),
									l = (function () {
										try {
											const e = localStorage.getItem("featurebaseIdentifyData");
											if (e) return JSON.parse(e);
										} catch (e) {}
										return null;
									})();
								if (l && l.hash === o && Date.now() - l.timestamp <= va)
									return (
										console.warn(`[Featurebase SDK] Skipping 'identify' action because the same data was sent in the last ${va / 1e3}s.`),
										t && t(null, null)
									);
								const d =
									"development" === Tt()
										? `http://${i.organization}.localhost:3000/api/v1/user/identify`
										: `https://${i.organization}.featurebase.app/api/v1/user/identify`;
								ya(d, i)
									.then(
										e => (
											(function (e, t) {
												try {
													localStorage.setItem("featurebaseIdentifyData", JSON.stringify({ hash: e, timestamp: t }));
												} catch (e) {}
											})(o, Date.now()),
											e.customDomain ? ya(`https://${e.customDomain}/api/v1/user/identify`, i) : e
										),
									)
									.then(e => {
										t && t(null, e);
									})
									.catch(e => {
										e.message && e.message.includes("Invalid user hash")
											? i.userHash
												? console.error(
														"[Featurebase SDK] Invalid user hash detected. Please follow the setup guide for Identity Verification at https://help.featurebase.app/articles/4543540",
													)
												: console.error(
														"[Featurebase SDK] Missing user hash. Please follow the setup guide for Identity Verification at https://help.featurebase.app/articles/4543540",
													)
											: console.warn(`[Featurebase SDK] Error in 'identify' action: ${e.message}`),
											t && t(e, null);
									});
							})(t, i);
							break;
						case "initialize_changelog_widget":
							da(() => {
								!(function (e) {
									try {
										if (null === ta || (sa && sa.organization !== (null == e ? void 0 : e.organization))) {
											const t = Lt.parse(e);
											(!t.email && !t.userId) || t.jwtToken
												? !t.jwtToken && (null == sa ? void 0 : sa.jwt) && (t.jwtToken = sa.jwt)
												: (t.jwtToken = pa(t)),
												ta && ta.destroy(),
												(ta = (function (e) {
													const t = new Ni(e);
													return t.initialize(), t;
												})(t)),
												oa({
													organization: null == t ? void 0 : t.organization,
													fromWidget: !0,
													jwt: (null == t ? void 0 : t.jwtToken) ? t.jwtToken : void 0,
												});
										}
									} catch (e) {
										if (!(e instanceof bt.ZodError)) throw e;
										console.error(
											"[Featurebase SDK] Error with action: 'initialize_changelog_widget'. The Data you provided has validation errors:",
											e.errors,
										);
									}
								})(t);
							});
							break;
						case "manually_open_changelog_popup":
							ta
								? ta.manuallyOpenChangelogPopup(t)
								: console.warn("[Featurebase SDK] Changelog not initialized. Please call 'initialize_changelog_widget' first.");
							break;
						case "unviewed_changelog_count":
							if (ta) return ta.getUnviewedChangelogCount();
							break;
						case "initialize_feedback_widget":
							da(() => {
								!(function (e, t) {
									try {
										if (null === ia || (sa && sa.organization !== (null == e ? void 0 : e.organization))) {
											const i = Ot.parse(e);
											(!i.email && !i.userId) || i.jwtToken
												? !i.jwtToken && (null == sa ? void 0 : sa.jwt) && (i.jwtToken = sa.jwt)
												: (i.jwtToken = pa(i)),
												ia && ia.destroy(),
												(ia = (function (e, t) {
													const i = new Mi(e, t);
													return i.initialize(), i;
												})(i, t)),
												oa({
													organization: null == i ? void 0 : i.organization,
													fromWidget: !0,
													jwt: (null == i ? void 0 : i.jwtToken) ? i.jwtToken : void 0,
												});
										} else (null == e ? void 0 : e.theme) !== ia.getWidgetTheme() && ia.updateWidgetTheme(e.theme);
									} catch (e) {
										if (!(e instanceof bt.ZodError)) throw e;
										console.error(
											"[Featurebase SDK] Error with action: 'initialize_feedback_widget'. The Data you provided has validation errors:",
											e.errors,
										);
									}
								})(t, i);
							});
							break;
						case "initialize_portal_widget":
							da(() => {
								!(function (e, t) {
									try {
										if (null === ea || (sa && sa.organization !== (null == e ? void 0 : e.organization))) {
											const i = Pt.parse(e);
											(!i.email && !i.userId) || i.jwtToken
												? !i.jwtToken && (null == sa ? void 0 : sa.jwt) && (i.jwtToken = sa.jwt)
												: (i.jwtToken = pa(i)),
												(ea = It(i, t)),
												oa({ jwt: null == i ? void 0 : i.jwtToken, organization: null == i ? void 0 : i.organization, fromWidget: !0 });
										}
									} catch (e) {
										if (!(e instanceof bt.ZodError)) throw e;
										console.error(
											"[Featurebase SDK] Error with action: 'initialize_portal_widget'. The Data you provided has validation errors:",
											e.errors,
										);
									}
								})(t, i);
							});
							break;
						case "initialize_widget":
							da(() => {
								!(function (e, t) {
									try {
										const i = Pt.parse(e);
										!i.jwtToken && (null == sa ? void 0 : sa.jwt) && (i.jwtToken = sa.jwt), (ea = It(i, t));
									} catch (e) {
										if (!(e instanceof bt.ZodError)) throw e;
										console.error("[Featurebase SDK] Error with action: 'initialize_widget'. The Data you provided has validation errors:", e.errors);
									}
								})(t, i);
							});
							break;
						case "initialize_survey_widget":
							da(() => {
								!(function (e) {
									Yn(this, void 0, void 0, function* () {
										try {
											if (("error" === ra.state && (ra = Object.assign({}, aa)), "inactive" !== ra.state))
												return void console.warn("[Featurebase SDK] Survey widget is already initialized or initializing.");
											ra.state = "initializing";
											const t = e;
											(!t.email && !t.userId) || t.jwtToken
												? !t.jwtToken && (null == sa ? void 0 : sa.jwt) && (t.jwtToken = sa.jwt)
												: (t.jwtToken = pa(t)),
												(ra.config = t),
												ua(fa);
										} catch (e) {
											if (((ra.state = "error"), !(e instanceof bt.ZodError))) throw e;
											console.error(
												"[Featurebase SDK] Error with action: 'initialize_survey_widget'. The Data you provided has validation errors:",
												e.errors,
											);
										}
									});
								})(t);
							});
							break;
						case "open_widget":
							if (!ea) return void console.warn("[Featurebase SDK] Widget is not initialized. Please call 'initialize_widget' first.");
							ea.openWidget();
							break;
						case "close_widget":
							null == ea || ea.closeWidget();
							break;
						case "toggle_widget":
							null == ea || ea.toggleWidget();
							break;
						case "initialize_popup":
							Qn = (function (e) {
								const t = new St(e);
								return t.initialize(), t;
							})(t);
							break;
						case "open_popup":
							!(function (e) {
								if (!e || !e.submissionId) return void console.warn("[Featurebase SDK] You need to provide a submissionId to open the popup.");
								if (!Qn)
									return void console.warn(
										"[Featurebase SDK] You need to initialize the popup before opening it. Use the `initialize_popup` action.",
									);
								(Qn.activeSubmissionId = e.submissionId), null == Qn || Qn.openPopup();
							})(t);
							break;
						case "close_popup":
							null == Qn || Qn.closePopup();
							break;
						case "toggle_popup":
							null == Qn || Qn.togglePopup();
							break;
						case "open_screenshot":
						case "take_screenshot":
						case "close_screenshot":
							break;
						case "embed":
							da(() => {
								!(function (e) {
									try {
										if (!document.querySelector("#featurebase-embed-board")) {
											const t = Ui.parse(e);
											(!t.email && !t.userId) || t.jwtToken
												? !t.jwtToken && (null == sa ? void 0 : sa.jwt) && (t.jwtToken = sa.jwt)
												: (t.jwtToken = pa(t)),
												(function (e) {
													(na = new Bi(e)), na.initialize();
												})(t),
												oa({ jwt: null == t ? void 0 : t.jwtToken, organization: null == t ? void 0 : t.organization, fromWidget: !0 });
										}
									} catch (e) {
										if (!(e instanceof bt.ZodError)) throw e;
										console.error("[Featurebase SDK] Error with action: 'embed'. The Data you provided has validation errors:", e.errors);
									}
								})(t);
							});
							break;
						default:
							if (!e) return void console.warn("[Featurebase SDK] Action is missing.");
							console.warn(`[Featurebase SDK] Action ${e} is not supported.`);
					}
				}
				function ua(e) {
					let t, i, n;
					return Yn(this, void 0, void 0, function* () {
						try {
							ra.state = "initializing";
							let a = null === (t = ra.config) || void 0 === t ? void 0 : t.organization;
							if (!a) return void console.warn("[Featurebase SDK] Tried to check for surveys, but organization not provided.");
							a = a
								.toLowerCase()
								.trim()
								.replace(/[^a-zA-Z0-9]/g, "");
							const r =
								"production" === Tt()
									? new URL(`https://${a}.featurebase.app/api/v1/organization/advancedSurvey/available`)
									: new URL(`http://${a}.localhost:3000/api/v1/organization/advancedSurvey/available`);
							(null === (i = ra.config) || void 0 === i ? void 0 : i.jwtToken) &&
								r.searchParams.append("jwt", null === (n = ra.config) || void 0 === n ? void 0 : n.jwtToken);
							const s = yield fetch(r.toString()),
								o = yield s.json();
							if (!(null == o ? void 0 : o.success)) return void console.warn("[Featurebase SDK] Error fetching surveys");
							const l = o.surveys;
							let d = [];
							try {
								d = JSON.parse(localStorage.getItem("featurebaseRespondedSurveys") || "[]");
							} catch (e) {}
							(ra.surveys = []), (ra.hasCssTargetedSurveys = !1), (ra.hasUrlTargetedSurveys = !1);
							for (const e of l) d.includes(e._id) || ra.surveys.push(e);
							if (e) return e(null, !0);
						} catch (t) {
							if ((console.error("[Featurebase SDK] Error fetching surveys:", t.message), e)) return e(t, null);
						}
					});
				}
				function ha(e, t) {
					return Yn(this, void 0, void 0, function* () {
						!t.jwtToken && (null == sa ? void 0 : sa.jwt) && (t.jwtToken = sa.jwt),
							!t.organization && (null == sa ? void 0 : sa.organization) && (t.organization = sa.organization),
							"initialized" === ra.state
								? ((ra.state = "displaying"),
									(function (e, t) {
										let i;
										const n = fn.safeParse(e);
										if (!n.success)
											throw new Error(
												"[Featurebase SDK] Invalid survey widget config. Error: " + (null === (i = n.error) || void 0 === i ? void 0 : i.message),
											);
										const a = new pn(e);
										a.initialize(), t && (a.surveyCloseCallback = t);
									})({ context: t, survey: e }, () => {
										(ra.surveys = ra.surveys.filter(t => t._id !== e._id)), (ra.state = "initialized");
									}))
								: console.warn("[Featurebase SDK] Survey widget is not initialized yet.");
					});
				}
				function fa(e, t) {
					return Yn(this, void 0, void 0, function* () {
						if (e) return console.error("[Featurebase SDK] Error fetching surveys:", e.message), void (ra.state = "error");
						ra.surveys &&
							ra.surveys.length > 0 &&
							ra.surveys.some(e => e.targeting && e.targeting.url && e.targeting.url.length > 0) &&
							(ra.hasUrlTargetedSurveys = !0),
							ra.surveys &&
								ra.surveys.length > 0 &&
								ra.surveys.some(e => e.targeting && e.targeting.css && e.targeting.css.length > 0) &&
								(ra.hasCssTargetedSurveys = !0),
							(ra.state = "initialized"),
							(function () {
								ga && clearInterval(ga);
								ga = setInterval(() => {
									let e;
									if (!(null === (e = ra.config) || void 0 === e ? void 0 : e.organization)) return;
									if (document.querySelector(".fb-survey-widget-wrapper")) return;
									if ("initialized" !== ra.state || (ra.surveys && 0 === ra.surveys.length)) return;
									if (ra.hasUrlTargetedSurveys) {
										const e = ra.surveys
												.filter(e => e.targeting && e.targeting.url && e.targeting.url.length > 0)
												.sort((e, t) => {
													let i, n, a, r;
													return (null === (i = e.targeting) || void 0 === i ? void 0 : i.segmentIds) &&
														(null === (n = e.targeting) || void 0 === n ? void 0 : n.segmentIds.length) > 0
														? -1
														: (null === (a = t.targeting) || void 0 === a ? void 0 : a.segmentIds) &&
															  (null === (r = t.targeting) || void 0 === r ? void 0 : r.segmentIds.length) > 0
															? 1
															: 0;
												}),
											t = window.location.href;
										for (const i of e)
											if (i.targeting && i.targeting.url)
												for (const e of i.targeting.url) {
													const { value: n, matchType: a } = e,
														r = ma(i).success;
													if ("exact" === a) {
														if (n.trim().toLowerCase().replace(/\/$/, "") === t.trim().toLowerCase().replace(/\/$/, "") && r)
															return void ha(i, ra.config);
													} else if ("contains" === a && r) {
														if (t.includes(n)) return void ha(i, ra.config);
													} else if ("regex" === a && r)
														try {
															if (new RegExp(n).test(t)) return void ha(i, ra.config);
														} catch (e) {
															console.error(`[Featurebase SDK] Could not show survey "${i.title}". Invalid survey targeting regex provided:`, e),
																(ra.surveys = ra.surveys.filter(e => e._id !== i._id));
														}
												}
									}
									if (ra.hasCssTargetedSurveys) {
										const e = ra.surveys
											.filter(e => e.targeting && e.targeting.css && e.targeting.css.length > 0)
											.sort((e, t) => {
												let i, n, a, r;
												return (null === (i = e.targeting) || void 0 === i ? void 0 : i.segmentIds) &&
													(null === (n = e.targeting) || void 0 === n ? void 0 : n.segmentIds.length) > 0
													? -1
													: (null === (a = t.targeting) || void 0 === a ? void 0 : a.segmentIds) &&
														  (null === (r = t.targeting) || void 0 === r ? void 0 : r.segmentIds.length) > 0
														? 1
														: 0;
											});
										if (e && e.length > 0)
											for (const t of e) {
												if (!t.targeting || !t.targeting.css || 0 === t.targeting.css.length) continue;
												if (!ma(t).success) continue;
												const e = t.targeting.css.map(e => e.value);
												for (const i of e)
													try {
														if (document.querySelectorAll(i).length > 0) return void ha(t, ra.config);
													} catch (e) {
														console.error(`[Featurebase SDK] Could not show survey "${t.title}". Invalid survey targeting CSS selector provided:`, e),
															(ra.surveys = ra.surveys.filter(e => e._id !== t._id));
													}
											}
									}
									const t = ra.surveys
										.filter(
											e =>
												!(e.targeting && e.targeting.css && e.targeting.css.length > 0) &&
												!(e.targeting && e.targeting.url && e.targeting.url.length > 0),
										)
										.sort((e, t) => {
											let i, n, a, r;
											return (null === (i = e.targeting) || void 0 === i ? void 0 : i.segmentIds) &&
												(null === (n = e.targeting) || void 0 === n ? void 0 : n.segmentIds.length) > 0
												? -1
												: (null === (a = t.targeting) || void 0 === a ? void 0 : a.segmentIds) &&
													  (null === (r = t.targeting) || void 0 === r ? void 0 : r.segmentIds.length) > 0
													? 1
													: 0;
										});
									for (const e of t) {
										if (ma(e).success) return void ha(e, ra.config);
									}
								}, 5e3);
							})();
					});
				}
				function pa(e) {
					return `${Gn.encodeURI(JSON.stringify({ alg: "HS256", typ: "JWT" }))}.${Gn.encodeURI(JSON.stringify(Object.assign(Object.assign(Object.assign({}, e.email && { email: e.email }), e.userId && { userId: e.userId }), e.userHash && { userHash: e.userHash })))}.sdk-feedback`;
				}
				const ma = e => {
					let t, i, n;
					if (!(null === (t = null == ra ? void 0 : ra.config) || void 0 === t ? void 0 : t.organization))
						return { success: !1, error: "Organization not provided" };
					if (!e.isActive) return { success: !1, error: "Survey is not active" };
					if (
						(null === (i = e.targeting) || void 0 === i ? void 0 : i.loginRequired) &&
						!(null === (n = null == ra ? void 0 : ra.config) || void 0 === n ? void 0 : n.jwtToken) &&
						(null == sa ? void 0 : sa.jwt)
					)
						return { success: !1, error: "Login required" };
					let a = [];
					try {
						a = JSON.parse(localStorage.getItem("featurebaseRespondedSurveys") || "[]");
					} catch (e) {}
					return a.includes(e._id) ? { success: !1, error: "Survey already responded" } : { success: !0 };
				};
				let ga = null;
				const va = 6e5;
				function ya(e, t) {
					return fetch(e, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t), credentials: "include" })
						.then(e => e.json())
						.then(e => {
							if (!e.success) {
								const t = e.message || "Unknown error";
								throw new Error(t);
							}
							return (
								e.loggedInAsAdmin
									? console.warn(
											"[Featurebase SDK] Authentication skipped: User is currently logged in with admin privileges. Please log out of the admin account to authenticate as a regular user.",
										)
									: e.adminOfOtherOrg &&
										console.warn(
											"[Featurebase SDK] Authentication skipped: For security, we don't auto-login users with admin roles in any org. You can test the auto-login feature by using the data of a normal user.",
										),
								e
							);
						});
				}
				const ba = (null === (Xn = window.Featurebase) || void 0 === Xn ? void 0 : Xn.q) || [];
				for (let e = 0; e < ba.length; e++) {
					const t = ba[e];
					ca.apply(null, t);
				}
				const wa = window;
				wa.Featurebase || (wa.Featurebase = {}),
					(wa.Featurebase.q = []),
					(wa.Featurebase = ca),
					(function () {
						try {
							const e = localStorage.getItem("featurebaseGlobalAuth");
							if (e) {
								const t = JSON.parse(e);
								delete t.fromWidget,
									(sa = t),
									sa && document.dispatchEvent(new CustomEvent("identifyAuthChange", { detail: sa.jwt ? { jwtToken: sa.jwt } : {} }));
							}
						} catch (e) {
							console.warn("[Featurebase SDK] Error accessing localStorage for global auth:", e.message);
						}
					})(),
					document.addEventListener(
						"click",
						function (e) {
							if (!e || !e.target) return;
							const t = document.querySelectorAll("[data-featurebase-link]");
							if (t && 0 !== t.length)
								for (let i = 0; i < t.length; i++) {
									let n = t[i];
									if (e.target === t[i] || n.contains(e.target)) {
										e.preventDefault();
										const t = n.getAttribute("href");
										if (!t) return;
										const i = new URL(t.startsWith("http") ? t : `https://${t}`),
											a = new URLSearchParams(i.search);
										return (
											(null == sa ? void 0 : sa.jwt) && a.append("jwt", sa.jwt),
											(i.search = a.toString()),
											"_blank" === n.getAttribute("target") ? void window.open(i.toString(), "_blank") : void (window.location.href = i.toString())
										);
									}
								}
						},
						!0,
					);
			})(),
			r
		);
	})(),
);
