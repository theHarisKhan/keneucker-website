;(function () {
    VANTA.HALO({
    el: "#animation-vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 350.00,
        minWidth: 350.00,
        size: 2,
        baseColor: '#0b5a97',
        backgroundColor: '#0b5a97',
    })
    
    /// OLD Blob code
    // const windowLoadHandler = () => {
    //     let graphicsLoaded = false

    //     const animationContainer = document.getElementById('animation')
    //     const animationSelector = '.blob'

    //     const radius = 8
    //     TweenMax.staggerFromTo(
    //         animationSelector,
    //         4,
    //         {
    //             cycle: {
    //                 attr: function (i) {
    //                     const r = i * 90
    //                     return {
    //                         transform:
    //                             'rotate(' +
    //                             r +
    //                             ') translate(' +
    //                             radius +
    //                             ',0.1) rotate(' +
    //                             -r +
    //                             ')',
    //                     }
    //                 },
    //             },
    //         },
    //         {
    //             cycle: {
    //                 attr: function (i) {
    //                     const r = i * 90 + 360
    //                     return {
    //                         transform:
    //                             'rotate(' +
    //                             r +
    //                             ') translate(' +
    //                             radius +
    //                             ',0.1) rotate(' +
    //                             -r +
    //                             ')',
    //                     }
    //                 },
    //             },
    //             ease: Linear.easeNone,
    //             repeat: -1,
    //         },
    //     )
    //     animationContainer.classList.add('fade-in')
    //     graphicsLoaded = true
    // }

    // if (window.innerWidth > 700) {
    //     window.addEventListener(
    //         'load',
    //         () => {
    //             setTimeout(windowLoadHandler, 2000)
    //         },
    //         false,
    //     )
    // }

    /// Old sphere
    // // if scrolled down at least once, run the animation
    // window.addEventListener('scroll', function () {
    //     if (!graphicsLoaded && window.scrollY > 400) {
    //         graphicsLoaded = true
    //         const animationWrapper = document.getElementById('animation-wrap')

    //         for (const i = 0; i < 200; ++i) {
    //             const particle = document.createElement('div')
    //             particle.className = 'c'
    //             animationWrapper.appendChild(particle)
    //         }

    //         window.setTimeout(function() {
    //             const animationWrapper = document.getElementById('animation-wrap')
    //             animationWrapper.innerHTML = ''

    //             window.setTimeout(function(){
    //                 graphicsLoaded = false
    //             }, 30000)
    //         }, 14500)
    //     }
    // })
})()
