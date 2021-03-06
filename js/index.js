function showApproach(n) {
    $(".menuContent").hide();
    $(".menuContent." + n).show();
    $(".menuContent." + n).find("div.active").length == 0 && ($(".menuContent." + n).find("li").first().addClass("active"),
    $(".menuContent." + n).find("div.tab-pane").first().addClass("active"));
    var t = $(".mobile-content").length > 0 ? $(".mobile-content h4") : $(".main-content h4");
    t.length > 0 && (n == "lambda" ? ($(t).html($(t).html().replace("LINQ query sample", "Lambda Expression sample")),
    $(t).html($(t).html().replace("Query Expression sample", "Lambda Expression sample"))) : ($(t).html($(t).html().replace("LINQ query sample", "Query Expression sample")),
    $(t).html($(t).html().replace("Lambda Expression sample", "Query Expression sample"))))
}
function initContent() {
    if ($(".social-content-target").html($(".social-content").html()),
    $(".approach h2").length > 0) {
        var n = $(".approach h2").html();
        n.indexOf(" ") != -1 && (n = n.substring(0, n.indexOf(" ")));
        a2a_config.linkurl = window.location.href;
        a2a_config.linkname = "LINQ Sample showing the " + n + " Operator:";
        a2a.init("page")
    }
}
$(document).ready(function() {
    console.log("MenuContentPartial is ready");
    setTimeout(initContent, 1e3);
    $(document).on("click", ".approach a", function(n) {
        var i = $(this).attr("href"), t;
        history.pushState(null, null, i);
        t = $(this).find("input").prop("id");
        showApproach(t);
        n.preventDefault()
    });
    $(document).on("click", ".menuContent a", function(n) {
        var i = $(this).attr("href"), t;
        history.pushState(null, null, i);
        t = $(this).prop("id");
        $('.menuContent a[id="' + t + '"]').tab("show");
        $(".menuContent .tab-pane").removeClass("active");
        $('.menuContent .tab-pane[data-id="' + t + '"]').addClass("active");
        n.preventDefault()
    });
    $(".approach a.linq.active").length > 0 ? showApproach("linq") : showApproach("lambda")
});
$(document).ready(function() {
    function t() {
        if ($(window).width() < 768) {
            var n = $('#main-menu-inside div[id^="container-"]').find(".active");
            n.length > 0 && ($(".main-menu").find("a").addClass("disabled"),
            $('<div class="visible-xs mobile-content">' + $(".main-content").html() + "<\/div>").insertAfter(n),
            $(".main-menu .mobile-content .btn-group").addClass("btn-group-justified"),
            $(".main-menu .mobile-content h2").addClass("text-center"),
            $("html, body").animate({
                scrollTop: $(".main-menu .close-button").offset().top - $(".navbar-header").height()
            }, 1e3))
        }
    }
    function n() {
        if ($(window).width() >= 768) {
            var n = $(window).height() - 275
              , t = $(".main-menu .btn-group").height();
            $("#content").css("max-height", n + "px");
            $(".main-menu").css("max-height", n + "px");
            $("#main-menu-inside").css("max-height", n - t + "px");
            $(".main-content").css("height", n + "px")
        }
    }
    function i() {
        $("#main-menu-inside .active").length > 0 ? $("#main-menu-inside .active").focus() : $("#main-menu-inside .fa-caret-down").length > 0 && $("#main-menu-inside .fa-caret-down").closest("a").focus()
    }
    console.log("MenuPartial is ready");
    n();
    t();
    i();
    $("#main-menu-inside > a").on("click", function(n) {
        var i, t;
        try {
            if ($(this).hasClass("disabled"))
                return n.preventDefault(),
                !1;
            i = $(this).attr("href");
            history.pushState(null, null, i);
            t = "container-" + $(this).prop("id");
            $("#" + $(this).prop("id")).find("h4 i").hasClass("fa-caret-right") ? ($("#" + $(this).prop("id")).find("h4 i").removeClass("fa-caret-right").addClass("fa-caret-down"),
            $("#" + t).collapse("show")) : ($("#" + $(this).prop("id")).find("h4 i").removeClass("fa-caret-down").addClass("fa-caret-right"),
            $("#" + t).collapse("hide"));
            n.preventDefault()
        } catch (r) {
            alert(r)
        }
    });
    $('#main-menu-inside div[id^="container-"] > a').on("click", function(n) {
        try {
            if (n.preventDefault(),
            $(this).hasClass("disabled"))
                return !1;
            var e = this
              , t = $(this).attr("href")
              , r = t.split("/")[1]
              , u = t.split("/")[2]
              , i = t.split("/")[3];
            history.pushState(null, null, t);
            // ga("send", "pageview", t);
            $(".main-menu").find("*").removeClass("active");
            $(this).addClass("active");
            $.get(window.location.origin + "/Home/GetContent", {
                viewType: r,
                category: u,
                subCategory: i
            }, function(n) {
                if ($(".main-content").html(n),
                $(".main-menu").find("a").removeClass("disabled"),
                $(window).width() < 768)
                    $(".main-menu").find("a").addClass("disabled"),
                    $('<div class="visible-xs mobile-content">' + n + "<\/div>").insertAfter($(".main-menu").find(".active")),
                    $(".main-menu .mobile-content .btn-group").addClass("btn-group-justified"),
                    $(".main-menu .mobile-content h2").addClass("text-center"),
                    $("html, body").animate({
                        scrollTop: $(".main-menu .close-button").offset().top - $(".navbar-header").height()
                    }, 1e3);
                else {
                    $(".social-content-target").html($(".social-content").html());
                    var t = i;
                    t.indexOf("-") != -1 && (t = t.substring(0, t.indexOf("-")));
                    a2a_config.linkurl = window.location.href;
                    a2a_config.linkname = "LINQ Sample showing the " + t + " Operator:";
                    a2a.init("page")
                }
                $(".approach a.linq.active").length > 0 ? showApproach("linq") : showApproach("lambda");
                PR.prettyPrint()
            })
        } catch (f) {
            alert(f)
        }
    });
    $("#main-menu-inside").on("click", ".close-button", function(n) {
        n.preventDefault();
        $(".main-menu .mobile-content").remove();
        $(".main-menu").find("a").removeClass("disabled");
        $("html, body").animate({
            scrollTop: $(".main-menu .active").offset().top - $(".navbar-header").height()
        }, 1)
    });
    $(window).resize(function() {
        $(window).width() >= 768 && ($(".main-menu .mobile-content").remove(),
        $(".main-menu").find("a").removeClass("disabled"),
        n())
    })
});
$(document).ready(function() {
    function r() {
        var t = $("input.typeahead.tt-input").val()
          , i = $.grep(n, function(n) {
            if (n.Operator.toLowerCase() == t.toLowerCase())
                return n
        });
        window.location.href = "/" + i[0].Path
    }
    var n, t, i;
    console.log("findOperator is ready");
    n = [];
    t = [];
    $.ajax({
        url: "operators.json",
        type: "GET",
        contentType: "application/json",
        success: function(result) {
            // $.each(i.FindOperator, function(i, r) {
            //     n.push(r);
            //     t.push(r.Operator)
            // })
            console.log(result);
        },
        error: function() {
            console.log("Could not retrieve operators for search.")
        }
    });
    i = function(n) {
        return function(t, i) {
            var r;
            r = [];
            substrRegex = new RegExp(t,"i");
            $.each(n, function(n, t) {
                substrRegex.test(t) && r.push(t)
            });
            i(r)
        }
    }
    ;
    $("#findOperatorGroup .typeahead").typeahead({
        hint: !0,
        highlight: !0,
        minLength: 1
    }, {
        name: "findOperatorsShow",
        source: i(t),
        limit: 10
    });
    $("#findOperatorSubmit").click(function(n) {
        n.preventDefault();
        r()
    });
    $("#findOperatorGroup .typeahead").on("typeahead:select", function() {
        r()
    })
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("bloodhound", ["jquery"], function(i) {
        return n.Bloodhound = t(i)
    }) : typeof exports == "object" ? module.exports = t(require("jquery")) : n.Bloodhound = t(jQuery)
}(this, function(n) {
    var t = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
            },
            isBlankString: function(n) {
                return !n || /^\s*$/.test(n)
            },
            escapeRegExChars: function(n) {
                return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            isString: function(n) {
                return typeof n == "string"
            },
            isNumber: function(n) {
                return typeof n == "number"
            },
            isArray: n.isArray,
            isFunction: n.isFunction,
            isObject: n.isPlainObject,
            isUndefined: function(n) {
                return typeof n == "undefined"
            },
            isElement: function(n) {
                return !!(n && n.nodeType === 1)
            },
            isJQuery: function(t) {
                return t instanceof n
            },
            toStr: function(n) {
                return t.isUndefined(n) || n === null ? "" : n + ""
            },
            bind: n.proxy,
            each: function(t, i) {
                function r(n, t) {
                    return i(t, n)
                }
                n.each(t, r)
            },
            map: n.map,
            filter: n.grep,
            every: function(t, i) {
                var r = !0;
                return t ? (n.each(t, function(n, u) {
                    if (!(r = i.call(null, u, n, t)))
                        return !1
                }),
                !!r) : r
            },
            some: function(t, i) {
                var r = !1;
                return t ? (n.each(t, function(n, u) {
                    if (r = i.call(null, u, n, t))
                        return !1
                }),
                !!r) : r
            },
            mixin: n.extend,
            identity: function(n) {
                return n
            },
            clone: function(t) {
                return n.extend(!0, {}, t)
            },
            getIdGenerator: function() {
                var n = 0;
                return function() {
                    return n++
                }
            },
            templatify: function(t) {
                function i() {
                    return String(t)
                }
                return n.isFunction(t) ? t : i
            },
            defer: function(n) {
                setTimeout(n, 0)
            },
            debounce: function(n, t, i) {
                var r, u;
                return function() {
                    var f = this, e = arguments, o, s;
                    return o = function() {
                        r = null;
                        i || (u = n.apply(f, e))
                    }
                    ,
                    s = i && !r,
                    clearTimeout(r),
                    r = setTimeout(o, t),
                    s && (u = n.apply(f, e)),
                    u
                }
            },
            throttle: function(n, t) {
                var u, f, i, e, r, o;
                return r = 0,
                o = function() {
                    r = new Date;
                    i = null;
                    e = n.apply(u, f)
                }
                ,
                function() {
                    var s = new Date
                      , h = t - (s - r);
                    return u = this,
                    f = arguments,
                    h <= 0 ? (clearTimeout(i),
                    i = null,
                    r = s,
                    e = n.apply(u, f)) : i || (i = setTimeout(o, h)),
                    e
                }
            },
            stringify: function(n) {
                return t.isString(n) ? n : JSON.stringify(n)
            },
            noop: function() {}
        }
    }()
      , u = "0.11.1"
      , f = function() {
        "use strict";
        function n(n) {
            return n = t.toStr(n),
            n ? n.split(/\s+/) : []
        }
        function i(n) {
            return n = t.toStr(n),
            n ? n.split(/\W+/) : []
        }
        function r(n) {
            return function(i) {
                return i = t.isArray(i) ? i : [].slice.call(arguments, 0),
                function(r) {
                    var u = [];
                    return t.each(i, function(i) {
                        u = u.concat(n(t.toStr(r[i])))
                    }),
                    u
                }
            }
        }
        return {
            nonword: i,
            whitespace: n,
            obj: {
                nonword: r(i),
                whitespace: r(n)
            }
        }
    }()
      , i = function() {
        "use strict";
        function i(i) {
            this.maxSize = t.isNumber(i) ? i : 100;
            this.reset();
            this.maxSize <= 0 && (this.set = this.get = n.noop)
        }
        function r() {
            this.head = this.tail = null
        }
        function u(n, t) {
            this.key = n;
            this.val = t;
            this.prev = this.next = null
        }
        return t.mixin(i.prototype, {
            set: function(n, t) {
                var r = this.list.tail, i;
                this.size >= this.maxSize && (this.list.remove(r),
                delete this.hash[r.key],
                this.size--);
                (i = this.hash[n]) ? (i.val = t,
                this.list.moveToFront(i)) : (i = new u(n,t),
                this.list.add(i),
                this.hash[n] = i,
                this.size++)
            },
            get: function(n) {
                var t = this.hash[n];
                if (t)
                    return this.list.moveToFront(t),
                    t.val
            },
            reset: function() {
                this.size = 0;
                this.hash = {};
                this.list = new r
            }
        }),
        t.mixin(r.prototype, {
            add: function(n) {
                this.head && (n.next = this.head,
                this.head.prev = n);
                this.head = n;
                this.tail = this.tail || n
            },
            remove: function(n) {
                n.prev ? n.prev.next = n.next : this.head = n.next;
                n.next ? n.next.prev = n.prev : this.tail = n.prev
            },
            moveToFront: function(n) {
                this.remove(n);
                this.add(n)
            }
        }),
        i
    }()
      , e = function() {
        "use strict";
        function r(n, r) {
            this.prefix = ["__", n, "__"].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + t.escapeRegExChars(this.prefix));
            this.ls = r || i;
            this.ls || this._noop()
        }
        function u() {
            return (new Date).getTime()
        }
        function f(n) {
            return JSON.stringify(t.isUndefined(n) ? null : n)
        }
        function e(t) {
            return n.parseJSON(t)
        }
        function o(n) {
            for (var r, u = [], f = i.length, t = 0; t < f; t++)
                (r = i.key(t)).match(n) && u.push(r.replace(n, ""));
            return u
        }
        var i;
        try {
            i = window.localStorage;
            i.setItem("~~~", "!");
            i.removeItem("~~~")
        } catch (s) {
            i = null
        }
        return t.mixin(r.prototype, {
            _prefix: function(n) {
                return this.prefix + n
            },
            _ttlKey: function(n) {
                return this._prefix(n) + this.ttlKey
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = t.noop
            },
            _safeSet: function(n, t) {
                try {
                    this.ls.setItem(n, t)
                } catch (i) {
                    i.name === "QuotaExceededError" && (this.clear(),
                    this._noop())
                }
            },
            get: function(n) {
                return this.isExpired(n) && this.remove(n),
                e(this.ls.getItem(this._prefix(n)))
            },
            set: function(n, i, r) {
                return t.isNumber(r) ? this._safeSet(this._ttlKey(n), f(u() + r)) : this.ls.removeItem(this._ttlKey(n)),
                this._safeSet(this._prefix(n), f(i))
            },
            remove: function(n) {
                return this.ls.removeItem(this._ttlKey(n)),
                this.ls.removeItem(this._prefix(n)),
                this
            },
            clear: function() {
                for (var t = o(this.keyMatcher), n = t.length; n--; )
                    this.remove(t[n]);
                return this
            },
            isExpired: function(n) {
                var i = e(this.ls.getItem(this._ttlKey(n)));
                return t.isNumber(i) && u() > i ? !0 : !1
            }
        }),
        r
    }()
      , r = function() {
        "use strict";
        function r(n) {
            n = n || {};
            this.cancelled = !1;
            this.lastReq = null;
            this._send = n.transport;
            this._get = n.limiter ? n.limiter(this._get) : this._get;
            this._cache = n.cache === !1 ? new i(0) : o
        }
        var u = 0
          , f = {}
          , e = 6
          , o = new i(10);
        return r.setMaxPendingRequests = function(n) {
            e = n
        }
        ,
        r.resetCache = function() {
            o.reset()
        }
        ,
        t.mixin(r.prototype, {
            _fingerprint: function(t) {
                return t = t || {},
                t.url + t.type + n.param(t.data || {})
            },
            _get: function(n, t) {
                function s(n) {
                    t(null, n);
                    i._cache.set(r, n)
                }
                function h() {
                    t(!0)
                }
                function c() {
                    u--;
                    delete f[r];
                    i.onDeckRequestArgs && (i._get.apply(i, i.onDeckRequestArgs),
                    i.onDeckRequestArgs = null)
                }
                var i = this, r, o;
                (r = this._fingerprint(n),
                this.cancelled || r !== this.lastReq) || ((o = f[r]) ? o.done(s).fail(h) : u < e ? (u++,
                f[r] = this._send(n).done(s).fail(h).always(c)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
            },
            get: function(i, r) {
                var f, u;
                r = r || n.noop;
                i = t.isString(i) ? {
                    url: i
                } : i || {};
                u = this._fingerprint(i);
                this.cancelled = !1;
                this.lastReq = u;
                (f = this._cache.get(u)) ? r(null, f) : this._get(i, r)
            },
            cancel: function() {
                this.cancelled = !0
            }
        }),
        r
    }()
      , o = window.SearchIndex = function() {
        "use strict";
        function u(i) {
            i = i || {};
            i.datumTokenizer && i.queryTokenizer || n.error("datumTokenizer and queryTokenizer are both required");
            this.identify = i.identify || t.stringify;
            this.datumTokenizer = i.datumTokenizer;
            this.queryTokenizer = i.queryTokenizer;
            this.reset()
        }
        function f(n) {
            return n = t.filter(n, function(n) {
                return !!n
            }),
            t.map(n, function(n) {
                return n.toLowerCase()
            })
        }
        function e() {
            var n = {};
            return n[r] = [],
            n[i] = {},
            n
        }
        function o(n) {
            for (var i = {}, r = [], t = 0, u = n.length; t < u; t++)
                i[n[t]] || (i[n[t]] = !0,
                r.push(n[t]));
            return r
        }
        function s(n, t) {
            var i = 0, r = 0, u = [], f, e;
            for (n = n.sort(),
            t = t.sort(),
            f = n.length,
            e = t.length; i < f && r < e; )
                n[i] < t[r] ? i++ : n[i] > t[r] ? r++ : (u.push(n[i]),
                i++,
                r++);
            return u
        }
        var i = "c"
          , r = "i";
        return t.mixin(u.prototype, {
            bootstrap: function(n) {
                this.datums = n.datums;
                this.trie = n.trie
            },
            add: function(n) {
                var u = this;
                n = t.isArray(n) ? n : [n];
                t.each(n, function(n) {
                    var o, s;
                    u.datums[o = u.identify(n)] = n;
                    s = f(u.datumTokenizer(n));
                    t.each(s, function(n) {
                        for (var f, t = u.trie, s = n.split(""); f = s.shift(); )
                            t = t[i][f] || (t[i][f] = e()),
                            t[r].push(o)
                    })
                })
            },
            get: function(n) {
                var i = this;
                return t.map(n, function(n) {
                    return i.datums[n]
                })
            },
            search: function(n) {
                var e = this, h, u;
                return h = f(this.queryTokenizer(n)),
                t.each(h, function(n) {
                    var t, f, h, o;
                    if (u && u.length === 0)
                        return !1;
                    for (t = e.trie,
                    f = n.split(""); t && (h = f.shift()); )
                        t = t[i][h];
                    if (t && f.length === 0)
                        o = t[r].slice(0),
                        u = u ? s(u, o) : o;
                    else
                        return u = [],
                        !1
                }),
                u ? t.map(o(u), function(n) {
                    return e.datums[n]
                }) : []
            },
            all: function() {
                var n = [], t;
                for (t in this.datums)
                    n.push(this.datums[t]);
                return n
            },
            reset: function() {
                this.datums = {};
                this.trie = e()
            },
            serialize: function() {
                return {
                    datums: this.datums,
                    trie: this.trie
                }
            }
        }),
        u
    }()
      , s = function() {
        "use strict";
        function i(n) {
            this.url = n.url;
            this.ttl = n.ttl;
            this.cache = n.cache;
            this.prepare = n.prepare;
            this.transform = n.transform;
            this.transport = n.transport;
            this.thumbprint = n.thumbprint;
            this.storage = new e(n.cacheKey)
        }
        var n;
        return n = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        },
        t.mixin(i.prototype, {
            _settings: function() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                }
            },
            store: function(t) {
                this.cache && (this.storage.set(n.data, t, this.ttl),
                this.storage.set(n.protocol, location.protocol, this.ttl),
                this.storage.set(n.thumbprint, this.thumbprint, this.ttl))
            },
            fromCache: function() {
                var t = {}, i;
                return this.cache ? (t.data = this.storage.get(n.data),
                t.protocol = this.storage.get(n.protocol),
                t.thumbprint = this.storage.get(n.thumbprint),
                i = t.thumbprint !== this.thumbprint || t.protocol !== location.protocol,
                t.data && !i ? t.data : null) : null
            },
            fromNetwork: function(n) {
                function r() {
                    n(!0)
                }
                function u(t) {
                    n(null, i.transform(t))
                }
                var i = this, t;
                n && (t = this.prepare(this._settings()),
                this.transport(t).fail(r).done(u))
            },
            clear: function() {
                return this.storage.clear(),
                this
            }
        }),
        i
    }()
      , h = function() {
        "use strict";
        function n(n) {
            this.url = n.url;
            this.prepare = n.prepare;
            this.transform = n.transform;
            this.transport = new r({
                cache: n.cache,
                limiter: n.limiter,
                transport: n.transport
            })
        }
        return t.mixin(n.prototype, {
            _settings: function() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                }
            },
            get: function(n, t) {
                function u(n, i) {
                    n ? t([]) : t(r.transform(i))
                }
                var r = this, i;
                if (t)
                    return n = n || "",
                    i = this.prepare(n, this._settings()),
                    this.transport.get(i, u)
            },
            cancelLastRequest: function() {
                this.transport.cancel()
            }
        }),
        n
    }()
      , c = function() {
        "use strict";
        function r(r) {
            var f;
            return r ? (f = {
                url: null,
                ttl: 864e5,
                cache: !0,
                cacheKey: null,
                thumbprint: "",
                prepare: t.identity,
                transform: t.identity,
                transport: null
            },
            r = t.isString(r) ? {
                url: r
            } : r,
            r = t.mixin(f, r),
            r.url || n.error("prefetch requires url to be set"),
            r.transform = r.filter || r.transform,
            r.cacheKey = r.cacheKey || r.url,
            r.thumbprint = u + r.thumbprint,
            r.transport = r.transport ? i(r.transport) : n.ajax,
            r) : null
        }
        function f(r) {
            var u;
            if (r)
                return u = {
                    url: null,
                    cache: !0,
                    prepare: null,
                    replace: null,
                    wildcard: null,
                    limiter: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    transform: t.identity,
                    transport: null
                },
                r = t.isString(r) ? {
                    url: r
                } : r,
                r = t.mixin(u, r),
                r.url || n.error("remote requires url to be set"),
                r.transform = r.filter || r.transform,
                r.prepare = e(r),
                r.limiter = o(r),
                r.transport = r.transport ? i(r.transport) : n.ajax,
                delete r.replace,
                delete r.wildcard,
                delete r.rateLimitBy,
                delete r.rateLimitWait,
                r
        }
        function e(n) {
            function u(n, t) {
                return t.url = i(t.url, n),
                t
            }
            function f(n, t) {
                return t.url = t.url.replace(r, encodeURIComponent(n)),
                t
            }
            function e(n, t) {
                return t
            }
            var t, i, r;
            return (t = n.prepare,
            i = n.replace,
            r = n.wildcard,
            t) ? t : i ? u : n.wildcard ? f : e
        }
        function o(n) {
            function f(n) {
                return function(i) {
                    return t.debounce(i, n)
                }
            }
            function e(n) {
                return function(i) {
                    return t.throttle(i, n)
                }
            }
            var i, u, r;
            return i = n.limiter,
            u = n.rateLimitBy,
            r = n.rateLimitWait,
            i || (i = /^throttle$/i.test(u) ? e(r) : f(r)),
            i
        }
        function i(i) {
            return function(r) {
                function f(n) {
                    t.defer(function() {
                        u.resolve(n)
                    })
                }
                function e(n) {
                    t.defer(function() {
                        u.reject(n)
                    })
                }
                var u = n.Deferred();
                return i(r, f, e),
                u
            }
        }
        return function(i) {
            var e, u;
            return e = {
                initialize: !0,
                identify: t.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            },
            i = t.mixin(e, i || {}),
            i.datumTokenizer || n.error("datumTokenizer is required"),
            i.queryTokenizer || n.error("queryTokenizer is required"),
            u = i.sorter,
            i.sorter = u ? function(n) {
                return n.sort(u)
            }
            : t.identity,
            i.local = t.isFunction(i.local) ? i.local() : i.local,
            i.prefetch = r(i.prefetch),
            i.remote = f(i.remote),
            i
        }
    }();
    return function() {
        "use strict";
        function i(n) {
            n = c(n);
            this.sorter = n.sorter;
            this.identify = n.identify;
            this.sufficient = n.sufficient;
            this.local = n.local;
            this.remote = n.remote ? new h(n.remote) : null;
            this.prefetch = n.prefetch ? new s(n.prefetch) : null;
            this.index = new o({
                identify: this.identify,
                datumTokenizer: n.datumTokenizer,
                queryTokenizer: n.queryTokenizer
            });
            n.initialize !== !1 && this.initialize()
        }
        var u;
        return u = window && window.Bloodhound,
        i.noConflict = function() {
            return window && (window.Bloodhound = u),
            i
        }
        ,
        i.tokenizers = f,
        t.mixin(i.prototype, {
            __ttAdapter: function() {
                function t(t, i, r) {
                    return n.search(t, i, r)
                }
                function i(t, i) {
                    return n.search(t, i)
                }
                var n = this;
                return this.remote ? t : i
            },
            _loadPrefetch: function() {
                function u(n, r) {
                    if (n)
                        return t.reject();
                    i.add(r);
                    i.prefetch.store(i.index.serialize());
                    t.resolve()
                }
                var i = this, t, r;
                return t = n.Deferred(),
                this.prefetch ? (r = this.prefetch.fromCache()) ? (this.index.bootstrap(r),
                t.resolve()) : this.prefetch.fromNetwork(u) : t.resolve(),
                t.promise()
            },
            _initialize: function() {
                function t() {
                    n.add(n.local)
                }
                var n = this;
                return this.clear(),
                (this.initPromise = this._loadPrefetch()).done(t),
                this.initPromise
            },
            initialize: function(n) {
                return !this.initPromise || n ? this._initialize() : this.initPromise
            },
            add: function(n) {
                return this.index.add(n),
                this
            },
            get: function(n) {
                return n = t.isArray(n) ? n : [].slice.call(arguments),
                this.index.get(n)
            },
            search: function(n, i, r) {
                function e(n) {
                    var i = [];
                    t.each(n, function(n) {
                        t.some(u, function(t) {
                            return f.identify(n) === f.identify(t)
                        }) || i.push(n)
                    });
                    r && r(i)
                }
                var f = this, u;
                return u = this.sorter(this.index.search(n)),
                i(this.remote ? u.slice() : u),
                this.remote && u.length < this.sufficient ? this.remote.get(n, e) : this.remote && this.remote.cancelLastRequest(),
                this
            },
            all: function() {
                return this.index.all()
            },
            clear: function() {
                return this.index.reset(),
                this
            },
            clearPrefetchCache: function() {
                return this.prefetch && this.prefetch.clear(),
                this
            },
            clearRemoteCache: function() {
                return r.resetCache(),
                this
            },
            ttAdapter: function() {
                return this.__ttAdapter()
            }
        }),
        i
    }()
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("typeahead.js", ["jquery"], function(n) {
        return t(n)
    }) : typeof exports == "object" ? module.exports = t(require("jquery")) : t(jQuery)
}(this, function(n) {
    var t = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
            },
            isBlankString: function(n) {
                return !n || /^\s*$/.test(n)
            },
            escapeRegExChars: function(n) {
                return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            isString: function(n) {
                return typeof n == "string"
            },
            isNumber: function(n) {
                return typeof n == "number"
            },
            isArray: n.isArray,
            isFunction: n.isFunction,
            isObject: n.isPlainObject,
            isUndefined: function(n) {
                return typeof n == "undefined"
            },
            isElement: function(n) {
                return !!(n && n.nodeType === 1)
            },
            isJQuery: function(t) {
                return t instanceof n
            },
            toStr: function(n) {
                return t.isUndefined(n) || n === null ? "" : n + ""
            },
            bind: n.proxy,
            each: function(t, i) {
                function r(n, t) {
                    return i(t, n)
                }
                n.each(t, r)
            },
            map: n.map,
            filter: n.grep,
            every: function(t, i) {
                var r = !0;
                return t ? (n.each(t, function(n, u) {
                    if (!(r = i.call(null, u, n, t)))
                        return !1
                }),
                !!r) : r
            },
            some: function(t, i) {
                var r = !1;
                return t ? (n.each(t, function(n, u) {
                    if (r = i.call(null, u, n, t))
                        return !1
                }),
                !!r) : r
            },
            mixin: n.extend,
            identity: function(n) {
                return n
            },
            clone: function(t) {
                return n.extend(!0, {}, t)
            },
            getIdGenerator: function() {
                var n = 0;
                return function() {
                    return n++
                }
            },
            templatify: function(t) {
                function i() {
                    return String(t)
                }
                return n.isFunction(t) ? t : i
            },
            defer: function(n) {
                setTimeout(n, 0)
            },
            debounce: function(n, t, i) {
                var r, u;
                return function() {
                    var f = this, e = arguments, o, s;
                    return o = function() {
                        r = null;
                        i || (u = n.apply(f, e))
                    }
                    ,
                    s = i && !r,
                    clearTimeout(r),
                    r = setTimeout(o, t),
                    s && (u = n.apply(f, e)),
                    u
                }
            },
            throttle: function(n, t) {
                var u, f, i, e, r, o;
                return r = 0,
                o = function() {
                    r = new Date;
                    i = null;
                    e = n.apply(u, f)
                }
                ,
                function() {
                    var s = new Date
                      , h = t - (s - r);
                    return u = this,
                    f = arguments,
                    h <= 0 ? (clearTimeout(i),
                    i = null,
                    r = s,
                    e = n.apply(u, f)) : i || (i = setTimeout(o, h)),
                    e
                }
            },
            stringify: function(n) {
                return t.isString(n) ? n : JSON.stringify(n)
            },
            noop: function() {}
        }
    }()
      , e = function() {
        "use strict";
        function i(i) {
            var e, o;
            return o = t.mixin({}, n, i),
            e = {
                css: f(),
                classes: o,
                html: r(o),
                selectors: u(o)
            },
            {
                css: e.css,
                html: e.html,
                classes: e.classes,
                selectors: e.selectors,
                mixin: function(n) {
                    t.mixin(n, e)
                }
            }
        }
        function r(n) {
            return {
                wrapper: '<span class="' + n.wrapper + '"><\/span>',
                menu: '<div class="' + n.menu + '"><\/div>'
            }
        }
        function u(n) {
            var i = {};
            return t.each(n, function(n, t) {
                i[t] = "." + n
            }),
            i
        }
        function f() {
            var n = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            return t.isMsie() && t.mixin(n.input, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            }),
            n
        }
        var n = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return i
    }()
      , o = function() {
        "use strict";
        function u(t) {
            t && t.el || n.error("EventBus initialized without el");
            this.$el = n(t.el)
        }
        var i, r;
        return i = "typeahead:",
        r = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        },
        t.mixin(u.prototype, {
            _trigger: function(t, r) {
                var u;
                return u = n.Event(i + t),
                (r = r || []).unshift(u),
                this.$el.trigger.apply(this.$el, r),
                u
            },
            before: function(n) {
                var t, i;
                return t = [].slice.call(arguments, 1),
                i = this._trigger("before" + n, t),
                i.isDefaultPrevented()
            },
            trigger: function(n) {
                var t;
                this._trigger(n, [].slice.call(arguments, 1));
                (t = r[n]) && this._trigger(t, [].slice.call(arguments, 1))
            }
        }),
        u
    }()
      , r = function() {
        "use strict";
        function t(t, i, r, u) {
            var f;
            if (!r)
                return this;
            for (i = i.split(n),
            r = u ? h(r, u) : r,
            this._callbacks = this._callbacks || {}; f = i.shift(); )
                this._callbacks[f] = this._callbacks[f] || {
                    sync: [],
                    async: []
                },
                this._callbacks[f][t].push(r);
            return this
        }
        function u(n, i, r) {
            return t.call(this, "async", n, i, r)
        }
        function f(n, i, r) {
            return t.call(this, "sync", n, i, r)
        }
        function e(t) {
            var i;
            if (!this._callbacks)
                return this;
            for (t = t.split(n); i = t.shift(); )
                delete this._callbacks[i];
            return this
        }
        function o(t) {
            var u, f, e, o, s;
            if (!this._callbacks)
                return this;
            for (t = t.split(n),
            e = [].slice.call(arguments, 1); (u = t.shift()) && (f = this._callbacks[u]); )
                o = i(f.sync, this, [u].concat(e)),
                s = i(f.async, this, [u].concat(e)),
                o() && r(s);
            return this
        }
        function i(n, t, i) {
            function r() {
                for (var u, r = 0, f = n.length; !u && r < f; r += 1)
                    u = n[r].apply(t, i) === !1;
                return !u
            }
            return r
        }
        function s() {
            return window.setImmediate ? function(n) {
                setImmediate(function() {
                    n()
                })
            }
            : function(n) {
                setTimeout(function() {
                    n()
                }, 0)
            }
        }
        function h(n, t) {
            return n.bind ? n.bind(t) : function() {
                n.apply(t, [].slice.call(arguments, 0))
            }
        }
        var n = /\s+/
          , r = s();
        return {
            onSync: f,
            onAsync: u,
            off: e,
            trigger: o
        }
    }()
      , s = function(n) {
        "use strict";
        function r(n, i, r) {
            for (var f = [], e, u = 0, o = n.length; u < o; u++)
                f.push(t.escapeRegExChars(n[u]));
            return e = r ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")",
            i ? new RegExp(e) : new RegExp(e,"i")
        }
        var i = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: !1,
            caseSensitive: !1
        };
        return function(u) {
            function o(t) {
                var i, r, e;
                return (i = f.exec(t.data)) && (e = n.createElement(u.tagName),
                u.className && (e.className = u.className),
                r = t.splitText(i.index),
                r.splitText(i[0].length),
                e.appendChild(r.cloneNode(!0)),
                t.parentNode.replaceChild(e, r)),
                !!i
            }
            function e(n, t) {
                for (var r, i = 0; i < n.childNodes.length; i++)
                    r = n.childNodes[i],
                    r.nodeType === 3 ? i += t(r) ? 1 : 0 : e(r, t)
            }
            var f;
            (u = t.mixin({}, i, u),
            u.node && u.pattern) && (u.pattern = t.isArray(u.pattern) ? u.pattern : [u.pattern],
            f = r(u.pattern, u.caseSensitive, u.wordsOnly),
            e(u.node, o))
        }
    }(window.document)
      , u = function() {
        "use strict";
        function i(i, r) {
            i = i || {};
            i.input || n.error("input is missing");
            r.mixin(this);
            this.$hint = n(i.hint);
            this.$input = n(i.input);
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = e(this.$input);
            this._checkLanguageDirection();
            this.$hint.length === 0 && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = t.noop)
        }
        function e(t) {
            return n('<pre aria-hidden="true"><\/pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: t.css("font-family"),
                fontSize: t.css("font-size"),
                fontStyle: t.css("font-style"),
                fontVariant: t.css("font-variant"),
                fontWeight: t.css("font-weight"),
                wordSpacing: t.css("word-spacing"),
                letterSpacing: t.css("letter-spacing"),
                textIndent: t.css("text-indent"),
                textRendering: t.css("text-rendering"),
                textTransform: t.css("text-transform")
            }).insertAfter(t)
        }
        function o(n, t) {
            return i.normalizeQuery(n) === i.normalizeQuery(t)
        }
        function f(n) {
            return n.altKey || n.ctrlKey || n.metaKey || n.shiftKey
        }
        var u;
        return u = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        },
        i.normalizeQuery = function(n) {
            return t.toStr(n).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }
        ,
        t.mixin(i.prototype, r, {
            _onBlur: function() {
                this.resetInputValue();
                this.trigger("blurred")
            },
            _onFocus: function() {
                this.queryWhenFocused = this.query;
                this.trigger("focused")
            },
            _onKeydown: function(n) {
                var t = u[n.which || n.keyCode];
                this._managePreventDefault(t, n);
                t && this._shouldTrigger(t, n) && this.trigger(t + "Keyed", n)
            },
            _onInput: function() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection()
            },
            _managePreventDefault: function(n, t) {
                var i;
                switch (n) {
                case "up":
                case "down":
                    i = !f(t);
                    break;
                default:
                    i = !1
                }
                i && t.preventDefault()
            },
            _shouldTrigger: function(n, t) {
                var i;
                switch (n) {
                case "tab":
                    i = !f(t);
                    break;
                default:
                    i = !0
                }
                return i
            },
            _checkLanguageDirection: function() {
                var n = (this.$input.css("direction") || "ltr").toLowerCase();
                this.dir !== n && (this.dir = n,
                this.$hint.attr("dir", n),
                this.trigger("langDirChanged", n))
            },
            _setQuery: function(n, t) {
                var i, r;
                i = o(n, this.query);
                r = i ? this.query.length !== n.length : !1;
                this.query = n;
                t || i ? !t && r && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
            },
            bind: function() {
                var n = this, i, r, f, e;
                i = t.bind(this._onBlur, this);
                r = t.bind(this._onFocus, this);
                f = t.bind(this._onKeydown, this);
                e = t.bind(this._onInput, this);
                this.$input.on("blur.tt", i).on("focus.tt", r).on("keydown.tt", f);
                if (!t.isMsie() || t.isMsie() > 9)
                    this.$input.on("input.tt", e);
                else
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(i) {
                        u[i.which || i.keyCode] || t.defer(t.bind(n._onInput, n, i))
                    });
                return this
            },
            focus: function() {
                this.$input.focus()
            },
            blur: function() {
                this.$input.blur()
            },
            getLangDir: function() {
                return this.dir
            },
            getQuery: function() {
                return this.query || ""
            },
            setQuery: function(n, t) {
                this.setInputValue(n);
                this._setQuery(n, t)
            },
            hasQueryChangedSinceLastFocus: function() {
                return this.query !== this.queryWhenFocused
            },
            getInputValue: function() {
                return this.$input.val()
            },
            setInputValue: function(n) {
                this.$input.val(n);
                this.clearHintIfInvalid();
                this._checkLanguageDirection()
            },
            resetInputValue: function() {
                this.setInputValue(this.query)
            },
            getHint: function() {
                return this.$hint.val()
            },
            setHint: function(n) {
                this.$hint.val(n)
            },
            clearHint: function() {
                this.setHint("")
            },
            clearHintIfInvalid: function() {
                var n, t, i, r;
                n = this.getInputValue();
                t = this.getHint();
                i = n !== t && t.indexOf(n) === 0;
                r = n !== "" && i && !this.hasOverflow();
                r || this.clearHint()
            },
            hasFocus: function() {
                return this.$input.is(":focus")
            },
            hasOverflow: function() {
                var n = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() >= n
            },
            isCursorAtEnd: function() {
                var n, i, r;
                return (n = this.$input.val().length,
                i = this.$input[0].selectionStart,
                t.isNumber(i)) ? i === n : document.selection ? (r = document.selection.createRange(),
                r.moveStart("character", -n),
                n === r.text.length) : !0
            },
            destroy: function() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = n("<div>")
            }
        }),
        i
    }()
      , f = function() {
        "use strict";
        function u(i, r) {
            i = i || {};
            i.templates = i.templates || {};
            i.templates.notFound = i.templates.notFound || i.templates.empty;
            i.source || n.error("missing source");
            i.node || n.error("missing node");
            i.name && !h(i.name) && n.error("invalid dataset name: " + i.name);
            r.mixin(this);
            this.highlight = !!i.highlight;
            this.name = i.name || f();
            this.limit = i.limit || 5;
            this.displayFn = e(i.display || i.displayKey);
            this.templates = o(i.templates, this.displayFn);
            this.source = i.source.__ttAdapter ? i.source.__ttAdapter() : i.source;
            this.async = t.isUndefined(i.async) ? this.source.length > 2 : !!i.async;
            this._resetLastSuggestion();
            this.$el = n(i.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
        }
        function e(n) {
            function i(t) {
                return t[n]
            }
            return n = n || t.stringify,
            t.isFunction(n) ? n : i
        }
        function o(i, r) {
            function u(t) {
                return n("<div>").text(r(t))
            }
            return {
                notFound: i.notFound && t.templatify(i.notFound),
                pending: i.pending && t.templatify(i.pending),
                header: i.header && t.templatify(i.header),
                footer: i.footer && t.templatify(i.footer),
                suggestion: i.suggestion || u
            }
        }
        function h(n) {
            return /^[_a-zA-Z0-9-]+$/.test(n)
        }
        var i, f;
        return i = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        },
        f = t.getIdGenerator(),
        u.extractData = function(t) {
            var r = n(t);
            return r.data(i.obj) ? {
                val: r.data(i.val) || "",
                obj: r.data(i.obj) || null
            } : null
        }
        ,
        t.mixin(u.prototype, r, {
            _overwrite: function(n, t) {
                t = t || [];
                t.length ? this._renderSuggestions(n, t) : this.async && this.templates.pending ? this._renderPending(n) : !this.async && this.templates.notFound ? this._renderNotFound(n) : this._empty();
                this.trigger("rendered", this.name, t, !1)
            },
            _append: function(n, t) {
                t = t || [];
                t.length && this.$lastSuggestion.length ? this._appendSuggestions(n, t) : t.length ? this._renderSuggestions(n, t) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(n);
                this.trigger("rendered", this.name, t, !0)
            },
            _renderSuggestions: function(n, t) {
                var i;
                i = this._getSuggestionsFragment(n, t);
                this.$lastSuggestion = i.children().last();
                this.$el.html(i).prepend(this._getHeader(n, t)).append(this._getFooter(n, t))
            },
            _appendSuggestions: function(n, t) {
                var i, r;
                i = this._getSuggestionsFragment(n, t);
                r = i.children().last();
                this.$lastSuggestion.after(i);
                this.$lastSuggestion = r
            },
            _renderPending: function(n) {
                var t = this.templates.pending;
                this._resetLastSuggestion();
                t && this.$el.html(t({
                    query: n,
                    dataset: this.name
                }))
            },
            _renderNotFound: function(n) {
                var t = this.templates.notFound;
                this._resetLastSuggestion();
                t && this.$el.html(t({
                    query: n,
                    dataset: this.name
                }))
            },
            _empty: function() {
                this.$el.empty();
                this._resetLastSuggestion()
            },
            _getSuggestionsFragment: function(r, u) {
                var f = this, e;
                return e = document.createDocumentFragment(),
                t.each(u, function(t) {
                    var u, o;
                    o = f._injectQuery(r, t);
                    u = n(f.templates.suggestion(o)).data(i.obj, t).data(i.val, f.displayFn(t)).addClass(f.classes.suggestion + " " + f.classes.selectable);
                    e.appendChild(u[0])
                }),
                this.highlight && s({
                    className: this.classes.highlight,
                    node: e,
                    pattern: r
                }),
                n(e)
            },
            _getFooter: function(n, t) {
                return this.templates.footer ? this.templates.footer({
                    query: n,
                    suggestions: t,
                    dataset: this.name
                }) : null
            },
            _getHeader: function(n, t) {
                return this.templates.header ? this.templates.header({
                    query: n,
                    suggestions: t,
                    dataset: this.name
                }) : null
            },
            _resetLastSuggestion: function() {
                this.$lastSuggestion = n()
            },
            _injectQuery: function(n, i) {
                return t.isObject(i) ? t.mixin({
                    _query: n
                }, i) : i
            },
            update: function(t) {
                function e(n) {
                    u || (u = !0,
                    n = (n || []).slice(0, i.limit),
                    r = n.length,
                    i._overwrite(t, n),
                    r < i.limit && i.async && i.trigger("asyncRequested", t))
                }
                function o(u) {
                    u = u || [];
                    !f && r < i.limit && (i.cancel = n.noop,
                    r += u.length,
                    i._append(t, u.slice(0, i.limit - r)),
                    i.async && i.trigger("asyncReceived", t))
                }
                var i = this
                  , f = !1
                  , u = !1
                  , r = 0;
                this.cancel();
                this.cancel = function() {
                    f = !0;
                    i.cancel = n.noop;
                    i.async && i.trigger("asyncCanceled", t)
                }
                ;
                this.source(t, e, o);
                u || e([])
            },
            cancel: n.noop,
            clear: function() {
                this._empty();
                this.cancel();
                this.trigger("cleared")
            },
            isEmpty: function() {
                return this.$el.is(":empty")
            },
            destroy: function() {
                this.$el = n("<div>")
            }
        }),
        u
    }()
      , i = function() {
        "use strict";
        function i(i, r) {
            function e(t) {
                var i = u.$node.find(t.node).first();
                return t.node = i.length ? i : n("<div>").appendTo(u.$node),
                new f(t,r)
            }
            var u = this;
            i = i || {};
            i.node || n.error("node is required");
            r.mixin(this);
            this.$node = n(i.node);
            this.query = null;
            this.datasets = t.map(i.datasets, e)
        }
        return t.mixin(i.prototype, r, {
            _onSelectableClick: function(t) {
                this.trigger("selectableClicked", n(t.currentTarget))
            },
            _onRendered: function(n, t, i, r) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", t, i, r)
            },
            _onCleared: function() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared")
            },
            _propagate: function() {
                this.trigger.apply(this, arguments)
            },
            _allDatasetsEmpty: function() {
                function n(n) {
                    return n.isEmpty()
                }
                return t.every(this.datasets, n)
            },
            _getSelectables: function() {
                return this.$node.find(this.selectors.selectable)
            },
            _removeCursor: function() {
                var n = this.getActiveSelectable();
                n && n.removeClass(this.classes.cursor)
            },
            _ensureVisible: function(n) {
                var t, i, r, u;
                t = n.position().top;
                i = t + n.outerHeight(!0);
                r = this.$node.scrollTop();
                u = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                t < 0 ? this.$node.scrollTop(r + t) : u < i && this.$node.scrollTop(r + (i - u))
            },
            bind: function() {
                var n = this
                  , i = t.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, i);
                return t.each(this.datasets, function(t) {
                    t.onSync("asyncRequested", n._propagate, n).onSync("asyncCanceled", n._propagate, n).onSync("asyncReceived", n._propagate, n).onSync("rendered", n._onRendered, n).onSync("cleared", n._onCleared, n)
                }),
                this
            },
            isOpen: function() {
                return this.$node.hasClass(this.classes.open)
            },
            open: function() {
                this.$node.addClass(this.classes.open)
            },
            close: function() {
                this.$node.removeClass(this.classes.open);
                this._removeCursor()
            },
            setLanguageDirection: function(n) {
                this.$node.attr("dir", n)
            },
            selectableRelativeToCursor: function(n) {
                var i, r, u, t;
                return r = this.getActiveSelectable(),
                i = this._getSelectables(),
                u = r ? i.index(r) : -1,
                t = u + n,
                t = (t + 1) % (i.length + 1) - 1,
                t = t < -1 ? i.length - 1 : t,
                t === -1 ? null : i.eq(t)
            },
            setCursor: function(n) {
                this._removeCursor();
                (n = n && n.first()) && (n.addClass(this.classes.cursor),
                this._ensureVisible(n))
            },
            getSelectableData: function(n) {
                return n && n.length ? f.extractData(n) : null
            },
            getActiveSelectable: function() {
                var n = this._getSelectables().filter(this.selectors.cursor).first();
                return n.length ? n : null
            },
            getTopSelectable: function() {
                var n = this._getSelectables().first();
                return n.length ? n : null
            },
            update: function(n) {
                function r(t) {
                    t.update(n)
                }
                var i = n !== this.query;
                return i && (this.query = n,
                t.each(this.datasets, r)),
                i
            },
            empty: function() {
                function n(n) {
                    n.clear()
                }
                t.each(this.datasets, n);
                this.query = null;
                this.$node.addClass(this.classes.empty)
            },
            destroy: function() {
                function i(n) {
                    n.destroy()
                }
                this.$node.off(".tt");
                this.$node = n("<div>");
                t.each(this.datasets, i)
            }
        }),
        i
    }()
      , h = function() {
        "use strict";
        function r() {
            i.apply(this, [].slice.call(arguments, 0))
        }
        var n = i.prototype;
        return t.mixin(r.prototype, i.prototype, {
            open: function() {
                return this._allDatasetsEmpty() || this._show(),
                n.open.apply(this, [].slice.call(arguments, 0))
            },
            close: function() {
                return this._hide(),
                n.close.apply(this, [].slice.call(arguments, 0))
            },
            _onRendered: function() {
                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(),
                n._onRendered.apply(this, [].slice.call(arguments, 0))
            },
            _onCleared: function() {
                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(),
                n._onCleared.apply(this, [].slice.call(arguments, 0))
            },
            setLanguageDirection: function(t) {
                return this.$node.css(t === "ltr" ? this.css.ltr : this.css.rtl),
                n.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
            },
            _hide: function() {
                this.$node.hide()
            },
            _show: function() {
                this.$node.css("display", "block")
            }
        }),
        r
    }()
      , c = function() {
        "use strict";
        function r(r, u) {
            var f, e, o, s, h, c, l, a, v, y, p;
            r = r || {};
            r.input || n.error("missing input");
            r.menu || n.error("missing menu");
            r.eventBus || n.error("missing event bus");
            u.mixin(this);
            this.eventBus = r.eventBus;
            this.minLength = t.isNumber(r.minLength) ? r.minLength : 1;
            this.input = r.input;
            this.menu = r.menu;
            this.enabled = !0;
            this.active = !1;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            f = i(this, "activate", "open", "_onFocused");
            e = i(this, "deactivate", "_onBlurred");
            o = i(this, "isActive", "isOpen", "_onEnterKeyed");
            s = i(this, "isActive", "isOpen", "_onTabKeyed");
            h = i(this, "isActive", "_onEscKeyed");
            c = i(this, "isActive", "open", "_onUpKeyed");
            l = i(this, "isActive", "open", "_onDownKeyed");
            a = i(this, "isActive", "isOpen", "_onLeftKeyed");
            v = i(this, "isActive", "isOpen", "_onRightKeyed");
            y = i(this, "_openIfActive", "_onQueryChanged");
            p = i(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", f, this).onSync("blurred", e, this).onSync("enterKeyed", o, this).onSync("tabKeyed", s, this).onSync("escKeyed", h, this).onSync("upKeyed", c, this).onSync("downKeyed", l, this).onSync("leftKeyed", a, this).onSync("rightKeyed", v, this).onSync("queryChanged", y, this).onSync("whitespaceChanged", p, this).onSync("langDirChanged", this._onLangDirChanged, this)
        }
        function i(n) {
            var i = [].slice.call(arguments, 1);
            return function() {
                var r = [].slice.call(arguments);
                t.each(i, function(t) {
                    return n[t].apply(n, r)
                })
            }
        }
        return t.mixin(r.prototype, {
            _hacks: function() {
                var r, i;
                r = this.input.$input || n("<div>");
                i = this.menu.$node || n("<div>");
                r.on("blur.tt", function(n) {
                    var u, f, e;
                    u = document.activeElement;
                    f = i.is(u);
                    e = i.has(u).length > 0;
                    t.isMsie() && (f || e) && (n.preventDefault(),
                    n.stopImmediatePropagation(),
                    t.defer(function() {
                        r.focus()
                    }))
                });
                i.on("mousedown.tt", function(n) {
                    n.preventDefault()
                })
            },
            _onSelectableClicked: function(n, t) {
                this.select(t)
            },
            _onDatasetCleared: function() {
                this._updateHint()
            },
            _onDatasetRendered: function(n, t, i, r) {
                this._updateHint();
                this.eventBus.trigger("render", i, r, t)
            },
            _onAsyncRequested: function(n, t, i) {
                this.eventBus.trigger("asyncrequest", i, t)
            },
            _onAsyncCanceled: function(n, t, i) {
                this.eventBus.trigger("asynccancel", i, t)
            },
            _onAsyncReceived: function(n, t, i) {
                this.eventBus.trigger("asyncreceive", i, t)
            },
            _onFocused: function() {
                this._minLengthMet() && this.menu.update(this.input.getQuery())
            },
            _onBlurred: function() {
                this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
            },
            _onEnterKeyed: function(n, t) {
                var i;
                (i = this.menu.getActiveSelectable()) && this.select(i) && t.preventDefault()
            },
            _onTabKeyed: function(n, t) {
                var i;
                (i = this.menu.getActiveSelectable()) ? this.select(i) && t.preventDefault() : (i = this.menu.getTopSelectable()) && this.autocomplete(i) && t.preventDefault()
            },
            _onEscKeyed: function() {
                this.close()
            },
            _onUpKeyed: function() {
                this.moveCursor(-1)
            },
            _onDownKeyed: function() {
                this.moveCursor(1)
            },
            _onLeftKeyed: function() {
                this.dir === "rtl" && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
            },
            _onRightKeyed: function() {
                this.dir === "ltr" && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
            },
            _onQueryChanged: function(n, t) {
                this._minLengthMet(t) ? this.menu.update(t) : this.menu.empty()
            },
            _onWhitespaceChanged: function() {
                this._updateHint()
            },
            _onLangDirChanged: function(n, t) {
                this.dir !== t && (this.dir = t,
                this.menu.setLanguageDirection(t))
            },
            _openIfActive: function() {
                this.isActive() && this.open()
            },
            _minLengthMet: function(n) {
                return n = t.isString(n) ? n : this.input.getQuery() || "",
                n.length >= this.minLength
            },
            _updateHint: function() {
                var f, i, n, e, o, s, r;
                f = this.menu.getTopSelectable();
                i = this.menu.getSelectableData(f);
                n = this.input.getInputValue();
                !i || t.isBlankString(n) || this.input.hasOverflow() ? this.input.clearHint() : (e = u.normalizeQuery(n),
                o = t.escapeRegExChars(e),
                s = new RegExp("^(?:" + o + ")(.+$)","i"),
                r = s.exec(i.val),
                r && this.input.setHint(n + r[1]))
            },
            isEnabled: function() {
                return this.enabled
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            isActive: function() {
                return this.active
            },
            activate: function() {
                return this.isActive() ? !0 : !this.isEnabled() || this.eventBus.before("active") ? !1 : (this.active = !0,
                this.eventBus.trigger("active"),
                !0)
            },
            deactivate: function() {
                return this.isActive() ? this.eventBus.before("idle") ? !1 : (this.active = !1,
                this.close(),
                this.eventBus.trigger("idle"),
                !0) : !0
            },
            isOpen: function() {
                return this.menu.isOpen()
            },
            open: function() {
                return this.isOpen() || this.eventBus.before("open") || (this.menu.open(),
                this._updateHint(),
                this.eventBus.trigger("open")),
                this.isOpen()
            },
            close: function() {
                return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(),
                this.input.clearHint(),
                this.input.resetInputValue(),
                this.eventBus.trigger("close")),
                !this.isOpen()
            },
            setVal: function(n) {
                this.input.setQuery(t.toStr(n))
            },
            getVal: function() {
                return this.input.getQuery()
            },
            select: function(n) {
                var t = this.menu.getSelectableData(n);
                return t && !this.eventBus.before("select", t.obj) ? (this.input.setQuery(t.val, !0),
                this.eventBus.trigger("select", t.obj),
                this.close(),
                !0) : !1
            },
            autocomplete: function(n) {
                var i, t, r;
                return (i = this.input.getQuery(),
                t = this.menu.getSelectableData(n),
                r = t && i !== t.val,
                r && !this.eventBus.before("autocomplete", t.obj)) ? (this.input.setQuery(t.val),
                this.eventBus.trigger("autocomplete", t.obj),
                !0) : !1
            },
            moveCursor: function(n) {
                var u, i, t, r, f;
                return (u = this.input.getQuery(),
                i = this.menu.selectableRelativeToCursor(n),
                t = this.menu.getSelectableData(i),
                r = t ? t.obj : null,
                f = this._minLengthMet() && this.menu.update(u),
                !f && !this.eventBus.before("cursorchange", r)) ? (this.menu.setCursor(i),
                t ? this.input.setInputValue(t.val) : (this.input.resetInputValue(),
                this._updateHint()),
                this.eventBus.trigger("cursorchange", r),
                !0) : !1
            },
            destroy: function() {
                this.input.destroy();
                this.menu.destroy()
            }
        }),
        r
    }();
    (function() {
        "use strict";
        function r(t, i) {
            t.each(function() {
                var t = n(this), r;
                (r = t.data(f.typeahead)) && i(r, t)
            })
        }
        function v(n, t) {
            return n.clone().addClass(t.classes.hint).removeData().css(t.css.hint).css(p(n)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            })
        }
        function y(n, t) {
            n.data(f.attrs, {
                dir: n.attr("dir"),
                autocomplete: n.attr("autocomplete"),
                spellcheck: n.attr("spellcheck"),
                style: n.attr("style")
            });
            n.addClass(t.classes.input).attr({
                autocomplete: "off",
                spellcheck: !1
            });
            try {
                n.attr("dir") || n.attr("dir", "auto")
            } catch (i) {}
            return n
        }
        function p(n) {
            return {
                backgroundAttachment: n.css("background-attachment"),
                backgroundClip: n.css("background-clip"),
                backgroundColor: n.css("background-color"),
                backgroundImage: n.css("background-image"),
                backgroundOrigin: n.css("background-origin"),
                backgroundPosition: n.css("background-position"),
                backgroundRepeat: n.css("background-repeat"),
                backgroundSize: n.css("background-size")
            }
        }
        function w(n) {
            var r, i;
            r = n.data(f.www);
            i = n.parent().filter(r.selectors.wrapper);
            t.each(n.data(f.attrs), function(i, r) {
                t.isUndefined(i) ? n.removeAttr(r) : n.attr(r, i)
            });
            n.removeData(f.typeahead).removeData(f.www).removeData(f.attr).removeClass(r.classes.input);
            i.length && (n.detach().insertAfter(i),
            i.remove())
        }
        function a(i) {
            var u, r;
            return u = t.isJQuery(i) || t.isElement(i),
            r = u ? n(i).first() : [],
            r.length ? r : null
        }
        var l, f, s;
        l = n.fn.typeahead;
        f = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        s = {
            initialize: function(r, s) {
                function p() {
                    var e, d, p, w, b, k, g, nt, tt, it, rt;
                    t.each(s, function(n) {
                        n.highlight = !!r.highlight
                    });
                    e = n(this);
                    d = n(l.html.wrapper);
                    p = a(r.hint);
                    w = a(r.menu);
                    b = r.hint !== !1 && !p;
                    k = r.menu !== !1 && !w;
                    b && (p = v(e, l));
                    k && (w = n(l.html.menu).css(l.css.menu));
                    p && p.val("");
                    e = y(e, l);
                    (b || k) && (d.css(l.css.wrapper),
                    e.css(b ? l.css.input : l.css.inputWithNoHint),
                    e.wrap(d).parent().prepend(b ? p : null).append(k ? w : null));
                    rt = k ? h : i;
                    g = new o({
                        el: e
                    });
                    nt = new u({
                        hint: p,
                        input: e
                    },l);
                    tt = new rt({
                        node: w,
                        datasets: s
                    },l);
                    it = new c({
                        input: nt,
                        menu: tt,
                        eventBus: g,
                        minLength: r.minLength
                    },l);
                    e.data(f.www, l);
                    e.data(f.typeahead, it)
                }
                var l;
                return s = t.isArray(s) ? s : [].slice.call(arguments, 1),
                r = r || {},
                l = e(r.classNames),
                this.each(p)
            },
            isEnabled: function() {
                var n;
                return r(this.first(), function(t) {
                    n = t.isEnabled()
                }),
                n
            },
            enable: function() {
                return r(this, function(n) {
                    n.enable()
                }),
                this
            },
            disable: function() {
                return r(this, function(n) {
                    n.disable()
                }),
                this
            },
            isActive: function() {
                var n;
                return r(this.first(), function(t) {
                    n = t.isActive()
                }),
                n
            },
            activate: function() {
                return r(this, function(n) {
                    n.activate()
                }),
                this
            },
            deactivate: function() {
                return r(this, function(n) {
                    n.deactivate()
                }),
                this
            },
            isOpen: function() {
                var n;
                return r(this.first(), function(t) {
                    n = t.isOpen()
                }),
                n
            },
            open: function() {
                return r(this, function(n) {
                    n.open()
                }),
                this
            },
            close: function() {
                return r(this, function(n) {
                    n.close()
                }),
                this
            },
            select: function(t) {
                var i = !1
                  , u = n(t);
                return r(this.first(), function(n) {
                    i = n.select(u)
                }),
                i
            },
            autocomplete: function(t) {
                var i = !1
                  , u = n(t);
                return r(this.first(), function(n) {
                    i = n.autocomplete(u)
                }),
                i
            },
            moveCursor: function(n) {
                var t = !1;
                return r(this.first(), function(i) {
                    t = i.moveCursor(n)
                }),
                t
            },
            val: function(n) {
                var t;
                return arguments.length ? (r(this, function(t) {
                    t.setVal(n)
                }),
                this) : (r(this.first(), function(n) {
                    t = n.getVal()
                }),
                t)
            },
            destroy: function() {
                return r(this, function(n, t) {
                    w(t);
                    n.destroy()
                }),
                this
            }
        };
        n.fn.typeahead = function(n) {
            return s[n] ? s[n].apply(this, [].slice.call(arguments, 1)) : s.initialize.apply(this, arguments)
        }
        ;
        n.fn.typeahead.noConflict = function() {
            return n.fn.typeahead = l,
            this
        }
    }
    )()
})
