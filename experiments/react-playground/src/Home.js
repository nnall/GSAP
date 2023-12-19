import React, { useEffect, useRef } from "react";
import "./index.scss";

// typical import
import gsap from "gsap";
import { useGSAP } from "gsap";

import Lenis from "@studio-freight/lenis";

import scrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// don't forget to register plugins
gsap.registerPlugin(scrollTrigger, Draggable, Flip);

const Home = () => {
  const pRef = useRef(null);

  console.log(pRef);

  //the :before pseudo elements (the dots)
  //pseudo elements must get a defined variable

  //.to() VS .from()

  //outcome: An element is placed in one area, and moves into  another area/state upon being triggered.

  //you can accomplish this either by setting their 'before' state in the CSS, and using a '.to()' to mobve it into the 'after' position.

  //or you can define the 'before' state inside a .from() and its 'after' state in the CSS

  //.to()
  // starting from defined CSS, TO something - the argument provided)

  //.from()
  // starting from (arg provided css), to the defined CSS

  //2 args, the selector to be animated (arg 1) <-- in quotes, and an object (arg 2) of css to be changed on that selected html

  //Smooth Scroll

  // Create a GSAP timeline

  // useGSAP(() => {

  useEffect(() => {
    const el = pRef.current;
    let tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
      scrollTrigger: {
        trigger: "p",
        start: "top center", // when does animation start
        end: "bottom center", // when does animation end
        scrub: true,
        markers: true,
      },
    });

    // gsap.to(el);
  }, []);

  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "p",
  //     start: "top center", // when does animation start
  //     end: "bottom center", // when does animation end
  //     scrub: true,
  //     markers: true,
  //   },
  // });

  // tl.to(
  //   "p",
  //   {
  //     x: 1200,
  //     duration: 3,
  //   }
  //   // "-=1"
  // );
  // });

  // .to("h1", {
  //   x: -1200,
  //   duration: 3,
  // }).

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // .to(
  //   "h1",
  //   {
  //     // opacity: 1,
  //     x: 0,
  //     duration: 3,
  //     // lazy: false,
  //   },
  //   "-=2"
  // )
  // .to(
  //   "h2",
  //   {
  //     x: 0,
  //     duration: 2.5,
  //   },
  //   "-=4"
  // );

  // Cleanup function to kill the timeline when the component unmounts
  // return () => {
  //   tl.kill();
  // };

  return (
    <div className="container">
      <div className="spacer">
        <h1>Hey</h1>
      </div>

      <div className="spacer">
        {/* <h2>We're glad you're here..</h2> */}
        <p ref={pRef}>
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
      <div className="spacer">
        <h2>We knew you'd be arriving soon</h2>
      </div>
      <div className="spacer">
        <h2>Don't bother denying it.. </h2>
      </div>
      <div className="spacer">
        <h2>It's written right on your face</h2>
      </div>
      <div className="spacer">
        <h2>You were always going to be here</h2>
      </div>
      <div className="spacer">
        <h2>And now you are</h2>
      </div>
      <div className="spacer">
        <h2>So just relax and settle down</h2>
        <h2>I am the captain now</h2>
      </div>

      <div className="spacer">
        <img src="./img/cat.jpg" alt="" className="cat" />
      </div>
    </div>
  );
};

export default Home;
