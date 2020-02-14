import React from 'react';

const person = (props) =>{ 
    
return (
<div>
<p>{props.children}</p>
    <p>I'm {props.name}a Person and I am {props.age} years old!</p>
</div>

)
};



export default person;