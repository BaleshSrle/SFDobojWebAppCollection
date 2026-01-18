$(document).ready(() => {
    "use strict";
    //console.info("Glavna skripta je pokrenuta.");
    const images = document.images;
    const scripts = document.scripts;
    $("head").each((_, e) => {
        $(e).prepend($("<meta>").attr({ "name": "mobile-web-app-capable", "content": "yes" }), $("<meta>").attr({ "name": "apple-mobile-web-app-capable", "content": "yes" }), $("<meta>").attr({ "name": "MSThemeCompatible", "content": "yes" }), $("<meta>").attr({ "http-equiv": "cleartype", "content": "on" }), $("<meta>").attr({ "http-equiv": "x-dns-prefetch-control", "content": "on" }), $("<meta>").attr({ "http-equiv": "Cache-control", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Pragma", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Expires", "content": "-1" }));
        $(e).prepend($("<meta>").attr({ "name": "author", "content": "Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net" }), $("<meta>").attr({ "name": "reply-to", "content": "srdjan.balesevic%40yahoo.com" }), $("<meta>").attr({ "name": "language", "content": "sr" }), $("<meta>").attr({ "name": "host", "content": "pages.github.com" }), $("<meta>").attr({ "name": "geo.region", "content": "BA-SRP" }), $("<meta>").attr({ "name": "geo.placename", "content": "Добој" }), $("<meta>").attr({ "name": "twitter:creator", "content": "@BaleshSrle" }), $("<meta>").attr({ "name": "twitter:site", "content": "@BaleshSrle" }));
        $(e).append($("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css", "crossorigin": "anonymous" }).on("error", function () { this.href = "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.5.0/css/flag-icons.min.css" }), $("<link>").attr({ "rel": "dns-prefetch", "href": "https://cdn.jsdelivr.net/" }), $("<link>").attr({ "rel": "preconnect", "href": "https://cdn.jsdelivr.net/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "prefetch", "href": "https://img.shields.io/" }));
        $(e).children("script:lt(2)").attr("crossorigin", "anonymous");
    });
    $("meta:last").after($("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap@4/dist/css/bootstrap.min.css", "crossorigin": "anonymous" }).on("error", function () { this.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css" }));

    //$("body").css("background", "url('https://upload.wikimedia.org/wikipedia/sr/6/68/Saobra%C4%87ajni_fakultet_Doboj.png') right bottom / 200px no-repeat fixed padding-box padding-box");
    $("body").css("background", "url('https://sf.ues.rs.ba/cir/wp-content/uploads/2024/04/LogoPng.png') right bottom / 200px no-repeat fixed padding-box padding-box");
    $("div.container-fluid").addClass("p-3")
    $("h2").each(function () {
        $(this).parent("div.card-header").addClass("py-2");
        $(this).children("button").each(function (i) {
            $("h2").children("button").attr({ "type": "button", "data-toggle": "collapse", "aria-controls": $("h2 > button").eq(i).attr("data-target").replace("#", "") })
        }).addClass("btn btn-link btn-block text-left");
    }).addClass("mb-0");
    $("div.collapse").each(function (i) {
        $(this).attr({ "id": $("h2 > button").eq(i).attr("data-target").replace("#", ""), "aria-labelledby": $(this).prev().attr("id"), "data-parent": "#" + $("div.accordion").attr("id") });
    });
    $("div#collapseTransportProduce > div.card-body div.col-sm-6:last").append($("<p></p>").attr("id", "rezultat"), $("<p></p>").attr("id", "rezultat2"), $("<p></p>").attr("id", "rezultat3"), $("<p></p>").attr("id", "rezultat4"), $("<p></p>").attr("id", "rezultat5"), $("<p></p>").attr("id", "rezultat6"));
    $("div#collapseADR > div.card-body").append($("<h5></h5>").addClass("pt-3").text("Značenje identifikacionog broja opasnosti"), $("<p></p>").addClass("card-text"), $("<p></p>").addClass("text-muted mb-0").html("&#42;&nbsp;Voda se smije koristiti samo uz odobrenje stručnjaka.<br>Neke opasne materije burno reaguju u kontaktu sa vodom &#40;od ispuštanja otrovnih gasova do samozapaljenja&#41;, zato je potrebno pažljivo rukovanje sa vodom."));
    $("div.card-body:eq(0)").each((_, e) => {
        $(e).children("h5").addClass("card-title");
        $(e).children("p").addClass("card-text");
        $(e).find("var").addClass("font-weight-bold px-1");
        $(e).find("span:not(.fi)").addClass("font-italic");
    });
    $("div.alert").attr("role", "alert");
    $("div.alert:eq(0)").addClass("alert-primary").append($("<h4></h4>").addClass("alert-heading").text("Napomena"), $("<p></p>").addClass("mb-0").html("Ova kolekcija aplikacija je namjenjena za sve korisnike iz<span class='fi fi-rs align-middle mx-1' title='Srbija'></span>,<span class='fi fi-me align-middle mx-1' title='Crna Gora'></span>,<span class='fi fi-ba align-middle mx-1' title='Bosna i Hercegovina'></span>i<span class='fi fi-hr align-middle mx-1' title='Hrvatska'></span>."));
    $("div.alert:eq(1)").addClass("alert-info").append($("<h4></h4>").addClass("alert-heading").text("Info"), $("<p></p>").addClass("mb-0").html("Podaci za ovu web aplikaciju su iskorišteni iz skripte <strong>Transport opasnih materija - ADR 2007</strong> čiji su autori Prof. dr Velibor Peulić, dr Radovan Višković, docent i Željko Matoc"));
    $("article").not(":first").prepend($("<hr>").addClass("my-2"));
    $("figure:eq(0)").addClass("figure text-center").append($("<img>").attr({ "src": "https://api.inpart24.com/uploads/yoofp01b.nze_adr-plate.jpg", "alt": "ADR Listica" }).addClass("figure-img img-fluid my-n3").css("max-height", "200px"), $("<figcaption></figcaption>").addClass("figure-caption text-center font-italic").text("Primjer naranžastog obilježja sa brojem za obilježavanje opasnosti (HIN) i UN brojem")).parent("div").addClass("d-flex justify-content-center");
    $("div.card-footer").addClass("text-muted py-1").append($("<p></p>").addClass("mb-0 small text-center").html("Ovaj projekat koristi<img alt='Bootstrap Badge'>,<img alt='jQuery Badge'>,<img alt='Chart.js Badge'>preko<img alt='jsDelivr Badge'>CDN servera i hostovan je na<img alt='GitHub Pages Badge'>.<br>HTML kod ove stranice možete vidjeti na<a href='https://github.com/BaleshSrle" + location.pathname + "' hreflang='en' target='_blank'><img alt='Static Badge'></a>.<br>&copy; 2019 - " + new Date().getFullYear() + "."));
    images[1].src = "https://img.shields.io/github/v/release/twbs/bootstrap?filter=v4.*&logo=bootstrap&logoColor=white&label=Bootstrap&color=7952b3";
    images[1].onerror = function () { this.src = "https://badgen.net/jsdelivr/v/npm/bootstrap@4?color=7952b3&label=Bootstrap"; }
    images[2].src = "https://img.shields.io/github/v/release/jquery/jquery?filter=3.*&logo=jquery&logoColor=white&label=jQuery&color=0769ad";
    images[2].onerror = function () { this.src = "https://badgen.net/jsdelivr/v/npm/jquery@3?color=0769ad&label=jQuery"; }
    images[3].src = "https://img.shields.io/github/v/release/chartjs/Chart.js?filter=v2.*&logo=chartdotjs&logoColor=white&label=Chart.js&color=ff6384";
    images[3].onerror = function () { this.src = "https://badgen.net/jsdelivr/v/npm/chart.js@2?color=ff6384&label=Chart.js"; }
    images[4].src = "https://img.shields.io/badge/jsDelivr-e84d3d?logo=jsdelivr&logoColor=white&labelColor=555555";
    images[4].onerror = function () { this.src = "https://badgen.net/badge/icon/jsDelivr?&color=e84d3d&icon=jsdelivr&label"; }
    images[5].src = "https://img.shields.io/badge/by%20GitHub-181717?logo=githubpages&logoColor=white&logoSize=auto&labelColor=222222";
    images[6].src = "https://img.shields.io/badge/GitHub-181717?logo=github&logoSize=auto&labelColor=555555";
    images[6].onerror = function () { "https://badgen.net/badge/icon/GitHub?color=181717&icon=github&label"; }
    scripts[1].onerror = function () { this.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.min.js"; }
    scripts[2].onerror = function () { this.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"; }
    $("img").slice(1).addClass("align-middle px-1");
    /* $("div.input-group").each(function () {
        $(this).children("div").addClass("input-group-prepend");
    }).addClass("mb-3"); */
    /* $("div.input-group-prepend > span").addClass("input-group-text"); */
    $("select, input").addClass("form-control").attr("required", true);
    $("output").addClass("form-control");
    $("select > option:first-child").attr({ "selected": true, "disabled": true });
    $("input[type='number']").each((_, e) => {
        //$(this).not(":lt(7):gt(3)").attr("inputmode", "numeric");
        //$(this).slice(4, 7).attr("inputmode", "decimal");
        $(e).filter("#OutsideTemp, #ProduceWeigh, #ProduceTemp, #TransportDuration, #P1x, #P1y, #P2x, #P2y, #P3x, #P3y, #Sx, #Sy").attr("inputmode", "numeric");
        $(e).filter("#Q1, #Q2, #Q3").attr("inputmode", "decimal");
        $(e).filter("#ProduceWeight, #TransportDuration").attr({ "min": "1", "step": "1" }).parent("div.form-group").tooltip({ placement: 'top', title: 'U ovo polje se unosi pozitivni cijeli broj.' });
        $(e).filter("#OutsideTemp, #ProduceTemp").attr({ "min": "-50", "max": "50", "step": "1", "pattern": "-?[0-9]{2}" }).parent("div.form-group").tooltip({ placement: 'top', title: 'U ovo polje se unosi pozitivni ili negativni cijeli broj.' });
    });
    $("table.table").each((_, e) => {
        $(e).addClass("table-sm text-center").wrap($("<div></div>").addClass("table-responsive"));
        $(e).children("caption").addClass("text-center").css("caption-side", "top");
    });
    $("td").prev("th").addClass("align-middle");
    $("button.btn-primary").on("click", function () {
        var a = $("#RefrigerantType").val();
        var b = $("#Season").val();
        var c = Number($("#ProduceWeight").val());
        var d = Number($("#TransportDuration").val());
        var e = Number($("#OutsideTemp").val());
        var f = Number($("#ProduceTemp").val());
        var g = $("#ProduceType").val();

        if (c <= 0 || !Number.isInteger(c) || d <= 0 || !Number.isInteger(d) || e <= "-51" || e >= "51" || !Number.isInteger(e) || f <= "-51" || f >= "51" || !Number.isInteger(f)) {
            alert("Unos nije dozvoljen.\nMolimo vas da pažljivo pročitate uputstvo.");
        } else {

            var j = e - f; /* j - temperaturna razlika (razlika između spoljne temperature i temperature proizvoda)*/

            var q1 = 860 * j;
            var q11 = q1 / a;

            if (f <= 4) {
                var q22 = 0;
            } else {
                var q2 = c * g * j;
                var q22 = q2 / a;
            }

            var q3 = 115 * 0.32 * j * d;
            var q33 = q3 / a

            if (f <= -7 && f >= -18) {
                var q4 = 0;
            } else {
                if (f >= 4 && f < 15) {
                    var q41 = (c * 200 * d) / 24000;
                    var q4 = q41 / a;
                } else if (f >= 15 && f < 30) {
                    var q41 = (c * 2500 * d) / 24000;
                    var q4 = q41 / a;
                } else {
                    var q41 = (c * 6000 * d) / 24000;
                    var q4 = q41 / a;
                }
            }

            /* if (f <= -7 && f >= -18) {
                var q43 = 0;
            } else {
                var q43 = q4 / a;
            } */

            var l = +q11.toFixed(0) + +q22.toFixed(0) + +q33.toFixed(0) + +q4.toFixed(0);

            if (e >= 20 && b === "0.06") {
                var lu = l * b;
                var l1 = l + lu;
                $("#rezultat6").text("Potrebna količina rashladnog sredstva, koja je uvećana za 6% u ljetnim mjesecima, iznosi " + l1.toFixed(0) + "[kg].").addClass("mb-sm-1");
            }

            $("#rezultat").text("Potrebna količina rashadnog sredstva za hlađenje vagona hladnjače je " + q11.toFixed(0) + " [kg].").addClass("mb-sm-1");

            if (q22 !== 0) {
                $("#rezultat2").text("Potrebna količina rashadnog sredstva za hlađenje robe je " + q22.toFixed(0) + " [kg].").addClass("mb-sm-1");
            } else {
                $("#rezultat2").text("Nije potrebno računari koliko je potrebno rashladnog sredstva za hlađenje robe, jer je roba prethodno ohlađena.").addClass("mb-sm-1");
            }

            $("#rezultat3").text("Potrebna količina rashadnog sredstva za uticaj spoljne temperature je " + q33.toFixed(0) + " [kg].").addClass("mb-sm-1");

            if (q4 !== 0) {
                $("#rezultat4").text("Potrebna količina rashadnog sredstva za uticaj disanja robe je " + q4.toFixed(0) + " [kg].").addClass("mb-sm-1");
            } else if (q4 === 0 && f <= -19 && f >= -40) {
                $("#rezultat4").html("Nije potrebno računati potrebnu količinu rashladnog sredstva za uticaj disanja robe, jer roba u brzo smrznutom stanju &quot;ne diše&quot;.").addClass("mb-sm-1");
            } else {
                $("#rezultat4").html("Nije potrebno računati potrebnu količinu rashladnog sredstva za uticaj disanja robe, jer roba u smrznutom stanju &quot;ne diše&quot;.").addClass("mb-sm-1");
            }

            $("#rezultat5").text("Potrebna količina rashladnog sredstva iznosi " + l + "[kg].").addClass("mb-sm-1");
        }
    }).attr("type", "button");
    $("select#ibo").on("click", function () {
        const adrMessage = {
            "1": "Zagušljivač ili gas bez dodatne opasnosti.",
            "2": "Pothlađeni ukapljeni gas, zagušljivač.",
            "3": "Pothlađeni ukapljeni gas, zapaljiv.",
            "4": "Pothlađeni ukapljeni gas, oksidirajući (pojačava vatru).",
            "5": "Zapaljivi gas.",
            "6": "Zapaljivi gas, koji može spontano dovesti do burne reakcije.",
            "7": "Oksidirajući (pojačava vatru).",
            "8": "Otrovni gas.",
            "9": "Otrovni gas, zapaljiv.",
            "10": "Otrovni gas, oksidirajući (pojačava vatru).",
            "11": "Otrovni gas, korozivni.",
            "12": "Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), ili zapaljiva tečnost ili čvrsta materija u otopljenom stanju sa tačkom paljenja iznad 60 &#8451;, zagrijana do temperature jednake ili iznad njene tačke paljenja, ili samozagrijavajuća tečnost.",
            "13": "Zapaljiva tečnost koja reaguje s vodom, ispuštajući zapaljive gasove.",
            "14": "Zapaljiva tečnost koja reaguje opasno s vodom, ispuštajući zapaljive gasove.",
            "15": "Jako zapaljiva tečnost (tačka paljenja ispod 23 &#8451;).",
            "16": "Piroforna tečnost.",
            "17": "Piroforna tečnost koja reaguje opasno sa vodom. *",
            "18": "Jako zapaljiva tečnost, otrovna.",
            "19": "Jako zapaljiva tečnost, korozivna.",
            "20": "Jako zapaljiva tečnost, korozivna, koja reaguje opasno sa vodom. *",
            "21": "Jako zapaljiva tečnost koja može spontano dovesti do burne reakcije.",
            "22": "Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), slabo otrovna ili samozagrijavajuća tečnost, otrovna.",
            "23": "Zapaljiva tečnost, otrovna, reaguje sa vodom, ispuštajući zapaljive gasove.",
            "24": "Zapaljiva tečnost, otrovna, reagujući sa vodom, stvara zapaljive gasove. *",
            "25": "Zapaljiva tečnost, otrovna, korozivna.",
            "26": "Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), slabo korozivna ili samozagrijavajuća tečnost, korozivna.",
            "27": "Zapaljiva tečnost, korozivna, reaguje sa vodom, ispuštajući zapaljive gasove.",
            "28": "Zapaljiva tečnost, korozivna, reagujući sa vodom, stvara zapaljive gasove. *",
            "29": "Zapaljiva tečnost, može spontano dovesti do burne reakcije.",
            "30": "Zapaljiva čvrsta ili samoreaktivna materija, ili samozagrijavajuća materija.",
            "31": "Čvrsta materija koja reaguje sa vodom, ispuštajući zapaljive gasove.",
            "32": "Zapaljiva čvrsta materija koja reaguje opasno s vodom, ispuštajući zapaljive gasove. *",
            "33": "Spontano zapaljiva (piroforna) čvrsta materija.",
            "34": "Zapaljiva čvrsta materija, u otopljenom stanju pri povišenoj temperaturi.",
            "35": "Zapaljiva čvrsta materija, otrovna, u otopljenom stanju, pri povišenoj temperaturi.",
            "36": "Zapaljiva ili samozagrijavajuća čvrsta materija, otrovna.",
            "37": "Otrovna čvrsta materija koja reaguje sa vodom, ispuštajući zapaljive gasove.",
            "38": "Čvrsta materija koja reaguje opasno sa vodom, stvara otrovne gasove. *",
            "39": "Zapaljiva ili samozagrijavajuća čvrsta materija, korozivna.",
            "40": "Korozivna čvrsta materija koja reaguje sa vodom, stvara zapaljive gasove.",
            "41": "Korozivna materija koja reaguje opasno sa vodom, stvara korozivne gasove. *",
            "42": "Oksidirajuća materija (pojačava vatru).",
            "43": "Zapaljivi organski peroksid.",
            "44": "Jako oksidirajuća materija (pojačava vatru).",
            "45": "Jako oksidirajuća materija, otrovna (pojačava vatru).",
            "46": "Jako oksidirajuća materija, korozivna (pojačava vatru).",
            "47": "Jako oksidirajuća materija, može spontano burno reagovati (pojačava vatru).",
            "48": "Oksidirajuća materija, otrovna (pojačava vatru).",
            "49": "Oksidirajuća materija, otrovna, korozivna (pojačava vatru).",
            "50": "Oksidirajuća materija, korozivna (pojačava vatru).",
            "51": "Oksidirajuća materija, može spontano dovesti do burne reakcije (pojačava vatru).",
            "52": "Otrovna ili slabo otrovna materija.",
            "53": "Zarazna materija.",
            "54": "Otrovna tečnost, reaguje sa vodom, stvara zapaljive gasove.",
            "55": "Otrovna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo).",
            "56": "Otrovna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), korozivna.",
            "57": "Otrovna materija, zapaljiva (tačka paljenja ne iznad 60 &#8451;, uključivo), može spontano dovesti do burne reaklcije.",
            "58": "Korozivna ili slabo korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), može spontano dovesti do burne reakcije.",
            "59": "Korozivna ili slabo korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), može spontano burno reagovati i koja reaguje opasno sa vodom. *",
            "60": "Korozivna čvrsta materija, zapaljiva ili samozagrijavajća.",
            "61": "Korozivna čvrsta materija, reaguje sa vodom, stvara zapaljive gasove.",
            "62": "Korozivna ili slabo korozivna materija, oksidirajuća (pojačava vatru).",
            "63": "Korozivna ili slabo korozivna materija, oksidirajuća (pojačava vatru), i otrovna.",
            "64": "Korozivna ili slabo korozivna materija, otrovna.",
            "65": "Jako korozivna materija.",
            "66": "Jako korozivna materija, reaguje opasno sa vodom. *",
            "67": "Jako korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo).",
            "68": "Jako korozivna čvrsta materija, zapaljiva ili samozagrijavajuća.",
            "69": "Jako korozivna materija, oksidirajuća (pojačava vatru).",
            "70": "Jako korozivna materija, otrovna.",
            "71": "Jako korozivna materija, otrovna, reaguje opasno sa vodom. *",
            "72": "Korozivna ili slabo korozivna materija, može spontano dovesti do burne reakcije.",
            "73": "Materija opasna za okolinu; razne opasne materije.",
            "74": "Razne opasne materije, transportuju se na povišenoj temperaturi."
        }
        return $("p.card-text").last().addClass("my-3").html(adrMessage[$("#ibo").val()] || "");
    }).addClass("form-control");
    $("canvas#myChart").addClass("w-100 mx-auto").css("max-width", "700px");
    $("form:eq(2)").on("input", function () {
        let Q1 = Number($("input#Q1").val());
        let Q2 = Number($("input#Q2").val());
        let Q3 = Number($("input#Q3").val());
        let P1x = Number($("input#P1x").val());
        let P2x = Number($("input#P2x").val());
        let P3x = Number($("input#P3x").val());
        let Sx = Number($("input#Sx").val());
        let P1y = Number($("input#P1y").val());
        let P2y = Number($("input#P2y").val());
        let P3y = Number($("input#P3y").val());
        let Sy = Number($("input#Sy").val());
        let Sox = ((P1x * Q1) + (P2x * Q2) + (P3x * Q3)) / (Q1 + Q2 + Q3);
        $("output[name='Sox']").text(Sox.toFixed());
        let Soy = ((P1y * Q1) + (P2y * Q2) + (P3y * Q3)) / (Q1 + Q2 + Q3);
        $("output[name='Soy']").text(Soy.toFixed());
        let r1 = Math.sqrt(((P1x - Sx) ** 2) + ((P1y - Sy) ** 2));
        $("output[name='r1']").text(r1.toFixed(2));
        let r2 = Math.sqrt(((P2x - Sx) ** 2) + ((P2y - Sy) ** 2));
        $("output[name='r2']").text(r2.toFixed(2));
        let r3 = Math.sqrt(((P3x - Sx) ** 2) + ((P3y - Sy) ** 2));
        $("output[name='r3']").text(r3.toFixed(2));
        let ro1 = Math.sqrt(((P1x - Sox) ** 2) + ((P1y - Soy) ** 2));
        $("output[name='ro1']").text(ro1.toFixed(2));
        let ro2 = Math.sqrt(((P2x - Sox) ** 2) + ((P2y - Soy) ** 2));
        $("output[name='ro2']").text(ro2.toFixed(2));
        let ro3 = Math.sqrt(((P3x - Sox) ** 2) + ((P3y - Soy) ** 2));
        $("output[name='ro3']").text(ro3.toFixed(2));
        let A1 = r1 * Q1;
        $("output[name='A1']").text(A1.toFixed(2));
        let A2 = r2 * Q2;
        $("output[name='A2']").text(A2.toFixed(2));
        let A3 = r3 * Q3;
        $("output[name='A3']").text(A3.toFixed(2));
        let As = A1 + A2 + A3;
        $("output[name='As']").text(As.toFixed(2));
        let Ao1 = ro1 * Q1;
        $("output[name='Ao1']").text(Ao1.toFixed(2));
        let Ao2 = ro2 * Q2;
        $("output[name='Ao2']").text(Ao2.toFixed(2));
        let Ao3 = ro3 * Q3;
        $("output[name='Ao3']").text(Ao3.toFixed(2));
        let Ao = Ao1 + Ao2 + Ao3;
        $("output[name='Ao']").text(Ao.toFixed(2));
        let rezTransRada = As - Ao;
        $("output#razlikaTranspRada").attr("name", $("output:last").attr("id")).text(rezTransRada.toFixed(2));

        const xyValues = [
            { x: P1x, y: P1y },
            { x: P2x, y: P2y },
            { x: P3x, y: P3y },
            { x: Sx, y: Sy },
            { x: Sox, y: Soy }
        ];
        const arrayX = [P1x, P2x, P3x, Sx, Sox];
        const arrayY = [P1y, P2y, P3y, Sy, Soy];
        const maxX = Math.max(...arrayX);
        const maxY = Math.max(...arrayY);
        new Chart("myChart", {
            type: "scatter",
            data: {
                datasets: [{
                    pointRadius: 4,
                    //pointBackgroundColor: "rgb(0,0,255)",
                    pointBackgroundColor: ["#0000ff", "#0000ff", "#0000ff", "#000000", "#ff0000"],
                    data: xyValues
                }]
            },
            options: {
                responsive: true,
                legend: { display: false },
                scales: {
                    xAxes: [{ ticks: { min: 0, max: maxX + 10 } }],
                    yAxes: [{ ticks: { min: 0, max: maxY + 10 } }],
                }
            }
        });
    });
    document.normalize();
});
