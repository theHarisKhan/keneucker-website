function showBlock(target, a) {
    var target = document.querySelector(target);
    if(target.className == "fadeOut") {
        target.style.display = "";
        target.className = "fadeIn";
        a.childNodes[0].className = "fa fa-arrow-up";
        a.childNodes[0].innerHTML = " Less";
    }
    else {
        target.className = "fadeOut";
        target.style.display = "none";
        a.childNodes[0].className = "fa fa-arrow-down";
        a.childNodes[0].innerHTML = " More";
    }
}

function hideMore(target, a) {
    var target = document.querySelector(target), 
        a = document.querySelector(a);
    target.className = "fadeOut";
    target.style.display = "none";
    a.childNodes[0].className = "fa fa-arrow-down";
    a.childNodes[0].innerHTML = " More";
}

function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

function onScrollMoveBadge() {
    var badge = document.querySelector('#badge'),
        badgeStyle = getComputedStyle(badge),
        isPositionFixed = badgeStyle.position == "fixed",
        badgeLine = document.querySelector('#badge-line'),
        badgeLineStyle = getComputedStyle(badgeLine),
        badgeLineOffset = parseInt(badgeLineStyle.marginBottom, 10) - 10,
        atPosition = getOffset(badgeLine).top - 250,
        bodyScrollPosition = document.querySelector('body').scrollTop;
        htmlScrollPosition = document.querySelector('html').scrollTop;
        
    var scrollInfo = {
        badge,
        badgeStyle,
        isPositionFixed,
        badgeLine,
        badgeLineStyle,
        badgeLineOffset,
        atPosition,
        bodyScrollPosition,
        htmlScrollPosition,
    };
    
    if(htmlScrollPosition == 0){
        badge.classList.remove("fix-badge-top-corner");   
    }
    if (htmlScrollPosition > atPosition) {
        console.log('sliding badge to the right');
        console.log(scrollInfo);

        badge.classList.remove("slideLeft");
        badge.classList.add("slideRight");
        badge.classList.add("fix-badge-top-corner");
    }
    else if (htmlScrollPosition < atPosition && isPositionFixed){
        console.log('sliding badge to the left');
        console.log(scrollInfo);

        badge.classList.remove("slideRight");
        badge.classList.add("slideLeft");

        hideMore("#more-why","#why a.expander");
        hideMore("#more-who","#who a.expander");
        hideMore("#more-what","#what a.expander");
    }
}

var windowScrollCount = 0;
window.onload = function() {
    window.addEventListener('scroll', onScrollMoveBadge);
};

document.querySelector('#badge').addEventListener('click', function(e) {
    e.preventDefault();
    var badge = document.querySelector('#badge'),
        topOfPageElement = document.getElementById("top"),
        scrollPosition = document.querySelector('html').scrollTop;                

        if(scrollPosition == 0) {
            return;
        }
        
    //scroll to top
    // Firefox needs to scroll the window, not the body
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        body = document.querySelector('html');                
    }

    if (topOfPageElement) {
        topOfPageElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    } else {
        console.log('what even is the top of the page?')
    }

    if (badge) {
        badge.classList.add("fix-badge-top-corner");
        badge.classList.remove("slideLeft");
        badge.classList.add("slideRight");
    }
});

// function reverseOrderOfChildren(selector) {
// 	var children = document.querySelectorAll(selector);
//   	for(var i = children.length - 1, j = 1; i >= 0; i--,j++) {
//     	children[i].style.boxOrdinalGroup = j;
//     	children[i].style.mozBoxOrdinalGroup = j;
//     	children[i].style.webkitBoxOrdinalGroup = j;
//     }
// }

// reverseOrderOfChildren('#badge .icons > a');
