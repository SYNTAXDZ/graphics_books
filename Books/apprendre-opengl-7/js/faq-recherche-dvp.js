/* Pour le moteur de recherche uniquement pour les FAQ et sources
*/
// version 1.0 du 19/11/2012 09:30:19

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
    var url = "https://www.developpez.com/recherche/resultatfaq?p=" + escape(s) + "&from=" + currentPage + "&url="+ UrlArticle;

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

