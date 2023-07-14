import React  from 'react';
const Container = ({children}) =>{


    return (
<div style={CONTAINER_STYLE}>
{children}
</div>
    )
}

export default Container;

const CONTAINER_STYLE= {
maxWidth:'960px',
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
padding:'20px 40px'
}