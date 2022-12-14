import React from "react";
import './authorizationPage.css'

const AuthorizationPage = ({children}) => {
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

export default AuthorizationPage;