gsap.registerPlugin(ScrollTrigger)
const timeline = gsap.timeline({
    defaults: {
        duration: 1
    }
})
timeline.from('.header', {
        opacity: 0.1,
        ease: 'power4.out'
    })
    .from('.headerSecondary', {
        opacity: 0,
        ease: 'power4.out'
    })
    .from('.socialLink', {
        opacity: 0,
        stagger: 0.5
    })
    .from('.pageLink', {
        opacity: 0,
        stagger: 0.5
    }, 2)
gsap.from('.test' , {
    opacity : 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.test',
        toggleActions: 'restart none reverse reverse'
    }
})
