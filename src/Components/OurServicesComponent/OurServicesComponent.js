"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
function OurServicesComponent({ loading }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const name = "View All Services";
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          // markers:true,
        },
      }
    );
    return () => {
      // A return function for killing the animation on component unmount
      pin.kill();
    };
  }, [loading]);

  return (
    <>
      <div className=" ">
      <div className="services-heading">
  <div className="left">
    <h1 className="head-1">
      Our Services
    </h1>
   
  </div>
</div>
        {!loading && (
          <section className="scroll-section-outer ">
            {/* The section up act just as a wrapper. If the trigger (below) is the first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and the animation should alway be two separated refs */}
            <div ref={triggerRef}>
              <div ref={sectionRef} className="scroll-section-inner ">
                {/* First Service Section */}
                <div className="scroll-section">
                <div className="card-container">
  {/* <!-- Left Section --> */}
  <div className="left">
    <h1 className="heading">Web Design & Development</h1>
    <p className="description">
      Building Digital Excellence. Our team of expert developers and designers
      is dedicated to crafting personalized web solutions that elevate your
      brand's online presence. We specialize in creating high-quality websites
      and mobile applications tailored to your unique business needs. By
      focusing on innovation, reliability, and user experience, we deliver
      digital platforms that are not only visually appealing but also
      technically robust, ensuring your brand stands out in the digital
      landscape.
    </p>

    {/* <!-- Buttons Section --> */}
    <div className="btns">
      <div className="button-group">
        {/* <!-- First Row of Buttons --> */}
        <div className="button-row">
          <span className="button">Creative Web Design</span>
          <span className="button">Web Development</span>
        </div>
        {/* <!-- Second Row of Buttons --> */}
        <div className="button-row button-row-second">
          <span className="button button-large">E-commerce Website</span>
          <span className="button button-small">WordPress</span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Section --> */}
  <div className="right">
    <Image
      className="image"
      src="/freelance-work-7308505_1920-removebg-preview.png"
      width={640} // Actual width of the image
      height={640} // Actual height of the image
    />
  </div>
</div>

                </div>

                {/* Second Service Section */}
                <div className="scroll-section">
                <div className="card-container">
  {/* <!-- Left Section --> */}
  <div className="left">
    <h1 className="heading">Web Design & Development</h1>
    <p className="description">
      Building Digital Excellence. Our team of expert developers and designers
      is dedicated to crafting personalized web solutions that elevate your
      brand's online presence. We specialize in creating high-quality websites
      and mobile applications tailored to your unique business needs. By
      focusing on innovation, reliability, and user experience, we deliver
      digital platforms that are not only visually appealing but also
      technically robust, ensuring your brand stands out in the digital
      landscape.
    </p>

    {/* <!-- Buttons Section --> */}
    <div className="btns">
      <div className="button-group">
        {/* <!-- First Row of Buttons --> */}
        <div className="button-row">
          <span className="button">Creative Web Design</span>
          <span className="button">Web Development</span>
        </div>
        {/* <!-- Second Row of Buttons --> */}
        <div className="button-row button-row-second">
          <span className="button button-large">E-commerce Website</span>
          <span className="button button-small">WordPress</span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Section --> */}
  <div className="right">
    <Image
      className="image"
      src="/freelance-work-7308505_1920-removebg-preview.png"
      width={640} // Actual width of the image
      height={640} // Actual height of the image
    />
  </div>
</div>

                </div>



                {/* Third Service Section */}
                 <div className="scroll-section">
                <div className="card-container">
  {/* <!-- Left Section --> */}
  <div className="left">
    <h1 className="heading">Web Design & Development</h1>
    <p className="description">
      Building Digital Excellence. Our team of expert developers and designers
      is dedicated to crafting personalized web solutions that elevate your
      brand's online presence. We specialize in creating high-quality websites
      and mobile applications tailored to your unique business needs. By
      focusing on innovation, reliability, and user experience, we deliver
      digital platforms that are not only visually appealing but also
      technically robust, ensuring your brand stands out in the digital
      landscape.
    </p>

    {/* <!-- Buttons Section --> */}
    <div className="btns">
      <div className="button-group">
        {/* <!-- First Row of Buttons --> */}
        <div className="button-row">
          <span className="button">Creative Web Design</span>
          <span className="button">Web Development</span>
        </div>
        {/* <!-- Second Row of Buttons --> */}
        <div className="button-row button-row-second">
          <span className="button button-large">E-commerce Website</span>
          <span className="button button-small">WordPress</span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Section --> */}
  <div className="right">
    <Image
      className="image"
      src="/freelance-work-7308505_1920-removebg-preview.png"
      width={640} // Actual width of the image
      height={640} // Actual height of the image
    />
  </div>
