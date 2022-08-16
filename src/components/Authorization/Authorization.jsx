import React from "react";
import './authorization.css'

const Authorization = ({children}) => {
    return (
        <>
        <React.Fragment>
            <section className="register">
                <div className="register__images"></div>
                {children}
            </section>
        </React.Fragment>
        </>
    )
}

export default Authorization;