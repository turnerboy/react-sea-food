import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header className="top">
                <h1>React
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">The</span>
                </span> food
                </h1>
                <h3 className="tagline">
                    <span>Fresh Daily</span>
                </h3>
            </header>
        )
    }
}

export default Header