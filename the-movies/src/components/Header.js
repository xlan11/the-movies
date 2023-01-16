import React from "react"

function Header() {
    return (
            <nav>
                <div id="logo">
                    <h2><sup>The</sup> <strong>Movies</strong></h2>
                </div>
                <div id="search">
                    <input type="text" placeholder="Search for a movie"/>
                </div>
            </nav>
    )
}



export default Header