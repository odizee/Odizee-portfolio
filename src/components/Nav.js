import React, {useState} from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

//Images
import leftarrow from '../img/leftarrow.png';
import rightarrow from '../img/rightarrow.png';

//F-A
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    const [click, setclick] = useState(false);

    const handleClick = () => setclick(!click);

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };

    return( 
    <StyledNav>
        <h1><Link to="/" id="logo">Odizee</Link></h1>
        <ul className={click ? "nav-menu active" :  "nav-menu " }>
            <li onClick={handleToggle}>
                <NavLink activeclassName="active" to="/work" onClick={handleClick}><span>1.</span> Work</NavLink>
            </li>
            <li onClick={handleToggle}> 
                <NavLink activeclassName="active" to="/about" onClick={handleClick}><span>2.</span> About</NavLink>
            </li>
            <li onClick={handleToggle}> 
                <NavLink activeclassName="active" to="/contact" onClick={handleClick}><span>3.</span> Contact</NavLink>
            </li>
        </ul>
        <div className="wrapper-menu nav-icon" onClick={handleClick}>
            {/* <FontAwesomeIcon icon={click ? faTimes : faBars} /> */}
            <div className={isActive ? "wrapper-menu" : "wrapper-menu open"} onClick={handleToggle}>
                <div class="line-menu half start" style={{        backgroundColor: click ? '#FFF' : '#00B2FF'
}}></div>
                <div class="line-menu" style={{        backgroundColor: click ? '#FFF' : '#00B2FF'
}}></div>
                <div class="line-menu half end" style={{        backgroundColor: click ? '#FFF' : '#00B2FF'
}}></div>
            </div>
            
        </div>
    </StyledNav>
    )
}

const StyledNav = styled.nav`
    /* position: absolute; */
    z-index:100;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem 0 11rem; 
    width: 100%;

    @media screen and (max-width: 37.5em) {
            padding: 0 5rem 0 6rem; 
        }

    #logo {
        position: relative;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 1.8rem;
        line-height: 170.7%;
        align-items: center;
        color: #00B2FF;

        ::after{
            content: "";
            display: block;
            width: 9.5rem;
            height: 10rem;
            position: absolute;
            background-image: url(${rightarrow});
            left: 100%;
            top: 18%;
            margin-left: 1.5rem;
            background-repeat: no-repeat;

            @media screen and (max-width: 37.5em) {
                left: 90%;
                top: 10%;
        }

        @media screen and (max-width: 28.2em) {
                left: 100%;
                top: -10%;
        }
            
        }
        ::before{
            content: "";
            display: block;
            width: 9.5rem;
            height: 10rem;
            position: absolute;
            background-image: url(${leftarrow});
            left: -70%;
            top: 18%;
            margin-left: 1.5rem;
            background-repeat: no-repeat;

            @media screen and (max-width: 37.5em) {
                left: -70%;
                top: 10%;
        }

        @media screen and (max-width: 28.2em) {
                left: -80%;
                top: -10%;
        }
            
        }
    }

    a {
        color: white;
        text-decoration: none;
        z-index: 100;


        span{
            color: #00B2FF;
        }
    }

    a.active{
            color: #F2F2F2;
            opacity: .7;

            
        }


    li {
        position: relative;
        margin-right: 8.4rem;
        color: #00B2FF;

        @media screen and (max-width: 56.25em) {
            padding: 2.5rem;
            width: 100%;
            text-align: center;
            margin-bottom: 5rem;
        }


        :after{
            content: "";
            display: block;
            width: 0;
            height: 3px;
            position: absolute;
            background: transparent;
            transition: width 0.7s, background-color 0.5s ease;
        }

        :hover:after{
            width: 110%;
            background: #FFF;

            @media screen and (max-width: 56.25em) {
                width: 110%;
            }
        }   
    }

    .nav-menu {
        font-family: Courier New;
        font-size: 1.8rem;
        line-height: 170.7%;
        display: flex;
        align-items: center;
        list-style-type: none;


        @media screen and (max-width: 56.25em) {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 120vh;
            font-size: 3.8rem;
            border-top: 1px solid #FFF;
            position: absolute;
            top: 0px;
            left: -110%;
            opacity: 1;
            z-index: 1;
            /* justify-content: center; */
            align-content: center;
            transition: all 0.5s ease-out;

        }

        @media screen and (max-width: 28.2em) {
            margin-top: -2rem;
            padding-top: 5rem;

        }
    }

    .nav-menu.active {

    @media screen and (max-width: 56.25em) {

        background: #00B2FF;
        left: 0px;
        opacity: 1;
        transition: all 0.5s ease-out;
        z-index: 1;
        }
    }

    .nav-icon {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 80%);
        font-size: 3rem;
        cursor: pointer;
        color: #00B2FF;

        

        @media screen and (max-width: 56.25em) {
            display: block;
            font-size: 4rem;
            position: relative;
            top: -3rem;
            left: 5rem;

    }

    }

    .wrapper-menu {
            width: 4rem;
            height: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            transition: transform 330ms ease-out;
            z-index: 10;
            }

            .wrapper-menu.open {
            transform: rotate(-45deg);  
            }

            .line-menu {
            background-color: #fff;
            border-radius: .5rem;
            width: 100%;
            height: .6rem;
            }

            .line-menu.half {
            width: 50%;
            }

            .line-menu.start {
            transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
            transform-origin: right;
            }

            .open .line-menu.start {
            transform: rotate(-90deg) translateX(3px);
            }

            .line-menu.end {
            align-self: flex-end;
            transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
            transform-origin: left;
            }

            .open .line-menu.end {
            transform: rotate(-90deg) translateX(-3px);
            }

`

export default Nav;