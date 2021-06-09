import React from 'react';
import loaderCSS from './Loader.module.css'

const Preloader = () => {
    return (
        <div className={loaderCSS.ldshourglass}></div>
    );
};

export default Preloader;
