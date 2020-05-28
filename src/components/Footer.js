import React from 'react';

function Footer() {
    const date = new Date();
    const d = date.getDate(); 
    const m = date.getMonth(); 
    const y = date.getFullYear(); 
    const h = date.getHours();
    const mi = date.getMinutes();
    return(
        <footer>
            <p>Date: {`${d}/${m}/${y}`} &nbsp;&nbsp;&nbsp; Time: {h}:{mi}</p>
        </footer>
    );
}

export default Footer;