</div>

                </div>




                {/* Fourth Service Section */}
               <div className="scroll-section">
                <div className="card-container">
  {/* <!-- Left Section --> */}
  <div className="left">
    <h1 className="heading">Web Design & Development</h1>
    <p className="description">
      Building Digital Excellence. Our team of expert developers and designers
      is dedicated to crafting personalized web solutions that elevate your
      brand's online presence. We specialize in creating high-quality websites
      and mobile applications tailored to your unique business needs. By
      focusing on innovation, reliability, and user experience, we deliver
      digital platforms that are not only visually appealing but also
      technically robust, ensuring your brand stands out in the digital
      landscape.
    </p>

    {/* <!-- Buttons Section --> */}
    <div className="btns">
      <div className="button-group">
        {/* <!-- First Row of Buttons --> */}
        <div className="button-row">
          <span className="button">Creative Web Design</span>
          <span className="button">Web Development</span>
        </div>
        {/* <!-- Second Row of Buttons --> */}
        <div className="button-row button-row-second">
          <span className="button button-large">E-commerce Website</span>
          <span className="button button-small">WordPress</span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Section --> */}
  <div className="right">
    <Image
      className="image"
      src="/freelance-work-7308505_1920-removebg-preview.png"
      width={640} // Actual width of the image
      height={640} // Actual height of the image
    />
  </div>
</div>

                </div>




              </div>
            </div>
          </section>
        )}
      </div>

      <div className="cards">


      <div class="small-card">
  <img class="card-image" src="/path/to/image.jpg" alt="Description"/>
  <div class="card-content">
    <h2 class="card-heading">Card Heading</h2>
    <p class="card-description">
      This is a brief description of the card content. It provides a short overview of what the card is about.
    </p>
  </div>

  <div className="btns-all">
    <span className="options">
    <h1 className="b">e-commerce</h1>
    <h1 className="b">wordpress</h1>
    </span>
    <span className="options">
    <h1 className="b">search engine optimzation</h1>
    <h1 className="b">design</h1>
    </span>
  </div>
</div>


<div class="small-card">
  <img class="card-image" src="/path/to/image.jpg" alt="Description"/>
  <div class="card-content">
    <h2 class="card-heading">Card Heading</h2>
    <p class="card-description">
      This is a brief description of the card content. It provides a short overview of what the card is about.
    </p>
  </div>

  <div className="btns-all">
    <span className="options">
    <h1 className="b">e-commerce</h1>
    <h1 className="b">wordpress</h1>
    </span>
    <span className="options">
    <h1 className="b">search engine optimzation</h1>
    <h1 className="b">design</h1>
    </span>
  </div>
</div>


<div class="small-card">
  <img class="card-image" src="/path/to/image.jpg" alt="Description"/>
  <div class="card-content">
    <h2 class="card-heading">Card Heading</h2>
    <p class="card-description">
      This is a brief description of the card content. It provides a short overview of what the card is about.
    </p>
  </div>

  <div className="btns-all">
    <span className="options">
    <h1 className="b">e-commerce</h1>
    <h1 className="b">wordpress</h1>
    </span>
    <span className="options">
    <h1 className="b">search engine optimzation</h1>
    <h1 className="b">design</h1>
    </span>
  </div>
</div>


<div class="small-card">
  <img class="card-image" src="/path/to/image.jpg" alt="Description"/>
  <div class="card-content">
    <h2 class="card-heading">Card Heading</h2>
    <p class="card-description">
      This is a brief description of the card content. It provides a short overview of what the card is about.
    </p>
  </div>

  <div className="btns-all">
    <span className="options">
    <h1 className="b">e-commerce</h1>
    <h1 className="b">wordpress</h1>
    </span>
    <span className="options">
    <h1 className="b">search engine optimzation</h1>
    <h1 className="b">design</h1>
    </span>
  </div>
</div>


</div>
    </>
  );
}

export default OurServicesComponent;
