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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  padding: 20px;
  
  background-color: antiquewhite;
`