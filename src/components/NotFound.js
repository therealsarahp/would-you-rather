import React from "react";
import {Link} from "react-router-dom";

export default function NotFound (){
    return(
        <div>
            <h1 className='center'>
                404 Page Not Found
            </h1>
            <Link to='/'> Go To Dash...</Link>
        </div>
    )
}