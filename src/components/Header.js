import React from 'react';
import sun from '../img/sun.svg';
import moon from '../img/moon.png';


function Header() {
    const date = new Date();
    const hour = date.getHours();
    let dayTime, logo, logoCss;

    if (hour < 12) {
        dayTime = "Morning";
        logo = sun;
        logoCss = 'sunRise-logo';
    } else if (hour > 12 && hour < 17) {
        dayTime = "Afternoon";
        logo = sun;
        logoCss = 'sun-logo';
    } else {
        dayTime = "Night";
        logo = moon;
        logoCss = 'moon-logo';
    }

    return (
        <header>
            <div className='day'>
                <p>Good {dayTime}</p>
                <img src={logo} className={logoCss} alt="logo" />
            </div>
            <p>Daily Routine Checklist</p>
        </header>
    );
}

export default Header;