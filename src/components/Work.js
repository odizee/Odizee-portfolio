import React from 'react';
import styled from 'styled-components';

//Images
import _3k3 from '../img/3k3.png';
import Reimagine from '../img/reimagine.png';
import babyivy from '../img/baby-ivy.png';
import bbros from '../img/bbros.png';

// import Rectangle50 from '../img/Rectangle50.png';
// import Rectangle51 from '../img/Rectangle51.png';
// import Rectangle52 from '../img/Rectangle52.png';
import git from '../img/Group 55.png';

//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from "../Animation";

const Work = () => {
    return (
        <Works exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <div className="heading">
                <h1><span>01.</span> Some things I've built</h1>  
                <hr/>     
            </div> 
            <WorksList>
                <div className="worklist-1">
                    <img src={_3k3} alt="first" className="work-image"/>
                    <div className="details">
                        <h2><a href="https://3k3online.com/">3k3 Consulting</a></h2>
                        <div className="tech">
                            <p>Wordpress</p>
                            <p>Elementor</p>
                            <p>UI/UX</p>
                            <img src={git} alt="" className="git-image"/>
                        </div>
                            <p className="work-p">3k3 is a business consulting firm. The website was built using Wordpress, Elementor, and custom CSS</p>
                    </div>
                </div>             
                <div className="worklist-2">
                    <img src={Reimagine} alt="first" className="work-image"/>
                    <div className="details">
                        <h2><a href="https://reimagineod.org/">Reimagine OD</a></h2>
                        <div className="tech">
                            <p>WordPress</p>
                            <p>Elementor</p>
                            <p>UI/UX</p>
                            <img src={git} alt="" className="git-image"/>
                        </div>
                            <p className="work-p">ReimagineOD is a business consulting firm. The website was built using Wordpress, Elementor, and custom CSS</p>
                    </div>
                </div>             
                <div className="worklist-3">
                    <img src={babyivy} alt="first" className="work-image"/>
                    <div className="details">
                        <h2><a href="https://babyivyleague.com/download/">Baby Ivy League</a></h2>
                        <div className="tech">
                            <p>WordPress</p>
                            <p>Elementor</p>
                            <p>ConvertKit</p>
                            <img src={git} alt="" className="git-image"/>
                        </div>
                            <p className="work-p">Baby Ivy Leagues is a child care organisation. This landing page was designed using Wordpress, Elementor, and custom CSS. Auto subscription was done using Convertkit</p>
                    </div>
                </div>             
                <div className="worklist-4">
                    <img src={bbros} alt="first" className="work-image"/>
                    <div className="details">
                        <h2><a href="http://bbroscapital.com/">Bbros Capital</a></h2>
                        <div className="tech">
                            <p>WordPress</p>
                            <p>Elementor</p>
                            <p>CSS</p>
                            <img src={git} alt="" className="git-image"/>
                        </div>
                            <p className="work-p">Bbros Capital is a global strategic management and
                            development consultancy. The website was built using Wordpress, Elementor, and custom CSS</p>
                    </div>
                </div>                    
            </WorksList>  
        </Works>
    )
}

const Works = styled(motion.div)`
    padding: 3.5rem 7.7rem 0 7.7rem;
    
    @media screen and (max-width: 37.5em) {
        padding: 0 3rem;
    }

    .heading{
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

    [class*="worklist-"]{
        display: flex;
        align-items: center;
        margin-bottom: 7.3rem;

        @media screen and (max-width: 56.25em) {
            flex-direction: column;
            justify-content: center;
        }

    }

    .worklist-2, .worklist-4 {
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

    .work-image{
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
    .git-image{
        width: 3.5rem;
        height: 3.5rem;
        margin-left: .8rem;
        }

    .details{
        position: relative;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 1.5rem .5rem 8rem 6.9rem;
        left: -4rem;

        a {
            color: #FFFFFF;
            text-decoration: none;
        }

        @media screen and (max-width: 56.25em) {
                left: 0rem;
                width: 63.2rem;
                border-top: none;

        }

        @media screen and (max-width: 37.5em) {
                width: 55rem;
                padding: 1.5rem .5rem 10rem 3rem;

            }
        
        @media screen and (max-width: 28.2em) {
                width: 45rem;
                padding: 1.5rem .5rem 8rem 3rem;
        }
        
        h2{
        font-weight: bold;
        font-size: 2.8rem;
        line-height: 3.5rem;
        letter-spacing: 0.02rem;
        margin-bottom: 2rem;
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

        .tech{
            display: flex;
            align-items: center;
            margin-bottom: 2rem;

            p {
                border: 0.1rem solid #A6A6A6;
                border-radius: 4px;
                padding: .9rem 2.9rem .9rem 2.9rem;
                margin-right: 1.3rem;
            }
        }
    }
    

`;
export default Work;