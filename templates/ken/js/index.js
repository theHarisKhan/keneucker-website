((initialized) => {
    if (!initialized) {
        function showBlock(target, a) {
            var target = document.querySelector(target);
            if(target.classList.contains("fadeOut")) {
                target.classList.remove("fadeOut")
                target.classList.add("fadeIn")

                a.childNodes[0].className = "fa fa-arrow-up";
                a.childNodes[0].innerHTML = " Less";
            }
            else {
                target.classList.add("fadeOut")
                target.classList.remove("fadeIn")

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
        
        function onScrollMoveBadge() {
            var badge = document.querySelector('#badge'),
                badgeCornerFixedClass = 'fix-badge-top-corner',
                isFixedToCorner = badge.classList.contains(badgeCornerFixedClass),
                badgeLine = document.querySelector('#badge-line'),
                badgeLineStyle = getComputedStyle(badgeLine),
                badgeLineOffset = parseInt(badgeLineStyle.marginBottom, 10) - badgeLine.offsetTop,
                bodyScrollPosition = document.querySelector('body').scrollTop,
                htmlScrollPosition = document.querySelector('html').scrollTop,
                hasScrolledPastBadgeLine = htmlScrollPosition > badgeLineOffset;
                
            var scrollInfo = {
                badge,
                isFixedToCorner,
                badgeLine,
                badgeLineStyle,
                badgeLineOffset,
                bodyScrollPosition,
                htmlScrollPosition,
            };
            
            if(htmlScrollPosition == 0){
                badge.classList.remove(badgeCornerFixedClass);   
            }
        
            if (hasScrolledPastBadgeLine && !isFixedToCorner) {
                console.log('sliding badge to the right');
                console.log(scrollInfo);
        
                badge.classList.remove("slideLeft");
                badge.classList.add("slideRight");
                badge.classList.add(badgeCornerFixedClass);
            }
            else if (isFixedToCorner && !hasScrolledPastBadgeLine){
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
            if (window.scrollY) {
                onScrollMoveBadge();
            }
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
        
        // Hack to get the badge links to work again
        document.querySelectorAll('#badge a').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.stopPropagation();
             });
        });
        

        document.querySelectorAll('.expander').forEach((expanderElement) => {
            const moreDiv = expanderElement.parentElement.parentElement.querySelector('.more')
            if (moreDiv) {
                expanderElement.addEventListener('click', function(e) {
                    showBlock(`#${moreDiv.id}`, e.target)
                })
            }
        })

        // function reverseOrderOfChildren(selector) {
        // 	var children = document.querySelectorAll(selector);
        //   	for(var i = children.length - 1, j = 1; i >= 0; i--,j++) {
        //     	children[i].style.boxOrdinalGroup = j;
        //     	children[i].style.mozBoxOrdinalGroup = j;
        //     	children[i].style.webkitBoxOrdinalGroup = j;
        //     }
        // }
        
        // reverseOrderOfChildren('#badge .icons > a');        
        window.ken = true
    }
})(window.ken)