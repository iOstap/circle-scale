<script>
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});


// Sticky Circle Grow
$(".sticky-circle_wrap").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".sticky-circle_element");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });
  tl.fromTo(
    targetElement,
    {
      width: "0rem",
      height: "0rem",
      borderRadius: "100%",
      duration: 1
    },
    {
      width: "150rem",
      height: "150rem",
      borderRadius: "100%",
      duration: 1
    }
  );
});


// Sticky Circle Grow
$(".sticky-circle_wrap-2").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".sticky-circle_element-2");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom bottom",  
      scrub: 1
    }
  });
  tl.fromTo(
    targetElement,
    {
      width: "0rem",
      height: "0rem",
      borderRadius: "100%",
      duration: 1
    },
    {
      width: "150rem",
      height: "150rem",
      borderRadius: "100%",
      duration: 1
    }
  );
});

// Sticky Circle Grow
$(".sticky-circle_wrap-3").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".sticky-circle_element-3");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });
  tl.fromTo(
    targetElement,
    {
      width: "0em",
      height: "0em",
      borderRadius: "35em",
      duration: 1
    },
    {
      width: "100vw",
      height: "100vh",
      borderRadius: "1.5em",
      duration: 1
    }
   );
 });
</script>
