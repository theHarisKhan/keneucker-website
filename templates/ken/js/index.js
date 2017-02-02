function showBlock(target, a) {
    var target = document.querySelector(target);
    if(target.className == "fadeOut") {
        target.style.display = "";
        target.className = "fadeIn";
        a.childNodes[0].className = "fa fa-arrow-up";
    }
    else {
        target.className = "fadeOut";
        target.style.display = "none";
        a.childNodes[0].className = "fa fa-arrow-down";
    }
}