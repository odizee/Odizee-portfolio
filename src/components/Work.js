import React from 'react';
import styled from 'styled-components';

//Images
import Rectangle48 from '../img/Rectangle48.png';
// import Rectangle50 from '../img/Rectangle50.png';
// import Rectangle51 from '../img/Rectangle51.png';
// import Rectangle52 from '../img/Rectangle52.png';
import git from '../img/Group 55.png';

const Work = () => {
    return (
        <Works>
            <div className="heading">
                <h1><span>01.</span> Some things I've built</h1>  
                <hr/>     
            </div> 
            <WorksList>
                <div className="worklist-1">
                    <img src={Rectangle48} alt="first" className="work-image"/>
                    <div className="details">
                        <h2>3k3 Consulting</h2>
                        <div className="tech">
                            <p>UI/UX</p>
                            <p>Redesign</p>
                            <p>UI/UX</p>
                            <img src={git} alt="" className="git-image"/>
                        </div>
                            <p className="work-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>             
                <div className="worklist-2">
                    <img src={Rectangle48} alt="first" className="work-image"/>
                    <div className="details">
                        <h2>Reimagine OD</h2>
                        <div className="tech">
                            <p>UI/UX</p>
                            <p>Redesign</p>
                            <p>UI/UX</p>
                            <img src={git} alt="" className="git-image"/>
                        </div>
                            <p className="work-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>             
                <div className="worklist-3">
                    <img src={Rectangle48} alt="first" className="work-image"/>
                    <div className="details">
                        <h2>Baby Ivy League</h2>
                        <div className="tech">
                            <p>UI/UX</p>
                            <p>Redesign</p>
                            <p>UI/UX</p>
                            <img src={git} alt="" className="git-image"/>
                        </div>
                            <p className="work-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>             
                <div className="worklist-4">
                    <img src={Rectangle48} alt="first" className="work-image"/>
                    <div className="details">
                        <h2>Bbros Capital</h2>
                        <div className="tech">
                            <p>UI/UX</p>
                            <p>Redesign</p>
                            <p>UI/UX</p>
                            <img src={git} alt="" className="git-image"/>
                        </div>
                            <p className="work-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>                    
            </WorksList>  
        </Works>
    )
}

const Works = styled.div`
    padding: 0 7.7rem;
    
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

const WorksList = styled.div`
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
            padding: 1.5rem 6.9rem 2rem 3rem;

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
        padding: 1.5rem .5rem 2rem 6.9rem;
        left: -4rem;

        @media screen and (max-width: 56.25em) {
                left: 0rem;
                width: 63.2rem;
                border-top: none;

        }

        @media screen and (max-width: 37.5em) {
                width: 55rem;
                padding: 1.5rem .5rem 2rem 3rem;

            }
        
        @media screen and (max-width: 28.2em) {
                width: 45rem;
                padding: 1.5rem .5rem 2rem 3rem;
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