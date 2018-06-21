function calculate() {
    $("#itogo").html("");
    var e = 0,
        a = 0,
        i = 0,
        t = $("#choise").is(":checked");
    t && $(".factura").each(function(a, i) {
        val = parseFloat($(i).val()), isNaN(val) || (e += parseFloat(val * $(i).data("num")))
    });
    var o = $("#choise1").is(":checked");
    o && $(".factura").each(function(e, i) {
        val = parseFloat($(i).val()), isNaN(val) || (a += parseFloat(val * $(i).data("num")))
    }), $(".calc").each(function(e, a) {
        val = parseFloat($(a).val()), isNaN(val) || (i += parseFloat(val * $(a).data("num")))
    }), e *= .15, a *= .15, i += e, i += a, i > 0 && $("#itogo").html(i.toFixed(2) + " у.е.")
}

function number_format(e, a, i, t) {
    var o, n, s, l, r;
    return isNaN(a = Math.abs(a)) && (a = 2), void 0 == i && (i = ","), void 0 == t && (t = "."), o = parseInt(e = (+e || 0).toFixed(a)) + "", (n = o.length) > 3 ? n %= 3 : n = 0, r = n ? o.substr(0, n) + t : "", s = o.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + t), l = a ? i + Math.abs(e - o).toFixed(a).replace(/-/, 0).slice(2) : "", r + s + l
}
$(function() {

}), $(window).scroll(function() {
    $(this).scrollTop() > $("header").height() ? ($(".top").addClass("fix"), $("body").addClass("pt")) : ($(".top").removeClass("fix"), $("body").removeClass("pt"))
}), $(function() {
    $(".street-slide").width($(".wrap").width() - 710), $("header nav a").on("click touchend", function() {
        var e = $(this);
        e.toggleClass("fc");
        var a = e.attr("href");
       
    }), $(".inline").colorbox({
        inline: !0,
        className: "inline-pop-up",
        opacity: "0.7"
    }), $(".inline-ready").colorbox({
        inline: !0,
        width: "50%",
        onComplete: function() {
            $("#ready-title").val($(this).data("title"))
        }
    }), $(".box").colorbox(), $(".g-box").colorbox({
        rel: "box"
    }), $(".f-box").colorbox({
        rel: "gbox"
    }), $(".s-box").colorbox({
        rel: "sbox"
    }), $(".a-box").colorbox({
        onComplete: function() {
            $(".popup-slide").bxSlider({
                slideWidth: 130,
                controls: !0,
                minSlides: 3,
                maxSlides: 3
            }), $(".inlin").colorbox({
                inline: !0,
                onComplete: function() {
                    $("#catalog-item").val($(this).data("title")), $("#cboxWrapper").addClass("popup-opacity")
                },
                onClosed: function() {
                    $("#cboxWrapper").removeClass("popup-opacity")
                }
            })
        }
    }), $("body").on("click", ".small", function() {
        $(".small").removeClass("act"), $(this).addClass("act"), $(".forbig img").addClass("dnone"), $("#pic" + $(this).data("num")).removeClass("dnone")
    }), 
    $(".small").click(function() {
        var e = $(this).data("num");
        $(".forbig img").addClass("dnone"), $("#pic" + e).removeClass("dnone")
    }), $("input, select").styler(), $(".poster").submit(function() {
        $form = $(this);
        var e = $form.data("yCounter");
        return $form.ajaxSubmit({
            dataType: "json",
            data: {
                handler: "Poster",
                command: $form.data("c")
            },
            success: function(a) {
                return a.result ? ($form.resetForm(), e && yaCounter13847170.reachGoal(e), $form.data("ga_title") && $form.data("ga_desc") && ga("send", "event", $form.data("ga_title"), $form.data("ga_desc")), $.colorbox({
                    html: '<div class="popup-form">' + a.message + "</div>",
                    className: "thanks_cbox"
                }), console.log(a.message), void 0) : (alert(a.message), !1)
            }
        }), !1
    }), $(".calc, #choise, #choise1").change(function() {
        calculate()
    }), $("#price-small").submit(function() {
        var e = 0;
        $form = $(this);
        var a = parseFloat($("#i-cell").val()),
            i = parseFloat($("#i-var").val());
        return isNaN(a) || isNaN(i) || (e += a * i), $(".i-i").each(function(a, i) {
            val = parseFloat($(i).val()), price = parseFloat($(i).data("price")), isNaN(val) || isNaN(price) || (e += val * price)
        }), $("#it-og").html(e), e > 0 && (yaCounter13847170.reachGoal("price"), ga("send", "event", $form.data("ga_title"), $form.data("ga_desc"))), !1
    }), $(".calc, .i-i, #i-cell").keypress(function(e) {
        var a, i;
        if (!e) var e = window.event;
        return e.keyCode ? a = e.keyCode : e.which && (a = e.which), null == a || 0 == a || 8 == a || 13 == a || 9 == a || 46 == a || 37 == a || 39 == a ? !0 : (i = String.fromCharCode(a), /\d/.test(i) ? void 0 : !1)
    }), $(".vac-title").click(function() {
        $(".vac-desc").toggleClass("dnone"), $(this).next().slideToggle(1e3)
    }), $(".cbox-title").click(function() {
        $("#h-title_").val($(this).data("title"))
    })
}), $(window).load(function() {
    $(".slider-main").show();
    var e = $(".bxslider").bxSlider({
        mode: "fade",
        captions: !0,
        pager: !0,
        onSlideAfter: function() {
            var a = e.getCurrentSlide();
            $(".sl-main-bg").addClass("dnone"), $("#main-sl-" + a).removeClass("dnone")
        }
    })
}), $(window).scroll(function() {
    var e = ($(".top"), $("header"), $(window).scrollTop()),
        a = $(window).height();
    e > 800 ? $(".index .contacts a.mail").hide() : $(".index .contacts a.mail").show(), $(".with-circle").each(function(i, t) {
        $(t).offset().top < e + a / 1.6 && $("#y-" + $(t).html()).animate({
            height: "100%",
            opacity: 1
        }, 900)
    }), e > 1200 && $(".chart .pipe > div").show().addClass("stretchRight")
}), $(document).ready(function() {
    $(".selecting").click(function() {
        $(".pick-up").toggleClass("hidden")
    })
}), $(".b-slider .bx-slider").bxSlider({
    mode: "fade",
    pager: !0,
    auto: !0,
    pause: 5e3
}), $.fn.cDown = function() {
    var e, a;
    return e = this, a = new Date(1e3 * e.data("time")), e.countdown({
        padZeroes: !0,
        until: a
    })
}, $(".b-counter-a").each(function() {
    $(this).cDown()
});
var priceAnimation = function() {
    $(".b-bonuses .col-wrap").is(":in-viewport") && setTimeout(function() {
        $(".b-bonuses .col").eq(0).addClass("animated slideInLeft"), $(".b-bonuses .col").eq(1).addClass("animated fadeIn"), $(".b-bonuses .col").eq(2).addClass("animated slideInRight"), $(".b-bonuses .col").css("opacity", 1)
    }, 100), $(".s-price-c .col-wrap_first").is(":in-viewport") && setTimeout(function() {
        $(".s-price-c .col-wrap_first .col").eq(0).addClass("animated slideInLeft"), $(".s-price-c .col-wrap_first .col").eq(1).addClass("animated fadeIn"), $(".s-price-c .col-wrap_first .col").eq(2).addClass("animated slideInRight"), $(".s-price-c .col-wrap_first .col").css("opacity", 1)
    }, 100), $(".s-price-c .col-wrap_last").is(":in-viewport") && setTimeout(function() {
        $(".s-price-c .col-wrap_last .col").eq(0).addClass("animated slideInLeft"), $(".s-price-c .col-wrap_last .col").eq(1).addClass("animated fadeIn"), $(".s-price-c .col-wrap_last .col").eq(2).addClass("animated slideInRight"), $(".s-price-c .col-wrap_last .col").css("opacity", 1)
    }, 100)
};
