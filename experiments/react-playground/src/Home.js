import React, { useEffect, useRef } from "react";
import "./index.scss";

// typical import
import gsap from "gsap";

import Lenis from "@studio-freight/lenis";

import scrollTrigger from "gsap/ScrollTrigger";

// don't forget to register plugins
gsap.registerPlugin(scrollTrigger);

const Home = () => {
  useEffect(() => {
    // Step 1: Create a GSAP timeline
    let tl = gsap.timeline();

    // tl.to("h1", {
    //   x: 0,
    //   scrollTrigger: {
    //     defaults: { ease: "power4.inOut", duration: 2 },
    //     trigger: ".spacer_1",
    //     start: "10% 100%",
    //     end: "55% 50%",
    //     scrub: true,
    //     markers: true,
    //   },
    // });

    tl.to("p", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_2",
        start: "40% 100%",
        end: "55% 50%",
        scrub: true,
        markers: true,
      },
    });

    tl.to(".h2-3", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_3",
        start: "35% 100%",
        end: "55% 50%",
        scrub: true,
        markers: true,
      },
    });

    tl.to(".h2-4", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_4",
        start: "35% 100%",
        end: "55% 50%",
        scrub: true,
        markers: true,
      },
    });
    tl.to(".h2-5", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_5",
        start: "35% 100%",
        end: "55% 50%",
        scrub: true,
        markers: true,
      },
    });
    tl.to(".h2-6", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_6",
        start: "35% 100%",
        end: "55% 50%",
        scrub: true,
        markers: true,
      },
    });
    tl.to(".h2-7", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_7",
        start: "35% 100%",
        end: "55% 50%",
        scrub: true,
        markers: true,
      },
    });
    tl.to(".h2-8", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_8",
        start: "35% 100%",
        end: "55% 50%",
        scrub: true,
        markers: true,
      },
    });
    tl.to(".h2-9", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_8",
        start: "50% 100%",
        end: "75% 50%",
        scrub: true,
        markers: true,
      },
    });

    tl.to(".cat", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_9",
        start: "35% 100%",
        end: "55% 50%",
        scrub: true,
        markers: true,
      },
    });

    // Step 3: Create a ScrollTrigger to activate the timeline

    // tl.to("h1", { x: 0, duration: 2 });
    // tl.to("h2", { x: 0, duration: 2 });
    // tl.to("p", { x: 0, duration: 2 });
    // tl.to("img", { x: 0, duration: 2 });
    // tl.to("h1", { x: 0 });
    // tl.to("h1", { x: 0 });

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: ".spacer",
    //   start: "top 50%", // when to start the animation
    //   end: "top 30%", // when to end the animation
    //   scrub: true, // smooth scrubbing effect
    //   markers: true, // for debugging, shows the trigger area
    // });

    // Step 2: Add animations to the timeline
    // ScrollTrigger
    //   .to("h1", { x: 0 })
    //   .to("h2", { x: 0 })
    //   .to("p", { x: 0 })
    //   .to("img", { x: 0 });
  }, []);

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="container">
      <div className="spacer spacer_1">
        <h1>Hey</h1>
      </div>

      <div className="spacer spacer_2">
        {/* <h2>We're glad you're here..</h2> */}
        <p>
          In the old world, I'd be sitting on a fire escape in some European
          city smoking a cigarette right now, watching people get out into the
          street below. Another day. I don't know that I'd feel any more or less
          compelled to 'live' then than I do now. Which isn't saying much. We
          are in odd places all the time. Even the "right" place is an odd one.
          It is odd by the fact we're all agreeing that it, as opposed to
          others, is not arbitrary, but approved, 'normal'. So live it! Let it
          feel natural to you! Embrance it, Hug it! Your toy has arrrived. Your
          vehicle is ready. Your plate is served. Why aren't you eating? Don't
          you like it? Don't you?
        </p>
      </div>
      <div className="spacer spacer_3">
        <h2 className="h2-3">We knew you'd be arriving soon</h2>
      </div>
      <div className="spacer spacer_4">
        <h2 className="h2-4">Don't bother denying it.. </h2>
      </div>
      <div className="spacer spacer_5">
        <h2 className="h2-5">It's written right on your face</h2>
      </div>
      <div className="spacer spacer_6">
        <h2 className="h2-6">You were always going to be here</h2>
      </div>
      <div className="spacer spacer_7">
        <h2 className="h2-7">And now you are</h2>
      </div>
      <div className="spacer spacer_8">
        <h2 className="h2-8">So just relax and settle down</h2>
        <h2 className="h2-9">I am the captain now</h2>
      </div>

      <div className="spacer spacer_9">
        <img src="./img/cat.jpg" alt="" className="cat" />
      </div>
    </div>
  );
};

export default Home;
