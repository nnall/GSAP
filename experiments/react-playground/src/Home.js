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
    //SPLIT-TYPES

    // SPLIT-TYPES - H1 (Hey There)
    const myText = new SplitType("#my-text");

    gsap.to(
      ".char",
      {
        y: 0,
        stagger: 0.04,
        // delay: 0.2,
        duration: 0.1,
      },
      "-=.1"
    );

    // Step 1: Create a GSAP timeline
    let tl = gsap.timeline();
    // SPLIT-TYPES - PARA
    const my_para = document.querySelector(".reveal-type"); // SELECT PARA
    const text = new SplitType(my_para, { types: "chars, words, lines" });

    const lines = [...text.lines];

    // console.log(lines);

    lines.forEach((line, index) => {
      tl.to(
        line,
        {
          x: "-100vw",
          duration: 3,
          // opacity: 1,
        },
        "-=2.5"
      );
    });
    scrollTrigger.create({
      trigger: ".spacer_2",
      start: "45% 100%",
      end: "30% 30%",
      scrub: true,
      markers: true, // for debugging
      animation: tl, // Assign the timeline to ScrollTrigger
    });

    // let tl2 = gsap.timeline();
    // const linesRev = [...lines].reverse();

    // linesRev.forEach((line, index) => {
    //   tl.to(
    //     line,
    //     {
    //       x: "-200vw",
    //       duration: 3,
    //       // opacity: 1,
    //     },
    //     "-=2.5"
    //   );
    // });

    // scrollTrigger.create({
    //   trigger: ".spacer_2",
    //   start: "125% 100%",
    //   end: "1000% 30%",
    //   scrub: true,
    //   markers: true, // for debugging
    //   animation: tl2, // Assign the timeline to ScrollTrigger
    // });

    // const setupTl2 = () => {
    //   // scrollTrigger.kill(".spacer_2"); // Kill the previous ScrollTrigger for tl2 if exists

    //   let tl2 = gsap.timeline();
    //   const linesRev = [...lines].reverse();

    //   linesRev.forEach((line, index) => {
    //     tl.to(
    //       line,
    //       {
    //         x: "-200vw",
    //         duration: 3,
    //         // opacity: 1,
    //       },
    //       "-=2.5"
    //     );
    //   });

    //   // Second ScrollTrigger for the reversed set of lines
    //   scrollTrigger.create({
    //     trigger: ".spacer_2",
    //     start: "125% 100%",
    //     end: "1000% 30%",
    //     scrub: true,
    //     markers: true,
    //     animation: tl2,
    //   });
    // };

    // // Call the setupTl2 function after setting up tl
    // setupTl2();

    //// PARA END

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
  }, []);

  // Above, when you set 'new SplitType()', include 'words', and not just 'chars' in the "types", because otherwise the <p/> gets spit up into individual letters only, and there will be a line break on letters instead of complete words.

  // SMOOTH SCROLL
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
        <h1 id="my-text">Hey there</h1>
      </div>

      <div className="spacer spacer_2">
        {/* <h2>We're glad you're here..</h2> */}
        <p className="reveal-type">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum alias,
          veniam eius vitae soluta labore sed incidunt impedit, facere accusamus
          rerum? Non repellat fuga ipsa quibusdam sed illo quae aliquam quod est
          repellendus, modi dolorum eum ullam, velit veritatis delectus. Quae,
          consequatur? Facere nihil quisquam quaerat quidem labore perspiciatis
          et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi in
          quae dolorum molestiae commodi quos totam, veniam odit reiciendis.
          Iusto eos autem maxime magnam inventore rerum eveniet consequuntur
          magni amet consectetur illum saepe eligendi voluptatibus similique
          deleniti minus eius, dolore, tempore ratione, officia provident! A,
          ducimus! Magni perspiciatis similique blanditiis!
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
