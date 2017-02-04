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

function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

document.querySelector('body').onscroll = function(e) {
    var badge = document.querySelector('#badge'),
        badgeLine = document.querySelector('#badge-line'),
        isPositionFixed = (badge.classList.contains('fix-badge-top-corner')),
        atPosition = getOffset(badgeLine).top - 250;
    if(document.querySelector('body').scrollTop == 0){
        badge.classList.remove("fix-badge-top-corner");        
    }
    if (document.querySelector('body').scrollTop > atPosition && !isPositionFixed) {
        badge.classList.add("fix-badge-top-corner");
        badge.classList.add("slideRight");
        badge.classList.remove("slideLeft");
    }
    else if (document.querySelector('body').scrollTop < atPosition && isPositionFixed){
        badge.classList.remove("fix-badge-top-corner");
        badge.classList.remove("slideRight");
        badge.classList.add("slideLeft");
    }
};