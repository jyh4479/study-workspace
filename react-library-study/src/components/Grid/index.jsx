import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {

    const {children} = props

    return (
        <Box>
            {children}
        </Box>
    )
}

export default Grid;

const Box = styled.div`
`