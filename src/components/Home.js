import React from "react";
import { Link, NavLink } from "react-router-dom";

//Styled
import styled from "styled-components";
import HomeSpecific from "./HomeSpecific";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <HomeSpecific />
      <Lines className="hr-lines">
        <hr className="hr-1" />
        <hr className="hr-2" />
        <hr className="hr-3" />
      </Lines>
      <HomeDiv className="home">
        <div className="description">
          <Title className="title">
            <div className="hide">
              <div className="heading-one">
                <h2>Hi, my name is</h2>
              </div>
            </div>
            <div className="hide">
              <div className="heading-two">
                <h2>Odiri Ighogboja</h2>
              </div>
            </div>
            <div className="hide">
              <div className="heading-three">
                <h2>Software Engineer</h2>
              </div>
            </div>
          </Title>
          <p>
            I’m a solutions driven Software engineer. I specialize in building
            interactive and functional interfaces across platforms.
          </p>
          <motion.div
            className="button-container"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1 }}
          >
            <Link to="/work">
              {" "}
              <button>View Projects </button>
            </Link>
            <button className="button-two"></button>
          </motion.div>
          <div className="email">
            <p className="email-p">odizeeplatform@gmail.com</p>
          </div>
        </div>
      </HomeDiv>
    </div>
  );
};

//Styled Components
const Lines = styled.div`
  position: relative;
  transform: rotate(90deg);
  padding: 0;
  margin: 0;
  @media screen and (max-width: 56.25em) {
    transform: rotate(-90deg);
  }

  hr {
    position: absolute;
    height: 1px;
    right: 10rem;
    width: 120rem;
    background-color: #262626;
    border: none;

    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    @media screen and (max-width: 56.25em) {
      height: 1px;
      width: 115vh;
    }
  }
  .hr-1 {
    transform-origin: bottom;
    animation-name: bounce-2;
    top: 59rem;
    @media screen and (max-width: 56.25em) {
      top: 35rem;
      width: 125vh;
    }

    @media screen and (max-width: 37.5em) {
      top: 20rem;
    }
  }

  .hr-2 {
    animation-name: bounce-3;
    top: 7rem;

    @media screen and (max-width: 56.25em) {
      top: 0rem;
    }

    @media screen and (max-width: 37.5em) {
      width: 99vh;
    }
  }

  .hr-3 {
    animation-name: bounce-4;
    top: -52rem;

    @media screen and (max-width: 56.25em) {
      top: -35rem;
      width: 125vh;
    }

    @media screen and (max-width: 37.5em) {
      top: -20rem;
    }
  }
`;
const HomeDiv = styled.div`
  min-height: 90vh;
  display: flex;
  padding: 5rem 9.2rem 0 9.2rem;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 56.25em) {
    display: flex;
    min-height: 90vh;
    padding: 5rem 5rem 0 5rem;
    position: relative;
    /* overflow: hidden; */
  }

  @media screen and (max-width: 28.2em) {
    padding: 3rem 3rem 0 3rem;
  }

  .description {
    position: relative;
  }

  p {
    @media screen and (max-width: 56.25em) {
      margin-bottom: 10.3rem;
      width: 60.4rem;
    }

    @media screen and (max-width: 37.5em) {
      width: 45rem;
      margin-bottom: 7.3rem;
    }
    width: 79.4rem;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 170.7%;
    color: #f2f2f2;
    margin-bottom: 7.3rem;
  }

  .button-container {
    position: relative;
  }

  button {
    position: relative;
    width: 20rem;
    height: 6rem;
    border: 0.1rem solid #00b2ff;
    box-sizing: border-box;
    border-radius: 0.4rem;

    font-family: "Courier New";
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 170.7%;
    align-items: center;

    color: #00b2ff;

    &:hover {
      color: #fff;
    }
  }

  .button-two {
    position: absolute;
    left: 1rem;
    bottom: -0.8rem;
    width: 18.1rem;
    height: 6rem;
    border: 0.1rem solid #00b2ff;
    box-sizing: border-box;
    border-radius: 0.4rem;
    padding: 0 8.5rem;
    z-index: -10;

    &:hover {
      background-color: transparent;
    }
  }

  .email {
    position: absolute;
    left: 60vw;
    top: 90vh;
    transform: rotate(90deg);
    @media screen and (max-width: 56.25em) {
      left: 40vw;
      top: 60vh;
    }

    @media screen and (max-width: 37.5em) {
      left: 25rem;
      top: 65vh;
    }

    @media screen and (max-width: 28.2em) {
      left: 22rem;
    }

    @media screen and (max-width: 22.5em) {
      left: 21rem;
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
    font-weight: 400;
    opacity: 0.8;
    line-height: 170.7%;
  }

  .email-p::after {
    content: "";
    display: block;
    width: 8.5rem;
    height: 2px;
    position: absolute;
    background: #f2f2f2;
    left: 30%;
    top: 50%;
    opacity: 0.3;

    @media screen and (max-width: 37.5em) {
      left: 50%;
    }
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
`;

const Title = styled.div`
  margin-bottom: 4rem;
  .heading-one {
    @media screen and (max-width: 56.25em) {
      margin-bottom: 3rem;
    }
    @media screen and (max-width: 37.5em) {
      margin-bottom: 2rem;
    }

    h2 {
      /* width: 20.2rem; */
      font-family: "Courier New";
      font-style: normal;
      font-weight: normal;
      font-size: 2.2rem;
      line-height: 170.7%;
      color: #00b2ff;
    }
  }

  .heading-two {
    @media screen and (max-width: 37.5em) {
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 8rem;
      font-family: "DM Sans";
      font-style: normal;
      font-weight: bold;
      font-size: 7rem;
      line-height: 170.7%;
      color: #f2f2f2;

      @media screen and (max-width: 28.2em) {
        /* font-size: 6rem; */
      }

      @media screen and (max-height: 40em) {
        font-size: 6rem;
      }
    }
  }

  .heading-three {
    @media screen and (max-width: 56.25em) {
      margin-bottom: 10rem;
    }

    @media screen and (max-width: 37.5em) {
      margin-bottom: 5rem;
    }
    h2 {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 4.5rem;
      line-height: 7rem;
      letter-spacing: 0.04em;

      color: #a6a6a6;

      @media screen and (max-width: 28.2em) {
        font-size: 5rem;
      }
    }
  }
`;

export default Home;
