let associationBox = document.querySelector('.association')
let widthScreen = screen.width+'px'

associationBox.style.height = screen.height+'px'

window.addEventListener('scroll', () =>{
    associationBox.style.height = screen.height+'px'
    widthScreen = screen.width+'px'
})

gsap.registerPlugin(ScrollTrigger)

if(screen.width >= 770){
  let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".association",
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=1000", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        }
      }
    });
    // add animations and labels to the timeline
    tl.addLabel("start")
      .fromTo(".association__content", {width: 0},{width: widthScreen})
      .fromTo('.association__content__txt', {opacity: 0}, {opacity: 1})
      .fromTo('.association__content__img', {opacity: 0}, {opacity: 1})
      .addLabel("end");
}
