import React from 'react';
import styled from 'styled-components';

//Images
import git from '../img/Group 55.png';
import Odizeey from '../img/Odizeey.png';


const About = () => {
    return (
        <AboutMe>
            <div className="heading">
                <h1><span>02.</span> About Me</h1>  
                <hr/>     
            </div> 
            <div className="AboutMe-Container">
                <div className="AboutMe-Container__desc">
                    <div className="AboutMe-Container__text">
                        <p className="AboutMe-Container__p">
                            Hi there! I’m a front-end web developer based in Lagos, Nigeria and I love to build things for the web. 
                        </p> 
                        <p className="AboutMe-Container__p">
                            I utilize React and Wordpress to deliver client ready apps and websites. My goal? To contribute my quota in making the internet a beautiful, interactive ecosystem. 
                        </p>                        

                        <div className="Techs">
                        <h4>
                            These are some of the technlogies I’ve been working with: 
                        </h4>
                            <div className="Techs__row-1">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>ReactJs</p>
                                <p>Wordpress</p>
                                <p>Git</p>
                                <p>Netlify</p>
                                <p>Elementor</p>
                                <p>SASS</p>
                            </div>
                        </div> 
                        <p className="AboutMe-Container__p">
                            When I’m not coding, I’m playing football, fiddling with musical instruments, or binge watching sci-fi movies.
                        </p>       
                    </div>
                    
                </div>
                <div className="AboutMe-Container__image">
                        <img src={Odizeey} alt="" className="AboutMe-Container__image"/>
                </div>

                
            </div>
            <div className="email">
                    <p className="email-p">odizeeplatform@gmail.com</p>
            </div>
        </AboutMe>
    )
}

const AboutMe = styled.div`
    padding: 0 7.7rem;
    
    @media screen and (max-width: 37.5em) {
        padding: 0 4rem;
    }
    .heading{
        display: flex;
        position: relative;
        font-size: 2.4rem;
        display: flex;
        margin-bottom: 4rem;

        
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
            width: 10rem;
        }

        @media screen and (max-width: 28.2em) {
            width: 5rem;
        }
    }

    .email{
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

    .email-p{
        position: relative;
        font-size: 1.5rem;
        animation-name: bounce-1;
        animation-timing-function: ease;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        font-family: "Courier New";
        font-weight: 500;
        opacity: .8;

    }

    .email-p::after{
        content: "";
        display: block;
        width: 9.5rem;
        height: 1px;
        position: absolute;
        background: #F2F2F2;
        left: 100%;
        top: 50%;
        opacity: .2;
        margin-left: 1.5rem;
        

    }

    @keyframes bounce-1 {
        0%   { transform: translateX(0); }
        50%  { transform: translateX(-40px);}
        100% { transform: translateX(0) }
    }
    @keyframes bounce-2 {
        0%   { transform: translateX(0); }
        50%  { transform: translateX(40px);
            transform: translateY(-40px);}
        100% { transform: translateX(0) }
    }
    @keyframes bounce-3 {
        0%   { transform: translateX(0); }
        50%  { transform: translateX(-55px); }
        100% { transform: translateX(0) }
    }
    @keyframes bounce-4 {
        0%   { transform: translateX(0); }
        50%  { transform: translateX(-65px); 
            transform: translateY(40px);}
        100% { transform: translateX(0) }
    }

    .AboutMe-Container{
        display: flex;
        /* align-items: center; */
        @media screen and (max-width: 56.25em) {
            flex-direction: column-reverse;
        }
        

        &__desc{
            margin-right: 15rem;

            @media screen and (max-width: 80em) {
                margin-right: 10rem
            }

        }
        &__text{
            width: 72rem;
            font-style: normal;
            font-weight: normal;
            font-size: 2rem;
            line-height: 170.7%;

            @media screen and (max-width: 37.5em) {
                width: 60rem;
            }
        }
        
        &__p{
            margin-bottom: 4rem;

            @media screen and (max-width: 37.5em) {
                width: 55rem;
            }

            @media screen and (max-width: 28.2em) {
                width: 45rem
            }
        }

        &__image{
            position: relative;
            top: 2rem;
            width: 37.2rem;
            height: 43.6rem;

            @media screen and (max-width: 56.25em) {
                margin-bottom: 10rem;
            }
        }

        &__image::after{
            content: "";
            position: absolute;
            left: 0rem;
            top: 2rem;
            border-radius: .4rem; 
            width: 37.2rem;
            height: 43.6rem;
            z-index: 1;
            background: #00B2FF;
            opacity: 0.1;   
        }

        &__image::before{
            content: "";
            position: absolute;
            left: 20px;
            top: 25px;
            border: 1px solid #00B2FF;
            border-radius: .4rem; 
            width: 37.2rem;
            height: 43.6rem;
            z-index: -1
        }



    }

    .Techs{
        margin-bottom: 4rem;

        h4{
            font-style: normal;
            font-weight: normal;
            font-size: 2rem;
            line-height: 170.7%;

            @media screen and (max-width: 28.2em) {
                width: 45rem
            }
        }
        &__row-1, &__row-2{
            display: flex;
            flex-wrap: wrap;

            p{
                font-family: Courier New;
                font-size: 1.4rem;
                line-height: 3.5rem;
                display: flex;
                justify-content: center;
                letter-spacing: 0.02rem;
                color: #F2F2F2;
                width: 10.7rem;
                border: 1px solid #00B2FF;
                box-sizing: border-box;
                border-radius: .8rem;
                margin: 1.6rem 4.8rem 0 0;
                opacity: .5;
            }
        }

        &__row-1{
            margin-bottom: 3.4rem;
        }

    }
`;

export default About;