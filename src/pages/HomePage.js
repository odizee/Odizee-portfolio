import React from 'react';
import Home from '../components/Home';

//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from "../Animation";

const HomePage = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Home />
        </motion.div>
    )
}

export default HomePage;