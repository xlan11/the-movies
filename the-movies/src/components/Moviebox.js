import React from "react"

export default function Moviebox(props) {
    const styles = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w300${props.backgroundImage})`,
        backgroundSize: 'cover', 
    }


    
    return (
        <div
            className="movie_details_box" 
            style={styles}
            >
        </div>        
                    
    )
}