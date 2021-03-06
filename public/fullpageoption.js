var myFullpage = new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: false,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: false,
    verticalCentered: true,
    sectionsColor: ['rgb(174, 248, 181)', 'rgb(174, 248, 181)', 'rgb(174, 248, 181)', 'rgb(174, 248, 181)', 'rgb(174, 248, 181)', 'rgb(174, 248, 181)', 'rgb(174, 248, 181)', 'rgb(174, 248, 181)',
        'rgb(174, 248, 181)', 'rgb(174, 248, 181)', 'rgb(174, 248, 181)'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
    dropEffect: false,
    dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999 },
    waterEffect: false,
    waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function (origin, destination, direction) {
        ide = '#t'+destination.index
        if($(ide).hasClass('animate__animated animate__heartBeat')){
            $(ide).removeClass('animate__animated animate__heartBeat')
        }
        $(ide).addClass('animate__animated animate__heartBeat')

    },
    afterLoad: function (origin, destination, direction) {
    },
    afterRender: function () {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        $('.section').height(vh)
    },
    afterResize: function (width, height) { },
    afterReBuild: function () { },
    afterResponsive: function (isResponsive) { },
    afterSlideLoad: function (section, origin, destination, direction) {
    },
    onSlideLeave: function (section, origin, destination, direction) { }
});
