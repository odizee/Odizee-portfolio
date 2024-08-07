import React from "react";
import styled from "styled-components";

//Images
import royalti from "../img/royalti.png";
import zojapay from "../img/zojapay.png";
import chinedu from "../img/chinedu.png";

// import Rectangle50 from '../img/Rectangle50.png';
// import Rectangle51 from '../img/Rectangle51.png';
// import Rectangle52 from '../img/Rectangle52.png';
import git from "../img/Group 55.png";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Work = () => {
  return (
    <Works exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <div className="heading">
        <h1>
          <span>01.</span> Some things I've built
        </h1>
        <hr />
      </div>
      <WorksList>
        <div className="worklist-1">
          <img src={royalti} alt="first" className="work-image" />
          <div className="details">
            <h2>
              <a href="https://royalti.io/" target="blank">
                Royalti.io
              </a>
            </h2>
            <div className="tech">
              <p>React</p>
              <p>Tailwind</p>
              <p>Redux</p>
              <p>Apex Chart</p>
              <img src={git} alt="" className="git-image" />
            </div>
            <p className="work-p">
              A web app that allows you expertly manage catalogues, contracts,
              royalties, and accounting in One Place.
            </p>
          </div>
        </div>
        <div className="worklist-2">
          <img src={zojapay} alt="first" className="work-image" />
          <div className="details">
            <h2>
              <a href="https://zojapay.com/">Zojapay</a>
            </h2>
            <div className="tech">
              <p>React</p>
              <p>Redux</p>
              <p>Tailwind</p>
              <p>Apex Chart</p>
              <img src={git} alt="" className="git-image" />
            </div>
            <p className="work-p">
              Zojapay is a fintech solution, with it's main aim to link cash
              providers with cash requester seemlesly. My role was to work on
              the admin dashboard
            </p>
          </div>
        </div>
        <div className="worklist-3">
          <img src={chinedu} alt="first" className="work-image" />
          <div className="details">
            <h2>
              <a href="https://chinedu.design">chinedu.design Portfolio</a>
            </h2>
            <div className="tech">
              <p>React</p>
              <p>Next Js</p>
              <p>Scss</p>
              <p>Framer motion</p>
              <img src={git} alt="" className="git-image" />
            </div>
            <p className="work-p">
              Chinedu.design is a portfolio website built for a UI/UX designer
              using React (Next Js)
            </p>
          </div>
        </div>

        {/* <div className="worklist-5">
          <img
            src="https://res.cloudinary.com/odizee/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1638859915/screencapture-football-squad-web-app-2021-12-06-19_43_11_iw7ae6.png"
            alt="football-squad"
            className="work-image"
          />
          <div className="details">
            <h2>
              <a href="https://football-squad.web.app/">Football Squad</a>
            </h2>
            <div className="tech">
              <p>React</p>
              <p>Redux</p>
              <p>Styled Component</p>
              <a
                href="https://github.com/odizee/football-squad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="" className="git-image" />
              </a>
            </div>
            <p className="work-p">
              Football Squad is an app that shows the squad details of the top 5
              football leagues in Europe. The website was built using React,
              Redux, and Styled Components for styling
            </p>
          </div>
        </div> */}
      </WorksList>
    </Works>
  );
};

const Works = styled(motion.div)`
  padding: 3.5rem 7.7rem 0 7.7rem;

  @media screen and (max-width: 37.5em) {
    padding: 0 3rem;
  }

  .heading {
    display: flex;
    position: relative;
    font-size: 2.4rem;

    @media screen and (max-width: 56.25em) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 37.5em) {
      /* text-align: center; */
    }

    @media screen and (max-width: 28.2em) {
      font-size: 1.5rem;
    }
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

    @media screen and (max-width: 56.25em) {
      width: 20.6rem;
      margin-top: 2.5rem;
    }

    @media screen and (max-width: 37.5em) {
      width: 5rem;
    }

    @media screen and (max-width: 28.2em) {
      margin-top: 2rem;
    }
  }
`;

const WorksList = styled(motion.div)`
  padding: 5.1rem 11rem;
  /* display: flex; */
  /* align-items: center; */

  @media screen and (max-width: 80em) {
    padding: 5.1rem 5rem;
  }

  @media screen and (max-width: 28.2em) {
  }

  [class*="worklist-"] {
    display: flex;
    align-items: center;
    margin-bottom: 7.3rem;

    @media screen and (max-width: 56.25em) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .worklist-2,
  .worklist-4 {
    flex-direction: row-reverse;
    @media screen and (max-width: 56.25em) {
      flex-direction: column;
      justify-content: center;
    }

    .details {
      left: 6rem;
      padding: 1.5rem 6.9rem 8.5rem 3rem;

      @media screen and (max-width: 56.25em) {
        left: 0rem;
        width: 63.2rem;
      }

      @media screen and (max-width: 37.5em) {
        width: 55rem;
      }
      @media screen and (max-width: 28.2em) {
        width: 45rem;
      }
    }
  }

  .work-image {
    width: 63.2rem;
    height: 41.6rem;
    object-fit: cover;
    border-radius: 1rem;

    @media screen and (max-width: 80em) {
      width: 60rem;
    }

    @media screen and (max-width: 37.5em) {
      width: 55rem;
    }

    @media screen and (max-width: 28.2em) {
      width: 45rem;
      height: 30.6rem;
    }
  }
  .git-image {
    width: 3.5rem;
    height: 3.5rem;
    margin-left: 0.8rem;
  }

  .details {
    position: relative;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1.5rem 0.5rem 8rem 6.9rem;
    left: -4rem;

    a {
      color: #ffffff;
      text-decoration: none;
    }

    @media screen and (max-width: 56.25em) {
      left: 0rem;
      width: 63.2rem;
      border-top: none;
    }

    @media screen and (max-width: 37.5em) {
      width: 55rem;
      padding: 1.5rem 0.5rem 10rem 3rem;
    }

    @media screen and (max-width: 28.2em) {
      width: 45rem;
      padding: 1.5rem 0.5rem 8rem 3rem;
    }

    h2 {
      font-weight: bold;
      font-size: 2.8rem;
      line-height: 3.5rem;
      letter-spacing: 0.02rem;
      margin-bottom: 2rem;
      text-decoration: underline double #fff;
    }

    .work-p {
      width: 50.2rem;
      height: 7rem;
      font-size: 1.8rem;
      line-height: 3.5rem;
      letter-spacing: 0.02rem;
      margin-bottom: 2rem;

      @media screen and (max-width: 28.2em) {
        width: 40rem;
      }
    }

    .tech {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      p {
        border: 0.1rem solid #a6a6a6;
        border-radius: 4px;
        padding: 0.9rem 2.9rem 0.9rem 2.9rem;
        margin-right: 1.3rem;
      }
    }
  }
`;
export default Work;
