import React, { useEffect, useState } from 'react';
import { Work } from './Work';
import styled from 'styled-components';

const WorkDetail = () => {
    const [works, setWorks] = useState(Work);
    const [work, setWork] = useState(null);

    //UseEffect
console.log(work)
    return(
        <Details>
            <Headline>
                <h2>{work.title}</h2>
            </Headline>
        </Details>
    )

};

const Details = styled.div`

`;

const Headline = styled.div`

`;

export default WorkDetail