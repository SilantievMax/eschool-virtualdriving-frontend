import React from 'react';
import './backgroundForContents.css'

const Background = ({children}) => {
    return (
        <>
        <React.Fragment>
            <section className="background">
                {children}
            </section>
        </React.Fragment>
        </>
    )
}

export default Background;