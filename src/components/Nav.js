import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Images
import leftarrow from '../img/leftarrow.png';
import rightarrow from '../img/rightarrow.png';



const Nav = () => {
    return( 
    <StyledNav>
        <h1><Link to="/" id="logo">Odizee</Link></h1>
        <ul>
            <li>
                <Link to="/work"><span>1.</span> Work</Link>
            </li>
            <li>
                <Link to="/about"><span>2.</span> About</Link>
            </li>
            <li>
                <Link to="/contact"><span>3.</span> Contact</Link>
            </li>
        </ul>
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
                left: 80%;
                top: 10%;
        }

        @media screen and (max-width: 28.2em) {
                left: 90%;
                top: 0%;
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
                left: -65%;
                top: 10%;
        }

        @media screen and (max-width: 28.2em) {
                left: -70%;
                top: 0%;
        }
            
        }
    }

    a {
        color: white;
        text-decoration: none;

        span{
            color: #00B2FF;
        }
    }

    li {
        position: relative;
        margin-right: 8.4rem;
    }
    
    ul {
        font-family: Courier New;
        font-size: 1.8rem;
        line-height: 170.7%;
        display: flex;
        align-items: center;
        list-style-type: none;
    }
`

export default Nav;