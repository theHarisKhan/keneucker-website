function showFullHistory(target) {
    var fullHistory = document.querySelector('#full-history');
    if(fullHistory.className == "fadeOut") {
        fullHistory.style.display = "";
        fullHistory.className = "fadeIn";
        target.childNodes[0].className = "fa fa-arrow-up";
    }
    else {
        fullHistory.className = "fadeOut";
        fullHistory.style.display = "none";
        target.childNodes[0].className = "fa fa-arrow-down";
    }
}