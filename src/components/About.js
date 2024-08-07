import React from "react";
import styled from "styled-components";

//Images
import git from "../img/Group 55.png";
import Odizeey from "../img/suit-odizee.jpeg";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const About = () => {
  return (
    <AboutMe
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="heading">
        <h1>
          <span>02.</span> About Me
        </h1>
        <hr />
      </div>
      <div className="AboutMe-Container">
        <div className="AboutMe-Container__desc">
          <div className="AboutMe-Container__text">
            <p className="AboutMe-Container__p">
              Hi there! I’m a software engineer based in Lagos, Nigeria and I
              love to build things for the web.
            </p>
            <p className="AboutMe-Container__p">
              I utilize a variety of software development tools to deliver
              client ready apps and websites. My goal? To contribute my quota in
              making the internet a beautiful, interactive ecosystem.
            </p>

            <div className="Techs">
              <h4>These are some of the technlogies I’ve been working with:</h4>
              <div className="Techs__row-1">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>ReactJs</p>
                <p>Tailwind</p>
                <p>NextJs</p>
                <p>Wordpress</p>
                <p>Git</p>
                <p>Redux</p>
                <p>Node</p>
                <p>MongoDB</p>
                <p>Express</p>
              </div>
            </div>
            <p className="AboutMe-Container__p">
              When I’m not coding, I’m playing football, fiddling with musical
              instruments, or binge watching sci-fi movies.
            </p>
          </div>
        </div>
        <div className="AboutMe-Container__image">
          <img src={Odizeey} alt="" className="AboutMe-Container__image" />
        </div>
      </div>
      <div className="email">
        <p className="email-p">odizeeplatform@gmail.com</p>
      </div>
    </AboutMe>
  );
};

const AboutMe = styled(motion.div)`
  padding: 3.5rem 7.7rem 0 7.7rem;
  height: 20%;
  overflow: hidden;

  @media screen and (max-width: 37.5em) {
    padding: 0 4rem;
  }
  .heading {
    display: flex;
    position: relative;
    font-size: 2.4rem;
    display: flex;
    margin-bottom: 4rem;
  }

  span {
    font-family: Courier New;
    color: #00b2ff;
    font-weight: normal;
  }
  hr {
    /* transform: rotate(90deg); */
    width: 27.6rem;
    height: 1px;
    /* position: absolute; */
    border: 1px solid #404040;
    margin-top: 3rem;
    margin-left: 2.4rem;

    @media screen and (max-width: 37.5em) {
      width: 10rem;
    }

    @media screen and (max-width: 28.2em) {
      width: 5rem;
    }
  }

  .email {
    position: absolute;
    left: 85vw;
    top: 70vh;
    transform: rotate(90deg);

    @media screen and (max-width: 80em) {
      left: 89vw;
    }

    @media screen and (max-width: 56.25em) {
      display: none;
    }
  }

  .email-p {
    position: relative;
    font-size: 1.5rem;
    animation-name: bounce-1;
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    font-family: "Courier New";
    font-weight: 500;
    opacity: 0.8;
  }

  .email-p::after {
    content: "";
    display: block;
    width: 9.5rem;
    height: 1px;
    position: absolute;
    background: #f2f2f2;
    left: 100%;
    top: 50%;
    opacity: 0.2;
    margin-left: 1.5rem;
  }

  @keyframes bounce-1 {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-40px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes bounce-2 {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(40px);
      transform: translateY(-40px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes bounce-3 {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-55px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes bounce-4 {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-65px);
      transform: translateY(40px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .AboutMe-Container {
    display: flex;
    /* align-items: center; */
    @media screen and (max-width: 56.25em) {
      flex-direction: column-reverse;
    }

    &__desc {
      margin-right: 10rem;

      @media screen and (max-width: 80em) {
        margin-right: 10rem;
      }
    }
    &__text {
      width: 72rem;
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 170.7%;

      @media screen and (max-width: 37.5em) {
        width: 60rem;
      }
    }

    &__p {
      margin-bottom: 4rem;

      @media screen and (max-width: 37.5em) {
        width: 55rem;
      }

      @media screen and (max-width: 28.2em) {
        width: 40rem;
      }
    }

    &__image {
      position: relative;
      top: 2rem;
      object-fit: cover;
      width: 37.2rem;
      height: 43.6rem;
      border-radius: 4px;

      @media screen and (max-width: 56.25em) {
        margin-bottom: 10rem;
      }
    }

    &__image::after {
      content: "";
      position: absolute;
      left: 0rem;
      top: 2rem;
      border-radius: 0.4rem;
      width: 37.2rem;
      height: 43.6rem;
      /* z-index: 1; */
      background: #00b2ff;
      opacity: 0.1;
    }

    &__image::before {
      content: "";
      position: absolute;
      left: 20px;
      top: 25px;
      border: 1px solid #00b2ff;
      border-radius: 0.4rem;
      width: 37.2rem;
      height: 43.6rem;
      z-index: -1;
    }
  }

  .Techs {
    margin-bottom: 4rem;

    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 170.7%;

      @media screen and (max-width: 28.2em) {
        width: 40rem;
      }
    }
    &__row-1,
    &__row-2 {
      display: flex;
      flex-wrap: wrap;

      p {
        font-family: Courier New;
        font-size: 1.4rem;
        line-height: 3.5rem;
        display: flex;
        justify-content: center;
        letter-spacing: 0.02rem;
        color: #f2f2f2;
        width: 10.7rem;
        border: 1px solid #00b2ff;
        box-sizing: border-box;
        border-radius: 0.8rem;
        margin: 1.6rem 4.8rem 0 0;
        opacity: 0.5;
      }
    }

    &__row-1 {
      margin-bottom: 3.4rem;
    }
  }
`;

export default About;
