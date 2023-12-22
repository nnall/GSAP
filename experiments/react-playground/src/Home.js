import React, { useEffect, useRef } from "react";
import "./index.scss";

// typical import
import gsap from "gsap";

//NON-GSAP way to select characters, words,
import SplitType from "split-type";

//There is also a built-in version called 'splitText'
// https://gsap.com/docs/v3/Plugins/SplitText/

import Lenis from "@studio-freight/lenis";

import scrollTrigger from "gsap/ScrollTrigger";

// don't forget to register plugins
gsap.registerPlugin(scrollTrigger);

const Home = () => {
  useEffect(() => {
    // Step 1: Create a GSAP timeline
    let tl = gsap.timeline();

    const splitTypes = document.querySelectorAll(".reveal-type"); //<--- the paragraph <p/>. Here, throwing into array even though only one.

    const my_para = document.querySelector(".reveal-type");

    //now transform <p/> into subdivided elements (chars, lines, words), saved to object
    const text = new SplitType(my_para, { types: "chars, words, lines" });

    // const linesArray = [...text.lines];

    // linesArray.forEach((line) => {
    //   tl.to(line, {
    //     x: 0,
    //     scrollTrigger: {
    //       defaults: { ease: "power4.inOut", duration: 2 },
    //       trigger: ".spacer_2",
    //       start: "40% 100%",
    //       end: "45% 50%",
    //       scrub: true,

    //     },
    // opacity: 0.2,
    // stagger: 1, //adjust this to make the letter-by-letter animation go a little faster
    // });
    // });

    tl.to(text.lines, {
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_2",
        start: "40% 100%",
        end: "90% 30%",
        scrub: true,
        markers: true,
      },
      x: 0,
      opacity: 0.2,
      stagger: 1, //adjust this to make the letter-by-letter animation go a little faster
    });

    // tl.to("p", {
    //   x: 0,
    //   scrollTrigger: {
    //     defaults: { ease: "power4.inOut", duration: 2 },
    //     trigger: ".spacer_2",
    //     start: "40% 100%",
    //     end: "45% 50%",
    //     scrub: true,
    //     // markers: true,
    //   },
    //   stagger: 1,
    //   opacity: 0.2,
    // });

    tl.to(".h2-3", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_3",
        start: "35% 100%",
        end: "45% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(".h2-4", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_4",
        start: "35% 100%",
        end: "45% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(".h2-5", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_5",
        start: "35% 100%",
        end: "45% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(".h2-6", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_6",
        start: "35% 100%",
        end: "45% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(".h2-7", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_7",
        start: "35% 100%",
        end: "45% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(".h2-8", {
      x: 0,
      scrollTrigger: {
        defaults: { ease: "power4.inOut", duration: 2 },
        trigger: ".spacer_8",
        start: "35% 100%",
        end: "45% 50%",
        scrub: true,
        // markers: true,
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
        // markers: true,
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
        // markers: true,
      },
    });

    //SPLIT-TYPES - splitting text elements into smaller divs "chars, words, lines(?)" and aplying a scrolltrigger to those smaller elements

    console.log(text.lines);

    // gsap.from(text.chars, {
    //   // duration: 0.002, // Set the duration to 2 seconds (adjust as needed)
    //   // ease: "power2.inOut", // Set an easing function (adjust as needed)
    //   scrollTrigger: {
    //     trigger: my_para,
    //     start: "top 50%",
    //     end: "top 20",
    //     scrub: false, //if true, then play is based on scroll, if false, it just plays.
    //     markers: false,
    //   },
    //   opacity: 0.2,
    //   stagger: 0.02, //adjust this to make the letter-by-letter animation go a little faster
    // });

    gsap.from(text.lines, {
      // duration: 0.002, // Set the duration to 2 seconds (adjust as needed)
      // ease: "power2.inOut", // Set an easing function (adjust as needed)
      scrollTrigger: {
        trigger: my_para,
        start: "top 50%",
        end: "top 20",
        scrub: false, //if true, then play is based on scroll, if false, it just plays.
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.02, //adjust this to make the letter-by-letter animation go a little faster
    });
  }, []);

  // Above, when you set 'new SplitType()', include 'words', and not just 'chars' in the "types", because otherwise the <p/> gets spit up into individual letters only, and there will be a line break on letters instead of complete words.

  const lenis = new Lenis({ duration: 1.4 });

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
        <p className="reveal-type">
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
