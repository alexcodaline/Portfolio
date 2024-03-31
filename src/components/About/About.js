import React, { useEffect } from "react";
import aboutPhoto from "../../assets/img/aboutPhoto.webp";
import { Element } from "react-scroll";
import "./About.scss";
export default function About() {
  useEffect(() => {
    const aboutElements = document.querySelectorAll(".about");

    const handleScroll = () => {
      aboutElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="about">
      <Element name="about" className="element">
        <div className="about-content">
          <div className="about-photo">
            <img src={aboutPhoto} alt="Notebook" />
          </div>
          <div className="about-desc">
            <h3>About me</h3>
            <h4>I'am Oleksandr Ponomarenko</h4>
            <p>
              My skills include HTML structure development, CSS styling, and
              ensuring responsiveness for various devices. Project work using
              JavaScript: I have experience working with JavaScript and its
              frameworks such as React and Angular. I understand the core
              concepts of the language and can develop interactive web
              applications.
            </p>
          </div>
        </div>
      </Element>
    </section>
  );
}
