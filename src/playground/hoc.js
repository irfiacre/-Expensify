//  =========== HIGHER ORDER COMPONENT: A component that renders another component. 
console.log('=========== HIGHER ORDER COMPONENT ===========');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
        <div> 
         <h1> The info </h1>
         <p>The info is: { props.info } </p>
        </div>
);

const adminWarning =(WrappedComponent)=>{
    return (props)=>(
        <div>
            <h4>This is only private information, please do not share</h4>
            <WrappedComponent { ...props }/>
        </div>
    )
};

const requireAuth = ( WrappedComponent ) =>{
    return (props)=>(
        <div>
            { props.auth ? (< WrappedComponent { ...props } />) : (<h1> Authentication Error </h1>)  }
        </div>
    );
}

// const AdminInfo = adminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render( < AuthInfo auth = { true } info='These guys are making noise.' />, document.getElementById('app') );