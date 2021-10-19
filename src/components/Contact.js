import React from 'react';
import { Link } from 'react-router-dom';

//Styled
import styled from "styled-components";
import HomeSpecific from "./HomeSpecific";

//Image
import git from '../img/Group 55.png';
import gmail from '../img/gmail.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';

//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from "../Animation";

const Contact = () => {
    return (
        <ConatctDiv exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <div className="heading">
                <h1><span>02.</span> Get In Touch</h1>  
                <hr/>     
            </div> 
            <div className="container-1">
                <p>I’m interested and available to talk about and work on your project, on a freelance and/or full-time basis. <a href="odizeeplatform@gmail.com">Send me a mail.</a></p>
            </div>
            <div className="container-2">
                <p>You can also connect with me on social media.</p>
                <hr/>
                <div>
                    <a href="https://github.com/odizee" target="_blank" rel="noopener noreferrer"><img src={git} alt=""/></a>
                    <a href="mailto: odizeeplatform@gmail.com"><img src={gmail} alt=""/></a>
                    <a href="https://www.linkedin.com/in/odiri-ighogboja-a187b5158/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""/></a>
                    <a href="https://twitter.com/ighotrix" target="_blank" rel="noopener noreferrer"><img src={twitter} alt=""/></a>
                </div>
            </div>
            <div className="container-3">
                <p>Odiri Ighogboja © 2021 All Rights Reserved</p>
                <p>Designed by<a href="">Dera</a></p>
            </div>
        </ConatctDiv>
    )
};

//Styled Components
const ConatctDiv = styled(motion.div)`
    overflow: hidden;
    padding: 3.5rem 7.7rem 0 7.7rem;

    @media screen and (max-width: 37.5em) {
        padding: 0 3rem;
    }

    .heading{
        display: flex;
        position: relative;
        font-size: 2.4rem;
        display: flex;
        margin-bottom: 0rem;

        @media screen and (max-width: 28.2em) {
            /* font-size: 2rem; */
    }


    }

    span{
        font-family: Courier New;
        color: #00B2FF;
        font-weight: normal;
    }
    hr{
        /* transform: rotate(90deg); */
        width: 27.6rem;
        height: 1px;
        /* position: absolute; */
        border: 1px solid #404040;;
        margin-top: 3rem;
        margin-left: 2.4rem;

        @media screen and (max-width: 37.5em) {
            width: 5rem;
        }

        @media screen and (max-width: 28.2em) {
            display: none;
    }

    }

    .container-1{
        display: flex;
        padding-top: 8rem;
        p{
            width: 68.9rem;
            font-style: normal;
            font-weight: normal;
            font-size: 2.4rem;
            line-height: 170.7%;
            margin-bottom: 2.4rem;

            a{
                color: #00B2FF;
            }

            @media screen and (max-width: 37.5em) {
            /* width: rem; */

        }
        }
    }

    .container-2{
        display: flex;
        align-items: center;

        @media screen and (max-width: 37.5em) {
            /* flex-direction: column; */
            display: block;
        }

        p{
            width: 51.6rem;
            font-size: 2.4rem;
            line-height: 170.7%;

            @media screen and (max-width: 37.5em) {
                margin-bottom: 3rem;
                width: 40rem;
            }
        }

        hr{
            margin: 0 4.8rem 0 3.8rem;
        }

        img{
            margin-right: 3.2rem;
        }
    }

    .container-3{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 7.4rem;
        padding-top: 15rem;
        
        p{
            width: 281px;
            font-size: 14px;
            line-height: 35px;
            display: flex;
            justify-content: center;
            text-align: center;
            letter-spacing: 0.2px;
            color: #FFFFFF;

            a{
                padding-left: 0.5rem;
                color: #00B2FF;
            }
        }
    }
`

export default Contact;