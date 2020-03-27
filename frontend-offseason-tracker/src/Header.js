import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <h1 className='header-title'><img className='header-logo' src="https://sportslogohistory.com/wp-content/uploads/2017/12/national_football_league.png" alt="NFL Logo"/>OFFSEASON TRACKER</h1>
            <nav>
                <a href="/home" className="nav-button">Home</a>
                <a href="/favorites" className="nav-button">My Teams</a>
            </nav>
        </div>
    )
}
