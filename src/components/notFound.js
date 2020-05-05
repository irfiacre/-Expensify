import React from 'react';
import {Link} from 'react-router-dom';
const error = ()=>(
    <div>
        <p>404!</p>
        <p><b><i>PAGE NOT FOUND</i></b></p>
        <Link to="/">Go Home</Link>
    </div>
);

export default error;