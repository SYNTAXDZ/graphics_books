// Script de gestion de la recherche d'une page cours
// version 1.0 du 09/01/2012
// version 2.0 du 06/06/2012 22:08:49 (rajout de UrlArticle : djibril)
// version 3.0 du 16/10/2012 10:46:33 (éviter les bloc blanc et vide)

var currentPage = 1;
var hasAlreadySearched=false;

var f = function (){
    var rrr = $("#resultats");
    var s = $("#resultSearch").val();
    if (s == ""){
    	rrr.html("");
    	rrr.hide();
    	return;
    }else{
         rrr.show();
    } 

    var UrlArticle = window.location.href.replace(location.search, '').replace(location.hash, '');
    var url = "https://www.developpez.com/recherche/resultatcours?p=" + escape(s) + "&from=" + currentPage + "&url="+ UrlArticle;

    if (!hasAlreadySearched){
        rrr.html("Recherche en cours ...");
        hasAlreadySearched = true;
    }
    var script = document.getElementById("resultScript");
    if (script != null){
        script.parentNode.removeChild(script);
    }

    var n = document.createElement("script");
    n.setAttribute("type", "text/javascript");
    n.setAttribute("src", url);
    n.setAttribute("id", "resultScript");
    document.getElementsByTagName("head")[0].appendChild(n);

};
/* Version 1
var f = function (){
    var rrr = $("#resultats");
    var s = $("#resultSearch").val();
    if (s == ""){
    	rrr.html("");
    	rrr.css("visibility", "none");
    	return;
    }
    var UrlArticle = window.location.href.replace(location.search, '').replace(location.hash, '');
    var url = "https://www.developpez.com/recherche/resultatcours?p=" + escape(s) + "&from=" + currentPage + "&url="+ UrlArticle;

    if (!hasAlreadySearched){
        $("#resultats").html("Recherche en cours ...");
        hasAlreadySearched = true;
    }
    var script = document.getElementById("resultScript");
    if (script != null){
        script.parentNode.removeChild(script);
    }

    var n = document.createElement("script");
    n.setAttribute("type", "text/javascript");
    n.setAttribute("src", url);
    n.setAttribute("id", "resultScript");
    document.getElementsByTagName("head")[0].appendChild(n);
    rrr.css("visibility", "visible");
};
/*
/* Version original
var f = function (){
    var rrr = document.getElementById("resultats");
    var s = $("#resultSearch").val();
    if (s == ""){
        $("#resultats").html("");
        rrr.style.visibility = 'hidden';
        return;
    }
    var UrlArticle = window.location.href.replace(location.search, '').replace(location.hash, '');
    var url = "https://www.developpez.com/recherche/resultatcours?p=" + escape(s) + "&from=" + currentPage + "&url="+ UrlArticle;

    if (!hasAlreadySearched){
        $("#resultats").html("Recherche en cours ...");
        hasAlreadySearched = true;
    }
    var script = document.getElementById("resultScript");
    if (script != null){
        script.parentNode.removeChild(script);
    }

    var n = document.createElement("script");
    n.setAttribute("type", "text/javascript");
    n.setAttribute("src", url);
    n.setAttribute("id", "resultScript");
    document.getElementsByTagName("head")[0].appendChild(n);
    rrr.style.visibility = 'visible';
};
*/
function doprevious () {
    currentPage = currentPage - 1;
    if (currentPage < 1)
        currentPage = 1;
    f();
}

function donext () {
    currentPage++;
    f();
}

function dosearch() {
    currentPage = 1;
    f();
}

function dofocuson() {
            var rrr = document.getElementById("resultSearch");
            rrr.style.backgroundImage='url()';
}

function dofocusoff() {
            var rrr = document.getElementById("resultSearch");
            if (rrr.value == "") {
                    rrr.style.backgroundImage='url("https://www.developpez.com/template/kit/kitcours-input-fond.png")';
            };
}

$("*[role='previous']").live("click", doprevious);
$("*[role='next']").live("click", donext);
$("#resultSearch").keyup(dosearch);
$("#searchSubmit").click(dosearch);
$("#resultSearch").focus(dofocuson);
$("#resultSearch").blur(dofocusoff);

