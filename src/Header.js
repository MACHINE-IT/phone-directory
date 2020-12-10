import React from 'react';

const Header = function(){
    const headerStyle = {textAlign: 'center', padding: 20, background: 'black', color: 'white', textTransform: 'uppercase'};
    return(
        <div className="header" style={headerStyle}>
            Phone Directory
        </div>
    )
}

export default Header;