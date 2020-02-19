(function(){
    var windowLoadHandler = function () {
        var graphicsLoaded = false
    
        // if scrolled down at least once, run the animation
        window.addEventListener('scroll', function () {
            if (!graphicsLoaded && window.scrollY > 400) {
                graphicsLoaded = true
                var animationWrapper = document.getElementById('animation-wrap')
            
                for (var i = 0; i < 200; ++i) {
                    var particle = document.createElement('div')
                    particle.className = 'c'
                    animationWrapper.appendChild(particle)
                }

                window.setTimeout(function() {
                    var animationWrapper = document.getElementById('animation-wrap')
                    animationWrapper.innerHTML = ''

                    window.setTimeout(function(){
                        graphicsLoaded = false
                    }, 30000)
                }, 14500)
            }
        })
    }

    if (window.innerWidth > 700) {
        window.addEventListener("load", windowLoadHandler, false)
    }
})()