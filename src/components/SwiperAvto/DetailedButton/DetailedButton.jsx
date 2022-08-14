import React from "react";
import { NavLink } from "react-router-dom";
import './detailedButton.css'

const DetailedButton = (proos) =>  {
    return (
        <>
        <NavLink to={`${proos.link}`} className="swiper__btn">ПОДРОБНЕЕ</NavLink>
        </>
    )
}

export default DetailedButton;